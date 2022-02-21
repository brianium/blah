// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('blah.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('blah.transforms');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
blah.impl.media_devices = navigator.mediaDevices;
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
var G__2346 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__2345_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("audioinput",cljs.core.cst$kw$kind.cljs$core$IFn$_invoke$arity$1(p1__2345_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(blah.impl.info__GT_input,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(device_infos)));
return (fn_1.cljs$core$IFn$_invoke$arity$1 ? fn_1.cljs$core$IFn$_invoke$arity$1(G__2346) : fn_1.call(null,G__2346));
}));
});
blah.impl.input_ch = (function blah$impl$input_ch(var_args){
var G__2350 = arguments.length;
switch (G__2350) {
case 1:
return blah.impl.input_ch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return blah.impl.input_ch.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(blah.impl.input_ch.cljs$core$IFn$_invoke$arity$1 = (function (close_ch){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var listener = (function (){
return blah.impl.query_inputs((function (p1__2347_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,p1__2347_SHARP_);
}));
});
blah.impl.media_devices.addEventListener("devicechange",listener);

blah.impl.query_inputs((function (p1__2348_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,p1__2348_SHARP_);
}));

if((!((close_ch == null)))){
var c__2284__auto___2364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_2355){
var state_val_2356 = (state_2355[(1)]);
if((state_val_2356 === (1))){
var state_2355__$1 = state_2355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2355__$1,(2),close_ch);
} else {
if((state_val_2356 === (2))){
var inst_2352 = (state_2355[(2)]);
var inst_2353 = blah.impl.media_devices.removeEventListener("devicechange",listener);
var state_2355__$1 = (function (){var statearr_2357 = state_2355;
(statearr_2357[(7)] = inst_2352);

return statearr_2357;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_2355__$1,inst_2353);
} else {
return null;
}
}
});
return (function() {
var blah$impl$state_machine__2262__auto__ = null;
var blah$impl$state_machine__2262__auto____0 = (function (){
var statearr_2358 = [null,null,null,null,null,null,null,null];
(statearr_2358[(0)] = blah$impl$state_machine__2262__auto__);

(statearr_2358[(1)] = (1));

return statearr_2358;
});
var blah$impl$state_machine__2262__auto____1 = (function (state_2355){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_2355);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e2359){var ex__2265__auto__ = e2359;
var statearr_2360_2365 = state_2355;
(statearr_2360_2365[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_2355[(4)]))){
var statearr_2361_2366 = state_2355;
(statearr_2361_2366[(1)] = cljs.core.first((state_2355[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__2367 = state_2355;
state_2355 = G__2367;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
blah$impl$state_machine__2262__auto__ = function(state_2355){
switch(arguments.length){
case 0:
return blah$impl$state_machine__2262__auto____0.call(this);
case 1:
return blah$impl$state_machine__2262__auto____1.call(this,state_2355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blah$impl$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = blah$impl$state_machine__2262__auto____0;
blah$impl$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = blah$impl$state_machine__2262__auto____1;
return blah$impl$state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_2362 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_2362[(6)] = c__2284__auto___2364);

return statearr_2362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));

} else {
}

return ch;
}));

(blah.impl.input_ch.cljs$core$IFn$_invoke$arity$0 = (function (){
return blah.impl.input_ch.cljs$core$IFn$_invoke$arity$1(null);
}));

(blah.impl.input_ch.cljs$lang$maxFixedArity = 1);

blah.impl.stream_ch = (function blah$impl$stream_ch(input){
var stream = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var _STAR_promise = blah.impl.connect_input(input);
_STAR_promise.then((function (p1__2368_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(stream,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,p1__2368_SHARP_], null));
})).catch((function (p1__2369_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(stream,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,p1__2369_SHARP_], null));
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
})).catch((function (p1__2370_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,p1__2370_SHARP_], null));
}));
});
/**
 * Create a transport channel from a stream channel. Receives a connected transport
 */
