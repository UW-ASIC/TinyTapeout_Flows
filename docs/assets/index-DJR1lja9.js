(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=r(a);fetch(a.href,l)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();function rc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vi={exports:{}},ea={},Hi={exports:{}},N={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Yr=Symbol.for("react.element"),nc=Symbol.for("react.portal"),ac=Symbol.for("react.fragment"),lc=Symbol.for("react.strict_mode"),oc=Symbol.for("react.profiler"),ic=Symbol.for("react.provider"),uc=Symbol.for("react.context"),sc=Symbol.for("react.forward_ref"),cc=Symbol.for("react.suspense"),fc=Symbol.for("react.memo"),dc=Symbol.for("react.lazy"),Mo=Symbol.iterator;function pc(e){return e===null||typeof e!="object"?null:(e=Mo&&e[Mo]||e["@@iterator"],typeof e=="function"?e:null)}var Bi={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$i=Object.assign,Qi={};function ar(e,t,r){this.props=e,this.context=t,this.refs=Qi,this.updater=r||Bi}ar.prototype.isReactComponent={};ar.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yi(){}Yi.prototype=ar.prototype;function jl(e,t,r){this.props=e,this.context=t,this.refs=Qi,this.updater=r||Bi}var Fl=jl.prototype=new Yi;Fl.constructor=jl;$i(Fl,ar.prototype);Fl.isPureReactComponent=!0;var zo=Array.isArray,Gi=Object.prototype.hasOwnProperty,Al={current:null},qi={key:!0,ref:!0,__self:!0,__source:!0};function Xi(e,t,r){var n,a={},l=null,o=null;if(t!=null)for(n in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Gi.call(t,n)&&!qi.hasOwnProperty(n)&&(a[n]=t[n]);var i=arguments.length-2;if(i===1)a.children=r;else if(1<i){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(n in i=e.defaultProps,i)a[n]===void 0&&(a[n]=i[n]);return{$$typeof:Yr,type:e,key:l,ref:o,props:a,_owner:Al.current}}function mc(e,t){return{$$typeof:Yr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ul(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yr}function gc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Ro=/\/+/g;function ba(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gc(""+e.key):t.toString(36)}function vn(e,t,r,n,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Yr:case nc:o=!0}}if(o)return o=e,a=a(o),e=n===""?"."+ba(o,0):n,zo(a)?(r="",e!=null&&(r=e.replace(Ro,"$&/")+"/"),vn(a,t,r,"",function(c){return c})):a!=null&&(Ul(a)&&(a=mc(a,r+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Ro,"$&/")+"/")+e)),t.push(a)),1;if(o=0,n=n===""?".":n+":",zo(e))for(var i=0;i<e.length;i++){l=e[i];var u=n+ba(l,i);o+=vn(l,t,r,u,a)}else if(u=pc(e),typeof u=="function")for(e=u.call(e),i=0;!(l=e.next()).done;)l=l.value,u=n+ba(l,i++),o+=vn(l,t,r,u,a);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function en(e,t,r){if(e==null)return e;var n=[],a=0;return vn(e,n,"","",function(l){return t.call(r,l,a++)}),n}function hc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ie={current:null},bn={transition:null},yc={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:bn,ReactCurrentOwner:Al};function Ki(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:en,forEach:function(e,t,r){en(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return en(e,function(){t++}),t},toArray:function(e){return en(e,function(t){return t})||[]},only:function(e){if(!Ul(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=ar;N.Fragment=ac;N.Profiler=oc;N.PureComponent=jl;N.StrictMode=lc;N.Suspense=cc;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yc;N.act=Ki;N.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=$i({},e.props),a=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=Al.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(u in t)Gi.call(t,u)&&!qi.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&i!==void 0?i[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){i=Array(u);for(var c=0;c<u;c++)i[c]=arguments[c+2];n.children=i}return{$$typeof:Yr,type:e.type,key:a,ref:l,props:n,_owner:o}};N.createContext=function(e){return e={$$typeof:uc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ic,_context:e},e.Consumer=e};N.createElement=Xi;N.createFactory=function(e){var t=Xi.bind(null,e);return t.type=e,t};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:sc,render:e}};N.isValidElement=Ul;N.lazy=function(e){return{$$typeof:dc,_payload:{_status:-1,_result:e},_init:hc}};N.memo=function(e,t){return{$$typeof:fc,type:e,compare:t===void 0?null:t}};N.startTransition=function(e){var t=bn.transition;bn.transition={};try{e()}finally{bn.transition=t}};N.unstable_act=Ki;N.useCallback=function(e,t){return ie.current.useCallback(e,t)};N.useContext=function(e){return ie.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return ie.current.useDeferredValue(e)};N.useEffect=function(e,t){return ie.current.useEffect(e,t)};N.useId=function(){return ie.current.useId()};N.useImperativeHandle=function(e,t,r){return ie.current.useImperativeHandle(e,t,r)};N.useInsertionEffect=function(e,t){return ie.current.useInsertionEffect(e,t)};N.useLayoutEffect=function(e,t){return ie.current.useLayoutEffect(e,t)};N.useMemo=function(e,t){return ie.current.useMemo(e,t)};N.useReducer=function(e,t,r){return ie.current.useReducer(e,t,r)};N.useRef=function(e){return ie.current.useRef(e)};N.useState=function(e){return ie.current.useState(e)};N.useSyncExternalStore=function(e,t,r){return ie.current.useSyncExternalStore(e,t,r)};N.useTransition=function(){return ie.current.useTransition()};N.version="18.3.1";Hi.exports=N;var et=Hi.exports;const vc=rc(et);/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var bc=et,kc=Symbol.for("react.element"),wc=Symbol.for("react.fragment"),Sc=Object.prototype.hasOwnProperty,_c=bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xc={key:!0,ref:!0,__self:!0,__source:!0};function Ji(e,t,r){var n,a={},l=null,o=null;r!==void 0&&(l=""+r),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)Sc.call(t,n)&&!xc.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:kc,type:e,key:l,ref:o,props:a,_owner:_c.current}}ea.Fragment=wc;ea.jsx=Ji;ea.jsxs=Ji;Vi.exports=ea;var O=Vi.exports,$a={},Zi={exports:{}},ve={},eu={exports:{}},tu={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(e){function t(S,P){var T=S.length;S.push(P);e:for(;0<T;){var B=T-1>>>1,q=S[B];if(0<a(q,P))S[B]=P,S[T]=q,T=B;else break e}}function r(S){return S.length===0?null:S[0]}function n(S){if(S.length===0)return null;var P=S[0],T=S.pop();if(T!==P){S[0]=T;e:for(var B=0,q=S.length,Jr=q>>>1;B<Jr;){var ht=2*(B+1)-1,va=S[ht],yt=ht+1,Zr=S[yt];if(0>a(va,T))yt<q&&0>a(Zr,va)?(S[B]=Zr,S[yt]=T,B=yt):(S[B]=va,S[ht]=T,B=ht);else if(yt<q&&0>a(Zr,T))S[B]=Zr,S[yt]=T,B=yt;else break e}}return P}function a(S,P){var T=S.sortIndex-P.sortIndex;return T!==0?T:S.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,i=o.now();e.unstable_now=function(){return o.now()-i}}var u=[],c=[],m=1,p=null,g=3,v=!1,b=!1,k=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(S){for(var P=r(c);P!==null;){if(P.callback===null)n(c);else if(P.startTime<=S)n(c),P.sortIndex=P.expirationTime,t(u,P);else break;P=r(c)}}function y(S){if(k=!1,d(S),!b)if(r(u)!==null)b=!0,ha(_);else{var P=r(c);P!==null&&ya(y,P.startTime-S)}}function _(S,P){b=!1,k&&(k=!1,f(E),E=-1),v=!0;var T=g;try{for(d(P),p=r(u);p!==null&&(!(p.expirationTime>P)||S&&!Ee());){var B=p.callback;if(typeof B=="function"){p.callback=null,g=p.priorityLevel;var q=B(p.expirationTime<=P);P=e.unstable_now(),typeof q=="function"?p.callback=q:p===r(u)&&n(u),d(P)}else n(u);p=r(u)}if(p!==null)var Jr=!0;else{var ht=r(c);ht!==null&&ya(y,ht.startTime-P),Jr=!1}return Jr}finally{p=null,g=T,v=!1}}var x=!1,C=null,E=-1,H=5,L=-1;function Ee(){return!(e.unstable_now()-L<H)}function ir(){if(C!==null){var S=e.unstable_now();L=S;var P=!0;try{P=C(!0,S)}finally{P?ur():(x=!1,C=null)}}else x=!1}var ur;if(typeof s=="function")ur=function(){s(ir)};else if(typeof MessageChannel<"u"){var Do=new MessageChannel,tc=Do.port2;Do.port1.onmessage=ir,ur=function(){tc.postMessage(null)}}else ur=function(){j(ir,0)};function ha(S){C=S,x||(x=!0,ur())}function ya(S,P){E=j(function(){S(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){b||v||(b=!0,ha(_))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(S){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var T=g;g=P;try{return S()}finally{g=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,P){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var T=g;g=S;try{return P()}finally{g=T}},e.unstable_scheduleCallback=function(S,P,T){var B=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?B+T:B):T=B,S){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=T+q,S={id:m++,callback:P,priorityLevel:S,startTime:T,expirationTime:q,sortIndex:-1},T>B?(S.sortIndex=T,t(c,S),r(u)===null&&S===r(c)&&(k?(f(E),E=-1):k=!0,ya(y,T-B))):(S.sortIndex=q,t(u,S),b||v||(b=!0,ha(_))),S},e.unstable_shouldYield=Ee,e.unstable_wrapCallback=function(S){var P=g;return function(){var T=g;g=P;try{return S.apply(this,arguments)}finally{g=T}}}})(tu);eu.exports=tu;var Cc=eu.exports;/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Ec=et,ye=Cc;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ru=new Set,Lr={};function Lt(e,t){Kt(e,t),Kt(e+"Capture",t)}function Kt(e,t){for(Lr[e]=t,e=0;e<t.length;e++)ru.add(t[e])}var Be=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qa=Object.prototype.hasOwnProperty,Pc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Io={},jo={};function Tc(e){return Qa.call(jo,e)?!0:Qa.call(Io,e)?!1:Pc.test(e)?jo[e]=!0:(Io[e]=!0,!1)}function Nc(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lc(e,t,r,n){if(t===null||typeof t>"u"||Nc(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,r,n,a,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wl=/[\-:]([a-z])/g;function Vl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wl,Vl);ee[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wl,Vl);ee[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wl,Vl);ee[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Hl(e,t,r,n){var a=ee.hasOwnProperty(t)?ee[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lc(t,r,a,n)&&(r=null),n||a===null?Tc(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Ge=Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tn=Symbol.for("react.element"),Mt=Symbol.for("react.portal"),zt=Symbol.for("react.fragment"),Bl=Symbol.for("react.strict_mode"),Ya=Symbol.for("react.profiler"),nu=Symbol.for("react.provider"),au=Symbol.for("react.context"),$l=Symbol.for("react.forward_ref"),Ga=Symbol.for("react.suspense"),qa=Symbol.for("react.suspense_list"),Ql=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),lu=Symbol.for("react.offscreen"),Fo=Symbol.iterator;function sr(e){return e===null||typeof e!="object"?null:(e=Fo&&e[Fo]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,ka;function yr(e){if(ka===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ka=t&&t[1]||""}return`
`+ka+e}var wa=!1;function Sa(e,t){if(!e||wa)return"";wa=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var a=c.stack.split(`
`),l=n.stack.split(`
`),o=a.length-1,i=l.length-1;1<=o&&0<=i&&a[o]!==l[i];)i--;for(;1<=o&&0<=i;o--,i--)if(a[o]!==l[i]){if(o!==1||i!==1)do if(o--,i--,0>i||a[o]!==l[i]){var u=`
`+a[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=i);break}}}finally{wa=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?yr(e):""}function Oc(e){switch(e.tag){case 5:return yr(e.type);case 16:return yr("Lazy");case 13:return yr("Suspense");case 19:return yr("SuspenseList");case 0:case 2:case 15:return e=Sa(e.type,!1),e;case 11:return e=Sa(e.type.render,!1),e;case 1:return e=Sa(e.type,!0),e;default:return""}}function Xa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zt:return"Fragment";case Mt:return"Portal";case Ya:return"Profiler";case Bl:return"StrictMode";case Ga:return"Suspense";case qa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case au:return(e.displayName||"Context")+".Consumer";case nu:return(e._context.displayName||"Context")+".Provider";case $l:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ql:return t=e.displayName||null,t!==null?t:Xa(e.type)||"Memo";case Xe:t=e._payload,e=e._init;try{return Xa(e(t))}catch{}}return null}function Dc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xa(t);case 8:return t===Bl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ou(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mc(e){var t=ou(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,l=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){n=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rn(e){e._valueTracker||(e._valueTracker=Mc(e))}function iu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=ou(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Ln(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ka(e,t){var r=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ao(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=ft(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function uu(e,t){t=t.checked,t!=null&&Hl(e,"checked",t,!1)}function Ja(e,t){uu(e,t);var r=ft(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Za(e,t.type,r):t.hasOwnProperty("defaultValue")&&Za(e,t.type,ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Uo(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Za(e,t,r){(t!=="number"||Ln(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var vr=Array.isArray;function $t(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+ft(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function el(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wo(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(h(92));if(vr(r)){if(1<r.length)throw Error(h(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ft(r)}}function su(e,t){var r=ft(t.value),n=ft(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Vo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var nn,fu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(nn=nn||document.createElement("div"),nn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=nn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Or(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zc=["Webkit","ms","Moz","O"];Object.keys(wr).forEach(function(e){zc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wr[t]=wr[e]})});function du(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||wr.hasOwnProperty(e)&&wr[e]?(""+t).trim():t+"px"}function pu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=du(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var Rc=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rl(e,t){if(t){if(Rc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62))}}function nl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var al=null;function Yl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ll=null,Qt=null,Yt=null;function Ho(e){if(e=Xr(e)){if(typeof ll!="function")throw Error(h(280));var t=e.stateNode;t&&(t=la(t),ll(e.stateNode,e.type,t))}}function mu(e){Qt?Yt?Yt.push(e):Yt=[e]:Qt=e}function gu(){if(Qt){var e=Qt,t=Yt;if(Yt=Qt=null,Ho(e),t)for(e=0;e<t.length;e++)Ho(t[e])}}function hu(e,t){return e(t)}function yu(){}var _a=!1;function vu(e,t,r){if(_a)return e(t,r);_a=!0;try{return hu(e,t,r)}finally{_a=!1,(Qt!==null||Yt!==null)&&(yu(),gu())}}function Dr(e,t){var r=e.stateNode;if(r===null)return null;var n=la(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(h(231,t,typeof r));return r}var ol=!1;if(Be)try{var cr={};Object.defineProperty(cr,"passive",{get:function(){ol=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{ol=!1}function Ic(e,t,r,n,a,l,o,i,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(m){this.onError(m)}}var Sr=!1,On=null,Dn=!1,il=null,jc={onError:function(e){Sr=!0,On=e}};function Fc(e,t,r,n,a,l,o,i,u){Sr=!1,On=null,Ic.apply(jc,arguments)}function Ac(e,t,r,n,a,l,o,i,u){if(Fc.apply(this,arguments),Sr){if(Sr){var c=On;Sr=!1,On=null}else throw Error(h(198));Dn||(Dn=!0,il=c)}}function Ot(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function bu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bo(e){if(Ot(e)!==e)throw Error(h(188))}function Uc(e){var t=e.alternate;if(!t){if(t=Ot(e),t===null)throw Error(h(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var l=a.alternate;if(l===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===r)return Bo(a),e;if(l===n)return Bo(a),t;l=l.sibling}throw Error(h(188))}if(r.return!==n.return)r=a,n=l;else{for(var o=!1,i=a.child;i;){if(i===r){o=!0,r=a,n=l;break}if(i===n){o=!0,n=a,r=l;break}i=i.sibling}if(!o){for(i=l.child;i;){if(i===r){o=!0,r=l,n=a;break}if(i===n){o=!0,n=l,r=a;break}i=i.sibling}if(!o)throw Error(h(189))}}if(r.alternate!==n)throw Error(h(190))}if(r.tag!==3)throw Error(h(188));return r.stateNode.current===r?e:t}function ku(e){return e=Uc(e),e!==null?wu(e):null}function wu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wu(e);if(t!==null)return t;e=e.sibling}return null}var Su=ye.unstable_scheduleCallback,$o=ye.unstable_cancelCallback,Wc=ye.unstable_shouldYield,Vc=ye.unstable_requestPaint,$=ye.unstable_now,Hc=ye.unstable_getCurrentPriorityLevel,Gl=ye.unstable_ImmediatePriority,_u=ye.unstable_UserBlockingPriority,Mn=ye.unstable_NormalPriority,Bc=ye.unstable_LowPriority,xu=ye.unstable_IdlePriority,ta=null,je=null;function $c(e){if(je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(ta,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Gc,Qc=Math.log,Yc=Math.LN2;function Gc(e){return e>>>=0,e===0?32:31-(Qc(e)/Yc|0)|0}var an=64,ln=4194304;function br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zn(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,l=e.pingedLanes,o=r&268435455;if(o!==0){var i=o&~a;i!==0?n=br(i):(l&=o,l!==0&&(n=br(l)))}else o=r&~a,o!==0?n=br(o):l!==0&&(n=br(l));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Oe(t),a=1<<r,n|=e[r],t&=~a;return n}function qc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xc(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Oe(l),i=1<<o,u=a[o];u===-1?(!(i&r)||i&n)&&(a[o]=qc(i,t)):u<=t&&(e.expiredLanes|=i),l&=~i}}function ul(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cu(){var e=an;return an<<=1,!(an&4194240)&&(an=64),e}function xa(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Gr(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=r}function Kc(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Oe(r),l=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~l}}function ql(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Oe(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var M=0;function Eu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pu,Xl,Tu,Nu,Lu,sl=!1,on=[],nt=null,at=null,lt=null,Mr=new Map,zr=new Map,Je=[],Jc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qo(e,t){switch(e){case"focusin":case"focusout":nt=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":lt=null;break;case"pointerover":case"pointerout":Mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zr.delete(t.pointerId)}}function fr(e,t,r,n,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:l,targetContainers:[a]},t!==null&&(t=Xr(t),t!==null&&Xl(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Zc(e,t,r,n,a){switch(t){case"focusin":return nt=fr(nt,e,t,r,n,a),!0;case"dragenter":return at=fr(at,e,t,r,n,a),!0;case"mouseover":return lt=fr(lt,e,t,r,n,a),!0;case"pointerover":var l=a.pointerId;return Mr.set(l,fr(Mr.get(l)||null,e,t,r,n,a)),!0;case"gotpointercapture":return l=a.pointerId,zr.set(l,fr(zr.get(l)||null,e,t,r,n,a)),!0}return!1}function Ou(e){var t=kt(e.target);if(t!==null){var r=Ot(t);if(r!==null){if(t=r.tag,t===13){if(t=bu(r),t!==null){e.blockedOn=t,Lu(e.priority,function(){Tu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=cl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);al=n,r.target.dispatchEvent(n),al=null}else return t=Xr(r),t!==null&&Xl(t),e.blockedOn=r,!1;t.shift()}return!0}function Yo(e,t,r){kn(e)&&r.delete(t)}function ef(){sl=!1,nt!==null&&kn(nt)&&(nt=null),at!==null&&kn(at)&&(at=null),lt!==null&&kn(lt)&&(lt=null),Mr.forEach(Yo),zr.forEach(Yo)}function dr(e,t){e.blockedOn===t&&(e.blockedOn=null,sl||(sl=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,ef)))}function Rr(e){function t(a){return dr(a,e)}if(0<on.length){dr(on[0],e);for(var r=1;r<on.length;r++){var n=on[r];n.blockedOn===e&&(n.blockedOn=null)}}for(nt!==null&&dr(nt,e),at!==null&&dr(at,e),lt!==null&&dr(lt,e),Mr.forEach(t),zr.forEach(t),r=0;r<Je.length;r++)n=Je[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Je.length&&(r=Je[0],r.blockedOn===null);)Ou(r),r.blockedOn===null&&Je.shift()}var Gt=Ge.ReactCurrentBatchConfig,Rn=!0;function tf(e,t,r,n){var a=M,l=Gt.transition;Gt.transition=null;try{M=1,Kl(e,t,r,n)}finally{M=a,Gt.transition=l}}function rf(e,t,r,n){var a=M,l=Gt.transition;Gt.transition=null;try{M=4,Kl(e,t,r,n)}finally{M=a,Gt.transition=l}}function Kl(e,t,r,n){if(Rn){var a=cl(e,t,r,n);if(a===null)za(e,t,n,In,r),Qo(e,n);else if(Zc(a,e,t,r,n))n.stopPropagation();else if(Qo(e,n),t&4&&-1<Jc.indexOf(e)){for(;a!==null;){var l=Xr(a);if(l!==null&&Pu(l),l=cl(e,t,r,n),l===null&&za(e,t,n,In,r),l===a)break;a=l}a!==null&&n.stopPropagation()}else za(e,t,n,null,r)}}var In=null;function cl(e,t,r,n){if(In=null,e=Yl(n),e=kt(e),e!==null)if(t=Ot(e),t===null)e=null;else if(r=t.tag,r===13){if(e=bu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return In=e,null}function Du(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hc()){case Gl:return 1;case _u:return 4;case Mn:case Bc:return 16;case xu:return 536870912;default:return 16}default:return 16}}var tt=null,Jl=null,wn=null;function Mu(){if(wn)return wn;var e,t=Jl,r=t.length,n,a="value"in tt?tt.value:tt.textContent,l=a.length;for(e=0;e<r&&t[e]===a[e];e++);var o=r-e;for(n=1;n<=o&&t[r-n]===a[l-n];n++);return wn=a.slice(e,1<n?1-n:void 0)}function Sn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function un(){return!0}function Go(){return!1}function be(e){function t(r,n,a,l,o){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(r=e[i],this[i]=r?r(l):l[i]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?un:Go,this.isPropagationStopped=Go,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=un)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=un)},persist:function(){},isPersistent:un}),t}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=be(lr),qr=W({},lr,{view:0,detail:0}),nf=be(qr),Ca,Ea,pr,ra=W({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pr&&(pr&&e.type==="mousemove"?(Ca=e.screenX-pr.screenX,Ea=e.screenY-pr.screenY):Ea=Ca=0,pr=e),Ca)},movementY:function(e){return"movementY"in e?e.movementY:Ea}}),qo=be(ra),af=W({},ra,{dataTransfer:0}),lf=be(af),of=W({},qr,{relatedTarget:0}),Pa=be(of),uf=W({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),sf=be(uf),cf=W({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ff=be(cf),df=W({},lr,{data:0}),Xo=be(df),pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gf[e])?!!t[e]:!1}function eo(){return hf}var yf=W({},qr,{key:function(e){if(e.key){var t=pf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eo,charCode:function(e){return e.type==="keypress"?Sn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vf=be(yf),bf=W({},ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ko=be(bf),kf=W({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eo}),wf=be(kf),Sf=W({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),_f=be(Sf),xf=W({},ra,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cf=be(xf),Ef=[9,13,27,32],to=Be&&"CompositionEvent"in window,_r=null;Be&&"documentMode"in document&&(_r=document.documentMode);var Pf=Be&&"TextEvent"in window&&!_r,zu=Be&&(!to||_r&&8<_r&&11>=_r),Jo=" ",Zo=!1;function Ru(e,t){switch(e){case"keyup":return Ef.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rt=!1;function Tf(e,t){switch(e){case"compositionend":return Iu(t);case"keypress":return t.which!==32?null:(Zo=!0,Jo);case"textInput":return e=t.data,e===Jo&&Zo?null:e;default:return null}}function Nf(e,t){if(Rt)return e==="compositionend"||!to&&Ru(e,t)?(e=Mu(),wn=Jl=tt=null,Rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zu&&t.locale!=="ko"?null:t.data;default:return null}}var Lf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ei(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lf[e.type]:t==="textarea"}function ju(e,t,r,n){mu(n),t=jn(t,"onChange"),0<t.length&&(r=new Zl("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var xr=null,Ir=null;function Of(e){Gu(e,0)}function na(e){var t=Ft(e);if(iu(t))return e}function Df(e,t){if(e==="change")return t}var Fu=!1;if(Be){var Ta;if(Be){var Na="oninput"in document;if(!Na){var ti=document.createElement("div");ti.setAttribute("oninput","return;"),Na=typeof ti.oninput=="function"}Ta=Na}else Ta=!1;Fu=Ta&&(!document.documentMode||9<document.documentMode)}function ri(){xr&&(xr.detachEvent("onpropertychange",Au),Ir=xr=null)}function Au(e){if(e.propertyName==="value"&&na(Ir)){var t=[];ju(t,Ir,e,Yl(e)),vu(Of,t)}}function Mf(e,t,r){e==="focusin"?(ri(),xr=t,Ir=r,xr.attachEvent("onpropertychange",Au)):e==="focusout"&&ri()}function zf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return na(Ir)}function Rf(e,t){if(e==="click")return na(t)}function If(e,t){if(e==="input"||e==="change")return na(t)}function jf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Me=typeof Object.is=="function"?Object.is:jf;function jr(e,t){if(Me(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!Qa.call(t,a)||!Me(e[a],t[a]))return!1}return!0}function ni(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ai(e,t){var r=ni(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ni(r)}}function Uu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wu(){for(var e=window,t=Ln();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ln(e.document)}return t}function ro(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ff(e){var t=Wu(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Uu(r.ownerDocument.documentElement,r)){if(n!==null&&ro(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,l=Math.min(n.start,a);n=n.end===void 0?l:Math.min(n.end,a),!e.extend&&l>n&&(a=n,n=l,l=a),a=ai(r,l);var o=ai(r,n);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Af=Be&&"documentMode"in document&&11>=document.documentMode,It=null,fl=null,Cr=null,dl=!1;function li(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;dl||It==null||It!==Ln(n)||(n=It,"selectionStart"in n&&ro(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Cr&&jr(Cr,n)||(Cr=n,n=jn(fl,"onSelect"),0<n.length&&(t=new Zl("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=It)))}function sn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var jt={animationend:sn("Animation","AnimationEnd"),animationiteration:sn("Animation","AnimationIteration"),animationstart:sn("Animation","AnimationStart"),transitionend:sn("Transition","TransitionEnd")},La={},Vu={};Be&&(Vu=document.createElement("div").style,"AnimationEvent"in window||(delete jt.animationend.animation,delete jt.animationiteration.animation,delete jt.animationstart.animation),"TransitionEvent"in window||delete jt.transitionend.transition);function aa(e){if(La[e])return La[e];if(!jt[e])return e;var t=jt[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Vu)return La[e]=t[r];return e}var Hu=aa("animationend"),Bu=aa("animationiteration"),$u=aa("animationstart"),Qu=aa("transitionend"),Yu=new Map,oi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){Yu.set(e,t),Lt(t,[e])}for(var Oa=0;Oa<oi.length;Oa++){var Da=oi[Oa],Uf=Da.toLowerCase(),Wf=Da[0].toUpperCase()+Da.slice(1);pt(Uf,"on"+Wf)}pt(Hu,"onAnimationEnd");pt(Bu,"onAnimationIteration");pt($u,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Qu,"onTransitionEnd");Kt("onMouseEnter",["mouseout","mouseover"]);Kt("onMouseLeave",["mouseout","mouseover"]);Kt("onPointerEnter",["pointerout","pointerover"]);Kt("onPointerLeave",["pointerout","pointerover"]);Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vf=new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));function ii(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Ac(n,t,void 0,e),e.currentTarget=null}function Gu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var l=void 0;if(t)for(var o=n.length-1;0<=o;o--){var i=n[o],u=i.instance,c=i.currentTarget;if(i=i.listener,u!==l&&a.isPropagationStopped())break e;ii(a,i,c),l=u}else for(o=0;o<n.length;o++){if(i=n[o],u=i.instance,c=i.currentTarget,i=i.listener,u!==l&&a.isPropagationStopped())break e;ii(a,i,c),l=u}}}if(Dn)throw e=il,Dn=!1,il=null,e}function R(e,t){var r=t[yl];r===void 0&&(r=t[yl]=new Set);var n=e+"__bubble";r.has(n)||(qu(t,e,2,!1),r.add(n))}function Ma(e,t,r){var n=0;t&&(n|=4),qu(r,e,n,t)}var cn="_reactListening"+Math.random().toString(36).slice(2);function Fr(e){if(!e[cn]){e[cn]=!0,ru.forEach(function(r){r!=="selectionchange"&&(Vf.has(r)||Ma(r,!1,e),Ma(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cn]||(t[cn]=!0,Ma("selectionchange",!1,t))}}function qu(e,t,r,n){switch(Du(t)){case 1:var a=tf;break;case 4:a=rf;break;default:a=Kl}r=a.bind(null,t,r,e),a=void 0,!ol||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function za(e,t,r,n,a){var l=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var i=n.stateNode.containerInfo;if(i===a||i.nodeType===8&&i.parentNode===a)break;if(o===4)for(o=n.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;o=o.return}for(;i!==null;){if(o=kt(i),o===null)return;if(u=o.tag,u===5||u===6){n=l=o;continue e}i=i.parentNode}}n=n.return}vu(function(){var c=l,m=Yl(r),p=[];e:{var g=Yu.get(e);if(g!==void 0){var v=Zl,b=e;switch(e){case"keypress":if(Sn(r)===0)break e;case"keydown":case"keyup":v=vf;break;case"focusin":b="focus",v=Pa;break;case"focusout":b="blur",v=Pa;break;case"beforeblur":case"afterblur":v=Pa;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=wf;break;case Hu:case Bu:case $u:v=sf;break;case Qu:v=_f;break;case"scroll":v=nf;break;case"wheel":v=Cf;break;case"copy":case"cut":case"paste":v=ff;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ko}var k=(t&4)!==0,j=!k&&e==="scroll",f=k?g!==null?g+"Capture":null:g;k=[];for(var s=c,d;s!==null;){d=s;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,f!==null&&(y=Dr(s,f),y!=null&&k.push(Ar(s,y,d)))),j)break;s=s.return}0<k.length&&(g=new v(g,b,null,r,m),p.push({event:g,listeners:k}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&r!==al&&(b=r.relatedTarget||r.fromElement)&&(kt(b)||b[$e]))break e;if((v||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,v?(b=r.relatedTarget||r.toElement,v=c,b=b?kt(b):null,b!==null&&(j=Ot(b),b!==j||b.tag!==5&&b.tag!==6)&&(b=null)):(v=null,b=c),v!==b)){if(k=qo,y="onMouseLeave",f="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(k=Ko,y="onPointerLeave",f="onPointerEnter",s="pointer"),j=v==null?g:Ft(v),d=b==null?g:Ft(b),g=new k(y,s+"leave",v,r,m),g.target=j,g.relatedTarget=d,y=null,kt(m)===c&&(k=new k(f,s+"enter",b,r,m),k.target=d,k.relatedTarget=j,y=k),j=y,v&&b)t:{for(k=v,f=b,s=0,d=k;d;d=Dt(d))s++;for(d=0,y=f;y;y=Dt(y))d++;for(;0<s-d;)k=Dt(k),s--;for(;0<d-s;)f=Dt(f),d--;for(;s--;){if(k===f||f!==null&&k===f.alternate)break t;k=Dt(k),f=Dt(f)}k=null}else k=null;v!==null&&ui(p,g,v,k,!1),b!==null&&j!==null&&ui(p,j,b,k,!0)}}e:{if(g=c?Ft(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var _=Df;else if(ei(g))if(Fu)_=If;else{_=zf;var x=Mf}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(_=Rf);if(_&&(_=_(e,c))){ju(p,_,r,m);break e}x&&x(e,g,c),e==="focusout"&&(x=g._wrapperState)&&x.controlled&&g.type==="number"&&Za(g,"number",g.value)}switch(x=c?Ft(c):window,e){case"focusin":(ei(x)||x.contentEditable==="true")&&(It=x,fl=c,Cr=null);break;case"focusout":Cr=fl=It=null;break;case"mousedown":dl=!0;break;case"contextmenu":case"mouseup":case"dragend":dl=!1,li(p,r,m);break;case"selectionchange":if(Af)break;case"keydown":case"keyup":li(p,r,m)}var C;if(to)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Rt?Ru(e,r)&&(E="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(E="onCompositionStart");E&&(zu&&r.locale!=="ko"&&(Rt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Rt&&(C=Mu()):(tt=m,Jl="value"in tt?tt.value:tt.textContent,Rt=!0)),x=jn(c,E),0<x.length&&(E=new Xo(E,e,null,r,m),p.push({event:E,listeners:x}),C?E.data=C:(C=Iu(r),C!==null&&(E.data=C)))),(C=Pf?Tf(e,r):Nf(e,r))&&(c=jn(c,"onBeforeInput"),0<c.length&&(m=new Xo("onBeforeInput","beforeinput",null,r,m),p.push({event:m,listeners:c}),m.data=C))}Gu(p,t)})}function Ar(e,t,r){return{instance:e,listener:t,currentTarget:r}}function jn(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Dr(e,r),l!=null&&n.unshift(Ar(e,l,a)),l=Dr(e,t),l!=null&&n.push(Ar(e,l,a))),e=e.return}return n}function Dt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ui(e,t,r,n,a){for(var l=t._reactName,o=[];r!==null&&r!==n;){var i=r,u=i.alternate,c=i.stateNode;if(u!==null&&u===n)break;i.tag===5&&c!==null&&(i=c,a?(u=Dr(r,l),u!=null&&o.unshift(Ar(r,u,i))):a||(u=Dr(r,l),u!=null&&o.push(Ar(r,u,i)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var Hf=/\r\n?/g,Bf=/\u0000|\uFFFD/g;function si(e){return(typeof e=="string"?e:""+e).replace(Hf,`
`).replace(Bf,"")}function fn(e,t,r){if(t=si(t),si(e)!==t&&r)throw Error(h(425))}function Fn(){}var pl=null,ml=null;function gl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hl=typeof setTimeout=="function"?setTimeout:void 0,$f=typeof clearTimeout=="function"?clearTimeout:void 0,ci=typeof Promise=="function"?Promise:void 0,Qf=typeof queueMicrotask=="function"?queueMicrotask:typeof ci<"u"?function(e){return ci.resolve(null).then(e).catch(Yf)}:hl;function Yf(e){setTimeout(function(){throw e})}function Ra(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),Rr(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);Rr(t)}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var or=Math.random().toString(36).slice(2),Ie="__reactFiber$"+or,Ur="__reactProps$"+or,$e="__reactContainer$"+or,yl="__reactEvents$"+or,Gf="__reactListeners$"+or,qf="__reactHandles$"+or;function kt(e){var t=e[Ie];if(t)return t;for(var r=e.parentNode;r;){if(t=r[$e]||r[Ie]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=fi(e);e!==null;){if(r=e[Ie])return r;e=fi(e)}return t}e=r,r=e.parentNode}return null}function Xr(e){return e=e[Ie]||e[$e],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ft(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function la(e){return e[Ur]||null}var vl=[],At=-1;function mt(e){return{current:e}}function I(e){0>At||(e.current=vl[At],vl[At]=null,At--)}function z(e,t){At++,vl[At]=e.current,e.current=t}var dt={},ae=mt(dt),fe=mt(!1),Ct=dt;function Jt(e,t){var r=e.type.contextTypes;if(!r)return dt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in r)a[l]=t[l];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function de(e){return e=e.childContextTypes,e!=null}function An(){I(fe),I(ae)}function di(e,t,r){if(ae.current!==dt)throw Error(h(168));z(ae,t),z(fe,r)}function Xu(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(h(108,Dc(e)||"Unknown",a));return W({},r,n)}function Un(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dt,Ct=ae.current,z(ae,e),z(fe,fe.current),!0}function pi(e,t,r){var n=e.stateNode;if(!n)throw Error(h(169));r?(e=Xu(e,t,Ct),n.__reactInternalMemoizedMergedChildContext=e,I(fe),I(ae),z(ae,e)):I(fe),z(fe,r)}var Ue=null,oa=!1,Ia=!1;function Ku(e){Ue===null?Ue=[e]:Ue.push(e)}function Xf(e){oa=!0,Ku(e)}function gt(){if(!Ia&&Ue!==null){Ia=!0;var e=0,t=M;try{var r=Ue;for(M=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Ue=null,oa=!1}catch(a){throw Ue!==null&&(Ue=Ue.slice(e+1)),Su(Gl,gt),a}finally{M=t,Ia=!1}}return null}var Ut=[],Wt=0,Wn=null,Vn=0,ke=[],we=0,Et=null,We=1,Ve="";function vt(e,t){Ut[Wt++]=Vn,Ut[Wt++]=Wn,Wn=e,Vn=t}function Ju(e,t,r){ke[we++]=We,ke[we++]=Ve,ke[we++]=Et,Et=e;var n=We;e=Ve;var a=32-Oe(n)-1;n&=~(1<<a),r+=1;var l=32-Oe(t)+a;if(30<l){var o=a-a%5;l=(n&(1<<o)-1).toString(32),n>>=o,a-=o,We=1<<32-Oe(t)+a|r<<a|n,Ve=l+e}else We=1<<l|r<<a|n,Ve=e}function no(e){e.return!==null&&(vt(e,1),Ju(e,1,0))}function ao(e){for(;e===Wn;)Wn=Ut[--Wt],Ut[Wt]=null,Vn=Ut[--Wt],Ut[Wt]=null;for(;e===Et;)Et=ke[--we],ke[we]=null,Ve=ke[--we],ke[we]=null,We=ke[--we],ke[we]=null}var he=null,ge=null,F=!1,Le=null;function Zu(e,t){var r=Se(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function mi(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,he=e,ge=ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,he=e,ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Et!==null?{id:We,overflow:Ve}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Se(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,he=e,ge=null,!0):!1;default:return!1}}function bl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function kl(e){if(F){var t=ge;if(t){var r=t;if(!mi(e,t)){if(bl(e))throw Error(h(418));t=ot(r.nextSibling);var n=he;t&&mi(e,t)?Zu(n,r):(e.flags=e.flags&-4097|2,F=!1,he=e)}}else{if(bl(e))throw Error(h(418));e.flags=e.flags&-4097|2,F=!1,he=e}}}function gi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;he=e}function dn(e){if(e!==he)return!1;if(!F)return gi(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gl(e.type,e.memoizedProps)),t&&(t=ge)){if(bl(e))throw es(),Error(h(418));for(;t;)Zu(e,t),t=ot(t.nextSibling)}if(gi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ge=ot(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ge=null}}else ge=he?ot(e.stateNode.nextSibling):null;return!0}function es(){for(var e=ge;e;)e=ot(e.nextSibling)}function Zt(){ge=he=null,F=!1}function lo(e){Le===null?Le=[e]:Le.push(e)}var Kf=Ge.ReactCurrentBatchConfig;function mr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(h(309));var n=r.stateNode}if(!n)throw Error(h(147,e));var a=n,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var i=a.refs;o===null?delete i[l]:i[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(h(284));if(!r._owner)throw Error(h(290,e))}return e}function pn(e,t){throw e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hi(e){var t=e._init;return t(e._payload)}function ts(e){function t(f,s){if(e){var d=f.deletions;d===null?(f.deletions=[s],f.flags|=16):d.push(s)}}function r(f,s){if(!e)return null;for(;s!==null;)t(f,s),s=s.sibling;return null}function n(f,s){for(f=new Map;s!==null;)s.key!==null?f.set(s.key,s):f.set(s.index,s),s=s.sibling;return f}function a(f,s){return f=ct(f,s),f.index=0,f.sibling=null,f}function l(f,s,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<s?(f.flags|=2,s):d):(f.flags|=2,s)):(f.flags|=1048576,s)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function i(f,s,d,y){return s===null||s.tag!==6?(s=Ha(d,f.mode,y),s.return=f,s):(s=a(s,d),s.return=f,s)}function u(f,s,d,y){var _=d.type;return _===zt?m(f,s,d.props.children,y,d.key):s!==null&&(s.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Xe&&hi(_)===s.type)?(y=a(s,d.props),y.ref=mr(f,s,d),y.return=f,y):(y=Nn(d.type,d.key,d.props,null,f.mode,y),y.ref=mr(f,s,d),y.return=f,y)}function c(f,s,d,y){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=Ba(d,f.mode,y),s.return=f,s):(s=a(s,d.children||[]),s.return=f,s)}function m(f,s,d,y,_){return s===null||s.tag!==7?(s=xt(d,f.mode,y,_),s.return=f,s):(s=a(s,d),s.return=f,s)}function p(f,s,d){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Ha(""+s,f.mode,d),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case tn:return d=Nn(s.type,s.key,s.props,null,f.mode,d),d.ref=mr(f,null,s),d.return=f,d;case Mt:return s=Ba(s,f.mode,d),s.return=f,s;case Xe:var y=s._init;return p(f,y(s._payload),d)}if(vr(s)||sr(s))return s=xt(s,f.mode,d,null),s.return=f,s;pn(f,s)}return null}function g(f,s,d,y){var _=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return _!==null?null:i(f,s,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case tn:return d.key===_?u(f,s,d,y):null;case Mt:return d.key===_?c(f,s,d,y):null;case Xe:return _=d._init,g(f,s,_(d._payload),y)}if(vr(d)||sr(d))return _!==null?null:m(f,s,d,y,null);pn(f,d)}return null}function v(f,s,d,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(d)||null,i(s,f,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case tn:return f=f.get(y.key===null?d:y.key)||null,u(s,f,y,_);case Mt:return f=f.get(y.key===null?d:y.key)||null,c(s,f,y,_);case Xe:var x=y._init;return v(f,s,d,x(y._payload),_)}if(vr(y)||sr(y))return f=f.get(d)||null,m(s,f,y,_,null);pn(s,y)}return null}function b(f,s,d,y){for(var _=null,x=null,C=s,E=s=0,H=null;C!==null&&E<d.length;E++){C.index>E?(H=C,C=null):H=C.sibling;var L=g(f,C,d[E],y);if(L===null){C===null&&(C=H);break}e&&C&&L.alternate===null&&t(f,C),s=l(L,s,E),x===null?_=L:x.sibling=L,x=L,C=H}if(E===d.length)return r(f,C),F&&vt(f,E),_;if(C===null){for(;E<d.length;E++)C=p(f,d[E],y),C!==null&&(s=l(C,s,E),x===null?_=C:x.sibling=C,x=C);return F&&vt(f,E),_}for(C=n(f,C);E<d.length;E++)H=v(C,f,E,d[E],y),H!==null&&(e&&H.alternate!==null&&C.delete(H.key===null?E:H.key),s=l(H,s,E),x===null?_=H:x.sibling=H,x=H);return e&&C.forEach(function(Ee){return t(f,Ee)}),F&&vt(f,E),_}function k(f,s,d,y){var _=sr(d);if(typeof _!="function")throw Error(h(150));if(d=_.call(d),d==null)throw Error(h(151));for(var x=_=null,C=s,E=s=0,H=null,L=d.next();C!==null&&!L.done;E++,L=d.next()){C.index>E?(H=C,C=null):H=C.sibling;var Ee=g(f,C,L.value,y);if(Ee===null){C===null&&(C=H);break}e&&C&&Ee.alternate===null&&t(f,C),s=l(Ee,s,E),x===null?_=Ee:x.sibling=Ee,x=Ee,C=H}if(L.done)return r(f,C),F&&vt(f,E),_;if(C===null){for(;!L.done;E++,L=d.next())L=p(f,L.value,y),L!==null&&(s=l(L,s,E),x===null?_=L:x.sibling=L,x=L);return F&&vt(f,E),_}for(C=n(f,C);!L.done;E++,L=d.next())L=v(C,f,E,L.value,y),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?E:L.key),s=l(L,s,E),x===null?_=L:x.sibling=L,x=L);return e&&C.forEach(function(ir){return t(f,ir)}),F&&vt(f,E),_}function j(f,s,d,y){if(typeof d=="object"&&d!==null&&d.type===zt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case tn:e:{for(var _=d.key,x=s;x!==null;){if(x.key===_){if(_=d.type,_===zt){if(x.tag===7){r(f,x.sibling),s=a(x,d.props.children),s.return=f,f=s;break e}}else if(x.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Xe&&hi(_)===x.type){r(f,x.sibling),s=a(x,d.props),s.ref=mr(f,x,d),s.return=f,f=s;break e}r(f,x);break}else t(f,x);x=x.sibling}d.type===zt?(s=xt(d.props.children,f.mode,y,d.key),s.return=f,f=s):(y=Nn(d.type,d.key,d.props,null,f.mode,y),y.ref=mr(f,s,d),y.return=f,f=y)}return o(f);case Mt:e:{for(x=d.key;s!==null;){if(s.key===x)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){r(f,s.sibling),s=a(s,d.children||[]),s.return=f,f=s;break e}else{r(f,s);break}else t(f,s);s=s.sibling}s=Ba(d,f.mode,y),s.return=f,f=s}return o(f);case Xe:return x=d._init,j(f,s,x(d._payload),y)}if(vr(d))return b(f,s,d,y);if(sr(d))return k(f,s,d,y);pn(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,s!==null&&s.tag===6?(r(f,s.sibling),s=a(s,d),s.return=f,f=s):(r(f,s),s=Ha(d,f.mode,y),s.return=f,f=s),o(f)):r(f,s)}return j}var er=ts(!0),rs=ts(!1),Hn=mt(null),Bn=null,Vt=null,oo=null;function io(){oo=Vt=Bn=null}function uo(e){var t=Hn.current;I(Hn),e._currentValue=t}function wl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function qt(e,t){Bn=e,oo=Vt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function xe(e){var t=e._currentValue;if(oo!==e)if(e={context:e,memoizedValue:t,next:null},Vt===null){if(Bn===null)throw Error(h(308));Vt=e,Bn.dependencies={lanes:0,firstContext:e}}else Vt=Vt.next=e;return t}var wt=null;function so(e){wt===null?wt=[e]:wt.push(e)}function ns(e,t,r,n){var a=t.interleaved;return a===null?(r.next=r,so(t)):(r.next=a.next,a.next=r),t.interleaved=r,Qe(e,n)}function Qe(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Ke=!1;function co(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function as(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function He(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function it(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,D&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,Qe(e,r)}return a=n.interleaved,a===null?(t.next=t,so(n)):(t.next=a.next,a.next=t),n.interleaved=t,Qe(e,r)}function _n(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ql(e,r)}}function yi(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?a=l=o:l=l.next=o,r=r.next}while(r!==null);l===null?a=l=t:l=l.next=t}else a=l=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function $n(e,t,r,n){var a=e.updateQueue;Ke=!1;var l=a.firstBaseUpdate,o=a.lastBaseUpdate,i=a.shared.pending;if(i!==null){a.shared.pending=null;var u=i,c=u.next;u.next=null,o===null?l=c:o.next=c,o=u;var m=e.alternate;m!==null&&(m=m.updateQueue,i=m.lastBaseUpdate,i!==o&&(i===null?m.firstBaseUpdate=c:i.next=c,m.lastBaseUpdate=u))}if(l!==null){var p=a.baseState;o=0,m=c=u=null,i=l;do{var g=i.lane,v=i.eventTime;if((n&g)===g){m!==null&&(m=m.next={eventTime:v,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var b=e,k=i;switch(g=t,v=r,k.tag){case 1:if(b=k.payload,typeof b=="function"){p=b.call(v,p,g);break e}p=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=k.payload,g=typeof b=="function"?b.call(v,p,g):b,g==null)break e;p=W({},p,g);break e;case 2:Ke=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[i]:g.push(i))}else v={eventTime:v,lane:g,tag:i.tag,payload:i.payload,callback:i.callback,next:null},m===null?(c=m=v,u=p):m=m.next=v,o|=g;if(i=i.next,i===null){if(i=a.shared.pending,i===null)break;g=i,i=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(m===null&&(u=p),a.baseState=u,a.firstBaseUpdate=c,a.lastBaseUpdate=m,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);Tt|=o,e.lanes=o,e.memoizedState=p}}function vi(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(h(191,a));a.call(n)}}}var Kr={},Fe=mt(Kr),Wr=mt(Kr),Vr=mt(Kr);function St(e){if(e===Kr)throw Error(h(174));return e}function fo(e,t){switch(z(Vr,t),z(Wr,e),z(Fe,Kr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:tl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=tl(t,e)}I(Fe),z(Fe,t)}function tr(){I(Fe),I(Wr),I(Vr)}function ls(e){St(Vr.current);var t=St(Fe.current),r=tl(t,e.type);t!==r&&(z(Wr,e),z(Fe,r))}function po(e){Wr.current===e&&(I(Fe),I(Wr))}var A=mt(0);function Qn(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ja=[];function mo(){for(var e=0;e<ja.length;e++)ja[e]._workInProgressVersionPrimary=null;ja.length=0}var xn=Ge.ReactCurrentDispatcher,Fa=Ge.ReactCurrentBatchConfig,Pt=0,U=null,Y=null,X=null,Yn=!1,Er=!1,Hr=0,Jf=0;function te(){throw Error(h(321))}function go(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Me(e[r],t[r]))return!1;return!0}function ho(e,t,r,n,a,l){if(Pt=l,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xn.current=e===null||e.memoizedState===null?rd:nd,e=r(n,a),Er){l=0;do{if(Er=!1,Hr=0,25<=l)throw Error(h(301));l+=1,X=Y=null,t.updateQueue=null,xn.current=ad,e=r(n,a)}while(Er)}if(xn.current=Gn,t=Y!==null&&Y.next!==null,Pt=0,X=Y=U=null,Yn=!1,t)throw Error(h(300));return e}function yo(){var e=Hr!==0;return Hr=0,e}function Re(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?U.memoizedState=X=e:X=X.next=e,X}function Ce(){if(Y===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=X===null?U.memoizedState:X.next;if(t!==null)X=t,Y=e;else{if(e===null)throw Error(h(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},X===null?U.memoizedState=X=e:X=X.next=e}return X}function Br(e,t){return typeof t=="function"?t(e):t}function Aa(e){var t=Ce(),r=t.queue;if(r===null)throw Error(h(311));r.lastRenderedReducer=e;var n=Y,a=n.baseQueue,l=r.pending;if(l!==null){if(a!==null){var o=a.next;a.next=l.next,l.next=o}n.baseQueue=a=l,r.pending=null}if(a!==null){l=a.next,n=n.baseState;var i=o=null,u=null,c=l;do{var m=c.lane;if((Pt&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var p={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(i=u=p,o=n):u=u.next=p,U.lanes|=m,Tt|=m}c=c.next}while(c!==null&&c!==l);u===null?o=n:u.next=i,Me(n,t.memoizedState)||(ce=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do l=a.lane,U.lanes|=l,Tt|=l,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ua(e){var t=Ce(),r=t.queue;if(r===null)throw Error(h(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,l=t.memoizedState;if(a!==null){r.pending=null;var o=a=a.next;do l=e(l,o.action),o=o.next;while(o!==a);Me(l,t.memoizedState)||(ce=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),r.lastRenderedState=l}return[l,n]}function os(){}function is(e,t){var r=U,n=Ce(),a=t(),l=!Me(n.memoizedState,a);if(l&&(n.memoizedState=a,ce=!0),n=n.queue,vo(cs.bind(null,r,n,e),[e]),n.getSnapshot!==t||l||X!==null&&X.memoizedState.tag&1){if(r.flags|=2048,$r(9,ss.bind(null,r,n,a,t),void 0,null),K===null)throw Error(h(349));Pt&30||us(r,t,a)}return a}function us(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function ss(e,t,r,n){t.value=r,t.getSnapshot=n,fs(t)&&ds(e)}function cs(e,t,r){return r(function(){fs(t)&&ds(e)})}function fs(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Me(e,r)}catch{return!0}}function ds(e){var t=Qe(e,1);t!==null&&De(t,e,1,-1)}function bi(e){var t=Re();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:e},t.queue=e,e=e.dispatch=td.bind(null,U,e),[t.memoizedState,e]}function $r(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function ps(){return Ce().memoizedState}function Cn(e,t,r,n){var a=Re();U.flags|=e,a.memoizedState=$r(1|t,r,void 0,n===void 0?null:n)}function ia(e,t,r,n){var a=Ce();n=n===void 0?null:n;var l=void 0;if(Y!==null){var o=Y.memoizedState;if(l=o.destroy,n!==null&&go(n,o.deps)){a.memoizedState=$r(t,r,l,n);return}}U.flags|=e,a.memoizedState=$r(1|t,r,l,n)}function ki(e,t){return Cn(8390656,8,e,t)}function vo(e,t){return ia(2048,8,e,t)}function ms(e,t){return ia(4,2,e,t)}function gs(e,t){return ia(4,4,e,t)}function hs(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,r){return r=r!=null?r.concat([e]):null,ia(4,4,hs.bind(null,t,e),r)}function bo(){}function vs(e,t){var r=Ce();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&go(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function bs(e,t){var r=Ce();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&go(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function ks(e,t,r){return Pt&21?(Me(r,t)||(r=Cu(),U.lanes|=r,Tt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=r)}function Zf(e,t){var r=M;M=r!==0&&4>r?r:4,e(!0);var n=Fa.transition;Fa.transition={};try{e(!1),t()}finally{M=r,Fa.transition=n}}function ws(){return Ce().memoizedState}function ed(e,t,r){var n=st(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Ss(e))_s(t,r);else if(r=ns(e,t,r,n),r!==null){var a=oe();De(r,e,n,a),xs(r,t,n)}}function td(e,t,r){var n=st(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ss(e))_s(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,i=l(o,r);if(a.hasEagerState=!0,a.eagerState=i,Me(i,o)){var u=t.interleaved;u===null?(a.next=a,so(t)):(a.next=u.next,u.next=a),t.interleaved=a;return}}catch{}finally{}r=ns(e,t,a,n),r!==null&&(a=oe(),De(r,e,n,a),xs(r,t,n))}}function Ss(e){var t=e.alternate;return e===U||t!==null&&t===U}function _s(e,t){Er=Yn=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function xs(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ql(e,r)}}var Gn={readContext:xe,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},rd={readContext:xe,useCallback:function(e,t){return Re().memoizedState=[e,t===void 0?null:t],e},useContext:xe,useEffect:ki,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Cn(4194308,4,hs.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Cn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cn(4,2,e,t)},useMemo:function(e,t){var r=Re();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Re();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=ed.bind(null,U,e),[n.memoizedState,e]},useRef:function(e){var t=Re();return e={current:e},t.memoizedState=e},useState:bi,useDebugValue:bo,useDeferredValue:function(e){return Re().memoizedState=e},useTransition:function(){var e=bi(!1),t=e[0];return e=Zf.bind(null,e[1]),Re().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=U,a=Re();if(F){if(r===void 0)throw Error(h(407));r=r()}else{if(r=t(),K===null)throw Error(h(349));Pt&30||us(n,t,r)}a.memoizedState=r;var l={value:r,getSnapshot:t};return a.queue=l,ki(cs.bind(null,n,l,e),[e]),n.flags|=2048,$r(9,ss.bind(null,n,l,r,t),void 0,null),r},useId:function(){var e=Re(),t=K.identifierPrefix;if(F){var r=Ve,n=We;r=(n&~(1<<32-Oe(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Hr++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Jf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nd={readContext:xe,useCallback:vs,useContext:xe,useEffect:vo,useImperativeHandle:ys,useInsertionEffect:ms,useLayoutEffect:gs,useMemo:bs,useReducer:Aa,useRef:ps,useState:function(){return Aa(Br)},useDebugValue:bo,useDeferredValue:function(e){var t=Ce();return ks(t,Y.memoizedState,e)},useTransition:function(){var e=Aa(Br)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:os,useSyncExternalStore:is,useId:ws,unstable_isNewReconciler:!1},ad={readContext:xe,useCallback:vs,useContext:xe,useEffect:vo,useImperativeHandle:ys,useInsertionEffect:ms,useLayoutEffect:gs,useMemo:bs,useReducer:Ua,useRef:ps,useState:function(){return Ua(Br)},useDebugValue:bo,useDeferredValue:function(e){var t=Ce();return Y===null?t.memoizedState=e:ks(t,Y.memoizedState,e)},useTransition:function(){var e=Ua(Br)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:os,useSyncExternalStore:is,useId:ws,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Sl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:W({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ua={isMounted:function(e){return(e=e._reactInternals)?Ot(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=oe(),a=st(e),l=He(n,a);l.payload=t,r!=null&&(l.callback=r),t=it(e,l,a),t!==null&&(De(t,e,a,n),_n(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=oe(),a=st(e),l=He(n,a);l.tag=1,l.payload=t,r!=null&&(l.callback=r),t=it(e,l,a),t!==null&&(De(t,e,a,n),_n(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=oe(),n=st(e),a=He(r,n);a.tag=2,t!=null&&(a.callback=t),t=it(e,a,n),t!==null&&(De(t,e,n,r),_n(t,e,n))}};function wi(e,t,r,n,a,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,o):t.prototype&&t.prototype.isPureReactComponent?!jr(r,n)||!jr(a,l):!0}function Cs(e,t,r){var n=!1,a=dt,l=t.contextType;return typeof l=="object"&&l!==null?l=xe(l):(a=de(t)?Ct:ae.current,n=t.contextTypes,l=(n=n!=null)?Jt(e,a):dt),t=new t(r,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ua,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function Si(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ua.enqueueReplaceState(t,t.state,null)}function _l(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},co(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=xe(l):(l=de(t)?Ct:ae.current,a.context=Jt(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Sl(e,t,l,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ua.enqueueReplaceState(a,a.state,null),$n(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function rr(e,t){try{var r="",n=t;do r+=Oc(n),n=n.return;while(n);var a=r}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function Wa(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function xl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var ld=typeof WeakMap=="function"?WeakMap:Map;function Es(e,t,r){r=He(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Xn||(Xn=!0,Ml=n),xl(e,t)},r}function Ps(e,t,r){r=He(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){xl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){xl(e,t),typeof n!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function _i(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new ld;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=bd.bind(null,e,t,r),t.then(e,e))}function xi(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ci(e,t,r,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=He(-1,1),t.tag=2,it(r,t,1))),r.lanes|=1),e)}var od=Ge.ReactCurrentOwner,ce=!1;function le(e,t,r,n){t.child=e===null?rs(t,null,r,n):er(t,e.child,r,n)}function Ei(e,t,r,n,a){r=r.render;var l=t.ref;return qt(t,a),n=ho(e,t,r,n,l,a),r=yo(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ye(e,t,a)):(F&&r&&no(t),t.flags|=1,le(e,t,n,a),t.child)}function Pi(e,t,r,n,a){if(e===null){var l=r.type;return typeof l=="function"&&!Po(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=l,Ts(e,t,l,n,a)):(e=Nn(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&a)){var o=l.memoizedProps;if(r=r.compare,r=r!==null?r:jr,r(o,n)&&e.ref===t.ref)return Ye(e,t,a)}return t.flags|=1,e=ct(l,n),e.ref=t.ref,e.return=t,t.child=e}function Ts(e,t,r,n,a){if(e!==null){var l=e.memoizedProps;if(jr(l,n)&&e.ref===t.ref)if(ce=!1,t.pendingProps=n=l,(e.lanes&a)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Ye(e,t,a)}return Cl(e,t,r,n,a)}function Ns(e,t,r){var n=t.pendingProps,a=n.children,l=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(Bt,me),me|=r;else{if(!(r&1073741824))return e=l!==null?l.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(Bt,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=l!==null?l.baseLanes:r,z(Bt,me),me|=n}else l!==null?(n=l.baseLanes|r,t.memoizedState=null):n=r,z(Bt,me),me|=n;return le(e,t,a,r),t.child}function Ls(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,r,n,a){var l=de(r)?Ct:ae.current;return l=Jt(t,l),qt(t,a),r=ho(e,t,r,n,l,a),n=yo(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ye(e,t,a)):(F&&n&&no(t),t.flags|=1,le(e,t,r,a),t.child)}function Ti(e,t,r,n,a){if(de(r)){var l=!0;Un(t)}else l=!1;if(qt(t,a),t.stateNode===null)En(e,t),Cs(t,r,n),_l(t,r,n,a),n=!0;else if(e===null){var o=t.stateNode,i=t.memoizedProps;o.props=i;var u=o.context,c=r.contextType;typeof c=="object"&&c!==null?c=xe(c):(c=de(r)?Ct:ae.current,c=Jt(t,c));var m=r.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==n||u!==c)&&Si(t,o,n,c),Ke=!1;var g=t.memoizedState;o.state=g,$n(t,n,o,a),u=t.memoizedState,i!==n||g!==u||fe.current||Ke?(typeof m=="function"&&(Sl(t,r,m,n),u=t.memoizedState),(i=Ke||wi(t,r,i,n,g,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),o.props=n,o.state=u,o.context=c,n=i):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,as(e,t),i=t.memoizedProps,c=t.type===t.elementType?i:Te(t.type,i),o.props=c,p=t.pendingProps,g=o.context,u=r.contextType,typeof u=="object"&&u!==null?u=xe(u):(u=de(r)?Ct:ae.current,u=Jt(t,u));var v=r.getDerivedStateFromProps;(m=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==p||g!==u)&&Si(t,o,n,u),Ke=!1,g=t.memoizedState,o.state=g,$n(t,n,o,a);var b=t.memoizedState;i!==p||g!==b||fe.current||Ke?(typeof v=="function"&&(Sl(t,r,v,n),b=t.memoizedState),(c=Ke||wi(t,r,c,n,g,b,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,b,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,b,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=b),o.props=n,o.state=b,o.context=u,n=c):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return El(e,t,r,n,l,a)}function El(e,t,r,n,a,l){Ls(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return a&&pi(t,r,!1),Ye(e,t,l);n=t.stateNode,od.current=t;var i=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=er(t,e.child,null,l),t.child=er(t,null,i,l)):le(e,t,i,l),t.memoizedState=n.state,a&&pi(t,r,!0),t.child}function Os(e){var t=e.stateNode;t.pendingContext?di(e,t.pendingContext,t.pendingContext!==t.context):t.context&&di(e,t.context,!1),fo(e,t.containerInfo)}function Ni(e,t,r,n,a){return Zt(),lo(a),t.flags|=256,le(e,t,r,n),t.child}var Pl={dehydrated:null,treeContext:null,retryLane:0};function Tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ds(e,t,r){var n=t.pendingProps,a=A.current,l=!1,o=(t.flags&128)!==0,i;if((i=o)||(i=e!==null&&e.memoizedState===null?!1:(a&2)!==0),i?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),z(A,a&1),e===null)return kl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=n.children,e=n.fallback,l?(n=t.mode,l=t.child,o={mode:"hidden",children:o},!(n&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=fa(o,n,0,null),e=xt(e,n,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Tl(r),t.memoizedState=Pl,e):ko(t,o));if(a=e.memoizedState,a!==null&&(i=a.dehydrated,i!==null))return id(e,t,o,n,i,a,r);if(l){l=n.fallback,o=t.mode,a=e.child,i=a.sibling;var u={mode:"hidden",children:n.children};return!(o&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=ct(a,u),n.subtreeFlags=a.subtreeFlags&14680064),i!==null?l=ct(i,l):(l=xt(l,o,r,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,n=l,l=t.child,o=e.child.memoizedState,o=o===null?Tl(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~r,t.memoizedState=Pl,n}return l=e.child,e=l.sibling,n=ct(l,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function ko(e,t){return t=fa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mn(e,t,r,n){return n!==null&&lo(n),er(t,e.child,null,r),e=ko(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function id(e,t,r,n,a,l,o){if(r)return t.flags&256?(t.flags&=-257,n=Wa(Error(h(422))),mn(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=n.fallback,a=t.mode,n=fa({mode:"visible",children:n.children},a,0,null),l=xt(l,a,o,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,t.mode&1&&er(t,e.child,null,o),t.child.memoizedState=Tl(o),t.memoizedState=Pl,l);if(!(t.mode&1))return mn(e,t,o,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var i=n.dgst;return n=i,l=Error(h(419)),n=Wa(l,n,void 0),mn(e,t,o,n)}if(i=(o&e.childLanes)!==0,ce||i){if(n=K,n!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|o)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,Qe(e,a),De(n,e,a,-1))}return Eo(),n=Wa(Error(h(421))),mn(e,t,o,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=kd.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,ge=ot(a.nextSibling),he=t,F=!0,Le=null,e!==null&&(ke[we++]=We,ke[we++]=Ve,ke[we++]=Et,We=e.id,Ve=e.overflow,Et=t),t=ko(t,n.children),t.flags|=4096,t)}function Li(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),wl(e.return,t,r)}function Va(e,t,r,n,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=r,l.tailMode=a)}function Ms(e,t,r){var n=t.pendingProps,a=n.revealOrder,l=n.tail;if(le(e,t,n.children,r),n=A.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Li(e,r,t);else if(e.tag===19)Li(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(z(A,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Qn(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Va(t,!1,a,r,l);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Qn(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Va(t,!0,r,null,l);break;case"together":Va(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function En(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ye(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Tt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,r=ct(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=ct(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function ud(e,t,r){switch(t.tag){case 3:Os(t),Zt();break;case 5:ls(t);break;case 1:de(t.type)&&Un(t);break;case 4:fo(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;z(Hn,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(z(A,A.current&1),t.flags|=128,null):r&t.child.childLanes?Ds(e,t,r):(z(A,A.current&1),e=Ye(e,t,r),e!==null?e.sibling:null);z(A,A.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Ms(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),z(A,A.current),n)break;return null;case 22:case 23:return t.lanes=0,Ns(e,t,r)}return Ye(e,t,r)}var zs,Nl,Rs,Is;zs=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Nl=function(){};Rs=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,St(Fe.current);var l=null;switch(r){case"input":a=Ka(e,a),n=Ka(e,n),l=[];break;case"select":a=W({},a,{value:void 0}),n=W({},n,{value:void 0}),l=[];break;case"textarea":a=el(e,a),n=el(e,n),l=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Fn)}rl(r,n);var o;r=null;for(c in a)if(!n.hasOwnProperty(c)&&a.hasOwnProperty(c)&&a[c]!=null)if(c==="style"){var i=a[c];for(o in i)i.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Lr.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in n){var u=n[c];if(i=a!=null?a[c]:void 0,n.hasOwnProperty(c)&&u!==i&&(u!=null||i!=null))if(c==="style")if(i){for(o in i)!i.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in u)u.hasOwnProperty(o)&&i[o]!==u[o]&&(r||(r={}),r[o]=u[o])}else r||(l||(l=[]),l.push(c,r)),r=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,i=i?i.__html:void 0,u!=null&&i!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Lr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&R("scroll",e),l||i===u||(l=[])):(l=l||[]).push(c,u))}r&&(l=l||[]).push("style",r);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};Is=function(e,t,r,n){r!==n&&(t.flags|=4)};function gr(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function sd(e,t,r){var n=t.pendingProps;switch(ao(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return de(t.type)&&An(),re(t),null;case 3:return n=t.stateNode,tr(),I(fe),I(ae),mo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(dn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Il(Le),Le=null))),Nl(e,t),re(t),null;case 5:po(t);var a=St(Vr.current);if(r=t.type,e!==null&&t.stateNode!=null)Rs(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(h(166));return re(t),null}if(e=St(Fe.current),dn(t)){n=t.stateNode,r=t.type;var l=t.memoizedProps;switch(n[Ie]=t,n[Ur]=l,e=(t.mode&1)!==0,r){case"dialog":R("cancel",n),R("close",n);break;case"iframe":case"object":case"embed":R("load",n);break;case"video":case"audio":for(a=0;a<kr.length;a++)R(kr[a],n);break;case"source":R("error",n);break;case"img":case"image":case"link":R("error",n),R("load",n);break;case"details":R("toggle",n);break;case"input":Ao(n,l),R("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},R("invalid",n);break;case"textarea":Wo(n,l),R("invalid",n)}rl(r,l),a=null;for(var o in l)if(l.hasOwnProperty(o)){var i=l[o];o==="children"?typeof i=="string"?n.textContent!==i&&(l.suppressHydrationWarning!==!0&&fn(n.textContent,i,e),a=["children",i]):typeof i=="number"&&n.textContent!==""+i&&(l.suppressHydrationWarning!==!0&&fn(n.textContent,i,e),a=["children",""+i]):Lr.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&R("scroll",n)}switch(r){case"input":rn(n),Uo(n,l,!0);break;case"textarea":rn(n),Vo(n);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(n.onclick=Fn)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(r,{is:n.is}):(e=o.createElement(r),r==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,r),e[Ie]=t,e[Ur]=n,zs(e,t,!1,!1),t.stateNode=e;e:{switch(o=nl(r,n),r){case"dialog":R("cancel",e),R("close",e),a=n;break;case"iframe":case"object":case"embed":R("load",e),a=n;break;case"video":case"audio":for(a=0;a<kr.length;a++)R(kr[a],e);a=n;break;case"source":R("error",e),a=n;break;case"img":case"image":case"link":R("error",e),R("load",e),a=n;break;case"details":R("toggle",e),a=n;break;case"input":Ao(e,n),a=Ka(e,n),R("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=W({},n,{value:void 0}),R("invalid",e);break;case"textarea":Wo(e,n),a=el(e,n),R("invalid",e);break;default:a=n}rl(r,a),i=a;for(l in i)if(i.hasOwnProperty(l)){var u=i[l];l==="style"?pu(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&fu(e,u)):l==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&Or(e,u):typeof u=="number"&&Or(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Lr.hasOwnProperty(l)?u!=null&&l==="onScroll"&&R("scroll",e):u!=null&&Hl(e,l,u,o))}switch(r){case"input":rn(e),Uo(e,n,!1);break;case"textarea":rn(e),Vo(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ft(n.value));break;case"select":e.multiple=!!n.multiple,l=n.value,l!=null?$t(e,!!n.multiple,l,!1):n.defaultValue!=null&&$t(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Fn)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)Is(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(h(166));if(r=St(Vr.current),St(Fe.current),dn(t)){if(n=t.stateNode,r=t.memoizedProps,n[Ie]=t,(l=n.nodeValue!==r)&&(e=he,e!==null))switch(e.tag){case 3:fn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fn(n.nodeValue,r,(e.mode&1)!==0)}l&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Ie]=t,t.stateNode=n}return re(t),null;case 13:if(I(A),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&ge!==null&&t.mode&1&&!(t.flags&128))es(),Zt(),t.flags|=98560,l=!1;else if(l=dn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(h(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(h(317));l[Ie]=t}else Zt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),l=!1}else Le!==null&&(Il(Le),Le=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||A.current&1?G===0&&(G=3):Eo())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return tr(),Nl(e,t),e===null&&Fr(t.stateNode.containerInfo),re(t),null;case 10:return uo(t.type._context),re(t),null;case 17:return de(t.type)&&An(),re(t),null;case 19:if(I(A),l=t.memoizedState,l===null)return re(t),null;if(n=(t.flags&128)!==0,o=l.rendering,o===null)if(n)gr(l,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Qn(e),o!==null){for(t.flags|=128,gr(l,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)l=r,e=n,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return z(A,A.current&1|2),t.child}e=e.sibling}l.tail!==null&&$()>nr&&(t.flags|=128,n=!0,gr(l,!1),t.lanes=4194304)}else{if(!n)if(e=Qn(o),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),gr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!F)return re(t),null}else 2*$()-l.renderingStartTime>nr&&r!==1073741824&&(t.flags|=128,n=!0,gr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(r=l.last,r!==null?r.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=$(),t.sibling=null,r=A.current,z(A,n?r&1|2:r&1),t):(re(t),null);case 22:case 23:return Co(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?me&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(h(156,t.tag))}function cd(e,t){switch(ao(t),t.tag){case 1:return de(t.type)&&An(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tr(),I(fe),I(ae),mo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return po(t),null;case 13:if(I(A),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Zt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return I(A),null;case 4:return tr(),null;case 10:return uo(t.type._context),null;case 22:case 23:return Co(),null;case 24:return null;default:return null}}var gn=!1,ne=!1,fd=typeof WeakSet=="function"?WeakSet:Set,w=null;function Ht(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){V(e,t,n)}else r.current=null}function js(e,t,r){try{r()}catch(n){V(e,t,n)}}var Oi=!1;function dd(e,t){if(pl=Rn,e=Wu(),ro(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var o=0,i=-1,u=-1,c=0,m=0,p=e,g=null;t:for(;;){for(var v;p!==r||a!==0&&p.nodeType!==3||(i=o+a),p!==l||n!==0&&p.nodeType!==3||(u=o+n),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)g=p,p=v;for(;;){if(p===e)break t;if(g===r&&++c===a&&(i=o),g===l&&++m===n&&(u=o),(v=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=v}r=i===-1||u===-1?null:{start:i,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(ml={focusedElem:e,selectionRange:r},Rn=!1,w=t;w!==null;)if(t=w,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,w=e;else for(;w!==null;){t=w;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var k=b.memoizedProps,j=b.memoizedState,f=t.stateNode,s=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Te(t.type,k),j);f.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(y){V(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,w=e;break}w=t.return}return b=Oi,Oi=!1,b}function Pr(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&js(t,r,l)}a=a.next}while(a!==n)}}function sa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Ll(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Fs(e){var t=e.alternate;t!==null&&(e.alternate=null,Fs(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ie],delete t[Ur],delete t[yl],delete t[Gf],delete t[qf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function As(e){return e.tag===5||e.tag===3||e.tag===4}function Di(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||As(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ol(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Fn));else if(n!==4&&(e=e.child,e!==null))for(Ol(e,t,r),e=e.sibling;e!==null;)Ol(e,t,r),e=e.sibling}function Dl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Dl(e,t,r),e=e.sibling;e!==null;)Dl(e,t,r),e=e.sibling}var J=null,Ne=!1;function qe(e,t,r){for(r=r.child;r!==null;)Us(e,t,r),r=r.sibling}function Us(e,t,r){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(ta,r)}catch{}switch(r.tag){case 5:ne||Ht(r,t);case 6:var n=J,a=Ne;J=null,qe(e,t,r),J=n,Ne=a,J!==null&&(Ne?(e=J,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):J.removeChild(r.stateNode));break;case 18:J!==null&&(Ne?(e=J,r=r.stateNode,e.nodeType===8?Ra(e.parentNode,r):e.nodeType===1&&Ra(e,r),Rr(e)):Ra(J,r.stateNode));break;case 4:n=J,a=Ne,J=r.stateNode.containerInfo,Ne=!0,qe(e,t,r),J=n,Ne=a;break;case 0:case 11:case 14:case 15:if(!ne&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var l=a,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&js(r,t,o),a=a.next}while(a!==n)}qe(e,t,r);break;case 1:if(!ne&&(Ht(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(i){V(r,t,i)}qe(e,t,r);break;case 21:qe(e,t,r);break;case 22:r.mode&1?(ne=(n=ne)||r.memoizedState!==null,qe(e,t,r),ne=n):qe(e,t,r);break;default:qe(e,t,r)}}function Mi(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new fd),t.forEach(function(n){var a=wd.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function Pe(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var l=e,o=t,i=o;e:for(;i!==null;){switch(i.tag){case 5:J=i.stateNode,Ne=!1;break e;case 3:J=i.stateNode.containerInfo,Ne=!0;break e;case 4:J=i.stateNode.containerInfo,Ne=!0;break e}i=i.return}if(J===null)throw Error(h(160));Us(l,o,a),J=null,Ne=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(c){V(a,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ws(t,e),t=t.sibling}function Ws(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),ze(e),n&4){try{Pr(3,e,e.return),sa(3,e)}catch(k){V(e,e.return,k)}try{Pr(5,e,e.return)}catch(k){V(e,e.return,k)}}break;case 1:Pe(t,e),ze(e),n&512&&r!==null&&Ht(r,r.return);break;case 5:if(Pe(t,e),ze(e),n&512&&r!==null&&Ht(r,r.return),e.flags&32){var a=e.stateNode;try{Or(a,"")}catch(k){V(e,e.return,k)}}if(n&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,o=r!==null?r.memoizedProps:l,i=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{i==="input"&&l.type==="radio"&&l.name!=null&&uu(a,l),nl(i,o);var c=nl(i,l);for(o=0;o<u.length;o+=2){var m=u[o],p=u[o+1];m==="style"?pu(a,p):m==="dangerouslySetInnerHTML"?fu(a,p):m==="children"?Or(a,p):Hl(a,m,p,c)}switch(i){case"input":Ja(a,l);break;case"textarea":su(a,l);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?$t(a,!!l.multiple,v,!1):g!==!!l.multiple&&(l.defaultValue!=null?$t(a,!!l.multiple,l.defaultValue,!0):$t(a,!!l.multiple,l.multiple?[]:"",!1))}a[Ur]=l}catch(k){V(e,e.return,k)}}break;case 6:if(Pe(t,e),ze(e),n&4){if(e.stateNode===null)throw Error(h(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(k){V(e,e.return,k)}}break;case 3:if(Pe(t,e),ze(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Rr(t.containerInfo)}catch(k){V(e,e.return,k)}break;case 4:Pe(t,e),ze(e);break;case 13:Pe(t,e),ze(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(_o=$())),n&4&&Mi(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(ne=(c=ne)||m,Pe(t,e),ne=c):Pe(t,e),ze(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(w=e,m=e.child;m!==null;){for(p=w=m;w!==null;){switch(g=w,v=g.child,g.tag){case 0:case 11:case 14:case 15:Pr(4,g,g.return);break;case 1:Ht(g,g.return);var b=g.stateNode;if(typeof b.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(k){V(n,r,k)}}break;case 5:Ht(g,g.return);break;case 22:if(g.memoizedState!==null){Ri(p);continue}}v!==null?(v.return=g,w=v):Ri(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{a=p.stateNode,c?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(i=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,i.style.display=du("display",o))}catch(k){V(e,e.return,k)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){V(e,e.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Pe(t,e),ze(e),n&4&&Mi(e);break;case 21:break;default:Pe(t,e),ze(e)}}function ze(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(As(r)){var n=r;break e}r=r.return}throw Error(h(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(Or(a,""),n.flags&=-33);var l=Di(e);Dl(e,l,a);break;case 3:case 4:var o=n.stateNode.containerInfo,i=Di(e);Ol(e,i,o);break;default:throw Error(h(161))}}catch(u){V(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pd(e,t,r){w=e,Vs(e)}function Vs(e,t,r){for(var n=(e.mode&1)!==0;w!==null;){var a=w,l=a.child;if(a.tag===22&&n){var o=a.memoizedState!==null||gn;if(!o){var i=a.alternate,u=i!==null&&i.memoizedState!==null||ne;i=gn;var c=ne;if(gn=o,(ne=u)&&!c)for(w=a;w!==null;)o=w,u=o.child,o.tag===22&&o.memoizedState!==null?Ii(a):u!==null?(u.return=o,w=u):Ii(a);for(;l!==null;)w=l,Vs(l),l=l.sibling;w=a,gn=i,ne=c}zi(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,w=l):zi(e)}}function zi(e){for(;w!==null;){var t=w;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ne||sa(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ne)if(r===null)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Te(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&vi(t,l,n);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}vi(t,o,r)}break;case 5:var i=t.stateNode;if(r===null&&t.flags&4){r=i;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Rr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}ne||t.flags&512&&Ll(t)}catch(g){V(t,t.return,g)}}if(t===e){w=null;break}if(r=t.sibling,r!==null){r.return=t.return,w=r;break}w=t.return}}function Ri(e){for(;w!==null;){var t=w;if(t===e){w=null;break}var r=t.sibling;if(r!==null){r.return=t.return,w=r;break}w=t.return}}function Ii(e){for(;w!==null;){var t=w;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{sa(4,t)}catch(u){V(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(u){V(t,a,u)}}var l=t.return;try{Ll(t)}catch(u){V(t,l,u)}break;case 5:var o=t.return;try{Ll(t)}catch(u){V(t,o,u)}}}catch(u){V(t,t.return,u)}if(t===e){w=null;break}var i=t.sibling;if(i!==null){i.return=t.return,w=i;break}w=t.return}}var md=Math.ceil,qn=Ge.ReactCurrentDispatcher,wo=Ge.ReactCurrentOwner,_e=Ge.ReactCurrentBatchConfig,D=0,K=null,Q=null,Z=0,me=0,Bt=mt(0),G=0,Qr=null,Tt=0,ca=0,So=0,Tr=null,se=null,_o=0,nr=1/0,Ae=null,Xn=!1,Ml=null,ut=null,hn=!1,rt=null,Kn=0,Nr=0,zl=null,Pn=-1,Tn=0;function oe(){return D&6?$():Pn!==-1?Pn:Pn=$()}function st(e){return e.mode&1?D&2&&Z!==0?Z&-Z:Kf.transition!==null?(Tn===0&&(Tn=Cu()),Tn):(e=M,e!==0||(e=window.event,e=e===void 0?16:Du(e.type)),e):1}function De(e,t,r,n){if(50<Nr)throw Nr=0,zl=null,Error(h(185));Gr(e,r,n),(!(D&2)||e!==K)&&(e===K&&(!(D&2)&&(ca|=r),G===4&&Ze(e,Z)),pe(e,n),r===1&&D===0&&!(t.mode&1)&&(nr=$()+500,oa&&gt()))}function pe(e,t){var r=e.callbackNode;Xc(e,t);var n=zn(e,e===K?Z:0);if(n===0)r!==null&&$o(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&$o(r),t===1)e.tag===0?Xf(ji.bind(null,e)):Ku(ji.bind(null,e)),Qf(function(){!(D&6)&&gt()}),r=null;else{switch(Eu(n)){case 1:r=Gl;break;case 4:r=_u;break;case 16:r=Mn;break;case 536870912:r=xu;break;default:r=Mn}r=Xs(r,Hs.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Hs(e,t){if(Pn=-1,Tn=0,D&6)throw Error(h(327));var r=e.callbackNode;if(Xt()&&e.callbackNode!==r)return null;var n=zn(e,e===K?Z:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Jn(e,n);else{t=n;var a=D;D|=2;var l=$s();(K!==e||Z!==t)&&(Ae=null,nr=$()+500,_t(e,t));do try{yd();break}catch(i){Bs(e,i)}while(!0);io(),qn.current=l,D=a,Q!==null?t=0:(K=null,Z=0,t=G)}if(t!==0){if(t===2&&(a=ul(e),a!==0&&(n=a,t=Rl(e,a))),t===1)throw r=Qr,_t(e,0),Ze(e,n),pe(e,$()),r;if(t===6)Ze(e,n);else{if(a=e.current.alternate,!(n&30)&&!gd(a)&&(t=Jn(e,n),t===2&&(l=ul(e),l!==0&&(n=l,t=Rl(e,l))),t===1))throw r=Qr,_t(e,0),Ze(e,n),pe(e,$()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(h(345));case 2:bt(e,se,Ae);break;case 3:if(Ze(e,n),(n&130023424)===n&&(t=_o+500-$(),10<t)){if(zn(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){oe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=hl(bt.bind(null,e,se,Ae),t);break}bt(e,se,Ae);break;case 4:if(Ze(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var o=31-Oe(n);l=1<<o,o=t[o],o>a&&(a=o),n&=~l}if(n=a,n=$()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*md(n/1960))-n,10<n){e.timeoutHandle=hl(bt.bind(null,e,se,Ae),n);break}bt(e,se,Ae);break;case 5:bt(e,se,Ae);break;default:throw Error(h(329))}}}return pe(e,$()),e.callbackNode===r?Hs.bind(null,e):null}function Rl(e,t){var r=Tr;return e.current.memoizedState.isDehydrated&&(_t(e,t).flags|=256),e=Jn(e,t),e!==2&&(t=se,se=r,t!==null&&Il(t)),e}function Il(e){se===null?se=e:se.push.apply(se,e)}function gd(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],l=a.getSnapshot;a=a.value;try{if(!Me(l(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ze(e,t){for(t&=~So,t&=~ca,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Oe(t),n=1<<r;e[r]=-1,t&=~n}}function ji(e){if(D&6)throw Error(h(327));Xt();var t=zn(e,0);if(!(t&1))return pe(e,$()),null;var r=Jn(e,t);if(e.tag!==0&&r===2){var n=ul(e);n!==0&&(t=n,r=Rl(e,n))}if(r===1)throw r=Qr,_t(e,0),Ze(e,t),pe(e,$()),r;if(r===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bt(e,se,Ae),pe(e,$()),null}function xo(e,t){var r=D;D|=1;try{return e(t)}finally{D=r,D===0&&(nr=$()+500,oa&&gt())}}function Nt(e){rt!==null&&rt.tag===0&&!(D&6)&&Xt();var t=D;D|=1;var r=_e.transition,n=M;try{if(_e.transition=null,M=1,e)return e()}finally{M=n,_e.transition=r,D=t,!(D&6)&&gt()}}function Co(){me=Bt.current,I(Bt)}function _t(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,$f(r)),Q!==null)for(r=Q.return;r!==null;){var n=r;switch(ao(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&An();break;case 3:tr(),I(fe),I(ae),mo();break;case 5:po(n);break;case 4:tr();break;case 13:I(A);break;case 19:I(A);break;case 10:uo(n.type._context);break;case 22:case 23:Co()}r=r.return}if(K=e,Q=e=ct(e.current,null),Z=me=t,G=0,Qr=null,So=ca=Tt=0,se=Tr=null,wt!==null){for(t=0;t<wt.length;t++)if(r=wt[t],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,l=r.pending;if(l!==null){var o=l.next;l.next=a,n.next=o}r.pending=n}wt=null}return e}function Bs(e,t){do{var r=Q;try{if(io(),xn.current=Gn,Yn){for(var n=U.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Yn=!1}if(Pt=0,X=Y=U=null,Er=!1,Hr=0,wo.current=null,r===null||r.return===null){G=1,Qr=t,Q=null;break}e:{var l=e,o=r.return,i=r,u=t;if(t=Z,i.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=i,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=xi(o);if(v!==null){v.flags&=-257,Ci(v,o,i,l,t),v.mode&1&&_i(l,c,t),t=v,u=c;var b=t.updateQueue;if(b===null){var k=new Set;k.add(u),t.updateQueue=k}else b.add(u);break e}else{if(!(t&1)){_i(l,c,t),Eo();break e}u=Error(h(426))}}else if(F&&i.mode&1){var j=xi(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Ci(j,o,i,l,t),lo(rr(u,i));break e}}l=u=rr(u,i),G!==4&&(G=2),Tr===null?Tr=[l]:Tr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=Es(l,u,t);yi(l,f);break e;case 1:i=u;var s=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ut===null||!ut.has(d)))){l.flags|=65536,t&=-t,l.lanes|=t;var y=Ps(l,i,t);yi(l,y);break e}}l=l.return}while(l!==null)}Ys(r)}catch(_){t=_,Q===r&&r!==null&&(Q=r=r.return);continue}break}while(!0)}function $s(){var e=qn.current;return qn.current=Gn,e===null?Gn:e}function Eo(){(G===0||G===3||G===2)&&(G=4),K===null||!(Tt&268435455)&&!(ca&268435455)||Ze(K,Z)}function Jn(e,t){var r=D;D|=2;var n=$s();(K!==e||Z!==t)&&(Ae=null,_t(e,t));do try{hd();break}catch(a){Bs(e,a)}while(!0);if(io(),D=r,qn.current=n,Q!==null)throw Error(h(261));return K=null,Z=0,G}function hd(){for(;Q!==null;)Qs(Q)}function yd(){for(;Q!==null&&!Wc();)Qs(Q)}function Qs(e){var t=qs(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?Ys(e):Q=t,wo.current=null}function Ys(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=cd(r,t),r!==null){r.flags&=32767,Q=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,Q=null;return}}else if(r=sd(r,t,me),r!==null){Q=r;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);G===0&&(G=5)}function bt(e,t,r){var n=M,a=_e.transition;try{_e.transition=null,M=1,vd(e,t,r,n)}finally{_e.transition=a,M=n}return null}function vd(e,t,r,n){do Xt();while(rt!==null);if(D&6)throw Error(h(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(Kc(e,l),e===K&&(Q=K=null,Z=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||hn||(hn=!0,Xs(Mn,function(){return Xt(),null})),l=(r.flags&15990)!==0,r.subtreeFlags&15990||l){l=_e.transition,_e.transition=null;var o=M;M=1;var i=D;D|=4,wo.current=null,dd(e,r),Ws(r,e),Ff(ml),Rn=!!pl,ml=pl=null,e.current=r,pd(r),Vc(),D=i,M=o,_e.transition=l}else e.current=r;if(hn&&(hn=!1,rt=e,Kn=a),l=e.pendingLanes,l===0&&(ut=null),$c(r.stateNode),pe(e,$()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(Xn)throw Xn=!1,e=Ml,Ml=null,e;return Kn&1&&e.tag!==0&&Xt(),l=e.pendingLanes,l&1?e===zl?Nr++:(Nr=0,zl=e):Nr=0,gt(),null}function Xt(){if(rt!==null){var e=Eu(Kn),t=_e.transition,r=M;try{if(_e.transition=null,M=16>e?16:e,rt===null)var n=!1;else{if(e=rt,rt=null,Kn=0,D&6)throw Error(h(331));var a=D;for(D|=4,w=e.current;w!==null;){var l=w,o=l.child;if(w.flags&16){var i=l.deletions;if(i!==null){for(var u=0;u<i.length;u++){var c=i[u];for(w=c;w!==null;){var m=w;switch(m.tag){case 0:case 11:case 15:Pr(8,m,l)}var p=m.child;if(p!==null)p.return=m,w=p;else for(;w!==null;){m=w;var g=m.sibling,v=m.return;if(Fs(m),m===c){w=null;break}if(g!==null){g.return=v,w=g;break}w=v}}}var b=l.alternate;if(b!==null){var k=b.child;if(k!==null){b.child=null;do{var j=k.sibling;k.sibling=null,k=j}while(k!==null)}}w=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,w=o;else e:for(;w!==null;){if(l=w,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Pr(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,w=f;break e}w=l.return}}var s=e.current;for(w=s;w!==null;){o=w;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,w=d;else e:for(o=s;w!==null;){if(i=w,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:sa(9,i)}}catch(_){V(i,i.return,_)}if(i===o){w=null;break e}var y=i.sibling;if(y!==null){y.return=i.return,w=y;break e}w=i.return}}if(D=a,gt(),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(ta,e)}catch{}n=!0}return n}finally{M=r,_e.transition=t}}return!1}function Fi(e,t,r){t=rr(r,t),t=Es(e,t,1),e=it(e,t,1),t=oe(),e!==null&&(Gr(e,1,t),pe(e,t))}function V(e,t,r){if(e.tag===3)Fi(e,e,r);else for(;t!==null;){if(t.tag===3){Fi(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ut===null||!ut.has(n))){e=rr(r,e),e=Ps(t,e,1),t=it(t,e,1),e=oe(),t!==null&&(Gr(t,1,e),pe(t,e));break}}t=t.return}}function bd(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=oe(),e.pingedLanes|=e.suspendedLanes&r,K===e&&(Z&r)===r&&(G===4||G===3&&(Z&130023424)===Z&&500>$()-_o?_t(e,0):So|=r),pe(e,t)}function Gs(e,t){t===0&&(e.mode&1?(t=ln,ln<<=1,!(ln&130023424)&&(ln=4194304)):t=1);var r=oe();e=Qe(e,t),e!==null&&(Gr(e,t,r),pe(e,r))}function kd(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Gs(e,r)}function wd(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(h(314))}n!==null&&n.delete(t),Gs(e,r)}var qs;qs=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)ce=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return ce=!1,ud(e,t,r);ce=!!(e.flags&131072)}else ce=!1,F&&t.flags&1048576&&Ju(t,Vn,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;En(e,t),e=t.pendingProps;var a=Jt(t,ae.current);qt(t,r),a=ho(null,t,n,e,a,r);var l=yo();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,de(n)?(l=!0,Un(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,co(t),a.updater=ua,t.stateNode=a,a._reactInternals=t,_l(t,n,e,r),t=El(null,t,n,!0,l,r)):(t.tag=0,F&&l&&no(t),le(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(En(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=_d(n),e=Te(n,e),a){case 0:t=Cl(null,t,n,e,r);break e;case 1:t=Ti(null,t,n,e,r);break e;case 11:t=Ei(null,t,n,e,r);break e;case 14:t=Pi(null,t,n,Te(n.type,e),r);break e}throw Error(h(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Te(n,a),Cl(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Te(n,a),Ti(e,t,n,a,r);case 3:e:{if(Os(t),e===null)throw Error(h(387));n=t.pendingProps,l=t.memoizedState,a=l.element,as(e,t),$n(t,n,null,r);var o=t.memoizedState;if(n=o.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=rr(Error(h(423)),t),t=Ni(e,t,n,r,a);break e}else if(n!==a){a=rr(Error(h(424)),t),t=Ni(e,t,n,r,a);break e}else for(ge=ot(t.stateNode.containerInfo.firstChild),he=t,F=!0,Le=null,r=rs(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Zt(),n===a){t=Ye(e,t,r);break e}le(e,t,n,r)}t=t.child}return t;case 5:return ls(t),e===null&&kl(t),n=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,o=a.children,gl(n,a)?o=null:l!==null&&gl(n,l)&&(t.flags|=32),Ls(e,t),le(e,t,o,r),t.child;case 6:return e===null&&kl(t),null;case 13:return Ds(e,t,r);case 4:return fo(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=er(t,null,n,r):le(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Te(n,a),Ei(e,t,n,a,r);case 7:return le(e,t,t.pendingProps,r),t.child;case 8:return le(e,t,t.pendingProps.children,r),t.child;case 12:return le(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,l=t.memoizedProps,o=a.value,z(Hn,n._currentValue),n._currentValue=o,l!==null)if(Me(l.value,o)){if(l.children===a.children&&!fe.current){t=Ye(e,t,r);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){o=l.child;for(var u=i.firstContext;u!==null;){if(u.context===n){if(l.tag===1){u=He(-1,r&-r),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}l.lanes|=r,u=l.alternate,u!==null&&(u.lanes|=r),wl(l.return,r,t),i.lanes|=r;break}u=u.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(h(341));o.lanes|=r,i=o.alternate,i!==null&&(i.lanes|=r),wl(o,r,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}le(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,qt(t,r),a=xe(a),n=n(a),t.flags|=1,le(e,t,n,r),t.child;case 14:return n=t.type,a=Te(n,t.pendingProps),a=Te(n.type,a),Pi(e,t,n,a,r);case 15:return Ts(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Te(n,a),En(e,t),t.tag=1,de(n)?(e=!0,Un(t)):e=!1,qt(t,r),Cs(t,n,a),_l(t,n,a,r),El(null,t,n,!0,e,r);case 19:return Ms(e,t,r);case 22:return Ns(e,t,r)}throw Error(h(156,t.tag))};function Xs(e,t){return Su(e,t)}function Sd(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Se(e,t,r,n){return new Sd(e,t,r,n)}function Po(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _d(e){if(typeof e=="function")return Po(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$l)return 11;if(e===Ql)return 14}return 2}function ct(e,t){var r=e.alternate;return r===null?(r=Se(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Nn(e,t,r,n,a,l){var o=2;if(n=e,typeof e=="function")Po(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case zt:return xt(r.children,a,l,t);case Bl:o=8,a|=8;break;case Ya:return e=Se(12,r,t,a|2),e.elementType=Ya,e.lanes=l,e;case Ga:return e=Se(13,r,t,a),e.elementType=Ga,e.lanes=l,e;case qa:return e=Se(19,r,t,a),e.elementType=qa,e.lanes=l,e;case lu:return fa(r,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nu:o=10;break e;case au:o=9;break e;case $l:o=11;break e;case Ql:o=14;break e;case Xe:o=16,n=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=Se(o,r,t,a),t.elementType=e,t.type=n,t.lanes=l,t}function xt(e,t,r,n){return e=Se(7,e,n,t),e.lanes=r,e}function fa(e,t,r,n){return e=Se(22,e,n,t),e.elementType=lu,e.lanes=r,e.stateNode={isHidden:!1},e}function Ha(e,t,r){return e=Se(6,e,null,t),e.lanes=r,e}function Ba(e,t,r){return t=Se(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xd(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xa(0),this.expirationTimes=xa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xa(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function To(e,t,r,n,a,l,o,i,u){return e=new xd(e,t,r,i,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Se(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},co(l),e}function Cd(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mt,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Ks(e){if(!e)return dt;e=e._reactInternals;e:{if(Ot(e)!==e||e.tag!==1)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(de(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(h(171))}if(e.tag===1){var r=e.type;if(de(r))return Xu(e,r,t)}return t}function Js(e,t,r,n,a,l,o,i,u){return e=To(r,n,!0,e,a,l,o,i,u),e.context=Ks(null),r=e.current,n=oe(),a=st(r),l=He(n,a),l.callback=t??null,it(r,l,a),e.current.lanes=a,Gr(e,a,n),pe(e,n),e}function da(e,t,r,n){var a=t.current,l=oe(),o=st(a);return r=Ks(r),t.context===null?t.context=r:t.pendingContext=r,t=He(l,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=it(a,t,o),e!==null&&(De(e,a,o,l),_n(e,a,o)),o}function Zn(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ai(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function No(e,t){Ai(e,t),(e=e.alternate)&&Ai(e,t)}function Ed(){return null}var Zs=typeof reportError=="function"?reportError:function(e){console.error(e)};function Lo(e){this._internalRoot=e}pa.prototype.render=Lo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));da(e,t,null,null)};pa.prototype.unmount=Lo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nt(function(){da(null,e,null,null)}),t[$e]=null}};function pa(e){this._internalRoot=e}pa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Je.length&&t!==0&&t<Je[r].priority;r++);Je.splice(r,0,e),r===0&&Ou(e)}};function Oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ui(){}function Pd(e,t,r,n,a){if(a){if(typeof n=="function"){var l=n;n=function(){var c=Zn(o);l.call(c)}}var o=Js(t,n,e,0,null,!1,!1,"",Ui);return e._reactRootContainer=o,e[$e]=o.current,Fr(e.nodeType===8?e.parentNode:e),Nt(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var i=n;n=function(){var c=Zn(u);i.call(c)}}var u=To(e,0,!1,null,null,!1,!1,"",Ui);return e._reactRootContainer=u,e[$e]=u.current,Fr(e.nodeType===8?e.parentNode:e),Nt(function(){da(t,u,r,n)}),u}function ga(e,t,r,n,a){var l=r._reactRootContainer;if(l){var o=l;if(typeof a=="function"){var i=a;a=function(){var u=Zn(o);i.call(u)}}da(t,o,e,a)}else o=Pd(r,t,e,a,n);return Zn(o)}Pu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=br(t.pendingLanes);r!==0&&(ql(t,r|1),pe(t,$()),!(D&6)&&(nr=$()+500,gt()))}break;case 13:Nt(function(){var n=Qe(e,1);if(n!==null){var a=oe();De(n,e,1,a)}}),No(e,1)}};Xl=function(e){if(e.tag===13){var t=Qe(e,134217728);if(t!==null){var r=oe();De(t,e,134217728,r)}No(e,134217728)}};Tu=function(e){if(e.tag===13){var t=st(e),r=Qe(e,t);if(r!==null){var n=oe();De(r,e,t,n)}No(e,t)}};Nu=function(){return M};Lu=function(e,t){var r=M;try{return M=e,t()}finally{M=r}};ll=function(e,t,r){switch(t){case"input":if(Ja(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=la(n);if(!a)throw Error(h(90));iu(n),Ja(n,a)}}}break;case"textarea":su(e,r);break;case"select":t=r.value,t!=null&&$t(e,!!r.multiple,t,!1)}};hu=xo;yu=Nt;var Td={usingClientEntryPoint:!1,Events:[Xr,Ft,la,mu,gu,xo]},hr={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nd={bundleType:hr.bundleType,version:hr.version,rendererPackageName:hr.rendererPackageName,rendererConfig:hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ku(e),e===null?null:e.stateNode},findFiberByHostInstance:hr.findFiberByHostInstance||Ed,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yn.isDisabled&&yn.supportsFiber)try{ta=yn.inject(Nd),je=yn}catch{}}ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Td;ve.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oo(t))throw Error(h(200));return Cd(e,t,null,r)};ve.createRoot=function(e,t){if(!Oo(e))throw Error(h(299));var r=!1,n="",a=Zs;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=To(e,1,!1,null,null,r,!1,n,a),e[$e]=t.current,Fr(e.nodeType===8?e.parentNode:e),new Lo(t)};ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=ku(t),e=e===null?null:e.stateNode,e};ve.flushSync=function(e){return Nt(e)};ve.hydrate=function(e,t,r){if(!ma(t))throw Error(h(200));return ga(null,e,t,!0,r)};ve.hydrateRoot=function(e,t,r){if(!Oo(e))throw Error(h(405));var n=r!=null&&r.hydratedSources||null,a=!1,l="",o=Zs;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=Js(t,null,e,1,r??null,a,!1,l,o),e[$e]=t.current,Fr(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new pa(t)};ve.render=function(e,t,r){if(!ma(t))throw Error(h(200));return ga(null,e,t,!1,r)};ve.unmountComponentAtNode=function(e){if(!ma(e))throw Error(h(40));return e._reactRootContainer?(Nt(function(){ga(null,null,e,!1,function(){e._reactRootContainer=null,e[$e]=null})}),!0):!1};ve.unstable_batchedUpdates=xo;ve.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!ma(r))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return ga(e,t,r,!1,n)};ve.version="18.3.1-next-f1338f8080-20240426";function ec(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ec)}catch(e){console.error(e)}}ec(),Zi.exports=ve;var Ld=Zi.exports,Wi=Ld;$a.createRoot=Wi.createRoot,$a.hydrateRoot=Wi.hydrateRoot;function Od({sections:e,currentPath:t,onNavigate:r}){const[n,a]=et.useState(new Set),l=o=>{a(i=>{const u=new Set(i);return u.has(o)?u.delete(o):u.add(o),u})};return O.jsxs("aside",{className:"sidebar",children:[O.jsx("div",{className:"sidebar-header",children:O.jsxs("h1",{className:"logo",children:[O.jsx("img",{src:"/logo.png",alt:"UWASIC Logo"}),O.jsx("span",{className:"logo-text",children:"UWASIC Docs"})]})}),O.jsx("nav",{className:"sidebar-nav",children:e.map(o=>O.jsxs("div",{className:"nav-section",children:[O.jsxs("button",{className:"section-header",onClick:()=>l(o.id),children:[O.jsx("span",{className:`chevron ${n.has(o.id)?"expanded":""}`,children:"›"}),O.jsx("span",{className:"section-title",children:o.title})]}),n.has(o.id)&&O.jsx("ul",{className:"page-list",children:o.pages.map(i=>O.jsx("li",{children:O.jsx("button",{className:`page-link ${t===i.path?"active":""}`,onClick:()=>r(i.path),children:i.metadata.title})},i.path))})]},o.id))})]})}function Dd({content:e}){const t=(c,m)=>{const p=c.trim();return p.startsWith("# ")?O.jsx("h1",{children:p.slice(2)},m):p.startsWith("## ")?O.jsx("h2",{children:p.slice(3)},m):p.startsWith("### ")?O.jsx("h3",{children:p.slice(4)},m):p.startsWith("```")?null:p.startsWith("- ")?O.jsx("li",{children:r(p.slice(2))},m):p.match(/^\d+\.\s/)?O.jsx("li",{children:r(p.replace(/^\d+\.\s/,""))},m):p.startsWith("**")||p.includes("**")?O.jsx("p",{children:r(p)},m):p?O.jsx("p",{children:r(p)},m):O.jsx("br",{},m)},r=c=>{const m=[];let p=0;const g=/`([^`]+)`/g;let v;for(;(v=g.exec(c))!==null;){if(v.index>p){const b=c.slice(p,v.index);m.push(n(b))}m.push(O.jsx("code",{children:v[1]},v.index)),p=v.index+v[0].length}return p<c.length&&m.push(n(c.slice(p))),m.length>0?m:c},n=c=>c.split("**").map((m,p)=>p%2===0?m:O.jsx("strong",{children:m},p)),a=e.trim().split(`
`),l=[];let o=!1,i=[],u="";return a.forEach((c,m)=>{c.trim().startsWith("```")?o?(o=!1,l.push(O.jsx("pre",{children:O.jsx("code",{className:u?`language-${u}`:"",children:i.join(`
`)})},`code-${m}`))):(o=!0,u=c.trim().slice(3),i=[]):o?i.push(c):l.push(t(c,m))}),O.jsx("div",{className:"markdown-content",children:l})}const Md={title:"Create Project",order:2},zd=`
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
`,Rd=Object.freeze(Object.defineProperty({__proto__:null,content:zd,metadata:Md},Symbol.toStringTag,{value:"Module"})),Id={title:"Layout Design",order:4},jd=`
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
`,Fd=Object.freeze(Object.defineProperty({__proto__:null,content:jd,metadata:Id},Symbol.toStringTag,{value:"Module"})),Ad={title:"Overview",order:1},Ud=`
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
`,Wd=Object.freeze(Object.defineProperty({__proto__:null,content:Ud,metadata:Ad},Symbol.toStringTag,{value:"Module"})),Vd={title:"Schematic Design",order:3},Hd=`
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
`,Xd=Object.freeze(Object.defineProperty({__proto__:null,content:qd,metadata:Gd},Symbol.toStringTag,{value:"Module"})),Kd={title:"Test & Verify",order:3},Jd=`
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
`,Zd=Object.freeze(Object.defineProperty({__proto__:null,content:Jd,metadata:Kd},Symbol.toStringTag,{value:"Module"})),ep={title:"Basic Commands",order:3},tp=`
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
`,rp=Object.freeze(Object.defineProperty({__proto__:null,content:tp,metadata:ep},Symbol.toStringTag,{value:"Module"})),np={title:"Overview",order:1},ap=`
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
`,lp=Object.freeze(Object.defineProperty({__proto__:null,content:ap,metadata:np},Symbol.toStringTag,{value:"Module"})),op={title:"Installation",order:2},ip=`
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
`,mp=Object.freeze(Object.defineProperty({__proto__:null,content:pp,metadata:dp},Symbol.toStringTag,{value:"Module"})),gp={title:"Create Package",order:2},hp=`
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
`,yp=Object.freeze(Object.defineProperty({__proto__:null,content:hp,metadata:gp},Symbol.toStringTag,{value:"Module"})),vp={title:"Overview",order:1},bp=`
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
`,Np=Object.freeze(Object.defineProperty({__proto__:null,content:Tp,metadata:Pp},Symbol.toStringTag,{value:"Module"})),Lp=Object.assign({"../content/Analog/Create-Project.ts":Rd,"../content/Analog/Layout-Design.ts":Fd,"../content/Analog/Overview.ts":Wd,"../content/Analog/Schematic-Design.ts":Bd,"../content/Digital/Create-Project.ts":Yd,"../content/Digital/Overview.ts":Xd,"../content/Digital/Test-Verify.ts":Zd,"../content/How-To-Use/Basic-Commands.ts":rp,"../content/How-To-Use/Overview.ts":lp,"../content/How-To-Use/Using-Nix.ts":up,"../content/Mixed-Signal/Create-Project.ts":fp,"../content/Mixed-Signal/Overview.ts":mp,"../content/TinyTapeout/Create-Package.ts":yp,"../content/TinyTapeout/Overview.ts":kp,"../content/TinyTapeout/Submit-Package.ts":_p,"../content/Updating-Docs/Build-Deploy.ts":Ep,"../content/Updating-Docs/Markdown-Syntax.ts":Np});function Op(){const e=new Map;for(const[t,r]of Object.entries(Lp)){const n=r,a=t.match(/\/content\/([^/]+)\/([^/]+)\.ts$/);if(!a)continue;const[,l,o]=a;e.has(l)||e.set(l,{id:l,title:l.split("-").map(i=>i.charAt(0).toUpperCase()+i.slice(1)).join(" "),pages:[]}),e.get(l).pages.push({id:o,path:`${l}/${o}`,metadata:n.metadata,content:n.content})}return e.forEach(t=>{t.pages.sort((r,n)=>r.metadata.order-n.metadata.order)}),Array.from(e.values()).sort((t,r)=>t.id.localeCompare(r.id))}function Dp(){const[e]=et.useState(()=>Op()),[t,r]=et.useState(""),[n,a]=et.useState(null);et.useEffect(()=>{if(e.length>0&&!t){const o=e[0].pages[0];o&&(r(o.path),a(o))}},[e,t]);const l=o=>{r(o);for(const i of e){const u=i.pages.find(c=>c.path===o);if(u){a(u);break}}};return O.jsxs("div",{className:"app",children:[O.jsx(Od,{sections:e,currentPath:t,onNavigate:l}),O.jsx("main",{className:"content",children:n?O.jsx("article",{className:"article",children:O.jsx(Dd,{content:n.content})}):O.jsx("div",{className:"empty-state",children:O.jsx("p",{children:"Select a page from the sidebar to get started"})})})]})}$a.createRoot(document.getElementById("root")).render(O.jsx(vc.StrictMode,{children:O.jsx(Dp,{})}));
