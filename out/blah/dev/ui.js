// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('blah.dev.ui');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Helper for disabling html elements
 */
blah.dev.ui.disable_elements = (function blah$dev$ui$disable_elements(var_args){
var args__4870__auto__ = [];
var len__4864__auto___2877 = arguments.length;
var i__4865__auto___2878 = (0);
while(true){
if((i__4865__auto___2878 < len__4864__auto___2877)){
args__4870__auto__.push((arguments[i__4865__auto___2878]));

var G__2879 = (i__4865__auto___2878 + (1));
i__4865__auto___2878 = G__2879;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return blah.dev.ui.disable_elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(blah.dev.ui.disable_elements.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
var seq__2873 = cljs.core.seq(elems);
var chunk__2874 = null;
var count__2875 = (0);
var i__2876 = (0);
while(true){
if((i__2876 < count__2875)){
var elem = chunk__2874.cljs$core$IIndexed$_nth$arity$2(null,i__2876);
elem.setAttribute("disabled","disabled");


var G__2880 = seq__2873;
var G__2881 = chunk__2874;
var G__2882 = count__2875;
var G__2883 = (i__2876 + (1));
seq__2873 = G__2880;
chunk__2874 = G__2881;
count__2875 = G__2882;
i__2876 = G__2883;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__2873);
if(temp__5753__auto__){
var seq__2873__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2873__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__2873__$1);
var G__2884 = cljs.core.chunk_rest(seq__2873__$1);
var G__2885 = c__4679__auto__;
var G__2886 = cljs.core.count(c__4679__auto__);
var G__2887 = (0);
seq__2873 = G__2884;
chunk__2874 = G__2885;
count__2875 = G__2886;
i__2876 = G__2887;
continue;
} else {
var elem = cljs.core.first(seq__2873__$1);
elem.setAttribute("disabled","disabled");


var G__2888 = cljs.core.next(seq__2873__$1);
var G__2889 = null;
var G__2890 = (0);
var G__2891 = (0);
seq__2873 = G__2888;
chunk__2874 = G__2889;
count__2875 = G__2890;
i__2876 = G__2891;
continue;
}
} else {
return null;
}
}
break;
}
}));

(blah.dev.ui.disable_elements.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(blah.dev.ui.disable_elements.cljs$lang$applyTo = (function (seq2872){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2872));
}));

/**
 * Helper for enabling html elements
 */
blah.dev.ui.enable_elements = (function blah$dev$ui$enable_elements(var_args){
var args__4870__auto__ = [];
var len__4864__auto___2897 = arguments.length;
var i__4865__auto___2898 = (0);
while(true){
if((i__4865__auto___2898 < len__4864__auto___2897)){
args__4870__auto__.push((arguments[i__4865__auto___2898]));

var G__2899 = (i__4865__auto___2898 + (1));
i__4865__auto___2898 = G__2899;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return blah.dev.ui.enable_elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(blah.dev.ui.enable_elements.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
var seq__2893 = cljs.core.seq(elems);
var chunk__2894 = null;
var count__2895 = (0);
var i__2896 = (0);
while(true){
if((i__2896 < count__2895)){
var elem = chunk__2894.cljs$core$IIndexed$_nth$arity$2(null,i__2896);
elem.removeAttribute("disabled");


var G__2900 = seq__2893;
var G__2901 = chunk__2894;
var G__2902 = count__2895;
var G__2903 = (i__2896 + (1));
seq__2893 = G__2900;
chunk__2894 = G__2901;
count__2895 = G__2902;
i__2896 = G__2903;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__2893);
if(temp__5753__auto__){
var seq__2893__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2893__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__2893__$1);
var G__2904 = cljs.core.chunk_rest(seq__2893__$1);
var G__2905 = c__4679__auto__;
var G__2906 = cljs.core.count(c__4679__auto__);
var G__2907 = (0);
seq__2893 = G__2904;
chunk__2894 = G__2905;
count__2895 = G__2906;
i__2896 = G__2907;
continue;
} else {
var elem = cljs.core.first(seq__2893__$1);
elem.removeAttribute("disabled");


var G__2908 = cljs.core.next(seq__2893__$1);
var G__2909 = null;
var G__2910 = (0);
var G__2911 = (0);
seq__2893 = G__2908;
chunk__2894 = G__2909;
count__2895 = G__2910;
i__2896 = G__2911;
continue;
}
} else {
return null;
}
}
break;
}
}));

(blah.dev.ui.enable_elements.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(blah.dev.ui.enable_elements.cljs$lang$applyTo = (function (seq2892){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2892));
}));

