// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.toolbox.ajax');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('promesa.core');
goog.require('ajax.core');
keechma.toolbox.ajax.make_error_handler = (function keechma$toolbox$ajax$make_error_handler(reject){
return (function (error){
var G__23477 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("AJAX Error",error);
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__23477) : reject.call(null,G__23477));
});
});
keechma.toolbox.ajax.promisify = (function keechma$toolbox$ajax$promisify(method){
return (function (url,opts){
return promesa.core.promise((function (resolve,reject,on_cancel){
var r = (function (){var G__23478 = url;
var G__23479 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$handler,resolve,cljs.core.cst$kw$error_DASH_handler,keechma.toolbox.ajax.make_error_handler(reject)], null)], 0));
return (method.cljs$core$IFn$_invoke$arity$2 ? method.cljs$core$IFn$_invoke$arity$2(G__23478,G__23479) : method.call(null,G__23478,G__23479));
})();
if(cljs.core.fn_QMARK_(on_cancel)){
var G__23480 = ((function (r){
return (function (){
return ajax.core.abort(r);
});})(r))
;
return (on_cancel.cljs$core$IFn$_invoke$arity$1 ? on_cancel.cljs$core$IFn$_invoke$arity$1(G__23480) : on_cancel.call(null,G__23480));
} else {
return null;
}
}));
});
});
keechma.toolbox.ajax.GET = keechma.toolbox.ajax.promisify(ajax.core.GET);
keechma.toolbox.ajax.HEAD = keechma.toolbox.ajax.promisify(ajax.core.HEAD);
keechma.toolbox.ajax.POST = keechma.toolbox.ajax.promisify(ajax.core.POST);
keechma.toolbox.ajax.PUT = keechma.toolbox.ajax.promisify(ajax.core.PUT);
keechma.toolbox.ajax.DELETE = keechma.toolbox.ajax.promisify(ajax.core.DELETE);
keechma.toolbox.ajax.OPTIONS = keechma.toolbox.ajax.promisify(ajax.core.OPTIONS);
keechma.toolbox.ajax.TRACE = keechma.toolbox.ajax.promisify(ajax.core.TRACE);
keechma.toolbox.ajax.PATCH = keechma.toolbox.ajax.promisify(ajax.core.PATCH);