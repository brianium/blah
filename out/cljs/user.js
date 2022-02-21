// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.user');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('blah.core');
goog.require('cljs.core.async');
goog.require('cljs.pprint');
goog.require('integrant.core');
goog.require('goog.dom');
goog.require('goog.events');
/**
 * Helper for disabling html elements
 */
cljs.user.disable_elements = (function cljs$user$disable_elements(var_args){
var args__4870__auto__ = [];
var len__4864__auto___2812 = arguments.length;
var i__4865__auto___2813 = (0);
while(true){
if((i__4865__auto___2813 < len__4864__auto___2812)){
args__4870__auto__.push((arguments[i__4865__auto___2813]));

var G__2814 = (i__4865__auto___2813 + (1));
i__4865__auto___2813 = G__2814;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return cljs.user.disable_elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(cljs.user.disable_elements.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
var seq__2808 = cljs.core.seq(elems);
var chunk__2809 = null;
var count__2810 = (0);
var i__2811 = (0);
while(true){
if((i__2811 < count__2810)){
var elem = chunk__2809.cljs$core$IIndexed$_nth$arity$2(null,i__2811);
elem.setAttribute("disabled","disabled");


var G__2815 = seq__2808;
var G__2816 = chunk__2809;
var G__2817 = count__2810;
var G__2818 = (i__2811 + (1));
seq__2808 = G__2815;
chunk__2809 = G__2816;
count__2810 = G__2817;
i__2811 = G__2818;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__2808);
if(temp__5753__auto__){
var seq__2808__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2808__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__2808__$1);
var G__2819 = cljs.core.chunk_rest(seq__2808__$1);
var G__2820 = c__4679__auto__;
var G__2821 = cljs.core.count(c__4679__auto__);
var G__2822 = (0);
seq__2808 = G__2819;
chunk__2809 = G__2820;
count__2810 = G__2821;
i__2811 = G__2822;
continue;
} else {
var elem = cljs.core.first(seq__2808__$1);
elem.setAttribute("disabled","disabled");


var G__2823 = cljs.core.next(seq__2808__$1);
var G__2824 = null;
var G__2825 = (0);
var G__2826 = (0);
seq__2808 = G__2823;
chunk__2809 = G__2824;
count__2810 = G__2825;
i__2811 = G__2826;
continue;
}
} else {
return null;
}
}
break;
}
}));

(cljs.user.disable_elements.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.user.disable_elements.cljs$lang$applyTo = (function (seq2807){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2807));
}));

/**
 * Helper for enabling html elements
 */
cljs.user.enable_elements = (function cljs$user$enable_elements(var_args){
var args__4870__auto__ = [];
var len__4864__auto___2832 = arguments.length;
var i__4865__auto___2833 = (0);
while(true){
if((i__4865__auto___2833 < len__4864__auto___2832)){
args__4870__auto__.push((arguments[i__4865__auto___2833]));

var G__2834 = (i__4865__auto___2833 + (1));
i__4865__auto___2833 = G__2834;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return cljs.user.enable_elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(cljs.user.enable_elements.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
var seq__2828 = cljs.core.seq(elems);
var chunk__2829 = null;
var count__2830 = (0);
var i__2831 = (0);
while(true){
if((i__2831 < count__2830)){
var elem = chunk__2829.cljs$core$IIndexed$_nth$arity$2(null,i__2831);
elem.removeAttribute("disabled");


var G__2835 = seq__2828;
var G__2836 = chunk__2829;
var G__2837 = count__2830;
var G__2838 = (i__2831 + (1));
seq__2828 = G__2835;
chunk__2829 = G__2836;
count__2830 = G__2837;
i__2831 = G__2838;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__2828);
if(temp__5753__auto__){
var seq__2828__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2828__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__2828__$1);
var G__2839 = cljs.core.chunk_rest(seq__2828__$1);
var G__2840 = c__4679__auto__;
var G__2841 = cljs.core.count(c__4679__auto__);
var G__2842 = (0);
seq__2828 = G__2839;
chunk__2829 = G__2840;
count__2830 = G__2841;
i__2831 = G__2842;
continue;
} else {
var elem = cljs.core.first(seq__2828__$1);
elem.removeAttribute("disabled");


var G__2843 = cljs.core.next(seq__2828__$1);
var G__2844 = null;
var G__2845 = (0);
var G__2846 = (0);
seq__2828 = G__2843;
chunk__2829 = G__2844;
count__2830 = G__2845;
i__2831 = G__2846;
continue;
}
} else {
return null;
}
}
break;
}
}));

