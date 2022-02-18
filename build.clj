(ns build
  (:require [clojure.tools.build.api :as b]))

(def lib 'com.github.brianium/blah)

(def class-dir "target/classes")

(def basis (b/create-basis {:project "deps.edn"}))

(def version (:version basis))

(def jar-file (format "target/%s.jar" (name lib)))

(defn clean [_]
  (b/delete {:path "target"}))

(defn jar [_]
  (b/write-pom {:class-dir class-dir
                :lib lib
                :version version
                :basis basis
                :src-dirs ["src"]
                :scm {:url                 "https://github.com/brianium/blah"
                      :connection          "scm:git:git://github.com/brianium/blah.git"
                      :developerConnection "scm:git:git://github.com/brianium/blah.git"
                      :tag                 "HEAD"}})
  (b/copy-dir {:src-dirs ["src"]
               :target-dir class-dir})
  (b/jar {:class-dir class-dir
          :jar-file jar-file}))
