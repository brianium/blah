// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('blah.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('blah.transforms');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
blah.impl.media_devices = navigator.mediaDevices;
blah.impl.stop_audio_tracks = (function blah$impl$stop_audio_tracks(media_stream){
var seq__2345 = cljs.core.seq(media_stream.getAudioTracks());
var chunk__2346 = null;
var count__2347 = (0);
var i__2348 = (0);
while(true){
if((i__2348 < count__2347)){
var track = chunk__2346.cljs$core$IIndexed$_nth$arity$2(null,i__2348);
track.stop();


var G__2349 = seq__2345;
var G__2350 = chunk__2346;
var G__2351 = count__2347;
var G__2352 = (i__2348 + (1));
seq__2345 = G__2349;
chunk__2346 = G__2350;
count__2347 = G__2351;
i__2348 = G__2352;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__2345);
if(temp__5753__auto__){
var seq__2345__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2345__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__2345__$1);
var G__2353 = cljs.core.chunk_rest(seq__2345__$1);
var G__2354 = c__4679__auto__;
var G__2355 = cljs.core.count(c__4679__auto__);
var G__2356 = (0);
seq__2345 = G__2353;
chunk__2346 = G__2354;
count__2347 = G__2355;
i__2348 = G__2356;
continue;
} else {
var track = cljs.core.first(seq__2345__$1);
track.stop();


var G__2357 = cljs.core.next(seq__2345__$1);
var G__2358 = null;
var G__2359 = (0);
var G__2360 = (0);
seq__2345 = G__2357;
chunk__2346 = G__2358;
count__2347 = G__2359;
i__2348 = G__2360;
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
var G__2362 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__2361_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("audioinput",cljs.core.cst$kw$kind.cljs$core$IFn$_invoke$arity$1(p1__2361_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(blah.impl.info__GT_input,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(device_infos)));
return (fn_1.cljs$core$IFn$_invoke$arity$1 ? fn_1.cljs$core$IFn$_invoke$arity$1(G__2362) : fn_1.call(null,G__2362));
}));
});
blah.impl.input_ch = (function blah$impl$input_ch(){
var signal = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var data = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var listener = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(signal,cljs.core.cst$kw$ready);
});
blah.impl.media_devices.addEventListener("devicechange",listener);

blah.impl.query_inputs((function (p1__2363_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(data,p1__2363_SHARP_);
}));

