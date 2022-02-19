<p align="center">
  <img src="mic.gif">
</p>

# blah

Blah lets you stream babbling itself!

A ClojureScript library for reading audio input (i.e microphone input) as a stream of data. Record it! Transform it! Send it
some place for transcription! The possibilities are endless!

[![cljdoc badge](https://cljdoc.org/badge/com.github.brianium/blah)](https://cljdoc.org/d/com.github.brianium/blah/CURRENT) [![Clojars Project](https://img.shields.io/clojars/v/com.github.brianium/blah.svg)](https://clojars.org/com.github.brianium/blah)

## Table of contents

- [Usage](#usage)
  - [Inputs](#inputs)
  - [Transducers](#transducers)
  - [Caveats](#caveats)
- [Data](#data)
- [Development](#development)

### Usage

Blah is built on top of [core.async](https://github.com/clojure/core.async). It produces a channel that yields audio data as a stream of Float32 samples.

```clojure
(require '[blah.core :as blah])

;;; Start a session using the default input
(let [session (blah/listen)]
  (go-loop []
    (let [audio-data (<! session)]
      (when audio-data
        (process-audio-data audio-data)
        (recur)))))
```

#### Inputs

If a specific input is desired, they can be obtained by creating an input channel or querying via `query-inputs`

```clojure
(require '[blah.core :as blah])

(blah/query-inputs
  (fn [inputs]
    (let [session (blah/listen (first inputs))]
      (go-loop []
        (let [audio-data (<! session)]
          (when audio-data
            (process-audio-data audio-data)
            (recur)))))))
```

An input channel can be useful for keeping tabs on audio inputs as they become available/unavailable

```clojure
(let [input-ch (blah/input-ch)
      ui-state (atom)]
  (go-loop []
    (let [audio-inputs (a/<! input-ch)]
      (when audio-inputs
        (swap! ui-state assoc :inputs audio-inputs)
        (recur)))))
```

#### Transducers

A transducer can be supplied, and this works exactly as it does with a core.async channel:

```clojure
;;; We give nil as the input to use the default audio input
(let [session (blah/listen nil blah.transforms/samples->frames)]
  (go-loop []
    ,,,))
```

If a transducer is omitted it will use `blah.transforms/samples->frames`.

#### Caveats

Many browsers require a user action to initiate audio contexts. This means a robust application of blah will start a session as part of a
click handler or some other user interaction. See [dev/cljs/user.cljs](dev/cljs/user.cljs) for an example of developing with blah.

### Data

The magic behind blah is that data is streamed in realtime via an [AudioWorkletProcessor](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor).

This processor sends data to blah as JS types, and transforms are intended to make this data more accessible to a Clojure developer.

The implementation of the processor looks like the following:

```javascript
class WorkletProcessor extends AudioWorkletProcessor {
  process (inputs, outputs, params) {
    const input = inputs[0];

    let frames = [];
    for (let ch = 0; ch < input.length; ch++) {
        const samples = input[ch];
        frames[ch] = samples;
    }

    this.port.postMessage(frames);
    
    return true;
  }
}
```

This sends data as a JS array of channel samples, such that `data[0]` would be an array of audio samples for the first channel of the input, and `data[1]`
would be an array of audio samples for the second channel, and so on, and so on. All samples are Float32 types from JavaScript.

Transforms work with this data structure.

See [src/blah/transforms.cljs](src/blah/transforms.cljs) for an example of transforming audio data.

### Development

Blah is developed using a vanilla ClojureScript repl. This plays well with development environments like [Calva](https://calva.io/), or a plain repl.

See the [ClojureScript quick start](https://clojurescript.org/guides/quick-start) for info on running a repl. 

See [dev/cljs/user.cljs](dev/cljs/user.cljs). This is where development takes place.
