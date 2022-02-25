// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.user');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('blah.core');
goog.require('blah.dev.wav');
goog.require('blah.dev.ui');
goog.require('cljs.core.async');
goog.require('cljs.pprint');
goog.require('integrant.core');
goog.require('goog.dom');
goog.require('goog.events');
cljs.user.base_config = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$blah_SLASH_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$input_SLASH_ch,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ui_SLASH_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input,null], null),cljs.core.cst$kw$ui_SLASH_controls,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$input_SLASH_ch,integrant.core.ref(cljs.core.cst$kw$input_SLASH_ch),cljs.core.cst$kw$button_SLASH_start,"start",cljs.core.cst$kw$button_SLASH_stop,"stop",cljs.core.cst$kw$button_SLASH_request,"ask",cljs.core.cst$kw$select_SLASH_inputs,"inputs"], null),cljs.core.cst$kw$ui_SLASH_listeners,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$handler_SLASH_data,integrant.core.ref(cljs.core.cst$kw$blah_SLASH_data),cljs.core.cst$kw$handler_SLASH_start,integrant.core.ref(cljs.core.cst$kw$blah_SLASH_start),cljs.core.cst$kw$handler_SLASH_stop,integrant.core.ref(cljs.core.cst$kw$blah_SLASH_stop),cljs.core.cst$kw$input_SLASH_ch,integrant.core.ref(cljs.core.cst$kw$input_SLASH_ch),cljs.core.cst$kw$controls,integrant.core.ref(cljs.core.cst$kw$ui_SLASH_controls),cljs.core.cst$kw$state,integrant.core.ref(cljs.core.cst$kw$ui_SLASH_state)], null)], null);
cljs.user.test_config = blah.dev.wav.config;
cljs.user.app_config = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.user.base_config,cljs.user.test_config], 0));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$blah_SLASH_start,(function (_,p__2914){
var map__2915 = p__2914;
var map__2915__$1 = cljs.core.__destructure_map(map__2915);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2915__$1,cljs.core.cst$kw$state);
var xform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2915__$1,cljs.core.cst$kw$xform);
return (function (){
var map__2916 = cljs.core.deref(state);
var map__2916__$1 = cljs.core.__destructure_map(map__2916);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2916__$1,cljs.core.cst$kw$input);
return blah.core.listen.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$device_DASH_id,input], null),xform);
});
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$blah_SLASH_data,(function (_,p__2918){
var map__2919 = p__2918;
var map__2919__$1 = cljs.core.__destructure_map(map__2919);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2919__$1,cljs.core.cst$kw$state);
var update_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2919__$1,cljs.core.cst$kw$update_DASH_fn);
return (function (data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (p1__2917_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__2917_SHARP_,cljs.core.cst$kw$data,update_fn,data);
}));
});
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$blah_SLASH_state,(function (_,initial){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$blah_SLASH_stop,(function (_,p__2920){
var map__2921 = p__2920;
var map__2921__$1 = cljs.core.__destructure_map(map__2921);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2921__$1,cljs.core.cst$kw$state);
var stop_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2921__$1,cljs.core.cst$kw$stop_DASH_fn);
return (function (context,session){
cljs.core.async.close_BANG_(session);

var map__2922 = cljs.core.deref(state);
var map__2922__$1 = cljs.core.__destructure_map(map__2922);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2922__$1,cljs.core.cst$kw$data);
(stop_fn.cljs$core$IFn$_invoke$arity$2 ? stop_fn.cljs$core$IFn$_invoke$arity$2(context,data) : stop_fn.call(null,context,data));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$data,cljs.core.PersistentVector.EMPTY);
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
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ui_SLASH_controls,(function (_,p__2923){
var map__2924 = p__2923;
var map__2924__$1 = cljs.core.__destructure_map(map__2924);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2924__$1,cljs.core.cst$kw$button_SLASH_start);
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2924__$1,cljs.core.cst$kw$button_SLASH_stop);
var request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2924__$1,cljs.core.cst$kw$button_SLASH_request);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2924__$1,cljs.core.cst$kw$select_SLASH_inputs);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2924__$1,cljs.core.cst$kw$input_SLASH_ch);
var inputs_select = goog.dom.getElement(inputs);
var c__2284__auto___3048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_3001){
var state_val_3002 = (state_3001[(1)]);
if((state_val_3002 === (7))){
var inst_2997 = (state_3001[(2)]);
var state_3001__$1 = state_3001;
var statearr_3003_3049 = state_3001__$1;
(statearr_3003_3049[(2)] = inst_2997);

(statearr_3003_3049[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3002 === (20))){
var inst_2960 = (state_3001[(7)]);
var inst_2972 = (state_3001[(8)]);
var inst_2970 = cljs.core.first(inst_2960);
var inst_2971 = cljs.core.__destructure_map(inst_2970);
var inst_2972__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_2971,cljs.core.cst$kw$label);
var inst_2973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_2971,cljs.core.cst$kw$device_DASH_id);
var inst_2974 = goog.dom.createElement("option");
var inst_2975 = cljs.core.seq(inst_2972__$1);
var state_3001__$1 = (function (){var statearr_3004 = state_3001;
(statearr_3004[(9)] = inst_2973);

(statearr_3004[(8)] = inst_2972__$1);

(statearr_3004[(10)] = inst_2974);

return statearr_3004;
})();
if(inst_2975){
var statearr_3005_3050 = state_3001__$1;
(statearr_3005_3050[(1)] = (22));

} else {
var statearr_3006_3051 = state_3001__$1;
(statearr_3006_3051[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3002 === (1))){
var state_3001__$1 = state_3001;
var statearr_3007_3052 = state_3001__$1;
(statearr_3007_3052[(2)] = null);

(statearr_3007_3052[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3002 === (24))){
var inst_2960 = (state_3001[(7)]);
var inst_2973 = (state_3001[(9)]);
var inst_2974 = (state_3001[(10)]);
var inst_2979 = (state_3001[(2)]);
var inst_2980 = goog.dom.append(inst_2974,inst_2979);
var inst_2981 = inst_2974.setAttribute("value",inst_2973);
var inst_2982 = goog.dom.append(inputs_select,inst_2974);
var inst_2983 = cljs.core.next(inst_2960);
var inst_2935 = inst_2983;
var inst_2936 = null;
var inst_2937 = (0);
var inst_2938 = (0);
var state_3001__$1 = (function (){var statearr_3011 = state_3001;
(statearr_3011[(11)] = inst_2980);

(statearr_3011[(12)] = inst_2938);

(statearr_3011[(13)] = inst_2982);

(statearr_3011[(14)] = inst_2935);

(statearr_3011[(15)] = inst_2981);

(statearr_3011[(16)] = inst_2936);

(statearr_3011[(17)] = inst_2937);

return statearr_3011;
})();
var statearr_3012_3053 = state_3001__$1;
(statearr_3012_3053[(2)] = null);

(statearr_3012_3053[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3002 === (4))){
var inst_2927 = (state_3001[(18)]);
var inst_2927__$1 = (state_3001[(2)]);
var state_3001__$1 = (function (){var statearr_3013 = state_3001;
(statearr_3013[(18)] = inst_2927__$1);

return statearr_3013;
})();
if(cljs.core.truth_(inst_2927__$1)){
var statearr_3014_3054 = state_3001__$1;
(statearr_3014_3054[(1)] = (5));

} else {
var statearr_3015_3055 = state_3001__$1;
(statearr_3015_3055[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3002 === (15))){
var inst_2947 = (state_3001[(19)]);
var inst_2938 = (state_3001[(12)]);
var inst_2935 = (state_3001[(14)]);
var inst_2948 = (state_3001[(20)]);
var inst_2936 = (state_3001[(16)]);
var inst_2937 = (state_3001[(17)]);
var inst_2953 = (state_3001[(2)]);
var inst_2954 = goog.dom.append(inst_2948,inst_2953);
var inst_2955 = inst_2948.setAttribute("value",inst_2947);
var inst_2956 = goog.dom.append(inputs_select,inst_2948);
var inst_2957 = (inst_2938 + (1));
var tmp3008 = inst_2935;
var tmp3009 = inst_2936;
var tmp3010 = inst_2937;
var inst_2935__$1 = tmp3008;
var inst_2936__$1 = tmp3009;
var inst_2937__$1 = tmp3010;
var inst_2938__$1 = inst_2957;
var state_3001__$1 = (function (){var statearr_3016 = state_3001;
(statearr_3016[(21)] = inst_2955);

(statearr_3016[(12)] = inst_2938__$1);

(statearr_3016[(22)] = inst_2954);

(statearr_3016[(14)] = inst_2935__$1);

(statearr_3016[(16)] = inst_2936__$1);

(statearr_3016[(17)] = inst_2937__$1);

(statearr_3016[(23)] = inst_2956);

return statearr_3016;
})();
var statearr_3017_3056 = state_3001__$1;
(statearr_3017_3056[(2)] = null);

(statearr_3017_3056[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3002 === (21))){
var inst_2986 = (state_3001[(2)]);
var state_3001__$1 = state_3001;
var statearr_3018_3057 = state_3001__$1;
(statearr_3018_3057[(2)] = inst_2986);

(statearr_3018_3057[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3002 === (13))){
var inst_2946 = (state_3001[(24)]);
var state_3001__$1 = state_3001;
var statearr_3019_3058 = state_3001__$1;
(statearr_3019_3058[(2)] = inst_2946);

(statearr_3019_3058[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3002 === (22))){
var inst_2972 = (state_3001[(8)]);
var state_3001__$1 = state_3001;
var statearr_3020_3059 = state_3001__$1;
(statearr_3020_3059[(2)] = inst_2972);

(statearr_3020_3059[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3002 === (6))){
var state_3001__$1 = state_3001;
var statearr_3021_3060 = state_3001__$1;
(statearr_3021_3060[(2)] = null);

(statearr_3021_3060[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3002 === (17))){
var state_3001__$1 = state_3001;
var statearr_3022_3061 = state_3001__$1;
(statearr_3022_3061[(2)] = null);

(statearr_3022_3061[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3002 === (3))){
var inst_2999 = (state_3001[(2)]);
var state_3001__$1 = state_3001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_3001__$1,inst_2999);
} else {
if((state_val_3002 === (12))){
var inst_2991 = (state_3001[(2)]);
var state_3001__$1 = state_3001;
var statearr_3023_3062 = state_3001__$1;
(statearr_3023_3062[(2)] = inst_2991);

(statearr_3023_3062[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3002 === (2))){
var state_3001__$1 = state_3001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_3001__$1,(4),ch);
} else {
if((state_val_3002 === (23))){
var state_3001__$1 = state_3001;
var statearr_3024_3063 = state_3001__$1;
(statearr_3024_3063[(2)] = "Default");

(statearr_3024_3063[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3002 === (19))){
var inst_2960 = (state_3001[(7)]);
var inst_2964 = cljs.core.chunk_first(inst_2960);
var inst_2965 = cljs.core.chunk_rest(inst_2960);
var inst_2966 = cljs.core.count(inst_2964);
var inst_2935 = inst_2965;
var inst_2936 = inst_2964;
var inst_2937 = inst_2966;
var inst_2938 = (0);
var state_3001__$1 = (function (){var statearr_3025 = state_3001;
(statearr_3025[(12)] = inst_2938);

(statearr_3025[(14)] = inst_2935);

(statearr_3025[(16)] = inst_2936);

(statearr_3025[(17)] = inst_2937);

return statearr_3025;
})();
var statearr_3026_3064 = state_3001__$1;
(statearr_3026_3064[(2)] = null);

(statearr_3026_3064[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3002 === (11))){
var inst_2960 = (state_3001[(7)]);
var inst_2935 = (state_3001[(14)]);
var inst_2960__$1 = cljs.core.seq(inst_2935);
var state_3001__$1 = (function (){var statearr_3027 = state_3001;
(statearr_3027[(7)] = inst_2960__$1);

return statearr_3027;
})();
if(inst_2960__$1){
var statearr_3028_3065 = state_3001__$1;
(statearr_3028_3065[(1)] = (16));

} else {
var statearr_3029_3066 = state_3001__$1;
(statearr_3029_3066[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3002 === (9))){
var inst_2993 = (state_3001[(2)]);
var state_3001__$1 = (function (){var statearr_3030 = state_3001;
(statearr_3030[(25)] = inst_2993);

return statearr_3030;
})();
var statearr_3031_3067 = state_3001__$1;
(statearr_3031_3067[(2)] = null);

(statearr_3031_3067[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3002 === (5))){
var inst_2927 = (state_3001[(18)]);
var inst_2929 = goog.dom.removeChildren(inputs_select);
var inst_2934 = cljs.core.seq(inst_2927);
var inst_2935 = inst_2934;
var inst_2936 = null;
var inst_2937 = (0);
var inst_2938 = (0);
var state_3001__$1 = (function (){var statearr_3032 = state_3001;
(statearr_3032[(12)] = inst_2938);

(statearr_3032[(26)] = inst_2929);

(statearr_3032[(14)] = inst_2935);

(statearr_3032[(16)] = inst_2936);

(statearr_3032[(17)] = inst_2937);

return statearr_3032;
})();
var statearr_3033_3068 = state_3001__$1;
(statearr_3033_3068[(2)] = null);

(statearr_3033_3068[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3002 === (14))){
var state_3001__$1 = state_3001;
var statearr_3034_3069 = state_3001__$1;
(statearr_3034_3069[(2)] = "Default");

(statearr_3034_3069[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3002 === (16))){
var inst_2960 = (state_3001[(7)]);
var inst_2962 = cljs.core.chunked_seq_QMARK_(inst_2960);
var state_3001__$1 = state_3001;
if(inst_2962){
var statearr_3035_3070 = state_3001__$1;
(statearr_3035_3070[(1)] = (19));

} else {
var statearr_3036_3071 = state_3001__$1;
(statearr_3036_3071[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3002 === (10))){
var inst_2938 = (state_3001[(12)]);
var inst_2946 = (state_3001[(24)]);
var inst_2936 = (state_3001[(16)]);
var inst_2944 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_2936,inst_2938);
var inst_2945 = cljs.core.__destructure_map(inst_2944);
var inst_2946__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_2945,cljs.core.cst$kw$label);
var inst_2947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_2945,cljs.core.cst$kw$device_DASH_id);
var inst_2948 = goog.dom.createElement("option");
var inst_2949 = cljs.core.seq(inst_2946__$1);
var state_3001__$1 = (function (){var statearr_3037 = state_3001;
(statearr_3037[(19)] = inst_2947);

(statearr_3037[(20)] = inst_2948);

(statearr_3037[(24)] = inst_2946__$1);

return statearr_3037;
})();
if(inst_2949){
var statearr_3038_3072 = state_3001__$1;
(statearr_3038_3072[(1)] = (13));

} else {
var statearr_3039_3073 = state_3001__$1;
(statearr_3039_3073[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3002 === (18))){
var inst_2989 = (state_3001[(2)]);
var state_3001__$1 = state_3001;
var statearr_3040_3074 = state_3001__$1;
(statearr_3040_3074[(2)] = inst_2989);

(statearr_3040_3074[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3002 === (8))){
var inst_2938 = (state_3001[(12)]);
var inst_2937 = (state_3001[(17)]);
var inst_2940 = (inst_2938 < inst_2937);
var inst_2941 = inst_2940;
var state_3001__$1 = state_3001;
if(cljs.core.truth_(inst_2941)){
var statearr_3041_3075 = state_3001__$1;
(statearr_3041_3075[(1)] = (10));

} else {
var statearr_3042_3076 = state_3001__$1;
(statearr_3042_3076[(1)] = (11));

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
var statearr_3043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3043[(0)] = cljs$user$state_machine__2262__auto__);

(statearr_3043[(1)] = (1));

return statearr_3043;
});
var cljs$user$state_machine__2262__auto____1 = (function (state_3001){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_3001);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e3044){var ex__2265__auto__ = e3044;
var statearr_3045_3077 = state_3001;
(statearr_3045_3077[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_3001[(4)]))){
var statearr_3046_3078 = state_3001;
(statearr_3046_3078[(1)] = cljs.core.first((state_3001[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__3079 = state_3001;
state_3001 = G__3079;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
cljs$user$state_machine__2262__auto__ = function(state_3001){
switch(arguments.length){
case 0:
return cljs$user$state_machine__2262__auto____0.call(this);
case 1:
return cljs$user$state_machine__2262__auto____1.call(this,state_3001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$user$state_machine__2262__auto____0;
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$user$state_machine__2262__auto____1;
return cljs$user$state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_3047 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_3047[(6)] = c__2284__auto___3048);

return statearr_3047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));


return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$button_SLASH_start,goog.dom.getElement(start),cljs.core.cst$kw$button_SLASH_stop,goog.dom.getElement(stop),cljs.core.cst$kw$button_SLASH_request,goog.dom.getElement(request),cljs.core.cst$kw$select_SLASH_inputs,inputs_select], null);
}));
integrant.core.halt_key_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ui_SLASH_controls,(function (_,controls){
var seq__3080 = cljs.core.seq(controls);
var chunk__3081 = null;
var count__3082 = (0);
var i__3083 = (0);
while(true){
if((i__3083 < count__3082)){
var vec__3090 = chunk__3081.cljs$core$IIndexed$_nth$arity$2(null,i__3083);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3090,(0),null);
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3090,(1),null);
goog.events.removeAll(elem);


var G__3096 = seq__3080;
var G__3097 = chunk__3081;
var G__3098 = count__3082;
var G__3099 = (i__3083 + (1));
seq__3080 = G__3096;
chunk__3081 = G__3097;
count__3082 = G__3098;
i__3083 = G__3099;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__3080);
if(temp__5753__auto__){
var seq__3080__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__3080__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__3080__$1);
var G__3100 = cljs.core.chunk_rest(seq__3080__$1);
var G__3101 = c__4679__auto__;
var G__3102 = cljs.core.count(c__4679__auto__);
var G__3103 = (0);
seq__3080 = G__3100;
chunk__3081 = G__3101;
count__3082 = G__3102;
i__3083 = G__3103;
continue;
} else {
var vec__3093 = cljs.core.first(seq__3080__$1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3093,(0),null);
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3093,(1),null);
goog.events.removeAll(elem);


var G__3104 = cljs.core.next(seq__3080__$1);
var G__3105 = null;
var G__3106 = (0);
var G__3107 = (0);
seq__3080 = G__3104;
chunk__3081 = G__3105;
count__3082 = G__3106;
i__3083 = G__3107;
continue;
}
} else {
return null;
}
}
break;
}
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ui_SLASH_listeners,(function (_,p__3110){
var map__3111 = p__3110;
var map__3111__$1 = cljs.core.__destructure_map(map__3111);
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3111__$1,cljs.core.cst$kw$controls);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3111__$1,cljs.core.cst$kw$state);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3111__$1,cljs.core.cst$kw$handler_SLASH_data);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3111__$1,cljs.core.cst$kw$handler_SLASH_start);
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3111__$1,cljs.core.cst$kw$handler_SLASH_stop);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3111__$1,cljs.core.cst$kw$input_SLASH_ch);
var map__3112 = controls;
var map__3112__$1 = cljs.core.__destructure_map(map__3112);
var request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3112__$1,cljs.core.cst$kw$button_SLASH_request);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3112__$1,cljs.core.cst$kw$select_SLASH_inputs);
var map__3113 = controls;
var map__3113__$1 = cljs.core.__destructure_map(map__3113);
var stop_button = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3113__$1,cljs.core.cst$kw$button_SLASH_stop);
var start_button = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3113__$1,cljs.core.cst$kw$button_SLASH_start);
goog.events.listen(start_button,goog.events.EventType.CLICK,(function (){
blah.dev.ui.disable_elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inputs,start_button], 0));

blah.dev.ui.enable_elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stop_button], 0));

var session = (start.cljs$core$IFn$_invoke$arity$0 ? start.cljs$core$IFn$_invoke$arity$0() : start.call(null));
var context = blah.core.audio_context(session);
goog.events.listenOnce(stop_button,goog.events.EventType.CLICK,(function (){
return (stop.cljs$core$IFn$_invoke$arity$2 ? stop.cljs$core$IFn$_invoke$arity$2(context,session) : stop.call(null,context,session));
}));

var c__2284__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_3129){
var state_val_3130 = (state_3129[(1)]);
if((state_val_3130 === (1))){
var state_3129__$1 = state_3129;
var statearr_3131_3167 = state_3129__$1;
(statearr_3131_3167[(2)] = null);

(statearr_3131_3167[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3130 === (2))){
var state_3129__$1 = state_3129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_3129__$1,(4),session);
} else {
if((state_val_3130 === (3))){
var inst_3127 = (state_3129[(2)]);
var state_3129__$1 = state_3129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_3129__$1,inst_3127);
} else {
if((state_val_3130 === (4))){
var inst_3116 = (state_3129[(7)]);
var inst_3116__$1 = (state_3129[(2)]);
var inst_3117 = cljs.core.not(inst_3116__$1);
var state_3129__$1 = (function (){var statearr_3132 = state_3129;
(statearr_3132[(7)] = inst_3116__$1);

return statearr_3132;
})();
if(inst_3117){
var statearr_3133_3168 = state_3129__$1;
(statearr_3133_3168[(1)] = (5));

} else {
var statearr_3134_3169 = state_3129__$1;
(statearr_3134_3169[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3130 === (5))){
var inst_3119 = blah.dev.ui.enable_elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inputs,start_button], 0));
var inst_3120 = blah.dev.ui.disable_elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stop_button], 0));
var state_3129__$1 = (function (){var statearr_3135 = state_3129;
(statearr_3135[(8)] = inst_3119);

return statearr_3135;
})();
var statearr_3136_3170 = state_3129__$1;
(statearr_3136_3170[(2)] = inst_3120);

(statearr_3136_3170[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3130 === (6))){
var inst_3116 = (state_3129[(7)]);
var inst_3122 = (data.cljs$core$IFn$_invoke$arity$1 ? data.cljs$core$IFn$_invoke$arity$1(inst_3116) : data.call(null,inst_3116));
var state_3129__$1 = (function (){var statearr_3137 = state_3129;
(statearr_3137[(9)] = inst_3122);

return statearr_3137;
})();
var statearr_3138_3171 = state_3129__$1;
(statearr_3138_3171[(2)] = null);

(statearr_3138_3171[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3130 === (7))){
var inst_3125 = (state_3129[(2)]);
var state_3129__$1 = state_3129;
var statearr_3139_3172 = state_3129__$1;
(statearr_3139_3172[(2)] = inst_3125);

(statearr_3139_3172[(1)] = (3));


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
var statearr_3140 = [null,null,null,null,null,null,null,null,null,null];
(statearr_3140[(0)] = cljs$user$state_machine__2262__auto__);

(statearr_3140[(1)] = (1));

return statearr_3140;
});
var cljs$user$state_machine__2262__auto____1 = (function (state_3129){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_3129);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e3141){var ex__2265__auto__ = e3141;
var statearr_3142_3173 = state_3129;
(statearr_3142_3173[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_3129[(4)]))){
var statearr_3143_3174 = state_3129;
(statearr_3143_3174[(1)] = cljs.core.first((state_3129[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__3175 = state_3129;
state_3129 = G__3175;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
cljs$user$state_machine__2262__auto__ = function(state_3129){
switch(arguments.length){
case 0:
return cljs$user$state_machine__2262__auto____0.call(this);
case 1:
return cljs$user$state_machine__2262__auto____1.call(this,state_3129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$user$state_machine__2262__auto____0;
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$user$state_machine__2262__auto____1;
return cljs$user$state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_3144 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_3144[(6)] = c__2284__auto__);

return statearr_3144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));

return c__2284__auto__;
}));

goog.events.listen(inputs,goog.events.EventType.CHANGE,(function (p1__3108_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$input,p1__3108_SHARP_.target.value);
}));

return goog.events.listen(request,goog.events.EventType.CLICK,(function (){
var c__2284__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__2285__auto__ = (function (){var switch__2261__auto__ = (function (state_3156){
var state_val_3157 = (state_3156[(1)]);
if((state_val_3157 === (1))){
var inst_3145 = blah.core.request_permission();
var state_3156__$1 = state_3156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_3156__$1,(2),inst_3145);
} else {
if((state_val_3157 === (2))){
var inst_3147 = (state_3156[(2)]);
var state_3156__$1 = state_3156;
if(cljs.core.truth_(inst_3147)){
var statearr_3158_3176 = state_3156__$1;
(statearr_3158_3176[(1)] = (3));

} else {
var statearr_3159_3177 = state_3156__$1;
(statearr_3159_3177[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_3157 === (3))){
var inst_3149 = (function (){return (function (p1__3109_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,p1__3109_SHARP_);
});
})();
var inst_3150 = blah.core.query_inputs(inst_3149);
var state_3156__$1 = state_3156;
var statearr_3160_3178 = state_3156__$1;
(statearr_3160_3178[(2)] = inst_3150);

(statearr_3160_3178[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3157 === (4))){
var inst_3152 = alert("permission denied");
var state_3156__$1 = state_3156;
var statearr_3161_3179 = state_3156__$1;
(statearr_3161_3179[(2)] = inst_3152);

(statearr_3161_3179[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_3157 === (5))){
var inst_3154 = (state_3156[(2)]);
var state_3156__$1 = state_3156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_3156__$1,inst_3154);
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
var statearr_3162 = [null,null,null,null,null,null,null];
(statearr_3162[(0)] = cljs$user$state_machine__2262__auto__);

(statearr_3162[(1)] = (1));

return statearr_3162;
});
var cljs$user$state_machine__2262__auto____1 = (function (state_3156){
while(true){
var ret_value__2263__auto__ = (function (){try{while(true){
var result__2264__auto__ = switch__2261__auto__(state_3156);
if(cljs.core.keyword_identical_QMARK_(result__2264__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__2264__auto__;
}
break;
}
}catch (e3163){var ex__2265__auto__ = e3163;
var statearr_3164_3180 = state_3156;
(statearr_3164_3180[(2)] = ex__2265__auto__);


if(cljs.core.seq((state_3156[(4)]))){
var statearr_3165_3181 = state_3156;
(statearr_3165_3181[(1)] = cljs.core.first((state_3156[(4)])));

} else {
throw ex__2265__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__2263__auto__,cljs.core.cst$kw$recur)){
var G__3182 = state_3156;
state_3156 = G__3182;
continue;
} else {
return ret_value__2263__auto__;
}
break;
}
});
cljs$user$state_machine__2262__auto__ = function(state_3156){
switch(arguments.length){
case 0:
return cljs$user$state_machine__2262__auto____0.call(this);
case 1:
return cljs$user$state_machine__2262__auto____1.call(this,state_3156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$user$state_machine__2262__auto____0;
cljs$user$state_machine__2262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$user$state_machine__2262__auto____1;
return cljs$user$state_machine__2262__auto__;
})()
})();
var state__2286__auto__ = (function (){var statearr_3166 = (f__2285__auto__.cljs$core$IFn$_invoke$arity$0 ? f__2285__auto__.cljs$core$IFn$_invoke$arity$0() : f__2285__auto__.call(null));
(statearr_3166[(6)] = c__2284__auto__);

return statearr_3166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__2286__auto__);
}));

return c__2284__auto__;
}));
}));
if((typeof cljs !== 'undefined') && (typeof cljs.user !== 'undefined') && (typeof cljs.user._STAR_system !== 'undefined')){
} else {
cljs.user._STAR_system = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
/**
 * Start the system by populating controls and wiring up event listeners
 */
cljs.user.start = (function cljs$user$start(){
return cljs.core.reset_BANG_(cljs.user._STAR_system,integrant.core.init.cljs$core$IFn$_invoke$arity$1(cljs.user.app_config));
});
/**
 * Stop the system. Removes event listeners and closes channels
 */
cljs.user.stop = (function cljs$user$stop(){
var temp__5757__auto__ = cljs.core.deref(cljs.user._STAR_system);
if((temp__5757__auto__ == null)){
return null;
} else {
var system = temp__5757__auto__;
integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$1(system);

return cljs.core.cst$kw$stopped;
}
});
cljs.user.restart = (function cljs$user$restart(){
cljs.user.stop();

return cljs.user.start();
});
cljs.user.restart();
