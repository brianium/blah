// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.user');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('blah.core');
goog.require('blah.transforms');
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
var len__4864__auto___2854 = arguments.length;
var i__4865__auto___2855 = (0);
while(true){
if((i__4865__auto___2855 < len__4864__auto___2854)){
args__4870__auto__.push((arguments[i__4865__auto___2855]));

var G__2856 = (i__4865__auto___2855 + (1));
i__4865__auto___2855 = G__2856;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return cljs.user.disable_elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(cljs.user.disable_elements.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
var seq__2850 = cljs.core.seq(elems);
var chunk__2851 = null;
var count__2852 = (0);
var i__2853 = (0);
while(true){
if((i__2853 < count__2852)){
var elem = chunk__2851.cljs$core$IIndexed$_nth$arity$2(null,i__2853);
elem.setAttribute("disabled","disabled");


var G__2857 = seq__2850;
var G__2858 = chunk__2851;
var G__2859 = count__2852;
var G__2860 = (i__2853 + (1));
seq__2850 = G__2857;
chunk__2851 = G__2858;
count__2852 = G__2859;
i__2853 = G__2860;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__2850);
if(temp__5753__auto__){
var seq__2850__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2850__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__2850__$1);
var G__2861 = cljs.core.chunk_rest(seq__2850__$1);
var G__2862 = c__4679__auto__;
var G__2863 = cljs.core.count(c__4679__auto__);
var G__2864 = (0);
seq__2850 = G__2861;
chunk__2851 = G__2862;
count__2852 = G__2863;
i__2853 = G__2864;
continue;
} else {
var elem = cljs.core.first(seq__2850__$1);
elem.setAttribute("disabled","disabled");


var G__2865 = cljs.core.next(seq__2850__$1);
var G__2866 = null;
var G__2867 = (0);
var G__2868 = (0);
seq__2850 = G__2865;
chunk__2851 = G__2866;
count__2852 = G__2867;
i__2853 = G__2868;
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
(cljs.user.disable_elements.cljs$lang$applyTo = (function (seq2849){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2849));
}));

/**
 * Helper for enabling html elements
 */
cljs.user.enable_elements = (function cljs$user$enable_elements(var_args){
var args__4870__auto__ = [];
var len__4864__auto___2874 = arguments.length;
var i__4865__auto___2875 = (0);
while(true){
if((i__4865__auto___2875 < len__4864__auto___2874)){
args__4870__auto__.push((arguments[i__4865__auto___2875]));

var G__2876 = (i__4865__auto___2875 + (1));
i__4865__auto___2875 = G__2876;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return cljs.user.enable_elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(cljs.user.enable_elements.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
var seq__2870 = cljs.core.seq(elems);
var chunk__2871 = null;
var count__2872 = (0);
var i__2873 = (0);
while(true){
if((i__2873 < count__2872)){
var elem = chunk__2871.cljs$core$IIndexed$_nth$arity$2(null,i__2873);
elem.removeAttribute("disabled");


var G__2877 = seq__2870;
var G__2878 = chunk__2871;
var G__2879 = count__2872;
var G__2880 = (i__2873 + (1));
seq__2870 = G__2877;
chunk__2871 = G__2878;
count__2872 = G__2879;
i__2873 = G__2880;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__2870);
if(temp__5753__auto__){
var seq__2870__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2870__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__2870__$1);
var G__2881 = cljs.core.chunk_rest(seq__2870__$1);
var G__2882 = c__4679__auto__;
var G__2883 = cljs.core.count(c__4679__auto__);
var G__2884 = (0);
seq__2870 = G__2881;
chunk__2871 = G__2882;
count__2872 = G__2883;
i__2873 = G__2884;
continue;
} else {
var elem = cljs.core.first(seq__2870__$1);
elem.removeAttribute("disabled");


var G__2885 = cljs.core.next(seq__2870__$1);
var G__2886 = null;
var G__2887 = (0);
var G__2888 = (0);
seq__2870 = G__2885;
chunk__2871 = G__2886;
count__2872 = G__2887;
i__2873 = G__2888;
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
(cljs.user.enable_elements.cljs$lang$applyTo = (function (seq2869){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2869));
}));

/**
 * Creates a an audio buffer for storing recorded audio
 */
cljs.user.create_buffer = (function cljs$user$create_buffer(context,frames,byte_count){
var sample_rate = context.sampleRate;
var channels = cljs.core.count(cljs.core.first(frames));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),channels)){
throw (new Error("Frames required to make a buffer"));
} else {
return context.createBuffer(channels,(byte_count * cljs.core.count(frames)),sample_rate);
}
});
/**
 * Write sample frames to the given audio buffer
 */
cljs.user.record_frames = (function cljs$user$record_frames(buffer,frames){
var n__4741__auto___2889 = buffer.numberOfChannels;
var ch_2890 = (0);
while(true){
if((ch_2890 < n__4741__auto___2889)){
var now_buffering_2891 = buffer.getChannelData(ch_2890);
var n__4741__auto___2892__$1 = cljs.core.count(frames);
var i_2893 = (0);
while(true){
if((i_2893 < n__4741__auto___2892__$1)){
var frame_2894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frames,i_2893);
(now_buffering_2891[i_2893] = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_2894,ch_2890));

var G__2895 = (i_2893 + (1));
i_2893 = G__2895;
continue;
} else {
}
break;
}

var G__2896 = (ch_2890 + (1));
ch_2890 = G__2896;
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
/**
 * Plays the recorded sample frames back on the audio context used for recording.
 */
cljs.user.playback = (function cljs$user$playback(byte_content,context,frames){
return cljs.user.play_recording(cljs.user.record_frames(cljs.user.create_buffer(context,frames,byte_content),frames),context);
});
cljs.user.app_config = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$blah_SLASH_listen,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,integrant.core.ref(cljs.core.cst$kw$ui_SLASH_state),cljs.core.cst$kw$xform,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(blah.transforms.float32,blah.transforms.frames)], null),cljs.core.cst$kw$handler_SLASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,integrant.core.ref(cljs.core.cst$kw$handler_SLASH_state)], null),cljs.core.cst$kw$handler_SLASH_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$frames,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$handler_SLASH_stop,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,integrant.core.ref(cljs.core.cst$kw$handler_SLASH_state),cljs.core.cst$kw$stop_DASH_fn,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.user.playback,(4))], null),cljs.core.cst$kw$input_SLASH_ch,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ui_SLASH_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input,null], null),cljs.core.cst$kw$ui_SLASH_controls,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$input_SLASH_ch,integrant.core.ref(cljs.core.cst$kw$input_SLASH_ch),cljs.core.cst$kw$button_SLASH_start,"start",cljs.core.cst$kw$button_SLASH_stop,"stop",cljs.core.cst$kw$button_SLASH_request,"ask",cljs.core.cst$kw$select_SLASH_inputs,"inputs"], null),cljs.core.cst$kw$ui_SLASH_listeners,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$controls,integrant.core.ref(cljs.core.cst$kw$ui_SLASH_controls),cljs.core.cst$kw$handler_SLASH_data,integrant.core.ref(cljs.core.cst$kw$handler_SLASH_data),cljs.core.cst$kw$handler_SLASH_stop,integrant.core.ref(cljs.core.cst$kw$handler_SLASH_stop),cljs.core.cst$kw$input_SLASH_ch,integrant.core.ref(cljs.core.cst$kw$input_SLASH_ch),cljs.core.cst$kw$listen,integrant.core.ref(cljs.core.cst$kw$blah_SLASH_listen),cljs.core.cst$kw$state,integrant.core.ref(cljs.core.cst$kw$ui_SLASH_state)], null)], null);
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$blah_SLASH_listen,(function (_,p__2897){
var map__2898 = p__2897;
var map__2898__$1 = cljs.core.__destructure_map(map__2898);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2898__$1,cljs.core.cst$kw$state);
var xform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2898__$1,cljs.core.cst$kw$xform);
return (function (){
var map__2899 = cljs.core.deref(state);
var map__2899__$1 = cljs.core.__destructure_map(map__2899);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2899__$1,cljs.core.cst$kw$input);
return blah.core.listen.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$device_DASH_id,input], null),xform);
});
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$handler_SLASH_data,(function (_,p__2901){
var map__2902 = p__2901;
var map__2902__$1 = cljs.core.__destructure_map(map__2902);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2902__$1,cljs.core.cst$kw$state);
return (function (frames){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (p1__2900_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__2900_SHARP_,cljs.core.cst$kw$frames,cljs.core.into,frames);
}));
});
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$handler_SLASH_state,(function (_,initial){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$handler_SLASH_stop,(function (_,p__2903){
var map__2904 = p__2903;
var map__2904__$1 = cljs.core.__destructure_map(map__2904);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2904__$1,cljs.core.cst$kw$state);
var stop_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2904__$1,cljs.core.cst$kw$stop_DASH_fn);
return (function (context,session){
cljs.core.async.close_BANG_(session);

var map__2905 = cljs.core.deref(state);
var map__2905__$1 = cljs.core.__destructure_map(map__2905);
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2905__$1,cljs.core.cst$kw$frames);
(stop_fn.cljs$core$IFn$_invoke$arity$2 ? stop_fn.cljs$core$IFn$_invoke$arity$2(context,frames) : stop_fn.call(null,context,frames));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$frames,cljs.core.PersistentVector.EMPTY);
});
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$input_SLASH_ch,(function (_,___$1){
return blah.core.input_ch();
}));
integrant.core.halt_key_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$input_SLASH_ch,(function (_,input_ch){
return cljs.core.async.close_BANG_(input_ch);
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ui_SLASH_state,(function (_,initial){
var _STAR_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
cljs.core.add_watch(_STAR_state,cljs.core.cst$kw$cljs$user_SLASH_log,(function (___$1,___$2,___$3,next){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Ui state changed"], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([next], 0));
}));

return _STAR_state;
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ui_SLASH_controls,(function (_,p__2906){
var map__2907 = p__2906;
var map__2907__$1 = cljs.core.__destructure_map(map__2907);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2907__$1,cljs.core.cst$kw$button_SLASH_start);
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2907__$1,cljs.core.cst$kw$button_SLASH_stop);
var request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2907__$1,cljs.core.cst$kw$button_SLASH_request);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2907__$1,cljs.core.cst$kw$select_SLASH_inputs);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2907__$1,cljs.core.cst$kw$input_SLASH_ch);
var inputs_select = goog.dom.getElement(inputs);
var c__2284__auto___3031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_2984){
var state_val_2985 = (state_2984[(1)]);
if((state_val_2985 === (7))){
var inst_2980 = (state_2984[(2)]);
var state_2984__$1 = state_2984;
var statearr_2986_3032 = state_2984__$1;
(statearr_2986_3032[(2)] = inst_2980);

(statearr_2986_3032[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2985 === (20))){
var inst_2955 = (state_2984[(7)]);
var inst_2943 = (state_2984[(8)]);
var inst_2953 = cljs.core.first(inst_2943);
var inst_2954 = cljs.core.__destructure_map(inst_2953);
var inst_2955__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_2954,cljs.core.cst$kw$label);
var inst_2956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_2954,cljs.core.cst$kw$device_DASH_id);
var inst_2957 = goog.dom.createElement("option");
var inst_2958 = cljs.core.seq(inst_2955__$1);
var state_2984__$1 = (function (){var statearr_2987 = state_2984;
(statearr_2987[(9)] = inst_2957);

(statearr_2987[(7)] = inst_2955__$1);

(statearr_2987[(10)] = inst_2956);

return statearr_2987;
})();
if(inst_2958){
var statearr_2988_3033 = state_2984__$1;
(statearr_2988_3033[(1)] = (22));

} else {
var statearr_2989_3034 = state_2984__$1;
(statearr_2989_3034[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2985 === (1))){
var state_2984__$1 = state_2984;
var statearr_2990_3035 = state_2984__$1;
(statearr_2990_3035[(2)] = null);

(statearr_2990_3035[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2985 === (24))){
var inst_2957 = (state_2984[(9)]);
var inst_2943 = (state_2984[(8)]);
var inst_2956 = (state_2984[(10)]);
var inst_2962 = (state_2984[(2)]);
var inst_2963 = goog.dom.append(inst_2957,inst_2962);
var inst_2964 = inst_2957.setAttribute("value",inst_2956);
var inst_2965 = goog.dom.append(inputs_select,inst_2957);
var inst_2966 = cljs.core.next(inst_2943);
var inst_2918 = inst_2966;
var inst_2919 = null;
var inst_2920 = (0);
var inst_2921 = (0);
var state_2984__$1 = (function (){var statearr_2994 = state_2984;
(statearr_2994[(11)] = inst_2918);

(statearr_2994[(12)] = inst_2920);

(statearr_2994[(13)] = inst_2964);

(statearr_2994[(14)] = inst_2965);

(statearr_2994[(15)] = inst_2919);

(statearr_2994[(16)] = inst_2921);

(statearr_2994[(17)] = inst_2963);

return statearr_2994;
})();
var statearr_2995_3036 = state_2984__$1;
(statearr_2995_3036[(2)] = null);

(statearr_2995_3036[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2985 === (4))){
var inst_2910 = (state_2984[(18)]);
var inst_2910__$1 = (state_2984[(2)]);
var state_2984__$1 = (function (){var statearr_2996 = state_2984;
(statearr_2996[(18)] = inst_2910__$1);

return statearr_2996;
})();
if(cljs.core.truth_(inst_2910__$1)){
var statearr_2997_3037 = state_2984__$1;
(statearr_2997_3037[(1)] = (5));

} else {
var statearr_2998_3038 = state_2984__$1;
(statearr_2998_3038[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2985 === (15))){
var inst_2918 = (state_2984[(11)]);
var inst_2920 = (state_2984[(12)]);
var inst_2931 = (state_2984[(19)]);
var inst_2919 = (state_2984[(15)]);
var inst_2921 = (state_2984[(16)]);
var inst_2930 = (state_2984[(20)]);
var inst_2936 = (state_2984[(2)]);
var inst_2937 = goog.dom.append(inst_2931,inst_2936);
var inst_2938 = inst_2931.setAttribute("value",inst_2930);
var inst_2939 = goog.dom.append(inputs_select,inst_2931);
var inst_2940 = (inst_2921 + (1));
var tmp2991 = inst_2918;
var tmp2992 = inst_2920;
var tmp2993 = inst_2919;
var inst_2918__$1 = tmp2991;
var inst_2919__$1 = tmp2993;
var inst_2920__$1 = tmp2992;
var inst_2921__$1 = inst_2940;
var state_2984__$1 = (function (){var statearr_2999 = state_2984;
(statearr_2999[(11)] = inst_2918__$1);

(statearr_2999[(12)] = inst_2920__$1);

(statearr_2999[(21)] = inst_2939);

(statearr_2999[(22)] = inst_2938);

(statearr_2999[(15)] = inst_2919__$1);

(statearr_2999[(23)] = inst_2937);

(statearr_2999[(16)] = inst_2921__$1);

return statearr_2999;
})();
var statearr_3000_3039 = state_2984__$1;
(statearr_3000_3039[(2)] = null);

(statearr_3000_3039[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2985 === (21))){
var inst_2969 = (state_2984[(2)]);
var state_2984__$1 = state_2984;
var statearr_3001_3040 = state_2984__$1;
(statearr_3001_3040[(2)] = inst_2969);

(statearr_3001_3040[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2985 === (13))){
var inst_2929 = (state_2984[(24)]);
var state_2984__$1 = state_2984;
var statearr_3002_3041 = state_2984__$1;
(statearr_3002_3041[(2)] = inst_2929);

(statearr_3002_3041[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2985 === (22))){
var inst_2955 = (state_2984[(7)]);
var state_2984__$1 = state_2984;
var statearr_3003_3042 = state_2984__$1;
(statearr_3003_3042[(2)] = inst_2955);

(statearr_3003_3042[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2985 === (6))){
var state_2984__$1 = state_2984;
var statearr_3004_3043 = state_2984__$1;
(statearr_3004_3043[(2)] = null);

(statearr_3004_3043[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2985 === (17))){
var state_2984__$1 = state_2984;
var statearr_3005_3044 = state_2984__$1;
(statearr_3005_3044[(2)] = null);

(statearr_3005_3044[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2985 === (3))){
var inst_2982 = (state_2984[(2)]);
var state_2984__$1 = state_2984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2984__$1,inst_2982);
} else {
if((state_val_2985 === (12))){
var inst_2974 = (state_2984[(2)]);
var state_2984__$1 = state_2984;
var statearr_3006_3045 = state_2984__$1;
(statearr_3006_3045[(2)] = inst_2974);

(statearr_3006_3045[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2985 === (2))){
var state_2984__$1 = state_2984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2984__$1,(4),ch);
} else {
if((state_val_2985 === (23))){
var state_2984__$1 = state_2984;
var statearr_3007_3046 = state_2984__$1;
(statearr_3007_3046[(2)] = "Default");

(statearr_3007_3046[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2985 === (19))){
var inst_2943 = (state_2984[(8)]);
var inst_2947 = cljs.core.chunk_first(inst_2943);
var inst_2948 = cljs.core.chunk_rest(inst_2943);
var inst_2949 = cljs.core.count(inst_2947);
var inst_2918 = inst_2948;
var inst_2919 = inst_2947;
var inst_2920 = inst_2949;
var inst_2921 = (0);
var state_2984__$1 = (function (){var statearr_3008 = state_2984;
(statearr_3008[(11)] = inst_2918);

(statearr_3008[(12)] = inst_2920);

(statearr_3008[(15)] = inst_2919);

(statearr_3008[(16)] = inst_2921);

return statearr_3008;
})();
var statearr_3009_3047 = state_2984__$1;
(statearr_3009_3047[(2)] = null);

(statearr_3009_3047[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2985 === (11))){
var inst_2918 = (state_2984[(11)]);
var inst_2943 = (state_2984[(8)]);
var inst_2943__$1 = cljs.core.seq(inst_2918);
var state_2984__$1 = (function (){var statearr_3010 = state_2984;
(statearr_3010[(8)] = inst_2943__$1);

return statearr_3010;
})();
if(inst_2943__$1){
var statearr_3011_3048 = state_2984__$1;
(statearr_3011_3048[(1)] = (16));

} else {
var statearr_3012_3049 = state_2984__$1;
(statearr_3012_3049[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2985 === (9))){
var inst_2976 = (state_2984[(2)]);
var state_2984__$1 = (function (){var statearr_3013 = state_2984;
(statearr_3013[(25)] = inst_2976);

return statearr_3013;
})();
var statearr_3014_3050 = state_2984__$1;
(statearr_3014_3050[(2)] = null);

(statearr_3014_3050[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2985 === (5))){
var inst_2910 = (state_2984[(18)]);
var inst_2912 = goog.dom.removeChildren(inputs_select);
var inst_2917 = cljs.core.seq(inst_2910);
var inst_2918 = inst_2917;
var inst_2919 = null;
var inst_2920 = (0);
var inst_2921 = (0);
var state_2984__$1 = (function (){var statearr_3015 = state_2984;
(statearr_3015[(11)] = inst_2918);

(statearr_3015[(12)] = inst_2920);

(statearr_3015[(15)] = inst_2919);

(statearr_3015[(26)] = inst_2912);

(statearr_3015[(16)] = inst_2921);

return statearr_3015;
})();
var statearr_3016_3051 = state_2984__$1;
(statearr_3016_3051[(2)] = null);

(statearr_3016_3051[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2985 === (14))){
var state_2984__$1 = state_2984;
var statearr_3017_3052 = state_2984__$1;
(statearr_3017_3052[(2)] = "Default");

(statearr_3017_3052[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2985 === (16))){
var inst_2943 = (state_2984[(8)]);
var inst_2945 = cljs.core.chunked_seq_QMARK_(inst_2943);
var state_2984__$1 = state_2984;
if(inst_2945){
var statearr_3018_3053 = state_2984__$1;
(statearr_3018_3053[(1)] = (19));

} else {
var statearr_3019_3054 = state_2984__$1;
(statearr_3019_3054[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2985 === (10))){
var inst_2929 = (state_2984[(24)]);
var inst_2919 = (state_2984[(15)]);
var inst_2921 = (state_2984[(16)]);
var inst_2927 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_2919,inst_2921);
var inst_2928 = cljs.core.__destructure_map(inst_2927);
var inst_2929__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_2928,cljs.core.cst$kw$label);
var inst_2930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_2928,cljs.core.cst$kw$device_DASH_id);
var inst_2931 = goog.dom.createElement("option");
var inst_2932 = cljs.core.seq(inst_2929__$1);
var state_2984__$1 = (function (){var statearr_3020 = state_2984;
(statearr_3020[(19)] = inst_2931);

(statearr_3020[(24)] = inst_2929__$1);

(statearr_3020[(20)] = inst_2930);

return statearr_3020;
})();
if(inst_2932){
var statearr_3021_3055 = state_2984__$1;
(statearr_3021_3055[(1)] = (13));

} else {
var statearr_3022_3056 = state_2984__$1;
(statearr_3022_3056[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2985 === (18))){
var inst_2972 = (state_2984[(2)]);
var state_2984__$1 = state_2984;
var statearr_3023_3057 = state_2984__$1;
(statearr_3023_3057[(2)] = inst_2972);

(statearr_3023_3057[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2985 === (8))){
var inst_2920 = (state_2984[(12)]);
var inst_2921 = (state_2984[(16)]);
var inst_2923 = (inst_2921 < inst_2920);
var inst_2924 = inst_2923;
var state_2984__$1 = state_2984;
if(cljs.core.truth_(inst_2924)){
var statearr_3024_3058 = state_2984__$1;
(statearr_3024_3058[(1)] = (10));

} else {
var statearr_3025_3059 = state_2984__$1;
(statearr_3025_3059[(1)] = (11));

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
var statearr_3026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3026[(0)] = cljs$user$state_machine__2262__auto__);

(statearr_3026[(1)] = (1));

return statearr_3026;
});
var cljs$user$state_machine__2262__auto____1 = (function (state_2984){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_2984);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e3027){var ex__2265__auto__ = e3027;
var statearr_3028_3060 = state_2984;
(statearr_3028_3060[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_2984[(4)]))){
var statearr_3029_3061 = state_2984;
(statearr_3029_3061[(1)] = cljs.core.first((state_2984[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__3062 = state_2984;
state_2984 = G__3062;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
cljs$user$state_machine__2262__auto__ = function(state_2984){
switch(arguments.length){
case 0:
return cljs$user$state_machine__2262__auto____0.call(this);
case 1:
return cljs$user$state_machine__2262__auto____1.call(this,state_2984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$user$state_machine__2262__auto____0;
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$user$state_machine__2262__auto____1;
return cljs$user$state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_3030 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_3030[(6)] = c__2284__auto___3031);

return statearr_3030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));


return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$button_SLASH_start,goog.dom.getElement(start),cljs.core.cst$kw$button_SLASH_stop,goog.dom.getElement(stop),cljs.core.cst$kw$button_SLASH_request,goog.dom.getElement(request),cljs.core.cst$kw$select_SLASH_inputs,inputs_select], null);
}));
integrant.core.halt_key_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ui_SLASH_controls,(function (_,controls){
var seq__3063 = cljs.core.seq(controls);
var chunk__3064 = null;
var count__3065 = (0);
var i__3066 = (0);
while(true){
if((i__3066 < count__3065)){
var vec__3073 = chunk__3064.cljs$core$IIndexed$_nth$arity$2(null,i__3066);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3073,(0),null);
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3073,(1),null);
goog.events.removeAll(elem);


var G__3079 = seq__3063;
var G__3080 = chunk__3064;
var G__3081 = count__3065;
var G__3082 = (i__3066 + (1));
seq__3063 = G__3079;
chunk__3064 = G__3080;
count__3065 = G__3081;
i__3066 = G__3082;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__3063);
if(temp__5753__auto__){
var seq__3063__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__3063__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__3063__$1);
var G__3083 = cljs.core.chunk_rest(seq__3063__$1);
var G__3084 = c__4679__auto__;
var G__3085 = cljs.core.count(c__4679__auto__);
var G__3086 = (0);
seq__3063 = G__3083;
chunk__3064 = G__3084;
count__3065 = G__3085;
i__3066 = G__3086;
continue;
} else {
var vec__3076 = cljs.core.first(seq__3063__$1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3076,(0),null);
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3076,(1),null);
goog.events.removeAll(elem);


var G__3087 = cljs.core.next(seq__3063__$1);
var G__3088 = null;
var G__3089 = (0);
var G__3090 = (0);
seq__3063 = G__3087;
chunk__3064 = G__3088;
count__3065 = G__3089;
i__3066 = G__3090;
continue;
}
} else {
return null;
}
}
break;
}
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ui_SLASH_listeners,(function (_,p__3093){
var map__3094 = p__3093;
var map__3094__$1 = cljs.core.__destructure_map(map__3094);
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3094__$1,cljs.core.cst$kw$controls);
var listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3094__$1,cljs.core.cst$kw$listen);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3094__$1,cljs.core.cst$kw$state);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3094__$1,cljs.core.cst$kw$handler_SLASH_data);
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3094__$1,cljs.core.cst$kw$handler_SLASH_stop);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3094__$1,cljs.core.cst$kw$input_SLASH_ch);
var map__3095 = controls;
var map__3095__$1 = cljs.core.__destructure_map(map__3095);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3095__$1,cljs.core.cst$kw$button_SLASH_start);
var request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3095__$1,cljs.core.cst$kw$button_SLASH_request);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3095__$1,cljs.core.cst$kw$select_SLASH_inputs);
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
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_3111){
var state_val_3112 = (state_3111[(1)]);
if((state_val_3112 === (1))){
var state_3111__$1 = state_3111;
var statearr_3113_3149 = state_3111__$1;
(statearr_3113_3149[(2)] = null);

(statearr_3113_3149[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3112 === (2))){
var state_3111__$1 = state_3111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_3111__$1,(4),session);
} else {
if((state_val_3112 === (3))){
var inst_3109 = (state_3111[(2)]);
var state_3111__$1 = state_3111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_3111__$1,inst_3109);
} else {
if((state_val_3112 === (4))){
var inst_3098 = (state_3111[(7)]);
var inst_3098__$1 = (state_3111[(2)]);
var inst_3099 = cljs.core.not(inst_3098__$1);
var state_3111__$1 = (function (){var statearr_3114 = state_3111;
(statearr_3114[(7)] = inst_3098__$1);

return statearr_3114;
})();
if(inst_3099){
var statearr_3115_3150 = state_3111__$1;
(statearr_3115_3150[(1)] = (5));

} else {
var statearr_3116_3151 = state_3111__$1;
(statearr_3116_3151[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3112 === (5))){
var inst_3101 = cljs.user.enable_elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inputs,start], 0));
var inst_3102 = cljs.user.disable_elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stop_button], 0));
var state_3111__$1 = (function (){var statearr_3117 = state_3111;
(statearr_3117[(8)] = inst_3101);

return statearr_3117;
})();
var statearr_3118_3152 = state_3111__$1;
(statearr_3118_3152[(2)] = inst_3102);

(statearr_3118_3152[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3112 === (6))){
var inst_3098 = (state_3111[(7)]);
var inst_3104 = (data.cljs$core$IFn$_invoke$arity$1 ? data.cljs$core$IFn$_invoke$arity$1(inst_3098) : data.call(null,inst_3098));
var state_3111__$1 = (function (){var statearr_3119 = state_3111;
(statearr_3119[(9)] = inst_3104);

return statearr_3119;
})();
var statearr_3120_3153 = state_3111__$1;
(statearr_3120_3153[(2)] = null);

(statearr_3120_3153[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3112 === (7))){
var inst_3107 = (state_3111[(2)]);
var state_3111__$1 = state_3111;
var statearr_3121_3154 = state_3111__$1;
(statearr_3121_3154[(2)] = inst_3107);

(statearr_3121_3154[(1)] = (3));


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
var statearr_3122 = [null,null,null,null,null,null,null,null,null,null];
(statearr_3122[(0)] = cljs$user$state_machine__2262__auto__);

(statearr_3122[(1)] = (1));

return statearr_3122;
});
var cljs$user$state_machine__2262__auto____1 = (function (state_3111){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_3111);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e3123){var ex__2265__auto__ = e3123;
var statearr_3124_3155 = state_3111;
(statearr_3124_3155[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_3111[(4)]))){
var statearr_3125_3156 = state_3111;
(statearr_3125_3156[(1)] = cljs.core.first((state_3111[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__3157 = state_3111;
state_3111 = G__3157;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
cljs$user$state_machine__2262__auto__ = function(state_3111){
switch(arguments.length){
case 0:
return cljs$user$state_machine__2262__auto____0.call(this);
case 1:
return cljs$user$state_machine__2262__auto____1.call(this,state_3111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$user$state_machine__2262__auto____0;
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$user$state_machine__2262__auto____1;
return cljs$user$state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_3126 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_3126[(6)] = c__2284__auto__);

return statearr_3126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));

return c__2284__auto__;
}));

goog.events.listen(inputs,goog.events.EventType.CHANGE,(function (p1__3091_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$input,p1__3091_SHARP_.target.value);
}));

return goog.events.listen(request,goog.events.EventType.CLICK,(function (){
var c__2284__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_3138){
var state_val_3139 = (state_3138[(1)]);
if((state_val_3139 === (1))){
var inst_3127 = blah.core.request_permission();
var state_3138__$1 = state_3138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_3138__$1,(2),inst_3127);
} else {
if((state_val_3139 === (2))){
var inst_3129 = (state_3138[(2)]);
var state_3138__$1 = state_3138;
if(cljs.core.truth_(inst_3129)){
var statearr_3140_3158 = state_3138__$1;
(statearr_3140_3158[(1)] = (3));

} else {
var statearr_3141_3159 = state_3138__$1;
(statearr_3141_3159[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3139 === (3))){
var inst_3131 = (function (){return (function (p1__3092_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,p1__3092_SHARP_);
});
})();
var inst_3132 = blah.core.query_inputs(inst_3131);
var state_3138__$1 = state_3138;
var statearr_3142_3160 = state_3138__$1;
(statearr_3142_3160[(2)] = inst_3132);

(statearr_3142_3160[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3139 === (4))){
var inst_3134 = alert("permission denied");
var state_3138__$1 = state_3138;
var statearr_3143_3161 = state_3138__$1;
(statearr_3143_3161[(2)] = inst_3134);

(statearr_3143_3161[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3139 === (5))){
var inst_3136 = (state_3138[(2)]);
var state_3138__$1 = state_3138;
return cljs.core.async.impl.ioc_helpers.return_chan(state_3138__$1,inst_3136);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs$user$state_machine__2262__auto__ = null;
var cljs$user$state_machine__2262__auto____0 = (function (){
var statearr_3144 = [null,null,null,null,null,null,null];
(statearr_3144[(0)] = cljs$user$state_machine__2262__auto__);

(statearr_3144[(1)] = (1));

return statearr_3144;
});
var cljs$user$state_machine__2262__auto____1 = (function (state_3138){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_3138);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e3145){var ex__2265__auto__ = e3145;
var statearr_3146_3162 = state_3138;
(statearr_3146_3162[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_3138[(4)]))){
var statearr_3147_3163 = state_3138;
(statearr_3147_3163[(1)] = cljs.core.first((state_3138[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__3164 = state_3138;
state_3138 = G__3164;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
cljs$user$state_machine__2262__auto__ = function(state_3138){
switch(arguments.length){
case 0:
return cljs$user$state_machine__2262__auto____0.call(this);
case 1:
return cljs$user$state_machine__2262__auto____1.call(this,state_3138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$user$state_machine__2262__auto____0;
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$user$state_machine__2262__auto____1;
return cljs$user$state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_3148 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_3148[(6)] = c__2284__auto__);

return statearr_3148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));

return c__2284__auto__;
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
integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$1(system);

return cljs.core.cst$kw$stopped;
});
cljs.user.restart = (function cljs$user$restart(system){
cljs.user.stop(system);

integrant.core.resume.cljs$core$IFn$_invoke$arity$2(cljs.user.app_config,system);

return cljs.core.cst$kw$restarted;
});
cljs.user.system = cljs.user.start();
