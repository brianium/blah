(ns ^:no-doc blah.spec
  (:require [cljs.core.async.impl.protocols :as async.proto]
            [cljs.spec.alpha :as s]
            [blah.impl :as impl]))

(s/def ::device-id string?)

(s/def ::group-id string?)

(s/def ::kind string?)

(s/def ::label string?)

(s/def ::input (s/keys :req-un [::device-id] :opt-un [::group-id ::kind ::label]))

(s/def ::inputs (s/coll-of ::input))

(s/def ::query-input-handler
  (s/fspec
   :args (s/cat :inputs ::inputs)
   :ret  any?))

(defn- read-port?
  [x]
  (satisfies? async.proto/ReadPort x))

(s/def ::read-port read-port?)

(defn- write-port?
  [x]
  (satisfies? async.proto/WritePort x))

(s/def ::write-port write-port?)

(defn- audio-context?
  [x]
  (or
   (and (exists? js/AudioContext) (instance? js/AudioContext x))
   (and (exists? js/webkitAudioContext) (instance? js/webkitAudioContext x))))

(s/def ::audio-context audio-context?)

(defn- session?
  [x]
  (instance? impl/Session x))

(s/def ::session session?)
