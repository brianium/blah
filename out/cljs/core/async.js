// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
goog.scope(function(){
cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__5236 = arguments.length;
switch (G__5236) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5237 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5237 = (function (f,blockable,meta5238){
this.f = f;
this.blockable = blockable;
this.meta5238 = meta5238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async5237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5239,meta5238__$1){
var self__ = this;
var _5239__$1 = this;
return (new cljs.core.async.t_cljs$core$async5237(self__.f,self__.blockable,meta5238__$1));
}));

(cljs.core.async.t_cljs$core$async5237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5239){
var self__ = this;
var _5239__$1 = this;
return self__.meta5238;
}));

(cljs.core.async.t_cljs$core$async5237.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5237.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async5237.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async5237.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async5237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta5238], null);
}));

(cljs.core.async.t_cljs$core$async5237.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async5237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5237");

(cljs.core.async.t_cljs$core$async5237.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async5237");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5237.
 */
cljs.core.async.__GT_t_cljs$core$async5237 = (function cljs$core$async$__GT_t_cljs$core$async5237(f__$1,blockable__$1,meta5238){
return (new cljs.core.async.t_cljs$core$async5237(f__$1,blockable__$1,meta5238));
});

}

return (new cljs.core.async.t_cljs$core$async5237(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__5243 = arguments.length;
switch (G__5243) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__5246 = arguments.length;
switch (G__5246) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__5249 = arguments.length;
switch (G__5249) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_5251 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_5251) : fn1.call(null,val_5251));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_5251) : fn1.call(null,val_5251));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__5253 = arguments.length;
switch (G__5253) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___5255 = n;
var x_5256 = (0);
while(true){
if((x_5256 < n__4741__auto___5255)){
(a[x_5256] = x_5256);

var G__5257 = (x_5256 + (1));
x_5256 = G__5257;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle.call(null,a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5258 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5258 = (function (flag,meta5259){
this.flag = flag;
this.meta5259 = meta5259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async5258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5260,meta5259__$1){
var self__ = this;
var _5260__$1 = this;
return (new cljs.core.async.t_cljs$core$async5258(self__.flag,meta5259__$1));
}));

(cljs.core.async.t_cljs$core$async5258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5260){
var self__ = this;
var _5260__$1 = this;
return self__.meta5259;
}));

(cljs.core.async.t_cljs$core$async5258.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5258.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async5258.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async5258.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async5258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta5259], null);
}));

(cljs.core.async.t_cljs$core$async5258.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async5258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5258");

(cljs.core.async.t_cljs$core$async5258.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async5258");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5258.
 */
cljs.core.async.__GT_t_cljs$core$async5258 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async5258(flag__$1,meta5259){
return (new cljs.core.async.t_cljs$core$async5258(flag__$1,meta5259));
});

}

return (new cljs.core.async.t_cljs$core$async5258(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5261 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5261 = (function (flag,cb,meta5262){
this.flag = flag;
this.cb = cb;
this.meta5262 = meta5262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async5261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5263,meta5262__$1){
var self__ = this;
var _5263__$1 = this;
return (new cljs.core.async.t_cljs$core$async5261(self__.flag,self__.cb,meta5262__$1));
}));

(cljs.core.async.t_cljs$core$async5261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5263){
var self__ = this;
var _5263__$1 = this;
return self__.meta5262;
}));

(cljs.core.async.t_cljs$core$async5261.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5261.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async5261.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async5261.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async5261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta5262], null);
}));

(cljs.core.async.t_cljs$core$async5261.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async5261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5261");

(cljs.core.async.t_cljs$core$async5261.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async5261");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5261.
 */
cljs.core.async.__GT_t_cljs$core$async5261 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async5261(flag__$1,cb__$1,meta5262){
return (new cljs.core.async.t_cljs$core$async5261(flag__$1,cb__$1,meta5262));
});

}

