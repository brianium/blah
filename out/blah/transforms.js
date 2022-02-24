// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('blah.transforms');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Converts the raw JS message into a sequence of sample sequences containing float32 values. Each sample sequence represents an input channel
 */
blah.transforms.float32 = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (message){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.array_seq,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(message));
}));
/**
 * Converts the raw JS message into a sequence of sample sequences containing 16 bit integers
 */
blah.transforms.pcm16 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(blah.transforms.float32,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (samples){
var iter__4652__auto__ = (function blah$transforms$iter__2344(s__2345){
return (new cljs.core.LazySeq(null,(function (){
var s__2345__$1 = s__2345;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__2345__$1);
if(temp__5753__auto__){
var s__2345__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2345__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__2345__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__2347 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__2346 = (0);
while(true){
if((i__2346 < size__4651__auto__)){
var channel = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4650__auto__,i__2346);
cljs.core.chunk_append(b__2347,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__2346,channel,c__4650__auto__,size__4651__auto__,b__2347,s__2345__$2,temp__5753__auto__){
return (function (p1__2343_SHARP_){
var x__4336__auto__ = (- (32768));
var y__4337__auto__ = (function (){var x__4339__auto__ = (32767);
var y__4340__auto__ = (function (){var G__2348 = (p1__2343_SHARP_ * (32768));
return Math.round(G__2348);
})();
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
});})(i__2346,channel,c__4650__auto__,size__4651__auto__,b__2347,s__2345__$2,temp__5753__auto__))
,channel));

var G__2350 = (i__2346 + (1));
i__2346 = G__2350;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2347),blah$transforms$iter__2344(cljs.core.chunk_rest(s__2345__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2347),null);
}
} else {
var channel = cljs.core.first(s__2345__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (channel,s__2345__$2,temp__5753__auto__){
return (function (p1__2343_SHARP_){
var x__4336__auto__ = (- (32768));
var y__4337__auto__ = (function (){var x__4339__auto__ = (32767);
var y__4340__auto__ = (function (){var G__2349 = (p1__2343_SHARP_ * (32768));
return Math.round(G__2349);
})();
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
});})(channel,s__2345__$2,temp__5753__auto__))
,channel),blah$transforms$iter__2344(cljs.core.rest(s__2345__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(samples);
})));
/**
 * Converts a sequence of sample sequences into a sequence of sample frames with each frame containing a sample from each input channel.
 */
blah.transforms.frames = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (samples){
return cljs.core.partition.cljs$core$IFn$_invoke$arity$2(cljs.core.count(samples),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.interleave,samples));
}));