blah.impl.transport_ch = (function blah$impl$transport_ch(stream,context){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var c__2284__auto___2401 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_2389){
var state_val_2390 = (state_2389[(1)]);
if((state_val_2390 === (1))){
var state_2389__$1 = state_2389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2389__$1,(2),stream);
} else {
if((state_val_2390 === (2))){
var inst_2375 = (state_2389[(2)]);
var inst_2376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_2375,(0),null);
var inst_2377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_2375,(1),null);
var inst_2378 = cljs.core.not(inst_2376);
var state_2389__$1 = (function (){var statearr_2391 = state_2389;
(statearr_2391[(7)] = inst_2377);

return statearr_2391;
})();
if(inst_2378){
var statearr_2392_2402 = state_2389__$1;
(statearr_2392_2402[(1)] = (3));

} else {
var statearr_2393_2403 = state_2389__$1;
(statearr_2393_2403[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2390 === (3))){
var inst_2377 = (state_2389[(7)]);
var inst_2380 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2381 = [false,inst_2377];
var inst_2382 = (new cljs.core.PersistentVector(null,2,(5),inst_2380,inst_2381,null));
var inst_2383 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,inst_2382);
var state_2389__$1 = state_2389;
var statearr_2394_2404 = state_2389__$1;
(statearr_2394_2404[(2)] = inst_2383);

(statearr_2394_2404[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2390 === (4))){
var inst_2377 = (state_2389[(7)]);
var inst_2385 = blah.impl.init_transport(ch,context,inst_2377);
var state_2389__$1 = state_2389;
var statearr_2395_2405 = state_2389__$1;
(statearr_2395_2405[(2)] = inst_2385);

(statearr_2395_2405[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2390 === (5))){
var inst_2387 = (state_2389[(2)]);
var state_2389__$1 = state_2389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2389__$1,inst_2387);
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
var statearr_2396 = [null,null,null,null,null,null,null,null];
(statearr_2396[(0)] = blah$impl$transport_ch_$_state_machine__2262__auto__);

(statearr_2396[(1)] = (1));

return statearr_2396;
});
var blah$impl$transport_ch_$_state_machine__2262__auto____1 = (function (state_2389){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_2389);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e2397){var ex__2265__auto__ = e2397;
var statearr_2398_2406 = state_2389;
(statearr_2398_2406[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_2389[(4)]))){
var statearr_2399_2407 = state_2389;
(statearr_2399_2407[(1)] = cljs.core.first((state_2389[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__2408 = state_2389;
state_2389 = G__2408;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
blah$impl$transport_ch_$_state_machine__2262__auto__ = function(state_2389){
switch(arguments.length){
case 0:
return blah$impl$transport_ch_$_state_machine__2262__auto____0.call(this);
case 1:
return blah$impl$transport_ch_$_state_machine__2262__auto____1.call(this,state_2389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blah$impl$transport_ch_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = blah$impl$transport_ch_$_state_machine__2262__auto____0;
blah$impl$transport_ch_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = blah$impl$transport_ch_$_state_machine__2262__auto____1;
return blah$impl$transport_ch_$_state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_2400 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_2400[(6)] = c__2284__auto___2401);

return statearr_2400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));


return ch;
});
/**
 * Begins streaming data over the transport, in this case connecting a media stream to
 * an audio worklet. Data is pushed to the given data channel as it is made available by the worklet.
 */
blah.impl.connect_transport = (function blah$impl$connect_transport(p__2410,data_ch,close_ch){
var map__2411 = p__2410;
var map__2411__$1 = cljs.core.__destructure_map(map__2411);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2411__$1,cljs.core.cst$kw$source);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2411__$1,cljs.core.cst$kw$node);
var media_stream = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2411__$1,cljs.core.cst$kw$media_DASH_stream);
var port = node.port;
var seq__2412_2439 = cljs.core.seq(media_stream.getAudioTracks());
var chunk__2413_2440 = null;
var count__2414_2441 = (0);
var i__2415_2442 = (0);
while(true){
if((i__2415_2442 < count__2414_2441)){
var track_2443 = chunk__2413_2440.cljs$core$IIndexed$_nth$arity$2(null,i__2415_2442);
track_2443.addEventListener("end",((function (seq__2412_2439,chunk__2413_2440,count__2414_2441,i__2415_2442,track_2443,port,map__2411,map__2411__$1,source,node,media_stream){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(close_ch,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reason,cljs.core.cst$kw$ended,cljs.core.cst$kw$error,null], null));
});})(seq__2412_2439,chunk__2413_2440,count__2414_2441,i__2415_2442,track_2443,port,map__2411,map__2411__$1,source,node,media_stream))
);


var G__2444 = seq__2412_2439;
var G__2445 = chunk__2413_2440;
var G__2446 = count__2414_2441;
var G__2447 = (i__2415_2442 + (1));
seq__2412_2439 = G__2444;
chunk__2413_2440 = G__2445;
count__2414_2441 = G__2446;
i__2415_2442 = G__2447;
continue;
} else {
var temp__5753__auto___2448 = cljs.core.seq(seq__2412_2439);
if(temp__5753__auto___2448){
var seq__2412_2449__$1 = temp__5753__auto___2448;
if(cljs.core.chunked_seq_QMARK_(seq__2412_2449__$1)){
var c__4679__auto___2450 = cljs.core.chunk_first(seq__2412_2449__$1);
var G__2451 = cljs.core.chunk_rest(seq__2412_2449__$1);
var G__2452 = c__4679__auto___2450;
var G__2453 = cljs.core.count(c__4679__auto___2450);
var G__2454 = (0);
seq__2412_2439 = G__2451;
chunk__2413_2440 = G__2452;
count__2414_2441 = G__2453;
i__2415_2442 = G__2454;
continue;
} else {
var track_2455 = cljs.core.first(seq__2412_2449__$1);
track_2455.addEventListener("end",((function (seq__2412_2439,chunk__2413_2440,count__2414_2441,i__2415_2442,track_2455,seq__2412_2449__$1,temp__5753__auto___2448,port,map__2411,map__2411__$1,source,node,media_stream){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(close_ch,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reason,cljs.core.cst$kw$ended,cljs.core.cst$kw$error,null], null));
});})(seq__2412_2439,chunk__2413_2440,count__2414_2441,i__2415_2442,track_2455,seq__2412_2449__$1,temp__5753__auto___2448,port,map__2411,map__2411__$1,source,node,media_stream))
);


