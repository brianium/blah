(ns blah.dev.playback
  "Dev helpers and system components for playing back float32
   audio data"
  (:require [blah.transforms :as blah.xf]
            [integrant.core :as ig]))

(defn create-buffer
  "Creates a an audio buffer for storing recorded audio"
  [context frames]
  (let [sample-rate (.-sampleRate context)
        channels    (-> frames first count)]
    (if (= 0 channels)
      (throw (js/Error. "Frames required to make a buffer"))
      (.createBuffer context channels (* 4 (count frames)) sample-rate))))

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

(defn playback
  "Plays the recorded sample frames back on the audio context used for recording."
  [context frames]
  (-> context
      (create-buffer frames)
      (record-frames frames)
      (play-recording context)))

(def config
  {:blah/start {:state (ig/ref :ui/state)
                :xform (comp blah.xf/float32 blah.xf/frames)}
   :blah/data {:state     (ig/ref :blah/state)
               :update-fn into}
   :blah/stop {:state   (ig/ref :blah/state)
               :stop-fn playback}})
