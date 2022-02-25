(ns blah.dev.wav
  "Dev helpers and system components for encoding wav data
   and providing downloads"
  (:require [blah.transforms :as blah.xf]
            [goog.dom :as gdom]
            [integrant.core :as ig]))

(def encode-wav
  (map (fn [frames]
         (let [num-channels (-> frames first count)
               len          (count frames)
               buffer       (js/ArrayBuffer. (* len num-channels 2))]
           (loop [frames frames
                  view   [0 (js/DataView. buffer)]]
             (if-not (seq frames)
               {:view (second view) :ch num-channels}
               (let [frame (first frames)]
                 (recur
                  (rest frames)
                  (reduce (fn [[offset data-view] sample]
                            [(+ offset 2)
                             (doto data-view (.setInt16 offset sample true))]) view frame)))))))))

(defn set-string
  "Set  string on the given DataView"
  [dv offset string]
  (dotimes [i (count string)]
    (.setUint8 dv (+ offset i) (.charCodeAt string i))))

(defn to-wav
  "Create a Blob according to the WAV file specification"
  [context encoded]
  (let [{:keys [ch]}       (first encoded)
        views              (reduce #(conj %1 (:view %2)) [] encoded)
        length             (reduce #(+ %1 (.-byteLength %2)) 0 views)
        header             (js/DataView. (js/ArrayBuffer. 44))
        sample-rate        (.-sampleRate context)]
    (set-string header 0 "RIFF")
    (.setUint32 header 4 (+ 36 length) true)
    (set-string header 8 "WAVE")
    (set-string header 12 "fmt ")
    (.setUint32 header 16 16 true)
    (.setUint16 header 20 1 true)
    (.setUint16 header 22 ch true)
    (.setUint32 header 24 sample-rate true)
    (.setUint32 header 28 (* 4 sample-rate) true)
    (.setUint16 header 32 (* 2 ch) true)
    (.setUint16 header 34 16 true)
    (set-string header 36 "data")
    (.setUint32 header 40 length true)
    (->> views
         (into [header])
         (clj->js)
         (#(js/Blob. % #js {:type "audio/wav"})))))

(defn create-download
  "Convert data to wav file and create a download"
  [context data]
  (let [blob      (to-wav context data)
        url       (.createObjectURL js/URL blob)
        downloads (gdom/getElement "downloads")
        anchor    (gdom/createElement "a")
        list-item (gdom/createElement "li")
        file-name (str "recording-" (.now js/Date) ".wav")]
    (set! (.-href anchor) url)
    (set! (.-download anchor) file-name)
    (gdom/append anchor file-name)
    (gdom/appendChild list-item anchor)
    (gdom/appendChild downloads list-item)))

(def config
  {:blah/start {:state (ig/ref :ui/state)
                :xform (comp blah.xf/pcm16 blah.xf/frames encode-wav)}
   :blah/data {:state     (ig/ref :blah/state)
               :update-fn conj}
   :blah/stop {:state   (ig/ref :blah/state)
               :stop-fn create-download}})
