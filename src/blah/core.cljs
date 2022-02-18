(ns blah.core
  (:require [blah.impl :as impl]))

(defn query-inputs
  [fn-1]
  (impl/query-inputs fn-1))

(defn input-ch
  ([close-ch]
   (impl/input-ch close-ch))
  ([]
   (impl/input-ch)))

(defn audio-context
  [session]
  (impl/audio-context session))

(defn listen
  ([input xform ex-handler]
   (impl/listen input xform ex-handler))
  ([input xform]
   (impl/listen input xform))
  ([input]
   (impl/listen input))
  ([]
   (impl/listen)))
