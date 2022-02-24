// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('blah.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('blah.impl');
goog.require('blah.spec');
goog.require('cljs.spec.alpha');
/**
 * Query for audio inputs. Calls fn-1 with a sequence
 * of inputs.
 */
blah.core.query_inputs = (function blah$core$query_inputs(fn_1){
return blah.impl.query_inputs(fn_1);
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$blah$core_SLASH_query_DASH_inputs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$fn_DASH_1,cljs.core.cst$kw$blah$spec_SLASH_query_DASH_input_DASH_handler),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$fn_DASH_1,cljs.core.cst$kw$blah$spec_SLASH_query_DASH_input_DASH_handler),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_1], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$blah$spec_SLASH_query_DASH_input_DASH_handler], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$blah$spec_SLASH_query_DASH_input_DASH_handler], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$fn_DASH_1,cljs.core.cst$kw$blah$spec_SLASH_query_DASH_input_DASH_handler),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Returns a channel that receives a sequence of inputs whenever there
 * is a change to the list of available inputs, an example being the user
 * connects or disconnects a microphone.
 * 
 * Creating an input-ch will place an initial sequence of inputs on the channel before
 * it is returned.
 * 
 * This channel should be closed when it is no longer needed. This is mostly to unbind event listeners
 * bound to the global mediaDevices object.
 * 
 * ```clojure
 * (let [inputs (input-ch)]
 *   (go-loop []
 *     (let [audio-inputs (<! inputs)]
 *       (update-ui audio-inputs))))
 * ```
 */
blah.core.input_ch = (function blah$core$input_ch(){
return blah.impl.input_ch();
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$blah$core_SLASH_input_DASH_ch,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$close_DASH_ch,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$blah$spec_SLASH_write_DASH_port)),cljs.core.cst$kw$ret,cljs.core.cst$kw$blah$spec_SLASH_read_DASH_port),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$close_DASH_ch,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$blah$spec_SLASH_write_DASH_port)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$close_DASH_ch], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(cljs.core.cst$kw$blah$spec_SLASH_write_DASH_port,cljs.core.cst$kw$blah$spec_SLASH_write_DASH_port)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$blah$spec_SLASH_write_DASH_port)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$close_DASH_ch,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$kw$blah$spec_SLASH_write_DASH_port)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$blah$spec_SLASH_read_DASH_port,cljs.core.cst$kw$blah$spec_SLASH_read_DASH_port,null,null),cljs.core.cst$kw$blah$spec_SLASH_read_DASH_port,null,null,null));
/**
 * Returns a session's underlying AudioContext object.
 * 
 * This function provides a useful convenience.
 * 
 * Many browsers prevent interaction with AudioContext until a user action
 * initiates them - i.e a user must click a button before a sound is played or
 * access to a mic is granted.
 * 
 * This function allows access to an AudioContext object that is already "warm" after
 * being created as part of starting a blah session via the [[listen]] function.
 * 
 * A typical use case might be wanting to play some audio back to a user after recording them.
 */
blah.core.audio_context = (function blah$core$audio_context(session){
return blah.impl.audio_context(session);
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$blah$core_SLASH_audio_DASH_context,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$blah$spec_SLASH_session),cljs.core.cst$kw$ret,cljs.core.cst$kw$blah$spec_SLASH_audio_DASH_context),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$blah$spec_SLASH_session),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$blah$spec_SLASH_session], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$blah$spec_SLASH_session], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$session,cljs.core.cst$kw$blah$spec_SLASH_session),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$blah$spec_SLASH_audio_DASH_context,cljs.core.cst$kw$blah$spec_SLASH_audio_DASH_context,null,null),cljs.core.cst$kw$blah$spec_SLASH_audio_DASH_context,null,null,null));
/**
 * Initiates a blah session.
 * 
 * A blah session is a core.async ReadPort that is composed of, and provides access to, an AudioContext.
 * 
 * Being a ReadPort, it is consumed like any other core.async channel.
 * 
 * The buffer size of the channel is determined by the AudioContext's sample rate. The signature for this
 * function is identical to core.async/chan expect an input is accepted in place of buf-or-n. A nil input
 * can be supplied in order to leverage the default audio input.
 * 
 * Can be given an optional transducer to process incoming audio data, and an optional exception-handler.
 * If an exception occurs during transformation exception-handler will be called with the error, and any
 * non-nil return value will be placed in the channel.
 * 
 * If no transducer is given, a default will be provided via [[blah.transforms/float32]]. This transform
 * will return a sequence of sample sequences. Each sample sequence represents an input channel:
 * 
 * ```clojure
 * ((input-channel-1-sample-1
 *   input-channel-1-sample-2
 *   input-channel-1-sample-n)
 * 
 *  (input-channel-2-sample-1
 *   input-channel-2-sample-2
 *   input-channel-2-sample-n))
 * ```
 * 
 * The channels raw data format is a js array containing Float32 array for each audio input channel:
 * 
 * ```clojure
 * (defn float32
 *   [message] ;;; message = #js [floats-for-input-channel-1, floats-for-input-channel-2, ..., floats-for-input-channel-n]
 *   (process-message))
 * ```
 */
