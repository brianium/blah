// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('blah.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('blah.transforms');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
blah.impl.media_devices = navigator.mediaDevices;
blah.impl.stop_audio_tracks = (function blah$impl$stop_audio_tracks(media_stream){
var seq__2353 = cljs.core.seq(media_stream.getAudioTracks());
var chunk__2354 = null;
var count__2355 = (0);
var i__2356 = (0);
while(true){
if((i__2356 < count__2355)){
var track = chunk__2354.cljs$core$IIndexed$_nth$arity$2(null,i__2356);
track.stop();


var G__2357 = seq__2353;
var G__2358 = chunk__2354;
var G__2359 = count__2355;
var G__2360 = (i__2356 + (1));
seq__2353 = G__2357;
chunk__2354 = G__2358;
count__2355 = G__2359;
i__2356 = G__2360;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__2353);
if(temp__5753__auto__){
var seq__2353__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2353__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__2353__$1);
var G__2361 = cljs.core.chunk_rest(seq__2353__$1);
var G__2362 = c__4679__auto__;
var G__2363 = cljs.core.count(c__4679__auto__);
var G__2364 = (0);
seq__2353 = G__2361;
chunk__2354 = G__2362;
count__2355 = G__2363;
i__2356 = G__2364;
continue;
} else {
var track = cljs.core.first(seq__2353__$1);
track.stop();


var G__2365 = cljs.core.next(seq__2353__$1);
var G__2366 = null;
var G__2367 = (0);
var G__2368 = (0);
seq__2353 = G__2365;
chunk__2354 = G__2366;
count__2355 = G__2367;
i__2356 = G__2368;
continue;
}
} else {
return null;
}
}
break;
}
});
blah.impl.info__GT_input = (function blah$impl$info__GT_input(info){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$device_DASH_id,info.deviceId,cljs.core.cst$kw$group_DASH_id,info.groupId,cljs.core.cst$kw$kind,info.kind,cljs.core.cst$kw$label,info.label], null);
});
blah.impl.input__GT_constraint = (function blah$impl$input__GT_constraint(input){
if((!((input == null)))){
return ({"audio": ({"deviceId": cljs.core.cst$kw$device_DASH_id.cljs$core$IFn$_invoke$arity$1(input)})});
} else {
return ({"audio": true});
}
});
/**
 * Return a promise for getting user media for the given audio input
 */
blah.impl.connect_input = (function blah$impl$connect_input(input){
var constraint = blah.impl.input__GT_constraint(input);
return blah.impl.media_devices.getUserMedia(constraint);
});
blah.impl.query_inputs = (function blah$impl$query_inputs(fn_1){
var _STAR_prom = blah.impl.media_devices.enumerateDevices();
return _STAR_prom.then((function (device_infos){
var G__2370 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__2369_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("audioinput",cljs.core.cst$kw$kind.cljs$core$IFn$_invoke$arity$1(p1__2369_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(blah.impl.info__GT_input,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(device_infos)));
return (fn_1.cljs$core$IFn$_invoke$arity$1 ? fn_1.cljs$core$IFn$_invoke$arity$1(G__2370) : fn_1.call(null,G__2370));
}));
});
blah.impl.input_ch = (function blah$impl$input_ch(){
var signal = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var data = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var listener = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(signal,cljs.core.cst$kw$ready);
});
blah.impl.media_devices.addEventListener("devicechange",listener);

blah.impl.query_inputs((function (p1__2371_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(data,p1__2371_SHARP_);
}));

var c__2284__auto___2399 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_2385){
var state_val_2386 = (state_2385[(1)]);
if((state_val_2386 === (1))){
var state_2385__$1 = state_2385;
var statearr_2387_2400 = state_2385__$1;
(statearr_2387_2400[(2)] = null);

(statearr_2387_2400[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2386 === (2))){
var state_2385__$1 = state_2385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2385__$1,(4),signal);
} else {
if((state_val_2386 === (3))){
var inst_2383 = (state_2385[(2)]);
var state_2385__$1 = state_2385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2385__$1,inst_2383);
} else {
if((state_val_2386 === (4))){
var inst_2374 = (state_2385[(2)]);
var state_2385__$1 = state_2385;
if(cljs.core.truth_(inst_2374)){
var statearr_2388_2401 = state_2385__$1;
(statearr_2388_2401[(1)] = (5));

} else {
var statearr_2389_2402 = state_2385__$1;
(statearr_2389_2402[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2386 === (5))){
var inst_2376 = (function (){return (function (inputs){
if(cljs.core.truth_(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(data,inputs))){
return null;
} else {
cljs.core.async.close_BANG_(signal);

return blah.impl.media_devices.removeEventListener("devicechange",listener);
}
});
})();
var inst_2377 = blah.impl.query_inputs(inst_2376);
var state_2385__$1 = (function (){var statearr_2390 = state_2385;
(statearr_2390[(7)] = inst_2377);

return statearr_2390;
})();
var statearr_2391_2403 = state_2385__$1;
(statearr_2391_2403[(2)] = null);

(statearr_2391_2403[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2386 === (6))){
var state_2385__$1 = state_2385;
var statearr_2392_2404 = state_2385__$1;
(statearr_2392_2404[(2)] = null);

(statearr_2392_2404[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2386 === (7))){
var inst_2381 = (state_2385[(2)]);
var state_2385__$1 = state_2385;
var statearr_2393_2405 = state_2385__$1;
(statearr_2393_2405[(2)] = inst_2381);

(statearr_2393_2405[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var blah$impl$input_ch_$_state_machine__2262__auto__ = null;
var blah$impl$input_ch_$_state_machine__2262__auto____0 = (function (){
var statearr_2394 = [null,null,null,null,null,null,null,null];
(statearr_2394[(0)] = blah$impl$input_ch_$_state_machine__2262__auto__);

(statearr_2394[(1)] = (1));

return statearr_2394;
});
var blah$impl$input_ch_$_state_machine__2262__auto____1 = (function (state_2385){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_2385);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e2395){var ex__2265__auto__ = e2395;
var statearr_2396_2406 = state_2385;
(statearr_2396_2406[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_2385[(4)]))){
var statearr_2397_2407 = state_2385;
(statearr_2397_2407[(1)] = cljs.core.first((state_2385[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__2408 = state_2385;
state_2385 = G__2408;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
blah$impl$input_ch_$_state_machine__2262__auto__ = function(state_2385){
switch(arguments.length){
case 0:
return blah$impl$input_ch_$_state_machine__2262__auto____0.call(this);
case 1:
return blah$impl$input_ch_$_state_machine__2262__auto____1.call(this,state_2385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blah$impl$input_ch_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = blah$impl$input_ch_$_state_machine__2262__auto____0;
blah$impl$input_ch_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = blah$impl$input_ch_$_state_machine__2262__auto____1;
return blah$impl$input_ch_$_state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_2398 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_2398[(6)] = c__2284__auto___2399);

return statearr_2398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));


return data;
});
blah.impl.stream_ch = (function blah$impl$stream_ch(input){
var stream = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var _STAR_promise = blah.impl.connect_input(input);
_STAR_promise.then((function (p1__2409_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(stream,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,p1__2409_SHARP_], null));
})).catch((function (p1__2410_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(stream,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,p1__2410_SHARP_], null));
}));

return stream;
});
blah.impl.processor_js = "class WorkletProcessor extends AudioWorkletProcessor {\n      process (inputs, outputs, params) {\n        const input = inputs[0];\n    \n        let frames = [];\n        for (let ch = 0; ch < input.length; ch++) {\n          const samples = input[ch];\n          frames[ch] = samples;\n        }\n    \n        this.port.postMessage(frames);\n        \n        return true;\n      }\n    }\n\n    registerProcessor('worklet', WorkletProcessor);";
blah.impl.processor_url = (function blah$impl$processor_url(){
return URL.createObjectURL((new Blob([blah.impl.processor_js],({"type": "application/javascript"}))));
});
blah.impl.create_context = (function blah$impl$create_context(){
if((typeof AudioContext !== 'undefined')){
return (new AudioContext());
} else {
return (new webkitAudioContext());
}
});
/**
 * Create a map consisting of the node, source, context, and media stream
 */
blah.impl.create_transport = (function blah$impl$create_transport(context,media_stream){
var node = (new AudioWorkletNode(context,"worklet"));
var source = context.createMediaStreamSource(media_stream);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$node,node,cljs.core.cst$kw$source,source,cljs.core.cst$kw$context,context,cljs.core.cst$kw$media_DASH_stream,media_stream], null);
});
blah.impl.init_transport = (function blah$impl$init_transport(ch,context,media_stream){
var url = blah.impl.processor_url();
var _STAR_module = context.audioWorklet.addModule(url);
return _STAR_module.then((function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,blah.impl.create_transport(context,media_stream)], null));
})).catch((function (p1__2411_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,p1__2411_SHARP_], null));
}));
});
/**
 * Create a transport channel from a stream channel. Receives a connected transport
 */