(cljs.user.enable_elements.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.user.enable_elements.cljs$lang$applyTo = (function (seq2827){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2827));
}));

/**
 * Creates a an audio buffer for storing recorded audio
 */
cljs.user.create_buffer = (function cljs$user$create_buffer(context,frames){
var sample_rate = context.sampleRate;
var channels = cljs.core.count(cljs.core.first(frames));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),channels)){
throw (new Error("Frames required to make a buffer"));
} else {
return context.createBuffer(channels,cljs.core.count(frames),sample_rate);
}
});
/**
 * Write sample frames to the given audio buffer
 */
cljs.user.record_frames = (function cljs$user$record_frames(buffer,frames){
var n__4741__auto___2847 = buffer.numberOfChannels;
var ch_2848 = (0);
while(true){
if((ch_2848 < n__4741__auto___2847)){
var now_buffering_2849 = buffer.getChannelData(ch_2848);
var n__4741__auto___2850__$1 = cljs.core.count(frames);
var i_2851 = (0);
while(true){
if((i_2851 < n__4741__auto___2850__$1)){
var frame_2852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frames,i_2851);
(now_buffering_2849[i_2851] = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_2852,ch_2848));

var G__2853 = (i_2851 + (1));
i_2851 = G__2853;
continue;
} else {
}
break;
}

var G__2854 = (ch_2848 + (1));
ch_2848 = G__2854;
continue;
} else {
}
break;
}

return buffer;
});
/**
 * Play the audio stored in buffer within the given context
 */
