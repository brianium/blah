(ns cljs.user
  "Contains a system for tinkering with blah"
  (:require [blah.core :as blah]
            [cljs.core.async :as a]
            [cljs.pprint]
            [integrant.core :as ig]
            [goog.dom :as gdom]
            [goog.events :as gevents :refer [EventType]]))

(defn array->frames
  "Used as a transform for the blah channel. Converts the raw JS message into a sequence
   of sample frames with each frame containing a sample from each input channel"
  [message]
  (let [num-channels (.-length message)]
    (->> (array-seq message)
         (map array-seq)
         (apply interleave)
         (partition num-channels))))

(defn disable
  "Helper for disabling html elements"
  [& elems]
  (doseq [elem elems]
    (.setAttribute elem "disabled" "disabled")))

(defn enable
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

;;; A development system powered by integrant

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

(defmethod ig/init-key :blah/listen [_ {:keys [state]}]
  (fn []
    (let [{:keys [input]} @state]
      (blah/listen input (map array->frames)))))

(defmethod ig/init-key :handler/data [_ {:keys [state]}]
  (fn [frames]
    (swap! state #(update % :frames into frames))))

(defmethod ig/init-key :handler/state [_ initial]
  (atom initial))

(defmethod ig/init-key :handler/stop [_ {:keys [state]}]
  (fn [context session]
    (a/close! session)
    (let [{:keys [frames]} @state
          buffer (create-buffer context frames)]

      ;;; Write the input data to an audio buffer
      (dotimes [ch (.-numberOfChannels buffer)]
        (let [now-buffering (.getChannelData buffer ch)]
          (dotimes [i (count frames)]
            (let [frame (nth frames i)]
              (aset now-buffering i (nth frame ch))))))
      
      ;;; Play buffered audio data
      (let [source (.createBufferSource context)]
        (set! (.-buffer source) buffer)
        (.connect source (.-destination context))
        (.start source))
      
      ;;; Reset handler state
      (swap! state assoc :frames []))))

(defmethod ig/init-key :input/ch [_ _]
  (let [close-ch (a/chan 1)]
    [(blah/input-ch close-ch) close-ch]))

(defmethod ig/halt-key! :input/ch [_ [_ close-ch]]
  (a/put! close-ch :closed))

(defmethod ig/init-key :ui/state [_ initial]
  (let [*state (atom initial)]
    (add-watch *state ::log (fn [_ _ _ next]
                              (println "Ui state changed")
                              (println next)))
    *state))

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

(defmethod ig/halt-key! :ui/controls [_ controls]
  (doseq [[_ elem] controls]
    (gevents/removeAll elem)))

(defmethod ig/init-key :ui/listeners [_ {:keys [controls listen state] :handler/keys [data stop]}]
  (let [{:button/keys [start] :select/keys [inputs]} controls
        stop-button                                  (:button/stop controls)]
    (gevents/listen
     start
     EventType.CLICK
     (fn []
       (disable inputs start)
       (enable stop-button)
       (let [ch      (listen)
             context (blah/audio-context ch)]
         (gevents/listenOnce stop-button EventType.CLICK (fn []
                                                           (stop context ch)
                                                           (enable inputs start)
                                                           (disable stop-button)))
         (a/go-loop []
           (let [audio-data (a/<! ch)]
             (when audio-data
               (data audio-data)
               (recur)))))))
    (gevents/listen inputs EventType.CHANGE #(swap! state assoc :input (.. % -target -value)))))

(defn start
  "Start the system by populating controls and wiring up event listeners"
  []
  (ig/init app-config))

(defn stop
  "Stop the system. Removes event listeners and closes channels"
  [system]
  (ig/halt! system))

;;; Call these jams from the REPL for a really good time!

#_(def system (start))

#_(stop system)