blah.impl.transport_ch = (function blah$impl$transport_ch(stream,context){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__2284__auto___2442 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_2430){
var state_val_2431 = (state_2430[(1)]);
if((state_val_2431 === (1))){
var state_2430__$1 = state_2430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2430__$1,(2),stream);
} else {
if((state_val_2431 === (2))){
var inst_2416 = (state_2430[(2)]);
var inst_2417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_2416,(0),null);
var inst_2418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_2416,(1),null);
var inst_2419 = cljs.core.not(inst_2417);
var state_2430__$1 = (function (){var statearr_2432 = state_2430;
(statearr_2432[(7)] = inst_2418);

return statearr_2432;
})();
if(inst_2419){
var statearr_2433_2443 = state_2430__$1;
(statearr_2433_2443[(1)] = (3));

} else {
var statearr_2434_2444 = state_2430__$1;
(statearr_2434_2444[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2431 === (3))){
var inst_2418 = (state_2430[(7)]);
var inst_2421 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2422 = [false,inst_2418];
var inst_2423 = (new cljs.core.PersistentVector(null,2,(5),inst_2421,inst_2422,null));
var inst_2424 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,inst_2423);
var state_2430__$1 = state_2430;
var statearr_2435_2445 = state_2430__$1;
(statearr_2435_2445[(2)] = inst_2424);

(statearr_2435_2445[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2431 === (4))){
var inst_2418 = (state_2430[(7)]);
var inst_2426 = blah.impl.init_transport(ch,context,inst_2418);
var state_2430__$1 = state_2430;
var statearr_2436_2446 = state_2430__$1;
(statearr_2436_2446[(2)] = inst_2426);

(statearr_2436_2446[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2431 === (5))){
var inst_2428 = (state_2430[(2)]);
var state_2430__$1 = state_2430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2430__$1,inst_2428);
} else {
return null;
}
}
}
}
}
});
return (function() {
var blah$impl$transport_ch_$_state_machine__2262__auto__ = null;
var blah$impl$transport_ch_$_state_machine__2262__auto____0 = (function (){
var statearr_2437 = [null,null,null,null,null,null,null,null];
(statearr_2437[(0)] = blah$impl$transport_ch_$_state_machine__2262__auto__);

(statearr_2437[(1)] = (1));

return statearr_2437;
});
var blah$impl$transport_ch_$_state_machine__2262__auto____1 = (function (state_2430){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_2430);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e2438){var ex__2265__auto__ = e2438;
var statearr_2439_2447 = state_2430;
(statearr_2439_2447[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_2430[(4)]))){
var statearr_2440_2448 = state_2430;
(statearr_2440_2448[(1)] = cljs.core.first((state_2430[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__2449 = state_2430;
state_2430 = G__2449;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
blah$impl$transport_ch_$_state_machine__2262__auto__ = function(state_2430){
switch(arguments.length){
case 0:
return blah$impl$transport_ch_$_state_machine__2262__auto____0.call(this);
case 1:
return blah$impl$transport_ch_$_state_machine__2262__auto____1.call(this,state_2430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blah$impl$transport_ch_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = blah$impl$transport_ch_$_state_machine__2262__auto____0;
blah$impl$transport_ch_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = blah$impl$transport_ch_$_state_machine__2262__auto____1;
return blah$impl$transport_ch_$_state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_2441 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_2441[(6)] = c__2284__auto___2442);

return statearr_2441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));


return ch;
});
/**
 * Begins streaming data over the transport, in this case connecting a media stream to
 * an audio worklet. Data is pushed to the given data channel as it is made available by the worklet.
 */
blah.impl.connect_transport = (function blah$impl$connect_transport(p__2451,data_ch,close_ch){
var map__2452 = p__2451;
var map__2452__$1 = cljs.core.__destructure_map(map__2452);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2452__$1,cljs.core.cst$kw$source);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2452__$1,cljs.core.cst$kw$node);
var media_stream = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2452__$1,cljs.core.cst$kw$media_DASH_stream);
var port = node.port;
var seq__2453_2480 = cljs.core.seq(media_stream.getAudioTracks());
var chunk__2454_2481 = null;
var count__2455_2482 = (0);
var i__2456_2483 = (0);
while(true){
if((i__2456_2483 < count__2455_2482)){
var track_2484 = chunk__2454_2481.cljs$core$IIndexed$_nth$arity$2(null,i__2456_2483);
track_2484.addEventListener("end",((function (seq__2453_2480,chunk__2454_2481,count__2455_2482,i__2456_2483,track_2484,port,map__2452,map__2452__$1,source,node,media_stream){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(close_ch,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reason,cljs.core.cst$kw$ended,cljs.core.cst$kw$error,null], null));
});})(seq__2453_2480,chunk__2454_2481,count__2455_2482,i__2456_2483,track_2484,port,map__2452,map__2452__$1,source,node,media_stream))
);


var G__2485 = seq__2453_2480;
var G__2486 = chunk__2454_2481;
var G__2487 = count__2455_2482;
var G__2488 = (i__2456_2483 + (1));
seq__2453_2480 = G__2485;
chunk__2454_2481 = G__2486;
count__2455_2482 = G__2487;
i__2456_2483 = G__2488;
continue;
} else {
var temp__5753__auto___2489 = cljs.core.seq(seq__2453_2480);
if(temp__5753__auto___2489){
var seq__2453_2490__$1 = temp__5753__auto___2489;
if(cljs.core.chunked_seq_QMARK_(seq__2453_2490__$1)){
var c__4679__auto___2491 = cljs.core.chunk_first(seq__2453_2490__$1);
var G__2492 = cljs.core.chunk_rest(seq__2453_2490__$1);
var G__2493 = c__4679__auto___2491;
var G__2494 = cljs.core.count(c__4679__auto___2491);
var G__2495 = (0);
seq__2453_2480 = G__2492;
chunk__2454_2481 = G__2493;
count__2455_2482 = G__2494;
i__2456_2483 = G__2495;
continue;
} else {
var track_2496 = cljs.core.first(seq__2453_2490__$1);
track_2496.addEventListener("end",((function (seq__2453_2480,chunk__2454_2481,count__2455_2482,i__2456_2483,track_2496,seq__2453_2490__$1,temp__5753__auto___2489,port,map__2452,map__2452__$1,source,node,media_stream){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(close_ch,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reason,cljs.core.cst$kw$ended,cljs.core.cst$kw$error,null], null));
});})(seq__2453_2480,chunk__2454_2481,count__2455_2482,i__2456_2483,track_2496,seq__2453_2490__$1,temp__5753__auto___2489,port,map__2452,map__2452__$1,source,node,media_stream))
);