cljs.user.play_recording = (function cljs$user$play_recording(buffer,context){
var source = context.createBufferSource();
(source.buffer = buffer);

source.connect(context.destination);

return source.start();
});
cljs.user.app_config = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$blah_SLASH_listen,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,integrant.core.ref(cljs.core.cst$kw$ui_SLASH_state)], null),cljs.core.cst$kw$handler_SLASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,integrant.core.ref(cljs.core.cst$kw$handler_SLASH_state)], null),cljs.core.cst$kw$handler_SLASH_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$frames,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$handler_SLASH_stop,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,integrant.core.ref(cljs.core.cst$kw$handler_SLASH_state)], null),cljs.core.cst$kw$input_SLASH_ch,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ui_SLASH_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input,null], null),cljs.core.cst$kw$ui_SLASH_controls,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$input_SLASH_ch,integrant.core.ref(cljs.core.cst$kw$input_SLASH_ch),cljs.core.cst$kw$button_SLASH_start,"start",cljs.core.cst$kw$button_SLASH_stop,"stop",cljs.core.cst$kw$select_SLASH_inputs,"inputs"], null),cljs.core.cst$kw$ui_SLASH_listeners,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$controls,integrant.core.ref(cljs.core.cst$kw$ui_SLASH_controls),cljs.core.cst$kw$handler_SLASH_data,integrant.core.ref(cljs.core.cst$kw$handler_SLASH_data),cljs.core.cst$kw$handler_SLASH_stop,integrant.core.ref(cljs.core.cst$kw$handler_SLASH_stop),cljs.core.cst$kw$listen,integrant.core.ref(cljs.core.cst$kw$blah_SLASH_listen),cljs.core.cst$kw$state,integrant.core.ref(cljs.core.cst$kw$ui_SLASH_state)], null)], null);
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$blah_SLASH_listen,(function (_,p__2855){
var map__2856 = p__2855;
var map__2856__$1 = cljs.core.__destructure_map(map__2856);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2856__$1,cljs.core.cst$kw$state);
return (function (){
var map__2857 = cljs.core.deref(state);
var map__2857__$1 = cljs.core.__destructure_map(map__2857);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2857__$1,cljs.core.cst$kw$input);
return blah.core.listen.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$device_DASH_id,input], null));
});
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$handler_SLASH_data,(function (_,p__2859){
var map__2860 = p__2859;
var map__2860__$1 = cljs.core.__destructure_map(map__2860);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2860__$1,cljs.core.cst$kw$state);
return (function (frames){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (p1__2858_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__2858_SHARP_,cljs.core.cst$kw$frames,cljs.core.into,frames);
}));
});
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$handler_SLASH_state,(function (_,initial){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$handler_SLASH_stop,(function (_,p__2861){
var map__2862 = p__2861;
var map__2862__$1 = cljs.core.__destructure_map(map__2862);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2862__$1,cljs.core.cst$kw$state);
return (function (context,session){
cljs.core.async.close_BANG_(session);

var map__2863 = cljs.core.deref(state);
var map__2863__$1 = cljs.core.__destructure_map(map__2863);
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2863__$1,cljs.core.cst$kw$frames);
cljs.user.play_recording(cljs.user.record_frames(cljs.user.create_buffer(context,frames),frames),context);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$frames,cljs.core.PersistentVector.EMPTY);
});
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$input_SLASH_ch,(function (_,___$1){
var close_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blah.core.input_ch.cljs$core$IFn$_invoke$arity$1(close_ch),close_ch], null);
}));
integrant.core.halt_key_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$input_SLASH_ch,(function (_,p__2864){
var vec__2865 = p__2864;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2865,(0),null);
var close_ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2865,(1),null);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(close_ch,cljs.core.cst$kw$closed);
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ui_SLASH_state,(function (_,initial){
var _STAR_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
cljs.core.add_watch(_STAR_state,cljs.core.cst$kw$cljs$user_SLASH_log,(function (___$1,___$2,___$3,next){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Ui state changed"], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([next], 0));
}));

return _STAR_state;
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ui_SLASH_controls,(function (_,p__2868){
var map__2869 = p__2868;
var map__2869__$1 = cljs.core.__destructure_map(map__2869);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2869__$1,cljs.core.cst$kw$button_SLASH_start);
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2869__$1,cljs.core.cst$kw$button_SLASH_stop);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2869__$1,cljs.core.cst$kw$select_SLASH_inputs);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2869__$1,cljs.core.cst$kw$input_SLASH_ch);
var inputs_select = goog.dom.getElement(inputs);
var c__2284__auto___2994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_2947){
var state_val_2948 = (state_2947[(1)]);
if((state_val_2948 === (7))){
var inst_2943 = (state_2947[(2)]);
var state_2947__$1 = state_2947;
var statearr_2949_2995 = state_2947__$1;
(statearr_2949_2995[(2)] = inst_2943);

(statearr_2949_2995[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2948 === (20))){
var inst_2918 = (state_2947[(7)]);
var inst_2906 = (state_2947[(8)]);
var inst_2916 = cljs.core.first(inst_2906);
var inst_2917 = cljs.core.__destructure_map(inst_2916);
var inst_2918__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_2917,cljs.core.cst$kw$label);
var inst_2919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_2917,cljs.core.cst$kw$device_DASH_id);
var inst_2920 = goog.dom.createElement("option");
var inst_2921 = cljs.core.seq(inst_2918__$1);
var state_2947__$1 = (function (){var statearr_2950 = state_2947;
(statearr_2950[(7)] = inst_2918__$1);

(statearr_2950[(9)] = inst_2920);

(statearr_2950[(10)] = inst_2919);

return statearr_2950;
})();
if(inst_2921){
var statearr_2951_2996 = state_2947__$1;
(statearr_2951_2996[(1)] = (22));

} else {
var statearr_2952_2997 = state_2947__$1;
(statearr_2952_2997[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2948 === (1))){
var state_2947__$1 = state_2947;
var statearr_2953_2998 = state_2947__$1;
(statearr_2953_2998[(2)] = null);

(statearr_2953_2998[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2948 === (24))){
var inst_2920 = (state_2947[(9)]);
var inst_2906 = (state_2947[(8)]);
var inst_2919 = (state_2947[(10)]);
var inst_2925 = (state_2947[(2)]);
var inst_2926 = goog.dom.append(inst_2920,inst_2925);
var inst_2927 = inst_2920.setAttribute("value",inst_2919);
var inst_2928 = goog.dom.append(inputs_select,inst_2920);
var inst_2929 = cljs.core.next(inst_2906);
var inst_2881 = inst_2929;
var inst_2882 = null;
var inst_2883 = (0);
var inst_2884 = (0);
var state_2947__$1 = (function (){var statearr_2957 = state_2947;
(statearr_2957[(11)] = inst_2882);

(statearr_2957[(12)] = inst_2926);

(statearr_2957[(13)] = inst_2928);

(statearr_2957[(14)] = inst_2881);

(statearr_2957[(15)] = inst_2883);

(statearr_2957[(16)] = inst_2927);

(statearr_2957[(17)] = inst_2884);

return statearr_2957;
})();
var statearr_2958_2999 = state_2947__$1;
(statearr_2958_2999[(2)] = null);

(statearr_2958_2999[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2948 === (4))){
var inst_2873 = (state_2947[(18)]);
var inst_2873__$1 = (state_2947[(2)]);
var state_2947__$1 = (function (){var statearr_2959 = state_2947;
(statearr_2959[(18)] = inst_2873__$1);

return statearr_2959;
})();
if(cljs.core.truth_(inst_2873__$1)){
var statearr_2960_3000 = state_2947__$1;
(statearr_2960_3000[(1)] = (5));

} else {
var statearr_2961_3001 = state_2947__$1;
(statearr_2961_3001[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2948 === (15))){
var inst_2882 = (state_2947[(11)]);
var inst_2881 = (state_2947[(14)]);
var inst_2894 = (state_2947[(19)]);
var inst_2883 = (state_2947[(15)]);
var inst_2893 = (state_2947[(20)]);
var inst_2884 = (state_2947[(17)]);
var inst_2899 = (state_2947[(2)]);
var inst_2900 = goog.dom.append(inst_2894,inst_2899);
var inst_2901 = inst_2894.setAttribute("value",inst_2893);
var inst_2902 = goog.dom.append(inputs_select,inst_2894);
var inst_2903 = (inst_2884 + (1));
var tmp2954 = inst_2882;
var tmp2955 = inst_2881;
var tmp2956 = inst_2883;
var inst_2881__$1 = tmp2955;
var inst_2882__$1 = tmp2954;
var inst_2883__$1 = tmp2956;
var inst_2884__$1 = inst_2903;
var state_2947__$1 = (function (){var statearr_2962 = state_2947;
(statearr_2962[(11)] = inst_2882__$1);

(statearr_2962[(21)] = inst_2900);

(statearr_2962[(14)] = inst_2881__$1);

(statearr_2962[(22)] = inst_2901);

(statearr_2962[(15)] = inst_2883__$1);

(statearr_2962[(23)] = inst_2902);

(statearr_2962[(17)] = inst_2884__$1);

return statearr_2962;
})();
var statearr_2963_3002 = state_2947__$1;
(statearr_2963_3002[(2)] = null);

(statearr_2963_3002[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2948 === (21))){
var inst_2932 = (state_2947[(2)]);
var state_2947__$1 = state_2947;
var statearr_2964_3003 = state_2947__$1;
(statearr_2964_3003[(2)] = inst_2932);

(statearr_2964_3003[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2948 === (13))){
var inst_2892 = (state_2947[(24)]);
var state_2947__$1 = state_2947;
var statearr_2965_3004 = state_2947__$1;
(statearr_2965_3004[(2)] = inst_2892);

(statearr_2965_3004[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2948 === (22))){
var inst_2918 = (state_2947[(7)]);
var state_2947__$1 = state_2947;
var statearr_2966_3005 = state_2947__$1;
(statearr_2966_3005[(2)] = inst_2918);

(statearr_2966_3005[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2948 === (6))){
var state_2947__$1 = state_2947;
var statearr_2967_3006 = state_2947__$1;
(statearr_2967_3006[(2)] = null);

(statearr_2967_3006[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2948 === (17))){
var state_2947__$1 = state_2947;
var statearr_2968_3007 = state_2947__$1;
(statearr_2968_3007[(2)] = null);

(statearr_2968_3007[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2948 === (3))){
var inst_2945 = (state_2947[(2)]);
var state_2947__$1 = state_2947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2947__$1,inst_2945);
} else {
if((state_val_2948 === (12))){
var inst_2937 = (state_2947[(2)]);
var state_2947__$1 = state_2947;
var statearr_2969_3008 = state_2947__$1;
(statearr_2969_3008[(2)] = inst_2937);

(statearr_2969_3008[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2948 === (2))){
var inst_2871 = cljs.core.first(ch);
var state_2947__$1 = state_2947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2947__$1,(4),inst_2871);
} else {
if((state_val_2948 === (23))){
var state_2947__$1 = state_2947;
var statearr_2970_3009 = state_2947__$1;
(statearr_2970_3009[(2)] = "Default");

(statearr_2970_3009[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2948 === (19))){
var inst_2906 = (state_2947[(8)]);
var inst_2910 = cljs.core.chunk_first(inst_2906);
var inst_2911 = cljs.core.chunk_rest(inst_2906);
var inst_2912 = cljs.core.count(inst_2910);
var inst_2881 = inst_2911;
var inst_2882 = inst_2910;
var inst_2883 = inst_2912;
var inst_2884 = (0);
var state_2947__$1 = (function (){var statearr_2971 = state_2947;
(statearr_2971[(11)] = inst_2882);

(statearr_2971[(14)] = inst_2881);

(statearr_2971[(15)] = inst_2883);

(statearr_2971[(17)] = inst_2884);

return statearr_2971;
})();
var statearr_2972_3010 = state_2947__$1;
(statearr_2972_3010[(2)] = null);

(statearr_2972_3010[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2948 === (11))){
var inst_2881 = (state_2947[(14)]);
var inst_2906 = (state_2947[(8)]);
var inst_2906__$1 = cljs.core.seq(inst_2881);
var state_2947__$1 = (function (){var statearr_2973 = state_2947;
(statearr_2973[(8)] = inst_2906__$1);

return statearr_2973;
})();
if(inst_2906__$1){
var statearr_2974_3011 = state_2947__$1;
(statearr_2974_3011[(1)] = (16));

} else {
var statearr_2975_3012 = state_2947__$1;
(statearr_2975_3012[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2948 === (9))){
var inst_2939 = (state_2947[(2)]);
var state_2947__$1 = (function (){var statearr_2976 = state_2947;
(statearr_2976[(25)] = inst_2939);

return statearr_2976;
})();
var statearr_2977_3013 = state_2947__$1;
(statearr_2977_3013[(2)] = null);

(statearr_2977_3013[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2948 === (5))){
var inst_2873 = (state_2947[(18)]);
var inst_2875 = goog.dom.removeChildren(inputs_select);
var inst_2880 = cljs.core.seq(inst_2873);
var inst_2881 = inst_2880;
var inst_2882 = null;
var inst_2883 = (0);
var inst_2884 = (0);
var state_2947__$1 = (function (){var statearr_2978 = state_2947;
(statearr_2978[(11)] = inst_2882);

(statearr_2978[(14)] = inst_2881);

(statearr_2978[(15)] = inst_2883);

(statearr_2978[(26)] = inst_2875);

(statearr_2978[(17)] = inst_2884);

return statearr_2978;
})();
var statearr_2979_3014 = state_2947__$1;
(statearr_2979_3014[(2)] = null);

(statearr_2979_3014[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2948 === (14))){
var state_2947__$1 = state_2947;
var statearr_2980_3015 = state_2947__$1;
(statearr_2980_3015[(2)] = "Default");

(statearr_2980_3015[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2948 === (16))){
var inst_2906 = (state_2947[(8)]);
var inst_2908 = cljs.core.chunked_seq_QMARK_(inst_2906);
var state_2947__$1 = state_2947;
if(inst_2908){
var statearr_2981_3016 = state_2947__$1;
(statearr_2981_3016[(1)] = (19));

} else {
var statearr_2982_3017 = state_2947__$1;
(statearr_2982_3017[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2948 === (10))){
var inst_2882 = (state_2947[(11)]);
var inst_2892 = (state_2947[(24)]);
var inst_2884 = (state_2947[(17)]);
var inst_2890 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_2882,inst_2884);
var inst_2891 = cljs.core.__destructure_map(inst_2890);
var inst_2892__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_2891,cljs.core.cst$kw$label);
var inst_2893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_2891,cljs.core.cst$kw$device_DASH_id);
var inst_2894 = goog.dom.createElement("option");
var inst_2895 = cljs.core.seq(inst_2892__$1);
var state_2947__$1 = (function (){var statearr_2983 = state_2947;
(statearr_2983[(24)] = inst_2892__$1);

(statearr_2983[(19)] = inst_2894);

(statearr_2983[(20)] = inst_2893);

return statearr_2983;
})();
if(inst_2895){
var statearr_2984_3018 = state_2947__$1;
(statearr_2984_3018[(1)] = (13));

} else {
var statearr_2985_3019 = state_2947__$1;
(statearr_2985_3019[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2948 === (18))){
var inst_2935 = (state_2947[(2)]);
var state_2947__$1 = state_2947;
var statearr_2986_3020 = state_2947__$1;
(statearr_2986_3020[(2)] = inst_2935);

(statearr_2986_3020[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2948 === (8))){
var inst_2883 = (state_2947[(15)]);
var inst_2884 = (state_2947[(17)]);
var inst_2886 = (inst_2884 < inst_2883);
var inst_2887 = inst_2886;
var state_2947__$1 = state_2947;
if(cljs.core.truth_(inst_2887)){
var statearr_2987_3021 = state_2947__$1;
(statearr_2987_3021[(1)] = (10));

} else {
var statearr_2988_3022 = state_2947__$1;
(statearr_2988_3022[(1)] = (11));

}

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
}
}
}
}
}
});
return (function() {
var cljs$user$state_machine__2262__auto__ = null;
var cljs$user$state_machine__2262__auto____0 = (function (){
var statearr_2989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2989[(0)] = cljs$user$state_machine__2262__auto__);

(statearr_2989[(1)] = (1));

return statearr_2989;
});
var cljs$user$state_machine__2262__auto____1 = (function (state_2947){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_2947);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e2990){var ex__2265__auto__ = e2990;
var statearr_2991_3023 = state_2947;
(statearr_2991_3023[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_2947[(4)]))){
var statearr_2992_3024 = state_2947;
(statearr_2992_3024[(1)] = cljs.core.first((state_2947[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__3025 = state_2947;
state_2947 = G__3025;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
cljs$user$state_machine__2262__auto__ = function(state_2947){
switch(arguments.length){
case 0:
return cljs$user$state_machine__2262__auto____0.call(this);
case 1:
return cljs$user$state_machine__2262__auto____1.call(this,state_2947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$user$state_machine__2262__auto____0;
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$user$state_machine__2262__auto____1;
return cljs$user$state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_2993 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_2993[(6)] = c__2284__auto___2994);

return statearr_2993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));


return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$button_SLASH_start,goog.dom.getElement(start),cljs.core.cst$kw$button_SLASH_stop,goog.dom.getElement(stop),cljs.core.cst$kw$select_SLASH_inputs,inputs_select], null);
}));
integrant.core.halt_key_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ui_SLASH_controls,(function (_,controls){
var seq__3026 = cljs.core.seq(controls);
var chunk__3027 = null;
var count__3028 = (0);
var i__3029 = (0);
while(true){
if((i__3029 < count__3028)){
var vec__3036 = chunk__3027.cljs$core$IIndexed$_nth$arity$2(null,i__3029);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3036,(0),null);
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3036,(1),null);
goog.events.removeAll(elem);


var G__3042 = seq__3026;
var G__3043 = chunk__3027;
var G__3044 = count__3028;
var G__3045 = (i__3029 + (1));
seq__3026 = G__3042;
chunk__3027 = G__3043;
count__3028 = G__3044;
i__3029 = G__3045;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__3026);
if(temp__5753__auto__){
var seq__3026__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__3026__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__3026__$1);
var G__3046 = cljs.core.chunk_rest(seq__3026__$1);
var G__3047 = c__4679__auto__;
var G__3048 = cljs.core.count(c__4679__auto__);
var G__3049 = (0);
seq__3026 = G__3046;
chunk__3027 = G__3047;
count__3028 = G__3048;
i__3029 = G__3049;
continue;
} else {
var vec__3039 = cljs.core.first(seq__3026__$1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3039,(0),null);
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3039,(1),null);
goog.events.removeAll(elem);


var G__3050 = cljs.core.next(seq__3026__$1);
var G__3051 = null;
var G__3052 = (0);
var G__3053 = (0);
seq__3026 = G__3050;
chunk__3027 = G__3051;
count__3028 = G__3052;
i__3029 = G__3053;
continue;
}
} else {
return null;
}
}
break;
}
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ui_SLASH_listeners,(function (_,p__3055){
var map__3056 = p__3055;
var map__3056__$1 = cljs.core.__destructure_map(map__3056);
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3056__$1,cljs.core.cst$kw$controls);
var listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3056__$1,cljs.core.cst$kw$listen);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3056__$1,cljs.core.cst$kw$state);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3056__$1,cljs.core.cst$kw$handler_SLASH_data);
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3056__$1,cljs.core.cst$kw$handler_SLASH_stop);
var map__3057 = controls;
var map__3057__$1 = cljs.core.__destructure_map(map__3057);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3057__$1,cljs.core.cst$kw$button_SLASH_start);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3057__$1,cljs.core.cst$kw$select_SLASH_inputs);
var stop_button = cljs.core.cst$kw$button_SLASH_stop.cljs$core$IFn$_invoke$arity$1(controls);
goog.events.listen(start,goog.events.EventType.CLICK,(function (){
cljs.user.disable_elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inputs,start], 0));

cljs.user.enable_elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stop_button], 0));

var session = (listen.cljs$core$IFn$_invoke$arity$0 ? listen.cljs$core$IFn$_invoke$arity$0() : listen.call(null));
var context = blah.core.audio_context(session);
goog.events.listenOnce(stop_button,goog.events.EventType.CLICK,(function (){
return (stop.cljs$core$IFn$_invoke$arity$2 ? stop.cljs$core$IFn$_invoke$arity$2(context,session) : stop.call(null,context,session));
}));

var c__2284__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_3073){
var state_val_3074 = (state_3073[(1)]);
if((state_val_3074 === (1))){
var state_3073__$1 = state_3073;
var statearr_3075_3089 = state_3073__$1;
(statearr_3075_3089[(2)] = null);

(statearr_3075_3089[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3074 === (2))){
var state_3073__$1 = state_3073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_3073__$1,(4),session);
} else {
if((state_val_3074 === (3))){
var inst_3071 = (state_3073[(2)]);
var state_3073__$1 = state_3073;
return cljs.core.async.impl.ioc_helpers.return_chan(state_3073__$1,inst_3071);
} else {
if((state_val_3074 === (4))){
var inst_3060 = (state_3073[(7)]);
var inst_3060__$1 = (state_3073[(2)]);
var inst_3061 = cljs.core.not(inst_3060__$1);
var state_3073__$1 = (function (){var statearr_3076 = state_3073;
(statearr_3076[(7)] = inst_3060__$1);

return statearr_3076;
})();
if(inst_3061){
var statearr_3077_3090 = state_3073__$1;
(statearr_3077_3090[(1)] = (5));

} else {
var statearr_3078_3091 = state_3073__$1;
(statearr_3078_3091[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3074 === (5))){
var inst_3063 = cljs.user.enable_elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inputs,start], 0));
var inst_3064 = cljs.user.disable_elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stop_button], 0));
var state_3073__$1 = (function (){var statearr_3079 = state_3073;
(statearr_3079[(8)] = inst_3063);

return statearr_3079;
})();
var statearr_3080_3092 = state_3073__$1;
(statearr_3080_3092[(2)] = inst_3064);

(statearr_3080_3092[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3074 === (6))){
var inst_3060 = (state_3073[(7)]);
var inst_3066 = (data.cljs$core$IFn$_invoke$arity$1 ? data.cljs$core$IFn$_invoke$arity$1(inst_3060) : data.call(null,inst_3060));
var state_3073__$1 = (function (){var statearr_3081 = state_3073;
(statearr_3081[(9)] = inst_3066);

return statearr_3081;
})();
var statearr_3082_3093 = state_3073__$1;
(statearr_3082_3093[(2)] = null);

(statearr_3082_3093[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3074 === (7))){
var inst_3069 = (state_3073[(2)]);
var state_3073__$1 = state_3073;
var statearr_3083_3094 = state_3073__$1;
(statearr_3083_3094[(2)] = inst_3069);

(statearr_3083_3094[(1)] = (3));


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
var cljs$user$state_machine__2262__auto__ = null;
var cljs$user$state_machine__2262__auto____0 = (function (){
var statearr_3084 = [null,null,null,null,null,null,null,null,null,null];
(statearr_3084[(0)] = cljs$user$state_machine__2262__auto__);

(statearr_3084[(1)] = (1));

return statearr_3084;
});
var cljs$user$state_machine__2262__auto____1 = (function (state_3073){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_3073);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e3085){var ex__2265__auto__ = e3085;
var statearr_3086_3095 = state_3073;
(statearr_3086_3095[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_3073[(4)]))){
var statearr_3087_3096 = state_3073;
(statearr_3087_3096[(1)] = cljs.core.first((state_3073[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__3097 = state_3073;
state_3073 = G__3097;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
cljs$user$state_machine__2262__auto__ = function(state_3073){
switch(arguments.length){
case 0:
return cljs$user$state_machine__2262__auto____0.call(this);
case 1:
return cljs$user$state_machine__2262__auto____1.call(this,state_3073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$user$state_machine__2262__auto____0;
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$user$state_machine__2262__auto____1;
return cljs$user$state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_3088 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_3088[(6)] = c__2284__auto__);

return statearr_3088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));

return c__2284__auto__;
}));

return goog.events.listen(inputs,goog.events.EventType.CHANGE,(function (p1__3054_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$input,p1__3054_SHARP_.target.value);
}));
}));
/**
 * Start the system by populating controls and wiring up event listeners
 */
cljs.user.start = (function cljs$user$start(){
return integrant.core.init.cljs$core$IFn$_invoke$arity$1(cljs.user.app_config);
});
/**
 * Stop the system. Removes event listeners and closes channels
 */
cljs.user.stop = (function cljs$user$stop(system){
return integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$1(system);
});
cljs.user.system = cljs.user.start();
