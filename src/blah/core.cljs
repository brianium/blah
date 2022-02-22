(ns blah.core
  "Work with audio inputs the Clojure(Script) way.
   
   blah aims to be a simple utility for gathering audio input
   as a stream of data.
   
   blah's main purpose is to produce a cljs.core.async channel
   of audio data (presumably from a user's microphone)."
  (:require [blah.impl :as impl]
            [blah.spec :as blah.spec]
            [cljs.spec.alpha :as s]))

(defn query-inputs
  "Query for audio inputs. Calls fn-1 with a sequence
   of inputs."
  [fn-1]
  (impl/query-inputs fn-1))

(s/fdef query-inputs
  :args (s/cat :fn-1 ::blah.spec/query-input-handler)
  :ret  any?)

(defn input-ch
  "Returns a channel that receives a sequence of inputs whenever there
   is a change to the list of available inputs, an example being the user
   connects or disconnects a microphone.
   
   Creating an input-ch will place an initial sequence of inputs on the channel before
   it is returned.
   
   A close channel is not required, but is necessary to gracefully shut down the input channel. This
   is mostly to unbind event listeners bound to the global mediaDevices object. If the input channel is not
   gracefully shut down, the result may be extra messages to your input-ch. There are worse fates
   in life.
   
   ```clojure
   (let [inputs (input-ch)]
     (go-loop []
       (let [audio-inputs (<! inputs)]
         (update-ui audio-inputs))))
   ```"
  ([close-ch]
   (impl/input-ch close-ch))
  ([]
   (impl/input-ch)))

(s/fdef input-ch
  :args (s/cat :close-ch (s/? ::blah.spec/write-port))
  :ret  ::blah.spec/read-port)

(defn audio-context
  "Returns a session's underlying AudioContext object.
   
   This function provides a useful convenience.
   
   Many browsers prevent interaction with AudioContext until a user action
   initiates them - i.e a user must click a button before a sound is played or
   access to a mic is granted.
   
   This function allows access to an AudioContext object that is already \"warm\" after
   being created as part of starting a blah session via the [[listen]] function.
   
   A typical use case might be wanting to play some audio back to a user after recording them."
  [session]
  (impl/audio-context session))

(s/fdef audio-context
  :args (s/cat :session ::blah.spec/session)
  :ret  ::blah.spec/audio-context)

(defn listen
  "Initiates a blah session.
   
   A blah session is a core.async ReadPort that is composed of, and provides access to, an AudioContext.
   
   Being a ReadPort, it is consumed like any other core.async channel.
   
   The buffer size of the channel is determined by the AudioContext's sample rate. The signature for this
   function is identical to core.async/chan expect an input is accepted in place of buf-or-n. A nil input
   can be supplied in order to leverage the default audio input.
   
   Can be given an optional transducer to process incoming audio data, and an optional exception-handler.
   If an exception occurs during transformation exception-handler will be called with the error, and any
   non-nil return value will be placed in the channel.
   
   If no transducer is given, a default will be provided via [[blah.transforms/samples->frames]]. This transform
   will return streamed data as a sequence of partitioned sample frames - i.e:

   ```clojure
   ((input-channel-1-sample-1
     input-channel-2-sample-1)
   
    (input-channel-1-sample-2
     input-channel-2-sample-2))
   ```
   
   The channels raw data format is a js array containing Float32 array for each audio input channel:
   
   ```clojure
   (defn samples->frames
     [message] ;;; message = #js [floats-for-input-channel-1, floats-for-input-channel-2, ..., floats-for-input-channel-n]
     (process-message))
   ```"
  ([input xform ex-handler]
   (impl/listen input xform ex-handler))
  ([input xform]
   (impl/listen input xform))
  ([input]
   (impl/listen input))
  ([]
   (impl/listen)))

;;; I have no idea how to spec a transducer

(s/fdef listen
  :args (s/alt :null   (s/cat)
               :unary  (s/cat :input (s/nilable ::blah.spec/input))
               :binary (s/cat :input (s/nilable ::blah.spec/input) :xform any?)
               :all    (s/cat :input (s/nilable ::blah.spec/input) :xform any? :ex-handler fn?))
  :ret  ::blah.spec/session)
