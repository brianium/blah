(ns blah.transforms
  "Contains useful transforms for data received on a blah session.
   
   These xforms can be applied when starting a session via blah.core/listen.
   
   The default shape of audio data is a js array of js Float32Array types. Each Float32Array
   contains samples from an input channel. The structure of this collection is
   #js [float-32-array-for-input-channel-1,
        float-32-array-for-input-channel-2,
        ...,
        float-32-array-input-channel-n]
   
   Transforms can be used to convert this js structure into something a little friendlier
   for the average Clojurist.")

(def
  ^{:doc "Converts the raw JS message into a sequence of sample sequences. Each sample sequence represents an input channel"}
  seqs
  (map (fn [message]
         (->> (array-seq message)
              (map array-seq)))))

(def
  ^{:doc "Converts the raw JS message into a sequence of sample frames with each frame containing a sample from each input channel."}
  frames
  (comp
   seqs
   (map (fn [samples]
          (->> samples
               (apply interleave)
               (partition (count samples)))))))