var G__2497 = cljs.core.next(seq__2453_2490__$1);
var G__2498 = null;
var G__2499 = (0);
var G__2500 = (0);
seq__2453_2480 = G__2497;
chunk__2454_2481 = G__2498;
count__2455_2482 = G__2499;
i__2456_2483 = G__2500;
continue;
}
} else {
}
}
break;
}

(port.onmessage = (function (p1__2450_SHARP_){
var c__2284__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_2469){
var state_val_2470 = (state_2469[(1)]);
if((state_val_2470 === (1))){
var inst_2457 = p1__2450_SHARP_.data;
var state_2469__$1 = state_2469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_2469__$1,(2),data_ch,inst_2457);
} else {
if((state_val_2470 === (2))){
var inst_2459 = (state_2469[(2)]);
var state_2469__$1 = state_2469;
if(cljs.core.truth_(inst_2459)){
var statearr_2471_2501 = state_2469__$1;
(statearr_2471_2501[(1)] = (3));

} else {
var statearr_2472_2502 = state_2469__$1;
(statearr_2472_2502[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2470 === (3))){
var state_2469__$1 = state_2469;
var statearr_2473_2503 = state_2469__$1;
(statearr_2473_2503[(2)] = null);

(statearr_2473_2503[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2470 === (4))){
var inst_2462 = [cljs.core.cst$kw$reason,cljs.core.cst$kw$error];
var inst_2463 = [cljs.core.cst$kw$closed,null];
var inst_2464 = cljs.core.PersistentHashMap.fromArrays(inst_2462,inst_2463);
var inst_2465 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(close_ch,inst_2464);
var state_2469__$1 = state_2469;
var statearr_2474_2504 = state_2469__$1;
(statearr_2474_2504[(2)] = inst_2465);

(statearr_2474_2504[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2470 === (5))){
var inst_2467 = (state_2469[(2)]);
var state_2469__$1 = state_2469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2469__$1,inst_2467);
} else {
return null;
}
}
}
}
}
});
return (function() {
var blah$impl$connect_transport_$_state_machine__2262__auto__ = null;
var blah$impl$connect_transport_$_state_machine__2262__auto____0 = (function (){
var statearr_2475 = [null,null,null,null,null,null,null];
(statearr_2475[(0)] = blah$impl$connect_transport_$_state_machine__2262__auto__);

(statearr_2475[(1)] = (1));

return statearr_2475;
});
var blah$impl$connect_transport_$_state_machine__2262__auto____1 = (function (state_2469){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_2469);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e2476){var ex__2265__auto__ = e2476;
var statearr_2477_2505 = state_2469;
(statearr_2477_2505[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_2469[(4)]))){
var statearr_2478_2506 = state_2469;
(statearr_2478_2506[(1)] = cljs.core.first((state_2469[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__2507 = state_2469;
state_2469 = G__2507;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
blah$impl$connect_transport_$_state_machine__2262__auto__ = function(state_2469){
switch(arguments.length){
case 0:
return blah$impl$connect_transport_$_state_machine__2262__auto____0.call(this);
case 1:
return blah$impl$connect_transport_$_state_machine__2262__auto____1.call(this,state_2469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blah$impl$connect_transport_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = blah$impl$connect_transport_$_state_machine__2262__auto____0;
blah$impl$connect_transport_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = blah$impl$connect_transport_$_state_machine__2262__auto____1;
return blah$impl$connect_transport_$_state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_2479 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_2479[(6)] = c__2284__auto__);

return statearr_2479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));

return c__2284__auto__;
}));

return source.connect(node);
});
/**
 * Disconnect the source from the worklet. Also stops audio
 * tracks from the media stream.
 */
blah.impl.disconnect_transport = (function blah$impl$disconnect_transport(p__2508){
var map__2509 = p__2508;
var map__2509__$1 = cljs.core.__destructure_map(map__2509);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2509__$1,cljs.core.cst$kw$source);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2509__$1,cljs.core.cst$kw$node);
var media_stream = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2509__$1,cljs.core.cst$kw$media_DASH_stream);
blah.impl.stop_audio_tracks(media_stream);

return source.disconnect(node);
});
/**
 * Waits for a signal to close down the transport. Handles disconnecting
 *   an active transport, closing channels, and throwing errors if present
 */
