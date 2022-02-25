(ns cljs.user
  "Contains a system for tinkering with blah"
  (:require [blah.core :as blah]
            [blah.dev.wav :as wav]
            [blah.dev.ui :as ui]
            [cljs.core.async :as a]
            [cljs.pprint]
            [integrant.core :as ig]
            [goog.dom :as gdom]
            [goog.events :as gevents :refer [EventType]]))

;;; A development system powered by integrant. Start it! Stop it! Rejoice!

(def base-config
  {:blah/state   {:data []}

   :input/ch     {}

   :ui/state     {:input nil}
   :ui/controls  {:input/ch       (ig/ref :input/ch)
                  :button/start   "start"
                  :button/stop    "stop"
                  :button/request "ask"
                  :select/inputs  "inputs"}

   :ui/listeners {:handler/data  (ig/ref :blah/data)
                  :handler/start (ig/ref :blah/start)
                  :handler/stop  (ig/ref :blah/stop)
                  :input/ch      (ig/ref :input/ch)
                  :controls      (ig/ref :ui/controls)
                  :state         (ig/ref :ui/state)}})

;;; Make individual test cases swappable

(def test-config wav/config)

;;; App config is simply a system composed of a base-config and a test-config. Feel free to change the test config and restart

(def app-config (merge base-config test-config))

; Return a function that listens to audio on the input stored in state

(defmethod ig/init-key :blah/start [_ {:keys [state xform]}]
  (fn []
    (let [{:keys [input]} @state]
      (blah/listen {:device-id input} xform))))

; The data handler is called as audio data becomes available on the blah session

(defmethod ig/init-key :blah/data [_ {:keys [state update-fn]}]
  (fn [data]
    (swap! state #(update % :data update-fn data))))

; We will store sample frames inside of the blah state. This will be useful for manipulating, visualizing, playing collected audio

(defmethod ig/init-key :blah/state [_ initial]
  (atom initial))

; Return a function that will be used when audio gathering is complete. This should shut the blah session down by closing
; the channel and processing the blah/state in some way. For now this is just playing it back

(defmethod ig/init-key :blah/stop [_ {:keys [state stop-fn]}]
  (fn [context session]
    (a/close! session)
    (let [{:keys [data]} @state]
      (stop-fn context data)

      ;;; Reset playback state
      (swap! state assoc :data []))))

; Returns a channel that receives device updates - i.e a new mic was plugged in
; while we are partying. Returns an input-ch. Close the channel
; in order to shut things down GRACEFULLY (i.e remove listeners attached to the global mediaDevices object)

(defmethod ig/init-key :input/ch [_ _]
  (blah/input-ch))

; The aforementioned shutting down of things

(defmethod ig/halt-key! :input/ch [_ input-ch]
  (a/close! input-ch))

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

(defmethod ig/init-key :ui/controls [_ {:button/keys [start stop request] :select/keys [inputs] :input/keys [ch]}]
  (let [inputs-select (gdom/getElement inputs)]
    ;;; Keep audio input select up to date
    (a/go-loop []
      (let [audio-inputs (a/<! ch)] ;;; ch is a data/close channel pair
        (when audio-inputs
          (gdom/removeChildren inputs-select)
          (doseq [{:keys [label device-id]} audio-inputs]
            (let [option (gdom/createElement "option")]
              (gdom/append option (if (seq label)
                                    label
                                    "Default"))
              (.setAttribute option "value" device-id)
              (gdom/append inputs-select option)))
          (recur))))
    {:button/start   (gdom/getElement start)
     :button/stop    (gdom/getElement stop)
     :button/request (gdom/getElement request)
     :select/inputs  inputs-select}))

; Remove event listeners and make those controls inert until the system is started again

(defmethod ig/halt-key! :ui/controls [_ controls]
  (doseq [[_ elem] controls]
    (gevents/removeAll elem)))

; Configures listeners for the ui elements used for testing. This is where all the things
; are wired up. 

(defmethod ig/init-key :ui/listeners [_ {:keys [controls state] :handler/keys [data start stop] :input/keys [ch]}]
  (let [{:button/keys [request]
         :select/keys [inputs]}        controls
        {stop-button  :button/stop
         start-button :button/start} controls]

    ;;; Clicking yon start button commences a microphone jam
    (gevents/listen
     start-button
     EventType.CLICK
     (fn []
       (ui/disable-elements inputs start-button)
       (ui/enable-elements stop-button)
       (let [session (start)
             context (blah/audio-context session)]

         ;;; Clicking yon stop button ends the microphone jams and calls the stop handler
         (gevents/listenOnce
          stop-button
          EventType.CLICK
          #(stop context session))

         ;;; Let's gather microphone jams as they arrive, passing them to the data handler
         (a/go-loop []
           (let [audio-data (a/<! session)]
             (if-not audio-data ;; No audio data means we are done or a user did not give permission
               (do
                 (ui/enable-elements inputs start-button)
                 (ui/disable-elements stop-button))
               (do
                 (data audio-data)
                 (recur))))))))

    ;;; Supports selecting which audio input to gather the jams on
    (gevents/listen inputs EventType.CHANGE #(swap! state assoc :input (.. % -target -value)))

    ;;; Test explicit permission request
    (gevents/listen
     request
     EventType.CLICK
     (fn []
       (a/go
         (if (a/<! (blah/request-permission))
           (blah/query-inputs #(a/put! ch %)) ;;; In the realworld, we would probably not put! to the input ch ourselves
           (js/alert "permission denied")))))))

;;; Run the system

(defonce *system (atom nil))

(defn start
  "Start the system by populating controls and wiring up event listeners"
  []
  (reset! *system (ig/init app-config)))

(defn stop
  "Stop the system. Removes event listeners and closes channels"
  []
  (when-some [system @*system]
    (ig/halt! system)
    :stopped))

(defn restart []
  (stop)
  (start))

(restart)

