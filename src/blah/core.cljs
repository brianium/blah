(ns blah.core
  "Work with audio inputs the Clojure(Script) way.
   
   blah aims to be a simple utility for gathering audio input
   as a stream of data.
   
   blah's main purpose is to produce a cljs.core.async channel
   of audio data (presumably from a user's microphone)."
  (:require [blah.impl :as impl]))

(defn query-inputs
  "Query for audio inputs. Calls fn-1 with a sequence
   of inputs."
  [fn-1]
  (impl/query-inputs fn-1))

(defn input-ch
  "Returns a channel that receives a sequence of inputs whenever there
   is a change to the list of available inputs, an example being the user
   connects or disconnects a microphone.
   
   Creating an input-ch will place an initial sequence of inputs on the channel before
   it is returned.
   
   This channel should be closed when it is no longer needed. This is mostly to unbind event listeners
   bound to the global mediaDevices object.
   
   ```clojure
   (let [inputs (input-ch)]
     (go-loop []
       (let [audio-inputs (<! inputs)]
         (update-ui audio-inputs))))
   ```"
  []
  (impl/input-ch))

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
   
   If no transducer is given, a default will be provided via [[blah.transforms/float32]]. This transform
   will return a sequence of sample sequences. Each sample sequence represents an input channel:

   ```clojure
   ((input-channel-1-sample-1
     input-channel-1-sample-2
     input-channel-1-sample-n)
   
    (input-channel-2-sample-1
     input-channel-2-sample-2
     input-channel-2-sample-n))
   ```
   
   The channels raw data format is a js array containing Float32 array for each audio input channel:
   
   ```clojure
   (defn float32
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

(defn request-permission
  "A utility for preemptively asking for access to the microphone.
   
   Returns a channel that will contain true or false based on the user's response.
   
   ```clojure
   (go
     (if (<! (request-permission))
       (do-mic-jams)
       (uh-oh-no-mic-access)))
   ```"
  []
  (impl/request-permission))
