(ns blah.impl
  (:require [cljs.core.async :refer [chan put! go <! >! close!]]
            [cljs.core.async.impl.protocols :as async.proto]))

(def media-devices
  (.. js/navigator -mediaDevices))

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

(defn input-ch
  ([close-ch]
   (let [ch       (chan 1)
         listener (fn [] (query-inputs #(put! ch %)))]
     (.addEventListener media-devices "devicechange" listener)
     (query-inputs #(put! ch %))
     (when (some? close-ch)
       (go
         (<! close-ch)
         (.removeEventListener media-devices "devicechange" listener)))
     ch))
  ([]
   (input-ch nil)))

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
  [{:keys [source node media-stream]} data-ch close-ch]
  (let [port   (.-port node)
        tracks (.getAudioTracks media-stream)]
    (doseq [track tracks]
      (.addEventListener track "end" #(put! close-ch {:reason :ended :error nil})))
    (set! (.-onmessage port) #(go
                                (when-not (>! data-ch (.-data %))
                                  (put! close-ch {:reason :closed :error nil}))))
    (.connect source node)
    (go
      (let [{:keys [error]} (<! close-ch)]
        (doseq [track tracks]
          (.stop track))
        (doseq [ch [data-ch close-ch]]
          (close! ch))
        (.disconnect source node)
        (when (some? error)
          (throw error))))))

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

(defn start-session
  [transport data-ch close-ch]
  (go
    (let [[ok? result] (<! transport)]
      (if-not ok?
        (put! close-ch {:reason :error
                        :error  result})
        (connect-transport result data-ch close-ch)))))

(defn listen
  ([input xform ex-handler]
   (let [context  (create-context)
         data-ch  (chan (.-sampleRate context) xform ex-handler)
         close-ch (chan 1)]
     (-> input
         (stream-ch)
         (transport-ch context)
         (start-session data-ch close-ch))
     (create-session data-ch context)))
  ([input xform]
   (listen input xform nil))
  ([input]
   (listen input nil nil))
  ([]
   (listen nil)))
