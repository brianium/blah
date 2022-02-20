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
var len__4864__auto___2802 = arguments.length;
var i__4865__auto___2803 = (0);
while(true){
if((i__4865__auto___2803 < len__4864__auto___2802)){
args__4870__auto__.push((arguments[i__4865__auto___2803]));

var G__2804 = (i__4865__auto___2803 + (1));
i__4865__auto___2803 = G__2804;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return cljs.user.disable_elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(cljs.user.disable_elements.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
var seq__2798 = cljs.core.seq(elems);
var chunk__2799 = null;
var count__2800 = (0);
var i__2801 = (0);
while(true){
if((i__2801 < count__2800)){
var elem = chunk__2799.cljs$core$IIndexed$_nth$arity$2(null,i__2801);
elem.setAttribute("disabled","disabled");


var G__2805 = seq__2798;
var G__2806 = chunk__2799;
var G__2807 = count__2800;
var G__2808 = (i__2801 + (1));
seq__2798 = G__2805;
chunk__2799 = G__2806;
count__2800 = G__2807;
i__2801 = G__2808;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__2798);
if(temp__5753__auto__){
var seq__2798__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2798__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__2798__$1);
var G__2809 = cljs.core.chunk_rest(seq__2798__$1);
var G__2810 = c__4679__auto__;
var G__2811 = cljs.core.count(c__4679__auto__);
var G__2812 = (0);
seq__2798 = G__2809;
chunk__2799 = G__2810;
count__2800 = G__2811;
i__2801 = G__2812;
continue;
} else {
var elem = cljs.core.first(seq__2798__$1);
elem.setAttribute("disabled","disabled");


var G__2813 = cljs.core.next(seq__2798__$1);
var G__2814 = null;
var G__2815 = (0);
var G__2816 = (0);
seq__2798 = G__2813;
chunk__2799 = G__2814;
count__2800 = G__2815;
i__2801 = G__2816;
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
(cljs.user.disable_elements.cljs$lang$applyTo = (function (seq2797){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2797));
}));

/**
 * Helper for enabling html elements
 */
cljs.user.enable_elements = (function cljs$user$enable_elements(var_args){
var args__4870__auto__ = [];
var len__4864__auto___2822 = arguments.length;
var i__4865__auto___2823 = (0);
while(true){
if((i__4865__auto___2823 < len__4864__auto___2822)){
args__4870__auto__.push((arguments[i__4865__auto___2823]));

var G__2824 = (i__4865__auto___2823 + (1));
i__4865__auto___2823 = G__2824;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return cljs.user.enable_elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(cljs.user.enable_elements.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
var seq__2818 = cljs.core.seq(elems);
var chunk__2819 = null;
var count__2820 = (0);
var i__2821 = (0);
while(true){
if((i__2821 < count__2820)){
var elem = chunk__2819.cljs$core$IIndexed$_nth$arity$2(null,i__2821);
elem.removeAttribute("disabled");


var G__2825 = seq__2818;
var G__2826 = chunk__2819;
var G__2827 = count__2820;
var G__2828 = (i__2821 + (1));
seq__2818 = G__2825;
chunk__2819 = G__2826;
count__2820 = G__2827;
i__2821 = G__2828;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__2818);
if(temp__5753__auto__){
var seq__2818__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2818__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__2818__$1);
var G__2829 = cljs.core.chunk_rest(seq__2818__$1);
var G__2830 = c__4679__auto__;
var G__2831 = cljs.core.count(c__4679__auto__);
var G__2832 = (0);
seq__2818 = G__2829;
chunk__2819 = G__2830;
count__2820 = G__2831;
i__2821 = G__2832;
continue;
} else {
var elem = cljs.core.first(seq__2818__$1);
elem.removeAttribute("disabled");


var G__2833 = cljs.core.next(seq__2818__$1);
var G__2834 = null;
var G__2835 = (0);
var G__2836 = (0);
seq__2818 = G__2833;
chunk__2819 = G__2834;
count__2820 = G__2835;
i__2821 = G__2836;
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
(cljs.user.enable_elements.cljs$lang$applyTo = (function (seq2817){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2817));
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
var n__4741__auto___2837 = buffer.numberOfChannels;
var ch_2838 = (0);
while(true){
if((ch_2838 < n__4741__auto___2837)){
var now_buffering_2839 = buffer.getChannelData(ch_2838);
var n__4741__auto___2840__$1 = cljs.core.count(frames);
var i_2841 = (0);
while(true){
if((i_2841 < n__4741__auto___2840__$1)){
var frame_2842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frames,i_2841);
(now_buffering_2839[i_2841] = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_2842,ch_2838));

var G__2843 = (i_2841 + (1));
i_2841 = G__2843;
continue;
} else {
}
break;
}

var G__2844 = (ch_2838 + (1));
ch_2838 = G__2844;
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
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$blah_SLASH_listen,(function (_,p__2845){
var map__2846 = p__2845;
var map__2846__$1 = cljs.core.__destructure_map(map__2846);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2846__$1,cljs.core.cst$kw$state);
return (function (){
var map__2847 = cljs.core.deref(state);
var map__2847__$1 = cljs.core.__destructure_map(map__2847);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2847__$1,cljs.core.cst$kw$input);
return blah.core.listen.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$device_DASH_id,input], null));
});
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$handler_SLASH_data,(function (_,p__2849){
var map__2850 = p__2849;
var map__2850__$1 = cljs.core.__destructure_map(map__2850);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2850__$1,cljs.core.cst$kw$state);
return (function (frames){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (p1__2848_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__2848_SHARP_,cljs.core.cst$kw$frames,cljs.core.into,frames);
}));
});
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$handler_SLASH_state,(function (_,initial){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$handler_SLASH_stop,(function (_,p__2851){
var map__2852 = p__2851;
var map__2852__$1 = cljs.core.__destructure_map(map__2852);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2852__$1,cljs.core.cst$kw$state);
return (function (context,session){
cljs.core.async.close_BANG_(session);

var map__2853 = cljs.core.deref(state);
var map__2853__$1 = cljs.core.__destructure_map(map__2853);
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2853__$1,cljs.core.cst$kw$frames);
cljs.user.play_recording(cljs.user.record_frames(cljs.user.create_buffer(context,frames),frames),context);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$frames,cljs.core.PersistentVector.EMPTY);
});
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$input_SLASH_ch,(function (_,___$1){
var close_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blah.core.input_ch.cljs$core$IFn$_invoke$arity$1(close_ch),close_ch], null);
}));
integrant.core.halt_key_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$input_SLASH_ch,(function (_,p__2854){
var vec__2855 = p__2854;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2855,(0),null);
var close_ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2855,(1),null);
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
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ui_SLASH_controls,(function (_,p__2858){
var map__2859 = p__2858;
var map__2859__$1 = cljs.core.__destructure_map(map__2859);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2859__$1,cljs.core.cst$kw$button_SLASH_start);
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2859__$1,cljs.core.cst$kw$button_SLASH_stop);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2859__$1,cljs.core.cst$kw$select_SLASH_inputs);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2859__$1,cljs.core.cst$kw$input_SLASH_ch);
var inputs_select = goog.dom.getElement(inputs);
var c__2284__auto___2984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_2937){
var state_val_2938 = (state_2937[(1)]);
if((state_val_2938 === (7))){
var inst_2933 = (state_2937[(2)]);
var state_2937__$1 = state_2937;
var statearr_2939_2985 = state_2937__$1;
(statearr_2939_2985[(2)] = inst_2933);

(statearr_2939_2985[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2938 === (20))){
var inst_2908 = (state_2937[(7)]);
var inst_2896 = (state_2937[(8)]);
var inst_2906 = cljs.core.first(inst_2896);
var inst_2907 = cljs.core.__destructure_map(inst_2906);
var inst_2908__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_2907,cljs.core.cst$kw$label);
var inst_2909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_2907,cljs.core.cst$kw$device_DASH_id);
var inst_2910 = goog.dom.createElement("option");
var inst_2911 = cljs.core.seq(inst_2908__$1);
var state_2937__$1 = (function (){var statearr_2940 = state_2937;
(statearr_2940[(7)] = inst_2908__$1);

(statearr_2940[(9)] = inst_2910);

(statearr_2940[(10)] = inst_2909);

return statearr_2940;
})();
if(inst_2911){
var statearr_2941_2986 = state_2937__$1;
(statearr_2941_2986[(1)] = (22));

} else {
var statearr_2942_2987 = state_2937__$1;
(statearr_2942_2987[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2938 === (1))){
var state_2937__$1 = state_2937;
var statearr_2943_2988 = state_2937__$1;
(statearr_2943_2988[(2)] = null);

(statearr_2943_2988[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2938 === (24))){
var inst_2896 = (state_2937[(8)]);
var inst_2910 = (state_2937[(9)]);
var inst_2909 = (state_2937[(10)]);
var inst_2915 = (state_2937[(2)]);
var inst_2916 = goog.dom.append(inst_2910,inst_2915);
var inst_2917 = inst_2910.setAttribute("value",inst_2909);
var inst_2918 = goog.dom.append(inputs_select,inst_2910);
var inst_2919 = cljs.core.next(inst_2896);
var inst_2871 = inst_2919;
var inst_2872 = null;
var inst_2873 = (0);
var inst_2874 = (0);
var state_2937__$1 = (function (){var statearr_2947 = state_2937;
(statearr_2947[(11)] = inst_2918);

(statearr_2947[(12)] = inst_2916);

(statearr_2947[(13)] = inst_2872);

(statearr_2947[(14)] = inst_2871);

(statearr_2947[(15)] = inst_2873);

(statearr_2947[(16)] = inst_2874);

(statearr_2947[(17)] = inst_2917);

return statearr_2947;
})();
var statearr_2948_2989 = state_2937__$1;
(statearr_2948_2989[(2)] = null);

(statearr_2948_2989[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2938 === (4))){
var inst_2863 = (state_2937[(18)]);
var inst_2863__$1 = (state_2937[(2)]);
var state_2937__$1 = (function (){var statearr_2949 = state_2937;
(statearr_2949[(18)] = inst_2863__$1);

return statearr_2949;
})();
if(cljs.core.truth_(inst_2863__$1)){
var statearr_2950_2990 = state_2937__$1;
(statearr_2950_2990[(1)] = (5));

} else {
var statearr_2951_2991 = state_2937__$1;
(statearr_2951_2991[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2938 === (15))){
var inst_2872 = (state_2937[(13)]);
var inst_2883 = (state_2937[(19)]);
var inst_2871 = (state_2937[(14)]);
var inst_2884 = (state_2937[(20)]);
var inst_2873 = (state_2937[(15)]);
var inst_2874 = (state_2937[(16)]);
var inst_2889 = (state_2937[(2)]);
var inst_2890 = goog.dom.append(inst_2884,inst_2889);
var inst_2891 = inst_2884.setAttribute("value",inst_2883);
var inst_2892 = goog.dom.append(inputs_select,inst_2884);
var inst_2893 = (inst_2874 + (1));
var tmp2944 = inst_2872;
var tmp2945 = inst_2871;
var tmp2946 = inst_2873;
var inst_2871__$1 = tmp2945;
var inst_2872__$1 = tmp2944;
var inst_2873__$1 = tmp2946;
var inst_2874__$1 = inst_2893;
var state_2937__$1 = (function (){var statearr_2952 = state_2937;
(statearr_2952[(21)] = inst_2892);

(statearr_2952[(22)] = inst_2891);

(statearr_2952[(13)] = inst_2872__$1);

(statearr_2952[(14)] = inst_2871__$1);

(statearr_2952[(15)] = inst_2873__$1);

(statearr_2952[(23)] = inst_2890);

(statearr_2952[(16)] = inst_2874__$1);

return statearr_2952;
})();
var statearr_2953_2992 = state_2937__$1;
(statearr_2953_2992[(2)] = null);

(statearr_2953_2992[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2938 === (21))){
var inst_2922 = (state_2937[(2)]);
var state_2937__$1 = state_2937;
var statearr_2954_2993 = state_2937__$1;
(statearr_2954_2993[(2)] = inst_2922);

(statearr_2954_2993[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2938 === (13))){
var inst_2882 = (state_2937[(24)]);
var state_2937__$1 = state_2937;
var statearr_2955_2994 = state_2937__$1;
(statearr_2955_2994[(2)] = inst_2882);

(statearr_2955_2994[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2938 === (22))){
var inst_2908 = (state_2937[(7)]);
var state_2937__$1 = state_2937;
var statearr_2956_2995 = state_2937__$1;
(statearr_2956_2995[(2)] = inst_2908);

(statearr_2956_2995[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2938 === (6))){
var state_2937__$1 = state_2937;
var statearr_2957_2996 = state_2937__$1;
(statearr_2957_2996[(2)] = null);

(statearr_2957_2996[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2938 === (17))){
var state_2937__$1 = state_2937;
var statearr_2958_2997 = state_2937__$1;
(statearr_2958_2997[(2)] = null);

(statearr_2958_2997[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2938 === (3))){
var inst_2935 = (state_2937[(2)]);
var state_2937__$1 = state_2937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2937__$1,inst_2935);
} else {
if((state_val_2938 === (12))){
var inst_2927 = (state_2937[(2)]);
var state_2937__$1 = state_2937;
var statearr_2959_2998 = state_2937__$1;
(statearr_2959_2998[(2)] = inst_2927);

(statearr_2959_2998[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2938 === (2))){
var inst_2861 = cljs.core.first(ch);
var state_2937__$1 = state_2937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2937__$1,(4),inst_2861);
} else {
if((state_val_2938 === (23))){
var state_2937__$1 = state_2937;
var statearr_2960_2999 = state_2937__$1;
(statearr_2960_2999[(2)] = "Default");

(statearr_2960_2999[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2938 === (19))){
var inst_2896 = (state_2937[(8)]);
var inst_2900 = cljs.core.chunk_first(inst_2896);
var inst_2901 = cljs.core.chunk_rest(inst_2896);
var inst_2902 = cljs.core.count(inst_2900);
var inst_2871 = inst_2901;
var inst_2872 = inst_2900;
var inst_2873 = inst_2902;
var inst_2874 = (0);
var state_2937__$1 = (function (){var statearr_2961 = state_2937;
(statearr_2961[(13)] = inst_2872);

(statearr_2961[(14)] = inst_2871);

(statearr_2961[(15)] = inst_2873);

(statearr_2961[(16)] = inst_2874);

return statearr_2961;
})();
var statearr_2962_3000 = state_2937__$1;
(statearr_2962_3000[(2)] = null);

(statearr_2962_3000[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2938 === (11))){
var inst_2896 = (state_2937[(8)]);
var inst_2871 = (state_2937[(14)]);
var inst_2896__$1 = cljs.core.seq(inst_2871);
var state_2937__$1 = (function (){var statearr_2963 = state_2937;
(statearr_2963[(8)] = inst_2896__$1);

return statearr_2963;
})();
if(inst_2896__$1){
var statearr_2964_3001 = state_2937__$1;
(statearr_2964_3001[(1)] = (16));

} else {
var statearr_2965_3002 = state_2937__$1;
(statearr_2965_3002[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2938 === (9))){
var inst_2929 = (state_2937[(2)]);
var state_2937__$1 = (function (){var statearr_2966 = state_2937;
(statearr_2966[(25)] = inst_2929);

return statearr_2966;
})();
var statearr_2967_3003 = state_2937__$1;
(statearr_2967_3003[(2)] = null);

(statearr_2967_3003[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2938 === (5))){
var inst_2863 = (state_2937[(18)]);
var inst_2865 = goog.dom.removeChildren(inputs_select);
var inst_2870 = cljs.core.seq(inst_2863);
var inst_2871 = inst_2870;
var inst_2872 = null;
var inst_2873 = (0);
var inst_2874 = (0);
var state_2937__$1 = (function (){var statearr_2968 = state_2937;
(statearr_2968[(26)] = inst_2865);

(statearr_2968[(13)] = inst_2872);

(statearr_2968[(14)] = inst_2871);

(statearr_2968[(15)] = inst_2873);

(statearr_2968[(16)] = inst_2874);

return statearr_2968;
})();
var statearr_2969_3004 = state_2937__$1;
(statearr_2969_3004[(2)] = null);

(statearr_2969_3004[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2938 === (14))){
var state_2937__$1 = state_2937;
var statearr_2970_3005 = state_2937__$1;
(statearr_2970_3005[(2)] = "Default");

(statearr_2970_3005[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2938 === (16))){
var inst_2896 = (state_2937[(8)]);
var inst_2898 = cljs.core.chunked_seq_QMARK_(inst_2896);
var state_2937__$1 = state_2937;
if(inst_2898){
var statearr_2971_3006 = state_2937__$1;
(statearr_2971_3006[(1)] = (19));

} else {
var statearr_2972_3007 = state_2937__$1;
(statearr_2972_3007[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2938 === (10))){
var inst_2882 = (state_2937[(24)]);
var inst_2872 = (state_2937[(13)]);
var inst_2874 = (state_2937[(16)]);
var inst_2880 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_2872,inst_2874);
var inst_2881 = cljs.core.__destructure_map(inst_2880);
var inst_2882__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_2881,cljs.core.cst$kw$label);
var inst_2883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_2881,cljs.core.cst$kw$device_DASH_id);
var inst_2884 = goog.dom.createElement("option");
var inst_2885 = cljs.core.seq(inst_2882__$1);
var state_2937__$1 = (function (){var statearr_2973 = state_2937;
(statearr_2973[(24)] = inst_2882__$1);

(statearr_2973[(19)] = inst_2883);

(statearr_2973[(20)] = inst_2884);

return statearr_2973;
})();
if(inst_2885){
var statearr_2974_3008 = state_2937__$1;
(statearr_2974_3008[(1)] = (13));

} else {
var statearr_2975_3009 = state_2937__$1;
(statearr_2975_3009[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2938 === (18))){
var inst_2925 = (state_2937[(2)]);
var state_2937__$1 = state_2937;
var statearr_2976_3010 = state_2937__$1;
(statearr_2976_3010[(2)] = inst_2925);

(statearr_2976_3010[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2938 === (8))){
var inst_2873 = (state_2937[(15)]);
var inst_2874 = (state_2937[(16)]);
var inst_2876 = (inst_2874 < inst_2873);
var inst_2877 = inst_2876;
var state_2937__$1 = state_2937;
if(cljs.core.truth_(inst_2877)){
var statearr_2977_3011 = state_2937__$1;
(statearr_2977_3011[(1)] = (10));

} else {
var statearr_2978_3012 = state_2937__$1;
(statearr_2978_3012[(1)] = (11));

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
var statearr_2979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2979[(0)] = cljs$user$state_machine__2262__auto__);

(statearr_2979[(1)] = (1));

return statearr_2979;
});
var cljs$user$state_machine__2262__auto____1 = (function (state_2937){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_2937);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e2980){var ex__2265__auto__ = e2980;
var statearr_2981_3013 = state_2937;
(statearr_2981_3013[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_2937[(4)]))){
var statearr_2982_3014 = state_2937;
(statearr_2982_3014[(1)] = cljs.core.first((state_2937[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__3015 = state_2937;
state_2937 = G__3015;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
cljs$user$state_machine__2262__auto__ = function(state_2937){
switch(arguments.length){
case 0:
return cljs$user$state_machine__2262__auto____0.call(this);
case 1:
return cljs$user$state_machine__2262__auto____1.call(this,state_2937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$user$state_machine__2262__auto____0;
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$user$state_machine__2262__auto____1;
return cljs$user$state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_2983 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_2983[(6)] = c__2284__auto___2984);

return statearr_2983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));


return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$button_SLASH_start,goog.dom.getElement(start),cljs.core.cst$kw$button_SLASH_stop,goog.dom.getElement(stop),cljs.core.cst$kw$select_SLASH_inputs,inputs_select], null);
}));
integrant.core.halt_key_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ui_SLASH_controls,(function (_,controls){
var seq__3016 = cljs.core.seq(controls);
var chunk__3017 = null;
var count__3018 = (0);
var i__3019 = (0);
while(true){
if((i__3019 < count__3018)){
var vec__3026 = chunk__3017.cljs$core$IIndexed$_nth$arity$2(null,i__3019);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3026,(0),null);
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3026,(1),null);
goog.events.removeAll(elem);


var G__3032 = seq__3016;
var G__3033 = chunk__3017;
var G__3034 = count__3018;
var G__3035 = (i__3019 + (1));
seq__3016 = G__3032;
chunk__3017 = G__3033;
count__3018 = G__3034;
i__3019 = G__3035;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__3016);
if(temp__5753__auto__){
var seq__3016__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__3016__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__3016__$1);
var G__3036 = cljs.core.chunk_rest(seq__3016__$1);
var G__3037 = c__4679__auto__;
var G__3038 = cljs.core.count(c__4679__auto__);
var G__3039 = (0);
seq__3016 = G__3036;
chunk__3017 = G__3037;
count__3018 = G__3038;
i__3019 = G__3039;
continue;
} else {
var vec__3029 = cljs.core.first(seq__3016__$1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3029,(0),null);
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3029,(1),null);
goog.events.removeAll(elem);


var G__3040 = cljs.core.next(seq__3016__$1);
var G__3041 = null;
var G__3042 = (0);
var G__3043 = (0);
seq__3016 = G__3040;
chunk__3017 = G__3041;
count__3018 = G__3042;
i__3019 = G__3043;
continue;
}
} else {
return null;
}
}
break;
}
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ui_SLASH_listeners,(function (_,p__3045){
var map__3046 = p__3045;
var map__3046__$1 = cljs.core.__destructure_map(map__3046);
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3046__$1,cljs.core.cst$kw$controls);
var listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3046__$1,cljs.core.cst$kw$listen);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3046__$1,cljs.core.cst$kw$state);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3046__$1,cljs.core.cst$kw$handler_SLASH_data);
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3046__$1,cljs.core.cst$kw$handler_SLASH_stop);
var map__3047 = controls;
var map__3047__$1 = cljs.core.__destructure_map(map__3047);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3047__$1,cljs.core.cst$kw$button_SLASH_start);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3047__$1,cljs.core.cst$kw$select_SLASH_inputs);
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
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_3063){
var state_val_3064 = (state_3063[(1)]);
if((state_val_3064 === (1))){
var state_3063__$1 = state_3063;
var statearr_3065_3079 = state_3063__$1;
(statearr_3065_3079[(2)] = null);

(statearr_3065_3079[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3064 === (2))){
var state_3063__$1 = state_3063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_3063__$1,(4),session);
} else {
if((state_val_3064 === (3))){
var inst_3061 = (state_3063[(2)]);
var state_3063__$1 = state_3063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_3063__$1,inst_3061);
} else {
if((state_val_3064 === (4))){
var inst_3050 = (state_3063[(7)]);
var inst_3050__$1 = (state_3063[(2)]);
var inst_3051 = cljs.core.not(inst_3050__$1);
var state_3063__$1 = (function (){var statearr_3066 = state_3063;
(statearr_3066[(7)] = inst_3050__$1);

return statearr_3066;
})();
if(inst_3051){
var statearr_3067_3080 = state_3063__$1;
(statearr_3067_3080[(1)] = (5));

} else {
var statearr_3068_3081 = state_3063__$1;
(statearr_3068_3081[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3064 === (5))){
var inst_3053 = cljs.user.enable_elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inputs,start], 0));
var inst_3054 = cljs.user.disable_elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stop_button], 0));
var state_3063__$1 = (function (){var statearr_3069 = state_3063;
(statearr_3069[(8)] = inst_3053);

return statearr_3069;
})();
var statearr_3070_3082 = state_3063__$1;
(statearr_3070_3082[(2)] = inst_3054);

(statearr_3070_3082[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3064 === (6))){
var inst_3050 = (state_3063[(7)]);
var inst_3056 = (data.cljs$core$IFn$_invoke$arity$1 ? data.cljs$core$IFn$_invoke$arity$1(inst_3050) : data.call(null,inst_3050));
var state_3063__$1 = (function (){var statearr_3071 = state_3063;
(statearr_3071[(9)] = inst_3056);

return statearr_3071;
})();
var statearr_3072_3083 = state_3063__$1;
(statearr_3072_3083[(2)] = null);

(statearr_3072_3083[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3064 === (7))){
var inst_3059 = (state_3063[(2)]);
var state_3063__$1 = state_3063;
var statearr_3073_3084 = state_3063__$1;
(statearr_3073_3084[(2)] = inst_3059);

(statearr_3073_3084[(1)] = (3));


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
var statearr_3074 = [null,null,null,null,null,null,null,null,null,null];
(statearr_3074[(0)] = cljs$user$state_machine__2262__auto__);

(statearr_3074[(1)] = (1));

return statearr_3074;
});
var cljs$user$state_machine__2262__auto____1 = (function (state_3063){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_3063);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e3075){var ex__2265__auto__ = e3075;
var statearr_3076_3085 = state_3063;
(statearr_3076_3085[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_3063[(4)]))){
var statearr_3077_3086 = state_3063;
(statearr_3077_3086[(1)] = cljs.core.first((state_3063[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__3087 = state_3063;
state_3063 = G__3087;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
cljs$user$state_machine__2262__auto__ = function(state_3063){
switch(arguments.length){
case 0:
return cljs$user$state_machine__2262__auto____0.call(this);
case 1:
return cljs$user$state_machine__2262__auto____1.call(this,state_3063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$user$state_machine__2262__auto____0;
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$user$state_machine__2262__auto____1;
return cljs$user$state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_3078 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_3078[(6)] = c__2284__auto__);

return statearr_3078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));

return c__2284__auto__;
}));

return goog.events.listen(inputs,goog.events.EventType.CHANGE,(function (p1__3044_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$input,p1__3044_SHARP_.target.value);
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