blah.core.listen = (function blah$core$listen(var_args){
var G__2751 = arguments.length;
switch (G__2751) {
case 3:
return blah.core.listen.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return blah.core.listen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return blah.core.listen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return blah.core.listen.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(blah.core.listen.cljs$core$IFn$_invoke$arity$3 = (function (input,xform,ex_handler){
return blah.impl.listen.cljs$core$IFn$_invoke$arity$3(input,xform,ex_handler);
}));

(blah.core.listen.cljs$core$IFn$_invoke$arity$2 = (function (input,xform){
return blah.impl.listen.cljs$core$IFn$_invoke$arity$2(input,xform);
}));

(blah.core.listen.cljs$core$IFn$_invoke$arity$1 = (function (input){
return blah.impl.listen.cljs$core$IFn$_invoke$arity$1(input);
}));

(blah.core.listen.cljs$core$IFn$_invoke$arity$0 = (function (){
return blah.impl.listen.cljs$core$IFn$_invoke$arity$0();
}));

(blah.core.listen.cljs$lang$maxFixedArity = 3);

cljs.spec.alpha.def_impl(cljs.core.cst$sym$blah$core_SLASH_listen,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,cljs.core.cst$kw$null,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat),cljs.core.cst$kw$unary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$input,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$blah$spec_SLASH_input)),cljs.core.cst$kw$binary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$input,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$blah$spec_SLASH_input),cljs.core.cst$kw$xform,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.core.cst$kw$all,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$input,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$blah$spec_SLASH_input),cljs.core.cst$kw$xform,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$ex_DASH_handler,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_)),cljs.core.cst$kw$ret,cljs.core.cst$kw$blah$spec_SLASH_session),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,cljs.core.cst$kw$null,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat),cljs.core.cst$kw$unary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$input,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$blah$spec_SLASH_input)),cljs.core.cst$kw$binary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$input,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$blah$spec_SLASH_input),cljs.core.cst$kw$xform,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.core.cst$kw$all,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$input,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$blah$spec_SLASH_input),cljs.core.cst$kw$xform,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$ex_DASH_handler,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_)),cljs.spec.alpha.alt_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$null,cljs.core.cst$kw$unary,cljs.core.cst$kw$binary,cljs.core.cst$kw$all], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(cljs.core.cst$kw$blah$spec_SLASH_input,cljs.core.cst$kw$blah$spec_SLASH_input,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$blah$spec_SLASH_input)], null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.cst$kw$xform], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(cljs.core.cst$kw$blah$spec_SLASH_input,cljs.core.cst$kw$blah$spec_SLASH_input,null),cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$blah$spec_SLASH_input),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_], null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.cst$kw$xform,cljs.core.cst$kw$ex_DASH_handler], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(cljs.core.cst$kw$blah$spec_SLASH_input,cljs.core.cst$kw$blah$spec_SLASH_input,null),cljs.core.any_QMARK_,cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$blah$spec_SLASH_input),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$input,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$blah$spec_SLASH_input)),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$input,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$blah$spec_SLASH_input),cljs.core.cst$kw$xform,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$input,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$blah$spec_SLASH_input),cljs.core.cst$kw$xform,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$ex_DASH_handler,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_)], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,cljs.core.cst$kw$null,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat),cljs.core.cst$kw$unary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$input,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$blah$spec_SLASH_input)),cljs.core.cst$kw$binary,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$input,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$blah$spec_SLASH_input),cljs.core.cst$kw$xform,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.core.cst$kw$all,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$input,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,cljs.core.cst$kw$blah$spec_SLASH_input),cljs.core.cst$kw$xform,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$ex_DASH_handler,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$blah$spec_SLASH_session,cljs.core.cst$kw$blah$spec_SLASH_session,null,null),cljs.core.cst$kw$blah$spec_SLASH_session,null,null,null));
/**
 * A utility for preemptively asking for access to the microphone.
 * 
 * Returns a channel that will contain true or false based on the user's response.
 * 
 * ```clojure
 * (go
 *   (if (<! (request-permission))
 *     (do-mic-jams)
 *     (uh-oh-no-mic-access)))
 * ```
 */
blah.core.request_permission = (function blah$core$request_permission(){
return blah.impl.request_permission();
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$blah$core_SLASH_request_DASH_permission,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat),cljs.core.cst$kw$ret,cljs.core.cst$kw$blah$spec_SLASH_read_DASH_port),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat),cljs.spec.alpha.cat_impl(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$blah$spec_SLASH_read_DASH_port,cljs.core.cst$kw$blah$spec_SLASH_read_DASH_port,null,null),cljs.core.cst$kw$blah$spec_SLASH_read_DASH_port,null,null,null));