return (new cljs.core.async.t_cljs$core$async5261(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__5264_SHARP_){
var G__5266 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__5264_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__5266) : fret.call(null,G__5266));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__5265_SHARP_){
var G__5267 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__5265_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__5267) : fret.call(null,G__5267));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__5268 = (i + (1));
i = G__5268;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___5273 = arguments.length;
var i__4865__auto___5274 = (0);
while(true){
if((i__4865__auto___5274 < len__4864__auto___5273)){
args__4870__auto__.push((arguments[i__4865__auto___5274]));

var G__5275 = (i__4865__auto___5274 + (1));
i__4865__auto___5274 = G__5275;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__5271){
var map__5272 = p__5271;
var map__5272__$1 = cljs.core.__destructure_map(map__5272);
var opts = map__5272__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq5269){
var G__5270 = cljs.core.first(seq5269);
var seq5269__$1 = cljs.core.next(seq5269);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5270,seq5269__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__5277 = arguments.length;
switch (G__5277) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__5176__auto___5324 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__5177__auto__ = (function (){var switch__5101__auto__ = (function (state_5301){
var state_val_5302 = (state_5301[(1)]);
if((state_val_5302 === (7))){
var inst_5297 = (state_5301[(2)]);
var state_5301__$1 = state_5301;
var statearr_5303_5325 = state_5301__$1;
(statearr_5303_5325[(2)] = inst_5297);

(statearr_5303_5325[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5302 === (1))){
var state_5301__$1 = state_5301;
var statearr_5304_5326 = state_5301__$1;
(statearr_5304_5326[(2)] = null);

(statearr_5304_5326[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5302 === (4))){
var inst_5280 = (state_5301[(7)]);
var inst_5280__$1 = (state_5301[(2)]);
var inst_5281 = (inst_5280__$1 == null);
var state_5301__$1 = (function (){var statearr_5305 = state_5301;
(statearr_5305[(7)] = inst_5280__$1);

return statearr_5305;
})();
if(cljs.core.truth_(inst_5281)){
var statearr_5306_5327 = state_5301__$1;
(statearr_5306_5327[(1)] = (5));

} else {
var statearr_5307_5328 = state_5301__$1;
(statearr_5307_5328[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5302 === (13))){
var state_5301__$1 = state_5301;
var statearr_5308_5329 = state_5301__$1;
(statearr_5308_5329[(2)] = null);

(statearr_5308_5329[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5302 === (6))){
var inst_5280 = (state_5301[(7)]);
var state_5301__$1 = state_5301;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_5301__$1,(11),to,inst_5280);
} else {
if((state_val_5302 === (3))){
var inst_5299 = (state_5301[(2)]);
var state_5301__$1 = state_5301;
return cljs.core.async.impl.ioc_helpers.return_chan(state_5301__$1,inst_5299);
} else {
if((state_val_5302 === (12))){
var state_5301__$1 = state_5301;
var statearr_5309_5330 = state_5301__$1;
(statearr_5309_5330[(2)] = null);

(statearr_5309_5330[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5302 === (2))){
var state_5301__$1 = state_5301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_5301__$1,(4),from);
} else {
if((state_val_5302 === (11))){
var inst_5290 = (state_5301[(2)]);
var state_5301__$1 = state_5301;
if(cljs.core.truth_(inst_5290)){
var statearr_5310_5331 = state_5301__$1;
(statearr_5310_5331[(1)] = (12));

} else {
var statearr_5311_5332 = state_5301__$1;
(statearr_5311_5332[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5302 === (9))){
var state_5301__$1 = state_5301;
var statearr_5312_5333 = state_5301__$1;
(statearr_5312_5333[(2)] = null);

(statearr_5312_5333[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5302 === (5))){
var state_5301__$1 = state_5301;
if(cljs.core.truth_(close_QMARK_)){
var statearr_5313_5334 = state_5301__$1;
(statearr_5313_5334[(1)] = (8));

} else {
var statearr_5314_5335 = state_5301__$1;
(statearr_5314_5335[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5302 === (14))){
var inst_5295 = (state_5301[(2)]);
var state_5301__$1 = state_5301;
var statearr_5315_5336 = state_5301__$1;
(statearr_5315_5336[(2)] = inst_5295);

(statearr_5315_5336[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5302 === (10))){
var inst_5287 = (state_5301[(2)]);
var state_5301__$1 = state_5301;
var statearr_5316_5337 = state_5301__$1;
(statearr_5316_5337[(2)] = inst_5287);

(statearr_5316_5337[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5302 === (8))){
var inst_5284 = cljs.core.async.close_BANG_(to);
var state_5301__$1 = state_5301;
var statearr_5317_5338 = state_5301__$1;
(statearr_5317_5338[(2)] = inst_5284);

(statearr_5317_5338[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__5102__auto__ = null;
var cljs$core$async$state_machine__5102__auto____0 = (function (){
var statearr_5318 = [null,null,null,null,null,null,null,null];
(statearr_5318[(0)] = cljs$core$async$state_machine__5102__auto__);

(statearr_5318[(1)] = (1));

return statearr_5318;
});
var cljs$core$async$state_machine__5102__auto____1 = (function (state_5301){
while(true){
var ret_value__5103__auto__ = (function (){try{while(true){
var result__5104__auto__ = switch__5101__auto__(state_5301);
if(cljs.core.keyword_identical_QMARK_(result__5104__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__5104__auto__;
}
break;
}
}catch (e5319){var ex__5105__auto__ = e5319;
var statearr_5320_5339 = state_5301;
(statearr_5320_5339[(2)] = ex__5105__auto__);


if(cljs.core.seq((state_5301[(4)]))){
var statearr_5321_5340 = state_5301;
(statearr_5321_5340[(1)] = cljs.core.first((state_5301[(4)])));

} else {
throw ex__5105__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5103__auto__,cljs.core.cst$kw$recur)){
var G__5341 = state_5301;
state_5301 = G__5341;
continue;
} else {
return ret_value__5103__auto__;
}
break;
}
});
cljs$core$async$state_machine__5102__auto__ = function(state_5301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5102__auto____1.call(this,state_5301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5102__auto____0;
cljs$core$async$state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5102__auto____1;
return cljs$core$async$state_machine__5102__auto__;
})()
})();
var state__5178__auto__ = (function (){var statearr_5322 = (f__5177__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5177__auto__.cljs$core$IFn$_invoke$arity$0() : f__5177__auto__.call(null));
(statearr_5322[(6)] = c__5176__auto___5324);

return statearr_5322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5178__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__5342){
var vec__5343 = p__5342;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5343,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5343,(1),null);
var job = vec__5343;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__5176__auto___5519 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__5177__auto__ = (function (){var switch__5101__auto__ = (function (state_5350){
var state_val_5351 = (state_5350[(1)]);
if((state_val_5351 === (1))){
var state_5350__$1 = state_5350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_5350__$1,(2),res,v);
} else {
if((state_val_5351 === (2))){
var inst_5347 = (state_5350[(2)]);
var inst_5348 = cljs.core.async.close_BANG_(res);
var state_5350__$1 = (function (){var statearr_5352 = state_5350;
(statearr_5352[(7)] = inst_5347);

return statearr_5352;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_5350__$1,inst_5348);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____0 = (function (){
var statearr_5353 = [null,null,null,null,null,null,null,null];
(statearr_5353[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__);

(statearr_5353[(1)] = (1));

return statearr_5353;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____1 = (function (state_5350){
while(true){
var ret_value__5103__auto__ = (function (){try{while(true){
var result__5104__auto__ = switch__5101__auto__(state_5350);
if(cljs.core.keyword_identical_QMARK_(result__5104__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__5104__auto__;
}
break;
}
}catch (e5354){var ex__5105__auto__ = e5354;
var statearr_5355_5520 = state_5350;
(statearr_5355_5520[(2)] = ex__5105__auto__);


if(cljs.core.seq((state_5350[(4)]))){
var statearr_5356_5521 = state_5350;
(statearr_5356_5521[(1)] = cljs.core.first((state_5350[(4)])));

} else {
throw ex__5105__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5103__auto__,cljs.core.cst$kw$recur)){
var G__5522 = state_5350;
state_5350 = G__5522;
continue;
} else {
return ret_value__5103__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__ = function(state_5350){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____1.call(this,state_5350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__;
})()
})();
var state__5178__auto__ = (function (){var statearr_5357 = (f__5177__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5177__auto__.cljs$core$IFn$_invoke$arity$0() : f__5177__auto__.call(null));
(statearr_5357[(6)] = c__5176__auto___5519);

return statearr_5357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5178__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__5358){
var vec__5359 = p__5358;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5359,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5359,(1),null);
var job = vec__5359;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___5523 = n;
var __5524 = (0);
while(true){
if((__5524 < n__4741__auto___5523)){
var G__5362_5525 = type;
var G__5362_5526__$1 = (((G__5362_5525 instanceof cljs.core.Keyword))?G__5362_5525.fqn:null);
switch (G__5362_5526__$1) {
case "compute":
var c__5176__auto___5528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__5524,c__5176__auto___5528,G__5362_5525,G__5362_5526__$1,n__4741__auto___5523,jobs,results,process,async){
return (function (){
var f__5177__auto__ = (function (){var switch__5101__auto__ = ((function (__5524,c__5176__auto___5528,G__5362_5525,G__5362_5526__$1,n__4741__auto___5523,jobs,results,process,async){
return (function (state_5375){
var state_val_5376 = (state_5375[(1)]);
if((state_val_5376 === (1))){
var state_5375__$1 = state_5375;
var statearr_5377_5529 = state_5375__$1;
(statearr_5377_5529[(2)] = null);

(statearr_5377_5529[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5376 === (2))){
var state_5375__$1 = state_5375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_5375__$1,(4),jobs);
} else {
if((state_val_5376 === (3))){
var inst_5373 = (state_5375[(2)]);
var state_5375__$1 = state_5375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_5375__$1,inst_5373);
} else {
if((state_val_5376 === (4))){
var inst_5365 = (state_5375[(2)]);
var inst_5366 = process(inst_5365);
var state_5375__$1 = state_5375;
if(cljs.core.truth_(inst_5366)){
var statearr_5378_5530 = state_5375__$1;
(statearr_5378_5530[(1)] = (5));

} else {
var statearr_5379_5531 = state_5375__$1;
(statearr_5379_5531[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5376 === (5))){
var state_5375__$1 = state_5375;
var statearr_5380_5532 = state_5375__$1;
(statearr_5380_5532[(2)] = null);

(statearr_5380_5532[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5376 === (6))){
var state_5375__$1 = state_5375;
var statearr_5381_5533 = state_5375__$1;
(statearr_5381_5533[(2)] = null);

(statearr_5381_5533[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5376 === (7))){
var inst_5371 = (state_5375[(2)]);
var state_5375__$1 = state_5375;
var statearr_5382_5534 = state_5375__$1;
(statearr_5382_5534[(2)] = inst_5371);

(statearr_5382_5534[(1)] = (3));


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
});})(__5524,c__5176__auto___5528,G__5362_5525,G__5362_5526__$1,n__4741__auto___5523,jobs,results,process,async))
;
return ((function (__5524,switch__5101__auto__,c__5176__auto___5528,G__5362_5525,G__5362_5526__$1,n__4741__auto___5523,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____0 = (function (){
var statearr_5383 = [null,null,null,null,null,null,null];
(statearr_5383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__);

(statearr_5383[(1)] = (1));

return statearr_5383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____1 = (function (state_5375){
while(true){
var ret_value__5103__auto__ = (function (){try{while(true){
var result__5104__auto__ = switch__5101__auto__(state_5375);
if(cljs.core.keyword_identical_QMARK_(result__5104__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__5104__auto__;
}
break;
}
}catch (e5384){var ex__5105__auto__ = e5384;
var statearr_5385_5535 = state_5375;
(statearr_5385_5535[(2)] = ex__5105__auto__);


if(cljs.core.seq((state_5375[(4)]))){
var statearr_5386_5536 = state_5375;
(statearr_5386_5536[(1)] = cljs.core.first((state_5375[(4)])));

} else {
throw ex__5105__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5103__auto__,cljs.core.cst$kw$recur)){
var G__5537 = state_5375;
state_5375 = G__5537;
continue;
} else {
return ret_value__5103__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__ = function(state_5375){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____1.call(this,state_5375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__;
})()
;})(__5524,switch__5101__auto__,c__5176__auto___5528,G__5362_5525,G__5362_5526__$1,n__4741__auto___5523,jobs,results,process,async))
})();
var state__5178__auto__ = (function (){var statearr_5387 = (f__5177__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5177__auto__.cljs$core$IFn$_invoke$arity$0() : f__5177__auto__.call(null));
(statearr_5387[(6)] = c__5176__auto___5528);

return statearr_5387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5178__auto__);
});})(__5524,c__5176__auto___5528,G__5362_5525,G__5362_5526__$1,n__4741__auto___5523,jobs,results,process,async))
);


break;
case "async":
var c__5176__auto___5538 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__5524,c__5176__auto___5538,G__5362_5525,G__5362_5526__$1,n__4741__auto___5523,jobs,results,process,async){
return (function (){
var f__5177__auto__ = (function (){var switch__5101__auto__ = ((function (__5524,c__5176__auto___5538,G__5362_5525,G__5362_5526__$1,n__4741__auto___5523,jobs,results,process,async){
return (function (state_5400){
var state_val_5401 = (state_5400[(1)]);
if((state_val_5401 === (1))){
var state_5400__$1 = state_5400;
var statearr_5402_5539 = state_5400__$1;
(statearr_5402_5539[(2)] = null);

(statearr_5402_5539[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5401 === (2))){
var state_5400__$1 = state_5400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_5400__$1,(4),jobs);
} else {
if((state_val_5401 === (3))){
var inst_5398 = (state_5400[(2)]);
var state_5400__$1 = state_5400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_5400__$1,inst_5398);
} else {
if((state_val_5401 === (4))){
var inst_5390 = (state_5400[(2)]);
var inst_5391 = async(inst_5390);
var state_5400__$1 = state_5400;
if(cljs.core.truth_(inst_5391)){
var statearr_5403_5540 = state_5400__$1;
(statearr_5403_5540[(1)] = (5));

} else {
var statearr_5404_5541 = state_5400__$1;
(statearr_5404_5541[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5401 === (5))){
var state_5400__$1 = state_5400;
var statearr_5405_5542 = state_5400__$1;
(statearr_5405_5542[(2)] = null);

(statearr_5405_5542[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5401 === (6))){
var state_5400__$1 = state_5400;
var statearr_5406_5543 = state_5400__$1;
(statearr_5406_5543[(2)] = null);

(statearr_5406_5543[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5401 === (7))){
var inst_5396 = (state_5400[(2)]);
var state_5400__$1 = state_5400;
var statearr_5407_5544 = state_5400__$1;
(statearr_5407_5544[(2)] = inst_5396);

(statearr_5407_5544[(1)] = (3));


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
});})(__5524,c__5176__auto___5538,G__5362_5525,G__5362_5526__$1,n__4741__auto___5523,jobs,results,process,async))
;
return ((function (__5524,switch__5101__auto__,c__5176__auto___5538,G__5362_5525,G__5362_5526__$1,n__4741__auto___5523,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____0 = (function (){
var statearr_5408 = [null,null,null,null,null,null,null];
(statearr_5408[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__);

(statearr_5408[(1)] = (1));

return statearr_5408;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____1 = (function (state_5400){
while(true){
var ret_value__5103__auto__ = (function (){try{while(true){
var result__5104__auto__ = switch__5101__auto__(state_5400);
if(cljs.core.keyword_identical_QMARK_(result__5104__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__5104__auto__;
}
break;
}
}catch (e5409){var ex__5105__auto__ = e5409;
var statearr_5410_5545 = state_5400;
(statearr_5410_5545[(2)] = ex__5105__auto__);


if(cljs.core.seq((state_5400[(4)]))){
var statearr_5411_5546 = state_5400;
(statearr_5411_5546[(1)] = cljs.core.first((state_5400[(4)])));

} else {
throw ex__5105__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5103__auto__,cljs.core.cst$kw$recur)){
var G__5547 = state_5400;
state_5400 = G__5547;
continue;
} else {
return ret_value__5103__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__ = function(state_5400){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____1.call(this,state_5400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__;
})()
;})(__5524,switch__5101__auto__,c__5176__auto___5538,G__5362_5525,G__5362_5526__$1,n__4741__auto___5523,jobs,results,process,async))
})();
var state__5178__auto__ = (function (){var statearr_5412 = (f__5177__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5177__auto__.cljs$core$IFn$_invoke$arity$0() : f__5177__auto__.call(null));
(statearr_5412[(6)] = c__5176__auto___5538);

return statearr_5412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5178__auto__);
});})(__5524,c__5176__auto___5538,G__5362_5525,G__5362_5526__$1,n__4741__auto___5523,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5362_5526__$1)].join('')));

}

var G__5548 = (__5524 + (1));
__5524 = G__5548;
continue;
} else {
}
break;
}

var c__5176__auto___5549 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__5177__auto__ = (function (){var switch__5101__auto__ = (function (state_5434){
var state_val_5435 = (state_5434[(1)]);
if((state_val_5435 === (7))){
var inst_5430 = (state_5434[(2)]);
var state_5434__$1 = state_5434;
var statearr_5436_5550 = state_5434__$1;
(statearr_5436_5550[(2)] = inst_5430);

(statearr_5436_5550[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5435 === (1))){
var state_5434__$1 = state_5434;
var statearr_5437_5551 = state_5434__$1;
(statearr_5437_5551[(2)] = null);

(statearr_5437_5551[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5435 === (4))){
var inst_5415 = (state_5434[(7)]);
var inst_5415__$1 = (state_5434[(2)]);
var inst_5416 = (inst_5415__$1 == null);
var state_5434__$1 = (function (){var statearr_5438 = state_5434;
(statearr_5438[(7)] = inst_5415__$1);

return statearr_5438;
})();
if(cljs.core.truth_(inst_5416)){
var statearr_5439_5552 = state_5434__$1;
(statearr_5439_5552[(1)] = (5));

} else {
var statearr_5440_5553 = state_5434__$1;
(statearr_5440_5553[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5435 === (6))){
var inst_5415 = (state_5434[(7)]);
var inst_5420 = (state_5434[(8)]);
var inst_5420__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_5421 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5422 = [inst_5415,inst_5420__$1];
var inst_5423 = (new cljs.core.PersistentVector(null,2,(5),inst_5421,inst_5422,null));
var state_5434__$1 = (function (){var statearr_5441 = state_5434;
(statearr_5441[(8)] = inst_5420__$1);

return statearr_5441;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_5434__$1,(8),jobs,inst_5423);
} else {
if((state_val_5435 === (3))){
var inst_5432 = (state_5434[(2)]);
var state_5434__$1 = state_5434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_5434__$1,inst_5432);
} else {
if((state_val_5435 === (2))){
var state_5434__$1 = state_5434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_5434__$1,(4),from);
} else {
if((state_val_5435 === (9))){
var inst_5427 = (state_5434[(2)]);
var state_5434__$1 = (function (){var statearr_5442 = state_5434;
(statearr_5442[(9)] = inst_5427);

return statearr_5442;
})();
var statearr_5443_5554 = state_5434__$1;
(statearr_5443_5554[(2)] = null);

(statearr_5443_5554[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5435 === (5))){
var inst_5418 = cljs.core.async.close_BANG_(jobs);
var state_5434__$1 = state_5434;
var statearr_5444_5555 = state_5434__$1;
(statearr_5444_5555[(2)] = inst_5418);

(statearr_5444_5555[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5435 === (8))){
var inst_5420 = (state_5434[(8)]);
var inst_5425 = (state_5434[(2)]);
var state_5434__$1 = (function (){var statearr_5445 = state_5434;
(statearr_5445[(10)] = inst_5425);

return statearr_5445;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_5434__$1,(9),results,inst_5420);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____0 = (function (){
var statearr_5446 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5446[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__);

(statearr_5446[(1)] = (1));

return statearr_5446;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____1 = (function (state_5434){
while(true){
var ret_value__5103__auto__ = (function (){try{while(true){
var result__5104__auto__ = switch__5101__auto__(state_5434);
if(cljs.core.keyword_identical_QMARK_(result__5104__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__5104__auto__;
}
break;
}
}catch (e5447){var ex__5105__auto__ = e5447;
var statearr_5448_5556 = state_5434;
(statearr_5448_5556[(2)] = ex__5105__auto__);


if(cljs.core.seq((state_5434[(4)]))){
var statearr_5449_5557 = state_5434;
(statearr_5449_5557[(1)] = cljs.core.first((state_5434[(4)])));

} else {
throw ex__5105__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5103__auto__,cljs.core.cst$kw$recur)){
var G__5558 = state_5434;
state_5434 = G__5558;
continue;
} else {
return ret_value__5103__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__ = function(state_5434){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____1.call(this,state_5434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__;
})()
})();
var state__5178__auto__ = (function (){var statearr_5450 = (f__5177__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5177__auto__.cljs$core$IFn$_invoke$arity$0() : f__5177__auto__.call(null));
(statearr_5450[(6)] = c__5176__auto___5549);

return statearr_5450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5178__auto__);
}));


var c__5176__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__5177__auto__ = (function (){var switch__5101__auto__ = (function (state_5488){
var state_val_5489 = (state_5488[(1)]);
if((state_val_5489 === (7))){
var inst_5484 = (state_5488[(2)]);
var state_5488__$1 = state_5488;
var statearr_5490_5559 = state_5488__$1;
(statearr_5490_5559[(2)] = inst_5484);

(statearr_5490_5559[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5489 === (20))){
var state_5488__$1 = state_5488;
var statearr_5491_5560 = state_5488__$1;
(statearr_5491_5560[(2)] = null);

(statearr_5491_5560[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5489 === (1))){
var state_5488__$1 = state_5488;
var statearr_5492_5561 = state_5488__$1;
(statearr_5492_5561[(2)] = null);

(statearr_5492_5561[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5489 === (4))){
var inst_5453 = (state_5488[(7)]);
var inst_5453__$1 = (state_5488[(2)]);
var inst_5454 = (inst_5453__$1 == null);
var state_5488__$1 = (function (){var statearr_5493 = state_5488;
(statearr_5493[(7)] = inst_5453__$1);

return statearr_5493;
})();
if(cljs.core.truth_(inst_5454)){
var statearr_5494_5562 = state_5488__$1;
(statearr_5494_5562[(1)] = (5));

} else {
var statearr_5495_5563 = state_5488__$1;
(statearr_5495_5563[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5489 === (15))){
var inst_5466 = (state_5488[(8)]);
var state_5488__$1 = state_5488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_5488__$1,(18),to,inst_5466);
} else {
if((state_val_5489 === (21))){
var inst_5479 = (state_5488[(2)]);
var state_5488__$1 = state_5488;
var statearr_5496_5564 = state_5488__$1;
(statearr_5496_5564[(2)] = inst_5479);

(statearr_5496_5564[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5489 === (13))){
var inst_5481 = (state_5488[(2)]);
var state_5488__$1 = (function (){var statearr_5497 = state_5488;
(statearr_5497[(9)] = inst_5481);

return statearr_5497;
})();
var statearr_5498_5565 = state_5488__$1;
(statearr_5498_5565[(2)] = null);

(statearr_5498_5565[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5489 === (6))){
var inst_5453 = (state_5488[(7)]);
var state_5488__$1 = state_5488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_5488__$1,(11),inst_5453);
} else {
if((state_val_5489 === (17))){
var inst_5474 = (state_5488[(2)]);
var state_5488__$1 = state_5488;
if(cljs.core.truth_(inst_5474)){
var statearr_5499_5566 = state_5488__$1;
(statearr_5499_5566[(1)] = (19));

} else {
var statearr_5500_5567 = state_5488__$1;
(statearr_5500_5567[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5489 === (3))){
var inst_5486 = (state_5488[(2)]);
var state_5488__$1 = state_5488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_5488__$1,inst_5486);
} else {
if((state_val_5489 === (12))){
var inst_5463 = (state_5488[(10)]);
var state_5488__$1 = state_5488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_5488__$1,(14),inst_5463);
} else {
if((state_val_5489 === (2))){
var state_5488__$1 = state_5488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_5488__$1,(4),results);
} else {
if((state_val_5489 === (19))){
var state_5488__$1 = state_5488;
var statearr_5501_5568 = state_5488__$1;
(statearr_5501_5568[(2)] = null);

(statearr_5501_5568[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5489 === (11))){
var inst_5463 = (state_5488[(2)]);
var state_5488__$1 = (function (){var statearr_5502 = state_5488;
(statearr_5502[(10)] = inst_5463);

return statearr_5502;
})();
var statearr_5503_5569 = state_5488__$1;
(statearr_5503_5569[(2)] = null);

(statearr_5503_5569[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5489 === (9))){
var state_5488__$1 = state_5488;
var statearr_5504_5570 = state_5488__$1;
(statearr_5504_5570[(2)] = null);

(statearr_5504_5570[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5489 === (5))){
var state_5488__$1 = state_5488;
if(cljs.core.truth_(close_QMARK_)){
var statearr_5505_5571 = state_5488__$1;
(statearr_5505_5571[(1)] = (8));

} else {
var statearr_5506_5572 = state_5488__$1;
(statearr_5506_5572[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5489 === (14))){
var inst_5468 = (state_5488[(11)]);
var inst_5466 = (state_5488[(8)]);
var inst_5466__$1 = (state_5488[(2)]);
var inst_5467 = (inst_5466__$1 == null);
var inst_5468__$1 = cljs.core.not(inst_5467);
var state_5488__$1 = (function (){var statearr_5507 = state_5488;
(statearr_5507[(11)] = inst_5468__$1);

(statearr_5507[(8)] = inst_5466__$1);

return statearr_5507;
})();
if(inst_5468__$1){
var statearr_5508_5573 = state_5488__$1;
(statearr_5508_5573[(1)] = (15));

} else {
var statearr_5509_5574 = state_5488__$1;
(statearr_5509_5574[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5489 === (16))){
var inst_5468 = (state_5488[(11)]);
var state_5488__$1 = state_5488;
var statearr_5510_5575 = state_5488__$1;
(statearr_5510_5575[(2)] = inst_5468);

(statearr_5510_5575[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5489 === (10))){
var inst_5460 = (state_5488[(2)]);
var state_5488__$1 = state_5488;
var statearr_5511_5576 = state_5488__$1;
(statearr_5511_5576[(2)] = inst_5460);

(statearr_5511_5576[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5489 === (18))){
var inst_5471 = (state_5488[(2)]);
var state_5488__$1 = state_5488;
var statearr_5512_5577 = state_5488__$1;
(statearr_5512_5577[(2)] = inst_5471);

(statearr_5512_5577[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5489 === (8))){
var inst_5457 = cljs.core.async.close_BANG_(to);
var state_5488__$1 = state_5488;
var statearr_5513_5578 = state_5488__$1;
(statearr_5513_5578[(2)] = inst_5457);

(statearr_5513_5578[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____0 = (function (){
var statearr_5514 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5514[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__);

(statearr_5514[(1)] = (1));

return statearr_5514;
});
var cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____1 = (function (state_5488){
while(true){
var ret_value__5103__auto__ = (function (){try{while(true){
var result__5104__auto__ = switch__5101__auto__(state_5488);
if(cljs.core.keyword_identical_QMARK_(result__5104__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__5104__auto__;
}
break;
}
}catch (e5515){var ex__5105__auto__ = e5515;
var statearr_5516_5579 = state_5488;
(statearr_5516_5579[(2)] = ex__5105__auto__);


if(cljs.core.seq((state_5488[(4)]))){
var statearr_5517_5580 = state_5488;
(statearr_5517_5580[(1)] = cljs.core.first((state_5488[(4)])));

} else {
throw ex__5105__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5103__auto__,cljs.core.cst$kw$recur)){
var G__5581 = state_5488;
state_5488 = G__5581;
continue;
} else {
return ret_value__5103__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__ = function(state_5488){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____1.call(this,state_5488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__5102__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__5102__auto__;
})()
})();
var state__5178__auto__ = (function (){var statearr_5518 = (f__5177__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5177__auto__.cljs$core$IFn$_invoke$arity$0() : f__5177__auto__.call(null));
(statearr_5518[(6)] = c__5176__auto__);

return statearr_5518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5178__auto__);
}));

return c__5176__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__5583 = arguments.length;
switch (G__5583) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__5586 = arguments.length;
switch (G__5586) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__5589 = arguments.length;
switch (G__5589) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__5176__auto___5639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__5177__auto__ = (function (){var switch__5101__auto__ = (function (state_5615){
var state_val_5616 = (state_5615[(1)]);
if((state_val_5616 === (7))){
var inst_5611 = (state_5615[(2)]);
var state_5615__$1 = state_5615;
var statearr_5617_5640 = state_5615__$1;
(statearr_5617_5640[(2)] = inst_5611);

(statearr_5617_5640[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5616 === (1))){
var state_5615__$1 = state_5615;
var statearr_5618_5641 = state_5615__$1;
(statearr_5618_5641[(2)] = null);

(statearr_5618_5641[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5616 === (4))){
var inst_5592 = (state_5615[(7)]);
var inst_5592__$1 = (state_5615[(2)]);
var inst_5593 = (inst_5592__$1 == null);
var state_5615__$1 = (function (){var statearr_5619 = state_5615;
(statearr_5619[(7)] = inst_5592__$1);

return statearr_5619;
})();
if(cljs.core.truth_(inst_5593)){
var statearr_5620_5642 = state_5615__$1;
(statearr_5620_5642[(1)] = (5));

} else {
var statearr_5621_5643 = state_5615__$1;
(statearr_5621_5643[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5616 === (13))){
var state_5615__$1 = state_5615;
var statearr_5622_5644 = state_5615__$1;
(statearr_5622_5644[(2)] = null);

(statearr_5622_5644[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5616 === (6))){
var inst_5592 = (state_5615[(7)]);
var inst_5598 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_5592) : p.call(null,inst_5592));
var state_5615__$1 = state_5615;
if(cljs.core.truth_(inst_5598)){
var statearr_5623_5645 = state_5615__$1;
(statearr_5623_5645[(1)] = (9));

} else {
var statearr_5624_5646 = state_5615__$1;
(statearr_5624_5646[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5616 === (3))){
var inst_5613 = (state_5615[(2)]);
var state_5615__$1 = state_5615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_5615__$1,inst_5613);
} else {
if((state_val_5616 === (12))){
var state_5615__$1 = state_5615;
var statearr_5625_5647 = state_5615__$1;
(statearr_5625_5647[(2)] = null);

(statearr_5625_5647[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5616 === (2))){
var state_5615__$1 = state_5615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_5615__$1,(4),ch);
} else {
if((state_val_5616 === (11))){
var inst_5592 = (state_5615[(7)]);
var inst_5602 = (state_5615[(2)]);
var state_5615__$1 = state_5615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_5615__$1,(8),inst_5602,inst_5592);
} else {
if((state_val_5616 === (9))){
var state_5615__$1 = state_5615;
var statearr_5626_5648 = state_5615__$1;
(statearr_5626_5648[(2)] = tc);

(statearr_5626_5648[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5616 === (5))){
var inst_5595 = cljs.core.async.close_BANG_(tc);
var inst_5596 = cljs.core.async.close_BANG_(fc);
var state_5615__$1 = (function (){var statearr_5627 = state_5615;
(statearr_5627[(8)] = inst_5595);

return statearr_5627;
})();
var statearr_5628_5649 = state_5615__$1;
(statearr_5628_5649[(2)] = inst_5596);

(statearr_5628_5649[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5616 === (14))){
var inst_5609 = (state_5615[(2)]);
var state_5615__$1 = state_5615;
var statearr_5629_5650 = state_5615__$1;
(statearr_5629_5650[(2)] = inst_5609);

(statearr_5629_5650[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5616 === (10))){
var state_5615__$1 = state_5615;
var statearr_5630_5651 = state_5615__$1;
(statearr_5630_5651[(2)] = fc);

(statearr_5630_5651[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5616 === (8))){
var inst_5604 = (state_5615[(2)]);
var state_5615__$1 = state_5615;
if(cljs.core.truth_(inst_5604)){
var statearr_5631_5652 = state_5615__$1;
(statearr_5631_5652[(1)] = (12));

} else {
var statearr_5632_5653 = state_5615__$1;
(statearr_5632_5653[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__5102__auto__ = null;
var cljs$core$async$state_machine__5102__auto____0 = (function (){
var statearr_5633 = [null,null,null,null,null,null,null,null,null];
(statearr_5633[(0)] = cljs$core$async$state_machine__5102__auto__);

(statearr_5633[(1)] = (1));

return statearr_5633;
});
var cljs$core$async$state_machine__5102__auto____1 = (function (state_5615){
while(true){
var ret_value__5103__auto__ = (function (){try{while(true){
var result__5104__auto__ = switch__5101__auto__(state_5615);
if(cljs.core.keyword_identical_QMARK_(result__5104__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__5104__auto__;
}
break;
}
}catch (e5634){var ex__5105__auto__ = e5634;
var statearr_5635_5654 = state_5615;
(statearr_5635_5654[(2)] = ex__5105__auto__);


if(cljs.core.seq((state_5615[(4)]))){
var statearr_5636_5655 = state_5615;
(statearr_5636_5655[(1)] = cljs.core.first((state_5615[(4)])));

} else {
throw ex__5105__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5103__auto__,cljs.core.cst$kw$recur)){
var G__5656 = state_5615;
state_5615 = G__5656;
continue;
} else {
return ret_value__5103__auto__;
}
break;
}
});
cljs$core$async$state_machine__5102__auto__ = function(state_5615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5102__auto____1.call(this,state_5615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5102__auto____0;
cljs$core$async$state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5102__auto____1;
return cljs$core$async$state_machine__5102__auto__;
})()
})();
var state__5178__auto__ = (function (){var statearr_5637 = (f__5177__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5177__auto__.cljs$core$IFn$_invoke$arity$0() : f__5177__auto__.call(null));
(statearr_5637[(6)] = c__5176__auto___5639);

return statearr_5637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5178__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__5176__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__5177__auto__ = (function (){var switch__5101__auto__ = (function (state_5678){
var state_val_5679 = (state_5678[(1)]);
if((state_val_5679 === (7))){
var inst_5674 = (state_5678[(2)]);
var state_5678__$1 = state_5678;
var statearr_5680_5699 = state_5678__$1;
(statearr_5680_5699[(2)] = inst_5674);

(statearr_5680_5699[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5679 === (1))){
var inst_5657 = init;
var inst_5658 = inst_5657;
var state_5678__$1 = (function (){var statearr_5681 = state_5678;
(statearr_5681[(7)] = inst_5658);

return statearr_5681;
})();
var statearr_5682_5700 = state_5678__$1;
(statearr_5682_5700[(2)] = null);

(statearr_5682_5700[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5679 === (4))){
var inst_5661 = (state_5678[(8)]);
var inst_5661__$1 = (state_5678[(2)]);
var inst_5662 = (inst_5661__$1 == null);
var state_5678__$1 = (function (){var statearr_5683 = state_5678;
(statearr_5683[(8)] = inst_5661__$1);

return statearr_5683;
})();
if(cljs.core.truth_(inst_5662)){
var statearr_5684_5701 = state_5678__$1;
(statearr_5684_5701[(1)] = (5));

} else {
var statearr_5685_5702 = state_5678__$1;
(statearr_5685_5702[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5679 === (6))){
var inst_5665 = (state_5678[(9)]);
var inst_5658 = (state_5678[(7)]);
var inst_5661 = (state_5678[(8)]);
var inst_5665__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_5658,inst_5661) : f.call(null,inst_5658,inst_5661));
var inst_5666 = cljs.core.reduced_QMARK_(inst_5665__$1);
var state_5678__$1 = (function (){var statearr_5686 = state_5678;
(statearr_5686[(9)] = inst_5665__$1);

return statearr_5686;
})();
if(inst_5666){
var statearr_5687_5703 = state_5678__$1;
(statearr_5687_5703[(1)] = (8));

} else {
var statearr_5688_5704 = state_5678__$1;
(statearr_5688_5704[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5679 === (3))){
var inst_5676 = (state_5678[(2)]);
var state_5678__$1 = state_5678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_5678__$1,inst_5676);
} else {
if((state_val_5679 === (2))){
var state_5678__$1 = state_5678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_5678__$1,(4),ch);
} else {
if((state_val_5679 === (9))){
var inst_5665 = (state_5678[(9)]);
var inst_5658 = inst_5665;
var state_5678__$1 = (function (){var statearr_5689 = state_5678;
(statearr_5689[(7)] = inst_5658);

return statearr_5689;
})();
var statearr_5690_5705 = state_5678__$1;
(statearr_5690_5705[(2)] = null);

(statearr_5690_5705[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5679 === (5))){
var inst_5658 = (state_5678[(7)]);
var state_5678__$1 = state_5678;
var statearr_5691_5706 = state_5678__$1;
(statearr_5691_5706[(2)] = inst_5658);

(statearr_5691_5706[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5679 === (10))){
var inst_5672 = (state_5678[(2)]);
var state_5678__$1 = state_5678;
var statearr_5692_5707 = state_5678__$1;
(statearr_5692_5707[(2)] = inst_5672);

(statearr_5692_5707[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5679 === (8))){
var inst_5665 = (state_5678[(9)]);
var inst_5668 = cljs.core.deref(inst_5665);
var state_5678__$1 = state_5678;
var statearr_5693_5708 = state_5678__$1;
(statearr_5693_5708[(2)] = inst_5668);

(statearr_5693_5708[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__5102__auto__ = null;
var cljs$core$async$reduce_$_state_machine__5102__auto____0 = (function (){
var statearr_5694 = [null,null,null,null,null,null,null,null,null,null];
(statearr_5694[(0)] = cljs$core$async$reduce_$_state_machine__5102__auto__);

(statearr_5694[(1)] = (1));

return statearr_5694;
});
var cljs$core$async$reduce_$_state_machine__5102__auto____1 = (function (state_5678){
while(true){
var ret_value__5103__auto__ = (function (){try{while(true){
var result__5104__auto__ = switch__5101__auto__(state_5678);
if(cljs.core.keyword_identical_QMARK_(result__5104__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__5104__auto__;
}
break;
}
}catch (e5695){var ex__5105__auto__ = e5695;
var statearr_5696_5709 = state_5678;
(statearr_5696_5709[(2)] = ex__5105__auto__);


if(cljs.core.seq((state_5678[(4)]))){
var statearr_5697_5710 = state_5678;
(statearr_5697_5710[(1)] = cljs.core.first((state_5678[(4)])));

} else {
throw ex__5105__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5103__auto__,cljs.core.cst$kw$recur)){
var G__5711 = state_5678;
state_5678 = G__5711;
continue;
} else {
return ret_value__5103__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__5102__auto__ = function(state_5678){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__5102__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__5102__auto____1.call(this,state_5678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__5102__auto____0;
cljs$core$async$reduce_$_state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__5102__auto____1;
return cljs$core$async$reduce_$_state_machine__5102__auto__;
})()
})();
var state__5178__auto__ = (function (){var statearr_5698 = (f__5177__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5177__auto__.cljs$core$IFn$_invoke$arity$0() : f__5177__auto__.call(null));
(statearr_5698[(6)] = c__5176__auto__);

return statearr_5698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5178__auto__);
}));

return c__5176__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__5176__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__5177__auto__ = (function (){var switch__5101__auto__ = (function (state_5717){
var state_val_5718 = (state_5717[(1)]);
if((state_val_5718 === (1))){
var inst_5712 = cljs.core.async.reduce(f__$1,init,ch);
var state_5717__$1 = state_5717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_5717__$1,(2),inst_5712);
} else {
if((state_val_5718 === (2))){
var inst_5714 = (state_5717[(2)]);
var inst_5715 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_5714) : f__$1.call(null,inst_5714));
var state_5717__$1 = state_5717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_5717__$1,inst_5715);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__5102__auto__ = null;
var cljs$core$async$transduce_$_state_machine__5102__auto____0 = (function (){
var statearr_5719 = [null,null,null,null,null,null,null];
(statearr_5719[(0)] = cljs$core$async$transduce_$_state_machine__5102__auto__);

(statearr_5719[(1)] = (1));

return statearr_5719;
});
var cljs$core$async$transduce_$_state_machine__5102__auto____1 = (function (state_5717){
while(true){
var ret_value__5103__auto__ = (function (){try{while(true){
var result__5104__auto__ = switch__5101__auto__(state_5717);
if(cljs.core.keyword_identical_QMARK_(result__5104__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__5104__auto__;
}
break;
}
}catch (e5720){var ex__5105__auto__ = e5720;
var statearr_5721_5724 = state_5717;
(statearr_5721_5724[(2)] = ex__5105__auto__);


if(cljs.core.seq((state_5717[(4)]))){
var statearr_5722_5725 = state_5717;
(statearr_5722_5725[(1)] = cljs.core.first((state_5717[(4)])));

} else {
throw ex__5105__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5103__auto__,cljs.core.cst$kw$recur)){
var G__5726 = state_5717;
state_5717 = G__5726;
continue;
} else {
return ret_value__5103__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__5102__auto__ = function(state_5717){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__5102__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__5102__auto____1.call(this,state_5717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__5102__auto____0;
cljs$core$async$transduce_$_state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__5102__auto____1;
return cljs$core$async$transduce_$_state_machine__5102__auto__;
})()
})();
var state__5178__auto__ = (function (){var statearr_5723 = (f__5177__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5177__auto__.cljs$core$IFn$_invoke$arity$0() : f__5177__auto__.call(null));
(statearr_5723[(6)] = c__5176__auto__);

return statearr_5723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5178__auto__);
}));

return c__5176__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__5728 = arguments.length;
switch (G__5728) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__5176__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__5177__auto__ = (function (){var switch__5101__auto__ = (function (state_5753){
var state_val_5754 = (state_5753[(1)]);
if((state_val_5754 === (7))){
var inst_5735 = (state_5753[(2)]);
var state_5753__$1 = state_5753;
var statearr_5755_5777 = state_5753__$1;
(statearr_5755_5777[(2)] = inst_5735);

(statearr_5755_5777[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5754 === (1))){
var inst_5729 = cljs.core.seq(coll);
var inst_5730 = inst_5729;
var state_5753__$1 = (function (){var statearr_5756 = state_5753;
(statearr_5756[(7)] = inst_5730);

return statearr_5756;
})();
var statearr_5757_5778 = state_5753__$1;
(statearr_5757_5778[(2)] = null);

(statearr_5757_5778[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5754 === (4))){
var inst_5730 = (state_5753[(7)]);
var inst_5733 = cljs.core.first(inst_5730);
var state_5753__$1 = state_5753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_5753__$1,(7),ch,inst_5733);
} else {
if((state_val_5754 === (13))){
var inst_5747 = (state_5753[(2)]);
var state_5753__$1 = state_5753;
var statearr_5758_5779 = state_5753__$1;
(statearr_5758_5779[(2)] = inst_5747);

(statearr_5758_5779[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5754 === (6))){
var inst_5738 = (state_5753[(2)]);
var state_5753__$1 = state_5753;
if(cljs.core.truth_(inst_5738)){
var statearr_5759_5780 = state_5753__$1;
(statearr_5759_5780[(1)] = (8));

} else {
var statearr_5760_5781 = state_5753__$1;
(statearr_5760_5781[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5754 === (3))){
var inst_5751 = (state_5753[(2)]);
var state_5753__$1 = state_5753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_5753__$1,inst_5751);
} else {
if((state_val_5754 === (12))){
var state_5753__$1 = state_5753;
var statearr_5761_5782 = state_5753__$1;
(statearr_5761_5782[(2)] = null);

(statearr_5761_5782[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5754 === (2))){
var inst_5730 = (state_5753[(7)]);
var state_5753__$1 = state_5753;
if(cljs.core.truth_(inst_5730)){
var statearr_5762_5783 = state_5753__$1;
(statearr_5762_5783[(1)] = (4));

} else {
var statearr_5763_5784 = state_5753__$1;
(statearr_5763_5784[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5754 === (11))){
var inst_5744 = cljs.core.async.close_BANG_(ch);
var state_5753__$1 = state_5753;
var statearr_5764_5785 = state_5753__$1;
(statearr_5764_5785[(2)] = inst_5744);

(statearr_5764_5785[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5754 === (9))){
var state_5753__$1 = state_5753;
if(cljs.core.truth_(close_QMARK_)){
var statearr_5765_5786 = state_5753__$1;
(statearr_5765_5786[(1)] = (11));

} else {
var statearr_5766_5787 = state_5753__$1;
(statearr_5766_5787[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5754 === (5))){
var inst_5730 = (state_5753[(7)]);
var state_5753__$1 = state_5753;
var statearr_5767_5788 = state_5753__$1;
(statearr_5767_5788[(2)] = inst_5730);

(statearr_5767_5788[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5754 === (10))){
var inst_5749 = (state_5753[(2)]);
var state_5753__$1 = state_5753;
var statearr_5768_5789 = state_5753__$1;
(statearr_5768_5789[(2)] = inst_5749);

(statearr_5768_5789[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5754 === (8))){
var inst_5730 = (state_5753[(7)]);
var inst_5740 = cljs.core.next(inst_5730);
var inst_5730__$1 = inst_5740;
var state_5753__$1 = (function (){var statearr_5769 = state_5753;
(statearr_5769[(7)] = inst_5730__$1);

return statearr_5769;
})();
var statearr_5770_5790 = state_5753__$1;
(statearr_5770_5790[(2)] = null);

(statearr_5770_5790[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__5102__auto__ = null;
var cljs$core$async$state_machine__5102__auto____0 = (function (){
var statearr_5771 = [null,null,null,null,null,null,null,null];
(statearr_5771[(0)] = cljs$core$async$state_machine__5102__auto__);

(statearr_5771[(1)] = (1));

return statearr_5771;
});
var cljs$core$async$state_machine__5102__auto____1 = (function (state_5753){
while(true){
var ret_value__5103__auto__ = (function (){try{while(true){
var result__5104__auto__ = switch__5101__auto__(state_5753);
if(cljs.core.keyword_identical_QMARK_(result__5104__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__5104__auto__;
}
break;
}
}catch (e5772){var ex__5105__auto__ = e5772;
var statearr_5773_5791 = state_5753;
(statearr_5773_5791[(2)] = ex__5105__auto__);


if(cljs.core.seq((state_5753[(4)]))){
var statearr_5774_5792 = state_5753;
(statearr_5774_5792[(1)] = cljs.core.first((state_5753[(4)])));

} else {
throw ex__5105__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5103__auto__,cljs.core.cst$kw$recur)){
var G__5793 = state_5753;
state_5753 = G__5793;
continue;
} else {
return ret_value__5103__auto__;
}
break;
}
});
cljs$core$async$state_machine__5102__auto__ = function(state_5753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5102__auto____1.call(this,state_5753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5102__auto____0;
cljs$core$async$state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5102__auto____1;
return cljs$core$async$state_machine__5102__auto__;
})()
})();
var state__5178__auto__ = (function (){var statearr_5775 = (f__5177__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5177__auto__.cljs$core$IFn$_invoke$arity$0() : f__5177__auto__.call(null));
(statearr_5775[(6)] = c__5176__auto__);

return statearr_5775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5178__auto__);
}));

return c__5176__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__5795 = arguments.length;
switch (G__5795) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_5797 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_5797(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_5798 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_5798(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_5799 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_5799(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_5800 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_5800(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5801 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5801 = (function (ch,cs,meta5802){
this.ch = ch;
this.cs = cs;
this.meta5802 = meta5802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async5801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5803,meta5802__$1){
var self__ = this;
var _5803__$1 = this;
return (new cljs.core.async.t_cljs$core$async5801(self__.ch,self__.cs,meta5802__$1));
}));

(cljs.core.async.t_cljs$core$async5801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5803){
var self__ = this;
var _5803__$1 = this;
return self__.meta5802;
}));

(cljs.core.async.t_cljs$core$async5801.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5801.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async5801.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5801.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async5801.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async5801.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async5801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta5802], null);
}));

(cljs.core.async.t_cljs$core$async5801.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async5801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5801");

(cljs.core.async.t_cljs$core$async5801.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async5801");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5801.
 */
cljs.core.async.__GT_t_cljs$core$async5801 = (function cljs$core$async$mult_$___GT_t_cljs$core$async5801(ch__$1,cs__$1,meta5802){
return (new cljs.core.async.t_cljs$core$async5801(ch__$1,cs__$1,meta5802));
});

}

return (new cljs.core.async.t_cljs$core$async5801(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__5176__auto___6020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__5177__auto__ = (function (){var switch__5101__auto__ = (function (state_5936){
var state_val_5937 = (state_5936[(1)]);
if((state_val_5937 === (7))){
var inst_5932 = (state_5936[(2)]);
var state_5936__$1 = state_5936;
var statearr_5938_6021 = state_5936__$1;
(statearr_5938_6021[(2)] = inst_5932);

(statearr_5938_6021[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (20))){
var inst_5837 = (state_5936[(7)]);
var inst_5849 = cljs.core.first(inst_5837);
var inst_5850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_5849,(0),null);
var inst_5851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_5849,(1),null);
var state_5936__$1 = (function (){var statearr_5939 = state_5936;
(statearr_5939[(8)] = inst_5850);

return statearr_5939;
})();
if(cljs.core.truth_(inst_5851)){
var statearr_5940_6022 = state_5936__$1;
(statearr_5940_6022[(1)] = (22));

} else {
var statearr_5941_6023 = state_5936__$1;
(statearr_5941_6023[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (27))){
var inst_5879 = (state_5936[(9)]);
var inst_5881 = (state_5936[(10)]);
var inst_5806 = (state_5936[(11)]);
var inst_5886 = (state_5936[(12)]);
var inst_5886__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_5879,inst_5881);
var inst_5887 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_5886__$1,inst_5806,done);
var state_5936__$1 = (function (){var statearr_5942 = state_5936;
(statearr_5942[(12)] = inst_5886__$1);

return statearr_5942;
})();
if(cljs.core.truth_(inst_5887)){
var statearr_5943_6024 = state_5936__$1;
(statearr_5943_6024[(1)] = (30));

} else {
var statearr_5944_6025 = state_5936__$1;
(statearr_5944_6025[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (1))){
var state_5936__$1 = state_5936;
var statearr_5945_6026 = state_5936__$1;
(statearr_5945_6026[(2)] = null);

(statearr_5945_6026[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (24))){
var inst_5837 = (state_5936[(7)]);
var inst_5856 = (state_5936[(2)]);
var inst_5857 = cljs.core.next(inst_5837);
var inst_5815 = inst_5857;
var inst_5816 = null;
var inst_5817 = (0);
var inst_5818 = (0);
var state_5936__$1 = (function (){var statearr_5946 = state_5936;
(statearr_5946[(13)] = inst_5816);

(statearr_5946[(14)] = inst_5815);

(statearr_5946[(15)] = inst_5856);

(statearr_5946[(16)] = inst_5817);

(statearr_5946[(17)] = inst_5818);

return statearr_5946;
})();
var statearr_5947_6027 = state_5936__$1;
(statearr_5947_6027[(2)] = null);

(statearr_5947_6027[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (39))){
var state_5936__$1 = state_5936;
var statearr_5951_6028 = state_5936__$1;
(statearr_5951_6028[(2)] = null);

(statearr_5951_6028[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (4))){
var inst_5806 = (state_5936[(11)]);
var inst_5806__$1 = (state_5936[(2)]);
var inst_5807 = (inst_5806__$1 == null);
var state_5936__$1 = (function (){var statearr_5952 = state_5936;
(statearr_5952[(11)] = inst_5806__$1);

return statearr_5952;
})();
if(cljs.core.truth_(inst_5807)){
var statearr_5953_6029 = state_5936__$1;
(statearr_5953_6029[(1)] = (5));

} else {
var statearr_5954_6030 = state_5936__$1;
(statearr_5954_6030[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (15))){
var inst_5816 = (state_5936[(13)]);
var inst_5815 = (state_5936[(14)]);
var inst_5817 = (state_5936[(16)]);
var inst_5818 = (state_5936[(17)]);
var inst_5833 = (state_5936[(2)]);
var inst_5834 = (inst_5818 + (1));
var tmp5948 = inst_5816;
var tmp5949 = inst_5815;
var tmp5950 = inst_5817;
var inst_5815__$1 = tmp5949;
var inst_5816__$1 = tmp5948;
var inst_5817__$1 = tmp5950;
var inst_5818__$1 = inst_5834;
var state_5936__$1 = (function (){var statearr_5955 = state_5936;
(statearr_5955[(13)] = inst_5816__$1);

(statearr_5955[(14)] = inst_5815__$1);

(statearr_5955[(18)] = inst_5833);

(statearr_5955[(16)] = inst_5817__$1);

(statearr_5955[(17)] = inst_5818__$1);

return statearr_5955;
})();
var statearr_5956_6031 = state_5936__$1;
(statearr_5956_6031[(2)] = null);

(statearr_5956_6031[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (21))){
var inst_5860 = (state_5936[(2)]);
var state_5936__$1 = state_5936;
var statearr_5960_6032 = state_5936__$1;
(statearr_5960_6032[(2)] = inst_5860);

(statearr_5960_6032[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (31))){
var inst_5886 = (state_5936[(12)]);
var inst_5890 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_5886);
var state_5936__$1 = state_5936;
var statearr_5961_6033 = state_5936__$1;
(statearr_5961_6033[(2)] = inst_5890);

(statearr_5961_6033[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (32))){
var inst_5879 = (state_5936[(9)]);
var inst_5880 = (state_5936[(19)]);
var inst_5881 = (state_5936[(10)]);
var inst_5878 = (state_5936[(20)]);
var inst_5892 = (state_5936[(2)]);
var inst_5893 = (inst_5881 + (1));
var tmp5957 = inst_5879;
var tmp5958 = inst_5880;
var tmp5959 = inst_5878;
var inst_5878__$1 = tmp5959;
var inst_5879__$1 = tmp5957;
var inst_5880__$1 = tmp5958;
var inst_5881__$1 = inst_5893;
var state_5936__$1 = (function (){var statearr_5962 = state_5936;
(statearr_5962[(21)] = inst_5892);

(statearr_5962[(9)] = inst_5879__$1);

(statearr_5962[(19)] = inst_5880__$1);

(statearr_5962[(10)] = inst_5881__$1);

(statearr_5962[(20)] = inst_5878__$1);

return statearr_5962;
})();
var statearr_5963_6034 = state_5936__$1;
(statearr_5963_6034[(2)] = null);

(statearr_5963_6034[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (40))){
var inst_5905 = (state_5936[(22)]);
var inst_5909 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_5905);
var state_5936__$1 = state_5936;
var statearr_5964_6035 = state_5936__$1;
(statearr_5964_6035[(2)] = inst_5909);

(statearr_5964_6035[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (33))){
var inst_5896 = (state_5936[(23)]);
var inst_5898 = cljs.core.chunked_seq_QMARK_(inst_5896);
var state_5936__$1 = state_5936;
if(inst_5898){
var statearr_5965_6036 = state_5936__$1;
(statearr_5965_6036[(1)] = (36));

} else {
var statearr_5966_6037 = state_5936__$1;
(statearr_5966_6037[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (13))){
var inst_5827 = (state_5936[(24)]);
var inst_5830 = cljs.core.async.close_BANG_(inst_5827);
var state_5936__$1 = state_5936;
var statearr_5967_6038 = state_5936__$1;
(statearr_5967_6038[(2)] = inst_5830);

(statearr_5967_6038[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (22))){
var inst_5850 = (state_5936[(8)]);
var inst_5853 = cljs.core.async.close_BANG_(inst_5850);
var state_5936__$1 = state_5936;
var statearr_5968_6039 = state_5936__$1;
(statearr_5968_6039[(2)] = inst_5853);

(statearr_5968_6039[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (36))){
var inst_5896 = (state_5936[(23)]);
var inst_5900 = cljs.core.chunk_first(inst_5896);
var inst_5901 = cljs.core.chunk_rest(inst_5896);
var inst_5902 = cljs.core.count(inst_5900);
var inst_5878 = inst_5901;
var inst_5879 = inst_5900;
var inst_5880 = inst_5902;
var inst_5881 = (0);
var state_5936__$1 = (function (){var statearr_5969 = state_5936;
(statearr_5969[(9)] = inst_5879);

(statearr_5969[(19)] = inst_5880);

(statearr_5969[(10)] = inst_5881);

(statearr_5969[(20)] = inst_5878);

return statearr_5969;
})();
var statearr_5970_6040 = state_5936__$1;
(statearr_5970_6040[(2)] = null);

(statearr_5970_6040[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (41))){
var inst_5896 = (state_5936[(23)]);
var inst_5911 = (state_5936[(2)]);
var inst_5912 = cljs.core.next(inst_5896);
var inst_5878 = inst_5912;
var inst_5879 = null;
var inst_5880 = (0);
var inst_5881 = (0);
var state_5936__$1 = (function (){var statearr_5971 = state_5936;
(statearr_5971[(9)] = inst_5879);

(statearr_5971[(19)] = inst_5880);

(statearr_5971[(10)] = inst_5881);

(statearr_5971[(25)] = inst_5911);

(statearr_5971[(20)] = inst_5878);

return statearr_5971;
})();
var statearr_5972_6041 = state_5936__$1;
(statearr_5972_6041[(2)] = null);

(statearr_5972_6041[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (43))){
var state_5936__$1 = state_5936;
var statearr_5973_6042 = state_5936__$1;
(statearr_5973_6042[(2)] = null);

(statearr_5973_6042[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (29))){
var inst_5920 = (state_5936[(2)]);
var state_5936__$1 = state_5936;
var statearr_5974_6043 = state_5936__$1;
(statearr_5974_6043[(2)] = inst_5920);

(statearr_5974_6043[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (44))){
var inst_5929 = (state_5936[(2)]);
var state_5936__$1 = (function (){var statearr_5975 = state_5936;
(statearr_5975[(26)] = inst_5929);

return statearr_5975;
})();
var statearr_5976_6044 = state_5936__$1;
(statearr_5976_6044[(2)] = null);

(statearr_5976_6044[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (6))){
var inst_5870 = (state_5936[(27)]);
var inst_5869 = cljs.core.deref(cs);
var inst_5870__$1 = cljs.core.keys(inst_5869);
var inst_5871 = cljs.core.count(inst_5870__$1);
var inst_5872 = cljs.core.reset_BANG_(dctr,inst_5871);
var inst_5877 = cljs.core.seq(inst_5870__$1);
var inst_5878 = inst_5877;
var inst_5879 = null;
var inst_5880 = (0);
var inst_5881 = (0);
var state_5936__$1 = (function (){var statearr_5977 = state_5936;
(statearr_5977[(27)] = inst_5870__$1);

(statearr_5977[(9)] = inst_5879);

(statearr_5977[(19)] = inst_5880);

(statearr_5977[(28)] = inst_5872);

(statearr_5977[(10)] = inst_5881);

(statearr_5977[(20)] = inst_5878);

return statearr_5977;
})();
var statearr_5978_6045 = state_5936__$1;
(statearr_5978_6045[(2)] = null);

(statearr_5978_6045[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (28))){
var inst_5896 = (state_5936[(23)]);
var inst_5878 = (state_5936[(20)]);
var inst_5896__$1 = cljs.core.seq(inst_5878);
var state_5936__$1 = (function (){var statearr_5979 = state_5936;
(statearr_5979[(23)] = inst_5896__$1);

return statearr_5979;
})();
if(inst_5896__$1){
var statearr_5980_6046 = state_5936__$1;
(statearr_5980_6046[(1)] = (33));

} else {
var statearr_5981_6047 = state_5936__$1;
(statearr_5981_6047[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (25))){
var inst_5880 = (state_5936[(19)]);
var inst_5881 = (state_5936[(10)]);
var inst_5883 = (inst_5881 < inst_5880);
var inst_5884 = inst_5883;
var state_5936__$1 = state_5936;
if(cljs.core.truth_(inst_5884)){
var statearr_5982_6048 = state_5936__$1;
(statearr_5982_6048[(1)] = (27));

} else {
var statearr_5983_6049 = state_5936__$1;
(statearr_5983_6049[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (34))){
var state_5936__$1 = state_5936;
var statearr_5984_6050 = state_5936__$1;
(statearr_5984_6050[(2)] = null);

(statearr_5984_6050[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (17))){
var state_5936__$1 = state_5936;
var statearr_5985_6051 = state_5936__$1;
(statearr_5985_6051[(2)] = null);

(statearr_5985_6051[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (3))){
var inst_5934 = (state_5936[(2)]);
var state_5936__$1 = state_5936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_5936__$1,inst_5934);
} else {
if((state_val_5937 === (12))){
var inst_5865 = (state_5936[(2)]);
var state_5936__$1 = state_5936;
var statearr_5986_6052 = state_5936__$1;
(statearr_5986_6052[(2)] = inst_5865);

(statearr_5986_6052[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (2))){
var state_5936__$1 = state_5936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_5936__$1,(4),ch);
} else {
if((state_val_5937 === (23))){
var state_5936__$1 = state_5936;
var statearr_5987_6053 = state_5936__$1;
(statearr_5987_6053[(2)] = null);

(statearr_5987_6053[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (35))){
var inst_5918 = (state_5936[(2)]);
var state_5936__$1 = state_5936;
var statearr_5988_6054 = state_5936__$1;
(statearr_5988_6054[(2)] = inst_5918);

(statearr_5988_6054[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (19))){
var inst_5837 = (state_5936[(7)]);
var inst_5841 = cljs.core.chunk_first(inst_5837);
var inst_5842 = cljs.core.chunk_rest(inst_5837);
var inst_5843 = cljs.core.count(inst_5841);
var inst_5815 = inst_5842;
var inst_5816 = inst_5841;
var inst_5817 = inst_5843;
var inst_5818 = (0);
var state_5936__$1 = (function (){var statearr_5989 = state_5936;
(statearr_5989[(13)] = inst_5816);

(statearr_5989[(14)] = inst_5815);

(statearr_5989[(16)] = inst_5817);

(statearr_5989[(17)] = inst_5818);

return statearr_5989;
})();
var statearr_5990_6055 = state_5936__$1;
(statearr_5990_6055[(2)] = null);

(statearr_5990_6055[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (11))){
var inst_5815 = (state_5936[(14)]);
var inst_5837 = (state_5936[(7)]);
var inst_5837__$1 = cljs.core.seq(inst_5815);
var state_5936__$1 = (function (){var statearr_5991 = state_5936;
(statearr_5991[(7)] = inst_5837__$1);

return statearr_5991;
})();
if(inst_5837__$1){
var statearr_5992_6056 = state_5936__$1;
(statearr_5992_6056[(1)] = (16));

} else {
var statearr_5993_6057 = state_5936__$1;
(statearr_5993_6057[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (9))){
var inst_5867 = (state_5936[(2)]);
var state_5936__$1 = state_5936;
var statearr_5994_6058 = state_5936__$1;
(statearr_5994_6058[(2)] = inst_5867);

(statearr_5994_6058[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (5))){
var inst_5813 = cljs.core.deref(cs);
var inst_5814 = cljs.core.seq(inst_5813);
var inst_5815 = inst_5814;
var inst_5816 = null;
var inst_5817 = (0);
var inst_5818 = (0);
var state_5936__$1 = (function (){var statearr_5995 = state_5936;
(statearr_5995[(13)] = inst_5816);

(statearr_5995[(14)] = inst_5815);

(statearr_5995[(16)] = inst_5817);

(statearr_5995[(17)] = inst_5818);

return statearr_5995;
})();
var statearr_5996_6059 = state_5936__$1;
(statearr_5996_6059[(2)] = null);

(statearr_5996_6059[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (14))){
var state_5936__$1 = state_5936;
var statearr_5997_6060 = state_5936__$1;
(statearr_5997_6060[(2)] = null);

(statearr_5997_6060[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (45))){
var inst_5926 = (state_5936[(2)]);
var state_5936__$1 = state_5936;
var statearr_5998_6061 = state_5936__$1;
(statearr_5998_6061[(2)] = inst_5926);

(statearr_5998_6061[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (26))){
var inst_5870 = (state_5936[(27)]);
var inst_5922 = (state_5936[(2)]);
var inst_5923 = cljs.core.seq(inst_5870);
var state_5936__$1 = (function (){var statearr_5999 = state_5936;
(statearr_5999[(29)] = inst_5922);

return statearr_5999;
})();
if(inst_5923){
var statearr_6000_6062 = state_5936__$1;
(statearr_6000_6062[(1)] = (42));

} else {
var statearr_6001_6063 = state_5936__$1;
(statearr_6001_6063[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (16))){
var inst_5837 = (state_5936[(7)]);
var inst_5839 = cljs.core.chunked_seq_QMARK_(inst_5837);
var state_5936__$1 = state_5936;
if(inst_5839){
var statearr_6002_6064 = state_5936__$1;
(statearr_6002_6064[(1)] = (19));

} else {
var statearr_6003_6065 = state_5936__$1;
(statearr_6003_6065[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (38))){
var inst_5915 = (state_5936[(2)]);
var state_5936__$1 = state_5936;
var statearr_6004_6066 = state_5936__$1;
(statearr_6004_6066[(2)] = inst_5915);

(statearr_6004_6066[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (30))){
var state_5936__$1 = state_5936;
var statearr_6005_6067 = state_5936__$1;
(statearr_6005_6067[(2)] = null);

(statearr_6005_6067[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (10))){
var inst_5816 = (state_5936[(13)]);
var inst_5818 = (state_5936[(17)]);
var inst_5826 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_5816,inst_5818);
var inst_5827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_5826,(0),null);
var inst_5828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_5826,(1),null);
var state_5936__$1 = (function (){var statearr_6006 = state_5936;
(statearr_6006[(24)] = inst_5827);

return statearr_6006;
})();
if(cljs.core.truth_(inst_5828)){
var statearr_6007_6068 = state_5936__$1;
(statearr_6007_6068[(1)] = (13));

} else {
var statearr_6008_6069 = state_5936__$1;
(statearr_6008_6069[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (18))){
var inst_5863 = (state_5936[(2)]);
var state_5936__$1 = state_5936;
var statearr_6009_6070 = state_5936__$1;
(statearr_6009_6070[(2)] = inst_5863);

(statearr_6009_6070[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (42))){
var state_5936__$1 = state_5936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_5936__$1,(45),dchan);
} else {
if((state_val_5937 === (37))){
var inst_5896 = (state_5936[(23)]);
var inst_5905 = (state_5936[(22)]);
var inst_5806 = (state_5936[(11)]);
var inst_5905__$1 = cljs.core.first(inst_5896);
var inst_5906 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_5905__$1,inst_5806,done);
var state_5936__$1 = (function (){var statearr_6010 = state_5936;
(statearr_6010[(22)] = inst_5905__$1);

return statearr_6010;
})();
if(cljs.core.truth_(inst_5906)){
var statearr_6011_6071 = state_5936__$1;
(statearr_6011_6071[(1)] = (39));

} else {
var statearr_6012_6072 = state_5936__$1;
(statearr_6012_6072[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_5937 === (8))){
var inst_5817 = (state_5936[(16)]);
var inst_5818 = (state_5936[(17)]);
var inst_5820 = (inst_5818 < inst_5817);
var inst_5821 = inst_5820;
var state_5936__$1 = state_5936;
if(cljs.core.truth_(inst_5821)){
var statearr_6013_6073 = state_5936__$1;
(statearr_6013_6073[(1)] = (10));

} else {
var statearr_6014_6074 = state_5936__$1;
(statearr_6014_6074[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__5102__auto__ = null;
var cljs$core$async$mult_$_state_machine__5102__auto____0 = (function (){
var statearr_6015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6015[(0)] = cljs$core$async$mult_$_state_machine__5102__auto__);

(statearr_6015[(1)] = (1));

return statearr_6015;
});
var cljs$core$async$mult_$_state_machine__5102__auto____1 = (function (state_5936){
while(true){
var ret_value__5103__auto__ = (function (){try{while(true){
var result__5104__auto__ = switch__5101__auto__(state_5936);
if(cljs.core.keyword_identical_QMARK_(result__5104__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__5104__auto__;
}
break;
}
}catch (e6016){var ex__5105__auto__ = e6016;
var statearr_6017_6075 = state_5936;
(statearr_6017_6075[(2)] = ex__5105__auto__);


if(cljs.core.seq((state_5936[(4)]))){
var statearr_6018_6076 = state_5936;
(statearr_6018_6076[(1)] = cljs.core.first((state_5936[(4)])));

} else {
throw ex__5105__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5103__auto__,cljs.core.cst$kw$recur)){
var G__6077 = state_5936;
state_5936 = G__6077;
continue;
} else {
return ret_value__5103__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__5102__auto__ = function(state_5936){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__5102__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__5102__auto____1.call(this,state_5936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__5102__auto____0;
cljs$core$async$mult_$_state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__5102__auto____1;
return cljs$core$async$mult_$_state_machine__5102__auto__;
})()
})();
var state__5178__auto__ = (function (){var statearr_6019 = (f__5177__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5177__auto__.cljs$core$IFn$_invoke$arity$0() : f__5177__auto__.call(null));
(statearr_6019[(6)] = c__5176__auto___6020);

return statearr_6019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5178__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__6079 = arguments.length;
switch (G__6079) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_6081 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_6081(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_6082 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_6082(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_6083 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_6083(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_6084 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_6084(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_6085 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_6085(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___6095 = arguments.length;
var i__4865__auto___6096 = (0);
while(true){
if((i__4865__auto___6096 < len__4864__auto___6095)){
args__4870__auto__.push((arguments[i__4865__auto___6096]));

var G__6097 = (i__4865__auto___6096 + (1));
i__4865__auto___6096 = G__6097;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__6090){
var map__6091 = p__6090;
var map__6091__$1 = cljs.core.__destructure_map(map__6091);
var opts = map__6091__$1;
var statearr_6092_6098 = state;
(statearr_6092_6098[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_6093_6099 = state;
(statearr_6093_6099[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_6094_6100 = state;
(statearr_6094_6100[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq6086){
var G__6087 = cljs.core.first(seq6086);
var seq6086__$1 = cljs.core.next(seq6086);
var G__6088 = cljs.core.first(seq6086__$1);
var seq6086__$2 = cljs.core.next(seq6086__$1);
var G__6089 = cljs.core.first(seq6086__$2);
var seq6086__$3 = cljs.core.next(seq6086__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6087,G__6088,G__6089,seq6086__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6101 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6101 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta6102){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta6102 = meta6102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6103,meta6102__$1){
var self__ = this;
var _6103__$1 = this;
return (new cljs.core.async.t_cljs$core$async6101(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta6102__$1));
}));

(cljs.core.async.t_cljs$core$async6101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6103){
var self__ = this;
var _6103__$1 = this;
return self__.meta6102;
}));

(cljs.core.async.t_cljs$core$async6101.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6101.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async6101.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6101.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async6101.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async6101.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async6101.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async6101.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async6101.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta6102], null);
}));

(cljs.core.async.t_cljs$core$async6101.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6101");

(cljs.core.async.t_cljs$core$async6101.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async6101");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6101.
 */
cljs.core.async.__GT_t_cljs$core$async6101 = (function cljs$core$async$mix_$___GT_t_cljs$core$async6101(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta6102){
return (new cljs.core.async.t_cljs$core$async6101(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta6102));
});

}

return (new cljs.core.async.t_cljs$core$async6101(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__5176__auto___6216 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__5177__auto__ = (function (){var switch__5101__auto__ = (function (state_6171){
var state_val_6172 = (state_6171[(1)]);
if((state_val_6172 === (7))){
var inst_6131 = (state_6171[(2)]);
var state_6171__$1 = state_6171;
if(cljs.core.truth_(inst_6131)){
var statearr_6173_6217 = state_6171__$1;
(statearr_6173_6217[(1)] = (8));

} else {
var statearr_6174_6218 = state_6171__$1;
(statearr_6174_6218[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6172 === (20))){
var inst_6124 = (state_6171[(7)]);
var state_6171__$1 = state_6171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6171__$1,(23),out,inst_6124);
} else {
if((state_val_6172 === (1))){
var inst_6107 = calc_state();
var inst_6108 = cljs.core.__destructure_map(inst_6107);
var inst_6109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_6108,cljs.core.cst$kw$solos);
var inst_6110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_6108,cljs.core.cst$kw$mutes);
var inst_6111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_6108,cljs.core.cst$kw$reads);
var inst_6112 = inst_6107;
var state_6171__$1 = (function (){var statearr_6175 = state_6171;
(statearr_6175[(8)] = inst_6109);

(statearr_6175[(9)] = inst_6110);

(statearr_6175[(10)] = inst_6111);

(statearr_6175[(11)] = inst_6112);

return statearr_6175;
})();
var statearr_6176_6219 = state_6171__$1;
(statearr_6176_6219[(2)] = null);

(statearr_6176_6219[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6172 === (24))){
var inst_6115 = (state_6171[(12)]);
var inst_6112 = inst_6115;
var state_6171__$1 = (function (){var statearr_6177 = state_6171;
(statearr_6177[(11)] = inst_6112);

return statearr_6177;
})();
var statearr_6178_6220 = state_6171__$1;
(statearr_6178_6220[(2)] = null);

(statearr_6178_6220[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6172 === (4))){
var inst_6124 = (state_6171[(7)]);
var inst_6126 = (state_6171[(13)]);
var inst_6123 = (state_6171[(2)]);
var inst_6124__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_6123,(0),null);
var inst_6125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_6123,(1),null);
var inst_6126__$1 = (inst_6124__$1 == null);
var state_6171__$1 = (function (){var statearr_6179 = state_6171;
(statearr_6179[(7)] = inst_6124__$1);

(statearr_6179[(14)] = inst_6125);

(statearr_6179[(13)] = inst_6126__$1);

return statearr_6179;
})();
if(cljs.core.truth_(inst_6126__$1)){
var statearr_6180_6221 = state_6171__$1;
(statearr_6180_6221[(1)] = (5));

} else {
var statearr_6181_6222 = state_6171__$1;
(statearr_6181_6222[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6172 === (15))){
var inst_6145 = (state_6171[(15)]);
var inst_6116 = (state_6171[(16)]);
var inst_6145__$1 = cljs.core.empty_QMARK_(inst_6116);
var state_6171__$1 = (function (){var statearr_6182 = state_6171;
(statearr_6182[(15)] = inst_6145__$1);

return statearr_6182;
})();
if(inst_6145__$1){
var statearr_6183_6223 = state_6171__$1;
(statearr_6183_6223[(1)] = (17));

} else {
var statearr_6184_6224 = state_6171__$1;
(statearr_6184_6224[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6172 === (21))){
var inst_6115 = (state_6171[(12)]);
var inst_6112 = inst_6115;
var state_6171__$1 = (function (){var statearr_6185 = state_6171;
(statearr_6185[(11)] = inst_6112);

return statearr_6185;
})();
var statearr_6186_6225 = state_6171__$1;
(statearr_6186_6225[(2)] = null);

(statearr_6186_6225[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6172 === (13))){
var inst_6138 = (state_6171[(2)]);
var inst_6139 = calc_state();
var inst_6112 = inst_6139;
var state_6171__$1 = (function (){var statearr_6187 = state_6171;
(statearr_6187[(11)] = inst_6112);

(statearr_6187[(17)] = inst_6138);

return statearr_6187;
})();
var statearr_6188_6226 = state_6171__$1;
(statearr_6188_6226[(2)] = null);

(statearr_6188_6226[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6172 === (22))){
var inst_6165 = (state_6171[(2)]);
var state_6171__$1 = state_6171;
var statearr_6189_6227 = state_6171__$1;
(statearr_6189_6227[(2)] = inst_6165);

(statearr_6189_6227[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6172 === (6))){
var inst_6125 = (state_6171[(14)]);
var inst_6129 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_6125,change);
var state_6171__$1 = state_6171;
var statearr_6190_6228 = state_6171__$1;
(statearr_6190_6228[(2)] = inst_6129);

(statearr_6190_6228[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6172 === (25))){
var state_6171__$1 = state_6171;
var statearr_6191_6229 = state_6171__$1;
(statearr_6191_6229[(2)] = null);

(statearr_6191_6229[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6172 === (17))){
var inst_6117 = (state_6171[(18)]);
var inst_6125 = (state_6171[(14)]);
var inst_6147 = (inst_6117.cljs$core$IFn$_invoke$arity$1 ? inst_6117.cljs$core$IFn$_invoke$arity$1(inst_6125) : inst_6117.call(null,inst_6125));
var inst_6148 = cljs.core.not(inst_6147);
var state_6171__$1 = state_6171;
var statearr_6192_6230 = state_6171__$1;
(statearr_6192_6230[(2)] = inst_6148);

(statearr_6192_6230[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6172 === (3))){
var inst_6169 = (state_6171[(2)]);
var state_6171__$1 = state_6171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_6171__$1,inst_6169);
} else {
if((state_val_6172 === (12))){
var state_6171__$1 = state_6171;
var statearr_6193_6231 = state_6171__$1;
(statearr_6193_6231[(2)] = null);

(statearr_6193_6231[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6172 === (2))){
var inst_6112 = (state_6171[(11)]);
var inst_6115 = (state_6171[(12)]);
var inst_6115__$1 = cljs.core.__destructure_map(inst_6112);
var inst_6116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_6115__$1,cljs.core.cst$kw$solos);
var inst_6117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_6115__$1,cljs.core.cst$kw$mutes);
var inst_6118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_6115__$1,cljs.core.cst$kw$reads);
var state_6171__$1 = (function (){var statearr_6194 = state_6171;
(statearr_6194[(18)] = inst_6117);

(statearr_6194[(12)] = inst_6115__$1);

(statearr_6194[(16)] = inst_6116);

return statearr_6194;
})();
return cljs.core.async.ioc_alts_BANG_(state_6171__$1,(4),inst_6118);
} else {
if((state_val_6172 === (23))){
var inst_6156 = (state_6171[(2)]);
var state_6171__$1 = state_6171;
if(cljs.core.truth_(inst_6156)){
var statearr_6195_6232 = state_6171__$1;
(statearr_6195_6232[(1)] = (24));

} else {
var statearr_6196_6233 = state_6171__$1;
(statearr_6196_6233[(1)] = (25));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6172 === (19))){
var inst_6151 = (state_6171[(2)]);
var state_6171__$1 = state_6171;
var statearr_6197_6234 = state_6171__$1;
(statearr_6197_6234[(2)] = inst_6151);

(statearr_6197_6234[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6172 === (11))){
var inst_6125 = (state_6171[(14)]);
var inst_6135 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_6125);
var state_6171__$1 = state_6171;
var statearr_6198_6235 = state_6171__$1;
(statearr_6198_6235[(2)] = inst_6135);

(statearr_6198_6235[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6172 === (9))){
var inst_6125 = (state_6171[(14)]);
var inst_6142 = (state_6171[(19)]);
var inst_6116 = (state_6171[(16)]);
var inst_6142__$1 = (inst_6116.cljs$core$IFn$_invoke$arity$1 ? inst_6116.cljs$core$IFn$_invoke$arity$1(inst_6125) : inst_6116.call(null,inst_6125));
var state_6171__$1 = (function (){var statearr_6199 = state_6171;
(statearr_6199[(19)] = inst_6142__$1);

return statearr_6199;
})();
if(cljs.core.truth_(inst_6142__$1)){
var statearr_6200_6236 = state_6171__$1;
(statearr_6200_6236[(1)] = (14));

} else {
var statearr_6201_6237 = state_6171__$1;
(statearr_6201_6237[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6172 === (5))){
var inst_6126 = (state_6171[(13)]);
var state_6171__$1 = state_6171;
var statearr_6202_6238 = state_6171__$1;
(statearr_6202_6238[(2)] = inst_6126);

(statearr_6202_6238[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6172 === (14))){
var inst_6142 = (state_6171[(19)]);
var state_6171__$1 = state_6171;
var statearr_6203_6239 = state_6171__$1;
(statearr_6203_6239[(2)] = inst_6142);

(statearr_6203_6239[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6172 === (26))){
var inst_6161 = (state_6171[(2)]);
var state_6171__$1 = state_6171;
var statearr_6204_6240 = state_6171__$1;
(statearr_6204_6240[(2)] = inst_6161);

(statearr_6204_6240[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6172 === (16))){
var inst_6153 = (state_6171[(2)]);
var state_6171__$1 = state_6171;
if(cljs.core.truth_(inst_6153)){
var statearr_6205_6241 = state_6171__$1;
(statearr_6205_6241[(1)] = (20));

} else {
var statearr_6206_6242 = state_6171__$1;
(statearr_6206_6242[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6172 === (10))){
var inst_6167 = (state_6171[(2)]);
var state_6171__$1 = state_6171;
var statearr_6207_6243 = state_6171__$1;
(statearr_6207_6243[(2)] = inst_6167);

(statearr_6207_6243[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6172 === (18))){
var inst_6145 = (state_6171[(15)]);
var state_6171__$1 = state_6171;
var statearr_6208_6244 = state_6171__$1;
(statearr_6208_6244[(2)] = inst_6145);

(statearr_6208_6244[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6172 === (8))){
var inst_6124 = (state_6171[(7)]);
var inst_6133 = (inst_6124 == null);
var state_6171__$1 = state_6171;
if(cljs.core.truth_(inst_6133)){
var statearr_6209_6245 = state_6171__$1;
(statearr_6209_6245[(1)] = (11));

} else {
var statearr_6210_6246 = state_6171__$1;
(statearr_6210_6246[(1)] = (12));

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
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__5102__auto__ = null;
var cljs$core$async$mix_$_state_machine__5102__auto____0 = (function (){
var statearr_6211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6211[(0)] = cljs$core$async$mix_$_state_machine__5102__auto__);

(statearr_6211[(1)] = (1));

return statearr_6211;
});
var cljs$core$async$mix_$_state_machine__5102__auto____1 = (function (state_6171){
while(true){
var ret_value__5103__auto__ = (function (){try{while(true){
var result__5104__auto__ = switch__5101__auto__(state_6171);
if(cljs.core.keyword_identical_QMARK_(result__5104__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__5104__auto__;
}
break;
}
}catch (e6212){var ex__5105__auto__ = e6212;
var statearr_6213_6247 = state_6171;
(statearr_6213_6247[(2)] = ex__5105__auto__);


if(cljs.core.seq((state_6171[(4)]))){
var statearr_6214_6248 = state_6171;
(statearr_6214_6248[(1)] = cljs.core.first((state_6171[(4)])));

} else {
throw ex__5105__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5103__auto__,cljs.core.cst$kw$recur)){
var G__6249 = state_6171;
state_6171 = G__6249;
continue;
} else {
return ret_value__5103__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__5102__auto__ = function(state_6171){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__5102__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__5102__auto____1.call(this,state_6171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__5102__auto____0;
cljs$core$async$mix_$_state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__5102__auto____1;
return cljs$core$async$mix_$_state_machine__5102__auto__;
})()
})();
var state__5178__auto__ = (function (){var statearr_6215 = (f__5177__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5177__auto__.cljs$core$IFn$_invoke$arity$0() : f__5177__auto__.call(null));
(statearr_6215[(6)] = c__5176__auto___6216);

return statearr_6215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5178__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_6252 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_6252(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_6253 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_6253(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_6254 = (function() {
var G__6255 = null;
var G__6255__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__6255__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__6255 = function(p,v){
switch(arguments.length){
case 1:
return G__6255__1.call(this,p);
case 2:
return G__6255__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__6255.cljs$core$IFn$_invoke$arity$1 = G__6255__1;
G__6255.cljs$core$IFn$_invoke$arity$2 = G__6255__2;
return G__6255;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__6251 = arguments.length;
switch (G__6251) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_6254.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_6254.cljs$core$IFn$_invoke$arity$2(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__6259 = arguments.length;
switch (G__6259) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__6257_SHARP_){
if(cljs.core.truth_((p1__6257_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__6257_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__6257_SHARP_.call(null,topic)))){
return p1__6257_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__6257_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6260 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6260 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta6261){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta6261 = meta6261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6262,meta6261__$1){
var self__ = this;
var _6262__$1 = this;
return (new cljs.core.async.t_cljs$core$async6260(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta6261__$1));
}));

(cljs.core.async.t_cljs$core$async6260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6262){
var self__ = this;
var _6262__$1 = this;
return self__.meta6261;
}));

(cljs.core.async.t_cljs$core$async6260.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6260.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async6260.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6260.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async6260.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async6260.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async6260.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async6260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta6261], null);
}));

(cljs.core.async.t_cljs$core$async6260.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6260");

(cljs.core.async.t_cljs$core$async6260.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async6260");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6260.
 */
cljs.core.async.__GT_t_cljs$core$async6260 = (function cljs$core$async$__GT_t_cljs$core$async6260(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta6261){
return (new cljs.core.async.t_cljs$core$async6260(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta6261));
});

}

return (new cljs.core.async.t_cljs$core$async6260(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__5176__auto___6381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__5177__auto__ = (function (){var switch__5101__auto__ = (function (state_6334){
var state_val_6335 = (state_6334[(1)]);
if((state_val_6335 === (7))){
var inst_6330 = (state_6334[(2)]);
var state_6334__$1 = state_6334;
var statearr_6336_6382 = state_6334__$1;
(statearr_6336_6382[(2)] = inst_6330);

(statearr_6336_6382[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6335 === (20))){
var state_6334__$1 = state_6334;
var statearr_6337_6383 = state_6334__$1;
(statearr_6337_6383[(2)] = null);

(statearr_6337_6383[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6335 === (1))){
var state_6334__$1 = state_6334;
var statearr_6338_6384 = state_6334__$1;
(statearr_6338_6384[(2)] = null);

(statearr_6338_6384[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6335 === (24))){
var inst_6313 = (state_6334[(7)]);
var inst_6322 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_6313);
var state_6334__$1 = state_6334;
var statearr_6339_6385 = state_6334__$1;
(statearr_6339_6385[(2)] = inst_6322);

(statearr_6339_6385[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6335 === (4))){
var inst_6265 = (state_6334[(8)]);
var inst_6265__$1 = (state_6334[(2)]);
var inst_6266 = (inst_6265__$1 == null);
var state_6334__$1 = (function (){var statearr_6340 = state_6334;
(statearr_6340[(8)] = inst_6265__$1);

return statearr_6340;
})();
if(cljs.core.truth_(inst_6266)){
var statearr_6341_6386 = state_6334__$1;
(statearr_6341_6386[(1)] = (5));

} else {
var statearr_6342_6387 = state_6334__$1;
(statearr_6342_6387[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6335 === (15))){
var inst_6307 = (state_6334[(2)]);
var state_6334__$1 = state_6334;
var statearr_6343_6388 = state_6334__$1;
(statearr_6343_6388[(2)] = inst_6307);

(statearr_6343_6388[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6335 === (21))){
var inst_6327 = (state_6334[(2)]);
var state_6334__$1 = (function (){var statearr_6344 = state_6334;
(statearr_6344[(9)] = inst_6327);

return statearr_6344;
})();
var statearr_6345_6389 = state_6334__$1;
(statearr_6345_6389[(2)] = null);

(statearr_6345_6389[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6335 === (13))){
var inst_6289 = (state_6334[(10)]);
var inst_6291 = cljs.core.chunked_seq_QMARK_(inst_6289);
var state_6334__$1 = state_6334;
if(inst_6291){
var statearr_6346_6390 = state_6334__$1;
(statearr_6346_6390[(1)] = (16));

} else {
var statearr_6347_6391 = state_6334__$1;
(statearr_6347_6391[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6335 === (22))){
var inst_6319 = (state_6334[(2)]);
var state_6334__$1 = state_6334;
if(cljs.core.truth_(inst_6319)){
var statearr_6348_6392 = state_6334__$1;
(statearr_6348_6392[(1)] = (23));

} else {
var statearr_6349_6393 = state_6334__$1;
(statearr_6349_6393[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6335 === (6))){
var inst_6265 = (state_6334[(8)]);
var inst_6313 = (state_6334[(7)]);
var inst_6315 = (state_6334[(11)]);
var inst_6313__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_6265) : topic_fn.call(null,inst_6265));
var inst_6314 = cljs.core.deref(mults);
var inst_6315__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_6314,inst_6313__$1);
var state_6334__$1 = (function (){var statearr_6350 = state_6334;
(statearr_6350[(7)] = inst_6313__$1);

(statearr_6350[(11)] = inst_6315__$1);

return statearr_6350;
})();
if(cljs.core.truth_(inst_6315__$1)){
var statearr_6351_6394 = state_6334__$1;
(statearr_6351_6394[(1)] = (19));

} else {
var statearr_6352_6395 = state_6334__$1;
(statearr_6352_6395[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6335 === (25))){
var inst_6324 = (state_6334[(2)]);
var state_6334__$1 = state_6334;
var statearr_6353_6396 = state_6334__$1;
(statearr_6353_6396[(2)] = inst_6324);

(statearr_6353_6396[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6335 === (17))){
var inst_6289 = (state_6334[(10)]);
var inst_6298 = cljs.core.first(inst_6289);
var inst_6299 = cljs.core.async.muxch_STAR_(inst_6298);
var inst_6300 = cljs.core.async.close_BANG_(inst_6299);
var inst_6301 = cljs.core.next(inst_6289);
var inst_6275 = inst_6301;
var inst_6276 = null;
var inst_6277 = (0);
var inst_6278 = (0);
var state_6334__$1 = (function (){var statearr_6354 = state_6334;
(statearr_6354[(12)] = inst_6300);

(statearr_6354[(13)] = inst_6277);

(statearr_6354[(14)] = inst_6276);

(statearr_6354[(15)] = inst_6275);

(statearr_6354[(16)] = inst_6278);

return statearr_6354;
})();
var statearr_6355_6397 = state_6334__$1;
(statearr_6355_6397[(2)] = null);

(statearr_6355_6397[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6335 === (3))){
var inst_6332 = (state_6334[(2)]);
var state_6334__$1 = state_6334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_6334__$1,inst_6332);
} else {
if((state_val_6335 === (12))){
var inst_6309 = (state_6334[(2)]);
var state_6334__$1 = state_6334;
var statearr_6356_6398 = state_6334__$1;
(statearr_6356_6398[(2)] = inst_6309);

(statearr_6356_6398[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6335 === (2))){
var state_6334__$1 = state_6334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6334__$1,(4),ch);
} else {
if((state_val_6335 === (23))){
var state_6334__$1 = state_6334;
var statearr_6357_6399 = state_6334__$1;
(statearr_6357_6399[(2)] = null);

(statearr_6357_6399[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6335 === (19))){
var inst_6265 = (state_6334[(8)]);
var inst_6315 = (state_6334[(11)]);
var inst_6317 = cljs.core.async.muxch_STAR_(inst_6315);
var state_6334__$1 = state_6334;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6334__$1,(22),inst_6317,inst_6265);
} else {
if((state_val_6335 === (11))){
var inst_6275 = (state_6334[(15)]);
var inst_6289 = (state_6334[(10)]);
var inst_6289__$1 = cljs.core.seq(inst_6275);
var state_6334__$1 = (function (){var statearr_6358 = state_6334;
(statearr_6358[(10)] = inst_6289__$1);

return statearr_6358;
})();
if(inst_6289__$1){
var statearr_6359_6400 = state_6334__$1;
(statearr_6359_6400[(1)] = (13));

} else {
var statearr_6360_6401 = state_6334__$1;
(statearr_6360_6401[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6335 === (9))){
var inst_6311 = (state_6334[(2)]);
var state_6334__$1 = state_6334;
var statearr_6361_6402 = state_6334__$1;
(statearr_6361_6402[(2)] = inst_6311);

(statearr_6361_6402[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6335 === (5))){
var inst_6272 = cljs.core.deref(mults);
var inst_6273 = cljs.core.vals(inst_6272);
var inst_6274 = cljs.core.seq(inst_6273);
var inst_6275 = inst_6274;
var inst_6276 = null;
var inst_6277 = (0);
var inst_6278 = (0);
var state_6334__$1 = (function (){var statearr_6362 = state_6334;
(statearr_6362[(13)] = inst_6277);

(statearr_6362[(14)] = inst_6276);

(statearr_6362[(15)] = inst_6275);

(statearr_6362[(16)] = inst_6278);

return statearr_6362;
})();
var statearr_6363_6403 = state_6334__$1;
(statearr_6363_6403[(2)] = null);

(statearr_6363_6403[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6335 === (14))){
var state_6334__$1 = state_6334;
var statearr_6367_6404 = state_6334__$1;
(statearr_6367_6404[(2)] = null);

(statearr_6367_6404[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6335 === (16))){
var inst_6289 = (state_6334[(10)]);
var inst_6293 = cljs.core.chunk_first(inst_6289);
var inst_6294 = cljs.core.chunk_rest(inst_6289);
var inst_6295 = cljs.core.count(inst_6293);
var inst_6275 = inst_6294;
var inst_6276 = inst_6293;
var inst_6277 = inst_6295;
var inst_6278 = (0);
var state_6334__$1 = (function (){var statearr_6368 = state_6334;
(statearr_6368[(13)] = inst_6277);

(statearr_6368[(14)] = inst_6276);

(statearr_6368[(15)] = inst_6275);

(statearr_6368[(16)] = inst_6278);

return statearr_6368;
})();
var statearr_6369_6405 = state_6334__$1;
(statearr_6369_6405[(2)] = null);

(statearr_6369_6405[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6335 === (10))){
var inst_6277 = (state_6334[(13)]);
var inst_6276 = (state_6334[(14)]);
var inst_6275 = (state_6334[(15)]);
var inst_6278 = (state_6334[(16)]);
var inst_6283 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_6276,inst_6278);
var inst_6284 = cljs.core.async.muxch_STAR_(inst_6283);
var inst_6285 = cljs.core.async.close_BANG_(inst_6284);
var inst_6286 = (inst_6278 + (1));
var tmp6364 = inst_6277;
var tmp6365 = inst_6276;
var tmp6366 = inst_6275;
var inst_6275__$1 = tmp6366;
var inst_6276__$1 = tmp6365;
var inst_6277__$1 = tmp6364;
var inst_6278__$1 = inst_6286;
var state_6334__$1 = (function (){var statearr_6370 = state_6334;
(statearr_6370[(13)] = inst_6277__$1);

(statearr_6370[(14)] = inst_6276__$1);

(statearr_6370[(17)] = inst_6285);

(statearr_6370[(15)] = inst_6275__$1);

(statearr_6370[(16)] = inst_6278__$1);

return statearr_6370;
})();
var statearr_6371_6406 = state_6334__$1;
(statearr_6371_6406[(2)] = null);

(statearr_6371_6406[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6335 === (18))){
var inst_6304 = (state_6334[(2)]);
var state_6334__$1 = state_6334;
var statearr_6372_6407 = state_6334__$1;
(statearr_6372_6407[(2)] = inst_6304);

(statearr_6372_6407[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6335 === (8))){
var inst_6277 = (state_6334[(13)]);
var inst_6278 = (state_6334[(16)]);
var inst_6280 = (inst_6278 < inst_6277);
var inst_6281 = inst_6280;
var state_6334__$1 = state_6334;
if(cljs.core.truth_(inst_6281)){
var statearr_6373_6408 = state_6334__$1;
(statearr_6373_6408[(1)] = (10));

} else {
var statearr_6374_6409 = state_6334__$1;
(statearr_6374_6409[(1)] = (11));

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
}
});
return (function() {
var cljs$core$async$state_machine__5102__auto__ = null;
var cljs$core$async$state_machine__5102__auto____0 = (function (){
var statearr_6375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6375[(0)] = cljs$core$async$state_machine__5102__auto__);

(statearr_6375[(1)] = (1));

return statearr_6375;
});
var cljs$core$async$state_machine__5102__auto____1 = (function (state_6334){
while(true){
var ret_value__5103__auto__ = (function (){try{while(true){
var result__5104__auto__ = switch__5101__auto__(state_6334);
if(cljs.core.keyword_identical_QMARK_(result__5104__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__5104__auto__;
}
break;
}
}catch (e6376){var ex__5105__auto__ = e6376;
var statearr_6377_6410 = state_6334;
(statearr_6377_6410[(2)] = ex__5105__auto__);


if(cljs.core.seq((state_6334[(4)]))){
var statearr_6378_6411 = state_6334;
(statearr_6378_6411[(1)] = cljs.core.first((state_6334[(4)])));

} else {
throw ex__5105__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5103__auto__,cljs.core.cst$kw$recur)){
var G__6412 = state_6334;
state_6334 = G__6412;
continue;
} else {
return ret_value__5103__auto__;
}
break;
}
});
cljs$core$async$state_machine__5102__auto__ = function(state_6334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5102__auto____1.call(this,state_6334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5102__auto____0;
cljs$core$async$state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5102__auto____1;
return cljs$core$async$state_machine__5102__auto__;
})()
})();
var state__5178__auto__ = (function (){var statearr_6379 = (f__5177__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5177__auto__.cljs$core$IFn$_invoke$arity$0() : f__5177__auto__.call(null));
(statearr_6379[(6)] = c__5176__auto___6381);

return statearr_6379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5178__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__6414 = arguments.length;
switch (G__6414) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__6417 = arguments.length;
switch (G__6417) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__6420 = arguments.length;
switch (G__6420) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__5176__auto___6498 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__5177__auto__ = (function (){var switch__5101__auto__ = (function (state_6463){
var state_val_6464 = (state_6463[(1)]);
if((state_val_6464 === (7))){
var state_6463__$1 = state_6463;
var statearr_6465_6499 = state_6463__$1;
(statearr_6465_6499[(2)] = null);

(statearr_6465_6499[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6464 === (1))){
var state_6463__$1 = state_6463;
var statearr_6466_6500 = state_6463__$1;
(statearr_6466_6500[(2)] = null);

(statearr_6466_6500[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6464 === (4))){
var inst_6424 = (state_6463[(7)]);
var inst_6423 = (state_6463[(8)]);
var inst_6426 = (inst_6424 < inst_6423);
var state_6463__$1 = state_6463;
if(cljs.core.truth_(inst_6426)){
var statearr_6467_6501 = state_6463__$1;
(statearr_6467_6501[(1)] = (6));

} else {
var statearr_6468_6502 = state_6463__$1;
(statearr_6468_6502[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6464 === (15))){
var inst_6449 = (state_6463[(9)]);
var inst_6454 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_6449);
var state_6463__$1 = state_6463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6463__$1,(17),out,inst_6454);
} else {
if((state_val_6464 === (13))){
var inst_6449 = (state_6463[(9)]);
var inst_6449__$1 = (state_6463[(2)]);
var inst_6450 = cljs.core.some(cljs.core.nil_QMARK_,inst_6449__$1);
var state_6463__$1 = (function (){var statearr_6469 = state_6463;
(statearr_6469[(9)] = inst_6449__$1);

return statearr_6469;
})();
if(cljs.core.truth_(inst_6450)){
var statearr_6470_6503 = state_6463__$1;
(statearr_6470_6503[(1)] = (14));

} else {
var statearr_6471_6504 = state_6463__$1;
(statearr_6471_6504[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6464 === (6))){
var state_6463__$1 = state_6463;
var statearr_6472_6505 = state_6463__$1;
(statearr_6472_6505[(2)] = null);

(statearr_6472_6505[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6464 === (17))){
var inst_6456 = (state_6463[(2)]);
var state_6463__$1 = (function (){var statearr_6474 = state_6463;
(statearr_6474[(10)] = inst_6456);

return statearr_6474;
})();
var statearr_6475_6506 = state_6463__$1;
(statearr_6475_6506[(2)] = null);

(statearr_6475_6506[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6464 === (3))){
var inst_6461 = (state_6463[(2)]);
var state_6463__$1 = state_6463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_6463__$1,inst_6461);
} else {
if((state_val_6464 === (12))){
var _ = (function (){var statearr_6476 = state_6463;
(statearr_6476[(4)] = cljs.core.rest((state_6463[(4)])));

return statearr_6476;
})();
var state_6463__$1 = state_6463;
var ex6473 = (state_6463__$1[(2)]);
var statearr_6477_6507 = state_6463__$1;
(statearr_6477_6507[(5)] = ex6473);


if((ex6473 instanceof Object)){
var statearr_6478_6508 = state_6463__$1;
(statearr_6478_6508[(1)] = (11));

(statearr_6478_6508[(5)] = null);

} else {
throw ex6473;

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6464 === (2))){
var inst_6422 = cljs.core.reset_BANG_(dctr,cnt);
var inst_6423 = cnt;
var inst_6424 = (0);
var state_6463__$1 = (function (){var statearr_6479 = state_6463;
(statearr_6479[(7)] = inst_6424);

(statearr_6479[(11)] = inst_6422);

(statearr_6479[(8)] = inst_6423);

return statearr_6479;
})();
var statearr_6480_6509 = state_6463__$1;
(statearr_6480_6509[(2)] = null);

(statearr_6480_6509[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6464 === (11))){
var inst_6428 = (state_6463[(2)]);
var inst_6429 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_6463__$1 = (function (){var statearr_6481 = state_6463;
(statearr_6481[(12)] = inst_6428);

return statearr_6481;
})();
var statearr_6482_6510 = state_6463__$1;
(statearr_6482_6510[(2)] = inst_6429);

(statearr_6482_6510[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6464 === (9))){
var inst_6424 = (state_6463[(7)]);
var _ = (function (){var statearr_6483 = state_6463;
(statearr_6483[(4)] = cljs.core.cons((12),(state_6463[(4)])));

return statearr_6483;
})();
var inst_6435 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_6424) : chs__$1.call(null,inst_6424));
var inst_6436 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_6424) : done.call(null,inst_6424));
var inst_6437 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_6435,inst_6436);
var ___$1 = (function (){var statearr_6484 = state_6463;
(statearr_6484[(4)] = cljs.core.rest((state_6463[(4)])));

return statearr_6484;
})();
var state_6463__$1 = state_6463;
var statearr_6485_6511 = state_6463__$1;
(statearr_6485_6511[(2)] = inst_6437);

(statearr_6485_6511[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6464 === (5))){
var inst_6447 = (state_6463[(2)]);
var state_6463__$1 = (function (){var statearr_6486 = state_6463;
(statearr_6486[(13)] = inst_6447);

return statearr_6486;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6463__$1,(13),dchan);
} else {
if((state_val_6464 === (14))){
var inst_6452 = cljs.core.async.close_BANG_(out);
var state_6463__$1 = state_6463;
var statearr_6487_6512 = state_6463__$1;
(statearr_6487_6512[(2)] = inst_6452);

(statearr_6487_6512[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6464 === (16))){
var inst_6459 = (state_6463[(2)]);
var state_6463__$1 = state_6463;
var statearr_6488_6513 = state_6463__$1;
(statearr_6488_6513[(2)] = inst_6459);

(statearr_6488_6513[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6464 === (10))){
var inst_6424 = (state_6463[(7)]);
var inst_6440 = (state_6463[(2)]);
var inst_6441 = (inst_6424 + (1));
var inst_6424__$1 = inst_6441;
var state_6463__$1 = (function (){var statearr_6489 = state_6463;
(statearr_6489[(14)] = inst_6440);

(statearr_6489[(7)] = inst_6424__$1);

return statearr_6489;
})();
var statearr_6490_6514 = state_6463__$1;
(statearr_6490_6514[(2)] = null);

(statearr_6490_6514[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6464 === (8))){
var inst_6445 = (state_6463[(2)]);
var state_6463__$1 = state_6463;
var statearr_6491_6515 = state_6463__$1;
(statearr_6491_6515[(2)] = inst_6445);

(statearr_6491_6515[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__5102__auto__ = null;
var cljs$core$async$state_machine__5102__auto____0 = (function (){
var statearr_6492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6492[(0)] = cljs$core$async$state_machine__5102__auto__);

(statearr_6492[(1)] = (1));

return statearr_6492;
});
var cljs$core$async$state_machine__5102__auto____1 = (function (state_6463){
while(true){
var ret_value__5103__auto__ = (function (){try{while(true){
var result__5104__auto__ = switch__5101__auto__(state_6463);
if(cljs.core.keyword_identical_QMARK_(result__5104__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__5104__auto__;
}
break;
}
}catch (e6493){var ex__5105__auto__ = e6493;
var statearr_6494_6516 = state_6463;
(statearr_6494_6516[(2)] = ex__5105__auto__);


if(cljs.core.seq((state_6463[(4)]))){
var statearr_6495_6517 = state_6463;
(statearr_6495_6517[(1)] = cljs.core.first((state_6463[(4)])));

} else {
throw ex__5105__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5103__auto__,cljs.core.cst$kw$recur)){
var G__6518 = state_6463;
state_6463 = G__6518;
continue;
} else {
return ret_value__5103__auto__;
}
break;
}
});
cljs$core$async$state_machine__5102__auto__ = function(state_6463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5102__auto____1.call(this,state_6463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5102__auto____0;
cljs$core$async$state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5102__auto____1;
return cljs$core$async$state_machine__5102__auto__;
})()
})();
var state__5178__auto__ = (function (){var statearr_6496 = (f__5177__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5177__auto__.cljs$core$IFn$_invoke$arity$0() : f__5177__auto__.call(null));
(statearr_6496[(6)] = c__5176__auto___6498);

return statearr_6496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5178__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__6521 = arguments.length;
switch (G__6521) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__5176__auto___6576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__5177__auto__ = (function (){var switch__5101__auto__ = (function (state_6553){
var state_val_6554 = (state_6553[(1)]);
if((state_val_6554 === (7))){
var inst_6532 = (state_6553[(7)]);
var inst_6533 = (state_6553[(8)]);
var inst_6532__$1 = (state_6553[(2)]);
var inst_6533__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_6532__$1,(0),null);
var inst_6534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_6532__$1,(1),null);
var inst_6535 = (inst_6533__$1 == null);
var state_6553__$1 = (function (){var statearr_6555 = state_6553;
(statearr_6555[(9)] = inst_6534);

(statearr_6555[(7)] = inst_6532__$1);

(statearr_6555[(8)] = inst_6533__$1);

return statearr_6555;
})();
if(cljs.core.truth_(inst_6535)){
var statearr_6556_6577 = state_6553__$1;
(statearr_6556_6577[(1)] = (8));

} else {
var statearr_6557_6578 = state_6553__$1;
(statearr_6557_6578[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6554 === (1))){
var inst_6522 = cljs.core.vec(chs);
var inst_6523 = inst_6522;
var state_6553__$1 = (function (){var statearr_6558 = state_6553;
(statearr_6558[(10)] = inst_6523);

return statearr_6558;
})();
var statearr_6559_6579 = state_6553__$1;
(statearr_6559_6579[(2)] = null);

(statearr_6559_6579[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6554 === (4))){
var inst_6523 = (state_6553[(10)]);
var state_6553__$1 = state_6553;
return cljs.core.async.ioc_alts_BANG_(state_6553__$1,(7),inst_6523);
} else {
if((state_val_6554 === (6))){
var inst_6549 = (state_6553[(2)]);
var state_6553__$1 = state_6553;
var statearr_6560_6580 = state_6553__$1;
(statearr_6560_6580[(2)] = inst_6549);

(statearr_6560_6580[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6554 === (3))){
var inst_6551 = (state_6553[(2)]);
var state_6553__$1 = state_6553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_6553__$1,inst_6551);
} else {
if((state_val_6554 === (2))){
var inst_6523 = (state_6553[(10)]);
var inst_6525 = cljs.core.count(inst_6523);
var inst_6526 = (inst_6525 > (0));
var state_6553__$1 = state_6553;
if(cljs.core.truth_(inst_6526)){
var statearr_6562_6581 = state_6553__$1;
(statearr_6562_6581[(1)] = (4));

} else {
var statearr_6563_6582 = state_6553__$1;
(statearr_6563_6582[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6554 === (11))){
var inst_6523 = (state_6553[(10)]);
var inst_6542 = (state_6553[(2)]);
var tmp6561 = inst_6523;
var inst_6523__$1 = tmp6561;
var state_6553__$1 = (function (){var statearr_6564 = state_6553;
(statearr_6564[(10)] = inst_6523__$1);

(statearr_6564[(11)] = inst_6542);

return statearr_6564;
})();
var statearr_6565_6583 = state_6553__$1;
(statearr_6565_6583[(2)] = null);

(statearr_6565_6583[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6554 === (9))){
var inst_6533 = (state_6553[(8)]);
var state_6553__$1 = state_6553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6553__$1,(11),out,inst_6533);
} else {
if((state_val_6554 === (5))){
var inst_6547 = cljs.core.async.close_BANG_(out);
var state_6553__$1 = state_6553;
var statearr_6566_6584 = state_6553__$1;
(statearr_6566_6584[(2)] = inst_6547);

(statearr_6566_6584[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6554 === (10))){
var inst_6545 = (state_6553[(2)]);
var state_6553__$1 = state_6553;
var statearr_6567_6585 = state_6553__$1;
(statearr_6567_6585[(2)] = inst_6545);

(statearr_6567_6585[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6554 === (8))){
var inst_6523 = (state_6553[(10)]);
var inst_6534 = (state_6553[(9)]);
var inst_6532 = (state_6553[(7)]);
var inst_6533 = (state_6553[(8)]);
var inst_6537 = (function (){var cs = inst_6523;
var vec__6528 = inst_6532;
var v = inst_6533;
var c = inst_6534;
return (function (p1__6519_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__6519_SHARP_);
});
})();
var inst_6538 = cljs.core.filterv(inst_6537,inst_6523);
var inst_6523__$1 = inst_6538;
var state_6553__$1 = (function (){var statearr_6568 = state_6553;
(statearr_6568[(10)] = inst_6523__$1);

return statearr_6568;
})();
var statearr_6569_6586 = state_6553__$1;
(statearr_6569_6586[(2)] = null);

(statearr_6569_6586[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__5102__auto__ = null;
var cljs$core$async$state_machine__5102__auto____0 = (function (){
var statearr_6570 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6570[(0)] = cljs$core$async$state_machine__5102__auto__);

(statearr_6570[(1)] = (1));

return statearr_6570;
});
var cljs$core$async$state_machine__5102__auto____1 = (function (state_6553){
while(true){
var ret_value__5103__auto__ = (function (){try{while(true){
var result__5104__auto__ = switch__5101__auto__(state_6553);
if(cljs.core.keyword_identical_QMARK_(result__5104__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__5104__auto__;
}
break;
}
}catch (e6571){var ex__5105__auto__ = e6571;
var statearr_6572_6587 = state_6553;
(statearr_6572_6587[(2)] = ex__5105__auto__);


if(cljs.core.seq((state_6553[(4)]))){
var statearr_6573_6588 = state_6553;
(statearr_6573_6588[(1)] = cljs.core.first((state_6553[(4)])));

} else {
throw ex__5105__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5103__auto__,cljs.core.cst$kw$recur)){
var G__6589 = state_6553;
state_6553 = G__6589;
continue;
} else {
return ret_value__5103__auto__;
}
break;
}
});
cljs$core$async$state_machine__5102__auto__ = function(state_6553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5102__auto____1.call(this,state_6553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5102__auto____0;
cljs$core$async$state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5102__auto____1;
return cljs$core$async$state_machine__5102__auto__;
})()
})();
var state__5178__auto__ = (function (){var statearr_6574 = (f__5177__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5177__auto__.cljs$core$IFn$_invoke$arity$0() : f__5177__auto__.call(null));
(statearr_6574[(6)] = c__5176__auto___6576);

return statearr_6574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5178__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__6591 = arguments.length;
switch (G__6591) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__5176__auto___6637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__5177__auto__ = (function (){var switch__5101__auto__ = (function (state_6615){
var state_val_6616 = (state_6615[(1)]);
if((state_val_6616 === (7))){
var inst_6597 = (state_6615[(7)]);
var inst_6597__$1 = (state_6615[(2)]);
var inst_6598 = (inst_6597__$1 == null);
var inst_6599 = cljs.core.not(inst_6598);
var state_6615__$1 = (function (){var statearr_6617 = state_6615;
(statearr_6617[(7)] = inst_6597__$1);

return statearr_6617;
})();
if(inst_6599){
var statearr_6618_6638 = state_6615__$1;
(statearr_6618_6638[(1)] = (8));

} else {
var statearr_6619_6639 = state_6615__$1;
(statearr_6619_6639[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6616 === (1))){
var inst_6592 = (0);
var state_6615__$1 = (function (){var statearr_6620 = state_6615;
(statearr_6620[(8)] = inst_6592);

return statearr_6620;
})();
var statearr_6621_6640 = state_6615__$1;
(statearr_6621_6640[(2)] = null);

(statearr_6621_6640[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6616 === (4))){
var state_6615__$1 = state_6615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6615__$1,(7),ch);
} else {
if((state_val_6616 === (6))){
var inst_6610 = (state_6615[(2)]);
var state_6615__$1 = state_6615;
var statearr_6622_6641 = state_6615__$1;
(statearr_6622_6641[(2)] = inst_6610);

(statearr_6622_6641[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6616 === (3))){
var inst_6612 = (state_6615[(2)]);
var inst_6613 = cljs.core.async.close_BANG_(out);
var state_6615__$1 = (function (){var statearr_6623 = state_6615;
(statearr_6623[(9)] = inst_6612);

return statearr_6623;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_6615__$1,inst_6613);
} else {
if((state_val_6616 === (2))){
var inst_6592 = (state_6615[(8)]);
var inst_6594 = (inst_6592 < n);
var state_6615__$1 = state_6615;
if(cljs.core.truth_(inst_6594)){
var statearr_6624_6642 = state_6615__$1;
(statearr_6624_6642[(1)] = (4));

} else {
var statearr_6625_6643 = state_6615__$1;
(statearr_6625_6643[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6616 === (11))){
var inst_6592 = (state_6615[(8)]);
var inst_6602 = (state_6615[(2)]);
var inst_6603 = (inst_6592 + (1));
var inst_6592__$1 = inst_6603;
var state_6615__$1 = (function (){var statearr_6626 = state_6615;
(statearr_6626[(8)] = inst_6592__$1);

(statearr_6626[(10)] = inst_6602);

return statearr_6626;
})();
var statearr_6627_6644 = state_6615__$1;
(statearr_6627_6644[(2)] = null);

(statearr_6627_6644[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6616 === (9))){
var state_6615__$1 = state_6615;
var statearr_6628_6645 = state_6615__$1;
(statearr_6628_6645[(2)] = null);

(statearr_6628_6645[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6616 === (5))){
var state_6615__$1 = state_6615;
var statearr_6629_6646 = state_6615__$1;
(statearr_6629_6646[(2)] = null);

(statearr_6629_6646[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6616 === (10))){
var inst_6607 = (state_6615[(2)]);
var state_6615__$1 = state_6615;
var statearr_6630_6647 = state_6615__$1;
(statearr_6630_6647[(2)] = inst_6607);

(statearr_6630_6647[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6616 === (8))){
var inst_6597 = (state_6615[(7)]);
var state_6615__$1 = state_6615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6615__$1,(11),out,inst_6597);
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
});
return (function() {
var cljs$core$async$state_machine__5102__auto__ = null;
var cljs$core$async$state_machine__5102__auto____0 = (function (){
var statearr_6631 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6631[(0)] = cljs$core$async$state_machine__5102__auto__);

(statearr_6631[(1)] = (1));

return statearr_6631;
});
var cljs$core$async$state_machine__5102__auto____1 = (function (state_6615){
while(true){
var ret_value__5103__auto__ = (function (){try{while(true){
var result__5104__auto__ = switch__5101__auto__(state_6615);
if(cljs.core.keyword_identical_QMARK_(result__5104__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__5104__auto__;
}
break;
}
}catch (e6632){var ex__5105__auto__ = e6632;
var statearr_6633_6648 = state_6615;
(statearr_6633_6648[(2)] = ex__5105__auto__);


if(cljs.core.seq((state_6615[(4)]))){
var statearr_6634_6649 = state_6615;
(statearr_6634_6649[(1)] = cljs.core.first((state_6615[(4)])));

} else {
throw ex__5105__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5103__auto__,cljs.core.cst$kw$recur)){
var G__6650 = state_6615;
state_6615 = G__6650;
continue;
} else {
return ret_value__5103__auto__;
}
break;
}
});
cljs$core$async$state_machine__5102__auto__ = function(state_6615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5102__auto____1.call(this,state_6615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5102__auto____0;
cljs$core$async$state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5102__auto____1;
return cljs$core$async$state_machine__5102__auto__;
})()
})();
var state__5178__auto__ = (function (){var statearr_6635 = (f__5177__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5177__auto__.cljs$core$IFn$_invoke$arity$0() : f__5177__auto__.call(null));
(statearr_6635[(6)] = c__5176__auto___6637);

return statearr_6635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5178__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6652 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6652 = (function (f,ch,meta6653){
this.f = f;
this.ch = ch;
this.meta6653 = meta6653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6654,meta6653__$1){
var self__ = this;
var _6654__$1 = this;
return (new cljs.core.async.t_cljs$core$async6652(self__.f,self__.ch,meta6653__$1));
}));

(cljs.core.async.t_cljs$core$async6652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6654){
var self__ = this;
var _6654__$1 = this;
return self__.meta6653;
}));

(cljs.core.async.t_cljs$core$async6652.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6652.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async6652.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async6652.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6652.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6655 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6655 = (function (f,ch,meta6653,_,fn1,meta6656){
this.f = f;
this.ch = ch;
this.meta6653 = meta6653;
this._ = _;
this.fn1 = fn1;
this.meta6656 = meta6656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6657,meta6656__$1){
var self__ = this;
var _6657__$1 = this;
return (new cljs.core.async.t_cljs$core$async6655(self__.f,self__.ch,self__.meta6653,self__._,self__.fn1,meta6656__$1));
}));

(cljs.core.async.t_cljs$core$async6655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6657){
var self__ = this;
var _6657__$1 = this;
return self__.meta6656;
}));

(cljs.core.async.t_cljs$core$async6655.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6655.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async6655.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async6655.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__6651_SHARP_){
var G__6658 = (((p1__6651_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__6651_SHARP_) : self__.f.call(null,p1__6651_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__6658) : f1.call(null,G__6658));
});
}));

(cljs.core.async.t_cljs$core$async6655.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta6653,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async6652], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta6656], null);
}));

(cljs.core.async.t_cljs$core$async6655.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6655.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6655");

(cljs.core.async.t_cljs$core$async6655.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async6655");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6655.
 */
cljs.core.async.__GT_t_cljs$core$async6655 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async6655(f__$1,ch__$1,meta6653__$1,___$2,fn1__$1,meta6656){
return (new cljs.core.async.t_cljs$core$async6655(f__$1,ch__$1,meta6653__$1,___$2,fn1__$1,meta6656));
});

}

return (new cljs.core.async.t_cljs$core$async6655(self__.f,self__.ch,self__.meta6653,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__6659 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__6659) : self__.f.call(null,G__6659));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async6652.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6652.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async6652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta6653], null);
}));

(cljs.core.async.t_cljs$core$async6652.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6652");

(cljs.core.async.t_cljs$core$async6652.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async6652");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6652.
 */
cljs.core.async.__GT_t_cljs$core$async6652 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async6652(f__$1,ch__$1,meta6653){
return (new cljs.core.async.t_cljs$core$async6652(f__$1,ch__$1,meta6653));
});

}

return (new cljs.core.async.t_cljs$core$async6652(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6660 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6660 = (function (f,ch,meta6661){
this.f = f;
this.ch = ch;
this.meta6661 = meta6661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6662,meta6661__$1){
var self__ = this;
var _6662__$1 = this;
return (new cljs.core.async.t_cljs$core$async6660(self__.f,self__.ch,meta6661__$1));
}));

(cljs.core.async.t_cljs$core$async6660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6662){
var self__ = this;
var _6662__$1 = this;
return self__.meta6661;
}));

(cljs.core.async.t_cljs$core$async6660.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6660.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async6660.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6660.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async6660.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6660.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async6660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta6661], null);
}));

(cljs.core.async.t_cljs$core$async6660.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6660");

(cljs.core.async.t_cljs$core$async6660.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async6660");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6660.
 */
cljs.core.async.__GT_t_cljs$core$async6660 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async6660(f__$1,ch__$1,meta6661){
return (new cljs.core.async.t_cljs$core$async6660(f__$1,ch__$1,meta6661));
});

}

return (new cljs.core.async.t_cljs$core$async6660(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async6663 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async6663 = (function (p,ch,meta6664){
this.p = p;
this.ch = ch;
this.meta6664 = meta6664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async6663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6665,meta6664__$1){
var self__ = this;
var _6665__$1 = this;
return (new cljs.core.async.t_cljs$core$async6663(self__.p,self__.ch,meta6664__$1));
}));

(cljs.core.async.t_cljs$core$async6663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6665){
var self__ = this;
var _6665__$1 = this;
return self__.meta6664;
}));

(cljs.core.async.t_cljs$core$async6663.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6663.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async6663.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async6663.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6663.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async6663.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async6663.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async6663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta6664], null);
}));

(cljs.core.async.t_cljs$core$async6663.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async6663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async6663");

(cljs.core.async.t_cljs$core$async6663.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async6663");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async6663.
 */
cljs.core.async.__GT_t_cljs$core$async6663 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async6663(p__$1,ch__$1,meta6664){
return (new cljs.core.async.t_cljs$core$async6663(p__$1,ch__$1,meta6664));
});

}

return (new cljs.core.async.t_cljs$core$async6663(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__6667 = arguments.length;
switch (G__6667) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__5176__auto___6708 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__5177__auto__ = (function (){var switch__5101__auto__ = (function (state_6688){
var state_val_6689 = (state_6688[(1)]);
if((state_val_6689 === (7))){
var inst_6684 = (state_6688[(2)]);
var state_6688__$1 = state_6688;
var statearr_6690_6709 = state_6688__$1;
(statearr_6690_6709[(2)] = inst_6684);

(statearr_6690_6709[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6689 === (1))){
var state_6688__$1 = state_6688;
var statearr_6691_6710 = state_6688__$1;
(statearr_6691_6710[(2)] = null);

(statearr_6691_6710[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6689 === (4))){
var inst_6670 = (state_6688[(7)]);
var inst_6670__$1 = (state_6688[(2)]);
var inst_6671 = (inst_6670__$1 == null);
var state_6688__$1 = (function (){var statearr_6692 = state_6688;
(statearr_6692[(7)] = inst_6670__$1);

return statearr_6692;
})();
if(cljs.core.truth_(inst_6671)){
var statearr_6693_6711 = state_6688__$1;
(statearr_6693_6711[(1)] = (5));

} else {
var statearr_6694_6712 = state_6688__$1;
(statearr_6694_6712[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6689 === (6))){
var inst_6670 = (state_6688[(7)]);
var inst_6675 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_6670) : p.call(null,inst_6670));
var state_6688__$1 = state_6688;
if(cljs.core.truth_(inst_6675)){
var statearr_6695_6713 = state_6688__$1;
(statearr_6695_6713[(1)] = (8));

} else {
var statearr_6696_6714 = state_6688__$1;
(statearr_6696_6714[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6689 === (3))){
var inst_6686 = (state_6688[(2)]);
var state_6688__$1 = state_6688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_6688__$1,inst_6686);
} else {
if((state_val_6689 === (2))){
var state_6688__$1 = state_6688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6688__$1,(4),ch);
} else {
if((state_val_6689 === (11))){
var inst_6678 = (state_6688[(2)]);
var state_6688__$1 = state_6688;
var statearr_6697_6715 = state_6688__$1;
(statearr_6697_6715[(2)] = inst_6678);

(statearr_6697_6715[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6689 === (9))){
var state_6688__$1 = state_6688;
var statearr_6698_6716 = state_6688__$1;
(statearr_6698_6716[(2)] = null);

(statearr_6698_6716[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6689 === (5))){
var inst_6673 = cljs.core.async.close_BANG_(out);
var state_6688__$1 = state_6688;
var statearr_6699_6717 = state_6688__$1;
(statearr_6699_6717[(2)] = inst_6673);

(statearr_6699_6717[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6689 === (10))){
var inst_6681 = (state_6688[(2)]);
var state_6688__$1 = (function (){var statearr_6700 = state_6688;
(statearr_6700[(8)] = inst_6681);

return statearr_6700;
})();
var statearr_6701_6718 = state_6688__$1;
(statearr_6701_6718[(2)] = null);

(statearr_6701_6718[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6689 === (8))){
var inst_6670 = (state_6688[(7)]);
var state_6688__$1 = state_6688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6688__$1,(11),out,inst_6670);
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
});
return (function() {
var cljs$core$async$state_machine__5102__auto__ = null;
var cljs$core$async$state_machine__5102__auto____0 = (function (){
var statearr_6702 = [null,null,null,null,null,null,null,null,null];
(statearr_6702[(0)] = cljs$core$async$state_machine__5102__auto__);

(statearr_6702[(1)] = (1));

return statearr_6702;
});
var cljs$core$async$state_machine__5102__auto____1 = (function (state_6688){
while(true){
var ret_value__5103__auto__ = (function (){try{while(true){
var result__5104__auto__ = switch__5101__auto__(state_6688);
if(cljs.core.keyword_identical_QMARK_(result__5104__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__5104__auto__;
}
break;
}
}catch (e6703){var ex__5105__auto__ = e6703;
var statearr_6704_6719 = state_6688;
(statearr_6704_6719[(2)] = ex__5105__auto__);


if(cljs.core.seq((state_6688[(4)]))){
var statearr_6705_6720 = state_6688;
(statearr_6705_6720[(1)] = cljs.core.first((state_6688[(4)])));

} else {
throw ex__5105__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5103__auto__,cljs.core.cst$kw$recur)){
var G__6721 = state_6688;
state_6688 = G__6721;
continue;
} else {
return ret_value__5103__auto__;
}
break;
}
});
cljs$core$async$state_machine__5102__auto__ = function(state_6688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5102__auto____1.call(this,state_6688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5102__auto____0;
cljs$core$async$state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5102__auto____1;
return cljs$core$async$state_machine__5102__auto__;
})()
})();
var state__5178__auto__ = (function (){var statearr_6706 = (f__5177__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5177__auto__.cljs$core$IFn$_invoke$arity$0() : f__5177__auto__.call(null));
(statearr_6706[(6)] = c__5176__auto___6708);

return statearr_6706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5178__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__6723 = arguments.length;
switch (G__6723) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__5176__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__5177__auto__ = (function (){var switch__5101__auto__ = (function (state_6786){
var state_val_6787 = (state_6786[(1)]);
if((state_val_6787 === (7))){
var inst_6782 = (state_6786[(2)]);
var state_6786__$1 = state_6786;
var statearr_6788_6827 = state_6786__$1;
(statearr_6788_6827[(2)] = inst_6782);

(statearr_6788_6827[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6787 === (20))){
var inst_6752 = (state_6786[(7)]);
var inst_6763 = (state_6786[(2)]);
var inst_6764 = cljs.core.next(inst_6752);
var inst_6738 = inst_6764;
var inst_6739 = null;
var inst_6740 = (0);
var inst_6741 = (0);
var state_6786__$1 = (function (){var statearr_6789 = state_6786;
(statearr_6789[(8)] = inst_6739);

(statearr_6789[(9)] = inst_6763);

(statearr_6789[(10)] = inst_6740);

(statearr_6789[(11)] = inst_6738);

(statearr_6789[(12)] = inst_6741);

return statearr_6789;
})();
var statearr_6790_6828 = state_6786__$1;
(statearr_6790_6828[(2)] = null);

(statearr_6790_6828[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6787 === (1))){
var state_6786__$1 = state_6786;
var statearr_6791_6829 = state_6786__$1;
(statearr_6791_6829[(2)] = null);

(statearr_6791_6829[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6787 === (4))){
var inst_6727 = (state_6786[(13)]);
var inst_6727__$1 = (state_6786[(2)]);
var inst_6728 = (inst_6727__$1 == null);
var state_6786__$1 = (function (){var statearr_6792 = state_6786;
(statearr_6792[(13)] = inst_6727__$1);

return statearr_6792;
})();
if(cljs.core.truth_(inst_6728)){
var statearr_6793_6830 = state_6786__$1;
(statearr_6793_6830[(1)] = (5));

} else {
var statearr_6794_6831 = state_6786__$1;
(statearr_6794_6831[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6787 === (15))){
var state_6786__$1 = state_6786;
var statearr_6798_6832 = state_6786__$1;
(statearr_6798_6832[(2)] = null);

(statearr_6798_6832[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6787 === (21))){
var state_6786__$1 = state_6786;
var statearr_6799_6833 = state_6786__$1;
(statearr_6799_6833[(2)] = null);

(statearr_6799_6833[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6787 === (13))){
var inst_6739 = (state_6786[(8)]);
var inst_6740 = (state_6786[(10)]);
var inst_6738 = (state_6786[(11)]);
var inst_6741 = (state_6786[(12)]);
var inst_6748 = (state_6786[(2)]);
var inst_6749 = (inst_6741 + (1));
var tmp6795 = inst_6739;
var tmp6796 = inst_6740;
var tmp6797 = inst_6738;
var inst_6738__$1 = tmp6797;
var inst_6739__$1 = tmp6795;
var inst_6740__$1 = tmp6796;
var inst_6741__$1 = inst_6749;
var state_6786__$1 = (function (){var statearr_6800 = state_6786;
(statearr_6800[(8)] = inst_6739__$1);

(statearr_6800[(14)] = inst_6748);

(statearr_6800[(10)] = inst_6740__$1);

(statearr_6800[(11)] = inst_6738__$1);

(statearr_6800[(12)] = inst_6741__$1);

return statearr_6800;
})();
var statearr_6801_6834 = state_6786__$1;
(statearr_6801_6834[(2)] = null);

(statearr_6801_6834[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6787 === (22))){
var state_6786__$1 = state_6786;
var statearr_6802_6835 = state_6786__$1;
(statearr_6802_6835[(2)] = null);

(statearr_6802_6835[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6787 === (6))){
var inst_6727 = (state_6786[(13)]);
var inst_6736 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_6727) : f.call(null,inst_6727));
var inst_6737 = cljs.core.seq(inst_6736);
var inst_6738 = inst_6737;
var inst_6739 = null;
var inst_6740 = (0);
var inst_6741 = (0);
var state_6786__$1 = (function (){var statearr_6803 = state_6786;
(statearr_6803[(8)] = inst_6739);

(statearr_6803[(10)] = inst_6740);

(statearr_6803[(11)] = inst_6738);

(statearr_6803[(12)] = inst_6741);

return statearr_6803;
})();
var statearr_6804_6836 = state_6786__$1;
(statearr_6804_6836[(2)] = null);

(statearr_6804_6836[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6787 === (17))){
var inst_6752 = (state_6786[(7)]);
var inst_6756 = cljs.core.chunk_first(inst_6752);
var inst_6757 = cljs.core.chunk_rest(inst_6752);
var inst_6758 = cljs.core.count(inst_6756);
var inst_6738 = inst_6757;
var inst_6739 = inst_6756;
var inst_6740 = inst_6758;
var inst_6741 = (0);
var state_6786__$1 = (function (){var statearr_6805 = state_6786;
(statearr_6805[(8)] = inst_6739);

(statearr_6805[(10)] = inst_6740);

(statearr_6805[(11)] = inst_6738);

(statearr_6805[(12)] = inst_6741);

return statearr_6805;
})();
var statearr_6806_6837 = state_6786__$1;
(statearr_6806_6837[(2)] = null);

(statearr_6806_6837[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6787 === (3))){
var inst_6784 = (state_6786[(2)]);
var state_6786__$1 = state_6786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_6786__$1,inst_6784);
} else {
if((state_val_6787 === (12))){
var inst_6772 = (state_6786[(2)]);
var state_6786__$1 = state_6786;
var statearr_6807_6838 = state_6786__$1;
(statearr_6807_6838[(2)] = inst_6772);

(statearr_6807_6838[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6787 === (2))){
var state_6786__$1 = state_6786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6786__$1,(4),in$);
} else {
if((state_val_6787 === (23))){
var inst_6780 = (state_6786[(2)]);
var state_6786__$1 = state_6786;
var statearr_6808_6839 = state_6786__$1;
(statearr_6808_6839[(2)] = inst_6780);

(statearr_6808_6839[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6787 === (19))){
var inst_6767 = (state_6786[(2)]);
var state_6786__$1 = state_6786;
var statearr_6809_6840 = state_6786__$1;
(statearr_6809_6840[(2)] = inst_6767);

(statearr_6809_6840[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6787 === (11))){
var inst_6738 = (state_6786[(11)]);
var inst_6752 = (state_6786[(7)]);
var inst_6752__$1 = cljs.core.seq(inst_6738);
var state_6786__$1 = (function (){var statearr_6810 = state_6786;
(statearr_6810[(7)] = inst_6752__$1);

return statearr_6810;
})();
if(inst_6752__$1){
var statearr_6811_6841 = state_6786__$1;
(statearr_6811_6841[(1)] = (14));

} else {
var statearr_6812_6842 = state_6786__$1;
(statearr_6812_6842[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6787 === (9))){
var inst_6774 = (state_6786[(2)]);
var inst_6775 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_6786__$1 = (function (){var statearr_6813 = state_6786;
(statearr_6813[(15)] = inst_6774);

return statearr_6813;
})();
if(cljs.core.truth_(inst_6775)){
var statearr_6814_6843 = state_6786__$1;
(statearr_6814_6843[(1)] = (21));

} else {
var statearr_6815_6844 = state_6786__$1;
(statearr_6815_6844[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6787 === (5))){
var inst_6730 = cljs.core.async.close_BANG_(out);
var state_6786__$1 = state_6786;
var statearr_6816_6845 = state_6786__$1;
(statearr_6816_6845[(2)] = inst_6730);

(statearr_6816_6845[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6787 === (14))){
var inst_6752 = (state_6786[(7)]);
var inst_6754 = cljs.core.chunked_seq_QMARK_(inst_6752);
var state_6786__$1 = state_6786;
if(inst_6754){
var statearr_6817_6846 = state_6786__$1;
(statearr_6817_6846[(1)] = (17));

} else {
var statearr_6818_6847 = state_6786__$1;
(statearr_6818_6847[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6787 === (16))){
var inst_6770 = (state_6786[(2)]);
var state_6786__$1 = state_6786;
var statearr_6819_6848 = state_6786__$1;
(statearr_6819_6848[(2)] = inst_6770);

(statearr_6819_6848[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6787 === (10))){
var inst_6739 = (state_6786[(8)]);
var inst_6741 = (state_6786[(12)]);
var inst_6746 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_6739,inst_6741);
var state_6786__$1 = state_6786;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6786__$1,(13),out,inst_6746);
} else {
if((state_val_6787 === (18))){
var inst_6752 = (state_6786[(7)]);
var inst_6761 = cljs.core.first(inst_6752);
var state_6786__$1 = state_6786;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6786__$1,(20),out,inst_6761);
} else {
if((state_val_6787 === (8))){
var inst_6740 = (state_6786[(10)]);
var inst_6741 = (state_6786[(12)]);
var inst_6743 = (inst_6741 < inst_6740);
var inst_6744 = inst_6743;
var state_6786__$1 = state_6786;
if(cljs.core.truth_(inst_6744)){
var statearr_6820_6849 = state_6786__$1;
(statearr_6820_6849[(1)] = (10));

} else {
var statearr_6821_6850 = state_6786__$1;
(statearr_6821_6850[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__5102__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__5102__auto____0 = (function (){
var statearr_6822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6822[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__5102__auto__);

(statearr_6822[(1)] = (1));

return statearr_6822;
});
var cljs$core$async$mapcat_STAR__$_state_machine__5102__auto____1 = (function (state_6786){
while(true){
var ret_value__5103__auto__ = (function (){try{while(true){
var result__5104__auto__ = switch__5101__auto__(state_6786);
if(cljs.core.keyword_identical_QMARK_(result__5104__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__5104__auto__;
}
break;
}
}catch (e6823){var ex__5105__auto__ = e6823;
var statearr_6824_6851 = state_6786;
(statearr_6824_6851[(2)] = ex__5105__auto__);


if(cljs.core.seq((state_6786[(4)]))){
var statearr_6825_6852 = state_6786;
(statearr_6825_6852[(1)] = cljs.core.first((state_6786[(4)])));

} else {
throw ex__5105__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5103__auto__,cljs.core.cst$kw$recur)){
var G__6853 = state_6786;
state_6786 = G__6853;
continue;
} else {
return ret_value__5103__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__5102__auto__ = function(state_6786){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__5102__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__5102__auto____1.call(this,state_6786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__5102__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__5102__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__5102__auto__;
})()
})();
var state__5178__auto__ = (function (){var statearr_6826 = (f__5177__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5177__auto__.cljs$core$IFn$_invoke$arity$0() : f__5177__auto__.call(null));
(statearr_6826[(6)] = c__5176__auto__);

return statearr_6826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5178__auto__);
}));

return c__5176__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__6855 = arguments.length;
switch (G__6855) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__6858 = arguments.length;
switch (G__6858) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__6861 = arguments.length;
switch (G__6861) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__5176__auto___6909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__5177__auto__ = (function (){var switch__5101__auto__ = (function (state_6885){
var state_val_6886 = (state_6885[(1)]);
if((state_val_6886 === (7))){
var inst_6880 = (state_6885[(2)]);
var state_6885__$1 = state_6885;
var statearr_6887_6910 = state_6885__$1;
(statearr_6887_6910[(2)] = inst_6880);

(statearr_6887_6910[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6886 === (1))){
var inst_6862 = null;
var state_6885__$1 = (function (){var statearr_6888 = state_6885;
(statearr_6888[(7)] = inst_6862);

return statearr_6888;
})();
var statearr_6889_6911 = state_6885__$1;
(statearr_6889_6911[(2)] = null);

(statearr_6889_6911[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6886 === (4))){
var inst_6865 = (state_6885[(8)]);
var inst_6865__$1 = (state_6885[(2)]);
var inst_6866 = (inst_6865__$1 == null);
var inst_6867 = cljs.core.not(inst_6866);
var state_6885__$1 = (function (){var statearr_6890 = state_6885;
(statearr_6890[(8)] = inst_6865__$1);

return statearr_6890;
})();
if(inst_6867){
var statearr_6891_6912 = state_6885__$1;
(statearr_6891_6912[(1)] = (5));

} else {
var statearr_6892_6913 = state_6885__$1;
(statearr_6892_6913[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6886 === (6))){
var state_6885__$1 = state_6885;
var statearr_6893_6914 = state_6885__$1;
(statearr_6893_6914[(2)] = null);

(statearr_6893_6914[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6886 === (3))){
var inst_6882 = (state_6885[(2)]);
var inst_6883 = cljs.core.async.close_BANG_(out);
var state_6885__$1 = (function (){var statearr_6894 = state_6885;
(statearr_6894[(9)] = inst_6882);

return statearr_6894;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_6885__$1,inst_6883);
} else {
if((state_val_6886 === (2))){
var state_6885__$1 = state_6885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6885__$1,(4),ch);
} else {
if((state_val_6886 === (11))){
var inst_6865 = (state_6885[(8)]);
var inst_6874 = (state_6885[(2)]);
var inst_6862 = inst_6865;
var state_6885__$1 = (function (){var statearr_6895 = state_6885;
(statearr_6895[(10)] = inst_6874);

(statearr_6895[(7)] = inst_6862);

return statearr_6895;
})();
var statearr_6896_6915 = state_6885__$1;
(statearr_6896_6915[(2)] = null);

(statearr_6896_6915[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6886 === (9))){
var inst_6865 = (state_6885[(8)]);
var state_6885__$1 = state_6885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6885__$1,(11),out,inst_6865);
} else {
if((state_val_6886 === (5))){
var inst_6865 = (state_6885[(8)]);
var inst_6862 = (state_6885[(7)]);
var inst_6869 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_6865,inst_6862);
var state_6885__$1 = state_6885;
if(inst_6869){
var statearr_6898_6916 = state_6885__$1;
(statearr_6898_6916[(1)] = (8));

} else {
var statearr_6899_6917 = state_6885__$1;
(statearr_6899_6917[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6886 === (10))){
var inst_6877 = (state_6885[(2)]);
var state_6885__$1 = state_6885;
var statearr_6900_6918 = state_6885__$1;
(statearr_6900_6918[(2)] = inst_6877);

(statearr_6900_6918[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6886 === (8))){
var inst_6862 = (state_6885[(7)]);
var tmp6897 = inst_6862;
var inst_6862__$1 = tmp6897;
var state_6885__$1 = (function (){var statearr_6901 = state_6885;
(statearr_6901[(7)] = inst_6862__$1);

return statearr_6901;
})();
var statearr_6902_6919 = state_6885__$1;
(statearr_6902_6919[(2)] = null);

(statearr_6902_6919[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__5102__auto__ = null;
var cljs$core$async$state_machine__5102__auto____0 = (function (){
var statearr_6903 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6903[(0)] = cljs$core$async$state_machine__5102__auto__);

(statearr_6903[(1)] = (1));

return statearr_6903;
});
var cljs$core$async$state_machine__5102__auto____1 = (function (state_6885){
while(true){
var ret_value__5103__auto__ = (function (){try{while(true){
var result__5104__auto__ = switch__5101__auto__(state_6885);
if(cljs.core.keyword_identical_QMARK_(result__5104__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__5104__auto__;
}
break;
}
}catch (e6904){var ex__5105__auto__ = e6904;
var statearr_6905_6920 = state_6885;
(statearr_6905_6920[(2)] = ex__5105__auto__);


if(cljs.core.seq((state_6885[(4)]))){
var statearr_6906_6921 = state_6885;
(statearr_6906_6921[(1)] = cljs.core.first((state_6885[(4)])));

} else {
throw ex__5105__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5103__auto__,cljs.core.cst$kw$recur)){
var G__6922 = state_6885;
state_6885 = G__6922;
continue;
} else {
return ret_value__5103__auto__;
}
break;
}
});
cljs$core$async$state_machine__5102__auto__ = function(state_6885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5102__auto____1.call(this,state_6885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5102__auto____0;
cljs$core$async$state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5102__auto____1;
return cljs$core$async$state_machine__5102__auto__;
})()
})();
var state__5178__auto__ = (function (){var statearr_6907 = (f__5177__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5177__auto__.cljs$core$IFn$_invoke$arity$0() : f__5177__auto__.call(null));
(statearr_6907[(6)] = c__5176__auto___6909);

return statearr_6907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5178__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__6924 = arguments.length;
switch (G__6924) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__5176__auto___6991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__5177__auto__ = (function (){var switch__5101__auto__ = (function (state_6962){
var state_val_6963 = (state_6962[(1)]);
if((state_val_6963 === (7))){
var inst_6958 = (state_6962[(2)]);
var state_6962__$1 = state_6962;
var statearr_6964_6992 = state_6962__$1;
(statearr_6964_6992[(2)] = inst_6958);

(statearr_6964_6992[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6963 === (1))){
var inst_6925 = (new Array(n));
var inst_6926 = inst_6925;
var inst_6927 = (0);
var state_6962__$1 = (function (){var statearr_6965 = state_6962;
(statearr_6965[(7)] = inst_6926);

(statearr_6965[(8)] = inst_6927);

return statearr_6965;
})();
var statearr_6966_6993 = state_6962__$1;
(statearr_6966_6993[(2)] = null);

(statearr_6966_6993[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6963 === (4))){
var inst_6930 = (state_6962[(9)]);
var inst_6930__$1 = (state_6962[(2)]);
var inst_6931 = (inst_6930__$1 == null);
var inst_6932 = cljs.core.not(inst_6931);
var state_6962__$1 = (function (){var statearr_6967 = state_6962;
(statearr_6967[(9)] = inst_6930__$1);

return statearr_6967;
})();
if(inst_6932){
var statearr_6968_6994 = state_6962__$1;
(statearr_6968_6994[(1)] = (5));

} else {
var statearr_6969_6995 = state_6962__$1;
(statearr_6969_6995[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6963 === (15))){
var inst_6952 = (state_6962[(2)]);
var state_6962__$1 = state_6962;
var statearr_6970_6996 = state_6962__$1;
(statearr_6970_6996[(2)] = inst_6952);

(statearr_6970_6996[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6963 === (13))){
var state_6962__$1 = state_6962;
var statearr_6971_6997 = state_6962__$1;
(statearr_6971_6997[(2)] = null);

(statearr_6971_6997[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6963 === (6))){
var inst_6927 = (state_6962[(8)]);
var inst_6948 = (inst_6927 > (0));
var state_6962__$1 = state_6962;
if(cljs.core.truth_(inst_6948)){
var statearr_6972_6998 = state_6962__$1;
(statearr_6972_6998[(1)] = (12));

} else {
var statearr_6973_6999 = state_6962__$1;
(statearr_6973_6999[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6963 === (3))){
var inst_6960 = (state_6962[(2)]);
var state_6962__$1 = state_6962;
return cljs.core.async.impl.ioc_helpers.return_chan(state_6962__$1,inst_6960);
} else {
if((state_val_6963 === (12))){
var inst_6926 = (state_6962[(7)]);
var inst_6950 = cljs.core.vec(inst_6926);
var state_6962__$1 = state_6962;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6962__$1,(15),out,inst_6950);
} else {
if((state_val_6963 === (2))){
var state_6962__$1 = state_6962;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_6962__$1,(4),ch);
} else {
if((state_val_6963 === (11))){
var inst_6942 = (state_6962[(2)]);
var inst_6943 = (new Array(n));
var inst_6926 = inst_6943;
var inst_6927 = (0);
var state_6962__$1 = (function (){var statearr_6974 = state_6962;
(statearr_6974[(7)] = inst_6926);

(statearr_6974[(10)] = inst_6942);

(statearr_6974[(8)] = inst_6927);

return statearr_6974;
})();
var statearr_6975_7000 = state_6962__$1;
(statearr_6975_7000[(2)] = null);

(statearr_6975_7000[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6963 === (9))){
var inst_6926 = (state_6962[(7)]);
var inst_6940 = cljs.core.vec(inst_6926);
var state_6962__$1 = state_6962;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_6962__$1,(11),out,inst_6940);
} else {
if((state_val_6963 === (5))){
var inst_6930 = (state_6962[(9)]);
var inst_6926 = (state_6962[(7)]);
var inst_6935 = (state_6962[(11)]);
var inst_6927 = (state_6962[(8)]);
var inst_6934 = (inst_6926[inst_6927] = inst_6930);
var inst_6935__$1 = (inst_6927 + (1));
var inst_6936 = (inst_6935__$1 < n);
var state_6962__$1 = (function (){var statearr_6976 = state_6962;
(statearr_6976[(12)] = inst_6934);

(statearr_6976[(11)] = inst_6935__$1);

return statearr_6976;
})();
if(cljs.core.truth_(inst_6936)){
var statearr_6977_7001 = state_6962__$1;
(statearr_6977_7001[(1)] = (8));

} else {
var statearr_6978_7002 = state_6962__$1;
(statearr_6978_7002[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_6963 === (14))){
var inst_6955 = (state_6962[(2)]);
var inst_6956 = cljs.core.async.close_BANG_(out);
var state_6962__$1 = (function (){var statearr_6980 = state_6962;
(statearr_6980[(13)] = inst_6955);

return statearr_6980;
})();
var statearr_6981_7003 = state_6962__$1;
(statearr_6981_7003[(2)] = inst_6956);

(statearr_6981_7003[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6963 === (10))){
var inst_6946 = (state_6962[(2)]);
var state_6962__$1 = state_6962;
var statearr_6982_7004 = state_6962__$1;
(statearr_6982_7004[(2)] = inst_6946);

(statearr_6982_7004[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_6963 === (8))){
var inst_6926 = (state_6962[(7)]);
var inst_6935 = (state_6962[(11)]);
var tmp6979 = inst_6926;
var inst_6926__$1 = tmp6979;
var inst_6927 = inst_6935;
var state_6962__$1 = (function (){var statearr_6983 = state_6962;
(statearr_6983[(7)] = inst_6926__$1);

(statearr_6983[(8)] = inst_6927);

return statearr_6983;
})();
var statearr_6984_7005 = state_6962__$1;
(statearr_6984_7005[(2)] = null);

(statearr_6984_7005[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__5102__auto__ = null;
var cljs$core$async$state_machine__5102__auto____0 = (function (){
var statearr_6985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6985[(0)] = cljs$core$async$state_machine__5102__auto__);

(statearr_6985[(1)] = (1));

return statearr_6985;
});
var cljs$core$async$state_machine__5102__auto____1 = (function (state_6962){
while(true){
var ret_value__5103__auto__ = (function (){try{while(true){
var result__5104__auto__ = switch__5101__auto__(state_6962);
if(cljs.core.keyword_identical_QMARK_(result__5104__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__5104__auto__;
}
break;
}
}catch (e6986){var ex__5105__auto__ = e6986;
var statearr_6987_7006 = state_6962;
(statearr_6987_7006[(2)] = ex__5105__auto__);


if(cljs.core.seq((state_6962[(4)]))){
var statearr_6988_7007 = state_6962;
(statearr_6988_7007[(1)] = cljs.core.first((state_6962[(4)])));

} else {
throw ex__5105__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5103__auto__,cljs.core.cst$kw$recur)){
var G__7008 = state_6962;
state_6962 = G__7008;
continue;
} else {
return ret_value__5103__auto__;
}
break;
}
});
cljs$core$async$state_machine__5102__auto__ = function(state_6962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5102__auto____1.call(this,state_6962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5102__auto____0;
cljs$core$async$state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5102__auto____1;
return cljs$core$async$state_machine__5102__auto__;
})()
})();
var state__5178__auto__ = (function (){var statearr_6989 = (f__5177__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5177__auto__.cljs$core$IFn$_invoke$arity$0() : f__5177__auto__.call(null));
(statearr_6989[(6)] = c__5176__auto___6991);

return statearr_6989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5178__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__7010 = arguments.length;
switch (G__7010) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__5176__auto___7088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__5177__auto__ = (function (){var switch__5101__auto__ = (function (state_7055){
var state_val_7056 = (state_7055[(1)]);
if((state_val_7056 === (7))){
var inst_7051 = (state_7055[(2)]);
var state_7055__$1 = state_7055;
var statearr_7057_7089 = state_7055__$1;
(statearr_7057_7089[(2)] = inst_7051);

(statearr_7057_7089[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7056 === (1))){
var inst_7011 = [];
var inst_7012 = inst_7011;
var inst_7013 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_7055__$1 = (function (){var statearr_7058 = state_7055;
(statearr_7058[(7)] = inst_7013);

(statearr_7058[(8)] = inst_7012);

return statearr_7058;
})();
var statearr_7059_7090 = state_7055__$1;
(statearr_7059_7090[(2)] = null);

(statearr_7059_7090[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7056 === (4))){
var inst_7016 = (state_7055[(9)]);
var inst_7016__$1 = (state_7055[(2)]);
var inst_7017 = (inst_7016__$1 == null);
var inst_7018 = cljs.core.not(inst_7017);
var state_7055__$1 = (function (){var statearr_7060 = state_7055;
(statearr_7060[(9)] = inst_7016__$1);

return statearr_7060;
})();
if(inst_7018){
var statearr_7061_7091 = state_7055__$1;
(statearr_7061_7091[(1)] = (5));

} else {
var statearr_7062_7092 = state_7055__$1;
(statearr_7062_7092[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7056 === (15))){
var inst_7012 = (state_7055[(8)]);
var inst_7043 = cljs.core.vec(inst_7012);
var state_7055__$1 = state_7055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7055__$1,(18),out,inst_7043);
} else {
if((state_val_7056 === (13))){
var inst_7038 = (state_7055[(2)]);
var state_7055__$1 = state_7055;
var statearr_7063_7093 = state_7055__$1;
(statearr_7063_7093[(2)] = inst_7038);

(statearr_7063_7093[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7056 === (6))){
var inst_7012 = (state_7055[(8)]);
var inst_7040 = inst_7012.length;
var inst_7041 = (inst_7040 > (0));
var state_7055__$1 = state_7055;
if(cljs.core.truth_(inst_7041)){
var statearr_7064_7094 = state_7055__$1;
(statearr_7064_7094[(1)] = (15));

} else {
var statearr_7065_7095 = state_7055__$1;
(statearr_7065_7095[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7056 === (17))){
var inst_7048 = (state_7055[(2)]);
var inst_7049 = cljs.core.async.close_BANG_(out);
var state_7055__$1 = (function (){var statearr_7066 = state_7055;
(statearr_7066[(10)] = inst_7048);

return statearr_7066;
})();
var statearr_7067_7096 = state_7055__$1;
(statearr_7067_7096[(2)] = inst_7049);

(statearr_7067_7096[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7056 === (3))){
var inst_7053 = (state_7055[(2)]);
var state_7055__$1 = state_7055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7055__$1,inst_7053);
} else {
if((state_val_7056 === (12))){
var inst_7012 = (state_7055[(8)]);
var inst_7031 = cljs.core.vec(inst_7012);
var state_7055__$1 = state_7055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7055__$1,(14),out,inst_7031);
} else {
if((state_val_7056 === (2))){
var state_7055__$1 = state_7055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7055__$1,(4),ch);
} else {
if((state_val_7056 === (11))){
var inst_7016 = (state_7055[(9)]);
var inst_7020 = (state_7055[(11)]);
var inst_7012 = (state_7055[(8)]);
var inst_7028 = inst_7012.push(inst_7016);
var tmp7068 = inst_7012;
var inst_7012__$1 = tmp7068;
var inst_7013 = inst_7020;
var state_7055__$1 = (function (){var statearr_7069 = state_7055;
(statearr_7069[(12)] = inst_7028);

(statearr_7069[(7)] = inst_7013);

(statearr_7069[(8)] = inst_7012__$1);

return statearr_7069;
})();
var statearr_7070_7097 = state_7055__$1;
(statearr_7070_7097[(2)] = null);

(statearr_7070_7097[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7056 === (9))){
var inst_7013 = (state_7055[(7)]);
var inst_7024 = cljs.core.keyword_identical_QMARK_(inst_7013,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var state_7055__$1 = state_7055;
var statearr_7071_7098 = state_7055__$1;
(statearr_7071_7098[(2)] = inst_7024);

(statearr_7071_7098[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7056 === (5))){
var inst_7021 = (state_7055[(13)]);
var inst_7013 = (state_7055[(7)]);
var inst_7016 = (state_7055[(9)]);
var inst_7020 = (state_7055[(11)]);
var inst_7020__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_7016) : f.call(null,inst_7016));
var inst_7021__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_7020__$1,inst_7013);
var state_7055__$1 = (function (){var statearr_7072 = state_7055;
(statearr_7072[(13)] = inst_7021__$1);

(statearr_7072[(11)] = inst_7020__$1);

return statearr_7072;
})();
if(inst_7021__$1){
var statearr_7073_7099 = state_7055__$1;
(statearr_7073_7099[(1)] = (8));

} else {
var statearr_7074_7100 = state_7055__$1;
(statearr_7074_7100[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7056 === (14))){
var inst_7016 = (state_7055[(9)]);
var inst_7020 = (state_7055[(11)]);
var inst_7033 = (state_7055[(2)]);
var inst_7034 = [];
var inst_7035 = inst_7034.push(inst_7016);
var inst_7012 = inst_7034;
var inst_7013 = inst_7020;
var state_7055__$1 = (function (){var statearr_7075 = state_7055;
(statearr_7075[(14)] = inst_7033);

(statearr_7075[(7)] = inst_7013);

(statearr_7075[(15)] = inst_7035);

(statearr_7075[(8)] = inst_7012);

return statearr_7075;
})();
var statearr_7076_7101 = state_7055__$1;
(statearr_7076_7101[(2)] = null);

(statearr_7076_7101[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7056 === (16))){
var state_7055__$1 = state_7055;
var statearr_7077_7102 = state_7055__$1;
(statearr_7077_7102[(2)] = null);

(statearr_7077_7102[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7056 === (10))){
var inst_7026 = (state_7055[(2)]);
var state_7055__$1 = state_7055;
if(cljs.core.truth_(inst_7026)){
var statearr_7078_7103 = state_7055__$1;
(statearr_7078_7103[(1)] = (11));

} else {
var statearr_7079_7104 = state_7055__$1;
(statearr_7079_7104[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7056 === (18))){
var inst_7045 = (state_7055[(2)]);
var state_7055__$1 = state_7055;
var statearr_7080_7105 = state_7055__$1;
(statearr_7080_7105[(2)] = inst_7045);

(statearr_7080_7105[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7056 === (8))){
var inst_7021 = (state_7055[(13)]);
var state_7055__$1 = state_7055;
var statearr_7081_7106 = state_7055__$1;
(statearr_7081_7106[(2)] = inst_7021);

(statearr_7081_7106[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__5102__auto__ = null;
var cljs$core$async$state_machine__5102__auto____0 = (function (){
var statearr_7082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7082[(0)] = cljs$core$async$state_machine__5102__auto__);

(statearr_7082[(1)] = (1));

return statearr_7082;
});
var cljs$core$async$state_machine__5102__auto____1 = (function (state_7055){
while(true){
var ret_value__5103__auto__ = (function (){try{while(true){
var result__5104__auto__ = switch__5101__auto__(state_7055);
if(cljs.core.keyword_identical_QMARK_(result__5104__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__5104__auto__;
}
break;
}
}catch (e7083){var ex__5105__auto__ = e7083;
var statearr_7084_7107 = state_7055;
(statearr_7084_7107[(2)] = ex__5105__auto__);


if(cljs.core.seq((state_7055[(4)]))){
var statearr_7085_7108 = state_7055;
(statearr_7085_7108[(1)] = cljs.core.first((state_7055[(4)])));

} else {
throw ex__5105__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5103__auto__,cljs.core.cst$kw$recur)){
var G__7109 = state_7055;
state_7055 = G__7109;
continue;
} else {
return ret_value__5103__auto__;
}
break;
}
});
cljs$core$async$state_machine__5102__auto__ = function(state_7055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__5102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__5102__auto____1.call(this,state_7055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__5102__auto____0;
cljs$core$async$state_machine__5102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__5102__auto____1;
return cljs$core$async$state_machine__5102__auto__;
})()
})();
var state__5178__auto__ = (function (){var statearr_7086 = (f__5177__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5177__auto__.cljs$core$IFn$_invoke$arity$0() : f__5177__auto__.call(null));
(statearr_7086[(6)] = c__5176__auto___7088);

return statearr_7086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5178__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

