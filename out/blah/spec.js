// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('blah.spec');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.spec.alpha');
goog.require('blah.impl');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$blah$spec_SLASH_device_DASH_id,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$blah$spec_SLASH_group_DASH_id,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$blah$spec_SLASH_kind,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$blah$spec_SLASH_label,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$blah$spec_SLASH_input,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$blah$spec_SLASH_device_DASH_id], null),cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$blah$spec_SLASH_group_DASH_id,cljs.core.cst$kw$blah$spec_SLASH_kind,cljs.core.cst$kw$blah$spec_SLASH_label], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$blah$spec_SLASH_device_DASH_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$blah$spec_SLASH_group_DASH_id,cljs.core.cst$kw$blah$spec_SLASH_kind,cljs.core.cst$kw$blah$spec_SLASH_label], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__2744){
return cljs.core.map_QMARK_(G__2744);
}),(function (G__2744){
return cljs.core.contains_QMARK_(G__2744,cljs.core.cst$kw$device_DASH_id);
})], null),(function (G__2744){
return ((cljs.core.map_QMARK_(G__2744)) && (cljs.core.contains_QMARK_(G__2744,cljs.core.cst$kw$device_DASH_id)));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$group_DASH_id,cljs.core.cst$kw$kind,cljs.core.cst$kw$label], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$blah$spec_SLASH_device_DASH_id], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$device_DASH_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$blah$spec_SLASH_group_DASH_id,cljs.core.cst$kw$blah$spec_SLASH_kind,cljs.core.cst$kw$blah$spec_SLASH_label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$device_DASH_id))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$blah$spec_SLASH_inputs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$blah$spec_SLASH_input),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$blah$spec_SLASH_input,cljs.core.cst$kw$blah$spec_SLASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__2745){
return cljs.core.coll_QMARK_(G__2745);
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,cljs.core.cst$kw$blah$spec_SLASH_input)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$blah$spec_SLASH_query_DASH_input_DASH_handler,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$inputs,cljs.core.cst$kw$blah$spec_SLASH_inputs),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$inputs,cljs.core.cst$kw$blah$spec_SLASH_inputs),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inputs], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$blah$spec_SLASH_inputs], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$blah$spec_SLASH_inputs], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$inputs,cljs.core.cst$kw$blah$spec_SLASH_inputs),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
blah.spec.read_port_QMARK_ = (function blah$spec$read_port_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$async$impl$protocols$ReadPort$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.ReadPort,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.ReadPort,x);
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$kw$blah$spec_SLASH_read_DASH_port,cljs.core.cst$sym$blah$spec_SLASH_read_DASH_port_QMARK_,blah.spec.read_port_QMARK_);
blah.spec.write_port_QMARK_ = (function blah$spec$write_port_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$async$impl$protocols$WritePort$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.WritePort,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.WritePort,x);
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$kw$blah$spec_SLASH_write_DASH_port,cljs.core.cst$sym$blah$spec_SLASH_write_DASH_port_QMARK_,blah.spec.write_port_QMARK_);
blah.spec.audio_context_QMARK_ = (function blah$spec$audio_context_QMARK_(x){
return (((((typeof AudioContext !== 'undefined')) && ((x instanceof AudioContext)))) || ((((typeof webkitAudioContext !== 'undefined')) && ((x instanceof webkitAudioContext)))));
});
cljs.spec.alpha.def_impl(cljs.core.cst$kw$blah$spec_SLASH_audio_DASH_context,cljs.core.cst$sym$blah$spec_SLASH_audio_DASH_context_QMARK_,blah.spec.audio_context_QMARK_);
blah.spec.session_QMARK_ = (function blah$spec$session_QMARK_(x){
return (x instanceof blah.impl.Session);
});
cljs.spec.alpha.def_impl(cljs.core.cst$kw$blah$spec_SLASH_session,cljs.core.cst$sym$blah$spec_SLASH_session_QMARK_,blah.spec.session_QMARK_);
