(ns blah.dev.ui)

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
