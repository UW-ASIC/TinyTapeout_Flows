(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(l){if(l.ep)return;l.ep=!0;const a=r(l);fetch(l.href,a)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(n){if(n.ep)return;n.ep=!0;const l=t(n);fetch(n.href,l)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(n){if(n.ep)return;n.ep=!0;const l=t(n);fetch(n.href,l)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(n){if(n.ep)return;n.ep=!0;const l=t(n);fetch(n.href,l)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(n){if(n.ep)return;n.ep=!0;const l=t(n);fetch(n.href,l)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(n){if(n.ep)return;n.ep=!0;const l=t(n);fetch(n.href,l)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(n){if(n.ep)return;n.ep=!0;const l=t(n);fetch(n.href,l)}})();function rc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vi={exports:{}},el={},Hi={exports:{}},N={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Yr=Symbol.for("react.element"),nc=Symbol.for("react.portal"),lc=Symbol.for("react.fragment"),ac=Symbol.for("react.strict_mode"),oc=Symbol.for("react.profiler"),ic=Symbol.for("react.provider"),uc=Symbol.for("react.context"),sc=Symbol.for("react.forward_ref"),cc=Symbol.for("react.suspense"),fc=Symbol.for("react.memo"),dc=Symbol.for("react.lazy"),Do=Symbol.iterator;function pc(e){return e===null||typeof e!="object"?null:(e=Do&&e[Do]||e["@@iterator"],typeof e=="function"?e:null)}var Bi={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$i=Object.assign,Qi={};function lr(e,t,r){this.props=e,this.context=t,this.refs=Qi,this.updater=r||Bi}lr.prototype.isReactComponent={};lr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};lr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yi(){}Yi.prototype=lr.prototype;function ja(e,t,r){this.props=e,this.context=t,this.refs=Qi,this.updater=r||Bi}var Aa=ja.prototype=new Yi;Aa.constructor=ja;$i(Aa,lr.prototype);Aa.isPureReactComponent=!0;var Oo=Array.isArray,Gi=Object.prototype.hasOwnProperty,Fa={current:null},qi={key:!0,ref:!0,__self:!0,__source:!0};function Ki(e,t,r){var n,l={},a=null,o=null;if(t!=null)for(n in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Gi.call(t,n)&&!qi.hasOwnProperty(n)&&(l[n]=t[n]);var i=arguments.length-2;if(i===1)l.children=r;else if(1<i){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(n in i=e.defaultProps,i)l[n]===void 0&&(l[n]=i[n]);return{$$typeof:Yr,type:e,key:a,ref:o,props:l,_owner:Fa.current}}function mc(e,t){return{$$typeof:Yr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ua(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yr}function hc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Ro=/\/+/g;function bl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hc(""+e.key):t.toString(36)}function vn(e,t,r,n,l){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Yr:case nc:o=!0}}if(o)return o=e,l=l(o),e=n===""?"."+bl(o,0):n,Oo(l)?(r="",e!=null&&(r=e.replace(Ro,"$&/")+"/"),vn(l,t,r,"",function(c){return c})):l!=null&&(Ua(l)&&(l=mc(l,r+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Ro,"$&/")+"/")+e)),t.push(l)),1;if(o=0,n=n===""?".":n+":",Oo(e))for(var i=0;i<e.length;i++){a=e[i];var u=n+bl(a,i);o+=vn(a,t,r,u,l)}else if(u=pc(e),typeof u=="function")for(e=u.call(e),i=0;!(a=e.next()).done;)a=a.value,u=n+bl(a,i++),o+=vn(a,t,r,u,l);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function en(e,t,r){if(e==null)return e;var n=[],l=0;return vn(e,n,"","",function(a){return t.call(r,a,l++)}),n}function gc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ie={current:null},bn={transition:null},yc={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:bn,ReactCurrentOwner:Fa};function Xi(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:en,forEach:function(e,t,r){en(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return en(e,function(){t++}),t},toArray:function(e){return en(e,function(t){return t})||[]},only:function(e){if(!Ua(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=lr;N.Fragment=lc;N.Profiler=oc;N.PureComponent=ja;N.StrictMode=ac;N.Suspense=cc;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yc;N.act=Xi;N.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=$i({},e.props),l=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Fa.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(u in t)Gi.call(t,u)&&!qi.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&i!==void 0?i[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){i=Array(u);for(var c=0;c<u;c++)i[c]=arguments[c+2];n.children=i}return{$$typeof:Yr,type:e.type,key:l,ref:a,props:n,_owner:o}};N.createContext=function(e){return e={$$typeof:uc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ic,_context:e},e.Consumer=e};N.createElement=Ki;N.createFactory=function(e){var t=Ki.bind(null,e);return t.type=e,t};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:sc,render:e}};N.isValidElement=Ua;N.lazy=function(e){return{$$typeof:dc,_payload:{_status:-1,_result:e},_init:gc}};N.memo=function(e,t){return{$$typeof:fc,type:e,compare:t===void 0?null:t}};N.startTransition=function(e){var t=bn.transition;bn.transition={};try{e()}finally{bn.transition=t}};N.unstable_act=Xi;N.useCallback=function(e,t){return ie.current.useCallback(e,t)};N.useContext=function(e){return ie.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return ie.current.useDeferredValue(e)};N.useEffect=function(e,t){return ie.current.useEffect(e,t)};N.useId=function(){return ie.current.useId()};N.useImperativeHandle=function(e,t,r){return ie.current.useImperativeHandle(e,t,r)};N.useInsertionEffect=function(e,t){return ie.current.useInsertionEffect(e,t)};N.useLayoutEffect=function(e,t){return ie.current.useLayoutEffect(e,t)};N.useMemo=function(e,t){return ie.current.useMemo(e,t)};N.useReducer=function(e,t,r){return ie.current.useReducer(e,t,r)};N.useRef=function(e){return ie.current.useRef(e)};N.useState=function(e){return ie.current.useState(e)};N.useSyncExternalStore=function(e,t,r){return ie.current.useSyncExternalStore(e,t,r)};N.useTransition=function(){return ie.current.useTransition()};N.version="18.3.1";Hi.exports=N;var et=Hi.exports;const vc=rc(et);/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var bc=et,kc=Symbol.for("react.element"),wc=Symbol.for("react.fragment"),Sc=Object.prototype.hasOwnProperty,_c=bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xc={key:!0,ref:!0,__self:!0,__source:!0};function Ji(e,t,r){var n,l={},a=null,o=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)Sc.call(t,n)&&!xc.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)l[n]===void 0&&(l[n]=t[n]);return{$$typeof:kc,type:e,key:a,ref:o,props:l,_owner:_c.current}}el.Fragment=wc;el.jsx=Ji;el.jsxs=Ji;Vi.exports=el;var z=Vi.exports,$l={},Zi={exports:{}},ve={},eu={exports:{}},tu={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(e){function t(S,P){var T=S.length;S.push(P);e:for(;0<T;){var B=T-1>>>1,q=S[B];if(0<l(q,P))S[B]=P,S[T]=q,T=B;else break e}}function r(S){return S.length===0?null:S[0]}function n(S){if(S.length===0)return null;var P=S[0],T=S.pop();if(T!==P){S[0]=T;e:for(var B=0,q=S.length,Jr=q>>>1;B<Jr;){var gt=2*(B+1)-1,vl=S[gt],yt=gt+1,Zr=S[yt];if(0>l(vl,T))yt<q&&0>l(Zr,vl)?(S[B]=Zr,S[yt]=T,B=yt):(S[B]=vl,S[gt]=T,B=gt);else if(yt<q&&0>l(Zr,T))S[B]=Zr,S[yt]=T,B=yt;else break e}}return P}function l(S,P){var T=S.sortIndex-P.sortIndex;return T!==0?T:S.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,i=o.now();e.unstable_now=function(){return o.now()-i}}var u=[],c=[],h=1,m=null,p=3,v=!1,b=!1,k=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(S){for(var P=r(c);P!==null;){if(P.callback===null)n(c);else if(P.startTime<=S)n(c),P.sortIndex=P.expirationTime,t(u,P);else break;P=r(c)}}function y(S){if(k=!1,d(S),!b)if(r(u)!==null)b=!0,gl(_);else{var P=r(c);P!==null&&yl(y,P.startTime-S)}}function _(S,P){b=!1,k&&(k=!1,f(E),E=-1),v=!0;var T=p;try{for(d(P),m=r(u);m!==null&&(!(m.expirationTime>P)||S&&!Ee());){var B=m.callback;if(typeof B=="function"){m.callback=null,p=m.priorityLevel;var q=B(m.expirationTime<=P);P=e.unstable_now(),typeof q=="function"?m.callback=q:m===r(u)&&n(u),d(P)}else n(u);m=r(u)}if(m!==null)var Jr=!0;else{var gt=r(c);gt!==null&&yl(y,gt.startTime-P),Jr=!1}return Jr}finally{m=null,p=T,v=!1}}var x=!1,C=null,E=-1,H=5,L=-1;function Ee(){return!(e.unstable_now()-L<H)}function ir(){if(C!==null){var S=e.unstable_now();L=S;var P=!0;try{P=C(!0,S)}finally{P?ur():(x=!1,C=null)}}else x=!1}var ur;if(typeof s=="function")ur=function(){s(ir)};else if(typeof MessageChannel<"u"){var Mo=new MessageChannel,tc=Mo.port2;Mo.port1.onmessage=ir,ur=function(){tc.postMessage(null)}}else ur=function(){j(ir,0)};function gl(S){C=S,x||(x=!0,ur())}function yl(S,P){E=j(function(){S(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){b||v||(b=!0,gl(_))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(S){switch(p){case 1:case 2:case 3:var P=3;break;default:P=p}var T=p;p=P;try{return S()}finally{p=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,P){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var T=p;p=S;try{return P()}finally{p=T}},e.unstable_scheduleCallback=function(S,P,T){var B=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?B+T:B):T=B,S){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=T+q,S={id:h++,callback:P,priorityLevel:S,startTime:T,expirationTime:q,sortIndex:-1},T>B?(S.sortIndex=T,t(c,S),r(u)===null&&S===r(c)&&(k?(f(E),E=-1):k=!0,yl(y,T-B))):(S.sortIndex=q,t(u,S),b||v||(b=!0,gl(_))),S},e.unstable_shouldYield=Ee,e.unstable_wrapCallback=function(S){var P=p;return function(){var T=p;p=P;try{return S.apply(this,arguments)}finally{p=T}}}})(tu);eu.exports=tu;var Cc=eu.exports;/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Ec=et,ye=Cc;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ru=new Set,Lr={};function Lt(e,t){Xt(e,t),Xt(e+"Capture",t)}function Xt(e,t){for(Lr[e]=t,e=0;e<t.length;e++)ru.add(t[e])}var Be=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ql=Object.prototype.hasOwnProperty,Pc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Io={},jo={};function Tc(e){return Ql.call(jo,e)?!0:Ql.call(Io,e)?!1:Pc.test(e)?jo[e]=!0:(Io[e]=!0,!1)}function Nc(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lc(e,t,r,n){if(t===null||typeof t>"u"||Nc(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,r,n,l,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wa=/[\-:]([a-z])/g;function Va(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wa,Va);ee[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wa,Va);ee[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wa,Va);ee[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ha(e,t,r,n){var l=ee.hasOwnProperty(t)?ee[t]:null;(l!==null?l.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lc(t,r,l,n)&&(r=null),n||l===null?Tc(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,n=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Ge=Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tn=Symbol.for("react.element"),Dt=Symbol.for("react.portal"),Ot=Symbol.for("react.fragment"),Ba=Symbol.for("react.strict_mode"),Yl=Symbol.for("react.profiler"),nu=Symbol.for("react.provider"),lu=Symbol.for("react.context"),$a=Symbol.for("react.forward_ref"),Gl=Symbol.for("react.suspense"),ql=Symbol.for("react.suspense_list"),Qa=Symbol.for("react.memo"),Ke=Symbol.for("react.lazy"),au=Symbol.for("react.offscreen"),Ao=Symbol.iterator;function sr(e){return e===null||typeof e!="object"?null:(e=Ao&&e[Ao]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,kl;function yr(e){if(kl===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);kl=t&&t[1]||""}return`
`+kl+e}var wl=!1;function Sl(e,t){if(!e||wl)return"";wl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),a=n.stack.split(`
`),o=l.length-1,i=a.length-1;1<=o&&0<=i&&l[o]!==a[i];)i--;for(;1<=o&&0<=i;o--,i--)if(l[o]!==a[i]){if(o!==1||i!==1)do if(o--,i--,0>i||l[o]!==a[i]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=i);break}}}finally{wl=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?yr(e):""}function zc(e){switch(e.tag){case 5:return yr(e.type);case 16:return yr("Lazy");case 13:return yr("Suspense");case 19:return yr("SuspenseList");case 0:case 2:case 15:return e=Sl(e.type,!1),e;case 11:return e=Sl(e.type.render,!1),e;case 1:return e=Sl(e.type,!0),e;default:return""}}function Kl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ot:return"Fragment";case Dt:return"Portal";case Yl:return"Profiler";case Ba:return"StrictMode";case Gl:return"Suspense";case ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lu:return(e.displayName||"Context")+".Consumer";case nu:return(e._context.displayName||"Context")+".Provider";case $a:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qa:return t=e.displayName||null,t!==null?t:Kl(e.type)||"Memo";case Ke:t=e._payload,e=e._init;try{return Kl(e(t))}catch{}}return null}function Mc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kl(t);case 8:return t===Ba?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ou(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dc(e){var t=ou(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){n=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rn(e){e._valueTracker||(e._valueTracker=Dc(e))}function iu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=ou(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Ln(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xl(e,t){var r=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Fo(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=ft(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function uu(e,t){t=t.checked,t!=null&&Ha(e,"checked",t,!1)}function Jl(e,t){uu(e,t);var r=ft(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zl(e,t.type,r):t.hasOwnProperty("defaultValue")&&Zl(e,t.type,ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Uo(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Zl(e,t,r){(t!=="number"||Ln(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var vr=Array.isArray;function $t(e,t,r,n){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&n&&(e[r].defaultSelected=!0)}else{for(r=""+ft(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ea(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(g(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wo(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(g(92));if(vr(r)){if(1<r.length)throw Error(g(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ft(r)}}function su(e,t){var r=ft(t.value),n=ft(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Vo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ta(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var nn,fu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(nn=nn||document.createElement("div"),nn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=nn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oc=["Webkit","ms","Moz","O"];Object.keys(wr).forEach(function(e){Oc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wr[t]=wr[e]})});function du(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||wr.hasOwnProperty(e)&&wr[e]?(""+t).trim():t+"px"}function pu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,l=du(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,l):e[r]=l}}var Rc=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ra(e,t){if(t){if(Rc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(g(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(g(61))}if(t.style!=null&&typeof t.style!="object")throw Error(g(62))}}function na(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var la=null;function Ya(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var aa=null,Qt=null,Yt=null;function Ho(e){if(e=Kr(e)){if(typeof aa!="function")throw Error(g(280));var t=e.stateNode;t&&(t=al(t),aa(e.stateNode,e.type,t))}}function mu(e){Qt?Yt?Yt.push(e):Yt=[e]:Qt=e}function hu(){if(Qt){var e=Qt,t=Yt;if(Yt=Qt=null,Ho(e),t)for(e=0;e<t.length;e++)Ho(t[e])}}function gu(e,t){return e(t)}function yu(){}var _l=!1;function vu(e,t,r){if(_l)return e(t,r);_l=!0;try{return gu(e,t,r)}finally{_l=!1,(Qt!==null||Yt!==null)&&(yu(),hu())}}function Mr(e,t){var r=e.stateNode;if(r===null)return null;var n=al(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(g(231,t,typeof r));return r}var oa=!1;if(Be)try{var cr={};Object.defineProperty(cr,"passive",{get:function(){oa=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{oa=!1}function Ic(e,t,r,n,l,a,o,i,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(h){this.onError(h)}}var Sr=!1,zn=null,Mn=!1,ia=null,jc={onError:function(e){Sr=!0,zn=e}};function Ac(e,t,r,n,l,a,o,i,u){Sr=!1,zn=null,Ic.apply(jc,arguments)}function Fc(e,t,r,n,l,a,o,i,u){if(Ac.apply(this,arguments),Sr){if(Sr){var c=zn;Sr=!1,zn=null}else throw Error(g(198));Mn||(Mn=!0,ia=c)}}function zt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function bu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bo(e){if(zt(e)!==e)throw Error(g(188))}function Uc(e){var t=e.alternate;if(!t){if(t=zt(e),t===null)throw Error(g(188));return t!==e?null:e}for(var r=e,n=t;;){var l=r.return;if(l===null)break;var a=l.alternate;if(a===null){if(n=l.return,n!==null){r=n;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===r)return Bo(l),e;if(a===n)return Bo(l),t;a=a.sibling}throw Error(g(188))}if(r.return!==n.return)r=l,n=a;else{for(var o=!1,i=l.child;i;){if(i===r){o=!0,r=l,n=a;break}if(i===n){o=!0,n=l,r=a;break}i=i.sibling}if(!o){for(i=a.child;i;){if(i===r){o=!0,r=a,n=l;break}if(i===n){o=!0,n=a,r=l;break}i=i.sibling}if(!o)throw Error(g(189))}}if(r.alternate!==n)throw Error(g(190))}if(r.tag!==3)throw Error(g(188));return r.stateNode.current===r?e:t}function ku(e){return e=Uc(e),e!==null?wu(e):null}function wu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wu(e);if(t!==null)return t;e=e.sibling}return null}var Su=ye.unstable_scheduleCallback,$o=ye.unstable_cancelCallback,Wc=ye.unstable_shouldYield,Vc=ye.unstable_requestPaint,$=ye.unstable_now,Hc=ye.unstable_getCurrentPriorityLevel,Ga=ye.unstable_ImmediatePriority,_u=ye.unstable_UserBlockingPriority,Dn=ye.unstable_NormalPriority,Bc=ye.unstable_LowPriority,xu=ye.unstable_IdlePriority,tl=null,je=null;function $c(e){if(je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(tl,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:Gc,Qc=Math.log,Yc=Math.LN2;function Gc(e){return e>>>=0,e===0?32:31-(Qc(e)/Yc|0)|0}var ln=64,an=4194304;function br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function On(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,l=e.suspendedLanes,a=e.pingedLanes,o=r&268435455;if(o!==0){var i=o&~l;i!==0?n=br(i):(a&=o,a!==0&&(n=br(a)))}else o=r&~l,o!==0?n=br(o):a!==0&&(n=br(a));if(n===0)return 0;if(t!==0&&t!==n&&!(t&l)&&(l=n&-n,a=t&-t,l>=a||l===16&&(a&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-ze(t),l=1<<r,n|=e[r],t&=~l;return n}function qc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kc(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-ze(a),i=1<<o,u=l[o];u===-1?(!(i&r)||i&n)&&(l[o]=qc(i,t)):u<=t&&(e.expiredLanes|=i),a&=~i}}function ua(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cu(){var e=ln;return ln<<=1,!(ln&4194240)&&(ln=64),e}function xl(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Gr(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ze(t),e[t]=r}function Xc(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-ze(r),a=1<<l;t[l]=0,n[l]=-1,e[l]=-1,r&=~a}}function qa(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-ze(r),l=1<<n;l&t|e[n]&t&&(e[n]|=t),r&=~l}}var D=0;function Eu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pu,Ka,Tu,Nu,Lu,sa=!1,on=[],nt=null,lt=null,at=null,Dr=new Map,Or=new Map,Je=[],Jc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qo(e,t){switch(e){case"focusin":case"focusout":nt=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":at=null;break;case"pointerover":case"pointerout":Dr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Or.delete(t.pointerId)}}function fr(e,t,r,n,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[l]},t!==null&&(t=Kr(t),t!==null&&Ka(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Zc(e,t,r,n,l){switch(t){case"focusin":return nt=fr(nt,e,t,r,n,l),!0;case"dragenter":return lt=fr(lt,e,t,r,n,l),!0;case"mouseover":return at=fr(at,e,t,r,n,l),!0;case"pointerover":var a=l.pointerId;return Dr.set(a,fr(Dr.get(a)||null,e,t,r,n,l)),!0;case"gotpointercapture":return a=l.pointerId,Or.set(a,fr(Or.get(a)||null,e,t,r,n,l)),!0}return!1}function zu(e){var t=kt(e.target);if(t!==null){var r=zt(t);if(r!==null){if(t=r.tag,t===13){if(t=bu(r),t!==null){e.blockedOn=t,Lu(e.priority,function(){Tu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=ca(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);la=n,r.target.dispatchEvent(n),la=null}else return t=Kr(r),t!==null&&Ka(t),e.blockedOn=r,!1;t.shift()}return!0}function Yo(e,t,r){kn(e)&&r.delete(t)}function ef(){sa=!1,nt!==null&&kn(nt)&&(nt=null),lt!==null&&kn(lt)&&(lt=null),at!==null&&kn(at)&&(at=null),Dr.forEach(Yo),Or.forEach(Yo)}function dr(e,t){e.blockedOn===t&&(e.blockedOn=null,sa||(sa=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,ef)))}function Rr(e){function t(l){return dr(l,e)}if(0<on.length){dr(on[0],e);for(var r=1;r<on.length;r++){var n=on[r];n.blockedOn===e&&(n.blockedOn=null)}}for(nt!==null&&dr(nt,e),lt!==null&&dr(lt,e),at!==null&&dr(at,e),Dr.forEach(t),Or.forEach(t),r=0;r<Je.length;r++)n=Je[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Je.length&&(r=Je[0],r.blockedOn===null);)zu(r),r.blockedOn===null&&Je.shift()}var Gt=Ge.ReactCurrentBatchConfig,Rn=!0;function tf(e,t,r,n){var l=D,a=Gt.transition;Gt.transition=null;try{D=1,Xa(e,t,r,n)}finally{D=l,Gt.transition=a}}function rf(e,t,r,n){var l=D,a=Gt.transition;Gt.transition=null;try{D=4,Xa(e,t,r,n)}finally{D=l,Gt.transition=a}}function Xa(e,t,r,n){if(Rn){var l=ca(e,t,r,n);if(l===null)Ol(e,t,n,In,r),Qo(e,n);else if(Zc(l,e,t,r,n))n.stopPropagation();else if(Qo(e,n),t&4&&-1<Jc.indexOf(e)){for(;l!==null;){var a=Kr(l);if(a!==null&&Pu(a),a=ca(e,t,r,n),a===null&&Ol(e,t,n,In,r),a===l)break;l=a}l!==null&&n.stopPropagation()}else Ol(e,t,n,null,r)}}var In=null;function ca(e,t,r,n){if(In=null,e=Ya(n),e=kt(e),e!==null)if(t=zt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=bu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return In=e,null}function Mu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hc()){case Ga:return 1;case _u:return 4;case Dn:case Bc:return 16;case xu:return 536870912;default:return 16}default:return 16}}var tt=null,Ja=null,wn=null;function Du(){if(wn)return wn;var e,t=Ja,r=t.length,n,l="value"in tt?tt.value:tt.textContent,a=l.length;for(e=0;e<r&&t[e]===l[e];e++);var o=r-e;for(n=1;n<=o&&t[r-n]===l[a-n];n++);return wn=l.slice(e,1<n?1-n:void 0)}function Sn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function un(){return!0}function Go(){return!1}function be(e){function t(r,n,l,a,o){this._reactName=r,this._targetInst=l,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(r=e[i],this[i]=r?r(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?un:Go,this.isPropagationStopped=Go,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=un)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=un)},persist:function(){},isPersistent:un}),t}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Za=be(ar),qr=W({},ar,{view:0,detail:0}),nf=be(qr),Cl,El,pr,rl=W({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pr&&(pr&&e.type==="mousemove"?(Cl=e.screenX-pr.screenX,El=e.screenY-pr.screenY):El=Cl=0,pr=e),Cl)},movementY:function(e){return"movementY"in e?e.movementY:El}}),qo=be(rl),lf=W({},rl,{dataTransfer:0}),af=be(lf),of=W({},qr,{relatedTarget:0}),Pl=be(of),uf=W({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),sf=be(uf),cf=W({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ff=be(cf),df=W({},ar,{data:0}),Ko=be(df),pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hf[e])?!!t[e]:!1}function eo(){return gf}var yf=W({},qr,{key:function(e){if(e.key){var t=pf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eo,charCode:function(e){return e.type==="keypress"?Sn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vf=be(yf),bf=W({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xo=be(bf),kf=W({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eo}),wf=be(kf),Sf=W({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),_f=be(Sf),xf=W({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cf=be(xf),Ef=[9,13,27,32],to=Be&&"CompositionEvent"in window,_r=null;Be&&"documentMode"in document&&(_r=document.documentMode);var Pf=Be&&"TextEvent"in window&&!_r,Ou=Be&&(!to||_r&&8<_r&&11>=_r),Jo=" ",Zo=!1;function Ru(e,t){switch(e){case"keyup":return Ef.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rt=!1;function Tf(e,t){switch(e){case"compositionend":return Iu(t);case"keypress":return t.which!==32?null:(Zo=!0,Jo);case"textInput":return e=t.data,e===Jo&&Zo?null:e;default:return null}}function Nf(e,t){if(Rt)return e==="compositionend"||!to&&Ru(e,t)?(e=Du(),wn=Ja=tt=null,Rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ou&&t.locale!=="ko"?null:t.data;default:return null}}var Lf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ei(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lf[e.type]:t==="textarea"}function ju(e,t,r,n){mu(n),t=jn(t,"onChange"),0<t.length&&(r=new Za("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var xr=null,Ir=null;function zf(e){Gu(e,0)}function nl(e){var t=At(e);if(iu(t))return e}function Mf(e,t){if(e==="change")return t}var Au=!1;if(Be){var Tl;if(Be){var Nl="oninput"in document;if(!Nl){var ti=document.createElement("div");ti.setAttribute("oninput","return;"),Nl=typeof ti.oninput=="function"}Tl=Nl}else Tl=!1;Au=Tl&&(!document.documentMode||9<document.documentMode)}function ri(){xr&&(xr.detachEvent("onpropertychange",Fu),Ir=xr=null)}function Fu(e){if(e.propertyName==="value"&&nl(Ir)){var t=[];ju(t,Ir,e,Ya(e)),vu(zf,t)}}function Df(e,t,r){e==="focusin"?(ri(),xr=t,Ir=r,xr.attachEvent("onpropertychange",Fu)):e==="focusout"&&ri()}function Of(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(Ir)}function Rf(e,t){if(e==="click")return nl(t)}function If(e,t){if(e==="input"||e==="change")return nl(t)}function jf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:jf;function jr(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var l=r[n];if(!Ql.call(t,l)||!De(e[l],t[l]))return!1}return!0}function ni(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function li(e,t){var r=ni(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ni(r)}}function Uu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wu(){for(var e=window,t=Ln();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ln(e.document)}return t}function ro(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Af(e){var t=Wu(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Uu(r.ownerDocument.documentElement,r)){if(n!==null&&ro(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,a=Math.min(n.start,l);n=n.end===void 0?a:Math.min(n.end,l),!e.extend&&a>n&&(l=n,n=a,a=l),l=li(r,a);var o=li(r,n);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ff=Be&&"documentMode"in document&&11>=document.documentMode,It=null,fa=null,Cr=null,da=!1;function ai(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;da||It==null||It!==Ln(n)||(n=It,"selectionStart"in n&&ro(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Cr&&jr(Cr,n)||(Cr=n,n=jn(fa,"onSelect"),0<n.length&&(t=new Za("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=It)))}function sn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var jt={animationend:sn("Animation","AnimationEnd"),animationiteration:sn("Animation","AnimationIteration"),animationstart:sn("Animation","AnimationStart"),transitionend:sn("Transition","TransitionEnd")},Ll={},Vu={};Be&&(Vu=document.createElement("div").style,"AnimationEvent"in window||(delete jt.animationend.animation,delete jt.animationiteration.animation,delete jt.animationstart.animation),"TransitionEvent"in window||delete jt.transitionend.transition);function ll(e){if(Ll[e])return Ll[e];if(!jt[e])return e;var t=jt[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Vu)return Ll[e]=t[r];return e}var Hu=ll("animationend"),Bu=ll("animationiteration"),$u=ll("animationstart"),Qu=ll("transitionend"),Yu=new Map,oi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){Yu.set(e,t),Lt(t,[e])}for(var zl=0;zl<oi.length;zl++){var Ml=oi[zl],Uf=Ml.toLowerCase(),Wf=Ml[0].toUpperCase()+Ml.slice(1);pt(Uf,"on"+Wf)}pt(Hu,"onAnimationEnd");pt(Bu,"onAnimationIteration");pt($u,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Qu,"onTransitionEnd");Xt("onMouseEnter",["mouseout","mouseover"]);Xt("onMouseLeave",["mouseout","mouseover"]);Xt("onPointerEnter",["pointerout","pointerover"]);Xt("onPointerLeave",["pointerout","pointerover"]);Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vf=new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));function ii(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Fc(n,t,void 0,e),e.currentTarget=null}function Gu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],l=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var o=n.length-1;0<=o;o--){var i=n[o],u=i.instance,c=i.currentTarget;if(i=i.listener,u!==a&&l.isPropagationStopped())break e;ii(l,i,c),a=u}else for(o=0;o<n.length;o++){if(i=n[o],u=i.instance,c=i.currentTarget,i=i.listener,u!==a&&l.isPropagationStopped())break e;ii(l,i,c),a=u}}}if(Mn)throw e=ia,Mn=!1,ia=null,e}function R(e,t){var r=t[ya];r===void 0&&(r=t[ya]=new Set);var n=e+"__bubble";r.has(n)||(qu(t,e,2,!1),r.add(n))}function Dl(e,t,r){var n=0;t&&(n|=4),qu(r,e,n,t)}var cn="_reactListening"+Math.random().toString(36).slice(2);function Ar(e){if(!e[cn]){e[cn]=!0,ru.forEach(function(r){r!=="selectionchange"&&(Vf.has(r)||Dl(r,!1,e),Dl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cn]||(t[cn]=!0,Dl("selectionchange",!1,t))}}function qu(e,t,r,n){switch(Mu(t)){case 1:var l=tf;break;case 4:l=rf;break;default:l=Xa}r=l.bind(null,t,r,e),l=void 0,!oa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function Ol(e,t,r,n,l){var a=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var i=n.stateNode.containerInfo;if(i===l||i.nodeType===8&&i.parentNode===l)break;if(o===4)for(o=n.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;i!==null;){if(o=kt(i),o===null)return;if(u=o.tag,u===5||u===6){n=a=o;continue e}i=i.parentNode}}n=n.return}vu(function(){var c=a,h=Ya(r),m=[];e:{var p=Yu.get(e);if(p!==void 0){var v=Za,b=e;switch(e){case"keypress":if(Sn(r)===0)break e;case"keydown":case"keyup":v=vf;break;case"focusin":b="focus",v=Pl;break;case"focusout":b="blur",v=Pl;break;case"beforeblur":case"afterblur":v=Pl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=af;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=wf;break;case Hu:case Bu:case $u:v=sf;break;case Qu:v=_f;break;case"scroll":v=nf;break;case"wheel":v=Cf;break;case"copy":case"cut":case"paste":v=ff;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Xo}var k=(t&4)!==0,j=!k&&e==="scroll",f=k?p!==null?p+"Capture":null:p;k=[];for(var s=c,d;s!==null;){d=s;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,f!==null&&(y=Mr(s,f),y!=null&&k.push(Fr(s,y,d)))),j)break;s=s.return}0<k.length&&(p=new v(p,b,null,r,h),m.push({event:p,listeners:k}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&r!==la&&(b=r.relatedTarget||r.fromElement)&&(kt(b)||b[$e]))break e;if((v||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,v?(b=r.relatedTarget||r.toElement,v=c,b=b?kt(b):null,b!==null&&(j=zt(b),b!==j||b.tag!==5&&b.tag!==6)&&(b=null)):(v=null,b=c),v!==b)){if(k=qo,y="onMouseLeave",f="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(k=Xo,y="onPointerLeave",f="onPointerEnter",s="pointer"),j=v==null?p:At(v),d=b==null?p:At(b),p=new k(y,s+"leave",v,r,h),p.target=j,p.relatedTarget=d,y=null,kt(h)===c&&(k=new k(f,s+"enter",b,r,h),k.target=d,k.relatedTarget=j,y=k),j=y,v&&b)t:{for(k=v,f=b,s=0,d=k;d;d=Mt(d))s++;for(d=0,y=f;y;y=Mt(y))d++;for(;0<s-d;)k=Mt(k),s--;for(;0<d-s;)f=Mt(f),d--;for(;s--;){if(k===f||f!==null&&k===f.alternate)break t;k=Mt(k),f=Mt(f)}k=null}else k=null;v!==null&&ui(m,p,v,k,!1),b!==null&&j!==null&&ui(m,j,b,k,!0)}}e:{if(p=c?At(c):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var _=Mf;else if(ei(p))if(Au)_=If;else{_=Of;var x=Df}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(_=Rf);if(_&&(_=_(e,c))){ju(m,_,r,h);break e}x&&x(e,p,c),e==="focusout"&&(x=p._wrapperState)&&x.controlled&&p.type==="number"&&Zl(p,"number",p.value)}switch(x=c?At(c):window,e){case"focusin":(ei(x)||x.contentEditable==="true")&&(It=x,fa=c,Cr=null);break;case"focusout":Cr=fa=It=null;break;case"mousedown":da=!0;break;case"contextmenu":case"mouseup":case"dragend":da=!1,ai(m,r,h);break;case"selectionchange":if(Ff)break;case"keydown":case"keyup":ai(m,r,h)}var C;if(to)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Rt?Ru(e,r)&&(E="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(E="onCompositionStart");E&&(Ou&&r.locale!=="ko"&&(Rt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Rt&&(C=Du()):(tt=h,Ja="value"in tt?tt.value:tt.textContent,Rt=!0)),x=jn(c,E),0<x.length&&(E=new Ko(E,e,null,r,h),m.push({event:E,listeners:x}),C?E.data=C:(C=Iu(r),C!==null&&(E.data=C)))),(C=Pf?Tf(e,r):Nf(e,r))&&(c=jn(c,"onBeforeInput"),0<c.length&&(h=new Ko("onBeforeInput","beforeinput",null,r,h),m.push({event:h,listeners:c}),h.data=C))}Gu(m,t)})}function Fr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function jn(e,t){for(var r=t+"Capture",n=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=Mr(e,r),a!=null&&n.unshift(Fr(e,a,l)),a=Mr(e,t),a!=null&&n.push(Fr(e,a,l))),e=e.return}return n}function Mt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ui(e,t,r,n,l){for(var a=t._reactName,o=[];r!==null&&r!==n;){var i=r,u=i.alternate,c=i.stateNode;if(u!==null&&u===n)break;i.tag===5&&c!==null&&(i=c,l?(u=Mr(r,a),u!=null&&o.unshift(Fr(r,u,i))):l||(u=Mr(r,a),u!=null&&o.push(Fr(r,u,i)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var Hf=/\r\n?/g,Bf=/\u0000|\uFFFD/g;function si(e){return(typeof e=="string"?e:""+e).replace(Hf,`
`).replace(Bf,"")}function fn(e,t,r){if(t=si(t),si(e)!==t&&r)throw Error(g(425))}function An(){}var pa=null,ma=null;function ha(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ga=typeof setTimeout=="function"?setTimeout:void 0,$f=typeof clearTimeout=="function"?clearTimeout:void 0,ci=typeof Promise=="function"?Promise:void 0,Qf=typeof queueMicrotask=="function"?queueMicrotask:typeof ci<"u"?function(e){return ci.resolve(null).then(e).catch(Yf)}:ga;function Yf(e){setTimeout(function(){throw e})}function Rl(e,t){var r=t,n=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(n===0){e.removeChild(l),Rr(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=l}while(r);Rr(t)}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var or=Math.random().toString(36).slice(2),Ie="__reactFiber$"+or,Ur="__reactProps$"+or,$e="__reactContainer$"+or,ya="__reactEvents$"+or,Gf="__reactListeners$"+or,qf="__reactHandles$"+or;function kt(e){var t=e[Ie];if(t)return t;for(var r=e.parentNode;r;){if(t=r[$e]||r[Ie]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=fi(e);e!==null;){if(r=e[Ie])return r;e=fi(e)}return t}e=r,r=e.parentNode}return null}function Kr(e){return e=e[Ie]||e[$e],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function At(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function al(e){return e[Ur]||null}var va=[],Ft=-1;function mt(e){return{current:e}}function I(e){0>Ft||(e.current=va[Ft],va[Ft]=null,Ft--)}function O(e,t){Ft++,va[Ft]=e.current,e.current=t}var dt={},le=mt(dt),fe=mt(!1),Ct=dt;function Jt(e,t){var r=e.type.contextTypes;if(!r)return dt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in r)l[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function de(e){return e=e.childContextTypes,e!=null}function Fn(){I(fe),I(le)}function di(e,t,r){if(le.current!==dt)throw Error(g(168));O(le,t),O(fe,r)}function Ku(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var l in n)if(!(l in t))throw Error(g(108,Mc(e)||"Unknown",l));return W({},r,n)}function Un(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dt,Ct=le.current,O(le,e),O(fe,fe.current),!0}function pi(e,t,r){var n=e.stateNode;if(!n)throw Error(g(169));r?(e=Ku(e,t,Ct),n.__reactInternalMemoizedMergedChildContext=e,I(fe),I(le),O(le,e)):I(fe),O(fe,r)}var Ue=null,ol=!1,Il=!1;function Xu(e){Ue===null?Ue=[e]:Ue.push(e)}function Kf(e){ol=!0,Xu(e)}function ht(){if(!Il&&Ue!==null){Il=!0;var e=0,t=D;try{var r=Ue;for(D=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Ue=null,ol=!1}catch(l){throw Ue!==null&&(Ue=Ue.slice(e+1)),Su(Ga,ht),l}finally{D=t,Il=!1}}return null}var Ut=[],Wt=0,Wn=null,Vn=0,ke=[],we=0,Et=null,We=1,Ve="";function vt(e,t){Ut[Wt++]=Vn,Ut[Wt++]=Wn,Wn=e,Vn=t}function Ju(e,t,r){ke[we++]=We,ke[we++]=Ve,ke[we++]=Et,Et=e;var n=We;e=Ve;var l=32-ze(n)-1;n&=~(1<<l),r+=1;var a=32-ze(t)+l;if(30<a){var o=l-l%5;a=(n&(1<<o)-1).toString(32),n>>=o,l-=o,We=1<<32-ze(t)+l|r<<l|n,Ve=a+e}else We=1<<a|r<<l|n,Ve=e}function no(e){e.return!==null&&(vt(e,1),Ju(e,1,0))}function lo(e){for(;e===Wn;)Wn=Ut[--Wt],Ut[Wt]=null,Vn=Ut[--Wt],Ut[Wt]=null;for(;e===Et;)Et=ke[--we],ke[we]=null,Ve=ke[--we],ke[we]=null,We=ke[--we],ke[we]=null}var ge=null,he=null,A=!1,Le=null;function Zu(e,t){var r=Se(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function mi(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,he=ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,he=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Et!==null?{id:We,overflow:Ve}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Se(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ge=e,he=null,!0):!1;default:return!1}}function ba(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ka(e){if(A){var t=he;if(t){var r=t;if(!mi(e,t)){if(ba(e))throw Error(g(418));t=ot(r.nextSibling);var n=ge;t&&mi(e,t)?Zu(n,r):(e.flags=e.flags&-4097|2,A=!1,ge=e)}}else{if(ba(e))throw Error(g(418));e.flags=e.flags&-4097|2,A=!1,ge=e}}}function hi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function dn(e){if(e!==ge)return!1;if(!A)return hi(e),A=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ha(e.type,e.memoizedProps)),t&&(t=he)){if(ba(e))throw es(),Error(g(418));for(;t;)Zu(e,t),t=ot(t.nextSibling)}if(hi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){he=ot(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}he=null}}else he=ge?ot(e.stateNode.nextSibling):null;return!0}function es(){for(var e=he;e;)e=ot(e.nextSibling)}function Zt(){he=ge=null,A=!1}function ao(e){Le===null?Le=[e]:Le.push(e)}var Xf=Ge.ReactCurrentBatchConfig;function mr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(g(309));var n=r.stateNode}if(!n)throw Error(g(147,e));var l=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var i=l.refs;o===null?delete i[a]:i[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(g(284));if(!r._owner)throw Error(g(290,e))}return e}function pn(e,t){throw e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gi(e){var t=e._init;return t(e._payload)}function ts(e){function t(f,s){if(e){var d=f.deletions;d===null?(f.deletions=[s],f.flags|=16):d.push(s)}}function r(f,s){if(!e)return null;for(;s!==null;)t(f,s),s=s.sibling;return null}function n(f,s){for(f=new Map;s!==null;)s.key!==null?f.set(s.key,s):f.set(s.index,s),s=s.sibling;return f}function l(f,s){return f=ct(f,s),f.index=0,f.sibling=null,f}function a(f,s,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<s?(f.flags|=2,s):d):(f.flags|=2,s)):(f.flags|=1048576,s)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function i(f,s,d,y){return s===null||s.tag!==6?(s=Hl(d,f.mode,y),s.return=f,s):(s=l(s,d),s.return=f,s)}function u(f,s,d,y){var _=d.type;return _===Ot?h(f,s,d.props.children,y,d.key):s!==null&&(s.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ke&&gi(_)===s.type)?(y=l(s,d.props),y.ref=mr(f,s,d),y.return=f,y):(y=Nn(d.type,d.key,d.props,null,f.mode,y),y.ref=mr(f,s,d),y.return=f,y)}function c(f,s,d,y){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=Bl(d,f.mode,y),s.return=f,s):(s=l(s,d.children||[]),s.return=f,s)}function h(f,s,d,y,_){return s===null||s.tag!==7?(s=xt(d,f.mode,y,_),s.return=f,s):(s=l(s,d),s.return=f,s)}function m(f,s,d){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Hl(""+s,f.mode,d),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case tn:return d=Nn(s.type,s.key,s.props,null,f.mode,d),d.ref=mr(f,null,s),d.return=f,d;case Dt:return s=Bl(s,f.mode,d),s.return=f,s;case Ke:var y=s._init;return m(f,y(s._payload),d)}if(vr(s)||sr(s))return s=xt(s,f.mode,d,null),s.return=f,s;pn(f,s)}return null}function p(f,s,d,y){var _=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return _!==null?null:i(f,s,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case tn:return d.key===_?u(f,s,d,y):null;case Dt:return d.key===_?c(f,s,d,y):null;case Ke:return _=d._init,p(f,s,_(d._payload),y)}if(vr(d)||sr(d))return _!==null?null:h(f,s,d,y,null);pn(f,d)}return null}function v(f,s,d,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(d)||null,i(s,f,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case tn:return f=f.get(y.key===null?d:y.key)||null,u(s,f,y,_);case Dt:return f=f.get(y.key===null?d:y.key)||null,c(s,f,y,_);case Ke:var x=y._init;return v(f,s,d,x(y._payload),_)}if(vr(y)||sr(y))return f=f.get(d)||null,h(s,f,y,_,null);pn(s,y)}return null}function b(f,s,d,y){for(var _=null,x=null,C=s,E=s=0,H=null;C!==null&&E<d.length;E++){C.index>E?(H=C,C=null):H=C.sibling;var L=p(f,C,d[E],y);if(L===null){C===null&&(C=H);break}e&&C&&L.alternate===null&&t(f,C),s=a(L,s,E),x===null?_=L:x.sibling=L,x=L,C=H}if(E===d.length)return r(f,C),A&&vt(f,E),_;if(C===null){for(;E<d.length;E++)C=m(f,d[E],y),C!==null&&(s=a(C,s,E),x===null?_=C:x.sibling=C,x=C);return A&&vt(f,E),_}for(C=n(f,C);E<d.length;E++)H=v(C,f,E,d[E],y),H!==null&&(e&&H.alternate!==null&&C.delete(H.key===null?E:H.key),s=a(H,s,E),x===null?_=H:x.sibling=H,x=H);return e&&C.forEach(function(Ee){return t(f,Ee)}),A&&vt(f,E),_}function k(f,s,d,y){var _=sr(d);if(typeof _!="function")throw Error(g(150));if(d=_.call(d),d==null)throw Error(g(151));for(var x=_=null,C=s,E=s=0,H=null,L=d.next();C!==null&&!L.done;E++,L=d.next()){C.index>E?(H=C,C=null):H=C.sibling;var Ee=p(f,C,L.value,y);if(Ee===null){C===null&&(C=H);break}e&&C&&Ee.alternate===null&&t(f,C),s=a(Ee,s,E),x===null?_=Ee:x.sibling=Ee,x=Ee,C=H}if(L.done)return r(f,C),A&&vt(f,E),_;if(C===null){for(;!L.done;E++,L=d.next())L=m(f,L.value,y),L!==null&&(s=a(L,s,E),x===null?_=L:x.sibling=L,x=L);return A&&vt(f,E),_}for(C=n(f,C);!L.done;E++,L=d.next())L=v(C,f,E,L.value,y),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?E:L.key),s=a(L,s,E),x===null?_=L:x.sibling=L,x=L);return e&&C.forEach(function(ir){return t(f,ir)}),A&&vt(f,E),_}function j(f,s,d,y){if(typeof d=="object"&&d!==null&&d.type===Ot&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case tn:e:{for(var _=d.key,x=s;x!==null;){if(x.key===_){if(_=d.type,_===Ot){if(x.tag===7){r(f,x.sibling),s=l(x,d.props.children),s.return=f,f=s;break e}}else if(x.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ke&&gi(_)===x.type){r(f,x.sibling),s=l(x,d.props),s.ref=mr(f,x,d),s.return=f,f=s;break e}r(f,x);break}else t(f,x);x=x.sibling}d.type===Ot?(s=xt(d.props.children,f.mode,y,d.key),s.return=f,f=s):(y=Nn(d.type,d.key,d.props,null,f.mode,y),y.ref=mr(f,s,d),y.return=f,f=y)}return o(f);case Dt:e:{for(x=d.key;s!==null;){if(s.key===x)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){r(f,s.sibling),s=l(s,d.children||[]),s.return=f,f=s;break e}else{r(f,s);break}else t(f,s);s=s.sibling}s=Bl(d,f.mode,y),s.return=f,f=s}return o(f);case Ke:return x=d._init,j(f,s,x(d._payload),y)}if(vr(d))return b(f,s,d,y);if(sr(d))return k(f,s,d,y);pn(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,s!==null&&s.tag===6?(r(f,s.sibling),s=l(s,d),s.return=f,f=s):(r(f,s),s=Hl(d,f.mode,y),s.return=f,f=s),o(f)):r(f,s)}return j}var er=ts(!0),rs=ts(!1),Hn=mt(null),Bn=null,Vt=null,oo=null;function io(){oo=Vt=Bn=null}function uo(e){var t=Hn.current;I(Hn),e._currentValue=t}function wa(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function qt(e,t){Bn=e,oo=Vt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function xe(e){var t=e._currentValue;if(oo!==e)if(e={context:e,memoizedValue:t,next:null},Vt===null){if(Bn===null)throw Error(g(308));Vt=e,Bn.dependencies={lanes:0,firstContext:e}}else Vt=Vt.next=e;return t}var wt=null;function so(e){wt===null?wt=[e]:wt.push(e)}function ns(e,t,r,n){var l=t.interleaved;return l===null?(r.next=r,so(t)):(r.next=l.next,l.next=r),t.interleaved=r,Qe(e,n)}function Qe(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Xe=!1;function co(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ls(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function He(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function it(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,M&2){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,Qe(e,r)}return l=n.interleaved,l===null?(t.next=t,so(n)):(t.next=l.next,l.next=t),n.interleaved=t,Qe(e,r)}function _n(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,qa(e,r)}}function yi(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var l=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?l=a=o:a=a.next=o,r=r.next}while(r!==null);a===null?l=a=t:a=a.next=t}else l=a=t;r={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function $n(e,t,r,n){var l=e.updateQueue;Xe=!1;var a=l.firstBaseUpdate,o=l.lastBaseUpdate,i=l.shared.pending;if(i!==null){l.shared.pending=null;var u=i,c=u.next;u.next=null,o===null?a=c:o.next=c,o=u;var h=e.alternate;h!==null&&(h=h.updateQueue,i=h.lastBaseUpdate,i!==o&&(i===null?h.firstBaseUpdate=c:i.next=c,h.lastBaseUpdate=u))}if(a!==null){var m=l.baseState;o=0,h=c=u=null,i=a;do{var p=i.lane,v=i.eventTime;if((n&p)===p){h!==null&&(h=h.next={eventTime:v,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var b=e,k=i;switch(p=t,v=r,k.tag){case 1:if(b=k.payload,typeof b=="function"){m=b.call(v,m,p);break e}m=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=k.payload,p=typeof b=="function"?b.call(v,m,p):b,p==null)break e;m=W({},m,p);break e;case 2:Xe=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[i]:p.push(i))}else v={eventTime:v,lane:p,tag:i.tag,payload:i.payload,callback:i.callback,next:null},h===null?(c=h=v,u=m):h=h.next=v,o|=p;if(i=i.next,i===null){if(i=l.shared.pending,i===null)break;p=i,i=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(h===null&&(u=m),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else a===null&&(l.shared.lanes=0);Tt|=o,e.lanes=o,e.memoizedState=m}}function vi(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],l=n.callback;if(l!==null){if(n.callback=null,n=r,typeof l!="function")throw Error(g(191,l));l.call(n)}}}var Xr={},Ae=mt(Xr),Wr=mt(Xr),Vr=mt(Xr);function St(e){if(e===Xr)throw Error(g(174));return e}function fo(e,t){switch(O(Vr,t),O(Wr,e),O(Ae,Xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ta(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ta(t,e)}I(Ae),O(Ae,t)}function tr(){I(Ae),I(Wr),I(Vr)}function as(e){St(Vr.current);var t=St(Ae.current),r=ta(t,e.type);t!==r&&(O(Wr,e),O(Ae,r))}function po(e){Wr.current===e&&(I(Ae),I(Wr))}var F=mt(0);function Qn(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var jl=[];function mo(){for(var e=0;e<jl.length;e++)jl[e]._workInProgressVersionPrimary=null;jl.length=0}var xn=Ge.ReactCurrentDispatcher,Al=Ge.ReactCurrentBatchConfig,Pt=0,U=null,Y=null,K=null,Yn=!1,Er=!1,Hr=0,Jf=0;function te(){throw Error(g(321))}function ho(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!De(e[r],t[r]))return!1;return!0}function go(e,t,r,n,l,a){if(Pt=a,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xn.current=e===null||e.memoizedState===null?rd:nd,e=r(n,l),Er){a=0;do{if(Er=!1,Hr=0,25<=a)throw Error(g(301));a+=1,K=Y=null,t.updateQueue=null,xn.current=ld,e=r(n,l)}while(Er)}if(xn.current=Gn,t=Y!==null&&Y.next!==null,Pt=0,K=Y=U=null,Yn=!1,t)throw Error(g(300));return e}function yo(){var e=Hr!==0;return Hr=0,e}function Re(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return K===null?U.memoizedState=K=e:K=K.next=e,K}function Ce(){if(Y===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=K===null?U.memoizedState:K.next;if(t!==null)K=t,Y=e;else{if(e===null)throw Error(g(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},K===null?U.memoizedState=K=e:K=K.next=e}return K}function Br(e,t){return typeof t=="function"?t(e):t}function Fl(e){var t=Ce(),r=t.queue;if(r===null)throw Error(g(311));r.lastRenderedReducer=e;var n=Y,l=n.baseQueue,a=r.pending;if(a!==null){if(l!==null){var o=l.next;l.next=a.next,a.next=o}n.baseQueue=l=a,r.pending=null}if(l!==null){a=l.next,n=n.baseState;var i=o=null,u=null,c=a;do{var h=c.lane;if((Pt&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(i=u=m,o=n):u=u.next=m,U.lanes|=h,Tt|=h}c=c.next}while(c!==null&&c!==a);u===null?o=n:u.next=i,De(n,t.memoizedState)||(ce=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){l=e;do a=l.lane,U.lanes|=a,Tt|=a,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ul(e){var t=Ce(),r=t.queue;if(r===null)throw Error(g(311));r.lastRenderedReducer=e;var n=r.dispatch,l=r.pending,a=t.memoizedState;if(l!==null){r.pending=null;var o=l=l.next;do a=e(a,o.action),o=o.next;while(o!==l);De(a,t.memoizedState)||(ce=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function os(){}function is(e,t){var r=U,n=Ce(),l=t(),a=!De(n.memoizedState,l);if(a&&(n.memoizedState=l,ce=!0),n=n.queue,vo(cs.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||K!==null&&K.memoizedState.tag&1){if(r.flags|=2048,$r(9,ss.bind(null,r,n,l,t),void 0,null),X===null)throw Error(g(349));Pt&30||us(r,t,l)}return l}function us(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function ss(e,t,r,n){t.value=r,t.getSnapshot=n,fs(t)&&ds(e)}function cs(e,t,r){return r(function(){fs(t)&&ds(e)})}function fs(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!De(e,r)}catch{return!0}}function ds(e){var t=Qe(e,1);t!==null&&Me(t,e,1,-1)}function bi(e){var t=Re();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:e},t.queue=e,e=e.dispatch=td.bind(null,U,e),[t.memoizedState,e]}function $r(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function ps(){return Ce().memoizedState}function Cn(e,t,r,n){var l=Re();U.flags|=e,l.memoizedState=$r(1|t,r,void 0,n===void 0?null:n)}function il(e,t,r,n){var l=Ce();n=n===void 0?null:n;var a=void 0;if(Y!==null){var o=Y.memoizedState;if(a=o.destroy,n!==null&&ho(n,o.deps)){l.memoizedState=$r(t,r,a,n);return}}U.flags|=e,l.memoizedState=$r(1|t,r,a,n)}function ki(e,t){return Cn(8390656,8,e,t)}function vo(e,t){return il(2048,8,e,t)}function ms(e,t){return il(4,2,e,t)}function hs(e,t){return il(4,4,e,t)}function gs(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,r){return r=r!=null?r.concat([e]):null,il(4,4,gs.bind(null,t,e),r)}function bo(){}function vs(e,t){var r=Ce();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ho(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function bs(e,t){var r=Ce();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ho(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function ks(e,t,r){return Pt&21?(De(r,t)||(r=Cu(),U.lanes|=r,Tt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=r)}function Zf(e,t){var r=D;D=r!==0&&4>r?r:4,e(!0);var n=Al.transition;Al.transition={};try{e(!1),t()}finally{D=r,Al.transition=n}}function ws(){return Ce().memoizedState}function ed(e,t,r){var n=st(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Ss(e))_s(t,r);else if(r=ns(e,t,r,n),r!==null){var l=oe();Me(r,e,n,l),xs(r,t,n)}}function td(e,t,r){var n=st(e),l={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ss(e))_s(t,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,i=a(o,r);if(l.hasEagerState=!0,l.eagerState=i,De(i,o)){var u=t.interleaved;u===null?(l.next=l,so(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}r=ns(e,t,l,n),r!==null&&(l=oe(),Me(r,e,n,l),xs(r,t,n))}}function Ss(e){var t=e.alternate;return e===U||t!==null&&t===U}function _s(e,t){Er=Yn=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function xs(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,qa(e,r)}}var Gn={readContext:xe,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},rd={readContext:xe,useCallback:function(e,t){return Re().memoizedState=[e,t===void 0?null:t],e},useContext:xe,useEffect:ki,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Cn(4194308,4,gs.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Cn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cn(4,2,e,t)},useMemo:function(e,t){var r=Re();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Re();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=ed.bind(null,U,e),[n.memoizedState,e]},useRef:function(e){var t=Re();return e={current:e},t.memoizedState=e},useState:bi,useDebugValue:bo,useDeferredValue:function(e){return Re().memoizedState=e},useTransition:function(){var e=bi(!1),t=e[0];return e=Zf.bind(null,e[1]),Re().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=U,l=Re();if(A){if(r===void 0)throw Error(g(407));r=r()}else{if(r=t(),X===null)throw Error(g(349));Pt&30||us(n,t,r)}l.memoizedState=r;var a={value:r,getSnapshot:t};return l.queue=a,ki(cs.bind(null,n,a,e),[e]),n.flags|=2048,$r(9,ss.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=Re(),t=X.identifierPrefix;if(A){var r=Ve,n=We;r=(n&~(1<<32-ze(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Hr++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Jf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nd={readContext:xe,useCallback:vs,useContext:xe,useEffect:vo,useImperativeHandle:ys,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Fl,useRef:ps,useState:function(){return Fl(Br)},useDebugValue:bo,useDeferredValue:function(e){var t=Ce();return ks(t,Y.memoizedState,e)},useTransition:function(){var e=Fl(Br)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:os,useSyncExternalStore:is,useId:ws,unstable_isNewReconciler:!1},ld={readContext:xe,useCallback:vs,useContext:xe,useEffect:vo,useImperativeHandle:ys,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Ul,useRef:ps,useState:function(){return Ul(Br)},useDebugValue:bo,useDeferredValue:function(e){var t=Ce();return Y===null?t.memoizedState=e:ks(t,Y.memoizedState,e)},useTransition:function(){var e=Ul(Br)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:os,useSyncExternalStore:is,useId:ws,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Sa(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:W({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ul={isMounted:function(e){return(e=e._reactInternals)?zt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=oe(),l=st(e),a=He(n,l);a.payload=t,r!=null&&(a.callback=r),t=it(e,a,l),t!==null&&(Me(t,e,l,n),_n(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=oe(),l=st(e),a=He(n,l);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=it(e,a,l),t!==null&&(Me(t,e,l,n),_n(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=oe(),n=st(e),l=He(r,n);l.tag=2,t!=null&&(l.callback=t),t=it(e,l,n),t!==null&&(Me(t,e,n,r),_n(t,e,n))}};function wi(e,t,r,n,l,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(r,n)||!jr(l,a):!0}function Cs(e,t,r){var n=!1,l=dt,a=t.contextType;return typeof a=="object"&&a!==null?a=xe(a):(l=de(t)?Ct:le.current,n=t.contextTypes,a=(n=n!=null)?Jt(e,l):dt),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ul,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),t}function Si(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ul.enqueueReplaceState(t,t.state,null)}function _a(e,t,r,n){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},co(e);var a=t.contextType;typeof a=="object"&&a!==null?l.context=xe(a):(a=de(t)?Ct:le.current,l.context=Jt(e,a)),l.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Sa(e,t,a,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ul.enqueueReplaceState(l,l.state,null),$n(e,r,l,n),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function rr(e,t){try{var r="",n=t;do r+=zc(n),n=n.return;while(n);var l=r}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:l,digest:null}}function Wl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function xa(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var ad=typeof WeakMap=="function"?WeakMap:Map;function Es(e,t,r){r=He(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Kn||(Kn=!0,Da=n),xa(e,t)},r}function Ps(e,t,r){r=He(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var l=t.value;r.payload=function(){return n(l)},r.callback=function(){xa(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){xa(e,t),typeof n!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function _i(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new ad;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(r)||(l.add(r),e=bd.bind(null,e,t,r),t.then(e,e))}function xi(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ci(e,t,r,n,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=He(-1,1),t.tag=2,it(r,t,1))),r.lanes|=1),e)}var od=Ge.ReactCurrentOwner,ce=!1;function ae(e,t,r,n){t.child=e===null?rs(t,null,r,n):er(t,e.child,r,n)}function Ei(e,t,r,n,l){r=r.render;var a=t.ref;return qt(t,l),n=go(e,t,r,n,a,l),r=yo(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ye(e,t,l)):(A&&r&&no(t),t.flags|=1,ae(e,t,n,l),t.child)}function Pi(e,t,r,n,l){if(e===null){var a=r.type;return typeof a=="function"&&!Po(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,Ts(e,t,a,n,l)):(e=Nn(r.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&l)){var o=a.memoizedProps;if(r=r.compare,r=r!==null?r:jr,r(o,n)&&e.ref===t.ref)return Ye(e,t,l)}return t.flags|=1,e=ct(a,n),e.ref=t.ref,e.return=t,t.child=e}function Ts(e,t,r,n,l){if(e!==null){var a=e.memoizedProps;if(jr(a,n)&&e.ref===t.ref)if(ce=!1,t.pendingProps=n=a,(e.lanes&l)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Ye(e,t,l)}return Ca(e,t,r,n,l)}function Ns(e,t,r){var n=t.pendingProps,l=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Bt,me),me|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(Bt,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,O(Bt,me),me|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,O(Bt,me),me|=n;return ae(e,t,l,r),t.child}function Ls(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ca(e,t,r,n,l){var a=de(r)?Ct:le.current;return a=Jt(t,a),qt(t,l),r=go(e,t,r,n,a,l),n=yo(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ye(e,t,l)):(A&&n&&no(t),t.flags|=1,ae(e,t,r,l),t.child)}function Ti(e,t,r,n,l){if(de(r)){var a=!0;Un(t)}else a=!1;if(qt(t,l),t.stateNode===null)En(e,t),Cs(t,r,n),_a(t,r,n,l),n=!0;else if(e===null){var o=t.stateNode,i=t.memoizedProps;o.props=i;var u=o.context,c=r.contextType;typeof c=="object"&&c!==null?c=xe(c):(c=de(r)?Ct:le.current,c=Jt(t,c));var h=r.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==n||u!==c)&&Si(t,o,n,c),Xe=!1;var p=t.memoizedState;o.state=p,$n(t,n,o,l),u=t.memoizedState,i!==n||p!==u||fe.current||Xe?(typeof h=="function"&&(Sa(t,r,h,n),u=t.memoizedState),(i=Xe||wi(t,r,i,n,p,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),o.props=n,o.state=u,o.context=c,n=i):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,ls(e,t),i=t.memoizedProps,c=t.type===t.elementType?i:Te(t.type,i),o.props=c,m=t.pendingProps,p=o.context,u=r.contextType,typeof u=="object"&&u!==null?u=xe(u):(u=de(r)?Ct:le.current,u=Jt(t,u));var v=r.getDerivedStateFromProps;(h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==m||p!==u)&&Si(t,o,n,u),Xe=!1,p=t.memoizedState,o.state=p,$n(t,n,o,l);var b=t.memoizedState;i!==m||p!==b||fe.current||Xe?(typeof v=="function"&&(Sa(t,r,v,n),b=t.memoizedState),(c=Xe||wi(t,r,c,n,p,b,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,b,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,b,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=b),o.props=n,o.state=b,o.context=u,n=c):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return Ea(e,t,r,n,a,l)}function Ea(e,t,r,n,l,a){Ls(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return l&&pi(t,r,!1),Ye(e,t,a);n=t.stateNode,od.current=t;var i=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=er(t,e.child,null,a),t.child=er(t,null,i,a)):ae(e,t,i,a),t.memoizedState=n.state,l&&pi(t,r,!0),t.child}function zs(e){var t=e.stateNode;t.pendingContext?di(e,t.pendingContext,t.pendingContext!==t.context):t.context&&di(e,t.context,!1),fo(e,t.containerInfo)}function Ni(e,t,r,n,l){return Zt(),ao(l),t.flags|=256,ae(e,t,r,n),t.child}var Pa={dehydrated:null,treeContext:null,retryLane:0};function Ta(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ms(e,t,r){var n=t.pendingProps,l=F.current,a=!1,o=(t.flags&128)!==0,i;if((i=o)||(i=e!==null&&e.memoizedState===null?!1:(l&2)!==0),i?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),O(F,l&1),e===null)return ka(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=n.children,e=n.fallback,a?(n=t.mode,a=t.child,o={mode:"hidden",children:o},!(n&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=fl(o,n,0,null),e=xt(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ta(r),t.memoizedState=Pa,e):ko(t,o));if(l=e.memoizedState,l!==null&&(i=l.dehydrated,i!==null))return id(e,t,o,n,i,l,r);if(a){a=n.fallback,o=t.mode,l=e.child,i=l.sibling;var u={mode:"hidden",children:n.children};return!(o&1)&&t.child!==l?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=ct(l,u),n.subtreeFlags=l.subtreeFlags&14680064),i!==null?a=ct(i,a):(a=xt(a,o,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,o=e.child.memoizedState,o=o===null?Ta(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~r,t.memoizedState=Pa,n}return a=e.child,e=a.sibling,n=ct(a,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function ko(e,t){return t=fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mn(e,t,r,n){return n!==null&&ao(n),er(t,e.child,null,r),e=ko(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function id(e,t,r,n,l,a,o){if(r)return t.flags&256?(t.flags&=-257,n=Wl(Error(g(422))),mn(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,l=t.mode,n=fl({mode:"visible",children:n.children},l,0,null),a=xt(a,l,o,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,t.mode&1&&er(t,e.child,null,o),t.child.memoizedState=Ta(o),t.memoizedState=Pa,a);if(!(t.mode&1))return mn(e,t,o,null);if(l.data==="$!"){if(n=l.nextSibling&&l.nextSibling.dataset,n)var i=n.dgst;return n=i,a=Error(g(419)),n=Wl(a,n,void 0),mn(e,t,o,n)}if(i=(o&e.childLanes)!==0,ce||i){if(n=X,n!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(n.suspendedLanes|o)?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,Qe(e,l),Me(n,e,l,-1))}return Eo(),n=Wl(Error(g(421))),mn(e,t,o,n)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=kd.bind(null,e),l._reactRetry=t,null):(e=a.treeContext,he=ot(l.nextSibling),ge=t,A=!0,Le=null,e!==null&&(ke[we++]=We,ke[we++]=Ve,ke[we++]=Et,We=e.id,Ve=e.overflow,Et=t),t=ko(t,n.children),t.flags|=4096,t)}function Li(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),wa(e.return,t,r)}function Vl(e,t,r,n,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:l}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=l)}function Ds(e,t,r){var n=t.pendingProps,l=n.revealOrder,a=n.tail;if(ae(e,t,n.children,r),n=F.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Li(e,r,t);else if(e.tag===19)Li(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(O(F,n),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&Qn(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),Vl(t,!1,l,r,a);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Qn(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}Vl(t,!0,r,null,a);break;case"together":Vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function En(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ye(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Tt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,r=ct(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=ct(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function ud(e,t,r){switch(t.tag){case 3:zs(t),Zt();break;case 5:as(t);break;case 1:de(t.type)&&Un(t);break;case 4:fo(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,l=t.memoizedProps.value;O(Hn,n._currentValue),n._currentValue=l;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(O(F,F.current&1),t.flags|=128,null):r&t.child.childLanes?Ms(e,t,r):(O(F,F.current&1),e=Ye(e,t,r),e!==null?e.sibling:null);O(F,F.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Ds(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O(F,F.current),n)break;return null;case 22:case 23:return t.lanes=0,Ns(e,t,r)}return Ye(e,t,r)}var Os,Na,Rs,Is;Os=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Na=function(){};Rs=function(e,t,r,n){var l=e.memoizedProps;if(l!==n){e=t.stateNode,St(Ae.current);var a=null;switch(r){case"input":l=Xl(e,l),n=Xl(e,n),a=[];break;case"select":l=W({},l,{value:void 0}),n=W({},n,{value:void 0}),a=[];break;case"textarea":l=ea(e,l),n=ea(e,n),a=[];break;default:typeof l.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=An)}ra(r,n);var o;r=null;for(c in l)if(!n.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var i=l[c];for(o in i)i.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Lr.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in n){var u=n[c];if(i=l!=null?l[c]:void 0,n.hasOwnProperty(c)&&u!==i&&(u!=null||i!=null))if(c==="style")if(i){for(o in i)!i.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in u)u.hasOwnProperty(o)&&i[o]!==u[o]&&(r||(r={}),r[o]=u[o])}else r||(a||(a=[]),a.push(c,r)),r=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,i=i?i.__html:void 0,u!=null&&i!==u&&(a=a||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Lr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&R("scroll",e),a||i===u||(a=[])):(a=a||[]).push(c,u))}r&&(a=a||[]).push("style",r);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};Is=function(e,t,r,n){r!==n&&(t.flags|=4)};function hr(e,t){if(!A)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,n|=l.subtreeFlags&14680064,n|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function sd(e,t,r){var n=t.pendingProps;switch(lo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return de(t.type)&&Fn(),re(t),null;case 3:return n=t.stateNode,tr(),I(fe),I(le),mo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(dn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Ia(Le),Le=null))),Na(e,t),re(t),null;case 5:po(t);var l=St(Vr.current);if(r=t.type,e!==null&&t.stateNode!=null)Rs(e,t,r,n,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(g(166));return re(t),null}if(e=St(Ae.current),dn(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[Ie]=t,n[Ur]=a,e=(t.mode&1)!==0,r){case"dialog":R("cancel",n),R("close",n);break;case"iframe":case"object":case"embed":R("load",n);break;case"video":case"audio":for(l=0;l<kr.length;l++)R(kr[l],n);break;case"source":R("error",n);break;case"img":case"image":case"link":R("error",n),R("load",n);break;case"details":R("toggle",n);break;case"input":Fo(n,a),R("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},R("invalid",n);break;case"textarea":Wo(n,a),R("invalid",n)}ra(r,a),l=null;for(var o in a)if(a.hasOwnProperty(o)){var i=a[o];o==="children"?typeof i=="string"?n.textContent!==i&&(a.suppressHydrationWarning!==!0&&fn(n.textContent,i,e),l=["children",i]):typeof i=="number"&&n.textContent!==""+i&&(a.suppressHydrationWarning!==!0&&fn(n.textContent,i,e),l=["children",""+i]):Lr.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&R("scroll",n)}switch(r){case"input":rn(n),Uo(n,a,!0);break;case"textarea":rn(n),Vo(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=An)}n=l,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(r,{is:n.is}):(e=o.createElement(r),r==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,r),e[Ie]=t,e[Ur]=n,Os(e,t,!1,!1),t.stateNode=e;e:{switch(o=na(r,n),r){case"dialog":R("cancel",e),R("close",e),l=n;break;case"iframe":case"object":case"embed":R("load",e),l=n;break;case"video":case"audio":for(l=0;l<kr.length;l++)R(kr[l],e);l=n;break;case"source":R("error",e),l=n;break;case"img":case"image":case"link":R("error",e),R("load",e),l=n;break;case"details":R("toggle",e),l=n;break;case"input":Fo(e,n),l=Xl(e,n),R("invalid",e);break;case"option":l=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},l=W({},n,{value:void 0}),R("invalid",e);break;case"textarea":Wo(e,n),l=ea(e,n),R("invalid",e);break;default:l=n}ra(r,l),i=l;for(a in i)if(i.hasOwnProperty(a)){var u=i[a];a==="style"?pu(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&fu(e,u)):a==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&zr(e,u):typeof u=="number"&&zr(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Lr.hasOwnProperty(a)?u!=null&&a==="onScroll"&&R("scroll",e):u!=null&&Ha(e,a,u,o))}switch(r){case"input":rn(e),Uo(e,n,!1);break;case"textarea":rn(e),Vo(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ft(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?$t(e,!!n.multiple,a,!1):n.defaultValue!=null&&$t(e,!!n.multiple,n.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=An)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)Is(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(g(166));if(r=St(Vr.current),St(Ae.current),dn(t)){if(n=t.stateNode,r=t.memoizedProps,n[Ie]=t,(a=n.nodeValue!==r)&&(e=ge,e!==null))switch(e.tag){case 3:fn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fn(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Ie]=t,t.stateNode=n}return re(t),null;case 13:if(I(F),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&he!==null&&t.mode&1&&!(t.flags&128))es(),Zt(),t.flags|=98560,a=!1;else if(a=dn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(g(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(g(317));a[Ie]=t}else Zt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),a=!1}else Le!==null&&(Ia(Le),Le=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||F.current&1?G===0&&(G=3):Eo())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return tr(),Na(e,t),e===null&&Ar(t.stateNode.containerInfo),re(t),null;case 10:return uo(t.type._context),re(t),null;case 17:return de(t.type)&&Fn(),re(t),null;case 19:if(I(F),a=t.memoizedState,a===null)return re(t),null;if(n=(t.flags&128)!==0,o=a.rendering,o===null)if(n)hr(a,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Qn(e),o!==null){for(t.flags|=128,hr(a,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return O(F,F.current&1|2),t.child}e=e.sibling}a.tail!==null&&$()>nr&&(t.flags|=128,n=!0,hr(a,!1),t.lanes=4194304)}else{if(!n)if(e=Qn(o),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),hr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!A)return re(t),null}else 2*$()-a.renderingStartTime>nr&&r!==1073741824&&(t.flags|=128,n=!0,hr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(r=a.last,r!==null?r.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=$(),t.sibling=null,r=F.current,O(F,n?r&1|2:r&1),t):(re(t),null);case 22:case 23:return Co(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?me&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(g(156,t.tag))}function cd(e,t){switch(lo(t),t.tag){case 1:return de(t.type)&&Fn(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tr(),I(fe),I(le),mo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return po(t),null;case 13:if(I(F),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));Zt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return I(F),null;case 4:return tr(),null;case 10:return uo(t.type._context),null;case 22:case 23:return Co(),null;case 24:return null;default:return null}}var hn=!1,ne=!1,fd=typeof WeakSet=="function"?WeakSet:Set,w=null;function Ht(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){V(e,t,n)}else r.current=null}function js(e,t,r){try{r()}catch(n){V(e,t,n)}}var zi=!1;function dd(e,t){if(pa=Rn,e=Wu(),ro(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var l=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var o=0,i=-1,u=-1,c=0,h=0,m=e,p=null;t:for(;;){for(var v;m!==r||l!==0&&m.nodeType!==3||(i=o+l),m!==a||n!==0&&m.nodeType!==3||(u=o+n),m.nodeType===3&&(o+=m.nodeValue.length),(v=m.firstChild)!==null;)p=m,m=v;for(;;){if(m===e)break t;if(p===r&&++c===l&&(i=o),p===a&&++h===n&&(u=o),(v=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=v}r=i===-1||u===-1?null:{start:i,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(ma={focusedElem:e,selectionRange:r},Rn=!1,w=t;w!==null;)if(t=w,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,w=e;else for(;w!==null;){t=w;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var k=b.memoizedProps,j=b.memoizedState,f=t.stateNode,s=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Te(t.type,k),j);f.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(y){V(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,w=e;break}w=t.return}return b=zi,zi=!1,b}function Pr(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var l=n=n.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&js(t,r,a)}l=l.next}while(l!==n)}}function sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function La(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function As(e){var t=e.alternate;t!==null&&(e.alternate=null,As(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ie],delete t[Ur],delete t[ya],delete t[Gf],delete t[qf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fs(e){return e.tag===5||e.tag===3||e.tag===4}function Mi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function za(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=An));else if(n!==4&&(e=e.child,e!==null))for(za(e,t,r),e=e.sibling;e!==null;)za(e,t,r),e=e.sibling}function Ma(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Ma(e,t,r),e=e.sibling;e!==null;)Ma(e,t,r),e=e.sibling}var J=null,Ne=!1;function qe(e,t,r){for(r=r.child;r!==null;)Us(e,t,r),r=r.sibling}function Us(e,t,r){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(tl,r)}catch{}switch(r.tag){case 5:ne||Ht(r,t);case 6:var n=J,l=Ne;J=null,qe(e,t,r),J=n,Ne=l,J!==null&&(Ne?(e=J,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):J.removeChild(r.stateNode));break;case 18:J!==null&&(Ne?(e=J,r=r.stateNode,e.nodeType===8?Rl(e.parentNode,r):e.nodeType===1&&Rl(e,r),Rr(e)):Rl(J,r.stateNode));break;case 4:n=J,l=Ne,J=r.stateNode.containerInfo,Ne=!0,qe(e,t,r),J=n,Ne=l;break;case 0:case 11:case 14:case 15:if(!ne&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){l=n=n.next;do{var a=l,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&js(r,t,o),l=l.next}while(l!==n)}qe(e,t,r);break;case 1:if(!ne&&(Ht(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(i){V(r,t,i)}qe(e,t,r);break;case 21:qe(e,t,r);break;case 22:r.mode&1?(ne=(n=ne)||r.memoizedState!==null,qe(e,t,r),ne=n):qe(e,t,r);break;default:qe(e,t,r)}}function Di(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new fd),t.forEach(function(n){var l=wd.bind(null,e,n);r.has(n)||(r.add(n),n.then(l,l))})}}function Pe(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var l=r[n];try{var a=e,o=t,i=o;e:for(;i!==null;){switch(i.tag){case 5:J=i.stateNode,Ne=!1;break e;case 3:J=i.stateNode.containerInfo,Ne=!0;break e;case 4:J=i.stateNode.containerInfo,Ne=!0;break e}i=i.return}if(J===null)throw Error(g(160));Us(a,o,l),J=null,Ne=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){V(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ws(t,e),t=t.sibling}function Ws(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Oe(e),n&4){try{Pr(3,e,e.return),sl(3,e)}catch(k){V(e,e.return,k)}try{Pr(5,e,e.return)}catch(k){V(e,e.return,k)}}break;case 1:Pe(t,e),Oe(e),n&512&&r!==null&&Ht(r,r.return);break;case 5:if(Pe(t,e),Oe(e),n&512&&r!==null&&Ht(r,r.return),e.flags&32){var l=e.stateNode;try{zr(l,"")}catch(k){V(e,e.return,k)}}if(n&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,o=r!==null?r.memoizedProps:a,i=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{i==="input"&&a.type==="radio"&&a.name!=null&&uu(l,a),na(i,o);var c=na(i,a);for(o=0;o<u.length;o+=2){var h=u[o],m=u[o+1];h==="style"?pu(l,m):h==="dangerouslySetInnerHTML"?fu(l,m):h==="children"?zr(l,m):Ha(l,h,m,c)}switch(i){case"input":Jl(l,a);break;case"textarea":su(l,a);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?$t(l,!!a.multiple,v,!1):p!==!!a.multiple&&(a.defaultValue!=null?$t(l,!!a.multiple,a.defaultValue,!0):$t(l,!!a.multiple,a.multiple?[]:"",!1))}l[Ur]=a}catch(k){V(e,e.return,k)}}break;case 6:if(Pe(t,e),Oe(e),n&4){if(e.stateNode===null)throw Error(g(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(k){V(e,e.return,k)}}break;case 3:if(Pe(t,e),Oe(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Rr(t.containerInfo)}catch(k){V(e,e.return,k)}break;case 4:Pe(t,e),Oe(e);break;case 13:Pe(t,e),Oe(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(_o=$())),n&4&&Di(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(ne=(c=ne)||h,Pe(t,e),ne=c):Pe(t,e),Oe(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(w=e,h=e.child;h!==null;){for(m=w=h;w!==null;){switch(p=w,v=p.child,p.tag){case 0:case 11:case 14:case 15:Pr(4,p,p.return);break;case 1:Ht(p,p.return);var b=p.stateNode;if(typeof b.componentWillUnmount=="function"){n=p,r=p.return;try{t=n,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(k){V(n,r,k)}}break;case 5:Ht(p,p.return);break;case 22:if(p.memoizedState!==null){Ri(m);continue}}v!==null?(v.return=p,w=v):Ri(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{l=m.stateNode,c?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(i=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,i.style.display=du("display",o))}catch(k){V(e,e.return,k)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(k){V(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Pe(t,e),Oe(e),n&4&&Di(e);break;case 21:break;default:Pe(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Fs(r)){var n=r;break e}r=r.return}throw Error(g(160))}switch(n.tag){case 5:var l=n.stateNode;n.flags&32&&(zr(l,""),n.flags&=-33);var a=Mi(e);Ma(e,a,l);break;case 3:case 4:var o=n.stateNode.containerInfo,i=Mi(e);za(e,i,o);break;default:throw Error(g(161))}}catch(u){V(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pd(e,t,r){w=e,Vs(e)}function Vs(e,t,r){for(var n=(e.mode&1)!==0;w!==null;){var l=w,a=l.child;if(l.tag===22&&n){var o=l.memoizedState!==null||hn;if(!o){var i=l.alternate,u=i!==null&&i.memoizedState!==null||ne;i=hn;var c=ne;if(hn=o,(ne=u)&&!c)for(w=l;w!==null;)o=w,u=o.child,o.tag===22&&o.memoizedState!==null?Ii(l):u!==null?(u.return=o,w=u):Ii(l);for(;a!==null;)w=a,Vs(a),a=a.sibling;w=l,hn=i,ne=c}Oi(e)}else l.subtreeFlags&8772&&a!==null?(a.return=l,w=a):Oi(e)}}function Oi(e){for(;w!==null;){var t=w;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ne||sl(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ne)if(r===null)n.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:Te(t.type,r.memoizedProps);n.componentDidUpdate(l,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&vi(t,a,n);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}vi(t,o,r)}break;case 5:var i=t.stateNode;if(r===null&&t.flags&4){r=i;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Rr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}ne||t.flags&512&&La(t)}catch(p){V(t,t.return,p)}}if(t===e){w=null;break}if(r=t.sibling,r!==null){r.return=t.return,w=r;break}w=t.return}}function Ri(e){for(;w!==null;){var t=w;if(t===e){w=null;break}var r=t.sibling;if(r!==null){r.return=t.return,w=r;break}w=t.return}}function Ii(e){for(;w!==null;){var t=w;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{sl(4,t)}catch(u){V(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var l=t.return;try{n.componentDidMount()}catch(u){V(t,l,u)}}var a=t.return;try{La(t)}catch(u){V(t,a,u)}break;case 5:var o=t.return;try{La(t)}catch(u){V(t,o,u)}}}catch(u){V(t,t.return,u)}if(t===e){w=null;break}var i=t.sibling;if(i!==null){i.return=t.return,w=i;break}w=t.return}}var md=Math.ceil,qn=Ge.ReactCurrentDispatcher,wo=Ge.ReactCurrentOwner,_e=Ge.ReactCurrentBatchConfig,M=0,X=null,Q=null,Z=0,me=0,Bt=mt(0),G=0,Qr=null,Tt=0,cl=0,So=0,Tr=null,se=null,_o=0,nr=1/0,Fe=null,Kn=!1,Da=null,ut=null,gn=!1,rt=null,Xn=0,Nr=0,Oa=null,Pn=-1,Tn=0;function oe(){return M&6?$():Pn!==-1?Pn:Pn=$()}function st(e){return e.mode&1?M&2&&Z!==0?Z&-Z:Xf.transition!==null?(Tn===0&&(Tn=Cu()),Tn):(e=D,e!==0||(e=window.event,e=e===void 0?16:Mu(e.type)),e):1}function Me(e,t,r,n){if(50<Nr)throw Nr=0,Oa=null,Error(g(185));Gr(e,r,n),(!(M&2)||e!==X)&&(e===X&&(!(M&2)&&(cl|=r),G===4&&Ze(e,Z)),pe(e,n),r===1&&M===0&&!(t.mode&1)&&(nr=$()+500,ol&&ht()))}function pe(e,t){var r=e.callbackNode;Kc(e,t);var n=On(e,e===X?Z:0);if(n===0)r!==null&&$o(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&$o(r),t===1)e.tag===0?Kf(ji.bind(null,e)):Xu(ji.bind(null,e)),Qf(function(){!(M&6)&&ht()}),r=null;else{switch(Eu(n)){case 1:r=Ga;break;case 4:r=_u;break;case 16:r=Dn;break;case 536870912:r=xu;break;default:r=Dn}r=Ks(r,Hs.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Hs(e,t){if(Pn=-1,Tn=0,M&6)throw Error(g(327));var r=e.callbackNode;if(Kt()&&e.callbackNode!==r)return null;var n=On(e,e===X?Z:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Jn(e,n);else{t=n;var l=M;M|=2;var a=$s();(X!==e||Z!==t)&&(Fe=null,nr=$()+500,_t(e,t));do try{yd();break}catch(i){Bs(e,i)}while(!0);io(),qn.current=a,M=l,Q!==null?t=0:(X=null,Z=0,t=G)}if(t!==0){if(t===2&&(l=ua(e),l!==0&&(n=l,t=Ra(e,l))),t===1)throw r=Qr,_t(e,0),Ze(e,n),pe(e,$()),r;if(t===6)Ze(e,n);else{if(l=e.current.alternate,!(n&30)&&!hd(l)&&(t=Jn(e,n),t===2&&(a=ua(e),a!==0&&(n=a,t=Ra(e,a))),t===1))throw r=Qr,_t(e,0),Ze(e,n),pe(e,$()),r;switch(e.finishedWork=l,e.finishedLanes=n,t){case 0:case 1:throw Error(g(345));case 2:bt(e,se,Fe);break;case 3:if(Ze(e,n),(n&130023424)===n&&(t=_o+500-$(),10<t)){if(On(e,0)!==0)break;if(l=e.suspendedLanes,(l&n)!==n){oe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ga(bt.bind(null,e,se,Fe),t);break}bt(e,se,Fe);break;case 4:if(Ze(e,n),(n&4194240)===n)break;for(t=e.eventTimes,l=-1;0<n;){var o=31-ze(n);a=1<<o,o=t[o],o>l&&(l=o),n&=~a}if(n=l,n=$()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*md(n/1960))-n,10<n){e.timeoutHandle=ga(bt.bind(null,e,se,Fe),n);break}bt(e,se,Fe);break;case 5:bt(e,se,Fe);break;default:throw Error(g(329))}}}return pe(e,$()),e.callbackNode===r?Hs.bind(null,e):null}function Ra(e,t){var r=Tr;return e.current.memoizedState.isDehydrated&&(_t(e,t).flags|=256),e=Jn(e,t),e!==2&&(t=se,se=r,t!==null&&Ia(t)),e}function Ia(e){se===null?se=e:se.push.apply(se,e)}function hd(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var l=r[n],a=l.getSnapshot;l=l.value;try{if(!De(a(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ze(e,t){for(t&=~So,t&=~cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-ze(t),n=1<<r;e[r]=-1,t&=~n}}function ji(e){if(M&6)throw Error(g(327));Kt();var t=On(e,0);if(!(t&1))return pe(e,$()),null;var r=Jn(e,t);if(e.tag!==0&&r===2){var n=ua(e);n!==0&&(t=n,r=Ra(e,n))}if(r===1)throw r=Qr,_t(e,0),Ze(e,t),pe(e,$()),r;if(r===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bt(e,se,Fe),pe(e,$()),null}function xo(e,t){var r=M;M|=1;try{return e(t)}finally{M=r,M===0&&(nr=$()+500,ol&&ht())}}function Nt(e){rt!==null&&rt.tag===0&&!(M&6)&&Kt();var t=M;M|=1;var r=_e.transition,n=D;try{if(_e.transition=null,D=1,e)return e()}finally{D=n,_e.transition=r,M=t,!(M&6)&&ht()}}function Co(){me=Bt.current,I(Bt)}function _t(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,$f(r)),Q!==null)for(r=Q.return;r!==null;){var n=r;switch(lo(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Fn();break;case 3:tr(),I(fe),I(le),mo();break;case 5:po(n);break;case 4:tr();break;case 13:I(F);break;case 19:I(F);break;case 10:uo(n.type._context);break;case 22:case 23:Co()}r=r.return}if(X=e,Q=e=ct(e.current,null),Z=me=t,G=0,Qr=null,So=cl=Tt=0,se=Tr=null,wt!==null){for(t=0;t<wt.length;t++)if(r=wt[t],n=r.interleaved,n!==null){r.interleaved=null;var l=n.next,a=r.pending;if(a!==null){var o=a.next;a.next=l,n.next=o}r.pending=n}wt=null}return e}function Bs(e,t){do{var r=Q;try{if(io(),xn.current=Gn,Yn){for(var n=U.memoizedState;n!==null;){var l=n.queue;l!==null&&(l.pending=null),n=n.next}Yn=!1}if(Pt=0,K=Y=U=null,Er=!1,Hr=0,wo.current=null,r===null||r.return===null){G=1,Qr=t,Q=null;break}e:{var a=e,o=r.return,i=r,u=t;if(t=Z,i.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=i,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=xi(o);if(v!==null){v.flags&=-257,Ci(v,o,i,a,t),v.mode&1&&_i(a,c,t),t=v,u=c;var b=t.updateQueue;if(b===null){var k=new Set;k.add(u),t.updateQueue=k}else b.add(u);break e}else{if(!(t&1)){_i(a,c,t),Eo();break e}u=Error(g(426))}}else if(A&&i.mode&1){var j=xi(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Ci(j,o,i,a,t),ao(rr(u,i));break e}}a=u=rr(u,i),G!==4&&(G=2),Tr===null?Tr=[a]:Tr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=Es(a,u,t);yi(a,f);break e;case 1:i=u;var s=a.type,d=a.stateNode;if(!(a.flags&128)&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ut===null||!ut.has(d)))){a.flags|=65536,t&=-t,a.lanes|=t;var y=Ps(a,i,t);yi(a,y);break e}}a=a.return}while(a!==null)}Ys(r)}catch(_){t=_,Q===r&&r!==null&&(Q=r=r.return);continue}break}while(!0)}function $s(){var e=qn.current;return qn.current=Gn,e===null?Gn:e}function Eo(){(G===0||G===3||G===2)&&(G=4),X===null||!(Tt&268435455)&&!(cl&268435455)||Ze(X,Z)}function Jn(e,t){var r=M;M|=2;var n=$s();(X!==e||Z!==t)&&(Fe=null,_t(e,t));do try{gd();break}catch(l){Bs(e,l)}while(!0);if(io(),M=r,qn.current=n,Q!==null)throw Error(g(261));return X=null,Z=0,G}function gd(){for(;Q!==null;)Qs(Q)}function yd(){for(;Q!==null&&!Wc();)Qs(Q)}function Qs(e){var t=qs(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?Ys(e):Q=t,wo.current=null}function Ys(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=cd(r,t),r!==null){r.flags&=32767,Q=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,Q=null;return}}else if(r=sd(r,t,me),r!==null){Q=r;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);G===0&&(G=5)}function bt(e,t,r){var n=D,l=_e.transition;try{_e.transition=null,D=1,vd(e,t,r,n)}finally{_e.transition=l,D=n}return null}function vd(e,t,r,n){do Kt();while(rt!==null);if(M&6)throw Error(g(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Xc(e,a),e===X&&(Q=X=null,Z=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||gn||(gn=!0,Ks(Dn,function(){return Kt(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=_e.transition,_e.transition=null;var o=D;D=1;var i=M;M|=4,wo.current=null,dd(e,r),Ws(r,e),Af(ma),Rn=!!pa,ma=pa=null,e.current=r,pd(r),Vc(),M=i,D=o,_e.transition=a}else e.current=r;if(gn&&(gn=!1,rt=e,Xn=l),a=e.pendingLanes,a===0&&(ut=null),$c(r.stateNode),pe(e,$()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],n(l.value,{componentStack:l.stack,digest:l.digest});if(Kn)throw Kn=!1,e=Da,Da=null,e;return Xn&1&&e.tag!==0&&Kt(),a=e.pendingLanes,a&1?e===Oa?Nr++:(Nr=0,Oa=e):Nr=0,ht(),null}function Kt(){if(rt!==null){var e=Eu(Xn),t=_e.transition,r=D;try{if(_e.transition=null,D=16>e?16:e,rt===null)var n=!1;else{if(e=rt,rt=null,Xn=0,M&6)throw Error(g(331));var l=M;for(M|=4,w=e.current;w!==null;){var a=w,o=a.child;if(w.flags&16){var i=a.deletions;if(i!==null){for(var u=0;u<i.length;u++){var c=i[u];for(w=c;w!==null;){var h=w;switch(h.tag){case 0:case 11:case 15:Pr(8,h,a)}var m=h.child;if(m!==null)m.return=h,w=m;else for(;w!==null;){h=w;var p=h.sibling,v=h.return;if(As(h),h===c){w=null;break}if(p!==null){p.return=v,w=p;break}w=v}}}var b=a.alternate;if(b!==null){var k=b.child;if(k!==null){b.child=null;do{var j=k.sibling;k.sibling=null,k=j}while(k!==null)}}w=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,w=o;else e:for(;w!==null;){if(a=w,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Pr(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,w=f;break e}w=a.return}}var s=e.current;for(w=s;w!==null;){o=w;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,w=d;else e:for(o=s;w!==null;){if(i=w,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:sl(9,i)}}catch(_){V(i,i.return,_)}if(i===o){w=null;break e}var y=i.sibling;if(y!==null){y.return=i.return,w=y;break e}w=i.return}}if(M=l,ht(),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(tl,e)}catch{}n=!0}return n}finally{D=r,_e.transition=t}}return!1}function Ai(e,t,r){t=rr(r,t),t=Es(e,t,1),e=it(e,t,1),t=oe(),e!==null&&(Gr(e,1,t),pe(e,t))}function V(e,t,r){if(e.tag===3)Ai(e,e,r);else for(;t!==null;){if(t.tag===3){Ai(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ut===null||!ut.has(n))){e=rr(r,e),e=Ps(t,e,1),t=it(t,e,1),e=oe(),t!==null&&(Gr(t,1,e),pe(t,e));break}}t=t.return}}function bd(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=oe(),e.pingedLanes|=e.suspendedLanes&r,X===e&&(Z&r)===r&&(G===4||G===3&&(Z&130023424)===Z&&500>$()-_o?_t(e,0):So|=r),pe(e,t)}function Gs(e,t){t===0&&(e.mode&1?(t=an,an<<=1,!(an&130023424)&&(an=4194304)):t=1);var r=oe();e=Qe(e,t),e!==null&&(Gr(e,t,r),pe(e,r))}function kd(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Gs(e,r)}function wd(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(g(314))}n!==null&&n.delete(t),Gs(e,r)}var qs;qs=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)ce=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return ce=!1,ud(e,t,r);ce=!!(e.flags&131072)}else ce=!1,A&&t.flags&1048576&&Ju(t,Vn,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;En(e,t),e=t.pendingProps;var l=Jt(t,le.current);qt(t,r),l=go(null,t,n,e,l,r);var a=yo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,de(n)?(a=!0,Un(t)):a=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,co(t),l.updater=ul,t.stateNode=l,l._reactInternals=t,_a(t,n,e,r),t=Ea(null,t,n,!0,a,r)):(t.tag=0,A&&a&&no(t),ae(null,t,l,r),t=t.child),t;case 16:n=t.elementType;e:{switch(En(e,t),e=t.pendingProps,l=n._init,n=l(n._payload),t.type=n,l=t.tag=_d(n),e=Te(n,e),l){case 0:t=Ca(null,t,n,e,r);break e;case 1:t=Ti(null,t,n,e,r);break e;case 11:t=Ei(null,t,n,e,r);break e;case 14:t=Pi(null,t,n,Te(n.type,e),r);break e}throw Error(g(306,n,""))}return t;case 0:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Te(n,l),Ca(e,t,n,l,r);case 1:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Te(n,l),Ti(e,t,n,l,r);case 3:e:{if(zs(t),e===null)throw Error(g(387));n=t.pendingProps,a=t.memoizedState,l=a.element,ls(e,t),$n(t,n,null,r);var o=t.memoizedState;if(n=o.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){l=rr(Error(g(423)),t),t=Ni(e,t,n,r,l);break e}else if(n!==l){l=rr(Error(g(424)),t),t=Ni(e,t,n,r,l);break e}else for(he=ot(t.stateNode.containerInfo.firstChild),ge=t,A=!0,Le=null,r=rs(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Zt(),n===l){t=Ye(e,t,r);break e}ae(e,t,n,r)}t=t.child}return t;case 5:return as(t),e===null&&ka(t),n=t.type,l=t.pendingProps,a=e!==null?e.memoizedProps:null,o=l.children,ha(n,l)?o=null:a!==null&&ha(n,a)&&(t.flags|=32),Ls(e,t),ae(e,t,o,r),t.child;case 6:return e===null&&ka(t),null;case 13:return Ms(e,t,r);case 4:return fo(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=er(t,null,n,r):ae(e,t,n,r),t.child;case 11:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Te(n,l),Ei(e,t,n,l,r);case 7:return ae(e,t,t.pendingProps,r),t.child;case 8:return ae(e,t,t.pendingProps.children,r),t.child;case 12:return ae(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,l=t.pendingProps,a=t.memoizedProps,o=l.value,O(Hn,n._currentValue),n._currentValue=o,a!==null)if(De(a.value,o)){if(a.children===l.children&&!fe.current){t=Ye(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var i=a.dependencies;if(i!==null){o=a.child;for(var u=i.firstContext;u!==null;){if(u.context===n){if(a.tag===1){u=He(-1,r&-r),u.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}a.lanes|=r,u=a.alternate,u!==null&&(u.lanes|=r),wa(a.return,r,t),i.lanes|=r;break}u=u.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(g(341));o.lanes|=r,i=o.alternate,i!==null&&(i.lanes|=r),wa(o,r,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ae(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,n=t.pendingProps.children,qt(t,r),l=xe(l),n=n(l),t.flags|=1,ae(e,t,n,r),t.child;case 14:return n=t.type,l=Te(n,t.pendingProps),l=Te(n.type,l),Pi(e,t,n,l,r);case 15:return Ts(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Te(n,l),En(e,t),t.tag=1,de(n)?(e=!0,Un(t)):e=!1,qt(t,r),Cs(t,n,l),_a(t,n,l,r),Ea(null,t,n,!0,e,r);case 19:return Ds(e,t,r);case 22:return Ns(e,t,r)}throw Error(g(156,t.tag))};function Ks(e,t){return Su(e,t)}function Sd(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Se(e,t,r,n){return new Sd(e,t,r,n)}function Po(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _d(e){if(typeof e=="function")return Po(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$a)return 11;if(e===Qa)return 14}return 2}function ct(e,t){var r=e.alternate;return r===null?(r=Se(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Nn(e,t,r,n,l,a){var o=2;if(n=e,typeof e=="function")Po(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ot:return xt(r.children,l,a,t);case Ba:o=8,l|=8;break;case Yl:return e=Se(12,r,t,l|2),e.elementType=Yl,e.lanes=a,e;case Gl:return e=Se(13,r,t,l),e.elementType=Gl,e.lanes=a,e;case ql:return e=Se(19,r,t,l),e.elementType=ql,e.lanes=a,e;case au:return fl(r,l,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nu:o=10;break e;case lu:o=9;break e;case $a:o=11;break e;case Qa:o=14;break e;case Ke:o=16,n=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return t=Se(o,r,t,l),t.elementType=e,t.type=n,t.lanes=a,t}function xt(e,t,r,n){return e=Se(7,e,n,t),e.lanes=r,e}function fl(e,t,r,n){return e=Se(22,e,n,t),e.elementType=au,e.lanes=r,e.stateNode={isHidden:!1},e}function Hl(e,t,r){return e=Se(6,e,null,t),e.lanes=r,e}function Bl(e,t,r){return t=Se(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xd(e,t,r,n,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xl(0),this.expirationTimes=xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xl(0),this.identifierPrefix=n,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function To(e,t,r,n,l,a,o,i,u){return e=new xd(e,t,r,i,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Se(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},co(a),e}function Cd(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dt,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Xs(e){if(!e)return dt;e=e._reactInternals;e:{if(zt(e)!==e||e.tag!==1)throw Error(g(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(de(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(g(171))}if(e.tag===1){var r=e.type;if(de(r))return Ku(e,r,t)}return t}function Js(e,t,r,n,l,a,o,i,u){return e=To(r,n,!0,e,l,a,o,i,u),e.context=Xs(null),r=e.current,n=oe(),l=st(r),a=He(n,l),a.callback=t??null,it(r,a,l),e.current.lanes=l,Gr(e,l,n),pe(e,n),e}function dl(e,t,r,n){var l=t.current,a=oe(),o=st(l);return r=Xs(r),t.context===null?t.context=r:t.pendingContext=r,t=He(a,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=it(l,t,o),e!==null&&(Me(e,l,o,a),_n(e,l,o)),o}function Zn(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fi(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function No(e,t){Fi(e,t),(e=e.alternate)&&Fi(e,t)}function Ed(){return null}var Zs=typeof reportError=="function"?reportError:function(e){console.error(e)};function Lo(e){this._internalRoot=e}pl.prototype.render=Lo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));dl(e,t,null,null)};pl.prototype.unmount=Lo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nt(function(){dl(null,e,null,null)}),t[$e]=null}};function pl(e){this._internalRoot=e}pl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Je.length&&t!==0&&t<Je[r].priority;r++);Je.splice(r,0,e),r===0&&zu(e)}};function zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ui(){}function Pd(e,t,r,n,l){if(l){if(typeof n=="function"){var a=n;n=function(){var c=Zn(o);a.call(c)}}var o=Js(t,n,e,0,null,!1,!1,"",Ui);return e._reactRootContainer=o,e[$e]=o.current,Ar(e.nodeType===8?e.parentNode:e),Nt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof n=="function"){var i=n;n=function(){var c=Zn(u);i.call(c)}}var u=To(e,0,!1,null,null,!1,!1,"",Ui);return e._reactRootContainer=u,e[$e]=u.current,Ar(e.nodeType===8?e.parentNode:e),Nt(function(){dl(t,u,r,n)}),u}function hl(e,t,r,n,l){var a=r._reactRootContainer;if(a){var o=a;if(typeof l=="function"){var i=l;l=function(){var u=Zn(o);i.call(u)}}dl(t,o,e,l)}else o=Pd(r,t,e,l,n);return Zn(o)}Pu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=br(t.pendingLanes);r!==0&&(qa(t,r|1),pe(t,$()),!(M&6)&&(nr=$()+500,ht()))}break;case 13:Nt(function(){var n=Qe(e,1);if(n!==null){var l=oe();Me(n,e,1,l)}}),No(e,1)}};Ka=function(e){if(e.tag===13){var t=Qe(e,134217728);if(t!==null){var r=oe();Me(t,e,134217728,r)}No(e,134217728)}};Tu=function(e){if(e.tag===13){var t=st(e),r=Qe(e,t);if(r!==null){var n=oe();Me(r,e,t,n)}No(e,t)}};Nu=function(){return D};Lu=function(e,t){var r=D;try{return D=e,t()}finally{D=r}};aa=function(e,t,r){switch(t){case"input":if(Jl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var l=al(n);if(!l)throw Error(g(90));iu(n),Jl(n,l)}}}break;case"textarea":su(e,r);break;case"select":t=r.value,t!=null&&$t(e,!!r.multiple,t,!1)}};gu=xo;yu=Nt;var Td={usingClientEntryPoint:!1,Events:[Kr,At,al,mu,hu,xo]},gr={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nd={bundleType:gr.bundleType,version:gr.version,rendererPackageName:gr.rendererPackageName,rendererConfig:gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ku(e),e===null?null:e.stateNode},findFiberByHostInstance:gr.findFiberByHostInstance||Ed,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yn.isDisabled&&yn.supportsFiber)try{tl=yn.inject(Nd),je=yn}catch{}}ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Td;ve.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zo(t))throw Error(g(200));return Cd(e,t,null,r)};ve.createRoot=function(e,t){if(!zo(e))throw Error(g(299));var r=!1,n="",l=Zs;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=To(e,1,!1,null,null,r,!1,n,l),e[$e]=t.current,Ar(e.nodeType===8?e.parentNode:e),new Lo(t)};ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=ku(t),e=e===null?null:e.stateNode,e};ve.flushSync=function(e){return Nt(e)};ve.hydrate=function(e,t,r){if(!ml(t))throw Error(g(200));return hl(null,e,t,!0,r)};ve.hydrateRoot=function(e,t,r){if(!zo(e))throw Error(g(405));var n=r!=null&&r.hydratedSources||null,l=!1,a="",o=Zs;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=Js(t,null,e,1,r??null,l,!1,a,o),e[$e]=t.current,Ar(e),n)for(e=0;e<n.length;e++)r=n[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new pl(t)};ve.render=function(e,t,r){if(!ml(t))throw Error(g(200));return hl(null,e,t,!1,r)};ve.unmountComponentAtNode=function(e){if(!ml(e))throw Error(g(40));return e._reactRootContainer?(Nt(function(){hl(null,null,e,!1,function(){e._reactRootContainer=null,e[$e]=null})}),!0):!1};ve.unstable_batchedUpdates=xo;ve.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!ml(r))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return hl(e,t,r,!1,n)};ve.version="18.3.1-next-f1338f8080-20240426";function ec(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ec)}catch(e){console.error(e)}}ec(),Zi.exports=ve;var Ld=Zi.exports,Wi=Ld;$l.createRoot=Wi.createRoot,$l.hydrateRoot=Wi.hydrateRoot;function zd({sections:e,currentPath:t,onNavigate:r}){const[n,l]=et.useState(new Set),a=o=>{l(i=>{const u=new Set(i);return u.has(o)?u.delete(o):u.add(o),u})};return z.jsxs("aside",{className:"sidebar",children:[z.jsx("div",{className:"sidebar-header",children:z.jsxs("h1",{className:"logo",children:[z.jsx("img",{src:"/logo.png",alt:"UWASIC Logo"}),z.jsx("span",{className:"logo-text",children:"UWASIC Docs"})]})}),z.jsx("nav",{className:"sidebar-nav",children:e.map(o=>z.jsxs("div",{className:"nav-section",children:[z.jsxs("button",{className:"section-header",onClick:()=>a(o.id),children:[z.jsx("span",{className:`chevron ${n.has(o.id)?"expanded":""}`,children:"›"}),z.jsx("span",{className:"section-title",children:o.title})]}),n.has(o.id)&&z.jsx("ul",{className:"page-list",children:o.pages.map(i=>z.jsx("li",{children:z.jsx("button",{className:`page-link ${t===i.path?"active":""}`,onClick:()=>r(i.path),children:i.metadata.title})},i.path))})]},o.id))})]})}function Md({content:e}){const t=e.trim().split(`
`),r=[];let n=!1,l=[];const a=o=>{const i=[];let u=o,c=0;const h=/(`[^`]+`|\*\*[^*]+\*\*)/g,m=u.match(h);if(!m)return o;let p=0;return m.forEach(v=>{const b=u.indexOf(v,p);b>p&&i.push(u.slice(p,b)),v.startsWith("`")?i.push(z.jsx("code",{children:v.slice(1,-1)},c++)):v.startsWith("**")&&i.push(z.jsx("strong",{children:v.slice(2,-2)},c++)),p=b+v.length}),p<u.length&&i.push(u.slice(p)),i.length>0?i:o};return t.forEach((o,i)=>{const u=o.trim();if(u.startsWith("```")){n?(n=!1,r.push(z.jsx("pre",{children:z.jsx("code",{children:l.join(`
`)})},`code-${i}`))):(n=!0,l=[]);return}if(n){l.push(o);return}if(u.startsWith("### ")){r.push(z.jsx("h3",{children:u.slice(4)},i));return}if(u.startsWith("## ")){r.push(z.jsx("h2",{children:u.slice(3)},i));return}if(u.startsWith("# ")){r.push(z.jsx("h1",{children:u.slice(2)},i));return}if(u.startsWith("- ")){r.push(z.jsx("li",{children:a(u.slice(2))},i));return}if(u.match(/^\d+\.\s/)){r.push(z.jsx("li",{children:a(u.replace(/^\d+\.\s/,""))},i));return}if(u){r.push(z.jsx("p",{children:a(u)},i));return}r.push(z.jsx("br",{},i))}),z.jsx("div",{className:"markdown-content",children:r})}const Dd={title:"Create Project",order:2},Od=`
# Create Analog Project

## Step 1: Create Project

\`\`\`bash
cd flows/
make CreateProject PROJECT_NAME=my_opamp PROJECT_TYPE=analog
\`\`\`

## Step 2: Draw Schematic

\`\`\`bash
cd analog/build/schematic
make setup        # Organize files
make schematic    # Open Xschem
\`\`\`

In Xschem:
1. Place components from library
2. Wire them together
3. Add pins for inputs/outputs
4. Save as \`my_opamp.sch\`

## Step 3: Simulate

Add testbench in \`schematics/testbenches/tb_my_opamp.sch\`

Run simulation:
\`\`\`bash
cd analog/build/schematic
make spice
\`\`\`

View results in ngspice or plot files.

## Step 4: Draw Layout

\`\`\`bash
cd analog/build/layout
make layout       # Open Magic
\`\`\`

In Magic:
1. Draw your circuit using PDK cells
2. Match your schematic
3. Add metal connections
4. Save as \`my_opamp.mag\`

## Step 5: Verify

\`\`\`bash
cd analog/build/validation
make magic_test          # DRC and LVS
make klayout_test        # KLayout checks
make full_verification   # Everything
\`\`\`

Fix errors until all checks pass.

## Done!

Your analog design is ready. Next: see TinyTapeout Integration.
`,Rd=Object.freeze(Object.defineProperty({__proto__:null,content:Od,metadata:Dd},Symbol.toStringTag,{value:"Module"})),Id={title:"Layout Design",order:4},jd=`
# Layout Design

## Open Magic

\`\`\`bash
cd analog/build/layout
make layout
\`\`\`

## Basic Workflow

1. **Select Layer**: Click layer in palette (right side)
2. **Draw Box**: Left-click and drag
3. **Paint**: Press \`p\` key
4. **Erase**: Press \`e\` key
5. **Move**: Select, then press \`m\` and click new location
6. **Copy**: Select, press \`c\`, click new location
7. **Zoom In**: Press \`z\`
8. **Zoom Out**: Press \`Shift+z\`

## Important Layers

- **nwell**: N-well region
- **pwell**: P-well region
- **diff**: Diffusion (transistor source/drain)
- **poly**: Polysilicon (transistor gate)
- **m1, m2, m3**: Metal layers
- **via, via2**: Connections between metal layers

## Draw Transistor

1. Draw nwell (for PMOS) or pwell (for NMOS)
2. Draw diff inside well
3. Draw poly crossing diff (creates gate)
4. Add contacts to source/drain

## Connect with Metal

1. Draw metal1 over areas to connect
2. Use vias to connect different metal layers
3. Keep metal wide enough (check DRC rules)

## Save

File → Save or press \`Ctrl+S\`

## Check Your Work

\`\`\`bash
cd analog/build/validation
make magic_test
\`\`\`
`,Ad=Object.freeze(Object.defineProperty({__proto__:null,content:jd,metadata:Id},Symbol.toStringTag,{value:"Module"})),Fd={title:"Overview",order:1},Ud=`
# Analog Workflow

Design analog circuits: amplifiers, filters, voltage references, current mirrors.

## What You'll Do

1. Create project
2. Draw schematic in Xschem
3. Simulate with SPICE
4. Draw layout in Magic
5. Verify DRC/LVS
6. Submit to TinyTapeout

## File Structure

\`\`\`
analog/
├── library/         # Shared components
├── schematics/      # Your circuit diagrams (.sch)
├── symbols/         # Component symbols (.sym)
├── layout/          # Chip layouts (.mag)
└── build/           # Build system
    ├── schematic/   # Xschem tools
    ├── layout/      # Magic tools
    └── validation/  # DRC/LVS checks
\`\`\`

## Analog Pins

TinyTapeout gives you 6 analog pins: \`ua[5:0]\`

Configure in \`info.yaml\`:
\`\`\`yaml
pinout:
  ua[0]: "Input voltage"
  ua[1]: "Output voltage"
  ua[2]: "Bias current"
\`\`\`

## Power

- \`VDPWR\` - Digital power (1.8V)
- \`VAPWR\` - Analog power (1.8V)
- \`VGND\` - Ground

## Next Steps

See Create Project to build your first analog design.
`,Wd=Object.freeze(Object.defineProperty({__proto__:null,content:Ud,metadata:Fd},Symbol.toStringTag,{value:"Module"})),Vd={title:"Schematic Design",order:3},Hd=`
# Schematic Design

## Open Xschem

\`\`\`bash
cd analog/build/schematic
make schematic
\`\`\`

## Basic Workflow

1. **Insert Component**: Press \`Insert\` key
2. **Wire**: Press \`w\` key
3. **Move**: Select and drag
4. **Copy**: Press \`c\` key
5. **Delete**: Press \`Delete\` key
6. **Zoom**: Mouse wheel
7. **Pan**: Click and drag (middle mouse)

## Common Components

- **NMOS**: \`sky130_fd_pr/nfet_01v8\`
- **PMOS**: \`sky130_fd_pr/pfet_01v8\`
- **Resistor**: \`sky130_fd_pr/res_high_po\`
- **Capacitor**: \`sky130_fd_pr/cap_mim_m3_1\`
- **Voltage Source**: \`devices/vsource\`
- **Ground**: \`devices/gnd\`

## Add I/O Pins

1. Press \`Insert\`
2. Find \`devices/ipin\` (input) or \`devices/opin\` (output)
3. Place and name them

## Save Your Work

Press \`Ctrl+S\` or click File → Save

## Generate Netlist

In Xschem menu: **Netlist → LVS Netlist**

Creates SPICE file for simulation.
`,Bd=Object.freeze(Object.defineProperty({__proto__:null,content:Hd,metadata:Vd},Symbol.toStringTag,{value:"Module"})),$d={title:"Create Project",order:2},Qd=`
# Create Digital Project

## Step 1: Create Project

\`\`\`bash
cd flows/
make CreateProject PROJECT_NAME=my_counter PROJECT_TYPE=digital
\`\`\`

## Step 2: Write Verilog

Edit \`digital/my_counter/src/my_counter.v\`:

\`\`\`verilog
module my_counter (
    input wire clk,
    input wire rst_n,
    input wire [7:0] ui_in,
    output reg [7:0] uo_out,
    input wire [7:0] uio_in,
    output reg [7:0] uio_out,
    output reg [7:0] uio_oe
);

    reg [7:0] counter;

    always @(posedge clk or negedge rst_n) begin
        if (!rst_n)
            counter <= 8'b0;
        else
            counter <= counter + 1;
    end

    assign uo_out = counter;
    assign uio_out = 8'b0;
    assign uio_oe = 8'b0;

endmodule
\`\`\`

## Step 3: Test It

Create \`digital/my_counter/test/test_counter.py\`:

\`\`\`python
import cocotb
from cocotb.clock import Clock
from cocotb.triggers import RisingEdge

@cocotb.test()
async def test_counter(dut):
    clock = Clock(dut.clk, 10, units="ns")
    cocotb.start_soon(clock.start())

    dut.rst_n.value = 0
    await RisingEdge(dut.clk)
    dut.rst_n.value = 1

    for i in range(10):
        await RisingEdge(dut.clk)
        assert dut.uo_out.value == i
\`\`\`

Run test:
\`\`\`bash
cd digital/my_counter/build/des_tb
make test-rtl
\`\`\`

## Step 4: Done!

Your digital design is ready. Next: see TinyTapeout Integration.
`,Yd=Object.freeze(Object.defineProperty({__proto__:null,content:Qd,metadata:$d},Symbol.toStringTag,{value:"Module"})),Gd={title:"Overview",order:1},qd=`
# Digital Workflow

Design digital circuits: processors, counters, state machines, anything in Verilog.

## What You'll Do

1. Create project
2. Write Verilog code
3. Test it
4. Synthesize to chip layout
5. Submit to TinyTapeout

## File Structure

\`\`\`
digital/your_project/
├── src/           # Your Verilog files (.v, .sv)
├── test/          # Test files (cocotb)
└── build/         # Build system (auto-generated)
    ├── des_tb/    # Simulation
    ├── lint/      # Check for errors
    ├── synthesis/ # Make actual chip
    └── verification/
\`\`\`

## TinyTapeout Interface

Your top module must use these signals:

- \`ui_in[7:0]\` - 8 input pins
- \`uo_out[7:0]\` - 8 output pins
- \`uio_in[7:0]\` - 8 bidirectional pins (input)
- \`uio_out[7:0]\` - 8 bidirectional pins (output)
- \`uio_oe[7:0]\` - Output enable for bidirectional
- \`clk\` - Clock
- \`rst_n\` - Active-low reset

## Next Steps

See Create Project to build your first digital design.
`,Kd=Object.freeze(Object.defineProperty({__proto__:null,content:qd,metadata:Gd},Symbol.toStringTag,{value:"Module"})),Xd={title:"Test & Verify",order:3},Jd=`
# Test & Verify Digital Design

## Run Simulation

\`\`\`bash
cd digital/your_project/build/des_tb
make test-rtl
\`\`\`

Runs your cocotb tests. See waveforms in \`test_results/\`.

## Check for Errors (Lint)

\`\`\`bash
cd digital/your_project/build/lint
make lint
\`\`\`

Finds coding errors before synthesis.

## Local Synthesis (Optional)

\`\`\`bash
cd digital/your_project/build/synthesis
make synthesis    # Just synthesize
make harden       # Full chip layout
\`\`\`

**Note**: Delete \`synthesis/\` output before pushing to GitHub. CI will do final synthesis.

## Formal Verification

\`\`\`bash
cd digital/your_project/build/verification
make verification
\`\`\`

Proves your design works correctly.

## Quick Tips

- Always test before synthesis
- Lint catches most bugs early
- Use waveforms to debug
- CI runs all checks automatically
`,Zd=Object.freeze(Object.defineProperty({__proto__:null,content:Jd,metadata:Xd},Symbol.toStringTag,{value:"Module"})),ep={title:"Basic Commands",order:3},tp=`
# Basic Commands

All commands run from \`flows/\` directory.

## Create Projects

\`\`\`bash
cd flows/

# Digital project
make CreateProject PROJECT_NAME=my_chip PROJECT_TYPE=digital

# Analog project
make CreateProject PROJECT_NAME=my_amp PROJECT_TYPE=analog

# Mixed-signal project
make CreateProject PROJECT_NAME=my_mixed PROJECT_TYPE=mixed
\`\`\`

## Add Modules

\`\`\`bash
# Add analog module to a project
make AddModule MODULE_NAME=opamp MODULE_TYPE=analog PARENT=my_chip

# Add digital module
make AddModule MODULE_NAME=counter MODULE_TYPE=digital PARENT=my_chip
\`\`\`

## Create TinyTapeout Package

\`\`\`bash
make CreateCaravel PROJECT_NAME=tt_my_chip
\`\`\`

## Helpful Commands

\`\`\`bash
make help          # Show all commands
make status        # Show project structure
make DeleteAll     # Delete all projects
\`\`\`
`,rp=Object.freeze(Object.defineProperty({__proto__:null,content:tp,metadata:ep},Symbol.toStringTag,{value:"Module"})),np={title:"Overview",order:1},lp=`
# How To Use UWASIC

A simple guide to get you started with ASIC design.

## What You Get

- **Digital tools**: Build processors, counters, state machines
- **Analog tools**: Design amplifiers, filters, voltage references
- **Mixed-signal**: Combine both in one chip
- **Automatic tapeout**: Submit to TinyTapeout

## Installation

Install Nix, then:

\`\`\`bash
nix-shell
\`\`\`

That's it. All tools are ready.

## Choose Your Path

- **Digital only?** → Go to Digital Workflow
- **Analog only?** → Go to Analog Workflow
- **Both?** → Go to Mixed-Signal Workflow
`,ap=Object.freeze(Object.defineProperty({__proto__:null,content:lp,metadata:np},Symbol.toStringTag,{value:"Module"})),op={title:"Installation",order:2},ip=`
# Installation

## Linux

\`\`\`bash
# Install Nix
sh <(curl -L https://nixos.org/nix/install) --no-daemon

# Enable flakes
mkdir -p ~/.config/nix
echo "experimental-features = nix-command flakes" >> ~/.config/nix/nix.conf

# Restart shell
exec $SHELL

# Enter UWASIC environment
cd uwasic-template
nix-shell
\`\`\`

## macOS

\`\`\`bash
# Install Nix
curl --proto '=https' --tlsv1.2 -sSf -L https://install.determinate.systems/nix | sh -s -- install

# Install XQuartz (for GUI tools)
brew install --cask xquartz

# Enter UWASIC environment
cd uwasic-template
nix-shell
\`\`\`

## Windows (WSL2)

\`\`\`powershell
# In PowerShell as Admin
wsl --install

# Restart, then in WSL2:
sh <(curl -L https://nixos.org/nix/install) --no-daemon
mkdir -p ~/.config/nix
echo "experimental-features = nix-command flakes" >> ~/.config/nix/nix.conf

# Enter UWASIC environment
cd uwasic-template
nix-shell
\`\`\`

## Tools You Get

- Digital: OpenLane2, Yosys, Icarus Verilog, cocotb
- Analog: Xschem, Magic, ngspice, netgen, KLayout
- Verification: CACHE, OpenSTA

Everything auto-installed. No manual setup.
`,up=Object.freeze(Object.defineProperty({__proto__:null,content:ip,metadata:op},Symbol.toStringTag,{value:"Module"})),sp={title:"Create Project",order:2},cp=`
# Create Mixed-Signal Project

## Step 1: Create Project

\`\`\`bash
cd flows/
make CreateProject PROJECT_NAME=my_adc PROJECT_TYPE=mixed
\`\`\`

This creates both digital and analog directories.

## Step 2: Add Modules

Add child modules as needed:

\`\`\`bash
# Add analog comparator
make AddModule MODULE_NAME=comparator MODULE_TYPE=analog PARENT=my_adc

# Add digital controller
make AddModule MODULE_NAME=controller MODULE_TYPE=digital PARENT=my_adc
\`\`\`

## Step 3: Build Digital Part

Follow **Digital Workflow**:
1. Write Verilog in \`digital/my_adc/src/\`
2. Create tests in \`digital/my_adc/test/\`
3. Test with \`make test-rtl\`

## Step 4: Build Analog Part

Follow **Analog Workflow**:
1. Draw schematics in Xschem
2. Simulate with SPICE
3. Draw layout in Magic
4. Verify DRC/LVS

## Step 5: Connect Them

In your digital Verilog, use:
- \`ua[X]\` to connect to analog pins
- Regular digital pins for control/data

Example connection:
\`\`\`verilog
// Digital reads analog comparator output on ua[0]
// Digital controls via uo_out
assign analog_enable = uo_out[0];
\`\`\`

## Step 6: Check Status

\`\`\`bash
make status
\`\`\`

Shows your project structure with all modules.

## Done!

Next: see TinyTapeout Integration.
`,fp=Object.freeze(Object.defineProperty({__proto__:null,content:cp,metadata:sp},Symbol.toStringTag,{value:"Module"})),dp={title:"Overview",order:1},pp=`
# Mixed-Signal Workflow

Combine digital and analog circuits in one chip.

## What Is Mixed-Signal?

A chip with both:
- **Digital**: Processors, state machines, counters
- **Analog**: Amplifiers, ADCs, DACs, filters

Examples:
- ADC with digital output
- DAC with digital input
- Sensor with digital interface
- Mixed filters

## What You'll Do

1. Create mixed-signal project
2. Build digital part (Verilog)
3. Build analog part (Xschem + Magic)
4. Connect them together
5. Submit to TinyTapeout

## Available Pins

**Digital**:
- \`ui_in[7:0]\` - 8 inputs
- \`uo_out[7:0]\` - 8 outputs
- \`uio[7:0]\` - 8 bidirectional

**Analog**:
- \`ua[5:0]\` - 6 analog pins

**Power**:
- \`VDPWR\` - Digital 1.8V
- \`VAPWR\` - Analog 1.8V
- \`VGND\` - Ground

## Tile Size

Mixed projects use **2x2 tiles** on TinyTapeout (larger area).

## Next Steps

See Create Project to build your first mixed-signal design.
`,mp=Object.freeze(Object.defineProperty({__proto__:null,content:pp,metadata:dp},Symbol.toStringTag,{value:"Module"})),hp={title:"Create Package",order:2},gp=`
# Create TinyTapeout Package

## Generate Caravel Package

\`\`\`bash
cd flows/
make CreateCaravel PROJECT_NAME=tt_my_chip
\`\`\`

This creates \`caravel/\` directory with everything needed.

## What Gets Created

\`\`\`
caravel/
├── src/              # Verilog wrapper
├── info.yaml         # TinyTapeout config
├── docs/             # Documentation
└── .github/          # CI workflows
\`\`\`

## Edit info.yaml

Open \`caravel/info.yaml\` and fill in:

\`\`\`yaml
project:
  title: "My Amazing Chip"
  author: "Your Name"
  description: "What your chip does"

pinout:
  # For digital projects
  ui_in[0]: "Button 1"
  uo_out[0]: "LED 1"

  # For analog projects
  ua[0]: "Input voltage"
  ua[1]: "Output voltage"
\`\`\`

## Configure Tiles

In \`info.yaml\`:

\`\`\`yaml
# Digital
tiles: "1x1"

# Analog
tiles: "1x2"

# Mixed-signal
tiles: "2x2"
\`\`\`

## Add Documentation

Edit \`caravel/docs/info.md\`:
- Explain what your chip does
- Add diagrams
- Include usage instructions
- Show example applications

## Test Locally

\`\`\`bash
cd caravel/
# Test files are generated, workflows run on push
\`\`\`

## Next Step

See Submit to push to GitHub and trigger workflows.
`,yp=Object.freeze(Object.defineProperty({__proto__:null,content:gp,metadata:hp},Symbol.toStringTag,{value:"Module"})),vp={title:"Overview",order:1},bp=`
# TinyTapeout Integration

Submit your chip to get it manufactured!

## What is TinyTapeout?

TinyTapeout lets you get your chip design manufactured on a real silicon wafer. Your design becomes part of a multi-project chip.

## What You Get

- Real silicon chip with your design
- PCB development board
- Testing tools
- Community support

## Cost

Around $100-150 per submission (check TinyTapeout website for current pricing).

## Tile Sizes

- **Digital**: 1x1 tile (smallest)
- **Analog**: 1x2 tiles
- **Mixed-signal**: 2x2 tiles (largest)

Larger tiles = more area = more complexity possible.

## Submission Files

UWASIC automatically generates:
- \`info.yaml\` - Project configuration
- Verilog wrapper - Connects your design
- GitHub workflows - Automated verification
- Documentation - Project description

## Timeline

1. Submit design → TinyTapeout deadline
2. Wait 3-6 months → Chip manufacturing
3. Receive chip → Test and celebrate!

## Next Steps

See Create Package to prepare your submission.
`,kp=Object.freeze(Object.defineProperty({__proto__:null,content:bp,metadata:vp},Symbol.toStringTag,{value:"Module"})),wp={title:"Submit Package",order:3},Sp=`
# Submit to TinyTapeout

## Push to GitHub

\`\`\`bash
git add caravel/
git commit -m "Add TinyTapeout submission"
git push
\`\`\`

## Automated Workflows

GitHub Actions automatically run:

**For Digital/Mixed**:
- \`test.yaml\` - RTL simulation
- \`gds.yaml\` - GDS generation
- \`docs.yaml\` - Documentation build

**For All Projects**:
- DRC/LVS checks
- Precheck validation
- GDS verification

## Check Workflow Status

1. Go to your GitHub repo
2. Click **Actions** tab
3. See workflow runs

Green checkmark = passed ✓
Red X = failed (check logs)

## Fix Failures

Common issues:
- **Syntax errors**: Check Verilog/schematic
- **DRC violations**: Fix layout spacing
- **LVS mismatch**: Match schematic and layout
- **Pin mismatch**: Check \`info.yaml\` pinout

## Submit to TinyTapeout

1. Wait for all workflows to pass
2. Go to [TinyTapeout](https://tinytapeout.com)
3. Submit your GitHub repo URL
4. Pay submission fee
5. Wait for confirmation

## After Submission

- Monitor TinyTapeout schedule
- Wait for manufacturing (3-6 months)
- Receive your chip!
- Test and share results

## Important

- **Don't push \`synthesis/\` folder** - Delete it first
- **All workflows must pass** before submitting
- **Check deadline** - TinyTapeout has submission cutoffs
`,_p=Object.freeze(Object.defineProperty({__proto__:null,content:Sp,metadata:wp},Symbol.toStringTag,{value:"Module"})),xp={title:"Build & Deploy",order:4},Cp=`
# Build & Deploy

## Local Development

\`\`\`bash
cd docs/
bun install
bun run dev
\`\`\`

Visit \`http://localhost:5173\` to see your changes live.

## Build for Production

\`\`\`bash
cd docs/
bun run build
\`\`\`

Outputs to \`docs/\` directory (same folder).

## Deploy to GitHub Pages

### Setup (One Time)

1. Go to GitHub repo **Settings** → **Pages**
2. Set source:
   - Branch: **main**
   - Folder: **/docs**
3. Click **Save**

### Auto-Deploy

Push to GitHub:
\`\`\`bash
git add docs/
git commit -m "Update documentation"
git push
\`\`\`

GitHub Actions workflow:
1. Installs dependencies
2. Builds site
3. Commits built files
4. GitHub Pages deploys

Your site: \`https://username.github.io/repo-name\`

## Workflow File

Located at \`.github/workflows/deploy-docs.yml\`

Runs on every push to \`main\` branch.

## Troubleshooting

**Build fails?**
- Check syntax in .ts files
- Run \`bun run build\` locally first
- Check GitHub Actions logs

**Pages not updating?**
- Wait 1-2 minutes after push
- Check Pages settings enabled
- Clear browser cache
`,Ep=Object.freeze(Object.defineProperty({__proto__:null,content:Cp,metadata:xp},Symbol.toStringTag,{value:"Module"})),Pp={title:"Markdown Syntax",order:3},Tp=`
# Markdown Syntax

Supported markdown formatting in pages.

## Headers

\`\`\`
# Header 1
## Header 2
### Header 3
\`\`\`

## Text Formatting

\`\`\`
**Bold text**
\`inline code\`
Regular text
\`\`\`

## Lists

Bullet lists:
\`\`\`
- Item 1
- Item 2
- Item 3
\`\`\`

Numbered lists:
\`\`\`
1. First
2. Second
3. Third
\`\`\`

## Code Blocks

Use triple backticks with language:

\\\`\\\`\\\`bash
make CreateProject
\\\`\\\`\\\`

\\\`\\\`\\\`typescript
const x = 5;
\\\`\\\`\\\`

\\\`\\\`\\\`verilog
module counter();
endmodule
\\\`\\\`\\\`

## Example Page

\`\`\`typescript
export const metadata = {
  title: "Example",
  order: 1
}

export const content = \\\`
# My Example

This is **bold** and this is \\\`code\\\`.

## Installation

\\\`\\\`\\\`bash
bun install
\\\`\\\`\\\`

- Simple
- Easy
- Fast
\\\`
\`\`\`

## Not Supported

- Images (not yet)
- Tables (not yet)
- Links (not yet)
- HTML tags

Keep it simple!
`,Np=Object.freeze(Object.defineProperty({__proto__:null,content:Tp,metadata:Pp},Symbol.toStringTag,{value:"Module"})),Lp=Object.assign({"../content/Analog/Create-Project.ts":Rd,"../content/Analog/Layout-Design.ts":Ad,"../content/Analog/Overview.ts":Wd,"../content/Analog/Schematic-Design.ts":Bd,"../content/Digital/Create-Project.ts":Yd,"../content/Digital/Overview.ts":Kd,"../content/Digital/Test-Verify.ts":Zd,"../content/How-To-Use/Basic-Commands.ts":rp,"../content/How-To-Use/Overview.ts":ap,"../content/How-To-Use/Using-Nix.ts":up,"../content/Mixed-Signal/Create-Project.ts":fp,"../content/Mixed-Signal/Overview.ts":mp,"../content/TinyTapeout/Create-Package.ts":yp,"../content/TinyTapeout/Overview.ts":kp,"../content/TinyTapeout/Submit-Package.ts":_p,"../content/Updating-Docs/Build-Deploy.ts":Ep,"../content/Updating-Docs/Markdown-Syntax.ts":Np});function zp(){const e=new Map;for(const[t,r]of Object.entries(Lp)){const n=r,l=t.match(/\/content\/([^/]+)\/([^/]+)\.ts$/);if(!l)continue;const[,a,o]=l;e.has(a)||e.set(a,{id:a,title:a.split("-").map(i=>i.charAt(0).toUpperCase()+i.slice(1)).join(" "),pages:[]}),e.get(a).pages.push({id:o,path:`${a}/${o}`,metadata:n.metadata,content:n.content})}return e.forEach(t=>{t.pages.sort((r,n)=>r.metadata.order-n.metadata.order)}),Array.from(e.values()).sort((t,r)=>t.id.localeCompare(r.id))}function Mp(){const[e]=et.useState(()=>zp()),[t,r]=et.useState(""),[n,l]=et.useState(null);et.useEffect(()=>{if(e.length>0&&!t){const o=e[0].pages[0];o&&(r(o.path),l(o))}},[e,t]);const a=o=>{r(o);for(const i of e){const u=i.pages.find(c=>c.path===o);if(u){l(u);break}}};return z.jsxs("div",{className:"app",children:[z.jsx(zd,{sections:e,currentPath:t,onNavigate:a}),z.jsx("main",{className:"content",children:n?z.jsx("article",{className:"article",children:z.jsx(Md,{content:n.content})}):z.jsx("div",{className:"empty-state",children:z.jsx("p",{children:"Select a page from the sidebar to get started"})})})]})}$l.createRoot(document.getElementById("root")).render(z.jsx(vc.StrictMode,{children:z.jsx(Mp,{})}));
