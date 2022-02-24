(ns ^:no-doc blah.impl
  "The implementation details of blah can be broken down into four concepts:
   
   1. Inputs
   2. Streams
   3. Transports
   4. Sessions
   
   They feed into one another: Input -> Stream -> Transport -> Session
   
   Inputs are audio inputs specifically. In the land of JavaScript they are represented as \"devices\" returned
   by navigator.mediaDevices.enumerarteDevices()
   
   Streams represent a js MediaStream that is the result of asking a user for permission to gather audio on an Input.
   
   Transports are mechanisms for doing something with the underlying MediaStream. It facilitates getting audio data out of
   a Stream and into a usable format. For now this is backed by an audio worklet that transports audio data over a port via postMessage(),
   but it could also support something like the MediaStream Recording API if realtime access to audio data isn't a concern.
   
   Finally, Sessions are used to glue all these concepts into a single point. It represents the act of asking for permission to create a Stream
   backed by a Input then consuming that data over a Transport. All data from the Transport can be accessed over a Session using core.async mechanics."
  (:require [blah.transforms :as transforms]
            [cljs.core.async :refer [chan put! go go-loop <! >! close!]]
            [cljs.core.async.impl.protocols :as async.proto]))

(def media-devices
  (.. js/navigator -mediaDevices))

(defn stop-audio-tracks
  [media-stream]
  (doseq [track (.getAudioTracks media-stream)]
    (.stop track)))

;;; Inputs

(defn info->input
  [info]
  {:device-id (.-deviceId info)
   :group-id  (.-groupId info)
   :kind      (.-kind info)
   :label     (.-label info)})

