// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('blah.transforms');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Converts the raw JS message into a sequence of sample frames with each frame containing a sample from each input channel.
 */
blah.transforms.samples__GT_frames = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (message){
var num_channels = message.length;
return cljs.core.partition.cljs$core$IFn$_invoke$arity$2(num_channels,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.interleave,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.array_seq,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(message))));
}));