var G__2456 = cljs.core.next(seq__2412_2449__$1);
var G__2457 = null;
var G__2458 = (0);
var G__2459 = (0);
seq__2412_2439 = G__2456;
chunk__2413_2440 = G__2457;
count__2414_2441 = G__2458;
i__2415_2442 = G__2459;
continue;
}
} else {
}
}
break;
}

(port.onmessage = (function (p1__2409_SHARP_){
var c__2284__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_2428){
var state_val_2429 = (state_2428[(1)]);
if((state_val_2429 === (1))){
var inst_2416 = p1__2409_SHARP_.data;
var state_2428__$1 = state_2428;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_2428__$1,(2),data_ch,inst_2416);
} else {
if((state_val_2429 === (2))){
var inst_2418 = (state_2428[(2)]);
var state_2428__$1 = state_2428;
if(cljs.core.truth_(inst_2418)){
var statearr_2430_2460 = state_2428__$1;
(statearr_2430_2460[(1)] = (3));

} else {
var statearr_2431_2461 = state_2428__$1;
(statearr_2431_2461[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2429 === (3))){
var state_2428__$1 = state_2428;
var statearr_2432_2462 = state_2428__$1;
(statearr_2432_2462[(2)] = null);

(statearr_2432_2462[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2429 === (4))){
var inst_2421 = [cljs.core.cst$kw$reason,cljs.core.cst$kw$error];
var inst_2422 = [cljs.core.cst$kw$closed,null];
var inst_2423 = cljs.core.PersistentHashMap.fromArrays(inst_2421,inst_2422);
var inst_2424 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(close_ch,inst_2423);
var state_2428__$1 = state_2428;
var statearr_2433_2463 = state_2428__$1;
(statearr_2433_2463[(2)] = inst_2424);

(statearr_2433_2463[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2429 === (5))){
var inst_2426 = (state_2428[(2)]);
var state_2428__$1 = state_2428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2428__$1,inst_2426);
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
var statearr_2434 = [null,null,null,null,null,null,null];
(statearr_2434[(0)] = blah$impl$connect_transport_$_state_machine__2262__auto__);

(statearr_2434[(1)] = (1));

return statearr_2434;
});
var blah$impl$connect_transport_$_state_machine__2262__auto____1 = (function (state_2428){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_2428);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e2435){var ex__2265__auto__ = e2435;
var statearr_2436_2464 = state_2428;
(statearr_2436_2464[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_2428[(4)]))){
var statearr_2437_2465 = state_2428;
(statearr_2437_2465[(1)] = cljs.core.first((state_2428[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__2466 = state_2428;
state_2428 = G__2466;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
blah$impl$connect_transport_$_state_machine__2262__auto__ = function(state_2428){
switch(arguments.length){
case 0:
return blah$impl$connect_transport_$_state_machine__2262__auto____0.call(this);
case 1:
return blah$impl$connect_transport_$_state_machine__2262__auto____1.call(this,state_2428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blah$impl$connect_transport_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = blah$impl$connect_transport_$_state_machine__2262__auto____0;
blah$impl$connect_transport_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = blah$impl$connect_transport_$_state_machine__2262__auto____1;
return blah$impl$connect_transport_$_state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_2438 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_2438[(6)] = c__2284__auto__);

return statearr_2438;
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
blah.impl.disconnect_transport = (function blah$impl$disconnect_transport(p__2467){
var map__2468 = p__2467;
var map__2468__$1 = cljs.core.__destructure_map(map__2468);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2468__$1,cljs.core.cst$kw$source);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2468__$1,cljs.core.cst$kw$node);
var media_stream = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2468__$1,cljs.core.cst$kw$media_DASH_stream);
var seq__2469_2473 = cljs.core.seq(media_stream.getAudioTracks());
var chunk__2470_2474 = null;
var count__2471_2475 = (0);
var i__2472_2476 = (0);
while(true){
if((i__2472_2476 < count__2471_2475)){
var track_2477 = chunk__2470_2474.cljs$core$IIndexed$_nth$arity$2(null,i__2472_2476);
track_2477.stop();


var G__2478 = seq__2469_2473;
var G__2479 = chunk__2470_2474;
var G__2480 = count__2471_2475;
var G__2481 = (i__2472_2476 + (1));
seq__2469_2473 = G__2478;
chunk__2470_2474 = G__2479;
count__2471_2475 = G__2480;
i__2472_2476 = G__2481;
continue;
} else {
var temp__5753__auto___2482 = cljs.core.seq(seq__2469_2473);
if(temp__5753__auto___2482){
var seq__2469_2483__$1 = temp__5753__auto___2482;
if(cljs.core.chunked_seq_QMARK_(seq__2469_2483__$1)){
var c__4679__auto___2484 = cljs.core.chunk_first(seq__2469_2483__$1);
var G__2485 = cljs.core.chunk_rest(seq__2469_2483__$1);
var G__2486 = c__4679__auto___2484;
var G__2487 = cljs.core.count(c__4679__auto___2484);
var G__2488 = (0);
seq__2469_2473 = G__2485;
chunk__2470_2474 = G__2486;
count__2471_2475 = G__2487;
i__2472_2476 = G__2488;
continue;
} else {
var track_2489 = cljs.core.first(seq__2469_2483__$1);
track_2489.stop();


var G__2490 = cljs.core.next(seq__2469_2483__$1);
var G__2491 = null;
var G__2492 = (0);
var G__2493 = (0);
seq__2469_2473 = G__2490;
chunk__2470_2474 = G__2491;
count__2471_2475 = G__2492;
i__2472_2476 = G__2493;
continue;
}
} else {
}
}
break;
}

return source.disconnect(node);
});
/**
 * Waits for a signal to close down the transport. Handles disconnecting
 *   an active transport, closing channels, and throwing errors if present
 */
blah.impl.handle_close = (function blah$impl$handle_close(transport,data_ch,close_ch){
var c__2284__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_2555){
var state_val_2556 = (state_2555[(1)]);
if((state_val_2556 === (7))){
var inst_2498 = (state_2555[(7)]);
var inst_2546 = (state_2555[(2)]);
var inst_2547 = (inst_2498 == null);
var inst_2548 = cljs.core.not(inst_2547);
var state_2555__$1 = (function (){var statearr_2557 = state_2555;
(statearr_2557[(8)] = inst_2546);

return statearr_2557;
})();
if(inst_2548){
var statearr_2558_2594 = state_2555__$1;
(statearr_2558_2594[(1)] = (17));

} else {
var statearr_2559_2595 = state_2555__$1;
(statearr_2559_2595[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2556 === (1))){
var state_2555__$1 = state_2555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2555__$1,(2),close_ch);
} else {
if((state_val_2556 === (4))){
var state_2555__$1 = state_2555;
var statearr_2560_2596 = state_2555__$1;
(statearr_2560_2596[(2)] = null);

(statearr_2560_2596[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2556 === (15))){
var inst_2525 = (state_2555[(9)]);
var inst_2534 = cljs.core.first(inst_2525);
var inst_2535 = cljs.core.async.close_BANG_(inst_2534);
var inst_2536 = cljs.core.next(inst_2525);
var inst_2512 = inst_2536;
var inst_2513 = null;
var inst_2514 = (0);
var inst_2515 = (0);
var state_2555__$1 = (function (){var statearr_2561 = state_2555;
(statearr_2561[(10)] = inst_2512);

(statearr_2561[(11)] = inst_2514);

(statearr_2561[(12)] = inst_2513);

(statearr_2561[(13)] = inst_2535);

(statearr_2561[(14)] = inst_2515);

return statearr_2561;
})();
var statearr_2562_2597 = state_2555__$1;
(statearr_2562_2597[(2)] = null);

(statearr_2562_2597[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2556 === (13))){
var inst_2542 = (state_2555[(2)]);
var state_2555__$1 = state_2555;
var statearr_2563_2598 = state_2555__$1;
(statearr_2563_2598[(2)] = inst_2542);

(statearr_2563_2598[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2556 === (6))){
var inst_2514 = (state_2555[(11)]);
var inst_2515 = (state_2555[(14)]);
var inst_2517 = (inst_2515 < inst_2514);
var inst_2518 = inst_2517;
var state_2555__$1 = state_2555;
if(cljs.core.truth_(inst_2518)){
var statearr_2564_2599 = state_2555__$1;
(statearr_2564_2599[(1)] = (8));

} else {
var statearr_2565_2600 = state_2555__$1;
(statearr_2565_2600[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2556 === (17))){
var inst_2498 = (state_2555[(7)]);
var inst_2550 = (function(){throw inst_2498})();
var state_2555__$1 = state_2555;
var statearr_2566_2601 = state_2555__$1;
(statearr_2566_2601[(2)] = inst_2550);

(statearr_2566_2601[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2556 === (3))){
var inst_2500 = blah.impl.disconnect_transport(transport);
var state_2555__$1 = state_2555;
var statearr_2567_2602 = state_2555__$1;
(statearr_2567_2602[(2)] = inst_2500);

(statearr_2567_2602[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2556 === (12))){
var state_2555__$1 = state_2555;
var statearr_2568_2603 = state_2555__$1;
(statearr_2568_2603[(2)] = null);

(statearr_2568_2603[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2556 === (2))){
var inst_2496 = (state_2555[(2)]);
var inst_2497 = cljs.core.__destructure_map(inst_2496);
var inst_2498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_2497,cljs.core.cst$kw$error);
var state_2555__$1 = (function (){var statearr_2569 = state_2555;
(statearr_2569[(7)] = inst_2498);

return statearr_2569;
})();
if(cljs.core.truth_(transport)){
var statearr_2570_2604 = state_2555__$1;
(statearr_2570_2604[(1)] = (3));

} else {
var statearr_2571_2605 = state_2555__$1;
(statearr_2571_2605[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2556 === (19))){
var inst_2553 = (state_2555[(2)]);
var state_2555__$1 = state_2555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2555__$1,inst_2553);
} else {
if((state_val_2556 === (11))){
var inst_2525 = (state_2555[(9)]);
var inst_2527 = cljs.core.chunked_seq_QMARK_(inst_2525);
var state_2555__$1 = state_2555;
if(inst_2527){
var statearr_2572_2606 = state_2555__$1;
(statearr_2572_2606[(1)] = (14));

} else {
var statearr_2573_2607 = state_2555__$1;
(statearr_2573_2607[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2556 === (9))){
var inst_2525 = (state_2555[(9)]);
var inst_2512 = (state_2555[(10)]);
var inst_2525__$1 = cljs.core.seq(inst_2512);
var state_2555__$1 = (function (){var statearr_2574 = state_2555;
(statearr_2574[(9)] = inst_2525__$1);

return statearr_2574;
})();
if(inst_2525__$1){
var statearr_2575_2608 = state_2555__$1;
(statearr_2575_2608[(1)] = (11));

} else {
var statearr_2576_2609 = state_2555__$1;
(statearr_2576_2609[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2556 === (5))){
var inst_2503 = (state_2555[(2)]);
var inst_2508 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2509 = [data_ch,close_ch];
var inst_2510 = (new cljs.core.PersistentVector(null,2,(5),inst_2508,inst_2509,null));
var inst_2511 = cljs.core.seq(inst_2510);
var inst_2512 = inst_2511;
var inst_2513 = null;
var inst_2514 = (0);
var inst_2515 = (0);
var state_2555__$1 = (function (){var statearr_2577 = state_2555;
(statearr_2577[(10)] = inst_2512);

(statearr_2577[(11)] = inst_2514);

(statearr_2577[(15)] = inst_2503);

(statearr_2577[(12)] = inst_2513);

(statearr_2577[(14)] = inst_2515);

return statearr_2577;
})();
var statearr_2578_2610 = state_2555__$1;
(statearr_2578_2610[(2)] = null);

(statearr_2578_2610[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2556 === (14))){
var inst_2525 = (state_2555[(9)]);
var inst_2529 = cljs.core.chunk_first(inst_2525);
var inst_2530 = cljs.core.chunk_rest(inst_2525);
var inst_2531 = cljs.core.count(inst_2529);
var inst_2512 = inst_2530;
var inst_2513 = inst_2529;
var inst_2514 = inst_2531;
var inst_2515 = (0);
var state_2555__$1 = (function (){var statearr_2579 = state_2555;
(statearr_2579[(10)] = inst_2512);

(statearr_2579[(11)] = inst_2514);

(statearr_2579[(12)] = inst_2513);

(statearr_2579[(14)] = inst_2515);

return statearr_2579;
})();
var statearr_2580_2611 = state_2555__$1;
(statearr_2580_2611[(2)] = null);

(statearr_2580_2611[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2556 === (16))){
var inst_2539 = (state_2555[(2)]);
var state_2555__$1 = state_2555;
var statearr_2581_2612 = state_2555__$1;
(statearr_2581_2612[(2)] = inst_2539);

(statearr_2581_2612[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2556 === (10))){
var inst_2544 = (state_2555[(2)]);
var state_2555__$1 = state_2555;
var statearr_2585_2613 = state_2555__$1;
(statearr_2585_2613[(2)] = inst_2544);

(statearr_2585_2613[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2556 === (18))){
var state_2555__$1 = state_2555;
var statearr_2586_2614 = state_2555__$1;
(statearr_2586_2614[(2)] = null);

(statearr_2586_2614[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2556 === (8))){
var inst_2512 = (state_2555[(10)]);
var inst_2514 = (state_2555[(11)]);
var inst_2513 = (state_2555[(12)]);
var inst_2515 = (state_2555[(14)]);
var inst_2520 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_2513,inst_2515);
var inst_2521 = cljs.core.async.close_BANG_(inst_2520);
var inst_2522 = (inst_2515 + (1));
var tmp2582 = inst_2512;
var tmp2583 = inst_2514;
var tmp2584 = inst_2513;
var inst_2512__$1 = tmp2582;
var inst_2513__$1 = tmp2584;
var inst_2514__$1 = tmp2583;
var inst_2515__$1 = inst_2522;
var state_2555__$1 = (function (){var statearr_2587 = state_2555;
(statearr_2587[(10)] = inst_2512__$1);

(statearr_2587[(11)] = inst_2514__$1);

(statearr_2587[(12)] = inst_2513__$1);

(statearr_2587[(14)] = inst_2515__$1);

(statearr_2587[(16)] = inst_2521);

return statearr_2587;
})();
var statearr_2588_2615 = state_2555__$1;
(statearr_2588_2615[(2)] = null);

(statearr_2588_2615[(1)] = (6));


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
var statearr_2589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2589[(0)] = blah$impl$handle_close_$_state_machine__2262__auto__);

(statearr_2589[(1)] = (1));

return statearr_2589;
});
var blah$impl$handle_close_$_state_machine__2262__auto____1 = (function (state_2555){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_2555);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e2590){var ex__2265__auto__ = e2590;
var statearr_2591_2616 = state_2555;
(statearr_2591_2616[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_2555[(4)]))){
var statearr_2592_2617 = state_2555;
(statearr_2592_2617[(1)] = cljs.core.first((state_2555[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__2618 = state_2555;
state_2555 = G__2618;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
blah$impl$handle_close_$_state_machine__2262__auto__ = function(state_2555){
switch(arguments.length){
case 0:
return blah$impl$handle_close_$_state_machine__2262__auto____0.call(this);
case 1:
return blah$impl$handle_close_$_state_machine__2262__auto____1.call(this,state_2555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blah$impl$handle_close_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = blah$impl$handle_close_$_state_machine__2262__auto____0;
blah$impl$handle_close_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = blah$impl$handle_close_$_state_machine__2262__auto____1;
return blah$impl$handle_close_$_state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_2593 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_2593[(6)] = c__2284__auto__);

return statearr_2593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));

return c__2284__auto__;
});
/**
 * Start the transport and return a data channel to stream audio data over
 */
blah.impl.start_transport = (function blah$impl$start_transport(transport_ch,data_ch,close_ch){
var c__2284__auto___2659 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_2642){
var state_val_2643 = (state_2642[(1)]);
if((state_val_2643 === (7))){
var inst_2625 = (state_2642[(7)]);
var state_2642__$1 = state_2642;
var statearr_2644_2660 = state_2642__$1;
(statearr_2644_2660[(2)] = inst_2625);

(statearr_2644_2660[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2643 === (1))){
var state_2642__$1 = state_2642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2642__$1,(2),transport_ch);
} else {
if((state_val_2643 === (4))){
var inst_2625 = (state_2642[(7)]);
var inst_2629 = [cljs.core.cst$kw$error,cljs.core.cst$kw$reason];
var inst_2630 = [inst_2625,cljs.core.cst$kw$error];
var inst_2631 = cljs.core.PersistentHashMap.fromArrays(inst_2629,inst_2630);
var state_2642__$1 = state_2642;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_2642__$1,(6),close_ch,inst_2631);
} else {
if((state_val_2643 === (6))){
var inst_2633 = (state_2642[(2)]);
var state_2642__$1 = state_2642;
var statearr_2645_2661 = state_2642__$1;
(statearr_2645_2661[(2)] = inst_2633);

(statearr_2645_2661[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2643 === (3))){
var inst_2625 = (state_2642[(7)]);
var inst_2627 = blah.impl.connect_transport(inst_2625,data_ch,close_ch);
var state_2642__$1 = state_2642;
var statearr_2646_2662 = state_2642__$1;
(statearr_2646_2662[(2)] = inst_2627);

(statearr_2646_2662[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2643 === (2))){
var inst_2624 = (state_2642[(8)]);
var inst_2623 = (state_2642[(2)]);
var inst_2624__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_2623,(0),null);
var inst_2625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_2623,(1),null);
var state_2642__$1 = (function (){var statearr_2647 = state_2642;
(statearr_2647[(7)] = inst_2625);

(statearr_2647[(8)] = inst_2624__$1);

return statearr_2647;
})();
if(cljs.core.truth_(inst_2624__$1)){
var statearr_2648_2663 = state_2642__$1;
(statearr_2648_2663[(1)] = (3));

} else {
var statearr_2649_2664 = state_2642__$1;
(statearr_2649_2664[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2643 === (9))){
var inst_2639 = (state_2642[(2)]);
var inst_2640 = blah.impl.handle_close(inst_2639,data_ch,close_ch);
var state_2642__$1 = state_2642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2642__$1,inst_2640);
} else {
if((state_val_2643 === (5))){
var inst_2624 = (state_2642[(8)]);
var inst_2635 = (state_2642[(2)]);
var state_2642__$1 = (function (){var statearr_2650 = state_2642;
(statearr_2650[(9)] = inst_2635);

return statearr_2650;
})();
if(cljs.core.truth_(inst_2624)){
var statearr_2651_2665 = state_2642__$1;
(statearr_2651_2665[(1)] = (7));

} else {
var statearr_2652_2666 = state_2642__$1;
(statearr_2652_2666[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2643 === (8))){
var state_2642__$1 = state_2642;
var statearr_2653_2667 = state_2642__$1;
(statearr_2653_2667[(2)] = null);

(statearr_2653_2667[(1)] = (9));


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
var statearr_2654 = [null,null,null,null,null,null,null,null,null,null];
(statearr_2654[(0)] = blah$impl$start_transport_$_state_machine__2262__auto__);

(statearr_2654[(1)] = (1));

return statearr_2654;
});
var blah$impl$start_transport_$_state_machine__2262__auto____1 = (function (state_2642){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_2642);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e2655){var ex__2265__auto__ = e2655;
var statearr_2656_2668 = state_2642;
(statearr_2656_2668[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_2642[(4)]))){
var statearr_2657_2669 = state_2642;
(statearr_2657_2669[(1)] = cljs.core.first((state_2642[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__2670 = state_2642;
state_2642 = G__2670;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
blah$impl$start_transport_$_state_machine__2262__auto__ = function(state_2642){
switch(arguments.length){
case 0:
return blah$impl$start_transport_$_state_machine__2262__auto____0.call(this);
case 1:
return blah$impl$start_transport_$_state_machine__2262__auto____1.call(this,state_2642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blah$impl$start_transport_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = blah$impl$start_transport_$_state_machine__2262__auto____0;
blah$impl$start_transport_$_state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = blah$impl$start_transport_$_state_machine__2262__auto____1;
return blah$impl$start_transport_$_state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_2658 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_2658[(6)] = c__2284__auto___2659);

return statearr_2658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));


return data_ch;
});

/**
 * @interface
 */
blah.impl.AudioContext = function(){};

var blah$impl$AudioContext$audio_context$dyn_2671 = (function (session){
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
return blah$impl$AudioContext$audio_context$dyn_2671(session);
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

(blah.impl.Session.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k2673,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__2677 = k2673;
var G__2677__$1 = (((G__2677 instanceof cljs.core.Keyword))?G__2677.fqn:null);
switch (G__2677__$1) {
case "data-ch":
return self__.data_ch;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k2673,else__4505__auto__);

}
}));

(blah.impl.Session.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__2678){
var vec__2679 = p__2678;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2679,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2679,(1),null);
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

(blah.impl.Session.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__2672){
var self__ = this;
var G__2672__$1 = this;
return (new cljs.core.RecordIter((0),G__2672__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_ch,cljs.core.cst$kw$context], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4360__auto____$1 = (function (){var fexpr__2682 = (function (coll__4499__auto__){
return (1644404183 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
});
return fexpr__2682(this__4498__auto____$1);
})();
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(blah.impl.Session.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this2674,other2675){
var self__ = this;
var this2674__$1 = this;
return (((!((other2675 == null)))) && ((((this2674__$1.constructor === other2675.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this2674__$1.data_ch,other2675.data_ch)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this2674__$1.context,other2675.context)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this2674__$1.__extmap,other2675.__extmap)))))))));
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

(blah.impl.Session.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k2673){
var self__ = this;
var this__4509__auto____$1 = this;
var G__2683 = k2673;
var G__2683__$1 = (((G__2683 instanceof cljs.core.Keyword))?G__2683.fqn:null);
switch (G__2683__$1) {
case "data-ch":
case "context":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k2673);

}
}));

(blah.impl.Session.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__2672){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__2684 = cljs.core.keyword_identical_QMARK_;
var expr__2685 = k__4511__auto__;
if(cljs.core.truth_((function (){var G__2687 = cljs.core.cst$kw$data_DASH_ch;
var G__2688 = expr__2685;
return (pred__2684.cljs$core$IFn$_invoke$arity$2 ? pred__2684.cljs$core$IFn$_invoke$arity$2(G__2687,G__2688) : pred__2684.call(null,G__2687,G__2688));
})())){
return (new blah.impl.Session(G__2672,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__2689 = cljs.core.cst$kw$context;
var G__2690 = expr__2685;
return (pred__2684.cljs$core$IFn$_invoke$arity$2 ? pred__2684.cljs$core$IFn$_invoke$arity$2(G__2689,G__2690) : pred__2684.call(null,G__2689,G__2690));
})())){
return (new blah.impl.Session(self__.data_ch,G__2672,self__.__meta,self__.__extmap,null));
} else {
return (new blah.impl.Session(self__.data_ch,self__.context,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__2672),null));
}
}
}));

(blah.impl.Session.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$data_DASH_ch,self__.data_ch,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$context,self__.context,null))], null),self__.__extmap));
}));

(blah.impl.Session.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__2672){
var self__ = this;
var this__4501__auto____$1 = this;
return (new blah.impl.Session(self__.data_ch,self__.context,G__2672,self__.__extmap,self__.__hash));
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
blah.impl.map__GT_Session = (function blah$impl$map__GT_Session(G__2676){
var extmap__4542__auto__ = (function (){var G__2691 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__2676,cljs.core.cst$kw$data_DASH_ch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$context], 0));
if(cljs.core.record_QMARK_(G__2676)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__2691);
} else {
return G__2691;
}
})();
return (new blah.impl.Session(cljs.core.cst$kw$data_DASH_ch.cljs$core$IFn$_invoke$arity$1(G__2676),cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(G__2676),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var G__2695 = arguments.length;
switch (G__2695) {
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

