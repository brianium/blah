(ns cljs.user
  "Contains a system for tinkering with blah"
  (:require [blah.core :as blah]
            [cljs.core.async :as a]
            [cljs.pprint]
            [integrant.core :as ig]
            [goog.dom :as gdom]
            [goog.events :as gevents :refer [EventType]]))

;;; Helpers built to spark joy!

(defn disable-elements
  "Helper for disabling html elements"
  [& elems]
  (doseq [elem elems]
    (.setAttribute elem "disabled" "disabled")))

(defn enable-elements
  "Helper for enabling html elements"
  [& elems]
  (doseq [elem elems]
    (.removeAttribute elem "disabled")))

(defn create-buffer
  "Creates a an audio buffer for storing recorded audio"
  [context frames]
  (let [sample-rate (.-sampleRate context)
        channels    (-> frames first count)]
    (if (= 0 channels)
      (throw (js/Error. "Frames required to make a buffer"))
      (.createBuffer context channels (count frames) sample-rate))))

(defn record-frames
  "Write sample frames to the given audio buffer"
  [buffer frames]
  (dotimes [ch (.-numberOfChannels buffer)]
    (let [now-buffering (.getChannelData buffer ch)]
      (dotimes [i (count frames)]
        (let [frame (nth frames i)]
          (aset now-buffering i (nth frame ch))))))
  buffer)

(defn play-recording
  "Play the audio stored in buffer within the given context"
  [buffer context]
  (let [source (.createBufferSource context)]
    (set! (.-buffer source) buffer)
    (.connect source (.-destination context))
    (.start source)))

;;; A development system powered by integrant. Start it! Stop it! Rejoice!

(def app-config
  {:blah/listen   {:state (ig/ref :ui/state)}
   :handler/data  {:state (ig/ref :handler/state)}
   :handler/state {:frames []}
   :handler/stop  {:state (ig/ref :handler/state)}
   :input/ch      {}
   :ui/state      {:input nil}
   :ui/controls   {:input/ch      (ig/ref :input/ch)
                   :button/start  "start"
                   :button/stop   "stop"
                   :select/inputs "inputs"}
   :ui/listeners  {:controls     (ig/ref :ui/controls)
                   :handler/data (ig/ref :handler/data)
                   :handler/stop (ig/ref :handler/stop)
                   :listen       (ig/ref :blah/listen)
                   :state        (ig/ref :ui/state)}})

; Return a function that listens to audio on the input stored in state

(defmethod ig/init-key :blah/listen [_ {:keys [state]}]
  (fn []
    (let [{:keys [input]} @state]
      (blah/listen input))))

; The data handler is called as audio data becomes available on the blah session

(defmethod ig/init-key :handler/data [_ {:keys [state]}]
  (fn [frames]
    (swap! state #(update % :frames into frames))))

; We will store sample frames inside of the handler state. This will be useful for manipulating, visualizing, playing collected audio

(defmethod ig/init-key :handler/state [_ initial]
  (atom initial))

; Return a function that will be used when audio gathering is complete. This should shut the blah session down by closing
; the channel and processing the handler/state in some way. For now this is just playing it back

(defmethod ig/init-key :handler/stop [_ {:keys [state]}]
  (fn [context session]
    (a/close! session)
    (let [{:keys [frames]} @state]
      (-> context
          (create-buffer frames)
          (record-frames frames)
          (play-recording context))

      ;;; Reset handler state
      (swap! state assoc :frames []))))

; Returns a channel that receives device updates - i.e a new mic was plugged in
; while we are partying. Returns a tuple containing [input-ch, close-ch]. Send a message
; to the close-ch to shut things down GRACEFULLY (i.e remove listeners attached to the global mediaDevices object)

(defmethod ig/init-key :input/ch [_ _]
  (let [close-ch (a/chan 1)]
    [(blah/input-ch close-ch) close-ch]))

; The mentioned shutting down of things

(defmethod ig/halt-key! :input/ch [_ [_ close-ch]]
  (a/put! close-ch :closed))

; It aint much ui state, but it's honest. Returns state that should be modified by ui actions. Logs changes to the repl

(defmethod ig/init-key :ui/state [_ initial]
  (let [*state (atom initial)]
    (add-watch *state ::log (fn [_ _ _ next]
                              (println "Ui state changed")
                              (println next)))
    *state))

; WHO NEEDS RE(ACT/AGENT/FRAME)!?!?!? This returns dom elements for ui elements used for testing
; This should also handle changes to the UI. For instance, the input channel is consumed to keep
; the dropdown of allowed audio inputs up to date

(defmethod ig/init-key :ui/controls [_ {:button/keys [start stop] :select/keys [inputs] :input/keys [ch]}]
  (let [inputs-select (gdom/getElement inputs)]
    ;;; Keep audio input select up to date
    (a/go-loop []
      (let [audio-inputs (a/<! (first ch))] ;;; ch is a data/close channel pair
        (when audio-inputs
          (gdom/removeChildren inputs-select)
          (doseq [{:keys [label device-id]} audio-inputs]
            (let [option (gdom/createElement "option")]
              (gdom/append option label)
              (.setAttribute option "value" device-id)
              (gdom/append inputs-select option)))
          (recur))))
    {:button/start  (gdom/getElement start)
     :button/stop   (gdom/getElement stop)
     :select/inputs inputs-select}))

; Remove event listeners and make those controls inert until the system is started again

(defmethod ig/halt-key! :ui/controls [_ controls]
  (doseq [[_ elem] controls]
    (gevents/removeAll elem)))

; Configures listeners for the ui elements used for testing. This is where all the things
; are wired up. 

(defmethod ig/init-key :ui/listeners [_ {:keys [controls listen state] :handler/keys [data stop]}]
  (let [{:button/keys [start] :select/keys [inputs]} controls
        stop-button                                  (:button/stop controls)]

    ;;; Clicking yon start button commences a microphone jam
    (gevents/listen
     start
     EventType.CLICK
     (fn []
       (disable-elements inputs start)
       (enable-elements stop-button)
       (let [session (listen)
             context (blah/audio-context session)]

         ;;; Clicking yon stop button ends the microphone jams and calls the stop handler
         (gevents/listenOnce
          stop-button
          EventType.CLICK
          (fn []
            (stop context session)
            (enable-elements inputs start)
            (disable-elements stop-button)))

         ;;; Let's gather microphone jams as they arrive, passing them to the data handler
         (a/go-loop []
           (let [audio-data (a/<! session)]
             (when audio-data
               (data audio-data)
               (recur)))))))

    ;;; Supports selecting which audio input to gather the jams on
    (gevents/listen inputs EventType.CHANGE #(swap! state assoc :input (.. % -target -value)))))

(defn start
  "Start the system by populating controls and wiring up event listeners"
  []
  (ig/init app-config))

(defn stop
  "Stop the system. Removes event listeners and closes channels"
  [system]
  (ig/halt! system))

;;; Call these jams from the REPL for a really good time! A typical repl workflow would be loading this file and calling these 
;;; commented functions as needed

#_(def system (start))

#_(stop system)