(defn input->constraint
  [input]
  (if (some? input)
    #js {:audio #js {:deviceId (:device-id input)}}
    #js {:audio true}))

(defn connect-input
  "Return a promise for getting user media for the given audio input"
  [input]
  (let [constraint (input->constraint input)]
    (.getUserMedia media-devices constraint)))

(defn query-inputs
  [fn-1]
  (let [*prom (.enumerateDevices media-devices)]
    (-> *prom
        (.then (fn [device-infos]
                 (->> device-infos
                      (array-seq)
                      (map info->input)
                      (filter #(= "audioinput" (:kind %)))
                      fn-1))))))

(defn input-ch []
  (let [signal   (chan 1)
        data     (chan 1)
        listener #(put! signal :ready)]
    (.addEventListener media-devices "devicechange" listener)
    (query-inputs #(put! data %))
    (go-loop []
      (when (<! signal)
        (query-inputs (fn [inputs]
                        (when-not (put! data inputs)
                          (close! signal)
                          (.removeEventListener media-devices "devicechange" listener))))
        (recur)))
    data))

;;; Streams

(defn stream-ch
  [input]
  (let [stream     (chan 1)
        *promise   (connect-input input)]
    (-> *promise
        (.then #(put! stream [true %]))
        (.catch #(put! stream [false %])))
    stream))

;;; Transport

; Creating a URL via a Blob of JavaScript seemed preferable to expecting
; an end user to provide a worker script. This JavaScript string will
; be loaded automatically as the result of the processor-url function when
; creating a new Transport

(def processor-js
  (str
   "class WorkletProcessor extends AudioWorkletProcessor {
      process (inputs, outputs, params) {
        const input = inputs[0];
    
        let frames = [];
        for (let ch = 0; ch < input.length; ch++) {
          const samples = input[ch];
          frames[ch] = samples;
        }
    
        this.port.postMessage(frames);
        
        return true;
      }
    }

    registerProcessor('worklet', WorkletProcessor);"))

(defn processor-url []
  (.createObjectURL js/URL (js/Blob. #js [processor-js], #js {:type "application/javascript"})))

(defn create-context []
  (if (exists? js/AudioContext)
    (js/AudioContext.)
    (js/webkitAudioContext.)))

(defn create-transport
  "Create a map consisting of the node, source, context, and media stream"
  [context media-stream]
  (let [node   (js/AudioWorkletNode. context "worklet")
        source (.createMediaStreamSource context media-stream)]
    {:node         node
     :source       source
     :context      context
     :media-stream media-stream}))

(defn init-transport
  [ch context media-stream]
  (let [url     (processor-url)
        *module (-> context .-audioWorklet (.addModule url))]
    (-> *module
        (.then #(put! ch [true (create-transport context media-stream)]))
        (.catch #(put! ch [false %])))))

(defn transport-ch
  "Create a transport channel from a stream channel. Receives a connected transport"
  [stream context]
  (let [ch (chan 1)]
    (go
      (let [[ok? result] (<! stream)]
        (if-not ok?
          (put! ch [false result])
          (init-transport ch context result))))
    ch))

(defn connect-transport
  "Begins streaming data over the transport, in this case connecting a media stream to
   an audio worklet. Data is pushed to the given data channel as it is made available by the worklet."
  [{:keys [source node media-stream]} data-ch close-ch]
  (let [port (.-port node)]
    (doseq [track (.getAudioTracks media-stream)]
      (.addEventListener track "end" #(put! close-ch {:reason :ended
                                                      :error  nil})))
    (set! (.-onmessage port) #(go
                                (when-not (>! data-ch (.-data %))
                                  (put! close-ch {:reason :closed
                                                  :error  nil}))))
    (.connect source node)))

(defn disconnect-transport
  "Disconnect the source from the worklet. Also stops audio
   tracks from the media stream."
  [{:keys [source node media-stream]}]
  (stop-audio-tracks media-stream)
  (.disconnect source node))

(defn handle-close
  "Waits for a signal to close down the transport. Handles disconnecting
  an active transport, closing channels, and throwing errors if present"
  [transport data-ch close-ch]
  (go
    (let [{:keys [error]} (<! close-ch)]
      (when transport
        (disconnect-transport transport))
      (doseq [ch [data-ch close-ch]]
        (close! ch))
      (when (some? error)
        (throw error)))))

(defn start-transport
  "Start the transport and return a data channel to stream audio data over"
  [transport-ch data-ch close-ch]
  (go
    (let [[ok? result] (<! transport-ch)]
      (if ok?
        (connect-transport result data-ch close-ch)
        (>! close-ch {:error result :reason :error}))
      (handle-close (when ok? result) data-ch close-ch)))
  data-ch)

;;; Session

(defprotocol AudioContext
  (audio-context [session] "Return an audio context from the session"))

(defrecord Session [data-ch context]
  async.proto/ReadPort
  (take!
    [_ fn-1handler]
    (async.proto/take! data-ch fn-1handler))

  async.proto/Channel
  (close!
    [_]
    (async.proto/close! data-ch))

  (closed?
    [_]
    (async.proto/closed? data-ch))

  AudioContext
  (audio-context
    [_]
    context))

(defn create-session
  "A session behaves like a core.async ReadPort. The only difference
   is that it also contains a reference to the AudioContext used for listening.
   This is useful for using an already \"warm\" audio context. This makes it possible
   to play audio on it without forcing user interaction again (some browsers require
   a user action before allowing audio within a context)"
  [data-ch context]
  (->Session data-ch context))

(defn listen
  ([input xform ex-handler]
   (let [context  (create-context)
         data-ch  (chan (.-sampleRate context) xform ex-handler)
         close-ch (chan 1)]
     (-> input
         (stream-ch)
         (transport-ch context)
         (start-transport data-ch close-ch)
         (create-session context))))
  ([input xform]
   (listen input xform nil))
  ([input]
   (listen input blah.transforms/float32))
  ([]
   (listen nil)))

(defn request-permission []
  (let [ch    (chan 1)
        *prom (connect-input nil)]
    (-> *prom
        (.then  #(put! ch %))
        (.catch #(put! ch false)))
    (go
      (if-let [stream (<! ch)]
        (nil? (stop-audio-tracks stream))
        false))))