var c__2284__auto___2391 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_2377){
var state_val_2378 = (state_2377[(1)]);
if((state_val_2378 === (1))){
var state_2377__$1 = state_2377;
var statearr_2379_2392 = state_2377__$1;
(statearr_2379_2392[(2)] = null);

(statearr_2379_2392[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2378 === (2))){
var state_2377__$1 = state_2377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2377__$1,(4),signal);
} else {
if((state_val_2378 === (3))){
var inst_2375 = (state_2377[(2)]);
var state_2377__$1 = state_2377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2377__$1,inst_2375);
} else {
if((state_val_2378 === (4))){
var inst_2366 = (state_2377[(2)]);
var state_2377__$1 = state_2377;
if(cljs.core.truth_(inst_2366)){
var statearr_2380_2393 = state_2377__$1;
(statearr_2380_2393[(1)] = (5));

} else {
var statearr_2381_2394 = state_2377__$1;
(statearr_2381_2394[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2378 === (5))){
var inst_2368 = (function (){return (function (inputs){
if(cljs.core.truth_(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(data,inputs))){
return null;
} else {
cljs.core.async.close_BANG_(signal);

return blah.impl.media_devices.removeEventListener("devicechange",listener);
}
});
})();
var inst_2369 = blah.impl.query_inputs(inst_2368);
var state_2377__$1 = (function (){var statearr_2382 = state_2377;
(statearr_2382[(7)] = inst_2369);

return statearr_2382;
})();
var statearr_2383_2395 = state_2377__$1;
(statearr_2383_2395[(2)] = null);

(statearr_2383_2395[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2378 === (6))){
var state_2377__$1 = state_2377;
var statearr_2384_2396 = state_2377__$1;
(statearr_2384_2396[(2)] = null);

(statearr_2384_2396[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2378 === (7))){
var inst_2373 = (state_2377[(2)]);
var state_2377__$1 = state_2377;
var statearr_2385_2397 = state_2377__$1;
(statearr_2385_2397[(2)] = inst_2373);

(statearr_2385_2397[(1)] = (3));


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
var statearr_2386 = [null,null,null,null,null,null,null,null];
(statearr_2386[(0)] = blah$impl$input_ch_$_state_machine__2262__auto__);

(statearr_2386[(1)] = (1));

return statearr_2386;
});
var blah$impl$input_ch_$_state_machine__2262__auto____1 = (function (state_2377){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_2377);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e2387){var ex__2265__auto__ = e2387;
var statearr_2388_2398 = state_2377;
(statearr_2388_2398[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_2377[(4)]))){
var statearr_2389_2399 = state_2377;
(statearr_2389_2399[(1)] = cljs.core.first((state_2377[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__2400 = state_2377;
state_2377 = G__2400;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
blah$impl$input_ch_$_state_machine__2262__auto__ = function(state_2377){
switch(arguments.length){
case 0:
return blah$impl$input_ch_$_state_machine__2262__auto____0.call(this);
case 1:
return blah$impl$input_ch_$_state_machine__2262__auto____1.call(this,state_2377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blah$impl$input_ch_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = blah$impl$input_ch_$_state_machine__2262__auto____0;
blah$impl$input_ch_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = blah$impl$input_ch_$_state_machine__2262__auto____1;
return blah$impl$input_ch_$_state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_2390 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_2390[(6)] = c__2284__auto___2391);

return statearr_2390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));


return data;
});
blah.impl.stream_ch = (function blah$impl$stream_ch(input){
var stream = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var _STAR_promise = blah.impl.connect_input(input);
_STAR_promise.then((function (p1__2401_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(stream,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,p1__2401_SHARP_], null));
})).catch((function (p1__2402_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(stream,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,p1__2402_SHARP_], null));
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
})).catch((function (p1__2403_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,p1__2403_SHARP_], null));
}));
});
/**
 * Create a transport channel from a stream channel. Receives a connected transport
 */
blah.impl.transport_ch = (function blah$impl$transport_ch(stream,context){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__2284__auto___2434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_2422){
var state_val_2423 = (state_2422[(1)]);
if((state_val_2423 === (1))){
var state_2422__$1 = state_2422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2422__$1,(2),stream);
} else {
if((state_val_2423 === (2))){
var inst_2408 = (state_2422[(2)]);
var inst_2409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_2408,(0),null);
var inst_2410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_2408,(1),null);
var inst_2411 = cljs.core.not(inst_2409);
var state_2422__$1 = (function (){var statearr_2424 = state_2422;
(statearr_2424[(7)] = inst_2410);

return statearr_2424;
})();
if(inst_2411){
var statearr_2425_2435 = state_2422__$1;
(statearr_2425_2435[(1)] = (3));

} else {
var statearr_2426_2436 = state_2422__$1;
(statearr_2426_2436[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2423 === (3))){
var inst_2410 = (state_2422[(7)]);
var inst_2413 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2414 = [false,inst_2410];
var inst_2415 = (new cljs.core.PersistentVector(null,2,(5),inst_2413,inst_2414,null));
var inst_2416 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,inst_2415);
var state_2422__$1 = state_2422;
var statearr_2427_2437 = state_2422__$1;
(statearr_2427_2437[(2)] = inst_2416);

(statearr_2427_2437[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2423 === (4))){
var inst_2410 = (state_2422[(7)]);
var inst_2418 = blah.impl.init_transport(ch,context,inst_2410);
var state_2422__$1 = state_2422;
var statearr_2428_2438 = state_2422__$1;
(statearr_2428_2438[(2)] = inst_2418);

(statearr_2428_2438[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2423 === (5))){
var inst_2420 = (state_2422[(2)]);
var state_2422__$1 = state_2422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2422__$1,inst_2420);
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
var statearr_2429 = [null,null,null,null,null,null,null,null];
(statearr_2429[(0)] = blah$impl$transport_ch_$_state_machine__2262__auto__);

(statearr_2429[(1)] = (1));

return statearr_2429;
});
var blah$impl$transport_ch_$_state_machine__2262__auto____1 = (function (state_2422){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_2422);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e2430){var ex__2265__auto__ = e2430;
var statearr_2431_2439 = state_2422;
(statearr_2431_2439[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_2422[(4)]))){
var statearr_2432_2440 = state_2422;
(statearr_2432_2440[(1)] = cljs.core.first((state_2422[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__2441 = state_2422;
state_2422 = G__2441;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
blah$impl$transport_ch_$_state_machine__2262__auto__ = function(state_2422){
switch(arguments.length){
case 0:
return blah$impl$transport_ch_$_state_machine__2262__auto____0.call(this);
case 1:
return blah$impl$transport_ch_$_state_machine__2262__auto____1.call(this,state_2422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blah$impl$transport_ch_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = blah$impl$transport_ch_$_state_machine__2262__auto____0;
blah$impl$transport_ch_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = blah$impl$transport_ch_$_state_machine__2262__auto____1;
return blah$impl$transport_ch_$_state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_2433 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_2433[(6)] = c__2284__auto___2434);

return statearr_2433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));


return ch;
});
/**
 * Begins streaming data over the transport, in this case connecting a media stream to
 * an audio worklet. Data is pushed to the given data channel as it is made available by the worklet.
 */
blah.impl.connect_transport = (function blah$impl$connect_transport(p__2443,data_ch,close_ch){
var map__2444 = p__2443;
var map__2444__$1 = cljs.core.__destructure_map(map__2444);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2444__$1,cljs.core.cst$kw$source);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2444__$1,cljs.core.cst$kw$node);
var media_stream = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2444__$1,cljs.core.cst$kw$media_DASH_stream);
var port = node.port;
var seq__2445_2472 = cljs.core.seq(media_stream.getAudioTracks());
var chunk__2446_2473 = null;
var count__2447_2474 = (0);
var i__2448_2475 = (0);
while(true){
if((i__2448_2475 < count__2447_2474)){
var track_2476 = chunk__2446_2473.cljs$core$IIndexed$_nth$arity$2(null,i__2448_2475);
track_2476.addEventListener("end",((function (seq__2445_2472,chunk__2446_2473,count__2447_2474,i__2448_2475,track_2476,port,map__2444,map__2444__$1,source,node,media_stream){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(close_ch,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reason,cljs.core.cst$kw$ended,cljs.core.cst$kw$error,null], null));
});})(seq__2445_2472,chunk__2446_2473,count__2447_2474,i__2448_2475,track_2476,port,map__2444,map__2444__$1,source,node,media_stream))
);


var G__2477 = seq__2445_2472;
var G__2478 = chunk__2446_2473;
var G__2479 = count__2447_2474;
var G__2480 = (i__2448_2475 + (1));
seq__2445_2472 = G__2477;
chunk__2446_2473 = G__2478;
count__2447_2474 = G__2479;
i__2448_2475 = G__2480;
continue;
} else {
var temp__5753__auto___2481 = cljs.core.seq(seq__2445_2472);
if(temp__5753__auto___2481){
var seq__2445_2482__$1 = temp__5753__auto___2481;
if(cljs.core.chunked_seq_QMARK_(seq__2445_2482__$1)){
var c__4679__auto___2483 = cljs.core.chunk_first(seq__2445_2482__$1);
var G__2484 = cljs.core.chunk_rest(seq__2445_2482__$1);
var G__2485 = c__4679__auto___2483;
var G__2486 = cljs.core.count(c__4679__auto___2483);
var G__2487 = (0);
seq__2445_2472 = G__2484;
chunk__2446_2473 = G__2485;
count__2447_2474 = G__2486;
i__2448_2475 = G__2487;
continue;
} else {
var track_2488 = cljs.core.first(seq__2445_2482__$1);
track_2488.addEventListener("end",((function (seq__2445_2472,chunk__2446_2473,count__2447_2474,i__2448_2475,track_2488,seq__2445_2482__$1,temp__5753__auto___2481,port,map__2444,map__2444__$1,source,node,media_stream){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(close_ch,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reason,cljs.core.cst$kw$ended,cljs.core.cst$kw$error,null], null));
});})(seq__2445_2472,chunk__2446_2473,count__2447_2474,i__2448_2475,track_2488,seq__2445_2482__$1,temp__5753__auto___2481,port,map__2444,map__2444__$1,source,node,media_stream))
);