blah.impl.handle_close = (function blah$impl$handle_close(transport,data_ch,close_ch){
var c__2284__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_2571){
var state_val_2572 = (state_2571[(1)]);
if((state_val_2572 === (7))){
var inst_2514 = (state_2571[(7)]);
var inst_2562 = (state_2571[(2)]);
var inst_2563 = (inst_2514 == null);
var inst_2564 = cljs.core.not(inst_2563);
var state_2571__$1 = (function (){var statearr_2573 = state_2571;
(statearr_2573[(8)] = inst_2562);

return statearr_2573;
})();
if(inst_2564){
var statearr_2574_2610 = state_2571__$1;
(statearr_2574_2610[(1)] = (17));

} else {
var statearr_2575_2611 = state_2571__$1;
(statearr_2575_2611[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2572 === (1))){
var state_2571__$1 = state_2571;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2571__$1,(2),close_ch);
} else {
if((state_val_2572 === (4))){
var state_2571__$1 = state_2571;
var statearr_2576_2612 = state_2571__$1;
(statearr_2576_2612[(2)] = null);

(statearr_2576_2612[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2572 === (15))){
var inst_2541 = (state_2571[(9)]);
var inst_2550 = cljs.core.first(inst_2541);
var inst_2551 = cljs.core.async.close_BANG_(inst_2550);
var inst_2552 = cljs.core.next(inst_2541);
var inst_2528 = inst_2552;
var inst_2529 = null;
var inst_2530 = (0);
var inst_2531 = (0);
var state_2571__$1 = (function (){var statearr_2577 = state_2571;
(statearr_2577[(10)] = inst_2529);

(statearr_2577[(11)] = inst_2531);

(statearr_2577[(12)] = inst_2530);

(statearr_2577[(13)] = inst_2551);

(statearr_2577[(14)] = inst_2528);

return statearr_2577;
})();
var statearr_2578_2613 = state_2571__$1;
(statearr_2578_2613[(2)] = null);

(statearr_2578_2613[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2572 === (13))){
var inst_2558 = (state_2571[(2)]);
var state_2571__$1 = state_2571;
var statearr_2579_2614 = state_2571__$1;
(statearr_2579_2614[(2)] = inst_2558);

(statearr_2579_2614[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2572 === (6))){
var inst_2531 = (state_2571[(11)]);
var inst_2530 = (state_2571[(12)]);
var inst_2533 = (inst_2531 < inst_2530);
var inst_2534 = inst_2533;
var state_2571__$1 = state_2571;
if(cljs.core.truth_(inst_2534)){
var statearr_2580_2615 = state_2571__$1;
(statearr_2580_2615[(1)] = (8));

} else {
var statearr_2581_2616 = state_2571__$1;
(statearr_2581_2616[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2572 === (17))){
var inst_2514 = (state_2571[(7)]);
var inst_2566 = (function(){throw inst_2514})();
var state_2571__$1 = state_2571;
var statearr_2582_2617 = state_2571__$1;
(statearr_2582_2617[(2)] = inst_2566);

(statearr_2582_2617[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2572 === (3))){
var inst_2516 = blah.impl.disconnect_transport(transport);
var state_2571__$1 = state_2571;
var statearr_2583_2618 = state_2571__$1;
(statearr_2583_2618[(2)] = inst_2516);

(statearr_2583_2618[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2572 === (12))){
var state_2571__$1 = state_2571;
var statearr_2584_2619 = state_2571__$1;
(statearr_2584_2619[(2)] = null);

(statearr_2584_2619[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2572 === (2))){
var inst_2512 = (state_2571[(2)]);
var inst_2513 = cljs.core.__destructure_map(inst_2512);
var inst_2514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_2513,cljs.core.cst$kw$error);
var state_2571__$1 = (function (){var statearr_2585 = state_2571;
(statearr_2585[(7)] = inst_2514);

return statearr_2585;
})();
if(cljs.core.truth_(transport)){
var statearr_2586_2620 = state_2571__$1;
(statearr_2586_2620[(1)] = (3));

} else {
var statearr_2587_2621 = state_2571__$1;
(statearr_2587_2621[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2572 === (19))){
var inst_2569 = (state_2571[(2)]);
var state_2571__$1 = state_2571;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2571__$1,inst_2569);
} else {
if((state_val_2572 === (11))){
var inst_2541 = (state_2571[(9)]);
var inst_2543 = cljs.core.chunked_seq_QMARK_(inst_2541);
var state_2571__$1 = state_2571;
if(inst_2543){
var statearr_2588_2622 = state_2571__$1;
(statearr_2588_2622[(1)] = (14));

} else {
var statearr_2589_2623 = state_2571__$1;
(statearr_2589_2623[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2572 === (9))){
var inst_2541 = (state_2571[(9)]);
var inst_2528 = (state_2571[(14)]);
var inst_2541__$1 = cljs.core.seq(inst_2528);
var state_2571__$1 = (function (){var statearr_2590 = state_2571;
(statearr_2590[(9)] = inst_2541__$1);

return statearr_2590;
})();
if(inst_2541__$1){
var statearr_2591_2624 = state_2571__$1;
(statearr_2591_2624[(1)] = (11));

} else {
var statearr_2592_2625 = state_2571__$1;
(statearr_2592_2625[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2572 === (5))){
var inst_2519 = (state_2571[(2)]);
var inst_2524 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2525 = [data_ch,close_ch];
var inst_2526 = (new cljs.core.PersistentVector(null,2,(5),inst_2524,inst_2525,null));
var inst_2527 = cljs.core.seq(inst_2526);
var inst_2528 = inst_2527;
var inst_2529 = null;
var inst_2530 = (0);
var inst_2531 = (0);
var state_2571__$1 = (function (){var statearr_2593 = state_2571;
(statearr_2593[(10)] = inst_2529);

(statearr_2593[(11)] = inst_2531);

(statearr_2593[(12)] = inst_2530);

(statearr_2593[(15)] = inst_2519);

(statearr_2593[(14)] = inst_2528);

return statearr_2593;
})();
var statearr_2594_2626 = state_2571__$1;
(statearr_2594_2626[(2)] = null);

(statearr_2594_2626[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2572 === (14))){
var inst_2541 = (state_2571[(9)]);
var inst_2545 = cljs.core.chunk_first(inst_2541);
var inst_2546 = cljs.core.chunk_rest(inst_2541);
var inst_2547 = cljs.core.count(inst_2545);
var inst_2528 = inst_2546;
var inst_2529 = inst_2545;
var inst_2530 = inst_2547;
var inst_2531 = (0);
var state_2571__$1 = (function (){var statearr_2595 = state_2571;
(statearr_2595[(10)] = inst_2529);

(statearr_2595[(11)] = inst_2531);

(statearr_2595[(12)] = inst_2530);

(statearr_2595[(14)] = inst_2528);

return statearr_2595;
})();
var statearr_2596_2627 = state_2571__$1;
(statearr_2596_2627[(2)] = null);

(statearr_2596_2627[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2572 === (16))){
var inst_2555 = (state_2571[(2)]);
var state_2571__$1 = state_2571;
var statearr_2597_2628 = state_2571__$1;
(statearr_2597_2628[(2)] = inst_2555);

(statearr_2597_2628[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2572 === (10))){
var inst_2560 = (state_2571[(2)]);
var state_2571__$1 = state_2571;
var statearr_2601_2629 = state_2571__$1;
(statearr_2601_2629[(2)] = inst_2560);

(statearr_2601_2629[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2572 === (18))){
var state_2571__$1 = state_2571;
var statearr_2602_2630 = state_2571__$1;
(statearr_2602_2630[(2)] = null);

(statearr_2602_2630[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2572 === (8))){
var inst_2529 = (state_2571[(10)]);
var inst_2531 = (state_2571[(11)]);
var inst_2530 = (state_2571[(12)]);
var inst_2528 = (state_2571[(14)]);
var inst_2536 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_2529,inst_2531);
var inst_2537 = cljs.core.async.close_BANG_(inst_2536);
var inst_2538 = (inst_2531 + (1));
var tmp2598 = inst_2529;
var tmp2599 = inst_2530;
var tmp2600 = inst_2528;
var inst_2528__$1 = tmp2600;
var inst_2529__$1 = tmp2598;
var inst_2530__$1 = tmp2599;
var inst_2531__$1 = inst_2538;
var state_2571__$1 = (function (){var statearr_2603 = state_2571;
(statearr_2603[(16)] = inst_2537);

(statearr_2603[(10)] = inst_2529__$1);

(statearr_2603[(11)] = inst_2531__$1);

(statearr_2603[(12)] = inst_2530__$1);

(statearr_2603[(14)] = inst_2528__$1);

return statearr_2603;
})();
var statearr_2604_2631 = state_2571__$1;
(statearr_2604_2631[(2)] = null);

(statearr_2604_2631[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var blah$impl$handle_close_$_state_machine__2262__auto__ = null;
var blah$impl$handle_close_$_state_machine__2262__auto____0 = (function (){
var statearr_2605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2605[(0)] = blah$impl$handle_close_$_state_machine__2262__auto__);

(statearr_2605[(1)] = (1));

return statearr_2605;
});
var blah$impl$handle_close_$_state_machine__2262__auto____1 = (function (state_2571){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_2571);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e2606){var ex__2265__auto__ = e2606;
var statearr_2607_2632 = state_2571;
(statearr_2607_2632[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_2571[(4)]))){
var statearr_2608_2633 = state_2571;
(statearr_2608_2633[(1)] = cljs.core.first((state_2571[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__2634 = state_2571;
state_2571 = G__2634;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
blah$impl$handle_close_$_state_machine__2262__auto__ = function(state_2571){
switch(arguments.length){
case 0:
return blah$impl$handle_close_$_state_machine__2262__auto____0.call(this);
case 1:
return blah$impl$handle_close_$_state_machine__2262__auto____1.call(this,state_2571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blah$impl$handle_close_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = blah$impl$handle_close_$_state_machine__2262__auto____0;
blah$impl$handle_close_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = blah$impl$handle_close_$_state_machine__2262__auto____1;
return blah$impl$handle_close_$_state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_2609 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_2609[(6)] = c__2284__auto__);

return statearr_2609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));

return c__2284__auto__;
});
/**
 * Start the transport and return a data channel to stream audio data over
 */
blah.impl.start_transport = (function blah$impl$start_transport(transport_ch,data_ch,close_ch){
var c__2284__auto___2675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_2658){
var state_val_2659 = (state_2658[(1)]);
if((state_val_2659 === (7))){
var inst_2641 = (state_2658[(7)]);
var state_2658__$1 = state_2658;
var statearr_2660_2676 = state_2658__$1;
(statearr_2660_2676[(2)] = inst_2641);

(statearr_2660_2676[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2659 === (1))){
var state_2658__$1 = state_2658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2658__$1,(2),transport_ch);
} else {
if((state_val_2659 === (4))){
var inst_2641 = (state_2658[(7)]);
var inst_2645 = [cljs.core.cst$kw$error,cljs.core.cst$kw$reason];
var inst_2646 = [inst_2641,cljs.core.cst$kw$error];
var inst_2647 = cljs.core.PersistentHashMap.fromArrays(inst_2645,inst_2646);
var state_2658__$1 = state_2658;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_2658__$1,(6),close_ch,inst_2647);
} else {
if((state_val_2659 === (6))){
var inst_2649 = (state_2658[(2)]);
var state_2658__$1 = state_2658;
var statearr_2661_2677 = state_2658__$1;
(statearr_2661_2677[(2)] = inst_2649);

(statearr_2661_2677[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2659 === (3))){
var inst_2641 = (state_2658[(7)]);
var inst_2643 = blah.impl.connect_transport(inst_2641,data_ch,close_ch);
var state_2658__$1 = state_2658;
var statearr_2662_2678 = state_2658__$1;
(statearr_2662_2678[(2)] = inst_2643);

(statearr_2662_2678[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2659 === (2))){
var inst_2640 = (state_2658[(8)]);
var inst_2639 = (state_2658[(2)]);
var inst_2640__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_2639,(0),null);
var inst_2641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_2639,(1),null);
var state_2658__$1 = (function (){var statearr_2663 = state_2658;
(statearr_2663[(8)] = inst_2640__$1);

(statearr_2663[(7)] = inst_2641);

return statearr_2663;
})();
if(cljs.core.truth_(inst_2640__$1)){
var statearr_2664_2679 = state_2658__$1;
(statearr_2664_2679[(1)] = (3));

} else {
var statearr_2665_2680 = state_2658__$1;
(statearr_2665_2680[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2659 === (9))){
var inst_2655 = (state_2658[(2)]);
var inst_2656 = blah.impl.handle_close(inst_2655,data_ch,close_ch);
var state_2658__$1 = state_2658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2658__$1,inst_2656);
} else {
if((state_val_2659 === (5))){
var inst_2640 = (state_2658[(8)]);
var inst_2651 = (state_2658[(2)]);
var state_2658__$1 = (function (){var statearr_2666 = state_2658;
(statearr_2666[(9)] = inst_2651);

return statearr_2666;
})();
if(cljs.core.truth_(inst_2640)){
var statearr_2667_2681 = state_2658__$1;
(statearr_2667_2681[(1)] = (7));

} else {
var statearr_2668_2682 = state_2658__$1;
(statearr_2668_2682[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2659 === (8))){
var state_2658__$1 = state_2658;
var statearr_2669_2683 = state_2658__$1;
(statearr_2669_2683[(2)] = null);

(statearr_2669_2683[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var blah$impl$start_transport_$_state_machine__2262__auto__ = null;
var blah$impl$start_transport_$_state_machine__2262__auto____0 = (function (){
var statearr_2670 = [null,null,null,null,null,null,null,null,null,null];
(statearr_2670[(0)] = blah$impl$start_transport_$_state_machine__2262__auto__);

(statearr_2670[(1)] = (1));

return statearr_2670;
});
var blah$impl$start_transport_$_state_machine__2262__auto____1 = (function (state_2658){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_2658);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e2671){var ex__2265__auto__ = e2671;
var statearr_2672_2684 = state_2658;
(statearr_2672_2684[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_2658[(4)]))){
var statearr_2673_2685 = state_2658;
(statearr_2673_2685[(1)] = cljs.core.first((state_2658[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__2686 = state_2658;
state_2658 = G__2686;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
blah$impl$start_transport_$_state_machine__2262__auto__ = function(state_2658){
switch(arguments.length){
case 0:
return blah$impl$start_transport_$_state_machine__2262__auto____0.call(this);
case 1:
return blah$impl$start_transport_$_state_machine__2262__auto____1.call(this,state_2658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blah$impl$start_transport_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = blah$impl$start_transport_$_state_machine__2262__auto____0;
blah$impl$start_transport_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = blah$impl$start_transport_$_state_machine__2262__auto____1;
return blah$impl$start_transport_$_state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_2674 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_2674[(6)] = c__2284__auto___2675);

return statearr_2674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));


return data_ch;
});

/**
 * @interface
 */
blah.impl.AudioContext = function(){};

var blah$impl$AudioContext$audio_context$dyn_2687 = (function (session){
var x__4550__auto__ = (((session == null))?null:session);
var m__4551__auto__ = (blah.impl.audio_context[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(session) : m__4551__auto__.call(null,session));
} else {
var m__4549__auto__ = (blah.impl.audio_context["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(session) : m__4549__auto__.call(null,session));
} else {
throw cljs.core.missing_protocol("AudioContext.audio-context",session);
}
}
});
/**
 * Return an audio context from the session
 */
blah.impl.audio_context = (function blah$impl$audio_context(session){
if((((!((session == null)))) && ((!((session.blah$impl$AudioContext$audio_context$arity$1 == null)))))){
return session.blah$impl$AudioContext$audio_context$arity$1(session);
} else {
return blah$impl$AudioContext$audio_context$dyn_2687(session);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {blah.impl.AudioContext}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
blah.impl.Session = (function (data_ch,context,__meta,__extmap,__hash){
this.data_ch = data_ch;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(blah.impl.Session.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(blah.impl.Session.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k2689,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__2693 = k2689;
var G__2693__$1 = (((G__2693 instanceof cljs.core.Keyword))?G__2693.fqn:null);
switch (G__2693__$1) {
case "data-ch":
return self__.data_ch;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k2689,else__4505__auto__);

}
}));

(blah.impl.Session.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__2694){
var vec__2695 = p__2694;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2695,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2695,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(blah.impl.Session.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#blah.impl.Session{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data_DASH_ch,self__.data_ch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$context,self__.context],null))], null),self__.__extmap));
}));

(blah.impl.Session.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__2688){
var self__ = this;
var G__2688__$1 = this;
return (new cljs.core.RecordIter((0),G__2688__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_ch,cljs.core.cst$kw$context], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(blah.impl.Session.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(blah.impl.Session.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(blah.impl.Session.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.data_ch);
}));

(blah.impl.Session.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.data_ch);
}));

(blah.impl.Session.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new blah.impl.Session(self__.data_ch,self__.context,self__.__meta,self__.__extmap,self__.__hash));
}));

(blah.impl.Session.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(blah.impl.Session.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(blah.impl.Session.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn_1handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.data_ch,fn_1handler);
}));

(blah.impl.Session.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (){var fexpr__2698 = (function (coll__4499__auto__){
return (1644404183 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
});
return fexpr__2698(this__4498__auto____$1);
})();
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(blah.impl.Session.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this2690,other2691){
var self__ = this;
var this2690__$1 = this;
return (((!((other2691 == null)))) && ((((this2690__$1.constructor === other2691.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this2690__$1.data_ch,other2691.data_ch)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this2690__$1.context,other2691.context)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this2690__$1.__extmap,other2691.__extmap)))))))));
}));

(blah.impl.Session.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data_DASH_ch,null,cljs.core.cst$kw$context,null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new blah.impl.Session(self__.data_ch,self__.context,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(blah.impl.Session.prototype.blah$impl$AudioContext$ = cljs.core.PROTOCOL_SENTINEL);

(blah.impl.Session.prototype.blah$impl$AudioContext$audio_context$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.context;
}));

(blah.impl.Session.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k2689){
var self__ = this;
var this__4509__auto____$1 = this;
var G__2699 = k2689;
var G__2699__$1 = (((G__2699 instanceof cljs.core.Keyword))?G__2699.fqn:null);
switch (G__2699__$1) {
case "data-ch":
case "context":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k2689);

}
}));

(blah.impl.Session.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__2688){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__2700 = cljs.core.keyword_identical_QMARK_;
var expr__2701 = k__4511__auto__;
if(cljs.core.truth_((function (){var G__2703 = cljs.core.cst$kw$data_DASH_ch;
var G__2704 = expr__2701;
return (pred__2700.cljs$core$IFn$_invoke$arity$2 ? pred__2700.cljs$core$IFn$_invoke$arity$2(G__2703,G__2704) : pred__2700.call(null,G__2703,G__2704));
})())){
return (new blah.impl.Session(G__2688,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__2705 = cljs.core.cst$kw$context;
var G__2706 = expr__2701;
return (pred__2700.cljs$core$IFn$_invoke$arity$2 ? pred__2700.cljs$core$IFn$_invoke$arity$2(G__2705,G__2706) : pred__2700.call(null,G__2705,G__2706));
})())){
return (new blah.impl.Session(self__.data_ch,G__2688,self__.__meta,self__.__extmap,null));
} else {
return (new blah.impl.Session(self__.data_ch,self__.context,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__2688),null));
}
}
}));

(blah.impl.Session.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$data_DASH_ch,self__.data_ch,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$context,self__.context,null))], null),self__.__extmap));
}));

(blah.impl.Session.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__2688){
var self__ = this;
var this__4501__auto____$1 = this;
return (new blah.impl.Session(self__.data_ch,self__.context,G__2688,self__.__extmap,self__.__hash));
}));

(blah.impl.Session.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4508__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(blah.impl.Session.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data_DASH_ch,cljs.core.cst$sym$context], null);
}));

(blah.impl.Session.cljs$lang$type = true);

(blah.impl.Session.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"blah.impl/Session",null,(1),null));
}));

(blah.impl.Session.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"blah.impl/Session");
}));

/**
 * Positional factory function for blah.impl/Session.
 */
blah.impl.__GT_Session = (function blah$impl$__GT_Session(data_ch,context){
return (new blah.impl.Session(data_ch,context,null,null,null));
});

/**
 * Factory function for blah.impl/Session, taking a map of keywords to field values.
 */
blah.impl.map__GT_Session = (function blah$impl$map__GT_Session(G__2692){
var extmap__4542__auto__ = (function (){var G__2707 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__2692,cljs.core.cst$kw$data_DASH_ch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$context], 0));
if(cljs.core.record_QMARK_(G__2692)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__2707);
} else {
return G__2707;
}
})();
return (new blah.impl.Session(cljs.core.cst$kw$data_DASH_ch.cljs$core$IFn$_invoke$arity$1(G__2692),cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(G__2692),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

/**
 * A session behaves like a core.async ReadPort. The only difference
 * is that it also contains a reference to the AudioContext used for listening.
 * This is useful for using an already "warm" audio context. This makes it possible
 * to play audio on it without forcing user interaction again (some browsers require
 * a user action before allowing audio within a context)
 */
blah.impl.create_session = (function blah$impl$create_session(data_ch,context){
return blah.impl.__GT_Session(data_ch,context);
});
blah.impl.listen = (function blah$impl$listen(var_args){
var G__2711 = arguments.length;
switch (G__2711) {
case 3:
return blah.impl.listen.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return blah.impl.listen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return blah.impl.listen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return blah.impl.listen.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(blah.impl.listen.cljs$core$IFn$_invoke$arity$3 = (function (input,xform,ex_handler){
var context = blah.impl.create_context();
var data_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(context.sampleRate,xform,ex_handler);
var close_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
return blah.impl.create_session(blah.impl.start_transport(blah.impl.transport_ch(blah.impl.stream_ch(input),context),data_ch,close_ch),context);
}));

(blah.impl.listen.cljs$core$IFn$_invoke$arity$2 = (function (input,xform){
return blah.impl.listen.cljs$core$IFn$_invoke$arity$3(input,xform,null);
}));

(blah.impl.listen.cljs$core$IFn$_invoke$arity$1 = (function (input){
return blah.impl.listen.cljs$core$IFn$_invoke$arity$2(input,blah.transforms.float32);
}));

(blah.impl.listen.cljs$core$IFn$_invoke$arity$0 = (function (){
return blah.impl.listen.cljs$core$IFn$_invoke$arity$1(null);
}));

(blah.impl.listen.cljs$lang$maxFixedArity = 3);

blah.impl.request_permission = (function blah$impl$request_permission(){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var _STAR_prom = blah.impl.connect_input(null);
_STAR_prom.then((function (p1__2713_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,p1__2713_SHARP_);
})).catch((function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,false);
}));

var c__2284__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_2723){
var state_val_2724 = (state_2723[(1)]);
if((state_val_2724 === (1))){
var state_2723__$1 = state_2723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2723__$1,(2),ch);
} else {
if((state_val_2724 === (2))){
var inst_2715 = (state_2723[(7)]);
var inst_2715__$1 = (state_2723[(2)]);
var state_2723__$1 = (function (){var statearr_2725 = state_2723;
(statearr_2725[(7)] = inst_2715__$1);

return statearr_2725;
})();
if(cljs.core.truth_(inst_2715__$1)){
var statearr_2726_2735 = state_2723__$1;
(statearr_2726_2735[(1)] = (3));

} else {
var statearr_2727_2736 = state_2723__$1;
(statearr_2727_2736[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2724 === (3))){
var inst_2715 = (state_2723[(7)]);
var inst_2717 = blah.impl.stop_audio_tracks(inst_2715);
var inst_2718 = (inst_2717 == null);
var state_2723__$1 = state_2723;
var statearr_2728_2737 = state_2723__$1;
(statearr_2728_2737[(2)] = inst_2718);

(statearr_2728_2737[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2724 === (4))){
var state_2723__$1 = state_2723;
var statearr_2729_2738 = state_2723__$1;
(statearr_2729_2738[(2)] = false);

(statearr_2729_2738[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2724 === (5))){
var inst_2721 = (state_2723[(2)]);
var state_2723__$1 = state_2723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2723__$1,inst_2721);
} else {
return null;
}
}
}
}
}
});
return (function() {
var blah$impl$request_permission_$_state_machine__2262__auto__ = null;
var blah$impl$request_permission_$_state_machine__2262__auto____0 = (function (){
var statearr_2730 = [null,null,null,null,null,null,null,null];
(statearr_2730[(0)] = blah$impl$request_permission_$_state_machine__2262__auto__);

(statearr_2730[(1)] = (1));

return statearr_2730;
});
var blah$impl$request_permission_$_state_machine__2262__auto____1 = (function (state_2723){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_2723);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e2731){var ex__2265__auto__ = e2731;
var statearr_2732_2739 = state_2723;
(statearr_2732_2739[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_2723[(4)]))){
var statearr_2733_2740 = state_2723;
(statearr_2733_2740[(1)] = cljs.core.first((state_2723[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__2741 = state_2723;
state_2723 = G__2741;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
blah$impl$request_permission_$_state_machine__2262__auto__ = function(state_2723){
switch(arguments.length){
case 0:
return blah$impl$request_permission_$_state_machine__2262__auto____0.call(this);
case 1:
return blah$impl$request_permission_$_state_machine__2262__auto____1.call(this,state_2723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blah$impl$request_permission_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = blah$impl$request_permission_$_state_machine__2262__auto____0;
blah$impl$request_permission_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = blah$impl$request_permission_$_state_machine__2262__auto____1;
return blah$impl$request_permission_$_state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_2734 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_2734[(6)] = c__2284__auto__);

return statearr_2734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));

return c__2284__auto__;
});
