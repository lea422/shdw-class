/*! For license information please see main.976e43d8.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var i=n(43),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var i,a={},d=null,c=null;for(i in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,i)&&!s.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:r,type:e,key:d,ref:c,props:a,_owner:l.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),x=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}function b(){}function w(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var y=w.prototype=new b;y.constructor=w,h(y,g.prototype),y.isPureReactComponent=!0;var v=Array.isArray,k=Object.prototype.hasOwnProperty,j={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,i){var r,a={},o=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)k.call(t,r)&&!E.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(1===s)a.children=i;else if(1<s){for(var d=Array(s),c=0;c<s;c++)d[c]=arguments[c+2];a.children=d}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);return{$$typeof:n,type:e,key:o,ref:l,props:a,_owner:j.current}}function z(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function _(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function P(e,t,r,a,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case i:s=!0}}if(s)return o=o(s=e),e=""===a?"."+_(s,0):a,v(o)?(r="",null!=e&&(r=e.replace(C,"$&/")+"/"),P(o,t,r,"",function(e){return e})):null!=o&&(z(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(C,"$&/")+"/")+e)),t.push(o)),1;if(s=0,a=""===a?".":a+":",v(e))for(var d=0;d<e.length;d++){var c=a+_(l=e[d],d);s+=P(l,t,r,c,o)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=x&&e[x]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),d=0;!(l=e.next()).done;)s+=P(l=l.value,t,r,c=a+_(l,d++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function I(e,t,n){if(null==e)return e;var i=[],r=0;return P(e,i,"","",function(e){return t.call(n,e,r++)}),i}function T(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var B={current:null},F={transition:null},A={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:F,ReactCurrentOwner:j};function O(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:I,forEach:function(e,t,n){I(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return I(e,function(){t++}),t},toArray:function(e){return I(e,function(e){return e})||[]},only:function(e){if(!z(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=r,t.Profiler=o,t.PureComponent=w,t.StrictMode=a,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.act=O,t.cloneElement=function(e,t,i){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=h({},e.props),a=e.key,o=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,l=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(d in t)k.call(t,d)&&!E.hasOwnProperty(d)&&(r[d]=void 0===t[d]&&void 0!==s?s[d]:t[d])}var d=arguments.length-2;if(1===d)r.children=i;else if(1<d){s=Array(d);for(var c=0;c<d;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:n,type:e.type,key:a,ref:o,props:r,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=z,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=F.transition;F.transition={};try{e()}finally{F.transition=t}},t.unstable_act=O,t.useCallback=function(e,t){return B.current.useCallback(e,t)},t.useContext=function(e){return B.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return B.current.useDeferredValue(e)},t.useEffect=function(e,t){return B.current.useEffect(e,t)},t.useId=function(){return B.current.useId()},t.useImperativeHandle=function(e,t,n){return B.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return B.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return B.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return B.current.useMemo(e,t)},t.useReducer=function(e,t,n){return B.current.useReducer(e,t,n)},t.useRef=function(e){return B.current.useRef(e)},t.useState=function(e){return B.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return B.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return B.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var i=n-1>>>1,r=e[i];if(!(0<a(r,t)))break e;e[i]=t,e[n]=r,n=i}}function i(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var i=0,r=e.length,o=r>>>1;i<o;){var l=2*(i+1)-1,s=e[l],d=l+1,c=e[d];if(0>a(s,n))d<r&&0>a(c,s)?(e[i]=c,e[d]=n,i=d):(e[i]=s,e[l]=n,i=l);else{if(!(d<r&&0>a(c,n)))break e;e[i]=c,e[d]=n,i=d}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var d=[],c=[],p=1,u=null,x=3,f=!1,h=!1,m=!1,g="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,w="undefined"!==typeof setImmediate?setImmediate:null;function y(e){for(var t=i(c);null!==t;){if(null===t.callback)r(c);else{if(!(t.startTime<=e))break;r(c),t.sortIndex=t.expirationTime,n(d,t)}t=i(c)}}function v(e){if(m=!1,y(e),!h)if(null!==i(d))h=!0,F(k);else{var t=i(c);null!==t&&A(v,t.startTime-e)}}function k(e,n){h=!1,m&&(m=!1,b(z),z=-1),f=!0;var a=x;try{for(y(n),u=i(d);null!==u&&(!(u.expirationTime>n)||e&&!P());){var o=u.callback;if("function"===typeof o){u.callback=null,x=u.priorityLevel;var l=o(u.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?u.callback=l:u===i(d)&&r(d),y(n)}else r(d);u=i(d)}if(null!==u)var s=!0;else{var p=i(c);null!==p&&A(v,p.startTime-n),s=!1}return s}finally{u=null,x=a,f=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var j,E=!1,S=null,z=-1,C=5,_=-1;function P(){return!(t.unstable_now()-_<C)}function I(){if(null!==S){var e=t.unstable_now();_=e;var n=!0;try{n=S(!0,e)}finally{n?j():(E=!1,S=null)}}else E=!1}if("function"===typeof w)j=function(){w(I)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,B=T.port2;T.port1.onmessage=I,j=function(){B.postMessage(null)}}else j=function(){g(I,0)};function F(e){S=e,E||(E=!0,j())}function A(e,n){z=g(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){h||f||(h=!0,F(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_getFirstCallbackNode=function(){return i(d)},t.unstable_next=function(e){switch(x){case 1:case 2:case 3:var t=3;break;default:t=x}var n=x;x=t;try{return e()}finally{x=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=x;x=e;try{return t()}finally{x=n}},t.unstable_scheduleCallback=function(e,r,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:p++,callback:r,priorityLevel:e,startTime:a,expirationTime:l=a+l,sortIndex:-1},a>o?(e.sortIndex=a,n(c,e),null===i(d)&&e===i(c)&&(m?(b(z),z=-1):m=!0,A(v,a-o))):(e.sortIndex=l,n(d,e),h||f||(h=!0,F(k))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=x;return function(){var n=x;x=t;try{return e.apply(this,arguments)}finally{x=n}}}},324:e=>{e.exports=function(e,t,n,i){var r=n?n.call(i,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<a.length;s++){var d=a[s];if(!l(d))return!1;var c=e[d],p=t[d];if(!1===(r=n?n.call(i,c,p,d):void 0)||void 0===r&&c!==p)return!1}return!0}},391:(e,t,n)=>{"use strict";var i=n(950);t.createRoot=i.createRoot,t.hydrateRoot=i.hydrateRoot},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var i=n(43),r=n(853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,l={};function s(e,t){d(e,t),d(e+"Capture",t)}function d(e,t){for(l[e]=t,e=0;e<t.length;e++)o.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),p=Object.prototype.hasOwnProperty,u=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},f={};function h(e,t,n,i,r,a,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var m={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){m[e]=new h(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];m[t]=new h(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){m[e]=new h(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){m[e]=new h(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){m[e]=new h(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){m[e]=new h(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){m[e]=new h(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){m[e]=new h(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){m[e]=new h(e,5,!1,e.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function w(e,t,n,i){var r=m.hasOwnProperty(t)?m[t]:null;(null!==r?0!==r.type:i||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,i){if(null===t||"undefined"===typeof t||function(e,t,n,i){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!i&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,i))return!0;if(i)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,r,i)&&(n=null),i||null===r?function(e){return!!p.call(f,e)||!p.call(x,e)&&(u.test(e)?f[e]=!0:(x[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=null===n?3!==r.type&&"":n:(t=r.attributeName,i=r.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(r=r.type)||4===r&&!0===n?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(g,b);m[t]=new h(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(g,b);m[t]=new h(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(g,b);m[t]=new h(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){m[e]=new h(e,1,!1,e.toLowerCase(),null,!1,!1)}),m.xlinkHref=new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){m[e]=new h(e,1,!1,e.toLowerCase(),null,!0,!0)});var y=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,v=Symbol.for("react.element"),k=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),C=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),B=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var F=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var A=Symbol.iterator;function O(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=A&&e[A]||e["@@iterator"])?e:null}var R,N=Object.assign;function D(e){if(void 0===R)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);R=t&&t[1]||""}return"\n"+R+e}var L=!1;function $(e,t){if(!e||L)return"";L=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var i=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){i=d}e.call(t.prototype)}else{try{throw Error()}catch(d){i=d}e()}}catch(d){if(d&&i&&"string"===typeof d.stack){for(var r=d.stack.split("\n"),a=i.stack.split("\n"),o=r.length-1,l=a.length-1;1<=o&&0<=l&&r[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(r[o]!==a[l]){if(1!==o||1!==l)do{if(o--,0>--l||r[o]!==a[l]){var s="\n"+r[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=o&&0<=l);break}}}finally{L=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?D(e):""}function M(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=$(e.type,!1);case 11:return e=$(e.type.render,!1);case 1:return e=$(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case j:return"Fragment";case k:return"Portal";case S:return"Profiler";case E:return"StrictMode";case P:return"Suspense";case I:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case C:return(e.displayName||"Context")+".Consumer";case z:return(e._context.displayName||"Context")+".Provider";case _:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case T:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case B:t=e._payload,e=e._init;try{return U(e(t))}catch(n){}}return null}function H(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function V(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function W(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Y(e){e._valueTracker||(e._valueTracker=function(e){var t=W(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var r=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(e){i=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(e){i=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function X(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=W(e)?e.checked?"true":"false":e.value),(e=i)!==n&&(t.setValue(e),!0)}function J(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function G(e,t){var n=t.checked;return N({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Q(e,t){var n=null==t.defaultValue?"":t.defaultValue,i=null!=t.checked?t.checked:t.defaultChecked;n=V(null!=t.value?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function K(e,t){null!=(t=t.checked)&&w(e,"checked",t,!1)}function Z(e,t){K(e,t);var n=V(t.value),i=t.type;if(null!=n)"number"===i?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===i||"reset"===i)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,V(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function q(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!("submit"!==i&&"reset"!==i||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&J(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+V(n),t=null,r=0;r<e.length;r++){if(e[r].value===n)return e[r].selected=!0,void(i&&(e[r].defaultSelected=!0));null!==t||e[r].disabled||(t=e[r])}null!==t&&(t.selected=!0)}}function ie(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return N({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function re(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(te(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:V(n)}}function ae(e,t){var n=V(t.value),i=V(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=i&&(e.defaultValue=""+i)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var de,ce,pe=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((de=de||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=de.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,i){MSApp.execUnsafeLocalFunction(function(){return ce(e,t)})}:ce);function ue(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var xe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fe=["Webkit","ms","Moz","O"];function he(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||xe.hasOwnProperty(e)&&xe[e]?(""+t).trim():t+"px"}function me(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var i=0===n.indexOf("--"),r=he(n,t[n],i);"float"===n&&(n="cssFloat"),i?e.setProperty(n,r):e[n]=r}}Object.keys(xe).forEach(function(e){fe.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xe[t]=xe[e]})});var ge=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(e,t){if(t){if(ge[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function we(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ye=null;function ve(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,je=null,Ee=null;function Se(e){if(e=wr(e)){if("function"!==typeof ke)throw Error(a(280));var t=e.stateNode;t&&(t=vr(t),ke(e.stateNode,e.type,t))}}function ze(e){je?Ee?Ee.push(e):Ee=[e]:je=e}function Ce(){if(je){var e=je,t=Ee;if(Ee=je=null,Se(e),t)for(e=0;e<t.length;e++)Se(t[e])}}function _e(e,t){return e(t)}function Pe(){}var Ie=!1;function Te(e,t,n){if(Ie)return e(t,n);Ie=!0;try{return _e(e,t,n)}finally{Ie=!1,(null!==je||null!==Ee)&&(Pe(),Ce())}}function Be(e,t){var n=e.stateNode;if(null===n)return null;var i=vr(n);if(null===i)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(i=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!i;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var Fe=!1;if(c)try{var Ae={};Object.defineProperty(Ae,"passive",{get:function(){Fe=!0}}),window.addEventListener("test",Ae,Ae),window.removeEventListener("test",Ae,Ae)}catch(ce){Fe=!1}function Oe(e,t,n,i,r,a,o,l,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(c){this.onError(c)}}var Re=!1,Ne=null,De=!1,Le=null,$e={onError:function(e){Re=!0,Ne=e}};function Me(e,t,n,i,r,a,o,l,s){Re=!1,Ne=null,Oe.apply($e,arguments)}function Ue(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function He(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ve(e){if(Ue(e)!==e)throw Error(a(188))}function We(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(null===r)break;var o=r.alternate;if(null===o){if(null!==(i=r.return)){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Ve(r),e;if(o===i)return Ve(r),t;o=o.sibling}throw Error(a(188))}if(n.return!==i.return)n=r,i=o;else{for(var l=!1,s=r.child;s;){if(s===n){l=!0,n=r,i=o;break}if(s===i){l=!0,i=r,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,i=r;break}if(s===i){l=!0,i=o,n=r;break}s=s.sibling}if(!l)throw Error(a(189))}}if(n.alternate!==i)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e))?Ye(e):null}function Ye(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ye(e);if(null!==t)return t;e=e.sibling}return null}var Xe=r.unstable_scheduleCallback,Je=r.unstable_cancelCallback,Ge=r.unstable_shouldYield,Qe=r.unstable_requestPaint,Ke=r.unstable_now,Ze=r.unstable_getCurrentPriorityLevel,qe=r.unstable_ImmediatePriority,et=r.unstable_UserBlockingPriority,tt=r.unstable_NormalPriority,nt=r.unstable_LowPriority,it=r.unstable_IdlePriority,rt=null,at=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var dt=64,ct=4194304;function pt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ut(e,t){var n=e.pendingLanes;if(0===n)return 0;var i=0,r=e.suspendedLanes,a=e.pingedLanes,o=268435455&n;if(0!==o){var l=o&~r;0!==l?i=pt(l):0!==(a&=o)&&(i=pt(a))}else 0!==(o=n&~r)?i=pt(o):0!==a&&(i=pt(a));if(0===i)return 0;if(0!==t&&t!==i&&0===(t&r)&&((r=i&-i)>=(a=t&-t)||16===r&&0!==(4194240&a)))return t;if(0!==(4&i)&&(i|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=i;0<t;)r=1<<(n=31-ot(t)),i|=e[n],t&=~r;return i}function xt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ft(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ht(){var e=dt;return 0===(4194240&(dt<<=1))&&(dt=64),e}function mt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=n}function bt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-ot(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}var wt=0;function yt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var vt,kt,jt,Et,St,zt=!1,Ct=[],_t=null,Pt=null,It=null,Tt=new Map,Bt=new Map,Ft=[],At="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ot(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":Tt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bt.delete(t.pointerId)}}function Rt(e,t,n,i,r,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},null!==t&&(null!==(t=wr(t))&&kt(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,null!==r&&-1===t.indexOf(r)&&t.push(r),e)}function Nt(e){var t=br(e.target);if(null!==t){var n=Ue(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=He(n)))return e.blockedOn=t,void St(e.priority,function(){jt(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Dt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=wr(n))&&kt(t),e.blockedOn=n,!1;var i=new(n=e.nativeEvent).constructor(n.type,n);ye=i,n.target.dispatchEvent(i),ye=null,t.shift()}return!0}function Lt(e,t,n){Dt(e)&&n.delete(t)}function $t(){zt=!1,null!==_t&&Dt(_t)&&(_t=null),null!==Pt&&Dt(Pt)&&(Pt=null),null!==It&&Dt(It)&&(It=null),Tt.forEach(Lt),Bt.forEach(Lt)}function Mt(e,t){e.blockedOn===t&&(e.blockedOn=null,zt||(zt=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,$t)))}function Ut(e){function t(t){return Mt(t,e)}if(0<Ct.length){Mt(Ct[0],e);for(var n=1;n<Ct.length;n++){var i=Ct[n];i.blockedOn===e&&(i.blockedOn=null)}}for(null!==_t&&Mt(_t,e),null!==Pt&&Mt(Pt,e),null!==It&&Mt(It,e),Tt.forEach(t),Bt.forEach(t),n=0;n<Ft.length;n++)(i=Ft[n]).blockedOn===e&&(i.blockedOn=null);for(;0<Ft.length&&null===(n=Ft[0]).blockedOn;)Nt(n),null===n.blockedOn&&Ft.shift()}var Ht=y.ReactCurrentBatchConfig,Vt=!0;function Wt(e,t,n,i){var r=wt,a=Ht.transition;Ht.transition=null;try{wt=1,Xt(e,t,n,i)}finally{wt=r,Ht.transition=a}}function Yt(e,t,n,i){var r=wt,a=Ht.transition;Ht.transition=null;try{wt=4,Xt(e,t,n,i)}finally{wt=r,Ht.transition=a}}function Xt(e,t,n,i){if(Vt){var r=Gt(e,t,n,i);if(null===r)Vi(e,t,i,Jt,n),Ot(e,i);else if(function(e,t,n,i,r){switch(t){case"focusin":return _t=Rt(_t,e,t,n,i,r),!0;case"dragenter":return Pt=Rt(Pt,e,t,n,i,r),!0;case"mouseover":return It=Rt(It,e,t,n,i,r),!0;case"pointerover":var a=r.pointerId;return Tt.set(a,Rt(Tt.get(a)||null,e,t,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,Bt.set(a,Rt(Bt.get(a)||null,e,t,n,i,r)),!0}return!1}(r,e,t,n,i))i.stopPropagation();else if(Ot(e,i),4&t&&-1<At.indexOf(e)){for(;null!==r;){var a=wr(r);if(null!==a&&vt(a),null===(a=Gt(e,t,n,i))&&Vi(e,t,i,Jt,n),a===r)break;r=a}null!==r&&i.stopPropagation()}else Vi(e,t,i,null,n)}}var Jt=null;function Gt(e,t,n,i){if(Jt=null,null!==(e=br(e=ve(i))))if(null===(t=Ue(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=He(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jt=e,null}function Qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case qe:return 1;case et:return 4;case tt:case nt:return 16;case it:return 536870912;default:return 16}default:return 16}}var Kt=null,Zt=null,qt=null;function en(){if(qt)return qt;var e,t,n=Zt,i=n.length,r="value"in Kt?Kt.value:Kt.textContent,a=r.length;for(e=0;e<i&&n[e]===r[e];e++);var o=i-e;for(t=1;t<=o&&n[i-t]===r[a-t];t++);return qt=r.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,i,r,a){for(var o in this._reactName=t,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(r):r[o]);return this.isDefaultPrevented=(null!=r.defaultPrevented?r.defaultPrevented:!1===r.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=an(dn),pn=N({},dn,{view:0,detail:0}),un=an(pn),xn=N({},pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),fn=an(xn),hn=an(N({},xn,{dataTransfer:0})),mn=an(N({},pn,{relatedTarget:0})),gn=an(N({},dn,{animationName:0,elapsedTime:0,pseudoElement:0})),bn=N({},dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wn=an(bn),yn=an(N({},dn,{data:0})),vn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function En(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=jn[e])&&!!t[e]}function Sn(){return En}var zn=N({},pn,{key:function(e){if(e.key){var t=vn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Cn=an(zn),_n=an(N({},xn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pn=an(N({},pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sn})),In=an(N({},dn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Tn=N({},xn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bn=an(Tn),Fn=[9,13,27,32],An=c&&"CompositionEvent"in window,On=null;c&&"documentMode"in document&&(On=document.documentMode);var Rn=c&&"TextEvent"in window&&!On,Nn=c&&(!An||On&&8<On&&11>=On),Dn=String.fromCharCode(32),Ln=!1;function $n(e,t){switch(e){case"keyup":return-1!==Fn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Un=!1;var Hn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Hn[e.type]:"textarea"===t}function Wn(e,t,n,i){ze(i),0<(t=Yi(t,"onChange")).length&&(n=new cn("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Yn=null,Xn=null;function Jn(e){Di(e,0)}function Gn(e){if(X(yr(e)))return e}function Qn(e,t){if("change"===e)return t}var Kn=!1;if(c){var Zn;if(c){var qn="oninput"in document;if(!qn){var ei=document.createElement("div");ei.setAttribute("oninput","return;"),qn="function"===typeof ei.oninput}Zn=qn}else Zn=!1;Kn=Zn&&(!document.documentMode||9<document.documentMode)}function ti(){Yn&&(Yn.detachEvent("onpropertychange",ni),Xn=Yn=null)}function ni(e){if("value"===e.propertyName&&Gn(Xn)){var t=[];Wn(t,Xn,e,ve(e)),Te(Jn,t)}}function ii(e,t,n){"focusin"===e?(ti(),Xn=n,(Yn=t).attachEvent("onpropertychange",ni)):"focusout"===e&&ti()}function ri(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gn(Xn)}function ai(e,t){if("click"===e)return Gn(t)}function oi(e,t){if("input"===e||"change"===e)return Gn(t)}var li="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function si(e,t){if(li(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!p.call(t,r)||!li(e[r],t[r]))return!1}return!0}function di(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ci(e,t){var n,i=di(e);for(e=0;i;){if(3===i.nodeType){if(n=e+i.textContent.length,e<=t&&n>=t)return{node:i,offset:t-e};e=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=di(i)}}function pi(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?pi(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function ui(){for(var e=window,t=J();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(i){n=!1}if(!n)break;t=J((e=t.contentWindow).document)}return t}function xi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function fi(e){var t=ui(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&pi(n.ownerDocument.documentElement,n)){if(null!==i&&xi(n))if(t=i.start,void 0===(e=i.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=void 0===i.end?a:Math.min(i.end,r),!e.extend&&a>i&&(r=i,i=a,a=r),r=ci(n,a);var o=ci(n,i);r&&o&&(1!==e.rangeCount||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(r.node,r.offset),e.removeAllRanges(),a>i?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hi=c&&"documentMode"in document&&11>=document.documentMode,mi=null,gi=null,bi=null,wi=!1;function yi(e,t,n){var i=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;wi||null==mi||mi!==J(i)||("selectionStart"in(i=mi)&&xi(i)?i={start:i.selectionStart,end:i.selectionEnd}:i={anchorNode:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset},bi&&si(bi,i)||(bi=i,0<(i=Yi(gi,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=mi)))}function vi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ki={animationend:vi("Animation","AnimationEnd"),animationiteration:vi("Animation","AnimationIteration"),animationstart:vi("Animation","AnimationStart"),transitionend:vi("Transition","TransitionEnd")},ji={},Ei={};function Si(e){if(ji[e])return ji[e];if(!ki[e])return e;var t,n=ki[e];for(t in n)if(n.hasOwnProperty(t)&&t in Ei)return ji[e]=n[t];return e}c&&(Ei=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);var zi=Si("animationend"),Ci=Si("animationiteration"),_i=Si("animationstart"),Pi=Si("transitionend"),Ii=new Map,Ti="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bi(e,t){Ii.set(e,t),s(t,[e])}for(var Fi=0;Fi<Ti.length;Fi++){var Ai=Ti[Fi];Bi(Ai.toLowerCase(),"on"+(Ai[0].toUpperCase()+Ai.slice(1)))}Bi(zi,"onAnimationEnd"),Bi(Ci,"onAnimationIteration"),Bi(_i,"onAnimationStart"),Bi("dblclick","onDoubleClick"),Bi("focusin","onFocus"),Bi("focusout","onBlur"),Bi(Pi,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ri=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oi));function Ni(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,i,r,o,l,s,d){if(Me.apply(this,arguments),Re){if(!Re)throw Error(a(198));var c=Ne;Re=!1,Ne=null,De||(De=!0,Le=c)}}(i,t,void 0,e),e.currentTarget=null}function Di(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var o=i.length-1;0<=o;o--){var l=i[o],s=l.instance,d=l.currentTarget;if(l=l.listener,s!==a&&r.isPropagationStopped())break e;Ni(r,l,d),a=s}else for(o=0;o<i.length;o++){if(s=(l=i[o]).instance,d=l.currentTarget,l=l.listener,s!==a&&r.isPropagationStopped())break e;Ni(r,l,d),a=s}}}if(De)throw e=Le,De=!1,Le=null,e}function Li(e,t){var n=t[hr];void 0===n&&(n=t[hr]=new Set);var i=e+"__bubble";n.has(i)||(Hi(t,e,2,!1),n.add(i))}function $i(e,t,n){var i=0;t&&(i|=4),Hi(n,e,i,t)}var Mi="_reactListening"+Math.random().toString(36).slice(2);function Ui(e){if(!e[Mi]){e[Mi]=!0,o.forEach(function(t){"selectionchange"!==t&&(Ri.has(t)||$i(t,!1,e),$i(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Mi]||(t[Mi]=!0,$i("selectionchange",!1,t))}}function Hi(e,t,n,i){switch(Qt(t)){case 1:var r=Wt;break;case 4:r=Yt;break;default:r=Xt}n=r.bind(null,t,n,e),r=void 0,!Fe||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(r=!0),i?void 0!==r?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):void 0!==r?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Vi(e,t,n,i,r){var a=i;if(0===(1&t)&&0===(2&t)&&null!==i)e:for(;;){if(null===i)return;var o=i.tag;if(3===o||4===o){var l=i.stateNode.containerInfo;if(l===r||8===l.nodeType&&l.parentNode===r)break;if(4===o)for(o=i.return;null!==o;){var s=o.tag;if((3===s||4===s)&&((s=o.stateNode.containerInfo)===r||8===s.nodeType&&s.parentNode===r))return;o=o.return}for(;null!==l;){if(null===(o=br(l)))return;if(5===(s=o.tag)||6===s){i=a=o;continue e}l=l.parentNode}}i=i.return}Te(function(){var i=a,r=ve(n),o=[];e:{var l=Ii.get(e);if(void 0!==l){var s=cn,d=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=Cn;break;case"focusin":d="focus",s=mn;break;case"focusout":d="blur",s=mn;break;case"beforeblur":case"afterblur":s=mn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=fn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=hn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Pn;break;case zi:case Ci:case _i:s=gn;break;case Pi:s=In;break;case"scroll":s=un;break;case"wheel":s=Bn;break;case"copy":case"cut":case"paste":s=wn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=_n}var c=0!==(4&t),p=!c&&"scroll"===e,u=c?null!==l?l+"Capture":null:l;c=[];for(var x,f=i;null!==f;){var h=(x=f).stateNode;if(5===x.tag&&null!==h&&(x=h,null!==u&&(null!=(h=Be(f,u))&&c.push(Wi(f,h,x)))),p)break;f=f.return}0<c.length&&(l=new s(l,d,null,n,r),o.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===ye||!(d=n.relatedTarget||n.fromElement)||!br(d)&&!d[fr])&&(s||l)&&(l=r.window===r?r:(l=r.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=i,null!==(d=(d=n.relatedTarget||n.toElement)?br(d):null)&&(d!==(p=Ue(d))||5!==d.tag&&6!==d.tag)&&(d=null)):(s=null,d=i),s!==d)){if(c=fn,h="onMouseLeave",u="onMouseEnter",f="mouse","pointerout"!==e&&"pointerover"!==e||(c=_n,h="onPointerLeave",u="onPointerEnter",f="pointer"),p=null==s?l:yr(s),x=null==d?l:yr(d),(l=new c(h,f+"leave",s,n,r)).target=p,l.relatedTarget=x,h=null,br(r)===i&&((c=new c(u,f+"enter",d,n,r)).target=x,c.relatedTarget=p,h=c),p=h,s&&d)e:{for(u=d,f=0,x=c=s;x;x=Xi(x))f++;for(x=0,h=u;h;h=Xi(h))x++;for(;0<f-x;)c=Xi(c),f--;for(;0<x-f;)u=Xi(u),x--;for(;f--;){if(c===u||null!==u&&c===u.alternate)break e;c=Xi(c),u=Xi(u)}c=null}else c=null;null!==s&&Ji(o,l,s,c,!1),null!==d&&null!==p&&Ji(o,p,d,c,!0)}if("select"===(s=(l=i?yr(i):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var m=Qn;else if(Vn(l))if(Kn)m=oi;else{m=ri;var g=ii}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(m=ai);switch(m&&(m=m(e,i))?Wn(o,m,n,r):(g&&g(e,l,i),"focusout"===e&&(g=l._wrapperState)&&g.controlled&&"number"===l.type&&ee(l,"number",l.value)),g=i?yr(i):window,e){case"focusin":(Vn(g)||"true"===g.contentEditable)&&(mi=g,gi=i,bi=null);break;case"focusout":bi=gi=mi=null;break;case"mousedown":wi=!0;break;case"contextmenu":case"mouseup":case"dragend":wi=!1,yi(o,n,r);break;case"selectionchange":if(hi)break;case"keydown":case"keyup":yi(o,n,r)}var b;if(An)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Un?$n(e,n)&&(w="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(w="onCompositionStart");w&&(Nn&&"ko"!==n.locale&&(Un||"onCompositionStart"!==w?"onCompositionEnd"===w&&Un&&(b=en()):(Zt="value"in(Kt=r)?Kt.value:Kt.textContent,Un=!0)),0<(g=Yi(i,w)).length&&(w=new yn(w,e,null,n,r),o.push({event:w,listeners:g}),b?w.data=b:null!==(b=Mn(n))&&(w.data=b))),(b=Rn?function(e,t){switch(e){case"compositionend":return Mn(t);case"keypress":return 32!==t.which?null:(Ln=!0,Dn);case"textInput":return(e=t.data)===Dn&&Ln?null:e;default:return null}}(e,n):function(e,t){if(Un)return"compositionend"===e||!An&&$n(e,t)?(e=en(),qt=Zt=Kt=null,Un=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(i=Yi(i,"onBeforeInput")).length&&(r=new yn("onBeforeInput","beforeinput",null,n,r),o.push({event:r,listeners:i}),r.data=b))}Di(o,t)})}function Wi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yi(e,t){for(var n=t+"Capture",i=[];null!==e;){var r=e,a=r.stateNode;5===r.tag&&null!==a&&(r=a,null!=(a=Be(e,n))&&i.unshift(Wi(e,a,r)),null!=(a=Be(e,t))&&i.push(Wi(e,a,r))),e=e.return}return i}function Xi(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Ji(e,t,n,i,r){for(var a=t._reactName,o=[];null!==n&&n!==i;){var l=n,s=l.alternate,d=l.stateNode;if(null!==s&&s===i)break;5===l.tag&&null!==d&&(l=d,r?null!=(s=Be(n,a))&&o.unshift(Wi(n,s,l)):r||null!=(s=Be(n,a))&&o.push(Wi(n,s,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Gi=/\r\n?/g,Qi=/\u0000|\uFFFD/g;function Ki(e){return("string"===typeof e?e:""+e).replace(Gi,"\n").replace(Qi,"")}function Zi(e,t,n){if(t=Ki(t),Ki(e)!==t&&n)throw Error(a(425))}function qi(){}var er=null,tr=null;function nr(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ir="function"===typeof setTimeout?setTimeout:void 0,rr="function"===typeof clearTimeout?clearTimeout:void 0,ar="function"===typeof Promise?Promise:void 0,or="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ar?function(e){return ar.resolve(null).then(e).catch(lr)}:ir;function lr(e){setTimeout(function(){throw e})}function sr(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&8===r.nodeType)if("/$"===(n=r.data)){if(0===i)return e.removeChild(r),void Ut(t);i--}else"$"!==n&&"$?"!==n&&"$!"!==n||i++;n=r}while(n);Ut(t)}function dr(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function cr(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var pr=Math.random().toString(36).slice(2),ur="__reactFiber$"+pr,xr="__reactProps$"+pr,fr="__reactContainer$"+pr,hr="__reactEvents$"+pr,mr="__reactListeners$"+pr,gr="__reactHandles$"+pr;function br(e){var t=e[ur];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fr]||n[ur]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=cr(e);null!==e;){if(n=e[ur])return n;e=cr(e)}return t}n=(e=n).parentNode}return null}function wr(e){return!(e=e[ur]||e[fr])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function yr(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function vr(e){return e[xr]||null}var kr=[],jr=-1;function Er(e){return{current:e}}function Sr(e){0>jr||(e.current=kr[jr],kr[jr]=null,jr--)}function zr(e,t){jr++,kr[jr]=e.current,e.current=t}var Cr={},_r=Er(Cr),Pr=Er(!1),Ir=Cr;function Tr(e,t){var n=e.type.contextTypes;if(!n)return Cr;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var r,a={};for(r in n)a[r]=t[r];return i&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Br(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Fr(){Sr(Pr),Sr(_r)}function Ar(e,t,n){if(_r.current!==Cr)throw Error(a(168));zr(_r,t),zr(Pr,n)}function Or(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,"function"!==typeof i.getChildContext)return n;for(var r in i=i.getChildContext())if(!(r in t))throw Error(a(108,H(e)||"Unknown",r));return N({},n,i)}function Rr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cr,Ir=_r.current,zr(_r,e),zr(Pr,Pr.current),!0}function Nr(e,t,n){var i=e.stateNode;if(!i)throw Error(a(169));n?(e=Or(e,t,Ir),i.__reactInternalMemoizedMergedChildContext=e,Sr(Pr),Sr(_r),zr(_r,e)):Sr(Pr),zr(Pr,n)}var Dr=null,Lr=!1,$r=!1;function Mr(e){null===Dr?Dr=[e]:Dr.push(e)}function Ur(){if(!$r&&null!==Dr){$r=!0;var e=0,t=wt;try{var n=Dr;for(wt=1;e<n.length;e++){var i=n[e];do{i=i(!0)}while(null!==i)}Dr=null,Lr=!1}catch(r){throw null!==Dr&&(Dr=Dr.slice(e+1)),Xe(qe,Ur),r}finally{wt=t,$r=!1}}return null}var Hr=[],Vr=0,Wr=null,Yr=0,Xr=[],Jr=0,Gr=null,Qr=1,Kr="";function Zr(e,t){Hr[Vr++]=Yr,Hr[Vr++]=Wr,Wr=e,Yr=t}function qr(e,t,n){Xr[Jr++]=Qr,Xr[Jr++]=Kr,Xr[Jr++]=Gr,Gr=e;var i=Qr;e=Kr;var r=32-ot(i)-1;i&=~(1<<r),n+=1;var a=32-ot(t)+r;if(30<a){var o=r-r%5;a=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Qr=1<<32-ot(t)+r|n<<r|i,Kr=a+e}else Qr=1<<a|n<<r|i,Kr=e}function ea(e){null!==e.return&&(Zr(e,1),qr(e,1,0))}function ta(e){for(;e===Wr;)Wr=Hr[--Vr],Hr[Vr]=null,Yr=Hr[--Vr],Hr[Vr]=null;for(;e===Gr;)Gr=Xr[--Jr],Xr[Jr]=null,Kr=Xr[--Jr],Xr[Jr]=null,Qr=Xr[--Jr],Xr[Jr]=null}var na=null,ia=null,ra=!1,aa=null;function oa(e,t){var n=Td(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function la(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,na=e,ia=dr(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,na=e,ia=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Gr?{id:Qr,overflow:Kr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Td(18,null,null,0)).stateNode=t,n.return=e,e.child=n,na=e,ia=null,!0);default:return!1}}function sa(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function da(e){if(ra){var t=ia;if(t){var n=t;if(!la(e,t)){if(sa(e))throw Error(a(418));t=dr(n.nextSibling);var i=na;t&&la(e,t)?oa(i,n):(e.flags=-4097&e.flags|2,ra=!1,na=e)}}else{if(sa(e))throw Error(a(418));e.flags=-4097&e.flags|2,ra=!1,na=e}}}function ca(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;na=e}function pa(e){if(e!==na)return!1;if(!ra)return ca(e),ra=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!nr(e.type,e.memoizedProps)),t&&(t=ia)){if(sa(e))throw ua(),Error(a(418));for(;t;)oa(e,t),t=dr(t.nextSibling)}if(ca(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ia=dr(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ia=null}}else ia=na?dr(e.stateNode.nextSibling):null;return!0}function ua(){for(var e=ia;e;)e=dr(e.nextSibling)}function xa(){ia=na=null,ra=!1}function fa(e){null===aa?aa=[e]:aa.push(e)}var ha=y.ReactCurrentBatchConfig;function ma(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var i=n.stateNode}if(!i)throw Error(a(147,e));var r=i,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=r.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function ga(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){return(0,e._init)(e._payload)}function wa(e){function t(t,n){if(e){var i=t.deletions;null===i?(t.deletions=[n],t.flags|=16):i.push(n)}}function n(n,i){if(!e)return null;for(;null!==i;)t(n,i),i=i.sibling;return null}function i(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function r(e,t){return(e=Fd(e,t)).index=0,e.sibling=null,e}function o(t,n,i){return t.index=i,e?null!==(i=t.alternate)?(i=i.index)<n?(t.flags|=2,n):i:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,i){return null===t||6!==t.tag?((t=Nd(n,e.mode,i)).return=e,t):((t=r(t,n)).return=e,t)}function d(e,t,n,i){var a=n.type;return a===j?p(e,t,n.props.children,i,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===B&&ba(a)===t.type)?((i=r(t,n.props)).ref=ma(e,t,n),i.return=e,i):((i=Ad(n.type,n.key,n.props,null,e.mode,i)).ref=ma(e,t,n),i.return=e,i)}function c(e,t,n,i){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Dd(n,e.mode,i)).return=e,t):((t=r(t,n.children||[])).return=e,t)}function p(e,t,n,i,a){return null===t||7!==t.tag?((t=Od(n,e.mode,i,a)).return=e,t):((t=r(t,n)).return=e,t)}function u(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Nd(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case v:return(n=Ad(t.type,t.key,t.props,null,e.mode,n)).ref=ma(e,null,t),n.return=e,n;case k:return(t=Dd(t,e.mode,n)).return=e,t;case B:return u(e,(0,t._init)(t._payload),n)}if(te(t)||O(t))return(t=Od(t,e.mode,n,null)).return=e,t;ga(e,t)}return null}function x(e,t,n,i){var r=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==r?null:s(e,t,""+n,i);if("object"===typeof n&&null!==n){switch(n.$$typeof){case v:return n.key===r?d(e,t,n,i):null;case k:return n.key===r?c(e,t,n,i):null;case B:return x(e,t,(r=n._init)(n._payload),i)}if(te(n)||O(n))return null!==r?null:p(e,t,n,i,null);ga(e,n)}return null}function f(e,t,n,i,r){if("string"===typeof i&&""!==i||"number"===typeof i)return s(t,e=e.get(n)||null,""+i,r);if("object"===typeof i&&null!==i){switch(i.$$typeof){case v:return d(t,e=e.get(null===i.key?n:i.key)||null,i,r);case k:return c(t,e=e.get(null===i.key?n:i.key)||null,i,r);case B:return f(e,t,n,(0,i._init)(i._payload),r)}if(te(i)||O(i))return p(t,e=e.get(n)||null,i,r,null);ga(t,i)}return null}function h(r,a,l,s){for(var d=null,c=null,p=a,h=a=0,m=null;null!==p&&h<l.length;h++){p.index>h?(m=p,p=null):m=p.sibling;var g=x(r,p,l[h],s);if(null===g){null===p&&(p=m);break}e&&p&&null===g.alternate&&t(r,p),a=o(g,a,h),null===c?d=g:c.sibling=g,c=g,p=m}if(h===l.length)return n(r,p),ra&&Zr(r,h),d;if(null===p){for(;h<l.length;h++)null!==(p=u(r,l[h],s))&&(a=o(p,a,h),null===c?d=p:c.sibling=p,c=p);return ra&&Zr(r,h),d}for(p=i(r,p);h<l.length;h++)null!==(m=f(p,r,h,l[h],s))&&(e&&null!==m.alternate&&p.delete(null===m.key?h:m.key),a=o(m,a,h),null===c?d=m:c.sibling=m,c=m);return e&&p.forEach(function(e){return t(r,e)}),ra&&Zr(r,h),d}function m(r,l,s,d){var c=O(s);if("function"!==typeof c)throw Error(a(150));if(null==(s=c.call(s)))throw Error(a(151));for(var p=c=null,h=l,m=l=0,g=null,b=s.next();null!==h&&!b.done;m++,b=s.next()){h.index>m?(g=h,h=null):g=h.sibling;var w=x(r,h,b.value,d);if(null===w){null===h&&(h=g);break}e&&h&&null===w.alternate&&t(r,h),l=o(w,l,m),null===p?c=w:p.sibling=w,p=w,h=g}if(b.done)return n(r,h),ra&&Zr(r,m),c;if(null===h){for(;!b.done;m++,b=s.next())null!==(b=u(r,b.value,d))&&(l=o(b,l,m),null===p?c=b:p.sibling=b,p=b);return ra&&Zr(r,m),c}for(h=i(r,h);!b.done;m++,b=s.next())null!==(b=f(h,r,m,b.value,d))&&(e&&null!==b.alternate&&h.delete(null===b.key?m:b.key),l=o(b,l,m),null===p?c=b:p.sibling=b,p=b);return e&&h.forEach(function(e){return t(r,e)}),ra&&Zr(r,m),c}return function e(i,a,o,s){if("object"===typeof o&&null!==o&&o.type===j&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case v:e:{for(var d=o.key,c=a;null!==c;){if(c.key===d){if((d=o.type)===j){if(7===c.tag){n(i,c.sibling),(a=r(c,o.props.children)).return=i,i=a;break e}}else if(c.elementType===d||"object"===typeof d&&null!==d&&d.$$typeof===B&&ba(d)===c.type){n(i,c.sibling),(a=r(c,o.props)).ref=ma(i,c,o),a.return=i,i=a;break e}n(i,c);break}t(i,c),c=c.sibling}o.type===j?((a=Od(o.props.children,i.mode,s,o.key)).return=i,i=a):((s=Ad(o.type,o.key,o.props,null,i.mode,s)).ref=ma(i,a,o),s.return=i,i=s)}return l(i);case k:e:{for(c=o.key;null!==a;){if(a.key===c){if(4===a.tag&&a.stateNode.containerInfo===o.containerInfo&&a.stateNode.implementation===o.implementation){n(i,a.sibling),(a=r(a,o.children||[])).return=i,i=a;break e}n(i,a);break}t(i,a),a=a.sibling}(a=Dd(o,i.mode,s)).return=i,i=a}return l(i);case B:return e(i,a,(c=o._init)(o._payload),s)}if(te(o))return h(i,a,o,s);if(O(o))return m(i,a,o,s);ga(i,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==a&&6===a.tag?(n(i,a.sibling),(a=r(a,o)).return=i,i=a):(n(i,a),(a=Nd(o,i.mode,s)).return=i,i=a),l(i)):n(i,a)}}var ya=wa(!0),va=wa(!1),ka=Er(null),ja=null,Ea=null,Sa=null;function za(){Sa=Ea=ja=null}function Ca(e){var t=ka.current;Sr(ka),e._currentValue=t}function _a(e,t,n){for(;null!==e;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==i&&(i.childLanes|=t)):null!==i&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Pa(e,t){ja=e,Sa=Ea=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(wl=!0),e.firstContext=null)}function Ia(e){var t=e._currentValue;if(Sa!==e)if(e={context:e,memoizedValue:t,next:null},null===Ea){if(null===ja)throw Error(a(308));Ea=e,ja.dependencies={lanes:0,firstContext:e}}else Ea=Ea.next=e;return t}var Ta=null;function Ba(e){null===Ta?Ta=[e]:Ta.push(e)}function Fa(e,t,n,i){var r=t.interleaved;return null===r?(n.next=n,Ba(t)):(n.next=r.next,r.next=n),t.interleaved=n,Aa(e,i)}function Aa(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Oa=!1;function Ra(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Na(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Da(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function La(e,t,n){var i=e.updateQueue;if(null===i)return null;if(i=i.shared,0!==(2&_s)){var r=i.pending;return null===r?t.next=t:(t.next=r.next,r.next=t),i.pending=t,Aa(e,n)}return null===(r=i.interleaved)?(t.next=t,Ba(i)):(t.next=r.next,r.next=t),i.interleaved=t,Aa(e,n)}function $a(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var i=t.lanes;n|=i&=e.pendingLanes,t.lanes=n,bt(e,n)}}function Ma(e,t){var n=e.updateQueue,i=e.alternate;if(null!==i&&n===(i=i.updateQueue)){var r=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?r=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?r=a=t:a=a.next=t}else r=a=t;return n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ua(e,t,n,i){var r=e.updateQueue;Oa=!1;var a=r.firstBaseUpdate,o=r.lastBaseUpdate,l=r.shared.pending;if(null!==l){r.shared.pending=null;var s=l,d=s.next;s.next=null,null===o?a=d:o.next=d,o=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===l?c.firstBaseUpdate=d:l.next=d,c.lastBaseUpdate=s))}if(null!==a){var p=r.baseState;for(o=0,c=d=s=null,l=a;;){var u=l.lane,x=l.eventTime;if((i&u)===u){null!==c&&(c=c.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var f=e,h=l;switch(u=t,x=n,h.tag){case 1:if("function"===typeof(f=h.payload)){p=f.call(x,p,u);break e}p=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null===(u="function"===typeof(f=h.payload)?f.call(x,p,u):f)||void 0===u)break e;p=N({},p,u);break e;case 2:Oa=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(u=r.effects)?r.effects=[l]:u.push(l))}else x={eventTime:x,lane:u,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(d=c=x,s=p):c=c.next=x,o|=u;if(null===(l=l.next)){if(null===(l=r.shared.pending))break;l=(u=l).next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}if(null===c&&(s=p),r.baseState=s,r.firstBaseUpdate=d,r.lastBaseUpdate=c,null!==(t=r.shared.interleaved)){r=t;do{o|=r.lane,r=r.next}while(r!==t)}else null===a&&(r.shared.lanes=0);Rs|=o,e.lanes=o,e.memoizedState=p}}function Ha(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var i=e[t],r=i.callback;if(null!==r){if(i.callback=null,i=n,"function"!==typeof r)throw Error(a(191,r));r.call(i)}}}var Va={},Wa=Er(Va),Ya=Er(Va),Xa=Er(Va);function Ja(e){if(e===Va)throw Error(a(174));return e}function Ga(e,t){switch(zr(Xa,t),zr(Ya,e),zr(Wa,Va),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Sr(Wa),zr(Wa,t)}function Qa(){Sr(Wa),Sr(Ya),Sr(Xa)}function Ka(e){Ja(Xa.current);var t=Ja(Wa.current),n=se(t,e.type);t!==n&&(zr(Ya,e),zr(Wa,n))}function Za(e){Ya.current===e&&(Sr(Wa),Sr(Ya))}var qa=Er(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var io=y.ReactCurrentDispatcher,ro=y.ReactCurrentBatchConfig,ao=0,oo=null,lo=null,so=null,co=!1,po=!1,uo=0,xo=0;function fo(){throw Error(a(321))}function ho(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!li(e[n],t[n]))return!1;return!0}function mo(e,t,n,i,r,o){if(ao=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,io.current=null===e||null===e.memoizedState?qo:el,e=n(i,r),po){o=0;do{if(po=!1,uo=0,25<=o)throw Error(a(301));o+=1,so=lo=null,t.updateQueue=null,io.current=tl,e=n(i,r)}while(po)}if(io.current=Zo,t=null!==lo&&null!==lo.next,ao=0,so=lo=oo=null,co=!1,t)throw Error(a(300));return e}function go(){var e=0!==uo;return uo=0,e}function bo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===so?oo.memoizedState=so=e:so=so.next=e,so}function wo(){if(null===lo){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=lo.next;var t=null===so?oo.memoizedState:so.next;if(null!==t)so=t,lo=e;else{if(null===e)throw Error(a(310));e={memoizedState:(lo=e).memoizedState,baseState:lo.baseState,baseQueue:lo.baseQueue,queue:lo.queue,next:null},null===so?oo.memoizedState=so=e:so=so.next=e}return so}function yo(e,t){return"function"===typeof t?t(e):t}function vo(e){var t=wo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var i=lo,r=i.baseQueue,o=n.pending;if(null!==o){if(null!==r){var l=r.next;r.next=o.next,o.next=l}i.baseQueue=r=o,n.pending=null}if(null!==r){o=r.next,i=i.baseState;var s=l=null,d=null,c=o;do{var p=c.lane;if((ao&p)===p)null!==d&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:e(i,c.action);else{var u={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===d?(s=d=u,l=i):d=d.next=u,oo.lanes|=p,Rs|=p}c=c.next}while(null!==c&&c!==o);null===d?l=i:d.next=s,li(i,t.memoizedState)||(wl=!0),t.memoizedState=i,t.baseState=l,t.baseQueue=d,n.lastRenderedState=i}if(null!==(e=n.interleaved)){r=e;do{o=r.lane,oo.lanes|=o,Rs|=o,r=r.next}while(r!==e)}else null===r&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ko(e){var t=wo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,o=t.memoizedState;if(null!==r){n.pending=null;var l=r=r.next;do{o=e(o,l.action),l=l.next}while(l!==r);li(o,t.memoizedState)||(wl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function jo(){}function Eo(e,t){var n=oo,i=wo(),r=t(),o=!li(i.memoizedState,r);if(o&&(i.memoizedState=r,wl=!0),i=i.queue,Ro(Co.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||null!==so&&1&so.memoizedState.tag){if(n.flags|=2048,To(9,zo.bind(null,n,i,r,t),void 0,null),null===Ps)throw Error(a(349));0!==(30&ao)||So(n,t,r)}return r}function So(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function zo(e,t,n,i){t.value=n,t.getSnapshot=i,_o(t)&&Po(e)}function Co(e,t,n){return n(function(){_o(t)&&Po(e)})}function _o(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!li(e,n)}catch(i){return!0}}function Po(e){var t=Aa(e,1);null!==t&&nd(t,e,1,-1)}function Io(e){var t=bo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:e},t.queue=e,e=e.dispatch=Jo.bind(null,oo,e),[t.memoizedState,e]}function To(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Bo(){return wo().memoizedState}function Fo(e,t,n,i){var r=bo();oo.flags|=e,r.memoizedState=To(1|t,n,void 0,void 0===i?null:i)}function Ao(e,t,n,i){var r=wo();i=void 0===i?null:i;var a=void 0;if(null!==lo){var o=lo.memoizedState;if(a=o.destroy,null!==i&&ho(i,o.deps))return void(r.memoizedState=To(t,n,a,i))}oo.flags|=e,r.memoizedState=To(1|t,n,a,i)}function Oo(e,t){return Fo(8390656,8,e,t)}function Ro(e,t){return Ao(2048,8,e,t)}function No(e,t){return Ao(4,2,e,t)}function Do(e,t){return Ao(4,4,e,t)}function Lo(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function $o(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ao(4,4,Lo.bind(null,t,e),n)}function Mo(){}function Uo(e,t){var n=wo();t=void 0===t?null:t;var i=n.memoizedState;return null!==i&&null!==t&&ho(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Ho(e,t){var n=wo();t=void 0===t?null:t;var i=n.memoizedState;return null!==i&&null!==t&&ho(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function Vo(e,t,n){return 0===(21&ao)?(e.baseState&&(e.baseState=!1,wl=!0),e.memoizedState=n):(li(n,t)||(n=ht(),oo.lanes|=n,Rs|=n,e.baseState=!0),t)}function Wo(e,t){var n=wt;wt=0!==n&&4>n?n:4,e(!0);var i=ro.transition;ro.transition={};try{e(!1),t()}finally{wt=n,ro.transition=i}}function Yo(){return wo().memoizedState}function Xo(e,t,n){var i=td(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Go(e))Qo(t,n);else if(null!==(n=Fa(e,t,n,i))){nd(n,e,i,ed()),Ko(n,t,i)}}function Jo(e,t,n){var i=td(e),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Go(e))Qo(t,r);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=a(o,n);if(r.hasEagerState=!0,r.eagerState=l,li(l,o)){var s=t.interleaved;return null===s?(r.next=r,Ba(t)):(r.next=s.next,s.next=r),void(t.interleaved=r)}}catch(d){}null!==(n=Fa(e,t,r,i))&&(nd(n,e,i,r=ed()),Ko(n,t,i))}}function Go(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function Qo(e,t){po=co=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ko(e,t,n){if(0!==(4194240&n)){var i=t.lanes;n|=i&=e.pendingLanes,t.lanes=n,bt(e,n)}}var Zo={readContext:Ia,useCallback:fo,useContext:fo,useEffect:fo,useImperativeHandle:fo,useInsertionEffect:fo,useLayoutEffect:fo,useMemo:fo,useReducer:fo,useRef:fo,useState:fo,useDebugValue:fo,useDeferredValue:fo,useTransition:fo,useMutableSource:fo,useSyncExternalStore:fo,useId:fo,unstable_isNewReconciler:!1},qo={readContext:Ia,useCallback:function(e,t){return bo().memoizedState=[e,void 0===t?null:t],e},useContext:Ia,useEffect:Oo,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Fo(4194308,4,Lo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fo(4,2,e,t)},useMemo:function(e,t){var n=bo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=bo();return t=void 0!==n?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Xo.bind(null,oo,e),[i.memoizedState,e]},useRef:function(e){return e={current:e},bo().memoizedState=e},useState:Io,useDebugValue:Mo,useDeferredValue:function(e){return bo().memoizedState=e},useTransition:function(){var e=Io(!1),t=e[0];return e=Wo.bind(null,e[1]),bo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=oo,r=bo();if(ra){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===Ps)throw Error(a(349));0!==(30&ao)||So(i,t,n)}r.memoizedState=n;var o={value:n,getSnapshot:t};return r.queue=o,Oo(Co.bind(null,i,o,e),[e]),i.flags|=2048,To(9,zo.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=bo(),t=Ps.identifierPrefix;if(ra){var n=Kr;t=":"+t+"R"+(n=(Qr&~(1<<32-ot(Qr)-1)).toString(32)+n),0<(n=uo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=xo++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Ia,useCallback:Uo,useContext:Ia,useEffect:Ro,useImperativeHandle:$o,useInsertionEffect:No,useLayoutEffect:Do,useMemo:Ho,useReducer:vo,useRef:Bo,useState:function(){return vo(yo)},useDebugValue:Mo,useDeferredValue:function(e){return Vo(wo(),lo.memoizedState,e)},useTransition:function(){return[vo(yo)[0],wo().memoizedState]},useMutableSource:jo,useSyncExternalStore:Eo,useId:Yo,unstable_isNewReconciler:!1},tl={readContext:Ia,useCallback:Uo,useContext:Ia,useEffect:Ro,useImperativeHandle:$o,useInsertionEffect:No,useLayoutEffect:Do,useMemo:Ho,useReducer:ko,useRef:Bo,useState:function(){return ko(yo)},useDebugValue:Mo,useDeferredValue:function(e){var t=wo();return null===lo?t.memoizedState=e:Vo(t,lo.memoizedState,e)},useTransition:function(){return[ko(yo)[0],wo().memoizedState]},useMutableSource:jo,useSyncExternalStore:Eo,useId:Yo,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=N({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function il(e,t,n,i){n=null===(n=n(i,t=e.memoizedState))||void 0===n?t:N({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var rl={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=ed(),r=td(e),a=Da(i,r);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=La(e,a,r))&&(nd(t,e,r,i),$a(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=ed(),r=td(e),a=Da(i,r);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=La(e,a,r))&&(nd(t,e,r,i),$a(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ed(),i=td(e),r=Da(n,i);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=La(e,r,i))&&(nd(t,e,i,n),$a(t,e,i))}};function al(e,t,n,i,r,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(i,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!si(n,i)||!si(r,a))}function ol(e,t,n){var i=!1,r=Cr,a=t.contextType;return"object"===typeof a&&null!==a?a=Ia(a):(r=Br(t)?Ir:_r.current,a=(i=null!==(i=t.contextTypes)&&void 0!==i)?Tr(e,r):Cr),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=rl,e.stateNode=t,t._reactInternals=e,i&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),t}function ll(e,t,n,i){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,i),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&rl.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,i){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},Ra(e);var a=t.contextType;"object"===typeof a&&null!==a?r.context=Ia(a):(a=Br(t)?Ir:_r.current,r.context=Tr(e,a)),r.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(il(e,t,a,n),r.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof r.getSnapshotBeforeUpdate||"function"!==typeof r.UNSAFE_componentWillMount&&"function"!==typeof r.componentWillMount||(t=r.state,"function"===typeof r.componentWillMount&&r.componentWillMount(),"function"===typeof r.UNSAFE_componentWillMount&&r.UNSAFE_componentWillMount(),t!==r.state&&rl.enqueueReplaceState(r,r.state,null),Ua(e,n,r,i),r.state=e.memoizedState),"function"===typeof r.componentDidMount&&(e.flags|=4194308)}function dl(e,t){try{var n="",i=t;do{n+=M(i),i=i.return}while(i);var r=n}catch(a){r="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:r,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function pl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ul="function"===typeof WeakMap?WeakMap:Map;function xl(e,t,n){(n=Da(-1,n)).tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Vs||(Vs=!0,Ws=i),pl(0,t)},n}function fl(e,t,n){(n=Da(-1,n)).tag=3;var i=e.type.getDerivedStateFromError;if("function"===typeof i){var r=t.value;n.payload=function(){return i(r)},n.callback=function(){pl(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(n.callback=function(){pl(0,t),"function"!==typeof i&&(null===Ys?Ys=new Set([this]):Ys.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function hl(e,t,n){var i=e.pingCache;if(null===i){i=e.pingCache=new ul;var r=new Set;i.set(t,r)}else void 0===(r=i.get(t))&&(r=new Set,i.set(t,r));r.has(n)||(r.add(n),e=Sd.bind(null,e,t,n),t.then(e,e))}function ml(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function gl(e,t,n,i,r){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Da(-1,1)).tag=2,La(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=r,e)}var bl=y.ReactCurrentOwner,wl=!1;function yl(e,t,n,i){t.child=null===e?va(t,null,n,i):ya(t,e.child,n,i)}function vl(e,t,n,i,r){n=n.render;var a=t.ref;return Pa(t,r),i=mo(e,t,n,i,a,r),n=go(),null===e||wl?(ra&&n&&ea(t),t.flags|=1,yl(e,t,i,r),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Vl(e,t,r))}function kl(e,t,n,i,r){if(null===e){var a=n.type;return"function"!==typeof a||Bd(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ad(n.type,null,i,t,t.mode,r)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,jl(e,t,a,i,r))}if(a=e.child,0===(e.lanes&r)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:si)(o,i)&&e.ref===t.ref)return Vl(e,t,r)}return t.flags|=1,(e=Fd(a,i)).ref=t.ref,e.return=t,t.child=e}function jl(e,t,n,i,r){if(null!==e){var a=e.memoizedProps;if(si(a,i)&&e.ref===t.ref){if(wl=!1,t.pendingProps=i=a,0===(e.lanes&r))return t.lanes=e.lanes,Vl(e,t,r);0!==(131072&e.flags)&&(wl=!0)}}return zl(e,t,n,i,r)}function El(e,t,n){var i=t.pendingProps,r=i.children,a=null!==e?e.memoizedState:null;if("hidden"===i.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},zr(Fs,Bs),Bs|=n;else{if(0===(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,zr(Fs,Bs),Bs|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=null!==a?a.baseLanes:n,zr(Fs,Bs),Bs|=i}else null!==a?(i=a.baseLanes|n,t.memoizedState=null):i=n,zr(Fs,Bs),Bs|=i;return yl(e,t,r,n),t.child}function Sl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zl(e,t,n,i,r){var a=Br(n)?Ir:_r.current;return a=Tr(t,a),Pa(t,r),n=mo(e,t,n,i,a,r),i=go(),null===e||wl?(ra&&i&&ea(t),t.flags|=1,yl(e,t,n,r),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Vl(e,t,r))}function Cl(e,t,n,i,r){if(Br(n)){var a=!0;Rr(t)}else a=!1;if(Pa(t,r),null===t.stateNode)Hl(e,t),ol(t,n,i),sl(t,n,i,r),i=!0;else if(null===e){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,d=n.contextType;"object"===typeof d&&null!==d?d=Ia(d):d=Tr(t,d=Br(n)?Ir:_r.current);var c=n.getDerivedStateFromProps,p="function"===typeof c||"function"===typeof o.getSnapshotBeforeUpdate;p||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==i||s!==d)&&ll(t,o,i,d),Oa=!1;var u=t.memoizedState;o.state=u,Ua(t,i,o,r),s=t.memoizedState,l!==i||u!==s||Pr.current||Oa?("function"===typeof c&&(il(t,n,c,i),s=t.memoizedState),(l=Oa||al(t,n,l,i,u,s,d))?(p||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=s),o.props=i,o.state=s,o.context=d,i=l):("function"===typeof o.componentDidMount&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,Na(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:nl(t.type,l),o.props=d,p=t.pendingProps,u=o.context,"object"===typeof(s=n.contextType)&&null!==s?s=Ia(s):s=Tr(t,s=Br(n)?Ir:_r.current);var x=n.getDerivedStateFromProps;(c="function"===typeof x||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==p||u!==s)&&ll(t,o,i,s),Oa=!1,u=t.memoizedState,o.state=u,Ua(t,i,o,r);var f=t.memoizedState;l!==p||u!==f||Pr.current||Oa?("function"===typeof x&&(il(t,n,x,i),f=t.memoizedState),(d=Oa||al(t,n,d,i,u,f,s)||!1)?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(i,f,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(i,f,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=f),o.props=i,o.state=f,o.context=s,i=d):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return _l(e,t,n,i,a,r)}function _l(e,t,n,i,r,a){Sl(e,t);var o=0!==(128&t.flags);if(!i&&!o)return r&&Nr(t,n,!1),Vl(e,t,a);i=t.stateNode,bl.current=t;var l=o&&"function"!==typeof n.getDerivedStateFromError?null:i.render();return t.flags|=1,null!==e&&o?(t.child=ya(t,e.child,null,a),t.child=ya(t,null,l,a)):yl(e,t,l,a),t.memoizedState=i.state,r&&Nr(t,n,!0),t.child}function Pl(e){var t=e.stateNode;t.pendingContext?Ar(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ar(0,t.context,!1),Ga(e,t.containerInfo)}function Il(e,t,n,i,r){return xa(),fa(r),t.flags|=256,yl(e,t,n,i),t.child}var Tl,Bl,Fl,Al,Ol={dehydrated:null,treeContext:null,retryLane:0};function Rl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nl(e,t,n){var i,r=t.pendingProps,o=qa.current,l=!1,s=0!==(128&t.flags);if((i=s)||(i=(null===e||null!==e.memoizedState)&&0!==(2&o)),i?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),zr(qa,1&o),null===e)return da(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&r)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Rd(s,r,0,null),e=Od(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Rl(n),t.memoizedState=Ol,e):Dl(t,s));if(null!==(o=e.memoizedState)&&null!==(i=o.dehydrated))return function(e,t,n,i,r,o,l){if(n)return 256&t.flags?(t.flags&=-257,Ll(e,t,l,i=cl(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=i.fallback,r=t.mode,i=Rd({mode:"visible",children:i.children},r,0,null),(o=Od(o,r,l,null)).flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,0!==(1&t.mode)&&ya(t,e.child,null,l),t.child.memoizedState=Rl(l),t.memoizedState=Ol,o);if(0===(1&t.mode))return Ll(e,t,l,null);if("$!"===r.data){if(i=r.nextSibling&&r.nextSibling.dataset)var s=i.dgst;return i=s,Ll(e,t,l,i=cl(o=Error(a(419)),i,void 0))}if(s=0!==(l&e.childLanes),wl||s){if(null!==(i=Ps)){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}0!==(r=0!==(r&(i.suspendedLanes|l))?0:r)&&r!==o.retryLane&&(o.retryLane=r,Aa(e,r),nd(i,e,r,-1))}return hd(),Ll(e,t,l,i=cl(Error(a(421))))}return"$?"===r.data?(t.flags|=128,t.child=e.child,t=Cd.bind(null,e),r._reactRetry=t,null):(e=o.treeContext,ia=dr(r.nextSibling),na=t,ra=!0,aa=null,null!==e&&(Xr[Jr++]=Qr,Xr[Jr++]=Kr,Xr[Jr++]=Gr,Qr=e.id,Kr=e.overflow,Gr=t),t=Dl(t,i.children),t.flags|=4096,t)}(e,t,s,r,i,o,n);if(l){l=r.fallback,s=t.mode,i=(o=e.child).sibling;var d={mode:"hidden",children:r.children};return 0===(1&s)&&t.child!==o?((r=t.child).childLanes=0,r.pendingProps=d,t.deletions=null):(r=Fd(o,d)).subtreeFlags=14680064&o.subtreeFlags,null!==i?l=Fd(i,l):(l=Od(l,s,n,null)).flags|=2,l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=null===(s=e.child.memoizedState)?Rl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Ol,r}return e=(l=e.child).sibling,r=Fd(l,{mode:"visible",children:r.children}),0===(1&t.mode)&&(r.lanes=n),r.return=t,r.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Dl(e,t){return(t=Rd({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ll(e,t,n,i){return null!==i&&fa(i),ya(t,e.child,null,n),(e=Dl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function $l(e,t,n){e.lanes|=t;var i=e.alternate;null!==i&&(i.lanes|=t),_a(e.return,t,n)}function Ml(e,t,n,i,r){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function Ul(e,t,n){var i=t.pendingProps,r=i.revealOrder,a=i.tail;if(yl(e,t,i.children,n),0!==(2&(i=qa.current)))i=1&i|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&$l(e,n,t);else if(19===e.tag)$l(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(zr(qa,i),0===(1&t.mode))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(r=n),n=n.sibling;null===(n=r)?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Ml(t,!1,r,n,a);break;case"backwards":for(n=null,r=t.child,t.child=null;null!==r;){if(null!==(e=r.alternate)&&null===eo(e)){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Ml(t,!0,n,null,a);break;case"together":Ml(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Rs|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Fd(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Fd(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Wl(e,t){if(!ra)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;null!==n;)null!==n.alternate&&(i=n),n=n.sibling;null===i?t||null===e.tail?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Yl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;null!==r;)n|=r.lanes|r.childLanes,i|=14680064&r.subtreeFlags,i|=14680064&r.flags,r.return=e,r=r.sibling;else for(r=e.child;null!==r;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Xl(e,t,n){var i=t.pendingProps;switch(ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yl(t),null;case 1:case 17:return Br(t.type)&&Fr(),Yl(t),null;case 3:return i=t.stateNode,Qa(),Sr(Pr),Sr(_r),no(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),null!==e&&null!==e.child||(pa(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==aa&&(od(aa),aa=null))),Bl(e,t),Yl(t),null;case 5:Za(t);var r=Ja(Xa.current);if(n=t.type,null!==e&&null!=t.stateNode)Fl(e,t,n,i,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(null===t.stateNode)throw Error(a(166));return Yl(t),null}if(e=Ja(Wa.current),pa(t)){i=t.stateNode,n=t.type;var o=t.memoizedProps;switch(i[ur]=t,i[xr]=o,e=0!==(1&t.mode),n){case"dialog":Li("cancel",i),Li("close",i);break;case"iframe":case"object":case"embed":Li("load",i);break;case"video":case"audio":for(r=0;r<Oi.length;r++)Li(Oi[r],i);break;case"source":Li("error",i);break;case"img":case"image":case"link":Li("error",i),Li("load",i);break;case"details":Li("toggle",i);break;case"input":Q(i,o),Li("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Li("invalid",i);break;case"textarea":re(i,o),Li("invalid",i)}for(var s in be(n,o),r=null,o)if(o.hasOwnProperty(s)){var d=o[s];"children"===s?"string"===typeof d?i.textContent!==d&&(!0!==o.suppressHydrationWarning&&Zi(i.textContent,d,e),r=["children",d]):"number"===typeof d&&i.textContent!==""+d&&(!0!==o.suppressHydrationWarning&&Zi(i.textContent,d,e),r=["children",""+d]):l.hasOwnProperty(s)&&null!=d&&"onScroll"===s&&Li("scroll",i)}switch(n){case"input":Y(i),q(i,o,!0);break;case"textarea":Y(i),oe(i);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(i.onclick=qi)}i=r,t.updateQueue=i,null!==i&&(t.flags|=4)}else{s=9===r.nodeType?r:r.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof i.is?e=s.createElement(n,{is:i.is}):(e=s.createElement(n),"select"===n&&(s=e,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):e=s.createElementNS(e,n),e[ur]=t,e[xr]=i,Tl(e,t,!1,!1),t.stateNode=e;e:{switch(s=we(n,i),n){case"dialog":Li("cancel",e),Li("close",e),r=i;break;case"iframe":case"object":case"embed":Li("load",e),r=i;break;case"video":case"audio":for(r=0;r<Oi.length;r++)Li(Oi[r],e);r=i;break;case"source":Li("error",e),r=i;break;case"img":case"image":case"link":Li("error",e),Li("load",e),r=i;break;case"details":Li("toggle",e),r=i;break;case"input":Q(e,i),r=G(e,i),Li("invalid",e);break;case"option":default:r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=N({},i,{value:void 0}),Li("invalid",e);break;case"textarea":re(e,i),r=ie(e,i),Li("invalid",e)}for(o in be(n,r),d=r)if(d.hasOwnProperty(o)){var c=d[o];"style"===o?me(e,c):"dangerouslySetInnerHTML"===o?null!=(c=c?c.__html:void 0)&&pe(e,c):"children"===o?"string"===typeof c?("textarea"!==n||""!==c)&&ue(e,c):"number"===typeof c&&ue(e,""+c):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(l.hasOwnProperty(o)?null!=c&&"onScroll"===o&&Li("scroll",e):null!=c&&w(e,o,c,s))}switch(n){case"input":Y(e),q(e,i,!1);break;case"textarea":Y(e),oe(e);break;case"option":null!=i.value&&e.setAttribute("value",""+V(i.value));break;case"select":e.multiple=!!i.multiple,null!=(o=i.value)?ne(e,!!i.multiple,o,!1):null!=i.defaultValue&&ne(e,!!i.multiple,i.defaultValue,!0);break;default:"function"===typeof r.onClick&&(e.onclick=qi)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Yl(t),null;case 6:if(e&&null!=t.stateNode)Al(e,t,e.memoizedProps,i);else{if("string"!==typeof i&&null===t.stateNode)throw Error(a(166));if(n=Ja(Xa.current),Ja(Wa.current),pa(t)){if(i=t.stateNode,n=t.memoizedProps,i[ur]=t,(o=i.nodeValue!==n)&&null!==(e=na))switch(e.tag){case 3:Zi(i.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zi(i.nodeValue,n,0!==(1&e.mode))}o&&(t.flags|=4)}else(i=(9===n.nodeType?n:n.ownerDocument).createTextNode(i))[ur]=t,t.stateNode=i}return Yl(t),null;case 13:if(Sr(qa),i=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ra&&null!==ia&&0!==(1&t.mode)&&0===(128&t.flags))ua(),xa(),t.flags|=98560,o=!1;else if(o=pa(t),null!==i&&null!==i.dehydrated){if(null===e){if(!o)throw Error(a(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(a(317));o[ur]=t}else xa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Yl(t),o=!1}else null!==aa&&(od(aa),aa=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((i=null!==i)!==(null!==e&&null!==e.memoizedState)&&i&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&qa.current)?0===As&&(As=3):hd())),null!==t.updateQueue&&(t.flags|=4),Yl(t),null);case 4:return Qa(),Bl(e,t),null===e&&Ui(t.stateNode.containerInfo),Yl(t),null;case 10:return Ca(t.type._context),Yl(t),null;case 19:if(Sr(qa),null===(o=t.memoizedState))return Yl(t),null;if(i=0!==(128&t.flags),null===(s=o.rendering))if(i)Wl(o,!1);else{if(0!==As||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=eo(e))){for(t.flags|=128,Wl(o,!1),null!==(i=s.updateQueue)&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;null!==n;)e=i,(o=n).flags&=14680066,null===(s=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return zr(qa,1&qa.current|2),t.child}e=e.sibling}null!==o.tail&&Ke()>Us&&(t.flags|=128,i=!0,Wl(o,!1),t.lanes=4194304)}else{if(!i)if(null!==(e=eo(s))){if(t.flags|=128,i=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Wl(o,!0),null===o.tail&&"hidden"===o.tailMode&&!s.alternate&&!ra)return Yl(t),null}else 2*Ke()-o.renderingStartTime>Us&&1073741824!==n&&(t.flags|=128,i=!0,Wl(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=o.last)?n.sibling=s:t.child=s,o.last=s)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ke(),t.sibling=null,n=qa.current,zr(qa,i?1&n|2:1&n),t):(Yl(t),null);case 22:case 23:return pd(),i=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==i&&(t.flags|=8192),i&&0!==(1&t.mode)?0!==(1073741824&Bs)&&(Yl(t),6&t.subtreeFlags&&(t.flags|=8192)):Yl(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function Jl(e,t){switch(ta(t),t.tag){case 1:return Br(t.type)&&Fr(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Qa(),Sr(Pr),Sr(_r),no(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Za(t),null;case 13:if(Sr(qa),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));xa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Sr(qa),null;case 4:return Qa(),null;case 10:return Ca(t.type._context),null;case 22:case 23:return pd(),null;default:return null}}Tl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Bl=function(){},Fl=function(e,t,n,i){var r=e.memoizedProps;if(r!==i){e=t.stateNode,Ja(Wa.current);var a,o=null;switch(n){case"input":r=G(e,r),i=G(e,i),o=[];break;case"select":r=N({},r,{value:void 0}),i=N({},i,{value:void 0}),o=[];break;case"textarea":r=ie(e,r),i=ie(e,i),o=[];break;default:"function"!==typeof r.onClick&&"function"===typeof i.onClick&&(e.onclick=qi)}for(c in be(n,i),n=null,r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&null!=r[c])if("style"===c){var s=r[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var d=i[c];if(s=null!=r?r[c]:void 0,i.hasOwnProperty(c)&&d!==s&&(null!=d||null!=s))if("style"===c)if(s){for(a in s)!s.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in d)d.hasOwnProperty(a)&&s[a]!==d[a]&&(n||(n={}),n[a]=d[a])}else n||(o||(o=[]),o.push(c,n)),n=d;else"dangerouslySetInnerHTML"===c?(d=d?d.__html:void 0,s=s?s.__html:void 0,null!=d&&s!==d&&(o=o||[]).push(c,d)):"children"===c?"string"!==typeof d&&"number"!==typeof d||(o=o||[]).push(c,""+d):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=d&&"onScroll"===c&&Li("scroll",e),o||s===d||(o=[])):(o=o||[]).push(c,d))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}},Al=function(e,t,n,i){n!==i&&(t.flags|=4)};var Gl=!1,Ql=!1,Kl="function"===typeof WeakSet?WeakSet:Set,Zl=null;function ql(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(i){Ed(e,t,i)}else n.current=null}function es(e,t,n){try{n()}catch(i){Ed(e,t,i)}}var ts=!1;function ns(e,t,n){var i=t.updateQueue;if(null!==(i=null!==i?i.lastEffect:null)){var r=i=i.next;do{if((r.tag&e)===e){var a=r.destroy;r.destroy=void 0,void 0!==a&&es(t,n,a)}r=r.next}while(r!==i)}}function is(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function rs(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function as(e){var t=e.alternate;null!==t&&(e.alternate=null,as(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[ur],delete t[xr],delete t[hr],delete t[mr],delete t[gr])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function os(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||os(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var i=e.tag;if(5===i||6===i)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=qi));else if(4!==i&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function ds(e,t,n){var i=e.tag;if(5===i||6===i)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==i&&null!==(e=e.child))for(ds(e,t,n),e=e.sibling;null!==e;)ds(e,t,n),e=e.sibling}var cs=null,ps=!1;function us(e,t,n){for(n=n.child;null!==n;)xs(e,t,n),n=n.sibling}function xs(e,t,n){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(rt,n)}catch(l){}switch(n.tag){case 5:Ql||ql(n,t);case 6:var i=cs,r=ps;cs=null,us(e,t,n),ps=r,null!==(cs=i)&&(ps?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ps?(e=cs,n=n.stateNode,8===e.nodeType?sr(e.parentNode,n):1===e.nodeType&&sr(e,n),Ut(e)):sr(cs,n.stateNode));break;case 4:i=cs,r=ps,cs=n.stateNode.containerInfo,ps=!0,us(e,t,n),cs=i,ps=r;break;case 0:case 11:case 14:case 15:if(!Ql&&(null!==(i=n.updateQueue)&&null!==(i=i.lastEffect))){r=i=i.next;do{var a=r,o=a.destroy;a=a.tag,void 0!==o&&(0!==(2&a)||0!==(4&a))&&es(n,t,o),r=r.next}while(r!==i)}us(e,t,n);break;case 1:if(!Ql&&(ql(n,t),"function"===typeof(i=n.stateNode).componentWillUnmount))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){Ed(n,t,l)}us(e,t,n);break;case 21:us(e,t,n);break;case 22:1&n.mode?(Ql=(i=Ql)||null!==n.memoizedState,us(e,t,n),Ql=i):us(e,t,n);break;default:us(e,t,n)}}function fs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Kl),t.forEach(function(t){var i=_d.bind(null,e,t);n.has(t)||(n.add(t),t.then(i,i))})}}function hs(e,t){var n=t.deletions;if(null!==n)for(var i=0;i<n.length;i++){var r=n[i];try{var o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ps=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ps=!0;break e}s=s.return}if(null===cs)throw Error(a(160));xs(o,l,r),cs=null,ps=!1;var d=r.alternate;null!==d&&(d.return=null),r.return=null}catch(c){Ed(r,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)ms(t,e),t=t.sibling}function ms(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(hs(t,e),gs(e),4&i){try{ns(3,e,e.return),is(3,e)}catch(m){Ed(e,e.return,m)}try{ns(5,e,e.return)}catch(m){Ed(e,e.return,m)}}break;case 1:hs(t,e),gs(e),512&i&&null!==n&&ql(n,n.return);break;case 5:if(hs(t,e),gs(e),512&i&&null!==n&&ql(n,n.return),32&e.flags){var r=e.stateNode;try{ue(r,"")}catch(m){Ed(e,e.return,m)}}if(4&i&&null!=(r=e.stateNode)){var o=e.memoizedProps,l=null!==n?n.memoizedProps:o,s=e.type,d=e.updateQueue;if(e.updateQueue=null,null!==d)try{"input"===s&&"radio"===o.type&&null!=o.name&&K(r,o),we(s,l);var c=we(s,o);for(l=0;l<d.length;l+=2){var p=d[l],u=d[l+1];"style"===p?me(r,u):"dangerouslySetInnerHTML"===p?pe(r,u):"children"===p?ue(r,u):w(r,p,u,c)}switch(s){case"input":Z(r,o);break;case"textarea":ae(r,o);break;case"select":var x=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var f=o.value;null!=f?ne(r,!!o.multiple,f,!1):x!==!!o.multiple&&(null!=o.defaultValue?ne(r,!!o.multiple,o.defaultValue,!0):ne(r,!!o.multiple,o.multiple?[]:"",!1))}r[xr]=o}catch(m){Ed(e,e.return,m)}}break;case 6:if(hs(t,e),gs(e),4&i){if(null===e.stateNode)throw Error(a(162));r=e.stateNode,o=e.memoizedProps;try{r.nodeValue=o}catch(m){Ed(e,e.return,m)}}break;case 3:if(hs(t,e),gs(e),4&i&&null!==n&&n.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(m){Ed(e,e.return,m)}break;case 4:default:hs(t,e),gs(e);break;case 13:hs(t,e),gs(e),8192&(r=e.child).flags&&(o=null!==r.memoizedState,r.stateNode.isHidden=o,!o||null!==r.alternate&&null!==r.alternate.memoizedState||(Ms=Ke())),4&i&&fs(e);break;case 22:if(p=null!==n&&null!==n.memoizedState,1&e.mode?(Ql=(c=Ql)||p,hs(t,e),Ql=c):hs(t,e),gs(e),8192&i){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!p&&0!==(1&e.mode))for(Zl=e,p=e.child;null!==p;){for(u=Zl=p;null!==Zl;){switch(f=(x=Zl).child,x.tag){case 0:case 11:case 14:case 15:ns(4,x,x.return);break;case 1:ql(x,x.return);var h=x.stateNode;if("function"===typeof h.componentWillUnmount){i=x,n=x.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(m){Ed(i,n,m)}}break;case 5:ql(x,x.return);break;case 22:if(null!==x.memoizedState){vs(u);continue}}null!==f?(f.return=x,Zl=f):vs(u)}p=p.sibling}e:for(p=null,u=e;;){if(5===u.tag){if(null===p){p=u;try{r=u.stateNode,c?"function"===typeof(o=r.style).setProperty?o.setProperty("display","none","important"):o.display="none":(s=u.stateNode,l=void 0!==(d=u.memoizedProps.style)&&null!==d&&d.hasOwnProperty("display")?d.display:null,s.style.display=he("display",l))}catch(m){Ed(e,e.return,m)}}}else if(6===u.tag){if(null===p)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(m){Ed(e,e.return,m)}}else if((22!==u.tag&&23!==u.tag||null===u.memoizedState||u===e)&&null!==u.child){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;null===u.sibling;){if(null===u.return||u.return===e)break e;p===u&&(p=null),u=u.return}p===u&&(p=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:hs(t,e),gs(e),4&i&&fs(e);case 21:}}function gs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(os(n)){var i=n;break e}n=n.return}throw Error(a(160))}switch(i.tag){case 5:var r=i.stateNode;32&i.flags&&(ue(r,""),i.flags&=-33),ds(e,ls(e),r);break;case 3:case 4:var o=i.stateNode.containerInfo;ss(e,ls(e),o);break;default:throw Error(a(161))}}catch(l){Ed(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function bs(e,t,n){Zl=e,ws(e,t,n)}function ws(e,t,n){for(var i=0!==(1&e.mode);null!==Zl;){var r=Zl,a=r.child;if(22===r.tag&&i){var o=null!==r.memoizedState||Gl;if(!o){var l=r.alternate,s=null!==l&&null!==l.memoizedState||Ql;l=Gl;var d=Ql;if(Gl=o,(Ql=s)&&!d)for(Zl=r;null!==Zl;)s=(o=Zl).child,22===o.tag&&null!==o.memoizedState?ks(r):null!==s?(s.return=o,Zl=s):ks(r);for(;null!==a;)Zl=a,ws(a,t,n),a=a.sibling;Zl=r,Gl=l,Ql=d}ys(e)}else 0!==(8772&r.subtreeFlags)&&null!==a?(a.return=r,Zl=a):ys(e)}}function ys(e){for(;null!==Zl;){var t=Zl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Ql||is(5,t);break;case 1:var i=t.stateNode;if(4&t.flags&&!Ql)if(null===n)i.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Ha(t,o,i);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ha(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var p=c.memoizedState;if(null!==p){var u=p.dehydrated;null!==u&&Ut(u)}}}break;default:throw Error(a(163))}Ql||512&t.flags&&rs(t)}catch(x){Ed(t,t.return,x)}}if(t===e){Zl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Zl=n;break}Zl=t.return}}function vs(e){for(;null!==Zl;){var t=Zl;if(t===e){Zl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zl=n;break}Zl=t.return}}function ks(e){for(;null!==Zl;){var t=Zl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{is(4,t)}catch(s){Ed(t,n,s)}break;case 1:var i=t.stateNode;if("function"===typeof i.componentDidMount){var r=t.return;try{i.componentDidMount()}catch(s){Ed(t,r,s)}}var a=t.return;try{rs(t)}catch(s){Ed(t,a,s)}break;case 5:var o=t.return;try{rs(t)}catch(s){Ed(t,o,s)}}}catch(s){Ed(t,t.return,s)}if(t===e){Zl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Zl=l;break}Zl=t.return}}var js,Es=Math.ceil,Ss=y.ReactCurrentDispatcher,zs=y.ReactCurrentOwner,Cs=y.ReactCurrentBatchConfig,_s=0,Ps=null,Is=null,Ts=0,Bs=0,Fs=Er(0),As=0,Os=null,Rs=0,Ns=0,Ds=0,Ls=null,$s=null,Ms=0,Us=1/0,Hs=null,Vs=!1,Ws=null,Ys=null,Xs=!1,Js=null,Gs=0,Qs=0,Ks=null,Zs=-1,qs=0;function ed(){return 0!==(6&_s)?Ke():-1!==Zs?Zs:Zs=Ke()}function td(e){return 0===(1&e.mode)?1:0!==(2&_s)&&0!==Ts?Ts&-Ts:null!==ha.transition?(0===qs&&(qs=ht()),qs):0!==(e=wt)?e:e=void 0===(e=window.event)?16:Qt(e.type)}function nd(e,t,n,i){if(50<Qs)throw Qs=0,Ks=null,Error(a(185));gt(e,n,i),0!==(2&_s)&&e===Ps||(e===Ps&&(0===(2&_s)&&(Ns|=n),4===As&&ld(e,Ts)),id(e,i),1===n&&0===_s&&0===(1&t.mode)&&(Us=Ke()+500,Lr&&Ur()))}function id(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-ot(a),l=1<<o,s=r[o];-1===s?0!==(l&n)&&0===(l&i)||(r[o]=xt(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}(e,t);var i=ut(e,e===Ps?Ts:0);if(0===i)null!==n&&Je(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(null!=n&&Je(n),1===t)0===e.tag?function(e){Lr=!0,Mr(e)}(sd.bind(null,e)):Mr(sd.bind(null,e)),or(function(){0===(6&_s)&&Ur()}),n=null;else{switch(yt(i)){case 1:n=qe;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=it}n=Pd(n,rd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rd(e,t){if(Zs=-1,qs=0,0!==(6&_s))throw Error(a(327));var n=e.callbackNode;if(kd()&&e.callbackNode!==n)return null;var i=ut(e,e===Ps?Ts:0);if(0===i)return null;if(0!==(30&i)||0!==(i&e.expiredLanes)||t)t=md(e,i);else{t=i;var r=_s;_s|=2;var o=fd();for(Ps===e&&Ts===t||(Hs=null,Us=Ke()+500,ud(e,t));;)try{bd();break}catch(s){xd(e,s)}za(),Ss.current=o,_s=r,null!==Is?t=0:(Ps=null,Ts=0,t=As)}if(0!==t){if(2===t&&(0!==(r=ft(e))&&(i=r,t=ad(e,r))),1===t)throw n=Os,ud(e,0),ld(e,i),id(e,Ke()),n;if(6===t)ld(e,i);else{if(r=e.current.alternate,0===(30&i)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!li(a(),r))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(r)&&(2===(t=md(e,i))&&(0!==(o=ft(e))&&(i=o,t=ad(e,o))),1===t))throw n=Os,ud(e,0),ld(e,i),id(e,Ke()),n;switch(e.finishedWork=r,e.finishedLanes=i,t){case 0:case 1:throw Error(a(345));case 2:case 5:vd(e,$s,Hs);break;case 3:if(ld(e,i),(130023424&i)===i&&10<(t=Ms+500-Ke())){if(0!==ut(e,0))break;if(((r=e.suspendedLanes)&i)!==i){ed(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=ir(vd.bind(null,e,$s,Hs),t);break}vd(e,$s,Hs);break;case 4:if(ld(e,i),(4194240&i)===i)break;for(t=e.eventTimes,r=-1;0<i;){var l=31-ot(i);o=1<<l,(l=t[l])>r&&(r=l),i&=~o}if(i=r,10<(i=(120>(i=Ke()-i)?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Es(i/1960))-i)){e.timeoutHandle=ir(vd.bind(null,e,$s,Hs),i);break}vd(e,$s,Hs);break;default:throw Error(a(329))}}}return id(e,Ke()),e.callbackNode===n?rd.bind(null,e):null}function ad(e,t){var n=Ls;return e.current.memoizedState.isDehydrated&&(ud(e,t).flags|=256),2!==(e=md(e,t))&&(t=$s,$s=n,null!==t&&od(t)),e}function od(e){null===$s?$s=e:$s.push.apply($s,e)}function ld(e,t){for(t&=~Ds,t&=~Ns,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),i=1<<n;e[n]=-1,t&=~i}}function sd(e){if(0!==(6&_s))throw Error(a(327));kd();var t=ut(e,0);if(0===(1&t))return id(e,Ke()),null;var n=md(e,t);if(0!==e.tag&&2===n){var i=ft(e);0!==i&&(t=i,n=ad(e,i))}if(1===n)throw n=Os,ud(e,0),ld(e,t),id(e,Ke()),n;if(6===n)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vd(e,$s,Hs),id(e,Ke()),null}function dd(e,t){var n=_s;_s|=1;try{return e(t)}finally{0===(_s=n)&&(Us=Ke()+500,Lr&&Ur())}}function cd(e){null!==Js&&0===Js.tag&&0===(6&_s)&&kd();var t=_s;_s|=1;var n=Cs.transition,i=wt;try{if(Cs.transition=null,wt=1,e)return e()}finally{wt=i,Cs.transition=n,0===(6&(_s=t))&&Ur()}}function pd(){Bs=Fs.current,Sr(Fs)}function ud(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,rr(n)),null!==Is)for(n=Is.return;null!==n;){var i=n;switch(ta(i),i.tag){case 1:null!==(i=i.type.childContextTypes)&&void 0!==i&&Fr();break;case 3:Qa(),Sr(Pr),Sr(_r),no();break;case 5:Za(i);break;case 4:Qa();break;case 13:case 19:Sr(qa);break;case 10:Ca(i.type._context);break;case 22:case 23:pd()}n=n.return}if(Ps=e,Is=e=Fd(e.current,null),Ts=Bs=t,As=0,Os=null,Ds=Ns=Rs=0,$s=Ls=null,null!==Ta){for(t=0;t<Ta.length;t++)if(null!==(i=(n=Ta[t]).interleaved)){n.interleaved=null;var r=i.next,a=n.pending;if(null!==a){var o=a.next;a.next=r,i.next=o}n.pending=i}Ta=null}return e}function xd(e,t){for(;;){var n=Is;try{if(za(),io.current=Zo,co){for(var i=oo.memoizedState;null!==i;){var r=i.queue;null!==r&&(r.pending=null),i=i.next}co=!1}if(ao=0,so=lo=oo=null,po=!1,uo=0,zs.current=null,null===n||null===n.return){As=1,Os=t,Is=null;break}e:{var o=e,l=n.return,s=n,d=t;if(t=Ts,s.flags|=32768,null!==d&&"object"===typeof d&&"function"===typeof d.then){var c=d,p=s,u=p.tag;if(0===(1&p.mode)&&(0===u||11===u||15===u)){var x=p.alternate;x?(p.updateQueue=x.updateQueue,p.memoizedState=x.memoizedState,p.lanes=x.lanes):(p.updateQueue=null,p.memoizedState=null)}var f=ml(l);if(null!==f){f.flags&=-257,gl(f,l,s,0,t),1&f.mode&&hl(o,c,t),d=c;var h=(t=f).updateQueue;if(null===h){var m=new Set;m.add(d),t.updateQueue=m}else h.add(d);break e}if(0===(1&t)){hl(o,c,t),hd();break e}d=Error(a(426))}else if(ra&&1&s.mode){var g=ml(l);if(null!==g){0===(65536&g.flags)&&(g.flags|=256),gl(g,l,s,0,t),fa(dl(d,s));break e}}o=d=dl(d,s),4!==As&&(As=2),null===Ls?Ls=[o]:Ls.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Ma(o,xl(0,d,t));break e;case 1:s=d;var b=o.type,w=o.stateNode;if(0===(128&o.flags)&&("function"===typeof b.getDerivedStateFromError||null!==w&&"function"===typeof w.componentDidCatch&&(null===Ys||!Ys.has(w)))){o.flags|=65536,t&=-t,o.lanes|=t,Ma(o,fl(o,s,t));break e}}o=o.return}while(null!==o)}yd(n)}catch(y){t=y,Is===n&&null!==n&&(Is=n=n.return);continue}break}}function fd(){var e=Ss.current;return Ss.current=Zo,null===e?Zo:e}function hd(){0!==As&&3!==As&&2!==As||(As=4),null===Ps||0===(268435455&Rs)&&0===(268435455&Ns)||ld(Ps,Ts)}function md(e,t){var n=_s;_s|=2;var i=fd();for(Ps===e&&Ts===t||(Hs=null,ud(e,t));;)try{gd();break}catch(r){xd(e,r)}if(za(),_s=n,Ss.current=i,null!==Is)throw Error(a(261));return Ps=null,Ts=0,As}function gd(){for(;null!==Is;)wd(Is)}function bd(){for(;null!==Is&&!Ge();)wd(Is)}function wd(e){var t=js(e.alternate,e,Bs);e.memoizedProps=e.pendingProps,null===t?yd(e):Is=t,zs.current=null}function yd(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Xl(n,t,Bs)))return void(Is=n)}else{if(null!==(n=Jl(n,t)))return n.flags&=32767,void(Is=n);if(null===e)return As=6,void(Is=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Is=t);Is=t=e}while(null!==t);0===As&&(As=5)}function vd(e,t,n){var i=wt,r=Cs.transition;try{Cs.transition=null,wt=1,function(e,t,n,i){do{kd()}while(null!==Js);if(0!==(6&_s))throw Error(a(327));n=e.finishedWork;var r=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-ot(n),a=1<<r;t[r]=0,i[r]=-1,e[r]=-1,n&=~a}}(e,o),e===Ps&&(Is=Ps=null,Ts=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Xs||(Xs=!0,Pd(tt,function(){return kd(),null})),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=Cs.transition,Cs.transition=null;var l=wt;wt=1;var s=_s;_s|=4,zs.current=null,function(e,t){if(er=Vt,xi(e=ui())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var i=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(i&&0!==i.rangeCount){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch(v){n=null;break e}var l=0,s=-1,d=-1,c=0,p=0,u=e,x=null;t:for(;;){for(var f;u!==n||0!==r&&3!==u.nodeType||(s=l+r),u!==o||0!==i&&3!==u.nodeType||(d=l+i),3===u.nodeType&&(l+=u.nodeValue.length),null!==(f=u.firstChild);)x=u,u=f;for(;;){if(u===e)break t;if(x===n&&++c===r&&(s=l),x===o&&++p===i&&(d=l),null!==(f=u.nextSibling))break;x=(u=x).parentNode}u=f}n=-1===s||-1===d?null:{start:s,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(tr={focusedElem:e,selectionRange:n},Vt=!1,Zl=t;null!==Zl;)if(e=(t=Zl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Zl=e;else for(;null!==Zl;){t=Zl;try{var h=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==h){var m=h.memoizedProps,g=h.memoizedState,b=t.stateNode,w=b.getSnapshotBeforeUpdate(t.elementType===t.type?m:nl(t.type,m),g);b.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var y=t.stateNode.containerInfo;1===y.nodeType?y.textContent="":9===y.nodeType&&y.documentElement&&y.removeChild(y.documentElement);break;default:throw Error(a(163))}}catch(v){Ed(t,t.return,v)}if(null!==(e=t.sibling)){e.return=t.return,Zl=e;break}Zl=t.return}h=ts,ts=!1}(e,n),ms(n,e),fi(tr),Vt=!!er,tr=er=null,e.current=n,bs(n,e,r),Qe(),_s=s,wt=l,Cs.transition=o}else e.current=n;if(Xs&&(Xs=!1,Js=e,Gs=r),o=e.pendingLanes,0===o&&(Ys=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(rt,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),id(e,Ke()),null!==t)for(i=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Vs)throw Vs=!1,e=Ws,Ws=null,e;0!==(1&Gs)&&0!==e.tag&&kd(),o=e.pendingLanes,0!==(1&o)?e===Ks?Qs++:(Qs=0,Ks=e):Qs=0,Ur()}(e,t,n,i)}finally{Cs.transition=r,wt=i}return null}function kd(){if(null!==Js){var e=yt(Gs),t=Cs.transition,n=wt;try{if(Cs.transition=null,wt=16>e?16:e,null===Js)var i=!1;else{if(e=Js,Js=null,Gs=0,0!==(6&_s))throw Error(a(331));var r=_s;for(_s|=4,Zl=e.current;null!==Zl;){var o=Zl,l=o.child;if(0!==(16&Zl.flags)){var s=o.deletions;if(null!==s){for(var d=0;d<s.length;d++){var c=s[d];for(Zl=c;null!==Zl;){var p=Zl;switch(p.tag){case 0:case 11:case 15:ns(8,p,o)}var u=p.child;if(null!==u)u.return=p,Zl=u;else for(;null!==Zl;){var x=(p=Zl).sibling,f=p.return;if(as(p),p===c){Zl=null;break}if(null!==x){x.return=f,Zl=x;break}Zl=f}}}var h=o.alternate;if(null!==h){var m=h.child;if(null!==m){h.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}Zl=o}}if(0!==(2064&o.subtreeFlags)&&null!==l)l.return=o,Zl=l;else e:for(;null!==Zl;){if(0!==(2048&(o=Zl).flags))switch(o.tag){case 0:case 11:case 15:ns(9,o,o.return)}var b=o.sibling;if(null!==b){b.return=o.return,Zl=b;break e}Zl=o.return}}var w=e.current;for(Zl=w;null!==Zl;){var y=(l=Zl).child;if(0!==(2064&l.subtreeFlags)&&null!==y)y.return=l,Zl=y;else e:for(l=w;null!==Zl;){if(0!==(2048&(s=Zl).flags))try{switch(s.tag){case 0:case 11:case 15:is(9,s)}}catch(k){Ed(s,s.return,k)}if(s===l){Zl=null;break e}var v=s.sibling;if(null!==v){v.return=s.return,Zl=v;break e}Zl=s.return}}if(_s=r,Ur(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(rt,e)}catch(k){}i=!0}return i}finally{wt=n,Cs.transition=t}}return!1}function jd(e,t,n){e=La(e,t=xl(0,t=dl(n,t),1),1),t=ed(),null!==e&&(gt(e,1,t),id(e,t))}function Ed(e,t,n){if(3===e.tag)jd(e,e,n);else for(;null!==t;){if(3===t.tag){jd(t,e,n);break}if(1===t.tag){var i=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof i.componentDidCatch&&(null===Ys||!Ys.has(i))){t=La(t,e=fl(t,e=dl(n,e),1),1),e=ed(),null!==t&&(gt(t,1,e),id(t,e));break}}t=t.return}}function Sd(e,t,n){var i=e.pingCache;null!==i&&i.delete(t),t=ed(),e.pingedLanes|=e.suspendedLanes&n,Ps===e&&(Ts&n)===n&&(4===As||3===As&&(130023424&Ts)===Ts&&500>Ke()-Ms?ud(e,0):Ds|=n),id(e,t)}function zd(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=ed();null!==(e=Aa(e,t))&&(gt(e,t,n),id(e,n))}function Cd(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),zd(e,n)}function _d(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;null!==r&&(n=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(a(314))}null!==i&&i.delete(t),zd(e,n)}function Pd(e,t){return Xe(e,t)}function Id(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Td(e,t,n,i){return new Id(e,t,n,i)}function Bd(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Fd(e,t){var n=e.alternate;return null===n?((n=Td(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ad(e,t,n,i,r,o){var l=2;if(i=e,"function"===typeof e)Bd(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case j:return Od(n.children,r,o,t);case E:l=8,r|=8;break;case S:return(e=Td(12,n,t,2|r)).elementType=S,e.lanes=o,e;case P:return(e=Td(13,n,t,r)).elementType=P,e.lanes=o,e;case I:return(e=Td(19,n,t,r)).elementType=I,e.lanes=o,e;case F:return Rd(n,r,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case z:l=10;break e;case C:l=9;break e;case _:l=11;break e;case T:l=14;break e;case B:l=16,i=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Td(l,n,t,r)).elementType=e,t.type=i,t.lanes=o,t}function Od(e,t,n,i){return(e=Td(7,e,i,t)).lanes=n,e}function Rd(e,t,n,i){return(e=Td(22,e,i,t)).elementType=F,e.lanes=n,e.stateNode={isHidden:!1},e}function Nd(e,t,n){return(e=Td(6,e,null,t)).lanes=n,e}function Dd(e,t,n){return(t=Td(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ld(e,t,n,i,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mt(0),this.expirationTimes=mt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mt(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function $d(e,t,n,i,r,a,o,l,s){return e=new Ld(e,t,n,l,s),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Td(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ra(a),e}function Md(e){if(!e)return Cr;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Br(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var n=e.type;if(Br(n))return Or(e,n,t)}return t}function Ud(e,t,n,i,r,a,o,l,s){return(e=$d(n,i,!0,e,0,a,0,l,s)).context=Md(null),n=e.current,(a=Da(i=ed(),r=td(n))).callback=void 0!==t&&null!==t?t:null,La(n,a,r),e.current.lanes=r,gt(e,r,i),id(e,i),e}function Hd(e,t,n,i){var r=t.current,a=ed(),o=td(r);return n=Md(n),null===t.context?t.context=n:t.pendingContext=n,(t=Da(a,o)).payload={element:e},null!==(i=void 0===i?null:i)&&(t.callback=i),null!==(e=La(r,t,o))&&(nd(e,r,o,a),$a(e,r,o)),o}function Vd(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Wd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Yd(e,t){Wd(e,t),(e=e.alternate)&&Wd(e,t)}js=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Pr.current)wl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return wl=!1,function(e,t,n){switch(t.tag){case 3:Pl(t),xa();break;case 5:Ka(t);break;case 1:Br(t.type)&&Rr(t);break;case 4:Ga(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,r=t.memoizedProps.value;zr(ka,i._currentValue),i._currentValue=r;break;case 13:if(null!==(i=t.memoizedState))return null!==i.dehydrated?(zr(qa,1&qa.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Nl(e,t,n):(zr(qa,1&qa.current),null!==(e=Vl(e,t,n))?e.sibling:null);zr(qa,1&qa.current);break;case 19:if(i=0!==(n&t.childLanes),0!==(128&e.flags)){if(i)return Ul(e,t,n);t.flags|=128}if(null!==(r=t.memoizedState)&&(r.rendering=null,r.tail=null,r.lastEffect=null),zr(qa,qa.current),i)break;return null;case 22:case 23:return t.lanes=0,El(e,t,n)}return Vl(e,t,n)}(e,t,n);wl=0!==(131072&e.flags)}else wl=!1,ra&&0!==(1048576&t.flags)&&qr(t,Yr,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Hl(e,t),e=t.pendingProps;var r=Tr(t,_r.current);Pa(t,n),r=mo(null,t,i,e,r,n);var o=go();return t.flags|=1,"object"===typeof r&&null!==r&&"function"===typeof r.render&&void 0===r.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Br(i)?(o=!0,Rr(t)):o=!1,t.memoizedState=null!==r.state&&void 0!==r.state?r.state:null,Ra(t),r.updater=rl,t.stateNode=r,r._reactInternals=t,sl(t,i,e,n),t=_l(null,t,i,!0,o,n)):(t.tag=0,ra&&o&&ea(t),yl(null,t,r,n),t=t.child),t;case 16:i=t.elementType;e:{switch(Hl(e,t),e=t.pendingProps,i=(r=i._init)(i._payload),t.type=i,r=t.tag=function(e){if("function"===typeof e)return Bd(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===_)return 11;if(e===T)return 14}return 2}(i),e=nl(i,e),r){case 0:t=zl(null,t,i,e,n);break e;case 1:t=Cl(null,t,i,e,n);break e;case 11:t=vl(null,t,i,e,n);break e;case 14:t=kl(null,t,i,nl(i.type,e),n);break e}throw Error(a(306,i,""))}return t;case 0:return i=t.type,r=t.pendingProps,zl(e,t,i,r=t.elementType===i?r:nl(i,r),n);case 1:return i=t.type,r=t.pendingProps,Cl(e,t,i,r=t.elementType===i?r:nl(i,r),n);case 3:e:{if(Pl(t),null===e)throw Error(a(387));i=t.pendingProps,r=(o=t.memoizedState).element,Na(e,t),Ua(t,i,null,n);var l=t.memoizedState;if(i=l.element,o.isDehydrated){if(o={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Il(e,t,i,n,r=dl(Error(a(423)),t));break e}if(i!==r){t=Il(e,t,i,n,r=dl(Error(a(424)),t));break e}for(ia=dr(t.stateNode.containerInfo.firstChild),na=t,ra=!0,aa=null,n=va(t,null,i,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(xa(),i===r){t=Vl(e,t,n);break e}yl(e,t,i,n)}t=t.child}return t;case 5:return Ka(t),null===e&&da(t),i=t.type,r=t.pendingProps,o=null!==e?e.memoizedProps:null,l=r.children,nr(i,r)?l=null:null!==o&&nr(i,o)&&(t.flags|=32),Sl(e,t),yl(e,t,l,n),t.child;case 6:return null===e&&da(t),null;case 13:return Nl(e,t,n);case 4:return Ga(t,t.stateNode.containerInfo),i=t.pendingProps,null===e?t.child=ya(t,null,i,n):yl(e,t,i,n),t.child;case 11:return i=t.type,r=t.pendingProps,vl(e,t,i,r=t.elementType===i?r:nl(i,r),n);case 7:return yl(e,t,t.pendingProps,n),t.child;case 8:case 12:return yl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,r=t.pendingProps,o=t.memoizedProps,l=r.value,zr(ka,i._currentValue),i._currentValue=l,null!==o)if(li(o.value,l)){if(o.children===r.children&&!Pr.current){t=Vl(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var s=o.dependencies;if(null!==s){l=o.child;for(var d=s.firstContext;null!==d;){if(d.context===i){if(1===o.tag){(d=Da(-1,n&-n)).tag=2;var c=o.updateQueue;if(null!==c){var p=(c=c.shared).pending;null===p?d.next=d:(d.next=p.next,p.next=d),c.pending=d}}o.lanes|=n,null!==(d=o.alternate)&&(d.lanes|=n),_a(o.return,n,t),s.lanes|=n;break}d=d.next}}else if(10===o.tag)l=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(l=o.return))throw Error(a(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),_a(l,n,t),l=o.sibling}else l=o.child;if(null!==l)l.return=o;else for(l=o;null!==l;){if(l===t){l=null;break}if(null!==(o=l.sibling)){o.return=l.return,l=o;break}l=l.return}o=l}yl(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,i=t.pendingProps.children,Pa(t,n),i=i(r=Ia(r)),t.flags|=1,yl(e,t,i,n),t.child;case 14:return r=nl(i=t.type,t.pendingProps),kl(e,t,i,r=nl(i.type,r),n);case 15:return jl(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:nl(i,r),Hl(e,t),t.tag=1,Br(i)?(e=!0,Rr(t)):e=!1,Pa(t,n),ol(t,i,r),sl(t,i,r,n),_l(null,t,i,!0,e,n);case 19:return Ul(e,t,n);case 22:return El(e,t,n)}throw Error(a(156,t.tag))};var Xd="function"===typeof reportError?reportError:function(e){console.error(e)};function Jd(e){this._internalRoot=e}function Gd(e){this._internalRoot=e}function Qd(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Kd(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zd(){}function qd(e,t,n,i,r){var a=n._reactRootContainer;if(a){var o=a;if("function"===typeof r){var l=r;r=function(){var e=Vd(o);l.call(e)}}Hd(t,o,e,r)}else o=function(e,t,n,i,r){if(r){if("function"===typeof i){var a=i;i=function(){var e=Vd(o);a.call(e)}}var o=Ud(t,i,e,0,null,!1,0,"",Zd);return e._reactRootContainer=o,e[fr]=o.current,Ui(8===e.nodeType?e.parentNode:e),cd(),o}for(;r=e.lastChild;)e.removeChild(r);if("function"===typeof i){var l=i;i=function(){var e=Vd(s);l.call(e)}}var s=$d(e,0,!1,null,0,!1,0,"",Zd);return e._reactRootContainer=s,e[fr]=s.current,Ui(8===e.nodeType?e.parentNode:e),cd(function(){Hd(t,s,n,i)}),s}(n,t,e,r,i);return Vd(o)}Gd.prototype.render=Jd.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Hd(e,t,null,null)},Gd.prototype.unmount=Jd.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cd(function(){Hd(null,e,null,null)}),t[fr]=null}},Gd.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ft.length&&0!==t&&t<Ft[n].priority;n++);Ft.splice(n,0,e),0===n&&Nt(e)}},vt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pt(t.pendingLanes);0!==n&&(bt(t,1|n),id(t,Ke()),0===(6&_s)&&(Us=Ke()+500,Ur()))}break;case 13:cd(function(){var t=Aa(e,1);if(null!==t){var n=ed();nd(t,e,1,n)}}),Yd(e,1)}},kt=function(e){if(13===e.tag){var t=Aa(e,134217728);if(null!==t)nd(t,e,134217728,ed());Yd(e,134217728)}},jt=function(e){if(13===e.tag){var t=td(e),n=Aa(e,t);if(null!==n)nd(n,e,t,ed());Yd(e,t)}},Et=function(){return wt},St=function(e,t){var n=wt;try{return wt=e,t()}finally{wt=n}},ke=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=vr(i);if(!r)throw Error(a(90));X(i),Z(i,r)}}}break;case"textarea":ae(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},_e=dd,Pe=cd;var ec={usingClientEntryPoint:!1,Events:[wr,yr,vr,ze,Ce,dd]},tc={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:y.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=We(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{rt=ic.inject(nc),at=ic}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Qd(t))throw Error(a(200));return function(e,t,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==i?null:""+i,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Qd(e))throw Error(a(299));var n=!1,i="",r=Xd;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(i=t.identifierPrefix),void 0!==t.onRecoverableError&&(r=t.onRecoverableError)),t=$d(e,1,!1,null,0,n,0,i,r),e[fr]=t.current,Ui(8===e.nodeType?e.parentNode:e),new Jd(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=We(t))?null:e.stateNode},t.flushSync=function(e){return cd(e)},t.hydrate=function(e,t,n){if(!Kd(t))throw Error(a(200));return qd(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Qd(e))throw Error(a(405));var i=null!=n&&n.hydratedSources||null,r=!1,o="",l=Xd;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Ud(t,null,e,1,null!=n?n:null,r,0,o,l),e[fr]=t.current,Ui(e),i)for(e=0;e<i.length;e++)r=(r=(n=i[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new Gd(t)},t.render=function(e,t,n){if(!Kd(t))throw Error(a(200));return qd(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Kd(e))throw Error(a(40));return!!e._reactRootContainer&&(cd(function(){qd(null,null,e,!1,function(){e._reactRootContainer=null,e[fr]=null})}),!0)},t.unstable_batchedUpdates=dd,t.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!Kd(n))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return qd(e,t,n,!1,i)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(i,r){if(1&r&&(i=this(i)),8&r)return i;if("object"===typeof i&&i){if(4&r&&i.__esModule)return i;if(16&r&&"function"===typeof i.then)return i}var a=Object.create(null);n.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var l=2&r&&i;("object"==typeof l||"function"==typeof l)&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach(e=>o[e]=()=>i[e]);return o.default=()=>i,n.d(a,o),a}})(),n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e=n(43),t=n.t(e,2),i=n(391);var r=function(){return r=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)};Object.create;function a(e,t,n){if(n||2===arguments.length)for(var i,r=0,a=t.length;r<a;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var o=n(324),l=n.n(o),s="-ms-",d="-moz-",c="-webkit-",p="comm",u="rule",x="decl",f="@keyframes",h=Math.abs,m=String.fromCharCode,g=Object.assign;function b(e){return e.trim()}function w(e,t){return(e=t.exec(e))?e[0]:e}function y(e,t,n){return e.replace(t,n)}function v(e,t,n){return e.indexOf(t,n)}function k(e,t){return 0|e.charCodeAt(t)}function j(e,t,n){return e.slice(t,n)}function E(e){return e.length}function S(e){return e.length}function z(e,t){return t.push(e),e}function C(e,t){return e.filter(function(e){return!w(e,t)})}var _=1,P=1,I=0,T=0,B=0,F="";function A(e,t,n,i,r,a,o,l){return{value:e,root:t,parent:n,type:i,props:r,children:a,line:_,column:P,length:o,return:"",siblings:l}}function O(e,t){return g(A("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function R(e){for(;e.root;)e=O(e.root,{children:[e]});z(e,e.siblings)}function N(){return B=T>0?k(F,--T):0,P--,10===B&&(P=1,_--),B}function D(){return B=T<I?k(F,T++):0,P++,10===B&&(P=1,_++),B}function L(){return k(F,T)}function $(){return T}function M(e,t){return j(F,e,t)}function U(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function H(e){return _=P=1,I=E(F=e),T=0,[]}function V(e){return F="",e}function W(e){return b(M(T-1,J(91===e?e+2:40===e?e+1:e)))}function Y(e){for(;(B=L())&&B<33;)D();return U(e)>2||U(B)>3?"":" "}function X(e,t){for(;--t&&D()&&!(B<48||B>102||B>57&&B<65||B>70&&B<97););return M(e,$()+(t<6&&32==L()&&32==D()))}function J(e){for(;D();)switch(B){case e:return T;case 34:case 39:34!==e&&39!==e&&J(B);break;case 40:41===e&&J(e);break;case 92:D()}return T}function G(e,t){for(;D()&&e+B!==57&&(e+B!==84||47!==L()););return"/*"+M(t,T-1)+"*"+m(47===e?e:D())}function Q(e){for(;!U(L());)D();return M(e,T)}function K(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function Z(e,t,n,i){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case x:return e.return=e.return||e.value;case p:return"";case f:return e.return=e.value+"{"+K(e.children,i)+"}";case u:if(!E(e.value=e.props.join(",")))return""}return E(n=K(e.children,i))?e.return=e.value+"{"+n+"}":""}function q(e,t,n){switch(function(e,t){return 45^k(e,0)?(((t<<2^k(e,0))<<2^k(e,1))<<2^k(e,2))<<2^k(e,3):0}(e,t)){case 5103:return c+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return c+e+e;case 4789:return d+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return c+e+d+e+s+e+e;case 5936:switch(k(e,t+11)){case 114:return c+e+s+y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return c+e+s+y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return c+e+s+y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return c+e+s+e+e;case 6165:return c+e+s+"flex-"+e+e;case 5187:return c+e+y(e,/(\w+).+(:[^]+)/,c+"box-$1$2"+s+"flex-$1$2")+e;case 5443:return c+e+s+"flex-item-"+y(e,/flex-|-self/g,"")+(w(e,/flex-|baseline/)?"":s+"grid-row-"+y(e,/flex-|-self/g,""))+e;case 4675:return c+e+s+"flex-line-pack"+y(e,/align-content|flex-|-self/g,"")+e;case 5548:return c+e+s+y(e,"shrink","negative")+e;case 5292:return c+e+s+y(e,"basis","preferred-size")+e;case 6060:return c+"box-"+y(e,"-grow","")+c+e+s+y(e,"grow","positive")+e;case 4554:return c+y(e,/([^-])(transform)/g,"$1"+c+"$2")+e;case 6187:return y(y(y(e,/(zoom-|grab)/,c+"$1"),/(image-set)/,c+"$1"),e,"")+e;case 5495:case 3959:return y(e,/(image-set\([^]*)/,c+"$1$`$1");case 4968:return y(y(e,/(.+:)(flex-)?(.*)/,c+"box-pack:$3"+s+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+c+e+e;case 4200:if(!w(e,/flex-|baseline/))return s+"grid-column-align"+j(e,t)+e;break;case 2592:case 3360:return s+y(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,w(e.props,/grid-\w+-end/)})?~v(e+(n=n[t].value),"span",0)?e:s+y(e,"-start","")+e+s+"grid-row-span:"+(~v(n,"span",0)?w(n,/\d+/):+w(n,/\d+/)-+w(e,/\d+/))+";":s+y(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return w(e.props,/grid-\w+-start/)})?e:s+y(y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return y(e,/(.+)-inline(.+)/,c+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(E(e)-1-t>6)switch(k(e,t+1)){case 109:if(45!==k(e,t+4))break;case 102:return y(e,/(.+:)(.+)-([^]+)/,"$1"+c+"$2-$3$1"+d+(108==k(e,t+3)?"$3":"$2-$3"))+e;case 115:return~v(e,"stretch",0)?q(y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,i,r,a,o,l){return s+n+":"+i+l+(r?s+n+"-span:"+(a?o:+o-+i)+l:"")+e});case 4949:if(121===k(e,t+6))return y(e,":",":"+c)+e;break;case 6444:switch(k(e,45===k(e,14)?18:11)){case 120:return y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+c+(45===k(e,14)?"inline-":"")+"box$3$1"+c+"$2$3$1"+s+"$2box$3")+e;case 100:return y(e,":",":"+s)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return y(e,"scroll-","scroll-snap-")+e}return e}function ee(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case x:return void(e.return=q(e.value,e.length,n));case f:return K([O(e,{value:y(e.value,"@","@"+c)})],i);case u:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(w(t,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":R(O(e,{props:[y(t,/:(read-\w+)/,":-moz-$1")]})),R(O(e,{props:[t]})),g(e,{props:C(n,i)});break;case"::placeholder":R(O(e,{props:[y(t,/:(plac\w+)/,":"+c+"input-$1")]})),R(O(e,{props:[y(t,/:(plac\w+)/,":-moz-$1")]})),R(O(e,{props:[y(t,/:(plac\w+)/,s+"input-$1")]})),R(O(e,{props:[t]})),g(e,{props:C(n,i)})}return""})}}function te(e){return V(ne("",null,null,null,[""],e=H(e),0,[0],e))}function ne(e,t,n,i,r,a,o,l,s){for(var d=0,c=0,p=o,u=0,x=0,f=0,g=1,b=1,w=1,j=0,S="",C=r,_=a,P=i,I=S;b;)switch(f=j,j=D()){case 40:if(108!=f&&58==k(I,p-1)){-1!=v(I+=y(W(j),"&","&\f"),"&\f",h(d?l[d-1]:0))&&(w=-1);break}case 34:case 39:case 91:I+=W(j);break;case 9:case 10:case 13:case 32:I+=Y(f);break;case 92:I+=X($()-1,7);continue;case 47:switch(L()){case 42:case 47:z(re(G(D(),$()),t,n,s),s);break;default:I+="/"}break;case 123*g:l[d++]=E(I)*w;case 125*g:case 59:case 0:switch(j){case 0:case 125:b=0;case 59+c:-1==w&&(I=y(I,/\f/g,"")),x>0&&E(I)-p&&z(x>32?ae(I+";",i,n,p-1,s):ae(y(I," ","")+";",i,n,p-2,s),s);break;case 59:I+=";";default:if(z(P=ie(I,t,n,d,c,r,l,S,C=[],_=[],p,a),a),123===j)if(0===c)ne(I,t,P,P,C,a,p,l,_);else switch(99===u&&110===k(I,3)?100:u){case 100:case 108:case 109:case 115:ne(e,P,P,i&&z(ie(e,P,P,0,0,r,l,S,r,C=[],p,_),_),r,_,p,l,i?C:_);break;default:ne(I,P,P,P,[""],_,0,l,_)}}d=c=x=0,g=w=1,S=I="",p=o;break;case 58:p=1+E(I),x=f;default:if(g<1)if(123==j)--g;else if(125==j&&0==g++&&125==N())continue;switch(I+=m(j),j*g){case 38:w=c>0?1:(I+="\f",-1);break;case 44:l[d++]=(E(I)-1)*w,w=1;break;case 64:45===L()&&(I+=W(D())),u=L(),c=p=E(S=I+=Q($())),j++;break;case 45:45===f&&2==E(I)&&(g=0)}}return a}function ie(e,t,n,i,r,a,o,l,s,d,c,p){for(var x=r-1,f=0===r?a:[""],m=S(f),g=0,w=0,v=0;g<i;++g)for(var k=0,E=j(e,x+1,x=h(w=o[g])),z=e;k<m;++k)(z=b(w>0?f[k]+" "+E:y(E,/&\f/g,f[k])))&&(s[v++]=z);return A(e,t,n,0===r?u:l,s,d,c,p)}function re(e,t,n,i){return A(e,t,n,p,m(B),j(e,2,-2),0,i)}function ae(e,t,n,i,r){return A(e,t,n,x,j(e,0,i),j(e,i+1,-1),i,r)}var oe={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},le="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}.SC_ATTR)||"data-styled",se="active",de="data-styled-version",ce="6.1.19",pe="/*!sc*/\n",ue="undefined"!=typeof window&&"undefined"!=typeof document,xe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}.SC_DISABLE_SPEEDY)),fe={},he=(new Set,Object.freeze([])),me=Object.freeze({});function ge(e,t,n){return void 0===n&&(n=me),e.theme!==n.theme&&e.theme||t||n.theme}var be=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),we=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ye=/(^-|-$)/g;function ve(e){return e.replace(we,"-").replace(ye,"")}var ke=/(a)(d)/gi,je=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=je(t%52)+n;return(je(t%52)+n).replace(ke,"$1-$2")}var Se,ze=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ce=function(e){return ze(5381,e)};function _e(e){return Ee(Ce(e)>>>0)}function Pe(e){return e.displayName||e.name||"Component"}function Ie(e){return"string"==typeof e&&!0}var Te="function"==typeof Symbol&&Symbol.for,Be=Te?Symbol.for("react.memo"):60115,Fe=Te?Symbol.for("react.forward_ref"):60112,Ae={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Oe={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Re={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ne=((Se={})[Fe]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Se[Be]=Re,Se);function De(e){return("type"in(t=e)&&t.type.$$typeof)===Be?Re:"$$typeof"in e?Ne[e.$$typeof]:Ae;var t}var Le=Object.defineProperty,$e=Object.getOwnPropertyNames,Me=Object.getOwnPropertySymbols,Ue=Object.getOwnPropertyDescriptor,He=Object.getPrototypeOf,Ve=Object.prototype;function We(e,t,n){if("string"!=typeof t){if(Ve){var i=He(t);i&&i!==Ve&&We(e,i,n)}var r=$e(t);Me&&(r=r.concat(Me(t)));for(var a=De(e),o=De(t),l=0;l<r.length;++l){var s=r[l];if(!(s in Oe||n&&n[s]||o&&s in o||a&&s in a)){var d=Ue(t,s);try{Le(e,s,d)}catch(e){}}}}return e}function Ye(e){return"function"==typeof e}function Xe(e){return"object"==typeof e&&"styledComponentId"in e}function Je(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ge(e,t){if(0===e.length)return"";for(var n=e[0],i=1;i<e.length;i++)n+=t?t+e[i]:e[i];return n}function Qe(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ke(e,t,n){if(void 0===n&&(n=!1),!n&&!Qe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=Ke(e[i],t[i]);else if(Qe(t))for(var i in t)e[i]=Ke(e[i],t[i]);return e}function Ze(e,t){Object.defineProperty(e,"toString",{value:t})}function qe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var et=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,r=i;e>=r;)if((r<<=1)<0)throw qe(16,"".concat(e));this.groupSizes=new Uint32Array(r),this.groupSizes.set(n),this.length=r;for(var a=i;a<r;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),l=(a=0,t.length);a<l;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),i=n+t;this.groupSizes[e]=0;for(var r=n;r<i;r++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],i=this.indexOfGroup(e),r=i+n,a=i;a<r;a++)t+="".concat(this.tag.getRule(a)).concat(pe);return t},e}(),tt=new Map,nt=new Map,it=1,rt=function(e){if(tt.has(e))return tt.get(e);for(;nt.has(it);)it++;var t=it++;return tt.set(e,t),nt.set(t,e),t},at=function(e,t){it=t+1,tt.set(e,t),nt.set(t,e)},ot="style[".concat(le,"][").concat(de,'="').concat(ce,'"]'),lt=new RegExp("^".concat(le,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),st=function(e,t,n){for(var i,r=n.split(","),a=0,o=r.length;a<o;a++)(i=r[a])&&e.registerName(t,i)},dt=function(e,t){for(var n,i=(null!==(n=t.textContent)&&void 0!==n?n:"").split(pe),r=[],a=0,o=i.length;a<o;a++){var l=i[a].trim();if(l){var s=l.match(lt);if(s){var d=0|parseInt(s[1],10),c=s[2];0!==d&&(at(c,d),st(e,c,s[3]),e.getTag().insertRules(d,r)),r.length=0}else r.push(l)}}},ct=function(e){for(var t=document.querySelectorAll(ot),n=0,i=t.length;n<i;n++){var r=t[n];r&&r.getAttribute(le)!==se&&(dt(e,r),r.parentNode&&r.parentNode.removeChild(r))}};function pt(){return n.nc}var ut=function(e){var t=document.head,n=e||t,i=document.createElement("style"),r=function(e){var t=Array.from(e.querySelectorAll("style[".concat(le,"]")));return t[t.length-1]}(n),a=void 0!==r?r.nextSibling:null;i.setAttribute(le,se),i.setAttribute(de,ce);var o=pt();return o&&i.setAttribute("nonce",o),n.insertBefore(i,a),i},xt=function(){function e(e){this.element=ut(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,i=t.length;n<i;n++){var r=t[n];if(r.ownerNode===e)return r}throw qe(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),ft=function(){function e(e){this.element=ut(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),ht=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),mt=ue,gt={isServer:!ue,useCSSOMInjection:!xe},bt=function(){function e(e,t,n){void 0===e&&(e=me),void 0===t&&(t={});var i=this;this.options=r(r({},gt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&ue&&mt&&(mt=!1,ct(this)),Ze(this,function(){return function(e){for(var t=e.getTag(),n=t.length,i="",r=function(n){var r=function(e){return nt.get(e)}(n);if(void 0===r)return"continue";var a=e.names.get(r),o=t.getGroup(n);if(void 0===a||!a.size||0===o.length)return"continue";var l="".concat(le,".g").concat(n,'[id="').concat(r,'"]'),s="";void 0!==a&&a.forEach(function(e){e.length>0&&(s+="".concat(e,","))}),i+="".concat(o).concat(l,'{content:"').concat(s,'"}').concat(pe)},a=0;a<n;a++)r(a);return i}(i)})}return e.registerId=function(e){return rt(e)},e.prototype.rehydrate=function(){!this.server&&ue&&ct(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(r(r({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new ht(n):t?new xt(n):new ft(n)}(this.options),new et(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(rt(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(rt(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(rt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),wt=/&/g,yt=/^\s*\/\/.*$/gm;function vt(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=vt(e.children,t)),e})}function kt(e){var t,n,i,r=void 0===e?me:e,a=r.options,o=void 0===a?me:a,l=r.plugins,s=void 0===l?he:l,d=function(e,i,r){return r.startsWith(n)&&r.endsWith(n)&&r.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push(function(e){e.type===u&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(wt,n).replace(i,d))}),o.prefix&&c.push(ee),c.push(Z);var p=function(e,r,a,l){void 0===r&&(r=""),void 0===a&&(a=""),void 0===l&&(l="&"),t=l,n=r,i=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(yt,""),d=te(a||r?"".concat(a," ").concat(r," { ").concat(s," }"):s);o.namespace&&(d=vt(d,o.namespace));var p,u=[];return K(d,function(e){var t=S(e);return function(n,i,r,a){for(var o="",l=0;l<t;l++)o+=e[l](n,i,r,a)||"";return o}}(c.concat((p=function(e){return u.push(e)},function(e){e.root||(e=e.return)&&p(e)})))),u};return p.hash=s.length?s.reduce(function(e,t){return t.name||qe(15),ze(e,t.name)},5381).toString():"",p}var jt=new bt,Et=kt(),St=e.createContext({shouldForwardProp:void 0,styleSheet:jt,stylis:Et}),zt=(St.Consumer,e.createContext(void 0));function Ct(){return(0,e.useContext)(St)}function _t(t){var n=(0,e.useState)(t.stylisPlugins),i=n[0],r=n[1],a=Ct().styleSheet,o=(0,e.useMemo)(function(){var e=a;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e},[t.disableCSSOMInjection,t.sheet,t.target,a]),s=(0,e.useMemo)(function(){return kt({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:i})},[t.enableVendorPrefixes,t.namespace,i]);(0,e.useEffect)(function(){l()(i,t.stylisPlugins)||r(t.stylisPlugins)},[t.stylisPlugins]);var d=(0,e.useMemo)(function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:o,stylis:s}},[t.shouldForwardProp,o,s]);return e.createElement(St.Provider,{value:d},e.createElement(zt.Provider,{value:s},t.children))}var Pt=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Et);var i=n.name+t.hash;e.hasNameForId(n.id,i)||e.insertRules(n.id,i,t(n.rules,i,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Ze(this,function(){throw qe(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=Et),this.name+e.hash},e}(),It=function(e){return e>="A"&&e<="Z"};function Tt(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(1===n&&"-"===i&&"-"===e[0])return e;It(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var Bt=function(e){return null==e||!1===e||""===e},Ft=function(e){var t,n,i=[];for(var r in e){var o=e[r];e.hasOwnProperty(r)&&!Bt(o)&&(Array.isArray(o)&&o.isCss||Ye(o)?i.push("".concat(Tt(r),":"),o,";"):Qe(o)?i.push.apply(i,a(a(["".concat(r," {")],Ft(o),!1),["}"],!1)):i.push("".concat(Tt(r),": ").concat((t=r,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in oe||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function At(e,t,n,i){return Bt(e)?[]:Xe(e)?[".".concat(e.styledComponentId)]:Ye(e)?!Ye(r=e)||r.prototype&&r.prototype.isReactComponent||!t?[e]:At(e(t),t,n,i):e instanceof Pt?n?(e.inject(n,i),[e.getName(i)]):[e]:Qe(e)?Ft(e):Array.isArray(e)?Array.prototype.concat.apply(he,e.map(function(e){return At(e,t,n,i)})):[e.toString()];var r}function Ot(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ye(n)&&!Xe(n))return!1}return!0}var Rt=Ce(ce),Nt=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Ot(e),this.componentId=t,this.baseHash=ze(Rt,t),this.baseStyle=n,bt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))i=Je(i,this.staticRulesId);else{var r=Ge(At(this.rules,e,t,n)),a=Ee(ze(this.baseHash,r)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(r,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}i=Je(i,a),this.staticRulesId=a}else{for(var l=ze(this.baseHash,n.hash),s="",d=0;d<this.rules.length;d++){var c=this.rules[d];if("string"==typeof c)s+=c;else if(c){var p=Ge(At(c,e,t,n));l=ze(l,p+d),s+=p}}if(s){var u=Ee(l>>>0);t.hasNameForId(this.componentId,u)||t.insertRules(this.componentId,u,n(s,".".concat(u),void 0,this.componentId)),i=Je(i,u)}}return i},e}(),Dt=e.createContext(void 0);Dt.Consumer;var Lt={};new Set;function $t(t,n,i){var a=Xe(t),o=t,l=!Ie(t),s=n.attrs,d=void 0===s?he:s,c=n.componentId,p=void 0===c?function(e,t){var n="string"!=typeof e?"sc":ve(e);Lt[n]=(Lt[n]||0)+1;var i="".concat(n,"-").concat(_e(ce+n+Lt[n]));return t?"".concat(t,"-").concat(i):i}(n.displayName,n.parentComponentId):c,u=n.displayName,x=void 0===u?function(e){return Ie(e)?"styled.".concat(e):"Styled(".concat(Pe(e),")")}(t):u,f=n.displayName&&n.componentId?"".concat(ve(n.displayName),"-").concat(n.componentId):n.componentId||p,h=a&&o.attrs?o.attrs.concat(d).filter(Boolean):d,m=n.shouldForwardProp;if(a&&o.shouldForwardProp){var g=o.shouldForwardProp;if(n.shouldForwardProp){var b=n.shouldForwardProp;m=function(e,t){return g(e,t)&&b(e,t)}}else m=g}var w=new Nt(i,f,a?o.componentStyle:void 0);function y(t,n){return function(t,n,i){var a=t.attrs,o=t.componentStyle,l=t.defaultProps,s=t.foldedComponentIds,d=t.styledComponentId,c=t.target,p=e.useContext(Dt),u=Ct(),x=t.shouldForwardProp||u.shouldForwardProp,f=ge(n,p,l)||me,h=function(e,t,n){for(var i,a=r(r({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var l=Ye(i=e[o])?i(a):i;for(var s in l)a[s]="className"===s?Je(a[s],l[s]):"style"===s?r(r({},a[s]),l[s]):l[s]}return t.className&&(a.className=Je(a.className,t.className)),a}(a,n,f),m=h.as||c,g={};for(var b in h)void 0===h[b]||"$"===b[0]||"as"===b||"theme"===b&&h.theme===f||("forwardedAs"===b?g.as=h.forwardedAs:x&&!x(b,m)||(g[b]=h[b]));var w=function(e,t){var n=Ct();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,h),y=Je(s,d);return w&&(y+=" "+w),h.className&&(y+=" "+h.className),g[Ie(m)&&!be.has(m)?"class":"className"]=y,i&&(g.ref=i),(0,e.createElement)(m,g)}(v,t,n)}y.displayName=x;var v=e.forwardRef(y);return v.attrs=h,v.componentStyle=w,v.displayName=x,v.shouldForwardProp=m,v.foldedComponentIds=a?Je(o.foldedComponentIds,o.styledComponentId):"",v.styledComponentId=f,v.target=a?o.target:t,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var i=0,r=t;i<r.length;i++)Ke(e,r[i],!0);return e}({},o.defaultProps,e):e}}),Ze(v,function(){return".".concat(v.styledComponentId)}),l&&We(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Mt(e,t){for(var n=[e[0]],i=0,r=t.length;i<r;i+=1)n.push(t[i],e[i+1]);return n}var Ut=function(e){return Object.assign(e,{isCss:!0})};function Ht(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ye(e)||Qe(e))return Ut(At(Mt(he,a([e],t,!0))));var i=e;return 0===t.length&&1===i.length&&"string"==typeof i[0]?At(i):Ut(At(Mt(i,t)))}function Vt(e,t,n){if(void 0===n&&(n=me),!t)throw qe(1,t);var i=function(i){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];return e(t,n,Ht.apply(void 0,a([i],r,!1)))};return i.attrs=function(i){return Vt(e,t,r(r({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},i.withConfig=function(i){return Vt(e,t,r(r({},n),i))},i}var Wt=function(e){return Vt($t,e)},Yt=Wt;be.forEach(function(e){Yt[e]=Wt(e)});var Xt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ot(e),bt.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,i){var r=i(Ge(At(this.rules,t,n,i)),""),a=this.componentId+e;n.insertRules(a,a,r)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,i){e>2&&bt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,i)},e}();function Jt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=Ge(Ht.apply(void 0,a([e],t,!1))),r=_e(i);return new Pt(r,i)}var Gt;(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=pt(),i=Ge([n&&'nonce="'.concat(n,'"'),"".concat(le,'="true"'),"".concat(de,'="').concat(ce,'"')].filter(Boolean)," ");return"<style ".concat(i,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw qe(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw qe(2);var i=t.instance.toString();if(!i)return[];var a=((n={})[le]="",n[de]=ce,n.dangerouslySetInnerHTML={__html:i},n),o=pt();return o&&(a.nonce=o),[e.createElement("style",r({},a,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new bt({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw qe(2);return e.createElement(_t,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw qe(3)}})(),"__sc-".concat(le,"__");function Qt(){return Qt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Qt.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(Gt||(Gt={}));const Kt="popstate";function Zt(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function qt(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function en(e,t){return{usr:e.state,key:e.key,idx:t}}function tn(e,t,n,i){return void 0===n&&(n=null),Qt({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?rn(t):t,{state:n,key:t&&t.key||i||Math.random().toString(36).substr(2,8)})}function nn(e){let{pathname:t="/",search:n="",hash:i=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),i&&"#"!==i&&(t+="#"===i.charAt(0)?i:"#"+i),t}function rn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function an(e,t,n,i){void 0===i&&(i={});let{window:r=document.defaultView,v5Compat:a=!1}=i,o=r.history,l=Gt.Pop,s=null,d=c();function c(){return(o.state||{idx:null}).idx}function p(){l=Gt.Pop;let e=c(),t=null==e?null:e-d;d=e,s&&s({action:l,location:x.location,delta:t})}function u(e){let t="null"!==r.location.origin?r.location.origin:r.location.href,n="string"===typeof e?e:nn(e);return n=n.replace(/ $/,"%20"),Zt(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==d&&(d=0,o.replaceState(Qt({},o.state,{idx:d}),""));let x={get action(){return l},get location(){return e(r,o)},listen(e){if(s)throw new Error("A history only accepts one active listener");return r.addEventListener(Kt,p),s=e,()=>{r.removeEventListener(Kt,p),s=null}},createHref:e=>t(r,e),createURL:u,encodeLocation(e){let t=u(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){l=Gt.Push;let i=tn(x.location,e,t);n&&n(i,e),d=c()+1;let p=en(i,d),u=x.createHref(i);try{o.pushState(p,"",u)}catch(f){if(f instanceof DOMException&&"DataCloneError"===f.name)throw f;r.location.assign(u)}a&&s&&s({action:l,location:x.location,delta:1})},replace:function(e,t){l=Gt.Replace;let i=tn(x.location,e,t);n&&n(i,e),d=c();let r=en(i,d),p=x.createHref(i);o.replaceState(r,"",p),a&&s&&s({action:l,location:x.location,delta:0})},go:e=>o.go(e)};return x}var on;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(on||(on={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function ln(e,t,n){return void 0===n&&(n="/"),sn(e,t,n,!1)}function sn(e,t,n,i){let r=kn(("string"===typeof t?rn(t):t).pathname||"/",n);if(null==r)return null;let a=dn(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(a);let o=null;for(let l=0;null==o&&l<a.length;++l){let e=vn(r);o=wn(a[l],e,i)}return o}function dn(e,t,n,i){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===i&&(i="");let r=(e,r,a)=>{let o={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:r,route:e};o.relativePath.startsWith("/")&&(Zt(o.relativePath.startsWith(i),'Absolute route path "'+o.relativePath+'" nested under path "'+i+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(i.length));let l=Cn([i,o.relativePath]),s=n.concat(o);e.children&&e.children.length>0&&(Zt(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),dn(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:bn(l,e.index),routesMeta:s})};return e.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let i of cn(e.path))r(e,t,i);else r(e,t)}),t}function cn(e){let t=e.split("/");if(0===t.length)return[];let[n,...i]=t,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===i.length)return r?[a,""]:[a];let o=cn(i.join("/")),l=[];return l.push(...o.map(e=>""===e?a:[a,e].join("/"))),r&&l.push(...o),l.map(t=>e.startsWith("/")&&""===t?"/":t)}const pn=/^:[\w-]+$/,un=3,xn=2,fn=1,hn=10,mn=-2,gn=e=>"*"===e;function bn(e,t){let n=e.split("/"),i=n.length;return n.some(gn)&&(i+=mn),t&&(i+=xn),n.filter(e=>!gn(e)).reduce((e,t)=>e+(pn.test(t)?un:""===t?fn:hn),i)}function wn(e,t,n){void 0===n&&(n=!1);let{routesMeta:i}=e,r={},a="/",o=[];for(let l=0;l<i.length;++l){let e=i[l],s=l===i.length-1,d="/"===a?t:t.slice(a.length)||"/",c=yn({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},d),p=e.route;if(!c&&s&&n&&!i[i.length-1].route.index&&(c=yn({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},d)),!c)return null;Object.assign(r,c.params),o.push({params:r,pathname:Cn([a,c.pathname]),pathnameBase:_n(Cn([a,c.pathnameBase])),route:p}),"/"!==c.pathnameBase&&(a=Cn([a,c.pathnameBase]))}return o}function yn(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);qt("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let i=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(i.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));e.endsWith("*")?(i.push({paramName:"*"}),r+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":""!==e&&"/"!==e&&(r+="(?:(?=\\/|$))");let a=new RegExp(r,t?void 0:"i");return[a,i]}(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let a=r[0],o=a.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:i.reduce((e,t,n)=>{let{paramName:i,isOptional:r}=t;if("*"===i){let e=l[n]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[i]=r&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:a,pathnameBase:o,pattern:e}}function vn(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return qt(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function kn(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&"/"!==i?null:e.slice(n)||"/"}function jn(e,t,n,i){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function En(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function Sn(e,t){let n=En(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function zn(e,t,n,i){let r;void 0===i&&(i=!1),"string"===typeof e?r=rn(e):(r=Qt({},e),Zt(!r.pathname||!r.pathname.includes("?"),jn("?","pathname","search",r)),Zt(!r.pathname||!r.pathname.includes("#"),jn("#","pathname","hash",r)),Zt(!r.search||!r.search.includes("#"),jn("#","search","hash",r)));let a,o=""===e||""===r.pathname,l=o?"/":r.pathname;if(null==l)a=n;else{let e=t.length-1;if(!i&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}a=e>=0?t[e]:"/"}let s=function(e,t){void 0===t&&(t="/");let{pathname:n,search:i="",hash:r=""}="string"===typeof e?rn(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:Pn(i),hash:In(r)}}(r,a),d=l&&"/"!==l&&l.endsWith("/"),c=(o||"."===l)&&n.endsWith("/");return s.pathname.endsWith("/")||!d&&!c||(s.pathname+="/"),s}const Cn=e=>e.join("/").replace(/\/\/+/g,"/"),_n=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Pn=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",In=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function Tn(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const Bn=["post","put","patch","delete"],Fn=(new Set(Bn),["get",...Bn]);new Set(Fn),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function An(){return An=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},An.apply(this,arguments)}const On=e.createContext(null);const Rn=e.createContext(null);const Nn=e.createContext(null);const Dn=e.createContext(null);const Ln=e.createContext({outlet:null,matches:[],isDataRoute:!1});const $n=e.createContext(null);function Mn(){return null!=e.useContext(Dn)}function Un(){return Mn()||Zt(!1),e.useContext(Dn).location}function Hn(t){e.useContext(Nn).static||e.useLayoutEffect(t)}function Vn(){let{isDataRoute:t}=e.useContext(Ln);return t?function(){let{router:t}=ei(Zn.UseNavigateStable),n=ni(qn.UseNavigateStable),i=e.useRef(!1);return Hn(()=>{i.current=!0}),e.useCallback(function(e,r){void 0===r&&(r={}),i.current&&("number"===typeof e?t.navigate(e):t.navigate(e,An({fromRouteId:n},r)))},[t,n])}():function(){Mn()||Zt(!1);let t=e.useContext(On),{basename:n,future:i,navigator:r}=e.useContext(Nn),{matches:a}=e.useContext(Ln),{pathname:o}=Un(),l=JSON.stringify(Sn(a,i.v7_relativeSplatPath)),s=e.useRef(!1);return Hn(()=>{s.current=!0}),e.useCallback(function(e,i){if(void 0===i&&(i={}),!s.current)return;if("number"===typeof e)return void r.go(e);let a=zn(e,JSON.parse(l),o,"path"===i.relative);null==t&&"/"!==n&&(a.pathname="/"===a.pathname?n:Cn([n,a.pathname])),(i.replace?r.replace:r.push)(a,i.state,i)},[n,r,l,o,t])}()}function Wn(t,n){let{relative:i}=void 0===n?{}:n,{future:r}=e.useContext(Nn),{matches:a}=e.useContext(Ln),{pathname:o}=Un(),l=JSON.stringify(Sn(a,r.v7_relativeSplatPath));return e.useMemo(()=>zn(t,JSON.parse(l),o,"path"===i),[t,l,o,i])}function Yn(t,n,i,r){Mn()||Zt(!1);let{navigator:a}=e.useContext(Nn),{matches:o}=e.useContext(Ln),l=o[o.length-1],s=l?l.params:{},d=(l&&l.pathname,l?l.pathnameBase:"/");l&&l.route;let c,p=Un();if(n){var u;let e="string"===typeof n?rn(n):n;"/"===d||(null==(u=e.pathname)?void 0:u.startsWith(d))||Zt(!1),c=e}else c=p;let x=c.pathname||"/",f=x;if("/"!==d){let e=d.replace(/^\//,"").split("/");f="/"+x.replace(/^\//,"").split("/").slice(e.length).join("/")}let h=ln(t,{pathname:f});let m=Kn(h&&h.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:Cn([d,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:Cn([d,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),o,i,r);return n&&m?e.createElement(Dn.Provider,{value:{location:An({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Gt.Pop}},m):m}function Xn(){let t=function(){var t;let n=e.useContext($n),i=ti(qn.UseRouteError),r=ni(qn.UseRouteError);if(void 0!==n)return n;return null==(t=i.errors)?void 0:t[r]}(),n=Tn(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r};return e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),i?e.createElement("pre",{style:a},i):null,null)}const Jn=e.createElement(Xn,null);class Gn extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(Ln.Provider,{value:this.props.routeContext},e.createElement($n.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Qn(t){let{routeContext:n,match:i,children:r}=t,a=e.useContext(On);return a&&a.static&&a.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=i.route.id),e.createElement(Ln.Provider,{value:n},r)}function Kn(t,n,i,r){var a;if(void 0===n&&(n=[]),void 0===i&&(i=null),void 0===r&&(r=null),null==t){var o;if(!i)return null;if(i.errors)t=i.matches;else{if(!(null!=(o=r)&&o.v7_partialHydration&&0===n.length&&!i.initialized&&i.matches.length>0))return null;t=i.matches}}let l=t,s=null==(a=i)?void 0:a.errors;if(null!=s){let e=l.findIndex(e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id]));e>=0||Zt(!1),l=l.slice(0,Math.min(l.length,e+1))}let d=!1,c=-1;if(i&&r&&r.v7_partialHydration)for(let e=0;e<l.length;e++){let t=l[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(c=e),t.route.id){let{loaderData:e,errors:n}=i,r=t.route.loader&&void 0===e[t.route.id]&&(!n||void 0===n[t.route.id]);if(t.route.lazy||r){d=!0,l=c>=0?l.slice(0,c+1):[l[0]];break}}}return l.reduceRight((t,r,a)=>{let o,p=!1,u=null,x=null;var f;i&&(o=s&&r.route.id?s[r.route.id]:void 0,u=r.route.errorElement||Jn,d&&(c<0&&0===a?(f="route-fallback",!1||ii[f]||(ii[f]=!0),p=!0,x=null):c===a&&(p=!0,x=r.route.hydrateFallbackElement||null)));let h=n.concat(l.slice(0,a+1)),m=()=>{let n;return n=o?u:p?x:r.route.Component?e.createElement(r.route.Component,null):r.route.element?r.route.element:t,e.createElement(Qn,{match:r,routeContext:{outlet:t,matches:h,isDataRoute:null!=i},children:n})};return i&&(r.route.ErrorBoundary||r.route.errorElement||0===a)?e.createElement(Gn,{location:i.location,revalidation:i.revalidation,component:u,error:o,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var Zn=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Zn||{}),qn=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(qn||{});function ei(t){let n=e.useContext(On);return n||Zt(!1),n}function ti(t){let n=e.useContext(Rn);return n||Zt(!1),n}function ni(t){let n=function(){let t=e.useContext(Ln);return t||Zt(!1),t}(),i=n.matches[n.matches.length-1];return i.route.id||Zt(!1),i.route.id}const ii={};function ri(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}t.startTransition;function ai(e){Zt(!1)}function oi(t){let{basename:n="/",children:i=null,location:r,navigationType:a=Gt.Pop,navigator:o,static:l=!1,future:s}=t;Mn()&&Zt(!1);let d=n.replace(/^\/*/,"/"),c=e.useMemo(()=>({basename:d,navigator:o,static:l,future:An({v7_relativeSplatPath:!1},s)}),[d,s,o,l]);"string"===typeof r&&(r=rn(r));let{pathname:p="/",search:u="",hash:x="",state:f=null,key:h="default"}=r,m=e.useMemo(()=>{let e=kn(p,d);return null==e?null:{location:{pathname:e,search:u,hash:x,state:f,key:h},navigationType:a}},[d,p,u,x,f,h,a]);return null==m?null:e.createElement(Nn.Provider,{value:c},e.createElement(Dn.Provider,{children:i,value:m}))}function li(e){let{children:t,location:n}=e;return Yn(si(t),n)}new Promise(()=>{});e.Component;function si(t,n){void 0===n&&(n=[]);let i=[];return e.Children.forEach(t,(t,r)=>{if(!e.isValidElement(t))return;let a=[...n,r];if(t.type===e.Fragment)return void i.push.apply(i,si(t.props.children,a));t.type!==ai&&Zt(!1),t.props.index&&t.props.children&&Zt(!1);let o={id:t.props.id||a.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(o.children=si(t.props.children,a)),i.push(o)}),i}var di=n(950),ci=n.t(di,2);function pi(){return pi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},pi.apply(this,arguments)}function ui(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const xi=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],fi=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"];try{window.__reactRouterVersion="6"}catch(tc){}const hi=e.createContext({isTransitioning:!1});new Map;const mi=t.startTransition;ci.flushSync,t.useId;function gi(t){let{basename:n,children:i,future:r,window:a}=t,o=e.useRef();var l;null==o.current&&(o.current=(void 0===(l={window:a,v5Compat:!0})&&(l={}),an(function(e,t){let{pathname:n,search:i,hash:r}=e.location;return tn("",{pathname:n,search:i,hash:r},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:nn(t)},null,l)));let s=o.current,[d,c]=e.useState({action:s.action,location:s.location}),{v7_startTransition:p}=r||{},u=e.useCallback(e=>{p&&mi?mi(()=>c(e)):c(e)},[c,p]);return e.useLayoutEffect(()=>s.listen(u),[s,u]),e.useEffect(()=>ri(r),[r]),e.createElement(oi,{basename:n,children:i,location:d.location,navigationType:d.action,navigator:s,future:r})}const bi="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,wi=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yi=e.forwardRef(function(t,n){let i,{onClick:r,relative:a,reloadDocument:o,replace:l,state:s,target:d,to:c,preventScrollReset:p,viewTransition:u}=t,x=ui(t,xi),{basename:f}=e.useContext(Nn),h=!1;if("string"===typeof c&&wi.test(c)&&(i=c,bi))try{let e=new URL(window.location.href),t=c.startsWith("//")?new URL(e.protocol+c):new URL(c),n=kn(t.pathname,f);t.origin===e.origin&&null!=n?c=n+t.search+t.hash:h=!0}catch(tc){}let m=function(t,n){let{relative:i}=void 0===n?{}:n;Mn()||Zt(!1);let{basename:r,navigator:a}=e.useContext(Nn),{hash:o,pathname:l,search:s}=Wn(t,{relative:i}),d=l;return"/"!==r&&(d="/"===l?r:Cn([r,l])),a.createHref({pathname:d,search:s,hash:o})}(c,{relative:a}),g=function(t,n){let{target:i,replace:r,state:a,preventScrollReset:o,relative:l,viewTransition:s}=void 0===n?{}:n,d=Vn(),c=Un(),p=Wn(t,{relative:l});return e.useCallback(e=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(e,i)){e.preventDefault();let n=void 0!==r?r:nn(c)===nn(p);d(t,{replace:n,state:a,preventScrollReset:o,relative:l,viewTransition:s})}},[c,d,p,r,a,i,t,o,l,s])}(c,{replace:l,state:s,target:d,preventScrollReset:p,relative:a,viewTransition:u});return e.createElement("a",pi({},x,{href:i||m,onClick:h||o?r:function(e){r&&r(e),e.defaultPrevented||g(e)},ref:n,target:d}))});const vi=e.forwardRef(function(t,n){let{"aria-current":i="page",caseSensitive:r=!1,className:a="",end:o=!1,style:l,to:s,viewTransition:d,children:c}=t,p=ui(t,fi),u=Wn(s,{relative:p.relative}),x=Un(),f=e.useContext(Rn),{navigator:h,basename:m}=e.useContext(Nn),g=null!=f&&function(t,n){void 0===n&&(n={});let i=e.useContext(hi);null==i&&Zt(!1);let{basename:r}=Ei(ki.useViewTransitionState),a=Wn(t,{relative:n.relative});if(!i.isTransitioning)return!1;let o=kn(i.currentLocation.pathname,r)||i.currentLocation.pathname,l=kn(i.nextLocation.pathname,r)||i.nextLocation.pathname;return null!=yn(a.pathname,l)||null!=yn(a.pathname,o)}(u)&&!0===d,b=h.encodeLocation?h.encodeLocation(u).pathname:u.pathname,w=x.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;r||(w=w.toLowerCase(),y=y?y.toLowerCase():null,b=b.toLowerCase()),y&&m&&(y=kn(y,m)||y);const v="/"!==b&&b.endsWith("/")?b.length-1:b.length;let k,j=w===b||!o&&w.startsWith(b)&&"/"===w.charAt(v),E=null!=y&&(y===b||!o&&y.startsWith(b)&&"/"===y.charAt(b.length)),S={isActive:j,isPending:E,isTransitioning:g},z=j?i:void 0;k="function"===typeof a?a(S):[a,j?"active":null,E?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let C="function"===typeof l?l(S):l;return e.createElement(yi,pi({},p,{"aria-current":z,className:k,ref:n,style:C,to:s,viewTransition:d}),"function"===typeof c?c(S):c)});var ki,ji;function Ei(t){let n=e.useContext(On);return n||Zt(!1),n}(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ki||(ki={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(ji||(ji={}));var Si={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},zi=e.createContext&&e.createContext(Si),Ci=function(){return Ci=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},Ci.apply(this,arguments)},_i=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};function Pi(t){return t&&t.map(function(t,n){return e.createElement(t.tag,Ci({key:n},t.attr),Pi(t.child))})}function Ii(t){return function(n){return e.createElement(Ti,Ci({attr:Ci({},t.attr)},n),Pi(t.child))}}function Ti(t){var n=function(n){var i,r=t.attr,a=t.size,o=t.title,l=_i(t,["attr","size","title"]),s=a||n.size||"1em";return n.className&&(i=n.className),t.className&&(i=(i?i+" ":"")+t.className),e.createElement("svg",Ci({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:i,style:Ci(Ci({color:t.color||n.color},n.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&e.createElement("title",null,o),t.children)};return void 0!==zi?e.createElement(zi.Consumer,null,function(e){return n(e)}):n(Si)}function Bi(e){return Ii({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(e)}function Fi(e){return Ii({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(e)}var Ai=n(579);const Oi=Yt.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${e=>e.$hasWhiteBackground?"#ffffff !important":"transparent"};
  box-sizing: border-box;
  backdrop-filter: ${e=>e.$hasWhiteBackground?"none !important":"blur(8px)"};
  box-shadow: ${e=>e.$hasWhiteBackground?"0 2px 8px rgba(0, 0, 0, 0.08) !important":"none"};
  
  ${e=>e.$hasWhiteBackground&&Ht`
    background: #ffffff !important;
    backdrop-filter: none !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08) !important;
  `}
  
  @media (max-width: 768px) {
    height: 48px;
  }
`,Ri=Yt.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  padding: 0 24px;
  box-sizing: border-box;
  @media (max-width: 1280px) {
    max-width: 100vw;
    padding: 0 16px;
  }
  @media (max-width: 1024px) {
    padding: 0 24px;
    gap: 24px;
  }
  @media (max-width: 768px) {
    padding: 0 12px;
    gap: 16px;
    height: 48px;
  }
  @media (max-width: 600px) {
    padding: 0 8px;
    gap: 8px;
    height: 48px;
  }
  @media (max-width: 375px) {
    width: 100%;
    padding: 0 16px;
    gap: 8px;
  }
`,Ni=Yt(yi)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  min-width: fit-content;
  text-decoration: none;
  white-space: nowrap;
  @media (max-width: 600px) {
    gap: 2px;
  }
  @media (max-width: 375px) {
    gap: 1px;
  }
`,Di=Yt.img`
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
  @media (max-width: 600px) {
    width: 22px;
    height: 22px;
  }
`,Li=Yt.div`
  color: #835EEB;
  font-size: 19.5px;
  font-family: 'Godo B', sans-serif;
  font-weight: 400;
  white-space: nowrap;
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 600px) {
    font-size: 15px;
    font-weight: 400;
  }
`,$i=Yt.div`
  color: #835EEB;
  font-size: 19.5px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  white-space: nowrap;
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 600px) {
    font-size: 15px;
    font-weight: 600;
  }
`,Mi=Yt.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 25px;
  }
`,Ui=Yt.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`,Hi=Yt.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 50px;
  pointer-events: auto;
  z-index: 1001;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`,Vi=Yt(yi)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${e=>e.$color};
  font-size: 13px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  text-transform: capitalize;
  line-height: 23.20px;
  white-space: nowrap;
  text-decoration: none;
  transition: color 0.2s;
  position: relative;
  cursor: pointer;
  pointer-events: auto;
  z-index: 1001;

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #835EEB;
    transition: width 0.2s ease;
  }

  &:hover {
    color: #835EEB;
    &:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    font-size: 11px;
  }
`,Wi=Yt.a`
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 13px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  background: #835EEB;
  color: white;
  border: 1px solid #835EEB;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.10);
  width: auto;
  min-width: 64px;
  text-align: center;
  display: inline-block;
  white-space: nowrap;
  &:hover {
    color: #835EEB;
    background: rgba(131, 94, 235, 0.05);
    border-color: #835EEB;
    box-shadow: none;
  }
  &:active {
    transform: scale(0.98);
  }
  @media (max-width: 1024px) {
    padding: 8px 14px;
    font-size: 12px;
  }
  @media (max-width: 768px) {
    padding: 7px 12px;
    font-size: 11px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`,Yi=Yt.a`
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 13px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  background: #835EEB;
  color: white;
  border: 1px solid #835EEB;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.10);
  width: auto;
  min-width: 80px;
  text-align: center;
  display: inline-block;
  white-space: nowrap;
  &:hover {
    color: #835EEB;
    background: rgba(131, 94, 235, 0.05);
    border-color: #835EEB;
    box-shadow: none;
  }
  &:active {
    transform: scale(0.98);
  }
  @media (max-width: 1024px) {
    padding: 8px 14px;
    font-size: 12px;
  }
  @media (max-width: 768px) {
    padding: 7px 12px;
    font-size: 11px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`,Xi=Yt.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 8px;
  z-index: 2001;
  @media (max-width: 600px) {
    display: flex;
  }
  @media (max-width: 375px) {
    padding: 4px;
  }
`,Ji=Yt.div.withConfig({shouldForwardProp:e=>"open"!==e})`
  display: none;
  @media (max-width: 600px) {
    display: ${e=>{let{open:t}=e;return t?"block":"none"}};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.3);
    z-index: 2000;
    transition: background 0.3s;
  }
`,Gi=Yt.div.withConfig({shouldForwardProp:e=>"open"!==e})`
  display: none;
  @media (max-width: 600px) {
    display: ${e=>{let{open:t}=e;return t?"flex":"none"}};
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    max-width: 260px;
    height: 100vh;
    background: #fff;
    box-shadow: -2px 0 16px rgba(0,0,0,0.08);
    z-index: 2001;
    padding: 20px 16px 16px 16px;
    animation: slideIn 0.3s;
    @keyframes slideIn {
      from { right: -100vw; }
      to { right: 0; }
    }
  }
  @media (max-width: 480px) {
    width: 100%;
    max-width: 240px;
    padding: 18px 14px 14px 14px;
  }
  @media (max-width: 375px) {
    width: 100%;
    max-width: 220px;
    padding: 16px 12px 12px 12px;
  }
  @media (max-width: 320px) {
    width: 100%;
    max-width: 200px;
    padding: 14px 10px 10px 10px;
  }
`,Qi=Yt.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
  @media (max-width: 480px) {
    gap: 20px;
    margin-top: 20px;
  }
  @media (max-width: 375px) {
    gap: 18px;
    margin-top: 18px;
  }
  @media (max-width: 320px) {
    gap: 14px;
    margin-top: 14px;
  }
`,Ki=Yt(yi)`
  color: #835EEB;
  font-size: 18px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  text-decoration: none;
  margin-bottom: 6px;
  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 5px;
  }
  @media (max-width: 375px) {
    font-size: 15px;
    margin-bottom: 4px;
  }
  @media (max-width: 320px) {
    font-size: 14px;
    margin-bottom: 3px;
  }
`,Zi=Yt.a`
  margin-top: 20px;
  padding: 10px 0;
  border-radius: 30px;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  text-decoration: none;
  background: #835EEB;
  color: white;
  border: 1px solid #835EEB;
  text-align: center;
  display: block;
  width: 100%;
  margin-bottom: 10px;
  @media (max-width: 480px) {
    font-size: 15px;
    padding: 9px 0;
    margin-top: 18px;
    margin-bottom: 8px;
  }
  @media (max-width: 375px) {
    font-size: 14px;
    padding: 8px 0;
    margin-top: 16px;
    margin-bottom: 6px;
  }
  @media (max-width: 320px) {
    font-size: 13px;
    padding: 7px 0;
    margin-top: 14px;
    margin-bottom: 5px;
  }
`,qi=t=>{let{hasWhiteBackground:n=!1}=t;const i=Vn(),r=Un(),a="/"===r.pathname,o="https://class.iammathking.com/login",l="https://hi.iammathking.com/v4zqjr",[s,d]=(0,e.useState)(!1),[c,p]=(0,e.useState)(!1);(0,e.useEffect)(()=>{const e=()=>{d(window.scrollY>800)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);const u=a?s?"#222222":"#ffffff":"#222222",x=e=>{p(!1),r.pathname===e?window.scrollTo({top:0,behavior:"smooth"}):(i(e),setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},100))};return(0,Ai.jsxs)(Oi,{$hasWhiteBackground:n,style:n?{background:"#ffffff !important",backdropFilter:"none !important",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08) !important"}:{},children:[(0,Ai.jsxs)(Ri,{children:[(0,Ai.jsxs)(Ni,{to:"/",onClick:e=>{e.preventDefault(),"/"===r.pathname?window.scrollTo({top:0,behavior:"smooth"}):(i("/"),setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},100))},children:[(0,Ai.jsx)(Di,{src:"/Common/logo.svg",alt:"\uc218\ud559\ub300\uc655 CLASS \ub85c\uace0"}),(0,Ai.jsx)(Li,{children:"\uc218\ud559\ub300\uc655"}),(0,Ai.jsx)($i,{children:"CLASS"})]}),(0,Ai.jsxs)(Mi,{children:[(0,Ai.jsxs)(Hi,{children:[(0,Ai.jsx)(Vi,{to:"/",$color:u,onClick:()=>x("/"),children:"\ud648"}),(0,Ai.jsx)(Vi,{to:"/pricing",$color:u,onClick:()=>x("/pricing"),children:"\uc694\uae08\uc548\ub0b4"}),(0,Ai.jsx)(Vi,{to:"/notice",$color:u,onClick:()=>x("/notice"),children:"\uacf5\uc9c0\uc0ac\ud56d"})]}),(0,Ai.jsxs)(Ui,{children:[(0,Ai.jsx)(Yi,{href:l,target:"_blank",rel:"noopener noreferrer",children:"\uc571 \ub2e4\uc6b4\ub85c\ub4dc"}),(0,Ai.jsx)(Wi,{href:o,target:"_blank",rel:"noopener noreferrer",children:"\ub85c\uadf8\uc778"})]}),(0,Ai.jsx)(Xi,{onClick:()=>p(!0),children:(0,Ai.jsx)(Bi,{size:28,color:"#835EEB"})})]})]}),(0,Ai.jsx)(Ji,{open:c,onClick:()=>p(!1)}),(0,Ai.jsxs)(Gi,{open:c,children:[(0,Ai.jsx)(Xi,{onClick:()=>p(!1),style:{alignSelf:"flex-end"},children:(0,Ai.jsx)(Fi,{size:32,color:"#835EEB"})}),(0,Ai.jsxs)(Qi,{children:[(0,Ai.jsx)(Ki,{to:"/",onClick:()=>x("/"),children:"\ud648"}),(0,Ai.jsx)(Ki,{to:"/pricing",onClick:()=>x("/pricing"),children:"\uc694\uae08\uc548\ub0b4"}),(0,Ai.jsx)(Ki,{to:"/notice",onClick:()=>x("/notice"),children:"\uacf5\uc9c0\uc0ac\ud56d"})]}),(0,Ai.jsx)(Zi,{href:l,target:"_blank",rel:"noopener noreferrer",children:"\uc571 \ub2e4\uc6b4\ub85c\ub4dc"}),(0,Ai.jsx)(Zi,{href:o,target:"_blank",rel:"noopener noreferrer",children:"\ub85c\uadf8\uc778"})]})]})},er=Yt.div`
  width: 100%;
  padding: 72px 0 128px;
  background: #33373B;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 1024px) {
    padding: 60px 0 100px;
  }
  
  @media (max-width: 768px) {
    padding: 100px 0;
    background: #F9FAFB;
  }
  @media (max-width: 375px) {
    width: 100%;
  }
`,tr=Yt.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 24px;
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 64px;
  display: inline-flex;
  
  @media (max-width: 1024px) {
    padding: 0 16px;
    gap: 40px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    background: #F9FAFB;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
  }
  @media (max-width: 375px) {
    width: 100%;
    padding: 16px;
  }
`,nr=Yt.div`
  flex: 1;
  max-width: calc(100% - 140px);
  justify-content: flex-start;
  align-items: flex-start;
  gap: 80px;
  display: flex;
  
  @media (max-width: 1024px) {
    gap: 50px;
    max-width: calc(100% - 120px);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
    width: 100%;
    max-width: 100%;
    flex: none;
  }
`,ir=Yt.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  display: inline-flex;
  
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 2px;
  }
`,rr=Yt.div`
  height: 38px;
  padding: 0 16px 0 12px;
  background: rgba(255, 255, 255, 0);
  overflow: hidden;
  border-radius: 9999px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: flex;
  color: #D1D5DB;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 30px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #835EEB;
  }
  
  @media (max-width: 1024px) {
    font-size: 16px;
    height: 36px;
    padding: 0 14px 0 10px;
  }
  
  @media (max-width: 768px) {
    color: #575C64;
    font-size: 15px;
    line-height: 30px;
  }
`,ar=Yt.div`
  width: 335px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: inline-flex;
  margin-left: 50px;
  
  @media (max-width: 1024px) {
    width: 300px;
    gap: 16px;
    margin-left: 30px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    gap: 4px;
    margin-left: 0;
  }
`,or=Yt.div`
  color: #D1D5DB;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 300;
  line-height: 30px;
  white-space: nowrap;
  
  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 26px;
    white-space: normal;
  }
  
  @media (max-width: 768px) {
    color: #7A828D;
    font-size: 12px;
    line-height: 18px;
    white-space: normal;
  }
`,lr=Yt(or).attrs({as:"a"})`
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
  font-weight: 500;
  display: inline-block;
  white-space: nowrap;

  &:hover {
    color: #835EEB;
  }
  
  @media (max-width: 1024px) {
    font-size: 15px;
    line-height: 24px;
    white-space: nowrap;
  }
  
  @media (max-width: 768px) {
    color: #7A828D;
    font-size: 14px;
    line-height: 20px;
    white-space: nowrap;
  }
`,sr=Yt.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 12px;
  }
`,dr=Yt.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: #33373B;
  border: 1px solid #E5E7EB;
  border-radius: 50%;
  color: #D1D5DB;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: #835EEB;
    border-color: #835EEB;
    color: #ffffff;
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    background: #F9FAFB;
    border: 1px solid #E5E7EB;
    color: #575C64;
    
    &:hover {
      background: #835EEB;
      border-color: #835EEB;
      color: #ffffff;
    }
  }
`,cr=Yt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,pr=Yt.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  margin-top: 0;
  margin-left: auto;
  transform: translateX(150px);
  
  @media (max-width: 1024px) {
    transform: translateX(-120px);
  }
  
  @media (max-width: 768px) {
    gap: 8px;
    margin-left: 0;
    transform: translateX(0);
  }
`,ur=Yt.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2px;
  display: flex;
  
  @media (max-width: 768px) {
    gap: 2px;
  }
`,xr=Yt.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
  flex-wrap: nowrap;
  margin-top: 12px;
  
  @media (max-width: 1024px) {
    gap: 16px;
  }
`,fr=()=>(0,Ai.jsx)(er,{children:(0,Ai.jsxs)(tr,{children:[(0,Ai.jsxs)(nr,{children:[(0,Ai.jsxs)(ir,{children:[(0,Ai.jsx)("div",{style:{gap:"16px",display:"flex",flexDirection:"column"},children:(0,Ai.jsxs)(rr,{as:"a",href:"https://accounts.kakao.com/login/?continue=https%3A%2F%2Fpf.kakao.com%2F_xexdrDxj%2Fchat#login",target:"_blank",rel:"noopener noreferrer",children:[(0,Ai.jsx)("img",{src:"/Common/footer-headphone.svg",alt:"\uace0\uac1d\uc13c\ud130",style:{width:"18px",height:"18px"}}),"\uace0\uac1d\uc13c\ud130"]})}),(0,Ai.jsx)("div",{style:{gap:"16px",display:"flex",flexDirection:"column"},children:(0,Ai.jsxs)(rr,{as:"a",href:"https://www.teamturing.com/",target:"_blank",rel:"noopener noreferrer",children:[(0,Ai.jsx)("img",{src:"/Common/footer-problem.svg",alt:"\ud68c\uc0ac\uc18c\uac1c",style:{width:"18px",height:"18px"}}),"\ud68c\uc0ac\uc18c\uac1c"]})})]}),(0,Ai.jsxs)(ar,{children:[(0,Ai.jsxs)(ur,{children:[(0,Ai.jsx)(or,{style:{whiteSpace:"nowrap"},children:"\uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 254-87-01382 | \ub300\ud45c\uc790\uba85 \ucd5c\ubbfc\uaddc"}),(0,Ai.jsx)(or,{children:"\ud1b5\uc2e0\ud310\ub9e4\uc5c5 \uc81c 2023-\uc11c\uc6b8\uac15\ub0a8-00798 \ud638"}),(0,Ai.jsx)(or,{children:"\uc8fc\uc18c \uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uac15\ub0a8\uad6c \uc5b8\uc8fc\ub85c 85\uae38 23-6, 3\uce35 (\uc5ed\uc0bc\ub3d9, DW \ube4c\ub529)"}),(0,Ai.jsx)(or,{children:"\uc804\ud654 070-7732-4869"}),(0,Ai.jsx)(or,{children:"\u24d2Turing Co.,Ltd. All rights reserved."})]}),(0,Ai.jsxs)(xr,{children:[(0,Ai.jsx)(lr,{href:"https://docs.google.com/document/u/1/d/e/2PACX-1vSk3Pu7ySBM0-cMTDOmH3rF_7vyzPzzec_kFZRanJ3mvmuf6jLyUuHndrFNQoXQCr3SujRGGYennDy4/pub",target:"_blank",rel:"noopener noreferrer",children:"\uc774\uc6a9\uc57d\uad00"}),(0,Ai.jsx)(lr,{href:"https://docs.google.com/document/u/1/d/e/2PACX-1vTVLKPyzChzxEaZChVDWZjtDz7Sgm_xD2-rDqMMCSdwzyx19Az0Q8nqacPQY0tkbHVszy9eA_eHyMR0/pub",target:"_blank",rel:"noopener noreferrer",children:"\uac1c\uc778\uc815\ubcf4\ucde8\uae09\ubc29\uce68"}),(0,Ai.jsx)(lr,{href:"https://docs.google.com/document/d/e/2PACX-1vQ1kh6vbZ6vqsmDlrASJTQWYmJKwA2ixeTaVZxacTBuh4MUG5aAiRg4fBBx7G74Ac4R5MIIvKqu2BO1/pub",target:"_blank",rel:"noopener noreferrer",children:"\ub9c8\ucf00\ud305 \uc815\ubcf4 \uc218\uc2e0\ub3d9\uc758"})]})]})]}),(0,Ai.jsx)(pr,{children:(0,Ai.jsxs)(sr,{children:[(0,Ai.jsx)(dr,{href:"https://www.instagram.com/shdw.class/",target:"_blank",rel:"noopener noreferrer",children:(0,Ai.jsx)(cr,{children:(0,Ai.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Ai.jsx)("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",fill:"currentColor"})})})}),(0,Ai.jsx)(dr,{href:"https://www.youtube.com/@mathking_official",target:"_blank",rel:"noopener noreferrer",children:(0,Ai.jsx)(cr,{children:(0,Ai.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Ai.jsx)("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",fill:"currentColor"})})})}),(0,Ai.jsx)(dr,{href:"https://blog.naver.com/PostList.naver?blogId=iammathking&parentCategoryNo=25&skinType=&skinId=&from=menu&userSelectMenu=true",target:"_blank",rel:"noopener noreferrer",children:(0,Ai.jsx)(cr,{children:(0,Ai.jsx)("img",{src:"/Assets/icon/blog.svg",alt:"\ub124\uc774\ubc84\ube14\ub85c\uadf8",style:{width:"24px",height:"24px"}})})})]})})]})}),hr=Jt`
  from {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
  to {
    opacity: 1;
    backdrop-filter: blur(8px);
  }
`,mr=Jt`
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,gr=Yt.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${hr} 0.3s ease-out;
  backdrop-filter: blur(8px);
`,br=Yt.div`
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  width: 100%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(131, 94, 235, 0.25);
  animation: ${mr} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  text-align: center;
  margin: 20px;

  @media (max-width: 600px) {
    max-width: 90vw;
    padding: 30px 20px;
    border-radius: 16px;
  }
`,wr=Yt.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px auto;
  animation: iconBounce 0.6s ease-out;
  
  img {
    width: 60px;
    height: 60px;
    filter: drop-shadow(0 4px 20px rgba(131, 94, 235, 0.3));
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.1) rotate(5deg);
      filter: drop-shadow(0 6px 25px rgba(131, 94, 235, 0.4));
    }
  }
  
  @keyframes iconBounce {
    0% {
      opacity: 0;
      transform: scale(0.3) translateY(20px);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
  
  @media (max-width: 600px) {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
    
    img {
      width: 45px;
      height: 45px;
    }
  }
`,yr=Yt.h2`
  font-size: 24px;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 12px;
  font-family: 'Pretendard', sans-serif;
  
  @media (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`,vr=Yt.p`
  font-size: 16px;
  color: #6B7280;
  line-height: 1.6;
  margin-bottom: 32px;
  font-family: 'Pretendard', sans-serif;
  
  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 24px;
  }
`,kr=Yt.div`
  background: #F9FAFB;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  
  @media (max-width: 600px) {
    padding: 16px;
    margin-bottom: 20px;
  }
`,jr=Yt.h4`
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
  font-family: 'Pretendard', sans-serif;
  
  @media (max-width: 600px) {
    font-size: 13px;
    margin-bottom: 6px;
  }
`,Er=Yt.div`
  font-size: 13px;
  color: #6B7280;
  line-height: 1.5;
  margin: 0;
  font-family: 'Pretendard', sans-serif;
  
  @media (max-width: 600px) {
    font-size: 12px;
  }
`,Sr=Yt.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 6px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,zr=Yt.span`
  font-weight: 500;
  color: #374151;
  min-width: 60px;
  text-align: left;
`,Cr=Yt.span`
  color: #6B7280;
  text-align: left;
  flex: 1;
  margin-left: 12px;
`,_r=Yt.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,Pr=Yt.a`
  background: linear-gradient(135deg, #835EEB, #6B4BC4);
  color: white;
  padding: 14px 32px;
  border-radius: 12px;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(131, 94, 235, 0.3);
  width: 100%;
  text-decoration: none;
  text-align: center;
  display: block;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(131, 94, 235, 0.4);
    color: white;
    text-decoration: none;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 15px rgba(131, 94, 235, 0.3);
  }
  
  @media (max-width: 600px) {
    font-size: 14px;
    padding: 12px 24px;
  }
`,Ir=Yt.button`
  background: #F3F4F6;
  color: #6B7280;
  padding: 12px 32px;
  border-radius: 12px;
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  border: 1px solid #E5E7EB;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background: #E5E7EB;
    color: #374151;
    border-color: #D1D5DB;
  }

  &:active {
    background: #D1D5DB;
  }
  
  @media (max-width: 600px) {
    font-size: 13px;
    padding: 10px 24px;
  }
`,Tr=e=>{let{isOpen:t,onClose:n,formData:i}=e;return t?(0,Ai.jsx)(gr,{onClick:n,children:(0,Ai.jsxs)(br,{onClick:e=>e.stopPropagation(),children:[(0,Ai.jsx)(wr,{children:(0,Ai.jsx)("img",{src:"/Assets/icon/check.svg",alt:"\uc131\uacf5"})}),(0,Ai.jsx)(yr,{children:"\uc2e0\uccad\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4!"}),(0,Ai.jsxs)(vr,{children:["\ubb34\ub8cc\uccb4\ud5d8 \uc2e0\uccad\uc774 \uc131\uacf5\uc801\uc73c\ub85c \uc811\uc218\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",(0,Ai.jsx)("br",{}),"\ub2f4\ub2f9\uc790\uac00 \ube60\ub978 \uc2dc\uc77c \ub0b4\uc5d0 \uc5f0\ub77d\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."]}),(0,Ai.jsxs)(kr,{children:[(0,Ai.jsx)(jr,{children:"\uc2e0\uccad\ub0b4\uc5ed"}),(0,Ai.jsxs)(Er,{children:[i&&(0,Ai.jsxs)(Ai.Fragment,{children:[(0,Ai.jsxs)(Sr,{children:[(0,Ai.jsx)(zr,{children:"\ud559\uad50/\ud559\uc6d0:"}),(0,Ai.jsx)(Cr,{children:"academy"===i.organization_type?"\ud559\uc6d0":"\ud559\uad50"})]}),(0,Ai.jsxs)(Sr,{children:[(0,Ai.jsx)(zr,{children:"\uc774\ub984:"}),(0,Ai.jsx)(Cr,{children:i.name})]}),(0,Ai.jsxs)(Sr,{children:[(0,Ai.jsx)(zr,{children:"\uc5f0\ub77d\ucc98:"}),(0,Ai.jsx)(Cr,{children:i.phone})]}),(0,Ai.jsxs)(Sr,{children:[(0,Ai.jsx)(zr,{children:"\uc774\uba54\uc77c:"}),(0,Ai.jsx)(Cr,{children:i.email})]}),(0,Ai.jsxs)(Sr,{children:[(0,Ai.jsxs)(zr,{children:["academy"===i.organization_type?"\ud559\uc6d0\uba85":"\ud559\uad50\uba85",":"]}),(0,Ai.jsx)(Cr,{children:i.academy})]})]}),!i&&(0,Ai.jsx)(Sr,{children:(0,Ai.jsx)(Cr,{children:"\uc2e0\uccad \uc815\ubcf4\ub97c \ubd88\ub7ec\uc624\ub294 \uc911\uc785\ub2c8\ub2e4..."})})]})]}),(0,Ai.jsxs)(_r,{children:[(0,Ai.jsx)(Pr,{href:"https://class.iammathking.com/",target:"_blank",rel:"noopener noreferrer",onClick:()=>{n()},children:"\uc218\ud559\ub300\uc655 \ud074\ub798\uc2a4 \ubc14\ub85c\uac00\uae30"}),(0,Ai.jsx)(Ir,{onClick:n,children:"\ub2eb\uae30"})]})]})}):null},Br=Yt.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 0;
`,Fr=Yt.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Ar=Yt.label`
  color: #374151;
  font-size: 0.875rem;
  font-weight: 700;
  font-family: 'Pretendard', sans-serif;
`,Or=Yt.input`
  padding: 0.875rem;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  font-size: 0.875rem;
  font-family: 'Pretendard', sans-serif;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;

  &:focus {
    outline: none;
    border-color: #835EEB;
    box-shadow: 0 0 0 3px rgba(131, 94, 235, 0.1);
    transform: translateY(-1px);
  }

  &:hover {
    border-color: #D1D5DB;
  }

  &::placeholder {
    color: #9CA3AF;
    transition: color 0.3s ease;
  }

  &:focus::placeholder {
    color: #D1D5DB;
  }
`,Rr=Yt.button`
  background: linear-gradient(135deg, #835EEB, #6B4BC4);
  color: white;
  padding: 0.875rem;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(131, 94, 235, 0.3);
  margin-top: 0.5rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 20px;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    margin-top: 1rem;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    background: linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
    transform: translateX(-100%);
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 30px rgba(131, 94, 235, 0.4);

    &:before {
      opacity: 1;
      transform: translateX(100%);
    }
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
    box-shadow: 0 4px 15px rgba(131, 94, 235, 0.3);
    transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 4px 20px rgba(131, 94, 235, 0.3), 0 0 0 3px rgba(131, 94, 235, 0.2);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 2px 10px rgba(131, 94, 235, 0.2);
  }
`,Nr=Yt.p`
  color: #6B7280;
  font-size: 0.75rem;
  font-family: 'Pretendard', sans-serif;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 0;
`,Dr=Yt.div`
  background: linear-gradient(135deg, #FF6B6B, #FF5252);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  margin-bottom: 16px;
  box-shadow: 0 4px 20px rgba(255, 107, 107, 0.3);
  display: flex;
  align-items: center;
  gap: 8px;
  animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::before {
    content: '⚠️';
    font-size: 16px;
  }
`,Lr=Yt.span`
  color: #FF6B6B;
  font-size: 12px;
  font-family: 'Pretendard', sans-serif;
  margin-top: 4px;
  display: block;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,$r=(Yt.div`
  background: linear-gradient(135deg, #10B981, #059669);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  margin-bottom: 16px;
  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
  display: flex;
  align-items: center;
  gap: 8px;
  animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::before {
    content: '✅';
    font-size: 16px;
  }
`,Yt.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-right: 8px;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`),Mr=Yt(Or)`
  border: 2px solid ${e=>e.hasError?"#FF6B6B":"#E5E7EB"};
  transition: all 0.3s ease;

  &:focus {
    border-color: ${e=>e.hasError?"#FF6B6B":"#835EEB"};
    box-shadow: 0 0 0 3px ${e=>e.hasError?"rgba(255, 107, 107, 0.1)":"rgba(131, 94, 235, 0.1)"};
  }
`,Ur=Yt.div`
  display: flex;
  gap: 20px;
  margin-bottom: 0.5rem;
`,Hr=Yt.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 0.875rem;
  font-family: 'Pretendard', sans-serif;
  color: #374151;
  transition: all 0.3s ease;

  &:hover {
    color: #835EEB;
  }
`,Vr=Yt.input`
  width: 16px;
  height: 16px;
  accent-color: #835EEB;
  cursor: pointer;
`,Wr=Yt.button`
  background: #FEF3C7;
  color: #92400E;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 12px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  border: 1px solid #F59E0B;
  cursor: pointer;
  margin-top: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #FDE68A;
    border-color: #D97706;
  }
`,Yr=t=>{let{onClose:n}=t;const[i,r]=(0,e.useState)({name:"",phone:"",email:"",academy:"",organization_type:"academy"}),[a,o]=(0,e.useState)({}),[l,s]=(0,e.useState)(!1),[d,c]=(0,e.useState)(!1),[p,u]=(0,e.useState)(!1),x=e=>t=>{let n=t.target.value;"phone"===e&&(n=n.replace(/-/g,"")),r(t=>({...t,[e]:n})),a[e]&&o(t=>({...t,[e]:""})),l&&s(!1)},f=Object.values(a).some(e=>e);return(0,Ai.jsxs)(Ai.Fragment,{children:[(0,Ai.jsx)(Tr,{isOpen:d,onClose:()=>{c(!1),n()},formData:i}),(0,Ai.jsxs)(Br,{onSubmit:async e=>{e.preventDefault(),s(!1),c(!1);const t=(e=>{const t=[];if(e.name.trim()||t.push("\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),e.phone.trim()){const n=e.phone.replace(/-/g,"");/^010\d{8}$/.test(n)||t.push("\uc62c\ubc14\ub978 \uc5f0\ub77d\ucc98 \ud615\uc2dd\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694. (01000000000)")}else t.push("\uc5f0\ub77d\ucc98\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.");return e.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||t.push("\uc62c\ubc14\ub978 \uc774\uba54\uc77c \ud615\uc2dd\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."):t.push("\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),e.academy.trim()||t.push("\ud559\uc6d0\uba85\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),{isValid:0===t.length,errors:t}})(i);if(!t.isValid){const e={};return t.errors.forEach(t=>{t.includes("\uc774\ub984")?e.name=t:t.includes("\uc5f0\ub77d\ucc98")?e.phone=t:t.includes("\uc774\uba54\uc77c")?e.email=t:t.includes("\ud559\uc6d0\uba85")&&(e.academy=t)}),o(e),void s(!0)}u(!0);try{const e=await(async e=>{try{0;const n={name:e.name,school:e.academy,email:e.email,phone_number:e.phone.replace(/-/g,""),organization_type:e.organization_type,region:"",extra:""},i={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}.REACT_APP_CONSULTATION_API_URL||"https://api-prod.iammathking.com/api/v3/organization/business_request",r=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(n),mode:"cors",credentials:"omit"});if(!r.ok)return console.error("\u274c API \uc751\ub2f5 \uc624\ub958:",r.status,r.statusText),{success:!1,message:"\uc11c\ubc84 \uc751\ub2f5 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.",data:{status:r.status,statusText:r.statusText}};let a=null;const o=r.headers.get("content-type");if(o&&o.includes("application/json"))try{a=await r.json()}catch(t){console.log("\uc751\ub2f5 \ubcf8\ubb38\uc774 JSON\uc774 \uc544\ub2c8\uac70\ub098 \ube44\uc5b4\uc788\uc74c")}return console.log("\u2705 \ubb34\ub8cc\uccb4\ud5d8 \uc2e0\uccad \uc131\uacf5:",{status:r.status,data:a}),a&&console.log("\ud83d\udccb API \uc751\ub2f5 \uc0c1\uc138:",JSON.stringify(a,null,2)),{success:!0,message:"\ubb34\ub8cc\uccb4\ud5d8 \uc2e0\uccad\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4! \uace7 \ub2f4\ub2f9\uc790\uac00 \uc5f0\ub77d\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4.",data:a}}catch(t){return console.error("\u274c \ubb34\ub8cc\uccb4\ud5d8 \uc2e0\uccad API \uc624\ub958:",t),{success:!1,message:"\uc11c\ubc84 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.",data:t}}})(i);e.success?(c(!0),setTimeout(()=>{n()},3e3)):(s(!0),o({general:e.message}))}catch(r){console.error("\ud3fc \uc81c\ucd9c \uc624\ub958:",r),s(!0),o({general:"\uc11c\ubc84 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694."})}finally{u(!1)}},noValidate:!0,children:[l&&(f||a.general)&&(0,Ai.jsx)(Dr,{children:a.general||"\ubaa8\ub4e0 \ud544\uc218 \ud56d\ubaa9\uc744 \uc62c\ubc14\ub974\uac8c \uc785\ub825\ud574\uc8fc\uc138\uc694."}),(0,Ai.jsxs)(Fr,{children:[(0,Ai.jsxs)(Ur,{children:[(0,Ai.jsxs)(Hr,{children:[(0,Ai.jsx)(Vr,{type:"radio",name:"organization_type",value:"academy",checked:"academy"===i.organization_type,onChange:e=>r(t=>({...t,organization_type:e.target.value}))}),"\ud559\uc6d0"]}),(0,Ai.jsxs)(Hr,{children:[(0,Ai.jsx)(Vr,{type:"radio",name:"organization_type",value:"school",checked:"school"===i.organization_type,onChange:e=>r(t=>({...t,organization_type:e.target.value}))}),"\ud559\uad50"]})]}),a.organization_type&&(0,Ai.jsx)(Lr,{children:a.organization_type})]}),(0,Ai.jsxs)(Fr,{children:[(0,Ai.jsx)(Ar,{children:"\uc774\ub984"}),(0,Ai.jsx)(Mr,{type:"text",placeholder:"\ud64d\uae38\ub3d9",value:i.name,onChange:x("name"),hasError:!!a.name}),a.name&&(0,Ai.jsx)(Lr,{children:a.name})]}),(0,Ai.jsxs)(Fr,{children:[(0,Ai.jsx)(Ar,{children:"\uc5f0\ub77d\ucc98"}),(0,Ai.jsx)(Mr,{type:"tel",placeholder:"01000000000",value:i.phone,onChange:x("phone"),hasError:!!a.phone}),a.phone&&(0,Ai.jsx)(Lr,{children:a.phone})]}),(0,Ai.jsxs)(Fr,{children:[(0,Ai.jsx)(Ar,{children:"\uc774\uba54\uc77c"}),(0,Ai.jsx)(Mr,{type:"email",placeholder:"example@example.com",value:i.email,onChange:x("email"),hasError:!!a.email}),a.email&&(0,Ai.jsx)(Lr,{children:a.email})]}),(0,Ai.jsxs)(Fr,{children:[(0,Ai.jsx)(Ar,{children:"school"===i.organization_type?"\ud559\uad50\uba85":"\ud559\uc6d0\uba85"}),(0,Ai.jsx)(Mr,{type:"text",placeholder:"school"===i.organization_type?"\u3147\u3147\ud559\uad50":"\u3147\u3147\ud559\uc6d0",value:i.academy,onChange:x("academy"),hasError:!!a.academy}),a.academy&&(0,Ai.jsx)(Lr,{children:a.academy})]}),(0,Ai.jsx)(Rr,{type:"submit",disabled:p,children:p?(0,Ai.jsxs)(Ai.Fragment,{children:[(0,Ai.jsx)($r,{}),"\uc2e0\uccad \uc911..."]}):"\ubb34\ub8cc \uccb4\ud5d8 \uc2e0\uccad\ud558\uae30"}),(0,Ai.jsx)(Nr,{children:"\uc81c\ucd9c\ud558\uc2dc\uba74 \uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ubc0f \uc774\uc6a9\uc5d0 \ub3d9\uc758\ud558\uac8c \ub429\ub2c8\ub2e4."}),(0,Ai.jsx)(Wr,{type:"button",onClick:()=>{r({name:"\ud64d\uae38\ub3d9",phone:"01012345678",email:"test@example.com",academy:"\ud14c\uc2a4\ud2b8\ud559\uc6d0",organization_type:"academy"}),c(!0)},children:"\ud83d\udd0d \uc131\uacf5 \ubaa8\ub2ec \ubbf8\ub9ac\ubcf4\uae30 (\ud14c\uc2a4\ud2b8\uc6a9)"})]})]})},Xr=Yt.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
  opacity: ${e=>e.$isVisible?1:0};
  transform: ${e=>e.$isVisible?"scale(1)":"scale(0.8)"};
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: ${e=>e.$isVisible?"auto":"none"};
`,Jr=Yt.button`
  width: 108px;
  height: 108px;
  border-radius: 50%;
  background: linear-gradient(135deg, #835EEB 0%, #6B4BC4 100%);
  border: none;
  color: white;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  line-height: 1.2;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(131, 94, 235, 0.3), 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;

  /* 리플 효과를 위한 가상 요소 */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  /* 펄스 효과 */
  &::after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border: 2px solid rgba(131, 94, 235, 0.3);
    border-radius: 50%;
    animation: pulse 2s infinite;
    opacity: 0.7;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.7;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.3;
    }
    100% {
      transform: scale(1);
      opacity: 0.7;
    }
  }

  &:hover {
    transform: translateY(-8px) scale(1.12);
    box-shadow: 0 15px 35px rgba(131, 94, 235, 0.4), 0 8px 25px rgba(0, 0, 0, 0.15);
    background: linear-gradient(135deg, #9C7EEF 0%, #7756D6 100%);
    
    &::before {
      width: 120px;
      height: 120px;
    }
    
    &::after {
      animation-play-state: paused;
      opacity: 0;
    }
  }

  &:active {
    transform: translateY(-4px) scale(1.05);
    transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 20px rgba(131, 94, 235, 0.5);
  }

  &:focus {
    outline: none;
    box-shadow: 0 8px 25px rgba(131, 94, 235, 0.3), 0 0 0 3px rgba(131, 94, 235, 0.2);
  }

  @media (max-width: 768px) {
    width: 88px;
    height: 88px;
    font-size: 15.4px;
    gap: 2px;
    
    &:hover {
      transform: translateY(-6px) scale(1.15);
    }
  }
`,Gr=Yt.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1001;
  opacity: ${e=>e.$isOpen?1:0};
  visibility: ${e=>e.$isOpen?"visible":"hidden"};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: ${e=>e.$isOpen?"blur(4px)":"blur(0px)"};
`,Qr=Yt.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background: white;
  z-index: 1002;
  transform: translateX(${e=>e.$isOpen?"0":"100%"});
  box-shadow: -8px 0 40px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    width: 100%;
  }
`,Kr=Yt.button`
  background: none;
  border: none;
  font-size: 28px;
  color: #6B7280;
  cursor: pointer;
  padding: 8px;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #835EEB;
  }

  &:focus {
    outline: none;
  }
`,Zr=Yt.div`
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  background: white;
`,qr=t=>{let{isModalOpen:n=!1,onDrawerStateChange:i}=t;const[r,a]=(0,e.useState)(!1),o=()=>{a(!1),null===i||void 0===i||i(!1),document.body.style.overflow="auto"};return e.useEffect(()=>{const e=e=>{"Escape"===e.key&&r&&o()};return r&&(document.addEventListener("keydown",e),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",e),document.body.style.overflow="auto"}},[r]),(0,Ai.jsxs)(Ai.Fragment,{children:[(0,Ai.jsx)(Xr,{$isVisible:!n,children:(0,Ai.jsxs)(Jr,{onClick:()=>{a(!0),null===i||void 0===i||i(!0),setTimeout(()=>{const e=document.querySelector("[data-close-button]");e&&e.focus()},100)},"aria-label":"\ubb34\ub8cc\uccb4\ud5d8 \uc2e0\uccad \uc5f4\uae30",children:["\ubb34\ub8cc\uccb4\ud5d8",(0,Ai.jsx)("br",{}),"\uc2e0\uccad"]})}),(0,Ai.jsx)(Gr,{$isOpen:r,onClick:e=>{e.target===e.currentTarget&&o()}}),(0,Ai.jsx)(Qr,{$isOpen:r,children:(0,Ai.jsxs)(Zr,{children:[(0,Ai.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"24px"},children:[(0,Ai.jsx)("h2",{style:{margin:0,color:"#33373B",fontSize:"20px",fontWeight:700,fontFamily:"Pretendard, sans-serif"},children:"\ubb34\ub8cc \uccb4\ud5d8 \uc2e0\uccad"}),(0,Ai.jsx)(Kr,{"data-close-button":!0,onClick:o,"aria-label":"\ub2eb\uae30",children:"\xd7"})]}),(0,Ai.jsxs)("p",{style:{color:"#6B7280",fontSize:"14px",lineHeight:"1.6",marginBottom:"24px",fontFamily:"Pretendard, sans-serif"},children:["\uad81\uae08\ud55c \uc810\uc774 \uc788\uc73c\uc2e0\uac00\uc694?",(0,Ai.jsx)("br",{}),"\uc544\ub798 \ud3fc\uc744 \uc791\uc131\ud574\uc8fc\uc2dc\uba74 \ube60\ub974\uac8c \uc5f0\ub77d\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."]}),(0,Ai.jsx)(Yr,{onClose:o})]})})]})},ea=Yt.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  backdrop-filter: blur(4px);
`,ta=Yt.div`
  background: white;
  border-radius: 15px;
  padding: 1.5rem 1.5rem;
  width: 100%;
  max-width: 600px;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(131, 94, 235, 0.25);
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    border-radius: 24px;
    padding: 2.5rem 2rem;
    margin: 30px;
    box-shadow: 0 30px 60px -12px rgba(131, 94, 235, 0.3);
  }

  @media (max-width: 600px) {
    max-width: 90vw;
    margin: 20px;
    padding: 1rem 1rem;
    border-radius: 12px;
  }
`,na=Yt.div`
  margin-bottom: 1.5rem;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
`,ia=Yt.div`
  flex: 1;
`,ra=Yt.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 0.5rem;
  font-family: 'Pretendard', sans-serif;

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 30px;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }
`,aa=Yt.p`
  color: #6B7280;
  font-size: 0.875rem;
  font-family: 'Pretendard', sans-serif;
  line-height: 1.5;

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 18px;
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    line-height: 1.4;
  }
`,oa=Yt.button`
  padding: 0.75rem;
  color: #6B7280;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  margin-left: 1rem;
  margin-top: -0.5rem;

  &:hover {
    background-color: rgba(131, 94, 235, 0.1);
    color: #835EEB;
  }

  @media (max-width: 600px) {
    width: 35px;
    height: 35px;
    font-size: 1.25rem;
    margin-left: 0.5rem;
    margin-top: -0.25rem;
  }
`,la=e=>{let{isOpen:t,onClose:n,title:i,description:r,children:a}=e;return t?(0,Ai.jsx)(ea,{onClick:n,children:(0,Ai.jsxs)(ta,{onClick:e=>e.stopPropagation(),children:[(0,Ai.jsxs)(na,{children:[(0,Ai.jsxs)(ia,{children:[(0,Ai.jsx)(ra,{children:i}),(0,Ai.jsx)(aa,{children:r})]}),(0,Ai.jsx)(oa,{onClick:n,children:"\xd7"})]}),a]})}):null},sa=Jt`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,da=Jt`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,ca=Jt`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,pa=Jt`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.95);
  }
`,ua=Jt`
  0% {
    background-size: 0% 50%;
  }
  100% {
    background-size: 100% 50%;
  }
`,xa=Jt`
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 1;
  }
`,fa=Jt`
  0%, 100% {
    filter: drop-shadow(0 0 5px rgba(131, 94, 235, 0.3));
  }
  50% {
    filter: drop-shadow(0 0 15px rgba(131, 94, 235, 0.6));
  }
`,ha=Jt`
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.05);
  }
`,ma=Jt`
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,ga=Jt`
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-30px) scale(0.95);
  }
`,ba=(Jt`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,Jt`
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,Jt`
  0% {
    opacity: 0;
    transform: translateY(25px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,Jt`
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.97);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,Yt.div`
  width: 100%;
  padding-bottom: 30px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  scroll-snap-align: start;
  @media (max-width: 600px) {
    scroll-snap-align: none;
    padding-bottom: 20px;
  }
`),wa=Yt.div`
  width: 100%;
  max-width: 1280px;
  display: none; /* 기본적으로 숨김 */
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  
  @media (max-width: 1366px) and (min-width: 601px) {
    display: flex; /* 태블릿에서만 표시 */
    padding: 80px 20px;
    gap: 60px;
  }
  
  @media (max-width: 600px) {
    display: none; /* 모바일에서는 기존 레이아웃 사용 */
  }
`,ya=Yt.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
`,va=Yt.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
`,ka=Yt.div`
  width: 100%;
  max-width: 1280px;
  padding: 160px 0 100px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  display: flex;
  box-sizing: border-box;
  scroll-snap-align: start;
  
  @media (max-width: 1366px) and (min-width: 601px) {
    display: none; /* 태블릿에서는 통합 레이아웃 사용 */
  }
  
  @media (max-width: 600px) {
    display: flex; /* 모바일에서는 표시 */
    padding: 100px 0 20px;
    gap: 12px;
  }
`,ja=Yt.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    gap: 4px;
  }
`,Ea=(Yt.span`
  color: #835EEB;
  font-size: 40px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.3;
  word-wrap: break-word;
  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 1.2;
  }
  @media (max-width: 600px) {
    font-size: 30px;
    line-height: 1.2;
  }
`,Yt.span`
  color: black;
  font-size: 40px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.3;
  word-wrap: break-word;
  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 1.2;
  }
  @media (max-width: 600px) {
    font-size: 30px;
    line-height: 1.2;
  }
`),Sa=Yt.div`
  width: 100%;
  text-align: center;
  color: #666666;
  font-size: 24px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 1.5;
  word-wrap: break-word;
  margin-top: 8px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 1.4;
    margin-top: 6px;
  }
`,za=Yt.div`
  width: 100%;
  padding: 120px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  scroll-snap-align: start;
  
  @media (max-width: 1366px) and (min-width: 601px) {
    display: none; /* 태블릿에서는 IntegratedSection의 TabletHeader 사용 */
  }
  
  @media (max-width: 600px) {
    padding: 80px 0 20px;
  }
`,Ca=(Yt.div`
  width: 100%;
  max-width: 1280px;
  text-align: center;
  color: #835EEB;
  font-size: 40px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.3;
  word-wrap: break-word;
  box-sizing: border-box;
  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 1.2;
  }
  @media (max-width: 600px) {
    font-size: 20px;
    line-height: 26px;
  }
`,Yt.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
  box-sizing: border-box;
  
  @media (max-width: 1366px) and (min-width: 601px) {
    display: none; /* 태블릿에서는 통합 레이아웃 사용 */
  }
  
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 24px;
    padding: 50px 20px;
  }
`,Yt.div`
  width: 100%;
  aspect-ratio: 16 / 9; /* 16:9 비율 유지 */
  position: relative;
  background: white;
  border-radius: 20px;
  border: 2px #835EEB solid;
  transition: all 0.3s ease;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(120deg, transparent 0%, rgba(131, 94, 235, 0.03) 50%, transparent 100%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }
  
  @media (max-width: 600px) {
    width: 85%; /* 가로폭 15% 축소 */
    border-radius: 16px;
    margin: 0 auto; /* 중앙 정렬 */
  }
`),_a=Yt.div`
  text-align: center;
  color: black;
  font-size: 32px;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 38.40px;
  word-wrap: break-word;
  transition: all 0.3s ease;
  @media (max-width: 600px) {
    font-size: 20px;
    line-height: 24px;
  }
`,Pa=Yt.div`
  flex: 1;
  max-width: 500px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  transition: all 0.3s ease;
  cursor: pointer;
  box-sizing: border-box;
  
  /* 태블릿에서 카드 크기 조정 */
  @media (max-width: 1366px) and (min-width: 601px) {
    flex: none !important;
    max-width: 80%;
    width: 600px;
    gap: 24px;
    margin: 0 auto;
  }
  
  @media (max-width: 600px) {
    max-width: 100%;
    width: 100%;
    gap: 12px;
    border-radius: 12px;
  }

  &:hover {
    transform: translateY(-8px);

    ${Ca} {
      border-color: #9C7EEF;
      box-shadow: 0 10px 20px rgba(131, 94, 235, 0.15);
    }

    ${_a} {
      color: #835EEB;
    }
  }

  ${Ca}::before {
    transform: translateX(-100%);
  }

  &:hover ${Ca}::before {
    transform: translateX(100%);
  }
`,Ia=Yt.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`,Ta=Yt.div`
  text-align: center;
  opacity: 0.60;
  color: #4B4B4B;
  font-size: 24px;
  font-family: Pretendard;
  font-weight: 300;
  line-height: 34.80px;
  word-wrap: break-word;
  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 20px;
  }
`,Ba=Yt(ka)`
  opacity: 0;
  &.visible {
    animation: ${sa} 0.8s ease forwards;
  }
`,Fa=(Yt(za)`
  opacity: 0;
  &.visible {
    animation: ${sa} 0.8s ease forwards;
  }
`,Yt(Pa)`
  opacity: 0;
  &.visible-left {
    animation: ${da} 0.8s ease forwards;
  }
  &.visible-right {
    animation: ${ca} 0.8s ease forwards;
  }
  
  @media (max-width: 600px) {
    /* 모바일에서 순서 변경: 카테고리-텍스트-이미지 */
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    /* 카테고리는 그대로 첫 번째 */
    > div:first-child {
      order: 1;
    }
    
    /* 이미지는 마지막 */
    > div:nth-child(2) {
      order: 3;
    }
    
    /* 텍스트는 중간 */
    > div:last-child {
      order: 2;
    }
  }
`),Aa=(Yt.div`
  width: 250px;
  height: 400px;
  padding: 20px 10px;
  overflow: hidden;
  border-radius: 15px;
  outline: 2px #835EEB solid;
  outline-offset: -2px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    width: 90vw;
    height: 220px;
    gap: 10px;
    border-radius: 10px;
    padding: 10px 4px;
  }
`,Yt.div`
  width: 60px;
  height: 60px;
  background: #835EEB;
  overflow: hidden;
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    width: 36px;
    height: 36px;
  }
`,Yt.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #835EEB;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 26px;
  word-wrap: break-word;
  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 20px;
  }
`,Yt.div`
  width: 230px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #33373B;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 40px;
  word-wrap: break-word;
  @media (max-width: 600px) {
    width: 90vw;
    font-size: 14px;
    line-height: 20px;
  }
`,Yt.div`
  overflow: hidden;
  border-radius: 15px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
`,Yt.div`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: relative;
  width: 50px;
  height: 50px;

  background: #835EEB;
  border-radius: 100px;
  animation: ${pa} 2s ease-in-out infinite;
`,Yt.div`
  position: absolute;
  width: 24px;
  height: 2px;
  background: white;
  left: 50%;
  border-radius: 1px;

  &.left {
    top: 15px;
    transform: translateX(-50%);
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 8px;
      height: 2px;
      background: white;
      transform: rotate(-35deg);
      transform-origin: left bottom;
    }
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 8px;
      height: 2px;
      background: white;
      transform: rotate(35deg);
      transform-origin: left top;
    }
  }

  &.right {
    bottom: 15px;
    transform: translateX(-50%);
    
    &::before {
      content: '';
      position: absolute;
      right: 0;
      width: 8px;
      height: 2px;
      background: white;
      transform: rotate(35deg);
      transform-origin: right bottom;
    }
    
    &::after {
      content: '';
      position: absolute;
      right: 0;
      width: 8px;
      height: 2px;
      background: white;
      transform: rotate(-35deg);
      transform-origin: right top;
    }
  }
`,Yt.div`
  width: 20px;
  height: 20px;
  background: #835EEB;
  border-radius: 4px;
  margin-right: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 6px;
    border: 2px solid white;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    top: 5px;
  }
`,Yt.div`
  display: flex;
  align-items: center;
  color: #33373B;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 40px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 20px;
  }
`,Yt.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #835EEB;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 26px;
  word-wrap: break-word;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 20px;
  }
`,Yt.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #33373B;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 18.20px;
  word-wrap: break-word;
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 16px;
  }
`,Yt.div`
  align-self: stretch;
  background: #9C7EEF;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  min-height: 890px;
  padding: 60px 0;
  scroll-snap-align: start;
  @media (max-width: 600px) {
    min-height: 800px;
    padding: 40px 0;
  }
`),Oa=Yt.div`
  align-self: stretch;
  padding: 50px 64px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 24px 8px 12px;
    gap: 12px;
  }
`,Ra=Yt.div`
  align-self: stretch;
  text-align: center;
  color: white;
  font-size: 40px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.3;
  word-wrap: break-word;
  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 1.2;
  }
  @media (max-width: 600px) {
    font-size: 24px;
    line-height: 30px;
  }
`,Na=Yt.div`
  align-self: stretch;
  text-align: center;
  color: white;
  font-size: 22px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 33px;
  word-wrap: break-word;
  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 20px;
  }
`,Da=Yt.a`
  padding: 10px 30px;
  background: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  border: none;
  outline: 2px rgba(255, 255, 255, 0.15) solid;
  outline-offset: -2px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  /* 리플 효과를 위한 가상 요소 */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(131, 94, 235, 0.1);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  span {
    color: #835EEB;
    font-size: 20px;
    font-family: Pretendard;
    font-weight: 700;
    line-height: 29px;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
    @media (max-width: 600px) {
      font-size: 16px;
      line-height: 22px;
    }
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0px 8px 25px rgba(131, 94, 235, 0.3), 0px 0px 20px rgba(131, 94, 235, 0.1);
    background: linear-gradient(135deg, #f8f7ff 0%, #efeeff 100%);
    
    span {
      color: #6b46c1;
    }
    
    &::before {
      width: 300px;
      height: 300px;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(0.98);
    transition: all 0.1s ease;
    box-shadow: 0px 4px 12px rgba(131, 94, 235, 0.4);
  }
  
  /* 포커스 접근성 */
  &:focus {
    outline: 3px solid rgba(131, 94, 235, 0.3);
    outline-offset: 2px;
  }
`,La=Yt.div`
  align-self: stretch;
  padding: 30px 8px;
  overflow: hidden;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 16px;
    padding: 16px 4px;
  }
`,$a=Jt`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`,Ma=(Jt`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`,Jt`
  0% {
    transform: translateX(0) rotateY(0deg);
  }
  20% {
    transform: translateX(-20%) rotateY(3deg);
  }
  40% {
    transform: translateX(-40%) rotateY(0deg);
  }
  60% {
    transform: translateX(-60%) rotateY(-3deg);
  }
  80% {
    transform: translateX(-80%) rotateY(0deg);
  }
  100% {
    transform: translateX(-100%) rotateY(0deg);
  }
`),Ua=Yt.div`
  display: flex;
  gap: 40px;
  animation: ${$a} 25s linear infinite;
  box-sizing: border-box;
  @media (max-width: 600px) {
    gap: 8px;
    animation: ${Ma} 20s ease-in-out infinite;
    animation-fill-mode: both;
    perspective: 1000px;
  }
`,Ha=Yt.div`
  flex-shrink: 0;
  box-sizing: border-box;
  @media (max-width: 600px) {
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }
`,Va=(Yt.div`
  align-self: stretch;
  padding: 32.86px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13.14px;
  
  h3 {
    align-self: stretch;
    text-align: center;
    color: #33373B;
    font-size: 29.58px;
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    line-height: 44.36px;
    word-wrap: break-word;
    margin: 0;
  }
`,Yt.div`
  width: 100%;
  max-width: 400px;
  aspect-ratio: 16 / 9; /* 16:9 비율 유지 */
  background-image: url(${e=>e.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 24px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08));
    border-radius: 24px;
  }
  
    @media (max-width: 900px) {
    max-width: 320px;
    border-radius: 20px;
    
    &::after {
      border-radius: 20px;
    }
  }
  
  @media (max-width: 600px) {
    max-width: 280px;
    border-radius: 16px;
    
    &::after {
      border-radius: 16px;
    }
  }
`,Yt.div`
  align-self: stretch;
  padding: 20px 0 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 12px 0 24px;
  }
`,Yt.div`
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.10);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: fit-content;
  height: fit-content;
  
  span {
    color: white;
    font-size: 48px;
    font-family: Pretendard;
    font-weight: 700;
    line-height: 1.2;
    white-space: nowrap;
    @media (max-width: 600px) {
      font-size: 24px;
    }
  }
`,Yt.div`
  color: white;
  font-size: 48px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.2;
  word-wrap: break-word;
  @media (max-width: 600px) {
    font-size: 24px;
    line-height: 1.2;
  }
`,Yt.div`
  align-self: stretch;
  padding: 60px 0;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 24px 0;
    gap: 12px;
  }
`,Yt.h2`
  color: #33373B;
  font-size: 48px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 62.40px;
  text-align: center;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 24px;
    line-height: 30px;
  }
`,Yt.button`
  margin-top: 20px;
  padding: 16px 32px;
  background: #835EEB;
  color: white;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #6B4CD3;
    transform: translateY(-2px);
  }
`,Yt.div`
  display: flex;
  gap: 16px;
  margin: 40px 0 24px 0;
  box-sizing: border-box;
  @media (max-width: 600px) {
    gap: 8px;
    margin: 24px 0 12px 0;
  }
`,Yt.button`
  padding: 12px 32px;
  border-radius: 24px;
  border: none;
  background: ${e=>{let{$active:t}=e;return t?"#835EEB":"#E5D8FB"}};
  color: ${e=>{let{$active:t}=e;return t?"white":"#835EEB"}};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`,Yt.div`
  width: 700px;
  max-width: 90vw;
  background: #ede5fa;
  border-radius: 24px;
  padding: 32px 24px 40px 24px;
  box-shadow: 0 4px 24px rgba(131, 94, 235, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: visible;
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 16px 12px 24px 12px;
    border-radius: 12px;
  }
`,Yt.div`
  background: #835EEB;
  color: white;
  font-size: 22px;
  font-weight: 700;
  border-radius: 18px;
  padding: 8px 32px;
  margin-bottom: 16px;
  align-self: center;
  box-sizing: border-box;
  @media (max-width: 600px) {
    font-size: 15px;
    padding: 6px 20px;
    margin-bottom: 10px;
  }
`,Yt.div`
  color: #6B5B8C;
  font-size: 20px;
  text-align: center;
  margin-bottom: 24px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
`,Yt.div`
  width: 100%;
  height: 320px;
  background: white;
  border-radius: 18px;
  border: 2px solid #BFA8F6;
  box-sizing: border-box;
`,Yt.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 32px;
  color: #835EEB;
  cursor: pointer;
  z-index: 2;
  &:hover { color: #6B4BC4; }
  box-sizing: border-box;
`),Wa=(Yt(Va)`
  left: -48px;
  @media (max-width: 600px) {
    left: -24px;
  }
`,Yt(Va)`
  right: -48px;
  @media (max-width: 600px) {
    right: -24px;
  }
`,t=>{let{title:n,description:i,index:r,imageSrc:a,category:o}=t;const l=(0,e.useRef)(null);return(0,e.useEffect)(()=>{const e=new IntersectionObserver(e=>{let[t]=e;var n;t.isIntersecting&&(null===(n=l.current)||void 0===n||n.classList.add(r%2===0?"visible-left":"visible-right"))},{threshold:.2,rootMargin:"0px"});return l.current&&e.observe(l.current),()=>{l.current&&e.unobserve(l.current)}},[r]),(0,Ai.jsxs)(Fa,{ref:l,children:[o&&(0,Ai.jsx)(Ho,{children:(0,Ai.jsx)(Vo,{children:o})}),(0,Ai.jsx)(Ca,{children:a&&(0,Ai.jsx)("img",{src:a,alt:n,style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"18px"}})}),(0,Ai.jsxs)(Ia,{children:[(0,Ai.jsx)(_a,{children:n}),(0,Ai.jsx)(Ta,{children:i.map((t,n)=>(0,Ai.jsxs)(e.Fragment,{children:[t,n<i.length-1&&(0,Ai.jsx)("br",{})]},n))})]})]})}),Ya=e.forwardRef((t,n)=>{const i=(0,e.useRef)(null),r=(0,e.useRef)([]),[a,o]=(0,e.useState)(0),[l,s]=(0,e.useState)(0),[d,c]=(0,e.useState)(0),[p,u]=(0,e.useState)(0),[x,f]=(0,e.useState)(!0),[h,m]=(0,e.useState)(!0),[g,b]=(0,e.useState)("visible"),[w,y]=(0,e.useState)(new Set),[v,k]=(0,e.useState)(new Set),j=(0,e.useRef)([]),[E,S]=(0,e.useState)(0),[z,C]=(0,e.useState)(!1),[_,P]=(0,e.useState)(!1),[I,T]=(0,e.useState)([!1,!1,!1,!1]),[B,F]=(0,e.useState)([!1,!1,!1,!1]),[A,O]=(0,e.useState)([!1,!1,!1,!1]),[R,N]=(0,e.useState)(!1),[D,L]=(0,e.useState)(!1),$=(0,e.useRef)(null),M=(0,e.useRef)([]),U=[{title:{highlight:"\uccb4\uacc4\uc801\uc778 \uad00\ub9ac\ub85c",normal:"\uc131\uacfc \uadf9\ub300\ud654"},quote:"\ud559\uc0dd\ub4e4\uc758 \ud559\uc2b5 \ud604\ud669\uc744 \ud55c\ub208\uc5d0 \ud30c\uc545\ud558\uace0<br/>\ud6a8\uacfc\uc801\uc73c\ub85c \uc9c0\ub3c4\ud560 \uc218 \uc788\uc5b4\uc694",name:"\uc911\uacc4\ub3d9 \ucd08\uc911\uace0 \uc218\ud559\ud559\uc6d0<br/>\ucd5c\uc218\uc5f0 \uc6d0\uc7a5 \uc120\uc0dd\ub2d8",videoUrl:"https://www.youtube.com/watch?v=_g9OwAA8V5g",thumbnailUrl:"https://img.youtube.com/vi/_g9OwAA8V5g/maxresdefault.jpg"},{title:{highlight:"\ud604\uc7a5\uc758 \ubaa9\uc18c\ub9ac\ub85c",normal:"\uc99d\uba85\ub41c \ud6a8\uacfc"},quote:"AI \ucd94\ucc9c \ubb38\uc81c\ub97c \ud1b5\ud574<br/>\ucde8\uc57d\ud55c \ub2e8\uc6d0\uc744 \uc644\ubcbd \ubcf4\uc644\ud560 \uc218 \uc788\uc5b4\uc694.",name:"\uc744\uc9c0\ub300 \uc758\uc608\uacfc<br/>24\ud559\ubc88 \uae40\uc601\uc6b0 \ud559\uc0dd",videoUrl:"https://www.youtube.com/watch?v=MBQZ4PCuNEQ",thumbnailUrl:"https://img.youtube.com/vi/MBQZ4PCuNEQ/maxresdefault.jpg"},{title:{highlight:"AI \uae30\uc220\ub85c",normal:"\uc644\uc131\ub41c \ud559\uc2b5"},quote:"\uac1c\uc778\ubcc4 \ub9de\ucda4 \ud559\uc2b5\uacfc \uc2e4\uc2dc\uac04 \ud53c\ub4dc\ubc31\uc73c\ub85c<br/>\ud559\uc2b5 \ud6a8\uacfc\uac00 \ub208\uc5d0 \ub744\uac8c \ud5a5\uc0c1\ub418\uc5c8\uc5b4\uc694",name:"\ud559\ubd80\ubaa8 \ud6c4\uae30<br/>\ucd08\ub4f1 5\ud559\ub144 \ud559\ubd80\ubaa8",videoUrl:"https://www.youtube.com/watch?v=SaM59JVLZms",thumbnailUrl:"https://img.youtube.com/vi/SaM59JVLZms/maxresdefault.jpg"}];(0,e.useEffect)(()=>{const e=localStorage.getItem("demoClickCount");e&&c(parseInt(e,10))},[]),(0,e.useEffect)(()=>{const e=()=>{C(window.innerWidth<=1366),P(window.innerWidth<=600)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);const[H,V]=(0,e.useState)(!1);(0,e.useEffect)(()=>{if(!z)return;const e=setInterval(()=>{S(e=>{const t=e+1;return 7===t?(V(!0),setTimeout(()=>{S(0),setTimeout(()=>{V(!1)},50)},1200),7):t})},2e3);return()=>clearInterval(e)},[z]),(0,e.useEffect)(()=>{if(p===U.length)return;b("slide-out");const e=setTimeout(()=>{b("slide-in")},400),t=setTimeout(()=>{b("visible")},1e3);return()=>{clearTimeout(e),clearTimeout(t)}},[p,U.length]),(0,e.useEffect)(()=>{const e=setInterval(()=>{u(e=>e+1)},4e3);return()=>clearInterval(e)},[]),(0,e.useEffect)(()=>{if(p===U.length){const e=setTimeout(()=>{f(!1),u(0),setTimeout(()=>{f(!0)},50)},1e3);return()=>clearTimeout(e)}},[p,U.length]),(0,e.useEffect)(()=>{const e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(setTimeout(()=>O([!0,!1,!1,!1]),0),setTimeout(()=>O([!0,!0,!1,!1]),150),setTimeout(()=>O([!0,!0,!0,!1]),300),setTimeout(()=>O([!0,!0,!0,!0]),450),setTimeout(()=>N(!0),300),setTimeout(()=>L(!0),400),setTimeout(()=>T([!0,!1,!1,!1]),700),setTimeout(()=>T([!0,!0,!1,!1]),850),setTimeout(()=>T([!0,!0,!0,!1]),1e3),setTimeout(()=>T([!0,!0,!0,!0]),1150),setTimeout(()=>F([!0,!1,!1,!1]),700),setTimeout(()=>F([!0,!0,!1,!1]),850),setTimeout(()=>F([!0,!0,!0,!1]),1e3),setTimeout(()=>F([!0,!0,!0,!0]),1150))})},{threshold:.2});return $.current&&e.observe($.current),()=>{$.current&&e.unobserve($.current)}},[]);(0,e.useEffect)(()=>{const e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&t.target.classList.add("visible")},{threshold:.2,rootMargin:"0px"}),t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.boundingClientRect.top>0&&e.target.classList.add("visible")})},{threshold:.1,rootMargin:"-10% 0px -10% 0px"});return i.current&&e.observe(i.current),r.current.forEach(t=>{t&&e.observe(t)}),M.current.forEach(e=>{e&&t.observe(e)}),()=>{i.current&&e.unobserve(i.current),r.current.forEach(t=>{t&&e.unobserve(t)}),M.current.forEach(e=>{e&&t.unobserve(e)})}},[]),(0,e.useEffect)(()=>{const e=()=>{const e=new Set,t=new Set;j.current.forEach((n,i)=>{if(n){const r=n.getBoundingClientRect(),a=window.innerHeight,o=r.top+r.height/2,l=a/2;Math.abs(o-l)<.4*(a/2)&&(e.add(i),t.add(i))}}),y(e),k(t)};return window.addEventListener("scroll",e),e(),()=>{window.removeEventListener("scroll",e)}},[]);const[W,Y]=(0,e.useState)({featureIdx:0,subIdx:null}),X=e=>{const t=j.current[e];if(t){const e=t.getBoundingClientRect(),n=window.innerHeight,i=e.height,r=(window.pageYOffset||document.documentElement.scrollTop)+e.top-n/2+i/2;window.scrollTo({top:r,behavior:"smooth"})}};return(0,Ai.jsxs)(ba,{ref:n,children:[(0,Ai.jsxs)(Ba,{ref:i,children:[(0,Ai.jsx)(ja,{children:(0,Ai.jsxs)(Ea,{children:["\uc218\ud559\ub300\uc655\uc5d0\uc11c\ub9cc \ub9cc\ub0a0 \uc218 \uc788\ub294",(0,Ai.jsx)("br",{}),"\ud2b9\ubcc4\ud55c \uae30\ub2a5\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4"]})}),(0,Ai.jsx)(Sa,{children:"AI \uae30\uc220\ub85c \uc644\uc131\ub41c \uccb4\uacc4\uc801\uc778 \uc218\ud559 \ud559\uc2b5 \uad00\ub9ac \uc2dc\uc2a4\ud15c"})]}),(0,Ai.jsxs)(wa,{children:[(0,Ai.jsxs)(ya,{children:[(0,Ai.jsx)(ja,{children:(0,Ai.jsxs)(Ea,{children:["\uc218\ud559\ub300\uc655\uc5d0\uc11c\ub9cc \ub9cc\ub0a0 \uc218 \uc788\ub294",(0,Ai.jsx)("br",{}),"\ud2b9\ubcc4\ud55c \uae30\ub2a5\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4"]})}),(0,Ai.jsx)(Sa,{children:"AI \uae30\uc220\ub85c \uc644\uc131\ub41c \uccb4\uacc4\uc801\uc778 \uc218\ud559 \ud559\uc2b5 \uad00\ub9ac \uc2dc\uc2a4\ud15c"})]}),(0,Ai.jsxs)(va,{children:[(0,Ai.jsx)(Wa,{title:"1:1 \uac1c\ubcc4 \ub9de\ucda4 \ud559\uc2b5\uc9c0",description:["AI\uac00 \ub9cc\ub4e4\uc5b4\uc8fc\ub294","\ud559\uc0dd\ubcc4\ub85c \uc11c\ub85c \ub2e4\ub978 \uc2e4\ub825\uc5d0 \ub9de\uac8c, \ucd5c\uc801\uc758 \ubb38\uc81c\ub85c \ud559\uc2b5\uc9c0\ub97c \uc790\ub3d9 \uc0dd\uc131\ud574 \ub4dc\ub824\uc694!"],index:0,imageSrc:"/Body/images/Body-image-1.png",category:"\ud559\uc2b5\uc9c0 \uc790\ub3d9 \uc81c\uc791"}),(0,Ai.jsx)(Wa,{title:"\ud559\uc2b5 \uc131\uacfc \ubd84\uc11d",description:["\uac1c\uc778\ubcc4 \ud559\uc2b5 \ub370\uc774\ud130 \ubd84\uc11d","\uc790\ub3d9 \uc624\ub2f5\ud074\ub9ac\ub2c9\uc73c\ub85c \ubaa8\ub4e0 \ucde8\uc57d\uc810\uc744 \uc644\ubcbd\ud558\uac8c \ubcf4\uc644\ud569\ub2c8\ub2e4"],index:1,imageSrc:"/Body/images/Body-image-2.png",category:"\uc624\ub2f5 \uc644\ubcbd \uc815\ubcf5"}),(0,Ai.jsx)(Wa,{title:"\uc11c\uc220\ud615 \uc790\ub3d9 \ucc44\uc810",description:["\ud544\uae30 \uc778\uc2dd \uae30\uc220\ub85c","\uc11c\uc220\ud615 \ub2f5\uc548\uc744 \uc815\ud655\ud558\uac8c \uc790\ub3d9 \ucc44\uc810\ud569\ub2c8\ub2e4"],index:2,imageSrc:"/Body/images/Body-image-3.png",category:"AI \ucc44\uc810 \uc2dc\uc2a4\ud15c"}),(0,Ai.jsx)(Wa,{title:"\uc804\uad6d \ub2e8\uc704 \uc2e4\ub825 \ubd84\uc11d",description:["AI \ucc44\uc810 \uc2dc\uc2a4\ud15c\uc73c\ub85c","\uc804\uad6d \ud559\uc0dd\ub4e4\uacfc \ube44\uad50\ud55c \uac1d\uad00\uc801\uc778 \uc2e4\ub825 \ubd84\uc11d \ub9ac\ud3ec\ud2b8\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4"],index:3,imageSrc:"/Body/images/Body-image-4.png",category:"AI \ucc44\uc810 \uc2dc\uc2a4\ud15c"}),(0,Ai.jsx)(Wa,{title:"AI \ud78c\ud2b8 \ubc0f \uc624\ub2f5 \ud53c\ub4dc\ubc31",description:["\uc2e4\uc2dc\uac04 \ud53c\ub4dc\ubc31\uc73c\ub85c","\ud480\uc774\uac00 \ub9c9\ud790 \ub54c \ub2e8\uacc4\ubcc4 \ud78c\ud2b8\uc640 \uc0c1\uc138\ud55c \uc624\ub2f5 \ubd84\uc11d\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4"],index:4,imageSrc:"/Body/images/Body-image-5.png",category:"\uc2e4\uc2dc\uac04 \ud53c\ub4dc\ubc31"}),(0,Ai.jsx)(Wa,{title:"\uc2e4\uc2dc\uac04 \uc9c8\ubb38 \uac8c\uc2dc\ud310",description:["\uc2e4\uc2dc\uac04 \ud53c\ub4dc\ubc31\uc73c\ub85c","\ubaa8\ub974\ub294 \ubb38\uc81c\ub97c \uac8c\uc2dc\ud310\uc5d0 \uc9c8\ubb38\ud558\uace0 \ube60\ub974\uac8c \ub2f5\ubcc0\uc744 \ubc1b\uc544 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4"],index:5,imageSrc:"/Body/images/Body-image-6.png",category:"\uc2e4\uc2dc\uac04 \ud53c\ub4dc\ubc31"})]})]}),(0,Ai.jsxs)(No,{children:[(0,Ai.jsxs)(Lo,{ref:e=>{j.current[0]=e,M.current[0]=e},children:[(0,Ai.jsxs)($o,{isVisible:v.has(0),children:[(0,Ai.jsx)(Ho,{children:(0,Ai.jsx)(Vo,{children:"\ud559\uc2b5\uc9c0 \uc790\ub3d9 \uc81c\uc791"})}),(0,Ai.jsxs)(Mo,{children:["AI\uac00 \ub9cc\ub4e4\uc5b4\uc8fc\ub294",(0,Ai.jsx)("br",{}),(0,Ai.jsx)(Uo,{isVisible:v.has(0),children:"1:1 \uac1c\ubcc4 \ub9de\ucda4 \ud559\uc2b5\uc9c0"})]}),(0,Ai.jsxs)(Wo,{children:["\ud559\uc0dd\ubcc4\ub85c \uc11c\ub85c \ub2e4\ub978 \uc2e4\ub825\uc5d0 \ub9de\uac8c,",(0,Ai.jsx)("br",{}),"\ucd5c\uc801\uc758 \ubb38\uc81c\ub85c \ud559\uc2b5\uc9c0\ub97c \uc790\ub3d9 \uc0dd\uc131\ud574 \ub4dc\ub824\uc694!"]})]}),(0,Ai.jsx)(Yo,{isZoomed:w.has(0),onClick:()=>X(0),style:{cursor:"pointer"},children:(0,Ai.jsx)("img",{src:"/Body/images/Body-image-1.png",alt:"\ud575\uc2ec\uae30\ub2a51",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:0,background:"transparent"}})})]}),(0,Ai.jsxs)(Lo,{ref:e=>{j.current[1]=e,M.current[1]=e},children:[(0,Ai.jsxs)($o,{isVisible:v.has(1),children:[(0,Ai.jsx)(Ho,{children:(0,Ai.jsx)(Vo,{children:"\uc624\ub2f5 \uc644\ubcbd \uc815\ubcf5"})}),(0,Ai.jsxs)(Mo,{children:[(0,Ai.jsx)(Uo,{isVisible:v.has(1),children:"\uc790\ub3d9 \uc624\ub2f5 \ud074\ub9ac\ub2c9"}),"\ubb34\ud55c \uc81c\uacf5"]}),(0,Ai.jsxs)(Wo,{children:["\ub354 \uc774\uc0c1 \ud2c0\ub9ac\uc9c0 \uc54a\uc744 \ub54c\uae4c\uc9c0,",(0,Ai.jsx)("br",{}),"\uc624\ub2f5 \uc720\uc0ac \ubb38\uc81c\ub97c \uc790\ub3d9\uc73c\ub85c \ucd9c\uc81c\ud574 \ub4dc\ub824\uc694!"]})]}),(0,Ai.jsx)(Yo,{isZoomed:w.has(1),onClick:()=>X(1),style:{cursor:"pointer"},children:(0,Ai.jsx)("img",{src:"/Body/images/Body-image-2.png",alt:"\ud575\uc2ec\uae30\ub2a52",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:0,background:"transparent"}})})]}),(0,Ai.jsxs)(Lo,{ref:e=>{j.current[2]=e,M.current[2]=e},children:[(0,Ai.jsxs)($o,{isVisible:v.has(2),children:[(0,Ai.jsx)(Ho,{children:(0,Ai.jsx)(Vo,{children:"AI \ucc44\uc810 \uc2dc\uc2a4\ud15c"})}),(0,Ai.jsxs)(Mo,{children:["\uc11c\uc220\ud615",(0,Ai.jsx)("br",{}),"\uc790\ub3d9 \ucc44\uc810"]}),(0,Ai.jsxs)(Wo,{children:["\ud544\uae30 \uc778\uc2dd \uae30\uc220\ub85c \uc11c\uc220\ud615 \ub2f5\uc548\uc744",(0,Ai.jsx)("br",{}),"\uc815\ud655\ud558\uac8c \uc790\ub3d9 \ucc44\uc810\ud569\ub2c8\ub2e4."]})]}),(0,Ai.jsx)(Yo,{isZoomed:w.has(2),onClick:()=>X(2),style:{cursor:"pointer"},children:(0,Ai.jsx)("img",{src:"/Body/images/Body-image-3.png",alt:"\ud575\uc2ec\uae30\ub2a53",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:0,background:"transparent"}})})]}),(0,Ai.jsxs)(Lo,{ref:e=>{j.current[3]=e,M.current[3]=e},children:[(0,Ai.jsxs)($o,{isVisible:v.has(3),children:[(0,Ai.jsx)(Ho,{children:(0,Ai.jsx)(Vo,{children:"AI \ucc44\uc810 \uc2dc\uc2a4\ud15c"})}),(0,Ai.jsxs)(Mo,{children:["\uc804\uad6d \ub2e8\uc704",(0,Ai.jsx)("br",{}),"\uc2e4\ub825 \ubd84\uc11d"]}),(0,Ai.jsxs)(Wo,{children:["\uc804\uad6d \ud559\uc0dd\ub4e4\uacfc \ube44\uad50\ud55c",(0,Ai.jsx)("br",{}),"\uac1d\uad00\uc801\uc778 \uc2e4\ub825 \ubd84\uc11d \ub9ac\ud3ec\ud2b8\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."]})]}),(0,Ai.jsx)(Yo,{isZoomed:w.has(3),onClick:()=>X(3),style:{cursor:"pointer"},children:(0,Ai.jsx)("img",{src:"/Body/images/Body-image-4.png",alt:"\ud575\uc2ec\uae30\ub2a54",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:0,background:"transparent"}})})]}),(0,Ai.jsxs)(Lo,{ref:e=>{j.current[4]=e,M.current[4]=e},children:[(0,Ai.jsxs)($o,{isVisible:v.has(4),children:[(0,Ai.jsx)(Ho,{children:(0,Ai.jsx)(Vo,{children:"\uc2e4\uc2dc\uac04 \ud53c\ub4dc\ubc31"})}),(0,Ai.jsxs)(Mo,{children:["AI \ud78c\ud2b8 \ubc0f",(0,Ai.jsx)("br",{}),"\uc624\ub2f5 \ud53c\ub4dc\ubc31"]}),(0,Ai.jsxs)(Wo,{children:["\ud480\uc774\uac00 \ub9c9\ud790 \ub54c \ub2e8\uacc4\ubcc4 \ud78c\ud2b8\uc640",(0,Ai.jsx)("br",{}),"\uc0c1\uc138\ud55c \uc624\ub2f5 \ubd84\uc11d\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."]})]}),(0,Ai.jsx)(Yo,{isZoomed:w.has(4),onClick:()=>X(4),style:{cursor:"pointer"},children:(0,Ai.jsx)("img",{src:"/Body/images/Body-image-5.png",alt:"\ud575\uc2ec\uae30\ub2a55",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:0,background:"transparent"}})})]}),(0,Ai.jsxs)(Lo,{ref:e=>{j.current[5]=e,M.current[5]=e},children:[(0,Ai.jsxs)($o,{isVisible:v.has(5),children:[(0,Ai.jsx)(Ho,{children:(0,Ai.jsx)(Vo,{children:"\uc2e4\uc2dc\uac04 \ud53c\ub4dc\ubc31"})}),(0,Ai.jsxs)(Mo,{children:["\uc2e4\uc2dc\uac04",(0,Ai.jsx)("br",{}),"\uc9c8\ubb38 \uac8c\uc2dc\ud310"]}),(0,Ai.jsxs)(Wo,{children:["\ubaa8\ub974\ub294 \ubb38\uc81c\ub97c \uac8c\uc2dc\ud310\uc5d0 \uc9c8\ubb38\ud558\uace0",(0,Ai.jsx)("br",{}),"\ube60\ub974\uac8c \ub2f5\ubcc0\uc744 \ubc1b\uc544 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]}),(0,Ai.jsx)(Yo,{isZoomed:w.has(5),onClick:()=>X(5),style:{cursor:"pointer"},children:(0,Ai.jsx)("img",{src:"/Body/images/Body-image-6.png",alt:"\ud575\uc2ec\uae30\ub2a56",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:0,background:"transparent"}})})]})]}),(0,Ai.jsxs)(Aa,{children:[(0,Ai.jsxs)(Oa,{children:[(0,Ai.jsxs)(Ra,{children:["\uc218\ud559\ub300\uc655 APP \uae30\ub2a5\uc744",(0,Ai.jsx)("br",{}),"\uc9c1\uc811 \uccb4\ud5d8\ud574\ubcf4\uc138\uc694!"]}),(0,Ai.jsxs)(Na,{children:["\uad50\uc0ac\ub294 \uc6f9\uc5d0\uc11c \uad00\ub9ac\ud558\uace0, \ud559\uc0dd\uc740 \uc571\uc73c\ub85c \ud559\uc2b5\ud558\ub294",(0,Ai.jsx)("br",{}),"\uc644\ubcbd\ud55c \uad50\uc721 \uc0dd\ud0dc\uacc4\ub97c \uacbd\ud5d8\ud558\uc138\uc694"]}),(0,Ai.jsx)(Da,{href:"https://www.iammathking.com/demo",target:"_blank",rel:"noopener noreferrer",onClick:()=>{const e=d+1;c(e),localStorage.setItem("demoClickCount",e.toString())},children:(0,Ai.jsx)("span",{children:"\uc571 \uae30\ub2a5 \ubbf8\ub9ac\ubcf4\uae30"})})]}),(0,Ai.jsx)(La,{children:_?(0,Ai.jsx)(Xo,{children:(0,Ai.jsx)(Jo,{children:["/Body/slides/feature-slide-1.png","/Body/slides/feature-slide-2.png","/Body/slides/feature-slide-3.png","/Body/slides/feature-slide-4.png","/Body/slides/feature-slide-5.png","/Body/slides/feature-slide-6.png","/Body/slides/feature-slide-7.png","/Body/slides/feature-slide-1.png","/Body/slides/feature-slide-2.png","/Body/slides/feature-slide-3.png","/Body/slides/feature-slide-4.png","/Body/slides/feature-slide-5.png","/Body/slides/feature-slide-6.png","/Body/slides/feature-slide-7.png"].map((e,t)=>(0,Ai.jsx)(Go,{noTransition:H,style:{transform:`translateX(-${100*E}%)`},children:(0,Ai.jsx)("div",{style:{width:"320px",height:"320px",backgroundImage:`url(${e})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",borderRadius:"20px",position:"relative"}})},t))})}):(0,Ai.jsxs)(Ua,{children:[(0,Ai.jsx)(Ha,{children:(0,Ai.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-1.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ai.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ai.jsx)(Ha,{children:(0,Ai.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-2.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ai.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ai.jsx)(Ha,{children:(0,Ai.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-3.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ai.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ai.jsx)(Ha,{children:(0,Ai.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-4.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ai.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ai.jsx)(Ha,{children:(0,Ai.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-5.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ai.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ai.jsx)(Ha,{children:(0,Ai.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-6.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ai.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ai.jsx)(Ha,{children:(0,Ai.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-7.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ai.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ai.jsx)(Ha,{children:(0,Ai.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-1.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ai.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ai.jsx)(Ha,{children:(0,Ai.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-2.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ai.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ai.jsx)(Ha,{children:(0,Ai.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-3.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ai.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ai.jsx)(Ha,{children:(0,Ai.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-4.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ai.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ai.jsx)(Ha,{children:(0,Ai.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-5.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ai.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ai.jsx)(Ha,{children:(0,Ai.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-6.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ai.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ai.jsx)(Ha,{children:(0,Ai.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-7.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ai.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})})]})})]}),(0,Ai.jsx)(Xa,{ref:$,children:(0,Ai.jsx)("div",{style:{position:"relative",width:"100%",maxWidth:"100%",margin:"0",padding:0,minHeight:"900px",zIndex:2},children:window.innerWidth<=820?(0,Ai.jsxs)(Ai.Fragment,{children:[(0,Ai.jsxs)(Ja,{style:{position:"relative",top:0,left:0,width:"100%",zIndex:3,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:"0",padding:"24px 0 0 0",background:"white"},children:[(0,Ai.jsxs)(Ga,{style:{fontSize:30,textAlign:"center",marginBottom:8},children:["\uc6f9-\uc571 \uc5f0\ub3d9\uc73c\ub85c \uc644\uc131\ub418\ub294",(0,Ai.jsx)("br",{}),"\uad50\uc721 \uc2dc\uc2a4\ud15c"]}),(0,Ai.jsxs)(Qa,{style:{fontSize:15,textAlign:"center",marginBottom:12},children:["\uad50\uc0ac\ub294 \uc6f9\uc5d0\uc11c \uad00\ub9ac\ud558\uace0, \ud559\uc0dd\uc740 \uc571\uc73c\ub85c \ud559\uc2b5\ud558\ub294",(0,Ai.jsx)("br",{}),"\uc644\ubcbd\ud55c \uad50\uc721 \uc0dd\ud0dc\uacc4\ub97c \uacbd\ud5d8\ud558\uc138\uc694"]}),(0,Ai.jsxs)(Ka,{children:[(0,Ai.jsxs)(Za,{href:"https://play.google.com/store/apps/details?id=com.iammathking&pcampaignid=web_share",target:"_blank",rel:"noopener noreferrer",children:[(0,Ai.jsx)(qa,{children:(0,Ai.jsx)("img",{src:"/Common/Google_Play_logo.svg",alt:"Google Play"})}),(0,Ai.jsx)(eo,{children:"Google Play"})]}),(0,Ai.jsxs)(Za,{href:"https://apps.apple.com/app/%EC%88%98%ED%95%99%EB%8C%80%EC%99%95-ai%EB%94%94%EC%A7%80%ED%84%B8%EB%AC%B8%EC%A0%9C%EC%A7%91/id1501165233",target:"_blank",rel:"noopener noreferrer",children:[(0,Ai.jsx)(qa,{children:(0,Ai.jsx)("img",{src:"/Common/App_Store_logo.svg",alt:"App Store"})}),(0,Ai.jsx)(eo,{children:"App Store"})]})]})]}),(0,Ai.jsxs)("div",{style:{width:"100%",height:"987px",position:"relative",overflow:"hidden",margin:"0 auto",paddingBottom:"200px"},children:[(0,Ai.jsxs)(po,{isVisible:R,children:["\uc2e4\uc2dc\uac04",(0,Ai.jsx)("br",{}),"\ub3d9\uae30\ud654"]}),(0,Ai.jsx)(uo,{isVisible:D}),(0,Ai.jsx)("img",{src:"/WebApp/integration/3.svg",alt:"\uc120\uc0dd\ub2d8\uc6a9 \uc6f9\uc0ac\uc774\ud2b8 \ubaa9\uc5c5",style:{position:"absolute",bottom:"60px",left:"calc(50% + 100px)",transform:"translateX(-50%)",width:"auto",height:"375px",zIndex:1,opacity:.8}}),(0,Ai.jsx)("img",{src:"/WebApp/integration/4.svg",alt:"\ud559\uc0dd\uc6a9 \ubaa8\ubc14\uc77c \uc571 \ubaa9\uc5c5",style:{position:"absolute",top:"80px",right:"130px",width:"auto",height:"300px",zIndex:1,opacity:.8}}),(0,Ai.jsxs)("div",{style:{paddingLeft:"10px",paddingRight:"10px",left:"230px",top:"85.72px",position:"absolute",overflow:"hidden",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"10px",display:"inline-flex",zIndex:2},children:[(0,Ai.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#835EEB",fontSize:"16px",fontFamily:"Pretendard",fontWeight:"700",lineHeight:"20.80px",wordWrap:"break-word"},children:"\uc120\uc0dd\ub2d8\uc6a9 \uc6f9\uc0ac\uc774\ud2b8"}),(0,Ai.jsxs)("div",{style:{flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"10px",display:"flex"},children:[(0,Ai.jsx)("div",{style:{width:"130px",paddingLeft:"15px",paddingRight:"15px",background:"#F3EFFD",overflow:"hidden",borderRadius:"50px",flexDirection:"column",justifyContent:"center",alignItems:"center",display:"flex"},children:(0,Ai.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#33373B",fontSize:"13px",fontFamily:"Pretendard",fontWeight:"400",lineHeight:"19.50px",wordWrap:"break-word"},children:"\ub9de\ucda4\ud615 \ubb38\uc81c \ucd9c\uc81c"})}),(0,Ai.jsx)("div",{style:{width:"130px",paddingLeft:"15px",paddingRight:"15px",background:"#F3EFFD",overflow:"hidden",borderRadius:"50px",flexDirection:"column",justifyContent:"center",alignItems:"center",display:"flex"},children:(0,Ai.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#33373B",fontSize:"13px",fontFamily:"Pretendard",fontWeight:"400",lineHeight:"19.50px",wordWrap:"break-word"},children:"\ud074\ub798\uc2a4 \ubc0f \ud559\uc0dd\uad00\ub9ac"})}),(0,Ai.jsx)("div",{style:{width:"130px",paddingLeft:"15px",paddingRight:"15px",background:"#F3EFFD",overflow:"hidden",borderRadius:"50px",flexDirection:"column",justifyContent:"center",alignItems:"center",display:"flex"},children:(0,Ai.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#33373B",fontSize:"13px",fontFamily:"Pretendard",fontWeight:"400",lineHeight:"19.50px",wordWrap:"break-word"},children:"AI \ucc44\uc810 \uacb0\uacfc \ud655\uc778"})}),(0,Ai.jsx)("div",{style:{width:"130px",paddingLeft:"15px",paddingRight:"15px",background:"#F3EFFD",overflow:"hidden",borderRadius:"50px",flexDirection:"column",justifyContent:"center",alignItems:"center",display:"flex"},children:(0,Ai.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#33373B",fontSize:"13px",fontFamily:"Pretendard",fontWeight:"400",lineHeight:"19.50px",wordWrap:"break-word"},children:"\uc2e4\ub825 \ubd84\uc11d \ub9ac\ud3ec\ud2b8"})})]})]}),(0,Ai.jsxs)("div",{style:{paddingLeft:"10px",paddingRight:"10px",paddingTop:"20px",paddingBottom:"20px",left:"30px",top:"733.72px",position:"absolute",overflow:"hidden",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"10px",display:"inline-flex",zIndex:2},children:[(0,Ai.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#835EEB",fontSize:"16px",fontFamily:"Pretendard",fontWeight:"700",lineHeight:"20.80px",wordWrap:"break-word"},children:"\ud559\uc0dd\uc6a9 \ubaa8\ubc14\uc77c \uc571"}),(0,Ai.jsxs)("div",{style:{flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"10px",display:"flex"},children:[(0,Ai.jsx)("div",{style:{width:"130px",paddingLeft:"15px",paddingRight:"15px",background:"#F3EFFD",overflow:"hidden",borderRadius:"50px",flexDirection:"column",justifyContent:"center",alignItems:"center",display:"flex"},children:(0,Ai.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#33373B",fontSize:"13px",fontFamily:"Pretendard",fontWeight:"400",lineHeight:"19.50px",wordWrap:"break-word"},children:"AI \ud78c\ud2b8 \uc2dc\uc2a4\ud15c"})}),(0,Ai.jsx)("div",{style:{width:"130px",paddingLeft:"15px",paddingRight:"15px",background:"#F3EFFD",overflow:"hidden",borderRadius:"50px",flexDirection:"column",justifyContent:"center",alignItems:"center",display:"flex"},children:(0,Ai.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#33373B",fontSize:"13px",fontFamily:"Pretendard",fontWeight:"400",lineHeight:"19.50px",wordWrap:"break-word"},children:"\uc2e4\uc2dc\uac04 \ucc44\uc810 \ud53c\ub4dc\ubc31"})}),(0,Ai.jsx)("div",{style:{width:"130px",paddingLeft:"15px",paddingRight:"15px",background:"#F3EFFD",overflow:"hidden",borderRadius:"50px",flexDirection:"column",justifyContent:"center",alignItems:"center",display:"flex"},children:(0,Ai.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#33373B",fontSize:"13px",fontFamily:"Pretendard",fontWeight:"400",lineHeight:"19.50px",wordWrap:"break-word"},children:"\uc7a5\ud559\uae08 \uc54c\ub9bc \uc218\uc2e0"})}),(0,Ai.jsx)("div",{style:{width:"130px",paddingLeft:"15px",paddingRight:"15px",background:"#F3EFFD",overflow:"hidden",borderRadius:"50px",flexDirection:"column",justifyContent:"center",alignItems:"center",display:"flex"},children:(0,Ai.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#33373B",fontSize:"13px",fontFamily:"Pretendard",fontWeight:"400",lineHeight:"19.50px",wordWrap:"break-word"},children:"\ub9de\ucda4\ud615 \ud559\uc2b5\uc9c0 \uc218\uc2e0"})})]})]})]})]}):window.innerWidth<=820?(0,Ai.jsxs)(Ai.Fragment,{children:[(0,Ai.jsxs)(Ja,{style:{position:"relative",top:0,left:0,width:"100%",zIndex:3,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",pointerEvents:"none",marginBottom:"0"},children:[(0,Ai.jsxs)(Ga,{style:{pointerEvents:"auto",fontSize:36,textAlign:"center"},children:["\uc6f9-\uc571 \uc5f0\ub3d9\uc73c\ub85c \uc644\uc131\ub418\ub294",(0,Ai.jsx)("br",{}),"\uad50\uc721 \uc2dc\uc2a4\ud15c"]}),(0,Ai.jsxs)(Qa,{style:{pointerEvents:"auto",fontSize:18,textAlign:"center",marginTop:16},children:["\uad50\uc0ac\ub294 \uc6f9\uc5d0\uc11c \uad00\ub9ac\ud558\uace0, \ud559\uc0dd\uc740 \uc571\uc73c\ub85c \ud559\uc2b5\ud558\ub294",(0,Ai.jsx)("br",{}),"\uc644\ubcbd\ud55c \uad50\uc721 \uc0dd\ud0dc\uacc4\ub97c \uacbd\ud5d8\ud558\uc138\uc694"]}),(0,Ai.jsxs)(Ka,{style:{pointerEvents:"auto",marginTop:24},children:[(0,Ai.jsxs)(Za,{href:"https://play.google.com/store/apps/details?id=com.iammathking&pcampaignid=web_share",target:"_blank",rel:"noopener noreferrer",children:[(0,Ai.jsx)(qa,{children:(0,Ai.jsx)("img",{src:"/Common/Google_Play_logo.svg",alt:"Google Play"})}),(0,Ai.jsx)(eo,{children:"Google Play"})]}),(0,Ai.jsxs)(Za,{href:"https://apps.apple.com/app/%EC%88%98%ED%95%99%EB%8C%80%EC%99%95-ai%EB%94%94%EC%A7%80%ED%84%B8%EB%AC%B8%EC%A0%9C%EC%A7%91/id1501165233",target:"_blank",rel:"noopener noreferrer",children:[(0,Ai.jsx)(qa,{children:(0,Ai.jsx)("img",{src:"/Common/App_Store_logo.svg",alt:"App Store"})}),(0,Ai.jsx)(eo,{children:"App Store"})]})]})]}),(0,Ai.jsxs)("div",{style:{position:"relative",width:"100%",margin:"0",padding:"0"},children:[(0,Ai.jsx)("img",{src:`/Body/mockups/mockup_tablet.png?v=${Date.now()}`,alt:"\uc6f9-\uc571 \uc5f0\ub3d9 mockup",style:{width:"100%",height:"auto",display:"block"}}),(0,Ai.jsxs)(Qo,{children:[(0,Ai.jsxs)(qo,{isVisible:!0,delay:0,style:{fontSize:28,marginBottom:8,textAlign:"right"},children:["\uc120\uc0dd\ub2d8\uc6a9",(0,Ai.jsx)("br",{}),"\uc6f9\uc0ac\uc774\ud2b8"]}),(0,Ai.jsx)(tl,{isVisible:!0,delay:0,style:{fontSize:14,padding:"6px 12px",borderRadius:16},children:"\ud074\ub798\uc2a4 \ubc0f \ud559\uc0dd\uad00\ub9ac"}),(0,Ai.jsx)(tl,{isVisible:!0,delay:0,style:{fontSize:14,padding:"6px 12px",borderRadius:16},children:"\ub9de\ucda4\ud615 \ubb38\uc81c \ucd9c\uc81c"}),(0,Ai.jsx)(tl,{isVisible:!0,delay:0,style:{fontSize:14,padding:"6px 12px",borderRadius:16},children:"AI \ucc44\uc810 \uacb0\uacfc \ud655\uc778"}),(0,Ai.jsx)(tl,{isVisible:!0,delay:0,style:{fontSize:14,padding:"6px 12px",borderRadius:16},children:"\uc2e4\ub825 \ubd84\uc11d \ub9ac\ud3ec\ud2b8"})]}),(0,Ai.jsxs)(Ko,{children:[(0,Ai.jsxs)(qo,{isVisible:!0,delay:0,style:{fontSize:28,marginBottom:8,textAlign:"left"},children:["\ud559\uc0dd\uc6a9",(0,Ai.jsx)("br",{}),"\ubaa8\ubc14\uc77c \uc571"]}),(0,Ai.jsx)(tl,{isVisible:!0,delay:0,style:{fontSize:14,padding:"6px 12px",borderRadius:16},children:"\ub9de\ucda4\ud615 \ud559\uc2b5\uc9c0 \uc218\uc2e0"}),(0,Ai.jsx)(tl,{isVisible:!0,delay:0,style:{fontSize:14,padding:"6px 12px",borderRadius:16},children:"AI \ud78c\ud2b8 \uc2dc\uc2a4\ud15c"}),(0,Ai.jsx)(tl,{isVisible:!0,delay:0,style:{fontSize:14,padding:"6px 12px",borderRadius:16},children:"\uc2e4\uc2dc\uac04 \ucc44\uc810 \ud53c\ub4dc\ubc31"}),(0,Ai.jsx)(tl,{isVisible:!0,delay:0,style:{fontSize:14,padding:"6px 12px",borderRadius:16},children:"\uc7a5\ud559\uae08 \uc54c\ub9bc \uc218\uc2e0"})]})]})]}):(0,Ai.jsxs)(Ai.Fragment,{children:[(0,Ai.jsxs)(Ja,{style:{position:"relative",top:0,left:0,width:"100%",zIndex:3,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",pointerEvents:"none",marginBottom:"50px"},children:[(0,Ai.jsxs)(Ga,{style:{pointerEvents:"auto"},children:["\uc6f9-\uc571 \uc5f0\ub3d9\uc73c\ub85c \uc644\uc131\ub418\ub294",(0,Ai.jsx)("br",{}),"\uad50\uc721 \uc2dc\uc2a4\ud15c"]}),(0,Ai.jsxs)(Qa,{style:{pointerEvents:"auto"},children:["\uad50\uc0ac\ub294 \uc6f9\uc5d0\uc11c \uad00\ub9ac\ud558\uace0, \ud559\uc0dd\uc740 \uc571\uc73c\ub85c \ud559\uc2b5\ud558\ub294",(0,Ai.jsx)("br",{}),"\uc644\ubcbd\ud55c \uad50\uc721 \uc0dd\ud0dc\uacc4\ub97c \uacbd\ud5d8\ud558\uc138\uc694"]}),(0,Ai.jsxs)(Ka,{style:{pointerEvents:"auto"},children:[(0,Ai.jsxs)(Za,{href:"https://play.google.com/store/apps/details?id=com.iammathking&pcampaignid=web_share",target:"_blank",rel:"noopener noreferrer",children:[(0,Ai.jsx)(qa,{children:(0,Ai.jsx)("img",{src:"/Common/Google_Play_logo.svg",alt:"Google Play"})}),(0,Ai.jsx)(eo,{children:"Google Play"})]}),(0,Ai.jsxs)(Za,{href:"https://apps.apple.com/app/%EC%88%98%ED%95%99%EB%8C%80%EC%99%95-ai%EB%94%94%EC%A7%80%ED%84%B8%EB%AC%B8%EC%A0%9C%EC%A7%91/id1501165233",target:"_blank",rel:"noopener noreferrer",children:[(0,Ai.jsx)(qa,{children:(0,Ai.jsx)("img",{src:"/Common/App_Store_logo.svg",alt:"App Store"})}),(0,Ai.jsx)(eo,{children:"App Store"})]})]})]}),(0,Ai.jsxs)(to,{style:{position:"relative",minHeight:"1400px",overflow:"hidden"},children:[(0,Ai.jsxs)(no,{children:[(0,Ai.jsx)(ao,{$isVisible:A[0],onClick:()=>window.open("https://class.iammathking.com","_blank"),children:(0,Ai.jsx)("img",{src:"/WebApp/integration/1.svg",alt:"\uc120\uc0dd\ub2d8\uc6a9 \uc6f9\uc0ac\uc774\ud2b8",style:{width:"auto",height:"var(--mockup-height-1, 550px)",cursor:"pointer",transition:"all 0.3s ease",filter:"drop-shadow(0 10px 20px rgba(131, 94, 235, 0.15))"},onMouseEnter:e=>{e.currentTarget.style.transform="scale(1.03)",e.currentTarget.style.filter="drop-shadow(0 15px 30px rgba(131, 94, 235, 0.3))"},onMouseLeave:e=>{e.currentTarget.style.transform="scale(1)",e.currentTarget.style.filter="drop-shadow(0 10px 20px rgba(131, 94, 235, 0.15))"}})}),(0,Ai.jsx)(oo,{$isVisible:A[1],onClick:()=>window.open("https://apps.apple.com/app/\uc218\ud559\ub300\uc655-ai\ub514\uc9c0\ud138\ubb38\uc81c\uc9d1/id1501165233","_blank"),children:(0,Ai.jsx)("img",{src:"/WebApp/integration/2.svg",alt:"\ud559\uc0dd\uc6a9 \ubaa8\ubc14\uc77c \uc571",style:{width:"auto",height:"var(--mockup-height-2, 550px)",cursor:"pointer",transition:"all 0.3s ease",filter:"drop-shadow(0 10px 20px rgba(131, 94, 235, 0.15))"},onMouseEnter:e=>{e.currentTarget.style.transform="scale(1.04)",e.currentTarget.style.filter="drop-shadow(0 15px 30px rgba(131, 94, 235, 0.3))"},onMouseLeave:e=>{e.currentTarget.style.transform="scale(1)",e.currentTarget.style.filter="drop-shadow(0 10px 20px rgba(131, 94, 235, 0.15))"}})}),(0,Ai.jsxs)(co,{isVisible:R,children:["\uc2e4\uc2dc\uac04",(0,Ai.jsx)("br",{}),"\ub3d9\uae30\ud654"]}),(0,Ai.jsx)(xo,{isVisible:D}),(0,Ai.jsx)(lo,{$isVisible:A[2],children:(0,Ai.jsx)("img",{src:"/WebApp/integration/3.svg",alt:"\ubaa8\ubc14\uc77c \uc571 \uc778\ud130\ud398\uc774\uc2a4",style:{width:"auto",height:"var(--mockup-height-3, 550px)",cursor:"pointer",transition:"all 0.3s ease",filter:"drop-shadow(0 8px 16px rgba(131, 94, 235, 0.12))"},onMouseEnter:e=>{e.currentTarget.style.transform="scale(1.03)",e.currentTarget.style.filter="drop-shadow(0 12px 24px rgba(131, 94, 235, 0.25))"},onMouseLeave:e=>{e.currentTarget.style.transform="scale(1)",e.currentTarget.style.filter="drop-shadow(0 8px 16px rgba(131, 94, 235, 0.12))"}})}),(0,Ai.jsx)(so,{$isVisible:A[3],onClick:()=>window.open("https://class.iammathking.com","_blank"),children:(0,Ai.jsx)("img",{src:"/WebApp/integration/4.svg",alt:"\ub370\uc2a4\ud06c\ud1b1 \uad00\ub9ac \uc2dc\uc2a4\ud15c",style:{width:"auto",height:"var(--mockup-height-4, 650px)",cursor:"pointer",transition:"all 0.3s ease",filter:"drop-shadow(0 10px 20px rgba(131, 94, 235, 0.15))"},onMouseEnter:e=>{e.currentTarget.style.transform="scale(1.02)",e.currentTarget.style.filter="drop-shadow(0 15px 30px rgba(131, 94, 235, 0.3))"},onMouseLeave:e=>{e.currentTarget.style.transform="scale(1)",e.currentTarget.style.filter="drop-shadow(0 10px 20px rgba(131, 94, 235, 0.15))"}})})]}),(0,Ai.jsx)(ho,{children:(0,Ai.jsxs)(Zo,{style:{alignItems:"flex-end",textAlign:"right"},children:[(0,Ai.jsx)(qo,{isVisible:I[0],delay:0,style:{fontSize:28},children:"\uc120\uc0dd\ub2d8\uc6a9 \uc6f9\uc0ac\uc774\ud2b8"}),(0,Ai.jsxs)(el,{style:{alignItems:"flex-end"},children:[(0,Ai.jsx)(tl,{isVisible:I[0],delay:0,children:"\ud074\ub798\uc2a4 \ubc0f \ud559\uc0dd\uad00\ub9ac"}),(0,Ai.jsx)(tl,{isVisible:I[1],delay:150,children:"\ub9de\ucda4\ud615 \ubb38\uc81c \ucd9c\uc81c"}),(0,Ai.jsx)(tl,{isVisible:I[2],delay:300,children:"AI \ucc44\uc810 \uacb0\uacfc \ud655\uc778"}),(0,Ai.jsx)(tl,{isVisible:I[3],delay:450,children:"\uc2e4\ub825 \ubd84\uc11d \ub9ac\ud3ec\ud2b8"})]})]})}),(0,Ai.jsx)(mo,{children:(0,Ai.jsxs)(Zo,{children:[(0,Ai.jsx)(qo,{isVisible:B[0],delay:0,style:{fontSize:28},children:"\ud559\uc0dd\uc6a9 \ubaa8\ubc14\uc77c \uc571"}),(0,Ai.jsxs)(el,{children:[(0,Ai.jsx)(tl,{isVisible:B[0],delay:0,children:"\ub9de\ucda4\ud615 \ud559\uc2b5\uc9c0 \uc218\uc2e0"}),(0,Ai.jsx)(tl,{isVisible:B[1],delay:150,children:"AI \ud78c\ud2b8 \uc2dc\uc2a4\ud15c"}),(0,Ai.jsx)(tl,{isVisible:B[2],delay:300,children:"\uc2e4\uc2dc\uac04 \ucc44\uc810 \ud53c\ub4dc\ubc31"}),(0,Ai.jsx)(tl,{isVisible:B[3],delay:450,children:"\uc7a5\ud559\uae08 \uc54c\ub9bc \uc218\uc2e0"})]})]})})]})]})})}),(0,Ai.jsx)(go,{children:(0,Ai.jsxs)(bo,{children:[(0,Ai.jsx)(wo,{children:(0,Ai.jsxs)(Io,{className:g,children:[(0,Ai.jsx)(To,{isVisible:"visible"===g,children:(0,Ai.jsxs)(yo,{children:[U[p%U.length].title.highlight,(0,Ai.jsx)("br",{}),U[p%U.length].title.normal]})}),(0,Ai.jsx)(Bo,{isVisible:"visible"===g,children:(0,Ai.jsx)(vo,{children:(0,Ai.jsx)("span",{dangerouslySetInnerHTML:{__html:U[p%U.length].quote}})})}),(0,Ai.jsxs)(_o,{children:[(0,Ai.jsx)(Po,{}),(0,Ai.jsx)(Fo,{isVisible:"visible"===g,children:(0,Ai.jsx)(ko,{children:U[p%U.length].name.split("<br/>").map((e,t)=>(0,Ai.jsx)("span",{dangerouslySetInnerHTML:{__html:e}},t))})})]})]})}),(0,Ai.jsx)(jo,{children:(0,Ai.jsx)(Ao,{children:(0,Ai.jsxs)(Oo,{style:{transform:`translateX(-${100*p}%)`,transition:x?"transform 1s ease-in-out":"none"},children:[U.map((e,t)=>(0,Ai.jsx)(Ro,{children:(0,Ai.jsxs)(Eo,{href:e.videoUrl,target:"_blank",rel:"noopener noreferrer",children:[(0,Ai.jsx)(So,{src:e.thumbnailUrl,alt:e.name}),(0,Ai.jsx)(zo,{children:(0,Ai.jsx)(Co,{children:"\u25b6"})})]})},`original-${t}`)),(0,Ai.jsx)(Ro,{children:(0,Ai.jsxs)(Eo,{href:U[0].videoUrl,target:"_blank",rel:"noopener noreferrer",children:[(0,Ai.jsx)(So,{src:U[0].thumbnailUrl,alt:U[0].name}),(0,Ai.jsx)(zo,{children:(0,Ai.jsx)(Co,{children:"\u25b6"})})]})},"cloned-first")]})})})]})})]})}),Xa=Yt.section`
  width: 100%;
  background: white;
  padding: 192px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 128px;
  overflow: hidden;
  scroll-snap-align: start;
  position: relative;
  @media (max-width: 1366px) and (min-width: 601px) {
    padding: 60px 0; /* 태블릿에서 좌우 패딩 제거 */
    gap: 60px;
  }
  @media (max-width: 600px) {
    padding: 80px 0 20px 0;
    gap: 60px;
  }
`,Ja=Yt.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  
  /* 1920px에서 1600px까지 점진적으로 축소 */
  @media (max-width: 1920px) and (min-width: 1601px) {
    gap: 36px;
  }
  
  /* 1600px에서 1366px까지 점진적으로 축소 */
  @media (max-width: 1600px) and (min-width: 1367px) {
    gap: 32px;
  }
  
  /* 1366px에서 1025px까지 점진적으로 축소 */
  @media (max-width: 1366px) and (min-width: 1025px) {
    gap: 28px;
  }
  
  /* 1025px에서 820px까지 점진적으로 축소 */
  @media (max-width: 1024px) and (min-width: 821px) {
    gap: 24px;
  }
  
  @media (max-width: 600px) {
    gap: 24px;
  }
`,Ga=Yt.div`
  width: 100%;
  max-width: 800px;
  text-align: center;
  color: #33373B;
  font-size: 48px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 67.20px;
  word-wrap: break-word;
  
  /* 1920px에서 1600px까지 점진적으로 축소 */
  @media (max-width: 1920px) and (min-width: 1601px) {
    font-size: 44px;
    line-height: 62px;
  }
  
  /* 1600px에서 1366px까지 점진적으로 축소 */
  @media (max-width: 1600px) and (min-width: 1367px) {
    font-size: 40px;
    line-height: 56px;
  }
  
  /* 1366px에서 1025px까지 점진적으로 축소 */
  @media (max-width: 1366px) and (min-width: 1025px) {
    font-size: 36px;
    line-height: 50px;
  }
  
  /* 1025px에서 820px까지 점진적으로 축소 */
  @media (max-width: 1024px) and (min-width: 821px) {
    font-size: 32px;
    line-height: 44px;
  }
  
  @media (max-width: 900px) {
    font-size: 36px;
    line-height: 50px;
  }
  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 38px;
  }
`,Qa=Yt.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #858585;
  font-size: 28px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 36.40px;
  word-wrap: break-word;
  
  /* 1920px에서 1600px까지 점진적으로 축소 */
  @media (max-width: 1920px) and (min-width: 1601px) {
    font-size: 26px;
    line-height: 34px;
  }
  
  /* 1600px에서 1366px까지 점진적으로 축소 */
  @media (max-width: 1600px) and (min-width: 1367px) {
    font-size: 24px;
    line-height: 32px;
  }
  
  /* 1366px에서 1025px까지 점진적으로 축소 */
  @media (max-width: 1366px) and (min-width: 1025px) {
    font-size: 22px;
    line-height: 30px;
  }
  
  /* 1025px에서 820px까지 점진적으로 축소 */
  @media (max-width: 1024px) and (min-width: 821px) {
    font-size: 20px;
    line-height: 28px;
  }
  
  @media (max-width: 900px) {
    font-size: 22px;
    line-height: 30px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
    line-height: 24px;
  }
`,Ka=Yt.div`
  justify-content: center;
  align-items: center;
  gap: 12px;
  display: flex;
  @media (max-width: 600px) {
    gap: 8px;
  }
`,Za=Yt.a`
  padding: 8px 16px;
  background: #33373B;
  overflow: hidden;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: flex;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 140px; /* Google Play 텍스트에 맞춰 늘림 */
  text-decoration: none;
  
  &:hover {
    background: #835EEB;
    transform: translateY(-2px);
  }
  
  @media (max-width: 600px) {
    padding: 6px 12px;
    width: 110px; /* 모바일에서도 비례적으로 늘림 */
  }
`,qa=Yt.div`
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  display: flex;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  @media (max-width: 600px) {
    width: 14px;
    height: 14px;
  }
`,eo=Yt.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 21px;
  word-wrap: break-word;
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 18px;
  }
`,to=Yt.div`
  position: relative;
  width: 100%;
  padding: 0;
  display: block;
  min-height: 900px;
  overflow: hidden;
  
  /* 웹버전 목업 고정 크기 - 스케일링 없음 */
  width: 100%;
  max-width: none;
  
  /* CSS 변수로 동적 위치 조정 */
  --scale-factor: 1;
  --teacher-top: 80px;
  --teacher-right: 50px;
  --student-left: 50px;
  --mockup-left: -50px;
  --mockup-right: -280px;
  --mockup-center-top: 350px;
  --mockup-height-1: 550px;
  --mockup-height-2: 550px;
  --mockup-height-3: 550px;
  --mockup-height-4: 650px;
  
  /* 1920px에서 1600px까지 점진적으로 축소 */
  @media (max-width: 1920px) and (min-width: 1601px) {
    --scale-factor: 0.95;
    --teacher-top: 70px;
    --teacher-right: 45px;
    --student-left: 45px;
    --mockup-left: -45px;
    --mockup-right: -260px;
    --mockup-center-top: 333px;
    --mockup-height-1: 523px;
    --mockup-height-2: 523px;
    --mockup-height-3: 523px;
    --mockup-height-4: 618px;
  }
  
  /* 1600px에서 1366px까지 점진적으로 축소 */
  @media (max-width: 1600px) and (min-width: 1367px) {
    --scale-factor: 0.85;
    --teacher-top: 60px;
    --teacher-right: 40px;
    --student-left: 40px;
    --mockup-left: -40px;
    --mockup-right: -240px;
    --mockup-center-top: 298px;
    --mockup-height-1: 468px;
    --mockup-height-2: 468px;
    --mockup-height-3: 468px;
    --mockup-height-4: 553px;
  }
  
  /* 1366px에서 1025px까지 점진적으로 축소 */
  @media (max-width: 1366px) and (min-width: 1025px) {
    --scale-factor: 0.7;
    --teacher-top: 50px;
    --teacher-right: 35px;
    --student-left: 35px;
    --mockup-left: -35px;
    --mockup-right: -220px;
    --mockup-center-top: 245px;
    --mockup-height-1: 385px;
    --mockup-height-2: 385px;
    --mockup-height-3: 385px;
    --mockup-height-4: 455px;
  }
  
  /* 1025px에서 820px까지 점진적으로 축소 */
  @media (max-width: 1024px) and (min-width: 821px) {
    --scale-factor: 0.6;
    --teacher-top: 40px;
    --teacher-right: 30px;
    --student-left: 30px;
    --mockup-left: -30px;
    --mockup-right: -200px;
    --mockup-center-top: 210px;
    --mockup-height-1: 330px;
    --mockup-height-2: 330px;
    --mockup-height-3: 330px;
    --mockup-height-4: 390px;
  }
  
  /* 추가 안전장치: 더 작은 화면에서 칩 위치 강제 조정 */
  @media (max-width: 1200px) and (min-width: 1025px) {
    --teacher-right: 25px;
    --student-left: 25px;
  }
  
  @media (max-width: 1100px) and (min-width: 1025px) {
    --teacher-right: 20px;
    --student-left: 20px;
  }
  
  @media (max-width: 1000px) and (min-width: 821px) {
    --teacher-right: 15px;
    --student-left: 15px;
  }
  
  @media (max-width: 900px) and (min-width: 821px) {
    --teacher-right: 10px;
    --student-left: 10px;
  }
  
  /* 820px 이하에서 작은 화면용 레이아웃 */
  @media (max-width: 820px) and (min-width: 601px) {
    --scale-factor: 0.5;
    --teacher-top: 20px;
    --teacher-right: 20px;
    --student-left: 20px;
    --mockup-left: -20px;
    --mockup-right: -150px;
    --mockup-center-top: 175px;
    --mockup-height-1: 275px;
    --mockup-height-2: 275px;
    --mockup-height-3: 275px;
    --mockup-height-4: 325px;
  }
  
  /* 600px 이하에서 데스크탑 버전 숨기기 */
  @media (max-width: 600px) {
    display: none;
  }
  
  /* 최후의 안전장치: 매우 작은 화면에서 칩 위치 강제 조정 */
  @media (max-width: 850px) and (min-width: 821px) {
    --teacher-right: 5px;
    --student-left: 5px;
  }
  
  @media (max-width: 830px) and (min-width: 821px) {
    --teacher-right: 0px;
    --student-left: 0px;
  }
  
  /* 820px 이하에서 작은 화면용 높이 조정 */
  @media (max-width: 820px) and (min-width: 601px) {
    min-height: 600px;
  }
  
  @media (max-width: 600px) {
    min-height: 0;
    padding: 0;
    width: 100%;
    min-width: auto;
    transform: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,no=Yt.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,io=Yt.div`
  position: absolute;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    z-index: 15;
  }
`,ro=Yt(io)`
  opacity: ${e=>e.$isVisible?1:0};
  transform: translateY(${e=>e.$isVisible?"0":"30px"});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${e=>e.delay||0}ms;
  
  /* 600px 이하에서 웹버전 목업 숨기기 */
  @media (max-width: 600px) {
    display: none;
  }
`,ao=Yt(ro)`
  position: absolute;
  top: calc(155px * var(--scale-factor, 1));
  left: var(--mockup-left, -50px);
  z-index: 12;
`,oo=Yt(ro)`
  position: absolute;
  top: calc(750px * var(--scale-factor, 1));
  left: calc(410px * var(--scale-factor, 1));
  z-index: 12;
`,lo=Yt(ro)`
  position: absolute;
  top: var(--mockup-center-top, 350px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 11;
`,so=Yt(ro)`
  position: absolute;
  top: calc(400px * var(--scale-factor, 1));
  right: var(--mockup-right, -280px);
  z-index: 11;
`,co=Yt.div`
  position: absolute;
  top: 200px;
  left: calc(50% - 10px);
  transform: translateX(-50%);
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #835EEB;
  font-size: 42px;
  font-family: 'Godo B';
  font-weight: 400;
  line-height: 54px;
  word-wrap: break-word;
  z-index: 10;
  text-align: center;
  opacity: ${e=>e.isVisible?1:0};
  transform: translateX(-50%) ${e=>e.isVisible?"scale(1)":"scale(0.8)"};
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* 820px 이하에서 작은 화면용 크기 조정 */
  @media (max-width: 820px) and (min-width: 601px) {
    font-size: 32px;
    line-height: 42px;
    top: 100px;
  }
  
  /* 600px 이하에서 웹버전 목업 숨기기 */
  @media (max-width: 600px) {
    display: none;
  }
`,po=Yt.div`
  left: 50%; 
  top: calc(50% - 30px); 
  transform: translate(-50%, -50%);
  position: absolute; 
  justify-content: center; 
  display: flex; 
  flex-direction: column; 
  color: #835EEB; 
  font-size: 32px; 
  font-family: 'Godo B'; 
  font-weight: 400; 
  line-height: 41.60px; 
  word-wrap: break-word;
  z-index: 1;
  opacity: ${e=>e.isVisible?1:0};
  transform: translate(-50%, -50%) ${e=>e.isVisible?"scale(1)":"scale(0.8)"};
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* 600px 초과에서 모바일 버전 숨기기 */
  @media (min-width: 601px) {
    display: none;
  }
`,uo=Yt.div`
  position: absolute;
  top: calc(50% - 30px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 500px;
  z-index: -1;
  opacity: ${e=>e.isVisible?1:0};
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* 기본 스타일 */
  background: url('/WebApp/integration/circle.svg') no-repeat center;
  background-size: contain;
  
  /* 애니메이션 조합 */
  animation: ${ha} 3s ease-in-out infinite,
             ${fa} 2s ease-in-out infinite;
  
  /* 호버 효과 */
  &:hover {
    animation: ${xa} 1s ease-in-out infinite;
  }
  
  /* 600px 초과에서 모바일 버전 숨기기 */
  @media (min-width: 601px) {
    display: none;
  }
`,xo=Yt.div`
  position: absolute;
  top: var(--mockup-center-top, 350px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 600px;
  z-index: 10;
  opacity: ${e=>e.isVisible?1:0};
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* 기본 스타일 */
  background: url('/WebApp/integration/circle.svg') no-repeat center;
  background-size: contain;
  
  /* 애니메이션 조합 */
  animation: ${ha} 3s ease-in-out infinite,
             ${fa} 2s ease-in-out infinite;
  
  /* 호버 효과 */
  &:hover {
    animation: ${xa} 1s ease-in-out infinite;
  }
  
  /* 820px 이하에서 데스크탑 버전 숨기기 */
  @media (max-width: 820px) {
    display: none;
  }
  
  /* 반응형 크기 조정 */
  @media (max-width: 1920px) and (min-width: 1601px) {
    width: 380px;
    height: 570px;
  }
  
  @media (max-width: 1600px) and (min-width: 1367px) {
    width: 340px;
    height: 510px;
  }
  
  @media (max-width: 1366px) and (min-width: 1025px) {
    width: 280px;
    height: 420px;
  }
  
  @media (max-width: 1024px) and (min-width: 821px) {
    width: 240px;
    height: 360px;
  }
`,fo=(Yt.div`
  display: none;
  
  @media (max-width: 820px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
  }
`,Yt.img`
  max-width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(131, 94, 235, 0.15));
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
    filter: drop-shadow(0 15px 30px rgba(131, 94, 235, 0.25));
  }
`,Yt.div`
  /* 1920px에서 1600px까지 점진적으로 축소 */
  @media (max-width: 1920px) and (min-width: 1601px) {
    transform: scale(0.95);
    transform-origin: center center;
  }
  
  /* 1600px에서 1366px까지 점진적으로 축소 */
  @media (max-width: 1600px) and (min-width: 1367px) {
    transform: scale(0.9);
    transform-origin: center center;
  }
  
  /* 1366px에서 1025px까지 점진적으로 축소 */
  @media (max-width: 1366px) and (min-width: 1025px) {
    transform: scale(0.75);
    transform-origin: center center;
  }
  
  /* 1025px에서 820px까지 점진적으로 축소 */
  @media (max-width: 1024px) and (min-width: 821px) {
    transform: scale(0.65);
    transform-origin: center center;
  }
`),ho=Yt(fo)`
  position: absolute;
  top: var(--teacher-top, 80px);
  right: var(--teacher-right, 50px);
  z-index: 10;
  transform: scale(var(--scale-factor, 1));
  transform-origin: top right;
  
  /* 추가 안전장치: 칩이 목업과 겹치지 않도록 최소 거리 보장 */
  @media (max-width: 1200px) {
    right: max(var(--teacher-right, 50px), 25px);
  }
  
  @media (max-width: 1100px) {
    right: max(var(--teacher-right, 50px), 20px);
  }
  
  @media (max-width: 1000px) {
    right: max(var(--teacher-right, 50px), 15px);
  }
  
  @media (max-width: 900px) {
    right: max(var(--teacher-right, 50px), 10px);
  }
  
  /* 820px 이하에서 작은 화면용 조정 */
  @media (max-width: 820px) and (min-width: 601px) {
    right: max(var(--teacher-right, 50px), 15px);
    transform: scale(0.8);
  }
`,mo=Yt(fo)`
  position: absolute;
  top: calc(var(--mockup-center-top, 350px) + var(--mockup-height-3, 550px) + 20px);
  left: var(--student-left, 50px);
  z-index: 10;
  transform: scale(var(--scale-factor, 1));
  transform-origin: top left;
  
  /* 추가 안전장치: 칩이 목업과 겹치지 않도록 최소 거리 보장 */
  @media (max-width: 1200px) {
    left: max(var(--student-left, 50px), 25px);
  }
  
  @media (max-width: 1100px) {
    left: max(var(--student-left, 50px), 20px);
  }
  
  @media (max-width: 1000px) {
    left: max(var(--student-left, 50px), 15px);
  }
  
  @media (max-width: 900px) {
    left: max(var(--student-left, 50px), 10px);
  }
  
  /* 820px 이하에서 작은 화면용 조정 */
  @media (max-width: 820px) and (min-width: 601px) {
    left: max(var(--student-left, 50px), 15px);
    transform: scale(0.8);
  }
`,go=Yt.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  min-height: 800px;
  padding: 80px 0;
  scroll-snap-align: start;
  @media (max-width: 600px) {
    min-height: 700px;
    padding: 60px 0;
  }
`,bo=Yt.div`
  width: 1440px;
  height: 620px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 64px;
  @media (max-width: 1500px) {
    width: 100%;
    min-width: 0;
    padding: 0 16px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    height: auto;
    gap: 40px;
    align-items: center;
  }
`,wo=Yt.div`
  width: 488px;
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0;
  text-align: left;
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    align-items: center;
    padding: 20px;
    gap: 8px;
    text-align: center;
  }
`,yo=Yt.div`
  color: #33373B;
  font-size: 48px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 62.4px;
  word-break: break-word;
  margin-bottom: 36px;
  text-align: left;
  width: 100%;
  @media (max-width: 900px) {
    text-align: center;
  }
  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 20px;
    text-align: center;
  }
`,vo=Yt.div`
  color: #33373B;
  font-size: 22px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 36px;
  word-break: break-word;
  margin-bottom: 32px;
  text-align: left;
  width: 100%;
  @media (max-width: 900px) {
    text-align: center;
  }
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
    text-align: center;
  }
`,ko=Yt.div`
  color: #835EEB;
  font-size: 20px;
  font-family: Pretendard;
  line-height: 26px;
  word-break: break-word;
  font-weight: 700;
  text-align: left;
  width: 100%;
  span { display: block; }
  span:last-child { font-weight: 400; }
  @media (max-width: 900px) {
    text-align: center;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 18px;
    text-align: center;
  }
`,jo=Yt.div`
  width: 864px;
  height: 520px;
  position: relative;
  overflow: hidden;
  outline: 6px #835EED solid;
  background: #F8F6FF;
  border-radius: 6px;
  @media (max-width: 900px) {
    width: 100%;
    max-width: 864px;
    height: calc(100vw * 9 / 16);
    max-height: 450px;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: calc(100vw * 9 / 16);
    max-height: 350px;
  }
`,Eo=Yt.a`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`,So=Yt.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: #f0f0f0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #f5f5f5 0%, #eeeeee 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,zo=Yt.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  ${Eo}:hover & {
    background: rgba(0, 0, 0, 0.8);
    transform: translate(-50%, -50%) scale(1.1);
  }
`,Co=Yt.span`
  color: white;
  font-size: 32px;
  font-weight: bold;
  margin-left: 4px;
`,_o=Yt.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 1366px) and (min-width: 601px) {
    justify-content: center; /* 태블릿에서 가운데 정렬 */
  }
  @media (max-width: 900px) {
    align-items: flex-start;
    justify-content: center; /* 모바일에서 가운데 정렬 */
  }
`,Po=Yt.div`
  width: 3px;
  min-width: 3px;
  height: 52px;
  background: #835EEB;
  margin-right: 16px;
  border-radius: 2px;
  @media (max-width: 1366px) and (min-width: 601px) {
    display: none; /* 태블릿에서 막대 숨기기 */
  }
  @media (max-width: 900px) {
    display: none; /* 모바일에서 막대 숨기기 */
    height: 20px;
    margin-top: 20px;
  }
  @media (max-width: 600px) {
    display: none; /* 모바일에서 막대 숨기기 */
    height: 16px;
    margin-top: 18px;
  }
`,Io=Yt.div`
  opacity: 0;
  transform: translateY(20px);
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  &.slide-out {
    animation: ${ga} 0.4s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;
  }
  
  &.slide-in {
    animation: ${ma} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }
`,To=Yt.div`
  opacity: ${e=>e.isVisible?1:0};
  transform: translateY(${e=>e.isVisible?0:"30px"}) scale(${e=>e.isVisible?1:.95});
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-delay: 0.1s;
`,Bo=Yt.div`
  opacity: ${e=>e.isVisible?1:0};
  transform: translateY(${e=>e.isVisible?0:"25px"}) scale(${e=>e.isVisible?1:.98});
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-delay: 0.2s;
`,Fo=Yt.div`
  opacity: ${e=>e.isVisible?1:0};
  transform: translateY(${e=>e.isVisible?0:"20px"}) scale(${e=>e.isVisible?1:.97});
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-delay: 0.3s;
`,Ao=Yt.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 6px; /* ExperienceImageBlock의 outline과 일치 */
  contain: layout style paint;
  isolation: isolate;
`,Oo=Yt.div`
  display: flex;
  height: 100%;
  will-change: transform;
  position: relative;
`,Ro=Yt.div`
  width: 100%; /* VideoSlider와 같은 크기 */
  height: 100%;
  flex-shrink: 0;
  position: relative;
`,No=Yt.div`
  width: 1280px;
  margin: 0 auto 150px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 150px;
  padding: 0;
  scroll-snap-type: y mandatory;
  
  @media (max-width: 1366px) and (min-width: 601px) {
    display: none; /* 태블릿에서는 IntegratedSection 사용 */
  }
  
  @media (max-width: 600px) {
    display: flex; /* 모바일에서는 다시 표시 */
    width: 100%;
    margin: 0 auto 80px auto;
    gap: 40px;
    padding: 0 20px;
  }
`,Do=Yt.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;
  overflow: visible;
  padding-left: 0px;
  scroll-snap-align: center;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  @media (max-width: 375px) {
    width: 343px;
    gap: 16px;
    align-items: center;
    justify-content: center;
  }
`,Lo=Yt(Do)`
  opacity: 0;
  &.visible {
    animation: ${sa} 0.8s ease forwards;
  }
`,$o=Yt.div`
  width: 500px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  margin: 0;
  margin-left: 0px;
  opacity: ${e=>e.isVisible?1:.3};
  transform: translateX(${e=>e.isVisible?"0":"-30px"}) scale(${e=>e.isVisible?"1.05":"1"});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  filter: none;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 0;
    opacity: 1;
    transform: none;
    text-align: center;
  }
  @media (max-width: 375px) {
    width: 343px;
    gap: 8px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`,Mo=Yt.div`
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  color: #835EEB;
  font-size: 40px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 52px;
  word-wrap: break-word;
  text-align: left;
  width: 100%;
  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 1.2;
  }
  @media (max-width: 600px) {
    text-align: center !important;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #835EEB;
    font-size: 18px;
    font-family: Pretendard;
    font-weight: 700;
    line-height: 22px;
    word-wrap: break-word;
    white-space: normal;
    width: 100%;
    
    br {
      display: block;
    }
  }
`,Uo=Yt.span`
  display: inline-block;
  width: fit-content;
  background: linear-gradient(180deg, transparent 0%, transparent 50%, #F3EFFD 50%, #F3EFFD 100%);
  background-size: 0% 50%;
  background-repeat: no-repeat;
  background-position: left bottom;
  box-sizing: border-box;
  ${e=>e.isVisible&&Ht`
    animation: ${ua} 1.5s ease-out 0.3s forwards;
  `}
  @media (max-width: 600px) {
    display: inline-block;
    width: fit-content;
    background: linear-gradient(180deg, transparent 0%, transparent 50%, #F3EFFD 50%, #F3EFFD 100%);
    background-size: 0% 50%;
    background-repeat: no-repeat;
    background-position: left bottom;
    box-sizing: border-box;
    text-align: center;
    ${e=>e.isVisible&&Ht`
      animation: ${ua} 1.5s ease-out 0.3s forwards;
    `}
  }
`,Ho=Yt.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  background: #F3EFFD;
  overflow: hidden;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  width: fit-content;
  height: 26px;
  @media (max-width: 600px) {
    width: fit-content;
    height: 18px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 3px;
    padding-bottom: 3px;
    background: #F3EFFD;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
  }
`,Vo=Yt.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #835EEB;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 26px;
  word-wrap: break-word;
  @media (max-width: 600px) {
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    color: #835EEB;
    font-size: 10px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 13px;
    word-wrap: break-word;
  }
`,Wo=Yt.div`
  opacity: 0.6;
  color: #4B4B4B;
  font-size: 24px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 34.8px;
  text-align: left;
  width: 100%;
  max-width: 450px;
  @media (max-width: 600px) {
    opacity: 0.60;
    text-align: center !important;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #4B4B4B;
    font-size: 12px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 17.40px;
    word-wrap: break-word;
    max-width: 100%;
  }
`,Yo=Yt.div`
  width: 100%;
  max-width: 730px;
  aspect-ratio: 16 / 9; /* 16:9 비율 유지 */
  background: #F8F6FF !important;
  border-radius: 10px;
  overflow: hidden;
  outline: none;
  border: 2px solid #835EEB;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transform: scale(${e=>e.isZoomed?"1.15":"1"});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center center;
  margin: 0;
  filter: none;
  /* 배경색이 어떤 경우에도 변하지 않도록 강제 */
  &::before, &::after {
    background: transparent !important;
  }
  @media (max-width: 600px) {
    width: 100%;
    max-width: 300px;
    position: relative;
    background: #835EEB;
    border: 1px #835EEB solid;
    transform: none;
    margin: 0 auto;
  }
  @media (max-width: 375px) {
    max-width: 280px;
    border-radius: 8px;
  }
`,Xo=Yt.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 1366px) and (min-width: 601px) {
    gap: 30px;
    padding: 0 40px;
  }
`,Jo=Yt.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  
  @media (max-width: 1366px) and (min-width: 601px) {
    max-width: 600px;
    margin: 0 auto;
  }
`,Go=Yt.div`
  width: 100%;
  display: flex;
  justify-content: center;
  transition: ${e=>e.noTransition?"none":"transform 1.2s ease-in-out"};
  flex-shrink: 0;
  
  @media (max-width: 1366px) and (min-width: 601px) {
    padding: 0 20px;
  }
`,Qo=Yt.div`
  position: absolute;
  top: 8%;
  right: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  
  @media (min-width: 1025px) and (max-width: 1366px) {
    top: calc(8% - 500px);
  }
`,Ko=Yt.div`
  position: absolute;
  bottom: 15%;
  left: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  
  @media (min-width: 1025px) and (max-width: 1366px) {
    bottom: calc(15% - 500px);
  }
`,Zo=(Yt.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  padding: 48px 0 0 0;
  box-sizing: border-box;
  
  /* 1600px에서 1366px까지 점진적으로 축소 */
  @media (max-width: 1600px) and (min-width: 1367px) {
    transform: scale(0.9);
    transform-origin: center center;
    gap: 36px;
  }
  
  @media (max-width: 1366px) and (min-width: 1025px) {
    transform: scale(0.75);
    transform-origin: center center;
    gap: 30px;
  }
  
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 32px;
    padding: 32px 4vw 0 4vw;
    align-items: stretch;
    transform: none;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 40px;
    padding: 24px 0 0 0;
    align-items: center;
    transform: none;
  }
`,Yt.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  min-width: 220px;
  
  /* 1600px에서 1366px까지 점진적으로 축소 */
  @media (max-width: 1600px) and (min-width: 1367px) {
    gap: 16px;
    min-width: 200px;
  }
  
  @media (max-width: 1366px) and (min-width: 1025px) {
    gap: 14px;
    min-width: 180px;
  }
  
  @media (max-width: 600px) {
    align-items: center !important;
    text-align: center !important;
    min-width: 0;
    width: 100%;
    gap: 14px;
  }
`),qo=Yt.div`
  color: #835EEB;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 8px;
  white-space: normal;
  opacity: ${e=>e.isVisible?1:0};
  transform: ${e=>e.isVisible?"translateY(0)":"translateY(20px)"};
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${e=>e.delay||0}ms;
  
  /* 1920px에서 1600px까지 점진적으로 축소 */
  @media (max-width: 1920px) and (min-width: 1601px) {
    font-size: 34px;
  }
  
  /* 1600px에서 1366px까지 점진적으로 축소 */
  @media (max-width: 1600px) and (min-width: 1367px) {
    font-size: 32px;
  }
  
  /* 1366px에서 1025px까지 점진적으로 축소 */
  @media (max-width: 1366px) and (min-width: 1025px) {
    font-size: 28px;
  }
  
  /* 1025px에서 820px까지 점진적으로 축소 */
  @media (max-width: 1024px) and (min-width: 821px) {
    font-size: 24px;
  }
  
  @media (max-width: 600px) {
    font-size: 26px;
    margin-bottom: 6px;
  }
`,el=Yt.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  /* 1920px에서 1600px까지 점진적으로 축소 */
  @media (max-width: 1920px) and (min-width: 1601px) {
    gap: 9px;
  }
  
  /* 1600px에서 1366px까지 점진적으로 축소 */
  @media (max-width: 1600px) and (min-width: 1367px) {
    gap: 9px;
  }
  
  /* 1366px에서 1025px까지 점진적으로 축소 */
  @media (max-width: 1366px) and (min-width: 1025px) {
    gap: 8px;
  }
  
  /* 1025px에서 820px까지 점진적으로 축소 */
  @media (max-width: 1024px) and (min-width: 821px) {
    gap: 7px;
  }
  
  @media (max-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px 8px;
  }
`,tl=Yt.div`
  background: #F3EFFD;
  color: #835EEB;
  font-size: 22px;
  font-weight: 600;
  padding: 10px 24px;
  border-radius: 20px;
  display: inline-block;
  width: max-content;
  opacity: ${e=>e.isVisible?1:0};
  transform: ${e=>e.isVisible?"translateY(0)":"translateY(20px)"};
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${e=>e.delay||0}ms;
  
  /* 1920px에서 1600px까지 점진적으로 축소 */
  @media (max-width: 1920px) and (min-width: 1601px) {
    font-size: 21px;
    padding: 9px 23px;
  }
  
  /* 1600px에서 1366px까지 점진적으로 축소 */
  @media (max-width: 1600px) and (min-width: 1367px) {
    font-size: 20px;
    padding: 9px 22px;
  }
  
  /* 1366px에서 1025px까지 점진적으로 축소 */
  @media (max-width: 1366px) and (min-width: 1025px) {
    font-size: 18px;
    padding: 8px 20px;
  }
  
  /* 1025px에서 820px까지 점진적으로 축소 */
  @media (max-width: 1024px) and (min-width: 821px) {
    font-size: 16px;
    padding: 7px 18px;
  }
  
  @media (max-width: 600px) {
    font-size: 15px;
    padding: 5px 12px;
    border-radius: 12px;
  }
`,nl=Ya,il=Yt.img`
  width: 120px;
  height: 40px;
  object-fit: contain;
  opacity: ${e=>e.visible?1:0};
  transform: translateY(${e=>e.visible?"0":"12px"});
  transition: opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1);
  
  @media (max-width: 600px) {
    width: 80px;
    height: 28px;
  }
`,rl=Yt.div`
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  scroll-behavior: smooth;
  @media (max-width: 600px) {
    scroll-snap-type: none;
    -webkit-overflow-scrolling: touch;
    overflow-y: auto;
    height: auto;
  }
`,al=Yt.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  scroll-snap-align: start;
  @media (max-width: 600px) {
    width: 100%;
    min-height: 100vh;
    height: auto;
    margin: 0;
  }
`,ol=Yt.div`
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 600px) {
    width: 100%;
    min-height: 100vh;
    height: auto;
    margin: 0;
  }
`,ll=Yt.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${e=>e.$isActive?1:0};
  transition: opacity 1s ease-in-out;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
  background-image: url(${e=>e.bgDesktop});
  @media (max-width: 1024px) {
    background-image: url(${e=>e.bgTablet||e.bgDesktop});
  }
  @media (max-width: 600px) {
    width: 100%;
    min-height: 100vh;
    height: auto;
    left: 0;
    top: 0;
    transform: none;
    background-image: url(${e=>e.bgMobile||e.bgDesktop});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
`,sl=Yt.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`,dl=Yt.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 2;
  
  @media (max-width: 600px) {
    position: static;
    height: auto;
    display: block;
  }
`,cl=Yt.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  position: relative;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
  
  @media (max-width: 600px) {
    padding: 0;
    height: auto;
    position: static;
    max-width: 100%;
  }
`,pl=Yt.div`
  position: absolute;
  top: 65%;
  left: 20px;
  transform: translateY(-50%);
  z-index: 2;
  max-width: 600px;
  color: white;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 1024px) {
    left: 40px;
    top: 70%;
  }
  @media (max-width: 768px) {
    left: 40px;
    top: 65%;
  }
  @media (max-width: 600px) {
    position: absolute;
    left: 0;
    max-width: 100%;
    padding: 20px;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    justify-content: center;
    gap: 20px;
    width: 100%;
    text-align: center;
  }
`,ul=Yt.div`
  width: 600px;
  height: 110.67px;
  position: relative;
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
`,xl=Yt.div`
  left: 0px;
  top: 0px;
  position: absolute;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 26.67px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 33.33px;
  word-wrap: break-word;
  @media (max-width: 600px) {
    position: static;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    width: 100%;
    font-weight: 400;
  }
`,fl=Yt.div`
  left: 0px;
  top: 50px;
  position: absolute;
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  color: #835EEB;
  font-size: 53.33px;
  font-family: 'Godo B', 'Noto Sans KR', 'Pretendard', sans-serif;
  font-weight: 400;
  line-height: 66.67px;
  word-wrap: break-word;
  letter-spacing: -0.5px;
  @media (max-width: 600px) {
    position: static;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    width: auto;
    display: inline;
    font-weight: 400;
    letter-spacing: -0.3px;
  }
`,hl=Yt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 600px) {
    gap: 8px;
  }
`,ml=Yt.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 20px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.1px;
  margin-top: 20px;
  margin-bottom: 40px;
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 20px;
    margin-top: 15px;
    margin-bottom: 30px;
    text-align: center;
    max-width: 300px;
  }
`,gl=Yt.button`
  width: 200px;
  padding: 18px 15px;
  border-radius: 15px;
  font-size: 20px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 1.45;
  letter-spacing: -0.09px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: linear-gradient(to right, #835EEB, #6B4BC4);
  border: none;
  color: white;
  box-shadow: 0 2px 4px rgba(131, 94, 235, 0.2);
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    opacity: 0;
    background: linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%);
    transform: translateX(-100%);
  }
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(131, 94, 235, 0.3);
    &:before {
      opacity: 1;
      transform: translateX(100%);
    }
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 8px rgba(131, 94, 235, 0.3);
  }
  @media (max-width: 600px) {
    width: 180px;
    height: 44px;
    font-size: 16px;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 500;
    line-height: 20px;
  }
`,bl=Yt.div`
  width: 200px;
  margin: 30px 0 0 0;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  @media (max-width: 600px) {
    width: 100%;
    margin: 20px 0 0 0;
    margin-left: 0;
    gap: 16px;
    justify-content: flex-start;
    flex-direction: column;
  }
`,wl=Yt.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-start;
  @media (max-width: 600px) {
    gap: 8px;
    margin-left: 0;
    justify-content: flex-start;
  }
`,yl=Yt.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  padding: 8px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  line-height: 1;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 600px) {
    display: none;
  }
`,vl=Yt.button`
  width: ${e=>e.$active?"24px":"8px"};
  height: 8px;
  border-radius: 6px;
  background: ${e=>e.$active?"#fff":"rgba(255,255,255,0.4)"};
  border: none;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  @media (max-width: 600px) {
    width: ${e=>e.$active?"20px":"8px"};
    height: 8px;
    border-radius: 4px;
  }
`,kl=Yt.button`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: bounce 2s infinite;
  
  svg {
    width: 24px;
    height: 24px;
  }
  
  &:hover {
    color: white;
    transform: translateX(-50%) translateY(-3px);
    animation-play-state: paused;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
  
  @media (max-width: 600px) {
    bottom: 20px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`,jl=(Yt.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
    gap: 20px;
    padding: 24px 0;
  }
`,Yt.div`
  width: 300px;
  height: 200px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: white;
  border: 1px solid #F3F4F6;
  border-radius: 30px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  h3 {
    color: #33373B;
    font-size: 24px;
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    text-align: center;
    margin: 0;
    transition: color 0.3s ease;
    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
  p {
    color: #33373B;
    font-size: 16px;
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    text-align: center;
    margin: 0;
    transition: color 0.3s ease;
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
  @media (max-width: 600px) {
    width: 90vw;
    min-width: 0;
    height: 120px;
    padding: 0 8px;
    border-radius: 16px;
    gap: 6px;
  }
`,Yt.div`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  @media (max-width: 600px) {
    width: 18px;
    height: 18px;
    margin-right: 4px;
  }
`,Yt.section`
  width: 100%;
  background: #F3EFFD;
  padding: 80px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    padding: 32px 0 0 0;
  }
`,Yt.h2`
  font-size: 40px;
  font-weight: 700;
  color: #222;
  margin-bottom: 40px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 18px;
  }
`,Yt.ul`
  width: 100%;
  max-width: 800px;
  background: #F3EFFD;
  padding: 0;
  margin: 0;
  list-style: none;
  @media (max-width: 600px) {
    max-width: 98vw;
  }
`,Yt.li`
  border-bottom: 1px solid #E5E7EB;
  padding: 32px 0;
  font-size: 20px;
  color: #33373B;
  @media (max-width: 600px) {
    font-size: 13px;
    padding: 16px 0;
  }
`,Yt.section`
  width: 100%;
  background: #F8F6FF;
  padding: 60px 0 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  scroll-snap-align: start;
  @media (max-width: 600px) {
    padding: 32px 0 32px 0;
  }
`),El=Yt.h2`
  font-size: 40px;
  font-weight: 700;
  color: #222;
  margin-bottom: 40px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`,Sl=Yt.ul`
  width: 100%;
  max-width: 700px;
  padding: 0;
  margin: 0;
  list-style: none;
  background: transparent;
  @media (max-width: 600px) {
    max-width: calc(100vw - 40px);
    padding: 0 20px;
  }
`,zl=Yt.li`
  border: none;
  background: transparent;
  margin-bottom: 0;
`,Cl=Yt.div`
  font-size: 16px;
  color: #555;
  margin: 0 0 24px 0;
  line-height: 1.6;
  padding: 0;
  background: none;
  border: none;
  max-height: ${e=>{let{open:t}=e;return t?"500px":"0"}};
  opacity: ${e=>{let{open:t}=e;return t?1:0}};
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s;
  @media (max-width: 600px) {
    font-size: 14px;
    margin: 0 0 16px 0;
  }
`,_l=Yt.button`
  width: 100%;
  background: none;
  border: none;
  outline: none;
  padding: 24px 0 16px 0;
  font-size: 20px;
  font-weight: ${e=>{let{open:t}=e;return t?700:600}};
  color: ${e=>{let{open:t}=e;return t?"#835EEB":"#222"}};
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: color 0.2s, font-weight 0.2s;
  border-radius: 0;
  box-shadow: none;
  &:hover {
    color: #835EEB;
    background: none;
  }
  @media (max-width: 600px) {
    font-size: 16px;
    padding: 16px 0 12px 0;
  }
`,Pl=Yt.span`
  font-size: 24px;
  color: #835EEB;
  margin-left: 12px;
  transition: transform 0.3s;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  background: none;
  transform: ${e=>{let{open:t}=e;return t?"rotate(45deg)":"rotate(0deg)"}};
  @media (max-width: 600px) {
    font-size: 20px;
    margin-left: 8px;
    width: 20px;
    height: 20px;
  }
`,Il=Yt.button`
  margin: 40px auto 0 auto;
  padding: 16px 32px;
  background: #835EEB;
  color: white;
  font-size: 18px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #6B4CD3;
    transform: translateY(-2px);
  }
  @media (max-width: 600px) {
    font-size: 16px;
    padding: 14px 24px;
    border-radius: 8px;
    margin: 24px auto 0 auto;
  }
`,Tl=Yt.section`
  width: 100%;
  background: #835EEB;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* 태블릿 */
  @media (max-width: 1024px) {
    padding: 40px 0;
  }
  
  /* 모바일 */
  @media (max-width: 600px) {
    padding: 60px 0 40px 0;
  }
`,Bl=Yt.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  box-sizing: border-box;
  
  /* 태블릿 */
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 0 40px;
  }
  
  /* 모바일 */
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    padding: 0 20px;
  }
`,Fl=Yt.div`
  color: #E0DDF5;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 18.20px;
  word-wrap: break-word;
`,Al=Yt.div`
  color: white;
  font-size: 32px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 41.60px;
  word-wrap: break-word;
  
  /* 모바일 */
  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 36px;
  }
`,Ol=Yt.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  
  /* 태블릿 */
  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
    gap: 16px;
    width: 100%;
  }
  
  /* 모바일 */
  @media (max-width: 600px) {
    align-items: center;
    text-align: center;
    gap: 16px;
  }
`,Rl=Yt.div`
  width: 184px;
  color: white;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 20.80px;
  word-wrap: break-word;
  text-align: left;
  
  /* 태블릿 */
  @media (max-width: 1024px) {
    width: auto;
    max-width: 300px;
    white-space: nowrap;
  }
  
  /* 모바일 */
  @media (max-width: 600px) {
    width: auto;
    max-width: 280px;
    font-size: 16px;
    line-height: 22px;
  }
`,Nl=Yt.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
  /* 태블릿 */
  @media (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }
  
  /* 모바일 */
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 16px;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
  }
`,Dl=Yt.div`
  width: 140px;
  height: 168px;
  padding: 20px;
  background: ${e=>e.isHovered?"rgba(255, 255, 255, 0.1)":"transparent"};
  overflow: hidden;
  border-radius: 10px;
  outline: 2px ${e=>e.isHovered?"rgba(255, 255, 255, 0.8)":"white"} solid;
  outline-offset: -2px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${e=>e.isHovered?"translateY(-4px)":"translateY(0)"};
  box-shadow: ${e=>e.isHovered?"0 8px 25px rgba(0, 0, 0, 0.15)":"none"};
  position: relative;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    width: 130px;
    height: 150px;
    padding: 16px;
  }
  
  @media (max-width: 600px) {
    width: 100%;
    max-width: 320px;
    height: 80px;
    padding: 16px 20px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    margin-bottom: 8px;
    flex-shrink: 0;
  }
`,Ll=Yt.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: ${e=>(e.isHovered,"white")};
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 24px;
  word-wrap: break-word;
  transition: color 0.3s ease;
  
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 20px;
    min-width: 60px;
  }
`,$l=Yt.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: ${e=>(e.isHovered,"white")};
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
  transition: color 0.3s ease;
  
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 18px;
    flex: 1;
    flex-direction: row;
    white-space: nowrap;
    justify-content: flex-start;
    text-align: left;
  }
`,Ml=(Yt.div`
  padding: 30px 50px;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  display: flex;
  background: #F3EFFD;
  position: relative;
`,Yt.div`
  padding: 5px 30px;
  background: #835EEB;
  border-radius: 9999px;
  outline: 1.33px solid #835EEB;
  outline-offset: -1.33px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: flex;
  position: absolute;
  left: 50px;
  z-index: 2;
`,Yt.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 24px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 36px;
  word-wrap: break-word;
`,Yt.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #575C64;
  font-size: 32px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 48px;
  word-wrap: break-word;
  min-width: 400px;
  max-width: 600px;
  margin-left: 260px;
  opacity: ${e=>e.fade?0:1};
  transition: opacity 0.6s;
`,Yt.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #C6B5F6;
  font-size: 24px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 36px;
  word-wrap: break-word;
  min-width: 120px;
`,Yt.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  color: #33373B;
  margin-bottom: 60px;
  font-family: 'Pretendard', sans-serif;
`,Yt.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
`,Yt.div`
  display: flex;
  gap: 30px;
  transform: translateX(${e=>e.translateX}px);
  transition: transform 0.5s ease-out;
  position: absolute;
  left: 0;
  top: 0;
`,Yt.div`
  min-width: 300px;
  height: 400px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(131, 94, 235, 0.15);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 60px rgba(131, 94, 235, 0.25);
  }

  &:active {
    transform: translateY(-5px) scale(0.98);
  }
`,Yt.div`
  width: 100%;
  height: 200px;
  background-image: url(${e=>e.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.3));
  }
`,Yt.div`
  padding: 24px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Yt.h3`
  font-size: 20px;
  font-weight: 700;
  color: #33373B;
  margin: 0 0 12px 0;
  font-family: 'Pretendard', sans-serif;
`,Yt.p`
  font-size: 14px;
  color: #6B7280;
  line-height: 1.5;
  margin: 0;
  font-family: 'Pretendard', sans-serif;
  flex: 1;
`,Yt.span`
  display: inline-block;
  padding: 4px 12px;
  background: linear-gradient(135deg, #835EEB, #6B4BC4);
  color: white;
  font-size: 12px;
  font-weight: 600;
  border-radius: 12px;
  align-self: flex-start;
  font-family: 'Pretendard', sans-serif;
`,Yt.button`
  margin-left: 16px;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  padding: 4px 12px;
  border-radius: 50%;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: rgba(255,255,255,0.12);
  }
`,Yt.a`
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  background: #007bff;
  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
  }
  @media (max-width: 600px) {
    font-size: 16px;
    padding: 12px 20px;
    border-radius: 8px;
  }
`,t=>{let{faqs:n}=t;const[i,r]=(0,e.useState)(null),a=Vn(),o=n.slice(0,3);return(0,Ai.jsxs)(jl,{children:[(0,Ai.jsx)(El,{children:"\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38"}),(0,Ai.jsx)(Sl,{children:o.map((e,t)=>(0,Ai.jsxs)(zl,{children:[(0,Ai.jsxs)(_l,{type:"button",open:i===t,onClick:()=>r(i===t?null:t),children:[e.question,(0,Ai.jsx)(Pl,{open:i===t,children:"+"})]}),(0,Ai.jsx)(Cl,{open:i===t,children:e.answer})]},e.question))}),(0,Ai.jsx)(Il,{onClick:()=>a("/notice/faq"),children:"\ub354 \uc790\uc138\ud55c \ub0b4\uc6a9 \ubcf4\uae30"})]})}),Ul=t=>{let{isModalOpen:n,setIsModalOpen:i}=t;const[r,a]=(0,e.useState)(!1),[o,l]=(0,e.useState)(0),[s,d]=(0,e.useState)(0),[c,p]=(0,e.useState)(!1),u=(0,e.useRef)(null),[x,f]=(Vn(),(0,e.useState)(!1)),[h,m]=(0,e.useState)(!1),[g,b]=(0,e.useState)(null),w=[{id:1,image:"/Home/hero/Hero-1.png",imageTablet:"/Home/hero/Hero_tablet_1.png",imageMobile:"/Home/hero/Hero-mobile-1.png",preTitle:"No.1 AI \ud559\uc2b5 \uc194\ub8e8\uc158",mainTitle:"\uc218\ud559\ub300\uc655",description:"\uc555\ub3c4\uc801\uc778 AI \uae30\uc220\ub85c \uc2e4\ud604\ud558\ub294<br />\uac00\uc7a5 \uc644\ubcbd\ud55c 1:1 \ubc00\ucc29 \uad00\ub9ac"},{id:2,image:"/Home/hero/Hero-2.png",imageTablet:"/Home/hero/Hero_tablet_2.png",imageMobile:"/Home/hero/Hero-mobile-2.png",preTitle:"KTEA \ud55c\uad6d\ube0c\ub79c\ub4dc\ud3c9\uac00\ub300\uc0c1",mainTitle:"2\ub144 \uc5f0\uc18d 1\uc704 \uc218\uc0c1",description:"\ub204\uc801 \uac00\uc785\uc790 200\ub9cc \uba85 \ub2ec\uc131!<br />\ucd08\uc911\uace0 \ubaa8\ub4e0 \uad50\uacfc\uacfc\uc815\uc5d0 \ucd5c\uc801\ud654\ub41c \ud559\uc2b5 \ud50c\ub7ab\ud3fc"},{id:3,image:"/Home/hero/Hero-3.png",imageTablet:"/Home/hero/Hero_tablet_3.png",imageMobile:"/Home/hero/Hero-mobile-3.png",preTitle:"ChatGPT \uac1c\ubc1c\uc0ac",mainTitle:"OpenAI \uacf5\uc2dd \ud611\uc5c5 \uae30\uc5c5",description:"\uc11c\uc220\ud615 \ud480\uc774 \ucc44\uc810\ubd80\ud130 \uc720\uc0ac\ubb38\uc81c \uac80\uc0c9\uae4c\uc9c0<br />\ucc28\uc6d0\uc774 \ub2e4\ub978 AI \uae30\uc220\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4"},{id:4,image:"/Home/hero/Hero-4.png",imageTablet:"/Home/hero/Hero_tablet_4.png",imageMobile:"/Home/hero/Hero-mobile-4.png",preTitle:"\uc5c5\uacc4 \ucd5c\uace0\uc758 AI \uae30\uc220\ub825",mainTitle:"\ud2b9\ud5c8 19\uc885 \ub4f1\ub85d \uc644\ub8cc",description:"\ubb38\uc81c\uc740\ud589\uc744 \ub118\uc5b4 AI \ud29c\ud130\ub85c!<br />\uac00\uc7a5 \uc218\ud559\uc744 \uc798 \ud558\ub294 AI\ub97c \ub9cc\ub4ed\ub2c8\ub2e4"},{id:5,image:"/Home/hero/Hero-5.png",imageTablet:"/Home/hero/Hero_tablet_5.png",imageMobile:"/Home/hero/Hero-mobile-5.png",preTitle:"\uac1c\ub150\ubd80\ud130 \uace0\ub09c\ub3c4\uae4c\uc9c0",mainTitle:"\ucd5c\ub300 \uaddc\ubaa8\uc758 \ud559\uc2b5 \ucf58\ud150\uce20",description:"\ud559\uc0dd\ub4e4\uc758 \uc131\uc801 \uc0c1\uc2b9,<br />\uad6d\ub0b4 \ucd5c\uace0\uc758 \uc804\ubb38\uac00\ub4e4\uc774 \ud568\uaed8 \ud569\ub2c8\ub2e4"}];(0,e.useEffect)(()=>{const e=setInterval(()=>{d(e=>{const t=e-1;return Math.abs(t)>=330?t+330:t})},30);return()=>clearInterval(e)},[8]),(0,e.useEffect)(()=>{if(c)return;const e=setInterval(()=>{l(e=>(e+1)%w.length)},5e3);return()=>clearInterval(e)},[w.length,c]),(0,e.useEffect)(()=>{if(2===o){f(!1),m(!1);const e=setTimeout(()=>f(!0),50),t=setTimeout(()=>m(!0),200);return()=>{clearTimeout(e),clearTimeout(t)}}f(!1),m(!1)},[o]);const y=()=>{a(!1),i(!1)};return(0,Ai.jsxs)(rl,{children:[(0,Ai.jsx)(al,{children:(0,Ai.jsxs)(ol,{children:[w.map((e,t)=>(0,Ai.jsx)(ll,{$isActive:t===o,bgDesktop:e.image,bgTablet:e.imageTablet,bgMobile:e.imageMobile},e.id)),(0,Ai.jsx)(sl,{}),(0,Ai.jsx)(dl,{children:(0,Ai.jsx)(cl,{children:(0,Ai.jsxs)(pl,{children:[2===o?(0,Ai.jsxs)("div",{style:{display:"flex",gap:16,marginTop:30,marginBottom:20},children:[(0,Ai.jsx)(il,{src:"/Home/chips/Hero 3_Open AI.png",alt:"OpenAI",visible:x}),(0,Ai.jsx)(il,{src:"/Home/chips/Hero 3_Chat GPT.png",alt:"ChatGPT",visible:h})]}):(0,Ai.jsx)("div",{style:{height:48,marginBottom:32}}),(0,Ai.jsxs)(ul,{children:[(0,Ai.jsx)(xl,{children:w[o].preTitle}),(0,Ai.jsx)(hl,{children:(0,Ai.jsx)(fl,{children:w[o].mainTitle})})]}),(0,Ai.jsx)(ml,{dangerouslySetInnerHTML:{__html:w[o].description}}),(0,Ai.jsx)(gl,{onClick:()=>{a(!0),i(!0)},children:"\ubb34\ub8cc\uccb4\ud5d8 \uc2dc\uc791\ud558\uae30"}),(0,Ai.jsxs)(bl,{children:[(0,Ai.jsx)(wl,{children:w.map((e,t)=>(0,Ai.jsx)(vl,{$active:o===t,"aria-label":`\uc2ac\ub77c\uc774\ub4dc ${t+1}`,onClick:()=>l(t)},t))}),(0,Ai.jsx)(yl,{"aria-label":"\uc77c\uc2dc\uc815\uc9c0",onClick:()=>{p(!c)},children:c?"\u25b6":"\u23f8"})]})]})})}),(0,Ai.jsx)(kl,{onClick:()=>{if(u.current){const e=u.current.getBoundingClientRect(),t=(window.innerHeight,(window.pageYOffset||document.documentElement.scrollTop)+e.top);window.scrollTo({top:t,behavior:"smooth"})}},"aria-label":"\ub2e4\uc74c \uc139\uc158\uc73c\ub85c \uc2a4\ud06c\ub864",children:(0,Ai.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Ai.jsx)("path",{d:"M7 10L12 15L17 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})}),(0,Ai.jsx)(Tl,{children:(0,Ai.jsxs)(Bl,{children:[(0,Ai.jsxs)(Ol,{children:[(0,Ai.jsx)(Fl,{children:"\uc218\ud559\ub300\uc655 CLASS"}),(0,Ai.jsx)(Al,{dangerouslySetInnerHTML:{__html:"\ubb34\ub8cc\uccb4\ud5d8 \uc2e0\uccad \ubc29\ubc95"}}),(0,Ai.jsx)(Rl,{dangerouslySetInnerHTML:{__html:"\uc218\ud559\ub300\uc655 CLASS\ub97c 2\uc8fc\ub3d9\uc548 \ubb34\ub8cc\ub85c \uc0ac\uc6a9\ud574\ubcf4\uc138\uc694"}})]}),(0,Ai.jsxs)(Nl,{children:[(0,Ai.jsxs)(Dl,{isHovered:1===g,onMouseEnter:()=>b(1),onMouseLeave:()=>b(null),children:[(0,Ai.jsx)(Ll,{isHovered:1===g,children:"STEP 1"}),(0,Ai.jsx)($l,{isHovered:1===g,dangerouslySetInnerHTML:{__html:"\ubb34\ub8cc \uccb4\ud5d8 \uc2e0\uccad \ud559\uad50/\ud559\uc6d0 \uc120\ud0dd"}})]}),(0,Ai.jsxs)(Dl,{isHovered:2===g,onMouseEnter:()=>b(2),onMouseLeave:()=>b(null),children:[(0,Ai.jsx)(Ll,{isHovered:2===g,children:"STEP 2"}),(0,Ai.jsx)($l,{isHovered:2===g,dangerouslySetInnerHTML:{__html:"\uccb4\ud5d8\uc6a9 \uacc4\uc815 \uc774\uba54\uc77c \uc218\ub839"}})]}),(0,Ai.jsxs)(Dl,{isHovered:3===g,onMouseEnter:()=>b(3),onMouseLeave:()=>b(null),children:[(0,Ai.jsx)(Ll,{isHovered:3===g,children:"STEP 3"}),(0,Ai.jsx)($l,{isHovered:3===g,dangerouslySetInnerHTML:{__html:"5\uc778 \ubbf8\ub9cc \ubb34\ub8cc \uc0ac\uc6a9"}})]}),(0,Ai.jsxs)(Dl,{isHovered:4===g,onMouseEnter:()=>b(4),onMouseLeave:()=>b(null),children:[(0,Ai.jsx)(Ll,{isHovered:4===g,children:"STEP 4"}),(0,Ai.jsx)($l,{isHovered:4===g,dangerouslySetInnerHTML:{__html:"\uc0ac\uc6a9 \uc778\uc6d0 \uc99d\uc6d0 \uc2dc \uac00\uc785 (\uc120\ud0dd)"}})]}),(0,Ai.jsxs)(Dl,{isHovered:5===g,onMouseEnter:()=>b(5),onMouseLeave:()=>b(null),children:[(0,Ai.jsx)(Ll,{isHovered:5===g,children:"STEP 5"}),(0,Ai.jsx)($l,{isHovered:5===g,dangerouslySetInnerHTML:{__html:"\ubb34\ub8cc \uccb4\ud5d8 \uc2e0\uccad \ubc84\ud2bc \ub204\ub974\uae30"}})]})]})]})}),(0,Ai.jsx)(nl,{ref:u}),(0,Ai.jsx)(la,{isOpen:r,onClose:y,title:"\ubb34\ub8cc \uccb4\ud5d8 \uc2e0\uccad",description:"\uc544\ub798 \uc815\ubcf4\ub97c \uc785\ub825\ud574 \uc8fc\uc2dc\uba74 \ub2f4\ub2f9\uc790\uac00 \ube60\ub974\uac8c \uc5f0\ub77d\ub4dc\ub9bd\ub2c8\ub2e4.",children:(0,Ai.jsx)(Yr,{onClose:y})}),(0,Ai.jsx)(Ml,{faqs:[{question:"\uc218\ud559\ub300\uc655 \ud074\ub798\uc2a4\uac00 \ubb54\uac00\uc694?",answer:"\uc218\ud559\ub300\uc655 \ud074\ub798\uc2a4\ub294 \uc218\ud559\ub300\uc655\uc758 \uc628\ub77c\uc778 \ud559\uc2b5 \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4."},{question:"\uc120\uc0dd\ub2d8\uc740 \uc5b4\ub5a4 \uae30\uae30\ub85c \uc0ac\uc6a9 \uac00\ub2a5\ud55c\uac00\uc694?",answer:"\uc120\uc0dd\ub2d8\uaed8\uc11c\ub294 \uc6f9\uc0ac\uc774\ud2b8\uc5d0 \uc811\uc18d\ud574\uc11c \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc6f9\uc0ac\uc774\ud2b8\ub294 \ubc18\uc751\ud615 \uc6f9\uc0ac\uc774\ud2b8\ub85c \uc81c\uc791\ub418\uc5b4 \uc788\uc5b4\uc11c \uc2a4\ub9c8\ud2b8\ud3f0, \ud0dc\ube14\ub9bf, \ub178\ud2b8\ubd81, \ub370\uc2a4\ud06c\ud1b1\uc5d0\uc11c \ubaa8\ub450 \uc0ac\uc6a9 \uac00\ub2a5\ud558\uc2ed\ub2c8\ub2e4."},{question:"\ud559\uc0dd\ub4e4\uc758 \ud559\uc2b5 \ub370\uc774\ud130\ub294 \uc5b4\ub5bb\uac8c \uad00\ub9ac\ub418\ub098\uc694?",answer:"\ud559\uc0dd\ub4e4\uc740 \uae30\ubcf8\uc801\uc73c\ub85c \uc571\uc2a4\ud1a0\uc5b4, \ud50c\ub808\uc774\uc2a4\ud1a0\uc5b4\uc5d0\uc11c \uc2a4\ub9c8\ud2b8\ud3f0\uc6a9 \uc571, \ud0dc\ube14\ub9bf \uc6a9 \uc571\uc744 \uc124\uce58\ud560 \uc218 \uc788\uac8c \ube0c\ub77c\uc6b0\uc800\ub97c \ud65c\uc6a9\ud558\uc5ec \uc571\uc744 \uad6c\ub3d9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc989, \uc544\uc774\ud3f0, \uac24\ub7ed\uc2dc \uc2a4\ub9c8\ud2b8\ud3f0, \uac24\ub7ed\uc2dc \ud0dc\ube14\ub9bf, \uc544\uc774\ud328\ub4dc, \ub178\ud2b8\ubd81, \ub370\uc2a4\ud06c\ud1b1, \uc11c\ud53c\uc2a4, \uc6e8\uc77c\ubd81, \ud06c\ub86c\ubd81 \ub4f1 \uc7a5\ube44\uc640 \uae30\uae30\uc5d0 \uc804\ud600 \uad6c\uc560\ubc1b\uc9c0 \uc54a\uace0 \uacf5\uc815\ud55c AI \uc218\ud559 \uad50\uc721\uc744 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."},{question:"\uc5b4\ub5a4 \ud559\ub144\uc774 \uc0ac\uc6a9 \uac00\ub2a5\ud55c\uac00\uc694?",answer:"\ucd08\ub4f1\ud559\uad50 1\ud559\ub144\ubd80\ud130 \uace0\ub4f1\ud559\uad50 3\ud559\ub144\uae4c\uc9c0 \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ucd081, \ucd082\ub294 \ucd9c\uc2dc \uc608\uc815\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."},{question:"\ud544\uae30 \uae30\ub2a5\uc774 \uc874\uc7ac\ud558\ub098\uc694? \ud559\uc0dd \ud544\uae30\ub97c \uc120\uc0dd\ub2d8\uc774 \ubcfc \uc218 \uc788\ub098\uc694?",answer:"\ud544\uae30 \uae30\ub2a5\uc774 \uc644\ubcbd\ud558\uac8c \uad6c\ud604\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ud559\uc0dd\uc740 \ub514\ubc14\uc774\uc2a4\uc5d0\uc11c \uc218\ud559 \ubb38\uc81c \uc704\uc5d0 \ud544\uae30\ub97c \ud558\uba74\uc11c \ubb38\uc81c\ub97c \ud480 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8 \ud544\uae30 \uae30\ub85d\uc740 \ubb38\uc81c\uc640 \ud568\uaed8 \ud55c \ubb38\uc81c \ub2e8\uc704\ub85c \uc2e4\uc2dc\uac04\uc73c\ub85c \uc120\uc0dd\ub2d8 \ub300\uc2dc\ubcf4\ub4dc\uc5d0 \ubc18\uc601\ub418\uc5b4 \uc120\uc0dd\ub2d8\uc774 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."},{question:"\ud559\uc0dd\ub4e4\uc758 \ud559\uc2b5 \ud604\ud669\uc744 \uc120\uc0dd\ub2d8\uc774 \ubcfc \uc218 \uc788\ub098\uc694?",answer:"\uc120\uc0dd\ub2d8\uc774 \ub0b4\uc900 \uc219\uc81c, \ud559\uc0dd\uc774 \ucd94\uac00\uc801\uc73c\ub85c \uc790\uc2b5\ud55c \ubb38\uc81c \ub4f1 \ubaa8\ub4e0 \ud559\uc2b5\ub7c9\uacfc \ud559\uc2b5 \uae30\ub85d\uc744 \uc120\uc0dd\ub2d8\uc774 \uc77c\ubcc4, \uc8fc\ubcc4, \uc6d4\ubcc4\ub85c \ud604\ud669\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."},{question:"\uc7a5\ud559\uae08\uc740 \uc5b4\ub5a4 \uae30\ub2a5\uc778\uac00\uc694?",answer:"\uc218\ud559\ub300\uc655\uc740 \ud559\uc0dd\ub4e4\uc758 \ub3d9\uae30\ubd80\uc5ec\ub97c \uc704\ud574 \uc7a5\ud559\uae08 \uc81c\ub3c4\ub97c \uc6b4\uc601\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc218\ud559 \uc2e4\ub825\uacfc \uc131\uc801\uc5d0 \uad00\uacc4\uc5c6\uc774 AI\uac00 \ucd94\ucc9c\ud574 \uc8fc\ub294 \ub0b4 \uc2e4\ub825\uc5d0 \ub9de\ub294 \ubb38\uc81c\ub97c \uafb8\uc900\ud788 \ud47c\ub2e4\uba74, \ubaa8\ub4e0 \ud559\uc0dd\ub4e4\uc774 \uc608\uc678 \uc5c6\uc774 \ud655\uc815\uc801\uc73c\ub85c \uc7a5\ud559\uae08\uc744 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. **\uc989, \uc131\uc801\uc5d0 \ub530\ub77c \uc7a5\ud559\uae08\uc744 \ubc1b\ub294 \uac83\uc774 \uc544\ub2c8\ub77c, \ubaa8\ub4e0 \ud559\uc0dd\uc774 \ub098\uc758 \ub178\ub825\uc5d0 \ub530\ub77c \uc7a5\ud559\uae08\uc744 \ubc1b\uc744 \uc218 \uc788\ub294 \uc2dc\uc2a4\ud15c\uc785\ub2c8\ub2e4.** \uc7a5\ud559\uae08\uc740 \uc218\ud559\ub300\uc655 \uc571 \ub0b4\uc5d0\uc11c \ub124\uc774\ubc84\ud398\uc774\ub85c \ubcc0\ud658\ud558\uc5ec \uacb0\uc81c \ubc0f \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ud559\uc0dd\ub2f9 \uc6d4\ubcc4\ub85c \ubc1b\uc544 \uac08 \uc218 \uc788\ub294 \ucd5c\ub300\uc758 \uc7a5\ud559\uae08 \uc591\uc740 \ub2e8\uccb4 \ub3c4\uc785\ud558\uc2e4 \ub54c \uc124\uc815\ud558\uc2e4 \uc218 \uc788\uc73c\uba70, **\uc120\uc0dd\ub2d8\uaed8\uc11c \uc124\uc815\ud558\uc2e0 \ud50c\ub79c\uc5d0 \ub530\ub77c \ub9de\ucda4 \uc608\uc0b0 \uc124\uacc4\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4.**"}]})]})},Hl=Yt.div`
  position: fixed;
  top: 60px; /* 헤더 바로 하단에 맞춤 */
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  padding-left: 100px;
  padding-right: 100px;
  background: #835EEB;
  justify-content: center;
  align-items: center;
  gap: 20px;
  display: inline-flex;
  z-index: 999;
  transform: ${e=>e.isVisible?"translateY(0)":"translateY(-100%)"};
  transition: transform 0.3s ease-in-out;
  
  @media (max-width: 1280px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  
  @media (max-width: 768px) {
    display: none; /* 데스크탑 띠배너는 모바일에서 숨김 */
  }
`,Vl=Yt.div`
  position: fixed;
  top: 48px; /* 모바일 헤더 높이만큼 아래로 */
  left: 0;
  right: 0;
  width: 100%;
  padding: 5px 10px;
  background: #835EEB;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  z-index: 999;
  transform: ${e=>e.isVisible?"translateY(0)":"translateY(-100%)"};
  transition: transform 0.3s ease-in-out;
  
  @media (min-width: 769px) {
    display: none; /* 데스크탑에서는 숨김 */
  }
`,Wl=Yt.div`
  width: 262px;
  justify-content: flex-start;
  align-items: center;
  gap: 3.33px;
  display: inline-flex;
  margin-bottom: 0px;
`,Yl=Yt.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #C0AEF5;
  font-size: 10.67px;
  font-family: ${e=>e.fontFamily||"Pretendard"};
  font-weight: ${e=>"Godo M"===e.fontFamily||"Playwrite CA"===e.fontFamily?"400":"600"};
  line-height: 16px;
  word-wrap: break-word;
`,Xl=Yt.div`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  display: flex;
`,Jl=Yt.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`,Gl=Yt.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 15px;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 22.50px;
  word-wrap: break-word;
`,Ql=Yt.button`
  height: 28px;
  padding-left: 12px;
  padding-right: 12px;
  background: black;
  border-radius: 14px;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  display: flex;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #333;
  }
`,Kl=Yt.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 11px;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 16px;
  word-wrap: break-word;
`,Zl=Yt.div`
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  display: flex;
  
  @media (max-width: 1200px) {
    display: none; /* 중간 크기 화면에서는 숨김 */
  }
`,ql=Yt.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #C0AEF5;
  font-size: 16px;
  font-family: ${e=>e.fontFamily||"Pretendard"};
  font-weight: ${e=>"Godo M"===e.fontFamily?"400":"600"};
  line-height: 24px;
  word-wrap: break-word;
`,es=Yt.div`
  height: 36px;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  display: flex;
  
  @media (max-width: 1200px) {
    justify-content: center; /* 중간 크기 화면에서는 중앙 정렬 */
  }
`,ts=Yt.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 30px;
  word-wrap: break-word;
`,ns=Yt.button`
  height: 30px;
  padding-left: 20px;
  padding-right: 20px;
  background: black;
  border-radius: 10px;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  display: flex;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #333;
  }
`,is=Yt.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 12px;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 18px;
  word-wrap: break-word;
`,rs=(Yt.div`
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  display: flex;
  
  @media (max-width: 1200px) {
    display: none; /* 중간 크기 화면에서는 숨김 */
  }
`,Yt.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${e=>e.isOpen?"flex":"none"};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`),as=Yt.div`
  width: 500px;
  max-width: 90vw;
  background: white;
  border-radius: 20px;
  padding: 40px;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  @media (max-width: 600px) {
    width: 350px;
    padding: 30px;
  }
`,os=Yt.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: #f5f5f5;
    color: #333;
  }
`,ls=Yt.h2`
  color: #1E2231;
  font-size: 28px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`,ss=Yt.p`
  color: #7A828D;
  font-size: 16px;
  text-align: center;
  margin-bottom: 30px;
  line-height: 1.5;
  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 25px;
  }
`,ds=Yt.div`
  width: 100%;
  min-height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  overflow-x: hidden;
  padding-top: 110px; /* 헤더(60px) + 띠배너(50px) 높이만큼 여백 */
  
  @media (max-width: 1024px) {
    width: 100%;
    overflow-x: hidden;
  }
  @media (max-width: 768px) {
    width: 100%;
    overflow-x: hidden;
    padding-top: 120px; /* 모바일 헤더(48px) + 모바일 띠배너 높이만큼 여백 */
  }
`,cs=(Yt.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${e=>e.isOpen?"flex":"none"};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,Yt.div`
  width: 800px;
  max-width: 90vw;
  max-height: 80vh;
  background: white;
  border-radius: 20px;
  padding: 40px;
  position: relative;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  @media (max-width: 600px) {
    width: 300px;
    max-width: 300px;
    padding: 24px;
  }
`,Yt.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: #f5f5f5;
    color: #333;
  }
`,Yt.h2`
  color: #1E2231;
  font-size: 32px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`,Yt.div`
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  color: #835EEB;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`,Yt.p`
  color: #575C64;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  text-align: center;
  white-space: pre-line;
  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`,Yt.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Yt.li`
  padding: 15px 0;
  border-bottom: 1px solid #E5E7EB;
  display: flex;
  align-items: center;
  gap: 15px;
  
  &:last-child {
    border-bottom: none;
  }
`,Yt.div`
  width: 24px;
  height: 24px;
  background: #835EEB;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: bold;
  flex-shrink: 0;
`,Yt.span`
  color: #33373B;
  font-size: 16px;
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 13px;
  }
`,Yt.div`
  width: 1280px;
  height: 800px;
  position: relative;
  background: white;
  overflow: hidden;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    padding: 20px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 20px;
  }
`,Yt.div`
  width: 1280px;
  min-height: 100vh;
  padding: 40px 50px 150px 50px; /* 상단 패딩 조정 */
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  margin: 0 auto;
  margin-top: 60px; /* 헤더 아래 여백 - 총 100px (40px + 60px) */
  position: relative;
  @media (max-width: 1024px) {
    width: 100%;
    min-height: 100vh;
    padding: 40px 20px 120px 20px; /* 상단 패딩 조정 */
    gap: 60px;
    margin-top: 60px;
  }
  @media (max-width: 768px) {
    width: 100%;
    min-height: 100vh;
    padding: 6px 25px 100px 25px; /* 상단 패딩 조정 */
    gap: 30px;
    margin-top: 24px; /* 총 30px (6px + 24px) */
    box-sizing: border-box;
  }
`),ps=Yt.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  gap: 20px;
  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    gap: 8px;
    box-sizing: border-box;
    margin: 0 auto;
  }
`,us=Yt.div`
  justify-content: center;
  align-items: center;
  gap: 5px;
  display: inline-flex;
  margin-bottom: 24px;
  opacity: ${e=>e.isVisible?1:0};
  transform: ${e=>e.isVisible?"translateY(0)":"translateY(30px)"};
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  
  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`,xs=Yt.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: ${e=>e.color||"#33373B"};
  font-size: 27.33px;
  font-family: ${e=>e.fontFamily||"Pretendard"};
  font-weight: ${e=>"Playwrite CA"===e.fontFamily?"400":"700"};
  line-height: 41px;
  word-wrap: break-word;
  
  @media (max-width: 1024px) {
    font-size: 22px;
    line-height: 33px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 27px;
  }
`,fs=Yt.div`
  color: #1E2231;
  font-size: 48px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 62.4px;
  word-wrap: break-word;
  opacity: ${e=>e.isVisible?1:0};
  transform: ${e=>e.isVisible?"translateY(0)":"translateY(30px)"};
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* 데스크탑에서는 줄바꿈 없이 한 줄로 표시 */
  br {
    display: none;
  }
  
  @media (max-width: 1024px) {
    font-size: 36px;
    line-height: 46px;
    
    /* 태블릿에서는 줄바꿈 표시 */
    br {
      display: inline;
    }
  }
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
    
    /* 모바일에서도 줄바꿈 표시 */
    br {
      display: inline;
    }
  }
`,hs=Yt.div`
  color: #1E2231;
  font-size: 24px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  line-height: 36px;
  word-wrap: break-word;
  opacity: ${e=>e.isVisible?1:0};
  transform: ${e=>e.isVisible?"translateY(0)":"translateY(30px)"};
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.3s;
  
  /* 데스크탑에서는 줄바꿈 없이 한 줄로 표시 */
  br {
    display: none;
  }
  
  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
    
    /* 태블릿에서는 줄바꿈 표시 */
    br {
      display: inline;
    }
  }
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    
    /* 모바일에서도 줄바꿈 표시 */
    br {
      display: inline;
    }
  }
`,ms=Yt.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
    gap: 30px;
    padding: 0 20px;
    align-items: center;
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding: 0 20px;
    gap: 20px;
    align-items: center;
  }
`,gs=Yt.div`
  width: 360px;
  padding: 30px;
  background: ${e=>"free"===e.cardType?"#F3F4F6":"basic"===e.cardType?"white":"black"};
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.10);
  border-radius: 20px;
  ${e=>"basic"===e.cardType?"outline: 2px #8F67E8 solid; outline-offset: -2px;":""}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  
  /* 성능 최적화 */
  will-change: transform, box-shadow, opacity;
  backface-visibility: hidden;
  
  /* 부드러운 애니메이션 */
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
              box-shadow 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
              
  transform: translate3d(0, ${e=>e.isVisible?"0":"50px"}, 0);
  opacity: ${e=>e.isVisible?"1":"0"};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(131, 94, 235, 0.08) 0%, rgba(255, 109, 235, 0.08) 100%);
    opacity: 0;
    transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border-radius: 20px;
    z-index: 0;
    will-change: opacity;
  }
  
  &:hover {
    transform: translate3d(0, -12px, 0) scale(1.05);
    box-shadow: 0px 25px 50px rgba(131, 94, 235, 0.25);
    
    &::before {
      opacity: 1;
    }
  }
  
  & > * {
    position: relative;
    z-index: 1;
  }
  
  @media (max-width: 1024px) {
    width: 600px;
    align-items: center;
    gap: 30px;
    
    &:hover {
      transform: translate3d(0, -8px, 0) scale(1.03);
      box-shadow: 0px 20px 40px rgba(131, 94, 235, 0.2);
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
    align-items: flex-start;
    gap: 10px;
    
    &:hover {
      transform: translate3d(0, -6px, 0) scale(1.02);
      box-shadow: 0px 15px 30px rgba(131, 94, 235, 0.15);
    }
  }
`,bs=Yt.div`
  width: 300px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  
  @media (max-width: 1024px) {
    width: 100%;
    padding: 10px 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 280px;
    padding: 12px;
    flex-direction: column;
    align-items: center;
  }
`,ws=Yt.div`
  width: 268px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  
  @media (max-width: 1024px) {
    width: auto;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    height: auto;
    min-height: 27px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 248px;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: auto;
    min-height: 27px;
  }
`,ys=Yt.div`
  color: ${e=>"plus"===e.cardType?"white":"#33373B"};
  font-size: 27.33px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 41px;
  word-wrap: break-word;
  text-align: center;
  white-space: nowrap;
  
  @media (max-width: 1024px) {
    font-size: 24px;
    line-height: 36px;
    text-align: left;
    white-space: nowrap;
  }
  
  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 33px;
    text-align: center;
    white-space: nowrap;
  }
`,vs=Yt.img`
  width: ${e=>"small"===e.size||"light"===e.iconType?"46.80px":"82px"};
  height: ${e=>"small"===e.size||"light"===e.iconType?"26px":"24.30px"};
  object-fit: contain;
  will-change: transform;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  ${gs}:hover & {
    transform: translate3d(0, -2px, 0) scale(1.1);
  }
`,ks=(Yt.div`
  width: ${e=>"basic"===e.badgeType?"46.80px":"82px"};
  height: ${e=>"basic"===e.badgeType?"26px":"24.30px"};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${e=>"basic"===e.badgeType?"#835EEB":"linear-gradient(135deg, #FF6DEB 0%, #8E6EF1 50%, #5F9EFF 100%)"};
  }
`,Yt.div`
  color: #7A828D;
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 21px;
  word-wrap: break-word;
  text-align: center;
  white-space: nowrap;
  
  @media (max-width: 1024px) {
    font-size: 14px;
    line-height: 21px;
    text-align: left;
    white-space: nowrap;
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    white-space: nowrap;
  }
`),js=Yt.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  
  @media (max-width: 1024px) {
    justify-content: flex-end;
    align-items: center;
    text-align: right;
  }
  
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`,Es=Yt.div`
  ${e=>"free"===e.cardType?"color: #33373B;":"basic"===e.cardType?"color: #835EEB;":"background: linear-gradient(135deg, #FF6DEB 0%, #8E6EF1 50%, #5F9EFF 100%);\n     -webkit-background-clip: text;\n     -webkit-text-fill-color: transparent;\n     background-clip: text;"}
  font-size: 32px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 48px;
  word-wrap: break-word;
  text-align: center;
  white-space: nowrap;
  
  @media (max-width: 1024px) {
    font-size: 28px;
    line-height: 42px;
    text-align: right;
    white-space: nowrap;
  }
  
  @media (max-width: 768px) {
    font-size: 34px;
    line-height: 46px;
    text-align: center;
    white-space: nowrap;
  }
`,Ss=Yt.div`
  position: absolute;
  right: ${e=>"basic"===e.cardType?"25px":"plus"===e.cardType?"20px":"0"};
  top: 20px;
  color: #7A828D;
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 21px;
  word-wrap: break-word;
  
  @media (max-width: 1024px) {
    position: static;
    font-size: 16px;
    line-height: 24px;
    color: #7A828D;
    margin-left: 5px;
    align-self: flex-end;
  }
  
  @media (max-width: 768px) {
    position: static;
    font-size: 14px;
    line-height: 20px;
    color: #7A828D;
    margin-left: 3px;
    align-self: flex-end;
  }
`,zs=Yt.div`
  width: 300px;
  min-height: 245px;
  position: relative;
  
  @media (max-width: 1024px) {
    width: 100%;
    min-height: auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 280px;
    min-height: 245px;
    position: relative;
  }
`,Cs=Yt.div`
  width: 300px;
  position: absolute;
  left: 0px;
  top: ${e=>e.top}px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  min-height: 41px;
  
  @media (max-width: 1024px) {
    width: 100%;
    position: static;
    min-height: 30px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 280px;
    position: absolute;
    top: ${e=>e.top}px;
  }
`,_s=Yt.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before {
    content: '✓';
    position: absolute;
    width: 14.45px;
    height: 9.98px;
    left: 4.82px;
    top: 7.22px;
    font-weight: bold;
    font-size: 12px;
    ${e=>"plus"===e.cardType?"\n      background: linear-gradient(135deg, #FF6DEB 0%, #8E6EF1 50%, #5F9EFF 100%);\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n      background-clip: text;\n    ":"\n      color: #835EEB;\n    "}
  }
`,Ps=Yt.div`
  width: 260px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  flex-wrap: nowrap;
  
  @media (max-width: 768px) {
    width: 300px;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    margin-left: 0;
  }
`,Is=Yt.div`
  ${e=>"plus"===e.cardType&&e.isPrimary?"\n        background: linear-gradient(135deg, #FF6DEB 0%, #8E6EF1 50%, #5F9EFF 100%);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n        background-clip: text;\n      ":"plus"===e.cardType?"color: #D1D5DB;":"color: #7A828D;"}
  font-size: 15px;
  font-family: 'Pretendard', sans-serif;
  font-weight: ${e=>"plus"===e.cardType&&e.isPrimary?700:500};
  line-height: 21px;
  word-wrap: break-word;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 20px;
    white-space: nowrap;
    text-align: left;
  }
`,Ts=Yt.div`
  color: ${e=>e.color||"#9C7EEF"};
  font-size: 13px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  line-height: 19.5px;
  word-wrap: break-word;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 18px;
    white-space: nowrap;
    text-align: left;
    margin-left: 0;
  }
`,Bs=Yt.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3px;
`,Fs=Yt.div`
  width: 100%;
  height: 50px;
  padding: 6.37px 8.49px;
  background: ${e=>"plus"===e.cardType?"linear-gradient(135deg, #FF6DEB 0%, #8E6EF1 50%, #5F9EFF 100%)":"#835EEB"};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>"plus"===e.cardType?"linear-gradient(135deg, #E856D3 0%, #7B5FDD 50%, #4F89E6 100%)":"#7756D6"};
    transform: translateY(-2px);
  }
  
  @media (max-width: 1024px) {
    align-self: stretch;
  }
`,As=Yt.div`
  color: white;
  font-size: 17px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 25.5px;
  word-wrap: break-word;
  text-align: center;
`,Os=Yt.button`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: none;
  border: none;
  color: rgba(131, 94, 235, 0.8);
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: bounce 2s infinite;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(131, 94, 235, 0.1);
    opacity: 0;
    transition: opacity 0.2s ease;
    pointer-events: none;
  }
  
  &:active::before {
    opacity: 1;
  }
  
  svg {
    width: 24px;
    height: 24px;
    position: relative;
    z-index: 1;
  }
  
  &:hover {
    color: #835EEB;
    transform: translateX(-50%) translateY(-3px);
    animation-play-state: paused;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
  
  @media (max-width: 1024px) {
    bottom: 60px;
  }
  
  @media (max-width: 768px) {
    bottom: 120px;
    
    &::before {
      width: 36px;
      height: 36px;
    }
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
  
  @media (max-width: 600px) {
    bottom: 20px;
    
    &::before {
      width: 32px;
      height: 32px;
    }
    
    svg {
      width: 18px;
      height: 18px;
    }
  }
`,Rs=(Yt.div`
  width: 1280px;
  padding: 100px 50px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
  
  @media (max-width: 1300px) {
    width: 100%;
    padding: 80px 20px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 60px 25px;
    flex-direction: column;
    gap: 40px;
  }
`,Yt.div`
  width: 100%;
  max-width: 1280px;
  background: white;
  display: flex;
  align-items: center;
  gap: 80px;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    max-width: 400px;
  }
`,Yt.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
`,Yt.div`
  flex: 1;
  background: white;
  border-radius: 20px;
  padding: 50px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 30px;
    gap: 30px;
  }
`,Yt.div`
  text-align: left;
  gap: 16px;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`,Yt.h2`
  color: #1E2231;
  font-size: 48px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`,Yt.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`),Ns=Yt.div`
  position: relative;
  width: 160px;
`,Ds=Yt.button`
  width: 100%;
  padding: 12px 16px;
  background: #F8F9FA;
  border: 2px solid #E5E7EB;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #1E2231;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #D1D5DB;
    background: #F3F4F6;
  }
  
  &::after {
    content: '${e=>e.isOpen?"\u25b2":"\u25bc"}';
    font-size: 12px;
    color: #6B7280;
    transition: transform 0.3s ease;
  }
`,Ls=Yt.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #E5E7EB;
  border-top: none;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  max-height: ${e=>e.isOpen?"180px":"0"};
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 10;
`,$s=Yt.button`
  width: 100%;
  padding: 10px 16px;
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 500;
  color: #1E2231;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
  
  &:hover {
    background: #F9F7FF;
    color: #835EEB;
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid #F0F0F0;
  }
`,Ms=Yt.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,Us=Yt.div`
  width: 100%;
  position: relative;
`,Hs=Yt.input`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(to right, #835EEB 0%, #835EEB ${e=>e.progress}%, #E5E7EB ${e=>e.progress}%, #E5E7EB 100%);
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #835EEB;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(131, 94, 235, 0.3);
    transition: all 0.2s ease;
  }
  
  &::-webkit-slider-thumb:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(131, 94, 235, 0.4);
  }
  
  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #835EEB;
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 8px rgba(131, 94, 235, 0.3);
  }
  
  &::-moz-range-track {
    background: linear-gradient(to right, #835EEB 0%, #835EEB ${e=>e.progress}%, #E5E7EB ${e=>e.progress}%, #E5E7EB 100%);
    height: 8px;
    border-radius: 4px;
  }
`,Vs=Yt.div`
  background: #33373B;
  color: white;
  padding: 12px 20px;
  border-radius: 12px;
  text-align: center;
  position: relative;
  box-shadow: 0 6px 20px rgba(51, 55, 59, 0.3);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #33373B;
  }
`,Ws=Yt.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 6px;
`,Ys=Yt.div`
  font-size: 24px;
  font-weight: 700;
  font-family: 'Pretendard', sans-serif;
`,Xs=(Yt.div`
  text-align: left;
  color: #575C64;
  font-size: 16px;
  line-height: 1.6;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    text-align: center;
    font-size: 14px;
  }
`,Yt.button`
  width: 100%;
  padding: 18px;
  background: linear-gradient(135deg, #835EEB 0%, #6B4BC4 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Pretendard', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(131, 94, 235, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(131, 94, 235, 0.4);
    background: linear-gradient(135deg, #9C7EEF 0%, #7756D6 100%);
  }
  
  &:active {
    transform: translateY(0);
    transition: all 0.1s ease;
  }
`,Yt.div`
  width: 1280px;
  padding-top: 50px;
  padding-bottom: 50px;
  background: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  display: inline-flex;
  margin: 0 auto;
  @media (max-width: 1300px) {
    width: 100%;
    padding: 60px 20px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 80px 25px 40px 25px;
    gap: 30px;
    align-items: center;
  }
  @media (max-width: 375px) {
    width: 100%;
    padding: 80px 25px 40px 25px;
    gap: 24px;
    box-sizing: border-box;
    align-items: center;
  }
`),Js=Yt.div`
  width: 1220px;
  justify-content: space-between;
  align-items: flex-end;
  display: inline-flex;
  gap: 80px;
  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
`,Gs=Yt.div`
  width: 500px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 7px;
  display: inline-flex;
  @media (max-width: 1024px) {
    width: 403px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7px;
  }
`,Qs=Yt.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  gap: 7px;
  display: inline-flex;
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`,Ks=Yt.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #835EEB;
  font-size: 64px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 83.20px;
  word-wrap: break-word;
  @media (max-width: 1024px) {
    font-size: 40px;
    line-height: 52px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 52px;
  }
`,Zs=Yt.div`
  flex: 1 1 0;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #835EEB;
  font-size: 22px;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 33px;
  word-wrap: break-word;
  @media (max-width: 1024px) {
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 27px;
    text-align: center;
  }
`,qs=Yt.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  color: #7A828D;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 24px;
  gap: 4px;
  
  @media (max-width: 1024px) {
    align-self: stretch;
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,ed=Yt.div`
  display: block;
  color: #7A828D;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 24px;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  @media (max-width: 1024px) {
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,td=Yt.div`
  width: 100%;
  text-align: center;
  color: #1E2231;
  font-size: 48px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 62.4px;
  word-wrap: break-word;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 42px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 36px;
  }
`,nd=Yt.div`
  width: 100%;
  text-align: center;
  color: #7A828D;
  font-size: 18px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  line-height: 27px;
  word-wrap: break-word;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 15px;
  }
`,id=Yt.button`
  padding-left: 13.33px;
  padding-right: 13.33px;
  padding-top: 8px;
  padding-bottom: 8px;
  background: #835EEB;
  border-radius: 6.67px;
  justify-content: center;
  align-items: center;
  gap: 6.67px;
  display: inline-flex;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #6B4BC4;
    transform: translateY(-2px);
  }
`,rd=Yt.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 23.20px;
  word-wrap: break-word;
`,ad=Yt.div`
  width: 655px;
  height: 360px;
  position: relative;
  background: #F6F6F6;
  overflow: hidden;
  border-radius: 15.65px;
  margin-left: 80px;
  @media (max-width: 1024px) {
    width: 350px;
    height: 250px;
    margin-left: 0;
  }
  @media (max-width: 768px) {
    width: 350px;
    height: 250px;
    margin-left: 0;
  }
`,od=(Yt.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  @media (max-width: 1300px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    gap: 16px;
    margin: 0 auto;
  }
  @media (max-width: 375px) {
    width: 100%;
    align-items: center;
    text-align: center;
    gap: 12px;
    box-sizing: border-box;
    margin: 0 auto;
  }
`,Yt.div`
  color: #1E2231;
  font-size: 48px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 62.4px;
  word-wrap: break-word;
  
  span {
    color: #835EEB;
    font-family: 'Juniory', sans-serif;
  font-weight: 400;
  }
  
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 42px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
  line-height: 36px;
  }
`,Yt.div`
  width: 1280px;
  padding: 100px 50px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin: 0 auto;
  @media (max-width: 1300px) {
    width: 100%;
    padding: 60px 20px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 80px 25px 40px 25px;
    gap: 30px;
    align-items: center;
  }
  @media (max-width: 375px) {
    width: 100%;
    padding: 80px 25px 40px 25px;
    gap: 24px;
    box-sizing: border-box;
    align-items: center;
  }
`),ld=Yt.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  text-align: center;
  @media (max-width: 1300px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    gap: 16px;
    margin: 0 auto;
  }
  @media (max-width: 375px) {
    width: 100%;
    gap: 12px;
    box-sizing: border-box;
    margin: 0 auto;
  }
`,sd=Yt.div`
  color: #0B1215;
  font-size: 48px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 62.4px;
  word-wrap: break-word;
  @media (max-width: 1024px) {
    font-size: 36px;
    line-height: 46px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,dd=Yt.div`
  color: #575C64;
  font-size: 24px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  line-height: 36px;
  word-wrap: break-word;
  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`,cd=Yt.div`
  width: auto;
  height: auto;
  background: transparent;
  border: 2px solid #835EEB;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #835EEB;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 1.2;
  padding: 8px 16px;
  margin-bottom: 0;
  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 6px 14px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 5px 12px;
  }
`,pd=(Yt.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 800px;
  }
  @media (max-width: 768px) {
    width: 325px;
    min-width: 325px;
    max-width: 325px;
  }
`,Yt.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 3px 0;
  background: white;
  @media (max-width: 768px) {
    gap: 5px;
  }
`,Yt.div`
  width: 70px;
  height: 20px;
  @media (max-width: 768px) {
    width: 50px;
    height: 18px;
  }
`,Yt.div`
  display: flex;
  align-items: center;
  gap: 5px;
  @media (max-width: 768px) {
    gap: 3px;
  }
`,Yt.div`
  width: 75px;
  text-align: center;
  color: #835EEB;
  font-size: 9px;
  font-family: 'SUIT Variable', sans-serif;
  font-weight: 800;
  line-height: 10.35px;
  word-wrap: break-word;
  @media (max-width: 768px) {
    width: 55px;
    font-size: 8px;
    line-height: 9px;
  }
`,Yt.div`
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-top: 0.5px solid #E5E7EB;
  background: ${e=>e.isHighlighted?"#F9F7FF":"white"};
  @media (max-width: 768px) {
    gap: 5px;
    height: 22px;
  }
`,Yt.div`
  width: 70px;
  height: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.isHighlighted?"#835EEB":"#575C64"};
  font-size: ${e=>e.isHighlighted?"10.13px":"10px"};
  font-family: 'SUIT Variable', sans-serif;
  font-weight: 800;
  line-height: ${e=>e.isHighlighted?"13.17px":"13px"};
  word-wrap: break-word;
  @media (max-width: 768px) {
    width: 50px;
    height: 18px;
    font-size: 9px;
    line-height: 11px;
  }
`,Yt.div`
  display: flex;
  align-items: center;
  gap: 5px;
  @media (max-width: 768px) {
    gap: 3px;
  }
`,Yt.div`
  width: 80px;
  height: 15px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #835EEB;
  font-size: ${e=>e.isHighlighted?"13px":"12.67px"};
  font-family: 'SUIT Variable', sans-serif;
  font-weight: 800;
  line-height: ${e=>e.isHighlighted?"14.95px":"14.57px"};
  word-wrap: break-word;
  @media (max-width: 768px) {
    width: 55px;
    height: 12px;
    font-size: 11px;
    line-height: 12px;
  }
`,Yt.div`
  width: 300px;
  background: white;
  outline: 0.5px solid #8D94A0;
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 325px;
    min-width: 325px;
    max-width: 325px;
  }
`,Yt.div`
  flex: 1;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Yt.div`
  width: 115px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #575C64;
  font-size: 11px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 12.65px;
  word-wrap: break-word;
  @media (max-width: 768px) {
    width: 100px;
    height: 25px;
    font-size: 10px;
    line-height: 11px;
  }
`,Yt.div`
  width: 80px;
  height: 270px;
  padding: 5px;
  background: white;
  @media (max-width: 768px) {
    width: 60px;
    height: 200px;
  }
`,Yt.div`
  width: 80px;
  padding: 15px 5px;
  background: #F9F7FF;
  box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  outline: 1px solid #835EEB;
  outline-offset: -1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  @media (max-width: 768px) {
    width: 60px;
    padding: 10px 3px;
  }
`,Yt.div`
  width: 56px;
  height: 25px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #835EEB;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 20px;
  word-wrap: break-word;
  @media (max-width: 768px) {
    width: 40px;
    height: 20px;
    font-size: 12px;
    line-height: 15px;
  }
`,Yt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`,Yt.div`
  width: 60px;
  height: 30px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #835EEB;
  font-size: 20px;
  font-family: 'SUIT Variable', sans-serif;
  font-weight: 800;
  line-height: 23px;
  word-wrap: break-word;
  @media (max-width: 768px) {
    width: 45px;
    height: 25px;
    font-size: 16px;
    line-height: 18px;
  }
`,Yt.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 10px 0 40px 0;

  @media (max-width: 1024px) {
    max-width: 90%;
    padding: 10px 0 30px 0;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 10px 0 20px 0;
  }
`),ud=Yt.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: 1000px;

  @media (max-width: 1024px) {
    width: 100%;
    gap: 80px;
  }

  @media (max-width: 768px) {
    display: none; /* 모바일에서는 Swiper 사용 */
  }
`,xd=Yt.div`
  display: flex;
  width: 100%;
  
  @media (max-width: 768px) {
    display: none; /* 모바일에서는 Swiper 사용 */
  }
  
  @media (min-width: 769px) {
    position: relative;
    background: white;
    border: 1px solid #E5E7EB;
    border-radius: 4px;
  }
`,fd=Yt.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    width: 80px;
    min-width: 80px;
    background: #F9F7FF;
    border-right: 1px solid #E5E7EB;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    font-size: 12px;
    font-weight: 700;
    color: #835EEB;
    text-align: center;
    line-height: 1.2;
    height: 135px; /* 전체 컨테이너와 동일한 높이 */
  }
`,hd=Yt.div`
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #E5E7EB;
    font-size: 11px;
    font-weight: 600;
    
    &:first-child {
      height: 45px;
      background: white;
      color: transparent;
      font-weight: 500;
    }
    
    &:nth-child(2) {
      height: 45px;
      background: #F9F7FF;
      color: #835EEB;
      font-weight: 700;
    }
    
    &:nth-child(3) {
      height: 45px;
      background: #F9F7FF;
      color: #835EEB;
      font-weight: 700;
      border-bottom: none;
    }
  }
`,md=Yt.div`
  @media (max-width: 768px) {
    flex: 1;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    height: 135px; /* 3행에 맞는 고정 높이 설정 */
    
    /* 스크롤바 숨기기 */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
  }
`,gd=Yt.img`
  width: 1000px;
  height: auto;
  max-width: 100%;
  align-self: flex-end;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 1000px;
    align-self: center;
  }

  @media (max-width: 768px) {
    width: 800px; /* 스크롤이 가능하도록 충분히 큰 너비 */
    min-width: 800px;
    max-width: none;
    align-self: flex-start;
    margin-left: 0;
    height: 135px; /* 3행에 맞는 고정 높이 */
    object-fit: cover; /* 이미지 비율 유지하면서 채우기 */
    object-position: left top; /* 왼쪽 상단부터 보이도록 */
  }
`,bd=(Yt.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 80px;
    height: 100%;
    background: white;
    z-index: 2;
    pointer-events: none;
    border-right: 1px solid #E5E7EB;
  }
`,Yt.img`
  width: 1000px;
  height: auto;
  max-width: 100%;
  align-self: flex-end;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 1000px;
    align-self: center;
  }

  @media (max-width: 768px) {
    width: 80px;
    min-width: 80px;
    max-width: none;
    align-self: flex-start;
  }
`,Yt.img`
  width: 1000px;
  height: auto;
  max-width: 100%;
  align-self: flex-end;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 1000px;
    align-self: center;
  }

  @media (max-width: 768px) {
    width: 720px;
    min-width: 720px;
    max-width: none;
    align-self: flex-start;
    margin-left: -80px;
  }
`,Yt.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: row;
    align-items: flex-end;
    gap: 20px;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`),wd=Yt.img`
  width: 400px;
  height: auto;
  max-width: 100%;
  margin-left: 30px;
  margin-top: -30px;
  opacity: 0.8;

  @media (max-width: 1024px) {
    width: 45%;
    max-width: 400px;
    margin-left: 20px;
    margin-top: -20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 325px;
    margin-left: 0;
    margin-top: 0;
  }
`,yd=Yt.img`
  width: 500px;
  height: auto;
  max-width: 100%;
  margin-left: auto;

  @media (max-width: 1024px) {
    width: 55%;
    max-width: 500px;
    margin-left: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 325px;
    margin-left: 0;
  }
  `,vd=Yt.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 380px;
    margin: 0 auto;
    
    .swiper-pagination {
      bottom: 8px !important;
    }
    
    .swiper-pagination-bullet {
      background: #835EEB !important;
      opacity: 0.3;
    }
    
    .swiper-pagination-bullet-active {
      opacity: 1 !important;
    }
  }
`,kd=Yt.div`
  padding: 16px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #E5E7EB;
`,jd=Yt.h3`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 18px;
  color: #835EEB;
  text-align: center;
`,Ed=Yt.ul`
  font-size: 14px;
  list-style: none;
  padding: 0;
  margin: 0;
`,Sd=Yt.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #F3F4F6;
  
  &:last-child {
    border-bottom: none;
  }
`,zd=Yt.span`
  color: #374151;
`,Cd=Yt.span`
  font-weight: 500;
  color: #835EEB;
`,_d=[{title:"\uc2dc\ud5d8\uc9c0 \uc81c\uc791 \ubc0f \ud3c9\uac00",items:[{label:"\ub9de\ucda4 \ubb38\uc81c \ucd94\ucc9c",value:"\u2713"},{label:"\uc624\ub2f5 \ud074\ub9ac\ub2c9",value:"\uc790\ub3d9\xb7\ubb34\ud55c"},{label:"AI \ucc44\uc810",value:"\u2713"},{label:"\ud559\uc2b5 \ubd84\uc11d",value:"\u2713"}]},{title:"\ubb38\uc81c\uc9c0/\uad50\uc7ac \uc81c\uc791",items:[{label:"\ubb38\uc81c\uc740\ud589",value:"\u2713"},{label:"\uad50\uc7ac \uc0dd\uc131",value:"\u2713"},{label:"PDF \ucd9c\ub825",value:"\u2713"},{label:"\ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5",value:"\u2713"}]},{title:"\uc720\uc0ac\ubb38\uc81c \ucd94\ucc9c",items:[{label:"AI \ucd94\ucc9c",value:"\u2713"},{label:"\ub09c\uc774\ub3c4 \uc870\uc808",value:"\u2713"},{label:"\uc720\ud615\ubcc4 \ubd84\ub958",value:"\u2713"},{label:"\uc2e4\uc2dc\uac04 \uc0dd\uc131",value:"\u2713"}]},{title:"\ud559\uc2b5 \uad00\ub9ac \uc2dc\uc2a4\ud15c",items:[{label:"\uc9c4\ub3c4 \uad00\ub9ac",value:"\u2713"},{label:"\uc131\uc801 \ubd84\uc11d",value:"\u2713"},{label:"\ud559\uc2b5 \ub7ad\ud0b9",value:"\uc9c0\uc6d0"},{label:"\ub9ac\ud3ec\ud2b8 \uc0dd\uc131",value:"\u2713"}]}],Pd=()=>{const[t,n]=(0,e.useState)(!1),[i,r]=(0,e.useState)(!1),[a,o]=(0,e.useState)(!0),[l,s]=(0,e.useState)(30),[d,c]=(0,e.useState)(!1),p=(0,e.useRef)(null);(0,e.useEffect)(()=>{const e=e=>{p.current&&!p.current.contains(e.target)&&c(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),e.useEffect(()=>{const e=setTimeout(()=>{r(!0)},100),t=setTimeout(()=>{n(!0)},800);return()=>{clearTimeout(e),clearTimeout(t)}},[]),(0,e.useEffect)(()=>{window.Swiper&&new window.Swiper(".mySwiper",{slidesPerView:1,spaceBetween:12,pagination:{el:".swiper-pagination",clickable:!0},loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1}})},[]),e.useEffect(()=>{let e=window.scrollY;const t=()=>{const t=window.scrollY;t>e&&t>100?o(!1):t<e&&o(!0),e=t};return window.addEventListener("scroll",t),t(),()=>window.removeEventListener("scroll",t)},[]);const[u,x]=(0,e.useState)(!1),[f,h]=(0,e.useState)(null),m=e=>{"free"===e?window.open("https://class.iammathking.com","_blank"):(h(e),x(!0))},g=()=>{x(!1),h(null)};return(0,Ai.jsxs)(ds,{children:[(0,Ai.jsxs)(Hl,{isVisible:a,children:[(0,Ai.jsxs)(Zl,{children:[(0,Ai.jsx)(ql,{fontFamily:"Godo M",children:"\uc218\ud559\ub300\uc655"}),(0,Ai.jsx)(ql,{children:"CLASS"}),(0,Ai.jsx)(ql,{fontFamily:"Playwrite CA",children:"for"}),(0,Ai.jsx)(ql,{children:"School"})]}),(0,Ai.jsxs)(es,{children:[(0,Ai.jsx)(ts,{children:"\ud639\uc2dc \ud559\uad50 \uc120\uc0dd\ub2d8\uc774\uc2e0\uac00\uc694?"}),(0,Ai.jsx)(ns,{onClick:()=>{},children:(0,Ai.jsx)(is,{children:"\ud559\uad50 \ub3c4\uc785 \ubc14\ub85c\uac00\uae30"})})]})]}),(0,Ai.jsx)(Vl,{isVisible:a,children:(0,Ai.jsxs)(Xl,{children:[(0,Ai.jsxs)(Jl,{children:[(0,Ai.jsxs)(Wl,{children:[(0,Ai.jsx)(Yl,{fontFamily:"Godo M",children:"\uc218\ud559\ub300\uc655"}),(0,Ai.jsx)(Yl,{children:"CLASS"}),(0,Ai.jsx)(Yl,{fontFamily:"Playwrite CA",children:"for"}),(0,Ai.jsx)(Yl,{children:"School"})]}),(0,Ai.jsx)(Gl,{children:"\ud639\uc2dc \ud559\uad50 \uc120\uc0dd\ub2d8\uc774\uc2e0\uac00\uc694?"})]}),(0,Ai.jsx)(Ql,{onClick:()=>{},children:(0,Ai.jsx)(Kl,{children:"\ud559\uad50 \ub3c4\uc785 \ubc14\ub85c\uac00\uae30"})})]})}),(0,Ai.jsx)(rs,{isOpen:u,onClick:g,children:(0,Ai.jsxs)(as,{onClick:e=>e.stopPropagation(),children:[(0,Ai.jsx)(os,{onClick:g,children:"\xd7"}),(0,Ai.jsxs)(ls,{children:["basic"===f?"\uc218\ud559\ub300\uc655 Light":"\uc218\ud559\ub300\uc655 Plus"," \ud50c\ub79c"]}),(0,Ai.jsxs)(ss,{children:["\ub0b4 \uc608\uc0c1 \uc218\uc5c5\ub8cc\ub97c \ud655\uc778\ud574 \ubcf4\uc138\uc694",(0,Ai.jsx)("br",{}),"basic"===f?"Light":"Plus"," \ud50c\ub79c \uae30\uc900, 3\uac1c\uc6d4 \ubb34\ub8cc\uccb4\ud5d8 \ud3ec\ud568"]}),(0,Ai.jsx)(Rs,{children:(0,Ai.jsxs)(Ns,{ref:p,children:[(0,Ai.jsxs)(Ds,{isOpen:d,onClick:()=>{c(!d)},children:[l,"\uba85"]}),(0,Ai.jsx)(Ls,{isOpen:d,children:[10,20,30,40,50,60,70,80,90,100].map(e=>(0,Ai.jsxs)($s,{onClick:()=>(s(e),void c(!1)),children:[e,"\uba85"]},e))})]})}),(0,Ai.jsxs)(Ms,{children:[(0,Ai.jsxs)(Vs,{children:[(0,Ai.jsxs)(Ws,{children:[l,"\uba85"]}),(0,Ai.jsxs)(Ys,{children:["\uc6d4 ",function(e){return e*("plus"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:f)?12900:6900)}(l,f).toLocaleString(),"\uc6d0"]})]}),(0,Ai.jsx)(Us,{children:(0,Ai.jsx)(Hs,{type:"range",min:"10",max:"100",step:"5",value:l,progress:(l-10)/90*100,onChange:e=>{s(parseInt(e.target.value))}})})]})]})}),(0,Ai.jsxs)(cs,{children:[(0,Ai.jsxs)(ps,{children:[(0,Ai.jsxs)(us,{isVisible:i,children:[(0,Ai.jsx)(xs,{children:"\uc218\ud559\ub300\uc655 CLASS"}),(0,Ai.jsx)(xs,{color:"#835EEB",fontFamily:"Playwrite CA",children:"for"}),(0,Ai.jsx)(xs,{children:"Academy"})]}),(0,Ai.jsxs)(fs,{isVisible:i,children:["AI\ub85c \uc2dc\uc791\ud558\ub294",(0,Ai.jsx)("br",{}),"1:1 \uc2e4\uc2dc\uac04 \ubc00\ucc29 \uad00\ub9ac"]}),(0,Ai.jsxs)(hs,{isVisible:i,children:["\ub2e8\uc21c\ud55c \ubb38\uc81c\uc740\ud589\uc744 \ub118\uc5b4, AI \ub9de\ucda4\ud615 \uc218\ud559 \ud559\uc2b5 \uc2dc\uc2a4\ud15c\uc744",(0,Ai.jsx)("br",{}),"\ud559\uc6d0\uc5d0 \uccb4\uacc4\uc801\uc73c\ub85c \ub3c4\uc785\ud574 \ubcf4\uc138\uc694"]})]}),(0,Ai.jsxs)(ms,{children:[(0,Ai.jsxs)(gs,{cardType:"free",isVisible:t,style:{transitionDelay:"0ms"},children:[(0,Ai.jsxs)(bs,{children:[(0,Ai.jsxs)(ws,{children:[(0,Ai.jsx)(ys,{cardType:"free",children:"\uc218\ud559\ub300\uc655"}),(0,Ai.jsx)(ys,{cardType:"free",style:{color:"#835EEB"},children:"FREE"})]}),(0,Ai.jsxs)(ks,{cardType:"free",children:["\ucd5c\ub300 ~\uba85\uae4c\uc9c0 ",(0,Ai.jsx)("span",{style:{fontWeight:700},children:"\ubb34\ub8cc\ub85c"})," \uc0ac\uc6a9\ud574\ubcf4\uc138\uc694"]}),(0,Ai.jsx)(js,{children:(0,Ai.jsx)(Es,{cardType:"free",children:"\ucd5c\ub300 5\uba85"})})]}),(0,Ai.jsxs)(zs,{children:[(0,Ai.jsxs)(Cs,{top:0,children:[(0,Ai.jsx)(_s,{}),(0,Ai.jsxs)(Ps,{children:[(0,Ai.jsx)(Is,{children:"\ucd5c\ub300 5\uba85\uae4c\uc9c0"}),(0,Ai.jsx)(Ts,{color:"#835EEB",children:"\ubb34\ub8cc \uc81c\uacf5"})]})]}),(0,Ai.jsxs)(Cs,{top:41,children:[(0,Ai.jsx)(_s,{}),(0,Ai.jsxs)(Ps,{children:[(0,Ai.jsx)(Is,{children:"\ub9e4\ub2ec \uc7a5\ud559\uae08"}),(0,Ai.jsx)(Ts,{color:"#835EEB",children:"30,000\uc6d0"})]})]}),(0,Ai.jsxs)(Cs,{top:82,children:[(0,Ai.jsx)(_s,{}),(0,Ai.jsxs)(Ps,{children:[(0,Ai.jsx)(Is,{children:"\ubb34\uc81c\ud55c \ubb38\uc81c \ud480\uae30"}),(0,Ai.jsx)(Ts,{color:"#835EEB",children:"8\ub9cc \uac1c\uc758 \ucf58\ud150\uce20 \uc81c\uacf5"})]})]}),(0,Ai.jsxs)(Cs,{top:123,children:[(0,Ai.jsx)(_s,{}),(0,Ai.jsxs)(Ps,{children:[(0,Ai.jsx)(Is,{children:"AI \ud544\uae30 \ucc44\uc810"}),(0,Ai.jsx)(Ts,{color:"#835EEB",children:"\ud544\uae30 \ubd84\uc11d \uc81c\uacf5"})]})]}),(0,Ai.jsxs)(Cs,{top:164,children:[(0,Ai.jsx)(_s,{}),(0,Ai.jsxs)(Ps,{children:[(0,Ai.jsx)(Is,{children:"\uc720\uc0ac\ubb38\uc81c"}),(0,Ai.jsx)(Ts,{color:"#835EEB",children:"\uac80\uc0c9 \uae30\ub2a5 \uc81c\uacf5"})]})]})]}),(0,Ai.jsx)(Fs,{onClick:()=>m("free"),children:(0,Ai.jsx)(As,{children:"\uc9c0\uae08 \ubc14\ub85c \uc2dc\uc791\ud558\uae30"})})]}),(0,Ai.jsxs)(gs,{cardType:"basic",isVisible:t,style:{transitionDelay:"200ms"},children:[(0,Ai.jsxs)(bs,{children:[(0,Ai.jsxs)(ws,{children:[(0,Ai.jsx)(ys,{cardType:"basic",children:"\uc218\ud559\ub300\uc655"}),(0,Ai.jsx)(vs,{src:"/Assets/icon/light.svg",alt:"Light",iconType:"light"})]}),(0,Ai.jsx)(ks,{cardType:"basic",children:"\uae30\ubcf8 \uae30\ub2a5"}),(0,Ai.jsxs)(js,{children:[(0,Ai.jsx)(Es,{cardType:"basic",children:"\uc6d4 ~6,900"}),(0,Ai.jsx)(Ss,{cardType:"basic",children:"/\uc778\ub2f9"})]})]}),(0,Ai.jsxs)(zs,{children:[(0,Ai.jsxs)(Cs,{top:0,children:[(0,Ai.jsx)(_s,{}),(0,Ai.jsx)(Ps,{children:(0,Ai.jsx)(Is,{children:"6\uba85"})})]}),(0,Ai.jsxs)(Cs,{top:41,children:[(0,Ai.jsx)(_s,{}),(0,Ai.jsxs)(Ps,{children:[(0,Ai.jsx)(Is,{children:"\ub9e4\ub2ec \uc7a5\ud559\uae08"}),(0,Ai.jsx)(Ts,{color:"#835EEB",children:"30,000\uc6d0"})]})]}),(0,Ai.jsxs)(Cs,{top:82,children:[(0,Ai.jsx)(_s,{}),(0,Ai.jsxs)(Ps,{children:[(0,Ai.jsx)(Is,{children:"\ubb34\uc81c\ud55c \ubb38\uc81c \ud480\uae30"}),(0,Ai.jsx)(Ts,{color:"#835EEB",children:"8\ub9cc \uac1c\uc758 \ucf58\ud150\uce20 \uc81c\uacf5"})]})]}),(0,Ai.jsxs)(Cs,{top:123,children:[(0,Ai.jsx)(_s,{}),(0,Ai.jsxs)(Ps,{children:[(0,Ai.jsx)(Is,{children:"AI \ud544\uae30 \ucc44\uc810"}),(0,Ai.jsx)(Ts,{color:"#835EEB",children:"\ud544\uae30 \ubd84\uc11d \uc81c\uacf5"})]})]}),(0,Ai.jsxs)(Cs,{top:164,children:[(0,Ai.jsx)(_s,{}),(0,Ai.jsxs)(Ps,{children:[(0,Ai.jsx)(Is,{children:"\uc720\uc0ac\ubb38\uc81c"}),(0,Ai.jsx)(Ts,{color:"#835EEB",children:"\uac80\uc0c9 \uae30\ub2a5 \uc81c\uacf5"})]})]})]}),(0,Ai.jsx)(Fs,{onClick:()=>m("basic"),children:(0,Ai.jsx)(As,{children:"\uc608\uc0c1 \uc694\uae08 \ud655\uc778\ud558\uae30"})})]}),(0,Ai.jsxs)(gs,{cardType:"plus",isVisible:t,style:{transitionDelay:"400ms"},children:[(0,Ai.jsxs)(bs,{children:[(0,Ai.jsxs)(ws,{children:[(0,Ai.jsx)(ys,{cardType:"plus",children:"\uc218\ud559\ub300\uc655"}),(0,Ai.jsx)(vs,{src:"/Assets/icon/Plus.svg",alt:"Plus",iconType:"plus"})]}),(0,Ai.jsx)(ks,{cardType:"plus",children:"\ud50c\ub7ec\uc2a4 \uae30\ub2a5"}),(0,Ai.jsxs)(js,{children:[(0,Ai.jsx)(Es,{cardType:"plus",children:"\uc6d4 ~12,900"}),(0,Ai.jsx)(Ss,{cardType:"plus",children:"/\uc778\ub2f9"})]})]}),(0,Ai.jsxs)(zs,{style:{height:"auto",gap:"22px",display:"flex",flexDirection:"column"},children:[(0,Ai.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px",minHeight:"24px"},children:[(0,Ai.jsx)(_s,{cardType:"plus"}),(0,Ai.jsx)(Ps,{children:(0,Ai.jsxs)(Bs,{children:[(0,Ai.jsx)(Is,{cardType:"plus",children:"\ubaa8\ub4e0"}),(0,Ai.jsx)(vs,{src:"/Assets/icon/light.svg",alt:"Light",iconType:"light",size:"small"}),(0,Ai.jsx)(Is,{cardType:"plus",children:"\uae30\ub2a5"})]})})]}),(0,Ai.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,Ai.jsx)(_s,{cardType:"plus"}),(0,Ai.jsxs)(Ps,{children:[(0,Ai.jsx)(Is,{cardType:"plus",isPrimary:!0,children:"AI \ud559\uc2b5 \uad00\ub9ac"}),(0,Ai.jsx)(Ts,{color:"#7A828D",children:"\uc790\ub3d9 \uc219\uc81c \ubc0f \uc624\ub2f5 \ub178\ud2b8"})]})]}),(0,Ai.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,Ai.jsx)(_s,{cardType:"plus"}),(0,Ai.jsxs)(Ps,{children:[(0,Ai.jsx)(Is,{cardType:"plus",isPrimary:!0,children:"AI \ub9ac\ud3ec\ud2b8"}),(0,Ai.jsx)(Ts,{color:"#7A828D",children:"\uc8fc\uac04 \ud559\uc2b5 \ubd84\uc11d \ub9ac\ud3ec\ud2b8"})]})]}),(0,Ai.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,Ai.jsx)(_s,{cardType:"plus"}),(0,Ai.jsxs)(Ps,{children:[(0,Ai.jsx)(Is,{cardType:"plus",isPrimary:!0,children:"AI \uc2e4\uc2dc\uac04 \ucc44\ud305"}),(0,Ai.jsx)(Ts,{color:"#7A828D",children:"\ubb34\uc81c\ud55c AI \uc9c8\ubb38\ub2f5\ubcc0"})]})]}),(0,Ai.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,Ai.jsx)(_s,{cardType:"plus"}),(0,Ai.jsxs)(Ps,{children:[(0,Ai.jsx)(Is,{cardType:"plus",isPrimary:!0,children:"\ud559\ubd80\ubaa8 \uad00\ub9ac \uc11c\ube44\uc2a4"}),(0,Ai.jsx)(Ts,{color:"#7A828D",children:"\ud074\ub798\uc2a4 \uacc4\uc815 \uc81c\uacf5"})]})]})]}),(0,Ai.jsx)(Fs,{cardType:"plus",onClick:()=>m("plus"),children:(0,Ai.jsx)(As,{children:"\uc608\uc0c1 \uc694\uae08 \ud655\uc778\ud558\uae30"})})]})]}),(0,Ai.jsx)(Os,{onClick:()=>{const e=document.querySelector("[data-trial-section]");e&&e.scrollIntoView({behavior:"smooth",block:"start"})},"aria-label":"\ub2e4\uc74c \uc139\uc158\uc73c\ub85c \uc2a4\ud06c\ub864",children:(0,Ai.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Ai.jsx)("path",{d:"M7 10L12 15L17 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),(0,Ai.jsxs)(Xs,{"data-trial-section":!0,children:[(0,Ai.jsx)(td,{children:"\ubb34\ub8cc \uccb4\ud5d8 \uc2e0\uccad \ubc29\ubc95"}),(0,Ai.jsx)(nd,{children:"\uc218\ud559\ub300\uc655 CLASS\ub97c \uac04\ud3b8\ud558\uac8c \uccb4\ud5d8\ud574\ubcf4\uc138\uc694"}),(0,Ai.jsxs)(Js,{children:[(0,Ai.jsxs)(Gs,{children:[(0,Ai.jsxs)(Qs,{children:[(0,Ai.jsx)(Ks,{children:"01"}),(0,Ai.jsxs)(Zs,{children:["\uccb4\ud5d8 \uc2e0\uccad \uc2dc, ",(0,Ai.jsx)("br",{}),"\ubb34\ub8cc \uccb4\ud5d8 \uacc4\uc815\uc774 \ubb38\uc790\ub85c \uc548\ub0b4\ub3fc\uc694"]})]}),(0,Ai.jsx)(qs,{children:(0,Ai.jsxs)(ed,{children:["\uccb4\ud5d8 \uc2e0\uccad \uc644\ub8cc \ud6c4",(0,Ai.jsx)("br",{}),"\uc989\uc2dc \uc120\uc0dd\ub2d8\uacfc \ud559\uc0dd\uc6a9 \uacc4\uc815 \uc815\ubcf4\uac00 \ubb38\uc790\ub85c \ubc1c\uc1a1\ub429\ub2c8\ub2e4.",(0,Ai.jsx)("br",{}),"\ubcc4\ub3c4\uc758 \ubcf5\uc7a1\ud55c \uac00\uc785 \uc808\ucc28 \uc5c6\uc774 \ubc14\ub85c \uccb4\ud5d8\uc744 \uc2dc\uc791\ud560 \uc218 \uc788\uc5b4\uc694."]})}),(0,Ai.jsx)(id,{children:(0,Ai.jsx)(rd,{children:"\ubb34\ub8cc \uccb4\ud5d8 \uc2dc\uc791\ud558\uae30"})})]}),(0,Ai.jsx)(ad,{children:(0,Ai.jsx)("img",{src:"/Pricing/\ubb34\ub8cc\uccb4\ud5d8 01.png",alt:"\ubb34\ub8cc\uccb4\ud5d8 01",style:{width:"100%",height:"100%",objectFit:"cover"}})})]}),(0,Ai.jsxs)(Js,{children:[(0,Ai.jsxs)(Gs,{children:[(0,Ai.jsxs)(Qs,{children:[(0,Ai.jsx)(Ks,{children:"02"}),(0,Ai.jsx)(Zs,{children:"\uc120\uc0dd\ub2d8\uc6a9 \uacc4\uc815\uc5d0 \ub85c\uadf8\uc778"})]}),(0,Ai.jsx)(qs,{children:(0,Ai.jsxs)(ed,{children:["\ubc1b\uc73c\uc2e0 \uc120\uc0dd\ub2d8\uc6a9 \uacc4\uc815 \uc815\ubcf4\ub85c",(0,Ai.jsx)("br",{}),"\uc6f9\uc0ac\uc774\ud2b8\uc5d0 \uc811\uc18d\ud558\uc5ec \ub85c\uadf8\uc778\ud558\uc138\uc694.",(0,Ai.jsx)("br",{}),"\ud559\uc0dd \uad00\ub9ac\uc640 \ud559\uc2b5 \ud604\ud669\uc744",(0,Ai.jsx)("br",{}),"\ud55c\ub208\uc5d0 \ud655\uc778\ud560 \uc218 \uc788\ub294 \ub300\uc2dc\ubcf4\ub4dc\uac00 \uc81c\uacf5\ub429\ub2c8\ub2e4."]})})]}),(0,Ai.jsx)(ad,{children:(0,Ai.jsx)("img",{src:"/Pricing/\ubb34\ub8cc\uccb4\ud5d8 02.png",alt:"\ubb34\ub8cc\uccb4\ud5d8 02",style:{width:"100%",height:"100%",objectFit:"cover"}})})]}),(0,Ai.jsxs)(Js,{children:[(0,Ai.jsxs)(Gs,{children:[(0,Ai.jsxs)(Qs,{children:[(0,Ai.jsx)(Ks,{children:"03"}),(0,Ai.jsx)(Zs,{children:"\ud559\uc0dd\uc6a9 \uacc4\uc815\uc5d0 \ub85c\uadf8\uc778"})]}),(0,Ai.jsx)(qs,{children:(0,Ai.jsxs)(ed,{children:["\ud559\uc0dd\ub4e4\uc740 \ubaa8\ubc14\uc77c \uc571\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud558\uc5ec",(0,Ai.jsx)("br",{}),"\uacc4\uc815 \uc815\ubcf4\ub85c \ub85c\uadf8\uc778\ud569\ub2c8\ub2e4.",(0,Ai.jsx)("br",{}),"\uc9c1\uad00\uc801\uc778 \uc778\ud130\ud398\uc774\uc2a4\ub85c \ub204\uad6c\ub098 \uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc5b4\uc694."]})})]}),(0,Ai.jsx)(ad,{children:(0,Ai.jsx)("img",{src:"/Pricing/\ubb34\ub8cc\uccb4\ud5d8 03.png",alt:"\ubb34\ub8cc\uccb4\ud5d8 03",style:{width:"100%",height:"100%",objectFit:"cover"}})})]}),(0,Ai.jsxs)(Js,{children:[(0,Ai.jsxs)(Gs,{children:[(0,Ai.jsxs)(Qs,{children:[(0,Ai.jsx)(Ks,{children:"04"}),(0,Ai.jsxs)(Zs,{children:["\ud544\uc694\ud55c \uacbd\uc6b0,",(0,Ai.jsx)("br",{}),"\ud559\uc0dd\uc744 \ucd94\uac00 \ud558\uc2e4 \uc218\ub3c4 \uc788\uc5b4\uc694"]})]}),(0,Ai.jsx)(qs,{children:(0,Ai.jsxs)(ed,{children:["\uc120\uc0dd\ub2d8 \ub300\uc2dc\ubcf4\ub4dc\uc5d0\uc11c \uac04\ud3b8\ud558\uac8c",(0,Ai.jsx)("br",{}),"\uc0c8\ub85c\uc6b4 \ud559\uc0dd\uc744 \ucd94\uac00\ud558\uace0 \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,Ai.jsx)("br",{}),"\uccb4\ud5d8 \uae30\uac04 \uc911\uc5d0\ub3c4 \ud559\uc6d0 \uc0c1\ud669\uc5d0 \ub9de\ucdb0 \uc790\uc720\ub86d\uac8c \uc870\uc815\ud558\uc138\uc694."]})})]}),(0,Ai.jsx)(ad,{children:(0,Ai.jsx)("img",{src:"/Pricing/\ubb34\ub8cc\uccb4\ud5d8 04.png",alt:"\ubb34\ub8cc\uccb4\ud5d8 04",style:{width:"100%",height:"100%",objectFit:"cover"}})})]}),(0,Ai.jsxs)(Js,{children:[(0,Ai.jsxs)(Gs,{children:[(0,Ai.jsxs)(Qs,{children:[(0,Ai.jsx)(Ks,{children:"05"}),(0,Ai.jsx)(Zs,{children:"\ud559\uc2b5\uc9c0\ub97c \ubc30\ubd80\ud558\uace0"})]}),(0,Ai.jsx)(qs,{children:(0,Ai.jsxs)(ed,{children:["\uc6d0\ud558\ub294 \ub2e8\uc6d0\uacfc \ub09c\uc774\ub3c4\ub97c \uc120\ud0dd\ud558\uc5ec",(0,Ai.jsx)("br",{}),"\ud559\uc2b5\uc9c0\ub97c \uc0dd\uc131\ud558\uace0 \ubc30\ubd80\ud558\uc138\uc694.",(0,Ai.jsx)("br",{}),"\ud559\uc0dd\ub4e4\uc740 \uc571\uc5d0\uc11c \ubc14\ub85c \ubb38\uc81c\ub97c \ud480\uace0",(0,Ai.jsx)("br",{}),"\uc2e4\uc2dc\uac04\uc73c\ub85c \ucc44\uc810\ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})})]}),(0,Ai.jsx)(ad,{children:(0,Ai.jsx)("img",{src:"/Pricing/\ubb34\ub8cc\uccb4\ud5d8 05.png",alt:"\ubb34\ub8cc\uccb4\ud5d8 05",style:{width:"100%",height:"100%",objectFit:"cover"}})})]}),(0,Ai.jsxs)(Js,{children:[(0,Ai.jsxs)(Gs,{children:[(0,Ai.jsxs)(Qs,{children:[(0,Ai.jsx)(Ks,{children:"06"}),(0,Ai.jsxs)(Zs,{children:["\ud480\uc774 \uacb0\uacfc \ub300\uc2dc\ubcf4\ub4dc\ub97c",(0,Ai.jsx)("br",{}),"\ud655\uc778\ud558\uc138\uc694!"]})]}),(0,Ai.jsx)(qs,{children:(0,Ai.jsxs)(ed,{children:["\ud559\uc0dd\ub4e4\uc758 \ud559\uc2b5 \uc9c4\ub3c4\uc640 \uc131\ucde8\ub3c4\ub97c",(0,Ai.jsx)("br",{}),"\uc2e4\uc2dc\uac04\uc73c\ub85c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,Ai.jsx)("br",{}),"\ucde8\uc57d \ub2e8\uc6d0 \ubd84\uc11d\uacfc \uac1c\ubcc4 \ud559\uc2b5 \uad00\ub9ac\ub85c",(0,Ai.jsx)("br",{}),"\ud6a8\uacfc\uc801\uc778 \uc9c0\ub3c4\uac00 \uac00\ub2a5\ud574\uc694."]})})]}),(0,Ai.jsx)(ad,{children:(0,Ai.jsx)("img",{src:"/Pricing/\ubb34\ub8cc\uccb4\ud5d8 06.png",alt:"\ubb34\ub8cc\uccb4\ud5d8 06",style:{width:"100%",height:"100%",objectFit:"cover"}})})]})]}),(0,Ai.jsxs)(od,{"data-comparison-section":!0,children:[(0,Ai.jsxs)(ld,{children:[(0,Ai.jsxs)(sd,{children:["\ud3b8\ub9ac\ud55c \ubb38\uc81c\uc740\ud589\uc5d0",(0,Ai.jsx)("br",{}),"\uc218\ud559\ub300\uc655\ub9cc\uc758 AI \uae30\uc220\uc744 \ub354\ud569\ub2c8\ub2e4"]}),(0,Ai.jsxs)(dd,{children:["\uae30\uc874 \ubb38\uc81c\uc740\ud589 \uae30\ub2a5\uc5d0 \uc218\ud559\ub300\uc655\ub9cc\uc758 \uae30\uc220\uc744 \ub354\ud574,",(0,Ai.jsx)("br",{}),"\uc644\ubcbd\ud55c 1:1 \ub9de\ucda4\ud615 \ud559\uc2b5 \uc9c4\ud589\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."]})]}),(0,Ai.jsx)(cd,{children:"\uae30\uc874 \ubb38\uc81c\uc740\ud589 \uae30\ub2a5"}),(0,Ai.jsxs)(pd,{children:[(0,Ai.jsxs)(vd,{children:[(0,Ai.jsxs)("div",{className:"swiper mySwiper",children:[(0,Ai.jsx)("div",{className:"swiper-wrapper",children:_d.map((e,t)=>(0,Ai.jsx)("div",{className:"swiper-slide",children:(0,Ai.jsxs)(kd,{children:[(0,Ai.jsx)(jd,{children:e.title}),(0,Ai.jsx)(Ed,{children:e.items.map((e,t)=>(0,Ai.jsxs)(Sd,{children:[(0,Ai.jsx)(zd,{children:e.label}),(0,Ai.jsx)(Cd,{children:e.value})]},t))})]})},t))}),(0,Ai.jsx)("div",{className:"swiper-pagination"})]}),(0,Ai.jsx)("img",{src:"/Pricing/class algorithm.svg",alt:"Class Algorithm",style:{width:"100%",maxWidth:"325px",height:"auto",marginTop:"40px",opacity:.8}})]}),(0,Ai.jsxs)(ud,{children:[(0,Ai.jsxs)(xd,{children:[(0,Ai.jsxs)(fd,{children:[(0,Ai.jsx)(hd,{}),(0,Ai.jsx)(hd,{children:"\uc218\ud559\ub300\uc655"}),(0,Ai.jsx)(hd,{children:"\ud0c0\uc0ac"})]}),(0,Ai.jsx)(md,{children:(0,Ai.jsx)(gd,{src:"/Pricing/\uc0c1\ub2e8 \ub370\uc774\ud130.svg",alt:"\uae30\ub2a5 \ube44\uad50\ud45c \uc0c1\ub2e8"})})]}),(0,Ai.jsxs)(bd,{children:[(0,Ai.jsx)(wd,{src:"/Pricing/class algorithm.svg",alt:"Class Algorithm"}),(0,Ai.jsx)(yd,{src:"/Pricing/\ud558\ub2e8 \ub370\uc774\ud130.svg",alt:"\uae30\ub2a5 \ube44\uad50\ud45c \ud558\ub2e8"})]})]})]})]})]})},Id=(Yt.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 60px auto;
  position: relative;
  background: #F3EFFD;
  border-radius: 16px;
  padding: 30px;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 12px;
    margin: 0 auto 24px auto;
    border-radius: 10px;
  }
`,Yt.div`
  text-align: center;
  opacity: ${e=>e.fade?0:1};
  transform: translateY(${e=>e.fade?"20px":"0"});
  transition: all 0.6s ease;
`,Yt.h3`
  font-size: 24px;
  font-weight: 700;
  color: #33373B;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 12px;
  }
`,Yt.p`
  font-size: 18px;
  color: #575C64;
  line-height: 1.6;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`,Yt.div`
  font-size: 16px;
  color: #C6B5F6;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,Yt.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 24px;
  color: #835EEB;
  cursor: pointer;
  z-index: 2;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(131, 94, 235, 0.1);
    color: #6B4BC4;
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
    padding: 4px;
  }
`),Td=(Yt(Id)`
  left: 16px;
`,Yt(Id)`
  right: 16px;
`,Yt.section`
  width: 100%;
  background: #FFFFFF;
  padding: 40px 0 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 56px - 80px);
  box-sizing: border-box;
  overflow-y: auto;
  

  
  @media (max-width: 768px) {
    padding: 20px 0 40px 0;
  }
`),Bd=(Yt.h2`
  font-size: 32px;
  font-weight: 700;
  color: #222;
  margin-bottom: 32px;
  text-align: center;
  

  
  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`,Yt.ul`
  width: 100%;
  max-width: 800px;
  background: #3EFFD;
  padding: 0;
  margin: 0;
  list-style: none;
  

  
  @media (max-width: 768px) {
    max-width: 95%;
  }
`),Fd=Yt.li`
  border-bottom: 1px solid #E5E7EB;
`,Ad=Yt.button`
  width: 100%;
  background: none;
  border: none;
  outline: none;
  padding: 32px 0 32px 0;
  font-size: 22px;
  font-weight: 600;
  color: #222;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    color: #835EEB;
    background: rgba(131, 94, 235, 0.02);
    padding-left: 16px;
  }

  &:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
  
  @media (max-width: 768px) {
    padding: 16px 0 16px 0;
    font-size: 15px;
    &:hover { padding-left: 8px; }
  }
`,Od=Yt.div`
  font-size: 18px;
  color: #555;
  margin: 0 0 32px 0;
  line-height: 1.6;
  padding-right: 32px;
  padding-left: 16px;
  animation: slideDown 0.3s ease-out;
  border-left: 4px solid #835EEB;

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @media (max-width: 768px) {
    font-size: 13px;
    margin: 0 0 16px 0;
    padding-right: 12px;
    padding-left: 6px;
  }
`,Rd=Yt.span`
  font-size: 32px;
  color: #835EEB;
  margin-left: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  &:hover { background: rgba(131, 94, 235, 0.1); transform: scale(1.1); }
  @media (max-width: 768px) {
    font-size: 18px;
    margin-left: 6px;
    width: 18px;
    height: 18px;
  }
`,Nd=[{question:"\uc218\ud559\ub300\uc655 \ud074\ub798\uc2a4\uac00 \ubb54\uac00\uc694?",answer:"\uc218\ud559\ub300\uc655 \ud074\ub798\uc2a4\ub294 \uc218\ud559\ub300\uc655\uc758 \uc628\ub77c\uc778 \ud559\uc2b5 \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4."},{question:"\uc120\uc0dd\ub2d8\uc740 \uc5b4\ub5a4 \uae30\uae30\ub85c \uc0ac\uc6a9 \uac00\ub2a5\ud55c\uac00\uc694?",answer:"\uc120\uc0dd\ub2d8\uaed8\uc11c\ub294 \uc6f9\uc0ac\uc774\ud2b8\uc5d0 \uc811\uc18d\ud574\uc11c \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc6f9\uc0ac\uc774\ud2b8\ub294 \ubc18\uc751\ud615 \uc6f9\uc0ac\uc774\ud2b8\ub85c \uc81c\uc791\ub418\uc5b4 \uc788\uc5b4\uc11c \uc2a4\ub9c8\ud2b8\ud3f0, \ud0dc\ube14\ub9bf, \ub178\ud2b8\ubd81, \ub370\uc2a4\ud06c\ud1b1\uc5d0\uc11c \ubaa8\ub450 \uc0ac\uc6a9 \uac00\ub2a5\ud558\uc2ed\ub2c8\ub2e4."},{question:"\ud559\uc0dd\ub4e4\uc758 \ud559\uc2b5 \ub370\uc774\ud130\ub294 \uc5b4\ub5bb\uac8c \uad00\ub9ac\ub418\ub098\uc694?",answer:"\ud559\uc0dd\ub4e4\uc740 \uae30\ubcf8\uc801\uc73c\ub85c \uc571\uc2a4\ud1a0\uc5b4, \ud50c\ub808\uc774\uc2a4\ud1a0\uc5b4\uc5d0\uc11c \uc2a4\ub9c8\ud2b8\ud3f0\uc6a9 \uc571, \ud0dc\ube14\ub9bf \uc6a9 \uc571\uc744 \uc124\uce58\ud560 \uc218 \uc788\uac8c \ube0c\ub77c\uc6b0\uc800\ub97c \ud65c\uc6a9\ud558\uc5ec \uc571\uc744 \uad6c\ub3d9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc989, \uc544\uc774\ud3f0, \uac24\ub7ed\uc2dc \uc2a4\ub9c8\ud2b8\ud3f0, \uac24\ub7ed\uc2dc \ud0dc\ube14\ub9bf, \uc544\uc774\ud328\ub4dc, \ub178\ud2b8\ubd81, \ub370\uc2a4\ud06c\ud1b1, \uc11c\ud53c\uc2a4, \uc6e8\uc77c\ubd81, \ud06c\ub86c\ubd81 \ub4f1 \uc7a5\ube44\uc640 \uae30\uae30\uc5d0 \uc804\ud600 \uad6c\uc560\ubc1b\uc9c0 \uc54a\uace0 \uacf5\uc815\ud55c AI \uc218\ud559 \uad50\uc721\uc744 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."},{question:"\uc5b4\ub5a4 \ud559\ub144\uc774 \uc0ac\uc6a9 \uac00\ub2a5\ud55c\uac00\uc694?",answer:"\ucd08\ub4f1\ud559\uad50 1\ud559\ub144\ubd80\ud130 \uace0\ub4f1\ud559\uad50 3\ud559\ub144\uae4c\uc9c0 \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ucd081, \ucd082\ub294 \ucd9c\uc2dc \uc608\uc815\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."},{question:"\ud544\uae30 \uae30\ub2a5\uc774 \uc874\uc7ac\ud558\ub098\uc694? \ud559\uc0dd \ud544\uae30\ub97c \uc120\uc0dd\ub2d8\uc774 \ubcfc \uc218 \uc788\ub098\uc694?",answer:"\ud544\uae30 \uae30\ub2a5\uc774 \uc644\ubcbd\ud558\uac8c \uad6c\ud604\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ud559\uc0dd\uc740 \ub514\ubc14\uc774\uc2a4\uc5d0\uc11c \uc218\ud559 \ubb38\uc81c \uc704\uc5d0 \ud544\uae30\ub97c \ud558\uba74\uc11c \ubb38\uc81c\ub97c \ud480 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8 \ud544\uae30 \uae30\ub85d\uc740 \ubb38\uc81c\uc640 \ud568\uaed8 \ud55c \ubb38\uc81c \ub2e8\uc704\ub85c \uc2e4\uc2dc\uac04\uc73c\ub85c \uc120\uc0dd\ub2d8 \ub300\uc2dc\ubcf4\ub4dc\uc5d0 \ubc18\uc601\ub418\uc5b4 \uc120\uc0dd\ub2d8\uc774 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."},{question:"\ud559\uc0dd\ub4e4\uc758 \ud559\uc2b5 \ud604\ud669\uc744 \uc120\uc0dd\ub2d8\uc774 \ubcfc \uc218 \uc788\ub098\uc694?",answer:"\uc120\uc0dd\ub2d8\uc774 \ub0b4\uc900 \uc219\uc81c, \ud559\uc0dd\uc774 \ucd94\uac00\uc801\uc73c\ub85c \uc790\uc2b5\ud55c \ubb38\uc81c \ub4f1 \ubaa8\ub4e0 \ud559\uc2b5\ub7c9\uacfc \ud559\uc2b5 \uae30\ub85d\uc744 \uc120\uc0dd\ub2d8\uc774 \uc77c\ubcc4, \uc8fc\ubcc4, \uc6d4\ubcc4\ub85c \ud604\ud669\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."},{question:"\uc7a5\ud559\uae08\uc740 \uc5b4\ub5a4 \uae30\ub2a5\uc778\uac00\uc694?",answer:"\uc218\ud559\ub300\uc655\uc740 \ud559\uc0dd\ub4e4\uc758 \ub3d9\uae30\ubd80\uc5ec\ub97c \uc704\ud574 \uc7a5\ud559\uae08 \uc81c\ub3c4\ub97c \uc6b4\uc601\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc218\ud559 \uc2e4\ub825\uacfc \uc131\uc801\uc5d0 \uad00\uacc4\uc5c6\uc774 AI\uac00 \ucd94\ucc9c\ud574 \uc8fc\ub294 \ub0b4 \uc2e4\ub825\uc5d0 \ub9de\ub294 \ubb38\uc81c\ub97c \uafb8\uc900\ud788 \ud47c\ub2e4\uba74, \ubaa8\ub4e0 \ud559\uc0dd\ub4e4\uc774 \uc608\uc678 \uc5c6\uc774 \ud655\uc815\uc801\uc73c\ub85c \uc7a5\ud559\uae08\uc744 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. **\uc989, \uc131\uc801\uc5d0 \ub530\ub77c \uc7a5\ud559\uae08\uc744 \ubc1b\ub294 \uac83\uc774 \uc544\ub2c8\ub77c, \ubaa8\ub4e0 \ud559\uc0dd\uc774 \ub098\uc758 \ub178\ub825\uc5d0 \ub530\ub77c \uc7a5\ud559\uae08\uc744 \ubc1b\uc744 \uc218 \uc788\ub294 \uc2dc\uc2a4\ud15c\uc785\ub2c8\ub2e4.** \uc7a5\ud559\uae08\uc740 \uc218\ud559\ub300\uc655 \uc571 \ub0b4\uc5d0\uc11c \ub124\uc774\ubc84\ud398\uc774\ub85c \ubcc0\ud658\ud558\uc5ec \uacb0\uc81c \ubc0f \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ud559\uc0dd\ub2f9 \uc6d4\ubcc4\ub85c \ubc1b\uc544 \uac08 \uc218 \uc788\ub294 \ucd5c\ub300\uc758 \uc7a5\ud559\uae08 \uc591\uc740 \ub2e8\uccb4 \ub3c4\uc785\ud558\uc2e4 \ub54c \uc124\uc815\ud558\uc2e4 \uc218 \uc788\uc73c\uba70, **\uc120\uc0dd\ub2d8\uaed8\uc11c \uc124\uc815\ud558\uc2e0 \ud50c\ub79c\uc5d0 \ub530\ub77c \ub9de\ucda4 \uc608\uc0b0 \uc124\uacc4\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4.**"}],Dd=Yt.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  background: #F3EFFD;
  color: #835EEB;
  font-size: 12px;
  font-weight: 600;
  border-radius: 20px;
  margin-right: 12px;
  white-space: nowrap;
  width: 60px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 11px;
    padding: 3px 10px;
    margin-right: 8px;
    width: 50px;
  }
`,Ld=[{id:1,title:"\uc11c\uc220\ud615 \ucd9c\uc81c \ubc0f \ucca8\uc0ad \uae30\ub2a5 \ucd9c\uc2dc",text:"\ubb38\uc81c\ub97c \ucd94\uac00\ud560 \ub54c, \uc11c\uc220\ud615 \ubb38\uc81c\ub97c \ucd9c\uc81c\ud560 \uc218 \uc788\uc5b4\uc694.",date:"25-06-09",category:"CLASS"},{id:2,title:"[\ud559\uc0dd\uc6a9 \uc571] \ud559\uc2b5 \ud0ed \uac1c\ud3b8",text:"\ud559\uc2b5 \ud0ed\uc774 \uac1c\ud3b8\ub410\uc5b4\uc694.",date:"25-05-20",category:"APP"},{id:3,title:"\ubd84\uc11d \uac1c\ud3b8",text:"[\uac1c\ubcc4 \uc219\uc81c \ubd84\uc11d] \uc219\uc81c\ubcc4\ub85c \ud559\uc0dd \uc2e4\ub825\uc744 \ubd84\uc11d\ud574 \ub4dc\ub824\uc694.",date:"24-05-20",category:"CLASS"},{id:4,title:"\ub2f4\ub2f9 \ud074\ub798\uc2a4 \ubc0f \ud559\uc0dd\ub9cc \ubcf4\uae30",text:"\uc774\uc81c \uc6d0\ud558\uba74 \ub2f4\ub2f9 \ud074\ub798\uc2a4 \ubc0f \ud559\uc0dd\ub9cc \ubcfc \uc218 \uc788\uc5b4\uc694.",date:"25-05-16",category:"CLASS"},{id:5,title:"OX \ucc44\uc810 \ucd9c\uc2dc",text:"OX\ub97c \uc120\ud0dd\ud574\uc11c \ud559\uc0dd \uc815\uc624\ub2f5\uc744 \uae30\ub85d\ud560 \uc218 \uc788\uc5b4\uc694.",date:"25-05-16",category:"CLASS"},{id:6,title:"\uae30\ucd9c \ucd94\uac00 \ubc0f \ud559\uc2b5\uc9c0 \uac1c\uc120",text:"[\uae30\ucd9c] \uc218\ub2a5, \ubaa8\uc758\uace0\uc0ac \uae30\ucd9c\uc744 \uc2dc\ud5d8\uc9c0 \ub2e8\uc704\ub85c \ubc30\ubd80\ud560 \uc218 \uc788\uc5b4\uc694.",date:"25-04-28",category:"CLASS"},{id:7,title:"\ucd9c\ub825\ubb3c \ucc44\uc810 \ucd9c\uc2dc",text:"\uc120\uc0dd\ub2d8\uc6a9 \ub300\uc2dc\ubcf4\ub4dc\uac00 \ub354\uc6b1 \uc9c1\uad00\uc801\uc774\uace0 \ud6a8\uc728\uc801\uc73c\ub85c \uac1c\uc120\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",date:"25-03-21",category:"CLASS"},{id:8,title:"[\ud559\uc0dd\uc6a9 \uc6f9] \uac1c\ub150\uc9d1 \uc554\uae30\ubaa8\ub4dc \ucd94\uac00",text:"\ud559\uc0dd\uc6a9 \uc6f9\uc5d0\uc11c \uac1c\ub150\uc9d1 \uc554\uae30 \ubaa8\ub4dc\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc5b4\uc694.",date:"25-04-18",category:"WEB"},{id:9,title:"\uc790\ub3d9 \ud074\ub9ac\ub2c9 / \ubb34\ud55c \ud074\ub9ac\ub2c9 \ucd9c\uc2dc",text:"[\uc790\ub3d9 \ud074\ub9ac\ub2c9] \ud074\ub9ac\ub2c9\uc774 \uc790\ub3d9\uc73c\ub85c \ubc30\ubd80\ub418\uac8c \uc124\uc815\ud560 \uc218 \uc788\uc5b4\uc694.",date:"25-04-15",category:"CLASS"}];Yt.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 12px auto;
  font-size: 16px;
  color: #835EEB;
  font-weight: 600;
  text-align: left;
  letter-spacing: -0.5px;
  @media (max-width: 768px) {
    font-size: 13px;
    max-width: 95%;
    margin-bottom: 8px;
  }
`;const $d=Yt.h1`
  width: 100%;
  max-width: 800px;
  margin: 64px auto 56px auto;
  font-size: 2.7rem;
  font-weight: 800;
  color: #1E2231;
  text-align: center;
  line-height: 1.28;
  letter-spacing: -1px;
  white-space: pre-line;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 36px auto 24px auto;
  }
`;function Md(){const[t,n]=(0,e.useState)(null),[i,r]=(0,e.useState)(1),a="undefined"!==typeof window&&window.innerWidth<=768?8:Nd.length,o=Math.ceil(Nd.length/a),l=Nd.slice((i-1)*a,i*a);return(0,Ai.jsxs)(Td,{children:[(0,Ai.jsx)(Bd,{children:l.map((e,r)=>{const o=(i-1)*a+r;return(0,Ai.jsxs)(Fd,{children:[(0,Ai.jsxs)(Ad,{open:t===o,onClick:()=>n(t===o?null:o),children:[e.question,(0,Ai.jsx)(Rd,{children:t===o?"\xd7":"+"})]}),t===o&&(0,Ai.jsx)(Od,{children:e.answer})]},e.question)})}),o>1&&(0,Ai.jsxs)(Jd,{children:[(0,Ai.jsx)("button",{"aria-label":"\uc774\uc804 \ud398\uc774\uc9c0",disabled:1===i,onClick:()=>r(i-1),children:"<"}),(0,Ai.jsxs)("span",{children:[i," / ",o]}),(0,Ai.jsx)("button",{"aria-label":"\ub2e4\uc74c \ud398\uc774\uc9c0",disabled:i===o,onClick:()=>r(i+1),children:">"})]})]})}const Ud=()=>{const t=function(){const[t,n]=(0,e.useState)(!1);return(0,e.useEffect)(()=>{const e=()=>n(window.innerWidth<=768);return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),t}(),[n,i]=(0,e.useState)(null),[r,a]=(0,e.useState)(1),o=t?6:Ld.length,l=Math.ceil(Ld.length/o),s=Ld.slice((r-1)*o,r*o),[d,c]=(0,e.useState)(!1),[p,u]=(0,e.useState)(0);(0,e.useEffect)(()=>{if(t)return;const e=setInterval(()=>{c(!0),setTimeout(()=>{u(e=>e===Ld.length-1?0:e+1),c(!1)},300)},4e3);return()=>clearInterval(e)},[t]);return t?(0,Ai.jsxs)(Td,{as:"section",children:[(0,Ai.jsx)(Bd,{as:"ul",children:s.map((e,t)=>{const a=(r-1)*o+t;return(0,Ai.jsxs)(Fd,{as:"li",children:[(0,Ai.jsxs)(Ad,{open:n===a,onClick:()=>i(n===a?null:a),style:{textAlign:"left"},children:[(0,Ai.jsx)(Dd,{children:e.category}),(0,Ai.jsx)("span",{style:{fontWeight:600,textAlign:"left",flex:1,fontSize:"14px"},children:e.title}),(0,Ai.jsx)("span",{style:{color:"#9C7EEF",fontSize:14,fontWeight:300,marginRight:8},children:e.date}),(0,Ai.jsx)(Rd,{children:n===a?"\xd7":"+"})]}),n===a&&(0,Ai.jsxs)(Od,{style:{textAlign:"left"},children:[(0,Ai.jsx)("div",{style:{marginBottom:8,fontSize:15,color:"#444",textAlign:"left"},children:e.text}),(0,Ai.jsx)("div",{style:{color:"#C6B5F6",fontSize:13,textAlign:"left"},children:e.date})]})]},e.id)})}),l>1&&(0,Ai.jsxs)(Jd,{children:[(0,Ai.jsx)("button",{"aria-label":"\uc774\uc804 \ud398\uc774\uc9c0",disabled:1===r,onClick:()=>a(r-1),children:"<"}),(0,Ai.jsxs)("span",{children:[r," / ",l]}),(0,Ai.jsx)("button",{"aria-label":"\ub2e4\uc74c \ud398\uc774\uc9c0",disabled:r===l,onClick:()=>a(r+1),children:">"})]})]}):(0,Ai.jsx)(Td,{as:"section",children:(0,Ai.jsx)(Bd,{as:"ul",children:Ld.map((e,t)=>(0,Ai.jsxs)(Fd,{as:"li",children:[(0,Ai.jsxs)(Ad,{open:n===t,onClick:()=>i(n===t?null:t),style:{textAlign:"left"},children:[(0,Ai.jsx)(Dd,{children:e.category}),(0,Ai.jsx)("span",{style:{fontWeight:600,textAlign:"left",flex:1},children:e.title}),(0,Ai.jsx)("span",{style:{color:"#9C7EEF",fontSize:16,fontWeight:300,marginRight:8},children:e.date}),(0,Ai.jsx)(Rd,{children:n===t?"\xd7":"+"})]}),n===t&&(0,Ai.jsxs)(Od,{style:{textAlign:"left"},children:[(0,Ai.jsx)("div",{style:{marginBottom:8,fontSize:15,color:"#444",textAlign:"left"},children:e.text}),(0,Ai.jsx)("div",{style:{color:"#C6B5F6",fontSize:13,textAlign:"left"},children:e.date})]})]},e.id))})})},Hd=Yt.div`
  min-height: calc(100vh - 60px); // 헤더 높이만 제외, 푸터는 패딩으로 확보
  padding: 0 24px 250px 24px; // 하단 패딩을 250px로 늘림(footer 높이만큼)
  display: flex;
  flex-direction: column;
  background: #ffffff;
  margin-top: 120px; /* header 높이만큼 마진 추가 */
  
  @media (max-width: 768px) {
    padding: 0 16px 40px 16px;
    margin-top: 80px;
  }
`,Vd=Yt.div`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`,Wd=Yt.div`
  display: flex;
  gap: 4px;
  margin-bottom: 50px;
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  background: #F3F4F6;
  padding: 4px;
  border-radius: 9999px;
  position: relative;
  
  @media (max-width: 768px) {
    margin-bottom: 30px;
    max-width: 260px;
    padding: 3px;
  }
`,Yd=Yt.div`
  position: absolute;
  top: 4px;
  left: ${e=>{let{index:t}=e;return`calc(${t} * 50%)`}};
  width: 50%;
  height: calc(100% - 8px);
  background: white;
  border-radius: 9999px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
`,Xd=Yt(vi)`
  flex: 1;
  text-align: center;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 9999px;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  color: #6B7280;
  position: relative;
  z-index: 2;
  background: transparent;
  border: none;
  cursor: pointer;

  &.active {
    color: #835EEB;
    font-weight: 700;
  }

  &:hover {
    color: #835EEB;
  }
  
  @media (max-width: 768px) {
    padding: 5px 12px;
    font-size: 12px;
  }
`,Jd=(Yt.div`
  text-align: center;
  margin-bottom: 40px;
`,Yt.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #835EEB;
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #6B4BC4;
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 13px;
    border-radius: 10px;
  }
`,Yt.button`
  width: 100%;
  background: none;
  border: none;
  outline: none;
  padding: 32px 0 32px 0;
  font-size: 22px;
  font-weight: 600;
  color: #222;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 16px 0 16px 0;
    font-size: 15px;
  }

  &:hover {
    color: #835EEB;
    background: rgba(131, 94, 235, 0.02);
    padding-left: 16px;
  }

  &:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
`,Yt.div`
  font-size: 18px;
  color: #555;
  margin: 0 0 32px 0;
  line-height: 1.6;
  padding-right: 32px;
  padding-left: 16px;
  animation: slideDown 0.3s ease-out;
  border-left: 4px solid #835EEB;
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @media (max-width: 768px) {
    font-size: 13px;
    margin: 0 0 16px 0;
    padding-right: 12px;
    padding-left: 6px;
  }
`,Yt.span`
  font-size: 32px;
  color: #835EEB;
  margin-left: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;

  &:hover {
    background: rgba(131, 94, 235, 0.1);
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    font-size: 24px;
    margin-left: 8px;
    width: 24px;
    height: 24px;
  }
`,Yt.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  vertical-align: middle;
  display: inline-block;
`,Yt.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 20px 0 0 0;
  font-size: 15px;
  @media (max-width: 768px) {
    font-size: 13px;
    gap: 10px;
    margin: 14px 0 0 0;
  }
  button {
    background: transparent;
    color: #835EEB;
    border: none;
    border-radius: 50%;
    padding: 6px 16px;
    font-weight: 600;
    cursor: pointer;
    transition: color 0.2s, background 0.15s;
    font-size: 1.2em;
    outline: none;
    box-shadow: none;
    &:disabled {
      color: #bbb;
      background: transparent;
      cursor: default;
    }
    &:not(:disabled):hover {
      background: transparent;
      color: #6B4BC4;
    }
    &:focus, &:active {
      background: #E5DBFA;
      color: #835EEB;
      outline: none;
      box-shadow: none;
    }
  }
`);function Gd(){Vn();const t=Un(),n=t.pathname.includes("/notice/faq")?1:0;(0,e.useEffect)(()=>{window.scrollTo(0,0)},[t.pathname]);const i=t.pathname.includes("/notice/faq")?"\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38\uc744\n\ud55c\ub208\uc5d0 \ud655\uc778\ud558\uc138\uc694!":"\uc218\ud559\ub300\uc655\uc758 \uc5c5\ub370\uc774\ud2b8 \ub41c \uae30\ub2a5\uc744\n\ud655\uc778\ud558\uc138\uc694!";return(0,Ai.jsx)(Hd,{children:(0,Ai.jsxs)(Vd,{children:[(0,Ai.jsx)($d,{children:i}),(0,Ai.jsxs)(Wd,{children:[(0,Ai.jsx)(Yd,{index:n}),(0,Ai.jsx)(Xd,{to:"/notice",className:e=>{let{isActive:t}=e;return t?"active":""},children:"\uacf5\uc9c0\uc0ac\ud56d"}),(0,Ai.jsx)(Xd,{to:"/notice/faq",className:e=>{let{isActive:t}=e;return t?"active":""},children:"\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38"})]}),(0,Ai.jsxs)(li,{children:[(0,Ai.jsx)(ai,{path:"faq",element:(0,Ai.jsx)(Md,{})}),(0,Ai.jsx)(ai,{path:"",element:(0,Ai.jsx)(Ud,{})})]})]})})}const Qd=Yt.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`,Kd=Yt.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;function Zd(){const[t,n]=(0,e.useState)(!1),[i,r]=(0,e.useState)(!1),a="/pricing"===Un().pathname;return(0,Ai.jsxs)(Qd,{children:[(0,Ai.jsx)(qi,{hasWhiteBackground:a}),(0,Ai.jsx)(Kd,{children:(0,Ai.jsxs)(li,{children:[(0,Ai.jsx)(ai,{path:"/",element:(0,Ai.jsx)(Ul,{isModalOpen:t,setIsModalOpen:n})}),(0,Ai.jsx)(ai,{path:"/pricing",element:(0,Ai.jsx)(Pd,{})}),(0,Ai.jsx)(ai,{path:"/notice/*",element:(0,Ai.jsx)(Gd,{})})]})}),(0,Ai.jsx)(fr,{}),(0,Ai.jsx)(qr,{isModalOpen:t||i,onDrawerStateChange:e=>{r(e)}})]})}const qd=function(){return(0,Ai.jsx)(gi,{children:(0,Ai.jsx)(Zd,{})})},ec=(function(t){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];var o=Ht.apply(void 0,a([t],n,!1)),l="sc-global-".concat(_e(JSON.stringify(o))),s=new Xt(o,l),d=function(t){var n=Ct(),i=e.useContext(Dt),r=e.useRef(n.styleSheet.allocateGSInstance(l)).current;return n.styleSheet.server&&c(r,t,n.styleSheet,i,n.stylis),e.useLayoutEffect(function(){if(!n.styleSheet.server)return c(r,t,n.styleSheet,i,n.stylis),function(){return s.removeStyles(r,n.styleSheet)}},[r,t,n.styleSheet,i,n.stylis]),null};function c(e,t,n,i,a){if(s.isStatic)s.renderStyles(e,fe,n,a);else{var o=r(r({},t),{theme:ge(t,i,d.defaultProps)});s.renderStyles(e,o,n,a)}}return e.memo(d)})`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    @media (max-width: 600px) {
      height: auto;
      min-height: 100vh;
    }
  }
  
  body {
    overflow-y: auto;
    scroll-behavior: smooth;
  }

  #root {
    width: 100%;
    overflow-x: hidden;
    @media (max-width: 600px) {
      height: auto;
      min-height: 100vh;
    }
  }

  body {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  /* 커스텀 스크롤바 - WebKit 브라우저 (Chrome, Safari, Edge) */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.03);
    border-radius: 4px;
    backdrop-filter: blur(2px);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(131, 94, 235, 0.6);
    border-radius: 4px;
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(107, 70, 193, 0.8);
    transform: scale(1.1);
    backdrop-filter: blur(6px);
  }

  ::-webkit-scrollbar-thumb:active {
    background: rgba(91, 59, 163, 0.9);
    backdrop-filter: blur(8px);
  }

  ::-webkit-scrollbar-corner {
    background: rgba(0, 0, 0, 0.03);
    backdrop-filter: blur(2px);
  }

  /* Firefox 스크롤바 */
  html {
    scrollbar-width: thin;
    scrollbar-color: rgba(131, 94, 235, 0.6) rgba(0, 0, 0, 0.03);
  }

  /* 모바일에서 스크롤바 숨김 (선택사항) */
  @media (max-width: 768px) {
    ::-webkit-scrollbar {
      display: none;
    }
    
    html {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
  }
`;i.createRoot(document.getElementById("root")).render((0,Ai.jsxs)(e.StrictMode,{children:[(0,Ai.jsx)(ec,{}),(0,Ai.jsx)(qd,{})]}))})()})();
//# sourceMappingURL=main.976e43d8.js.map