var G__2489 = cljs.core.next(seq__2445_2482__$1);
var G__2490 = null;
var G__2491 = (0);
var G__2492 = (0);
seq__2445_2472 = G__2489;
chunk__2446_2473 = G__2490;
count__2447_2474 = G__2491;
i__2448_2475 = G__2492;
continue;
}
} else {
}
}
break;
}

(port.onmessage = (function (p1__2442_SHARP_){
var c__2284__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_2461){
var state_val_2462 = (state_2461[(1)]);
if((state_val_2462 === (1))){
var inst_2449 = p1__2442_SHARP_.data;
var state_2461__$1 = state_2461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_2461__$1,(2),data_ch,inst_2449);
} else {
if((state_val_2462 === (2))){
var inst_2451 = (state_2461[(2)]);
var state_2461__$1 = state_2461;
if(cljs.core.truth_(inst_2451)){
var statearr_2463_2493 = state_2461__$1;
(statearr_2463_2493[(1)] = (3));

} else {
var statearr_2464_2494 = state_2461__$1;
(statearr_2464_2494[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2462 === (3))){
var state_2461__$1 = state_2461;
var statearr_2465_2495 = state_2461__$1;
(statearr_2465_2495[(2)] = null);

(statearr_2465_2495[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2462 === (4))){
var inst_2454 = [cljs.core.cst$kw$reason,cljs.core.cst$kw$error];
var inst_2455 = [cljs.core.cst$kw$closed,null];
var inst_2456 = cljs.core.PersistentHashMap.fromArrays(inst_2454,inst_2455);
var inst_2457 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(close_ch,inst_2456);
var state_2461__$1 = state_2461;
var statearr_2466_2496 = state_2461__$1;
(statearr_2466_2496[(2)] = inst_2457);

(statearr_2466_2496[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2462 === (5))){
var inst_2459 = (state_2461[(2)]);
var state_2461__$1 = state_2461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2461__$1,inst_2459);
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
var statearr_2467 = [null,null,null,null,null,null,null];
(statearr_2467[(0)] = blah$impl$connect_transport_$_state_machine__2262__auto__);

(statearr_2467[(1)] = (1));

return statearr_2467;
});
var blah$impl$connect_transport_$_state_machine__2262__auto____1 = (function (state_2461){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_2461);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e2468){var ex__2265__auto__ = e2468;
var statearr_2469_2497 = state_2461;
(statearr_2469_2497[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_2461[(4)]))){
var statearr_2470_2498 = state_2461;
(statearr_2470_2498[(1)] = cljs.core.first((state_2461[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__2499 = state_2461;
state_2461 = G__2499;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
blah$impl$connect_transport_$_state_machine__2262__auto__ = function(state_2461){
switch(arguments.length){
case 0:
return blah$impl$connect_transport_$_state_machine__2262__auto____0.call(this);
case 1:
return blah$impl$connect_transport_$_state_machine__2262__auto____1.call(this,state_2461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blah$impl$connect_transport_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = blah$impl$connect_transport_$_state_machine__2262__auto____0;
blah$impl$connect_transport_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = blah$impl$connect_transport_$_state_machine__2262__auto____1;
return blah$impl$connect_transport_$_state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_2471 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_2471[(6)] = c__2284__auto__);

return statearr_2471;
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
blah.impl.disconnect_transport = (function blah$impl$disconnect_transport(p__2500){
var map__2501 = p__2500;
var map__2501__$1 = cljs.core.__destructure_map(map__2501);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2501__$1,cljs.core.cst$kw$source);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2501__$1,cljs.core.cst$kw$node);
var media_stream = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2501__$1,cljs.core.cst$kw$media_DASH_stream);
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
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_2563){
var state_val_2564 = (state_2563[(1)]);
if((state_val_2564 === (7))){
var inst_2506 = (state_2563[(7)]);
var inst_2554 = (state_2563[(2)]);
var inst_2555 = (inst_2506 == null);
var inst_2556 = cljs.core.not(inst_2555);
var state_2563__$1 = (function (){var statearr_2565 = state_2563;
(statearr_2565[(8)] = inst_2554);

return statearr_2565;
})();
if(inst_2556){
var statearr_2566_2602 = state_2563__$1;
(statearr_2566_2602[(1)] = (17));

} else {
var statearr_2567_2603 = state_2563__$1;
(statearr_2567_2603[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2564 === (1))){
var state_2563__$1 = state_2563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2563__$1,(2),close_ch);
} else {
if((state_val_2564 === (4))){
var state_2563__$1 = state_2563;
var statearr_2568_2604 = state_2563__$1;
(statearr_2568_2604[(2)] = null);

(statearr_2568_2604[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2564 === (15))){
var inst_2533 = (state_2563[(9)]);
var inst_2542 = cljs.core.first(inst_2533);
var inst_2543 = cljs.core.async.close_BANG_(inst_2542);
var inst_2544 = cljs.core.next(inst_2533);
var inst_2520 = inst_2544;
var inst_2521 = null;
var inst_2522 = (0);
var inst_2523 = (0);
var state_2563__$1 = (function (){var statearr_2569 = state_2563;
(statearr_2569[(10)] = inst_2522);

(statearr_2569[(11)] = inst_2523);

(statearr_2569[(12)] = inst_2543);

(statearr_2569[(13)] = inst_2520);

(statearr_2569[(14)] = inst_2521);

return statearr_2569;
})();
var statearr_2570_2605 = state_2563__$1;
(statearr_2570_2605[(2)] = null);

(statearr_2570_2605[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2564 === (13))){
var inst_2550 = (state_2563[(2)]);
var state_2563__$1 = state_2563;
var statearr_2571_2606 = state_2563__$1;
(statearr_2571_2606[(2)] = inst_2550);

(statearr_2571_2606[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2564 === (6))){
var inst_2522 = (state_2563[(10)]);
var inst_2523 = (state_2563[(11)]);
var inst_2525 = (inst_2523 < inst_2522);
var inst_2526 = inst_2525;
var state_2563__$1 = state_2563;
if(cljs.core.truth_(inst_2526)){
var statearr_2572_2607 = state_2563__$1;
(statearr_2572_2607[(1)] = (8));

} else {
var statearr_2573_2608 = state_2563__$1;
(statearr_2573_2608[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2564 === (17))){
var inst_2506 = (state_2563[(7)]);
var inst_2558 = (function(){throw inst_2506})();
var state_2563__$1 = state_2563;
var statearr_2574_2609 = state_2563__$1;
(statearr_2574_2609[(2)] = inst_2558);

(statearr_2574_2609[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2564 === (3))){
var inst_2508 = blah.impl.disconnect_transport(transport);
var state_2563__$1 = state_2563;
var statearr_2575_2610 = state_2563__$1;
(statearr_2575_2610[(2)] = inst_2508);

(statearr_2575_2610[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2564 === (12))){
var state_2563__$1 = state_2563;
var statearr_2576_2611 = state_2563__$1;
(statearr_2576_2611[(2)] = null);

(statearr_2576_2611[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2564 === (2))){
var inst_2504 = (state_2563[(2)]);
var inst_2505 = cljs.core.__destructure_map(inst_2504);
var inst_2506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_2505,cljs.core.cst$kw$error);
var state_2563__$1 = (function (){var statearr_2577 = state_2563;
(statearr_2577[(7)] = inst_2506);

return statearr_2577;
})();
if(cljs.core.truth_(transport)){
var statearr_2578_2612 = state_2563__$1;
(statearr_2578_2612[(1)] = (3));

} else {
var statearr_2579_2613 = state_2563__$1;
(statearr_2579_2613[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2564 === (19))){
var inst_2561 = (state_2563[(2)]);
var state_2563__$1 = state_2563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2563__$1,inst_2561);
} else {
if((state_val_2564 === (11))){
var inst_2533 = (state_2563[(9)]);
var inst_2535 = cljs.core.chunked_seq_QMARK_(inst_2533);
var state_2563__$1 = state_2563;
if(inst_2535){
var statearr_2580_2614 = state_2563__$1;
(statearr_2580_2614[(1)] = (14));

} else {
var statearr_2581_2615 = state_2563__$1;
(statearr_2581_2615[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2564 === (9))){
var inst_2520 = (state_2563[(13)]);
var inst_2533 = (state_2563[(9)]);
var inst_2533__$1 = cljs.core.seq(inst_2520);
var state_2563__$1 = (function (){var statearr_2582 = state_2563;
(statearr_2582[(9)] = inst_2533__$1);

return statearr_2582;
})();
if(inst_2533__$1){
var statearr_2583_2616 = state_2563__$1;
(statearr_2583_2616[(1)] = (11));

} else {
var statearr_2584_2617 = state_2563__$1;
(statearr_2584_2617[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2564 === (5))){
var inst_2511 = (state_2563[(2)]);
var inst_2516 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2517 = [data_ch,close_ch];
var inst_2518 = (new cljs.core.PersistentVector(null,2,(5),inst_2516,inst_2517,null));
var inst_2519 = cljs.core.seq(inst_2518);
var inst_2520 = inst_2519;
var inst_2521 = null;
var inst_2522 = (0);
var inst_2523 = (0);
var state_2563__$1 = (function (){var statearr_2585 = state_2563;
(statearr_2585[(10)] = inst_2522);

(statearr_2585[(11)] = inst_2523);

(statearr_2585[(15)] = inst_2511);

(statearr_2585[(13)] = inst_2520);

(statearr_2585[(14)] = inst_2521);

return statearr_2585;
})();
var statearr_2586_2618 = state_2563__$1;
(statearr_2586_2618[(2)] = null);

(statearr_2586_2618[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2564 === (14))){
var inst_2533 = (state_2563[(9)]);
var inst_2537 = cljs.core.chunk_first(inst_2533);
var inst_2538 = cljs.core.chunk_rest(inst_2533);
var inst_2539 = cljs.core.count(inst_2537);
var inst_2520 = inst_2538;
var inst_2521 = inst_2537;
var inst_2522 = inst_2539;
var inst_2523 = (0);
var state_2563__$1 = (function (){var statearr_2587 = state_2563;
(statearr_2587[(10)] = inst_2522);

(statearr_2587[(11)] = inst_2523);

(statearr_2587[(13)] = inst_2520);

(statearr_2587[(14)] = inst_2521);

return statearr_2587;
})();
var statearr_2588_2619 = state_2563__$1;
(statearr_2588_2619[(2)] = null);

(statearr_2588_2619[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2564 === (16))){
var inst_2547 = (state_2563[(2)]);
var state_2563__$1 = state_2563;
var statearr_2589_2620 = state_2563__$1;
(statearr_2589_2620[(2)] = inst_2547);

(statearr_2589_2620[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2564 === (10))){
var inst_2552 = (state_2563[(2)]);
var state_2563__$1 = state_2563;
var statearr_2593_2621 = state_2563__$1;
(statearr_2593_2621[(2)] = inst_2552);

(statearr_2593_2621[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2564 === (18))){
var state_2563__$1 = state_2563;
var statearr_2594_2622 = state_2563__$1;
(statearr_2594_2622[(2)] = null);

(statearr_2594_2622[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2564 === (8))){
var inst_2522 = (state_2563[(10)]);
var inst_2523 = (state_2563[(11)]);
var inst_2520 = (state_2563[(13)]);
var inst_2521 = (state_2563[(14)]);
var inst_2528 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_2521,inst_2523);
var inst_2529 = cljs.core.async.close_BANG_(inst_2528);
var inst_2530 = (inst_2523 + (1));
var tmp2590 = inst_2522;
var tmp2591 = inst_2520;
var tmp2592 = inst_2521;
var inst_2520__$1 = tmp2591;
var inst_2521__$1 = tmp2592;
var inst_2522__$1 = tmp2590;
var inst_2523__$1 = inst_2530;
var state_2563__$1 = (function (){var statearr_2595 = state_2563;
(statearr_2595[(10)] = inst_2522__$1);

(statearr_2595[(16)] = inst_2529);

(statearr_2595[(11)] = inst_2523__$1);

(statearr_2595[(13)] = inst_2520__$1);

(statearr_2595[(14)] = inst_2521__$1);

return statearr_2595;
})();
var statearr_2596_2623 = state_2563__$1;
(statearr_2596_2623[(2)] = null);

(statearr_2596_2623[(1)] = (6));


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
var statearr_2597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2597[(0)] = blah$impl$handle_close_$_state_machine__2262__auto__);

(statearr_2597[(1)] = (1));

return statearr_2597;
});
var blah$impl$handle_close_$_state_machine__2262__auto____1 = (function (state_2563){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_2563);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e2598){var ex__2265__auto__ = e2598;
var statearr_2599_2624 = state_2563;
(statearr_2599_2624[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_2563[(4)]))){
var statearr_2600_2625 = state_2563;
(statearr_2600_2625[(1)] = cljs.core.first((state_2563[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__2626 = state_2563;
state_2563 = G__2626;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
blah$impl$handle_close_$_state_machine__2262__auto__ = function(state_2563){
switch(arguments.length){
case 0:
return blah$impl$handle_close_$_state_machine__2262__auto____0.call(this);
case 1:
return blah$impl$handle_close_$_state_machine__2262__auto____1.call(this,state_2563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blah$impl$handle_close_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = blah$impl$handle_close_$_state_machine__2262__auto____0;
blah$impl$handle_close_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = blah$impl$handle_close_$_state_machine__2262__auto____1;
return blah$impl$handle_close_$_state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_2601 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_2601[(6)] = c__2284__auto__);

return statearr_2601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));

return c__2284__auto__;
});
/**
 * Start the transport and return a data channel to stream audio data over
 */
blah.impl.start_transport = (function blah$impl$start_transport(transport_ch,data_ch,close_ch){
var c__2284__auto___2667 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_2650){
var state_val_2651 = (state_2650[(1)]);
if((state_val_2651 === (7))){
var inst_2633 = (state_2650[(7)]);
var state_2650__$1 = state_2650;
var statearr_2652_2668 = state_2650__$1;
(statearr_2652_2668[(2)] = inst_2633);

(statearr_2652_2668[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2651 === (1))){
var state_2650__$1 = state_2650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2650__$1,(2),transport_ch);
} else {
if((state_val_2651 === (4))){
var inst_2633 = (state_2650[(7)]);
var inst_2637 = [cljs.core.cst$kw$error,cljs.core.cst$kw$reason];
var inst_2638 = [inst_2633,cljs.core.cst$kw$error];
var inst_2639 = cljs.core.PersistentHashMap.fromArrays(inst_2637,inst_2638);
var state_2650__$1 = state_2650;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_2650__$1,(6),close_ch,inst_2639);
} else {
if((state_val_2651 === (6))){
var inst_2641 = (state_2650[(2)]);
var state_2650__$1 = state_2650;
var statearr_2653_2669 = state_2650__$1;
(statearr_2653_2669[(2)] = inst_2641);

(statearr_2653_2669[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2651 === (3))){
var inst_2633 = (state_2650[(7)]);
var inst_2635 = blah.impl.connect_transport(inst_2633,data_ch,close_ch);
var state_2650__$1 = state_2650;
var statearr_2654_2670 = state_2650__$1;
(statearr_2654_2670[(2)] = inst_2635);

(statearr_2654_2670[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2651 === (2))){
var inst_2632 = (state_2650[(8)]);
var inst_2631 = (state_2650[(2)]);
var inst_2632__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_2631,(0),null);
var inst_2633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_2631,(1),null);
var state_2650__$1 = (function (){var statearr_2655 = state_2650;
(statearr_2655[(7)] = inst_2633);

(statearr_2655[(8)] = inst_2632__$1);

return statearr_2655;
})();
if(cljs.core.truth_(inst_2632__$1)){
var statearr_2656_2671 = state_2650__$1;
(statearr_2656_2671[(1)] = (3));

} else {
var statearr_2657_2672 = state_2650__$1;
(statearr_2657_2672[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2651 === (9))){
var inst_2647 = (state_2650[(2)]);
var inst_2648 = blah.impl.handle_close(inst_2647,data_ch,close_ch);
var state_2650__$1 = state_2650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2650__$1,inst_2648);
} else {
if((state_val_2651 === (5))){
var inst_2632 = (state_2650[(8)]);
var inst_2643 = (state_2650[(2)]);
var state_2650__$1 = (function (){var statearr_2658 = state_2650;
(statearr_2658[(9)] = inst_2643);

return statearr_2658;
})();
if(cljs.core.truth_(inst_2632)){
var statearr_2659_2673 = state_2650__$1;
(statearr_2659_2673[(1)] = (7));

} else {
var statearr_2660_2674 = state_2650__$1;
(statearr_2660_2674[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2651 === (8))){
var state_2650__$1 = state_2650;
var statearr_2661_2675 = state_2650__$1;
(statearr_2661_2675[(2)] = null);

(statearr_2661_2675[(1)] = (9));


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
var statearr_2662 = [null,null,null,null,null,null,null,null,null,null];
(statearr_2662[(0)] = blah$impl$start_transport_$_state_machine__2262__auto__);

(statearr_2662[(1)] = (1));

return statearr_2662;
});
var blah$impl$start_transport_$_state_machine__2262__auto____1 = (function (state_2650){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_2650);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e2663){var ex__2265__auto__ = e2663;
var statearr_2664_2676 = state_2650;
(statearr_2664_2676[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_2650[(4)]))){
var statearr_2665_2677 = state_2650;
(statearr_2665_2677[(1)] = cljs.core.first((state_2650[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__2678 = state_2650;
state_2650 = G__2678;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
blah$impl$start_transport_$_state_machine__2262__auto__ = function(state_2650){
switch(arguments.length){
case 0:
return blah$impl$start_transport_$_state_machine__2262__auto____0.call(this);
case 1:
return blah$impl$start_transport_$_state_machine__2262__auto____1.call(this,state_2650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blah$impl$start_transport_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = blah$impl$start_transport_$_state_machine__2262__auto____0;
blah$impl$start_transport_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = blah$impl$start_transport_$_state_machine__2262__auto____1;
return blah$impl$start_transport_$_state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_2666 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_2666[(6)] = c__2284__auto___2667);

return statearr_2666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));


return data_ch;
});

/**
 * @interface
 */
blah.impl.AudioContext = function(){};

var blah$impl$AudioContext$audio_context$dyn_2679 = (function (session){
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
return blah$impl$AudioContext$audio_context$dyn_2679(session);
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

(blah.impl.Session.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k2681,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__2685 = k2681;
var G__2685__$1 = (((G__2685 instanceof cljs.core.Keyword))?G__2685.fqn:null);
switch (G__2685__$1) {
case "data-ch":
return self__.data_ch;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k2681,else__4505__auto__);

}
}));

(blah.impl.Session.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__2686){
var vec__2687 = p__2686;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2687,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2687,(1),null);
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

(blah.impl.Session.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__2680){
var self__ = this;
var G__2680__$1 = this;
return (new cljs.core.RecordIter((0),G__2680__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_ch,cljs.core.cst$kw$context], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4360__auto____$1 = (function (){var fexpr__2690 = (function (coll__4499__auto__){
return (1644404183 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
});
return fexpr__2690(this__4498__auto____$1);
})();
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(blah.impl.Session.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this2682,other2683){
var self__ = this;
var this2682__$1 = this;
return (((!((other2683 == null)))) && ((((this2682__$1.constructor === other2683.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this2682__$1.data_ch,other2683.data_ch)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this2682__$1.context,other2683.context)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this2682__$1.__extmap,other2683.__extmap)))))))));
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

(blah.impl.Session.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k2681){
var self__ = this;
var this__4509__auto____$1 = this;
var G__2691 = k2681;
var G__2691__$1 = (((G__2691 instanceof cljs.core.Keyword))?G__2691.fqn:null);
switch (G__2691__$1) {
case "data-ch":
case "context":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k2681);

}
}));

(blah.impl.Session.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__2680){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__2692 = cljs.core.keyword_identical_QMARK_;
var expr__2693 = k__4511__auto__;
if(cljs.core.truth_((function (){var G__2695 = cljs.core.cst$kw$data_DASH_ch;
var G__2696 = expr__2693;
return (pred__2692.cljs$core$IFn$_invoke$arity$2 ? pred__2692.cljs$core$IFn$_invoke$arity$2(G__2695,G__2696) : pred__2692.call(null,G__2695,G__2696));
})())){
return (new blah.impl.Session(G__2680,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__2697 = cljs.core.cst$kw$context;
var G__2698 = expr__2693;
return (pred__2692.cljs$core$IFn$_invoke$arity$2 ? pred__2692.cljs$core$IFn$_invoke$arity$2(G__2697,G__2698) : pred__2692.call(null,G__2697,G__2698));
})())){
return (new blah.impl.Session(self__.data_ch,G__2680,self__.__meta,self__.__extmap,null));
} else {
return (new blah.impl.Session(self__.data_ch,self__.context,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__2680),null));
}
}
}));

(blah.impl.Session.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$data_DASH_ch,self__.data_ch,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$context,self__.context,null))], null),self__.__extmap));
}));

(blah.impl.Session.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__2680){
var self__ = this;
var this__4501__auto____$1 = this;
return (new blah.impl.Session(self__.data_ch,self__.context,G__2680,self__.__extmap,self__.__hash));
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
blah.impl.map__GT_Session = (function blah$impl$map__GT_Session(G__2684){
var extmap__4542__auto__ = (function (){var G__2699 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__2684,cljs.core.cst$kw$data_DASH_ch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$context], 0));
if(cljs.core.record_QMARK_(G__2684)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__2699);
} else {
return G__2699;
}
})();
return (new blah.impl.Session(cljs.core.cst$kw$data_DASH_ch.cljs$core$IFn$_invoke$arity$1(G__2684),cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(G__2684),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var G__2703 = arguments.length;
switch (G__2703) {
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
return blah.impl.listen.cljs$core$IFn$_invoke$arity$2(input,blah.transforms.samples__GT_frames);
}));

(blah.impl.listen.cljs$core$IFn$_invoke$arity$0 = (function (){
return blah.impl.listen.cljs$core$IFn$_invoke$arity$1(null);
}));

(blah.impl.listen.cljs$lang$maxFixedArity = 3);

blah.impl.request_permission = (function blah$impl$request_permission(){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var _STAR_prom = blah.impl.connect_input(null);
_STAR_prom.then((function (p1__2705_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,p1__2705_SHARP_);
})).catch((function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,false);
}));

var c__2284__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_2715){
var state_val_2716 = (state_2715[(1)]);
if((state_val_2716 === (1))){
var state_2715__$1 = state_2715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2715__$1,(2),ch);
} else {
if((state_val_2716 === (2))){
var inst_2707 = (state_2715[(7)]);
var inst_2707__$1 = (state_2715[(2)]);
var state_2715__$1 = (function (){var statearr_2717 = state_2715;
(statearr_2717[(7)] = inst_2707__$1);

return statearr_2717;
})();
if(cljs.core.truth_(inst_2707__$1)){
var statearr_2718_2727 = state_2715__$1;
(statearr_2718_2727[(1)] = (3));

} else {
var statearr_2719_2728 = state_2715__$1;
(statearr_2719_2728[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2716 === (3))){
var inst_2707 = (state_2715[(7)]);
var inst_2709 = blah.impl.stop_audio_tracks(inst_2707);
var inst_2710 = (inst_2709 == null);
var state_2715__$1 = state_2715;
var statearr_2720_2729 = state_2715__$1;
(statearr_2720_2729[(2)] = inst_2710);

(statearr_2720_2729[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2716 === (4))){
var state_2715__$1 = state_2715;
var statearr_2721_2730 = state_2715__$1;
(statearr_2721_2730[(2)] = false);

(statearr_2721_2730[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2716 === (5))){
var inst_2713 = (state_2715[(2)]);
var state_2715__$1 = state_2715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2715__$1,inst_2713);
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
var statearr_2722 = [null,null,null,null,null,null,null,null];
(statearr_2722[(0)] = blah$impl$request_permission_$_state_machine__2262__auto__);

(statearr_2722[(1)] = (1));

return statearr_2722;
});
var blah$impl$request_permission_$_state_machine__2262__auto____1 = (function (state_2715){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_2715);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e2723){var ex__2265__auto__ = e2723;
var statearr_2724_2731 = state_2715;
(statearr_2724_2731[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_2715[(4)]))){
var statearr_2725_2732 = state_2715;
(statearr_2725_2732[(1)] = cljs.core.first((state_2715[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__2733 = state_2715;
state_2715 = G__2733;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
blah$impl$request_permission_$_state_machine__2262__auto__ = function(state_2715){
switch(arguments.length){
case 0:
return blah$impl$request_permission_$_state_machine__2262__auto____0.call(this);
case 1:
return blah$impl$request_permission_$_state_machine__2262__auto____1.call(this,state_2715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blah$impl$request_permission_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = blah$impl$request_permission_$_state_machine__2262__auto____0;
blah$impl$request_permission_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = blah$impl$request_permission_$_state_machine__2262__auto____1;
return blah$impl$request_permission_$_state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_2726 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_2726[(6)] = c__2284__auto__);

return statearr_2726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));

return c__2284__auto__;
});
