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
var len__4864__auto___2846 = arguments.length;
var i__4865__auto___2847 = (0);
while(true){
if((i__4865__auto___2847 < len__4864__auto___2846)){
args__4870__auto__.push((arguments[i__4865__auto___2847]));

var G__2848 = (i__4865__auto___2847 + (1));
i__4865__auto___2847 = G__2848;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return cljs.user.disable_elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(cljs.user.disable_elements.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
var seq__2842 = cljs.core.seq(elems);
var chunk__2843 = null;
var count__2844 = (0);
var i__2845 = (0);
while(true){
if((i__2845 < count__2844)){
var elem = chunk__2843.cljs$core$IIndexed$_nth$arity$2(null,i__2845);
elem.setAttribute("disabled","disabled");


var G__2849 = seq__2842;
var G__2850 = chunk__2843;
var G__2851 = count__2844;
var G__2852 = (i__2845 + (1));
seq__2842 = G__2849;
chunk__2843 = G__2850;
count__2844 = G__2851;
i__2845 = G__2852;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__2842);
if(temp__5753__auto__){
var seq__2842__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2842__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__2842__$1);
var G__2853 = cljs.core.chunk_rest(seq__2842__$1);
var G__2854 = c__4679__auto__;
var G__2855 = cljs.core.count(c__4679__auto__);
var G__2856 = (0);
seq__2842 = G__2853;
chunk__2843 = G__2854;
count__2844 = G__2855;
i__2845 = G__2856;
continue;
} else {
var elem = cljs.core.first(seq__2842__$1);
elem.setAttribute("disabled","disabled");


var G__2857 = cljs.core.next(seq__2842__$1);
var G__2858 = null;
var G__2859 = (0);
var G__2860 = (0);
seq__2842 = G__2857;
chunk__2843 = G__2858;
count__2844 = G__2859;
i__2845 = G__2860;
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
(cljs.user.disable_elements.cljs$lang$applyTo = (function (seq2841){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2841));
}));

/**
 * Helper for enabling html elements
 */
cljs.user.enable_elements = (function cljs$user$enable_elements(var_args){
var args__4870__auto__ = [];
var len__4864__auto___2866 = arguments.length;
var i__4865__auto___2867 = (0);
while(true){
if((i__4865__auto___2867 < len__4864__auto___2866)){
args__4870__auto__.push((arguments[i__4865__auto___2867]));

var G__2868 = (i__4865__auto___2867 + (1));
i__4865__auto___2867 = G__2868;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return cljs.user.enable_elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(cljs.user.enable_elements.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
var seq__2862 = cljs.core.seq(elems);
var chunk__2863 = null;
var count__2864 = (0);
var i__2865 = (0);
while(true){
if((i__2865 < count__2864)){
var elem = chunk__2863.cljs$core$IIndexed$_nth$arity$2(null,i__2865);
elem.removeAttribute("disabled");


var G__2869 = seq__2862;
var G__2870 = chunk__2863;
var G__2871 = count__2864;
var G__2872 = (i__2865 + (1));
seq__2862 = G__2869;
chunk__2863 = G__2870;
count__2864 = G__2871;
i__2865 = G__2872;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__2862);
if(temp__5753__auto__){
var seq__2862__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2862__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__2862__$1);
var G__2873 = cljs.core.chunk_rest(seq__2862__$1);
var G__2874 = c__4679__auto__;
var G__2875 = cljs.core.count(c__4679__auto__);
var G__2876 = (0);
seq__2862 = G__2873;
chunk__2863 = G__2874;
count__2864 = G__2875;
i__2865 = G__2876;
continue;
} else {
var elem = cljs.core.first(seq__2862__$1);
elem.removeAttribute("disabled");


var G__2877 = cljs.core.next(seq__2862__$1);
var G__2878 = null;
var G__2879 = (0);
var G__2880 = (0);
seq__2862 = G__2877;
chunk__2863 = G__2878;
count__2864 = G__2879;
i__2865 = G__2880;
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
(cljs.user.enable_elements.cljs$lang$applyTo = (function (seq2861){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2861));
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
var n__4741__auto___2881 = buffer.numberOfChannels;
var ch_2882 = (0);
while(true){
if((ch_2882 < n__4741__auto___2881)){
var now_buffering_2883 = buffer.getChannelData(ch_2882);
var n__4741__auto___2884__$1 = cljs.core.count(frames);
var i_2885 = (0);
while(true){
if((i_2885 < n__4741__auto___2884__$1)){
var frame_2886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frames,i_2885);
(now_buffering_2883[i_2885] = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_2886,ch_2882));

var G__2887 = (i_2885 + (1));
i_2885 = G__2887;
continue;
} else {
}
break;
}

var G__2888 = (ch_2882 + (1));
ch_2882 = G__2888;
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
cljs.user.app_config = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$blah_SLASH_listen,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,integrant.core.ref(cljs.core.cst$kw$ui_SLASH_state)], null),cljs.core.cst$kw$handler_SLASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,integrant.core.ref(cljs.core.cst$kw$handler_SLASH_state)], null),cljs.core.cst$kw$handler_SLASH_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$frames,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$handler_SLASH_stop,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,integrant.core.ref(cljs.core.cst$kw$handler_SLASH_state)], null),cljs.core.cst$kw$input_SLASH_ch,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ui_SLASH_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input,null], null),cljs.core.cst$kw$ui_SLASH_controls,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$input_SLASH_ch,integrant.core.ref(cljs.core.cst$kw$input_SLASH_ch),cljs.core.cst$kw$button_SLASH_start,"start",cljs.core.cst$kw$button_SLASH_stop,"stop",cljs.core.cst$kw$button_SLASH_request,"ask",cljs.core.cst$kw$select_SLASH_inputs,"inputs"], null),cljs.core.cst$kw$ui_SLASH_listeners,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$controls,integrant.core.ref(cljs.core.cst$kw$ui_SLASH_controls),cljs.core.cst$kw$handler_SLASH_data,integrant.core.ref(cljs.core.cst$kw$handler_SLASH_data),cljs.core.cst$kw$handler_SLASH_stop,integrant.core.ref(cljs.core.cst$kw$handler_SLASH_stop),cljs.core.cst$kw$input_SLASH_ch,integrant.core.ref(cljs.core.cst$kw$input_SLASH_ch),cljs.core.cst$kw$listen,integrant.core.ref(cljs.core.cst$kw$blah_SLASH_listen),cljs.core.cst$kw$state,integrant.core.ref(cljs.core.cst$kw$ui_SLASH_state)], null)], null);
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$blah_SLASH_listen,(function (_,p__2889){
var map__2890 = p__2889;
var map__2890__$1 = cljs.core.__destructure_map(map__2890);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2890__$1,cljs.core.cst$kw$state);
return (function (){
var map__2891 = cljs.core.deref(state);
var map__2891__$1 = cljs.core.__destructure_map(map__2891);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2891__$1,cljs.core.cst$kw$input);
return blah.core.listen.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$device_DASH_id,input], null));
});
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$handler_SLASH_data,(function (_,p__2893){
var map__2894 = p__2893;
var map__2894__$1 = cljs.core.__destructure_map(map__2894);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2894__$1,cljs.core.cst$kw$state);
return (function (frames){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (p1__2892_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__2892_SHARP_,cljs.core.cst$kw$frames,cljs.core.into,frames);
}));
});
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$handler_SLASH_state,(function (_,initial){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$handler_SLASH_stop,(function (_,p__2895){
var map__2896 = p__2895;
var map__2896__$1 = cljs.core.__destructure_map(map__2896);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2896__$1,cljs.core.cst$kw$state);
return (function (context,session){
cljs.core.async.close_BANG_(session);

var map__2897 = cljs.core.deref(state);
var map__2897__$1 = cljs.core.__destructure_map(map__2897);
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2897__$1,cljs.core.cst$kw$frames);
cljs.user.play_recording(cljs.user.record_frames(cljs.user.create_buffer(context,frames),frames),context);

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
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ui_SLASH_controls,(function (_,p__2898){
var map__2899 = p__2898;
var map__2899__$1 = cljs.core.__destructure_map(map__2899);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2899__$1,cljs.core.cst$kw$button_SLASH_start);
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2899__$1,cljs.core.cst$kw$button_SLASH_stop);
var request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2899__$1,cljs.core.cst$kw$button_SLASH_request);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2899__$1,cljs.core.cst$kw$select_SLASH_inputs);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2899__$1,cljs.core.cst$kw$input_SLASH_ch);
var inputs_select = goog.dom.getElement(inputs);
var c__2284__auto___3023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_2976){
var state_val_2977 = (state_2976[(1)]);
if((state_val_2977 === (7))){
var inst_2972 = (state_2976[(2)]);
var state_2976__$1 = state_2976;
var statearr_2978_3024 = state_2976__$1;
(statearr_2978_3024[(2)] = inst_2972);

(statearr_2978_3024[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2977 === (20))){
var inst_2947 = (state_2976[(7)]);
var inst_2935 = (state_2976[(8)]);
var inst_2945 = cljs.core.first(inst_2935);
var inst_2946 = cljs.core.__destructure_map(inst_2945);
var inst_2947__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_2946,cljs.core.cst$kw$label);
var inst_2948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_2946,cljs.core.cst$kw$device_DASH_id);
var inst_2949 = goog.dom.createElement("option");
var inst_2950 = cljs.core.seq(inst_2947__$1);
var state_2976__$1 = (function (){var statearr_2979 = state_2976;
(statearr_2979[(7)] = inst_2947__$1);

(statearr_2979[(9)] = inst_2948);

(statearr_2979[(10)] = inst_2949);

return statearr_2979;
})();
if(inst_2950){
var statearr_2980_3025 = state_2976__$1;
(statearr_2980_3025[(1)] = (22));

} else {
var statearr_2981_3026 = state_2976__$1;
(statearr_2981_3026[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2977 === (1))){
var state_2976__$1 = state_2976;
var statearr_2982_3027 = state_2976__$1;
(statearr_2982_3027[(2)] = null);

(statearr_2982_3027[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2977 === (24))){
var inst_2935 = (state_2976[(8)]);
var inst_2948 = (state_2976[(9)]);
var inst_2949 = (state_2976[(10)]);
var inst_2954 = (state_2976[(2)]);
var inst_2955 = goog.dom.append(inst_2949,inst_2954);
var inst_2956 = inst_2949.setAttribute("value",inst_2948);
var inst_2957 = goog.dom.append(inputs_select,inst_2949);
var inst_2958 = cljs.core.next(inst_2935);
var inst_2910 = inst_2958;
var inst_2911 = null;
var inst_2912 = (0);
var inst_2913 = (0);
var state_2976__$1 = (function (){var statearr_2986 = state_2976;
(statearr_2986[(11)] = inst_2957);

(statearr_2986[(12)] = inst_2955);

(statearr_2986[(13)] = inst_2913);

(statearr_2986[(14)] = inst_2911);

(statearr_2986[(15)] = inst_2910);

(statearr_2986[(16)] = inst_2912);

(statearr_2986[(17)] = inst_2956);

return statearr_2986;
})();
var statearr_2987_3028 = state_2976__$1;
(statearr_2987_3028[(2)] = null);

(statearr_2987_3028[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2977 === (4))){
var inst_2902 = (state_2976[(18)]);
var inst_2902__$1 = (state_2976[(2)]);
var state_2976__$1 = (function (){var statearr_2988 = state_2976;
(statearr_2988[(18)] = inst_2902__$1);

return statearr_2988;
})();
if(cljs.core.truth_(inst_2902__$1)){
var statearr_2989_3029 = state_2976__$1;
(statearr_2989_3029[(1)] = (5));

} else {
var statearr_2990_3030 = state_2976__$1;
(statearr_2990_3030[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2977 === (15))){
var inst_2923 = (state_2976[(19)]);
var inst_2913 = (state_2976[(13)]);
var inst_2911 = (state_2976[(14)]);
var inst_2910 = (state_2976[(15)]);
var inst_2922 = (state_2976[(20)]);
var inst_2912 = (state_2976[(16)]);
var inst_2928 = (state_2976[(2)]);
var inst_2929 = goog.dom.append(inst_2923,inst_2928);
var inst_2930 = inst_2923.setAttribute("value",inst_2922);
var inst_2931 = goog.dom.append(inputs_select,inst_2923);
var inst_2932 = (inst_2913 + (1));
var tmp2983 = inst_2911;
var tmp2984 = inst_2910;
var tmp2985 = inst_2912;
var inst_2910__$1 = tmp2984;
var inst_2911__$1 = tmp2983;
var inst_2912__$1 = tmp2985;
var inst_2913__$1 = inst_2932;
var state_2976__$1 = (function (){var statearr_2991 = state_2976;
(statearr_2991[(21)] = inst_2931);

(statearr_2991[(13)] = inst_2913__$1);

(statearr_2991[(14)] = inst_2911__$1);

(statearr_2991[(22)] = inst_2929);

(statearr_2991[(15)] = inst_2910__$1);

(statearr_2991[(16)] = inst_2912__$1);

(statearr_2991[(23)] = inst_2930);

return statearr_2991;
})();
var statearr_2992_3031 = state_2976__$1;
(statearr_2992_3031[(2)] = null);

(statearr_2992_3031[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2977 === (21))){
var inst_2961 = (state_2976[(2)]);
var state_2976__$1 = state_2976;
var statearr_2993_3032 = state_2976__$1;
(statearr_2993_3032[(2)] = inst_2961);

(statearr_2993_3032[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2977 === (13))){
var inst_2921 = (state_2976[(24)]);
var state_2976__$1 = state_2976;
var statearr_2994_3033 = state_2976__$1;
(statearr_2994_3033[(2)] = inst_2921);

(statearr_2994_3033[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2977 === (22))){
var inst_2947 = (state_2976[(7)]);
var state_2976__$1 = state_2976;
var statearr_2995_3034 = state_2976__$1;
(statearr_2995_3034[(2)] = inst_2947);

(statearr_2995_3034[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2977 === (6))){
var state_2976__$1 = state_2976;
var statearr_2996_3035 = state_2976__$1;
(statearr_2996_3035[(2)] = null);

(statearr_2996_3035[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2977 === (17))){
var state_2976__$1 = state_2976;
var statearr_2997_3036 = state_2976__$1;
(statearr_2997_3036[(2)] = null);

(statearr_2997_3036[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2977 === (3))){
var inst_2974 = (state_2976[(2)]);
var state_2976__$1 = state_2976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_2976__$1,inst_2974);
} else {
if((state_val_2977 === (12))){
var inst_2966 = (state_2976[(2)]);
var state_2976__$1 = state_2976;
var statearr_2998_3037 = state_2976__$1;
(statearr_2998_3037[(2)] = inst_2966);

(statearr_2998_3037[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2977 === (2))){
var state_2976__$1 = state_2976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_2976__$1,(4),ch);
} else {
if((state_val_2977 === (23))){
var state_2976__$1 = state_2976;
var statearr_2999_3038 = state_2976__$1;
(statearr_2999_3038[(2)] = "Default");

(statearr_2999_3038[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2977 === (19))){
var inst_2935 = (state_2976[(8)]);
var inst_2939 = cljs.core.chunk_first(inst_2935);
var inst_2940 = cljs.core.chunk_rest(inst_2935);
var inst_2941 = cljs.core.count(inst_2939);
var inst_2910 = inst_2940;
var inst_2911 = inst_2939;
var inst_2912 = inst_2941;
var inst_2913 = (0);
var state_2976__$1 = (function (){var statearr_3000 = state_2976;
(statearr_3000[(13)] = inst_2913);

(statearr_3000[(14)] = inst_2911);

(statearr_3000[(15)] = inst_2910);

(statearr_3000[(16)] = inst_2912);

return statearr_3000;
})();
var statearr_3001_3039 = state_2976__$1;
(statearr_3001_3039[(2)] = null);

(statearr_3001_3039[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2977 === (11))){
var inst_2910 = (state_2976[(15)]);
var inst_2935 = (state_2976[(8)]);
var inst_2935__$1 = cljs.core.seq(inst_2910);
var state_2976__$1 = (function (){var statearr_3002 = state_2976;
(statearr_3002[(8)] = inst_2935__$1);

return statearr_3002;
})();
if(inst_2935__$1){
var statearr_3003_3040 = state_2976__$1;
(statearr_3003_3040[(1)] = (16));

} else {
var statearr_3004_3041 = state_2976__$1;
(statearr_3004_3041[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2977 === (9))){
var inst_2968 = (state_2976[(2)]);
var state_2976__$1 = (function (){var statearr_3005 = state_2976;
(statearr_3005[(25)] = inst_2968);

return statearr_3005;
})();
var statearr_3006_3042 = state_2976__$1;
(statearr_3006_3042[(2)] = null);

(statearr_3006_3042[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2977 === (5))){
var inst_2902 = (state_2976[(18)]);
var inst_2904 = goog.dom.removeChildren(inputs_select);
var inst_2909 = cljs.core.seq(inst_2902);
var inst_2910 = inst_2909;
var inst_2911 = null;
var inst_2912 = (0);
var inst_2913 = (0);
var state_2976__$1 = (function (){var statearr_3007 = state_2976;
(statearr_3007[(26)] = inst_2904);

(statearr_3007[(13)] = inst_2913);

(statearr_3007[(14)] = inst_2911);

(statearr_3007[(15)] = inst_2910);

(statearr_3007[(16)] = inst_2912);

return statearr_3007;
})();
var statearr_3008_3043 = state_2976__$1;
(statearr_3008_3043[(2)] = null);

(statearr_3008_3043[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2977 === (14))){
var state_2976__$1 = state_2976;
var statearr_3009_3044 = state_2976__$1;
(statearr_3009_3044[(2)] = "Default");

(statearr_3009_3044[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2977 === (16))){
var inst_2935 = (state_2976[(8)]);
var inst_2937 = cljs.core.chunked_seq_QMARK_(inst_2935);
var state_2976__$1 = state_2976;
if(inst_2937){
var statearr_3010_3045 = state_2976__$1;
(statearr_3010_3045[(1)] = (19));

} else {
var statearr_3011_3046 = state_2976__$1;
(statearr_3011_3046[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2977 === (10))){
var inst_2913 = (state_2976[(13)]);
var inst_2911 = (state_2976[(14)]);
var inst_2921 = (state_2976[(24)]);
var inst_2919 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_2911,inst_2913);
var inst_2920 = cljs.core.__destructure_map(inst_2919);
var inst_2921__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_2920,cljs.core.cst$kw$label);
var inst_2922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_2920,cljs.core.cst$kw$device_DASH_id);
var inst_2923 = goog.dom.createElement("option");
var inst_2924 = cljs.core.seq(inst_2921__$1);
var state_2976__$1 = (function (){var statearr_3012 = state_2976;
(statearr_3012[(19)] = inst_2923);

(statearr_3012[(20)] = inst_2922);

(statearr_3012[(24)] = inst_2921__$1);

return statearr_3012;
})();
if(inst_2924){
var statearr_3013_3047 = state_2976__$1;
(statearr_3013_3047[(1)] = (13));

} else {
var statearr_3014_3048 = state_2976__$1;
(statearr_3014_3048[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_2977 === (18))){
var inst_2964 = (state_2976[(2)]);
var state_2976__$1 = state_2976;
var statearr_3015_3049 = state_2976__$1;
(statearr_3015_3049[(2)] = inst_2964);

(statearr_3015_3049[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_2977 === (8))){
var inst_2913 = (state_2976[(13)]);
var inst_2912 = (state_2976[(16)]);
var inst_2915 = (inst_2913 < inst_2912);
var inst_2916 = inst_2915;
var state_2976__$1 = state_2976;
if(cljs.core.truth_(inst_2916)){
var statearr_3016_3050 = state_2976__$1;
(statearr_3016_3050[(1)] = (10));

} else {
var statearr_3017_3051 = state_2976__$1;
(statearr_3017_3051[(1)] = (11));

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
var statearr_3018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3018[(0)] = cljs$user$state_machine__2262__auto__);

(statearr_3018[(1)] = (1));

return statearr_3018;
});
var cljs$user$state_machine__2262__auto____1 = (function (state_2976){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_2976);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e3019){var ex__2265__auto__ = e3019;
var statearr_3020_3052 = state_2976;
(statearr_3020_3052[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_2976[(4)]))){
var statearr_3021_3053 = state_2976;
(statearr_3021_3053[(1)] = cljs.core.first((state_2976[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__3054 = state_2976;
state_2976 = G__3054;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
cljs$user$state_machine__2262__auto__ = function(state_2976){
switch(arguments.length){
case 0:
return cljs$user$state_machine__2262__auto____0.call(this);
case 1:
return cljs$user$state_machine__2262__auto____1.call(this,state_2976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$user$state_machine__2262__auto____0;
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$user$state_machine__2262__auto____1;
return cljs$user$state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_3022 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_3022[(6)] = c__2284__auto___3023);

return statearr_3022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));


return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$button_SLASH_start,goog.dom.getElement(start),cljs.core.cst$kw$button_SLASH_stop,goog.dom.getElement(stop),cljs.core.cst$kw$button_SLASH_request,goog.dom.getElement(request),cljs.core.cst$kw$select_SLASH_inputs,inputs_select], null);
}));
integrant.core.halt_key_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ui_SLASH_controls,(function (_,controls){
var seq__3055 = cljs.core.seq(controls);
var chunk__3056 = null;
var count__3057 = (0);
var i__3058 = (0);
while(true){
if((i__3058 < count__3057)){
var vec__3065 = chunk__3056.cljs$core$IIndexed$_nth$arity$2(null,i__3058);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3065,(0),null);
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3065,(1),null);
goog.events.removeAll(elem);


var G__3071 = seq__3055;
var G__3072 = chunk__3056;
var G__3073 = count__3057;
var G__3074 = (i__3058 + (1));
seq__3055 = G__3071;
chunk__3056 = G__3072;
count__3057 = G__3073;
i__3058 = G__3074;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__3055);
if(temp__5753__auto__){
var seq__3055__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__3055__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__3055__$1);
var G__3075 = cljs.core.chunk_rest(seq__3055__$1);
var G__3076 = c__4679__auto__;
var G__3077 = cljs.core.count(c__4679__auto__);
var G__3078 = (0);
seq__3055 = G__3075;
chunk__3056 = G__3076;
count__3057 = G__3077;
i__3058 = G__3078;
continue;
} else {
var vec__3068 = cljs.core.first(seq__3055__$1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3068,(0),null);
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3068,(1),null);
goog.events.removeAll(elem);


var G__3079 = cljs.core.next(seq__3055__$1);
var G__3080 = null;
var G__3081 = (0);
var G__3082 = (0);
seq__3055 = G__3079;
chunk__3056 = G__3080;
count__3057 = G__3081;
i__3058 = G__3082;
continue;
}
} else {
return null;
}
}
break;
}
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ui_SLASH_listeners,(function (_,p__3085){
var map__3086 = p__3085;
var map__3086__$1 = cljs.core.__destructure_map(map__3086);
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3086__$1,cljs.core.cst$kw$controls);
var listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3086__$1,cljs.core.cst$kw$listen);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3086__$1,cljs.core.cst$kw$state);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3086__$1,cljs.core.cst$kw$handler_SLASH_data);
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3086__$1,cljs.core.cst$kw$handler_SLASH_stop);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3086__$1,cljs.core.cst$kw$input_SLASH_ch);
var map__3087 = controls;
var map__3087__$1 = cljs.core.__destructure_map(map__3087);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3087__$1,cljs.core.cst$kw$button_SLASH_start);
var request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3087__$1,cljs.core.cst$kw$button_SLASH_request);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3087__$1,cljs.core.cst$kw$select_SLASH_inputs);
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
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_3103){
var state_val_3104 = (state_3103[(1)]);
if((state_val_3104 === (1))){
var state_3103__$1 = state_3103;
var statearr_3105_3141 = state_3103__$1;
(statearr_3105_3141[(2)] = null);

(statearr_3105_3141[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3104 === (2))){
var state_3103__$1 = state_3103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_3103__$1,(4),session);
} else {
if((state_val_3104 === (3))){
var inst_3101 = (state_3103[(2)]);
var state_3103__$1 = state_3103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_3103__$1,inst_3101);
} else {
if((state_val_3104 === (4))){
var inst_3090 = (state_3103[(7)]);
var inst_3090__$1 = (state_3103[(2)]);
var inst_3091 = cljs.core.not(inst_3090__$1);
var state_3103__$1 = (function (){var statearr_3106 = state_3103;
(statearr_3106[(7)] = inst_3090__$1);

return statearr_3106;
})();
if(inst_3091){
var statearr_3107_3142 = state_3103__$1;
(statearr_3107_3142[(1)] = (5));

} else {
var statearr_3108_3143 = state_3103__$1;
(statearr_3108_3143[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3104 === (5))){
var inst_3093 = cljs.user.enable_elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inputs,start], 0));
var inst_3094 = cljs.user.disable_elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stop_button], 0));
var state_3103__$1 = (function (){var statearr_3109 = state_3103;
(statearr_3109[(8)] = inst_3093);

return statearr_3109;
})();
var statearr_3110_3144 = state_3103__$1;
(statearr_3110_3144[(2)] = inst_3094);

(statearr_3110_3144[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3104 === (6))){
var inst_3090 = (state_3103[(7)]);
var inst_3096 = (data.cljs$core$IFn$_invoke$arity$1 ? data.cljs$core$IFn$_invoke$arity$1(inst_3090) : data.call(null,inst_3090));
var state_3103__$1 = (function (){var statearr_3111 = state_3103;
(statearr_3111[(9)] = inst_3096);

return statearr_3111;
})();
var statearr_3112_3145 = state_3103__$1;
(statearr_3112_3145[(2)] = null);

(statearr_3112_3145[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3104 === (7))){
var inst_3099 = (state_3103[(2)]);
var state_3103__$1 = state_3103;
var statearr_3113_3146 = state_3103__$1;
(statearr_3113_3146[(2)] = inst_3099);

(statearr_3113_3146[(1)] = (3));


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
var statearr_3114 = [null,null,null,null,null,null,null,null,null,null];
(statearr_3114[(0)] = cljs$user$state_machine__2262__auto__);

(statearr_3114[(1)] = (1));

return statearr_3114;
});
var cljs$user$state_machine__2262__auto____1 = (function (state_3103){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_3103);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e3115){var ex__2265__auto__ = e3115;
var statearr_3116_3147 = state_3103;
(statearr_3116_3147[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_3103[(4)]))){
var statearr_3117_3148 = state_3103;
(statearr_3117_3148[(1)] = cljs.core.first((state_3103[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__3149 = state_3103;
state_3103 = G__3149;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
cljs$user$state_machine__2262__auto__ = function(state_3103){
switch(arguments.length){
case 0:
return cljs$user$state_machine__2262__auto____0.call(this);
case 1:
return cljs$user$state_machine__2262__auto____1.call(this,state_3103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$user$state_machine__2262__auto____0;
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$user$state_machine__2262__auto____1;
return cljs$user$state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_3118 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_3118[(6)] = c__2284__auto__);

return statearr_3118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));

return c__2284__auto__;
}));

goog.events.listen(inputs,goog.events.EventType.CHANGE,(function (p1__3083_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$input,p1__3083_SHARP_.target.value);
}));

return goog.events.listen(request,goog.events.EventType.CLICK,(function (){
var c__2284__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_3130){
var state_val_3131 = (state_3130[(1)]);
if((state_val_3131 === (1))){
var inst_3119 = blah.core.request_permission();
var state_3130__$1 = state_3130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_3130__$1,(2),inst_3119);
} else {
if((state_val_3131 === (2))){
var inst_3121 = (state_3130[(2)]);
var state_3130__$1 = state_3130;
if(cljs.core.truth_(inst_3121)){
var statearr_3132_3150 = state_3130__$1;
(statearr_3132_3150[(1)] = (3));

} else {
var statearr_3133_3151 = state_3130__$1;
(statearr_3133_3151[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3131 === (3))){
var inst_3123 = (function (){return (function (p1__3084_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,p1__3084_SHARP_);
});
})();
var inst_3124 = blah.core.query_inputs(inst_3123);
var state_3130__$1 = state_3130;
var statearr_3134_3152 = state_3130__$1;
(statearr_3134_3152[(2)] = inst_3124);

(statearr_3134_3152[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3131 === (4))){
var inst_3126 = alert("permission denied");
var state_3130__$1 = state_3130;
var statearr_3135_3153 = state_3130__$1;
(statearr_3135_3153[(2)] = inst_3126);

(statearr_3135_3153[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3131 === (5))){
var inst_3128 = (state_3130[(2)]);
var state_3130__$1 = state_3130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_3130__$1,inst_3128);
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
var statearr_3136 = [null,null,null,null,null,null,null];
(statearr_3136[(0)] = cljs$user$state_machine__2262__auto__);

(statearr_3136[(1)] = (1));

return statearr_3136;
});
var cljs$user$state_machine__2262__auto____1 = (function (state_3130){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_3130);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e3137){var ex__2265__auto__ = e3137;
var statearr_3138_3154 = state_3130;
(statearr_3138_3154[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_3130[(4)]))){
var statearr_3139_3155 = state_3130;
(statearr_3139_3155[(1)] = cljs.core.first((state_3130[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__3156 = state_3130;
state_3130 = G__3156;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
cljs$user$state_machine__2262__auto__ = function(state_3130){
switch(arguments.length){
case 0:
return cljs$user$state_machine__2262__auto____0.call(this);
case 1:
return cljs$user$state_machine__2262__auto____1.call(this,state_3130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$user$state_machine__2262__auto____0;
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$user$state_machine__2262__auto____1;
return cljs$user$state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_3140 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_3140[(6)] = c__2284__auto__);

return statearr_3140;
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
return integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$1(system);
});
cljs.user.system = cljs.user.start();
