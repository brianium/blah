// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('blah.dev.wav');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('blah.transforms');
goog.require('goog.dom');
goog.require('integrant.core');
blah.dev.wav.encode_wav = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (frames){
var num_channels = cljs.core.count(cljs.core.first(frames));
var len = cljs.core.count(frames);
var buffer = (new ArrayBuffer(((len * num_channels) * (2))));
var frames__$1 = frames;
var view = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(new DataView(buffer))], null);
while(true){
if(cljs.core.not(cljs.core.seq(frames__$1))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$view,cljs.core.second(view),cljs.core.cst$kw$ch,num_channels], null);
} else {
var frame = cljs.core.first(frames__$1);
var G__2760 = cljs.core.rest(frames__$1);
var G__2761 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (frames__$1,view,frame,num_channels,len,buffer){
return (function (p__2755,sample){
var vec__2756 = p__2755;
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2756,(0),null);
var data_view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2756,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(offset + (2)),(function (){var G__2759 = data_view;
G__2759.setInt16(offset,sample,true);

return G__2759;
})()], null);
});})(frames__$1,view,frame,num_channels,len,buffer))
,view,frame);
frames__$1 = G__2760;
view = G__2761;
continue;
}
break;
}
}));
/**
 * Set  string on the given DataView
 */
blah.dev.wav.set_string = (function blah$dev$wav$set_string(dv,offset,string){
var n__4741__auto__ = cljs.core.count(string);
var i = (0);
while(true){
if((i < n__4741__auto__)){
dv.setUint8((offset + i),string.charCodeAt(i));

var G__2762 = (i + (1));
i = G__2762;
continue;
} else {
return null;
}
break;
}
});
/**
 * Create a Blob according to the WAV file specification
 */
blah.dev.wav.to_wav = (function blah$dev$wav$to_wav(context,encoded){
var map__2768 = cljs.core.first(encoded);
var map__2768__$1 = cljs.core.__destructure_map(map__2768);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2768__$1,cljs.core.cst$kw$ch);
var views = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__2763_SHARP_,p2__2764_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__2763_SHARP_,cljs.core.cst$kw$view.cljs$core$IFn$_invoke$arity$1(p2__2764_SHARP_));
}),cljs.core.PersistentVector.EMPTY,encoded);
var length = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__2765_SHARP_,p2__2766_SHARP_){
return (p1__2765_SHARP_ + p2__2766_SHARP_.byteLength);
}),(0),views);
var header = (new DataView((new ArrayBuffer((44)))));
var sample_rate = context.sampleRate;
blah.dev.wav.set_string(header,(0),"RIFF");

header.setUint32((4),((36) + length),true);

blah.dev.wav.set_string(header,(8),"WAVE");

blah.dev.wav.set_string(header,(12),"fmt ");

header.setUint32((16),(16),true);

header.setUint16((20),(1),true);

header.setUint16((22),ch,true);

header.setUint32((24),sample_rate,true);

header.setUint32((28),((4) * sample_rate),true);

header.setUint16((32),((2) * ch),true);

header.setUint16((34),(16),true);

blah.dev.wav.set_string(header,(36),"data");

header.setUint32((40),length,true);

var G__2770 = cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [header], null),views));
var fexpr__2769 = (function (p1__2767_SHARP_){
return (new Blob(p1__2767_SHARP_,({"type": "audio/wav"})));
});
return fexpr__2769(G__2770);
});
/**
 * Convert data to wav file and create a download
 */
blah.dev.wav.create_download = (function blah$dev$wav$create_download(context,data){
var blob = blah.dev.wav.to_wav(context,data);
var url = URL.createObjectURL(blob);
var downloads = goog.dom.getElement("downloads");
var anchor = goog.dom.createElement("a");
var list_item = goog.dom.createElement("li");
var file_name = ["recording-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Date.now()),".wav"].join('');
(anchor.href = url);

(anchor.download = file_name);

goog.dom.append(anchor,file_name);

goog.dom.appendChild(list_item,anchor);

return goog.dom.appendChild(downloads,list_item);
});
blah.dev.wav.config = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$blah_SLASH_start,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,integrant.core.ref(cljs.core.cst$kw$ui_SLASH_state),cljs.core.cst$kw$xform,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(blah.transforms.pcm16,blah.transforms.frames,blah.dev.wav.encode_wav)], null),cljs.core.cst$kw$blah_SLASH_data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,integrant.core.ref(cljs.core.cst$kw$blah_SLASH_state),cljs.core.cst$kw$update_DASH_fn,cljs.core.conj], null),cljs.core.cst$kw$blah_SLASH_stop,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,integrant.core.ref(cljs.core.cst$kw$blah_SLASH_state),cljs.core.cst$kw$stop_DASH_fn,blah.dev.wav.create_download], null)], null);
