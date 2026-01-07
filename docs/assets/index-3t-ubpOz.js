(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function tc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vi={exports:{}},ea={},Bi={exports:{}},N={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Gt=Symbol.for("react.element"),rc=Symbol.for("react.portal"),ac=Symbol.for("react.fragment"),lc=Symbol.for("react.strict_mode"),oc=Symbol.for("react.profiler"),ic=Symbol.for("react.provider"),uc=Symbol.for("react.context"),sc=Symbol.for("react.forward_ref"),cc=Symbol.for("react.suspense"),fc=Symbol.for("react.memo"),dc=Symbol.for("react.lazy"),Do=Symbol.iterator;function pc(e){return e===null||typeof e!="object"?null:(e=Do&&e[Do]||e["@@iterator"],typeof e=="function"?e:null)}var $i={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hi=Object.assign,Qi={};function lt(e,n,t){this.props=e,this.context=n,this.refs=Qi,this.updater=t||$i}lt.prototype.isReactComponent={};lt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};lt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yi(){}Yi.prototype=lt.prototype;function jl(e,n,t){this.props=e,this.context=n,this.refs=Qi,this.updater=t||$i}var Al=jl.prototype=new Yi;Al.constructor=jl;Hi(Al,lt.prototype);Al.isPureReactComponent=!0;var Lo=Array.isArray,Gi=Object.prototype.hasOwnProperty,Fl={current:null},Ki={key:!0,ref:!0,__self:!0,__source:!0};function Xi(e,n,t){var r,a={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)Gi.call(n,r)&&!Ki.hasOwnProperty(r)&&(a[r]=n[r]);var i=arguments.length-2;if(i===1)a.children=t;else if(1<i){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)a[r]===void 0&&(a[r]=i[r]);return{$$typeof:Gt,type:e,key:l,ref:o,props:a,_owner:Fl.current}}function mc(e,n){return{$$typeof:Gt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ul(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gt}function hc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ro=/\/+/g;function ba(e,n){return typeof e=="object"&&e!==null&&e.key!=null?hc(""+e.key):n.toString(36)}function vr(e,n,t,r,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Gt:case rc:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+ba(o,0):r,Lo(a)?(t="",e!=null&&(t=e.replace(Ro,"$&/")+"/"),vr(a,n,t,"",function(c){return c})):a!=null&&(Ul(a)&&(a=mc(a,t+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Ro,"$&/")+"/")+e)),n.push(a)),1;if(o=0,r=r===""?".":r+":",Lo(e))for(var i=0;i<e.length;i++){l=e[i];var u=r+ba(l,i);o+=vr(l,n,t,u,a)}else if(u=pc(e),typeof u=="function")for(e=u.call(e),i=0;!(l=e.next()).done;)l=l.value,u=r+ba(l,i++),o+=vr(l,n,t,u,a);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function nr(e,n,t){if(e==null)return e;var r=[],a=0;return vr(e,r,"","",function(l){return n.call(t,l,a++)}),r}function gc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ie={current:null},br={transition:null},yc={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:br,ReactCurrentOwner:Fl};function qi(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:nr,forEach:function(e,n,t){nr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return nr(e,function(){n++}),n},toArray:function(e){return nr(e,function(n){return n})||[]},only:function(e){if(!Ul(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=lt;N.Fragment=ac;N.Profiler=oc;N.PureComponent=jl;N.StrictMode=lc;N.Suspense=cc;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yc;N.act=qi;N.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Hi({},e.props),a=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=Fl.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(u in n)Gi.call(n,u)&&!Ki.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&i!==void 0?i[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){i=Array(u);for(var c=0;c<u;c++)i[c]=arguments[c+2];r.children=i}return{$$typeof:Gt,type:e.type,key:a,ref:l,props:r,_owner:o}};N.createContext=function(e){return e={$$typeof:uc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ic,_context:e},e.Consumer=e};N.createElement=Xi;N.createFactory=function(e){var n=Xi.bind(null,e);return n.type=e,n};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:sc,render:e}};N.isValidElement=Ul;N.lazy=function(e){return{$$typeof:dc,_payload:{_status:-1,_result:e},_init:gc}};N.memo=function(e,n){return{$$typeof:fc,type:e,compare:n===void 0?null:n}};N.startTransition=function(e){var n=br.transition;br.transition={};try{e()}finally{br.transition=n}};N.unstable_act=qi;N.useCallback=function(e,n){return ie.current.useCallback(e,n)};N.useContext=function(e){return ie.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return ie.current.useDeferredValue(e)};N.useEffect=function(e,n){return ie.current.useEffect(e,n)};N.useId=function(){return ie.current.useId()};N.useImperativeHandle=function(e,n,t){return ie.current.useImperativeHandle(e,n,t)};N.useInsertionEffect=function(e,n){return ie.current.useInsertionEffect(e,n)};N.useLayoutEffect=function(e,n){return ie.current.useLayoutEffect(e,n)};N.useMemo=function(e,n){return ie.current.useMemo(e,n)};N.useReducer=function(e,n,t){return ie.current.useReducer(e,n,t)};N.useRef=function(e){return ie.current.useRef(e)};N.useState=function(e){return ie.current.useState(e)};N.useSyncExternalStore=function(e,n,t){return ie.current.useSyncExternalStore(e,n,t)};N.useTransition=function(){return ie.current.useTransition()};N.version="18.3.1";Bi.exports=N;var en=Bi.exports;const vc=tc(en);/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var bc=en,kc=Symbol.for("react.element"),wc=Symbol.for("react.fragment"),Sc=Object.prototype.hasOwnProperty,_c=bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xc={key:!0,ref:!0,__self:!0,__source:!0};function Ji(e,n,t){var r,a={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Sc.call(n,r)&&!xc.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)a[r]===void 0&&(a[r]=n[r]);return{$$typeof:kc,type:e,key:l,ref:o,props:a,_owner:_c.current}}ea.Fragment=wc;ea.jsx=Ji;ea.jsxs=Ji;Vi.exports=ea;var O=Vi.exports,Ha={},Zi={exports:{}},ve={},eu={exports:{}},nu={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(e){function n(S,P){var T=S.length;S.push(P);e:for(;0<T;){var $=T-1>>>1,K=S[$];if(0<a(K,P))S[$]=P,S[T]=K,T=$;else break e}}function t(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var P=S[0],T=S.pop();if(T!==P){S[0]=T;e:for(var $=0,K=S.length,Zt=K>>>1;$<Zt;){var yn=2*($+1)-1,va=S[yn],vn=yn+1,er=S[vn];if(0>a(va,T))vn<K&&0>a(er,va)?(S[$]=er,S[vn]=T,$=vn):(S[$]=va,S[yn]=T,$=yn);else if(vn<K&&0>a(er,T))S[$]=er,S[vn]=T,$=vn;else break e}}return P}function a(S,P){var T=S.sortIndex-P.sortIndex;return T!==0?T:S.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,i=o.now();e.unstable_now=function(){return o.now()-i}}var u=[],c=[],h=1,m=null,p=3,v=!1,b=!1,k=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(S){for(var P=t(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=S)r(c),P.sortIndex=P.expirationTime,n(u,P);else break;P=t(c)}}function y(S){if(k=!1,d(S),!b)if(t(u)!==null)b=!0,ga(_);else{var P=t(c);P!==null&&ya(y,P.startTime-S)}}function _(S,P){b=!1,k&&(k=!1,f(E),E=-1),v=!0;var T=p;try{for(d(P),m=t(u);m!==null&&(!(m.expirationTime>P)||S&&!Ee());){var $=m.callback;if(typeof $=="function"){m.callback=null,p=m.priorityLevel;var K=$(m.expirationTime<=P);P=e.unstable_now(),typeof K=="function"?m.callback=K:m===t(u)&&r(u),d(P)}else r(u);m=t(u)}if(m!==null)var Zt=!0;else{var yn=t(c);yn!==null&&ya(y,yn.startTime-P),Zt=!1}return Zt}finally{m=null,p=T,v=!1}}var x=!1,C=null,E=-1,B=5,z=-1;function Ee(){return!(e.unstable_now()-z<B)}function ut(){if(C!==null){var S=e.unstable_now();z=S;var P=!0;try{P=C(!0,S)}finally{P?st():(x=!1,C=null)}}else x=!1}var st;if(typeof s=="function")st=function(){s(ut)};else if(typeof MessageChannel<"u"){var Mo=new MessageChannel,nc=Mo.port2;Mo.port1.onmessage=ut,st=function(){nc.postMessage(null)}}else st=function(){j(ut,0)};function ga(S){C=S,x||(x=!0,st())}function ya(S,P){E=j(function(){S(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){b||v||(b=!0,ga(_))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(S){switch(p){case 1:case 2:case 3:var P=3;break;default:P=p}var T=p;p=P;try{return S()}finally{p=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,P){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var T=p;p=S;try{return P()}finally{p=T}},e.unstable_scheduleCallback=function(S,P,T){var $=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?$+T:$):T=$,S){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=T+K,S={id:h++,callback:P,priorityLevel:S,startTime:T,expirationTime:K,sortIndex:-1},T>$?(S.sortIndex=T,n(c,S),t(u)===null&&S===t(c)&&(k?(f(E),E=-1):k=!0,ya(y,T-$))):(S.sortIndex=K,n(u,S),b||v||(b=!0,ga(_))),S},e.unstable_shouldYield=Ee,e.unstable_wrapCallback=function(S){var P=p;return function(){var T=p;p=P;try{return S.apply(this,arguments)}finally{p=T}}}})(nu);eu.exports=nu;var Cc=eu.exports;/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Ec=en,ye=Cc;function g(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tu=new Set,Ot={};function On(e,n){Jn(e,n),Jn(e+"Capture",n)}function Jn(e,n){for(Ot[e]=n,e=0;e<n.length;e++)tu.add(n[e])}var $e=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qa=Object.prototype.hasOwnProperty,Pc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Io={},jo={};function Tc(e){return Qa.call(jo,e)?!0:Qa.call(Io,e)?!1:Pc.test(e)?jo[e]=!0:(Io[e]=!0,!1)}function Nc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zc(e,n,t,r){if(n===null||typeof n>"u"||Nc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ue(e,n,t,r,a,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ee[n]=new ue(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wl=/[\-:]([a-z])/g;function Vl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Wl,Vl);ee[n]=new ue(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Wl,Vl);ee[n]=new ue(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Wl,Vl);ee[n]=new ue(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bl(e,n,t,r){var a=ee.hasOwnProperty(n)?ee[n]:null;(a!==null?a.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(zc(n,t,a,r)&&(t=null),r||a===null?Tc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,r=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Ge=Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tr=Symbol.for("react.element"),Ln=Symbol.for("react.portal"),Rn=Symbol.for("react.fragment"),$l=Symbol.for("react.strict_mode"),Ya=Symbol.for("react.profiler"),ru=Symbol.for("react.provider"),au=Symbol.for("react.context"),Hl=Symbol.for("react.forward_ref"),Ga=Symbol.for("react.suspense"),Ka=Symbol.for("react.suspense_list"),Ql=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),lu=Symbol.for("react.offscreen"),Ao=Symbol.iterator;function ct(e){return e===null||typeof e!="object"?null:(e=Ao&&e[Ao]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,ka;function vt(e){if(ka===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ka=n&&n[1]||""}return`
`+ka+e}var wa=!1;function Sa(e,n){if(!e||wa)return"";wa=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var a=c.stack.split(`
`),l=r.stack.split(`
`),o=a.length-1,i=l.length-1;1<=o&&0<=i&&a[o]!==l[i];)i--;for(;1<=o&&0<=i;o--,i--)if(a[o]!==l[i]){if(o!==1||i!==1)do if(o--,i--,0>i||a[o]!==l[i]){var u=`
`+a[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=i);break}}}finally{wa=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?vt(e):""}function Oc(e){switch(e.tag){case 5:return vt(e.type);case 16:return vt("Lazy");case 13:return vt("Suspense");case 19:return vt("SuspenseList");case 0:case 2:case 15:return e=Sa(e.type,!1),e;case 11:return e=Sa(e.type.render,!1),e;case 1:return e=Sa(e.type,!0),e;default:return""}}function Xa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rn:return"Fragment";case Ln:return"Portal";case Ya:return"Profiler";case $l:return"StrictMode";case Ga:return"Suspense";case Ka:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case au:return(e.displayName||"Context")+".Consumer";case ru:return(e._context.displayName||"Context")+".Provider";case Hl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ql:return n=e.displayName||null,n!==null?n:Xa(e.type)||"Memo";case Xe:n=e._payload,e=e._init;try{return Xa(e(n))}catch{}}return null}function Mc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xa(n);case 8:return n===$l?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ou(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Dc(e){var n=ou(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function rr(e){e._valueTracker||(e._valueTracker=Dc(e))}function iu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ou(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function zr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qa(e,n){var t=n.checked;return W({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Fo(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=dn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function uu(e,n){n=n.checked,n!=null&&Bl(e,"checked",n,!1)}function Ja(e,n){uu(e,n);var t=dn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Za(e,n.type,t):n.hasOwnProperty("defaultValue")&&Za(e,n.type,dn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Uo(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Za(e,n,t){(n!=="number"||zr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var bt=Array.isArray;function Qn(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+dn(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function el(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(g(91));return W({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wo(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(g(92));if(bt(t)){if(1<t.length)throw Error(g(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:dn(t)}}function su(e,n){var t=dn(n.value),r=dn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Vo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function cu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?cu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ar,fu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ar=ar||document.createElement("div"),ar.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ar.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Mt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var St={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lc=["Webkit","ms","Moz","O"];Object.keys(St).forEach(function(e){Lc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),St[n]=St[e]})});function du(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||St.hasOwnProperty(e)&&St[e]?(""+n).trim():n+"px"}function pu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=du(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}var Rc=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tl(e,n){if(n){if(Rc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(g(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(g(61))}if(n.style!=null&&typeof n.style!="object")throw Error(g(62))}}function rl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var al=null;function Yl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ll=null,Yn=null,Gn=null;function Bo(e){if(e=qt(e)){if(typeof ll!="function")throw Error(g(280));var n=e.stateNode;n&&(n=la(n),ll(e.stateNode,e.type,n))}}function mu(e){Yn?Gn?Gn.push(e):Gn=[e]:Yn=e}function hu(){if(Yn){var e=Yn,n=Gn;if(Gn=Yn=null,Bo(e),n)for(e=0;e<n.length;e++)Bo(n[e])}}function gu(e,n){return e(n)}function yu(){}var _a=!1;function vu(e,n,t){if(_a)return e(n,t);_a=!0;try{return gu(e,n,t)}finally{_a=!1,(Yn!==null||Gn!==null)&&(yu(),hu())}}function Dt(e,n){var t=e.stateNode;if(t===null)return null;var r=la(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(g(231,n,typeof t));return t}var ol=!1;if($e)try{var ft={};Object.defineProperty(ft,"passive",{get:function(){ol=!0}}),window.addEventListener("test",ft,ft),window.removeEventListener("test",ft,ft)}catch{ol=!1}function Ic(e,n,t,r,a,l,o,i,u){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(h){this.onError(h)}}var _t=!1,Or=null,Mr=!1,il=null,jc={onError:function(e){_t=!0,Or=e}};function Ac(e,n,t,r,a,l,o,i,u){_t=!1,Or=null,Ic.apply(jc,arguments)}function Fc(e,n,t,r,a,l,o,i,u){if(Ac.apply(this,arguments),_t){if(_t){var c=Or;_t=!1,Or=null}else throw Error(g(198));Mr||(Mr=!0,il=c)}}function Mn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function bu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function $o(e){if(Mn(e)!==e)throw Error(g(188))}function Uc(e){var n=e.alternate;if(!n){if(n=Mn(e),n===null)throw Error(g(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===t)return $o(a),e;if(l===r)return $o(a),n;l=l.sibling}throw Error(g(188))}if(t.return!==r.return)t=a,r=l;else{for(var o=!1,i=a.child;i;){if(i===t){o=!0,t=a,r=l;break}if(i===r){o=!0,r=a,t=l;break}i=i.sibling}if(!o){for(i=l.child;i;){if(i===t){o=!0,t=l,r=a;break}if(i===r){o=!0,r=l,t=a;break}i=i.sibling}if(!o)throw Error(g(189))}}if(t.alternate!==r)throw Error(g(190))}if(t.tag!==3)throw Error(g(188));return t.stateNode.current===t?e:n}function ku(e){return e=Uc(e),e!==null?wu(e):null}function wu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=wu(e);if(n!==null)return n;e=e.sibling}return null}var Su=ye.unstable_scheduleCallback,Ho=ye.unstable_cancelCallback,Wc=ye.unstable_shouldYield,Vc=ye.unstable_requestPaint,H=ye.unstable_now,Bc=ye.unstable_getCurrentPriorityLevel,Gl=ye.unstable_ImmediatePriority,_u=ye.unstable_UserBlockingPriority,Dr=ye.unstable_NormalPriority,$c=ye.unstable_LowPriority,xu=ye.unstable_IdlePriority,na=null,je=null;function Hc(e){if(je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(na,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Gc,Qc=Math.log,Yc=Math.LN2;function Gc(e){return e>>>=0,e===0?32:31-(Qc(e)/Yc|0)|0}var lr=64,or=4194304;function kt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var i=o&~a;i!==0?r=kt(i):(l&=o,l!==0&&(r=kt(l)))}else o=t&~a,o!==0?r=kt(o):l!==0&&(r=kt(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&a)&&(a=r&-r,l=n&-n,a>=l||a===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Oe(n),a=1<<t,r|=e[t],n&=~a;return r}function Kc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xc(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Oe(l),i=1<<o,u=a[o];u===-1?(!(i&t)||i&r)&&(a[o]=Kc(i,n)):u<=n&&(e.expiredLanes|=i),l&=~i}}function ul(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cu(){var e=lr;return lr<<=1,!(lr&4194240)&&(lr=64),e}function xa(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Kt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Oe(n),e[n]=t}function qc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-Oe(t),l=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~l}}function Kl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Oe(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var D=0;function Eu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pu,Xl,Tu,Nu,zu,sl=!1,ir=[],rn=null,an=null,ln=null,Lt=new Map,Rt=new Map,Je=[],Jc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qo(e,n){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":Lt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rt.delete(n.pointerId)}}function dt(e,n,t,r,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},n!==null&&(n=qt(n),n!==null&&Xl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function Zc(e,n,t,r,a){switch(n){case"focusin":return rn=dt(rn,e,n,t,r,a),!0;case"dragenter":return an=dt(an,e,n,t,r,a),!0;case"mouseover":return ln=dt(ln,e,n,t,r,a),!0;case"pointerover":var l=a.pointerId;return Lt.set(l,dt(Lt.get(l)||null,e,n,t,r,a)),!0;case"gotpointercapture":return l=a.pointerId,Rt.set(l,dt(Rt.get(l)||null,e,n,t,r,a)),!0}return!1}function Ou(e){var n=wn(e.target);if(n!==null){var t=Mn(n);if(t!==null){if(n=t.tag,n===13){if(n=bu(t),n!==null){e.blockedOn=n,zu(e.priority,function(){Tu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=cl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);al=r,t.target.dispatchEvent(r),al=null}else return n=qt(t),n!==null&&Xl(n),e.blockedOn=t,!1;n.shift()}return!0}function Yo(e,n,t){kr(e)&&t.delete(n)}function ef(){sl=!1,rn!==null&&kr(rn)&&(rn=null),an!==null&&kr(an)&&(an=null),ln!==null&&kr(ln)&&(ln=null),Lt.forEach(Yo),Rt.forEach(Yo)}function pt(e,n){e.blockedOn===n&&(e.blockedOn=null,sl||(sl=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,ef)))}function It(e){function n(a){return pt(a,e)}if(0<ir.length){pt(ir[0],e);for(var t=1;t<ir.length;t++){var r=ir[t];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&pt(rn,e),an!==null&&pt(an,e),ln!==null&&pt(ln,e),Lt.forEach(n),Rt.forEach(n),t=0;t<Je.length;t++)r=Je[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Je.length&&(t=Je[0],t.blockedOn===null);)Ou(t),t.blockedOn===null&&Je.shift()}var Kn=Ge.ReactCurrentBatchConfig,Rr=!0;function nf(e,n,t,r){var a=D,l=Kn.transition;Kn.transition=null;try{D=1,ql(e,n,t,r)}finally{D=a,Kn.transition=l}}function tf(e,n,t,r){var a=D,l=Kn.transition;Kn.transition=null;try{D=4,ql(e,n,t,r)}finally{D=a,Kn.transition=l}}function ql(e,n,t,r){if(Rr){var a=cl(e,n,t,r);if(a===null)La(e,n,r,Ir,t),Qo(e,r);else if(Zc(a,e,n,t,r))r.stopPropagation();else if(Qo(e,r),n&4&&-1<Jc.indexOf(e)){for(;a!==null;){var l=qt(a);if(l!==null&&Pu(l),l=cl(e,n,t,r),l===null&&La(e,n,r,Ir,t),l===a)break;a=l}a!==null&&r.stopPropagation()}else La(e,n,r,null,t)}}var Ir=null;function cl(e,n,t,r){if(Ir=null,e=Yl(r),e=wn(e),e!==null)if(n=Mn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=bu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ir=e,null}function Mu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bc()){case Gl:return 1;case _u:return 4;case Dr:case $c:return 16;case xu:return 536870912;default:return 16}default:return 16}}var nn=null,Jl=null,wr=null;function Du(){if(wr)return wr;var e,n=Jl,t=n.length,r,a="value"in nn?nn.value:nn.textContent,l=a.length;for(e=0;e<t&&n[e]===a[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===a[l-r];r++);return wr=a.slice(e,1<r?1-r:void 0)}function Sr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function Go(){return!1}function be(e){function n(t,r,a,l,o){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(l):l[i]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ur:Go,this.isPropagationStopped=Go,this}return W(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),n}var ot={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=be(ot),Xt=W({},ot,{view:0,detail:0}),rf=be(Xt),Ca,Ea,mt,ta=W({},Xt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mt&&(mt&&e.type==="mousemove"?(Ca=e.screenX-mt.screenX,Ea=e.screenY-mt.screenY):Ea=Ca=0,mt=e),Ca)},movementY:function(e){return"movementY"in e?e.movementY:Ea}}),Ko=be(ta),af=W({},ta,{dataTransfer:0}),lf=be(af),of=W({},Xt,{relatedTarget:0}),Pa=be(of),uf=W({},ot,{animationName:0,elapsedTime:0,pseudoElement:0}),sf=be(uf),cf=W({},ot,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ff=be(cf),df=W({},ot,{data:0}),Xo=be(df),pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=hf[e])?!!n[e]:!1}function eo(){return gf}var yf=W({},Xt,{key:function(e){if(e.key){var n=pf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Sr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eo,charCode:function(e){return e.type==="keypress"?Sr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vf=be(yf),bf=W({},ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qo=be(bf),kf=W({},Xt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eo}),wf=be(kf),Sf=W({},ot,{propertyName:0,elapsedTime:0,pseudoElement:0}),_f=be(Sf),xf=W({},ta,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cf=be(xf),Ef=[9,13,27,32],no=$e&&"CompositionEvent"in window,xt=null;$e&&"documentMode"in document&&(xt=document.documentMode);var Pf=$e&&"TextEvent"in window&&!xt,Lu=$e&&(!no||xt&&8<xt&&11>=xt),Jo=" ",Zo=!1;function Ru(e,n){switch(e){case"keyup":return Ef.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var In=!1;function Tf(e,n){switch(e){case"compositionend":return Iu(n);case"keypress":return n.which!==32?null:(Zo=!0,Jo);case"textInput":return e=n.data,e===Jo&&Zo?null:e;default:return null}}function Nf(e,n){if(In)return e==="compositionend"||!no&&Ru(e,n)?(e=Du(),wr=Jl=nn=null,In=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Lu&&n.locale!=="ko"?null:n.data;default:return null}}var zf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ei(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!zf[e.type]:n==="textarea"}function ju(e,n,t,r){mu(r),n=jr(n,"onChange"),0<n.length&&(t=new Zl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Ct=null,jt=null;function Of(e){Gu(e,0)}function ra(e){var n=Fn(e);if(iu(n))return e}function Mf(e,n){if(e==="change")return n}var Au=!1;if($e){var Ta;if($e){var Na="oninput"in document;if(!Na){var ni=document.createElement("div");ni.setAttribute("oninput","return;"),Na=typeof ni.oninput=="function"}Ta=Na}else Ta=!1;Au=Ta&&(!document.documentMode||9<document.documentMode)}function ti(){Ct&&(Ct.detachEvent("onpropertychange",Fu),jt=Ct=null)}function Fu(e){if(e.propertyName==="value"&&ra(jt)){var n=[];ju(n,jt,e,Yl(e)),vu(Of,n)}}function Df(e,n,t){e==="focusin"?(ti(),Ct=n,jt=t,Ct.attachEvent("onpropertychange",Fu)):e==="focusout"&&ti()}function Lf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ra(jt)}function Rf(e,n){if(e==="click")return ra(n)}function If(e,n){if(e==="input"||e==="change")return ra(n)}function jf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var De=typeof Object.is=="function"?Object.is:jf;function At(e,n){if(De(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!Qa.call(n,a)||!De(e[a],n[a]))return!1}return!0}function ri(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ai(e,n){var t=ri(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ri(t)}}function Uu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Uu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Wu(){for(var e=window,n=zr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=zr(e.document)}return n}function to(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Af(e){var n=Wu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Uu(t.ownerDocument.documentElement,t)){if(r!==null&&to(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=ai(t,l);var o=ai(t,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ff=$e&&"documentMode"in document&&11>=document.documentMode,jn=null,fl=null,Et=null,dl=!1;function li(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;dl||jn==null||jn!==zr(r)||(r=jn,"selectionStart"in r&&to(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Et&&At(Et,r)||(Et=r,r=jr(fl,"onSelect"),0<r.length&&(n=new Zl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=jn)))}function sr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var An={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionend:sr("Transition","TransitionEnd")},za={},Vu={};$e&&(Vu=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function aa(e){if(za[e])return za[e];if(!An[e])return e;var n=An[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Vu)return za[e]=n[t];return e}var Bu=aa("animationend"),$u=aa("animationiteration"),Hu=aa("animationstart"),Qu=aa("transitionend"),Yu=new Map,oi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,n){Yu.set(e,n),On(n,[e])}for(var Oa=0;Oa<oi.length;Oa++){var Ma=oi[Oa],Uf=Ma.toLowerCase(),Wf=Ma[0].toUpperCase()+Ma.slice(1);mn(Uf,"on"+Wf)}mn(Bu,"onAnimationEnd");mn($u,"onAnimationIteration");mn(Hu,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(Qu,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));On("onBeforeInput",["compositionend","keypress","textInput","paste"]);On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vf=new Set("cancel close invalid load scroll toggle".split(" ").concat(wt));function ii(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Fc(r,n,void 0,e),e.currentTarget=null}function Gu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var i=r[o],u=i.instance,c=i.currentTarget;if(i=i.listener,u!==l&&a.isPropagationStopped())break e;ii(a,i,c),l=u}else for(o=0;o<r.length;o++){if(i=r[o],u=i.instance,c=i.currentTarget,i=i.listener,u!==l&&a.isPropagationStopped())break e;ii(a,i,c),l=u}}}if(Mr)throw e=il,Mr=!1,il=null,e}function R(e,n){var t=n[yl];t===void 0&&(t=n[yl]=new Set);var r=e+"__bubble";t.has(r)||(Ku(n,e,2,!1),t.add(r))}function Da(e,n,t){var r=0;n&&(r|=4),Ku(t,e,r,n)}var cr="_reactListening"+Math.random().toString(36).slice(2);function Ft(e){if(!e[cr]){e[cr]=!0,tu.forEach(function(t){t!=="selectionchange"&&(Vf.has(t)||Da(t,!1,e),Da(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[cr]||(n[cr]=!0,Da("selectionchange",!1,n))}}function Ku(e,n,t,r){switch(Mu(n)){case 1:var a=nf;break;case 4:a=tf;break;default:a=ql}t=a.bind(null,n,t,e),a=void 0,!ol||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function La(e,n,t,r,a){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var i=r.stateNode.containerInfo;if(i===a||i.nodeType===8&&i.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;o=o.return}for(;i!==null;){if(o=wn(i),o===null)return;if(u=o.tag,u===5||u===6){r=l=o;continue e}i=i.parentNode}}r=r.return}vu(function(){var c=l,h=Yl(t),m=[];e:{var p=Yu.get(e);if(p!==void 0){var v=Zl,b=e;switch(e){case"keypress":if(Sr(t)===0)break e;case"keydown":case"keyup":v=vf;break;case"focusin":b="focus",v=Pa;break;case"focusout":b="blur",v=Pa;break;case"beforeblur":case"afterblur":v=Pa;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ko;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=wf;break;case Bu:case $u:case Hu:v=sf;break;case Qu:v=_f;break;case"scroll":v=rf;break;case"wheel":v=Cf;break;case"copy":case"cut":case"paste":v=ff;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=qo}var k=(n&4)!==0,j=!k&&e==="scroll",f=k?p!==null?p+"Capture":null:p;k=[];for(var s=c,d;s!==null;){d=s;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,f!==null&&(y=Dt(s,f),y!=null&&k.push(Ut(s,y,d)))),j)break;s=s.return}0<k.length&&(p=new v(p,b,null,t,h),m.push({event:p,listeners:k}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&t!==al&&(b=t.relatedTarget||t.fromElement)&&(wn(b)||b[He]))break e;if((v||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,v?(b=t.relatedTarget||t.toElement,v=c,b=b?wn(b):null,b!==null&&(j=Mn(b),b!==j||b.tag!==5&&b.tag!==6)&&(b=null)):(v=null,b=c),v!==b)){if(k=Ko,y="onMouseLeave",f="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(k=qo,y="onPointerLeave",f="onPointerEnter",s="pointer"),j=v==null?p:Fn(v),d=b==null?p:Fn(b),p=new k(y,s+"leave",v,t,h),p.target=j,p.relatedTarget=d,y=null,wn(h)===c&&(k=new k(f,s+"enter",b,t,h),k.target=d,k.relatedTarget=j,y=k),j=y,v&&b)n:{for(k=v,f=b,s=0,d=k;d;d=Dn(d))s++;for(d=0,y=f;y;y=Dn(y))d++;for(;0<s-d;)k=Dn(k),s--;for(;0<d-s;)f=Dn(f),d--;for(;s--;){if(k===f||f!==null&&k===f.alternate)break n;k=Dn(k),f=Dn(f)}k=null}else k=null;v!==null&&ui(m,p,v,k,!1),b!==null&&j!==null&&ui(m,j,b,k,!0)}}e:{if(p=c?Fn(c):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var _=Mf;else if(ei(p))if(Au)_=If;else{_=Lf;var x=Df}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(_=Rf);if(_&&(_=_(e,c))){ju(m,_,t,h);break e}x&&x(e,p,c),e==="focusout"&&(x=p._wrapperState)&&x.controlled&&p.type==="number"&&Za(p,"number",p.value)}switch(x=c?Fn(c):window,e){case"focusin":(ei(x)||x.contentEditable==="true")&&(jn=x,fl=c,Et=null);break;case"focusout":Et=fl=jn=null;break;case"mousedown":dl=!0;break;case"contextmenu":case"mouseup":case"dragend":dl=!1,li(m,t,h);break;case"selectionchange":if(Ff)break;case"keydown":case"keyup":li(m,t,h)}var C;if(no)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else In?Ru(e,t)&&(E="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(Lu&&t.locale!=="ko"&&(In||E!=="onCompositionStart"?E==="onCompositionEnd"&&In&&(C=Du()):(nn=h,Jl="value"in nn?nn.value:nn.textContent,In=!0)),x=jr(c,E),0<x.length&&(E=new Xo(E,e,null,t,h),m.push({event:E,listeners:x}),C?E.data=C:(C=Iu(t),C!==null&&(E.data=C)))),(C=Pf?Tf(e,t):Nf(e,t))&&(c=jr(c,"onBeforeInput"),0<c.length&&(h=new Xo("onBeforeInput","beforeinput",null,t,h),m.push({event:h,listeners:c}),h.data=C))}Gu(m,n)})}function Ut(e,n,t){return{instance:e,listener:n,currentTarget:t}}function jr(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Dt(e,t),l!=null&&r.unshift(Ut(e,l,a)),l=Dt(e,n),l!=null&&r.push(Ut(e,l,a))),e=e.return}return r}function Dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ui(e,n,t,r,a){for(var l=n._reactName,o=[];t!==null&&t!==r;){var i=t,u=i.alternate,c=i.stateNode;if(u!==null&&u===r)break;i.tag===5&&c!==null&&(i=c,a?(u=Dt(t,l),u!=null&&o.unshift(Ut(t,u,i))):a||(u=Dt(t,l),u!=null&&o.push(Ut(t,u,i)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Bf=/\r\n?/g,$f=/\u0000|\uFFFD/g;function si(e){return(typeof e=="string"?e:""+e).replace(Bf,`
`).replace($f,"")}function fr(e,n,t){if(n=si(n),si(e)!==n&&t)throw Error(g(425))}function Ar(){}var pl=null,ml=null;function hl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var gl=typeof setTimeout=="function"?setTimeout:void 0,Hf=typeof clearTimeout=="function"?clearTimeout:void 0,ci=typeof Promise=="function"?Promise:void 0,Qf=typeof queueMicrotask=="function"?queueMicrotask:typeof ci<"u"?function(e){return ci.resolve(null).then(e).catch(Yf)}:gl;function Yf(e){setTimeout(function(){throw e})}function Ra(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){e.removeChild(a),It(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);It(n)}function on(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function fi(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var it=Math.random().toString(36).slice(2),Ie="__reactFiber$"+it,Wt="__reactProps$"+it,He="__reactContainer$"+it,yl="__reactEvents$"+it,Gf="__reactListeners$"+it,Kf="__reactHandles$"+it;function wn(e){var n=e[Ie];if(n)return n;for(var t=e.parentNode;t;){if(n=t[He]||t[Ie]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=fi(e);e!==null;){if(t=e[Ie])return t;e=fi(e)}return n}e=t,t=e.parentNode}return null}function qt(e){return e=e[Ie]||e[He],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function la(e){return e[Wt]||null}var vl=[],Un=-1;function hn(e){return{current:e}}function I(e){0>Un||(e.current=vl[Un],vl[Un]=null,Un--)}function L(e,n){Un++,vl[Un]=e.current,e.current=n}var pn={},ae=hn(pn),fe=hn(!1),En=pn;function Zn(e,n){var t=e.type.contextTypes;if(!t)return pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in t)a[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function de(e){return e=e.childContextTypes,e!=null}function Fr(){I(fe),I(ae)}function di(e,n,t){if(ae.current!==pn)throw Error(g(168));L(ae,n),L(fe,t)}function Xu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in n))throw Error(g(108,Mc(e)||"Unknown",a));return W({},t,r)}function Ur(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,En=ae.current,L(ae,e),L(fe,fe.current),!0}function pi(e,n,t){var r=e.stateNode;if(!r)throw Error(g(169));t?(e=Xu(e,n,En),r.__reactInternalMemoizedMergedChildContext=e,I(fe),I(ae),L(ae,e)):I(fe),L(fe,t)}var Ue=null,oa=!1,Ia=!1;function qu(e){Ue===null?Ue=[e]:Ue.push(e)}function Xf(e){oa=!0,qu(e)}function gn(){if(!Ia&&Ue!==null){Ia=!0;var e=0,n=D;try{var t=Ue;for(D=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ue=null,oa=!1}catch(a){throw Ue!==null&&(Ue=Ue.slice(e+1)),Su(Gl,gn),a}finally{D=n,Ia=!1}}return null}var Wn=[],Vn=0,Wr=null,Vr=0,ke=[],we=0,Pn=null,We=1,Ve="";function bn(e,n){Wn[Vn++]=Vr,Wn[Vn++]=Wr,Wr=e,Vr=n}function Ju(e,n,t){ke[we++]=We,ke[we++]=Ve,ke[we++]=Pn,Pn=e;var r=We;e=Ve;var a=32-Oe(r)-1;r&=~(1<<a),t+=1;var l=32-Oe(n)+a;if(30<l){var o=a-a%5;l=(r&(1<<o)-1).toString(32),r>>=o,a-=o,We=1<<32-Oe(n)+a|t<<a|r,Ve=l+e}else We=1<<l|t<<a|r,Ve=e}function ro(e){e.return!==null&&(bn(e,1),Ju(e,1,0))}function ao(e){for(;e===Wr;)Wr=Wn[--Vn],Wn[Vn]=null,Vr=Wn[--Vn],Wn[Vn]=null;for(;e===Pn;)Pn=ke[--we],ke[we]=null,Ve=ke[--we],ke[we]=null,We=ke[--we],ke[we]=null}var ge=null,he=null,A=!1,ze=null;function Zu(e,n){var t=Se(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function mi(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ge=e,he=on(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ge=e,he=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Pn!==null?{id:We,overflow:Ve}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Se(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ge=e,he=null,!0):!1;default:return!1}}function bl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function kl(e){if(A){var n=he;if(n){var t=n;if(!mi(e,n)){if(bl(e))throw Error(g(418));n=on(t.nextSibling);var r=ge;n&&mi(e,n)?Zu(r,t):(e.flags=e.flags&-4097|2,A=!1,ge=e)}}else{if(bl(e))throw Error(g(418));e.flags=e.flags&-4097|2,A=!1,ge=e}}}function hi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function dr(e){if(e!==ge)return!1;if(!A)return hi(e),A=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!hl(e.type,e.memoizedProps)),n&&(n=he)){if(bl(e))throw es(),Error(g(418));for(;n;)Zu(e,n),n=on(n.nextSibling)}if(hi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){he=on(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}he=null}}else he=ge?on(e.stateNode.nextSibling):null;return!0}function es(){for(var e=he;e;)e=on(e.nextSibling)}function et(){he=ge=null,A=!1}function lo(e){ze===null?ze=[e]:ze.push(e)}var qf=Ge.ReactCurrentBatchConfig;function ht(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(g(309));var r=t.stateNode}if(!r)throw Error(g(147,e));var a=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var i=a.refs;o===null?delete i[l]:i[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(g(284));if(!t._owner)throw Error(g(290,e))}return e}function pr(e,n){throw e=Object.prototype.toString.call(n),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function gi(e){var n=e._init;return n(e._payload)}function ns(e){function n(f,s){if(e){var d=f.deletions;d===null?(f.deletions=[s],f.flags|=16):d.push(s)}}function t(f,s){if(!e)return null;for(;s!==null;)n(f,s),s=s.sibling;return null}function r(f,s){for(f=new Map;s!==null;)s.key!==null?f.set(s.key,s):f.set(s.index,s),s=s.sibling;return f}function a(f,s){return f=fn(f,s),f.index=0,f.sibling=null,f}function l(f,s,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<s?(f.flags|=2,s):d):(f.flags|=2,s)):(f.flags|=1048576,s)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function i(f,s,d,y){return s===null||s.tag!==6?(s=Ba(d,f.mode,y),s.return=f,s):(s=a(s,d),s.return=f,s)}function u(f,s,d,y){var _=d.type;return _===Rn?h(f,s,d.props.children,y,d.key):s!==null&&(s.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Xe&&gi(_)===s.type)?(y=a(s,d.props),y.ref=ht(f,s,d),y.return=f,y):(y=Nr(d.type,d.key,d.props,null,f.mode,y),y.ref=ht(f,s,d),y.return=f,y)}function c(f,s,d,y){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=$a(d,f.mode,y),s.return=f,s):(s=a(s,d.children||[]),s.return=f,s)}function h(f,s,d,y,_){return s===null||s.tag!==7?(s=Cn(d,f.mode,y,_),s.return=f,s):(s=a(s,d),s.return=f,s)}function m(f,s,d){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Ba(""+s,f.mode,d),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case tr:return d=Nr(s.type,s.key,s.props,null,f.mode,d),d.ref=ht(f,null,s),d.return=f,d;case Ln:return s=$a(s,f.mode,d),s.return=f,s;case Xe:var y=s._init;return m(f,y(s._payload),d)}if(bt(s)||ct(s))return s=Cn(s,f.mode,d,null),s.return=f,s;pr(f,s)}return null}function p(f,s,d,y){var _=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return _!==null?null:i(f,s,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case tr:return d.key===_?u(f,s,d,y):null;case Ln:return d.key===_?c(f,s,d,y):null;case Xe:return _=d._init,p(f,s,_(d._payload),y)}if(bt(d)||ct(d))return _!==null?null:h(f,s,d,y,null);pr(f,d)}return null}function v(f,s,d,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(d)||null,i(s,f,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case tr:return f=f.get(y.key===null?d:y.key)||null,u(s,f,y,_);case Ln:return f=f.get(y.key===null?d:y.key)||null,c(s,f,y,_);case Xe:var x=y._init;return v(f,s,d,x(y._payload),_)}if(bt(y)||ct(y))return f=f.get(d)||null,h(s,f,y,_,null);pr(s,y)}return null}function b(f,s,d,y){for(var _=null,x=null,C=s,E=s=0,B=null;C!==null&&E<d.length;E++){C.index>E?(B=C,C=null):B=C.sibling;var z=p(f,C,d[E],y);if(z===null){C===null&&(C=B);break}e&&C&&z.alternate===null&&n(f,C),s=l(z,s,E),x===null?_=z:x.sibling=z,x=z,C=B}if(E===d.length)return t(f,C),A&&bn(f,E),_;if(C===null){for(;E<d.length;E++)C=m(f,d[E],y),C!==null&&(s=l(C,s,E),x===null?_=C:x.sibling=C,x=C);return A&&bn(f,E),_}for(C=r(f,C);E<d.length;E++)B=v(C,f,E,d[E],y),B!==null&&(e&&B.alternate!==null&&C.delete(B.key===null?E:B.key),s=l(B,s,E),x===null?_=B:x.sibling=B,x=B);return e&&C.forEach(function(Ee){return n(f,Ee)}),A&&bn(f,E),_}function k(f,s,d,y){var _=ct(d);if(typeof _!="function")throw Error(g(150));if(d=_.call(d),d==null)throw Error(g(151));for(var x=_=null,C=s,E=s=0,B=null,z=d.next();C!==null&&!z.done;E++,z=d.next()){C.index>E?(B=C,C=null):B=C.sibling;var Ee=p(f,C,z.value,y);if(Ee===null){C===null&&(C=B);break}e&&C&&Ee.alternate===null&&n(f,C),s=l(Ee,s,E),x===null?_=Ee:x.sibling=Ee,x=Ee,C=B}if(z.done)return t(f,C),A&&bn(f,E),_;if(C===null){for(;!z.done;E++,z=d.next())z=m(f,z.value,y),z!==null&&(s=l(z,s,E),x===null?_=z:x.sibling=z,x=z);return A&&bn(f,E),_}for(C=r(f,C);!z.done;E++,z=d.next())z=v(C,f,E,z.value,y),z!==null&&(e&&z.alternate!==null&&C.delete(z.key===null?E:z.key),s=l(z,s,E),x===null?_=z:x.sibling=z,x=z);return e&&C.forEach(function(ut){return n(f,ut)}),A&&bn(f,E),_}function j(f,s,d,y){if(typeof d=="object"&&d!==null&&d.type===Rn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case tr:e:{for(var _=d.key,x=s;x!==null;){if(x.key===_){if(_=d.type,_===Rn){if(x.tag===7){t(f,x.sibling),s=a(x,d.props.children),s.return=f,f=s;break e}}else if(x.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Xe&&gi(_)===x.type){t(f,x.sibling),s=a(x,d.props),s.ref=ht(f,x,d),s.return=f,f=s;break e}t(f,x);break}else n(f,x);x=x.sibling}d.type===Rn?(s=Cn(d.props.children,f.mode,y,d.key),s.return=f,f=s):(y=Nr(d.type,d.key,d.props,null,f.mode,y),y.ref=ht(f,s,d),y.return=f,f=y)}return o(f);case Ln:e:{for(x=d.key;s!==null;){if(s.key===x)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){t(f,s.sibling),s=a(s,d.children||[]),s.return=f,f=s;break e}else{t(f,s);break}else n(f,s);s=s.sibling}s=$a(d,f.mode,y),s.return=f,f=s}return o(f);case Xe:return x=d._init,j(f,s,x(d._payload),y)}if(bt(d))return b(f,s,d,y);if(ct(d))return k(f,s,d,y);pr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,s!==null&&s.tag===6?(t(f,s.sibling),s=a(s,d),s.return=f,f=s):(t(f,s),s=Ba(d,f.mode,y),s.return=f,f=s),o(f)):t(f,s)}return j}var nt=ns(!0),ts=ns(!1),Br=hn(null),$r=null,Bn=null,oo=null;function io(){oo=Bn=$r=null}function uo(e){var n=Br.current;I(Br),e._currentValue=n}function wl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Xn(e,n){$r=e,oo=Bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ce=!0),e.firstContext=null)}function xe(e){var n=e._currentValue;if(oo!==e)if(e={context:e,memoizedValue:n,next:null},Bn===null){if($r===null)throw Error(g(308));Bn=e,$r.dependencies={lanes:0,firstContext:e}}else Bn=Bn.next=e;return n}var Sn=null;function so(e){Sn===null?Sn=[e]:Sn.push(e)}function rs(e,n,t,r){var a=n.interleaved;return a===null?(t.next=t,so(n)):(t.next=a.next,a.next=t),n.interleaved=t,Qe(e,r)}function Qe(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var qe=!1;function co(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function as(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Be(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function un(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,Qe(e,t)}return a=r.interleaved,a===null?(n.next=n,so(r)):(n.next=a.next,a.next=n),r.interleaved=n,Qe(e,t)}function _r(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Kl(e,t)}}function yi(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?a=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?a=l=n:l=l.next=n}else a=l=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Hr(e,n,t,r){var a=e.updateQueue;qe=!1;var l=a.firstBaseUpdate,o=a.lastBaseUpdate,i=a.shared.pending;if(i!==null){a.shared.pending=null;var u=i,c=u.next;u.next=null,o===null?l=c:o.next=c,o=u;var h=e.alternate;h!==null&&(h=h.updateQueue,i=h.lastBaseUpdate,i!==o&&(i===null?h.firstBaseUpdate=c:i.next=c,h.lastBaseUpdate=u))}if(l!==null){var m=a.baseState;o=0,h=c=u=null,i=l;do{var p=i.lane,v=i.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:v,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var b=e,k=i;switch(p=n,v=t,k.tag){case 1:if(b=k.payload,typeof b=="function"){m=b.call(v,m,p);break e}m=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=k.payload,p=typeof b=="function"?b.call(v,m,p):b,p==null)break e;m=W({},m,p);break e;case 2:qe=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,p=a.effects,p===null?a.effects=[i]:p.push(i))}else v={eventTime:v,lane:p,tag:i.tag,payload:i.payload,callback:i.callback,next:null},h===null?(c=h=v,u=m):h=h.next=v,o|=p;if(i=i.next,i===null){if(i=a.shared.pending,i===null)break;p=i,i=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);if(h===null&&(u=m),a.baseState=u,a.firstBaseUpdate=c,a.lastBaseUpdate=h,n=a.shared.interleaved,n!==null){a=n;do o|=a.lane,a=a.next;while(a!==n)}else l===null&&(a.shared.lanes=0);Nn|=o,e.lanes=o,e.memoizedState=m}}function vi(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(g(191,a));a.call(r)}}}var Jt={},Ae=hn(Jt),Vt=hn(Jt),Bt=hn(Jt);function _n(e){if(e===Jt)throw Error(g(174));return e}function fo(e,n){switch(L(Bt,n),L(Vt,e),L(Ae,Jt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:nl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=nl(n,e)}I(Ae),L(Ae,n)}function tt(){I(Ae),I(Vt),I(Bt)}function ls(e){_n(Bt.current);var n=_n(Ae.current),t=nl(n,e.type);n!==t&&(L(Vt,e),L(Ae,t))}function po(e){Vt.current===e&&(I(Ae),I(Vt))}var F=hn(0);function Qr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ja=[];function mo(){for(var e=0;e<ja.length;e++)ja[e]._workInProgressVersionPrimary=null;ja.length=0}var xr=Ge.ReactCurrentDispatcher,Aa=Ge.ReactCurrentBatchConfig,Tn=0,U=null,Y=null,X=null,Yr=!1,Pt=!1,$t=0,Jf=0;function ne(){throw Error(g(321))}function ho(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!De(e[t],n[t]))return!1;return!0}function go(e,n,t,r,a,l){if(Tn=l,U=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,xr.current=e===null||e.memoizedState===null?td:rd,e=t(r,a),Pt){l=0;do{if(Pt=!1,$t=0,25<=l)throw Error(g(301));l+=1,X=Y=null,n.updateQueue=null,xr.current=ad,e=t(r,a)}while(Pt)}if(xr.current=Gr,n=Y!==null&&Y.next!==null,Tn=0,X=Y=U=null,Yr=!1,n)throw Error(g(300));return e}function yo(){var e=$t!==0;return $t=0,e}function Re(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?U.memoizedState=X=e:X=X.next=e,X}function Ce(){if(Y===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var n=X===null?U.memoizedState:X.next;if(n!==null)X=n,Y=e;else{if(e===null)throw Error(g(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},X===null?U.memoizedState=X=e:X=X.next=e}return X}function Ht(e,n){return typeof n=="function"?n(e):n}function Fa(e){var n=Ce(),t=n.queue;if(t===null)throw Error(g(311));t.lastRenderedReducer=e;var r=Y,a=r.baseQueue,l=t.pending;if(l!==null){if(a!==null){var o=a.next;a.next=l.next,l.next=o}r.baseQueue=a=l,t.pending=null}if(a!==null){l=a.next,r=r.baseState;var i=o=null,u=null,c=l;do{var h=c.lane;if((Tn&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(i=u=m,o=r):u=u.next=m,U.lanes|=h,Nn|=h}c=c.next}while(c!==null&&c!==l);u===null?o=r:u.next=i,De(r,n.memoizedState)||(ce=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){a=e;do l=a.lane,U.lanes|=l,Nn|=l,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ua(e){var n=Ce(),t=n.queue;if(t===null)throw Error(g(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,l=n.memoizedState;if(a!==null){t.pending=null;var o=a=a.next;do l=e(l,o.action),o=o.next;while(o!==a);De(l,n.memoizedState)||(ce=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function os(){}function is(e,n){var t=U,r=Ce(),a=n(),l=!De(r.memoizedState,a);if(l&&(r.memoizedState=a,ce=!0),r=r.queue,vo(cs.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||X!==null&&X.memoizedState.tag&1){if(t.flags|=2048,Qt(9,ss.bind(null,t,r,a,n),void 0,null),q===null)throw Error(g(349));Tn&30||us(t,n,a)}return a}function us(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=U.updateQueue,n===null?(n={lastEffect:null,stores:null},U.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ss(e,n,t,r){n.value=t,n.getSnapshot=r,fs(n)&&ds(e)}function cs(e,n,t){return t(function(){fs(n)&&ds(e)})}function fs(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!De(e,t)}catch{return!0}}function ds(e){var n=Qe(e,1);n!==null&&Me(n,e,1,-1)}function bi(e){var n=Re();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:e},n.queue=e,e=e.dispatch=nd.bind(null,U,e),[n.memoizedState,e]}function Qt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=U.updateQueue,n===null?(n={lastEffect:null,stores:null},U.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function ps(){return Ce().memoizedState}function Cr(e,n,t,r){var a=Re();U.flags|=e,a.memoizedState=Qt(1|n,t,void 0,r===void 0?null:r)}function ia(e,n,t,r){var a=Ce();r=r===void 0?null:r;var l=void 0;if(Y!==null){var o=Y.memoizedState;if(l=o.destroy,r!==null&&ho(r,o.deps)){a.memoizedState=Qt(n,t,l,r);return}}U.flags|=e,a.memoizedState=Qt(1|n,t,l,r)}function ki(e,n){return Cr(8390656,8,e,n)}function vo(e,n){return ia(2048,8,e,n)}function ms(e,n){return ia(4,2,e,n)}function hs(e,n){return ia(4,4,e,n)}function gs(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ys(e,n,t){return t=t!=null?t.concat([e]):null,ia(4,4,gs.bind(null,n,e),t)}function bo(){}function vs(e,n){var t=Ce();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ho(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function bs(e,n){var t=Ce();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ho(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function ks(e,n,t){return Tn&21?(De(t,n)||(t=Cu(),U.lanes|=t,Nn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=t)}function Zf(e,n){var t=D;D=t!==0&&4>t?t:4,e(!0);var r=Aa.transition;Aa.transition={};try{e(!1),n()}finally{D=t,Aa.transition=r}}function ws(){return Ce().memoizedState}function ed(e,n,t){var r=cn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ss(e))_s(n,t);else if(t=rs(e,n,t,r),t!==null){var a=oe();Me(t,e,r,a),xs(t,n,r)}}function nd(e,n,t){var r=cn(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ss(e))_s(n,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,i=l(o,t);if(a.hasEagerState=!0,a.eagerState=i,De(i,o)){var u=n.interleaved;u===null?(a.next=a,so(n)):(a.next=u.next,u.next=a),n.interleaved=a;return}}catch{}finally{}t=rs(e,n,a,r),t!==null&&(a=oe(),Me(t,e,r,a),xs(t,n,r))}}function Ss(e){var n=e.alternate;return e===U||n!==null&&n===U}function _s(e,n){Pt=Yr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function xs(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Kl(e,t)}}var Gr={readContext:xe,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},td={readContext:xe,useCallback:function(e,n){return Re().memoizedState=[e,n===void 0?null:n],e},useContext:xe,useEffect:ki,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Cr(4194308,4,gs.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Cr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Cr(4,2,e,n)},useMemo:function(e,n){var t=Re();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Re();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ed.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var n=Re();return e={current:e},n.memoizedState=e},useState:bi,useDebugValue:bo,useDeferredValue:function(e){return Re().memoizedState=e},useTransition:function(){var e=bi(!1),n=e[0];return e=Zf.bind(null,e[1]),Re().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=U,a=Re();if(A){if(t===void 0)throw Error(g(407));t=t()}else{if(t=n(),q===null)throw Error(g(349));Tn&30||us(r,n,t)}a.memoizedState=t;var l={value:t,getSnapshot:n};return a.queue=l,ki(cs.bind(null,r,l,e),[e]),r.flags|=2048,Qt(9,ss.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Re(),n=q.identifierPrefix;if(A){var t=Ve,r=We;t=(r&~(1<<32-Oe(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=$t++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Jf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},rd={readContext:xe,useCallback:vs,useContext:xe,useEffect:vo,useImperativeHandle:ys,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Fa,useRef:ps,useState:function(){return Fa(Ht)},useDebugValue:bo,useDeferredValue:function(e){var n=Ce();return ks(n,Y.memoizedState,e)},useTransition:function(){var e=Fa(Ht)[0],n=Ce().memoizedState;return[e,n]},useMutableSource:os,useSyncExternalStore:is,useId:ws,unstable_isNewReconciler:!1},ad={readContext:xe,useCallback:vs,useContext:xe,useEffect:vo,useImperativeHandle:ys,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Ua,useRef:ps,useState:function(){return Ua(Ht)},useDebugValue:bo,useDeferredValue:function(e){var n=Ce();return Y===null?n.memoizedState=e:ks(n,Y.memoizedState,e)},useTransition:function(){var e=Ua(Ht)[0],n=Ce().memoizedState;return[e,n]},useMutableSource:os,useSyncExternalStore:is,useId:ws,unstable_isNewReconciler:!1};function Te(e,n){if(e&&e.defaultProps){n=W({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Sl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:W({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ua={isMounted:function(e){return(e=e._reactInternals)?Mn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=oe(),a=cn(e),l=Be(r,a);l.payload=n,t!=null&&(l.callback=t),n=un(e,l,a),n!==null&&(Me(n,e,a,r),_r(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=oe(),a=cn(e),l=Be(r,a);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=un(e,l,a),n!==null&&(Me(n,e,a,r),_r(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=oe(),r=cn(e),a=Be(t,r);a.tag=2,n!=null&&(a.callback=n),n=un(e,a,r),n!==null&&(Me(n,e,r,t),_r(n,e,r))}};function wi(e,n,t,r,a,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!At(t,r)||!At(a,l):!0}function Cs(e,n,t){var r=!1,a=pn,l=n.contextType;return typeof l=="object"&&l!==null?l=xe(l):(a=de(n)?En:ae.current,r=n.contextTypes,l=(r=r!=null)?Zn(e,a):pn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ua,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),n}function Si(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ua.enqueueReplaceState(n,n.state,null)}function _l(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},co(e);var l=n.contextType;typeof l=="object"&&l!==null?a.context=xe(l):(l=de(n)?En:ae.current,a.context=Zn(e,l)),a.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Sl(e,n,l,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&ua.enqueueReplaceState(a,a.state,null),Hr(e,t,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function rt(e,n){try{var t="",r=n;do t+=Oc(r),r=r.return;while(r);var a=t}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:a,digest:null}}function Wa(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function xl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var ld=typeof WeakMap=="function"?WeakMap:Map;function Es(e,n,t){t=Be(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Xr||(Xr=!0,Dl=r),xl(e,n)},t}function Ps(e,n,t){t=Be(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){xl(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){xl(e,n),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function _i(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new ld;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=bd.bind(null,e,n,t),n.then(e,e))}function xi(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ci(e,n,t,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Be(-1,1),n.tag=2,un(t,n,1))),t.lanes|=1),e)}var od=Ge.ReactCurrentOwner,ce=!1;function le(e,n,t,r){n.child=e===null?ts(n,null,t,r):nt(n,e.child,t,r)}function Ei(e,n,t,r,a){t=t.render;var l=n.ref;return Xn(n,a),r=go(e,n,t,r,l,a),t=yo(),e!==null&&!ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Ye(e,n,a)):(A&&t&&ro(n),n.flags|=1,le(e,n,r,a),n.child)}function Pi(e,n,t,r,a){if(e===null){var l=t.type;return typeof l=="function"&&!Po(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Ts(e,n,l,r,a)):(e=Nr(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&a)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:At,t(o,r)&&e.ref===n.ref)return Ye(e,n,a)}return n.flags|=1,e=fn(l,r),e.ref=n.ref,e.return=n,n.child=e}function Ts(e,n,t,r,a){if(e!==null){var l=e.memoizedProps;if(At(l,r)&&e.ref===n.ref)if(ce=!1,n.pendingProps=r=l,(e.lanes&a)!==0)e.flags&131072&&(ce=!0);else return n.lanes=e.lanes,Ye(e,n,a)}return Cl(e,n,t,r,a)}function Ns(e,n,t){var r=n.pendingProps,a=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},L(Hn,me),me|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,L(Hn,me),me|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,L(Hn,me),me|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,L(Hn,me),me|=r;return le(e,n,a,t),n.child}function zs(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Cl(e,n,t,r,a){var l=de(t)?En:ae.current;return l=Zn(n,l),Xn(n,a),t=go(e,n,t,r,l,a),r=yo(),e!==null&&!ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Ye(e,n,a)):(A&&r&&ro(n),n.flags|=1,le(e,n,t,a),n.child)}function Ti(e,n,t,r,a){if(de(t)){var l=!0;Ur(n)}else l=!1;if(Xn(n,a),n.stateNode===null)Er(e,n),Cs(n,t,r),_l(n,t,r,a),r=!0;else if(e===null){var o=n.stateNode,i=n.memoizedProps;o.props=i;var u=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=xe(c):(c=de(t)?En:ae.current,c=Zn(n,c));var h=t.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==r||u!==c)&&Si(n,o,r,c),qe=!1;var p=n.memoizedState;o.state=p,Hr(n,r,o,a),u=n.memoizedState,i!==r||p!==u||fe.current||qe?(typeof h=="function"&&(Sl(n,t,h,r),u=n.memoizedState),(i=qe||wi(n,t,i,r,p,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),o.props=r,o.state=u,o.context=c,r=i):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,as(e,n),i=n.memoizedProps,c=n.type===n.elementType?i:Te(n.type,i),o.props=c,m=n.pendingProps,p=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=xe(u):(u=de(t)?En:ae.current,u=Zn(n,u));var v=t.getDerivedStateFromProps;(h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==m||p!==u)&&Si(n,o,r,u),qe=!1,p=n.memoizedState,o.state=p,Hr(n,r,o,a);var b=n.memoizedState;i!==m||p!==b||fe.current||qe?(typeof v=="function"&&(Sl(n,t,v,r),b=n.memoizedState),(c=qe||wi(n,t,c,r,p,b,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,b,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,b,u)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=b),o.props=r,o.state=b,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return El(e,n,t,r,l,a)}function El(e,n,t,r,a,l){zs(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return a&&pi(n,t,!1),Ye(e,n,l);r=n.stateNode,od.current=n;var i=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=nt(n,e.child,null,l),n.child=nt(n,null,i,l)):le(e,n,i,l),n.memoizedState=r.state,a&&pi(n,t,!0),n.child}function Os(e){var n=e.stateNode;n.pendingContext?di(e,n.pendingContext,n.pendingContext!==n.context):n.context&&di(e,n.context,!1),fo(e,n.containerInfo)}function Ni(e,n,t,r,a){return et(),lo(a),n.flags|=256,le(e,n,t,r),n.child}var Pl={dehydrated:null,treeContext:null,retryLane:0};function Tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ms(e,n,t){var r=n.pendingProps,a=F.current,l=!1,o=(n.flags&128)!==0,i;if((i=o)||(i=e!==null&&e.memoizedState===null?!1:(a&2)!==0),i?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),L(F,a&1),e===null)return kl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=fa(o,r,0,null),e=Cn(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Tl(t),n.memoizedState=Pl,e):ko(n,o));if(a=e.memoizedState,a!==null&&(i=a.dehydrated,i!==null))return id(e,n,o,r,i,a,t);if(l){l=r.fallback,o=n.mode,a=e.child,i=a.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&n.child!==a?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=fn(a,u),r.subtreeFlags=a.subtreeFlags&14680064),i!==null?l=fn(i,l):(l=Cn(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?Tl(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=Pl,r}return l=e.child,e=l.sibling,r=fn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ko(e,n){return n=fa({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function mr(e,n,t,r){return r!==null&&lo(r),nt(n,e.child,null,t),e=ko(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function id(e,n,t,r,a,l,o){if(t)return n.flags&256?(n.flags&=-257,r=Wa(Error(g(422))),mr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,a=n.mode,r=fa({mode:"visible",children:r.children},a,0,null),l=Cn(l,a,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&nt(n,e.child,null,o),n.child.memoizedState=Tl(o),n.memoizedState=Pl,l);if(!(n.mode&1))return mr(e,n,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var i=r.dgst;return r=i,l=Error(g(419)),r=Wa(l,r,void 0),mr(e,n,o,r)}if(i=(o&e.childLanes)!==0,ce||i){if(r=q,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,Qe(e,a),Me(r,e,a,-1))}return Eo(),r=Wa(Error(g(421))),mr(e,n,o,r)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=kd.bind(null,e),a._reactRetry=n,null):(e=l.treeContext,he=on(a.nextSibling),ge=n,A=!0,ze=null,e!==null&&(ke[we++]=We,ke[we++]=Ve,ke[we++]=Pn,We=e.id,Ve=e.overflow,Pn=n),n=ko(n,r.children),n.flags|=4096,n)}function zi(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),wl(e.return,n,t)}function Va(e,n,t,r,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=a)}function Ds(e,n,t){var r=n.pendingProps,a=r.revealOrder,l=r.tail;if(le(e,n,r.children,t),r=F.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zi(e,t,n);else if(e.tag===19)zi(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(L(F,r),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&Qr(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),Va(n,!1,a,t,l);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&Qr(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}Va(n,!0,t,null,l);break;case"together":Va(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Er(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ye(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Nn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(g(153));if(n.child!==null){for(e=n.child,t=fn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=fn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function ud(e,n,t){switch(n.tag){case 3:Os(n),et();break;case 5:ls(n);break;case 1:de(n.type)&&Ur(n);break;case 4:fo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;L(Br,r._currentValue),r._currentValue=a;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(L(F,F.current&1),n.flags|=128,null):t&n.child.childLanes?Ms(e,n,t):(L(F,F.current&1),e=Ye(e,n,t),e!==null?e.sibling:null);L(F,F.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ds(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),L(F,F.current),r)break;return null;case 22:case 23:return n.lanes=0,Ns(e,n,t)}return Ye(e,n,t)}var Ls,Nl,Rs,Is;Ls=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Nl=function(){};Rs=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,_n(Ae.current);var l=null;switch(t){case"input":a=qa(e,a),r=qa(e,r),l=[];break;case"select":a=W({},a,{value:void 0}),r=W({},r,{value:void 0}),l=[];break;case"textarea":a=el(e,a),r=el(e,r),l=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ar)}tl(t,r);var o;t=null;for(c in a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&a[c]!=null)if(c==="style"){var i=a[c];for(o in i)i.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ot.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var u=r[c];if(i=a!=null?a[c]:void 0,r.hasOwnProperty(c)&&u!==i&&(u!=null||i!=null))if(c==="style")if(i){for(o in i)!i.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&i[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(l||(l=[]),l.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,i=i?i.__html:void 0,u!=null&&i!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ot.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&R("scroll",e),l||i===u||(l=[])):(l=l||[]).push(c,u))}t&&(l=l||[]).push("style",t);var c=l;(n.updateQueue=c)&&(n.flags|=4)}};Is=function(e,n,t,r){t!==r&&(n.flags|=4)};function gt(e,n){if(!A)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function te(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function sd(e,n,t){var r=n.pendingProps;switch(ao(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(n),null;case 1:return de(n.type)&&Fr(),te(n),null;case 3:return r=n.stateNode,tt(),I(fe),I(ae),mo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(dr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,ze!==null&&(Il(ze),ze=null))),Nl(e,n),te(n),null;case 5:po(n);var a=_n(Bt.current);if(t=n.type,e!==null&&n.stateNode!=null)Rs(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(g(166));return te(n),null}if(e=_n(Ae.current),dr(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[Ie]=n,r[Wt]=l,e=(n.mode&1)!==0,t){case"dialog":R("cancel",r),R("close",r);break;case"iframe":case"object":case"embed":R("load",r);break;case"video":case"audio":for(a=0;a<wt.length;a++)R(wt[a],r);break;case"source":R("error",r);break;case"img":case"image":case"link":R("error",r),R("load",r);break;case"details":R("toggle",r);break;case"input":Fo(r,l),R("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},R("invalid",r);break;case"textarea":Wo(r,l),R("invalid",r)}tl(t,l),a=null;for(var o in l)if(l.hasOwnProperty(o)){var i=l[o];o==="children"?typeof i=="string"?r.textContent!==i&&(l.suppressHydrationWarning!==!0&&fr(r.textContent,i,e),a=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(l.suppressHydrationWarning!==!0&&fr(r.textContent,i,e),a=["children",""+i]):Ot.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&R("scroll",r)}switch(t){case"input":rr(r),Uo(r,l,!0);break;case"textarea":rr(r),Vo(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Ar)}r=a,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Ie]=n,e[Wt]=r,Ls(e,n,!1,!1),n.stateNode=e;e:{switch(o=rl(t,r),t){case"dialog":R("cancel",e),R("close",e),a=r;break;case"iframe":case"object":case"embed":R("load",e),a=r;break;case"video":case"audio":for(a=0;a<wt.length;a++)R(wt[a],e);a=r;break;case"source":R("error",e),a=r;break;case"img":case"image":case"link":R("error",e),R("load",e),a=r;break;case"details":R("toggle",e),a=r;break;case"input":Fo(e,r),a=qa(e,r),R("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=W({},r,{value:void 0}),R("invalid",e);break;case"textarea":Wo(e,r),a=el(e,r),R("invalid",e);break;default:a=r}tl(t,a),i=a;for(l in i)if(i.hasOwnProperty(l)){var u=i[l];l==="style"?pu(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&fu(e,u)):l==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Mt(e,u):typeof u=="number"&&Mt(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ot.hasOwnProperty(l)?u!=null&&l==="onScroll"&&R("scroll",e):u!=null&&Bl(e,l,u,o))}switch(t){case"input":rr(e),Uo(e,r,!1);break;case"textarea":rr(e),Vo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Qn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ar)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return te(n),null;case 6:if(e&&n.stateNode!=null)Is(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(g(166));if(t=_n(Bt.current),_n(Ae.current),dr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ie]=n,(l=r.nodeValue!==t)&&(e=ge,e!==null))switch(e.tag){case 3:fr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ie]=n,n.stateNode=r}return te(n),null;case 13:if(I(F),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&he!==null&&n.mode&1&&!(n.flags&128))es(),et(),n.flags|=98560,l=!1;else if(l=dr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(g(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(g(317));l[Ie]=n}else et(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;te(n),l=!1}else ze!==null&&(Il(ze),ze=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||F.current&1?G===0&&(G=3):Eo())),n.updateQueue!==null&&(n.flags|=4),te(n),null);case 4:return tt(),Nl(e,n),e===null&&Ft(n.stateNode.containerInfo),te(n),null;case 10:return uo(n.type._context),te(n),null;case 17:return de(n.type)&&Fr(),te(n),null;case 19:if(I(F),l=n.memoizedState,l===null)return te(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)gt(l,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Qr(e),o!==null){for(n.flags|=128,gt(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return L(F,F.current&1|2),n.child}e=e.sibling}l.tail!==null&&H()>at&&(n.flags|=128,r=!0,gt(l,!1),n.lanes=4194304)}else{if(!r)if(e=Qr(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),gt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!A)return te(n),null}else 2*H()-l.renderingStartTime>at&&t!==1073741824&&(n.flags|=128,r=!0,gt(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=H(),n.sibling=null,t=F.current,L(F,r?t&1|2:t&1),n):(te(n),null);case 22:case 23:return Co(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?me&1073741824&&(te(n),n.subtreeFlags&6&&(n.flags|=8192)):te(n),null;case 24:return null;case 25:return null}throw Error(g(156,n.tag))}function cd(e,n){switch(ao(n),n.tag){case 1:return de(n.type)&&Fr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return tt(),I(fe),I(ae),mo(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return po(n),null;case 13:if(I(F),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(g(340));et()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return I(F),null;case 4:return tt(),null;case 10:return uo(n.type._context),null;case 22:case 23:return Co(),null;case 24:return null;default:return null}}var hr=!1,re=!1,fd=typeof WeakSet=="function"?WeakSet:Set,w=null;function $n(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){V(e,n,r)}else t.current=null}function js(e,n,t){try{t()}catch(r){V(e,n,r)}}var Oi=!1;function dd(e,n){if(pl=Rr,e=Wu(),to(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,i=-1,u=-1,c=0,h=0,m=e,p=null;n:for(;;){for(var v;m!==t||a!==0&&m.nodeType!==3||(i=o+a),m!==l||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(v=m.firstChild)!==null;)p=m,m=v;for(;;){if(m===e)break n;if(p===t&&++c===a&&(i=o),p===l&&++h===r&&(u=o),(v=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=v}t=i===-1||u===-1?null:{start:i,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(ml={focusedElem:e,selectionRange:t},Rr=!1,w=n;w!==null;)if(n=w,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,w=e;else for(;w!==null;){n=w;try{var b=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var k=b.memoizedProps,j=b.memoizedState,f=n.stateNode,s=f.getSnapshotBeforeUpdate(n.elementType===n.type?k:Te(n.type,k),j);f.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(y){V(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,w=e;break}w=n.return}return b=Oi,Oi=!1,b}function Tt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&js(n,t,l)}a=a.next}while(a!==r)}}function sa(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function zl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function As(e){var n=e.alternate;n!==null&&(e.alternate=null,As(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ie],delete n[Wt],delete n[yl],delete n[Gf],delete n[Kf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fs(e){return e.tag===5||e.tag===3||e.tag===4}function Mi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ol(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ar));else if(r!==4&&(e=e.child,e!==null))for(Ol(e,n,t),e=e.sibling;e!==null;)Ol(e,n,t),e=e.sibling}function Ml(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ml(e,n,t),e=e.sibling;e!==null;)Ml(e,n,t),e=e.sibling}var J=null,Ne=!1;function Ke(e,n,t){for(t=t.child;t!==null;)Us(e,n,t),t=t.sibling}function Us(e,n,t){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(na,t)}catch{}switch(t.tag){case 5:re||$n(t,n);case 6:var r=J,a=Ne;J=null,Ke(e,n,t),J=r,Ne=a,J!==null&&(Ne?(e=J,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):J.removeChild(t.stateNode));break;case 18:J!==null&&(Ne?(e=J,t=t.stateNode,e.nodeType===8?Ra(e.parentNode,t):e.nodeType===1&&Ra(e,t),It(e)):Ra(J,t.stateNode));break;case 4:r=J,a=Ne,J=t.stateNode.containerInfo,Ne=!0,Ke(e,n,t),J=r,Ne=a;break;case 0:case 11:case 14:case 15:if(!re&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var l=a,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&js(t,n,o),a=a.next}while(a!==r)}Ke(e,n,t);break;case 1:if(!re&&($n(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(i){V(t,n,i)}Ke(e,n,t);break;case 21:Ke(e,n,t);break;case 22:t.mode&1?(re=(r=re)||t.memoizedState!==null,Ke(e,n,t),re=r):Ke(e,n,t);break;default:Ke(e,n,t)}}function Di(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new fd),n.forEach(function(r){var a=wd.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}}function Pe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var l=e,o=n,i=o;e:for(;i!==null;){switch(i.tag){case 5:J=i.stateNode,Ne=!1;break e;case 3:J=i.stateNode.containerInfo,Ne=!0;break e;case 4:J=i.stateNode.containerInfo,Ne=!0;break e}i=i.return}if(J===null)throw Error(g(160));Us(l,o,a),J=null,Ne=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(c){V(a,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ws(n,e),n=n.sibling}function Ws(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(n,e),Le(e),r&4){try{Tt(3,e,e.return),sa(3,e)}catch(k){V(e,e.return,k)}try{Tt(5,e,e.return)}catch(k){V(e,e.return,k)}}break;case 1:Pe(n,e),Le(e),r&512&&t!==null&&$n(t,t.return);break;case 5:if(Pe(n,e),Le(e),r&512&&t!==null&&$n(t,t.return),e.flags&32){var a=e.stateNode;try{Mt(a,"")}catch(k){V(e,e.return,k)}}if(r&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,i=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{i==="input"&&l.type==="radio"&&l.name!=null&&uu(a,l),rl(i,o);var c=rl(i,l);for(o=0;o<u.length;o+=2){var h=u[o],m=u[o+1];h==="style"?pu(a,m):h==="dangerouslySetInnerHTML"?fu(a,m):h==="children"?Mt(a,m):Bl(a,h,m,c)}switch(i){case"input":Ja(a,l);break;case"textarea":su(a,l);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?Qn(a,!!l.multiple,v,!1):p!==!!l.multiple&&(l.defaultValue!=null?Qn(a,!!l.multiple,l.defaultValue,!0):Qn(a,!!l.multiple,l.multiple?[]:"",!1))}a[Wt]=l}catch(k){V(e,e.return,k)}}break;case 6:if(Pe(n,e),Le(e),r&4){if(e.stateNode===null)throw Error(g(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(k){V(e,e.return,k)}}break;case 3:if(Pe(n,e),Le(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{It(n.containerInfo)}catch(k){V(e,e.return,k)}break;case 4:Pe(n,e),Le(e);break;case 13:Pe(n,e),Le(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(_o=H())),r&4&&Di(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(re=(c=re)||h,Pe(n,e),re=c):Pe(n,e),Le(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(w=e,h=e.child;h!==null;){for(m=w=h;w!==null;){switch(p=w,v=p.child,p.tag){case 0:case 11:case 14:case 15:Tt(4,p,p.return);break;case 1:$n(p,p.return);var b=p.stateNode;if(typeof b.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,b.props=n.memoizedProps,b.state=n.memoizedState,b.componentWillUnmount()}catch(k){V(r,t,k)}}break;case 5:$n(p,p.return);break;case 22:if(p.memoizedState!==null){Ri(m);continue}}v!==null?(v.return=p,w=v):Ri(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{a=m.stateNode,c?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(i=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,i.style.display=du("display",o))}catch(k){V(e,e.return,k)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(k){V(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Pe(n,e),Le(e),r&4&&Di(e);break;case 21:break;default:Pe(n,e),Le(e)}}function Le(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Fs(t)){var r=t;break e}t=t.return}throw Error(g(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Mt(a,""),r.flags&=-33);var l=Mi(e);Ml(e,l,a);break;case 3:case 4:var o=r.stateNode.containerInfo,i=Mi(e);Ol(e,i,o);break;default:throw Error(g(161))}}catch(u){V(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function pd(e,n,t){w=e,Vs(e)}function Vs(e,n,t){for(var r=(e.mode&1)!==0;w!==null;){var a=w,l=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||hr;if(!o){var i=a.alternate,u=i!==null&&i.memoizedState!==null||re;i=hr;var c=re;if(hr=o,(re=u)&&!c)for(w=a;w!==null;)o=w,u=o.child,o.tag===22&&o.memoizedState!==null?Ii(a):u!==null?(u.return=o,w=u):Ii(a);for(;l!==null;)w=l,Vs(l),l=l.sibling;w=a,hr=i,re=c}Li(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,w=l):Li(e)}}function Li(e){for(;w!==null;){var n=w;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:re||sa(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!re)if(t===null)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:Te(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&vi(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}vi(n,o,t)}break;case 5:var i=n.stateNode;if(t===null&&n.flags&4){t=i;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&It(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}re||n.flags&512&&zl(n)}catch(p){V(n,n.return,p)}}if(n===e){w=null;break}if(t=n.sibling,t!==null){t.return=n.return,w=t;break}w=n.return}}function Ri(e){for(;w!==null;){var n=w;if(n===e){w=null;break}var t=n.sibling;if(t!==null){t.return=n.return,w=t;break}w=n.return}}function Ii(e){for(;w!==null;){var n=w;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{sa(4,n)}catch(u){V(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var a=n.return;try{r.componentDidMount()}catch(u){V(n,a,u)}}var l=n.return;try{zl(n)}catch(u){V(n,l,u)}break;case 5:var o=n.return;try{zl(n)}catch(u){V(n,o,u)}}}catch(u){V(n,n.return,u)}if(n===e){w=null;break}var i=n.sibling;if(i!==null){i.return=n.return,w=i;break}w=n.return}}var md=Math.ceil,Kr=Ge.ReactCurrentDispatcher,wo=Ge.ReactCurrentOwner,_e=Ge.ReactCurrentBatchConfig,M=0,q=null,Q=null,Z=0,me=0,Hn=hn(0),G=0,Yt=null,Nn=0,ca=0,So=0,Nt=null,se=null,_o=0,at=1/0,Fe=null,Xr=!1,Dl=null,sn=null,gr=!1,tn=null,qr=0,zt=0,Ll=null,Pr=-1,Tr=0;function oe(){return M&6?H():Pr!==-1?Pr:Pr=H()}function cn(e){return e.mode&1?M&2&&Z!==0?Z&-Z:qf.transition!==null?(Tr===0&&(Tr=Cu()),Tr):(e=D,e!==0||(e=window.event,e=e===void 0?16:Mu(e.type)),e):1}function Me(e,n,t,r){if(50<zt)throw zt=0,Ll=null,Error(g(185));Kt(e,t,r),(!(M&2)||e!==q)&&(e===q&&(!(M&2)&&(ca|=t),G===4&&Ze(e,Z)),pe(e,r),t===1&&M===0&&!(n.mode&1)&&(at=H()+500,oa&&gn()))}function pe(e,n){var t=e.callbackNode;Xc(e,n);var r=Lr(e,e===q?Z:0);if(r===0)t!==null&&Ho(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ho(t),n===1)e.tag===0?Xf(ji.bind(null,e)):qu(ji.bind(null,e)),Qf(function(){!(M&6)&&gn()}),t=null;else{switch(Eu(r)){case 1:t=Gl;break;case 4:t=_u;break;case 16:t=Dr;break;case 536870912:t=xu;break;default:t=Dr}t=Xs(t,Bs.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Bs(e,n){if(Pr=-1,Tr=0,M&6)throw Error(g(327));var t=e.callbackNode;if(qn()&&e.callbackNode!==t)return null;var r=Lr(e,e===q?Z:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Jr(e,r);else{n=r;var a=M;M|=2;var l=Hs();(q!==e||Z!==n)&&(Fe=null,at=H()+500,xn(e,n));do try{yd();break}catch(i){$s(e,i)}while(!0);io(),Kr.current=l,M=a,Q!==null?n=0:(q=null,Z=0,n=G)}if(n!==0){if(n===2&&(a=ul(e),a!==0&&(r=a,n=Rl(e,a))),n===1)throw t=Yt,xn(e,0),Ze(e,r),pe(e,H()),t;if(n===6)Ze(e,r);else{if(a=e.current.alternate,!(r&30)&&!hd(a)&&(n=Jr(e,r),n===2&&(l=ul(e),l!==0&&(r=l,n=Rl(e,l))),n===1))throw t=Yt,xn(e,0),Ze(e,r),pe(e,H()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(g(345));case 2:kn(e,se,Fe);break;case 3:if(Ze(e,r),(r&130023424)===r&&(n=_o+500-H(),10<n)){if(Lr(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){oe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=gl(kn.bind(null,e,se,Fe),n);break}kn(e,se,Fe);break;case 4:if(Ze(e,r),(r&4194240)===r)break;for(n=e.eventTimes,a=-1;0<r;){var o=31-Oe(r);l=1<<o,o=n[o],o>a&&(a=o),r&=~l}if(r=a,r=H()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*md(r/1960))-r,10<r){e.timeoutHandle=gl(kn.bind(null,e,se,Fe),r);break}kn(e,se,Fe);break;case 5:kn(e,se,Fe);break;default:throw Error(g(329))}}}return pe(e,H()),e.callbackNode===t?Bs.bind(null,e):null}function Rl(e,n){var t=Nt;return e.current.memoizedState.isDehydrated&&(xn(e,n).flags|=256),e=Jr(e,n),e!==2&&(n=se,se=t,n!==null&&Il(n)),e}function Il(e){se===null?se=e:se.push.apply(se,e)}function hd(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],l=a.getSnapshot;a=a.value;try{if(!De(l(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ze(e,n){for(n&=~So,n&=~ca,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Oe(n),r=1<<t;e[t]=-1,n&=~r}}function ji(e){if(M&6)throw Error(g(327));qn();var n=Lr(e,0);if(!(n&1))return pe(e,H()),null;var t=Jr(e,n);if(e.tag!==0&&t===2){var r=ul(e);r!==0&&(n=r,t=Rl(e,r))}if(t===1)throw t=Yt,xn(e,0),Ze(e,n),pe(e,H()),t;if(t===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,kn(e,se,Fe),pe(e,H()),null}function xo(e,n){var t=M;M|=1;try{return e(n)}finally{M=t,M===0&&(at=H()+500,oa&&gn())}}function zn(e){tn!==null&&tn.tag===0&&!(M&6)&&qn();var n=M;M|=1;var t=_e.transition,r=D;try{if(_e.transition=null,D=1,e)return e()}finally{D=r,_e.transition=t,M=n,!(M&6)&&gn()}}function Co(){me=Hn.current,I(Hn)}function xn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Hf(t)),Q!==null)for(t=Q.return;t!==null;){var r=t;switch(ao(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fr();break;case 3:tt(),I(fe),I(ae),mo();break;case 5:po(r);break;case 4:tt();break;case 13:I(F);break;case 19:I(F);break;case 10:uo(r.type._context);break;case 22:case 23:Co()}t=t.return}if(q=e,Q=e=fn(e.current,null),Z=me=n,G=0,Yt=null,So=ca=Nn=0,se=Nt=null,Sn!==null){for(n=0;n<Sn.length;n++)if(t=Sn[n],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=a,r.next=o}t.pending=r}Sn=null}return e}function $s(e,n){do{var t=Q;try{if(io(),xr.current=Gr,Yr){for(var r=U.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Yr=!1}if(Tn=0,X=Y=U=null,Pt=!1,$t=0,wo.current=null,t===null||t.return===null){G=1,Yt=n,Q=null;break}e:{var l=e,o=t.return,i=t,u=n;if(n=Z,i.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=i,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=xi(o);if(v!==null){v.flags&=-257,Ci(v,o,i,l,n),v.mode&1&&_i(l,c,n),n=v,u=c;var b=n.updateQueue;if(b===null){var k=new Set;k.add(u),n.updateQueue=k}else b.add(u);break e}else{if(!(n&1)){_i(l,c,n),Eo();break e}u=Error(g(426))}}else if(A&&i.mode&1){var j=xi(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Ci(j,o,i,l,n),lo(rt(u,i));break e}}l=u=rt(u,i),G!==4&&(G=2),Nt===null?Nt=[l]:Nt.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var f=Es(l,u,n);yi(l,f);break e;case 1:i=u;var s=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(sn===null||!sn.has(d)))){l.flags|=65536,n&=-n,l.lanes|=n;var y=Ps(l,i,n);yi(l,y);break e}}l=l.return}while(l!==null)}Ys(t)}catch(_){n=_,Q===t&&t!==null&&(Q=t=t.return);continue}break}while(!0)}function Hs(){var e=Kr.current;return Kr.current=Gr,e===null?Gr:e}function Eo(){(G===0||G===3||G===2)&&(G=4),q===null||!(Nn&268435455)&&!(ca&268435455)||Ze(q,Z)}function Jr(e,n){var t=M;M|=2;var r=Hs();(q!==e||Z!==n)&&(Fe=null,xn(e,n));do try{gd();break}catch(a){$s(e,a)}while(!0);if(io(),M=t,Kr.current=r,Q!==null)throw Error(g(261));return q=null,Z=0,G}function gd(){for(;Q!==null;)Qs(Q)}function yd(){for(;Q!==null&&!Wc();)Qs(Q)}function Qs(e){var n=Ks(e.alternate,e,me);e.memoizedProps=e.pendingProps,n===null?Ys(e):Q=n,wo.current=null}function Ys(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=cd(t,n),t!==null){t.flags&=32767,Q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,Q=null;return}}else if(t=sd(t,n,me),t!==null){Q=t;return}if(n=n.sibling,n!==null){Q=n;return}Q=n=e}while(n!==null);G===0&&(G=5)}function kn(e,n,t){var r=D,a=_e.transition;try{_e.transition=null,D=1,vd(e,n,t,r)}finally{_e.transition=a,D=r}return null}function vd(e,n,t,r){do qn();while(tn!==null);if(M&6)throw Error(g(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(qc(e,l),e===q&&(Q=q=null,Z=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||gr||(gr=!0,Xs(Dr,function(){return qn(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=_e.transition,_e.transition=null;var o=D;D=1;var i=M;M|=4,wo.current=null,dd(e,t),Ws(t,e),Af(ml),Rr=!!pl,ml=pl=null,e.current=t,pd(t),Vc(),M=i,D=o,_e.transition=l}else e.current=t;if(gr&&(gr=!1,tn=e,qr=a),l=e.pendingLanes,l===0&&(sn=null),Hc(t.stateNode),pe(e,H()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(Xr)throw Xr=!1,e=Dl,Dl=null,e;return qr&1&&e.tag!==0&&qn(),l=e.pendingLanes,l&1?e===Ll?zt++:(zt=0,Ll=e):zt=0,gn(),null}function qn(){if(tn!==null){var e=Eu(qr),n=_e.transition,t=D;try{if(_e.transition=null,D=16>e?16:e,tn===null)var r=!1;else{if(e=tn,tn=null,qr=0,M&6)throw Error(g(331));var a=M;for(M|=4,w=e.current;w!==null;){var l=w,o=l.child;if(w.flags&16){var i=l.deletions;if(i!==null){for(var u=0;u<i.length;u++){var c=i[u];for(w=c;w!==null;){var h=w;switch(h.tag){case 0:case 11:case 15:Tt(8,h,l)}var m=h.child;if(m!==null)m.return=h,w=m;else for(;w!==null;){h=w;var p=h.sibling,v=h.return;if(As(h),h===c){w=null;break}if(p!==null){p.return=v,w=p;break}w=v}}}var b=l.alternate;if(b!==null){var k=b.child;if(k!==null){b.child=null;do{var j=k.sibling;k.sibling=null,k=j}while(k!==null)}}w=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,w=o;else e:for(;w!==null;){if(l=w,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Tt(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,w=f;break e}w=l.return}}var s=e.current;for(w=s;w!==null;){o=w;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,w=d;else e:for(o=s;w!==null;){if(i=w,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:sa(9,i)}}catch(_){V(i,i.return,_)}if(i===o){w=null;break e}var y=i.sibling;if(y!==null){y.return=i.return,w=y;break e}w=i.return}}if(M=a,gn(),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(na,e)}catch{}r=!0}return r}finally{D=t,_e.transition=n}}return!1}function Ai(e,n,t){n=rt(t,n),n=Es(e,n,1),e=un(e,n,1),n=oe(),e!==null&&(Kt(e,1,n),pe(e,n))}function V(e,n,t){if(e.tag===3)Ai(e,e,t);else for(;n!==null;){if(n.tag===3){Ai(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){e=rt(t,e),e=Ps(n,e,1),n=un(n,e,1),e=oe(),n!==null&&(Kt(n,1,e),pe(n,e));break}}n=n.return}}function bd(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=oe(),e.pingedLanes|=e.suspendedLanes&t,q===e&&(Z&t)===t&&(G===4||G===3&&(Z&130023424)===Z&&500>H()-_o?xn(e,0):So|=t),pe(e,n)}function Gs(e,n){n===0&&(e.mode&1?(n=or,or<<=1,!(or&130023424)&&(or=4194304)):n=1);var t=oe();e=Qe(e,n),e!==null&&(Kt(e,n,t),pe(e,t))}function kd(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Gs(e,t)}function wd(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(g(314))}r!==null&&r.delete(n),Gs(e,t)}var Ks;Ks=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||fe.current)ce=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ce=!1,ud(e,n,t);ce=!!(e.flags&131072)}else ce=!1,A&&n.flags&1048576&&Ju(n,Vr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Er(e,n),e=n.pendingProps;var a=Zn(n,ae.current);Xn(n,t),a=go(null,n,r,e,a,t);var l=yo();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,de(r)?(l=!0,Ur(n)):l=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,co(n),a.updater=ua,n.stateNode=a,a._reactInternals=n,_l(n,r,e,t),n=El(null,n,r,!0,l,t)):(n.tag=0,A&&l&&ro(n),le(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Er(e,n),e=n.pendingProps,a=r._init,r=a(r._payload),n.type=r,a=n.tag=_d(r),e=Te(r,e),a){case 0:n=Cl(null,n,r,e,t);break e;case 1:n=Ti(null,n,r,e,t);break e;case 11:n=Ei(null,n,r,e,t);break e;case 14:n=Pi(null,n,r,Te(r.type,e),t);break e}throw Error(g(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Te(r,a),Cl(e,n,r,a,t);case 1:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Te(r,a),Ti(e,n,r,a,t);case 3:e:{if(Os(n),e===null)throw Error(g(387));r=n.pendingProps,l=n.memoizedState,a=l.element,as(e,n),Hr(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){a=rt(Error(g(423)),n),n=Ni(e,n,r,t,a);break e}else if(r!==a){a=rt(Error(g(424)),n),n=Ni(e,n,r,t,a);break e}else for(he=on(n.stateNode.containerInfo.firstChild),ge=n,A=!0,ze=null,t=ts(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(et(),r===a){n=Ye(e,n,t);break e}le(e,n,r,t)}n=n.child}return n;case 5:return ls(n),e===null&&kl(n),r=n.type,a=n.pendingProps,l=e!==null?e.memoizedProps:null,o=a.children,hl(r,a)?o=null:l!==null&&hl(r,l)&&(n.flags|=32),zs(e,n),le(e,n,o,t),n.child;case 6:return e===null&&kl(n),null;case 13:return Ms(e,n,t);case 4:return fo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=nt(n,null,r,t):le(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Te(r,a),Ei(e,n,r,a,t);case 7:return le(e,n,n.pendingProps,t),n.child;case 8:return le(e,n,n.pendingProps.children,t),n.child;case 12:return le(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,l=n.memoizedProps,o=a.value,L(Br,r._currentValue),r._currentValue=o,l!==null)if(De(l.value,o)){if(l.children===a.children&&!fe.current){n=Ye(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var i=l.dependencies;if(i!==null){o=l.child;for(var u=i.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=Be(-1,t&-t),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),wl(l.return,t,n),i.lanes|=t;break}u=u.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(g(341));o.lanes|=t,i=o.alternate,i!==null&&(i.lanes|=t),wl(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}le(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,Xn(n,t),a=xe(a),r=r(a),n.flags|=1,le(e,n,r,t),n.child;case 14:return r=n.type,a=Te(r,n.pendingProps),a=Te(r.type,a),Pi(e,n,r,a,t);case 15:return Ts(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Te(r,a),Er(e,n),n.tag=1,de(r)?(e=!0,Ur(n)):e=!1,Xn(n,t),Cs(n,r,a),_l(n,r,a,t),El(null,n,r,!0,e,t);case 19:return Ds(e,n,t);case 22:return Ns(e,n,t)}throw Error(g(156,n.tag))};function Xs(e,n){return Su(e,n)}function Sd(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Se(e,n,t,r){return new Sd(e,n,t,r)}function Po(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _d(e){if(typeof e=="function")return Po(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hl)return 11;if(e===Ql)return 14}return 2}function fn(e,n){var t=e.alternate;return t===null?(t=Se(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Nr(e,n,t,r,a,l){var o=2;if(r=e,typeof e=="function")Po(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Rn:return Cn(t.children,a,l,n);case $l:o=8,a|=8;break;case Ya:return e=Se(12,t,n,a|2),e.elementType=Ya,e.lanes=l,e;case Ga:return e=Se(13,t,n,a),e.elementType=Ga,e.lanes=l,e;case Ka:return e=Se(19,t,n,a),e.elementType=Ka,e.lanes=l,e;case lu:return fa(t,a,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ru:o=10;break e;case au:o=9;break e;case Hl:o=11;break e;case Ql:o=14;break e;case Xe:o=16,r=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return n=Se(o,t,n,a),n.elementType=e,n.type=r,n.lanes=l,n}function Cn(e,n,t,r){return e=Se(7,e,r,n),e.lanes=t,e}function fa(e,n,t,r){return e=Se(22,e,r,n),e.elementType=lu,e.lanes=t,e.stateNode={isHidden:!1},e}function Ba(e,n,t){return e=Se(6,e,null,n),e.lanes=t,e}function $a(e,n,t){return n=Se(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function xd(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xa(0),this.expirationTimes=xa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xa(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function To(e,n,t,r,a,l,o,i,u){return e=new xd(e,n,t,i,u),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Se(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},co(l),e}function Cd(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ln,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function qs(e){if(!e)return pn;e=e._reactInternals;e:{if(Mn(e)!==e||e.tag!==1)throw Error(g(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(de(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(g(171))}if(e.tag===1){var t=e.type;if(de(t))return Xu(e,t,n)}return n}function Js(e,n,t,r,a,l,o,i,u){return e=To(t,r,!0,e,a,l,o,i,u),e.context=qs(null),t=e.current,r=oe(),a=cn(t),l=Be(r,a),l.callback=n??null,un(t,l,a),e.current.lanes=a,Kt(e,a,r),pe(e,r),e}function da(e,n,t,r){var a=n.current,l=oe(),o=cn(a);return t=qs(t),n.context===null?n.context=t:n.pendingContext=t,n=Be(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=un(a,n,o),e!==null&&(Me(e,a,o,l),_r(e,a,o)),o}function Zr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fi(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function No(e,n){Fi(e,n),(e=e.alternate)&&Fi(e,n)}function Ed(){return null}var Zs=typeof reportError=="function"?reportError:function(e){console.error(e)};function zo(e){this._internalRoot=e}pa.prototype.render=zo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(g(409));da(e,n,null,null)};pa.prototype.unmount=zo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;zn(function(){da(null,e,null,null)}),n[He]=null}};function pa(e){this._internalRoot=e}pa.prototype.unstable_scheduleHydration=function(e){if(e){var n=Nu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Je.length&&n!==0&&n<Je[t].priority;t++);Je.splice(t,0,e),t===0&&Ou(e)}};function Oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ui(){}function Pd(e,n,t,r,a){if(a){if(typeof r=="function"){var l=r;r=function(){var c=Zr(o);l.call(c)}}var o=Js(n,r,e,0,null,!1,!1,"",Ui);return e._reactRootContainer=o,e[He]=o.current,Ft(e.nodeType===8?e.parentNode:e),zn(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var i=r;r=function(){var c=Zr(u);i.call(c)}}var u=To(e,0,!1,null,null,!1,!1,"",Ui);return e._reactRootContainer=u,e[He]=u.current,Ft(e.nodeType===8?e.parentNode:e),zn(function(){da(n,u,t,r)}),u}function ha(e,n,t,r,a){var l=t._reactRootContainer;if(l){var o=l;if(typeof a=="function"){var i=a;a=function(){var u=Zr(o);i.call(u)}}da(n,o,e,a)}else o=Pd(t,n,e,a,r);return Zr(o)}Pu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=kt(n.pendingLanes);t!==0&&(Kl(n,t|1),pe(n,H()),!(M&6)&&(at=H()+500,gn()))}break;case 13:zn(function(){var r=Qe(e,1);if(r!==null){var a=oe();Me(r,e,1,a)}}),No(e,1)}};Xl=function(e){if(e.tag===13){var n=Qe(e,134217728);if(n!==null){var t=oe();Me(n,e,134217728,t)}No(e,134217728)}};Tu=function(e){if(e.tag===13){var n=cn(e),t=Qe(e,n);if(t!==null){var r=oe();Me(t,e,n,r)}No(e,n)}};Nu=function(){return D};zu=function(e,n){var t=D;try{return D=e,n()}finally{D=t}};ll=function(e,n,t){switch(n){case"input":if(Ja(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=la(r);if(!a)throw Error(g(90));iu(r),Ja(r,a)}}}break;case"textarea":su(e,t);break;case"select":n=t.value,n!=null&&Qn(e,!!t.multiple,n,!1)}};gu=xo;yu=zn;var Td={usingClientEntryPoint:!1,Events:[qt,Fn,la,mu,hu,xo]},yt={findFiberByHostInstance:wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nd={bundleType:yt.bundleType,version:yt.version,rendererPackageName:yt.rendererPackageName,rendererConfig:yt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ku(e),e===null?null:e.stateNode},findFiberByHostInstance:yt.findFiberByHostInstance||Ed,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{na=yr.inject(Nd),je=yr}catch{}}ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Td;ve.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oo(n))throw Error(g(200));return Cd(e,n,null,t)};ve.createRoot=function(e,n){if(!Oo(e))throw Error(g(299));var t=!1,r="",a=Zs;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=To(e,1,!1,null,null,t,!1,r,a),e[He]=n.current,Ft(e.nodeType===8?e.parentNode:e),new zo(n)};ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=ku(n),e=e===null?null:e.stateNode,e};ve.flushSync=function(e){return zn(e)};ve.hydrate=function(e,n,t){if(!ma(n))throw Error(g(200));return ha(null,e,n,!0,t)};ve.hydrateRoot=function(e,n,t){if(!Oo(e))throw Error(g(405));var r=t!=null&&t.hydratedSources||null,a=!1,l="",o=Zs;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Js(n,null,e,1,t??null,a,!1,l,o),e[He]=n.current,Ft(e),r)for(e=0;e<r.length;e++)t=r[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new pa(n)};ve.render=function(e,n,t){if(!ma(n))throw Error(g(200));return ha(null,e,n,!1,t)};ve.unmountComponentAtNode=function(e){if(!ma(e))throw Error(g(40));return e._reactRootContainer?(zn(function(){ha(null,null,e,!1,function(){e._reactRootContainer=null,e[He]=null})}),!0):!1};ve.unstable_batchedUpdates=xo;ve.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ma(t))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return ha(e,n,t,!1,r)};ve.version="18.3.1-next-f1338f8080-20240426";function ec(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ec)}catch(e){console.error(e)}}ec(),Zi.exports=ve;var zd=Zi.exports,Wi=zd;Ha.createRoot=Wi.createRoot,Ha.hydrateRoot=Wi.hydrateRoot;function Od({sections:e,currentPath:n,onNavigate:t}){const[r,a]=en.useState(new Set),l=o=>{a(i=>{const u=new Set(i);return u.has(o)?u.delete(o):u.add(o),u})};return O.jsxs("aside",{className:"sidebar",children:[O.jsx("div",{className:"sidebar-header",children:O.jsxs("h1",{className:"logo",children:[O.jsx("img",{src:"/logo.png",alt:"UWASIC Logo"}),O.jsx("span",{className:"logo-text",children:"UWASIC Docs"})]})}),O.jsx("nav",{className:"sidebar-nav",children:e.map(o=>O.jsxs("div",{className:"nav-section",children:[O.jsxs("button",{className:"section-header",onClick:()=>l(o.id),children:[O.jsx("span",{className:`chevron ${r.has(o.id)?"expanded":""}`,children:"›"}),O.jsx("span",{className:"section-title",children:o.title})]}),r.has(o.id)&&O.jsx("ul",{className:"page-list",children:o.pages.map(i=>O.jsx("li",{children:O.jsx("button",{className:`page-link ${n===i.path?"active":""}`,onClick:()=>t(i.path),children:i.metadata.title})},i.path))})]},o.id))})]})}function Md({content:e}){const n=e.trim().split(`
`),t=[];let r=!1,a=[];const l=o=>{const i=[];let u=o,c=0;const h=/(`[^`]+`|\*\*[^*]+\*\*)/g,m=u.match(h);if(!m)return o;let p=0;return m.forEach(v=>{const b=u.indexOf(v,p);b>p&&i.push(u.slice(p,b)),v.startsWith("`")?i.push(O.jsx("code",{children:v.slice(1,-1)},c++)):v.startsWith("**")&&i.push(O.jsx("strong",{children:v.slice(2,-2)},c++)),p=b+v.length}),p<u.length&&i.push(u.slice(p)),i.length>0?i:o};return n.forEach((o,i)=>{const u=o.trim();if(u.startsWith("```")){r?(r=!1,t.push(O.jsx("pre",{children:O.jsx("code",{children:a.join(`
`)})},`code-${i}`))):(r=!0,a=[]);return}if(r){a.push(o);return}if(u.startsWith("### ")){t.push(O.jsx("h3",{children:u.slice(4)},i));return}if(u.startsWith("## ")){t.push(O.jsx("h2",{children:u.slice(3)},i));return}if(u.startsWith("# ")){t.push(O.jsx("h1",{children:u.slice(2)},i));return}if(u.startsWith("- ")){t.push(O.jsx("li",{children:l(u.slice(2))},i));return}if(u.match(/^\d+\.\s/)){t.push(O.jsx("li",{children:l(u.replace(/^\d+\.\s/,""))},i));return}if(u){t.push(O.jsx("p",{children:l(u)},i));return}t.push(O.jsx("br",{},i))}),O.jsx("div",{className:"markdown-content",children:t})}const Dd={title:"Create Project",order:2},Ld=`
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
`,Rd=Object.freeze(Object.defineProperty({__proto__:null,content:Ld,metadata:Dd},Symbol.toStringTag,{value:"Module"})),Id={title:"Layout Design",order:4},jd=`
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
`,Wd=Object.freeze(Object.defineProperty({__proto__:null,content:Ud,metadata:Fd},Symbol.toStringTag,{value:"Module"})),Vd={title:"Schematic Design",order:3},Bd=`
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
`,$d=Object.freeze(Object.defineProperty({__proto__:null,content:Bd,metadata:Vd},Symbol.toStringTag,{value:"Module"})),Hd={title:"Create Project",order:2},Qd=`
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
`,Yd=Object.freeze(Object.defineProperty({__proto__:null,content:Qd,metadata:Hd},Symbol.toStringTag,{value:"Module"})),Gd={title:"Overview",order:1},Kd=`
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
`,Xd=Object.freeze(Object.defineProperty({__proto__:null,content:Kd,metadata:Gd},Symbol.toStringTag,{value:"Module"})),qd={title:"Test & Verify",order:3},Jd=`
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
`,Zd=Object.freeze(Object.defineProperty({__proto__:null,content:Jd,metadata:qd},Symbol.toStringTag,{value:"Module"})),ep={title:"Basic Commands",order:3},np=`
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
`,tp=Object.freeze(Object.defineProperty({__proto__:null,content:np,metadata:ep},Symbol.toStringTag,{value:"Module"})),rp={title:"Overview",order:1},ap=`
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
`,lp=Object.freeze(Object.defineProperty({__proto__:null,content:ap,metadata:rp},Symbol.toStringTag,{value:"Module"})),op={title:"Installation",order:2},ip=`
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
`,Np=Object.freeze(Object.defineProperty({__proto__:null,content:Tp,metadata:Pp},Symbol.toStringTag,{value:"Module"})),zp=Object.assign({"../content/Analog/Create-Project.ts":Rd,"../content/Analog/Layout-Design.ts":Ad,"../content/Analog/Overview.ts":Wd,"../content/Analog/Schematic-Design.ts":$d,"../content/Digital/Create-Project.ts":Yd,"../content/Digital/Overview.ts":Xd,"../content/Digital/Test-Verify.ts":Zd,"../content/How-To-Use/Basic-Commands.ts":tp,"../content/How-To-Use/Overview.ts":lp,"../content/How-To-Use/Using-Nix.ts":up,"../content/Mixed-Signal/Create-Project.ts":fp,"../content/Mixed-Signal/Overview.ts":mp,"../content/TinyTapeout/Create-Package.ts":yp,"../content/TinyTapeout/Overview.ts":kp,"../content/TinyTapeout/Submit-Package.ts":_p,"../content/Updating-Docs/Build-Deploy.ts":Ep,"../content/Updating-Docs/Markdown-Syntax.ts":Np});function Op(){const e=new Map;for(const[n,t]of Object.entries(zp)){const r=t,a=n.match(/\/content\/([^/]+)\/([^/]+)\.ts$/);if(!a)continue;const[,l,o]=a;e.has(l)||e.set(l,{id:l,title:l.split("-").map(i=>i.charAt(0).toUpperCase()+i.slice(1)).join(" "),pages:[]}),e.get(l).pages.push({id:o,path:`${l}/${o}`,metadata:r.metadata,content:r.content})}return e.forEach(n=>{n.pages.sort((t,r)=>t.metadata.order-r.metadata.order)}),Array.from(e.values()).sort((n,t)=>n.id.localeCompare(t.id))}function Mp(){const[e]=en.useState(()=>Op()),[n,t]=en.useState(""),[r,a]=en.useState(null);en.useEffect(()=>{if(e.length>0&&!n){const o=e[0].pages[0];o&&(t(o.path),a(o))}},[e,n]);const l=o=>{t(o);for(const i of e){const u=i.pages.find(c=>c.path===o);if(u){a(u);break}}};return O.jsxs("div",{className:"app",children:[O.jsx(Od,{sections:e,currentPath:n,onNavigate:l}),O.jsx("main",{className:"content",children:r?O.jsx("article",{className:"article",children:O.jsx(Md,{content:r.content})}):O.jsx("div",{className:"empty-state",children:O.jsx("p",{children:"Select a page from the sidebar to get started"})})})]})}Ha.createRoot(document.getElementById("root")).render(O.jsx(vc.StrictMode,{children:O.jsx(Mp,{})}));
