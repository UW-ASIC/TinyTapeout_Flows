(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function nc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bu={exports:{}},el={},Hu={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kn=Symbol.for("react.element"),rc=Symbol.for("react.portal"),lc=Symbol.for("react.fragment"),oc=Symbol.for("react.strict_mode"),ic=Symbol.for("react.profiler"),uc=Symbol.for("react.provider"),sc=Symbol.for("react.context"),ac=Symbol.for("react.forward_ref"),cc=Symbol.for("react.suspense"),fc=Symbol.for("react.memo"),dc=Symbol.for("react.lazy"),Mi=Symbol.iterator;function pc(e){return e===null||typeof e!="object"?null:(e=Mi&&e[Mi]||e["@@iterator"],typeof e=="function"?e:null)}var Qu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yu=Object.assign,Gu={};function ln(e,t,n){this.props=e,this.context=t,this.refs=Gu,this.updater=n||Qu}ln.prototype.isReactComponent={};ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ku(){}Ku.prototype=ln.prototype;function Uo(e,t,n){this.props=e,this.context=t,this.refs=Gu,this.updater=n||Qu}var Wo=Uo.prototype=new Ku;Wo.constructor=Uo;Yu(Wo,ln.prototype);Wo.isPureReactComponent=!0;var Ri=Array.isArray,Xu=Object.prototype.hasOwnProperty,Vo={current:null},Ju={key:!0,ref:!0,__self:!0,__source:!0};function Zu(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Xu.call(t,r)&&!Ju.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:Kn,type:e,key:o,ref:i,props:l,_owner:Vo.current}}function mc(e,t){return{$$typeof:Kn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $o(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kn}function hc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ii=/\/+/g;function wl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hc(""+e.key):t.toString(36)}function yr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Kn:case rc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+wl(i,0):r,Ri(l)?(n="",e!=null&&(n=e.replace(Ii,"$&/")+"/"),yr(l,t,n,"",function(c){return c})):l!=null&&($o(l)&&(l=mc(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Ii,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Ri(e))for(var u=0;u<e.length;u++){o=e[u];var s=r+wl(o,u);i+=yr(o,t,n,s,l)}else if(s=pc(e),typeof s=="function")for(e=s.call(e),u=0;!(o=e.next()).done;)o=o.value,s=r+wl(o,u++),i+=yr(o,t,n,s,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function tr(e,t,n){if(e==null)return e;var r=[],l=0;return yr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function gc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},wr={transition:null},vc={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Vo};function qu(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:tr,forEach:function(e,t,n){tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return tr(e,function(){t++}),t},toArray:function(e){return tr(e,function(t){return t})||[]},only:function(e){if(!$o(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=ln;z.Fragment=lc;z.Profiler=ic;z.PureComponent=Uo;z.StrictMode=oc;z.Suspense=cc;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vc;z.act=qu;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yu({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Vo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)Xu.call(t,s)&&!Ju.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&u!==void 0?u[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){u=Array(s);for(var c=0;c<s;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:Kn,type:e.type,key:l,ref:o,props:r,_owner:i}};z.createContext=function(e){return e={$$typeof:sc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:uc,_context:e},e.Consumer=e};z.createElement=Zu;z.createFactory=function(e){var t=Zu.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:ac,render:e}};z.isValidElement=$o;z.lazy=function(e){return{$$typeof:dc,_payload:{_status:-1,_result:e},_init:gc}};z.memo=function(e,t){return{$$typeof:fc,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=wr.transition;wr.transition={};try{e()}finally{wr.transition=t}};z.unstable_act=qu;z.useCallback=function(e,t){return ue.current.useCallback(e,t)};z.useContext=function(e){return ue.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};z.useEffect=function(e,t){return ue.current.useEffect(e,t)};z.useId=function(){return ue.current.useId()};z.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return ue.current.useMemo(e,t)};z.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};z.useRef=function(e){return ue.current.useRef(e)};z.useState=function(e){return ue.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return ue.current.useTransition()};z.version="18.3.1";Hu.exports=z;var et=Hu.exports;const yc=nc(et);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wc=et,Sc=Symbol.for("react.element"),kc=Symbol.for("react.fragment"),_c=Object.prototype.hasOwnProperty,Cc=wc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ec={key:!0,ref:!0,__self:!0,__source:!0};function bu(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)_c.call(t,r)&&!Ec.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Sc,type:e,key:o,ref:i,props:l,_owner:Cc.current}}el.Fragment=kc;el.jsx=bu;el.jsxs=bu;Bu.exports=el;var O=Bu.exports,Ql={},es={exports:{}},ye={},ts={exports:{}},ns={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,T){var N=C.length;C.push(T);e:for(;0<N;){var H=N-1>>>1,X=C[H];if(0<l(X,T))C[H]=T,C[N]=X,N=H;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var T=C[0],N=C.pop();if(N!==T){C[0]=N;e:for(var H=0,X=C.length,bn=X>>>1;H<bn;){var gt=2*(H+1)-1,yl=C[gt],vt=gt+1,er=C[vt];if(0>l(yl,N))vt<X&&0>l(er,yl)?(C[H]=er,C[vt]=N,H=vt):(C[H]=yl,C[gt]=N,H=gt);else if(vt<X&&0>l(er,N))C[H]=er,C[vt]=N,H=vt;else break e}}return T}function l(C,T){var N=C.sortIndex-T.sortIndex;return N!==0?N:C.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,u=i.now();e.unstable_now=function(){return i.now()-u}}var s=[],c=[],h=1,p=null,m=3,y=!1,w=!1,S=!1,A=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(C){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=C)r(c),T.sortIndex=T.expirationTime,t(s,T);else break;T=n(c)}}function g(C){if(S=!1,d(C),!w)if(n(s)!==null)w=!0,gl(_);else{var T=n(c);T!==null&&vl(g,T.startTime-C)}}function _(C,T){w=!1,S&&(S=!1,f(P),P=-1),y=!0;var N=m;try{for(d(T),p=n(s);p!==null&&(!(p.expirationTime>T)||C&&!Pe());){var H=p.callback;if(typeof H=="function"){p.callback=null,m=p.priorityLevel;var X=H(p.expirationTime<=T);T=e.unstable_now(),typeof X=="function"?p.callback=X:p===n(s)&&r(s),d(T)}else r(s);p=n(s)}if(p!==null)var bn=!0;else{var gt=n(c);gt!==null&&vl(g,gt.startTime-T),bn=!1}return bn}finally{p=null,m=N,y=!1}}var E=!1,x=null,P=-1,B=5,L=-1;function Pe(){return!(e.unstable_now()-L<B)}function sn(){if(x!==null){var C=e.unstable_now();L=C;var T=!0;try{T=x(!0,C)}finally{T?an():(E=!1,x=null)}}else E=!1}var an;if(typeof a=="function")an=function(){a(sn)};else if(typeof MessageChannel<"u"){var Di=new MessageChannel,tc=Di.port2;Di.port1.onmessage=sn,an=function(){tc.postMessage(null)}}else an=function(){A(sn,0)};function gl(C){x=C,E||(E=!0,an())}function vl(C,T){P=A(function(){C(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,gl(_))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var T=3;break;default:T=m}var N=m;m=T;try{return C()}finally{m=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,T){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var N=m;m=C;try{return T()}finally{m=N}},e.unstable_scheduleCallback=function(C,T,N){var H=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?H+N:H):N=H,C){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=N+X,C={id:h++,callback:T,priorityLevel:C,startTime:N,expirationTime:X,sortIndex:-1},N>H?(C.sortIndex=N,t(c,C),n(s)===null&&C===n(c)&&(S?(f(P),P=-1):S=!0,vl(g,N-H))):(C.sortIndex=X,t(s,C),w||y||(w=!0,gl(_))),C},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(C){var T=m;return function(){var N=m;m=T;try{return C.apply(this,arguments)}finally{m=N}}}})(ns);ts.exports=ns;var xc=ts.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pc=et,ve=xc;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rs=new Set,On={};function Lt(e,t){Zt(e,t),Zt(e+"Capture",t)}function Zt(e,t){for(On[e]=t,e=0;e<t.length;e++)rs.add(t[e])}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yl=Object.prototype.hasOwnProperty,Tc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ai={},Fi={};function Nc(e){return Yl.call(Fi,e)?!0:Yl.call(Ai,e)?!1:Tc.test(e)?Fi[e]=!0:(Ai[e]=!0,!1)}function zc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lc(e,t,n,r){if(t===null||typeof t>"u"||zc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function se(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bo=/[\-:]([a-z])/g;function Ho(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Bo,Ho);ee[t]=new se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Bo,Ho);ee[t]=new se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Bo,Ho);ee[t]=new se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qo(e,t,n,r){var l=ee.hasOwnProperty(t)?ee[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lc(t,n,l,r)&&(n=null),r||l===null?Nc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ke=Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nr=Symbol.for("react.element"),Dt=Symbol.for("react.portal"),Mt=Symbol.for("react.fragment"),Yo=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),ls=Symbol.for("react.provider"),os=Symbol.for("react.context"),Go=Symbol.for("react.forward_ref"),Kl=Symbol.for("react.suspense"),Xl=Symbol.for("react.suspense_list"),Ko=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),is=Symbol.for("react.offscreen"),Ui=Symbol.iterator;function cn(e){return e===null||typeof e!="object"?null:(e=Ui&&e[Ui]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Sl;function yn(e){if(Sl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sl=t&&t[1]||""}return`
`+Sl+e}var kl=!1;function _l(e,t){if(!e||kl)return"";kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,u=o.length-1;1<=i&&0<=u&&l[i]!==o[u];)u--;for(;1<=i&&0<=u;i--,u--)if(l[i]!==o[u]){if(i!==1||u!==1)do if(i--,u--,0>u||l[i]!==o[u]){var s=`
`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=u);break}}}finally{kl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yn(e):""}function Oc(e){switch(e.tag){case 5:return yn(e.type);case 16:return yn("Lazy");case 13:return yn("Suspense");case 19:return yn("SuspenseList");case 0:case 2:case 15:return e=_l(e.type,!1),e;case 11:return e=_l(e.type.render,!1),e;case 1:return e=_l(e.type,!0),e;default:return""}}function Jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mt:return"Fragment";case Dt:return"Portal";case Gl:return"Profiler";case Yo:return"StrictMode";case Kl:return"Suspense";case Xl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case os:return(e.displayName||"Context")+".Consumer";case ls:return(e._context.displayName||"Context")+".Provider";case Go:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ko:return t=e.displayName||null,t!==null?t:Jl(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return Jl(e(t))}catch{}}return null}function jc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jl(t);case 8:return t===Yo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function us(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dc(e){var t=us(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rr(e){e._valueTracker||(e._valueTracker=Dc(e))}function ss(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=us(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zl(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function as(e,t){t=t.checked,t!=null&&Qo(e,"checked",t,!1)}function ql(e,t){as(e,t);var n=ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&bl(e,t.type,ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bl(e,t,n){(t!=="number"||Lr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function Qt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function eo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(v(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $i(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(v(92));if(wn(n)){if(1<n.length)throw Error(v(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ft(n)}}function cs(e,t){var n=ft(t.value),r=ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function to(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lr,ds=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mc=["Webkit","ms","Moz","O"];Object.keys(_n).forEach(function(e){Mc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_n[t]=_n[e]})});function ps(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_n.hasOwnProperty(e)&&_n[e]?(""+t).trim():t+"px"}function ms(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ps(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Rc=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function no(e,t){if(t){if(Rc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(v(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(t.style!=null&&typeof t.style!="object")throw Error(v(62))}}function ro(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lo=null;function Xo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oo=null,Yt=null,Gt=null;function Hi(e){if(e=Zn(e)){if(typeof oo!="function")throw Error(v(280));var t=e.stateNode;t&&(t=ol(t),oo(e.stateNode,e.type,t))}}function hs(e){Yt?Gt?Gt.push(e):Gt=[e]:Yt=e}function gs(){if(Yt){var e=Yt,t=Gt;if(Gt=Yt=null,Hi(e),t)for(e=0;e<t.length;e++)Hi(t[e])}}function vs(e,t){return e(t)}function ys(){}var Cl=!1;function ws(e,t,n){if(Cl)return e(t,n);Cl=!0;try{return vs(e,t,n)}finally{Cl=!1,(Yt!==null||Gt!==null)&&(ys(),gs())}}function Dn(e,t){var n=e.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(v(231,t,typeof n));return n}var io=!1;if(He)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){io=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{io=!1}function Ic(e,t,n,r,l,o,i,u,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Cn=!1,Or=null,jr=!1,uo=null,Ac={onError:function(e){Cn=!0,Or=e}};function Fc(e,t,n,r,l,o,i,u,s){Cn=!1,Or=null,Ic.apply(Ac,arguments)}function Uc(e,t,n,r,l,o,i,u,s){if(Fc.apply(this,arguments),Cn){if(Cn){var c=Or;Cn=!1,Or=null}else throw Error(v(198));jr||(jr=!0,uo=c)}}function Ot(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ss(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qi(e){if(Ot(e)!==e)throw Error(v(188))}function Wc(e){var t=e.alternate;if(!t){if(t=Ot(e),t===null)throw Error(v(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Qi(l),e;if(o===r)return Qi(l),t;o=o.sibling}throw Error(v(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,u=l.child;u;){if(u===n){i=!0,n=l,r=o;break}if(u===r){i=!0,r=l,n=o;break}u=u.sibling}if(!i){for(u=o.child;u;){if(u===n){i=!0,n=o,r=l;break}if(u===r){i=!0,r=o,n=l;break}u=u.sibling}if(!i)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?e:t}function ks(e){return e=Wc(e),e!==null?_s(e):null}function _s(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_s(e);if(t!==null)return t;e=e.sibling}return null}var Cs=ve.unstable_scheduleCallback,Yi=ve.unstable_cancelCallback,Vc=ve.unstable_shouldYield,$c=ve.unstable_requestPaint,Q=ve.unstable_now,Bc=ve.unstable_getCurrentPriorityLevel,Jo=ve.unstable_ImmediatePriority,Es=ve.unstable_UserBlockingPriority,Dr=ve.unstable_NormalPriority,Hc=ve.unstable_LowPriority,xs=ve.unstable_IdlePriority,tl=null,Ae=null;function Qc(e){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(tl,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Kc,Yc=Math.log,Gc=Math.LN2;function Kc(e){return e>>>=0,e===0?32:31-(Yc(e)/Gc|0)|0}var or=64,ir=4194304;function Sn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var u=i&~l;u!==0?r=Sn(u):(o&=i,o!==0&&(r=Sn(o)))}else i=n&~l,i!==0?r=Sn(i):o!==0&&(r=Sn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Oe(t),l=1<<n,r|=e[n],t&=~l;return r}function Xc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Oe(o),u=1<<i,s=l[i];s===-1?(!(u&n)||u&r)&&(l[i]=Xc(u,t)):s<=t&&(e.expiredLanes|=u),o&=~u}}function so(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ps(){var e=or;return or<<=1,!(or&4194240)&&(or=64),e}function El(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=n}function Zc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Oe(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function Zo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Oe(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var D=0;function Ts(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ns,qo,zs,Ls,Os,ao=!1,ur=[],rt=null,lt=null,ot=null,Mn=new Map,Rn=new Map,qe=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gi(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":Mn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rn.delete(t.pointerId)}}function dn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Zn(t),t!==null&&qo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function bc(e,t,n,r,l){switch(t){case"focusin":return rt=dn(rt,e,t,n,r,l),!0;case"dragenter":return lt=dn(lt,e,t,n,r,l),!0;case"mouseover":return ot=dn(ot,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Mn.set(o,dn(Mn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Rn.set(o,dn(Rn.get(o)||null,e,t,n,r,l)),!0}return!1}function js(e){var t=St(e.target);if(t!==null){var n=Ot(t);if(n!==null){if(t=n.tag,t===13){if(t=Ss(n),t!==null){e.blockedOn=t,Os(e.priority,function(){zs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=co(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);lo=r,n.target.dispatchEvent(r),lo=null}else return t=Zn(n),t!==null&&qo(t),e.blockedOn=n,!1;t.shift()}return!0}function Ki(e,t,n){Sr(e)&&n.delete(t)}function ef(){ao=!1,rt!==null&&Sr(rt)&&(rt=null),lt!==null&&Sr(lt)&&(lt=null),ot!==null&&Sr(ot)&&(ot=null),Mn.forEach(Ki),Rn.forEach(Ki)}function pn(e,t){e.blockedOn===t&&(e.blockedOn=null,ao||(ao=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,ef)))}function In(e){function t(l){return pn(l,e)}if(0<ur.length){pn(ur[0],e);for(var n=1;n<ur.length;n++){var r=ur[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&pn(rt,e),lt!==null&&pn(lt,e),ot!==null&&pn(ot,e),Mn.forEach(t),Rn.forEach(t),n=0;n<qe.length;n++)r=qe[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qe.length&&(n=qe[0],n.blockedOn===null);)js(n),n.blockedOn===null&&qe.shift()}var Kt=Ke.ReactCurrentBatchConfig,Rr=!0;function tf(e,t,n,r){var l=D,o=Kt.transition;Kt.transition=null;try{D=1,bo(e,t,n,r)}finally{D=l,Kt.transition=o}}function nf(e,t,n,r){var l=D,o=Kt.transition;Kt.transition=null;try{D=4,bo(e,t,n,r)}finally{D=l,Kt.transition=o}}function bo(e,t,n,r){if(Rr){var l=co(e,t,n,r);if(l===null)Ml(e,t,r,Ir,n),Gi(e,r);else if(bc(l,e,t,n,r))r.stopPropagation();else if(Gi(e,r),t&4&&-1<qc.indexOf(e)){for(;l!==null;){var o=Zn(l);if(o!==null&&Ns(o),o=co(e,t,n,r),o===null&&Ml(e,t,r,Ir,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Ml(e,t,r,null,n)}}var Ir=null;function co(e,t,n,r){if(Ir=null,e=Xo(r),e=St(e),e!==null)if(t=Ot(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ss(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ir=e,null}function Ds(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bc()){case Jo:return 1;case Es:return 4;case Dr:case Hc:return 16;case xs:return 536870912;default:return 16}default:return 16}}var tt=null,ei=null,kr=null;function Ms(){if(kr)return kr;var e,t=ei,n=t.length,r,l="value"in tt?tt.value:tt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return kr=l.slice(e,1<r?1-r:void 0)}function _r(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function sr(){return!0}function Xi(){return!1}function we(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?sr:Xi,this.isPropagationStopped=Xi,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),t}var on={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ti=we(on),Jn=V({},on,{view:0,detail:0}),rf=we(Jn),xl,Pl,mn,nl=V({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ni,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mn&&(mn&&e.type==="mousemove"?(xl=e.screenX-mn.screenX,Pl=e.screenY-mn.screenY):Pl=xl=0,mn=e),xl)},movementY:function(e){return"movementY"in e?e.movementY:Pl}}),Ji=we(nl),lf=V({},nl,{dataTransfer:0}),of=we(lf),uf=V({},Jn,{relatedTarget:0}),Tl=we(uf),sf=V({},on,{animationName:0,elapsedTime:0,pseudoElement:0}),af=we(sf),cf=V({},on,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ff=we(cf),df=V({},on,{data:0}),Zi=we(df),pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hf[e])?!!t[e]:!1}function ni(){return gf}var vf=V({},Jn,{key:function(e){if(e.key){var t=pf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ni,charCode:function(e){return e.type==="keypress"?_r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yf=we(vf),wf=V({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qi=we(wf),Sf=V({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ni}),kf=we(Sf),_f=V({},on,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cf=we(_f),Ef=V({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xf=we(Ef),Pf=[9,13,27,32],ri=He&&"CompositionEvent"in window,En=null;He&&"documentMode"in document&&(En=document.documentMode);var Tf=He&&"TextEvent"in window&&!En,Rs=He&&(!ri||En&&8<En&&11>=En),bi=" ",eu=!1;function Is(e,t){switch(e){case"keyup":return Pf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function As(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rt=!1;function Nf(e,t){switch(e){case"compositionend":return As(t);case"keypress":return t.which!==32?null:(eu=!0,bi);case"textInput":return e=t.data,e===bi&&eu?null:e;default:return null}}function zf(e,t){if(Rt)return e==="compositionend"||!ri&&Is(e,t)?(e=Ms(),kr=ei=tt=null,Rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rs&&t.locale!=="ko"?null:t.data;default:return null}}var Lf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lf[e.type]:t==="textarea"}function Fs(e,t,n,r){hs(r),t=Ar(t,"onChange"),0<t.length&&(n=new ti("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xn=null,An=null;function Of(e){Xs(e,0)}function rl(e){var t=Ft(e);if(ss(t))return e}function jf(e,t){if(e==="change")return t}var Us=!1;if(He){var Nl;if(He){var zl="oninput"in document;if(!zl){var nu=document.createElement("div");nu.setAttribute("oninput","return;"),zl=typeof nu.oninput=="function"}Nl=zl}else Nl=!1;Us=Nl&&(!document.documentMode||9<document.documentMode)}function ru(){xn&&(xn.detachEvent("onpropertychange",Ws),An=xn=null)}function Ws(e){if(e.propertyName==="value"&&rl(An)){var t=[];Fs(t,An,e,Xo(e)),ws(Of,t)}}function Df(e,t,n){e==="focusin"?(ru(),xn=t,An=n,xn.attachEvent("onpropertychange",Ws)):e==="focusout"&&ru()}function Mf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(An)}function Rf(e,t){if(e==="click")return rl(t)}function If(e,t){if(e==="input"||e==="change")return rl(t)}function Af(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:Af;function Fn(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Yl.call(t,l)||!De(e[l],t[l]))return!1}return!0}function lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ou(e,t){var n=lu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lu(n)}}function Vs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $s(){for(var e=window,t=Lr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lr(e.document)}return t}function li(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ff(e){var t=$s(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vs(n.ownerDocument.documentElement,n)){if(r!==null&&li(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ou(n,o);var i=ou(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Uf=He&&"documentMode"in document&&11>=document.documentMode,It=null,fo=null,Pn=null,po=!1;function iu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;po||It==null||It!==Lr(r)||(r=It,"selectionStart"in r&&li(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pn&&Fn(Pn,r)||(Pn=r,r=Ar(fo,"onSelect"),0<r.length&&(t=new ti("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=It)))}function ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var At={animationend:ar("Animation","AnimationEnd"),animationiteration:ar("Animation","AnimationIteration"),animationstart:ar("Animation","AnimationStart"),transitionend:ar("Transition","TransitionEnd")},Ll={},Bs={};He&&(Bs=document.createElement("div").style,"AnimationEvent"in window||(delete At.animationend.animation,delete At.animationiteration.animation,delete At.animationstart.animation),"TransitionEvent"in window||delete At.transitionend.transition);function ll(e){if(Ll[e])return Ll[e];if(!At[e])return e;var t=At[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bs)return Ll[e]=t[n];return e}var Hs=ll("animationend"),Qs=ll("animationiteration"),Ys=ll("animationstart"),Gs=ll("transitionend"),Ks=new Map,uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){Ks.set(e,t),Lt(t,[e])}for(var Ol=0;Ol<uu.length;Ol++){var jl=uu[Ol],Wf=jl.toLowerCase(),Vf=jl[0].toUpperCase()+jl.slice(1);pt(Wf,"on"+Vf)}pt(Hs,"onAnimationEnd");pt(Qs,"onAnimationIteration");pt(Ys,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Gs,"onTransitionEnd");Zt("onMouseEnter",["mouseout","mouseover"]);Zt("onMouseLeave",["mouseout","mouseover"]);Zt("onPointerEnter",["pointerout","pointerover"]);Zt("onPointerLeave",["pointerout","pointerover"]);Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$f=new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));function su(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Uc(r,t,void 0,e),e.currentTarget=null}function Xs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var u=r[i],s=u.instance,c=u.currentTarget;if(u=u.listener,s!==o&&l.isPropagationStopped())break e;su(l,u,c),o=s}else for(i=0;i<r.length;i++){if(u=r[i],s=u.instance,c=u.currentTarget,u=u.listener,s!==o&&l.isPropagationStopped())break e;su(l,u,c),o=s}}}if(jr)throw e=uo,jr=!1,uo=null,e}function R(e,t){var n=t[yo];n===void 0&&(n=t[yo]=new Set);var r=e+"__bubble";n.has(r)||(Js(t,e,2,!1),n.add(r))}function Dl(e,t,n){var r=0;t&&(r|=4),Js(n,e,r,t)}var cr="_reactListening"+Math.random().toString(36).slice(2);function Un(e){if(!e[cr]){e[cr]=!0,rs.forEach(function(n){n!=="selectionchange"&&($f.has(n)||Dl(n,!1,e),Dl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cr]||(t[cr]=!0,Dl("selectionchange",!1,t))}}function Js(e,t,n,r){switch(Ds(t)){case 1:var l=tf;break;case 4:l=nf;break;default:l=bo}n=l.bind(null,t,n,e),l=void 0,!io||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ml(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;i=i.return}for(;u!==null;){if(i=St(u),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}u=u.parentNode}}r=r.return}ws(function(){var c=o,h=Xo(n),p=[];e:{var m=Ks.get(e);if(m!==void 0){var y=ti,w=e;switch(e){case"keypress":if(_r(n)===0)break e;case"keydown":case"keyup":y=yf;break;case"focusin":w="focus",y=Tl;break;case"focusout":w="blur",y=Tl;break;case"beforeblur":case"afterblur":y=Tl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ji;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=of;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=kf;break;case Hs:case Qs:case Ys:y=af;break;case Gs:y=Cf;break;case"scroll":y=rf;break;case"wheel":y=xf;break;case"copy":case"cut":case"paste":y=ff;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=qi}var S=(t&4)!==0,A=!S&&e==="scroll",f=S?m!==null?m+"Capture":null:m;S=[];for(var a=c,d;a!==null;){d=a;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,f!==null&&(g=Dn(a,f),g!=null&&S.push(Wn(a,g,d)))),A)break;a=a.return}0<S.length&&(m=new y(m,w,null,n,h),p.push({event:m,listeners:S}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==lo&&(w=n.relatedTarget||n.fromElement)&&(St(w)||w[Qe]))break e;if((y||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=c,w=w?St(w):null,w!==null&&(A=Ot(w),w!==A||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(S=Ji,g="onMouseLeave",f="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(S=qi,g="onPointerLeave",f="onPointerEnter",a="pointer"),A=y==null?m:Ft(y),d=w==null?m:Ft(w),m=new S(g,a+"leave",y,n,h),m.target=A,m.relatedTarget=d,g=null,St(h)===c&&(S=new S(f,a+"enter",w,n,h),S.target=d,S.relatedTarget=A,g=S),A=g,y&&w)t:{for(S=y,f=w,a=0,d=S;d;d=jt(d))a++;for(d=0,g=f;g;g=jt(g))d++;for(;0<a-d;)S=jt(S),a--;for(;0<d-a;)f=jt(f),d--;for(;a--;){if(S===f||f!==null&&S===f.alternate)break t;S=jt(S),f=jt(f)}S=null}else S=null;y!==null&&au(p,m,y,S,!1),w!==null&&A!==null&&au(p,A,w,S,!0)}}e:{if(m=c?Ft(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var _=jf;else if(tu(m))if(Us)_=If;else{_=Mf;var E=Df}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(_=Rf);if(_&&(_=_(e,c))){Fs(p,_,n,h);break e}E&&E(e,m,c),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&bl(m,"number",m.value)}switch(E=c?Ft(c):window,e){case"focusin":(tu(E)||E.contentEditable==="true")&&(It=E,fo=c,Pn=null);break;case"focusout":Pn=fo=It=null;break;case"mousedown":po=!0;break;case"contextmenu":case"mouseup":case"dragend":po=!1,iu(p,n,h);break;case"selectionchange":if(Uf)break;case"keydown":case"keyup":iu(p,n,h)}var x;if(ri)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Rt?Is(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Rs&&n.locale!=="ko"&&(Rt||P!=="onCompositionStart"?P==="onCompositionEnd"&&Rt&&(x=Ms()):(tt=h,ei="value"in tt?tt.value:tt.textContent,Rt=!0)),E=Ar(c,P),0<E.length&&(P=new Zi(P,e,null,n,h),p.push({event:P,listeners:E}),x?P.data=x:(x=As(n),x!==null&&(P.data=x)))),(x=Tf?Nf(e,n):zf(e,n))&&(c=Ar(c,"onBeforeInput"),0<c.length&&(h=new Zi("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=x))}Xs(p,t)})}function Wn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ar(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Dn(e,n),o!=null&&r.unshift(Wn(e,o,l)),o=Dn(e,t),o!=null&&r.push(Wn(e,o,l))),e=e.return}return r}function jt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function au(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var u=n,s=u.alternate,c=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&c!==null&&(u=c,l?(s=Dn(n,o),s!=null&&i.unshift(Wn(n,s,u))):l||(s=Dn(n,o),s!=null&&i.push(Wn(n,s,u)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Bf=/\r\n?/g,Hf=/\u0000|\uFFFD/g;function cu(e){return(typeof e=="string"?e:""+e).replace(Bf,`
`).replace(Hf,"")}function fr(e,t,n){if(t=cu(t),cu(e)!==t&&n)throw Error(v(425))}function Fr(){}var mo=null,ho=null;function go(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vo=typeof setTimeout=="function"?setTimeout:void 0,Qf=typeof clearTimeout=="function"?clearTimeout:void 0,fu=typeof Promise=="function"?Promise:void 0,Yf=typeof queueMicrotask=="function"?queueMicrotask:typeof fu<"u"?function(e){return fu.resolve(null).then(e).catch(Gf)}:vo;function Gf(e){setTimeout(function(){throw e})}function Rl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),In(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);In(t)}function it(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function du(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var un=Math.random().toString(36).slice(2),Ie="__reactFiber$"+un,Vn="__reactProps$"+un,Qe="__reactContainer$"+un,yo="__reactEvents$"+un,Kf="__reactListeners$"+un,Xf="__reactHandles$"+un;function St(e){var t=e[Ie];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qe]||n[Ie]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=du(e);e!==null;){if(n=e[Ie])return n;e=du(e)}return t}e=n,n=e.parentNode}return null}function Zn(e){return e=e[Ie]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ft(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function ol(e){return e[Vn]||null}var wo=[],Ut=-1;function mt(e){return{current:e}}function I(e){0>Ut||(e.current=wo[Ut],wo[Ut]=null,Ut--)}function M(e,t){Ut++,wo[Ut]=e.current,e.current=t}var dt={},le=mt(dt),fe=mt(!1),xt=dt;function qt(e,t){var n=e.type.contextTypes;if(!n)return dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function de(e){return e=e.childContextTypes,e!=null}function Ur(){I(fe),I(le)}function pu(e,t,n){if(le.current!==dt)throw Error(v(168));M(le,t),M(fe,n)}function Zs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(v(108,jc(e)||"Unknown",l));return V({},n,r)}function Wr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dt,xt=le.current,M(le,e),M(fe,fe.current),!0}function mu(e,t,n){var r=e.stateNode;if(!r)throw Error(v(169));n?(e=Zs(e,t,xt),r.__reactInternalMemoizedMergedChildContext=e,I(fe),I(le),M(le,e)):I(fe),M(fe,n)}var We=null,il=!1,Il=!1;function qs(e){We===null?We=[e]:We.push(e)}function Jf(e){il=!0,qs(e)}function ht(){if(!Il&&We!==null){Il=!0;var e=0,t=D;try{var n=We;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}We=null,il=!1}catch(l){throw We!==null&&(We=We.slice(e+1)),Cs(Jo,ht),l}finally{D=t,Il=!1}}return null}var Wt=[],Vt=0,Vr=null,$r=0,Se=[],ke=0,Pt=null,Ve=1,$e="";function yt(e,t){Wt[Vt++]=$r,Wt[Vt++]=Vr,Vr=e,$r=t}function bs(e,t,n){Se[ke++]=Ve,Se[ke++]=$e,Se[ke++]=Pt,Pt=e;var r=Ve;e=$e;var l=32-Oe(r)-1;r&=~(1<<l),n+=1;var o=32-Oe(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Ve=1<<32-Oe(t)+l|n<<l|r,$e=o+e}else Ve=1<<o|n<<l|r,$e=e}function oi(e){e.return!==null&&(yt(e,1),bs(e,1,0))}function ii(e){for(;e===Vr;)Vr=Wt[--Vt],Wt[Vt]=null,$r=Wt[--Vt],Wt[Vt]=null;for(;e===Pt;)Pt=Se[--ke],Se[ke]=null,$e=Se[--ke],Se[ke]=null,Ve=Se[--ke],Se[ke]=null}var ge=null,he=null,F=!1,Le=null;function ea(e,t){var n=_e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,he=it(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,he=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pt!==null?{id:Ve,overflow:$e}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ge=e,he=null,!0):!1;default:return!1}}function So(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ko(e){if(F){var t=he;if(t){var n=t;if(!hu(e,t)){if(So(e))throw Error(v(418));t=it(n.nextSibling);var r=ge;t&&hu(e,t)?ea(r,n):(e.flags=e.flags&-4097|2,F=!1,ge=e)}}else{if(So(e))throw Error(v(418));e.flags=e.flags&-4097|2,F=!1,ge=e}}}function gu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function dr(e){if(e!==ge)return!1;if(!F)return gu(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!go(e.type,e.memoizedProps)),t&&(t=he)){if(So(e))throw ta(),Error(v(418));for(;t;)ea(e,t),t=it(t.nextSibling)}if(gu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){he=it(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}he=null}}else he=ge?it(e.stateNode.nextSibling):null;return!0}function ta(){for(var e=he;e;)e=it(e.nextSibling)}function bt(){he=ge=null,F=!1}function ui(e){Le===null?Le=[e]:Le.push(e)}var Zf=Ke.ReactCurrentBatchConfig;function hn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var u=l.refs;i===null?delete u[o]:u[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(v(284));if(!n._owner)throw Error(v(290,e))}return e}function pr(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vu(e){var t=e._init;return t(e._payload)}function na(e){function t(f,a){if(e){var d=f.deletions;d===null?(f.deletions=[a],f.flags|=16):d.push(a)}}function n(f,a){if(!e)return null;for(;a!==null;)t(f,a),a=a.sibling;return null}function r(f,a){for(f=new Map;a!==null;)a.key!==null?f.set(a.key,a):f.set(a.index,a),a=a.sibling;return f}function l(f,a){return f=ct(f,a),f.index=0,f.sibling=null,f}function o(f,a,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<a?(f.flags|=2,a):d):(f.flags|=2,a)):(f.flags|=1048576,a)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,a,d,g){return a===null||a.tag!==6?(a=Bl(d,f.mode,g),a.return=f,a):(a=l(a,d),a.return=f,a)}function s(f,a,d,g){var _=d.type;return _===Mt?h(f,a,d.props.children,g,d.key):a!==null&&(a.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Je&&vu(_)===a.type)?(g=l(a,d.props),g.ref=hn(f,a,d),g.return=f,g):(g=zr(d.type,d.key,d.props,null,f.mode,g),g.ref=hn(f,a,d),g.return=f,g)}function c(f,a,d,g){return a===null||a.tag!==4||a.stateNode.containerInfo!==d.containerInfo||a.stateNode.implementation!==d.implementation?(a=Hl(d,f.mode,g),a.return=f,a):(a=l(a,d.children||[]),a.return=f,a)}function h(f,a,d,g,_){return a===null||a.tag!==7?(a=Et(d,f.mode,g,_),a.return=f,a):(a=l(a,d),a.return=f,a)}function p(f,a,d){if(typeof a=="string"&&a!==""||typeof a=="number")return a=Bl(""+a,f.mode,d),a.return=f,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case nr:return d=zr(a.type,a.key,a.props,null,f.mode,d),d.ref=hn(f,null,a),d.return=f,d;case Dt:return a=Hl(a,f.mode,d),a.return=f,a;case Je:var g=a._init;return p(f,g(a._payload),d)}if(wn(a)||cn(a))return a=Et(a,f.mode,d,null),a.return=f,a;pr(f,a)}return null}function m(f,a,d,g){var _=a!==null?a.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return _!==null?null:u(f,a,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case nr:return d.key===_?s(f,a,d,g):null;case Dt:return d.key===_?c(f,a,d,g):null;case Je:return _=d._init,m(f,a,_(d._payload),g)}if(wn(d)||cn(d))return _!==null?null:h(f,a,d,g,null);pr(f,d)}return null}function y(f,a,d,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(d)||null,u(a,f,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case nr:return f=f.get(g.key===null?d:g.key)||null,s(a,f,g,_);case Dt:return f=f.get(g.key===null?d:g.key)||null,c(a,f,g,_);case Je:var E=g._init;return y(f,a,d,E(g._payload),_)}if(wn(g)||cn(g))return f=f.get(d)||null,h(a,f,g,_,null);pr(a,g)}return null}function w(f,a,d,g){for(var _=null,E=null,x=a,P=a=0,B=null;x!==null&&P<d.length;P++){x.index>P?(B=x,x=null):B=x.sibling;var L=m(f,x,d[P],g);if(L===null){x===null&&(x=B);break}e&&x&&L.alternate===null&&t(f,x),a=o(L,a,P),E===null?_=L:E.sibling=L,E=L,x=B}if(P===d.length)return n(f,x),F&&yt(f,P),_;if(x===null){for(;P<d.length;P++)x=p(f,d[P],g),x!==null&&(a=o(x,a,P),E===null?_=x:E.sibling=x,E=x);return F&&yt(f,P),_}for(x=r(f,x);P<d.length;P++)B=y(x,f,P,d[P],g),B!==null&&(e&&B.alternate!==null&&x.delete(B.key===null?P:B.key),a=o(B,a,P),E===null?_=B:E.sibling=B,E=B);return e&&x.forEach(function(Pe){return t(f,Pe)}),F&&yt(f,P),_}function S(f,a,d,g){var _=cn(d);if(typeof _!="function")throw Error(v(150));if(d=_.call(d),d==null)throw Error(v(151));for(var E=_=null,x=a,P=a=0,B=null,L=d.next();x!==null&&!L.done;P++,L=d.next()){x.index>P?(B=x,x=null):B=x.sibling;var Pe=m(f,x,L.value,g);if(Pe===null){x===null&&(x=B);break}e&&x&&Pe.alternate===null&&t(f,x),a=o(Pe,a,P),E===null?_=Pe:E.sibling=Pe,E=Pe,x=B}if(L.done)return n(f,x),F&&yt(f,P),_;if(x===null){for(;!L.done;P++,L=d.next())L=p(f,L.value,g),L!==null&&(a=o(L,a,P),E===null?_=L:E.sibling=L,E=L);return F&&yt(f,P),_}for(x=r(f,x);!L.done;P++,L=d.next())L=y(x,f,P,L.value,g),L!==null&&(e&&L.alternate!==null&&x.delete(L.key===null?P:L.key),a=o(L,a,P),E===null?_=L:E.sibling=L,E=L);return e&&x.forEach(function(sn){return t(f,sn)}),F&&yt(f,P),_}function A(f,a,d,g){if(typeof d=="object"&&d!==null&&d.type===Mt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case nr:e:{for(var _=d.key,E=a;E!==null;){if(E.key===_){if(_=d.type,_===Mt){if(E.tag===7){n(f,E.sibling),a=l(E,d.props.children),a.return=f,f=a;break e}}else if(E.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Je&&vu(_)===E.type){n(f,E.sibling),a=l(E,d.props),a.ref=hn(f,E,d),a.return=f,f=a;break e}n(f,E);break}else t(f,E);E=E.sibling}d.type===Mt?(a=Et(d.props.children,f.mode,g,d.key),a.return=f,f=a):(g=zr(d.type,d.key,d.props,null,f.mode,g),g.ref=hn(f,a,d),g.return=f,f=g)}return i(f);case Dt:e:{for(E=d.key;a!==null;){if(a.key===E)if(a.tag===4&&a.stateNode.containerInfo===d.containerInfo&&a.stateNode.implementation===d.implementation){n(f,a.sibling),a=l(a,d.children||[]),a.return=f,f=a;break e}else{n(f,a);break}else t(f,a);a=a.sibling}a=Hl(d,f.mode,g),a.return=f,f=a}return i(f);case Je:return E=d._init,A(f,a,E(d._payload),g)}if(wn(d))return w(f,a,d,g);if(cn(d))return S(f,a,d,g);pr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,a!==null&&a.tag===6?(n(f,a.sibling),a=l(a,d),a.return=f,f=a):(n(f,a),a=Bl(d,f.mode,g),a.return=f,f=a),i(f)):n(f,a)}return A}var en=na(!0),ra=na(!1),Br=mt(null),Hr=null,$t=null,si=null;function ai(){si=$t=Hr=null}function ci(e){var t=Br.current;I(Br),e._currentValue=t}function _o(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xt(e,t){Hr=e,si=$t=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(si!==e)if(e={context:e,memoizedValue:t,next:null},$t===null){if(Hr===null)throw Error(v(308));$t=e,Hr.dependencies={lanes:0,firstContext:e}}else $t=$t.next=e;return t}var kt=null;function fi(e){kt===null?kt=[e]:kt.push(e)}function la(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,fi(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ze=!1;function di(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Be(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ye(e,n)}return l=r.interleaved,l===null?(t.next=t,fi(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ye(e,n)}function Cr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zo(e,n)}}function yu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qr(e,t,n,r){var l=e.updateQueue;Ze=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,c=s.next;s.next=null,i===null?o=c:i.next=c,i=s;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==i&&(u===null?h.firstBaseUpdate=c:u.next=c,h.lastBaseUpdate=s))}if(o!==null){var p=l.baseState;i=0,h=c=s=null,u=o;do{var m=u.lane,y=u.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:y,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var w=e,S=u;switch(m=t,y=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){p=w.call(y,p,m);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,m=typeof w=="function"?w.call(y,p,m):w,m==null)break e;p=V({},p,m);break e;case 2:Ze=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[u]:m.push(u))}else y={eventTime:y,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(c=h=y,s=p):h=h.next=y,i|=m;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;m=u,u=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(h===null&&(s=p),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Nt|=i,e.lanes=i,e.memoizedState=p}}function wu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(v(191,l));l.call(r)}}}var qn={},Fe=mt(qn),$n=mt(qn),Bn=mt(qn);function _t(e){if(e===qn)throw Error(v(174));return e}function pi(e,t){switch(M(Bn,t),M($n,e),M(Fe,qn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:to(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=to(t,e)}I(Fe),M(Fe,t)}function tn(){I(Fe),I($n),I(Bn)}function ia(e){_t(Bn.current);var t=_t(Fe.current),n=to(t,e.type);t!==n&&(M($n,e),M(Fe,n))}function mi(e){$n.current===e&&(I(Fe),I($n))}var U=mt(0);function Yr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Al=[];function hi(){for(var e=0;e<Al.length;e++)Al[e]._workInProgressVersionPrimary=null;Al.length=0}var Er=Ke.ReactCurrentDispatcher,Fl=Ke.ReactCurrentBatchConfig,Tt=0,W=null,G=null,J=null,Gr=!1,Tn=!1,Hn=0,qf=0;function te(){throw Error(v(321))}function gi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function vi(e,t,n,r,l,o){if(Tt=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Er.current=e===null||e.memoizedState===null?nd:rd,e=n(r,l),Tn){o=0;do{if(Tn=!1,Hn=0,25<=o)throw Error(v(301));o+=1,J=G=null,t.updateQueue=null,Er.current=ld,e=n(r,l)}while(Tn)}if(Er.current=Kr,t=G!==null&&G.next!==null,Tt=0,J=G=W=null,Gr=!1,t)throw Error(v(300));return e}function yi(){var e=Hn!==0;return Hn=0,e}function Re(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?W.memoizedState=J=e:J=J.next=e,J}function xe(){if(G===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=J===null?W.memoizedState:J.next;if(t!==null)J=t,G=e;else{if(e===null)throw Error(v(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},J===null?W.memoizedState=J=e:J=J.next=e}return J}function Qn(e,t){return typeof t=="function"?t(e):t}function Ul(e){var t=xe(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=G,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var u=i=null,s=null,c=o;do{var h=c.lane;if((Tt&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(u=s=p,i=r):s=s.next=p,W.lanes|=h,Nt|=h}c=c.next}while(c!==null&&c!==o);s===null?i=r:s.next=u,De(r,t.memoizedState)||(ce=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,W.lanes|=o,Nt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wl(e){var t=xe(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);De(o,t.memoizedState)||(ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ua(){}function sa(e,t){var n=W,r=xe(),l=t(),o=!De(r.memoizedState,l);if(o&&(r.memoizedState=l,ce=!0),r=r.queue,wi(fa.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Yn(9,ca.bind(null,n,r,l,t),void 0,null),Z===null)throw Error(v(349));Tt&30||aa(n,t,l)}return l}function aa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ca(e,t,n,r){t.value=n,t.getSnapshot=r,da(t)&&pa(e)}function fa(e,t,n){return n(function(){da(t)&&pa(e)})}function da(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function pa(e){var t=Ye(e,1);t!==null&&je(t,e,1,-1)}function Su(e){var t=Re();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:e},t.queue=e,e=e.dispatch=td.bind(null,W,e),[t.memoizedState,e]}function Yn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ma(){return xe().memoizedState}function xr(e,t,n,r){var l=Re();W.flags|=e,l.memoizedState=Yn(1|t,n,void 0,r===void 0?null:r)}function ul(e,t,n,r){var l=xe();r=r===void 0?null:r;var o=void 0;if(G!==null){var i=G.memoizedState;if(o=i.destroy,r!==null&&gi(r,i.deps)){l.memoizedState=Yn(t,n,o,r);return}}W.flags|=e,l.memoizedState=Yn(1|t,n,o,r)}function ku(e,t){return xr(8390656,8,e,t)}function wi(e,t){return ul(2048,8,e,t)}function ha(e,t){return ul(4,2,e,t)}function ga(e,t){return ul(4,4,e,t)}function va(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ya(e,t,n){return n=n!=null?n.concat([e]):null,ul(4,4,va.bind(null,t,e),n)}function Si(){}function wa(e,t){var n=xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sa(e,t){var n=xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ka(e,t,n){return Tt&21?(De(n,t)||(n=Ps(),W.lanes|=n,Nt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=n)}function bf(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Fl.transition;Fl.transition={};try{e(!1),t()}finally{D=n,Fl.transition=r}}function _a(){return xe().memoizedState}function ed(e,t,n){var r=at(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ca(e))Ea(t,n);else if(n=la(e,t,n,r),n!==null){var l=ie();je(n,e,r,l),xa(n,t,r)}}function td(e,t,n){var r=at(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ca(e))Ea(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,u=o(i,n);if(l.hasEagerState=!0,l.eagerState=u,De(u,i)){var s=t.interleaved;s===null?(l.next=l,fi(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=la(e,t,l,r),n!==null&&(l=ie(),je(n,e,r,l),xa(n,t,r))}}function Ca(e){var t=e.alternate;return e===W||t!==null&&t===W}function Ea(e,t){Tn=Gr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xa(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zo(e,n)}}var Kr={readContext:Ee,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},nd={readContext:Ee,useCallback:function(e,t){return Re().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:ku,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,xr(4194308,4,va.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xr(4194308,4,e,t)},useInsertionEffect:function(e,t){return xr(4,2,e,t)},useMemo:function(e,t){var n=Re();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Re();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ed.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Re();return e={current:e},t.memoizedState=e},useState:Su,useDebugValue:Si,useDeferredValue:function(e){return Re().memoizedState=e},useTransition:function(){var e=Su(!1),t=e[0];return e=bf.bind(null,e[1]),Re().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,l=Re();if(F){if(n===void 0)throw Error(v(407));n=n()}else{if(n=t(),Z===null)throw Error(v(349));Tt&30||aa(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,ku(fa.bind(null,r,o,e),[e]),r.flags|=2048,Yn(9,ca.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Re(),t=Z.identifierPrefix;if(F){var n=$e,r=Ve;n=(r&~(1<<32-Oe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Hn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rd={readContext:Ee,useCallback:wa,useContext:Ee,useEffect:wi,useImperativeHandle:ya,useInsertionEffect:ha,useLayoutEffect:ga,useMemo:Sa,useReducer:Ul,useRef:ma,useState:function(){return Ul(Qn)},useDebugValue:Si,useDeferredValue:function(e){var t=xe();return ka(t,G.memoizedState,e)},useTransition:function(){var e=Ul(Qn)[0],t=xe().memoizedState;return[e,t]},useMutableSource:ua,useSyncExternalStore:sa,useId:_a,unstable_isNewReconciler:!1},ld={readContext:Ee,useCallback:wa,useContext:Ee,useEffect:wi,useImperativeHandle:ya,useInsertionEffect:ha,useLayoutEffect:ga,useMemo:Sa,useReducer:Wl,useRef:ma,useState:function(){return Wl(Qn)},useDebugValue:Si,useDeferredValue:function(e){var t=xe();return G===null?t.memoizedState=e:ka(t,G.memoizedState,e)},useTransition:function(){var e=Wl(Qn)[0],t=xe().memoizedState;return[e,t]},useMutableSource:ua,useSyncExternalStore:sa,useId:_a,unstable_isNewReconciler:!1};function Ne(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Co(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var sl={isMounted:function(e){return(e=e._reactInternals)?Ot(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ie(),l=at(e),o=Be(r,l);o.payload=t,n!=null&&(o.callback=n),t=ut(e,o,l),t!==null&&(je(t,e,l,r),Cr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ie(),l=at(e),o=Be(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ut(e,o,l),t!==null&&(je(t,e,l,r),Cr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ie(),r=at(e),l=Be(n,r);l.tag=2,t!=null&&(l.callback=t),t=ut(e,l,r),t!==null&&(je(t,e,r,n),Cr(t,e,r))}};function _u(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Fn(n,r)||!Fn(l,o):!0}function Pa(e,t,n){var r=!1,l=dt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ee(o):(l=de(t)?xt:le.current,r=t.contextTypes,o=(r=r!=null)?qt(e,l):dt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=sl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Cu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&sl.enqueueReplaceState(t,t.state,null)}function Eo(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},di(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Ee(o):(o=de(t)?xt:le.current,l.context=qt(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Co(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&sl.enqueueReplaceState(l,l.state,null),Qr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,t){try{var n="",r=t;do n+=Oc(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Vl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var od=typeof WeakMap=="function"?WeakMap:Map;function Ta(e,t,n){n=Be(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Jr||(Jr=!0,Ro=r),xo(e,t)},n}function Na(e,t,n){n=Be(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){xo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){xo(e,t),typeof r!="function"&&(st===null?st=new Set([this]):st.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Eu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new od;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=wd.bind(null,e,t,n),t.then(e,e))}function xu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pu(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Be(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var id=Ke.ReactCurrentOwner,ce=!1;function oe(e,t,n,r){t.child=e===null?ra(t,null,n,r):en(t,e.child,n,r)}function Tu(e,t,n,r,l){n=n.render;var o=t.ref;return Xt(t,l),r=vi(e,t,n,r,o,l),n=yi(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(F&&n&&oi(t),t.flags|=1,oe(e,t,r,l),t.child)}function Nu(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Ni(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,za(e,t,o,r,l)):(e=zr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Fn,n(i,r)&&e.ref===t.ref)return Ge(e,t,l)}return t.flags|=1,e=ct(o,r),e.ref=t.ref,e.return=t,t.child=e}function za(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Fn(o,r)&&e.ref===t.ref)if(ce=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Ge(e,t,l)}return Po(e,t,n,r,l)}function La(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(Ht,me),me|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,M(Ht,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,M(Ht,me),me|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,M(Ht,me),me|=r;return oe(e,t,l,n),t.child}function Oa(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Po(e,t,n,r,l){var o=de(n)?xt:le.current;return o=qt(t,o),Xt(t,l),n=vi(e,t,n,r,o,l),r=yi(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(F&&r&&oi(t),t.flags|=1,oe(e,t,n,l),t.child)}function zu(e,t,n,r,l){if(de(n)){var o=!0;Wr(t)}else o=!1;if(Xt(t,l),t.stateNode===null)Pr(e,t),Pa(t,n,r),Eo(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,u=t.memoizedProps;i.props=u;var s=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ee(c):(c=de(n)?xt:le.current,c=qt(t,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||s!==c)&&Cu(t,i,r,c),Ze=!1;var m=t.memoizedState;i.state=m,Qr(t,r,i,l),s=t.memoizedState,u!==r||m!==s||fe.current||Ze?(typeof h=="function"&&(Co(t,n,h,r),s=t.memoizedState),(u=Ze||_u(t,n,u,r,m,s,c))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,oa(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:Ne(t.type,u),i.props=c,p=t.pendingProps,m=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ee(s):(s=de(n)?xt:le.current,s=qt(t,s));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==p||m!==s)&&Cu(t,i,r,s),Ze=!1,m=t.memoizedState,i.state=m,Qr(t,r,i,l);var w=t.memoizedState;u!==p||m!==w||fe.current||Ze?(typeof y=="function"&&(Co(t,n,y,r),w=t.memoizedState),(c=Ze||_u(t,n,c,r,m,w,s)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return To(e,t,n,r,o,l)}function To(e,t,n,r,l,o){Oa(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&mu(t,n,!1),Ge(e,t,o);r=t.stateNode,id.current=t;var u=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=en(t,e.child,null,o),t.child=en(t,null,u,o)):oe(e,t,u,o),t.memoizedState=r.state,l&&mu(t,n,!0),t.child}function ja(e){var t=e.stateNode;t.pendingContext?pu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pu(e,t.context,!1),pi(e,t.containerInfo)}function Lu(e,t,n,r,l){return bt(),ui(l),t.flags|=256,oe(e,t,n,r),t.child}var No={dehydrated:null,treeContext:null,retryLane:0};function zo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Da(e,t,n){var r=t.pendingProps,l=U.current,o=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),M(U,l&1),e===null)return ko(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=fl(i,r,0,null),e=Et(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=zo(n),t.memoizedState=No,e):ki(t,i));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return ud(e,t,i,r,u,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,u=l.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=ct(l,s),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?o=ct(u,o):(o=Et(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?zo(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=No,r}return o=e.child,e=o.sibling,r=ct(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ki(e,t){return t=fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mr(e,t,n,r){return r!==null&&ui(r),en(t,e.child,null,n),e=ki(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ud(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Vl(Error(v(422))),mr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=fl({mode:"visible",children:r.children},l,0,null),o=Et(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&en(t,e.child,null,i),t.child.memoizedState=zo(i),t.memoizedState=No,o);if(!(t.mode&1))return mr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(v(419)),r=Vl(o,r,void 0),mr(e,t,i,r)}if(u=(i&e.childLanes)!==0,ce||u){if(r=Z,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ye(e,l),je(r,e,l,-1))}return Ti(),r=Vl(Error(v(421))),mr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Sd.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,he=it(l.nextSibling),ge=t,F=!0,Le=null,e!==null&&(Se[ke++]=Ve,Se[ke++]=$e,Se[ke++]=Pt,Ve=e.id,$e=e.overflow,Pt=t),t=ki(t,r.children),t.flags|=4096,t)}function Ou(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_o(e.return,t,n)}function $l(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Ma(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(oe(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ou(e,n,t);else if(e.tag===19)Ou(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(U,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Yr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),$l(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Yr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}$l(t,!0,n,null,o);break;case"together":$l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sd(e,t,n){switch(t.tag){case 3:ja(t),bt();break;case 5:ia(t);break;case 1:de(t.type)&&Wr(t);break;case 4:pi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;M(Br,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(M(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Da(e,t,n):(M(U,U.current&1),e=Ge(e,t,n),e!==null?e.sibling:null);M(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ma(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),M(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,La(e,t,n)}return Ge(e,t,n)}var Ra,Lo,Ia,Aa;Ra=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lo=function(){};Ia=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,_t(Fe.current);var o=null;switch(n){case"input":l=Zl(e,l),r=Zl(e,r),o=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),o=[];break;case"textarea":l=eo(e,l),r=eo(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fr)}no(n,r);var i;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(i in u)u.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(On.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(u=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==u&&(s!=null||u!=null))if(c==="style")if(u){for(i in u)!u.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&u[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(On.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&R("scroll",e),o||u===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Aa=function(e,t,n,r){n!==r&&(t.flags|=4)};function gn(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ad(e,t,n){var r=t.pendingProps;switch(ii(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return de(t.type)&&Ur(),ne(t),null;case 3:return r=t.stateNode,tn(),I(fe),I(le),hi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(dr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Fo(Le),Le=null))),Lo(e,t),ne(t),null;case 5:mi(t);var l=_t(Bn.current);if(n=t.type,e!==null&&t.stateNode!=null)Ia(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(v(166));return ne(t),null}if(e=_t(Fe.current),dr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ie]=t,r[Vn]=o,e=(t.mode&1)!==0,n){case"dialog":R("cancel",r),R("close",r);break;case"iframe":case"object":case"embed":R("load",r);break;case"video":case"audio":for(l=0;l<kn.length;l++)R(kn[l],r);break;case"source":R("error",r);break;case"img":case"image":case"link":R("error",r),R("load",r);break;case"details":R("toggle",r);break;case"input":Wi(r,o),R("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},R("invalid",r);break;case"textarea":$i(r,o),R("invalid",r)}no(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&fr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&fr(r.textContent,u,e),l=["children",""+u]):On.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&R("scroll",r)}switch(n){case"input":rr(r),Vi(r,o,!0);break;case"textarea":rr(r),Bi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Fr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ie]=t,e[Vn]=r,Ra(e,t,!1,!1),t.stateNode=e;e:{switch(i=ro(n,r),n){case"dialog":R("cancel",e),R("close",e),l=r;break;case"iframe":case"object":case"embed":R("load",e),l=r;break;case"video":case"audio":for(l=0;l<kn.length;l++)R(kn[l],e);l=r;break;case"source":R("error",e),l=r;break;case"img":case"image":case"link":R("error",e),R("load",e),l=r;break;case"details":R("toggle",e),l=r;break;case"input":Wi(e,r),l=Zl(e,r),R("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),R("invalid",e);break;case"textarea":$i(e,r),l=eo(e,r),R("invalid",e);break;default:l=r}no(n,l),u=l;for(o in u)if(u.hasOwnProperty(o)){var s=u[o];o==="style"?ms(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ds(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&jn(e,s):typeof s=="number"&&jn(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(On.hasOwnProperty(o)?s!=null&&o==="onScroll"&&R("scroll",e):s!=null&&Qo(e,o,s,i))}switch(n){case"input":rr(e),Vi(e,r,!1);break;case"textarea":rr(e),Bi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ft(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Qt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Fr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)Aa(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(v(166));if(n=_t(Bn.current),_t(Fe.current),dr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ie]=t,(o=r.nodeValue!==n)&&(e=ge,e!==null))switch(e.tag){case 3:fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ie]=t,t.stateNode=r}return ne(t),null;case 13:if(I(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&he!==null&&t.mode&1&&!(t.flags&128))ta(),bt(),t.flags|=98560,o=!1;else if(o=dr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(v(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(v(317));o[Ie]=t}else bt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),o=!1}else Le!==null&&(Fo(Le),Le=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?K===0&&(K=3):Ti())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return tn(),Lo(e,t),e===null&&Un(t.stateNode.containerInfo),ne(t),null;case 10:return ci(t.type._context),ne(t),null;case 17:return de(t.type)&&Ur(),ne(t),null;case 19:if(I(U),o=t.memoizedState,o===null)return ne(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)gn(o,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Yr(e),i!==null){for(t.flags|=128,gn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return M(U,U.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>rn&&(t.flags|=128,r=!0,gn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Yr(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!F)return ne(t),null}else 2*Q()-o.renderingStartTime>rn&&n!==1073741824&&(t.flags|=128,r=!0,gn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,n=U.current,M(U,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return Pi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?me&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(v(156,t.tag))}function cd(e,t){switch(ii(t),t.tag){case 1:return de(t.type)&&Ur(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(),I(fe),I(le),hi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mi(t),null;case 13:if(I(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));bt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return I(U),null;case 4:return tn(),null;case 10:return ci(t.type._context),null;case 22:case 23:return Pi(),null;case 24:return null;default:return null}}var hr=!1,re=!1,fd=typeof WeakSet=="function"?WeakSet:Set,k=null;function Bt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$(e,t,r)}else n.current=null}function Oo(e,t,n){try{n()}catch(r){$(e,t,r)}}var ju=!1;function dd(e,t){if(mo=Rr,e=$s(),li(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,u=-1,s=-1,c=0,h=0,p=e,m=null;t:for(;;){for(var y;p!==n||l!==0&&p.nodeType!==3||(u=i+l),p!==o||r!==0&&p.nodeType!==3||(s=i+r),p.nodeType===3&&(i+=p.nodeValue.length),(y=p.firstChild)!==null;)m=p,p=y;for(;;){if(p===e)break t;if(m===n&&++c===l&&(u=i),m===o&&++h===r&&(s=i),(y=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=y}n=u===-1||s===-1?null:{start:u,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ho={focusedElem:e,selectionRange:n},Rr=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,A=w.memoizedState,f=t.stateNode,a=f.getSnapshotBeforeUpdate(t.elementType===t.type?S:Ne(t.type,S),A);f.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(g){$(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return w=ju,ju=!1,w}function Nn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Oo(t,n,o)}l=l.next}while(l!==r)}}function al(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function jo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Fa(e){var t=e.alternate;t!==null&&(e.alternate=null,Fa(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ie],delete t[Vn],delete t[yo],delete t[Kf],delete t[Xf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ua(e){return e.tag===5||e.tag===3||e.tag===4}function Du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ua(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Do(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fr));else if(r!==4&&(e=e.child,e!==null))for(Do(e,t,n),e=e.sibling;e!==null;)Do(e,t,n),e=e.sibling}function Mo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Mo(e,t,n),e=e.sibling;e!==null;)Mo(e,t,n),e=e.sibling}var q=null,ze=!1;function Xe(e,t,n){for(n=n.child;n!==null;)Wa(e,t,n),n=n.sibling}function Wa(e,t,n){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(tl,n)}catch{}switch(n.tag){case 5:re||Bt(n,t);case 6:var r=q,l=ze;q=null,Xe(e,t,n),q=r,ze=l,q!==null&&(ze?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(ze?(e=q,n=n.stateNode,e.nodeType===8?Rl(e.parentNode,n):e.nodeType===1&&Rl(e,n),In(e)):Rl(q,n.stateNode));break;case 4:r=q,l=ze,q=n.stateNode.containerInfo,ze=!0,Xe(e,t,n),q=r,ze=l;break;case 0:case 11:case 14:case 15:if(!re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Oo(n,t,i),l=l.next}while(l!==r)}Xe(e,t,n);break;case 1:if(!re&&(Bt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){$(n,t,u)}Xe(e,t,n);break;case 21:Xe(e,t,n);break;case 22:n.mode&1?(re=(r=re)||n.memoizedState!==null,Xe(e,t,n),re=r):Xe(e,t,n);break;default:Xe(e,t,n)}}function Mu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fd),t.forEach(function(r){var l=kd.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Te(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,u=i;e:for(;u!==null;){switch(u.tag){case 5:q=u.stateNode,ze=!1;break e;case 3:q=u.stateNode.containerInfo,ze=!0;break e;case 4:q=u.stateNode.containerInfo,ze=!0;break e}u=u.return}if(q===null)throw Error(v(160));Wa(o,i,l),q=null,ze=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){$(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Va(t,e),t=t.sibling}function Va(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Te(t,e),Me(e),r&4){try{Nn(3,e,e.return),al(3,e)}catch(S){$(e,e.return,S)}try{Nn(5,e,e.return)}catch(S){$(e,e.return,S)}}break;case 1:Te(t,e),Me(e),r&512&&n!==null&&Bt(n,n.return);break;case 5:if(Te(t,e),Me(e),r&512&&n!==null&&Bt(n,n.return),e.flags&32){var l=e.stateNode;try{jn(l,"")}catch(S){$(e,e.return,S)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&as(l,o),ro(u,i);var c=ro(u,o);for(i=0;i<s.length;i+=2){var h=s[i],p=s[i+1];h==="style"?ms(l,p):h==="dangerouslySetInnerHTML"?ds(l,p):h==="children"?jn(l,p):Qo(l,h,p,c)}switch(u){case"input":ql(l,o);break;case"textarea":cs(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Qt(l,!!o.multiple,y,!1):m!==!!o.multiple&&(o.defaultValue!=null?Qt(l,!!o.multiple,o.defaultValue,!0):Qt(l,!!o.multiple,o.multiple?[]:"",!1))}l[Vn]=o}catch(S){$(e,e.return,S)}}break;case 6:if(Te(t,e),Me(e),r&4){if(e.stateNode===null)throw Error(v(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(S){$(e,e.return,S)}}break;case 3:if(Te(t,e),Me(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{In(t.containerInfo)}catch(S){$(e,e.return,S)}break;case 4:Te(t,e),Me(e);break;case 13:Te(t,e),Me(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ei=Q())),r&4&&Mu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(re=(c=re)||h,Te(t,e),re=c):Te(t,e),Me(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(k=e,h=e.child;h!==null;){for(p=k=h;k!==null;){switch(m=k,y=m.child,m.tag){case 0:case 11:case 14:case 15:Nn(4,m,m.return);break;case 1:Bt(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){$(r,n,S)}}break;case 5:Bt(m,m.return);break;case 22:if(m.memoizedState!==null){Iu(p);continue}}y!==null?(y.return=m,k=y):Iu(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{l=p.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=p.stateNode,s=p.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=ps("display",i))}catch(S){$(e,e.return,S)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(S){$(e,e.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Te(t,e),Me(e),r&4&&Mu(e);break;case 21:break;default:Te(t,e),Me(e)}}function Me(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ua(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(jn(l,""),r.flags&=-33);var o=Du(e);Mo(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,u=Du(e);Do(e,u,i);break;default:throw Error(v(161))}}catch(s){$(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pd(e,t,n){k=e,$a(e)}function $a(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var l=k,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||hr;if(!i){var u=l.alternate,s=u!==null&&u.memoizedState!==null||re;u=hr;var c=re;if(hr=i,(re=s)&&!c)for(k=l;k!==null;)i=k,s=i.child,i.tag===22&&i.memoizedState!==null?Au(l):s!==null?(s.return=i,k=s):Au(l);for(;o!==null;)k=o,$a(o),o=o.sibling;k=l,hr=u,re=c}Ru(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,k=o):Ru(e)}}function Ru(e){for(;k!==null;){var t=k;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||al(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!re)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ne(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&wu(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wu(t,i,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&In(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}re||t.flags&512&&jo(t)}catch(m){$(t,t.return,m)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function Iu(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function Au(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{al(4,t)}catch(s){$(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){$(t,l,s)}}var o=t.return;try{jo(t)}catch(s){$(t,o,s)}break;case 5:var i=t.return;try{jo(t)}catch(s){$(t,i,s)}}}catch(s){$(t,t.return,s)}if(t===e){k=null;break}var u=t.sibling;if(u!==null){u.return=t.return,k=u;break}k=t.return}}var md=Math.ceil,Xr=Ke.ReactCurrentDispatcher,_i=Ke.ReactCurrentOwner,Ce=Ke.ReactCurrentBatchConfig,j=0,Z=null,Y=null,b=0,me=0,Ht=mt(0),K=0,Gn=null,Nt=0,cl=0,Ci=0,zn=null,ae=null,Ei=0,rn=1/0,Ue=null,Jr=!1,Ro=null,st=null,gr=!1,nt=null,Zr=0,Ln=0,Io=null,Tr=-1,Nr=0;function ie(){return j&6?Q():Tr!==-1?Tr:Tr=Q()}function at(e){return e.mode&1?j&2&&b!==0?b&-b:Zf.transition!==null?(Nr===0&&(Nr=Ps()),Nr):(e=D,e!==0||(e=window.event,e=e===void 0?16:Ds(e.type)),e):1}function je(e,t,n,r){if(50<Ln)throw Ln=0,Io=null,Error(v(185));Xn(e,n,r),(!(j&2)||e!==Z)&&(e===Z&&(!(j&2)&&(cl|=n),K===4&&be(e,b)),pe(e,r),n===1&&j===0&&!(t.mode&1)&&(rn=Q()+500,il&&ht()))}function pe(e,t){var n=e.callbackNode;Jc(e,t);var r=Mr(e,e===Z?b:0);if(r===0)n!==null&&Yi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Yi(n),t===1)e.tag===0?Jf(Fu.bind(null,e)):qs(Fu.bind(null,e)),Yf(function(){!(j&6)&&ht()}),n=null;else{switch(Ts(r)){case 1:n=Jo;break;case 4:n=Es;break;case 16:n=Dr;break;case 536870912:n=xs;break;default:n=Dr}n=Ja(n,Ba.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ba(e,t){if(Tr=-1,Nr=0,j&6)throw Error(v(327));var n=e.callbackNode;if(Jt()&&e.callbackNode!==n)return null;var r=Mr(e,e===Z?b:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qr(e,r);else{t=r;var l=j;j|=2;var o=Qa();(Z!==e||b!==t)&&(Ue=null,rn=Q()+500,Ct(e,t));do try{vd();break}catch(u){Ha(e,u)}while(!0);ai(),Xr.current=o,j=l,Y!==null?t=0:(Z=null,b=0,t=K)}if(t!==0){if(t===2&&(l=so(e),l!==0&&(r=l,t=Ao(e,l))),t===1)throw n=Gn,Ct(e,0),be(e,r),pe(e,Q()),n;if(t===6)be(e,r);else{if(l=e.current.alternate,!(r&30)&&!hd(l)&&(t=qr(e,r),t===2&&(o=so(e),o!==0&&(r=o,t=Ao(e,o))),t===1))throw n=Gn,Ct(e,0),be(e,r),pe(e,Q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(v(345));case 2:wt(e,ae,Ue);break;case 3:if(be(e,r),(r&130023424)===r&&(t=Ei+500-Q(),10<t)){if(Mr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ie(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=vo(wt.bind(null,e,ae,Ue),t);break}wt(e,ae,Ue);break;case 4:if(be(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Oe(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*md(r/1960))-r,10<r){e.timeoutHandle=vo(wt.bind(null,e,ae,Ue),r);break}wt(e,ae,Ue);break;case 5:wt(e,ae,Ue);break;default:throw Error(v(329))}}}return pe(e,Q()),e.callbackNode===n?Ba.bind(null,e):null}function Ao(e,t){var n=zn;return e.current.memoizedState.isDehydrated&&(Ct(e,t).flags|=256),e=qr(e,t),e!==2&&(t=ae,ae=n,t!==null&&Fo(t)),e}function Fo(e){ae===null?ae=e:ae.push.apply(ae,e)}function hd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!De(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function be(e,t){for(t&=~Ci,t&=~cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Oe(t),r=1<<n;e[n]=-1,t&=~r}}function Fu(e){if(j&6)throw Error(v(327));Jt();var t=Mr(e,0);if(!(t&1))return pe(e,Q()),null;var n=qr(e,t);if(e.tag!==0&&n===2){var r=so(e);r!==0&&(t=r,n=Ao(e,r))}if(n===1)throw n=Gn,Ct(e,0),be(e,t),pe(e,Q()),n;if(n===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,ae,Ue),pe(e,Q()),null}function xi(e,t){var n=j;j|=1;try{return e(t)}finally{j=n,j===0&&(rn=Q()+500,il&&ht())}}function zt(e){nt!==null&&nt.tag===0&&!(j&6)&&Jt();var t=j;j|=1;var n=Ce.transition,r=D;try{if(Ce.transition=null,D=1,e)return e()}finally{D=r,Ce.transition=n,j=t,!(j&6)&&ht()}}function Pi(){me=Ht.current,I(Ht)}function Ct(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qf(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(ii(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ur();break;case 3:tn(),I(fe),I(le),hi();break;case 5:mi(r);break;case 4:tn();break;case 13:I(U);break;case 19:I(U);break;case 10:ci(r.type._context);break;case 22:case 23:Pi()}n=n.return}if(Z=e,Y=e=ct(e.current,null),b=me=t,K=0,Gn=null,Ci=cl=Nt=0,ae=zn=null,kt!==null){for(t=0;t<kt.length;t++)if(n=kt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}kt=null}return e}function Ha(e,t){do{var n=Y;try{if(ai(),Er.current=Kr,Gr){for(var r=W.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Gr=!1}if(Tt=0,J=G=W=null,Tn=!1,Hn=0,_i.current=null,n===null||n.return===null){K=1,Gn=t,Y=null;break}e:{var o=e,i=n.return,u=n,s=t;if(t=b,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=u,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=xu(i);if(y!==null){y.flags&=-257,Pu(y,i,u,o,t),y.mode&1&&Eu(o,c,t),t=y,s=c;var w=t.updateQueue;if(w===null){var S=new Set;S.add(s),t.updateQueue=S}else w.add(s);break e}else{if(!(t&1)){Eu(o,c,t),Ti();break e}s=Error(v(426))}}else if(F&&u.mode&1){var A=xu(i);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Pu(A,i,u,o,t),ui(nn(s,u));break e}}o=s=nn(s,u),K!==4&&(K=2),zn===null?zn=[o]:zn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Ta(o,s,t);yu(o,f);break e;case 1:u=s;var a=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof a.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(st===null||!st.has(d)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=Na(o,u,t);yu(o,g);break e}}o=o.return}while(o!==null)}Ga(n)}catch(_){t=_,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function Qa(){var e=Xr.current;return Xr.current=Kr,e===null?Kr:e}function Ti(){(K===0||K===3||K===2)&&(K=4),Z===null||!(Nt&268435455)&&!(cl&268435455)||be(Z,b)}function qr(e,t){var n=j;j|=2;var r=Qa();(Z!==e||b!==t)&&(Ue=null,Ct(e,t));do try{gd();break}catch(l){Ha(e,l)}while(!0);if(ai(),j=n,Xr.current=r,Y!==null)throw Error(v(261));return Z=null,b=0,K}function gd(){for(;Y!==null;)Ya(Y)}function vd(){for(;Y!==null&&!Vc();)Ya(Y)}function Ya(e){var t=Xa(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?Ga(e):Y=t,_i.current=null}function Ga(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cd(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,Y=null;return}}else if(n=ad(n,t,me),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);K===0&&(K=5)}function wt(e,t,n){var r=D,l=Ce.transition;try{Ce.transition=null,D=1,yd(e,t,n,r)}finally{Ce.transition=l,D=r}return null}function yd(e,t,n,r){do Jt();while(nt!==null);if(j&6)throw Error(v(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Zc(e,o),e===Z&&(Y=Z=null,b=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gr||(gr=!0,Ja(Dr,function(){return Jt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ce.transition,Ce.transition=null;var i=D;D=1;var u=j;j|=4,_i.current=null,dd(e,n),Va(n,e),Ff(ho),Rr=!!mo,ho=mo=null,e.current=n,pd(n),$c(),j=u,D=i,Ce.transition=o}else e.current=n;if(gr&&(gr=!1,nt=e,Zr=l),o=e.pendingLanes,o===0&&(st=null),Qc(n.stateNode),pe(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Jr)throw Jr=!1,e=Ro,Ro=null,e;return Zr&1&&e.tag!==0&&Jt(),o=e.pendingLanes,o&1?e===Io?Ln++:(Ln=0,Io=e):Ln=0,ht(),null}function Jt(){if(nt!==null){var e=Ts(Zr),t=Ce.transition,n=D;try{if(Ce.transition=null,D=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,Zr=0,j&6)throw Error(v(331));var l=j;for(j|=4,k=e.current;k!==null;){var o=k,i=o.child;if(k.flags&16){var u=o.deletions;if(u!==null){for(var s=0;s<u.length;s++){var c=u[s];for(k=c;k!==null;){var h=k;switch(h.tag){case 0:case 11:case 15:Nn(8,h,o)}var p=h.child;if(p!==null)p.return=h,k=p;else for(;k!==null;){h=k;var m=h.sibling,y=h.return;if(Fa(h),h===c){k=null;break}if(m!==null){m.return=y,k=m;break}k=y}}}var w=o.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var A=S.sibling;S.sibling=null,S=A}while(S!==null)}}k=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,k=i;else e:for(;k!==null;){if(o=k,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Nn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,k=f;break e}k=o.return}}var a=e.current;for(k=a;k!==null;){i=k;var d=i.child;if(i.subtreeFlags&2064&&d!==null)d.return=i,k=d;else e:for(i=a;k!==null;){if(u=k,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:al(9,u)}}catch(_){$(u,u.return,_)}if(u===i){k=null;break e}var g=u.sibling;if(g!==null){g.return=u.return,k=g;break e}k=u.return}}if(j=l,ht(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(tl,e)}catch{}r=!0}return r}finally{D=n,Ce.transition=t}}return!1}function Uu(e,t,n){t=nn(n,t),t=Ta(e,t,1),e=ut(e,t,1),t=ie(),e!==null&&(Xn(e,1,t),pe(e,t))}function $(e,t,n){if(e.tag===3)Uu(e,e,n);else for(;t!==null;){if(t.tag===3){Uu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(st===null||!st.has(r))){e=nn(n,e),e=Na(t,e,1),t=ut(t,e,1),e=ie(),t!==null&&(Xn(t,1,e),pe(t,e));break}}t=t.return}}function wd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ie(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(b&n)===n&&(K===4||K===3&&(b&130023424)===b&&500>Q()-Ei?Ct(e,0):Ci|=n),pe(e,t)}function Ka(e,t){t===0&&(e.mode&1?(t=ir,ir<<=1,!(ir&130023424)&&(ir=4194304)):t=1);var n=ie();e=Ye(e,t),e!==null&&(Xn(e,t,n),pe(e,n))}function Sd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ka(e,n)}function kd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(t),Ka(e,n)}var Xa;Xa=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ce=!1,sd(e,t,n);ce=!!(e.flags&131072)}else ce=!1,F&&t.flags&1048576&&bs(t,$r,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pr(e,t),e=t.pendingProps;var l=qt(t,le.current);Xt(t,n),l=vi(null,t,r,e,l,n);var o=yi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,de(r)?(o=!0,Wr(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,di(t),l.updater=sl,t.stateNode=l,l._reactInternals=t,Eo(t,r,e,n),t=To(null,t,r,!0,o,n)):(t.tag=0,F&&o&&oi(t),oe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Cd(r),e=Ne(r,e),l){case 0:t=Po(null,t,r,e,n);break e;case 1:t=zu(null,t,r,e,n);break e;case 11:t=Tu(null,t,r,e,n);break e;case 14:t=Nu(null,t,r,Ne(r.type,e),n);break e}throw Error(v(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ne(r,l),Po(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ne(r,l),zu(e,t,r,l,n);case 3:e:{if(ja(t),e===null)throw Error(v(387));r=t.pendingProps,o=t.memoizedState,l=o.element,oa(e,t),Qr(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=nn(Error(v(423)),t),t=Lu(e,t,r,n,l);break e}else if(r!==l){l=nn(Error(v(424)),t),t=Lu(e,t,r,n,l);break e}else for(he=it(t.stateNode.containerInfo.firstChild),ge=t,F=!0,Le=null,n=ra(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bt(),r===l){t=Ge(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return ia(t),e===null&&ko(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,go(r,l)?i=null:o!==null&&go(r,o)&&(t.flags|=32),Oa(e,t),oe(e,t,i,n),t.child;case 6:return e===null&&ko(t),null;case 13:return Da(e,t,n);case 4:return pi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=en(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ne(r,l),Tu(e,t,r,l,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,M(Br,r._currentValue),r._currentValue=i,o!==null)if(De(o.value,i)){if(o.children===l.children&&!fe.current){t=Ge(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){i=o.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Be(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),_o(o.return,n,t),u.lanes|=n;break}s=s.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(v(341));i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),_o(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}oe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Xt(t,n),l=Ee(l),r=r(l),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,l=Ne(r,t.pendingProps),l=Ne(r.type,l),Nu(e,t,r,l,n);case 15:return za(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ne(r,l),Pr(e,t),t.tag=1,de(r)?(e=!0,Wr(t)):e=!1,Xt(t,n),Pa(t,r,l),Eo(t,r,l,n),To(null,t,r,!0,e,n);case 19:return Ma(e,t,n);case 22:return La(e,t,n)}throw Error(v(156,t.tag))};function Ja(e,t){return Cs(e,t)}function _d(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,t,n,r){return new _d(e,t,n,r)}function Ni(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cd(e){if(typeof e=="function")return Ni(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Go)return 11;if(e===Ko)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=_e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zr(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Ni(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Mt:return Et(n.children,l,o,t);case Yo:i=8,l|=8;break;case Gl:return e=_e(12,n,t,l|2),e.elementType=Gl,e.lanes=o,e;case Kl:return e=_e(13,n,t,l),e.elementType=Kl,e.lanes=o,e;case Xl:return e=_e(19,n,t,l),e.elementType=Xl,e.lanes=o,e;case is:return fl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ls:i=10;break e;case os:i=9;break e;case Go:i=11;break e;case Ko:i=14;break e;case Je:i=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return t=_e(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Et(e,t,n,r){return e=_e(7,e,r,t),e.lanes=n,e}function fl(e,t,n,r){return e=_e(22,e,r,t),e.elementType=is,e.lanes=n,e.stateNode={isHidden:!1},e}function Bl(e,t,n){return e=_e(6,e,null,t),e.lanes=n,e}function Hl(e,t,n){return t=_e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ed(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function zi(e,t,n,r,l,o,i,u,s){return e=new Ed(e,t,n,u,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=_e(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},di(o),e}function xd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Za(e){if(!e)return dt;e=e._reactInternals;e:{if(Ot(e)!==e||e.tag!==1)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(de(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(v(171))}if(e.tag===1){var n=e.type;if(de(n))return Zs(e,n,t)}return t}function qa(e,t,n,r,l,o,i,u,s){return e=zi(n,r,!0,e,l,o,i,u,s),e.context=Za(null),n=e.current,r=ie(),l=at(n),o=Be(r,l),o.callback=t??null,ut(n,o,l),e.current.lanes=l,Xn(e,l,r),pe(e,r),e}function dl(e,t,n,r){var l=t.current,o=ie(),i=at(l);return n=Za(n),t.context===null?t.context=n:t.pendingContext=n,t=Be(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ut(l,t,i),e!==null&&(je(e,l,i,o),Cr(e,l,i)),i}function br(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Li(e,t){Wu(e,t),(e=e.alternate)&&Wu(e,t)}function Pd(){return null}var ba=typeof reportError=="function"?reportError:function(e){console.error(e)};function Oi(e){this._internalRoot=e}pl.prototype.render=Oi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));dl(e,t,null,null)};pl.prototype.unmount=Oi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zt(function(){dl(null,e,null,null)}),t[Qe]=null}};function pl(e){this._internalRoot=e}pl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ls();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qe.length&&t!==0&&t<qe[n].priority;n++);qe.splice(n,0,e),n===0&&js(e)}};function ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vu(){}function Td(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=br(i);o.call(c)}}var i=qa(t,r,e,0,null,!1,!1,"",Vu);return e._reactRootContainer=i,e[Qe]=i.current,Un(e.nodeType===8?e.parentNode:e),zt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var c=br(s);u.call(c)}}var s=zi(e,0,!1,null,null,!1,!1,"",Vu);return e._reactRootContainer=s,e[Qe]=s.current,Un(e.nodeType===8?e.parentNode:e),zt(function(){dl(t,s,n,r)}),s}function hl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var u=l;l=function(){var s=br(i);u.call(s)}}dl(t,i,e,l)}else i=Td(n,t,e,l,r);return br(i)}Ns=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Sn(t.pendingLanes);n!==0&&(Zo(t,n|1),pe(t,Q()),!(j&6)&&(rn=Q()+500,ht()))}break;case 13:zt(function(){var r=Ye(e,1);if(r!==null){var l=ie();je(r,e,1,l)}}),Li(e,1)}};qo=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ie();je(t,e,134217728,n)}Li(e,134217728)}};zs=function(e){if(e.tag===13){var t=at(e),n=Ye(e,t);if(n!==null){var r=ie();je(n,e,t,r)}Li(e,t)}};Ls=function(){return D};Os=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};oo=function(e,t,n){switch(t){case"input":if(ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ol(r);if(!l)throw Error(v(90));ss(r),ql(r,l)}}}break;case"textarea":cs(e,n);break;case"select":t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}};vs=xi;ys=zt;var Nd={usingClientEntryPoint:!1,Events:[Zn,Ft,ol,hs,gs,xi]},vn={findFiberByHostInstance:St,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zd={bundleType:vn.bundleType,version:vn.version,rendererPackageName:vn.rendererPackageName,rendererConfig:vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ks(e),e===null?null:e.stateNode},findFiberByHostInstance:vn.findFiberByHostInstance||Pd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vr.isDisabled&&vr.supportsFiber)try{tl=vr.inject(zd),Ae=vr}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nd;ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ji(t))throw Error(v(200));return xd(e,t,null,n)};ye.createRoot=function(e,t){if(!ji(e))throw Error(v(299));var n=!1,r="",l=ba;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=zi(e,1,!1,null,null,n,!1,r,l),e[Qe]=t.current,Un(e.nodeType===8?e.parentNode:e),new Oi(t)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=ks(t),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return zt(e)};ye.hydrate=function(e,t,n){if(!ml(t))throw Error(v(200));return hl(null,e,t,!0,n)};ye.hydrateRoot=function(e,t,n){if(!ji(e))throw Error(v(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=ba;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=qa(t,null,e,1,n??null,l,!1,o,i),e[Qe]=t.current,Un(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new pl(t)};ye.render=function(e,t,n){if(!ml(t))throw Error(v(200));return hl(null,e,t,!1,n)};ye.unmountComponentAtNode=function(e){if(!ml(e))throw Error(v(40));return e._reactRootContainer?(zt(function(){hl(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};ye.unstable_batchedUpdates=xi;ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ml(n))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return hl(e,t,n,!1,r)};ye.version="18.3.1-next-f1338f8080-20240426";function ec(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ec)}catch(e){console.error(e)}}ec(),es.exports=ye;var Ld=es.exports,$u=Ld;Ql.createRoot=$u.createRoot,Ql.hydrateRoot=$u.hydrateRoot;function Od({sections:e,currentPath:t,onNavigate:n}){const[r,l]=et.useState(new Set),o=i=>{l(u=>{const s=new Set(u);return s.has(i)?s.delete(i):s.add(i),s})};return O.jsxs("aside",{className:"sidebar",children:[O.jsx("div",{className:"sidebar-header",children:O.jsxs("h1",{className:"logo",children:[O.jsx("img",{src:"/logo.png",alt:"UWASIC Logo"}),O.jsx("span",{className:"logo-text",children:"UWASIC Docs"})]})}),O.jsx("nav",{className:"sidebar-nav",children:e.map(i=>O.jsxs("div",{className:"nav-section",children:[O.jsxs("button",{className:"section-header",onClick:()=>o(i.id),children:[O.jsx("span",{className:`chevron ${r.has(i.id)?"expanded":""}`,children:"›"}),O.jsx("span",{className:"section-title",children:i.title})]}),r.has(i.id)&&O.jsx("ul",{className:"page-list",children:i.pages.map(u=>O.jsx("li",{children:O.jsx("button",{className:`page-link ${t===u.path?"active":""}`,onClick:()=>n(u.path),children:u.metadata.title})},u.path))})]},i.id))})]})}function jd({content:e}){const t=(c,h)=>{const p=c.trim();return p.startsWith("# ")?O.jsx("h1",{children:p.slice(2)},h):p.startsWith("## ")?O.jsx("h2",{children:p.slice(3)},h):p.startsWith("### ")?O.jsx("h3",{children:p.slice(4)},h):p.startsWith("```")?null:p.startsWith("- ")?O.jsx("li",{children:n(p.slice(2))},h):p.match(/^\d+\.\s/)?O.jsx("li",{children:n(p.replace(/^\d+\.\s/,""))},h):p.startsWith("**")||p.includes("**")?O.jsx("p",{children:n(p)},h):p?O.jsx("p",{children:n(p)},h):O.jsx("br",{},h)},n=c=>{const h=[];let p=0;const m=/`([^`]+)`/g;let y;for(;(y=m.exec(c))!==null;){if(y.index>p){const w=c.slice(p,y.index);h.push(r(w))}h.push(O.jsx("code",{children:y[1]},y.index)),p=y.index+y[0].length}return p<c.length&&h.push(r(c.slice(p))),h.length>0?h:c},r=c=>c.split("**").map((p,m)=>m%2===0?p:O.jsx("strong",{children:p},m)),l=e.trim().split(`
`),o=[];let i=!1,u=[],s="";return l.forEach((c,h)=>{c.trim().startsWith("```")?i?(i=!1,o.push(O.jsx("pre",{children:O.jsx("code",{className:s?`language-${s}`:"",children:u.join(`
`)})},`code-${h}`))):(i=!0,s=c.trim().slice(3),u=[]):i?u.push(c):o.push(t(c,h))}),O.jsx("div",{className:"markdown-content",children:o})}const Dd={title:"Create Project",order:2},Md=`
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
`,Rd=Object.freeze(Object.defineProperty({__proto__:null,content:Md,metadata:Dd},Symbol.toStringTag,{value:"Module"})),Id={title:"Layout Design",order:4},Ad=`
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
`,Fd=Object.freeze(Object.defineProperty({__proto__:null,content:Ad,metadata:Id},Symbol.toStringTag,{value:"Module"})),Ud={title:"Overview",order:1},Wd=`
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
`,Vd=Object.freeze(Object.defineProperty({__proto__:null,content:Wd,metadata:Ud},Symbol.toStringTag,{value:"Module"})),$d={title:"Schematic Design",order:3},Bd=`
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
`,Hd=Object.freeze(Object.defineProperty({__proto__:null,content:Bd,metadata:$d},Symbol.toStringTag,{value:"Module"})),Qd={title:"Create Project",order:2},Yd=`
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
`,Gd=Object.freeze(Object.defineProperty({__proto__:null,content:Yd,metadata:Qd},Symbol.toStringTag,{value:"Module"})),Kd={title:"Overview",order:1},Xd=`
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
`,Jd=Object.freeze(Object.defineProperty({__proto__:null,content:Xd,metadata:Kd},Symbol.toStringTag,{value:"Module"})),Zd={title:"Test & Verify",order:3},qd=`
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
`,bd=Object.freeze(Object.defineProperty({__proto__:null,content:qd,metadata:Zd},Symbol.toStringTag,{value:"Module"})),ep={title:"Basic Commands",order:3},tp=`
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
`,np=Object.freeze(Object.defineProperty({__proto__:null,content:tp,metadata:ep},Symbol.toStringTag,{value:"Module"})),rp={title:"Overview",order:1},lp=`
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
`,op=Object.freeze(Object.defineProperty({__proto__:null,content:lp,metadata:rp},Symbol.toStringTag,{value:"Module"})),ip={title:"Installation",order:2},up=`
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
`,sp=Object.freeze(Object.defineProperty({__proto__:null,content:up,metadata:ip},Symbol.toStringTag,{value:"Module"})),ap={title:"Create Project",order:2},cp=`
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
`,fp=Object.freeze(Object.defineProperty({__proto__:null,content:cp,metadata:ap},Symbol.toStringTag,{value:"Module"})),dp={title:"Overview",order:1},pp=`
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
`,vp=Object.freeze(Object.defineProperty({__proto__:null,content:gp,metadata:hp},Symbol.toStringTag,{value:"Module"})),yp={title:"Overview",order:1},wp=`
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
`,Sp=Object.freeze(Object.defineProperty({__proto__:null,content:wp,metadata:yp},Symbol.toStringTag,{value:"Module"})),kp={title:"Submit Package",order:3},_p=`
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
`,Cp=Object.freeze(Object.defineProperty({__proto__:null,content:_p,metadata:kp},Symbol.toStringTag,{value:"Module"})),Ep={title:"Build & Deploy",order:4},xp=`
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
`,Pp=Object.freeze(Object.defineProperty({__proto__:null,content:xp,metadata:Ep},Symbol.toStringTag,{value:"Module"})),Tp={title:"Markdown Syntax",order:3},Np=`
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
`,zp=Object.freeze(Object.defineProperty({__proto__:null,content:Np,metadata:Tp},Symbol.toStringTag,{value:"Module"})),Lp=Object.assign({"../content/Analog/Create-Project.ts":Rd,"../content/Analog/Layout-Design.ts":Fd,"../content/Analog/Overview.ts":Vd,"../content/Analog/Schematic-Design.ts":Hd,"../content/Digital/Create-Project.ts":Gd,"../content/Digital/Overview.ts":Jd,"../content/Digital/Test-Verify.ts":bd,"../content/How-To-Use/Basic-Commands.ts":np,"../content/How-To-Use/Overview.ts":op,"../content/How-To-Use/Using-Nix.ts":sp,"../content/Mixed-Signal/Create-Project.ts":fp,"../content/Mixed-Signal/Overview.ts":mp,"../content/TinyTapeout/Create-Package.ts":vp,"../content/TinyTapeout/Overview.ts":Sp,"../content/TinyTapeout/Submit-Package.ts":Cp,"../content/Updating-Docs/Build-Deploy.ts":Pp,"../content/Updating-Docs/Markdown-Syntax.ts":zp});function Op(){const e=new Map;for(const[t,n]of Object.entries(Lp)){const r=n,l=t.match(/\/content\/([^/]+)\/([^/]+)\.ts$/);if(!l)continue;const[,o,i]=l;e.has(o)||e.set(o,{id:o,title:o.split("-").map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" "),pages:[]}),e.get(o).pages.push({id:i,path:`${o}/${i}`,metadata:r.metadata,content:r.content})}return e.forEach(t=>{t.pages.sort((n,r)=>n.metadata.order-r.metadata.order)}),Array.from(e.values()).sort((t,n)=>t.id.localeCompare(n.id))}function jp(){const[e]=et.useState(()=>Op()),[t,n]=et.useState(""),[r,l]=et.useState(null);et.useEffect(()=>{if(e.length>0&&!t){const i=e[0].pages[0];i&&(n(i.path),l(i))}},[e,t]);const o=i=>{n(i);for(const u of e){const s=u.pages.find(c=>c.path===i);if(s){l(s);break}}};return O.jsxs("div",{className:"app",children:[O.jsx(Od,{sections:e,currentPath:t,onNavigate:o}),O.jsx("main",{className:"content",children:r?O.jsx("article",{className:"article",children:O.jsx(jd,{content:r.content})}):O.jsx("div",{className:"empty-state",children:O.jsx("p",{children:"Select a page from the sidebar to get started"})})})]})}Ql.createRoot(document.getElementById("root")).render(O.jsx(yc.StrictMode,{children:O.jsx(jp,{})}));
