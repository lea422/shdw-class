/*! For license information please see main.8fabe90e.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var i=n(43),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var i,a={},d=null,c=null;for(i in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,i)&&!s.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:r,type:e,key:d,ref:c,props:a,_owner:l.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),x=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}function w(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=g.prototype;var y=b.prototype=new w;y.constructor=b,h(y,g.prototype),y.isPureReactComponent=!0;var v=Array.isArray,k=Object.prototype.hasOwnProperty,j={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,i){var r,a={},o=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)k.call(t,r)&&!S.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(1===s)a.children=i;else if(1<s){for(var d=Array(s),c=0;c<s;c++)d[c]=arguments[c+2];a.children=d}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);return{$$typeof:n,type:e,key:o,ref:l,props:a,_owner:j.current}}function z(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function _(e,t,r,a,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case i:s=!0}}if(s)return o=o(s=e),e=""===a?"."+P(s,0):a,v(o)?(r="",null!=e&&(r=e.replace(C,"$&/")+"/"),_(o,t,r,"",function(e){return e})):null!=o&&(z(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(C,"$&/")+"/")+e)),t.push(o)),1;if(s=0,a=""===a?".":a+":",v(e))for(var d=0;d<e.length;d++){var c=a+P(l=e[d],d);s+=_(l,t,r,c,o)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=x&&e[x]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),d=0;!(l=e.next()).done;)s+=_(l=l.value,t,r,c=a+P(l,d++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function I(e,t,n){if(null==e)return e;var i=[],r=0;return _(e,i,"","",function(e){return t.call(n,e,r++)}),i}function T(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var F={current:null},A={transition:null},B={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:A,ReactCurrentOwner:j};function O(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:I,forEach:function(e,t,n){I(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return I(e,function(){t++}),t},toArray:function(e){return I(e,function(e){return e})||[]},only:function(e){if(!z(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=r,t.Profiler=o,t.PureComponent=b,t.StrictMode=a,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.act=O,t.cloneElement=function(e,t,i){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=h({},e.props),a=e.key,o=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,l=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(d in t)k.call(t,d)&&!S.hasOwnProperty(d)&&(r[d]=void 0===t[d]&&void 0!==s?s[d]:t[d])}var d=arguments.length-2;if(1===d)r.children=i;else if(1<d){s=Array(d);for(var c=0;c<d;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:n,type:e.type,key:a,ref:o,props:r,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=z,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=A.transition;A.transition={};try{e()}finally{A.transition=t}},t.unstable_act=O,t.useCallback=function(e,t){return F.current.useCallback(e,t)},t.useContext=function(e){return F.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return F.current.useDeferredValue(e)},t.useEffect=function(e,t){return F.current.useEffect(e,t)},t.useId=function(){return F.current.useId()},t.useImperativeHandle=function(e,t,n){return F.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return F.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return F.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return F.current.useMemo(e,t)},t.useReducer=function(e,t,n){return F.current.useReducer(e,t,n)},t.useRef=function(e){return F.current.useRef(e)},t.useState=function(e){return F.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return F.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return F.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var i=n-1>>>1,r=e[i];if(!(0<a(r,t)))break e;e[i]=t,e[n]=r,n=i}}function i(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var i=0,r=e.length,o=r>>>1;i<o;){var l=2*(i+1)-1,s=e[l],d=l+1,c=e[d];if(0>a(s,n))d<r&&0>a(c,s)?(e[i]=c,e[d]=n,i=d):(e[i]=s,e[l]=n,i=l);else{if(!(d<r&&0>a(c,n)))break e;e[i]=c,e[d]=n,i=d}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var d=[],c=[],p=1,u=null,x=3,f=!1,h=!1,m=!1,g="function"===typeof setTimeout?setTimeout:null,w="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function y(e){for(var t=i(c);null!==t;){if(null===t.callback)r(c);else{if(!(t.startTime<=e))break;r(c),t.sortIndex=t.expirationTime,n(d,t)}t=i(c)}}function v(e){if(m=!1,y(e),!h)if(null!==i(d))h=!0,A(k);else{var t=i(c);null!==t&&B(v,t.startTime-e)}}function k(e,n){h=!1,m&&(m=!1,w(z),z=-1),f=!0;var a=x;try{for(y(n),u=i(d);null!==u&&(!(u.expirationTime>n)||e&&!_());){var o=u.callback;if("function"===typeof o){u.callback=null,x=u.priorityLevel;var l=o(u.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?u.callback=l:u===i(d)&&r(d),y(n)}else r(d);u=i(d)}if(null!==u)var s=!0;else{var p=i(c);null!==p&&B(v,p.startTime-n),s=!1}return s}finally{u=null,x=a,f=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var j,S=!1,E=null,z=-1,C=5,P=-1;function _(){return!(t.unstable_now()-P<C)}function I(){if(null!==E){var e=t.unstable_now();P=e;var n=!0;try{n=E(!0,e)}finally{n?j():(S=!1,E=null)}}else S=!1}if("function"===typeof b)j=function(){b(I)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,F=T.port2;T.port1.onmessage=I,j=function(){F.postMessage(null)}}else j=function(){g(I,0)};function A(e){E=e,S||(S=!0,j())}function B(e,n){z=g(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){h||f||(h=!0,A(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_getFirstCallbackNode=function(){return i(d)},t.unstable_next=function(e){switch(x){case 1:case 2:case 3:var t=3;break;default:t=x}var n=x;x=t;try{return e()}finally{x=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=x;x=e;try{return t()}finally{x=n}},t.unstable_scheduleCallback=function(e,r,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:p++,callback:r,priorityLevel:e,startTime:a,expirationTime:l=a+l,sortIndex:-1},a>o?(e.sortIndex=a,n(c,e),null===i(d)&&e===i(c)&&(m?(w(z),z=-1):m=!0,B(v,a-o))):(e.sortIndex=l,n(d,e),h||f||(h=!0,A(k))),e},t.unstable_shouldYield=_,t.unstable_wrapCallback=function(e){var t=x;return function(){var n=x;x=t;try{return e.apply(this,arguments)}finally{x=n}}}},324:e=>{e.exports=function(e,t,n,i){var r=n?n.call(i,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<a.length;s++){var d=a[s];if(!l(d))return!1;var c=e[d],p=t[d];if(!1===(r=n?n.call(i,c,p,d):void 0)||void 0===r&&c!==p)return!1}return!0}},391:(e,t,n)=>{"use strict";var i=n(950);t.createRoot=i.createRoot,t.hydrateRoot=i.hydrateRoot},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var i=n(43),r=n(853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,l={};function s(e,t){d(e,t),d(e+"Capture",t)}function d(e,t){for(l[e]=t,e=0;e<t.length;e++)o.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),p=Object.prototype.hasOwnProperty,u=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},f={};function h(e,t,n,i,r,a,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var m={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){m[e]=new h(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];m[t]=new h(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){m[e]=new h(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){m[e]=new h(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){m[e]=new h(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){m[e]=new h(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){m[e]=new h(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){m[e]=new h(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){m[e]=new h(e,5,!1,e.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function w(e){return e[1].toUpperCase()}function b(e,t,n,i){var r=m.hasOwnProperty(t)?m[t]:null;(null!==r?0!==r.type:i||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,i){if(null===t||"undefined"===typeof t||function(e,t,n,i){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!i&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,i))return!0;if(i)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,r,i)&&(n=null),i||null===r?function(e){return!!p.call(f,e)||!p.call(x,e)&&(u.test(e)?f[e]=!0:(x[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=null===n?3!==r.type&&"":n:(t=r.attributeName,i=r.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(r=r.type)||4===r&&!0===n?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(g,w);m[t]=new h(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(g,w);m[t]=new h(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(g,w);m[t]=new h(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){m[e]=new h(e,1,!1,e.toLowerCase(),null,!1,!1)}),m.xlinkHref=new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){m[e]=new h(e,1,!1,e.toLowerCase(),null,!0,!0)});var y=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,v=Symbol.for("react.element"),k=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),C=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),F=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var A=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var B=Symbol.iterator;function O(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=B&&e[B]||e["@@iterator"])?e:null}var N,R=Object.assign;function D(e){if(void 0===N)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);N=t&&t[1]||""}return"\n"+N+e}var L=!1;function M(e,t){if(!e||L)return"";L=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var i=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){i=d}e.call(t.prototype)}else{try{throw Error()}catch(d){i=d}e()}}catch(d){if(d&&i&&"string"===typeof d.stack){for(var r=d.stack.split("\n"),a=i.stack.split("\n"),o=r.length-1,l=a.length-1;1<=o&&0<=l&&r[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(r[o]!==a[l]){if(1!==o||1!==l)do{if(o--,0>--l||r[o]!==a[l]){var s="\n"+r[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=o&&0<=l);break}}}finally{L=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?D(e):""}function $(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=M(e.type,!1);case 11:return e=M(e.type.render,!1);case 1:return e=M(e.type,!0);default:return""}}function W(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case j:return"Fragment";case k:return"Portal";case E:return"Profiler";case S:return"StrictMode";case _:return"Suspense";case I:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case C:return(e.displayName||"Context")+".Consumer";case z:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case T:return null!==(t=e.displayName||null)?t:W(e.type)||"Memo";case F:t=e._payload,e=e._init;try{return W(e(t))}catch(n){}}return null}function U(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(t);case 8:return t===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Y(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var r=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(e){i=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(e){i=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function J(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=V(e)?e.checked?"true":"false":e.value),(e=i)!==n&&(t.setValue(e),!0)}function X(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function G(e,t){var n=t.checked;return R({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Q(e,t){var n=null==t.defaultValue?"":t.defaultValue,i=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function K(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function Z(e,t){K(e,t);var n=H(t.value),i=t.type;if(null!=n)"number"===i?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===i||"reset"===i)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function q(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!("submit"!==i&&"reset"!==i||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&X(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,r=0;r<e.length;r++){if(e[r].value===n)return e[r].selected=!0,void(i&&(e[r].defaultSelected=!0));null!==t||e[r].disabled||(t=e[r])}null!==t&&(t.selected=!0)}}function ie(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return R({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function re(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(te(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function ae(e,t){var n=H(t.value),i=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=i&&(e.defaultValue=""+i)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var de,ce,pe=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((de=de||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=de.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,i){MSApp.execUnsafeLocalFunction(function(){return ce(e,t)})}:ce);function ue(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var xe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fe=["Webkit","ms","Moz","O"];function he(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||xe.hasOwnProperty(e)&&xe[e]?(""+t).trim():t+"px"}function me(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var i=0===n.indexOf("--"),r=he(n,t[n],i);"float"===n&&(n="cssFloat"),i?e.setProperty(n,r):e[n]=r}}Object.keys(xe).forEach(function(e){fe.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xe[t]=xe[e]})});var ge=R({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function we(e,t){if(t){if(ge[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ye=null;function ve(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,je=null,Se=null;function Ee(e){if(e=br(e)){if("function"!==typeof ke)throw Error(a(280));var t=e.stateNode;t&&(t=vr(t),ke(e.stateNode,e.type,t))}}function ze(e){je?Se?Se.push(e):Se=[e]:je=e}function Ce(){if(je){var e=je,t=Se;if(Se=je=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function Pe(e,t){return e(t)}function _e(){}var Ie=!1;function Te(e,t,n){if(Ie)return e(t,n);Ie=!0;try{return Pe(e,t,n)}finally{Ie=!1,(null!==je||null!==Se)&&(_e(),Ce())}}function Fe(e,t){var n=e.stateNode;if(null===n)return null;var i=vr(n);if(null===i)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(i=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!i;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var Ae=!1;if(c)try{var Be={};Object.defineProperty(Be,"passive",{get:function(){Ae=!0}}),window.addEventListener("test",Be,Be),window.removeEventListener("test",Be,Be)}catch(ce){Ae=!1}function Oe(e,t,n,i,r,a,o,l,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(c){this.onError(c)}}var Ne=!1,Re=null,De=!1,Le=null,Me={onError:function(e){Ne=!0,Re=e}};function $e(e,t,n,i,r,a,o,l,s){Ne=!1,Re=null,Oe.apply(Me,arguments)}function We(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ue(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(We(e)!==e)throw Error(a(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=We(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(null===r)break;var o=r.alternate;if(null===o){if(null!==(i=r.return)){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return He(r),e;if(o===i)return He(r),t;o=o.sibling}throw Error(a(188))}if(n.return!==i.return)n=r,i=o;else{for(var l=!1,s=r.child;s;){if(s===n){l=!0,n=r,i=o;break}if(s===i){l=!0,i=r,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,i=r;break}if(s===i){l=!0,i=o,n=r;break}s=s.sibling}if(!l)throw Error(a(189))}}if(n.alternate!==i)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e))?Ye(e):null}function Ye(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ye(e);if(null!==t)return t;e=e.sibling}return null}var Je=r.unstable_scheduleCallback,Xe=r.unstable_cancelCallback,Ge=r.unstable_shouldYield,Qe=r.unstable_requestPaint,Ke=r.unstable_now,Ze=r.unstable_getCurrentPriorityLevel,qe=r.unstable_ImmediatePriority,et=r.unstable_UserBlockingPriority,tt=r.unstable_NormalPriority,nt=r.unstable_LowPriority,it=r.unstable_IdlePriority,rt=null,at=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var dt=64,ct=4194304;function pt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ut(e,t){var n=e.pendingLanes;if(0===n)return 0;var i=0,r=e.suspendedLanes,a=e.pingedLanes,o=268435455&n;if(0!==o){var l=o&~r;0!==l?i=pt(l):0!==(a&=o)&&(i=pt(a))}else 0!==(o=n&~r)?i=pt(o):0!==a&&(i=pt(a));if(0===i)return 0;if(0!==t&&t!==i&&0===(t&r)&&((r=i&-i)>=(a=t&-t)||16===r&&0!==(4194240&a)))return t;if(0!==(4&i)&&(i|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=i;0<t;)r=1<<(n=31-ot(t)),i|=e[n],t&=~r;return i}function xt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ft(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ht(){var e=dt;return 0===(4194240&(dt<<=1))&&(dt=64),e}function mt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=n}function wt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-ot(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}var bt=0;function yt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var vt,kt,jt,St,Et,zt=!1,Ct=[],Pt=null,_t=null,It=null,Tt=new Map,Ft=new Map,At=[],Bt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ot(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":Tt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ft.delete(t.pointerId)}}function Nt(e,t,n,i,r,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},null!==t&&(null!==(t=br(t))&&kt(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,null!==r&&-1===t.indexOf(r)&&t.push(r),e)}function Rt(e){var t=wr(e.target);if(null!==t){var n=We(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ue(n)))return e.blockedOn=t,void Et(e.priority,function(){jt(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Dt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=br(n))&&kt(t),e.blockedOn=n,!1;var i=new(n=e.nativeEvent).constructor(n.type,n);ye=i,n.target.dispatchEvent(i),ye=null,t.shift()}return!0}function Lt(e,t,n){Dt(e)&&n.delete(t)}function Mt(){zt=!1,null!==Pt&&Dt(Pt)&&(Pt=null),null!==_t&&Dt(_t)&&(_t=null),null!==It&&Dt(It)&&(It=null),Tt.forEach(Lt),Ft.forEach(Lt)}function $t(e,t){e.blockedOn===t&&(e.blockedOn=null,zt||(zt=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Mt)))}function Wt(e){function t(t){return $t(t,e)}if(0<Ct.length){$t(Ct[0],e);for(var n=1;n<Ct.length;n++){var i=Ct[n];i.blockedOn===e&&(i.blockedOn=null)}}for(null!==Pt&&$t(Pt,e),null!==_t&&$t(_t,e),null!==It&&$t(It,e),Tt.forEach(t),Ft.forEach(t),n=0;n<At.length;n++)(i=At[n]).blockedOn===e&&(i.blockedOn=null);for(;0<At.length&&null===(n=At[0]).blockedOn;)Rt(n),null===n.blockedOn&&At.shift()}var Ut=y.ReactCurrentBatchConfig,Ht=!0;function Vt(e,t,n,i){var r=bt,a=Ut.transition;Ut.transition=null;try{bt=1,Jt(e,t,n,i)}finally{bt=r,Ut.transition=a}}function Yt(e,t,n,i){var r=bt,a=Ut.transition;Ut.transition=null;try{bt=4,Jt(e,t,n,i)}finally{bt=r,Ut.transition=a}}function Jt(e,t,n,i){if(Ht){var r=Gt(e,t,n,i);if(null===r)Hi(e,t,i,Xt,n),Ot(e,i);else if(function(e,t,n,i,r){switch(t){case"focusin":return Pt=Nt(Pt,e,t,n,i,r),!0;case"dragenter":return _t=Nt(_t,e,t,n,i,r),!0;case"mouseover":return It=Nt(It,e,t,n,i,r),!0;case"pointerover":var a=r.pointerId;return Tt.set(a,Nt(Tt.get(a)||null,e,t,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,Ft.set(a,Nt(Ft.get(a)||null,e,t,n,i,r)),!0}return!1}(r,e,t,n,i))i.stopPropagation();else if(Ot(e,i),4&t&&-1<Bt.indexOf(e)){for(;null!==r;){var a=br(r);if(null!==a&&vt(a),null===(a=Gt(e,t,n,i))&&Hi(e,t,i,Xt,n),a===r)break;r=a}null!==r&&i.stopPropagation()}else Hi(e,t,i,null,n)}}var Xt=null;function Gt(e,t,n,i){if(Xt=null,null!==(e=wr(e=ve(i))))if(null===(t=We(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Ue(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xt=e,null}function Qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case qe:return 1;case et:return 4;case tt:case nt:return 16;case it:return 536870912;default:return 16}default:return 16}}var Kt=null,Zt=null,qt=null;function en(){if(qt)return qt;var e,t,n=Zt,i=n.length,r="value"in Kt?Kt.value:Kt.textContent,a=r.length;for(e=0;e<i&&n[e]===r[e];e++);var o=i-e;for(t=1;t<=o&&n[i-t]===r[a-t];t++);return qt=r.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,i,r,a){for(var o in this._reactName=t,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(r):r[o]);return this.isDefaultPrevented=(null!=r.defaultPrevented?r.defaultPrevented:!1===r.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=an(dn),pn=R({},dn,{view:0,detail:0}),un=an(pn),xn=R({},pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),fn=an(xn),hn=an(R({},xn,{dataTransfer:0})),mn=an(R({},pn,{relatedTarget:0})),gn=an(R({},dn,{animationName:0,elapsedTime:0,pseudoElement:0})),wn=R({},dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=an(wn),yn=an(R({},dn,{data:0})),vn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=jn[e])&&!!t[e]}function En(){return Sn}var zn=R({},pn,{key:function(e){if(e.key){var t=vn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Cn=an(zn),Pn=an(R({},xn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),_n=an(R({},pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),In=an(R({},dn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Tn=R({},xn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fn=an(Tn),An=[9,13,27,32],Bn=c&&"CompositionEvent"in window,On=null;c&&"documentMode"in document&&(On=document.documentMode);var Nn=c&&"TextEvent"in window&&!On,Rn=c&&(!Bn||On&&8<On&&11>=On),Dn=String.fromCharCode(32),Ln=!1;function Mn(e,t){switch(e){case"keyup":return-1!==An.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $n(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Wn=!1;var Un={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Un[e.type]:"textarea"===t}function Vn(e,t,n,i){ze(i),0<(t=Yi(t,"onChange")).length&&(n=new cn("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Yn=null,Jn=null;function Xn(e){Di(e,0)}function Gn(e){if(J(yr(e)))return e}function Qn(e,t){if("change"===e)return t}var Kn=!1;if(c){var Zn;if(c){var qn="oninput"in document;if(!qn){var ei=document.createElement("div");ei.setAttribute("oninput","return;"),qn="function"===typeof ei.oninput}Zn=qn}else Zn=!1;Kn=Zn&&(!document.documentMode||9<document.documentMode)}function ti(){Yn&&(Yn.detachEvent("onpropertychange",ni),Jn=Yn=null)}function ni(e){if("value"===e.propertyName&&Gn(Jn)){var t=[];Vn(t,Jn,e,ve(e)),Te(Xn,t)}}function ii(e,t,n){"focusin"===e?(ti(),Jn=n,(Yn=t).attachEvent("onpropertychange",ni)):"focusout"===e&&ti()}function ri(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gn(Jn)}function ai(e,t){if("click"===e)return Gn(t)}function oi(e,t){if("input"===e||"change"===e)return Gn(t)}var li="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function si(e,t){if(li(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!p.call(t,r)||!li(e[r],t[r]))return!1}return!0}function di(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ci(e,t){var n,i=di(e);for(e=0;i;){if(3===i.nodeType){if(n=e+i.textContent.length,e<=t&&n>=t)return{node:i,offset:t-e};e=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=di(i)}}function pi(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?pi(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function ui(){for(var e=window,t=X();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(i){n=!1}if(!n)break;t=X((e=t.contentWindow).document)}return t}function xi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function fi(e){var t=ui(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&pi(n.ownerDocument.documentElement,n)){if(null!==i&&xi(n))if(t=i.start,void 0===(e=i.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=void 0===i.end?a:Math.min(i.end,r),!e.extend&&a>i&&(r=i,i=a,a=r),r=ci(n,a);var o=ci(n,i);r&&o&&(1!==e.rangeCount||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(r.node,r.offset),e.removeAllRanges(),a>i?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hi=c&&"documentMode"in document&&11>=document.documentMode,mi=null,gi=null,wi=null,bi=!1;function yi(e,t,n){var i=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;bi||null==mi||mi!==X(i)||("selectionStart"in(i=mi)&&xi(i)?i={start:i.selectionStart,end:i.selectionEnd}:i={anchorNode:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset},wi&&si(wi,i)||(wi=i,0<(i=Yi(gi,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=mi)))}function vi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ki={animationend:vi("Animation","AnimationEnd"),animationiteration:vi("Animation","AnimationIteration"),animationstart:vi("Animation","AnimationStart"),transitionend:vi("Transition","TransitionEnd")},ji={},Si={};function Ei(e){if(ji[e])return ji[e];if(!ki[e])return e;var t,n=ki[e];for(t in n)if(n.hasOwnProperty(t)&&t in Si)return ji[e]=n[t];return e}c&&(Si=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);var zi=Ei("animationend"),Ci=Ei("animationiteration"),Pi=Ei("animationstart"),_i=Ei("transitionend"),Ii=new Map,Ti="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fi(e,t){Ii.set(e,t),s(t,[e])}for(var Ai=0;Ai<Ti.length;Ai++){var Bi=Ti[Ai];Fi(Bi.toLowerCase(),"on"+(Bi[0].toUpperCase()+Bi.slice(1)))}Fi(zi,"onAnimationEnd"),Fi(Ci,"onAnimationIteration"),Fi(Pi,"onAnimationStart"),Fi("dblclick","onDoubleClick"),Fi("focusin","onFocus"),Fi("focusout","onBlur"),Fi(_i,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ni=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oi));function Ri(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,i,r,o,l,s,d){if($e.apply(this,arguments),Ne){if(!Ne)throw Error(a(198));var c=Re;Ne=!1,Re=null,De||(De=!0,Le=c)}}(i,t,void 0,e),e.currentTarget=null}function Di(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var o=i.length-1;0<=o;o--){var l=i[o],s=l.instance,d=l.currentTarget;if(l=l.listener,s!==a&&r.isPropagationStopped())break e;Ri(r,l,d),a=s}else for(o=0;o<i.length;o++){if(s=(l=i[o]).instance,d=l.currentTarget,l=l.listener,s!==a&&r.isPropagationStopped())break e;Ri(r,l,d),a=s}}}if(De)throw e=Le,De=!1,Le=null,e}function Li(e,t){var n=t[hr];void 0===n&&(n=t[hr]=new Set);var i=e+"__bubble";n.has(i)||(Ui(t,e,2,!1),n.add(i))}function Mi(e,t,n){var i=0;t&&(i|=4),Ui(n,e,i,t)}var $i="_reactListening"+Math.random().toString(36).slice(2);function Wi(e){if(!e[$i]){e[$i]=!0,o.forEach(function(t){"selectionchange"!==t&&(Ni.has(t)||Mi(t,!1,e),Mi(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[$i]||(t[$i]=!0,Mi("selectionchange",!1,t))}}function Ui(e,t,n,i){switch(Qt(t)){case 1:var r=Vt;break;case 4:r=Yt;break;default:r=Jt}n=r.bind(null,t,n,e),r=void 0,!Ae||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(r=!0),i?void 0!==r?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):void 0!==r?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Hi(e,t,n,i,r){var a=i;if(0===(1&t)&&0===(2&t)&&null!==i)e:for(;;){if(null===i)return;var o=i.tag;if(3===o||4===o){var l=i.stateNode.containerInfo;if(l===r||8===l.nodeType&&l.parentNode===r)break;if(4===o)for(o=i.return;null!==o;){var s=o.tag;if((3===s||4===s)&&((s=o.stateNode.containerInfo)===r||8===s.nodeType&&s.parentNode===r))return;o=o.return}for(;null!==l;){if(null===(o=wr(l)))return;if(5===(s=o.tag)||6===s){i=a=o;continue e}l=l.parentNode}}i=i.return}Te(function(){var i=a,r=ve(n),o=[];e:{var l=Ii.get(e);if(void 0!==l){var s=cn,d=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=Cn;break;case"focusin":d="focus",s=mn;break;case"focusout":d="blur",s=mn;break;case"beforeblur":case"afterblur":s=mn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=fn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=hn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=_n;break;case zi:case Ci:case Pi:s=gn;break;case _i:s=In;break;case"scroll":s=un;break;case"wheel":s=Fn;break;case"copy":case"cut":case"paste":s=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Pn}var c=0!==(4&t),p=!c&&"scroll"===e,u=c?null!==l?l+"Capture":null:l;c=[];for(var x,f=i;null!==f;){var h=(x=f).stateNode;if(5===x.tag&&null!==h&&(x=h,null!==u&&(null!=(h=Fe(f,u))&&c.push(Vi(f,h,x)))),p)break;f=f.return}0<c.length&&(l=new s(l,d,null,n,r),o.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===ye||!(d=n.relatedTarget||n.fromElement)||!wr(d)&&!d[fr])&&(s||l)&&(l=r.window===r?r:(l=r.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=i,null!==(d=(d=n.relatedTarget||n.toElement)?wr(d):null)&&(d!==(p=We(d))||5!==d.tag&&6!==d.tag)&&(d=null)):(s=null,d=i),s!==d)){if(c=fn,h="onMouseLeave",u="onMouseEnter",f="mouse","pointerout"!==e&&"pointerover"!==e||(c=Pn,h="onPointerLeave",u="onPointerEnter",f="pointer"),p=null==s?l:yr(s),x=null==d?l:yr(d),(l=new c(h,f+"leave",s,n,r)).target=p,l.relatedTarget=x,h=null,wr(r)===i&&((c=new c(u,f+"enter",d,n,r)).target=x,c.relatedTarget=p,h=c),p=h,s&&d)e:{for(u=d,f=0,x=c=s;x;x=Ji(x))f++;for(x=0,h=u;h;h=Ji(h))x++;for(;0<f-x;)c=Ji(c),f--;for(;0<x-f;)u=Ji(u),x--;for(;f--;){if(c===u||null!==u&&c===u.alternate)break e;c=Ji(c),u=Ji(u)}c=null}else c=null;null!==s&&Xi(o,l,s,c,!1),null!==d&&null!==p&&Xi(o,p,d,c,!0)}if("select"===(s=(l=i?yr(i):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var m=Qn;else if(Hn(l))if(Kn)m=oi;else{m=ri;var g=ii}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(m=ai);switch(m&&(m=m(e,i))?Vn(o,m,n,r):(g&&g(e,l,i),"focusout"===e&&(g=l._wrapperState)&&g.controlled&&"number"===l.type&&ee(l,"number",l.value)),g=i?yr(i):window,e){case"focusin":(Hn(g)||"true"===g.contentEditable)&&(mi=g,gi=i,wi=null);break;case"focusout":wi=gi=mi=null;break;case"mousedown":bi=!0;break;case"contextmenu":case"mouseup":case"dragend":bi=!1,yi(o,n,r);break;case"selectionchange":if(hi)break;case"keydown":case"keyup":yi(o,n,r)}var w;if(Bn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Wn?Mn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Rn&&"ko"!==n.locale&&(Wn||"onCompositionStart"!==b?"onCompositionEnd"===b&&Wn&&(w=en()):(Zt="value"in(Kt=r)?Kt.value:Kt.textContent,Wn=!0)),0<(g=Yi(i,b)).length&&(b=new yn(b,e,null,n,r),o.push({event:b,listeners:g}),w?b.data=w:null!==(w=$n(n))&&(b.data=w))),(w=Nn?function(e,t){switch(e){case"compositionend":return $n(t);case"keypress":return 32!==t.which?null:(Ln=!0,Dn);case"textInput":return(e=t.data)===Dn&&Ln?null:e;default:return null}}(e,n):function(e,t){if(Wn)return"compositionend"===e||!Bn&&Mn(e,t)?(e=en(),qt=Zt=Kt=null,Wn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(i=Yi(i,"onBeforeInput")).length&&(r=new yn("onBeforeInput","beforeinput",null,n,r),o.push({event:r,listeners:i}),r.data=w))}Di(o,t)})}function Vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yi(e,t){for(var n=t+"Capture",i=[];null!==e;){var r=e,a=r.stateNode;5===r.tag&&null!==a&&(r=a,null!=(a=Fe(e,n))&&i.unshift(Vi(e,a,r)),null!=(a=Fe(e,t))&&i.push(Vi(e,a,r))),e=e.return}return i}function Ji(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Xi(e,t,n,i,r){for(var a=t._reactName,o=[];null!==n&&n!==i;){var l=n,s=l.alternate,d=l.stateNode;if(null!==s&&s===i)break;5===l.tag&&null!==d&&(l=d,r?null!=(s=Fe(n,a))&&o.unshift(Vi(n,s,l)):r||null!=(s=Fe(n,a))&&o.push(Vi(n,s,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Gi=/\r\n?/g,Qi=/\u0000|\uFFFD/g;function Ki(e){return("string"===typeof e?e:""+e).replace(Gi,"\n").replace(Qi,"")}function Zi(e,t,n){if(t=Ki(t),Ki(e)!==t&&n)throw Error(a(425))}function qi(){}var er=null,tr=null;function nr(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ir="function"===typeof setTimeout?setTimeout:void 0,rr="function"===typeof clearTimeout?clearTimeout:void 0,ar="function"===typeof Promise?Promise:void 0,or="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ar?function(e){return ar.resolve(null).then(e).catch(lr)}:ir;function lr(e){setTimeout(function(){throw e})}function sr(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&8===r.nodeType)if("/$"===(n=r.data)){if(0===i)return e.removeChild(r),void Wt(t);i--}else"$"!==n&&"$?"!==n&&"$!"!==n||i++;n=r}while(n);Wt(t)}function dr(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function cr(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var pr=Math.random().toString(36).slice(2),ur="__reactFiber$"+pr,xr="__reactProps$"+pr,fr="__reactContainer$"+pr,hr="__reactEvents$"+pr,mr="__reactListeners$"+pr,gr="__reactHandles$"+pr;function wr(e){var t=e[ur];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fr]||n[ur]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=cr(e);null!==e;){if(n=e[ur])return n;e=cr(e)}return t}n=(e=n).parentNode}return null}function br(e){return!(e=e[ur]||e[fr])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function yr(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function vr(e){return e[xr]||null}var kr=[],jr=-1;function Sr(e){return{current:e}}function Er(e){0>jr||(e.current=kr[jr],kr[jr]=null,jr--)}function zr(e,t){jr++,kr[jr]=e.current,e.current=t}var Cr={},Pr=Sr(Cr),_r=Sr(!1),Ir=Cr;function Tr(e,t){var n=e.type.contextTypes;if(!n)return Cr;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var r,a={};for(r in n)a[r]=t[r];return i&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Fr(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ar(){Er(_r),Er(Pr)}function Br(e,t,n){if(Pr.current!==Cr)throw Error(a(168));zr(Pr,t),zr(_r,n)}function Or(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,"function"!==typeof i.getChildContext)return n;for(var r in i=i.getChildContext())if(!(r in t))throw Error(a(108,U(e)||"Unknown",r));return R({},n,i)}function Nr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cr,Ir=Pr.current,zr(Pr,e),zr(_r,_r.current),!0}function Rr(e,t,n){var i=e.stateNode;if(!i)throw Error(a(169));n?(e=Or(e,t,Ir),i.__reactInternalMemoizedMergedChildContext=e,Er(_r),Er(Pr),zr(Pr,e)):Er(_r),zr(_r,n)}var Dr=null,Lr=!1,Mr=!1;function $r(e){null===Dr?Dr=[e]:Dr.push(e)}function Wr(){if(!Mr&&null!==Dr){Mr=!0;var e=0,t=bt;try{var n=Dr;for(bt=1;e<n.length;e++){var i=n[e];do{i=i(!0)}while(null!==i)}Dr=null,Lr=!1}catch(r){throw null!==Dr&&(Dr=Dr.slice(e+1)),Je(qe,Wr),r}finally{bt=t,Mr=!1}}return null}var Ur=[],Hr=0,Vr=null,Yr=0,Jr=[],Xr=0,Gr=null,Qr=1,Kr="";function Zr(e,t){Ur[Hr++]=Yr,Ur[Hr++]=Vr,Vr=e,Yr=t}function qr(e,t,n){Jr[Xr++]=Qr,Jr[Xr++]=Kr,Jr[Xr++]=Gr,Gr=e;var i=Qr;e=Kr;var r=32-ot(i)-1;i&=~(1<<r),n+=1;var a=32-ot(t)+r;if(30<a){var o=r-r%5;a=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Qr=1<<32-ot(t)+r|n<<r|i,Kr=a+e}else Qr=1<<a|n<<r|i,Kr=e}function ea(e){null!==e.return&&(Zr(e,1),qr(e,1,0))}function ta(e){for(;e===Vr;)Vr=Ur[--Hr],Ur[Hr]=null,Yr=Ur[--Hr],Ur[Hr]=null;for(;e===Gr;)Gr=Jr[--Xr],Jr[Xr]=null,Kr=Jr[--Xr],Jr[Xr]=null,Qr=Jr[--Xr],Jr[Xr]=null}var na=null,ia=null,ra=!1,aa=null;function oa(e,t){var n=Td(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function la(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,na=e,ia=dr(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,na=e,ia=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Gr?{id:Qr,overflow:Kr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Td(18,null,null,0)).stateNode=t,n.return=e,e.child=n,na=e,ia=null,!0);default:return!1}}function sa(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function da(e){if(ra){var t=ia;if(t){var n=t;if(!la(e,t)){if(sa(e))throw Error(a(418));t=dr(n.nextSibling);var i=na;t&&la(e,t)?oa(i,n):(e.flags=-4097&e.flags|2,ra=!1,na=e)}}else{if(sa(e))throw Error(a(418));e.flags=-4097&e.flags|2,ra=!1,na=e}}}function ca(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;na=e}function pa(e){if(e!==na)return!1;if(!ra)return ca(e),ra=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!nr(e.type,e.memoizedProps)),t&&(t=ia)){if(sa(e))throw ua(),Error(a(418));for(;t;)oa(e,t),t=dr(t.nextSibling)}if(ca(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ia=dr(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ia=null}}else ia=na?dr(e.stateNode.nextSibling):null;return!0}function ua(){for(var e=ia;e;)e=dr(e.nextSibling)}function xa(){ia=na=null,ra=!1}function fa(e){null===aa?aa=[e]:aa.push(e)}var ha=y.ReactCurrentBatchConfig;function ma(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var i=n.stateNode}if(!i)throw Error(a(147,e));var r=i,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=r.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function ga(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wa(e){return(0,e._init)(e._payload)}function ba(e){function t(t,n){if(e){var i=t.deletions;null===i?(t.deletions=[n],t.flags|=16):i.push(n)}}function n(n,i){if(!e)return null;for(;null!==i;)t(n,i),i=i.sibling;return null}function i(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function r(e,t){return(e=Ad(e,t)).index=0,e.sibling=null,e}function o(t,n,i){return t.index=i,e?null!==(i=t.alternate)?(i=i.index)<n?(t.flags|=2,n):i:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,i){return null===t||6!==t.tag?((t=Rd(n,e.mode,i)).return=e,t):((t=r(t,n)).return=e,t)}function d(e,t,n,i){var a=n.type;return a===j?p(e,t,n.props.children,i,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===F&&wa(a)===t.type)?((i=r(t,n.props)).ref=ma(e,t,n),i.return=e,i):((i=Bd(n.type,n.key,n.props,null,e.mode,i)).ref=ma(e,t,n),i.return=e,i)}function c(e,t,n,i){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Dd(n,e.mode,i)).return=e,t):((t=r(t,n.children||[])).return=e,t)}function p(e,t,n,i,a){return null===t||7!==t.tag?((t=Od(n,e.mode,i,a)).return=e,t):((t=r(t,n)).return=e,t)}function u(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Rd(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case v:return(n=Bd(t.type,t.key,t.props,null,e.mode,n)).ref=ma(e,null,t),n.return=e,n;case k:return(t=Dd(t,e.mode,n)).return=e,t;case F:return u(e,(0,t._init)(t._payload),n)}if(te(t)||O(t))return(t=Od(t,e.mode,n,null)).return=e,t;ga(e,t)}return null}function x(e,t,n,i){var r=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==r?null:s(e,t,""+n,i);if("object"===typeof n&&null!==n){switch(n.$$typeof){case v:return n.key===r?d(e,t,n,i):null;case k:return n.key===r?c(e,t,n,i):null;case F:return x(e,t,(r=n._init)(n._payload),i)}if(te(n)||O(n))return null!==r?null:p(e,t,n,i,null);ga(e,n)}return null}function f(e,t,n,i,r){if("string"===typeof i&&""!==i||"number"===typeof i)return s(t,e=e.get(n)||null,""+i,r);if("object"===typeof i&&null!==i){switch(i.$$typeof){case v:return d(t,e=e.get(null===i.key?n:i.key)||null,i,r);case k:return c(t,e=e.get(null===i.key?n:i.key)||null,i,r);case F:return f(e,t,n,(0,i._init)(i._payload),r)}if(te(i)||O(i))return p(t,e=e.get(n)||null,i,r,null);ga(t,i)}return null}function h(r,a,l,s){for(var d=null,c=null,p=a,h=a=0,m=null;null!==p&&h<l.length;h++){p.index>h?(m=p,p=null):m=p.sibling;var g=x(r,p,l[h],s);if(null===g){null===p&&(p=m);break}e&&p&&null===g.alternate&&t(r,p),a=o(g,a,h),null===c?d=g:c.sibling=g,c=g,p=m}if(h===l.length)return n(r,p),ra&&Zr(r,h),d;if(null===p){for(;h<l.length;h++)null!==(p=u(r,l[h],s))&&(a=o(p,a,h),null===c?d=p:c.sibling=p,c=p);return ra&&Zr(r,h),d}for(p=i(r,p);h<l.length;h++)null!==(m=f(p,r,h,l[h],s))&&(e&&null!==m.alternate&&p.delete(null===m.key?h:m.key),a=o(m,a,h),null===c?d=m:c.sibling=m,c=m);return e&&p.forEach(function(e){return t(r,e)}),ra&&Zr(r,h),d}function m(r,l,s,d){var c=O(s);if("function"!==typeof c)throw Error(a(150));if(null==(s=c.call(s)))throw Error(a(151));for(var p=c=null,h=l,m=l=0,g=null,w=s.next();null!==h&&!w.done;m++,w=s.next()){h.index>m?(g=h,h=null):g=h.sibling;var b=x(r,h,w.value,d);if(null===b){null===h&&(h=g);break}e&&h&&null===b.alternate&&t(r,h),l=o(b,l,m),null===p?c=b:p.sibling=b,p=b,h=g}if(w.done)return n(r,h),ra&&Zr(r,m),c;if(null===h){for(;!w.done;m++,w=s.next())null!==(w=u(r,w.value,d))&&(l=o(w,l,m),null===p?c=w:p.sibling=w,p=w);return ra&&Zr(r,m),c}for(h=i(r,h);!w.done;m++,w=s.next())null!==(w=f(h,r,m,w.value,d))&&(e&&null!==w.alternate&&h.delete(null===w.key?m:w.key),l=o(w,l,m),null===p?c=w:p.sibling=w,p=w);return e&&h.forEach(function(e){return t(r,e)}),ra&&Zr(r,m),c}return function e(i,a,o,s){if("object"===typeof o&&null!==o&&o.type===j&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case v:e:{for(var d=o.key,c=a;null!==c;){if(c.key===d){if((d=o.type)===j){if(7===c.tag){n(i,c.sibling),(a=r(c,o.props.children)).return=i,i=a;break e}}else if(c.elementType===d||"object"===typeof d&&null!==d&&d.$$typeof===F&&wa(d)===c.type){n(i,c.sibling),(a=r(c,o.props)).ref=ma(i,c,o),a.return=i,i=a;break e}n(i,c);break}t(i,c),c=c.sibling}o.type===j?((a=Od(o.props.children,i.mode,s,o.key)).return=i,i=a):((s=Bd(o.type,o.key,o.props,null,i.mode,s)).ref=ma(i,a,o),s.return=i,i=s)}return l(i);case k:e:{for(c=o.key;null!==a;){if(a.key===c){if(4===a.tag&&a.stateNode.containerInfo===o.containerInfo&&a.stateNode.implementation===o.implementation){n(i,a.sibling),(a=r(a,o.children||[])).return=i,i=a;break e}n(i,a);break}t(i,a),a=a.sibling}(a=Dd(o,i.mode,s)).return=i,i=a}return l(i);case F:return e(i,a,(c=o._init)(o._payload),s)}if(te(o))return h(i,a,o,s);if(O(o))return m(i,a,o,s);ga(i,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==a&&6===a.tag?(n(i,a.sibling),(a=r(a,o)).return=i,i=a):(n(i,a),(a=Rd(o,i.mode,s)).return=i,i=a),l(i)):n(i,a)}}var ya=ba(!0),va=ba(!1),ka=Sr(null),ja=null,Sa=null,Ea=null;function za(){Ea=Sa=ja=null}function Ca(e){var t=ka.current;Er(ka),e._currentValue=t}function Pa(e,t,n){for(;null!==e;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==i&&(i.childLanes|=t)):null!==i&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function _a(e,t){ja=e,Ea=Sa=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bl=!0),e.firstContext=null)}function Ia(e){var t=e._currentValue;if(Ea!==e)if(e={context:e,memoizedValue:t,next:null},null===Sa){if(null===ja)throw Error(a(308));Sa=e,ja.dependencies={lanes:0,firstContext:e}}else Sa=Sa.next=e;return t}var Ta=null;function Fa(e){null===Ta?Ta=[e]:Ta.push(e)}function Aa(e,t,n,i){var r=t.interleaved;return null===r?(n.next=n,Fa(t)):(n.next=r.next,r.next=n),t.interleaved=n,Ba(e,i)}function Ba(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Oa=!1;function Na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ra(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Da(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function La(e,t,n){var i=e.updateQueue;if(null===i)return null;if(i=i.shared,0!==(2&Ps)){var r=i.pending;return null===r?t.next=t:(t.next=r.next,r.next=t),i.pending=t,Ba(e,n)}return null===(r=i.interleaved)?(t.next=t,Fa(i)):(t.next=r.next,r.next=t),i.interleaved=t,Ba(e,n)}function Ma(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var i=t.lanes;n|=i&=e.pendingLanes,t.lanes=n,wt(e,n)}}function $a(e,t){var n=e.updateQueue,i=e.alternate;if(null!==i&&n===(i=i.updateQueue)){var r=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?r=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?r=a=t:a=a.next=t}else r=a=t;return n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wa(e,t,n,i){var r=e.updateQueue;Oa=!1;var a=r.firstBaseUpdate,o=r.lastBaseUpdate,l=r.shared.pending;if(null!==l){r.shared.pending=null;var s=l,d=s.next;s.next=null,null===o?a=d:o.next=d,o=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===l?c.firstBaseUpdate=d:l.next=d,c.lastBaseUpdate=s))}if(null!==a){var p=r.baseState;for(o=0,c=d=s=null,l=a;;){var u=l.lane,x=l.eventTime;if((i&u)===u){null!==c&&(c=c.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var f=e,h=l;switch(u=t,x=n,h.tag){case 1:if("function"===typeof(f=h.payload)){p=f.call(x,p,u);break e}p=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null===(u="function"===typeof(f=h.payload)?f.call(x,p,u):f)||void 0===u)break e;p=R({},p,u);break e;case 2:Oa=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(u=r.effects)?r.effects=[l]:u.push(l))}else x={eventTime:x,lane:u,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(d=c=x,s=p):c=c.next=x,o|=u;if(null===(l=l.next)){if(null===(l=r.shared.pending))break;l=(u=l).next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}if(null===c&&(s=p),r.baseState=s,r.firstBaseUpdate=d,r.lastBaseUpdate=c,null!==(t=r.shared.interleaved)){r=t;do{o|=r.lane,r=r.next}while(r!==t)}else null===a&&(r.shared.lanes=0);Ns|=o,e.lanes=o,e.memoizedState=p}}function Ua(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var i=e[t],r=i.callback;if(null!==r){if(i.callback=null,i=n,"function"!==typeof r)throw Error(a(191,r));r.call(i)}}}var Ha={},Va=Sr(Ha),Ya=Sr(Ha),Ja=Sr(Ha);function Xa(e){if(e===Ha)throw Error(a(174));return e}function Ga(e,t){switch(zr(Ja,t),zr(Ya,e),zr(Va,Ha),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Er(Va),zr(Va,t)}function Qa(){Er(Va),Er(Ya),Er(Ja)}function Ka(e){Xa(Ja.current);var t=Xa(Va.current),n=se(t,e.type);t!==n&&(zr(Ya,e),zr(Va,n))}function Za(e){Ya.current===e&&(Er(Va),Er(Ya))}var qa=Sr(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var io=y.ReactCurrentDispatcher,ro=y.ReactCurrentBatchConfig,ao=0,oo=null,lo=null,so=null,co=!1,po=!1,uo=0,xo=0;function fo(){throw Error(a(321))}function ho(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!li(e[n],t[n]))return!1;return!0}function mo(e,t,n,i,r,o){if(ao=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,io.current=null===e||null===e.memoizedState?qo:el,e=n(i,r),po){o=0;do{if(po=!1,uo=0,25<=o)throw Error(a(301));o+=1,so=lo=null,t.updateQueue=null,io.current=tl,e=n(i,r)}while(po)}if(io.current=Zo,t=null!==lo&&null!==lo.next,ao=0,so=lo=oo=null,co=!1,t)throw Error(a(300));return e}function go(){var e=0!==uo;return uo=0,e}function wo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===so?oo.memoizedState=so=e:so=so.next=e,so}function bo(){if(null===lo){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=lo.next;var t=null===so?oo.memoizedState:so.next;if(null!==t)so=t,lo=e;else{if(null===e)throw Error(a(310));e={memoizedState:(lo=e).memoizedState,baseState:lo.baseState,baseQueue:lo.baseQueue,queue:lo.queue,next:null},null===so?oo.memoizedState=so=e:so=so.next=e}return so}function yo(e,t){return"function"===typeof t?t(e):t}function vo(e){var t=bo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var i=lo,r=i.baseQueue,o=n.pending;if(null!==o){if(null!==r){var l=r.next;r.next=o.next,o.next=l}i.baseQueue=r=o,n.pending=null}if(null!==r){o=r.next,i=i.baseState;var s=l=null,d=null,c=o;do{var p=c.lane;if((ao&p)===p)null!==d&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:e(i,c.action);else{var u={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===d?(s=d=u,l=i):d=d.next=u,oo.lanes|=p,Ns|=p}c=c.next}while(null!==c&&c!==o);null===d?l=i:d.next=s,li(i,t.memoizedState)||(bl=!0),t.memoizedState=i,t.baseState=l,t.baseQueue=d,n.lastRenderedState=i}if(null!==(e=n.interleaved)){r=e;do{o=r.lane,oo.lanes|=o,Ns|=o,r=r.next}while(r!==e)}else null===r&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ko(e){var t=bo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,o=t.memoizedState;if(null!==r){n.pending=null;var l=r=r.next;do{o=e(o,l.action),l=l.next}while(l!==r);li(o,t.memoizedState)||(bl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function jo(){}function So(e,t){var n=oo,i=bo(),r=t(),o=!li(i.memoizedState,r);if(o&&(i.memoizedState=r,bl=!0),i=i.queue,No(Co.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||null!==so&&1&so.memoizedState.tag){if(n.flags|=2048,To(9,zo.bind(null,n,i,r,t),void 0,null),null===_s)throw Error(a(349));0!==(30&ao)||Eo(n,t,r)}return r}function Eo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function zo(e,t,n,i){t.value=n,t.getSnapshot=i,Po(t)&&_o(e)}function Co(e,t,n){return n(function(){Po(t)&&_o(e)})}function Po(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!li(e,n)}catch(i){return!0}}function _o(e){var t=Ba(e,1);null!==t&&nd(t,e,1,-1)}function Io(e){var t=wo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:e},t.queue=e,e=e.dispatch=Xo.bind(null,oo,e),[t.memoizedState,e]}function To(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Fo(){return bo().memoizedState}function Ao(e,t,n,i){var r=wo();oo.flags|=e,r.memoizedState=To(1|t,n,void 0,void 0===i?null:i)}function Bo(e,t,n,i){var r=bo();i=void 0===i?null:i;var a=void 0;if(null!==lo){var o=lo.memoizedState;if(a=o.destroy,null!==i&&ho(i,o.deps))return void(r.memoizedState=To(t,n,a,i))}oo.flags|=e,r.memoizedState=To(1|t,n,a,i)}function Oo(e,t){return Ao(8390656,8,e,t)}function No(e,t){return Bo(2048,8,e,t)}function Ro(e,t){return Bo(4,2,e,t)}function Do(e,t){return Bo(4,4,e,t)}function Lo(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Mo(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Bo(4,4,Lo.bind(null,t,e),n)}function $o(){}function Wo(e,t){var n=bo();t=void 0===t?null:t;var i=n.memoizedState;return null!==i&&null!==t&&ho(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Uo(e,t){var n=bo();t=void 0===t?null:t;var i=n.memoizedState;return null!==i&&null!==t&&ho(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function Ho(e,t,n){return 0===(21&ao)?(e.baseState&&(e.baseState=!1,bl=!0),e.memoizedState=n):(li(n,t)||(n=ht(),oo.lanes|=n,Ns|=n,e.baseState=!0),t)}function Vo(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var i=ro.transition;ro.transition={};try{e(!1),t()}finally{bt=n,ro.transition=i}}function Yo(){return bo().memoizedState}function Jo(e,t,n){var i=td(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Go(e))Qo(t,n);else if(null!==(n=Aa(e,t,n,i))){nd(n,e,i,ed()),Ko(n,t,i)}}function Xo(e,t,n){var i=td(e),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Go(e))Qo(t,r);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=a(o,n);if(r.hasEagerState=!0,r.eagerState=l,li(l,o)){var s=t.interleaved;return null===s?(r.next=r,Fa(t)):(r.next=s.next,s.next=r),void(t.interleaved=r)}}catch(d){}null!==(n=Aa(e,t,r,i))&&(nd(n,e,i,r=ed()),Ko(n,t,i))}}function Go(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function Qo(e,t){po=co=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ko(e,t,n){if(0!==(4194240&n)){var i=t.lanes;n|=i&=e.pendingLanes,t.lanes=n,wt(e,n)}}var Zo={readContext:Ia,useCallback:fo,useContext:fo,useEffect:fo,useImperativeHandle:fo,useInsertionEffect:fo,useLayoutEffect:fo,useMemo:fo,useReducer:fo,useRef:fo,useState:fo,useDebugValue:fo,useDeferredValue:fo,useTransition:fo,useMutableSource:fo,useSyncExternalStore:fo,useId:fo,unstable_isNewReconciler:!1},qo={readContext:Ia,useCallback:function(e,t){return wo().memoizedState=[e,void 0===t?null:t],e},useContext:Ia,useEffect:Oo,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ao(4194308,4,Lo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ao(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ao(4,2,e,t)},useMemo:function(e,t){var n=wo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=wo();return t=void 0!==n?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Jo.bind(null,oo,e),[i.memoizedState,e]},useRef:function(e){return e={current:e},wo().memoizedState=e},useState:Io,useDebugValue:$o,useDeferredValue:function(e){return wo().memoizedState=e},useTransition:function(){var e=Io(!1),t=e[0];return e=Vo.bind(null,e[1]),wo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=oo,r=wo();if(ra){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===_s)throw Error(a(349));0!==(30&ao)||Eo(i,t,n)}r.memoizedState=n;var o={value:n,getSnapshot:t};return r.queue=o,Oo(Co.bind(null,i,o,e),[e]),i.flags|=2048,To(9,zo.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=wo(),t=_s.identifierPrefix;if(ra){var n=Kr;t=":"+t+"R"+(n=(Qr&~(1<<32-ot(Qr)-1)).toString(32)+n),0<(n=uo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=xo++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Ia,useCallback:Wo,useContext:Ia,useEffect:No,useImperativeHandle:Mo,useInsertionEffect:Ro,useLayoutEffect:Do,useMemo:Uo,useReducer:vo,useRef:Fo,useState:function(){return vo(yo)},useDebugValue:$o,useDeferredValue:function(e){return Ho(bo(),lo.memoizedState,e)},useTransition:function(){return[vo(yo)[0],bo().memoizedState]},useMutableSource:jo,useSyncExternalStore:So,useId:Yo,unstable_isNewReconciler:!1},tl={readContext:Ia,useCallback:Wo,useContext:Ia,useEffect:No,useImperativeHandle:Mo,useInsertionEffect:Ro,useLayoutEffect:Do,useMemo:Uo,useReducer:ko,useRef:Fo,useState:function(){return ko(yo)},useDebugValue:$o,useDeferredValue:function(e){var t=bo();return null===lo?t.memoizedState=e:Ho(t,lo.memoizedState,e)},useTransition:function(){return[ko(yo)[0],bo().memoizedState]},useMutableSource:jo,useSyncExternalStore:So,useId:Yo,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=R({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function il(e,t,n,i){n=null===(n=n(i,t=e.memoizedState))||void 0===n?t:R({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var rl={isMounted:function(e){return!!(e=e._reactInternals)&&We(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=ed(),r=td(e),a=Da(i,r);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=La(e,a,r))&&(nd(t,e,r,i),Ma(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=ed(),r=td(e),a=Da(i,r);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=La(e,a,r))&&(nd(t,e,r,i),Ma(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ed(),i=td(e),r=Da(n,i);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=La(e,r,i))&&(nd(t,e,i,n),Ma(t,e,i))}};function al(e,t,n,i,r,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(i,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!si(n,i)||!si(r,a))}function ol(e,t,n){var i=!1,r=Cr,a=t.contextType;return"object"===typeof a&&null!==a?a=Ia(a):(r=Fr(t)?Ir:Pr.current,a=(i=null!==(i=t.contextTypes)&&void 0!==i)?Tr(e,r):Cr),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=rl,e.stateNode=t,t._reactInternals=e,i&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),t}function ll(e,t,n,i){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,i),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&rl.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,i){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},Na(e);var a=t.contextType;"object"===typeof a&&null!==a?r.context=Ia(a):(a=Fr(t)?Ir:Pr.current,r.context=Tr(e,a)),r.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(il(e,t,a,n),r.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof r.getSnapshotBeforeUpdate||"function"!==typeof r.UNSAFE_componentWillMount&&"function"!==typeof r.componentWillMount||(t=r.state,"function"===typeof r.componentWillMount&&r.componentWillMount(),"function"===typeof r.UNSAFE_componentWillMount&&r.UNSAFE_componentWillMount(),t!==r.state&&rl.enqueueReplaceState(r,r.state,null),Wa(e,n,r,i),r.state=e.memoizedState),"function"===typeof r.componentDidMount&&(e.flags|=4194308)}function dl(e,t){try{var n="",i=t;do{n+=$(i),i=i.return}while(i);var r=n}catch(a){r="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:r,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function pl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ul="function"===typeof WeakMap?WeakMap:Map;function xl(e,t,n){(n=Da(-1,n)).tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Hs||(Hs=!0,Vs=i),pl(0,t)},n}function fl(e,t,n){(n=Da(-1,n)).tag=3;var i=e.type.getDerivedStateFromError;if("function"===typeof i){var r=t.value;n.payload=function(){return i(r)},n.callback=function(){pl(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(n.callback=function(){pl(0,t),"function"!==typeof i&&(null===Ys?Ys=new Set([this]):Ys.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function hl(e,t,n){var i=e.pingCache;if(null===i){i=e.pingCache=new ul;var r=new Set;i.set(t,r)}else void 0===(r=i.get(t))&&(r=new Set,i.set(t,r));r.has(n)||(r.add(n),e=Ed.bind(null,e,t,n),t.then(e,e))}function ml(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function gl(e,t,n,i,r){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Da(-1,1)).tag=2,La(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=r,e)}var wl=y.ReactCurrentOwner,bl=!1;function yl(e,t,n,i){t.child=null===e?va(t,null,n,i):ya(t,e.child,n,i)}function vl(e,t,n,i,r){n=n.render;var a=t.ref;return _a(t,r),i=mo(e,t,n,i,a,r),n=go(),null===e||bl?(ra&&n&&ea(t),t.flags|=1,yl(e,t,i,r),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Hl(e,t,r))}function kl(e,t,n,i,r){if(null===e){var a=n.type;return"function"!==typeof a||Fd(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Bd(n.type,null,i,t,t.mode,r)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,jl(e,t,a,i,r))}if(a=e.child,0===(e.lanes&r)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:si)(o,i)&&e.ref===t.ref)return Hl(e,t,r)}return t.flags|=1,(e=Ad(a,i)).ref=t.ref,e.return=t,t.child=e}function jl(e,t,n,i,r){if(null!==e){var a=e.memoizedProps;if(si(a,i)&&e.ref===t.ref){if(bl=!1,t.pendingProps=i=a,0===(e.lanes&r))return t.lanes=e.lanes,Hl(e,t,r);0!==(131072&e.flags)&&(bl=!0)}}return zl(e,t,n,i,r)}function Sl(e,t,n){var i=t.pendingProps,r=i.children,a=null!==e?e.memoizedState:null;if("hidden"===i.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},zr(As,Fs),Fs|=n;else{if(0===(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,zr(As,Fs),Fs|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=null!==a?a.baseLanes:n,zr(As,Fs),Fs|=i}else null!==a?(i=a.baseLanes|n,t.memoizedState=null):i=n,zr(As,Fs),Fs|=i;return yl(e,t,r,n),t.child}function El(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zl(e,t,n,i,r){var a=Fr(n)?Ir:Pr.current;return a=Tr(t,a),_a(t,r),n=mo(e,t,n,i,a,r),i=go(),null===e||bl?(ra&&i&&ea(t),t.flags|=1,yl(e,t,n,r),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Hl(e,t,r))}function Cl(e,t,n,i,r){if(Fr(n)){var a=!0;Nr(t)}else a=!1;if(_a(t,r),null===t.stateNode)Ul(e,t),ol(t,n,i),sl(t,n,i,r),i=!0;else if(null===e){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,d=n.contextType;"object"===typeof d&&null!==d?d=Ia(d):d=Tr(t,d=Fr(n)?Ir:Pr.current);var c=n.getDerivedStateFromProps,p="function"===typeof c||"function"===typeof o.getSnapshotBeforeUpdate;p||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==i||s!==d)&&ll(t,o,i,d),Oa=!1;var u=t.memoizedState;o.state=u,Wa(t,i,o,r),s=t.memoizedState,l!==i||u!==s||_r.current||Oa?("function"===typeof c&&(il(t,n,c,i),s=t.memoizedState),(l=Oa||al(t,n,l,i,u,s,d))?(p||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=s),o.props=i,o.state=s,o.context=d,i=l):("function"===typeof o.componentDidMount&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,Ra(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:nl(t.type,l),o.props=d,p=t.pendingProps,u=o.context,"object"===typeof(s=n.contextType)&&null!==s?s=Ia(s):s=Tr(t,s=Fr(n)?Ir:Pr.current);var x=n.getDerivedStateFromProps;(c="function"===typeof x||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==p||u!==s)&&ll(t,o,i,s),Oa=!1,u=t.memoizedState,o.state=u,Wa(t,i,o,r);var f=t.memoizedState;l!==p||u!==f||_r.current||Oa?("function"===typeof x&&(il(t,n,x,i),f=t.memoizedState),(d=Oa||al(t,n,d,i,u,f,s)||!1)?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(i,f,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(i,f,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=f),o.props=i,o.state=f,o.context=s,i=d):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return Pl(e,t,n,i,a,r)}function Pl(e,t,n,i,r,a){El(e,t);var o=0!==(128&t.flags);if(!i&&!o)return r&&Rr(t,n,!1),Hl(e,t,a);i=t.stateNode,wl.current=t;var l=o&&"function"!==typeof n.getDerivedStateFromError?null:i.render();return t.flags|=1,null!==e&&o?(t.child=ya(t,e.child,null,a),t.child=ya(t,null,l,a)):yl(e,t,l,a),t.memoizedState=i.state,r&&Rr(t,n,!0),t.child}function _l(e){var t=e.stateNode;t.pendingContext?Br(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Br(0,t.context,!1),Ga(e,t.containerInfo)}function Il(e,t,n,i,r){return xa(),fa(r),t.flags|=256,yl(e,t,n,i),t.child}var Tl,Fl,Al,Bl,Ol={dehydrated:null,treeContext:null,retryLane:0};function Nl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rl(e,t,n){var i,r=t.pendingProps,o=qa.current,l=!1,s=0!==(128&t.flags);if((i=s)||(i=(null===e||null!==e.memoizedState)&&0!==(2&o)),i?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),zr(qa,1&o),null===e)return da(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&r)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Nd(s,r,0,null),e=Od(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Nl(n),t.memoizedState=Ol,e):Dl(t,s));if(null!==(o=e.memoizedState)&&null!==(i=o.dehydrated))return function(e,t,n,i,r,o,l){if(n)return 256&t.flags?(t.flags&=-257,Ll(e,t,l,i=cl(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=i.fallback,r=t.mode,i=Nd({mode:"visible",children:i.children},r,0,null),(o=Od(o,r,l,null)).flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,0!==(1&t.mode)&&ya(t,e.child,null,l),t.child.memoizedState=Nl(l),t.memoizedState=Ol,o);if(0===(1&t.mode))return Ll(e,t,l,null);if("$!"===r.data){if(i=r.nextSibling&&r.nextSibling.dataset)var s=i.dgst;return i=s,Ll(e,t,l,i=cl(o=Error(a(419)),i,void 0))}if(s=0!==(l&e.childLanes),bl||s){if(null!==(i=_s)){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}0!==(r=0!==(r&(i.suspendedLanes|l))?0:r)&&r!==o.retryLane&&(o.retryLane=r,Ba(e,r),nd(i,e,r,-1))}return hd(),Ll(e,t,l,i=cl(Error(a(421))))}return"$?"===r.data?(t.flags|=128,t.child=e.child,t=Cd.bind(null,e),r._reactRetry=t,null):(e=o.treeContext,ia=dr(r.nextSibling),na=t,ra=!0,aa=null,null!==e&&(Jr[Xr++]=Qr,Jr[Xr++]=Kr,Jr[Xr++]=Gr,Qr=e.id,Kr=e.overflow,Gr=t),t=Dl(t,i.children),t.flags|=4096,t)}(e,t,s,r,i,o,n);if(l){l=r.fallback,s=t.mode,i=(o=e.child).sibling;var d={mode:"hidden",children:r.children};return 0===(1&s)&&t.child!==o?((r=t.child).childLanes=0,r.pendingProps=d,t.deletions=null):(r=Ad(o,d)).subtreeFlags=14680064&o.subtreeFlags,null!==i?l=Ad(i,l):(l=Od(l,s,n,null)).flags|=2,l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=null===(s=e.child.memoizedState)?Nl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Ol,r}return e=(l=e.child).sibling,r=Ad(l,{mode:"visible",children:r.children}),0===(1&t.mode)&&(r.lanes=n),r.return=t,r.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Dl(e,t){return(t=Nd({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ll(e,t,n,i){return null!==i&&fa(i),ya(t,e.child,null,n),(e=Dl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ml(e,t,n){e.lanes|=t;var i=e.alternate;null!==i&&(i.lanes|=t),Pa(e.return,t,n)}function $l(e,t,n,i,r){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function Wl(e,t,n){var i=t.pendingProps,r=i.revealOrder,a=i.tail;if(yl(e,t,i.children,n),0!==(2&(i=qa.current)))i=1&i|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ml(e,n,t);else if(19===e.tag)Ml(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(zr(qa,i),0===(1&t.mode))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(r=n),n=n.sibling;null===(n=r)?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),$l(t,!1,r,n,a);break;case"backwards":for(n=null,r=t.child,t.child=null;null!==r;){if(null!==(e=r.alternate)&&null===eo(e)){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}$l(t,!0,n,null,a);break;case"together":$l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ul(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ns|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Ad(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ad(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!ra)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;null!==n;)null!==n.alternate&&(i=n),n=n.sibling;null===i?t||null===e.tail?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Yl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;null!==r;)n|=r.lanes|r.childLanes,i|=14680064&r.subtreeFlags,i|=14680064&r.flags,r.return=e,r=r.sibling;else for(r=e.child;null!==r;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Jl(e,t,n){var i=t.pendingProps;switch(ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yl(t),null;case 1:case 17:return Fr(t.type)&&Ar(),Yl(t),null;case 3:return i=t.stateNode,Qa(),Er(_r),Er(Pr),no(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),null!==e&&null!==e.child||(pa(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==aa&&(od(aa),aa=null))),Fl(e,t),Yl(t),null;case 5:Za(t);var r=Xa(Ja.current);if(n=t.type,null!==e&&null!=t.stateNode)Al(e,t,n,i,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(null===t.stateNode)throw Error(a(166));return Yl(t),null}if(e=Xa(Va.current),pa(t)){i=t.stateNode,n=t.type;var o=t.memoizedProps;switch(i[ur]=t,i[xr]=o,e=0!==(1&t.mode),n){case"dialog":Li("cancel",i),Li("close",i);break;case"iframe":case"object":case"embed":Li("load",i);break;case"video":case"audio":for(r=0;r<Oi.length;r++)Li(Oi[r],i);break;case"source":Li("error",i);break;case"img":case"image":case"link":Li("error",i),Li("load",i);break;case"details":Li("toggle",i);break;case"input":Q(i,o),Li("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Li("invalid",i);break;case"textarea":re(i,o),Li("invalid",i)}for(var s in we(n,o),r=null,o)if(o.hasOwnProperty(s)){var d=o[s];"children"===s?"string"===typeof d?i.textContent!==d&&(!0!==o.suppressHydrationWarning&&Zi(i.textContent,d,e),r=["children",d]):"number"===typeof d&&i.textContent!==""+d&&(!0!==o.suppressHydrationWarning&&Zi(i.textContent,d,e),r=["children",""+d]):l.hasOwnProperty(s)&&null!=d&&"onScroll"===s&&Li("scroll",i)}switch(n){case"input":Y(i),q(i,o,!0);break;case"textarea":Y(i),oe(i);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(i.onclick=qi)}i=r,t.updateQueue=i,null!==i&&(t.flags|=4)}else{s=9===r.nodeType?r:r.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof i.is?e=s.createElement(n,{is:i.is}):(e=s.createElement(n),"select"===n&&(s=e,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):e=s.createElementNS(e,n),e[ur]=t,e[xr]=i,Tl(e,t,!1,!1),t.stateNode=e;e:{switch(s=be(n,i),n){case"dialog":Li("cancel",e),Li("close",e),r=i;break;case"iframe":case"object":case"embed":Li("load",e),r=i;break;case"video":case"audio":for(r=0;r<Oi.length;r++)Li(Oi[r],e);r=i;break;case"source":Li("error",e),r=i;break;case"img":case"image":case"link":Li("error",e),Li("load",e),r=i;break;case"details":Li("toggle",e),r=i;break;case"input":Q(e,i),r=G(e,i),Li("invalid",e);break;case"option":default:r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=R({},i,{value:void 0}),Li("invalid",e);break;case"textarea":re(e,i),r=ie(e,i),Li("invalid",e)}for(o in we(n,r),d=r)if(d.hasOwnProperty(o)){var c=d[o];"style"===o?me(e,c):"dangerouslySetInnerHTML"===o?null!=(c=c?c.__html:void 0)&&pe(e,c):"children"===o?"string"===typeof c?("textarea"!==n||""!==c)&&ue(e,c):"number"===typeof c&&ue(e,""+c):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(l.hasOwnProperty(o)?null!=c&&"onScroll"===o&&Li("scroll",e):null!=c&&b(e,o,c,s))}switch(n){case"input":Y(e),q(e,i,!1);break;case"textarea":Y(e),oe(e);break;case"option":null!=i.value&&e.setAttribute("value",""+H(i.value));break;case"select":e.multiple=!!i.multiple,null!=(o=i.value)?ne(e,!!i.multiple,o,!1):null!=i.defaultValue&&ne(e,!!i.multiple,i.defaultValue,!0);break;default:"function"===typeof r.onClick&&(e.onclick=qi)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Yl(t),null;case 6:if(e&&null!=t.stateNode)Bl(e,t,e.memoizedProps,i);else{if("string"!==typeof i&&null===t.stateNode)throw Error(a(166));if(n=Xa(Ja.current),Xa(Va.current),pa(t)){if(i=t.stateNode,n=t.memoizedProps,i[ur]=t,(o=i.nodeValue!==n)&&null!==(e=na))switch(e.tag){case 3:Zi(i.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zi(i.nodeValue,n,0!==(1&e.mode))}o&&(t.flags|=4)}else(i=(9===n.nodeType?n:n.ownerDocument).createTextNode(i))[ur]=t,t.stateNode=i}return Yl(t),null;case 13:if(Er(qa),i=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ra&&null!==ia&&0!==(1&t.mode)&&0===(128&t.flags))ua(),xa(),t.flags|=98560,o=!1;else if(o=pa(t),null!==i&&null!==i.dehydrated){if(null===e){if(!o)throw Error(a(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(a(317));o[ur]=t}else xa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Yl(t),o=!1}else null!==aa&&(od(aa),aa=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((i=null!==i)!==(null!==e&&null!==e.memoizedState)&&i&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&qa.current)?0===Bs&&(Bs=3):hd())),null!==t.updateQueue&&(t.flags|=4),Yl(t),null);case 4:return Qa(),Fl(e,t),null===e&&Wi(t.stateNode.containerInfo),Yl(t),null;case 10:return Ca(t.type._context),Yl(t),null;case 19:if(Er(qa),null===(o=t.memoizedState))return Yl(t),null;if(i=0!==(128&t.flags),null===(s=o.rendering))if(i)Vl(o,!1);else{if(0!==Bs||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=eo(e))){for(t.flags|=128,Vl(o,!1),null!==(i=s.updateQueue)&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;null!==n;)e=i,(o=n).flags&=14680066,null===(s=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return zr(qa,1&qa.current|2),t.child}e=e.sibling}null!==o.tail&&Ke()>Ws&&(t.flags|=128,i=!0,Vl(o,!1),t.lanes=4194304)}else{if(!i)if(null!==(e=eo(s))){if(t.flags|=128,i=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(o,!0),null===o.tail&&"hidden"===o.tailMode&&!s.alternate&&!ra)return Yl(t),null}else 2*Ke()-o.renderingStartTime>Ws&&1073741824!==n&&(t.flags|=128,i=!0,Vl(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=o.last)?n.sibling=s:t.child=s,o.last=s)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ke(),t.sibling=null,n=qa.current,zr(qa,i?1&n|2:1&n),t):(Yl(t),null);case 22:case 23:return pd(),i=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==i&&(t.flags|=8192),i&&0!==(1&t.mode)?0!==(1073741824&Fs)&&(Yl(t),6&t.subtreeFlags&&(t.flags|=8192)):Yl(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function Xl(e,t){switch(ta(t),t.tag){case 1:return Fr(t.type)&&Ar(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Qa(),Er(_r),Er(Pr),no(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Za(t),null;case 13:if(Er(qa),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));xa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Er(qa),null;case 4:return Qa(),null;case 10:return Ca(t.type._context),null;case 22:case 23:return pd(),null;default:return null}}Tl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Fl=function(){},Al=function(e,t,n,i){var r=e.memoizedProps;if(r!==i){e=t.stateNode,Xa(Va.current);var a,o=null;switch(n){case"input":r=G(e,r),i=G(e,i),o=[];break;case"select":r=R({},r,{value:void 0}),i=R({},i,{value:void 0}),o=[];break;case"textarea":r=ie(e,r),i=ie(e,i),o=[];break;default:"function"!==typeof r.onClick&&"function"===typeof i.onClick&&(e.onclick=qi)}for(c in we(n,i),n=null,r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&null!=r[c])if("style"===c){var s=r[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var d=i[c];if(s=null!=r?r[c]:void 0,i.hasOwnProperty(c)&&d!==s&&(null!=d||null!=s))if("style"===c)if(s){for(a in s)!s.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in d)d.hasOwnProperty(a)&&s[a]!==d[a]&&(n||(n={}),n[a]=d[a])}else n||(o||(o=[]),o.push(c,n)),n=d;else"dangerouslySetInnerHTML"===c?(d=d?d.__html:void 0,s=s?s.__html:void 0,null!=d&&s!==d&&(o=o||[]).push(c,d)):"children"===c?"string"!==typeof d&&"number"!==typeof d||(o=o||[]).push(c,""+d):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=d&&"onScroll"===c&&Li("scroll",e),o||s===d||(o=[])):(o=o||[]).push(c,d))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}},Bl=function(e,t,n,i){n!==i&&(t.flags|=4)};var Gl=!1,Ql=!1,Kl="function"===typeof WeakSet?WeakSet:Set,Zl=null;function ql(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(i){Sd(e,t,i)}else n.current=null}function es(e,t,n){try{n()}catch(i){Sd(e,t,i)}}var ts=!1;function ns(e,t,n){var i=t.updateQueue;if(null!==(i=null!==i?i.lastEffect:null)){var r=i=i.next;do{if((r.tag&e)===e){var a=r.destroy;r.destroy=void 0,void 0!==a&&es(t,n,a)}r=r.next}while(r!==i)}}function is(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function rs(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function as(e){var t=e.alternate;null!==t&&(e.alternate=null,as(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[ur],delete t[xr],delete t[hr],delete t[mr],delete t[gr])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function os(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||os(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var i=e.tag;if(5===i||6===i)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=qi));else if(4!==i&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function ds(e,t,n){var i=e.tag;if(5===i||6===i)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==i&&null!==(e=e.child))for(ds(e,t,n),e=e.sibling;null!==e;)ds(e,t,n),e=e.sibling}var cs=null,ps=!1;function us(e,t,n){for(n=n.child;null!==n;)xs(e,t,n),n=n.sibling}function xs(e,t,n){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(rt,n)}catch(l){}switch(n.tag){case 5:Ql||ql(n,t);case 6:var i=cs,r=ps;cs=null,us(e,t,n),ps=r,null!==(cs=i)&&(ps?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ps?(e=cs,n=n.stateNode,8===e.nodeType?sr(e.parentNode,n):1===e.nodeType&&sr(e,n),Wt(e)):sr(cs,n.stateNode));break;case 4:i=cs,r=ps,cs=n.stateNode.containerInfo,ps=!0,us(e,t,n),cs=i,ps=r;break;case 0:case 11:case 14:case 15:if(!Ql&&(null!==(i=n.updateQueue)&&null!==(i=i.lastEffect))){r=i=i.next;do{var a=r,o=a.destroy;a=a.tag,void 0!==o&&(0!==(2&a)||0!==(4&a))&&es(n,t,o),r=r.next}while(r!==i)}us(e,t,n);break;case 1:if(!Ql&&(ql(n,t),"function"===typeof(i=n.stateNode).componentWillUnmount))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){Sd(n,t,l)}us(e,t,n);break;case 21:us(e,t,n);break;case 22:1&n.mode?(Ql=(i=Ql)||null!==n.memoizedState,us(e,t,n),Ql=i):us(e,t,n);break;default:us(e,t,n)}}function fs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Kl),t.forEach(function(t){var i=Pd.bind(null,e,t);n.has(t)||(n.add(t),t.then(i,i))})}}function hs(e,t){var n=t.deletions;if(null!==n)for(var i=0;i<n.length;i++){var r=n[i];try{var o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ps=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ps=!0;break e}s=s.return}if(null===cs)throw Error(a(160));xs(o,l,r),cs=null,ps=!1;var d=r.alternate;null!==d&&(d.return=null),r.return=null}catch(c){Sd(r,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)ms(t,e),t=t.sibling}function ms(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(hs(t,e),gs(e),4&i){try{ns(3,e,e.return),is(3,e)}catch(m){Sd(e,e.return,m)}try{ns(5,e,e.return)}catch(m){Sd(e,e.return,m)}}break;case 1:hs(t,e),gs(e),512&i&&null!==n&&ql(n,n.return);break;case 5:if(hs(t,e),gs(e),512&i&&null!==n&&ql(n,n.return),32&e.flags){var r=e.stateNode;try{ue(r,"")}catch(m){Sd(e,e.return,m)}}if(4&i&&null!=(r=e.stateNode)){var o=e.memoizedProps,l=null!==n?n.memoizedProps:o,s=e.type,d=e.updateQueue;if(e.updateQueue=null,null!==d)try{"input"===s&&"radio"===o.type&&null!=o.name&&K(r,o),be(s,l);var c=be(s,o);for(l=0;l<d.length;l+=2){var p=d[l],u=d[l+1];"style"===p?me(r,u):"dangerouslySetInnerHTML"===p?pe(r,u):"children"===p?ue(r,u):b(r,p,u,c)}switch(s){case"input":Z(r,o);break;case"textarea":ae(r,o);break;case"select":var x=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var f=o.value;null!=f?ne(r,!!o.multiple,f,!1):x!==!!o.multiple&&(null!=o.defaultValue?ne(r,!!o.multiple,o.defaultValue,!0):ne(r,!!o.multiple,o.multiple?[]:"",!1))}r[xr]=o}catch(m){Sd(e,e.return,m)}}break;case 6:if(hs(t,e),gs(e),4&i){if(null===e.stateNode)throw Error(a(162));r=e.stateNode,o=e.memoizedProps;try{r.nodeValue=o}catch(m){Sd(e,e.return,m)}}break;case 3:if(hs(t,e),gs(e),4&i&&null!==n&&n.memoizedState.isDehydrated)try{Wt(t.containerInfo)}catch(m){Sd(e,e.return,m)}break;case 4:default:hs(t,e),gs(e);break;case 13:hs(t,e),gs(e),8192&(r=e.child).flags&&(o=null!==r.memoizedState,r.stateNode.isHidden=o,!o||null!==r.alternate&&null!==r.alternate.memoizedState||($s=Ke())),4&i&&fs(e);break;case 22:if(p=null!==n&&null!==n.memoizedState,1&e.mode?(Ql=(c=Ql)||p,hs(t,e),Ql=c):hs(t,e),gs(e),8192&i){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!p&&0!==(1&e.mode))for(Zl=e,p=e.child;null!==p;){for(u=Zl=p;null!==Zl;){switch(f=(x=Zl).child,x.tag){case 0:case 11:case 14:case 15:ns(4,x,x.return);break;case 1:ql(x,x.return);var h=x.stateNode;if("function"===typeof h.componentWillUnmount){i=x,n=x.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(m){Sd(i,n,m)}}break;case 5:ql(x,x.return);break;case 22:if(null!==x.memoizedState){vs(u);continue}}null!==f?(f.return=x,Zl=f):vs(u)}p=p.sibling}e:for(p=null,u=e;;){if(5===u.tag){if(null===p){p=u;try{r=u.stateNode,c?"function"===typeof(o=r.style).setProperty?o.setProperty("display","none","important"):o.display="none":(s=u.stateNode,l=void 0!==(d=u.memoizedProps.style)&&null!==d&&d.hasOwnProperty("display")?d.display:null,s.style.display=he("display",l))}catch(m){Sd(e,e.return,m)}}}else if(6===u.tag){if(null===p)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(m){Sd(e,e.return,m)}}else if((22!==u.tag&&23!==u.tag||null===u.memoizedState||u===e)&&null!==u.child){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;null===u.sibling;){if(null===u.return||u.return===e)break e;p===u&&(p=null),u=u.return}p===u&&(p=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:hs(t,e),gs(e),4&i&&fs(e);case 21:}}function gs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(os(n)){var i=n;break e}n=n.return}throw Error(a(160))}switch(i.tag){case 5:var r=i.stateNode;32&i.flags&&(ue(r,""),i.flags&=-33),ds(e,ls(e),r);break;case 3:case 4:var o=i.stateNode.containerInfo;ss(e,ls(e),o);break;default:throw Error(a(161))}}catch(l){Sd(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ws(e,t,n){Zl=e,bs(e,t,n)}function bs(e,t,n){for(var i=0!==(1&e.mode);null!==Zl;){var r=Zl,a=r.child;if(22===r.tag&&i){var o=null!==r.memoizedState||Gl;if(!o){var l=r.alternate,s=null!==l&&null!==l.memoizedState||Ql;l=Gl;var d=Ql;if(Gl=o,(Ql=s)&&!d)for(Zl=r;null!==Zl;)s=(o=Zl).child,22===o.tag&&null!==o.memoizedState?ks(r):null!==s?(s.return=o,Zl=s):ks(r);for(;null!==a;)Zl=a,bs(a,t,n),a=a.sibling;Zl=r,Gl=l,Ql=d}ys(e)}else 0!==(8772&r.subtreeFlags)&&null!==a?(a.return=r,Zl=a):ys(e)}}function ys(e){for(;null!==Zl;){var t=Zl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Ql||is(5,t);break;case 1:var i=t.stateNode;if(4&t.flags&&!Ql)if(null===n)i.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Ua(t,o,i);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ua(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var p=c.memoizedState;if(null!==p){var u=p.dehydrated;null!==u&&Wt(u)}}}break;default:throw Error(a(163))}Ql||512&t.flags&&rs(t)}catch(x){Sd(t,t.return,x)}}if(t===e){Zl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Zl=n;break}Zl=t.return}}function vs(e){for(;null!==Zl;){var t=Zl;if(t===e){Zl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zl=n;break}Zl=t.return}}function ks(e){for(;null!==Zl;){var t=Zl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{is(4,t)}catch(s){Sd(t,n,s)}break;case 1:var i=t.stateNode;if("function"===typeof i.componentDidMount){var r=t.return;try{i.componentDidMount()}catch(s){Sd(t,r,s)}}var a=t.return;try{rs(t)}catch(s){Sd(t,a,s)}break;case 5:var o=t.return;try{rs(t)}catch(s){Sd(t,o,s)}}}catch(s){Sd(t,t.return,s)}if(t===e){Zl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Zl=l;break}Zl=t.return}}var js,Ss=Math.ceil,Es=y.ReactCurrentDispatcher,zs=y.ReactCurrentOwner,Cs=y.ReactCurrentBatchConfig,Ps=0,_s=null,Is=null,Ts=0,Fs=0,As=Sr(0),Bs=0,Os=null,Ns=0,Rs=0,Ds=0,Ls=null,Ms=null,$s=0,Ws=1/0,Us=null,Hs=!1,Vs=null,Ys=null,Js=!1,Xs=null,Gs=0,Qs=0,Ks=null,Zs=-1,qs=0;function ed(){return 0!==(6&Ps)?Ke():-1!==Zs?Zs:Zs=Ke()}function td(e){return 0===(1&e.mode)?1:0!==(2&Ps)&&0!==Ts?Ts&-Ts:null!==ha.transition?(0===qs&&(qs=ht()),qs):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Qt(e.type)}function nd(e,t,n,i){if(50<Qs)throw Qs=0,Ks=null,Error(a(185));gt(e,n,i),0!==(2&Ps)&&e===_s||(e===_s&&(0===(2&Ps)&&(Rs|=n),4===Bs&&ld(e,Ts)),id(e,i),1===n&&0===Ps&&0===(1&t.mode)&&(Ws=Ke()+500,Lr&&Wr()))}function id(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-ot(a),l=1<<o,s=r[o];-1===s?0!==(l&n)&&0===(l&i)||(r[o]=xt(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}(e,t);var i=ut(e,e===_s?Ts:0);if(0===i)null!==n&&Xe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(null!=n&&Xe(n),1===t)0===e.tag?function(e){Lr=!0,$r(e)}(sd.bind(null,e)):$r(sd.bind(null,e)),or(function(){0===(6&Ps)&&Wr()}),n=null;else{switch(yt(i)){case 1:n=qe;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=it}n=_d(n,rd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rd(e,t){if(Zs=-1,qs=0,0!==(6&Ps))throw Error(a(327));var n=e.callbackNode;if(kd()&&e.callbackNode!==n)return null;var i=ut(e,e===_s?Ts:0);if(0===i)return null;if(0!==(30&i)||0!==(i&e.expiredLanes)||t)t=md(e,i);else{t=i;var r=Ps;Ps|=2;var o=fd();for(_s===e&&Ts===t||(Us=null,Ws=Ke()+500,ud(e,t));;)try{wd();break}catch(s){xd(e,s)}za(),Es.current=o,Ps=r,null!==Is?t=0:(_s=null,Ts=0,t=Bs)}if(0!==t){if(2===t&&(0!==(r=ft(e))&&(i=r,t=ad(e,r))),1===t)throw n=Os,ud(e,0),ld(e,i),id(e,Ke()),n;if(6===t)ld(e,i);else{if(r=e.current.alternate,0===(30&i)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!li(a(),r))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(r)&&(2===(t=md(e,i))&&(0!==(o=ft(e))&&(i=o,t=ad(e,o))),1===t))throw n=Os,ud(e,0),ld(e,i),id(e,Ke()),n;switch(e.finishedWork=r,e.finishedLanes=i,t){case 0:case 1:throw Error(a(345));case 2:case 5:vd(e,Ms,Us);break;case 3:if(ld(e,i),(130023424&i)===i&&10<(t=$s+500-Ke())){if(0!==ut(e,0))break;if(((r=e.suspendedLanes)&i)!==i){ed(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=ir(vd.bind(null,e,Ms,Us),t);break}vd(e,Ms,Us);break;case 4:if(ld(e,i),(4194240&i)===i)break;for(t=e.eventTimes,r=-1;0<i;){var l=31-ot(i);o=1<<l,(l=t[l])>r&&(r=l),i&=~o}if(i=r,10<(i=(120>(i=Ke()-i)?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ss(i/1960))-i)){e.timeoutHandle=ir(vd.bind(null,e,Ms,Us),i);break}vd(e,Ms,Us);break;default:throw Error(a(329))}}}return id(e,Ke()),e.callbackNode===n?rd.bind(null,e):null}function ad(e,t){var n=Ls;return e.current.memoizedState.isDehydrated&&(ud(e,t).flags|=256),2!==(e=md(e,t))&&(t=Ms,Ms=n,null!==t&&od(t)),e}function od(e){null===Ms?Ms=e:Ms.push.apply(Ms,e)}function ld(e,t){for(t&=~Ds,t&=~Rs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),i=1<<n;e[n]=-1,t&=~i}}function sd(e){if(0!==(6&Ps))throw Error(a(327));kd();var t=ut(e,0);if(0===(1&t))return id(e,Ke()),null;var n=md(e,t);if(0!==e.tag&&2===n){var i=ft(e);0!==i&&(t=i,n=ad(e,i))}if(1===n)throw n=Os,ud(e,0),ld(e,t),id(e,Ke()),n;if(6===n)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vd(e,Ms,Us),id(e,Ke()),null}function dd(e,t){var n=Ps;Ps|=1;try{return e(t)}finally{0===(Ps=n)&&(Ws=Ke()+500,Lr&&Wr())}}function cd(e){null!==Xs&&0===Xs.tag&&0===(6&Ps)&&kd();var t=Ps;Ps|=1;var n=Cs.transition,i=bt;try{if(Cs.transition=null,bt=1,e)return e()}finally{bt=i,Cs.transition=n,0===(6&(Ps=t))&&Wr()}}function pd(){Fs=As.current,Er(As)}function ud(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,rr(n)),null!==Is)for(n=Is.return;null!==n;){var i=n;switch(ta(i),i.tag){case 1:null!==(i=i.type.childContextTypes)&&void 0!==i&&Ar();break;case 3:Qa(),Er(_r),Er(Pr),no();break;case 5:Za(i);break;case 4:Qa();break;case 13:case 19:Er(qa);break;case 10:Ca(i.type._context);break;case 22:case 23:pd()}n=n.return}if(_s=e,Is=e=Ad(e.current,null),Ts=Fs=t,Bs=0,Os=null,Ds=Rs=Ns=0,Ms=Ls=null,null!==Ta){for(t=0;t<Ta.length;t++)if(null!==(i=(n=Ta[t]).interleaved)){n.interleaved=null;var r=i.next,a=n.pending;if(null!==a){var o=a.next;a.next=r,i.next=o}n.pending=i}Ta=null}return e}function xd(e,t){for(;;){var n=Is;try{if(za(),io.current=Zo,co){for(var i=oo.memoizedState;null!==i;){var r=i.queue;null!==r&&(r.pending=null),i=i.next}co=!1}if(ao=0,so=lo=oo=null,po=!1,uo=0,zs.current=null,null===n||null===n.return){Bs=1,Os=t,Is=null;break}e:{var o=e,l=n.return,s=n,d=t;if(t=Ts,s.flags|=32768,null!==d&&"object"===typeof d&&"function"===typeof d.then){var c=d,p=s,u=p.tag;if(0===(1&p.mode)&&(0===u||11===u||15===u)){var x=p.alternate;x?(p.updateQueue=x.updateQueue,p.memoizedState=x.memoizedState,p.lanes=x.lanes):(p.updateQueue=null,p.memoizedState=null)}var f=ml(l);if(null!==f){f.flags&=-257,gl(f,l,s,0,t),1&f.mode&&hl(o,c,t),d=c;var h=(t=f).updateQueue;if(null===h){var m=new Set;m.add(d),t.updateQueue=m}else h.add(d);break e}if(0===(1&t)){hl(o,c,t),hd();break e}d=Error(a(426))}else if(ra&&1&s.mode){var g=ml(l);if(null!==g){0===(65536&g.flags)&&(g.flags|=256),gl(g,l,s,0,t),fa(dl(d,s));break e}}o=d=dl(d,s),4!==Bs&&(Bs=2),null===Ls?Ls=[o]:Ls.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,$a(o,xl(0,d,t));break e;case 1:s=d;var w=o.type,b=o.stateNode;if(0===(128&o.flags)&&("function"===typeof w.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Ys||!Ys.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t,$a(o,fl(o,s,t));break e}}o=o.return}while(null!==o)}yd(n)}catch(y){t=y,Is===n&&null!==n&&(Is=n=n.return);continue}break}}function fd(){var e=Es.current;return Es.current=Zo,null===e?Zo:e}function hd(){0!==Bs&&3!==Bs&&2!==Bs||(Bs=4),null===_s||0===(268435455&Ns)&&0===(268435455&Rs)||ld(_s,Ts)}function md(e,t){var n=Ps;Ps|=2;var i=fd();for(_s===e&&Ts===t||(Us=null,ud(e,t));;)try{gd();break}catch(r){xd(e,r)}if(za(),Ps=n,Es.current=i,null!==Is)throw Error(a(261));return _s=null,Ts=0,Bs}function gd(){for(;null!==Is;)bd(Is)}function wd(){for(;null!==Is&&!Ge();)bd(Is)}function bd(e){var t=js(e.alternate,e,Fs);e.memoizedProps=e.pendingProps,null===t?yd(e):Is=t,zs.current=null}function yd(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Jl(n,t,Fs)))return void(Is=n)}else{if(null!==(n=Xl(n,t)))return n.flags&=32767,void(Is=n);if(null===e)return Bs=6,void(Is=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Is=t);Is=t=e}while(null!==t);0===Bs&&(Bs=5)}function vd(e,t,n){var i=bt,r=Cs.transition;try{Cs.transition=null,bt=1,function(e,t,n,i){do{kd()}while(null!==Xs);if(0!==(6&Ps))throw Error(a(327));n=e.finishedWork;var r=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-ot(n),a=1<<r;t[r]=0,i[r]=-1,e[r]=-1,n&=~a}}(e,o),e===_s&&(Is=_s=null,Ts=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Js||(Js=!0,_d(tt,function(){return kd(),null})),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=Cs.transition,Cs.transition=null;var l=bt;bt=1;var s=Ps;Ps|=4,zs.current=null,function(e,t){if(er=Ht,xi(e=ui())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var i=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(i&&0!==i.rangeCount){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch(v){n=null;break e}var l=0,s=-1,d=-1,c=0,p=0,u=e,x=null;t:for(;;){for(var f;u!==n||0!==r&&3!==u.nodeType||(s=l+r),u!==o||0!==i&&3!==u.nodeType||(d=l+i),3===u.nodeType&&(l+=u.nodeValue.length),null!==(f=u.firstChild);)x=u,u=f;for(;;){if(u===e)break t;if(x===n&&++c===r&&(s=l),x===o&&++p===i&&(d=l),null!==(f=u.nextSibling))break;x=(u=x).parentNode}u=f}n=-1===s||-1===d?null:{start:s,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(tr={focusedElem:e,selectionRange:n},Ht=!1,Zl=t;null!==Zl;)if(e=(t=Zl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Zl=e;else for(;null!==Zl;){t=Zl;try{var h=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==h){var m=h.memoizedProps,g=h.memoizedState,w=t.stateNode,b=w.getSnapshotBeforeUpdate(t.elementType===t.type?m:nl(t.type,m),g);w.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var y=t.stateNode.containerInfo;1===y.nodeType?y.textContent="":9===y.nodeType&&y.documentElement&&y.removeChild(y.documentElement);break;default:throw Error(a(163))}}catch(v){Sd(t,t.return,v)}if(null!==(e=t.sibling)){e.return=t.return,Zl=e;break}Zl=t.return}h=ts,ts=!1}(e,n),ms(n,e),fi(tr),Ht=!!er,tr=er=null,e.current=n,ws(n,e,r),Qe(),Ps=s,bt=l,Cs.transition=o}else e.current=n;if(Js&&(Js=!1,Xs=e,Gs=r),o=e.pendingLanes,0===o&&(Ys=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(rt,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),id(e,Ke()),null!==t)for(i=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Hs)throw Hs=!1,e=Vs,Vs=null,e;0!==(1&Gs)&&0!==e.tag&&kd(),o=e.pendingLanes,0!==(1&o)?e===Ks?Qs++:(Qs=0,Ks=e):Qs=0,Wr()}(e,t,n,i)}finally{Cs.transition=r,bt=i}return null}function kd(){if(null!==Xs){var e=yt(Gs),t=Cs.transition,n=bt;try{if(Cs.transition=null,bt=16>e?16:e,null===Xs)var i=!1;else{if(e=Xs,Xs=null,Gs=0,0!==(6&Ps))throw Error(a(331));var r=Ps;for(Ps|=4,Zl=e.current;null!==Zl;){var o=Zl,l=o.child;if(0!==(16&Zl.flags)){var s=o.deletions;if(null!==s){for(var d=0;d<s.length;d++){var c=s[d];for(Zl=c;null!==Zl;){var p=Zl;switch(p.tag){case 0:case 11:case 15:ns(8,p,o)}var u=p.child;if(null!==u)u.return=p,Zl=u;else for(;null!==Zl;){var x=(p=Zl).sibling,f=p.return;if(as(p),p===c){Zl=null;break}if(null!==x){x.return=f,Zl=x;break}Zl=f}}}var h=o.alternate;if(null!==h){var m=h.child;if(null!==m){h.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}Zl=o}}if(0!==(2064&o.subtreeFlags)&&null!==l)l.return=o,Zl=l;else e:for(;null!==Zl;){if(0!==(2048&(o=Zl).flags))switch(o.tag){case 0:case 11:case 15:ns(9,o,o.return)}var w=o.sibling;if(null!==w){w.return=o.return,Zl=w;break e}Zl=o.return}}var b=e.current;for(Zl=b;null!==Zl;){var y=(l=Zl).child;if(0!==(2064&l.subtreeFlags)&&null!==y)y.return=l,Zl=y;else e:for(l=b;null!==Zl;){if(0!==(2048&(s=Zl).flags))try{switch(s.tag){case 0:case 11:case 15:is(9,s)}}catch(k){Sd(s,s.return,k)}if(s===l){Zl=null;break e}var v=s.sibling;if(null!==v){v.return=s.return,Zl=v;break e}Zl=s.return}}if(Ps=r,Wr(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(rt,e)}catch(k){}i=!0}return i}finally{bt=n,Cs.transition=t}}return!1}function jd(e,t,n){e=La(e,t=xl(0,t=dl(n,t),1),1),t=ed(),null!==e&&(gt(e,1,t),id(e,t))}function Sd(e,t,n){if(3===e.tag)jd(e,e,n);else for(;null!==t;){if(3===t.tag){jd(t,e,n);break}if(1===t.tag){var i=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof i.componentDidCatch&&(null===Ys||!Ys.has(i))){t=La(t,e=fl(t,e=dl(n,e),1),1),e=ed(),null!==t&&(gt(t,1,e),id(t,e));break}}t=t.return}}function Ed(e,t,n){var i=e.pingCache;null!==i&&i.delete(t),t=ed(),e.pingedLanes|=e.suspendedLanes&n,_s===e&&(Ts&n)===n&&(4===Bs||3===Bs&&(130023424&Ts)===Ts&&500>Ke()-$s?ud(e,0):Ds|=n),id(e,t)}function zd(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=ed();null!==(e=Ba(e,t))&&(gt(e,t,n),id(e,n))}function Cd(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),zd(e,n)}function Pd(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;null!==r&&(n=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(a(314))}null!==i&&i.delete(t),zd(e,n)}function _d(e,t){return Je(e,t)}function Id(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Td(e,t,n,i){return new Id(e,t,n,i)}function Fd(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ad(e,t){var n=e.alternate;return null===n?((n=Td(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Bd(e,t,n,i,r,o){var l=2;if(i=e,"function"===typeof e)Fd(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case j:return Od(n.children,r,o,t);case S:l=8,r|=8;break;case E:return(e=Td(12,n,t,2|r)).elementType=E,e.lanes=o,e;case _:return(e=Td(13,n,t,r)).elementType=_,e.lanes=o,e;case I:return(e=Td(19,n,t,r)).elementType=I,e.lanes=o,e;case A:return Nd(n,r,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case z:l=10;break e;case C:l=9;break e;case P:l=11;break e;case T:l=14;break e;case F:l=16,i=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Td(l,n,t,r)).elementType=e,t.type=i,t.lanes=o,t}function Od(e,t,n,i){return(e=Td(7,e,i,t)).lanes=n,e}function Nd(e,t,n,i){return(e=Td(22,e,i,t)).elementType=A,e.lanes=n,e.stateNode={isHidden:!1},e}function Rd(e,t,n){return(e=Td(6,e,null,t)).lanes=n,e}function Dd(e,t,n){return(t=Td(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ld(e,t,n,i,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mt(0),this.expirationTimes=mt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mt(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Md(e,t,n,i,r,a,o,l,s){return e=new Ld(e,t,n,l,s),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Td(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Na(a),e}function $d(e){if(!e)return Cr;e:{if(We(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fr(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var n=e.type;if(Fr(n))return Or(e,n,t)}return t}function Wd(e,t,n,i,r,a,o,l,s){return(e=Md(n,i,!0,e,0,a,0,l,s)).context=$d(null),n=e.current,(a=Da(i=ed(),r=td(n))).callback=void 0!==t&&null!==t?t:null,La(n,a,r),e.current.lanes=r,gt(e,r,i),id(e,i),e}function Ud(e,t,n,i){var r=t.current,a=ed(),o=td(r);return n=$d(n),null===t.context?t.context=n:t.pendingContext=n,(t=Da(a,o)).payload={element:e},null!==(i=void 0===i?null:i)&&(t.callback=i),null!==(e=La(r,t,o))&&(nd(e,r,o,a),Ma(e,r,o)),o}function Hd(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Yd(e,t){Vd(e,t),(e=e.alternate)&&Vd(e,t)}js=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||_r.current)bl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return bl=!1,function(e,t,n){switch(t.tag){case 3:_l(t),xa();break;case 5:Ka(t);break;case 1:Fr(t.type)&&Nr(t);break;case 4:Ga(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,r=t.memoizedProps.value;zr(ka,i._currentValue),i._currentValue=r;break;case 13:if(null!==(i=t.memoizedState))return null!==i.dehydrated?(zr(qa,1&qa.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Rl(e,t,n):(zr(qa,1&qa.current),null!==(e=Hl(e,t,n))?e.sibling:null);zr(qa,1&qa.current);break;case 19:if(i=0!==(n&t.childLanes),0!==(128&e.flags)){if(i)return Wl(e,t,n);t.flags|=128}if(null!==(r=t.memoizedState)&&(r.rendering=null,r.tail=null,r.lastEffect=null),zr(qa,qa.current),i)break;return null;case 22:case 23:return t.lanes=0,Sl(e,t,n)}return Hl(e,t,n)}(e,t,n);bl=0!==(131072&e.flags)}else bl=!1,ra&&0!==(1048576&t.flags)&&qr(t,Yr,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Ul(e,t),e=t.pendingProps;var r=Tr(t,Pr.current);_a(t,n),r=mo(null,t,i,e,r,n);var o=go();return t.flags|=1,"object"===typeof r&&null!==r&&"function"===typeof r.render&&void 0===r.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fr(i)?(o=!0,Nr(t)):o=!1,t.memoizedState=null!==r.state&&void 0!==r.state?r.state:null,Na(t),r.updater=rl,t.stateNode=r,r._reactInternals=t,sl(t,i,e,n),t=Pl(null,t,i,!0,o,n)):(t.tag=0,ra&&o&&ea(t),yl(null,t,r,n),t=t.child),t;case 16:i=t.elementType;e:{switch(Ul(e,t),e=t.pendingProps,i=(r=i._init)(i._payload),t.type=i,r=t.tag=function(e){if("function"===typeof e)return Fd(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===T)return 14}return 2}(i),e=nl(i,e),r){case 0:t=zl(null,t,i,e,n);break e;case 1:t=Cl(null,t,i,e,n);break e;case 11:t=vl(null,t,i,e,n);break e;case 14:t=kl(null,t,i,nl(i.type,e),n);break e}throw Error(a(306,i,""))}return t;case 0:return i=t.type,r=t.pendingProps,zl(e,t,i,r=t.elementType===i?r:nl(i,r),n);case 1:return i=t.type,r=t.pendingProps,Cl(e,t,i,r=t.elementType===i?r:nl(i,r),n);case 3:e:{if(_l(t),null===e)throw Error(a(387));i=t.pendingProps,r=(o=t.memoizedState).element,Ra(e,t),Wa(t,i,null,n);var l=t.memoizedState;if(i=l.element,o.isDehydrated){if(o={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Il(e,t,i,n,r=dl(Error(a(423)),t));break e}if(i!==r){t=Il(e,t,i,n,r=dl(Error(a(424)),t));break e}for(ia=dr(t.stateNode.containerInfo.firstChild),na=t,ra=!0,aa=null,n=va(t,null,i,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(xa(),i===r){t=Hl(e,t,n);break e}yl(e,t,i,n)}t=t.child}return t;case 5:return Ka(t),null===e&&da(t),i=t.type,r=t.pendingProps,o=null!==e?e.memoizedProps:null,l=r.children,nr(i,r)?l=null:null!==o&&nr(i,o)&&(t.flags|=32),El(e,t),yl(e,t,l,n),t.child;case 6:return null===e&&da(t),null;case 13:return Rl(e,t,n);case 4:return Ga(t,t.stateNode.containerInfo),i=t.pendingProps,null===e?t.child=ya(t,null,i,n):yl(e,t,i,n),t.child;case 11:return i=t.type,r=t.pendingProps,vl(e,t,i,r=t.elementType===i?r:nl(i,r),n);case 7:return yl(e,t,t.pendingProps,n),t.child;case 8:case 12:return yl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,r=t.pendingProps,o=t.memoizedProps,l=r.value,zr(ka,i._currentValue),i._currentValue=l,null!==o)if(li(o.value,l)){if(o.children===r.children&&!_r.current){t=Hl(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var s=o.dependencies;if(null!==s){l=o.child;for(var d=s.firstContext;null!==d;){if(d.context===i){if(1===o.tag){(d=Da(-1,n&-n)).tag=2;var c=o.updateQueue;if(null!==c){var p=(c=c.shared).pending;null===p?d.next=d:(d.next=p.next,p.next=d),c.pending=d}}o.lanes|=n,null!==(d=o.alternate)&&(d.lanes|=n),Pa(o.return,n,t),s.lanes|=n;break}d=d.next}}else if(10===o.tag)l=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(l=o.return))throw Error(a(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Pa(l,n,t),l=o.sibling}else l=o.child;if(null!==l)l.return=o;else for(l=o;null!==l;){if(l===t){l=null;break}if(null!==(o=l.sibling)){o.return=l.return,l=o;break}l=l.return}o=l}yl(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,i=t.pendingProps.children,_a(t,n),i=i(r=Ia(r)),t.flags|=1,yl(e,t,i,n),t.child;case 14:return r=nl(i=t.type,t.pendingProps),kl(e,t,i,r=nl(i.type,r),n);case 15:return jl(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:nl(i,r),Ul(e,t),t.tag=1,Fr(i)?(e=!0,Nr(t)):e=!1,_a(t,n),ol(t,i,r),sl(t,i,r,n),Pl(null,t,i,!0,e,n);case 19:return Wl(e,t,n);case 22:return Sl(e,t,n)}throw Error(a(156,t.tag))};var Jd="function"===typeof reportError?reportError:function(e){console.error(e)};function Xd(e){this._internalRoot=e}function Gd(e){this._internalRoot=e}function Qd(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Kd(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zd(){}function qd(e,t,n,i,r){var a=n._reactRootContainer;if(a){var o=a;if("function"===typeof r){var l=r;r=function(){var e=Hd(o);l.call(e)}}Ud(t,o,e,r)}else o=function(e,t,n,i,r){if(r){if("function"===typeof i){var a=i;i=function(){var e=Hd(o);a.call(e)}}var o=Wd(t,i,e,0,null,!1,0,"",Zd);return e._reactRootContainer=o,e[fr]=o.current,Wi(8===e.nodeType?e.parentNode:e),cd(),o}for(;r=e.lastChild;)e.removeChild(r);if("function"===typeof i){var l=i;i=function(){var e=Hd(s);l.call(e)}}var s=Md(e,0,!1,null,0,!1,0,"",Zd);return e._reactRootContainer=s,e[fr]=s.current,Wi(8===e.nodeType?e.parentNode:e),cd(function(){Ud(t,s,n,i)}),s}(n,t,e,r,i);return Hd(o)}Gd.prototype.render=Xd.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Ud(e,t,null,null)},Gd.prototype.unmount=Xd.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cd(function(){Ud(null,e,null,null)}),t[fr]=null}},Gd.prototype.unstable_scheduleHydration=function(e){if(e){var t=St();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&0!==t&&t<At[n].priority;n++);At.splice(n,0,e),0===n&&Rt(e)}},vt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pt(t.pendingLanes);0!==n&&(wt(t,1|n),id(t,Ke()),0===(6&Ps)&&(Ws=Ke()+500,Wr()))}break;case 13:cd(function(){var t=Ba(e,1);if(null!==t){var n=ed();nd(t,e,1,n)}}),Yd(e,1)}},kt=function(e){if(13===e.tag){var t=Ba(e,134217728);if(null!==t)nd(t,e,134217728,ed());Yd(e,134217728)}},jt=function(e){if(13===e.tag){var t=td(e),n=Ba(e,t);if(null!==n)nd(n,e,t,ed());Yd(e,t)}},St=function(){return bt},Et=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},ke=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=vr(i);if(!r)throw Error(a(90));J(i),Z(i,r)}}}break;case"textarea":ae(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Pe=dd,_e=cd;var ec={usingClientEntryPoint:!1,Events:[br,yr,vr,ze,Ce,dd]},tc={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:y.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{rt=ic.inject(nc),at=ic}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Qd(t))throw Error(a(200));return function(e,t,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==i?null:""+i,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Qd(e))throw Error(a(299));var n=!1,i="",r=Jd;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(i=t.identifierPrefix),void 0!==t.onRecoverableError&&(r=t.onRecoverableError)),t=Md(e,1,!1,null,0,n,0,i,r),e[fr]=t.current,Wi(8===e.nodeType?e.parentNode:e),new Xd(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return cd(e)},t.hydrate=function(e,t,n){if(!Kd(t))throw Error(a(200));return qd(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Qd(e))throw Error(a(405));var i=null!=n&&n.hydratedSources||null,r=!1,o="",l=Jd;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Wd(t,null,e,1,null!=n?n:null,r,0,o,l),e[fr]=t.current,Wi(e),i)for(e=0;e<i.length;e++)r=(r=(n=i[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new Gd(t)},t.render=function(e,t,n){if(!Kd(t))throw Error(a(200));return qd(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Kd(e))throw Error(a(40));return!!e._reactRootContainer&&(cd(function(){qd(null,null,e,!1,function(){e._reactRootContainer=null,e[fr]=null})}),!0)},t.unstable_batchedUpdates=dd,t.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!Kd(n))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return qd(e,t,n,!1,i)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(i,r){if(1&r&&(i=this(i)),8&r)return i;if("object"===typeof i&&i){if(4&r&&i.__esModule)return i;if(16&r&&"function"===typeof i.then)return i}var a=Object.create(null);n.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var l=2&r&&i;("object"==typeof l||"function"==typeof l)&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach(e=>o[e]=()=>i[e]);return o.default=()=>i,n.d(a,o),a}})(),n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e=n(43),t=n.t(e,2),i=n(391);var r=function(){return r=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)};Object.create;function a(e,t,n){if(n||2===arguments.length)for(var i,r=0,a=t.length;r<a;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var o=n(324),l=n.n(o),s="-ms-",d="-moz-",c="-webkit-",p="comm",u="rule",x="decl",f="@keyframes",h=Math.abs,m=String.fromCharCode,g=Object.assign;function w(e){return e.trim()}function b(e,t){return(e=t.exec(e))?e[0]:e}function y(e,t,n){return e.replace(t,n)}function v(e,t,n){return e.indexOf(t,n)}function k(e,t){return 0|e.charCodeAt(t)}function j(e,t,n){return e.slice(t,n)}function S(e){return e.length}function E(e){return e.length}function z(e,t){return t.push(e),e}function C(e,t){return e.filter(function(e){return!b(e,t)})}var P=1,_=1,I=0,T=0,F=0,A="";function B(e,t,n,i,r,a,o,l){return{value:e,root:t,parent:n,type:i,props:r,children:a,line:P,column:_,length:o,return:"",siblings:l}}function O(e,t){return g(B("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function N(e){for(;e.root;)e=O(e.root,{children:[e]});z(e,e.siblings)}function R(){return F=T>0?k(A,--T):0,_--,10===F&&(_=1,P--),F}function D(){return F=T<I?k(A,T++):0,_++,10===F&&(_=1,P++),F}function L(){return k(A,T)}function M(){return T}function $(e,t){return j(A,e,t)}function W(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function U(e){return P=_=1,I=S(A=e),T=0,[]}function H(e){return A="",e}function V(e){return w($(T-1,X(91===e?e+2:40===e?e+1:e)))}function Y(e){for(;(F=L())&&F<33;)D();return W(e)>2||W(F)>3?"":" "}function J(e,t){for(;--t&&D()&&!(F<48||F>102||F>57&&F<65||F>70&&F<97););return $(e,M()+(t<6&&32==L()&&32==D()))}function X(e){for(;D();)switch(F){case e:return T;case 34:case 39:34!==e&&39!==e&&X(F);break;case 40:41===e&&X(e);break;case 92:D()}return T}function G(e,t){for(;D()&&e+F!==57&&(e+F!==84||47!==L()););return"/*"+$(t,T-1)+"*"+m(47===e?e:D())}function Q(e){for(;!W(L());)D();return $(e,T)}function K(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function Z(e,t,n,i){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case x:return e.return=e.return||e.value;case p:return"";case f:return e.return=e.value+"{"+K(e.children,i)+"}";case u:if(!S(e.value=e.props.join(",")))return""}return S(n=K(e.children,i))?e.return=e.value+"{"+n+"}":""}function q(e,t,n){switch(function(e,t){return 45^k(e,0)?(((t<<2^k(e,0))<<2^k(e,1))<<2^k(e,2))<<2^k(e,3):0}(e,t)){case 5103:return c+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return c+e+e;case 4789:return d+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return c+e+d+e+s+e+e;case 5936:switch(k(e,t+11)){case 114:return c+e+s+y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return c+e+s+y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return c+e+s+y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return c+e+s+e+e;case 6165:return c+e+s+"flex-"+e+e;case 5187:return c+e+y(e,/(\w+).+(:[^]+)/,c+"box-$1$2"+s+"flex-$1$2")+e;case 5443:return c+e+s+"flex-item-"+y(e,/flex-|-self/g,"")+(b(e,/flex-|baseline/)?"":s+"grid-row-"+y(e,/flex-|-self/g,""))+e;case 4675:return c+e+s+"flex-line-pack"+y(e,/align-content|flex-|-self/g,"")+e;case 5548:return c+e+s+y(e,"shrink","negative")+e;case 5292:return c+e+s+y(e,"basis","preferred-size")+e;case 6060:return c+"box-"+y(e,"-grow","")+c+e+s+y(e,"grow","positive")+e;case 4554:return c+y(e,/([^-])(transform)/g,"$1"+c+"$2")+e;case 6187:return y(y(y(e,/(zoom-|grab)/,c+"$1"),/(image-set)/,c+"$1"),e,"")+e;case 5495:case 3959:return y(e,/(image-set\([^]*)/,c+"$1$`$1");case 4968:return y(y(e,/(.+:)(flex-)?(.*)/,c+"box-pack:$3"+s+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+c+e+e;case 4200:if(!b(e,/flex-|baseline/))return s+"grid-column-align"+j(e,t)+e;break;case 2592:case 3360:return s+y(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,b(e.props,/grid-\w+-end/)})?~v(e+(n=n[t].value),"span",0)?e:s+y(e,"-start","")+e+s+"grid-row-span:"+(~v(n,"span",0)?b(n,/\d+/):+b(n,/\d+/)-+b(e,/\d+/))+";":s+y(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return b(e.props,/grid-\w+-start/)})?e:s+y(y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return y(e,/(.+)-inline(.+)/,c+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(S(e)-1-t>6)switch(k(e,t+1)){case 109:if(45!==k(e,t+4))break;case 102:return y(e,/(.+:)(.+)-([^]+)/,"$1"+c+"$2-$3$1"+d+(108==k(e,t+3)?"$3":"$2-$3"))+e;case 115:return~v(e,"stretch",0)?q(y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,i,r,a,o,l){return s+n+":"+i+l+(r?s+n+"-span:"+(a?o:+o-+i)+l:"")+e});case 4949:if(121===k(e,t+6))return y(e,":",":"+c)+e;break;case 6444:switch(k(e,45===k(e,14)?18:11)){case 120:return y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+c+(45===k(e,14)?"inline-":"")+"box$3$1"+c+"$2$3$1"+s+"$2box$3")+e;case 100:return y(e,":",":"+s)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return y(e,"scroll-","scroll-snap-")+e}return e}function ee(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case x:return void(e.return=q(e.value,e.length,n));case f:return K([O(e,{value:y(e.value,"@","@"+c)})],i);case u:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(b(t,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":N(O(e,{props:[y(t,/:(read-\w+)/,":-moz-$1")]})),N(O(e,{props:[t]})),g(e,{props:C(n,i)});break;case"::placeholder":N(O(e,{props:[y(t,/:(plac\w+)/,":"+c+"input-$1")]})),N(O(e,{props:[y(t,/:(plac\w+)/,":-moz-$1")]})),N(O(e,{props:[y(t,/:(plac\w+)/,s+"input-$1")]})),N(O(e,{props:[t]})),g(e,{props:C(n,i)})}return""})}}function te(e){return H(ne("",null,null,null,[""],e=U(e),0,[0],e))}function ne(e,t,n,i,r,a,o,l,s){for(var d=0,c=0,p=o,u=0,x=0,f=0,g=1,w=1,b=1,j=0,E="",C=r,P=a,_=i,I=E;w;)switch(f=j,j=D()){case 40:if(108!=f&&58==k(I,p-1)){-1!=v(I+=y(V(j),"&","&\f"),"&\f",h(d?l[d-1]:0))&&(b=-1);break}case 34:case 39:case 91:I+=V(j);break;case 9:case 10:case 13:case 32:I+=Y(f);break;case 92:I+=J(M()-1,7);continue;case 47:switch(L()){case 42:case 47:z(re(G(D(),M()),t,n,s),s);break;default:I+="/"}break;case 123*g:l[d++]=S(I)*b;case 125*g:case 59:case 0:switch(j){case 0:case 125:w=0;case 59+c:-1==b&&(I=y(I,/\f/g,"")),x>0&&S(I)-p&&z(x>32?ae(I+";",i,n,p-1,s):ae(y(I," ","")+";",i,n,p-2,s),s);break;case 59:I+=";";default:if(z(_=ie(I,t,n,d,c,r,l,E,C=[],P=[],p,a),a),123===j)if(0===c)ne(I,t,_,_,C,a,p,l,P);else switch(99===u&&110===k(I,3)?100:u){case 100:case 108:case 109:case 115:ne(e,_,_,i&&z(ie(e,_,_,0,0,r,l,E,r,C=[],p,P),P),r,P,p,l,i?C:P);break;default:ne(I,_,_,_,[""],P,0,l,P)}}d=c=x=0,g=b=1,E=I="",p=o;break;case 58:p=1+S(I),x=f;default:if(g<1)if(123==j)--g;else if(125==j&&0==g++&&125==R())continue;switch(I+=m(j),j*g){case 38:b=c>0?1:(I+="\f",-1);break;case 44:l[d++]=(S(I)-1)*b,b=1;break;case 64:45===L()&&(I+=V(D())),u=L(),c=p=S(E=I+=Q(M())),j++;break;case 45:45===f&&2==S(I)&&(g=0)}}return a}function ie(e,t,n,i,r,a,o,l,s,d,c,p){for(var x=r-1,f=0===r?a:[""],m=E(f),g=0,b=0,v=0;g<i;++g)for(var k=0,S=j(e,x+1,x=h(b=o[g])),z=e;k<m;++k)(z=w(b>0?f[k]+" "+S:y(S,/&\f/g,f[k])))&&(s[v++]=z);return B(e,t,n,0===r?u:l,s,d,c,p)}function re(e,t,n,i){return B(e,t,n,p,m(F),j(e,2,-2),0,i)}function ae(e,t,n,i,r){return B(e,t,n,x,j(e,0,i),j(e,i+1,-1),i,r)}var oe={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},le="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}.SC_ATTR)||"data-styled",se="active",de="data-styled-version",ce="6.1.19",pe="/*!sc*/\n",ue="undefined"!=typeof window&&"undefined"!=typeof document,xe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}.SC_DISABLE_SPEEDY)),fe={},he=(new Set,Object.freeze([])),me=Object.freeze({});function ge(e,t,n){return void 0===n&&(n=me),e.theme!==n.theme&&e.theme||t||n.theme}var we=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),be=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ye=/(^-|-$)/g;function ve(e){return e.replace(be,"-").replace(ye,"")}var ke=/(a)(d)/gi,je=function(e){return String.fromCharCode(e+(e>25?39:97))};function Se(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=je(t%52)+n;return(je(t%52)+n).replace(ke,"$1-$2")}var Ee,ze=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ce=function(e){return ze(5381,e)};function Pe(e){return Se(Ce(e)>>>0)}function _e(e){return e.displayName||e.name||"Component"}function Ie(e){return"string"==typeof e&&!0}var Te="function"==typeof Symbol&&Symbol.for,Fe=Te?Symbol.for("react.memo"):60115,Ae=Te?Symbol.for("react.forward_ref"):60112,Be={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Oe={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ne={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Re=((Ee={})[Ae]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ee[Fe]=Ne,Ee);function De(e){return("type"in(t=e)&&t.type.$$typeof)===Fe?Ne:"$$typeof"in e?Re[e.$$typeof]:Be;var t}var Le=Object.defineProperty,Me=Object.getOwnPropertyNames,$e=Object.getOwnPropertySymbols,We=Object.getOwnPropertyDescriptor,Ue=Object.getPrototypeOf,He=Object.prototype;function Ve(e,t,n){if("string"!=typeof t){if(He){var i=Ue(t);i&&i!==He&&Ve(e,i,n)}var r=Me(t);$e&&(r=r.concat($e(t)));for(var a=De(e),o=De(t),l=0;l<r.length;++l){var s=r[l];if(!(s in Oe||n&&n[s]||o&&s in o||a&&s in a)){var d=We(t,s);try{Le(e,s,d)}catch(e){}}}}return e}function Ye(e){return"function"==typeof e}function Je(e){return"object"==typeof e&&"styledComponentId"in e}function Xe(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ge(e,t){if(0===e.length)return"";for(var n=e[0],i=1;i<e.length;i++)n+=t?t+e[i]:e[i];return n}function Qe(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ke(e,t,n){if(void 0===n&&(n=!1),!n&&!Qe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=Ke(e[i],t[i]);else if(Qe(t))for(var i in t)e[i]=Ke(e[i],t[i]);return e}function Ze(e,t){Object.defineProperty(e,"toString",{value:t})}function qe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var et=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,r=i;e>=r;)if((r<<=1)<0)throw qe(16,"".concat(e));this.groupSizes=new Uint32Array(r),this.groupSizes.set(n),this.length=r;for(var a=i;a<r;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),l=(a=0,t.length);a<l;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),i=n+t;this.groupSizes[e]=0;for(var r=n;r<i;r++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],i=this.indexOfGroup(e),r=i+n,a=i;a<r;a++)t+="".concat(this.tag.getRule(a)).concat(pe);return t},e}(),tt=new Map,nt=new Map,it=1,rt=function(e){if(tt.has(e))return tt.get(e);for(;nt.has(it);)it++;var t=it++;return tt.set(e,t),nt.set(t,e),t},at=function(e,t){it=t+1,tt.set(e,t),nt.set(t,e)},ot="style[".concat(le,"][").concat(de,'="').concat(ce,'"]'),lt=new RegExp("^".concat(le,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),st=function(e,t,n){for(var i,r=n.split(","),a=0,o=r.length;a<o;a++)(i=r[a])&&e.registerName(t,i)},dt=function(e,t){for(var n,i=(null!==(n=t.textContent)&&void 0!==n?n:"").split(pe),r=[],a=0,o=i.length;a<o;a++){var l=i[a].trim();if(l){var s=l.match(lt);if(s){var d=0|parseInt(s[1],10),c=s[2];0!==d&&(at(c,d),st(e,c,s[3]),e.getTag().insertRules(d,r)),r.length=0}else r.push(l)}}},ct=function(e){for(var t=document.querySelectorAll(ot),n=0,i=t.length;n<i;n++){var r=t[n];r&&r.getAttribute(le)!==se&&(dt(e,r),r.parentNode&&r.parentNode.removeChild(r))}};function pt(){return n.nc}var ut=function(e){var t=document.head,n=e||t,i=document.createElement("style"),r=function(e){var t=Array.from(e.querySelectorAll("style[".concat(le,"]")));return t[t.length-1]}(n),a=void 0!==r?r.nextSibling:null;i.setAttribute(le,se),i.setAttribute(de,ce);var o=pt();return o&&i.setAttribute("nonce",o),n.insertBefore(i,a),i},xt=function(){function e(e){this.element=ut(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,i=t.length;n<i;n++){var r=t[n];if(r.ownerNode===e)return r}throw qe(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),ft=function(){function e(e){this.element=ut(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),ht=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),mt=ue,gt={isServer:!ue,useCSSOMInjection:!xe},wt=function(){function e(e,t,n){void 0===e&&(e=me),void 0===t&&(t={});var i=this;this.options=r(r({},gt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&ue&&mt&&(mt=!1,ct(this)),Ze(this,function(){return function(e){for(var t=e.getTag(),n=t.length,i="",r=function(n){var r=function(e){return nt.get(e)}(n);if(void 0===r)return"continue";var a=e.names.get(r),o=t.getGroup(n);if(void 0===a||!a.size||0===o.length)return"continue";var l="".concat(le,".g").concat(n,'[id="').concat(r,'"]'),s="";void 0!==a&&a.forEach(function(e){e.length>0&&(s+="".concat(e,","))}),i+="".concat(o).concat(l,'{content:"').concat(s,'"}').concat(pe)},a=0;a<n;a++)r(a);return i}(i)})}return e.registerId=function(e){return rt(e)},e.prototype.rehydrate=function(){!this.server&&ue&&ct(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(r(r({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new ht(n):t?new xt(n):new ft(n)}(this.options),new et(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(rt(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(rt(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(rt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),bt=/&/g,yt=/^\s*\/\/.*$/gm;function vt(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=vt(e.children,t)),e})}function kt(e){var t,n,i,r=void 0===e?me:e,a=r.options,o=void 0===a?me:a,l=r.plugins,s=void 0===l?he:l,d=function(e,i,r){return r.startsWith(n)&&r.endsWith(n)&&r.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push(function(e){e.type===u&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(bt,n).replace(i,d))}),o.prefix&&c.push(ee),c.push(Z);var p=function(e,r,a,l){void 0===r&&(r=""),void 0===a&&(a=""),void 0===l&&(l="&"),t=l,n=r,i=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(yt,""),d=te(a||r?"".concat(a," ").concat(r," { ").concat(s," }"):s);o.namespace&&(d=vt(d,o.namespace));var p,u=[];return K(d,function(e){var t=E(e);return function(n,i,r,a){for(var o="",l=0;l<t;l++)o+=e[l](n,i,r,a)||"";return o}}(c.concat((p=function(e){return u.push(e)},function(e){e.root||(e=e.return)&&p(e)})))),u};return p.hash=s.length?s.reduce(function(e,t){return t.name||qe(15),ze(e,t.name)},5381).toString():"",p}var jt=new wt,St=kt(),Et=e.createContext({shouldForwardProp:void 0,styleSheet:jt,stylis:St}),zt=(Et.Consumer,e.createContext(void 0));function Ct(){return(0,e.useContext)(Et)}function Pt(t){var n=(0,e.useState)(t.stylisPlugins),i=n[0],r=n[1],a=Ct().styleSheet,o=(0,e.useMemo)(function(){var e=a;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e},[t.disableCSSOMInjection,t.sheet,t.target,a]),s=(0,e.useMemo)(function(){return kt({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:i})},[t.enableVendorPrefixes,t.namespace,i]);(0,e.useEffect)(function(){l()(i,t.stylisPlugins)||r(t.stylisPlugins)},[t.stylisPlugins]);var d=(0,e.useMemo)(function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:o,stylis:s}},[t.shouldForwardProp,o,s]);return e.createElement(Et.Provider,{value:d},e.createElement(zt.Provider,{value:s},t.children))}var _t=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=St);var i=n.name+t.hash;e.hasNameForId(n.id,i)||e.insertRules(n.id,i,t(n.rules,i,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Ze(this,function(){throw qe(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=St),this.name+e.hash},e}(),It=function(e){return e>="A"&&e<="Z"};function Tt(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(1===n&&"-"===i&&"-"===e[0])return e;It(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var Ft=function(e){return null==e||!1===e||""===e},At=function(e){var t,n,i=[];for(var r in e){var o=e[r];e.hasOwnProperty(r)&&!Ft(o)&&(Array.isArray(o)&&o.isCss||Ye(o)?i.push("".concat(Tt(r),":"),o,";"):Qe(o)?i.push.apply(i,a(a(["".concat(r," {")],At(o),!1),["}"],!1)):i.push("".concat(Tt(r),": ").concat((t=r,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in oe||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function Bt(e,t,n,i){return Ft(e)?[]:Je(e)?[".".concat(e.styledComponentId)]:Ye(e)?!Ye(r=e)||r.prototype&&r.prototype.isReactComponent||!t?[e]:Bt(e(t),t,n,i):e instanceof _t?n?(e.inject(n,i),[e.getName(i)]):[e]:Qe(e)?At(e):Array.isArray(e)?Array.prototype.concat.apply(he,e.map(function(e){return Bt(e,t,n,i)})):[e.toString()];var r}function Ot(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ye(n)&&!Je(n))return!1}return!0}var Nt=Ce(ce),Rt=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Ot(e),this.componentId=t,this.baseHash=ze(Nt,t),this.baseStyle=n,wt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))i=Xe(i,this.staticRulesId);else{var r=Ge(Bt(this.rules,e,t,n)),a=Se(ze(this.baseHash,r)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(r,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}i=Xe(i,a),this.staticRulesId=a}else{for(var l=ze(this.baseHash,n.hash),s="",d=0;d<this.rules.length;d++){var c=this.rules[d];if("string"==typeof c)s+=c;else if(c){var p=Ge(Bt(c,e,t,n));l=ze(l,p+d),s+=p}}if(s){var u=Se(l>>>0);t.hasNameForId(this.componentId,u)||t.insertRules(this.componentId,u,n(s,".".concat(u),void 0,this.componentId)),i=Xe(i,u)}}return i},e}(),Dt=e.createContext(void 0);Dt.Consumer;var Lt={};new Set;function Mt(t,n,i){var a=Je(t),o=t,l=!Ie(t),s=n.attrs,d=void 0===s?he:s,c=n.componentId,p=void 0===c?function(e,t){var n="string"!=typeof e?"sc":ve(e);Lt[n]=(Lt[n]||0)+1;var i="".concat(n,"-").concat(Pe(ce+n+Lt[n]));return t?"".concat(t,"-").concat(i):i}(n.displayName,n.parentComponentId):c,u=n.displayName,x=void 0===u?function(e){return Ie(e)?"styled.".concat(e):"Styled(".concat(_e(e),")")}(t):u,f=n.displayName&&n.componentId?"".concat(ve(n.displayName),"-").concat(n.componentId):n.componentId||p,h=a&&o.attrs?o.attrs.concat(d).filter(Boolean):d,m=n.shouldForwardProp;if(a&&o.shouldForwardProp){var g=o.shouldForwardProp;if(n.shouldForwardProp){var w=n.shouldForwardProp;m=function(e,t){return g(e,t)&&w(e,t)}}else m=g}var b=new Rt(i,f,a?o.componentStyle:void 0);function y(t,n){return function(t,n,i){var a=t.attrs,o=t.componentStyle,l=t.defaultProps,s=t.foldedComponentIds,d=t.styledComponentId,c=t.target,p=e.useContext(Dt),u=Ct(),x=t.shouldForwardProp||u.shouldForwardProp,f=ge(n,p,l)||me,h=function(e,t,n){for(var i,a=r(r({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var l=Ye(i=e[o])?i(a):i;for(var s in l)a[s]="className"===s?Xe(a[s],l[s]):"style"===s?r(r({},a[s]),l[s]):l[s]}return t.className&&(a.className=Xe(a.className,t.className)),a}(a,n,f),m=h.as||c,g={};for(var w in h)void 0===h[w]||"$"===w[0]||"as"===w||"theme"===w&&h.theme===f||("forwardedAs"===w?g.as=h.forwardedAs:x&&!x(w,m)||(g[w]=h[w]));var b=function(e,t){var n=Ct();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,h),y=Xe(s,d);return b&&(y+=" "+b),h.className&&(y+=" "+h.className),g[Ie(m)&&!we.has(m)?"class":"className"]=y,i&&(g.ref=i),(0,e.createElement)(m,g)}(v,t,n)}y.displayName=x;var v=e.forwardRef(y);return v.attrs=h,v.componentStyle=b,v.displayName=x,v.shouldForwardProp=m,v.foldedComponentIds=a?Xe(o.foldedComponentIds,o.styledComponentId):"",v.styledComponentId=f,v.target=a?o.target:t,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var i=0,r=t;i<r.length;i++)Ke(e,r[i],!0);return e}({},o.defaultProps,e):e}}),Ze(v,function(){return".".concat(v.styledComponentId)}),l&&Ve(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function $t(e,t){for(var n=[e[0]],i=0,r=t.length;i<r;i+=1)n.push(t[i],e[i+1]);return n}var Wt=function(e){return Object.assign(e,{isCss:!0})};function Ut(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ye(e)||Qe(e))return Wt(Bt($t(he,a([e],t,!0))));var i=e;return 0===t.length&&1===i.length&&"string"==typeof i[0]?Bt(i):Wt(Bt($t(i,t)))}function Ht(e,t,n){if(void 0===n&&(n=me),!t)throw qe(1,t);var i=function(i){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];return e(t,n,Ut.apply(void 0,a([i],r,!1)))};return i.attrs=function(i){return Ht(e,t,r(r({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},i.withConfig=function(i){return Ht(e,t,r(r({},n),i))},i}var Vt=function(e){return Ht(Mt,e)},Yt=Vt;we.forEach(function(e){Yt[e]=Vt(e)});var Jt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ot(e),wt.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,i){var r=i(Ge(Bt(this.rules,t,n,i)),""),a=this.componentId+e;n.insertRules(a,a,r)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,i){e>2&&wt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,i)},e}();function Xt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=Ge(Ut.apply(void 0,a([e],t,!1))),r=Pe(i);return new _t(r,i)}var Gt;(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=pt(),i=Ge([n&&'nonce="'.concat(n,'"'),"".concat(le,'="true"'),"".concat(de,'="').concat(ce,'"')].filter(Boolean)," ");return"<style ".concat(i,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw qe(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw qe(2);var i=t.instance.toString();if(!i)return[];var a=((n={})[le]="",n[de]=ce,n.dangerouslySetInnerHTML={__html:i},n),o=pt();return o&&(a.nonce=o),[e.createElement("style",r({},a,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new wt({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw qe(2);return e.createElement(Pt,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw qe(3)}})(),"__sc-".concat(le,"__");function Qt(){return Qt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Qt.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(Gt||(Gt={}));const Kt="popstate";function Zt(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function qt(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function en(e,t){return{usr:e.state,key:e.key,idx:t}}function tn(e,t,n,i){return void 0===n&&(n=null),Qt({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?rn(t):t,{state:n,key:t&&t.key||i||Math.random().toString(36).substr(2,8)})}function nn(e){let{pathname:t="/",search:n="",hash:i=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),i&&"#"!==i&&(t+="#"===i.charAt(0)?i:"#"+i),t}function rn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function an(e,t,n,i){void 0===i&&(i={});let{window:r=document.defaultView,v5Compat:a=!1}=i,o=r.history,l=Gt.Pop,s=null,d=c();function c(){return(o.state||{idx:null}).idx}function p(){l=Gt.Pop;let e=c(),t=null==e?null:e-d;d=e,s&&s({action:l,location:x.location,delta:t})}function u(e){let t="null"!==r.location.origin?r.location.origin:r.location.href,n="string"===typeof e?e:nn(e);return n=n.replace(/ $/,"%20"),Zt(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==d&&(d=0,o.replaceState(Qt({},o.state,{idx:d}),""));let x={get action(){return l},get location(){return e(r,o)},listen(e){if(s)throw new Error("A history only accepts one active listener");return r.addEventListener(Kt,p),s=e,()=>{r.removeEventListener(Kt,p),s=null}},createHref:e=>t(r,e),createURL:u,encodeLocation(e){let t=u(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){l=Gt.Push;let i=tn(x.location,e,t);n&&n(i,e),d=c()+1;let p=en(i,d),u=x.createHref(i);try{o.pushState(p,"",u)}catch(f){if(f instanceof DOMException&&"DataCloneError"===f.name)throw f;r.location.assign(u)}a&&s&&s({action:l,location:x.location,delta:1})},replace:function(e,t){l=Gt.Replace;let i=tn(x.location,e,t);n&&n(i,e),d=c();let r=en(i,d),p=x.createHref(i);o.replaceState(r,"",p),a&&s&&s({action:l,location:x.location,delta:0})},go:e=>o.go(e)};return x}var on;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(on||(on={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function ln(e,t,n){return void 0===n&&(n="/"),sn(e,t,n,!1)}function sn(e,t,n,i){let r=kn(("string"===typeof t?rn(t):t).pathname||"/",n);if(null==r)return null;let a=dn(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(a);let o=null;for(let l=0;null==o&&l<a.length;++l){let e=vn(r);o=bn(a[l],e,i)}return o}function dn(e,t,n,i){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===i&&(i="");let r=(e,r,a)=>{let o={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:r,route:e};o.relativePath.startsWith("/")&&(Zt(o.relativePath.startsWith(i),'Absolute route path "'+o.relativePath+'" nested under path "'+i+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(i.length));let l=Cn([i,o.relativePath]),s=n.concat(o);e.children&&e.children.length>0&&(Zt(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),dn(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:wn(l,e.index),routesMeta:s})};return e.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let i of cn(e.path))r(e,t,i);else r(e,t)}),t}function cn(e){let t=e.split("/");if(0===t.length)return[];let[n,...i]=t,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===i.length)return r?[a,""]:[a];let o=cn(i.join("/")),l=[];return l.push(...o.map(e=>""===e?a:[a,e].join("/"))),r&&l.push(...o),l.map(t=>e.startsWith("/")&&""===t?"/":t)}const pn=/^:[\w-]+$/,un=3,xn=2,fn=1,hn=10,mn=-2,gn=e=>"*"===e;function wn(e,t){let n=e.split("/"),i=n.length;return n.some(gn)&&(i+=mn),t&&(i+=xn),n.filter(e=>!gn(e)).reduce((e,t)=>e+(pn.test(t)?un:""===t?fn:hn),i)}function bn(e,t,n){void 0===n&&(n=!1);let{routesMeta:i}=e,r={},a="/",o=[];for(let l=0;l<i.length;++l){let e=i[l],s=l===i.length-1,d="/"===a?t:t.slice(a.length)||"/",c=yn({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},d),p=e.route;if(!c&&s&&n&&!i[i.length-1].route.index&&(c=yn({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},d)),!c)return null;Object.assign(r,c.params),o.push({params:r,pathname:Cn([a,c.pathname]),pathnameBase:Pn(Cn([a,c.pathnameBase])),route:p}),"/"!==c.pathnameBase&&(a=Cn([a,c.pathnameBase]))}return o}function yn(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);qt("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let i=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(i.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));e.endsWith("*")?(i.push({paramName:"*"}),r+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":""!==e&&"/"!==e&&(r+="(?:(?=\\/|$))");let a=new RegExp(r,t?void 0:"i");return[a,i]}(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let a=r[0],o=a.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:i.reduce((e,t,n)=>{let{paramName:i,isOptional:r}=t;if("*"===i){let e=l[n]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[i]=r&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:a,pathnameBase:o,pattern:e}}function vn(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return qt(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function kn(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&"/"!==i?null:e.slice(n)||"/"}function jn(e,t,n,i){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function Sn(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function En(e,t){let n=Sn(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function zn(e,t,n,i){let r;void 0===i&&(i=!1),"string"===typeof e?r=rn(e):(r=Qt({},e),Zt(!r.pathname||!r.pathname.includes("?"),jn("?","pathname","search",r)),Zt(!r.pathname||!r.pathname.includes("#"),jn("#","pathname","hash",r)),Zt(!r.search||!r.search.includes("#"),jn("#","search","hash",r)));let a,o=""===e||""===r.pathname,l=o?"/":r.pathname;if(null==l)a=n;else{let e=t.length-1;if(!i&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}a=e>=0?t[e]:"/"}let s=function(e,t){void 0===t&&(t="/");let{pathname:n,search:i="",hash:r=""}="string"===typeof e?rn(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:_n(i),hash:In(r)}}(r,a),d=l&&"/"!==l&&l.endsWith("/"),c=(o||"."===l)&&n.endsWith("/");return s.pathname.endsWith("/")||!d&&!c||(s.pathname+="/"),s}const Cn=e=>e.join("/").replace(/\/\/+/g,"/"),Pn=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_n=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",In=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function Tn(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const Fn=["post","put","patch","delete"],An=(new Set(Fn),["get",...Fn]);new Set(An),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function Bn(){return Bn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Bn.apply(this,arguments)}const On=e.createContext(null);const Nn=e.createContext(null);const Rn=e.createContext(null);const Dn=e.createContext(null);const Ln=e.createContext({outlet:null,matches:[],isDataRoute:!1});const Mn=e.createContext(null);function $n(){return null!=e.useContext(Dn)}function Wn(){return $n()||Zt(!1),e.useContext(Dn).location}function Un(t){e.useContext(Rn).static||e.useLayoutEffect(t)}function Hn(){let{isDataRoute:t}=e.useContext(Ln);return t?function(){let{router:t}=ei(Zn.UseNavigateStable),n=ni(qn.UseNavigateStable),i=e.useRef(!1);return Un(()=>{i.current=!0}),e.useCallback(function(e,r){void 0===r&&(r={}),i.current&&("number"===typeof e?t.navigate(e):t.navigate(e,Bn({fromRouteId:n},r)))},[t,n])}():function(){$n()||Zt(!1);let t=e.useContext(On),{basename:n,future:i,navigator:r}=e.useContext(Rn),{matches:a}=e.useContext(Ln),{pathname:o}=Wn(),l=JSON.stringify(En(a,i.v7_relativeSplatPath)),s=e.useRef(!1);return Un(()=>{s.current=!0}),e.useCallback(function(e,i){if(void 0===i&&(i={}),!s.current)return;if("number"===typeof e)return void r.go(e);let a=zn(e,JSON.parse(l),o,"path"===i.relative);null==t&&"/"!==n&&(a.pathname="/"===a.pathname?n:Cn([n,a.pathname])),(i.replace?r.replace:r.push)(a,i.state,i)},[n,r,l,o,t])}()}function Vn(t,n){let{relative:i}=void 0===n?{}:n,{future:r}=e.useContext(Rn),{matches:a}=e.useContext(Ln),{pathname:o}=Wn(),l=JSON.stringify(En(a,r.v7_relativeSplatPath));return e.useMemo(()=>zn(t,JSON.parse(l),o,"path"===i),[t,l,o,i])}function Yn(t,n,i,r){$n()||Zt(!1);let{navigator:a}=e.useContext(Rn),{matches:o}=e.useContext(Ln),l=o[o.length-1],s=l?l.params:{},d=(l&&l.pathname,l?l.pathnameBase:"/");l&&l.route;let c,p=Wn();if(n){var u;let e="string"===typeof n?rn(n):n;"/"===d||(null==(u=e.pathname)?void 0:u.startsWith(d))||Zt(!1),c=e}else c=p;let x=c.pathname||"/",f=x;if("/"!==d){let e=d.replace(/^\//,"").split("/");f="/"+x.replace(/^\//,"").split("/").slice(e.length).join("/")}let h=ln(t,{pathname:f});let m=Kn(h&&h.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:Cn([d,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:Cn([d,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),o,i,r);return n&&m?e.createElement(Dn.Provider,{value:{location:Bn({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Gt.Pop}},m):m}function Jn(){let t=function(){var t;let n=e.useContext(Mn),i=ti(qn.UseRouteError),r=ni(qn.UseRouteError);if(void 0!==n)return n;return null==(t=i.errors)?void 0:t[r]}(),n=Tn(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r};return e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),i?e.createElement("pre",{style:a},i):null,null)}const Xn=e.createElement(Jn,null);class Gn extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(Ln.Provider,{value:this.props.routeContext},e.createElement(Mn.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Qn(t){let{routeContext:n,match:i,children:r}=t,a=e.useContext(On);return a&&a.static&&a.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=i.route.id),e.createElement(Ln.Provider,{value:n},r)}function Kn(t,n,i,r){var a;if(void 0===n&&(n=[]),void 0===i&&(i=null),void 0===r&&(r=null),null==t){var o;if(!i)return null;if(i.errors)t=i.matches;else{if(!(null!=(o=r)&&o.v7_partialHydration&&0===n.length&&!i.initialized&&i.matches.length>0))return null;t=i.matches}}let l=t,s=null==(a=i)?void 0:a.errors;if(null!=s){let e=l.findIndex(e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id]));e>=0||Zt(!1),l=l.slice(0,Math.min(l.length,e+1))}let d=!1,c=-1;if(i&&r&&r.v7_partialHydration)for(let e=0;e<l.length;e++){let t=l[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(c=e),t.route.id){let{loaderData:e,errors:n}=i,r=t.route.loader&&void 0===e[t.route.id]&&(!n||void 0===n[t.route.id]);if(t.route.lazy||r){d=!0,l=c>=0?l.slice(0,c+1):[l[0]];break}}}return l.reduceRight((t,r,a)=>{let o,p=!1,u=null,x=null;var f;i&&(o=s&&r.route.id?s[r.route.id]:void 0,u=r.route.errorElement||Xn,d&&(c<0&&0===a?(f="route-fallback",!1||ii[f]||(ii[f]=!0),p=!0,x=null):c===a&&(p=!0,x=r.route.hydrateFallbackElement||null)));let h=n.concat(l.slice(0,a+1)),m=()=>{let n;return n=o?u:p?x:r.route.Component?e.createElement(r.route.Component,null):r.route.element?r.route.element:t,e.createElement(Qn,{match:r,routeContext:{outlet:t,matches:h,isDataRoute:null!=i},children:n})};return i&&(r.route.ErrorBoundary||r.route.errorElement||0===a)?e.createElement(Gn,{location:i.location,revalidation:i.revalidation,component:u,error:o,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var Zn=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Zn||{}),qn=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(qn||{});function ei(t){let n=e.useContext(On);return n||Zt(!1),n}function ti(t){let n=e.useContext(Nn);return n||Zt(!1),n}function ni(t){let n=function(){let t=e.useContext(Ln);return t||Zt(!1),t}(),i=n.matches[n.matches.length-1];return i.route.id||Zt(!1),i.route.id}const ii={};function ri(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}t.startTransition;function ai(e){Zt(!1)}function oi(t){let{basename:n="/",children:i=null,location:r,navigationType:a=Gt.Pop,navigator:o,static:l=!1,future:s}=t;$n()&&Zt(!1);let d=n.replace(/^\/*/,"/"),c=e.useMemo(()=>({basename:d,navigator:o,static:l,future:Bn({v7_relativeSplatPath:!1},s)}),[d,s,o,l]);"string"===typeof r&&(r=rn(r));let{pathname:p="/",search:u="",hash:x="",state:f=null,key:h="default"}=r,m=e.useMemo(()=>{let e=kn(p,d);return null==e?null:{location:{pathname:e,search:u,hash:x,state:f,key:h},navigationType:a}},[d,p,u,x,f,h,a]);return null==m?null:e.createElement(Rn.Provider,{value:c},e.createElement(Dn.Provider,{children:i,value:m}))}function li(e){let{children:t,location:n}=e;return Yn(si(t),n)}new Promise(()=>{});e.Component;function si(t,n){void 0===n&&(n=[]);let i=[];return e.Children.forEach(t,(t,r)=>{if(!e.isValidElement(t))return;let a=[...n,r];if(t.type===e.Fragment)return void i.push.apply(i,si(t.props.children,a));t.type!==ai&&Zt(!1),t.props.index&&t.props.children&&Zt(!1);let o={id:t.props.id||a.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(o.children=si(t.props.children,a)),i.push(o)}),i}var di=n(950),ci=n.t(di,2);function pi(){return pi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},pi.apply(this,arguments)}function ui(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const xi=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],fi=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"];try{window.__reactRouterVersion="6"}catch(sd){}const hi=e.createContext({isTransitioning:!1});new Map;const mi=t.startTransition;ci.flushSync,t.useId;function gi(t){let{basename:n,children:i,future:r,window:a}=t,o=e.useRef();var l;null==o.current&&(o.current=(void 0===(l={window:a,v5Compat:!0})&&(l={}),an(function(e,t){let{pathname:n,search:i,hash:r}=e.location;return tn("",{pathname:n,search:i,hash:r},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:nn(t)},null,l)));let s=o.current,[d,c]=e.useState({action:s.action,location:s.location}),{v7_startTransition:p}=r||{},u=e.useCallback(e=>{p&&mi?mi(()=>c(e)):c(e)},[c,p]);return e.useLayoutEffect(()=>s.listen(u),[s,u]),e.useEffect(()=>ri(r),[r]),e.createElement(oi,{basename:n,children:i,location:d.location,navigationType:d.action,navigator:s,future:r})}const wi="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,bi=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yi=e.forwardRef(function(t,n){let i,{onClick:r,relative:a,reloadDocument:o,replace:l,state:s,target:d,to:c,preventScrollReset:p,viewTransition:u}=t,x=ui(t,xi),{basename:f}=e.useContext(Rn),h=!1;if("string"===typeof c&&bi.test(c)&&(i=c,wi))try{let e=new URL(window.location.href),t=c.startsWith("//")?new URL(e.protocol+c):new URL(c),n=kn(t.pathname,f);t.origin===e.origin&&null!=n?c=n+t.search+t.hash:h=!0}catch(sd){}let m=function(t,n){let{relative:i}=void 0===n?{}:n;$n()||Zt(!1);let{basename:r,navigator:a}=e.useContext(Rn),{hash:o,pathname:l,search:s}=Vn(t,{relative:i}),d=l;return"/"!==r&&(d="/"===l?r:Cn([r,l])),a.createHref({pathname:d,search:s,hash:o})}(c,{relative:a}),g=function(t,n){let{target:i,replace:r,state:a,preventScrollReset:o,relative:l,viewTransition:s}=void 0===n?{}:n,d=Hn(),c=Wn(),p=Vn(t,{relative:l});return e.useCallback(e=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(e,i)){e.preventDefault();let n=void 0!==r?r:nn(c)===nn(p);d(t,{replace:n,state:a,preventScrollReset:o,relative:l,viewTransition:s})}},[c,d,p,r,a,i,t,o,l,s])}(c,{replace:l,state:s,target:d,preventScrollReset:p,relative:a,viewTransition:u});return e.createElement("a",pi({},x,{href:i||m,onClick:h||o?r:function(e){r&&r(e),e.defaultPrevented||g(e)},ref:n,target:d}))});const vi=e.forwardRef(function(t,n){let{"aria-current":i="page",caseSensitive:r=!1,className:a="",end:o=!1,style:l,to:s,viewTransition:d,children:c}=t,p=ui(t,fi),u=Vn(s,{relative:p.relative}),x=Wn(),f=e.useContext(Nn),{navigator:h,basename:m}=e.useContext(Rn),g=null!=f&&function(t,n){void 0===n&&(n={});let i=e.useContext(hi);null==i&&Zt(!1);let{basename:r}=Si(ki.useViewTransitionState),a=Vn(t,{relative:n.relative});if(!i.isTransitioning)return!1;let o=kn(i.currentLocation.pathname,r)||i.currentLocation.pathname,l=kn(i.nextLocation.pathname,r)||i.nextLocation.pathname;return null!=yn(a.pathname,l)||null!=yn(a.pathname,o)}(u)&&!0===d,w=h.encodeLocation?h.encodeLocation(u).pathname:u.pathname,b=x.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;r||(b=b.toLowerCase(),y=y?y.toLowerCase():null,w=w.toLowerCase()),y&&m&&(y=kn(y,m)||y);const v="/"!==w&&w.endsWith("/")?w.length-1:w.length;let k,j=b===w||!o&&b.startsWith(w)&&"/"===b.charAt(v),S=null!=y&&(y===w||!o&&y.startsWith(w)&&"/"===y.charAt(w.length)),E={isActive:j,isPending:S,isTransitioning:g},z=j?i:void 0;k="function"===typeof a?a(E):[a,j?"active":null,S?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let C="function"===typeof l?l(E):l;return e.createElement(yi,pi({},p,{"aria-current":z,className:k,ref:n,style:C,to:s,viewTransition:d}),"function"===typeof c?c(E):c)});var ki,ji;function Si(t){let n=e.useContext(On);return n||Zt(!1),n}(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ki||(ki={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(ji||(ji={}));const Ei=()=>"undefined"===typeof window&&(console.error("ChannelIO APIs are only executable on browser."),!0),zi=function(){Ei()||!window.ChannelIO&&(console.error("ChannelIO is not loaded. Please call loadScript() before calling ChannelIO APIs."),1)||window.ChannelIO(...arguments)};function Ci(e,t){zi("boot",e,t)}var Pi={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},_i=e.createContext&&e.createContext(Pi),Ii=function(){return Ii=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},Ii.apply(this,arguments)},Ti=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};function Fi(t){return t&&t.map(function(t,n){return e.createElement(t.tag,Ii({key:n},t.attr),Fi(t.child))})}function Ai(t){return function(n){return e.createElement(Bi,Ii({attr:Ii({},t.attr)},n),Fi(t.child))}}function Bi(t){var n=function(n){var i,r=t.attr,a=t.size,o=t.title,l=Ti(t,["attr","size","title"]),s=a||n.size||"1em";return n.className&&(i=n.className),t.className&&(i=(i?i+" ":"")+t.className),e.createElement("svg",Ii({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:i,style:Ii(Ii({color:t.color||n.color},n.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&e.createElement("title",null,o),t.children)};return void 0!==_i?e.createElement(_i.Consumer,null,function(e){return n(e)}):n(Pi)}function Oi(e){return Ai({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(e)}function Ni(e){return Ai({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(e)}var Ri=n(579);const Di=Yt.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${e=>e.$hasWhiteBackground||e.$isScrolled?"#ffffff":"rgba(255, 255, 255, 0.1)"};
  box-sizing: border-box;
  backdrop-filter: ${e=>e.$hasWhiteBackground||e.$isScrolled?"none":"blur(8px)"};
  box-shadow: ${e=>e.$hasWhiteBackground||e.$isScrolled?"0 2px 8px rgba(0, 0, 0, 0.08)":"none"};
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    height: 48px;
  }
`,Li=Yt.div`
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
`,Mi=Yt(yi)`
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
`,$i=Yt.img`
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
`,Wi=Yt.div`
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
`,Ui=Yt.div`
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
`,Hi=Yt.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 25px;
  }
`,Vi=Yt.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`,Yi=Yt.div`
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
`,Ji=Yt(yi)`
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
`,Xi=Yt.a`
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
`,Gi=Yt.a`
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
`,Qi=Yt.a`
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
`,Ki=Yt.button`
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
`,Zi=Yt.div.withConfig({shouldForwardProp:e=>"open"!==e})`
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
`,qi=Yt.div.withConfig({shouldForwardProp:e=>"open"!==e})`
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
`,er=Yt.div`
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
`,tr=Yt(yi)`
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
`,nr=Yt.a`
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
`,ir=Yt.a`
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
`,rr=t=>{let{hasWhiteBackground:n=!1}=t;const i=Hn(),r=Wn(),a="/"===r.pathname,o="https://class.iammathking.com/login",l="https://hi.iammathking.com/v4zqjr",[s,d]=(0,e.useState)(!1),[c,p]=(0,e.useState)(!1);(0,e.useEffect)(()=>{const e=()=>{d(window.scrollY>600)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);const u=a?s?"#222222":"#ffffff":"#222222",x=e=>{p(!1),r.pathname===e?window.scrollTo({top:0,behavior:"smooth"}):(i(e),setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},100))};return(0,Ri.jsxs)(Di,{$hasWhiteBackground:n||"/pricing"===r.pathname,$isScrolled:s,style:"/pricing"===r.pathname?{background:"#ffffff",backdropFilter:"none",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)",opacity:1,visibility:"visible"}:n?{background:"#ffffff",backdropFilter:"none",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.08)"}:{},children:[(0,Ri.jsxs)(Li,{children:[(0,Ri.jsxs)(Mi,{to:"/",onClick:e=>{e.preventDefault(),"/"===r.pathname?window.scrollTo({top:0,behavior:"smooth"}):(i("/"),setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},100))},children:[(0,Ri.jsx)($i,{src:"/Common/logo.svg",alt:"\uc218\ud559\ub300\uc655 CLASS \ub85c\uace0"}),(0,Ri.jsx)(Wi,{children:"\uc218\ud559\ub300\uc655"}),(0,Ri.jsx)(Ui,{children:"CLASS"})]}),(0,Ri.jsxs)(Hi,{children:[(0,Ri.jsxs)(Yi,{children:[(0,Ri.jsx)(Ji,{to:"/",$color:u,onClick:()=>x("/"),children:"\ud648"}),(0,Ri.jsx)(Ji,{to:"/pricing",$color:u,onClick:()=>x("/pricing"),children:"\uc694\uae08\uc548\ub0b4"}),(0,Ri.jsx)(Ji,{to:"/notice",$color:u,onClick:()=>x("/notice"),children:"\uacf5\uc9c0\uc0ac\ud56d"}),(0,Ri.jsx)(Xi,{href:"https://mkt.shopping.naver.com/link/6836a548815d2663a463be9f",target:"_blank",rel:"noopener noreferrer",$color:u,children:"\ubb38\uc81c\uc9d1 \uad6c\ub9e4"})]}),(0,Ri.jsxs)(Vi,{children:[(0,Ri.jsx)(Qi,{href:l,target:"_blank",rel:"noopener noreferrer",children:"\uc571 \ub2e4\uc6b4\ub85c\ub4dc"}),(0,Ri.jsx)(Gi,{href:o,target:"_blank",rel:"noopener noreferrer",children:"\ub85c\uadf8\uc778"})]}),(0,Ri.jsx)(Ki,{onClick:()=>p(!0),children:(0,Ri.jsx)(Oi,{size:28,color:"#835EEB"})})]})]}),(0,Ri.jsx)(Zi,{open:c,onClick:()=>p(!1)}),(0,Ri.jsxs)(qi,{open:c,children:[(0,Ri.jsx)(Ki,{onClick:()=>p(!1),style:{alignSelf:"flex-end"},children:(0,Ri.jsx)(Ni,{size:32,color:"#835EEB"})}),(0,Ri.jsxs)(er,{children:[(0,Ri.jsx)(tr,{to:"/",onClick:()=>x("/"),children:"\ud648"}),(0,Ri.jsx)(tr,{to:"/pricing",onClick:()=>x("/pricing"),children:"\uc694\uae08\uc548\ub0b4"}),(0,Ri.jsx)(tr,{to:"/notice",onClick:()=>x("/notice"),children:"\uacf5\uc9c0\uc0ac\ud56d"}),(0,Ri.jsx)(nr,{href:"https://mkt.shopping.naver.com/link/6836a548815d2663a463be9f",target:"_blank",rel:"noopener noreferrer",children:"\ubb38\uc81c\uc9d1 \uad6c\ub9e4"})]}),(0,Ri.jsx)(ir,{href:l,target:"_blank",rel:"noopener noreferrer",children:"\uc571 \ub2e4\uc6b4\ub85c\ub4dc"}),(0,Ri.jsx)(ir,{href:o,target:"_blank",rel:"noopener noreferrer",children:"\ub85c\uadf8\uc778"})]})]})},ar=Yt.div`
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
`,or=Yt.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto; /* 가운데 정렬 */
  padding: 0 20px;
  display: flex; /* 행 레이아웃 */
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  
  @media (max-width: 1024px) {
    padding: 0 16px;
    gap: 30px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    background: #F9FAFB;
    flex-direction: column; /* 세로 스택 */
    gap: 24px;
    align-items: flex-start;
  }
  @media (max-width: 375px) {
    width: 100%;
    padding: 16px;
  }
`,lr=Yt.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 50px;
  min-width: 0;
  
  @media (max-width: 1024px) {
    gap: 30px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
    width: 100%;
  }
`,sr=Yt.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  display: inline-flex;
  min-width: 0;
  
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 8px;
    flex-wrap: wrap; /* 좁을 때 다음 줄로 자연스럽게 */
  }
`,dr=Yt.div`
  height: 32px;
  padding: 0 12px 0 10px;
  background: rgba(255, 255, 255, 0);
  overflow: hidden;
  border-radius: 9999px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  display: flex;
  color: #D1D5DB;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 29px;
  white-space: nowrap; /* 줄바꿈 방지로 세로깨짐 방지 */
  word-break: keep-all; /* 한국어 단어 중간 줄바꿈 방지 */
  min-width: max-content; /* 텍스트 길이만큼 버튼 너비 보장 */
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #835EEB;
  }
  
  @media (max-width: 1024px) {
    font-size: 13px;
    height: 30px;
    padding: 0 10px 0 8px;
  }
  
  @media (max-width: 768px) {
    color: #575C64;
    font-size: 15px;
    line-height: 35px;
  }
`,cr=Yt.div`
  width: 300px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
  margin-left: 30px;
  min-width: 300px; /* 텍스트가 세로깨짐 방지 */
  
  @media (max-width: 1024px) {
    width: 280px;
    gap: 12px;
    margin-left: 20px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    gap: 4px;
    margin-left: 0;
  }
`,pr=Yt.div`
  color: #D1D5DB;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 300;
  line-height: 27px;
  white-space: nowrap; /* 기본은 한줄 */
  word-break: keep-all;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 1024px) {
    font-size: 13px;
    line-height: 25px;
    white-space: normal; /* 태블릿 이하에서는 줄바꿈 허용 */
  }
  
  @media (max-width: 768px) {
    color: #7A828D;
    font-size: 12px;
    line-height: 23px;
    white-space: normal;
  }
`,ur=Yt(pr).attrs({as:"a"})`
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
    font-size: 13px;
    line-height: 25px;
    white-space: nowrap;
  }
  
  @media (max-width: 768px) {
    color: #7A828D;
    font-size: 14px;
    line-height: 25px;
    white-space: nowrap;
  }
`,xr=Yt.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 12px;
  }
`,fr=Yt.a`
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
`,hr=Yt.div`
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
`,mr=Yt.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  margin-top: 0;
  margin-left: auto; /* 우측 정렬 */
  
  @media (max-width: 1024px) {
    gap: 10px;
  }
  
  @media (max-width: 768px) {
    gap: 8px;
    margin-left: 0;
  }
`,gr=Yt.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2px;
  display: flex;
  
  @media (max-width: 768px) {
    gap: 2px;
  }
`,wr=Yt.div`
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
`,br=()=>(0,Ri.jsx)(ar,{children:(0,Ri.jsxs)(or,{children:[(0,Ri.jsxs)(lr,{children:[(0,Ri.jsxs)(sr,{children:[(0,Ri.jsx)("div",{style:{gap:"16px",display:"flex",flexDirection:"column"},children:(0,Ri.jsxs)(dr,{as:"a",href:"https://accounts.kakao.com/login/?continue=https%3A%2F%2Fpf.kakao.com%2F_xexdrDxj%2Fchat#login",target:"_blank",rel:"noopener noreferrer",children:[(0,Ri.jsx)("img",{src:"/Common/footer-headphone.svg",alt:"\uace0\uac1d\uc13c\ud130",style:{width:"18px",height:"18px"}}),"\uace0\uac1d\uc13c\ud130"]})}),(0,Ri.jsx)("div",{style:{gap:"16px",display:"flex",flexDirection:"column"},children:(0,Ri.jsxs)(dr,{as:"a",href:"https://www.teamturing.com/",target:"_blank",rel:"noopener noreferrer",children:[(0,Ri.jsx)("img",{src:"/Common/footer-problem.svg",alt:"\ud68c\uc0ac\uc18c\uac1c",style:{width:"18px",height:"18px"}}),"\ud68c\uc0ac\uc18c\uac1c"]})})]}),(0,Ri.jsxs)(cr,{children:[(0,Ri.jsxs)(gr,{children:[(0,Ri.jsx)(pr,{style:{whiteSpace:"nowrap"},children:"(\uc8fc) \ud29c\ub9c1"}),(0,Ri.jsx)(pr,{style:{whiteSpace:"nowrap"},children:"\uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 254-87-01382 | \ub300\ud45c\uc790\uba85 \ucd5c\ubbfc\uaddc"}),(0,Ri.jsx)(pr,{children:"\ud1b5\uc2e0\ud310\ub9e4\uc5c5 \uc81c 2023-\uc11c\uc6b8\uac15\ub0a8-00798 \ud638"}),(0,Ri.jsx)(pr,{children:"\uc8fc\uc18c \uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uac15\ub0a8\uad6c \uc5b8\uc8fc\ub85c 85\uae38 23-6, 3\uce35 (\uc5ed\uc0bc\ub3d9, DW \ube4c\ub529)"}),(0,Ri.jsx)(pr,{children:"\uc804\ud654 070-7732-4869"}),(0,Ri.jsx)(pr,{children:"\uc0ac\uc5c5\uc81c\ud734/PR \ubb38\uc758 business@teamturing.com"}),(0,Ri.jsx)(pr,{children:"\u24d2Turing Co.,Ltd. All rights reserved."})]}),(0,Ri.jsxs)(wr,{children:[(0,Ri.jsx)(ur,{href:"https://docs.google.com/document/u/1/d/e/2PACX-1vSk3Pu7ySBM0-cMTDOmH3rF_7vyzPzzec_kFZRanJ3mvmuf6jLyUuHndrFNQoXQCr3SujRGGYennDy4/pub",target:"_blank",rel:"noopener noreferrer",children:"\uc774\uc6a9\uc57d\uad00"}),(0,Ri.jsx)(ur,{href:"https://docs.google.com/document/u/1/d/e/2PACX-1vTVLKPyzChzxEaZChVDWZjtDz7Sgm_xD2-rDqMMCSdwzyx19Az0Q8nqacPQY0tkbHVszy9eA_eHyMR0/pub",target:"_blank",rel:"noopener noreferrer",children:"\uac1c\uc778\uc815\ubcf4\ucde8\uae09\ubc29\uce68"}),(0,Ri.jsx)(ur,{href:"https://docs.google.com/document/d/e/2PACX-1vQ1kh6vbZ6vqsmDlrASJTQWYmJKwA2ixeTaVZxacTBuh4MUG5aAiRg4fBBx7G74Ac4R5MIIvKqu2BO1/pub",target:"_blank",rel:"noopener noreferrer",children:"\ub9c8\ucf00\ud305 \uc815\ubcf4 \uc218\uc2e0\ub3d9\uc758"})]})]})]}),(0,Ri.jsx)(mr,{children:(0,Ri.jsxs)(xr,{children:[(0,Ri.jsx)(fr,{href:"https://www.instagram.com/shdw.class/",target:"_blank",rel:"noopener noreferrer",children:(0,Ri.jsx)(hr,{children:(0,Ri.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Ri.jsx)("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",fill:"currentColor"})})})}),(0,Ri.jsx)(fr,{href:"https://www.youtube.com/@mathking_official",target:"_blank",rel:"noopener noreferrer",children:(0,Ri.jsx)(hr,{children:(0,Ri.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Ri.jsx)("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",fill:"currentColor"})})})}),(0,Ri.jsx)(fr,{href:"https://blog.naver.com/PostList.naver?blogId=iammathking&parentCategoryNo=25&skinType=&skinId=&from=menu&userSelectMenu=true",target:"_blank",rel:"noopener noreferrer",children:(0,Ri.jsx)(hr,{children:(0,Ri.jsx)("img",{src:"/Assets/icon/blog.svg",alt:"\ub124\uc774\ubc84\ube14\ub85c\uadf8",style:{width:"24px",height:"24px"}})})})]})})]})}),yr=Xt`
  from {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
  to {
    opacity: 1;
    backdrop-filter: blur(8px);
  }
`,vr=Xt`
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,kr=Yt.div`
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
  animation: ${yr} 0.3s ease-out;
  backdrop-filter: blur(8px);
`,jr=Yt.div`
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  width: 100%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(131, 94, 235, 0.25);
  animation: ${vr} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  text-align: center;
  margin: 20px;

  @media (max-width: 600px) {
    max-width: 90vw;
    padding: 30px 20px;
    border-radius: 16px;
  }
`,Sr=Yt.div`
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
`,Er=Yt.h2`
  font-size: 24px;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 12px;
  font-family: 'Pretendard', sans-serif;
  
  @media (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`,zr=Yt.p`
  font-size: 16px;
  color: #6B7280;
  line-height: 1.6;
  margin-bottom: 32px;
  font-family: 'Pretendard', sans-serif;
  
  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 24px;
  }
`,Cr=Yt.div`
  background: #F9FAFB;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  
  @media (max-width: 600px) {
    padding: 16px;
    margin-bottom: 20px;
  }
`,Pr=Yt.h4`
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
  font-family: 'Pretendard', sans-serif;
  
  @media (max-width: 600px) {
    font-size: 13px;
    margin-bottom: 6px;
  }
`,_r=Yt.div`
  font-size: 13px;
  color: #6B7280;
  line-height: 1.5;
  margin: 0;
  font-family: 'Pretendard', sans-serif;
  
  @media (max-width: 600px) {
    font-size: 12px;
  }
`,Ir=Yt.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 6px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Tr=Yt.span`
  font-weight: 500;
  color: #374151;
  min-width: 60px;
  text-align: left;
`,Fr=Yt.span`
  color: #6B7280;
  text-align: left;
  flex: 1;
  margin-left: 12px;
`,Ar=Yt.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,Br=Yt.a`
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
`,Or=Yt.button`
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
`,Nr=e=>{let{isOpen:t,onClose:n,formData:i}=e;return t?(0,Ri.jsx)(kr,{onClick:n,children:(0,Ri.jsxs)(jr,{onClick:e=>e.stopPropagation(),children:[(0,Ri.jsx)(Sr,{children:(0,Ri.jsx)("img",{src:"/Assets/icon/check.svg",alt:"\uc131\uacf5"})}),(0,Ri.jsx)(Er,{children:"\uc2e0\uccad\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4!"}),(0,Ri.jsxs)(zr,{children:["\ubb34\ub8cc\uccb4\ud5d8 \uc2e0\uccad\uc774 \uc131\uacf5\uc801\uc73c\ub85c \uc811\uc218\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",(0,Ri.jsx)("br",{}),"\ub2f4\ub2f9\uc790\uac00 \ube60\ub978 \uc2dc\uc77c \ub0b4\uc5d0 \uc5f0\ub77d\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."]}),(0,Ri.jsxs)(Cr,{children:[(0,Ri.jsx)(Pr,{children:"\uc2e0\uccad\ub0b4\uc5ed"}),(0,Ri.jsxs)(_r,{children:[i&&(0,Ri.jsxs)(Ri.Fragment,{children:[(0,Ri.jsxs)(Ir,{children:[(0,Ri.jsx)(Tr,{children:"\ud559\uad50/\ud559\uc6d0:"}),(0,Ri.jsx)(Fr,{children:"academy"===i.organization_type?"\ud559\uc6d0":"\ud559\uad50"})]}),(0,Ri.jsxs)(Ir,{children:[(0,Ri.jsx)(Tr,{children:"\uc774\ub984:"}),(0,Ri.jsx)(Fr,{children:i.name})]}),(0,Ri.jsxs)(Ir,{children:[(0,Ri.jsx)(Tr,{children:"\uc5f0\ub77d\ucc98:"}),(0,Ri.jsx)(Fr,{children:i.phone})]}),(0,Ri.jsxs)(Ir,{children:[(0,Ri.jsx)(Tr,{children:"\uc774\uba54\uc77c:"}),(0,Ri.jsx)(Fr,{children:i.email})]}),(0,Ri.jsxs)(Ir,{children:[(0,Ri.jsxs)(Tr,{children:["academy"===i.organization_type?"\ud559\uc6d0\uba85":"\ud559\uad50\uba85",":"]}),(0,Ri.jsx)(Fr,{children:i.academy})]})]}),!i&&(0,Ri.jsx)(Ir,{children:(0,Ri.jsx)(Fr,{children:"\uc2e0\uccad \uc815\ubcf4\ub97c \ubd88\ub7ec\uc624\ub294 \uc911\uc785\ub2c8\ub2e4..."})})]})]}),(0,Ri.jsxs)(Ar,{children:[(0,Ri.jsx)(Br,{href:"https://class.iammathking.com/",target:"_blank",rel:"noopener noreferrer",onClick:()=>{n()},children:"\uc218\ud559\ub300\uc655 \ud074\ub798\uc2a4 \ubc14\ub85c\uac00\uae30"}),(0,Ri.jsx)(Or,{onClick:n,children:"\ub2eb\uae30"})]})]})}):null},Rr=Yt.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 0;
`,Dr=Yt.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Lr=Yt.label`
  color: #374151;
  font-size: 0.875rem;
  font-weight: 700;
  font-family: 'Pretendard', sans-serif;
`,Mr=Yt.input`
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
`,$r=Yt.button`
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
`,Wr=Yt.p`
  color: #6B7280;
  font-size: 0.75rem;
  font-family: 'Pretendard', sans-serif;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 0;
`,Ur=Yt.div`
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
`,Hr=Yt.span`
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
`,Vr=Yt.div`
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
`,Yr=Yt(Mr)`
  border: 2px solid ${e=>e.hasError?"#FF6B6B":"#E5E7EB"};
  transition: all 0.3s ease;

  &:focus {
    border-color: ${e=>e.hasError?"#FF6B6B":"#835EEB"};
    box-shadow: 0 0 0 3px ${e=>e.hasError?"rgba(255, 107, 107, 0.1)":"rgba(131, 94, 235, 0.1)"};
  }
`,Jr=Yt.div`
  display: flex;
  gap: 20px;
  margin-bottom: 0.5rem;
`,Xr=Yt.label`
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
`,Gr=Yt.input`
  width: 16px;
  height: 16px;
  accent-color: #835EEB;
  cursor: pointer;
`,Qr=t=>{let{onClose:n}=t;const[i,r]=(0,e.useState)({name:"",phone:"",email:"",academy:"",organization_type:"academy"}),[a,o]=(0,e.useState)({}),[l,s]=(0,e.useState)(!1),[d,c]=(0,e.useState)(!1),[p,u]=(0,e.useState)(!1),x=e=>t=>{let n=t.target.value;"phone"===e&&(n=n.replace(/-/g,"")),r(t=>({...t,[e]:n})),a[e]&&o(t=>({...t,[e]:""})),l&&s(!1)},f=Object.values(a).some(e=>e);return(0,Ri.jsxs)(Ri.Fragment,{children:[(0,Ri.jsx)(Nr,{isOpen:d,onClose:()=>{c(!1),n()},formData:i}),(0,Ri.jsxs)(Rr,{onSubmit:async e=>{e.preventDefault(),s(!1),c(!1);const t=(e=>{const t=[];if(e.name.trim()||t.push("\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),e.phone.trim()){const n=e.phone.replace(/-/g,"");/^010\d{8}$/.test(n)||t.push("\uc62c\ubc14\ub978 \uc5f0\ub77d\ucc98 \ud615\uc2dd\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694. (01000000000)")}else t.push("\uc5f0\ub77d\ucc98\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.");return e.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||t.push("\uc62c\ubc14\ub978 \uc774\uba54\uc77c \ud615\uc2dd\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."):t.push("\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),e.academy.trim()||t.push("\ud559\uc6d0\uba85\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),{isValid:0===t.length,errors:t}})(i);if(!t.isValid){const e={};return t.errors.forEach(t=>{t.includes("\uc774\ub984")?e.name=t:t.includes("\uc5f0\ub77d\ucc98")?e.phone=t:t.includes("\uc774\uba54\uc77c")?e.email=t:t.includes("\ud559\uc6d0\uba85")&&(e.academy=t)}),o(e),void s(!0)}u(!0);try{const e=await(async e=>{try{0;const n={name:e.name,school:e.academy,email:e.email,phone_number:e.phone.replace(/-/g,""),organization_type:e.organization_type,region:"",extra:""},i={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_URL:"https://yytseyhcpmufconmwowx.supabase.co",REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHNleWhjcG11ZmNvbm13b3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzY0ODksImV4cCI6MjA2NTgxMjQ4OX0.gTIBe5tdaWizlsFOUt7gyGLR4ndo5C4ZoNUuHGbN9OM"}.REACT_APP_CONSULTATION_API_URL||"https://api-prod.iammathking.com/api/v3/organization/business_request",r=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(n),mode:"cors",credentials:"omit"});if(!r.ok)return console.error("\u274c API \uc751\ub2f5 \uc624\ub958:",r.status,r.statusText),{success:!1,message:"\uc11c\ubc84 \uc751\ub2f5 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.",data:{status:r.status,statusText:r.statusText}};let a=null;const o=r.headers.get("content-type");if(o&&o.includes("application/json"))try{a=await r.json()}catch(t){console.log("\uc751\ub2f5 \ubcf8\ubb38\uc774 JSON\uc774 \uc544\ub2c8\uac70\ub098 \ube44\uc5b4\uc788\uc74c")}return console.log("\u2705 \ubb34\ub8cc\uccb4\ud5d8 \uc2e0\uccad \uc131\uacf5:",{status:r.status,data:a}),a&&console.log("\ud83d\udccb API \uc751\ub2f5 \uc0c1\uc138:",JSON.stringify(a,null,2)),{success:!0,message:"\ubb34\ub8cc\uccb4\ud5d8 \uc2e0\uccad\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4! \uace7 \ub2f4\ub2f9\uc790\uac00 \uc5f0\ub77d\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4.",data:a}}catch(t){return console.error("\u274c \ubb34\ub8cc\uccb4\ud5d8 \uc2e0\uccad API \uc624\ub958:",t),{success:!1,message:"\uc11c\ubc84 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.",data:t}}})(i);e.success?(c(!0),setTimeout(()=>{n()},3e3)):(s(!0),o({general:e.message}))}catch(r){console.error("\ud3fc \uc81c\ucd9c \uc624\ub958:",r),s(!0),o({general:"\uc11c\ubc84 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694."})}finally{u(!1)}},noValidate:!0,children:[l&&(f||a.general)&&(0,Ri.jsx)(Ur,{children:a.general||"\ubaa8\ub4e0 \ud544\uc218 \ud56d\ubaa9\uc744 \uc62c\ubc14\ub974\uac8c \uc785\ub825\ud574\uc8fc\uc138\uc694."}),(0,Ri.jsxs)(Dr,{children:[(0,Ri.jsxs)(Jr,{children:[(0,Ri.jsxs)(Xr,{children:[(0,Ri.jsx)(Gr,{type:"radio",name:"organization_type",value:"academy",checked:"academy"===i.organization_type,onChange:e=>r(t=>({...t,organization_type:e.target.value}))}),"\ud559\uc6d0"]}),(0,Ri.jsxs)(Xr,{children:[(0,Ri.jsx)(Gr,{type:"radio",name:"organization_type",value:"school",checked:"school"===i.organization_type,onChange:e=>r(t=>({...t,organization_type:e.target.value}))}),"\ud559\uad50"]})]}),a.organization_type&&(0,Ri.jsx)(Hr,{children:a.organization_type})]}),(0,Ri.jsxs)(Dr,{children:[(0,Ri.jsx)(Lr,{children:"\uc774\ub984"}),(0,Ri.jsx)(Yr,{type:"text",placeholder:"\ud64d\uae38\ub3d9",value:i.name,onChange:x("name"),hasError:!!a.name}),a.name&&(0,Ri.jsx)(Hr,{children:a.name})]}),(0,Ri.jsxs)(Dr,{children:[(0,Ri.jsx)(Lr,{children:"\uc5f0\ub77d\ucc98"}),(0,Ri.jsx)(Yr,{type:"tel",placeholder:"01000000000",value:i.phone,onChange:x("phone"),hasError:!!a.phone}),a.phone&&(0,Ri.jsx)(Hr,{children:a.phone})]}),(0,Ri.jsxs)(Dr,{children:[(0,Ri.jsx)(Lr,{children:"\uc774\uba54\uc77c"}),(0,Ri.jsx)(Yr,{type:"email",placeholder:"example@example.com",value:i.email,onChange:x("email"),hasError:!!a.email}),a.email&&(0,Ri.jsx)(Hr,{children:a.email})]}),(0,Ri.jsxs)(Dr,{children:[(0,Ri.jsx)(Lr,{children:"school"===i.organization_type?"\ud559\uad50\uba85":"\ud559\uc6d0\uba85"}),(0,Ri.jsx)(Yr,{type:"text",placeholder:"school"===i.organization_type?"\u3147\u3147\ud559\uad50":"\u3147\u3147\ud559\uc6d0",value:i.academy,onChange:x("academy"),hasError:!!a.academy}),a.academy&&(0,Ri.jsx)(Hr,{children:a.academy})]}),(0,Ri.jsx)($r,{type:"submit",disabled:p,children:p?(0,Ri.jsxs)(Ri.Fragment,{children:[(0,Ri.jsx)(Vr,{}),"\uc2e0\uccad \uc911..."]}):"\ubb34\ub8cc \uccb4\ud5d8 \uc2e0\uccad\ud558\uae30"}),(0,Ri.jsx)(Wr,{children:"\uc81c\ucd9c\ud558\uc2dc\uba74 \uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ubc0f \uc774\uc6a9\uc5d0 \ub3d9\uc758\ud558\uac8c \ub429\ub2c8\ub2e4."})]})]})},Kr=Yt.div`
  position: fixed;
  bottom: 6.25rem;
  right: 2.5rem;
  z-index: 1000;
  opacity: ${e=>e.$isVisible?1:0};
  transform: ${e=>e.$isVisible?"scale(1)":"scale(0.8)"};
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: ${e=>e.$isVisible?"auto":"none"};

  @media (max-width: 768px) {
    bottom: 7.5rem;
    right: 3.125rem;
  }
`,Zr=Yt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 3.75rem;
  height: 3.75rem;
  background: ${e=>e.$isClose?"#ffffff":"transparent"};
  border-radius: ${e=>e.$isClose?"45%":"50%"};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  position: relative;
  top: -1.5625rem;
  left: -1.875rem;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 14px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
    top: -1.5rem;
    left: -2rem;
  }
`,qr=Yt.button`
  background: none;
  border: none;
  color: #33373B;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: 'Pretendard', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  position: relative;
  width: 7.5rem;
  height: 3rem;
  justify-content: space-between;

  &:hover {
    color: #835EEB;
  }

  &:active {
    transform: translateY(0);
    transition: all 0.1s ease;
  }
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:focus-visible {
    outline: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    width: 8rem;
    height: 3.5rem;
    font-size: 0.9625rem;
    gap: 0.125rem;
    
    &:hover {
      // 호버 효과 제거
    }
  }
`,ea=Yt.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1001;
  opacity: ${e=>e.$isOpen?1:0};
  visibility: ${e=>e.$isOpen?"visible":"hidden"};
  transition: all 0.3s ease;
  backdrop-filter: ${e=>e.$isOpen?"blur(4px)":"blur(0px)"};
`,ta=Yt.div`
  position: fixed;
  bottom: 11.875rem;
  right: 3.125rem;
  width: 24.6875rem;
  max-height: 43.75rem;
  background: white;
  z-index: 1002;
  opacity: ${e=>e.$isOpen?1:0};
  transform: ${e=>e.$isOpen?"scale(1) translateY(0)":"scale(0.8) translateY(1.25rem)"};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;

  /* 말풍선 꼬리 */
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    right: 1.25rem;
    width: 0;
    height: 0;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-top: 0.5rem solid white;
  }

  @media (max-width: 768px) {
    width: 22.5rem;
    right: 1.25rem;
    bottom: 9.375rem;
    max-height: 80vh;
  }
`,na=t=>{let{isModalOpen:n=!1,onDrawerStateChange:i}=t;const[r,a]=(0,e.useState)(n),o=(0,e.useCallback)(()=>{a(!1),null===i||void 0===i||i(!1),document.body.style.overflow="auto"},[i]);(0,e.useEffect)(()=>{a(n)},[n]);return e.useEffect(()=>{const e=e=>{"Escape"===e.key&&r&&o()};return r&&(document.addEventListener("keydown",e),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",e),document.body.style.overflow="auto"}},[r,o]),e.useEffect(()=>{window.isDrawerOpen=r,window.closeDrawer=o;const e=setInterval(()=>{try{const e=document.querySelectorAll('[class*="channel"], [class*="chat"], [class*="messenger"]');Array.from(e).some(e=>{const t=e.getBoundingClientRect();return t.width>0&&t.height>0&&"none"!==window.getComputedStyle(e).display&&"hidden"!==window.getComputedStyle(e).visibility})&&r&&(console.log("Channel.io \ubaa8\ub2ec \uac10\uc9c0, 1\ubc88 \ubaa8\ub2ec \uc790\ub3d9 \ub2eb\uae30"),o())}catch(e){}},1e3);return()=>{clearInterval(e),window.isDrawerOpen=!1,window.closeDrawer=void 0}},[r,o]),(0,Ri.jsxs)(Ri.Fragment,{children:[(0,Ri.jsx)(Kr,{$isVisible:!0,style:{zIndex:r?1003:1e3},children:(0,Ri.jsxs)(qr,{onClick:r?o:()=>{a(!0),null===i||void 0===i||i(!0);try{window.ChannelService&&window.ChannelService.hide&&window.ChannelService.hide()}catch(e){console.log("Channel.io \ubaa8\ub2ec \uc228\uae30\uae30 \uc2e4\ud328")}setTimeout(()=>{const e=document.querySelector("[data-close-button]");e&&e.focus()},100)},"aria-label":r?"\ubb34\ub8cc\uccb4\ud5d8 \uc2e0\uccad \ub2eb\uae30":"\ubb34\ub8cc\uccb4\ud5d8 \uc2e0\uccad \uc5f4\uae30",children:[(0,Ri.jsx)("span",{style:{whiteSpace:"nowrap",position:"relative",top:"-25px",left:"-30px"},children:"\ubb34\ub8cc\uccb4\ud5d8\uc2e0\uccad"}),(0,Ri.jsx)(Zr,{$isClose:r,children:r?(0,Ri.jsx)("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Ri.jsx)("path",{d:"M18 6L6 18M6 6L18 18",stroke:"#835EEB",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})}):(0,Ri.jsx)("img",{src:"/Assets/icon/\ubb34\ub8cc\uccb4\ud5d8.svg",alt:"\ubb34\ub8cc\uccb4\ud5d8",style:{width:"60px",height:"60px"}})})]})}),r&&(0,Ri.jsxs)(Ri.Fragment,{children:[(0,Ri.jsx)(ea,{$isOpen:r,onClick:e=>{e.target===e.currentTarget&&o()}}),(0,Ri.jsx)(ta,{$isOpen:r,children:(0,Ri.jsxs)("div",{style:{padding:"16px 20px"},children:[(0,Ri.jsx)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",marginBottom:"12px"},children:(0,Ri.jsx)("h2",{style:{margin:0,color:"#33373B",fontSize:"18px",fontWeight:700,fontFamily:"Pretendard, sans-serif"},children:"\ubb34\ub8cc \uccb4\ud5d8 \uc2e0\uccad"})}),(0,Ri.jsxs)("p",{style:{color:"#6B7280",fontSize:"13px",lineHeight:"1.4",marginBottom:"12px",fontFamily:"Pretendard, sans-serif"},children:["\uad81\uae08\ud55c \uc810\uc774 \uc788\uc73c\uc2e0\uac00\uc694?",(0,Ri.jsx)("br",{}),"\uc544\ub798 \ud3fc\uc744 \uc791\uc131\ud574\uc8fc\uc2dc\uba74 \ube60\ub974\uac8c \uc5f0\ub77d\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."]}),(0,Ri.jsx)(Qr,{onClose:o})]})})]})]})},ia=Yt.div`
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
`,ra=Yt.div`
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
`,aa=Yt.div`
  margin-bottom: 1.5rem;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
`,oa=Yt.div`
  flex: 1;
`,la=Yt.h3`
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
`,sa=Yt.p`
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
`,da=Yt.button`
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
`,ca=e=>{let{isOpen:t,onClose:n,title:i,description:r,children:a}=e;return t?(0,Ri.jsx)(ia,{onClick:n,children:(0,Ri.jsxs)(ra,{onClick:e=>e.stopPropagation(),children:[(0,Ri.jsxs)(aa,{children:[(0,Ri.jsxs)(oa,{children:[(0,Ri.jsx)(la,{children:i}),(0,Ri.jsx)(sa,{children:r})]}),(0,Ri.jsx)(da,{onClick:n,children:"\xd7"})]}),a]})}):null},pa=Xt`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ua=Xt`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,xa=Xt`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,fa=Xt`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.95);
  }
`,ha=Xt`
  0% {
    background-size: 0% 50%;
  }
  100% {
    background-size: 100% 50%;
  }
`,ma=(Xt`
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 1;
  }
`,Xt`
  0%, 100% {
    filter: drop-shadow(0 0 5px rgba(131, 94, 235, 0.3));
  }
  50% {
    filter: drop-shadow(0 0 15px rgba(131, 94, 235, 0.6));
  }
`),ga=Xt`
  0%, 100% {
    transform: translate(-50%, -50%) rotate(var(--rotation)) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) rotate(var(--rotation)) scale(1.05);
  }
`,wa=(Xt`
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,Xt`
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-30px) scale(0.95);
  }
`,Xt`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,Xt`
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,Xt`
  0% {
    opacity: 0;
    transform: translateY(25px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,Xt`
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
`),ba=Yt.div`
  width: 100%;
  max-width: 1280px;
  display: none; /* 기본적으로 숨김 */
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  // 모바일 핵심기능 박스들을 위한 ref 배열 (스크롤 인터랙션)
  const mobileFeatureBoxRefs = useRef<(HTMLDivElement | null)[]>([]);
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
`,Sa=(Yt.span`
  color: #835eeb;
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
`),Ea=Yt.div`
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
  color: #835eeb;
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
  border: 2px #835eeb solid;
  transition: all 0.3s ease;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      120deg,
      transparent 0%,
      rgba(131, 94, 235, 0.03) 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }
  
  @media (max-width: 600px) {
    width: 85%; /* 가로폭 15% 축소 */
    border-radius: 16px;
    margin: 0 auto; /* 중앙 정렬 */
  }
`),Pa=Yt.div`
  text-align: center;
  color: black;
  font-size: 32px;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 38.4px;
  word-wrap: break-word;
  transition: all 0.3s ease;
  @media (max-width: 600px) {
    font-size: 20px;
    line-height: 24px;
  }
`,_a=Yt.div`
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
      border-color: #9c7eef;
      box-shadow: 0 10px 20px rgba(131, 94, 235, 0.15);
    }

    ${Pa} {
      color: #835eeb;
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
  opacity: 0.6;
  color: #4b4b4b;
  font-size: 24px;
  font-family: Pretendard;
  font-weight: 300;
  line-height: 34.8px;
  word-wrap: break-word;
  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 20px;
  }
`,Fa=Yt(ka)`
  opacity: 0;
  &.visible {
    animation: ${pa} 0.8s ease forwards;
  }
`,Aa=(Yt(za)`
  opacity: 0;
  &.visible {
    animation: ${pa} 0.8s ease forwards;
  }
`,Yt(_a)`
  opacity: 0;
  &.visible-left {
    animation: ${ua} 0.8s ease forwards;
  }
  &.visible-right {
    animation: ${xa} 0.8s ease forwards;
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
`),Ba=(Yt.div`
  width: 250px;
  height: 400px;
  padding: 20px 10px;
  overflow: hidden;
  border-radius: 15px;
  outline: 2px #835eeb solid;
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
  background: #835eeb;
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
  color: #835eeb;
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
  color: #33373b;
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

  background: #835eeb;
  border-radius: 100px;
  animation: ${fa} 2s ease-in-out infinite;
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
      content: "";
      position: absolute;
      left: 0;
      width: 8px;
      height: 2px;
      background: white;
      transform: rotate(-35deg);
      transform-origin: left bottom;
    }
    
    &::after {
      content: "";
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
      content: "";
      position: absolute;
      right: 0;
      width: 8px;
      height: 2px;
      background: white;
      transform: rotate(35deg);
      transform-origin: right bottom;
    }
    
    &::after {
      content: "";
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
  background: #835eeb;
  border-radius: 4px;
  margin-right: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: "";
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
  color: #33373b;
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
  color: #835eeb;
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
  color: #33373b;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 18.2px;
  word-wrap: break-word;
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 16px;
  }
`,Yt.div`
  align-self: stretch;
  background: #9c7eef;
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
`,Na=Yt.div`
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
`,Ra=Yt.div`
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
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(131, 94, 235, 0.1);
    transform: translate(-50%, -50%);
    transition:
      width 0.6s,
      height 0.6s;
  }
  
  span {
    color: #835eeb;
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
    box-shadow:
      0px 8px 25px rgba(131, 94, 235, 0.3),
      0px 0px 20px rgba(131, 94, 235, 0.1);
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
`,Ma=Xt`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`,$a=(Xt`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`,Xt`
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
`),Wa=Yt.div`
  display: flex;
  gap: 40px;
  animation: ${Ma} 25s linear infinite;
  box-sizing: border-box;
  @media (max-width: 600px) {
    gap: 8px;
    animation: ${$a} 20s ease-in-out infinite;
    animation-fill-mode: both;
    perspective: 1000px;
  }
`,Ua=Yt.div`
  flex-shrink: 0;
  box-sizing: border-box;
  @media (max-width: 600px) {
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }
`,Ha=(Yt.div`
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
    color: #33373b;
    font-size: 29.58px;
    font-family: "Pretendard", sans-serif;
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
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(131, 94, 235, 0.08),
      rgba(107, 75, 196, 0.08)
    );
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
  background: rgba(255, 255, 255, 0.1);
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
  color: #33373b;
  font-size: 48px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 62.4px;
  text-align: center;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 24px;
    line-height: 30px;
  }
`,Yt.button`
  margin-top: 20px;
  padding: 16px 32px;
  background: #835eeb;
  color: white;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #6b4cd3;
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
  transition:
    background 0.2s,
    color 0.2s;
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
  background: #835eeb;
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
  color: #6b5b8c;
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
  border: 2px solid #bfa8f6;
  box-sizing: border-box;
`,Yt.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 32px;
  color: #835eeb;
  cursor: pointer;
  z-index: 2;
  &:hover {
    color: #6b4bc4;
  }
  box-sizing: border-box;
`),Va=(Yt(Ha)`
  left: -48px;
  @media (max-width: 600px) {
    left: -24px;
  }
`,Yt(Ha)`
  right: -48px;
  @media (max-width: 600px) {
    right: -24px;
  }
`,t=>{let{title:n,description:i,index:r,imageSrc:a,category:o}=t;const l=(0,e.useRef)(null);return(0,e.useEffect)(()=>{const e=new IntersectionObserver(e=>{let[t]=e;var n;t.isIntersecting&&(null===(n=l.current)||void 0===n||n.classList.add(r%2===0?"visible-left":"visible-right"))},{threshold:.2,rootMargin:"0px"}),t=l.current;return t&&e.observe(t),()=>{t&&e.unobserve(t)}},[r]),(0,Ri.jsxs)(Aa,{ref:l,children:[o&&(0,Ri.jsx)(bo,{children:(0,Ri.jsx)(yo,{children:o})}),(0,Ri.jsx)(Ca,{children:a&&(0,Ri.jsx)("img",{src:a,alt:n,style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"18px"}})}),(0,Ri.jsxs)(Ia,{children:[(0,Ri.jsx)(Pa,{children:n}),(0,Ri.jsx)(Ta,{children:i.map((t,n)=>(0,Ri.jsxs)(e.Fragment,{children:[t,n<i.length-1&&(0,Ri.jsx)("br",{})]},n))})]})]})}),Ya=e.forwardRef((t,n)=>{const i=(0,e.useRef)(null),r=(0,e.useRef)([]),[a,o]=(0,e.useState)(0),[l,s]=(0,e.useState)(0),[d,c]=(0,e.useState)(0),[p,u]=(0,e.useState)(0),[x,f]=(0,e.useState)(!0),[h,m]=(0,e.useState)(!0),[g,w]=(0,e.useState)("visible"),[b,y]=(0,e.useState)(new Set),[v,k]=(0,e.useState)(new Set),j=(0,e.useRef)([]),[S,E]=(0,e.useState)(0),[z,C]=(0,e.useState)(!1),[P,_]=(0,e.useState)(!1),[I,T]=(0,e.useState)([!1,!1,!1,!1]),[F,A]=(0,e.useState)([!1,!1,!1,!1]),[B,O]=(0,e.useState)([!1,!1,!1,!1]),[N,R]=(0,e.useState)(!1),[D,L]=(0,e.useState)(!1),[M,$]=(0,e.useState)(()=>{const e=localStorage.getItem("teacherInfoPosition");return e?JSON.parse(e):{top:"90px",left:"230px"}}),[W,U]=(0,e.useState)(()=>{const e=localStorage.getItem("studentInfoPosition");return e?JSON.parse(e):{bottom:"80px",right:"210px"}}),[H,V]=(0,e.useState)(()=>{const e=localStorage.getItem("lockPositions");return!!e&&JSON.parse(e)});(0,e.useEffect)(()=>{console.log("\uc120\uc0dd\ub2d8 \uc815\ubcf4 \uc704\uce58 \ubcc0\uacbd:",M)},[M]),(0,e.useEffect)(()=>{console.log("\ud559\uc0dd \uc815\ubcf4 \uc704\uce58 \ubcc0\uacbd:",W)},[W]);const Y=(0,e.useRef)(null),J=[{title:{highlight:"\uccb4\uacc4\uc801\uc778 \uad00\ub9ac\ub85c",normal:"\uc131\uacfc \uadf9\ub300\ud654"},quote:"\ud559\uc0dd\ub4e4\uc758 \ud559\uc2b5 \ud604\ud669\uc744 \ud55c\ub208\uc5d0 \ud30c\uc545\ud558\uace0<br/>\ud6a8\uacfc\uc801\uc73c\ub85c \uc9c0\ub3c4\ud560 \uc218 \uc788\uc5b4\uc694",name:"\uc911\uacc4\ub3d9 \ucd08\uc911\uace0 \uc218\ud559\ud559\uc6d0<br/>\ucd5c\uc218\uc5f0 \uc6d0\uc7a5 \uc120\uc0dd\ub2d8",videoUrl:"https://www.youtube.com/watch?v=_g9OwAA8V5g",thumbnailUrl:"https://img.youtube.com/vi/_g9OwAA8V5g/maxresdefault.jpg"},{title:{highlight:"\ud604\uc7a5\uc758 \ubaa9\uc18c\ub9ac\ub85c",normal:"\uc99d\uba85\ub41c \ud6a8\uacfc"},quote:"AI \ucd94\ucc9c \ubb38\uc81c\ub97c \ud1b5\ud574<br/>\ucde8\uc57d\ud55c \ub2e8\uc6d0\uc744 \uc644\ubcbd \ubcf4\uc644\ud560 \uc218 \uc788\uc5b4\uc694.",name:"\uc744\uc9c0\ub300 \uc758\uc608\uacfc<br/>24\ud559\ubc88 \uae40\uc601\uc6b0 \ud559\uc0dd",videoUrl:"https://www.youtube.com/watch?v=MBQZ4PCuNEQ",thumbnailUrl:"https://img.youtube.com/vi/MBQZ4PCuNEQ/maxresdefault.jpg"},{title:{highlight:"AI \uae30\uc220\ub85c",normal:"\uc644\uc131\ub41c \ud559\uc2b5"},quote:"\uac1c\uc778\ubcc4 \ub9de\ucda4 \ud559\uc2b5\uacfc \uc2e4\uc2dc\uac04 \ud53c\ub4dc\ubc31\uc73c\ub85c<br/>\ud559\uc2b5 \ud6a8\uacfc\uac00 \ub208\uc5d0 \ub744\uac8c \ud5a5\uc0c1\ub418\uc5c8\uc5b4\uc694",name:"\ud559\ubd80\ubaa8 \ud6c4\uae30<br/>\ucd08\ub4f1 5\ud559\ub144 \ud559\ubd80\ubaa8",videoUrl:"https://www.youtube.com/watch?v=SaM59JVLZms",thumbnailUrl:"https://img.youtube.com/vi/SaM59JVLZms/maxresdefault.jpg"}];(0,e.useEffect)(()=>{const e=localStorage.getItem("demoClickCount");e&&c(parseInt(e,10))},[]),(0,e.useEffect)(()=>{const e=()=>{C(window.innerWidth<=1366),_(window.innerWidth<=600),H&&(console.log("\ud654\uba74 \ud06c\uae30 \ubcc0\uacbd\ub428, \uc704\uce58 \uace0\uc815 \ubaa8\ub4dc\ub85c \uc704\uce58 \uc720\uc9c0:",{width:window.innerWidth,teacherPosition:M,studentPosition:W}),document.documentElement.style.setProperty("--teacher-top",M.top),document.documentElement.style.setProperty("--teacher-right",M.left),document.documentElement.style.setProperty("--student-top",W.bottom),document.documentElement.style.setProperty("--student-left",W.right))};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[H,M,W]);const[X,G]=(0,e.useState)(!1);(0,e.useEffect)(()=>{if(!z)return;const e=setInterval(()=>{E(e=>{const t=e+1;return 7===t?(G(!0),setTimeout(()=>{E(0),setTimeout(()=>{G(!1)},50)},1200),7):t})},2e3);return()=>clearInterval(e)},[z]),(0,e.useEffect)(()=>{w("fade-out");const e=setTimeout(()=>{w("fade-in")},400),t=setTimeout(()=>{w("visible")},900);return()=>{clearTimeout(e),clearTimeout(t)}},[p]),(0,e.useEffect)(()=>{const e=setInterval(()=>{u(e=>{const t=e+1;return t>=J.length?0:t})},4e3);return()=>clearInterval(e)},[J.length]),(0,e.useEffect)(()=>{O([!1,!1,!1,!1]),R(!1),L(!1),T([!1,!1,!1,!1]),A([!1,!1,!1,!1]);const e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(setTimeout(()=>O([!0,!1,!1,!1]),0),setTimeout(()=>O([!0,!0,!1,!1]),150),setTimeout(()=>O([!0,!0,!0,!1]),300),setTimeout(()=>O([!0,!0,!0,!0]),450),setTimeout(()=>R(!0),300),setTimeout(()=>L(!0),400),setTimeout(()=>T([!0,!1,!1,!1]),700),setTimeout(()=>T([!0,!0,!1,!1]),850),setTimeout(()=>T([!0,!0,!0,!1]),1e3),setTimeout(()=>T([!0,!0,!0,!0]),1150),setTimeout(()=>A([!0,!1,!1,!1]),700),setTimeout(()=>A([!0,!0,!1,!1]),850),setTimeout(()=>A([!0,!0,!0,!1]),1e3),setTimeout(()=>A([!0,!0,!0,!0]),1150),e.unobserve(t.target))})},{threshold:.2}),t=Y.current;return t&&e.observe(t),()=>{t&&e.unobserve(t)}},[]);(0,e.useEffect)(()=>{const e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&t.target.classList.add("visible")},{threshold:.2,rootMargin:"0px"}),t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.boundingClientRect.top>0&&e.target.classList.add("visible")})},{threshold:.1,rootMargin:"-10% 0px -10% 0px"}),n=i.current,a=r.current,o=j.current;return n&&e.observe(n),a.forEach(t=>{t&&e.observe(t)}),o.forEach(e=>{e&&t.observe(e)}),()=>{n&&e.unobserve(n),a.forEach(t=>{t&&e.unobserve(t)}),o.forEach(e=>{e&&t.unobserve(e)})}},[]),(0,e.useEffect)(()=>{const e=()=>{const e=new Set,t=new Set;j.current.forEach((n,i)=>{if(n){const r=n.getBoundingClientRect(),a=window.innerHeight,o=r.top+r.height/2,l=a/2;Math.abs(o-l)<.4*(a/2)&&(e.add(i),t.add(i))}}),y(e),k(t)};return window.addEventListener("scroll",e),e(),()=>{window.removeEventListener("scroll",e)}},[]);const[Q,K]=(0,e.useState)({featureIdx:0,subIdx:null}),Z=e=>{const t=j.current[e];if(t){const e=t.getBoundingClientRect(),n=window.innerHeight,i=e.height,r=(window.pageYOffset||document.documentElement.scrollTop)+e.top-n/2+i/2;window.scrollTo({top:r,behavior:"smooth"})}};return(0,Ri.jsxs)(wa,{ref:n,children:[(0,Ri.jsxs)(Fa,{ref:i,children:[(0,Ri.jsx)(ja,{children:(0,Ri.jsxs)(Sa,{children:["\uc218\ud559\ub300\uc655\uc5d0\uc11c\ub9cc \ub9cc\ub0a0 \uc218 \uc788\ub294",(0,Ri.jsx)("br",{}),"\ud2b9\ubcc4\ud55c \uae30\ub2a5\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4"]})}),(0,Ri.jsx)(Ea,{children:"AI \uae30\uc220\ub85c \uc644\uc131\ub41c \uccb4\uacc4\uc801\uc778 \uc218\ud559 \ud559\uc2b5 \uad00\ub9ac \uc2dc\uc2a4\ud15c"})]}),(0,Ri.jsxs)(ba,{children:[(0,Ri.jsxs)(ya,{children:[(0,Ri.jsx)(ja,{children:(0,Ri.jsxs)(Sa,{children:["\uc218\ud559\ub300\uc655\uc5d0\uc11c\ub9cc \ub9cc\ub0a0 \uc218 \uc788\ub294",(0,Ri.jsx)("br",{}),"\ud2b9\ubcc4\ud55c \uae30\ub2a5\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4"]})}),(0,Ri.jsx)(Ea,{children:"AI \uae30\uc220\ub85c \uc644\uc131\ub41c \uccb4\uacc4\uc801\uc778 \uc218\ud559 \ud559\uc2b5 \uad00\ub9ac \uc2dc\uc2a4\ud15c"})]}),(0,Ri.jsxs)(va,{children:[(0,Ri.jsx)(Va,{title:"1:1 \uac1c\ubcc4 \ub9de\ucda4 \ud559\uc2b5\uc9c0",description:["AI\uac00 \ub9cc\ub4e4\uc5b4\uc8fc\ub294","\ud559\uc0dd\ubcc4\ub85c \uc11c\ub85c \ub2e4\ub978 \uc2e4\ub825\uc5d0 \ub9de\uac8c, \ucd5c\uc801\uc758 \ubb38\uc81c\ub85c \ud559\uc2b5\uc9c0\ub97c \uc790\ub3d9 \uc0dd\uc131\ud574 \ub4dc\ub824\uc694!"],index:0,imageSrc:"/Body/images/Body-image-1.png",category:"\ud559\uc2b5\uc9c0 \uc790\ub3d9 \uc81c\uc791"}),(0,Ri.jsx)(Va,{title:"\ud559\uc2b5 \uc131\uacfc \ubd84\uc11d",description:["\uac1c\uc778\ubcc4 \ud559\uc2b5 \ub370\uc774\ud130 \ubd84\uc11d","\uc790\ub3d9 \uc624\ub2f5\ud074\ub9ac\ub2c9\uc73c\ub85c \ubaa8\ub4e0 \ucde8\uc57d\uc810\uc744 \uc644\ubcbd\ud558\uac8c \ubcf4\uc644\ud569\ub2c8\ub2e4"],index:1,imageSrc:"/Body/images/Body-image-2.png",category:"\uc624\ub2f5 \uc644\ubcbd \uc815\ubcf5"}),(0,Ri.jsx)(Va,{title:"\uc11c\uc220\ud615 \uc790\ub3d9 \ucc44\uc810",description:["\ud544\uae30 \uc778\uc2dd \uae30\uc220\ub85c","\uc11c\uc220\ud615 \ub2f5\uc548\uc744 \uc815\ud655\ud558\uac8c \uc790\ub3d9 \ucc44\uc810\ud569\ub2c8\ub2e4"],index:2,imageSrc:"/Body/images/Body-image-3.png",category:"AI \ucc44\uc810 \uc2dc\uc2a4\ud15c"}),(0,Ri.jsx)(Va,{title:"\uc804\uad6d \ub2e8\uc704 \uc2e4\ub825 \ubd84\uc11d",description:["AI \ucc44\uc810 \uc2dc\uc2a4\ud15c\uc73c\ub85c","\uc804\uad6d \ud559\uc0dd\ub4e4\uacfc \ube44\uad50\ud55c \uac1d\uad00\uc801\uc778 \uc2e4\ub825 \ubd84\uc11d \ub9ac\ud3ec\ud2b8\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4"],index:3,imageSrc:"/Body/images/Body-image-4.png",category:"AI \ucc44\uc810 \uc2dc\uc2a4\ud15c"}),(0,Ri.jsx)(Va,{title:"AI \ud78c\ud2b8 \ubc0f \uc624\ub2f5 \ud53c\ub4dc\ubc31",description:["\uc2e4\uc2dc\uac04 \ud53c\ub4dc\ubc31\uc73c\ub85c","\ud480\uc774\uac00 \ub9c9\ud790 \ub54c \ub2e8\uacc4\ubcc4 \ud78c\ud2b8\uc640 \uc0c1\uc138\ud55c \uc624\ub2f5 \ubd84\uc11d\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4"],index:4,imageSrc:"/Body/images/Body-image-5.png",category:"\uc2e4\uc2dc\uac04 \ud53c\ub4dc\ubc31"}),(0,Ri.jsx)(Va,{title:"\uc2e4\uc2dc\uac04 \uc9c8\ubb38 \uac8c\uc2dc\ud310",description:["\uc2e4\uc2dc\uac04 \ud53c\ub4dc\ubc31\uc73c\ub85c","\ubaa8\ub974\ub294 \ubb38\uc81c\ub97c \uac8c\uc2dc\ud310\uc5d0 \uc9c8\ubb38\ud558\uace0 \ube60\ub974\uac8c \ub2f5\ubcc0\uc744 \ubc1b\uc544 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4"],index:5,imageSrc:"/Body/images/Body-image-6.png",category:"\uc2e4\uc2dc\uac04 \ud53c\ub4dc\ubc31"})]})]}),(0,Ri.jsxs)(xo,{children:[(0,Ri.jsxs)(ho,{ref:e=>{j.current[0]=e},children:[(0,Ri.jsxs)(mo,{isVisible:v.has(0),children:[(0,Ri.jsx)(bo,{children:(0,Ri.jsx)(yo,{children:"\ud559\uc2b5\uc9c0 \uc790\ub3d9 \uc81c\uc791"})}),(0,Ri.jsxs)(go,{children:["AI\uac00 \ub9cc\ub4e4\uc5b4\uc8fc\ub294",(0,Ri.jsx)("br",{}),(0,Ri.jsx)(wo,{isVisible:v.has(0),children:"1:1 \uac1c\ubcc4 \ub9de\ucda4 \ud559\uc2b5\uc9c0"})]}),(0,Ri.jsxs)(vo,{children:["\ud559\uc0dd\ubcc4\ub85c \uc11c\ub85c \ub2e4\ub978 \uc2e4\ub825\uc5d0 \ub9de\uac8c,",(0,Ri.jsx)("br",{}),"\ucd5c\uc801\uc758 \ubb38\uc81c\ub85c \ud559\uc2b5\uc9c0\ub97c \uc790\ub3d9 \uc0dd\uc131\ud574 \ub4dc\ub824\uc694!"]})]}),(0,Ri.jsx)(ko,{isZoomed:b.has(0),onClick:()=>Z(0),style:{cursor:"pointer"},children:(0,Ri.jsx)("img",{src:"/Body/images/Body-image-1.png",alt:"\ud575\uc2ec\uae30\ub2a51",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:0,background:"transparent"}})})]}),(0,Ri.jsxs)(ho,{ref:e=>{j.current[1]=e},children:[(0,Ri.jsxs)(mo,{isVisible:v.has(1),children:[(0,Ri.jsx)(bo,{children:(0,Ri.jsx)(yo,{children:"\uc624\ub2f5 \uc644\ubcbd \uc815\ubcf5"})}),(0,Ri.jsxs)(go,{children:[(0,Ri.jsx)(wo,{isVisible:v.has(1),children:"\uc790\ub3d9 \uc624\ub2f5 \ud074\ub9ac\ub2c9"}),"\ubb34\ud55c \uc81c\uacf5"]}),(0,Ri.jsxs)(vo,{children:["\ub354 \uc774\uc0c1 \ud2c0\ub9ac\uc9c0 \uc54a\uc744 \ub54c\uae4c\uc9c0,",(0,Ri.jsx)("br",{}),"\uc624\ub2f5 \uc720\uc0ac \ubb38\uc81c\ub97c \uc790\ub3d9\uc73c\ub85c \ucd9c\uc81c\ud574 \ub4dc\ub824\uc694!"]})]}),(0,Ri.jsx)(ko,{isZoomed:b.has(1),onClick:()=>Z(1),style:{cursor:"pointer"},children:(0,Ri.jsx)("img",{src:"/Body/images/Body-image-2.png",alt:"\ud575\uc2ec\uae30\ub2a52",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:0,background:"transparent"}})})]}),(0,Ri.jsxs)(ho,{ref:e=>{j.current[2]=e},children:[(0,Ri.jsxs)(mo,{isVisible:v.has(2),children:[(0,Ri.jsx)(bo,{children:(0,Ri.jsx)(yo,{children:"AI \ucc44\uc810 \uc2dc\uc2a4\ud15c"})}),(0,Ri.jsxs)(go,{children:["\uc11c\uc220\ud615",(0,Ri.jsx)("br",{}),"\uc790\ub3d9 \ucc44\uc810"]}),(0,Ri.jsxs)(vo,{children:["\ud544\uae30 \uc778\uc2dd \uae30\uc220\ub85c \uc11c\uc220\ud615 \ub2f5\uc548\uc744",(0,Ri.jsx)("br",{}),"\uc815\ud655\ud558\uac8c \uc790\ub3d9 \ucc44\uc810\ud569\ub2c8\ub2e4."]})]}),(0,Ri.jsx)(ko,{isZoomed:b.has(2),onClick:()=>Z(2),style:{cursor:"pointer"},children:(0,Ri.jsx)("img",{src:"/Body/images/Body-image-3.png",alt:"\ud575\uc2ec\uae30\ub2a53",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:0,background:"transparent"}})})]}),(0,Ri.jsxs)(ho,{ref:e=>{j.current[3]=e},children:[(0,Ri.jsxs)(mo,{isVisible:v.has(3),children:[(0,Ri.jsx)(bo,{children:(0,Ri.jsx)(yo,{children:"AI \ucc44\uc810 \uc2dc\uc2a4\ud15c"})}),(0,Ri.jsxs)(go,{children:["\uc804\uad6d \ub2e8\uc704",(0,Ri.jsx)("br",{}),"\uc2e4\ub825 \ubd84\uc11d"]}),(0,Ri.jsxs)(vo,{children:["\uc804\uad6d \ud559\uc0dd\ub4e4\uacfc \ube44\uad50\ud55c",(0,Ri.jsx)("br",{}),"\uac1d\uad00\uc801\uc778 \uc2e4\ub825 \ubd84\uc11d \ub9ac\ud3ec\ud2b8\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."]})]}),(0,Ri.jsx)(ko,{isZoomed:b.has(3),onClick:()=>Z(3),style:{cursor:"pointer"},children:(0,Ri.jsx)("img",{src:"/Body/images/Body-image-4.png",alt:"\ud575\uc2ec\uae30\ub2a54",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:0,background:"transparent"}})})]}),(0,Ri.jsxs)(ho,{ref:e=>{j.current[4]=e},children:[(0,Ri.jsxs)(mo,{isVisible:v.has(4),children:[(0,Ri.jsx)(bo,{children:(0,Ri.jsx)(yo,{children:"\uc2e4\uc2dc\uac04 \ud53c\ub4dc\ubc31"})}),(0,Ri.jsxs)(go,{children:["AI \ud78c\ud2b8 \ubc0f",(0,Ri.jsx)("br",{}),"\uc624\ub2f5 \ud53c\ub4dc\ubc31"]}),(0,Ri.jsxs)(vo,{children:["\ud480\uc774\uac00 \ub9c9\ud790 \ub54c \ub2e8\uacc4\ubcc4 \ud78c\ud2b8\uc640",(0,Ri.jsx)("br",{}),"\uc0c1\uc138\ud55c \uc624\ub2f5 \ubd84\uc11d\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."]})]}),(0,Ri.jsx)(ko,{isZoomed:b.has(4),onClick:()=>Z(4),style:{cursor:"pointer"},children:(0,Ri.jsx)("img",{src:"/Body/images/Body-image-5.png",alt:"\ud575\uc2ec\uae30\ub2a55",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:0,background:"transparent"}})})]}),(0,Ri.jsxs)(ho,{ref:e=>{j.current[5]=e},children:[(0,Ri.jsxs)(mo,{isVisible:v.has(5),children:[(0,Ri.jsx)(bo,{children:(0,Ri.jsx)(yo,{children:"\uc2e4\uc2dc\uac04 \ud53c\ub4dc\ubc31"})}),(0,Ri.jsxs)(go,{children:["\uc2e4\uc2dc\uac04",(0,Ri.jsx)("br",{}),"\uc9c8\ubb38 \uac8c\uc2dc\ud310"]}),(0,Ri.jsxs)(vo,{children:["\ubaa8\ub974\ub294 \ubb38\uc81c\ub97c \uac8c\uc2dc\ud310\uc5d0 \uc9c8\ubb38\ud558\uace0",(0,Ri.jsx)("br",{}),"\ube60\ub974\uac8c \ub2f5\ubcc0\uc744 \ubc1b\uc544 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]}),(0,Ri.jsx)(ko,{isZoomed:b.has(5),onClick:()=>Z(5),style:{cursor:"pointer"},children:(0,Ri.jsx)("img",{src:"/Body/images/Body-image-6.png",alt:"\ud575\uc2ec\uae30\ub2a56",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:0,background:"transparent"}})})]})]}),(0,Ri.jsxs)(Ba,{children:[(0,Ri.jsxs)(Oa,{children:[(0,Ri.jsxs)(Na,{children:["\uc218\ud559\ub300\uc655 APP \uae30\ub2a5\uc744",(0,Ri.jsx)("br",{}),"\uc9c1\uc811 \uccb4\ud5d8\ud574\ubcf4\uc138\uc694!"]}),(0,Ri.jsxs)(Ra,{children:["\uad50\uc0ac\ub294 \uc6f9\uc5d0\uc11c \uad00\ub9ac\ud558\uace0, \ud559\uc0dd\uc740 \uc571\uc73c\ub85c \ud559\uc2b5\ud558\ub294",(0,Ri.jsx)("br",{}),"\uc644\ubcbd\ud55c \uad50\uc721 \uc0dd\ud0dc\uacc4\ub97c \uacbd\ud5d8\ud558\uc138\uc694"]}),(0,Ri.jsx)(Da,{href:"https://www.iammathking.com/demo",target:"_blank",rel:"noopener noreferrer",onClick:()=>{const e=d+1;c(e),localStorage.setItem("demoClickCount",e.toString())},children:(0,Ri.jsx)("span",{children:"\uc571 \uae30\ub2a5 \ubbf8\ub9ac\ubcf4\uae30"})})]}),(0,Ri.jsx)(La,{children:P?(0,Ri.jsx)(jo,{children:(0,Ri.jsx)(So,{children:["/Body/slides/feature-slide-1.png","/Body/slides/feature-slide-2.png","/Body/slides/feature-slide-3.png","/Body/slides/feature-slide-4.png","/Body/slides/feature-slide-5.png","/Body/slides/feature-slide-6.png","/Body/slides/feature-slide-7.png","/Body/slides/feature-slide-1.png","/Body/slides/feature-slide-2.png","/Body/slides/feature-slide-3.png","/Body/slides/feature-slide-4.png","/Body/slides/feature-slide-5.png","/Body/slides/feature-slide-6.png","/Body/slides/feature-slide-7.png"].map((e,t)=>(0,Ri.jsx)(Eo,{noTransition:X,style:{transform:`translateX(-${100*S}%)`},children:(0,Ri.jsx)("div",{style:{width:"320px",height:"320px",backgroundImage:`url(${e})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",borderRadius:"20px",position:"relative"}})},t))})}):(0,Ri.jsxs)(Wa,{children:[(0,Ri.jsx)(Ua,{children:(0,Ri.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-1.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ri.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ri.jsx)(Ua,{children:(0,Ri.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-2.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ri.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ri.jsx)(Ua,{children:(0,Ri.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-3.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ri.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ri.jsx)(Ua,{children:(0,Ri.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-4.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ri.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ri.jsx)(Ua,{children:(0,Ri.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-5.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ri.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ri.jsx)(Ua,{children:(0,Ri.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-6.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ri.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ri.jsx)(Ua,{children:(0,Ri.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-7.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ri.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ri.jsx)(Ua,{children:(0,Ri.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-1.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ri.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ri.jsx)(Ua,{children:(0,Ri.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-2.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ri.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ri.jsx)(Ua,{children:(0,Ri.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-3.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ri.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ri.jsx)(Ua,{children:(0,Ri.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-4.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ri.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ri.jsx)(Ua,{children:(0,Ri.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-5.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ri.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ri.jsx)(Ua,{children:(0,Ri.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-6.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ri.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})}),(0,Ri.jsx)(Ua,{children:(0,Ri.jsx)("div",{style:{width:"400px",height:"400px",backgroundImage:"url(/Body/slides/feature-slide-7.png)",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"24px",position:"relative"},children:(0,Ri.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",borderRadius:"24px"}})})})]})})]}),(0,Ri.jsxs)(Co,{children:[(0,Ri.jsxs)(Po,{children:[(0,Ri.jsxs)(_o,{children:["\uc6f9-\uc571 \uc5f0\ub3d9\uc73c\ub85c \uc644\uc131\ub418\ub294",(0,Ri.jsx)("br",{}),"\uad50\uc721 \uc2dc\uc2a4\ud15c"]}),(0,Ri.jsxs)(Io,{children:["\uad50\uc0ac\ub294 \uc6f9\uc5d0\uc11c \uad00\ub9ac\ud558\uace0, \ud559\uc0dd\uc740 \uc571\uc73c\ub85c \ud559\uc2b5\ud558\ub294",(0,Ri.jsx)("br",{}),"\uc644\ubcbd\ud55c \uad50\uc721 \uc0dd\ud0dc\uacc4\ub97c \uacbd\ud5d8\ud558\uc138\uc694"]}),(0,Ri.jsxs)(To,{children:[(0,Ri.jsxs)(Fo,{href:"https://play.google.com/store/apps/details?id=com.iammathking&pcampaignid=web_share",target:"_blank",rel:"noopener noreferrer",children:[(0,Ri.jsx)(Ao,{children:(0,Ri.jsx)("img",{src:"/Common/Google_Play_logo.svg",alt:"Google Play"})}),(0,Ri.jsx)(Bo,{children:"Google Play"})]}),(0,Ri.jsxs)(Fo,{href:"https://apps.apple.com/app/%EC%88%98%ED%95%99%EB%8C%80%EC%99%95-ai%EB%94%94%EC%A7%80%ED%84%B8%EB%AC%B8%EC%A0%9C%EC%A7%91/id1501165233",target:"_blank",rel:"noopener noreferrer",children:[(0,Ri.jsx)(Ao,{children:(0,Ri.jsx)("img",{src:"/Common/App_Store_logo.svg",alt:"App Store"})}),(0,Ri.jsx)(Bo,{children:"App Store"})]})]})]}),(0,Ri.jsx)(Oo,{children:(0,Ri.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"},children:[(0,Ri.jsx)("img",{src:"/Body/mockups/2440px.svg",alt:"\uc6f9\uc571 \uc5f0\ub3d9 \uc2dc\uc2a4\ud15c",style:{width:"2440px",height:"auto",transition:"width 0.3s ease"},className:"responsive-svg-image desktop-webapp"}),(0,Ri.jsx)("img",{src:"/WebApp/integration/3.svg",alt:"\ud559\uc0dd\uc6a9 \ubaa8\ubc14\uc77c \uc571",style:{width:"120px",height:"auto",position:"absolute",left:"20%",top:"calc(50% + 200px)",transform:"translateY(-50%)",zIndex:10,display:"none"},className:"mobile-webapp-3"}),(0,Ri.jsx)("img",{src:"/WebApp/integration/4.svg",alt:"\uc6f9\uc571 \uc5f0\ub3d9 \uc2dc\uc2a4\ud15c \uc0c1\uc138",style:{width:"200px",height:"auto",position:"absolute",right:"20%",top:"50%",transform:"translateY(-50%)",zIndex:10,display:"none"},className:"mobile-webapp-4"}),(0,Ri.jsx)("img",{src:"/WebApp/integration/arrow.svg",alt:"\uc2e4\uc2dc\uac04 \ub3d9\uae30\ud654",style:{width:"100px",height:"auto",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",zIndex:5,display:"none"},className:"webapp-arrow"}),(0,Ri.jsx)("img",{src:"/Body/mockups/425px.svg",alt:"\uc6f9\uc571 \uc5f0\ub3d9 \uc2dc\uc2a4\ud15c \ud0dc\ube14\ub9bf",style:{width:"100%",maxWidth:"600px",height:"auto",zIndex:20,display:"none"},className:"tablet-425px-image"}),(0,Ri.jsx)("img",{src:"/WebApp/integration/\uc2e4\uc2dc\uac04 \ub3d9\uae30\ud654.svg",alt:"\uc2e4\uc2dc\uac04 \ub3d9\uae30\ud654",style:{position:"absolute",left:"50%",top:"60%",transform:"translateX(-50%)",width:"auto",height:"auto",maxWidth:"200px",zIndex:5,display:"none"},className:"sync-text"}),(0,Ri.jsxs)("div",{style:{position:"absolute",left:"calc(15% - 50px)",top:"calc(20% + 400px)",zIndex:15,display:"none"},className:"student-info",children:[(0,Ri.jsx)("div",{style:{color:"#835EEB",fontSize:"20px",fontFamily:"'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",fontWeight:"700",marginBottom:"12px",textAlign:"left"},children:"\ud559\uc0dd\uc6a9 \ubaa8\ubc14\uc77c \uc571"}),(0,Ri.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"flex-start"},children:[(0,Ri.jsx)("div",{style:{backgroundColor:"#f3effd",color:"#33373b",padding:"10px 18px",borderRadius:"999px",fontSize:"14px",fontFamily:"'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",fontWeight:"500",textAlign:"left",boxShadow:"0 2px 4px rgba(131, 94, 235, 0.1)",whiteSpace:"nowrap"},children:"\ub9de\ucda4\ud615 \ud559\uc2b5\uc9c0 \uc218\uc2e0"}),(0,Ri.jsx)("div",{style:{backgroundColor:"#f3effd",color:"#33373b",padding:"10px 18px",borderRadius:"999px",fontSize:"14px",fontFamily:"'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",fontWeight:"500",textAlign:"left",boxShadow:"0 2px 4px rgba(131, 94, 235, 0.1)",whiteSpace:"nowrap"},children:"AI \ud78c\ud2b8 \uc2dc\uc2a4\ud15c"}),(0,Ri.jsx)("div",{style:{backgroundColor:"#f3effd",color:"#33373b",padding:"10px 18px",borderRadius:"999px",fontSize:"14px",fontFamily:"'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",fontWeight:"500",textAlign:"left",boxShadow:"0 2px 4px rgba(131, 94, 235, 0.1)",whiteSpace:"nowrap"},children:"\uc2e4\uc2dc\uac04 \ucc44\uc810 \ud53c\ub4dc\ubc31"})]})]}),(0,Ri.jsxs)("div",{style:{position:"absolute",right:"calc(15% - 50px)",top:"calc(20% - 100px)",zIndex:15,display:"none"},className:"teacher-info",children:[(0,Ri.jsx)("div",{style:{color:"#835EEB",fontSize:"20px",fontFamily:"'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",fontWeight:"700",marginBottom:"12px",textAlign:"right"},children:"\uc120\uc0dd\ub2d8\uc6a9 \uc6f9\uc0ac\uc774\ud2b8"}),(0,Ri.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"flex-end"},children:[(0,Ri.jsx)("div",{style:{backgroundColor:"#f3effd",color:"#33373b",padding:"10px 18px",borderRadius:"999px",fontSize:"14px",fontFamily:"'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",fontWeight:"500",textAlign:"right",boxShadow:"0 2px 4px rgba(131, 94, 235, 0.1)",whiteSpace:"nowrap"},children:"\ud074\ub798\uc2a4 \ubc0f \ud559\uc0dd \uad00\ub9ac"}),(0,Ri.jsx)("div",{style:{backgroundColor:"#f3effd",color:"#33373b",padding:"10px 18px",borderRadius:"999px",fontSize:"14px",fontFamily:"'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",fontWeight:"500",textAlign:"right",boxShadow:"0 2px 4px rgba(131, 94, 235, 0.1)",whiteSpace:"nowrap"},children:"\ub9de\ucda4\ud615 \ubb38\uc81c \ucd9c\uc81c"}),(0,Ri.jsx)("div",{style:{backgroundColor:"#f3effd",color:"#33373b",padding:"10px 18px",borderRadius:"999px",fontSize:"14px",fontFamily:"'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",fontWeight:"500",textAlign:"right",boxShadow:"0 2px 4px rgba(131, 94, 235, 0.1)",whiteSpace:"nowrap"},children:"AI \ucc44\uc810 \uacb0\uacfc \ud655\uc778"})]})]})]})})]}),(0,Ri.jsx)(Ga,{children:(0,Ri.jsxs)(Qa,{children:[(0,Ri.jsx)(Ka,{children:(0,Ri.jsxs)(so,{className:g,children:[(0,Ri.jsx)("div",{children:(0,Ri.jsxs)(Za,{children:[J[p%J.length].title.highlight,(0,Ri.jsx)("br",{}),J[p%J.length].title.normal]})}),(0,Ri.jsx)("div",{children:(0,Ri.jsx)(qa,{children:(0,Ri.jsx)("span",{dangerouslySetInnerHTML:{__html:J[p%J.length].quote}})})}),(0,Ri.jsxs)(oo,{children:[(0,Ri.jsx)(lo,{}),(0,Ri.jsx)("div",{children:(0,Ri.jsx)(eo,{children:J[p%J.length].name.split("<br/>").map((e,t)=>(0,Ri.jsx)("span",{dangerouslySetInnerHTML:{__html:e}},t))})})]})]})}),(0,Ri.jsx)(to,{children:(0,Ri.jsx)(co,{children:(0,Ri.jsx)(po,{style:{transform:`translateX(-${100*p}%)`,transition:x?"transform 1s ease-in-out":"none"},children:J.map((e,t)=>(0,Ri.jsx)(uo,{children:(0,Ri.jsxs)(no,{href:e.videoUrl,target:"_blank",rel:"noopener noreferrer",children:[(0,Ri.jsx)(io,{src:e.thumbnailUrl,alt:e.name}),(0,Ri.jsx)(ro,{children:(0,Ri.jsx)(ao,{children:"\u25b6"})})]})},t))})})})]})})]})}),Ja=Yt.div`
  position: absolute;
  cursor: pointer;
  opacity: ${e=>e.$isVisible?1:0};
  transform: translateY(${e=>e.$isVisible?"0":"30px"});
  transition: all .8s cubic-bezier(0.4,0,0.2,1);
  transition-delay: ${e=>e.delay||0}ms;
  &:hover { z-index: 15; }
  @media (max-width: 600px) { display: none; } /* 데스크톱 섹션이므로 모바일에서는 숨김 */
`,Xa=(Yt(Ja)`
  top: 350px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 11;
`,Yt(Ja)`
  top: 145px; left: -160px; z-index: 12; transform-origin: left center;
`,Yt(Ja)`
  top: 430px; right: -400px; z-index: 11; transform-origin: right center;
`,Yt.div`
  position: absolute;
  top: 220px;
  left: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: #835eeb;
  font-size: 42px;
  font-family: "Godo B";
  font-weight: 400;
  line-height: 50px;
  letter-spacing: -0.5px;
  word-wrap: break-word;
  z-index: 20;
  text-align: center;
  white-space: nowrap;
  opacity: ${e=>e.isVisible?1:0};
  transform: translate(-50%, 0)
    ${e=>e.isVisible?"scale(1)":"scale(0.8)"};
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  
  /* 768px 이상에서는 위치 고정 */
  @media (min-width: 768px) {
    font-size: 42px;
    line-height: 50px;
    top: 220px;
  }
  
  /* 768px 이하에서는 화면 크기에 따라 동적 조정 */
  @media (max-width: 767px) {
    font-size: 38px;
    line-height: 46px;
    top: calc(220px - (768px - 100vw) * 0.05);
  }
  
  @media (max-width: 600px) {
    font-size: 34px;
    line-height: 42px;
    top: calc(220px - (600px - 100vw) * 0.07);
  }
  
  @media (max-width: 500px) {
    font-size: 30px;
    line-height: 38px;
    top: calc(220px - (500px - 100vw) * 0.08);
  }
  
  @media (max-width: 400px) {
    font-size: 26px;
    line-height: 34px;
    top: calc(220px - (400px - 100vw) * 0.09);
  }
`,Yt.div`
  left: 50%; 
  top: 50%; 
  position: absolute; 
  justify-content: center; 
  display: flex; 
  flex-direction: column; 
  color: #835eeb;
  font-size: 32px; 
  font-family: "Godo B";
  font-weight: 400; 
  line-height: 41.6px;
  word-wrap: break-word;
  z-index: 1;
  opacity: ${e=>e.isVisible?1:0};
  transform: translate(-50%, -50%)
    ${e=>e.isVisible?"scale(1)":"scale(0.8)"};
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
`,Yt.div`
  position: absolute;
  top: 50%;
  left: 50%;
  --rotation: 0deg; /* CSS 변수로 회전 각도 제어 */
  transform: translate(-50%, -50%) rotate(var(--rotation));
  width: 300px; /* 기본 크기 감소: 400px → 300px (-100px) */
  height: 500px; /* 기본 크기 감소: 600px → 500px (-100px) */
  z-index: 5; /* 기본 z-index를 5로 변경하여 더 나은 레이어링 */
  opacity: ${e=>e.isVisible?1:0};
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* 기본 스타일 */
  background: url("/WebApp/integration/circle.svg") no-repeat center;
  background-size: contain;
  
  /* 애니메이션 조합 */
  animation:
    ${ga} 3s ease-in-out infinite,
    ${ma} 2s ease-in-out infinite;
  
  /* 데스크탑에서 더 크게 표시 및 145도 회전 */
  @media (min-width: 820px) {
    width: 400px; /* 크기 감소: 500px → 400px (-100px) */
    height: 600px; /* 크기 감소: 700px → 600px (-100px) */
    z-index: 5; /* 데스크탑에서는 목업 이미지 뒤에 배치 */
    --rotation: 145deg; /* 125도 → 145도 회전 */
  }
  
  @media (min-width: 1200px) {
    width: 500px; /* 크기 감소: 600px → 500px (-100px) */
    height: 700px; /* 크기 감소: 800px → 700px (-100px) */
    --rotation: 145deg; /* 125도 → 145도 회전 */
  }
  
  @media (min-width: 1600px) {
    width: 600px; /* 크기 감소: 700px → 600px (-100px) */
    height: 800px; /* 크기 감소: 900px → 800px (-100px) */
    --rotation: 145deg; /* 125도 → 145도 회전 */
  }
`,Yt.div`
  /* 기본 스타일 */
  overflow: visible;
  max-width: 100%;
`),Ga=(Yt(Xa)`
  position: absolute;
  top: 80px;
  right: 250px; /* 오른쪽으로 100px 이동: 350px → 250px */
  z-index: 21; /* 텍스트 레이어 상위 */
  max-width: 280px;
  overflow: visible;
  
  @media (max-width: 1600px) {
    right: 200px; /* 300px → 200px */
    max-width: 260px;
  }
  
  @media (max-width: 1400px) {
    right: 150px; /* 250px → 150px */
    max-width: 240px;
  }
  
  @media (max-width: 1280px) {
    right: 100px; /* 200px → 100px */
    max-width: 220px;
  }
  
  @media (max-width: 1024px) {
    right: 50px; /* 150px → 50px */
    max-width: 200px;
  }
  
  @media (max-width: 900px) {
    max-width: 100%;
    margin: 20px 0;
    text-align: center;
  }
`,Yt(Xa)`
  position: absolute;
    top: 770px;
    left: 470px; /* 왼쪽으로 100px 이동: 370px → 470px */
  z-index: 21; /* 텍스트 레이어 상위 */
  max-width: 280px;
  overflow: visible;
  
  @media (max-width: 1600px) {
      left: 420px; /* 320px → 420px */
    max-width: 260px;
  }
  
  @media (max-width: 1400px) {
      left: 370px; /* 270px → 370px */
    max-width: 240px;
  }
  
  @media (max-width: 1280px) {
      left: 320px; /* 220px → 320px */
    max-width: 220px;
  }
  
  @media (max-width: 1024px) {
      left: 270px; /* 170px → 270px */
    max-width: 200px;
  }
  
  @media (max-width: 900px) {
    max-width: 100%;
    margin: 20px 0;
    text-align: center;
  }
`,Yt.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  min-height: 800px;
  padding: 40px 0; /* 기본 상/하 40px (>=1025px) */
  scroll-snap-align: start;
  
  @media (max-width: 900px) {
    padding: 34px 0; /* 601–900px 합계 64px (웹앱 30 + 유튜브 34) */
  }
  
  @media (max-width: 600px) {
    min-height: 700px;
    padding: 28px 0; /* 모바일에서도 더 축소 */
  }
`),Qa=Yt.div`
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
`,Ka=Yt.div`
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
    align-items: flex-start;
    text-align: left;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    align-items: flex-start;
    padding: 20px;
    gap: 8px;
    text-align: left;
  }
`,Za=Yt.div`
  color: #33373b;
  font-size: 48px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 62.4px;
  word-break: break-word;
  margin-bottom: 36px;
  text-align: left;
  width: 100%;
  @media (max-width: 900px) {
    text-align: left;
  }
  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 20px;
    text-align: left;
  }
`,qa=Yt.div`
  color: #33373b;
  font-size: 22px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 36px;
  word-break: break-word;
  margin-bottom: 32px;
  text-align: left;
  width: 100%;
  @media (max-width: 900px) {
    text-align: left;
  }
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
    text-align: left;
  }
`,eo=Yt.div`
  color: #835eeb;
  font-size: 20px;
  font-family: Pretendard;
  line-height: 26px;
  word-break: break-word;
  font-weight: 700;
  text-align: left;
  width: 100%;
  span {
    display: block;
  }
  span:last-child {
    font-weight: 400;
  }
  @media (max-width: 900px) {
    text-align: left;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 18px;
    text-align: left;
  }
`,to=Yt.div`
  width: 864px;
  height: 520px;
  position: relative;
  overflow: hidden;
  outline: 6px #835eed solid;
  background: #f8f6ff;
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
`,no=Yt.a`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`,io=Yt.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: #f0f0f0;
  
  &::before {
    content: "";
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
`,ro=Yt.div`
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
  
  ${no}:hover & {
    background: rgba(0, 0, 0, 0.8);
    transform: translate(-50%, -50%) scale(1.1);
  }
`,ao=Yt.span`
  color: white;
  font-size: 32px;
  font-weight: bold;
  margin-left: 4px;
`,oo=Yt.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 1366px) and (min-width: 601px) {
    justify-content: flex-start; /* 태블릿에서 왼쪽 정렬 */
  }
  @media (max-width: 900px) {
    align-items: flex-start;
    justify-content: flex-start; /* 모바일에서 왼쪽 정렬 */
  }
`,lo=Yt.div`
  width: 3px;
  min-width: 3px;
  height: 52px;
  background: #835eeb;
  margin-right: 16px;
  border-radius: 2px;
  @media (max-width: 1366px) and (min-width: 601px) {
    display: block; /* 태블릿에서 막대 표시 */
  }
  @media (max-width: 900px) {
    display: block; /* 모바일에서 막대 표시 */
    height: 20px;
    margin-top: 20px;
  }
  @media (max-width: 600px) {
    display: block; /* 모바일에서 막대 표시 */
    height: 16px;
    margin-top: 18px;
  }
`,so=Yt.div`
  opacity: 1;
  transform: translateY(0);
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.4s ease-in;
  }
  
  &.fade-out {
    opacity: 0;
    transform: translateY(0);
    transition: all 0.2s ease-out;
  }
  
  &.fade-in {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.4s ease-in;
  }
`,co=Yt.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 6px; /* ExperienceImageBlock의 outline과 일치 */
  contain: layout style paint;
  isolation: isolate;
`,po=Yt.div`
  display: flex;
  height: 100%;
  will-change: transform;
  position: relative;
`,uo=Yt.div`
  width: 100%; /* VideoSlider와 같은 크기 */
  height: 100%;
  flex-shrink: 0;
  position: relative;
`,xo=Yt.div`
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
`,fo=Yt.div`
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
`,ho=Yt(fo)`
  opacity: 0;
  &.visible {
    animation: ${pa} 0.8s ease forwards;
  }
`,mo=Yt.div`
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
  transform: translateX(${e=>e.isVisible?"0":"-30px"})
    scale(${e=>e.isVisible?"1.05":"1"});
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
`,go=Yt.div`
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  color: #835eeb;
  font-size: 40px;
  font-family: "Pretendard", sans-serif;
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
    color: #835eeb;
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
`,wo=Yt.span`
  display: inline-block;
  width: fit-content;
  background: linear-gradient(
    180deg,
    transparent 0%,
    transparent 50%,
    #f3effd 50%,
    #f3effd 100%
  );
  background-size: 0% 50%;
  background-repeat: no-repeat;
  background-position: left bottom;
  box-sizing: border-box;
  ${e=>e.isVisible&&Ut`
    animation: ${ha} 1.5s ease-out 0.3s forwards;
  `}
  @media (max-width: 600px) {
    display: inline-block;
    width: fit-content;
    background: linear-gradient(
      180deg,
      transparent 0%,
      transparent 50%,
      #f3effd 50%,
      #f3effd 100%
    );
    background-size: 0% 50%;
    background-repeat: no-repeat;
    background-position: left bottom;
    box-sizing: border-box;
    text-align: center;
    ${e=>e.isVisible&&Ut`
      animation: ${ha} 1.5s ease-out 0.3s forwards;
    `}
  }
`,bo=Yt.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  background: #f3effd;
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
    background: #f3effd;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
  }
`,yo=Yt.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #835eeb;
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
    color: #835eeb;
    font-size: 10px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 13px;
    word-wrap: break-word;
  }
`,vo=Yt.div`
  opacity: 0.6;
  color: #4b4b4b;
  font-size: 24px;
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  line-height: 34.8px;
  text-align: left;
  width: 100%;
  max-width: 450px;
  @media (max-width: 600px) {
    opacity: 0.6;
    text-align: center !important;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #4b4b4b;
    font-size: 12px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 17.4px;
    word-wrap: break-word;
    max-width: 100%;
  }
`,ko=Yt.div`
  width: 100%;
  max-width: 730px;
  aspect-ratio: 16 / 9; /* 16:9 비율 유지 */
  background: #f8f6ff !important;
  border-radius: 10px;
  overflow: hidden;
  outline: none;
  border: 2px solid #835eeb;
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
  &::before,
  &::after {
    background: transparent !important;
  }
  @media (max-width: 600px) {
    width: 100%;
    max-width: 300px;
    position: relative;
    background: #835eeb;
    border: 1px #835eeb solid;
    transform: none;
    margin: 0 auto;
  }
  @media (max-width: 375px) {
    max-width: 280px;
    border-radius: 8px;
  }
`,jo=Yt.div`
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
`,So=Yt.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  
  @media (max-width: 1366px) and (min-width: 601px) {
    max-width: 600px;
    margin: 0 auto;
  }
`,Eo=Yt.div`
  width: 100%;
  display: flex;
  justify-content: center;
  transition: ${e=>e.noTransition?"none":"transform 1.2s ease-in-out"};
  flex-shrink: 0;
  
  @media (max-width: 1366px) and (min-width: 601px) {
    padding: 0 20px;
  }
`,zo=(Yt.div`
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
`,Yt.div`
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
`,Yt.div`
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
  max-width: 100%;
  overflow: visible;
  
  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
`,Yt.div`
  color: #835eeb;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 8px;
  white-space: normal;
  opacity: ${e=>e.isVisible?1:0};
  transform: ${e=>e.isVisible?"translateY(0)":"translateY(20px)"};
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${e=>e.delay||0}ms;
  
  @media (max-width: 1600px) {
    font-size: 32px;
  }
  
  @media (max-width: 1400px) {
    font-size: 28px;
  }
  
  @media (max-width: 1200px) {
    font-size: 24px;
  }
  
  @media (max-width: 1000px) {
    font-size: 20px;
  }
  
  @media (max-width: 800px) {
    font-size: 18px;
  }
  
  @media (max-width: 600px) {
    font-size: 16px;
  }
`,Yt.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  align-items: flex-start;
  
  @media (max-width: 900px) {
    align-items: center;
  }
`,Yt.div`
  background: #f3effd;
  color: #835eeb;
  font-size: 22px;
  font-weight: 600;
  padding: 10px 24px;
  border-radius: 20px;
  display: inline-block;
  width: max-content;
  max-width: 100%;
  white-space: normal;
  word-wrap: break-word;
  text-align: center;
  opacity: ${e=>e.isVisible?1:0};
  transform: ${e=>e.isVisible?"translateY(0)":"translateY(20px)"};
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${e=>e.delay||0}ms;
  
  @media (max-width: 1600px) {
    font-size: 20px;
    padding: 8px 20px;
  }
  
  @media (max-width: 1400px) {
    font-size: 18px;
    padding: 7px 18px;
  }
  
  @media (max-width: 1200px) {
    font-size: 16px;
    padding: 6px 16px;
  }
  
  @media (max-width: 1000px) {
    font-size: 14px;
    padding: 5px 14px;
  }
  
  @media (max-width: 800px) {
    font-size: 12px;
    padding: 4px 12px;
  }
  
  @media (max-width: 600px) {
    font-size: 10px;
    padding: 3px 10px;
    border-radius: 16px;
  }
`,Ya),Co=Yt.section`
  width: 100%;
  background: white;
  padding: 150px 0 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 80px;
  overflow: hidden;
  scroll-snap-align: start;
  position: relative;
  
  @media (max-width: 1024px) {
    padding: 140px 0 30px 0;
    gap: 60px;
  }
  @media (max-width: 600px) {
    padding: 120px 0 30px 0;
    gap: 40px;
  }
`,Po=Yt.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
`,_o=Yt.div`
  width: 100%;
  max-width: 800px;
  text-align: center;
  color: #33373B;
  font-size: 48px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 67.2px;
  
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 50px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 40px;
  }
`,Io=Yt.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
  color: #858585;
  font-size: 28px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 36.4px;
  
  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 30px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 26px;
  }
`,To=Yt.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 16px;
  }
`,Fo=Yt.a`
  padding: 8px 16px;
  background: #33373B;
  border-radius: 40px;
  width: 140px;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: all .3s ease;
  
  &:hover { 
    background: #835EEB; 
    transform: translateY(-2px); 
  }
  
  @media (max-width: 480px) {
    width: 200px;
    padding: 12px 20px;
  }
`,Ao=Yt.div`
  width: 16px; 
  height: 16px; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  
  img{ 
    width:100%; 
    height:100%; 
    object-fit:contain; 
  }
`,Bo=Yt.div`
  color: #fff; 
  font-size: 14px; 
  font-weight: 700; 
  line-height: 21px;
`,Oo=Yt.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  
  /* 2440px 이미지 반응형 처리 */
  .responsive-svg-image {
    width: 2440px !important; /* 원본 크기 유지 */
    height: auto !important;
    transition: all 0.3s ease !important;
  }
  
  /* 1280px에서 1200px까지: 1280px 이미지 사용 (크롭 상태 유지) */
  @media (max-width: 1280px) {
    .responsive-svg-image {
      content: url("/Body/mockups/1280px.svg") !important;
      width: 100% !important;
      max-width: 100% !important;
    }
  }
  
  /* 768px에서 1200px까지: 768px 이미지 사용 (크롭 상태 유지) */
  @media (max-width: 1200px) {
    .responsive-svg-image {
      content: url("/Body/mockups/768px.svg") !important;
      width: 100% !important;
      max-width: 100% !important;
    }
  }
  
  /* 426px~767px: 425px.svg 이미지 사용 */
  @media (min-width: 426px) and (max-width: 767px) {
    /* 425px.svg 이미지 표시 */
    .tablet-425px-image {
      display: block !important;
      width: 100% !important;
      max-width: 600px !important;
      height: auto !important;
      z-index: 10 !important;
    }
    
    /* 목업 이미지들 완전 숨김 - 더 강력한 규칙 적용 */
    .mobile-webapp-3,
    .mobile-webapp-4,
    .webapp-arrow,
    .sync-text,
    .student-info,
    .teacher-info {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      width: 0 !important;
      height: 0 !important;
      overflow: hidden !important;
      position: absolute !important;
      left: -9999px !important;
      top: -9999px !important;
      z-index: -1 !important;
    }
    
    /* 데스크탑 이미지 숨김 */
    .desktop-webapp {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
    }
  }
  
  /* 425px 이하: 모바일 버전 - 3,4번 이미지와 텍스트+칩 표시 */
  @media (max-width: 425px) {
    /* 모바일 섹션 높이 설정 */
    min-height: 900px !important;
    
    .responsive-svg-image {
      width: 100% !important;
      max-width: 100% !important;
    }
    
    /* 425px.svg 이미지 숨김 */
    .tablet-425px-image {
      display: none !important;
    }
    
    /* 모바일에서 학생용/선생님용 텍스트와 칩 표시 */
    .mobile-webapp-3,
    .mobile-webapp-4,
    .webapp-arrow,
    .sync-text,
    .student-info,
    .teacher-info {
      display: block !important;
    }
    
    /* 데스크탑 이미지 숨김 */
    .desktop-webapp {
      display: none !important;
    }
    
    /* 모바일용 이미지 크기 조정 */
    .mobile-webapp-3 {
      width: 180px !important; /* 1.2배 크기 증가 (150px * 1.2 = 180px) */
      left: calc(10% - 30px) !important; /* 왼쪽으로 30px 이동 */
      top: calc(50% - 280px) !important; /* 위로 300px 더 올림 (기존 calc(50% - 230px)에서 50px 위로) */
    }
    
    .mobile-webapp-4 {
      width: 600px !important; /* 3배 크기 증가 (200px * 3 = 600px) */
      right: calc(10% - 360px) !important; /* 오른쪽으로 360px 이동 */
      top: calc(50% + 200px) !important; /* 아래쪽에 배치 */
    }
    
    .webapp-arrow {
      width: 300px !important; /* 3배 크기 증가 (100px * 3 = 300px) */
    }
    
    .sync-text {
      width: auto !important;
      height: auto !important;
      max-width: 200px !important;
      top: calc(50% - 50px) !important; /* 정중앙에서 50px 위로 (20px + 30px) */
      left: 50% !important;
      transform: translate(-50%, -50%) !important; /* 정확한 중앙 정렬 */
      z-index: 5 !important;
    }
    
    /* 학생용/선생님용 정보 컨테이너 조정 - 데스크탑과 동일한 디자인 */
    .student-info,
    .teacher-info {
      font-size: 20px !important;
      font-weight: 700 !important;
      font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif !important;
    }
    
    .student-info > div > div,
    .teacher-info > div > div {
      font-size: 14px !important;
      font-weight: 500 !important;
      padding: 10px 18px !important;
      font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif !important;
      background-color: #f3effd !important;
      color: #33373b !important;
      border-radius: 999px !important;
      box-shadow: 0 2px 4px rgba(131, 94, 235, 0.1) !important;
    }
  }
  

  
  /* 320px 이하: 초소형 모바일 - 3번 이미지 사용 */
  @media (max-width: 320px) {
    /* 모바일 섹션 높이 설정 */
    min-height: 900px !important;
    
    .responsive-svg-image {
      content: url("/WebApp/integration/3.svg") !important; /* 학생용 모바일 앱 */
      width: 100% !important;
      max-width: 100% !important;
    }
    
    /* 425px.svg 이미지 숨김 */
    .tablet-425px-image {
      display: none !important;
    }
    
    .mobile-webapp-3 {
      width: 120px !important;
      left: 5% !important;
      top: calc(50% - 80px) !important; /* 위쪽에 배치 (320px 이하에서는 조금 작게) */
    }
    
    .mobile-webapp-4 {
      width: 160px !important;
      right: 5% !important;
      top: calc(50% + 80px) !important; /* 아래쪽에 배치 (320px 이하에서는 조금 작게) */
    }
    
    .webapp-arrow {
      width: 240px !important; /* 3배 크기 증가 (80px * 3 = 240px) */
    }
    
    .sync-text {
      width: auto !important;
      height: auto !important;
      max-width: 180px !important; /* 320px 이하에서는 조금 작게 */
      top: calc(50% - 50px) !important; /* 정중앙에서 50px 위로 (20px + 30px) */
      left: 50% !important;
      transform: translate(-50%, -50%) !important; /* 정확한 중앙 정렬 */
      z-index: 5 !important;
    }
    
    /* 학생용/선생님용 정보 컨테이너 초소형 최적화 - 데스크탑과 동일한 디자인 유지 */
    .student-info,
    .teacher-info {
      font-size: 20px !important;
      font-weight: 700 !important;
      font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif !important;
    }
    
    .student-info > div > div,
    .teacher-info > div > div {
      font-size: 14px !important;
      font-weight: 500 !important;
      padding: 10px 18px !important;
      font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif !important;
      background-color: #f3effd !important;
      color: #33373b !important;
      border-radius: 999px !important;
      box-shadow: 0 2px 4px rgba(131, 94, 235, 0.1) !important;
    }
  }
  
  @media (max-width: 768px) {
    padding: 0 16px;
    .responsive-svg-image {
      max-width: 100% !important;
    }
  }
  @media (max-width: 480px) {
    padding: 0 12px;
    .responsive-svg-image {
      max-width: 100% !important;
    }
  }
`,No=(Yt.div`
  position: relative;
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    height: 600px;
  }
  @media (max-width: 480px) {
    height: 500px;
  }
`,Yt.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #835eeb;
  font-size: 42px;
  font-family: "Godo B";
  font-weight: 400;
  line-height: 50px;
  letter-spacing: -0.5px;
  text-align: center;
  white-space: nowrap;
  z-index: 20;
  
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 32px;
  }
`,Yt.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(145deg);
  width: 300px;
  height: 500px;
  background: url("/WebApp/integration/circle.svg") no-repeat center;
  background-size: contain;
  z-index: 5;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    width: 200px;
    height: 350px;
  }
  @media (max-width: 480px) {
    width: 150px;
    height: 250px;
  }
`,Yt.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  cursor: pointer;
  
  &:hover {
    z-index: 15;
  }
`,Yt.div`
  position: absolute;
  top: 20%;
  left: 10%;
  z-index: 12;
  cursor: pointer;
  
  &:hover {
    z-index: 15;
  }
  
  @media (max-width: 768px) {
    top: 15%;
    left: 5%;
  }
  @media (max-width: 480px) {
    top: 10%;
    left: 2%;
  }
`,Yt.div`
  position: absolute;
  bottom: 10%;
  right: 10%;
  z-index: 11;
  cursor: pointer;
  
  &:hover {
    z-index: 15;
  }
  
  @media (max-width: 768px) {
    bottom: 5%;
    right: 5%;
  }
  @media (max-width: 480px) {
    bottom: 2%;
    right: 2%;
  }
`,Yt.div`
  position: absolute;
  top: 80px;
  right: 250px;
  z-index: 21;
  max-width: 280px;
  
  @media (max-width: 768px) {
    top: 60px;
    right: 20px;
    max-width: 200px;
  }
  @media (max-width: 480px) {
    top: 40px;
    right: 10px;
    max-width: 180px;
  }
`,Yt.div`
  position: absolute;
  bottom: 80px;
  left: 250px;
  z-index: 21;
  max-width: 280px;
  
  @media (max-width: 768px) {
    bottom: 60px;
    left: 20px;
    max-width: 200px;
  }
  @media (max-width: 480px) {
    bottom: 40px;
    left: 10px;
    max-width: 180px;
  }
`,Yt.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(131, 94, 235, 0.05), rgba(107, 75, 196, 0.05));
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  @media (max-width: 768px) {
    border-radius: 12px;
  }
  @media (max-width: 480px) {
    border-radius: 8px;
  }
`,Yt.img`
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
`),Ro=Yt.div`
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
`,Do=Yt.div`
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
`,Lo=Yt.div`
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
`,Mo=Yt.div`
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
`,$o=Yt.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`,Wo=Yt.div`
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
`,Uo=Yt.div`
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
`,Ho=Yt.div`
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
`,Vo=Yt.div`
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
`,Yo=Yt.div`
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
`,Jo=Yt.div`
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
`,Xo=Yt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 600px) {
    gap: 8px;
  }
`,Go=Yt.div`
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
`,Qo=Yt.button`
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
`,Ko=Yt.div`
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
`,Zo=Yt.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-start;
  @media (max-width: 600px) {
    gap: 8px;
    margin-left: 0;
    justify-content: flex-start;
  }
`,qo=Yt.button`
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
`,el=Yt.button`
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
`,tl=Yt.button`
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
`,nl=Yt.section`
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
`,il=Yt.h2`
  font-size: 40px;
  font-weight: 700;
  color: #222;
  margin-bottom: 40px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`,rl=Yt.ul`
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
`,al=Yt.li`
  border: none;
  background: transparent;
  margin-bottom: 0;
`,ol=Yt.div`
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
`,ll=Yt.button`
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
`,sl=Yt.span`
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
`,dl=Yt.button`
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
`,cl=Yt.section`
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
`,pl=Yt.div`
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
`,ul=Yt.div`
  color: #E0DDF5;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 18.20px;
  word-wrap: break-word;
`,xl=Yt.div`
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
`,fl=Yt.div`
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
`,hl=Yt.div`
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
`,ml=Yt.div`
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
`,gl=Yt.div`
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
`,wl=Yt.div`
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
`,bl=Yt.div`
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
`,yl=t=>{let{faqs:n}=t;const[i,r]=(0,e.useState)(null),a=Hn(),o=n.slice(0,3);return(0,Ri.jsxs)(nl,{children:[(0,Ri.jsx)(il,{children:"\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38"}),(0,Ri.jsx)(rl,{children:o.map((e,t)=>(0,Ri.jsxs)(al,{children:[(0,Ri.jsxs)(ll,{type:"button",open:i===t,onClick:()=>r(i===t?null:t),children:[e.question,(0,Ri.jsx)(sl,{open:i===t,children:"+"})]}),(0,Ri.jsx)(ol,{open:i===t,children:e.answer})]},e.question))}),(0,Ri.jsx)(dl,{onClick:()=>a("/notice/faq"),children:"\ub354 \uc790\uc138\ud55c \ub0b4\uc6a9 \ubcf4\uae30"})]})},vl=t=>{let{isModalOpen:n,setIsModalOpen:i}=t;const[r,a]=(0,e.useState)(!1),[o,l]=(0,e.useState)(0),[s,d]=(0,e.useState)(!1),c=(0,e.useRef)(null),[p,u]=(0,e.useState)(!1),[x,f]=(0,e.useState)(!1),[h,m]=(0,e.useState)(null),g=[{id:1,image:"/Home/hero/Hero-1.png",imageTablet:"/Home/hero/Hero_tablet_1.png",imageMobile:"/Home/hero/Hero-mobile-1.png",preTitle:"No.1 AI \ud559\uc2b5 \uc194\ub8e8\uc158",mainTitle:"\uc218\ud559\ub300\uc655",description:"\uc555\ub3c4\uc801\uc778 AI \uae30\uc220\ub85c \uc2e4\ud604\ud558\ub294<br />\uac00\uc7a5 \uc644\ubcbd\ud55c 1:1 \ubc00\ucc29 \uad00\ub9ac"},{id:2,image:"/Home/hero/Hero-2.png",imageTablet:"/Home/hero/Hero_tablet_2.png",imageMobile:"/Home/hero/Hero-mobile-2.png",preTitle:"KTEA \ud55c\uad6d\ube0c\ub79c\ub4dc\ud3c9\uac00\ub300\uc0c1",mainTitle:"2\ub144 \uc5f0\uc18d 1\uc704 \uc218\uc0c1",description:"\ub204\uc801 \uac00\uc785\uc790 200\ub9cc \uba85 \ub2ec\uc131!<br />\ucd08\uc911\uace0 \ubaa8\ub4e0 \uad50\uacfc\uacfc\uc815\uc5d0 \ucd5c\uc801\ud654\ub41c \ud559\uc2b5 \ud50c\ub7ab\ud3fc"},{id:3,image:"/Home/hero/Hero-3.png",imageTablet:"/Home/hero/Hero_tablet_3.png",imageMobile:"/Home/hero/Hero-mobile-3.png",preTitle:"ChatGPT \uac1c\ubc1c\uc0ac",mainTitle:"OpenAI \uacf5\uc2dd \ud611\uc5c5 \uae30\uc5c5",description:"\uc11c\uc220\ud615 \ud480\uc774 \ucc44\uc810\ubd80\ud130 \uc720\uc0ac\ubb38\uc81c \uac80\uc0c9\uae4c\uc9c0<br />\ucc28\uc6d0\uc774 \ub2e4\ub978 AI \uae30\uc220\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4"},{id:4,image:"/Home/hero/Hero-4.png",imageTablet:"/Home/hero/Hero_tablet_4.png",imageMobile:"/Home/hero/Hero-mobile-4.png",preTitle:"\uc5c5\uacc4 \ucd5c\uace0\uc758 AI \uae30\uc220\ub825",mainTitle:"\ud2b9\ud5c8 19\uc885 \ub4f1\ub85d \uc644\ub8cc",description:"\ubb38\uc81c\uc740\ud589\uc744 \ub118\uc5b4 AI \ud29c\ud130\ub85c!<br />\uac00\uc7a5 \uc218\ud559\uc744 \uc798 \ud558\ub294 AI\ub97c \ub9cc\ub4ed\ub2c8\ub2e4"},{id:5,image:"/Home/hero/Hero-5.png",imageTablet:"/Home/hero/Hero_tablet_5.png",imageMobile:"/Home/hero/Hero-mobile-5.png",preTitle:"\uac1c\ub150\ubd80\ud130 \uace0\ub09c\ub3c4\uae4c\uc9c0",mainTitle:"\ucd5c\ub300 \uaddc\ubaa8\uc758 \ud559\uc2b5 \ucf58\ud150\uce20",description:"\ud559\uc0dd\ub4e4\uc758 \uc131\uc801 \uc0c1\uc2b9,<br />\uad6d\ub0b4 \ucd5c\uace0\uc758 \uc804\ubb38\uac00\ub4e4\uc774 \ud568\uaed8 \ud569\ub2c8\ub2e4"}];(0,e.useEffect)(()=>{if(s)return;const e=setInterval(()=>{l(e=>(e+1)%g.length)},5e3);return()=>clearInterval(e)},[g.length,s]),(0,e.useEffect)(()=>{if(2===o){u(!1),f(!1);const e=setTimeout(()=>u(!0),50),t=setTimeout(()=>f(!0),200);return()=>{clearTimeout(e),clearTimeout(t)}}u(!1),f(!1)},[o]);const w=()=>{a(!1),i(!1)};return(0,Ri.jsxs)(Ro,{children:[(0,Ri.jsx)(Do,{children:(0,Ri.jsxs)(Lo,{children:[g.map((e,t)=>(0,Ri.jsx)(Mo,{$isActive:t===o,bgDesktop:e.image,bgTablet:e.imageTablet,bgMobile:e.imageMobile},e.id)),(0,Ri.jsx)($o,{}),(0,Ri.jsx)(Wo,{children:(0,Ri.jsx)(Uo,{children:(0,Ri.jsxs)(Ho,{children:[2===o?(0,Ri.jsxs)("div",{style:{display:"flex",gap:16,marginTop:30,marginBottom:20},children:[(0,Ri.jsx)(No,{src:"/Home/chips/Hero 3_Open AI.png",alt:"OpenAI",visible:p}),(0,Ri.jsx)(No,{src:"/Home/chips/Hero 3_Chat GPT.png",alt:"ChatGPT",visible:x})]}):(0,Ri.jsx)("div",{style:{height:48,marginBottom:32}}),(0,Ri.jsxs)(Vo,{children:[(0,Ri.jsx)(Yo,{children:g[o].preTitle}),(0,Ri.jsx)(Xo,{children:(0,Ri.jsx)(Jo,{children:g[o].mainTitle})})]}),(0,Ri.jsx)(Go,{dangerouslySetInnerHTML:{__html:g[o].description}}),(0,Ri.jsx)(Qo,{onClick:()=>{a(!0),i(!0)},children:"\ubb34\ub8cc\uccb4\ud5d8 \uc2dc\uc791\ud558\uae30"}),(0,Ri.jsxs)(Ko,{children:[(0,Ri.jsx)(Zo,{children:g.map((e,t)=>(0,Ri.jsx)(el,{$active:o===t,"aria-label":`\uc2ac\ub77c\uc774\ub4dc ${t+1}`,onClick:()=>l(t)},t))}),(0,Ri.jsx)(qo,{"aria-label":"\uc77c\uc2dc\uc815\uc9c0",onClick:()=>{d(!s)},children:s?"\u25b6":"\u23f8"})]})]})})}),(0,Ri.jsx)(tl,{onClick:()=>{if(c.current){const e=c.current.getBoundingClientRect(),t=(window.pageYOffset||document.documentElement.scrollTop)+e.top;window.scrollTo({top:t,behavior:"smooth"})}},"aria-label":"\ub2e4\uc74c \uc139\uc158\uc73c\ub85c \uc2a4\ud06c\ub864",children:(0,Ri.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Ri.jsx)("path",{d:"M7 10L12 15L17 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})}),(0,Ri.jsx)(cl,{children:(0,Ri.jsxs)(pl,{children:[(0,Ri.jsxs)(fl,{children:[(0,Ri.jsx)(ul,{children:"\uc218\ud559\ub300\uc655 CLASS"}),(0,Ri.jsx)(xl,{dangerouslySetInnerHTML:{__html:"\ubb34\ub8cc\uccb4\ud5d8 \uc2e0\uccad \ubc29\ubc95"}}),(0,Ri.jsx)(hl,{dangerouslySetInnerHTML:{__html:"\uc218\ud559\ub300\uc655 CLASS\ub97c 2\uc8fc\ub3d9\uc548 \ubb34\ub8cc\ub85c \uc0ac\uc6a9\ud574\ubcf4\uc138\uc694"}})]}),(0,Ri.jsxs)(ml,{children:[(0,Ri.jsxs)(gl,{isHovered:1===h,onMouseEnter:()=>m(1),onMouseLeave:()=>m(null),children:[(0,Ri.jsx)(wl,{isHovered:1===h,children:"STEP 1"}),(0,Ri.jsx)(bl,{isHovered:1===h,dangerouslySetInnerHTML:{__html:"\ubb34\ub8cc \uccb4\ud5d8 \uc2e0\uccad \ud559\uad50/\ud559\uc6d0 \uc120\ud0dd"}})]}),(0,Ri.jsxs)(gl,{isHovered:2===h,onMouseEnter:()=>m(2),onMouseLeave:()=>m(null),children:[(0,Ri.jsx)(wl,{isHovered:2===h,children:"STEP 2"}),(0,Ri.jsx)(bl,{isHovered:2===h,dangerouslySetInnerHTML:{__html:"\uccb4\ud5d8\uc6a9 \uacc4\uc815 \uc774\uba54\uc77c \uc218\ub839"}})]}),(0,Ri.jsxs)(gl,{isHovered:3===h,onMouseEnter:()=>m(3),onMouseLeave:()=>m(null),children:[(0,Ri.jsx)(wl,{isHovered:3===h,children:"STEP 3"}),(0,Ri.jsx)(bl,{isHovered:3===h,dangerouslySetInnerHTML:{__html:"5\uc778 \ubbf8\ub9cc \ubb34\ub8cc \uc0ac\uc6a9"}})]}),(0,Ri.jsxs)(gl,{isHovered:4===h,onMouseEnter:()=>m(4),onMouseLeave:()=>m(null),children:[(0,Ri.jsx)(wl,{isHovered:4===h,children:"STEP 4"}),(0,Ri.jsx)(bl,{isHovered:4===h,dangerouslySetInnerHTML:{__html:"\uc0ac\uc6a9 \uc778\uc6d0 \uc99d\uc6d0 \uc2dc \uac00\uc785 (\uc120\ud0dd)"}})]}),(0,Ri.jsxs)(gl,{isHovered:5===h,onMouseEnter:()=>m(5),onMouseLeave:()=>m(null),children:[(0,Ri.jsx)(wl,{isHovered:5===h,children:"STEP 5"}),(0,Ri.jsx)(bl,{isHovered:5===h,dangerouslySetInnerHTML:{__html:"\ubb34\ub8cc \uccb4\ud5d8 \uc2e0\uccad \ubc84\ud2bc \ub204\ub974\uae30"}})]})]})]})}),(0,Ri.jsx)(zo,{ref:c}),(0,Ri.jsx)(ca,{isOpen:r,onClose:w,title:"\ubb34\ub8cc \uccb4\ud5d8 \uc2e0\uccad",description:"\uc544\ub798 \uc815\ubcf4\ub97c \uc785\ub825\ud574 \uc8fc\uc2dc\uba74 \ub2f4\ub2f9\uc790\uac00 \ube60\ub974\uac8c \uc5f0\ub77d\ub4dc\ub9bd\ub2c8\ub2e4.",children:(0,Ri.jsx)(Qr,{onClose:w})}),(0,Ri.jsx)(yl,{faqs:[{question:"\uc218\ud559\ub300\uc655 \ud074\ub798\uc2a4\uac00 \ubb54\uac00\uc694?",answer:"\uc218\ud559\ub300\uc655 \ud074\ub798\uc2a4\ub294 \uc218\ud559\ub300\uc655\uc758 \uc628\ub77c\uc778 \ud559\uc2b5 \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4."},{question:"\uc120\uc0dd\ub2d8\uc740 \uc5b4\ub5a4 \uae30\uae30\ub85c \uc0ac\uc6a9 \uac00\ub2a5\ud55c\uac00\uc694?",answer:"\uc120\uc0dd\ub2d8\uaed8\uc11c\ub294 \uc6f9\uc0ac\uc774\ud2b8\uc5d0 \uc811\uc18d\ud574\uc11c \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc6f9\uc0ac\uc774\ud2b8\ub294 \ubc18\uc751\ud615 \uc6f9\uc0ac\uc774\ud2b8\ub85c \uc81c\uc791\ub418\uc5b4 \uc788\uc5b4\uc11c \uc2a4\ub9c8\ud2b8\ud3f0, \ud0dc\ube14\ub9bf, \ub178\ud2b8\ubd81, \ub370\uc2a4\ud06c\ud1b1\uc5d0\uc11c \ubaa8\ub450 \uc0ac\uc6a9 \uac00\ub2a5\ud558\uc2ed\ub2c8\ub2e4."},{question:"\ud559\uc0dd\ub4e4\uc758 \ud559\uc2b5 \ub370\uc774\ud130\ub294 \uc5b4\ub5bb\uac8c \uad00\ub9ac\ub418\ub098\uc694?",answer:"\ud559\uc0dd\ub4e4\uc740 \uae30\ubcf8\uc801\uc73c\ub85c \uc571\uc2a4\ud1a0\uc5b4, \ud50c\ub808\uc774\uc2a4\ud1a0\uc5b4\uc5d0\uc11c \uc2a4\ub9c8\ud2b8\ud3f0\uc6a9 \uc571, \ud0dc\ube14\ub9bf \uc6a9 \uc571\uc744 \uc124\uce58\ud560 \uc218 \uc788\uac8c \ube0c\ub77c\uc6b0\uc800\ub97c \ud65c\uc6a9\ud558\uc5ec \uc571\uc744 \uad6c\ub3d9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc989, \uc544\uc774\ud3f0, \uac24\ub7ed\uc2dc \uc2a4\ub9c8\ud2b8\ud3f0, \uac24\ub7ed\uc2dc \ud0dc\ube14\ub9bf, \uc544\uc774\ud328\ub4dc, \ub178\ud2b8\ubd81, \ub370\uc2a4\ud06c\ud1b1, \uc11c\ud53c\uc2a4, \uc6e8\uc77c\ubd81, \ud06c\ub86c\ubd81 \ub4f1 \uc7a5\ube44\uc640 \uae30\uae30\uc5d0 \uc804\ud600 \uad6c\uc560\ubc1b\uc9c0 \uc54a\uace0 \uacf5\uc815\ud55c AI \uc218\ud559 \uad50\uc721\uc744 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."},{question:"\uc5b4\ub5a4 \ud559\ub144\uc774 \uc0ac\uc6a9 \uac00\ub2a5\ud55c\uac00\uc694?",answer:"\ucd08\ub4f1\ud559\uad50 1\ud559\ub144\ubd80\ud130 \uace0\ub4f1\ud559\uad50 3\ud559\ub144\uae4c\uc9c0 \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ucd081, \ucd082\ub294 \ucd9c\uc2dc \uc608\uc815\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."},{question:"\ud544\uae30 \uae30\ub2a5\uc774 \uc874\uc7ac\ud558\ub098\uc694? \ud559\uc0dd \ud544\uae30\ub97c \uc120\uc0dd\ub2d8\uc774 \ubcfc \uc218 \uc788\ub098\uc694?",answer:"\ud544\uae30 \uae30\ub2a5\uc774 \uc644\ubcbd\ud558\uac8c \uad6c\ud604\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ud559\uc0dd\uc740 \ub514\ubc14\uc774\uc2a4\uc5d0\uc11c \uc218\ud559 \ubb38\uc81c \uc704\uc5d0 \ud544\uae30\ub97c \ud558\uba74\uc11c \ubb38\uc81c\ub97c \ud480 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8 \ud544\uae30 \uae30\ub85d\uc740 \ubb38\uc81c\uc640 \ud568\uaed8 \ud55c \ubb38\uc81c \ub2e8\uc704\ub85c \uc2e4\uc2dc\uac04\uc73c\ub85c \uc120\uc0dd\ub2d8 \ub300\uc2dc\ubcf4\ub4dc\uc5d0 \ubc18\uc601\ub418\uc5b4 \uc120\uc0dd\ub2d8\uc774 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."},{question:"\ud559\uc0dd\ub4e4\uc758 \ud559\uc2b5 \ud604\ud669\uc744 \uc120\uc0dd\ub2d8\uc774 \ubcfc \uc218 \uc788\ub098\uc694?",answer:"\uc120\uc0dd\ub2d8\uc774 \ub0b4\uc900 \uc219\uc81c, \ud559\uc0dd\uc774 \ucd94\uac00\uc801\uc73c\ub85c \uc790\uc2b5\ud55c \ubb38\uc81c \ub4f1 \ubaa8\ub4e0 \ud559\uc2b5\ub7c9\uacfc \ud559\uc2b5 \uae30\ub85d\uc744 \uc120\uc0dd\ub2d8\uc774 \uc77c\ubcc4, \uc8fc\ubcc4, \uc6d4\ubcc4\ub85c \ud604\ud669\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."},{question:"\uc7a5\ud559\uae08\uc740 \uc5b4\ub5a4 \uae30\ub2a5\uc778\uac00\uc694?",answer:"\uc218\ud559\ub300\uc655\uc740 \ud559\uc0dd\ub4e4\uc758 \ub3d9\uae30\ubd80\uc5ec\ub97c \uc704\ud574 \uc7a5\ud559\uae08 \uc81c\ub3c4\ub97c \uc6b4\uc601\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc218\ud559 \uc2e4\ub825\uacfc \uc131\uc801\uc5d0 \uad00\uacc4\uc5c6\uc774 AI\uac00 \ucd94\ucc9c\ud574 \uc8fc\ub294 \ub0b4 \uc2e4\ub825\uc5d0 \ub9de\ub294 \ubb38\uc81c\ub97c \uafb8\uc900\ud788 \ud47c\ub2e4\uba74, \ubaa8\ub4e0 \ud559\uc0dd\ub4e4\uc774 \uc608\uc678 \uc5c6\uc774 \ud655\uc815\uc801\uc73c\ub85c \uc7a5\ud559\uae08\uc744 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. **\uc989, \uc131\uc801\uc5d0 \ub530\ub77c \uc7a5\ud559\uae08\uc744 \ubc1b\ub294 \uac83\uc774 \uc544\ub2c8\ub77c, \ubaa8\ub4e0 \ud559\uc0dd\uc774 \ub098\uc758 \ub178\ub825\uc5d0 \ub530\ub77c \uc7a5\ud559\uae08\uc744 \ubc1b\uc744 \uc218 \uc788\ub294 \uc2dc\uc2a4\ud15c\uc785\ub2c8\ub2e4.** \uc7a5\ud559\uae08\uc740 \uc218\ud559\ub300\uc655 \uc571 \ub0b4\uc5d0\uc11c \ub124\uc774\ubc84\ud398\uc774\ub85c \ubcc0\ud658\ud558\uc5ec \uacb0\uc81c \ubc0f \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ud559\uc0dd\ub2f9 \uc6d4\ubcc4\ub85c \ubc1b\uc544 \uac08 \uc218 \uc788\ub294 \ucd5c\ub300\uc758 \uc7a5\ud559\uae08 \uc591\uc740 \ub2e8\uccb4 \ub3c4\uc785\ud558\uc2e4 \ub54c \uc124\uc815\ud558\uc2e4 \uc218 \uc788\uc73c\uba70, **\uc120\uc0dd\ub2d8\uaed8\uc11c \uc124\uc815\ud558\uc2e0 \ud50c\ub79c\uc5d0 \ub530\ub77c \ub9de\ucda4 \uc608\uc0b0 \uc124\uacc4\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4.**"}]})]})},kl=Yt.div`
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
  
  @media (max-width: 1024px) {
    padding-left: 15px;
    padding-right: 15px;
    gap: 15px;
  }
  
  @media (max-width: 480px) {
    padding-left: 10px;
    padding-right: 10px;
    gap: 10px;
  }
  
  @media (max-width: 768px) {
    display: none; /* 데스크탑 띠배너는 모바일에서 숨김 */
  }
`,jl=Yt.div`
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
  
  @media (max-width: 480px) {
    padding: 3px 8px; /* 매우 작은 화면에서는 패딩을 더 줄임 */
  }
  
  @media (max-width: 320px) {
    padding: 2px 5px; /* 320px 이하에서는 패딩을 최소화 */
  }
  
  @media (min-width: 769px) {
    display: none; /* 데스크탑에서는 숨김 */
  }
`,Sl=Yt.div`
  width: 262px;
  justify-content: flex-start;
  align-items: center;
  gap: 3.33px;
  display: inline-flex;
  margin-bottom: 0px;
  
  @media (max-width: 320px) {
    width: auto; /* 320px 이하에서는 너비 자동 조정 */
    gap: 2px; /* 간격 줄임 */
  }
`,El=Yt.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #C0AEF5;
  font-size: 10.67px;
  font-family: ${e=>e.fontFamily||"Pretendard"};
  font-weight: ${e=>"Godo M"===e.fontFamily||"Playwrite CA"===e.fontFamily?"400":"600"};
  line-height: 16px;

  word-wrap: break-word;
  
  @media (max-width: 320px) {
    font-size: 9px; /* 320px 이하에서는 폰트 크기 줄임 */
    line-height: 14px;
  }
`,zl=Yt.div`
  justify-content: center;
  align-items: center;
  gap: 30px;
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 998;
  width: 100%;

  @media (max-width: 1280px) {
    flex-direction: column;
    gap: 20px;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    gap: 15px;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  @media (max-width: 425px) {
    gap: 10px;
    padding: 0 20px;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`,Cl=Yt.div`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  display: flex;
  
  @media (max-width: 480px) {
    gap: 8px; /* 매우 작은 화면에서는 간격을 줄임 */
  }
  
  @media (max-width: 320px) {
    justify-content: flex-start; /* 320px 이하에서는 왼쪽 정렬로 변경 */
    gap: 30px; /* 텍스트와 버튼 간격 30px 유지 */
  }
`,Pl=Yt.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  
  @media (max-width: 480px) {
    gap: 2px; /* 매우 작은 화면에서는 간격을 더 줄임 */
  }
  
  @media (max-width: 320px) {
    gap: 1px; /* 320px 이하에서는 간격을 최소화 */
    flex-shrink: 1; /* 텍스트 영역이 줄어들 수 있도록 설정 */
  }
`,_l=Yt.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 15px;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 22.50px;
  white-space: nowrap;
`,Il=Yt.button`
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
  
  @media (max-width: 480px) {
    height: 24px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 12px;
  }
`,Tl=Yt.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 11px;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 16px;
  white-space: nowrap;
`,Fl=Yt.div`
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  display: flex;
  
  @media (max-width: 1024px) {
    gap: 3px; /* 1024px 이하에서는 간격을 줄임 */
  }
  
  @media (max-width: 768px) {
    display: none; /* 모바일에서만 숨김 */
  }
`,Al=Yt.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #C0AEF5;
  font-size: 16px;
  font-family: ${e=>e.fontFamily||"Pretendard"};
  font-weight: ${e=>"Godo M"===e.fontFamily?"400":"600"};
  line-height: 24px;
  white-space: nowrap;
  
  @media (max-width: 1024px) {
    font-size: 14px; /* 1024px 이하에서는 폰트 크기를 줄임 */
    line-height: 20px;
  }
`,Bl=Yt.div`
  height: 36px;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  display: flex;
  
  @media (max-width: 1200px) {
    justify-content: center; /* 중간 크기 화면에서는 중앙 정렬 */
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 10px;
  }
  
  @media (max-width: 480px) {
    gap: 5px; /* 매우 작은 화면에서는 간격을 더 좁힘 */
  }
`,Ol=Yt.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 30px;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Nl=Yt.button`
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
  
  @media (max-width: 768px) {
    height: 28px;
    padding-left: 16px;
    padding-right: 16px;
  }
`,Rl=Yt.section`
  width: 100%;
  padding: 130px 0;
  background: #F3F4F6;
  overflow: hidden;
`,Dl=Yt.div`
  width: 1280px;
  height: 1116px;
  position: relative;
  background: #F3F4F6;
  overflow: hidden;
  margin: 0 auto;

  @media (max-width: 1280px) {
    width: 100%;
    height: auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  @media (max-width: 768px) {
    padding: 0 15px;
  }
  
  @media (max-width: 425px) {
    padding: 0 10px;
  }
`,Ll=Yt.div`
  left: 50%;
  top: 64px;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12.80px;
  display: inline-flex;
  transform: translateX(-50%);

  @media (max-width: 1280px) {
    position: relative;
    left: auto;
    top: auto;
    text-align: center;
    margin-bottom: 90px;
    transform: none;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 70px;
  }
  
  @media (max-width: 425px) {
    margin-bottom: 60px;
  }
`,Ml=Yt.h2`
  text-align: center;
  color: #33373B;
  font-size: 28.16px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 36.61px;
  word-wrap: break-word;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
  
  @media (max-width: 425px) {
    font-size: 22px;
    line-height: 28px;
  }
`,$l=Yt.p`
  text-align: center;
  color: #8D94A0;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
  
  @media (max-width: 425px) {
    font-size: 13px;
    line-height: 18px;
  }
`,Wl=Yt.div`
  left: 50%;
  top: 300px;
  position: absolute;
  background: #F3F4F6;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  transform: translateX(-50%);

  @media (max-width: 1280px) {
    position: relative;
    left: auto;
    top: auto;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    transform: none;
    display: flex;
    justify-content: flex-start;
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 20px;
  }
  
  @media (max-width: 425px) {
    width: 95%;
    margin: 0 auto;
    overflow-x: auto;
    padding: 0 10px;
  }
`,Ul=Yt.div`
  align-self: stretch;
  height: 65px;
  justify-content: flex-start;
  align-items: center;
  gap: 13px;
  display: inline-flex;

  @media (max-width: 1280px) {
    justify-content: flex-start;
    width: 100%;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    height: auto;
    gap: 20px;
  }
`,Hl=Yt.div`
  width: 234px;
  height: 65px;
  justify-content: center;
  align-items: center;
  display: flex;

  @media (max-width: 1280px) {
    width: 200px;
    height: 60px;
  }
  
  @media (max-width: 768px) {
    width: 180px;
    height: 55px;
  }

  @media (max-width: 425px) {
    width: 100%;
    height: auto;
  }
`,Vl=Yt.div`
  width: 260px;
  height: 65px;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  flex-shrink: 0;

  @media (max-width: 1280px) {
    width: 220px;
    height: 60px;
  }
  
  @media (max-width: 768px) {
    width: 200px;
    height: 55px;
  }

  @media (max-width: 425px) {
    width: 100%;
    height: auto;
  }
`,Yl=Yt.div`
  width: 113.75px;
  height: 72.8px;
  padding-left: 15.6px;
  padding-right: 15.6px;
  padding-top: 10.4px;
  padding-bottom: 10.4px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
  
  @media (max-width: 1280px) {
    width: 100px;
    height: 65px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  
  @media (max-width: 768px) {
    width: 90px;
    height: 60px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 6px;
    padding-bottom: 6px;
  }
  
  @media (max-width: 425px) {
    width: 100%;
    height: auto;
    padding: 10px;
  }
`,Jl=(Yt.div`
  width: 54px;
  height: 16px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #FF6DEB 0%, #8E6EF1 50%, #5F9EFF 100%);
`,Yt.div`
  width: 39px;
  height: 21px;
  position: relative;
  overflow: hidden;
  background: #8D94A0;
`,Yt.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #575C64;
  font-size: 15.6px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 23.4px;
  word-wrap: break-word;
  
  @media (max-width: 1280px) {
    font-size: 14px;
    line-height: 20px;
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;
  }
`),Xl=Yt.div`
  align-self: stretch;
  height: 78px;
  padding-top: 13px;
  padding-bottom: 13px;
  border-bottom: 0.65px #D1D5DB solid;
  justify-content: flex-start;
  align-items: center;
  gap: 13px;
  display: inline-flex;

  @media (max-width: 1280px) {
    justify-content: flex-start;
    width: 100%;
    gap: 10px;
  }
  
  @media (max-width: 768px) {
    gap: 8px;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    height: auto;
    gap: 15px;
    padding: 20px 0;
  }
`,Gl=Yt.div`
  width: 260px;
  padding-left: 26px;
  padding-right: 26px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;
  display: inline-flex;
  flex-shrink: 0;

  @media (max-width: 1280px) {
    width: 220px;
    padding-left: 22px;
    padding-right: 22px;
  }
  
  @media (max-width: 768px) {
    width: 200px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 425px) {
    width: 100%;
    text-align: center;
    align-items: center;
  }
`,Ql=Yt.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  background: linear-gradient(-81deg, #FF6DEB 0%, #8E6EF1 50%, #5F9EFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 18.2px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 27.3px;
  white-space: nowrap;
  
  @media (max-width: 1280px) {
    font-size: 16px;
    line-height: 22px;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
  
  @media (max-width: 425px) {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    white-space: normal;
  }
`,Kl=Yt.div`
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #7A828D;
  font-size: 15.6px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 23.4px;
  white-space: nowrap;
  
  @media (max-width: 1280px) {
    font-size: 14px;
    line-height: 20px;
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;
  }
  
  @media (max-width: 425px) {
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    white-space: normal;
  }
`,Zl=Yt.div`
  width: 234px;
  padding-left: 26px;
  padding-right: 26px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  display: inline-flex;

  @media (max-width: 1280px) {
    width: 200px;
    padding-left: 22px;
    padding-right: 22px;
  }
  
  @media (max-width: 768px) {
    width: 180px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`,ql=(Yt.div`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  background: #835EEB;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::after {
    content: '';
    width: 14.45px;
    height: 9.98px;
    background: white;
    clip-path: polygon(0 50%, 50% 100%, 100% 0, 100% 100%, 0 100%);
  }
`,Yt.div`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  background: #D1D5DB;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::after {
    content: '';
    width: 15.40px;
    height: 15.40px;
    background: white;
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
  }
`,Yt.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 12px;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 18px;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 11px;
    line-height: 16px;
  }
`),es=Yt.div`
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
`,ts=Yt.div`
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
`,ns=Yt.button`
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
`,is=Yt.h2`
  color: #1E2231;
  font-size: 28px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`,rs=Yt.p`
  color: #7A828D;
  font-size: 16px;
  text-align: center;
  margin-bottom: 30px;
  line-height: 1.5;
  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 25px;
  }
`,as=Yt.div`
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
`,os=(Yt.div`
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
  margin-top: -10px; /* 헤더 아래 여백 - 총 30px (40px - 10px) - 위로 70px 이동 */
  position: relative;
  
  @media (max-width: 1024px) {
    width: 100%;
    min-height: 100vh;
    padding: 40px 20px 120px 20px; /* 상단 패딩 조정 */
    gap: 60px;
    margin-top: -10px; /* 위로 70px 이동 */
    align-items: center;
    justify-content: center;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    min-height: 100vh;
    padding: 6px 25px 100px 25px; /* 상단 패딩 조정 */
    gap: 30px;
    margin-top: -16px; /* 위로 70px 이동 (24px - 70px = -46px, 하지만 적절한 값으로 조정) */
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
  }
  
  @media (max-width: 425px) {
    padding: 6px 15px 80px 15px;
    gap: 25px;
    align-items: center;
    justify-content: center;
  }
`),ls=Yt.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  gap: 20px;
  
  /* 1920px 이상에서 위로 30px 이동 */
  @media (min-width: 1920px) {
    transform: translateY(-30px);
  }
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
`,ss=Yt.div`
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
`,ds=Yt.div`
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
`,cs=Yt.div`
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
`,ps=Yt.div`
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
`,us=Yt.div`
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
    margin: 0 auto;
    
    &:hover {
      transform: translate3d(0, -8px, 0) scale(1.03);
      box-shadow: 0px 20px 40px rgba(131, 94, 235, 0.2);
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
    align-items: center;
    gap: 10px;
    justify-content: center;
    
    &:hover {
      transform: translate3d(0, -6px, 0) scale(1.02);
      box-shadow: 0px 15px 30px rgba(131, 94, 235, 0.15);
    }
  }
  
  @media (max-width: 425px) {
    width: 95%;
    max-width: 320px;
    margin: 0 auto;
    padding: 25px;
    align-items: center;
    justify-content: center;
  }
`,xs=(Yt.div`
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
`,Yt.div`
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
`,Yt.div`
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
`,Yt.img`
  width: ${e=>"small"===e.size||"light"===e.iconType?"46.80px":"82px"};
  height: ${e=>"small"===e.size||"light"===e.iconType?"26px":"24.30px"};
  object-fit: contain;
  will-change: transform;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  ${us}:hover & {
    transform: translate3d(0, -2px, 0) scale(1.1);
  }
`,Yt.div`
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
`,Yt.div`
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
`,Yt.div`
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
`,Yt.div`
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
`,Yt.div`
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
`,Yt.div`
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
`,Yt.div`
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
`,Yt.div`
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
`,Yt.div`
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
`,Yt.div`
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
`,Yt.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3px;
`,Yt.div`
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
`,Yt.div`
  color: white;
  font-size: 17px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 25.5px;
  word-wrap: break-word;
  text-align: center;
`,Yt.button`
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
`),fs=(Yt.div`
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
`),hs=Yt.div`
  position: relative;
  width: 160px;
`,ms=Yt.button`
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
`,gs=Yt.div`
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
`,ws=Yt.button`
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
`,bs=Yt.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,ys=Yt.div`
  width: 100%;
  position: relative;
`,vs=Yt.input`
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
`,ks=Yt.div`
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
`,js=Yt.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 6px;
`,Ss=Yt.div`
  font-size: 24px;
  font-weight: 700;
  font-family: 'Pretendard', sans-serif;
`,Es=(Yt.div`
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
`),zs=Yt.div`
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
`,Cs=Yt.div`
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
`,Ps=Yt.div`
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
`,_s=Yt.div`
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
`,Is=Yt.div`
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
`,Ts=Yt.div`
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
`,Fs=Yt.div`
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
`,As=Yt.div`
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
`,Bs=Yt.div`
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
`,Os=Yt.button`
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
`,Ns=Yt.div`
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
`,Rs=Yt.div`
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
`,Ds=(Yt.div`
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
`,Yt.div`
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
`,Yt.div`
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
`,Yt.div`
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
`,Yt.div`
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
`,Yt.div`
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
`,Yt.div`
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
`,Yt.div`
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
`,Yt.div`
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
`,Yt.div`
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
`,Yt.div`
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
    width: 800px; /* 스크롤이 가능하도록 충분히 큰 너비 */
    min-width: 800px;
    max-width: none;
    align-self: flex-start;
    margin-left: 0;
    height: 135px; /* 3행에 맞는 고정 높이 */
    object-fit: cover; /* 이미지 비율 유지하면서 채우기 */
    object-position: left top; /* 왼쪽 상단부터 보이도록 */
  }
`,Yt.div`
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
`,Yt.img`
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
`,Yt.img`
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
  `,Yt.div`
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
`,Yt.div`
  padding: 16px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #E5E7EB;
`,Yt.h3`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 18px;
  color: #835EEB;
  text-align: center;
`,Yt.ul`
  font-size: 14px;
  list-style: none;
  padding: 0;
  margin: 0;
`,Yt.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #F3F4F6;
  
  &:last-child {
    border-bottom: none;
  }
`,Yt.span`
  color: #374151;
`,Yt.span`
  font-weight: 500;
  color: #835EEB;
`,()=>{const[t,n]=(0,e.useState)(!1),[i,r]=(0,e.useState)(!1),[a,o]=(0,e.useState)(!1),[l,s]=(0,e.useState)(!0),[d,c]=(0,e.useState)(30),[p,u]=(0,e.useState)(!1),x=(0,e.useRef)(null);(0,e.useEffect)(()=>{const e=e=>{x.current&&!x.current.contains(e.target)&&u(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),e.useEffect(()=>{const e=setTimeout(()=>{o(!0)},100),t=setTimeout(()=>{n(!0)},800);return()=>{clearTimeout(e),clearTimeout(t)}},[]),(0,e.useEffect)(()=>{window.Swiper&&new window.Swiper(".mySwiper",{slidesPerView:1,spaceBetween:12,pagination:{el:".swiper-pagination",clickable:!0},loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1}})},[]),e.useEffect(()=>{let e=window.scrollY;const t=()=>{const t=window.scrollY;t>e&&t>100?s(!1):t<e&&s(!0),e=t};return window.addEventListener("scroll",t),t(),()=>window.removeEventListener("scroll",t)},[]);const[f,h]=(0,e.useState)(!1),[m,g]=(0,e.useState)(null),w=()=>{h(!1),g(null)},b=i||f;return(0,Ri.jsxs)(as,{children:[(0,Ri.jsxs)(kl,{isVisible:l&&!b,children:[(0,Ri.jsxs)(Fl,{children:[(0,Ri.jsx)(Al,{fontFamily:"Godo M",children:"\uc218\ud559\ub300\uc655"}),(0,Ri.jsx)(Al,{children:"CLASS"}),(0,Ri.jsx)(Al,{fontFamily:"Playwrite CA",children:"for"}),(0,Ri.jsx)(Al,{children:"School"})]}),(0,Ri.jsxs)(Bl,{children:[(0,Ri.jsx)(Ol,{children:"\ud639\uc2dc \ud559\uad50 \uc120\uc0dd\ub2d8\uc774\uc2e0\uac00\uc694?"}),(0,Ri.jsx)(Nl,{onClick:()=>{window.open("http://pf.kakao.com/_YEuxbn","_blank","noopener,noreferrer")},children:(0,Ri.jsx)(ql,{children:"\ud559\uad50 \ub3c4\uc785 \ubb38\uc758\ud558\uae30"})})]})]}),(0,Ri.jsx)(jl,{isVisible:l&&!b,children:(0,Ri.jsxs)(Cl,{children:[(0,Ri.jsxs)(Pl,{children:[(0,Ri.jsxs)(Sl,{children:[(0,Ri.jsx)(El,{fontFamily:"Godo M",children:"\uc218\ud559\ub300\uc655"}),(0,Ri.jsx)(El,{children:"CLASS"}),(0,Ri.jsx)(El,{fontFamily:"Playwrite CA",children:"for"}),(0,Ri.jsx)(El,{children:"School"})]}),(0,Ri.jsx)(_l,{children:"\ud639\uc2dc \ud559\uad50 \uc120\uc0dd\ub2d8\uc774\uc2e0\uac00\uc694?"})]}),(0,Ri.jsx)(Il,{onClick:()=>{window.open("http://pf.kakao.com/_YEuxbn","_blank","noopener,noreferrer")},children:(0,Ri.jsx)(Tl,{children:"\ud559\uad50 \ub3c4\uc785 \ubb38\uc758\ud558\uae30"})})]})}),(0,Ri.jsx)(es,{isOpen:f,onClick:w,children:(0,Ri.jsxs)(ts,{onClick:e=>e.stopPropagation(),children:[(0,Ri.jsx)(ns,{onClick:w,children:"\xd7"}),(0,Ri.jsxs)(is,{children:["basic"===m?"\uc218\ud559\ub300\uc655 Light":"\uc218\ud559\ub300\uc655 Plus"," \ud50c\ub79c"]}),(0,Ri.jsxs)(rs,{children:["\ub0b4 \uc608\uc0c1 \uc218\uc5c5\ub8cc\ub97c \ud655\uc778\ud574 \ubcf4\uc138\uc694",(0,Ri.jsx)("br",{}),"basic"===m?"Light":"Plus"," \ud50c\ub79c \uae30\uc900, 3\uac1c\uc6d4 \ubb34\ub8cc\uccb4\ud5d8 \ud3ec\ud568"]}),(0,Ri.jsx)(fs,{children:(0,Ri.jsxs)(hs,{ref:x,children:[(0,Ri.jsxs)(ms,{isOpen:p,onClick:()=>{u(!p)},children:[d,"\uba85"]}),(0,Ri.jsx)(gs,{isOpen:p,children:[10,20,30,40,50,60,70,80,90,100].map(e=>(0,Ri.jsxs)(ws,{onClick:()=>(c(e),void u(!1)),children:[e,"\uba85"]},e))})]})}),(0,Ri.jsxs)(bs,{children:[(0,Ri.jsxs)(ks,{children:[(0,Ri.jsxs)(js,{children:[d,"\uba85"]}),(0,Ri.jsxs)(Ss,{children:["\uc6d4 ",function(e){return e*("plus"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:m)?12900:6900)}(d,m).toLocaleString(),"\uc6d0"]})]}),(0,Ri.jsx)(ys,{children:(0,Ri.jsx)(vs,{type:"range",min:"10",max:"100",step:"5",value:d,progress:(d-10)/90*100,onChange:e=>{c(parseInt(e.target.value))}})})]})]})}),(0,Ri.jsxs)(os,{children:[(0,Ri.jsxs)(ls,{children:[(0,Ri.jsxs)(ss,{isVisible:a,children:[(0,Ri.jsx)(ds,{children:"\uc218\ud559\ub300\uc655 CLASS"}),(0,Ri.jsx)(ds,{color:"#835EEB",fontFamily:"Playwrite CA",children:"for"}),(0,Ri.jsx)(ds,{children:"Academy"})]}),(0,Ri.jsxs)(cs,{isVisible:a,children:["AI\ub85c \uc2dc\uc791\ud558\ub294",(0,Ri.jsx)("br",{}),"1:1 \uc2e4\uc2dc\uac04 \ubc00\ucc29 \uad00\ub9ac"]}),(0,Ri.jsxs)(ps,{isVisible:a,children:["\ub2e8\uc21c\ud55c \ubb38\uc81c\uc740\ud589\uc744 \ub118\uc5b4, AI \ub9de\ucda4\ud615 \uc218\ud559 \ud559\uc2b5 \uc2dc\uc2a4\ud15c\uc744",(0,Ri.jsx)("br",{}),"\ud559\uc6d0\uc5d0 \uccb4\uacc4\uc801\uc73c\ub85c \ub3c4\uc785\ud574 \ubcf4\uc138\uc694"]})]}),(0,Ri.jsxs)(zl,{children:[(0,Ri.jsxs)("div",{style:{width:"360px",paddingLeft:"30px",paddingRight:"30px",paddingTop:"20px",paddingBottom:"20px",background:"white",overflow:"hidden",borderRadius:"20px",outline:"1px #D1D5DB solid",outlineOffset:"-1px",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",gap:"10px",display:"inline-flex",position:"relative",zIndex:998},children:[(0,Ri.jsxs)("div",{style:{width:"300px",paddingTop:"10px",paddingBottom:"10px",overflow:"hidden",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",gap:"8px",display:"flex"},children:[(0,Ri.jsxs)("div",{style:{alignSelf:"stretch",height:"27px",justifyContent:"space-between",alignItems:"center",display:"inline-flex"},children:[(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#835EEB",fontSize:"27.33px",fontFamily:"Pretendard",fontWeight:700,lineHeight:"27.33px",wordWrap:"break-word"},children:"\uc218\ud559\ub300\uc655"}),(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#835EEB",fontSize:"27.33px",fontFamily:"Pretendard",fontWeight:500,lineHeight:"27.33px",wordWrap:"break-word",marginLeft:"-28px"},children:"FREE"}),(0,Ri.jsx)("a",{href:"https://class.iammathking.com/",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",position:"relative",zIndex:1e3},children:(0,Ri.jsx)("div",{style:{width:"100px",height:"30px",paddingLeft:"8.49px",paddingRight:"8.49px",paddingTop:"6.37px",paddingBottom:"6.37px",background:"#E8E1FB",overflow:"hidden",borderRadius:"10px",justifyContent:"center",alignItems:"center",gap:"9px",display:"flex",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 2px 8px rgba(131, 94, 235, 0.2)",position:"relative",zIndex:1001},onMouseEnter:e=>{e.currentTarget.style.background="#D4C7F7",e.currentTarget.style.transform="translateY(-2px)",e.currentTarget.style.boxShadow="0 4px 16px rgba(131, 94, 235, 0.3)"},onMouseLeave:e=>{e.currentTarget.style.background="#E8E1FB",e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="0 2px 8px rgba(131, 94, 235, 0.2)"},children:(0,Ri.jsx)("div",{style:{textAlign:"center",justifyContent:"center",display:"flex",flexDirection:"column",color:"#835EEB",fontSize:"13px",fontFamily:"Pretendard",fontWeight:700,lineHeight:"19.50px",wordWrap:"break-word"},children:"\uc9c0\uae08 \uc2dc\uc791\ud558\uae30"})})})]}),(0,Ri.jsx)("div",{style:{textAlign:"center",justifyContent:"center",display:"flex",flexDirection:"column",color:"#7A828D",fontSize:"14px",fontFamily:"Pretendard",fontWeight:500,lineHeight:"21px",wordWrap:"break-word"},children:"\ubb34\ub8cc \ud50c\ub79c"}),(0,Ri.jsx)("div",{style:{opacity:"0.90",justifyContent:"center",display:"flex",flexDirection:"column",color:"#33373B",fontSize:"32px",fontFamily:"Pretendard",fontWeight:700,lineHeight:"40px",wordWrap:"break-word"},children:"\ubb34\ub8cc \uc81c\uacf5"})]}),(0,Ri.jsxs)("div",{style:{width:"300px",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:"10px",display:"flex"},children:[(0,Ri.jsxs)("div",{style:{width:"300px",height:"30px",justifyContent:"flex-start",alignItems:"center",gap:"10px",display:"inline-flex"},children:[(0,Ri.jsx)("img",{src:"/Assets/icon/check-1.svg",alt:"check",style:{width:"24px",height:"24px"}}),(0,Ri.jsxs)("div",{style:{justifyContent:"flex-start",alignItems:"center",gap:"5px",display:"flex"},children:[(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#7A828D",fontSize:"14px",fontFamily:"Pretendard",fontWeight:500,lineHeight:"21px",wordWrap:"break-word"},children:"\uc778\uc6d0 \uc81c\ud55c"}),(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#835EEB",fontSize:"14px",fontFamily:"Pretendard",fontWeight:700,lineHeight:"21px",wordWrap:"break-word"},children:"\uc5c6\uc74c"})]})]}),(0,Ri.jsxs)("div",{style:{alignSelf:"stretch",height:"30px",justifyContent:"flex-start",alignItems:"center",gap:"10px",display:"inline-flex"},children:[(0,Ri.jsx)("img",{src:"/Assets/icon/check-1.svg",alt:"check",style:{width:"24px",height:"24px"}}),(0,Ri.jsxs)("div",{style:{justifyContent:"flex-start",alignItems:"center",gap:"5px",display:"flex"},children:[(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#7A828D",fontSize:"14px",fontFamily:"Pretendard",fontWeight:500,lineHeight:"21px",wordWrap:"break-word"},children:"\ud559\uc2b5\uc9c0 \uc81c\uc791 "}),(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#835EEB",fontSize:"14px",fontFamily:"Pretendard",fontWeight:600,lineHeight:"21px",wordWrap:"break-word"},children:"\ubb34\uc81c\ud55c"})]})]}),(0,Ri.jsxs)("div",{style:{alignSelf:"stretch",height:"30px",justifyContent:"flex-start",alignItems:"center",gap:"10px",display:"inline-flex"},children:[(0,Ri.jsx)("img",{src:"/Assets/icon/check-2.svg",alt:"check",style:{width:"24px",height:"24px"}}),(0,Ri.jsxs)("div",{style:{justifyContent:"flex-start",alignItems:"center",gap:"5px",display:"flex"},children:[(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#7A828D",fontSize:"14px",fontFamily:"Pretendard",fontWeight:500,lineHeight:"21px",wordWrap:"break-word"},children:"AI \ud544\uae30 \ucc44\uc810"}),(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#835EEB",fontSize:"14px",fontFamily:"Pretendard",fontWeight:600,lineHeight:"21px",wordWrap:"break-word"},children:"\ud544\uae30 \ubd84\uc11d \uc81c\uacf5"})]})]}),(0,Ri.jsxs)("div",{style:{alignSelf:"stretch",height:"30px",justifyContent:"flex-start",alignItems:"center",gap:"10px",display:"inline-flex"},children:[(0,Ri.jsx)("img",{src:"/Assets/icon/check-2.svg",alt:"check",style:{width:"24px",height:"24px"}}),(0,Ri.jsxs)("div",{style:{justifyContent:"flex-start",alignItems:"center",gap:"5px",display:"flex"},children:[(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#7A828D",fontSize:"14px",fontFamily:"Pretendard",fontWeight:500,lineHeight:"21px",wordWrap:"break-word"},children:"\uc720\uc0ac\ubb38\uc81c"}),(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#835EEB",fontSize:"14px",fontFamily:"Pretendard",fontWeight:600,lineHeight:"21px",wordWrap:"break-word"},children:"\uac80\uc0c9 \uae30\ub2a5 \uc81c\uacf5"})]})]}),(0,Ri.jsxs)("div",{style:{alignSelf:"stretch",height:"30px",justifyContent:"flex-start",alignItems:"center",gap:"10px",display:"inline-flex"},children:[(0,Ri.jsx)("img",{src:"/Assets/icon/check-1.svg",alt:"check",style:{width:"24px",height:"24px"}}),(0,Ri.jsxs)("div",{style:{justifyContent:"flex-start",alignItems:"center",gap:"5px",display:"flex"},children:[(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#7A828D",fontSize:"14px",fontFamily:"Pretendard",fontWeight:500,lineHeight:"21px",wordWrap:"break-word"},children:"\ucd94\uac00 \uae30\ub2a5"}),(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#835EEB",fontSize:"14px",fontFamily:"Pretendard",fontWeight:600,lineHeight:"21px",wordWrap:"break-word"},children:"\uae30\ubcf8 \uc81c\uacf5"})]})]})]})]}),(0,Ri.jsxs)("div",{style:{width:"360px",paddingLeft:"30px",paddingRight:"30px",paddingTop:"20px",paddingBottom:"20px",background:"white",overflow:"hidden",borderRadius:"20px",outline:"1px #835EEB solid",outlineOffset:"-1px",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",gap:"10px",display:"inline-flex",position:"relative",zIndex:998},children:[(0,Ri.jsxs)("div",{style:{width:"300px",paddingTop:"10px",paddingBottom:"10px",overflow:"hidden",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",gap:"8px",display:"flex"},children:[(0,Ri.jsxs)("div",{style:{alignSelf:"stretch",height:"27px",justifyContent:"space-between",alignItems:"center",display:"inline-flex"},children:[(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#835EEB",fontSize:"27.33px",fontFamily:"Pretendard",fontWeight:700,lineHeight:"27.33px",wordWrap:"break-word"},children:"\uc218\ud559\ub300\uc655"}),(0,Ri.jsx)("img",{src:"/Assets/icon/light.svg",alt:"light",style:{width:"44px",height:"44px"}}),(0,Ri.jsx)("div",{style:{flex:1}}),(0,Ri.jsx)("a",{href:"https://s.tosspayments.com/BmOuRkqIaKY",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",position:"relative",zIndex:1e3},children:(0,Ri.jsx)("div",{style:{width:"100px",height:"30px",paddingLeft:"8.49px",paddingRight:"8.49px",paddingTop:"6.37px",paddingBottom:"6.37px",background:"#E8E1FB",overflow:"hidden",borderRadius:"10px",justifyContent:"center",alignItems:"center",gap:"9px",display:"flex",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 2px 8px rgba(131, 94, 235, 0.2)",position:"relative",zIndex:1e3},onMouseEnter:e=>{e.currentTarget.style.background="#D4C7F7",e.currentTarget.style.transform="translateY(-2px)",e.currentTarget.style.boxShadow="0 4px 16px rgba(131, 94, 235, 0.3)"},onMouseLeave:e=>{e.currentTarget.style.background="#E8E1FB",e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="0 2px 8px rgba(131, 94, 235, 0.2)"},children:(0,Ri.jsx)("div",{style:{textAlign:"center",justifyContent:"center",display:"flex",flexDirection:"column",color:"#835EEB",fontSize:"13px",fontFamily:"Pretendard",fontWeight:700,lineHeight:"19.50px",wordWrap:"break-word"},children:"\uc9c0\uae08 \uc2dc\uc791\ud558\uae30"})})})]}),(0,Ri.jsx)("div",{style:{textAlign:"center",justifyContent:"center",display:"flex",flexDirection:"column",color:"#7A828D",fontSize:"14px",fontFamily:"Pretendard",fontWeight:500,lineHeight:"21px",wordWrap:"break-word"},children:"\uae30\ubcf8 AI \ud50c\ub79c"}),(0,Ri.jsx)("div",{style:{opacity:"0.90",justifyContent:"center",display:"flex",flexDirection:"column",color:"#33373B",fontSize:"32px",fontFamily:"Pretendard",fontWeight:700,lineHeight:"40px",wordWrap:"break-word"},children:"\uc6d4 99,000\uc6d0"})]}),(0,Ri.jsxs)("div",{style:{width:"300px",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:"10px",display:"flex"},children:[(0,Ri.jsxs)("div",{style:{width:"300px",height:"30px",justifyContent:"flex-start",alignItems:"center",gap:"10px",display:"inline-flex"},children:[(0,Ri.jsx)("img",{src:"/Assets/icon/check-1.svg",alt:"check",style:{width:"24px",height:"24px"}}),(0,Ri.jsxs)("div",{style:{width:"160px",justifyContent:"flex-start",alignItems:"center",gap:"5px",display:"flex"},children:[(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#7A828D",fontSize:"14px",fontFamily:"Pretendard",fontWeight:500,lineHeight:"21px",wordWrap:"break-word"},children:"\uc778\uc6d0 \uc81c\ud55c"}),(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#835EEB",fontSize:"14px",fontFamily:"Pretendard",fontWeight:700,lineHeight:"21px",wordWrap:"break-word"},children:"30\uba85"})]})]}),(0,Ri.jsxs)("div",{style:{alignSelf:"stretch",height:"30px",justifyContent:"flex-start",alignItems:"center",gap:"10px",display:"inline-flex"},children:[(0,Ri.jsx)("div",{style:{width:"24px",height:"24px",position:"relative",overflow:"hidden"},children:(0,Ri.jsx)("img",{src:"/Assets/icon/check-1.svg",alt:"check",style:{width:"24px",height:"24px"}})}),(0,Ri.jsxs)("div",{style:{width:"160px",justifyContent:"flex-start",alignItems:"center",gap:"5px",display:"flex"},children:[(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#7A828D",fontSize:"14px",fontFamily:"Pretendard",fontWeight:500,lineHeight:"21px",wordWrap:"break-word"},children:"\ub9e4\ub2ec \uc7a5\ud559\uae08"}),(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#835EEB",fontSize:"14px",fontFamily:"Pretendard",fontWeight:700,lineHeight:"21px",wordWrap:"break-word"},children:"30,000\uc6d0"})]})]}),(0,Ri.jsxs)("div",{style:{alignSelf:"stretch",height:"30px",justifyContent:"flex-start",alignItems:"center",gap:"10px",display:"inline-flex"},children:[(0,Ri.jsx)("div",{style:{width:"24px",height:"24px",position:"relative",overflow:"hidden"},children:(0,Ri.jsx)("img",{src:"/Assets/icon/check-1.svg",alt:"check",style:{width:"24px",height:"24px"}})}),(0,Ri.jsxs)("div",{style:{justifyContent:"flex-start",alignItems:"center",gap:"5px",display:"flex"},children:[(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#7A828D",fontSize:"14px",fontFamily:"Pretendard",fontWeight:500,lineHeight:"21px",wordWrap:"break-word"},children:"\ubb34\uc81c\ud55c \ubb38\uc81c \ud480\uae30"}),(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#835EEB",fontSize:"14px",fontFamily:"Pretendard",fontWeight:700,lineHeight:"21px",wordWrap:"break-word"},children:"8\ub9cc \uac1c\uc758 \ucf58\ud150\uce20 \uc81c\uacf5"})]})]}),(0,Ri.jsxs)("div",{style:{alignSelf:"stretch",height:"30px",justifyContent:"flex-start",alignItems:"center",gap:"10px",display:"inline-flex"},children:[(0,Ri.jsx)("div",{style:{width:"24px",height:"24px",position:"relative",overflow:"hidden"},children:(0,Ri.jsx)("img",{src:"/Assets/icon/check-1.svg",alt:"check",style:{width:"24px",height:"24px"}})}),(0,Ri.jsxs)("div",{style:{width:"160px",justifyContent:"flex-start",alignItems:"center",gap:"5px",display:"flex"},children:[(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#7A828D",fontSize:"14px",fontFamily:"Pretendard",fontWeight:500,lineHeight:"21px",wordWrap:"break-word"},children:"AI \ud544\uae30 \ucc44\uc810"}),(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#835EEB",fontSize:"14px",fontFamily:"Pretendard",fontWeight:700,lineHeight:"21px",wordWrap:"break-word"},children:"\uac80\uc0c9 \uae30\ub2a5 \uc81c\uacf5"})]})]}),(0,Ri.jsxs)("div",{style:{alignSelf:"stretch",height:"30px",justifyContent:"flex-start",alignItems:"center",gap:"10px",display:"inline-flex"},children:[(0,Ri.jsx)("div",{style:{width:"24px",height:"24px",position:"relative",overflow:"hidden"},children:(0,Ri.jsx)("img",{src:"/Assets/icon/check-1.svg",alt:"check",style:{width:"24px",height:"24px"}})}),(0,Ri.jsxs)("div",{style:{width:"160px",justifyContent:"flex-start",alignItems:"center",gap:"5px",display:"flex"},children:[(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#7A828D",fontSize:"14px",fontFamily:"Pretendard",fontWeight:500,lineHeight:"21px",wordWrap:"break-word"},children:"\uc720\uc0ac\ubb38\uc81c"}),(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#835EEB",fontSize:"14px",fontFamily:"Pretendard",fontWeight:700,lineHeight:"21px",wordWrap:"break-word"},children:"\uac80\uc0c9 \uae30\ub2a5 \uc81c\uacf5"})]})]})]})]}),(0,Ri.jsxs)("div",{style:{width:"360px",paddingLeft:"30px",paddingRight:"30px",paddingTop:"20px",paddingBottom:"20px",background:"#F3EFFD",overflow:"hidden",borderRadius:"20px",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",gap:"10px",display:"inline-flex",position:"relative",zIndex:998},children:[(0,Ri.jsxs)("div",{style:{width:"300px",paddingTop:"10px",paddingBottom:"10px",overflow:"hidden",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",gap:"8px",display:"flex"},children:[(0,Ri.jsxs)("div",{style:{alignSelf:"stretch",height:"27px",justifyContent:"space-between",alignItems:"center",display:"inline-flex",position:"relative"},children:[(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#835EEB",fontSize:"27.33px",fontFamily:"Pretendard",fontWeight:700,lineHeight:"27.33px",wordWrap:"break-word"},children:"\uc218\ud559\ub300\uc655"}),(0,Ri.jsx)("img",{src:"/Assets/icon/light.svg",alt:"light",style:{width:"44px",height:"44px"}}),(0,Ri.jsx)("div",{style:{flex:1,pointerEvents:"none"}}),(0,Ri.jsx)("a",{href:"https://s.tosspayments.com/BmOuQ2TwwtX",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",position:"relative",zIndex:1004,display:"block",width:"100px",height:"30px"},children:(0,Ri.jsx)("div",{style:{width:"100%",height:"100%",paddingLeft:"8.49px",paddingRight:"8.49px",paddingTop:"6.37px",paddingBottom:"6.37px",background:"#835EEB",overflow:"hidden",borderRadius:"10px",justifyContent:"center",alignItems:"center",gap:"9px",display:"flex",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 2px 8px rgba(131, 94, 235, 0.3)",position:"relative",zIndex:1004},onMouseEnter:e=>{e.currentTarget.style.background="#6B4BC7",e.currentTarget.style.transform="translateY(-2px)",e.currentTarget.style.boxShadow="0 4px 16px rgba(131, 94, 235, 0.4)"},onMouseLeave:e=>{e.currentTarget.style.background="#835EEB",e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="0 2px 8px rgba(131, 94, 235, 0.3)"},children:(0,Ri.jsx)("div",{style:{textAlign:"center",justifyContent:"center",display:"flex",flexDirection:"column",color:"#F3EFFD",fontSize:"13px",fontFamily:"Pretendard",fontWeight:700,lineHeight:"19.50px",wordWrap:"break-word"},children:"\uc9c0\uae08 \uc2dc\uc791\ud558\uae30"})})})]}),(0,Ri.jsx)("div",{style:{textAlign:"center",justifyContent:"center",display:"flex",flexDirection:"column",color:"#7A828D",fontSize:"14px",fontFamily:"Pretendard",fontWeight:500,lineHeight:"21px",wordWrap:"break-word"},children:"\uae30\ubcf8 AI \ud50c\ub79c"}),(0,Ri.jsx)("div",{style:{opacity:"0.90",justifyContent:"center",display:"flex",flexDirection:"column",color:"#33373B",fontSize:"32px",fontFamily:"Pretendard",fontWeight:700,lineHeight:"40px",wordWrap:"break-word"},children:"\uc6d4 199,000\uc6d0"})]}),(0,Ri.jsxs)("div",{style:{width:"300px",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:"10px",display:"flex"},children:[(0,Ri.jsxs)("div",{style:{width:"300px",height:"30px",justifyContent:"flex-start",alignItems:"center",gap:"10px",display:"inline-flex"},children:[(0,Ri.jsx)("div",{style:{width:"24px",height:"24px",position:"relative",overflow:"hidden"},children:(0,Ri.jsx)("img",{src:"/Assets/icon/check-1.svg",alt:"check",style:{width:"24px",height:"24px"}})}),(0,Ri.jsxs)("div",{style:{width:"160px",justifyContent:"flex-start",alignItems:"center",gap:"5px",display:"flex"},children:[(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#7A828D",fontSize:"14px",fontFamily:"Pretendard",fontWeight:500,lineHeight:"21px",wordWrap:"break-word"},children:"\uc778\uc6d0 \uc81c\ud55c"}),(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#835EEB",fontSize:"14px",fontFamily:"Pretendard",fontWeight:700,lineHeight:"21px",wordWrap:"break-word"},children:"\ubb34\uc81c\ud55c"})]})]}),(0,Ri.jsxs)("div",{style:{alignSelf:"stretch",height:"30px",justifyContent:"flex-start",alignItems:"center",gap:"10px",display:"inline-flex"},children:[(0,Ri.jsx)("div",{style:{width:"24px",height:"24px",position:"relative",overflow:"hidden"},children:(0,Ri.jsx)("img",{src:"/Assets/icon/check-1.svg",alt:"check",style:{width:"24px",height:"24px"}})}),(0,Ri.jsxs)("div",{style:{width:"160px",justifyContent:"flex-start",alignItems:"center",gap:"5px",display:"flex"},children:[(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#7A828D",fontSize:"14px",fontFamily:"Pretendard",fontWeight:500,lineHeight:"21px",wordWrap:"break-word"},children:"\ub9e4\ub2ec \uc7a5\ud559\uae08"}),(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#835EEB",fontSize:"14px",fontFamily:"Pretendard",fontWeight:700,lineHeight:"21px",wordWrap:"break-word"},children:"30,000\uc6d0"})]})]}),(0,Ri.jsxs)("div",{style:{alignSelf:"stretch",height:"30px",justifyContent:"flex-start",alignItems:"center",gap:"10px",display:"inline-flex"},children:[(0,Ri.jsx)("div",{style:{width:"24px",height:"24px",position:"relative",overflow:"hidden"},children:(0,Ri.jsx)("img",{src:"/Assets/icon/check-1.svg",alt:"check",style:{width:"24px",height:"24px"}})}),(0,Ri.jsxs)("div",{style:{justifyContent:"flex-start",alignItems:"center",gap:"5px",display:"flex"},children:[(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#7A828D",fontSize:"14px",fontFamily:"Pretendard",fontWeight:500,lineHeight:"21px",wordWrap:"break-word"},children:"\ubb34\uc81c\ud55c \ubb38\uc81c \ud480\uae30"}),(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#835EEB",fontSize:"14px",fontFamily:"Pretendard",fontWeight:700,lineHeight:"21px",wordWrap:"break-word"},children:"8\ub9cc \uac1c\uc758 \ucf58\ud150\uce20 \uc81c\uacf5"})]})]}),(0,Ri.jsxs)("div",{style:{alignSelf:"stretch",height:"30px",justifyContent:"flex-start",alignItems:"center",gap:"10px",display:"inline-flex"},children:[(0,Ri.jsx)("div",{style:{width:"24px",height:"24px",position:"relative",overflow:"hidden"},children:(0,Ri.jsx)("img",{src:"/Assets/icon/check-1.svg",alt:"check",style:{width:"24px",height:"24px"}})}),(0,Ri.jsxs)("div",{style:{width:"160px",justifyContent:"flex-start",alignItems:"center",gap:"5px",display:"flex"},children:[(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#7A828D",fontSize:"14px",fontFamily:"Pretendard",fontWeight:500,lineHeight:"21px",wordWrap:"break-word"},children:"AI \ud544\uae30 \ucc44\uc810"}),(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#835EEB",fontSize:"14px",fontFamily:"Pretendard",fontWeight:700,lineHeight:"21px",wordWrap:"break-word"},children:"\uac80\uc0c9 \uae30\ub2a5 \uc81c\uacf5"})]})]}),(0,Ri.jsxs)("div",{style:{alignSelf:"stretch",height:"30px",justifyContent:"flex-start",alignItems:"center",gap:"10px",display:"inline-flex"},children:[(0,Ri.jsx)("div",{style:{width:"24px",height:"24px",position:"relative",overflow:"hidden"},children:(0,Ri.jsx)("img",{src:"/Assets/icon/check-1.svg",alt:"check",style:{width:"24px",height:"24px"}})}),(0,Ri.jsxs)("div",{style:{width:"160px",justifyContent:"flex-start",alignItems:"center",gap:"5px",display:"flex"},children:[(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#7A828D",fontSize:"14px",fontFamily:"Pretendard",fontWeight:500,lineHeight:"21px",wordWrap:"break-word"},children:"\uc720\uc0ac\ubb38\uc81c"}),(0,Ri.jsx)("div",{style:{justifyContent:"center",display:"flex",flexDirection:"column",color:"#835EEB",fontSize:"14px",fontFamily:"Pretendard",fontWeight:700,lineHeight:"21px",wordWrap:"break-word"},children:"\uac80\uc0c9 \uae30\ub2a5 \uc81c\uacf5"})]})]})]})]})]}),(0,Ri.jsx)(xs,{onClick:()=>{const e=document.querySelector("[data-trial-section]");e&&e.scrollIntoView({behavior:"smooth",block:"start"})},"aria-label":"\ub2e4\uc74c \uc139\uc158\uc73c\ub85c \uc2a4\ud06c\ub864",children:(0,Ri.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Ri.jsx)("path",{d:"M7 10L12 15L17 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),"      "]}),(0,Ri.jsxs)(Es,{"data-trial-section":!0,children:[(0,Ri.jsx)(As,{children:"\ubb34\ub8cc \uccb4\ud5d8 \uc2e0\uccad \ubc29\ubc95"}),(0,Ri.jsx)(Bs,{children:"\uc218\ud559\ub300\uc655 CLASS\ub97c \uac04\ud3b8\ud558\uac8c \uccb4\ud5d8\ud574\ubcf4\uc138\uc694"}),(0,Ri.jsxs)(zs,{children:[(0,Ri.jsxs)(Cs,{children:[(0,Ri.jsxs)(Ps,{children:[(0,Ri.jsx)(_s,{children:"01"}),(0,Ri.jsxs)(Is,{children:["\uccb4\ud5d8 \uc2e0\uccad \uc2dc, ",(0,Ri.jsx)("br",{}),"\ubb34\ub8cc \uccb4\ud5d8 \uacc4\uc815\uc774 \ubb38\uc790\ub85c \uc548\ub0b4\ub3fc\uc694"]})]}),(0,Ri.jsx)(Ts,{children:(0,Ri.jsxs)(Fs,{children:["\uccb4\ud5d8 \uc2e0\uccad \uc644\ub8cc \ud6c4",(0,Ri.jsx)("br",{}),"\uc989\uc2dc \uc120\uc0dd\ub2d8\uacfc \ud559\uc0dd\uc6a9 \uacc4\uc815 \uc815\ubcf4\uac00 \ubb38\uc790\ub85c \ubc1c\uc1a1\ub429\ub2c8\ub2e4.",(0,Ri.jsx)("br",{}),"\ubcc4\ub3c4\uc758 \ubcf5\uc7a1\ud55c \uac00\uc785 \uc808\ucc28 \uc5c6\uc774 \ubc14\ub85c \uccb4\ud5d8\uc744 \uc2dc\uc791\ud560 \uc218 \uc788\uc5b4\uc694."]})}),(0,Ri.jsx)(Os,{onClick:()=>r(!0),children:(0,Ri.jsx)(Ns,{children:"\ubb34\ub8cc \uccb4\ud5d8 \uc2dc\uc791\ud558\uae30"})})]}),(0,Ri.jsx)(Rs,{children:(0,Ri.jsx)("img",{src:"/Pricing/\ubb34\ub8cc\uccb4\ud5d8 01.png",alt:"\ubb34\ub8cc\uccb4\ud5d8 01",style:{width:"100%",height:"100%",objectFit:"cover"}})})]}),(0,Ri.jsxs)(zs,{children:[(0,Ri.jsxs)(Cs,{children:[(0,Ri.jsxs)(Ps,{children:[(0,Ri.jsx)(_s,{children:"02"}),(0,Ri.jsx)(Is,{children:"\uc120\uc0dd\ub2d8\uc6a9 \uacc4\uc815\uc5d0 \ub85c\uadf8\uc778"})]}),(0,Ri.jsx)(Ts,{children:(0,Ri.jsxs)(Fs,{children:["\ubc1b\uc73c\uc2e0 \uc120\uc0dd\ub2d8\uc6a9 \uacc4\uc815 \uc815\ubcf4\ub85c",(0,Ri.jsx)("br",{}),"\uc6f9\uc0ac\uc774\ud2b8\uc5d0 \uc811\uc18d\ud558\uc5ec \ub85c\uadf8\uc778\ud558\uc138\uc694.",(0,Ri.jsx)("br",{}),"\ud559\uc0dd \uad00\ub9ac\uc640 \ud559\uc2b5 \ud604\ud669\uc744",(0,Ri.jsx)("br",{}),"\ud55c\ub208\uc5d0 \ud655\uc778\ud560 \uc218 \uc788\ub294 \ub300\uc2dc\ubcf4\ub4dc\uac00 \uc81c\uacf5\ub429\ub2c8\ub2e4."]})})]}),(0,Ri.jsx)(Rs,{children:(0,Ri.jsx)("img",{src:"/Pricing/\ubb34\ub8cc\uccb4\ud5d8 02.png",alt:"\ubb34\ub8cc\uccb4\ud5d8 02",style:{width:"100%",height:"100%",objectFit:"cover"}})})]}),(0,Ri.jsxs)(zs,{children:[(0,Ri.jsxs)(Cs,{children:[(0,Ri.jsxs)(Ps,{children:[(0,Ri.jsx)(_s,{children:"03"}),(0,Ri.jsx)(Is,{children:"\ud559\uc0dd\uc6a9 \uacc4\uc815\uc5d0 \ub85c\uadf8\uc778"})]}),(0,Ri.jsx)(Ts,{children:(0,Ri.jsxs)(Fs,{children:["\ud559\uc0dd\ub4e4\uc740 \ubaa8\ubc14\uc77c \uc571\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud558\uc5ec",(0,Ri.jsx)("br",{}),"\uacc4\uc815 \uc815\ubcf4\ub85c \ub85c\uadf8\uc778\ud569\ub2c8\ub2e4.",(0,Ri.jsx)("br",{}),"\uc9c1\uad00\uc801\uc778 \uc778\ud130\ud398\uc774\uc2a4\ub85c \ub204\uad6c\ub098 \uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc5b4\uc694."]})})]}),(0,Ri.jsx)(Rs,{children:(0,Ri.jsx)("img",{src:"/Pricing/\ubb34\ub8cc\uccb4\ud5d8 03.png",alt:"\ubb34\ub8cc\uccb4\ud5d8 03",style:{width:"100%",height:"100%",objectFit:"cover"}})})]}),(0,Ri.jsxs)(zs,{children:[(0,Ri.jsxs)(Cs,{children:[(0,Ri.jsxs)(Ps,{children:[(0,Ri.jsx)(_s,{children:"04"}),(0,Ri.jsxs)(Is,{children:["\ud544\uc694\ud55c \uacbd\uc6b0,",(0,Ri.jsx)("br",{}),"\ud559\uc0dd\uc744 \ucd94\uac00 \ud558\uc2e4 \uc218\ub3c4 \uc788\uc5b4\uc694"]})]}),(0,Ri.jsx)(Ts,{children:(0,Ri.jsxs)(Fs,{children:["\uc120\uc0dd\ub2d8 \ub300\uc2dc\ubcf4\ub4dc\uc5d0\uc11c \uac04\ud3b8\ud558\uac8c",(0,Ri.jsx)("br",{}),"\uc0c8\ub85c\uc6b4 \ud559\uc0dd\uc744 \ucd94\uac00\ud558\uace0 \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,Ri.jsx)("br",{}),"\uccb4\ud5d8 \uae30\uac04 \uc911\uc5d0\ub3c4 \ud559\uc6d0 \uc0c1\ud669\uc5d0 \ub9de\ucdb0 \uc790\uc720\ub86d\uac8c \uc870\uc815\ud558\uc138\uc694."]})})]}),(0,Ri.jsx)(Rs,{children:(0,Ri.jsx)("img",{src:"/Pricing/\ubb34\ub8cc\uccb4\ud5d8 04.png",alt:"\ubb34\ub8cc\uccb4\ud5d8 04",style:{width:"100%",height:"100%",objectFit:"cover"}})})]}),(0,Ri.jsxs)(zs,{children:[(0,Ri.jsxs)(Cs,{children:[(0,Ri.jsxs)(Ps,{children:[(0,Ri.jsx)(_s,{children:"05"}),(0,Ri.jsx)(Is,{children:"\ud559\uc2b5\uc9c0\ub97c \ubc30\ubd80\ud558\uace0"})]}),(0,Ri.jsx)(Ts,{children:(0,Ri.jsxs)(Fs,{children:["\uc6d0\ud558\ub294 \ub2e8\uc6d0\uacfc \ub09c\uc774\ub3c4\ub97c \uc120\ud0dd\ud558\uc5ec",(0,Ri.jsx)("br",{}),"\ud559\uc2b5\uc9c0\ub97c \uc0dd\uc131\ud558\uace0 \ubc30\ubd80\ud558\uc138\uc694.",(0,Ri.jsx)("br",{}),"\ud559\uc0dd\ub4e4\uc740 \uc571\uc5d0\uc11c \ubc14\ub85c \ubb38\uc81c\ub97c \ud480\uace0",(0,Ri.jsx)("br",{}),"\uc2e4\uc2dc\uac04\uc73c\ub85c \ucc44\uc810\ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})})]}),(0,Ri.jsx)(Rs,{children:(0,Ri.jsx)("img",{src:"/Pricing/\ubb34\ub8cc\uccb4\ud5d8 05.png",alt:"\ubb34\ub8cc\uccb4\ud5d8 05",style:{width:"100%",height:"100%",objectFit:"cover"}})})]}),(0,Ri.jsxs)(zs,{children:[(0,Ri.jsxs)(Cs,{children:[(0,Ri.jsxs)(Ps,{children:[(0,Ri.jsx)(_s,{children:"06"}),(0,Ri.jsxs)(Is,{children:["\ud480\uc774 \uacb0\uacfc \ub300\uc2dc\ubcf4\ub4dc\ub97c",(0,Ri.jsx)("br",{}),"\ud655\uc778\ud558\uc138\uc694!"]})]}),(0,Ri.jsx)(Ts,{children:(0,Ri.jsxs)(Fs,{children:["\ud559\uc0dd\ub4e4\uc758 \ud559\uc2b5 \uc9c4\ub3c4\uc640 \uc131\ucde8\ub3c4\ub97c",(0,Ri.jsx)("br",{}),"\uc2e4\uc2dc\uac04\uc73c\ub85c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,Ri.jsx)("br",{}),"\ucde8\uc57d \ub2e8\uc6d0 \ubd84\uc11d\uacfc \uac1c\ubcc4 \ud559\uc2b5 \uad00\ub9ac\ub85c",(0,Ri.jsx)("br",{}),"\ud6a8\uacfc\uc801\uc778 \uc9c0\ub3c4\uac00 \uac00\ub2a5\ud574\uc694."]})})]}),(0,Ri.jsx)(Rs,{children:(0,Ri.jsx)("img",{src:"/Pricing/\ubb34\ub8cc\uccb4\ud5d8 06.png",alt:"\ubb34\ub8cc\uccb4\ud5d8 06",style:{width:"100%",height:"100%",objectFit:"cover"}})})]})]}),(0,Ri.jsx)(Rl,{children:(0,Ri.jsxs)(Dl,{children:[(0,Ri.jsxs)(Ll,{children:[(0,Ri.jsxs)(Ml,{children:["\ud3b8\ub9ac\ud55c \ubb38\uc81c\uc740\ud589\uc5d0",(0,Ri.jsx)("br",{}),"\uc218\ud559\ub300\uc655\ub9cc\uc758 AI \uae30\uc220\uc744 \ub354\ud569\ub2c8\ub2e4"]}),(0,Ri.jsxs)($l,{children:["\uae30\uc874 \ubb38\uc81c\uc740\ud589 \uae30\ub2a5\uc5d0 \uc218\ud559\ub300\uc655\ub9cc\uc758 \uae30\uc220\uc744 \ub354\ud574,",(0,Ri.jsx)("br",{}),"\uc644\ubcbd\ud55c 1:1 \ub9de\ucda4\ud615 \ud559\uc2b5 \uc9c4\ud589\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."]})]}),(0,Ri.jsxs)(Wl,{children:[(0,Ri.jsxs)(Ul,{children:[(0,Ri.jsx)(Vl,{children:(0,Ri.jsx)("div",{style:{width:"100%",height:"100%"}})}),(0,Ri.jsx)(Hl,{children:(0,Ri.jsxs)(Yl,{children:[(0,Ri.jsx)("img",{src:"/Assets/icon/plus_black_fiiled_logo.svg",alt:"plus",style:{width:"70px",height:"21px"}}),(0,Ri.jsx)(Jl,{children:"\ud50c\ub7ec\uc2a4"})]})}),(0,Ri.jsx)(Hl,{children:(0,Ri.jsxs)(Yl,{children:[(0,Ri.jsx)("img",{src:"/Assets/icon/light_logo.svg",alt:"light",style:{width:"51px",height:"27px"}}),(0,Ri.jsx)(Jl,{children:"\ub77c\uc774\ud2b8"})]})}),(0,Ri.jsx)(Hl,{children:(0,Ri.jsx)(Jl,{children:"\ud0c0\uc0ac"})})]}),(0,Ri.jsxs)(Xl,{children:[(0,Ri.jsxs)(Gl,{children:[(0,Ri.jsx)(Ql,{children:"AI \ud559\uc2b5 \uad00\ub9ac"}),(0,Ri.jsx)(Kl,{children:"\uc790\ub3d9 \uc219\uc81c \ubc0f \ud074\ub9ac\ub2c9 (\uc624\ub2f5 \ub178\ud2b8)"})]}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/check.svg",alt:"check",style:{width:"24px",height:"24px"}})}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/close.svg",alt:"close",style:{width:"24px",height:"24px"}})}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/close.svg",alt:"close",style:{width:"24px",height:"24px"}})})]}),(0,Ri.jsxs)(Xl,{children:[(0,Ri.jsxs)(Gl,{children:[(0,Ri.jsx)(Ql,{children:"AI \ub9ac\ud3ec\ud2b8"}),(0,Ri.jsx)(Kl,{children:"\ub9e4\uc8fc \ud559\uc2b5 \ub370\uc774\ud130 \uae30\ubc18 \ub9ac\ud3ec\ud2b8"})]}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/check.svg",alt:"check",style:{width:"24px",height:"24px"}})}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/close.svg",alt:"close",style:{width:"24px",height:"24px"}})}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/close.svg",alt:"close",style:{width:"24px",height:"24px"}})})]}),(0,Ri.jsxs)(Xl,{children:[(0,Ri.jsxs)(Gl,{children:[(0,Ri.jsx)(Ql,{children:"AI \uc2e4\uc2dc\uac04 \ucc44\ud305"}),(0,Ri.jsx)(Kl,{children:"\uc5b8\uc81c \uc5b4\ub514\uc11c\ub098 AI\uc5d0\uac8c \uc9c8\ubb38"})]}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/check.svg",alt:"check",style:{width:"24px",height:"24px"}})}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/close.svg",alt:"close",style:{width:"24px",height:"24px"}})}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/close.svg",alt:"close",style:{width:"24px",height:"24px"}})})]}),(0,Ri.jsxs)(Xl,{children:[(0,Ri.jsxs)(Gl,{children:[(0,Ri.jsx)(Ql,{children:"\ud559\ubd80\ubaa8 \uad00\ub9ac \uc11c\ube44\uc2a4"}),(0,Ri.jsx)(Kl,{children:"\uc218\ud559\ub300\uc655 \ud074\ub798\uc2a4 \uacc4\uc815 \uc81c\uacf5"})]}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/check.svg",alt:"check",style:{width:"24px",height:"24px"}})}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/close.svg",alt:"close",style:{width:"24px",height:"24px"}})}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/close.svg",alt:"close",style:{width:"24px",height:"24px"}})})]}),(0,Ri.jsxs)(Xl,{children:[(0,Ri.jsxs)(Gl,{children:[(0,Ri.jsx)(Ql,{children:"\ub9e4\ub2ec \uc7a5\ud559\uae08 30,000\uc6d0"}),(0,Ri.jsx)(Kl,{children:"Plus+ \uc694\uae08\uc81c \uae30\uc900"})]}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/check.svg",alt:"check",style:{width:"24px",height:"24px"}})}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/close.svg",alt:"close",style:{width:"24px",height:"24px"}})}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/close.svg",alt:"close",style:{width:"24px",height:"24px"}})})]}),(0,Ri.jsxs)(Xl,{children:[(0,Ri.jsxs)(Gl,{children:[(0,Ri.jsx)(Ql,{children:"AI \ud78c\ud2b8 & \ud53c\ub4dc\ubc31"}),(0,Ri.jsx)(Kl,{children:"\u3147\u3147\u3147"})]}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/check.svg",alt:"check",style:{width:"24px",height:"24px"}})}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/check.svg",alt:"check",style:{width:"24px",height:"24px"}})}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/close.svg",alt:"close",style:{width:"24px",height:"24px"}})})]}),(0,Ri.jsxs)(Xl,{children:[(0,Ri.jsxs)(Gl,{children:[(0,Ri.jsx)(Ql,{children:"AI \uc2ec\uce35 \uc2e4\ub825 \ubd84\uc11d"}),(0,Ri.jsx)(Kl,{children:"\u3147\u3147\u3147"})]}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/check.svg",alt:"check",style:{width:"24px",height:"24px"}})}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/check.svg",alt:"check",style:{width:"24px",height:"24px"}})}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/close.svg",alt:"close",style:{width:"24px",height:"24px"}})})]}),(0,Ri.jsxs)(Xl,{children:[(0,Ri.jsxs)(Gl,{children:[(0,Ri.jsx)(Ql,{children:"AI \ubc18\uc751\ud615 \ub9de\ucda4\ubb38\uc81c \ucd94\ucc9c"}),(0,Ri.jsx)(Kl,{children:"\u3147\u3147\u3147"})]}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/check.svg",alt:"check",style:{width:"24px",height:"24px"}})}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/check.svg",alt:"check",style:{width:"24px",height:"24px"}})}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/close.svg",alt:"close",style:{width:"24px",height:"24px"}})})]}),(0,Ri.jsxs)(Xl,{children:[(0,Ri.jsx)(Gl,{children:(0,Ri.jsx)(Ql,{style:{color:"#8D94A0",background:"none",WebkitBackgroundClip:"unset",WebkitTextFillColor:"unset",backgroundClip:"unset"},children:"\ubb34\uc81c\ud55c \ubb38\uc81c \ud480\uae30"})}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/check.svg",alt:"check",style:{width:"24px",height:"24px"}})}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/check.svg",alt:"check",style:{width:"24px",height:"24px"}})}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/check-1.svg",alt:"check",style:{width:"24px",height:"24px"}})})]}),(0,Ri.jsxs)(Xl,{children:[(0,Ri.jsx)(Gl,{children:(0,Ri.jsx)(Ql,{style:{color:"#8D94A0",background:"none",WebkitBackgroundClip:"unset",WebkitTextFillColor:"unset",backgroundClip:"unset"},children:"\uc720\uc0ac \ubb38\uc81c"})}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/check.svg",alt:"check",style:{width:"24px",height:"24px"}})}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/check.svg",alt:"check",style:{width:"24px",height:"24px"}})}),(0,Ri.jsx)(Zl,{children:(0,Ri.jsx)("img",{src:"/Pricing/check-1.svg",alt:"check",style:{width:"24px",height:"24px"}})})]})]})]})}),(0,Ri.jsx)(ca,{isOpen:i,onClose:()=>r(!1),title:"\ubb34\ub8cc \uccb4\ud5d8 \uc2e0\uccad",description:"\uc544\ub798 \uc815\ubcf4\ub97c \uc785\ub825\ud574 \uc8fc\uc2dc\uba74 \ub2f4\ub2f9\uc790\uac00 \ube60\ub974\uac8c \uc5f0\ub77d\ub4dc\ub9bd\ub2c8\ub2e4.",children:(0,Ri.jsx)(Qr,{onClose:()=>r(!1)})})]})}),Ls=Yt.section`
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
`,Ms=Yt.ul`
  width: 100%;
  max-width: 800px;
  background: #3EFFD;
  padding: 0;
  margin: 0;
  list-style: none;
  

  
  @media (max-width: 768px) {
    max-width: 95%;
  }
`,$s=Yt.li`
  border-bottom: 1px solid #E5E7EB;
`,Ws=Yt.button`
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
`,Us=Yt.div`
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
`,Hs=Yt.span`
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
`,Vs=[{question:"\uc218\ud559\ub300\uc655 \ud074\ub798\uc2a4\uac00 \ubb54\uac00\uc694?",answer:"\uc218\ud559\ub300\uc655 \ud074\ub798\uc2a4\ub294 \uc218\ud559\ub300\uc655\uc758 \uc628\ub77c\uc778 \ud559\uc2b5 \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4."},{question:"\uc120\uc0dd\ub2d8\uc740 \uc5b4\ub5a4 \uae30\uae30\ub85c \uc0ac\uc6a9 \uac00\ub2a5\ud55c\uac00\uc694?",answer:"\uc120\uc0dd\ub2d8\uaed8\uc11c\ub294 \uc6f9\uc0ac\uc774\ud2b8\uc5d0 \uc811\uc18d\ud574\uc11c \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc6f9\uc0ac\uc774\ud2b8\ub294 \ubc18\uc751\ud615 \uc6f9\uc0ac\uc774\ud2b8\ub85c \uc81c\uc791\ub418\uc5b4 \uc788\uc5b4\uc11c \uc2a4\ub9c8\ud2b8\ud3f0, \ud0dc\ube14\ub9bf, \ub178\ud2b8\ubd81, \ub370\uc2a4\ud06c\ud1b1\uc5d0\uc11c \ubaa8\ub450 \uc0ac\uc6a9 \uac00\ub2a5\ud558\uc2ed\ub2c8\ub2e4."},{question:"\ud559\uc0dd\ub4e4\uc758 \ud559\uc2b5 \ub370\uc774\ud130\ub294 \uc5b4\ub5bb\uac8c \uad00\ub9ac\ub418\ub098\uc694?",answer:"\ud559\uc0dd\ub4e4\uc740 \uae30\ubcf8\uc801\uc73c\ub85c \uc571\uc2a4\ud1a0\uc5b4, \ud50c\ub808\uc774\uc2a4\ud1a0\uc5b4\uc5d0\uc11c \uc2a4\ub9c8\ud2b8\ud3f0\uc6a9 \uc571, \ud0dc\ube14\ub9bf \uc6a9 \uc571\uc744 \uc124\uce58\ud560 \uc218 \uc788\uac8c \ube0c\ub77c\uc6b0\uc800\ub97c \ud65c\uc6a9\ud558\uc5ec \uc571\uc744 \uad6c\ub3d9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc989, \uc544\uc774\ud3f0, \uac24\ub7ed\uc2dc \uc2a4\ub9c8\ud2b8\ud3f0, \uac24\ub7ed\uc2dc \ud0dc\ube14\ub9bf, \uc544\uc774\ud328\ub4dc, \ub178\ud2b8\ubd81, \ub370\uc2a4\ud06c\ud1b1, \uc11c\ud53c\uc2a4, \uc6e8\uc77c\ubd81, \ud06c\ub86c\ubd81 \ub4f1 \uc7a5\ube44\uc640 \uae30\uae30\uc5d0 \uc804\ud600 \uad6c\uc560\ubc1b\uc9c0 \uc54a\uace0 \uacf5\uc815\ud55c AI \uc218\ud559 \uad50\uc721\uc744 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."},{question:"\uc5b4\ub5a4 \ud559\ub144\uc774 \uc0ac\uc6a9 \uac00\ub2a5\ud55c\uac00\uc694?",answer:"\ucd08\ub4f1\ud559\uad50 1\ud559\ub144\ubd80\ud130 \uace0\ub4f1\ud559\uad50 3\ud559\ub144\uae4c\uc9c0 \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ucd081, \ucd082\ub294 \ucd9c\uc2dc \uc608\uc815\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."},{question:"\ud544\uae30 \uae30\ub2a5\uc774 \uc874\uc7ac\ud558\ub098\uc694? \ud559\uc0dd \ud544\uae30\ub97c \uc120\uc0dd\ub2d8\uc774 \ubcfc \uc218 \uc788\ub098\uc694?",answer:"\ud544\uae30 \uae30\ub2a5\uc774 \uc644\ubcbd\ud558\uac8c \uad6c\ud604\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ud559\uc0dd\uc740 \ub514\ubc14\uc774\uc2a4\uc5d0\uc11c \uc218\ud559 \ubb38\uc81c \uc704\uc5d0 \ud544\uae30\ub97c \ud558\uba74\uc11c \ubb38\uc81c\ub97c \ud480 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8 \ud544\uae30 \uae30\ub85d\uc740 \ubb38\uc81c\uc640 \ud568\uaed8 \ud55c \ubb38\uc81c \ub2e8\uc704\ub85c \uc2e4\uc2dc\uac04\uc73c\ub85c \uc120\uc0dd\ub2d8 \ub300\uc2dc\ubcf4\ub4dc\uc5d0 \ubc18\uc601\ub418\uc5b4 \uc120\uc0dd\ub2d8\uc774 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."},{question:"\ud559\uc0dd\ub4e4\uc758 \ud559\uc2b5 \ud604\ud669\uc744 \uc120\uc0dd\ub2d8\uc774 \ubcfc \uc218 \uc788\ub098\uc694?",answer:"\uc120\uc0dd\ub2d8\uc774 \ub0b4\uc900 \uc219\uc81c, \ud559\uc0dd\uc774 \ucd94\uac00\uc801\uc73c\ub85c \uc790\uc2b5\ud55c \ubb38\uc81c \ub4f1 \ubaa8\ub4e0 \ud559\uc2b5\ub7c9\uacfc \ud559\uc2b5 \uae30\ub85d\uc744 \uc120\uc0dd\ub2d8\uc774 \uc77c\ubcc4, \uc8fc\ubcc4, \uc6d4\ubcc4\ub85c \ud604\ud669\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."},{question:"\uc7a5\ud559\uae08\uc740 \uc5b4\ub5a4 \uae30\ub2a5\uc778\uac00\uc694?",answer:"\uc218\ud559\ub300\uc655\uc740 \ud559\uc0dd\ub4e4\uc758 \ub3d9\uae30\ubd80\uc5ec\ub97c \uc704\ud574 \uc7a5\ud559\uae08 \uc81c\ub3c4\ub97c \uc6b4\uc601\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc218\ud559 \uc2e4\ub825\uacfc \uc131\uc801\uc5d0 \uad00\uacc4\uc5c6\uc774 AI\uac00 \ucd94\ucc9c\ud574 \uc8fc\ub294 \ub0b4 \uc2e4\ub825\uc5d0 \ub9de\ub294 \ubb38\uc81c\ub97c \uafb8\uc900\ud788 \ud47c\ub2e4\uba74, \ubaa8\ub4e0 \ud559\uc0dd\ub4e4\uc774 \uc608\uc678 \uc5c6\uc774 \ud655\uc815\uc801\uc73c\ub85c \uc7a5\ud559\uae08\uc744 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. **\uc989, \uc131\uc801\uc5d0 \ub530\ub77c \uc7a5\ud559\uae08\uc744 \ubc1b\ub294 \uac83\uc774 \uc544\ub2c8\ub77c, \ubaa8\ub4e0 \ud559\uc0dd\uc774 \ub098\uc758 \ub178\ub825\uc5d0 \ub530\ub77c \uc7a5\ud559\uae08\uc744 \ubc1b\uc744 \uc218 \uc788\ub294 \uc2dc\uc2a4\ud15c\uc785\ub2c8\ub2e4.** \uc7a5\ud559\uae08\uc740 \uc218\ud559\ub300\uc655 \uc571 \ub0b4\uc5d0\uc11c \ub124\uc774\ubc84\ud398\uc774\ub85c \ubcc0\ud658\ud558\uc5ec \uacb0\uc81c \ubc0f \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ud559\uc0dd\ub2f9 \uc6d4\ubcc4\ub85c \ubc1b\uc544 \uac08 \uc218 \uc788\ub294 \ucd5c\ub300\uc758 \uc7a5\ud559\uae08 \uc591\uc740 \ub2e8\uccb4 \ub3c4\uc785\ud558\uc2e4 \ub54c \uc124\uc815\ud558\uc2e4 \uc218 \uc788\uc73c\uba70, **\uc120\uc0dd\ub2d8\uaed8\uc11c \uc124\uc815\ud558\uc2e0 \ud50c\ub79c\uc5d0 \ub530\ub77c \ub9de\ucda4 \uc608\uc0b0 \uc124\uacc4\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4.**"}],Ys=Yt.span`
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
`,Js=[{id:1,title:"\uc11c\uc220\ud615 \ucd9c\uc81c \ubc0f \ucca8\uc0ad \uae30\ub2a5 \ucd9c\uc2dc",text:"\ubb38\uc81c\ub97c \ucd94\uac00\ud560 \ub54c, \uc11c\uc220\ud615 \ubb38\uc81c\ub97c \ucd9c\uc81c\ud560 \uc218 \uc788\uc5b4\uc694.",date:"25-06-09",category:"CLASS"},{id:2,title:"[\ud559\uc0dd\uc6a9 \uc571] \ud559\uc2b5 \ud0ed \uac1c\ud3b8",text:"\ud559\uc2b5 \ud0ed\uc774 \uac1c\ud3b8\ub410\uc5b4\uc694.",date:"25-05-20",category:"APP"},{id:3,title:"\ubd84\uc11d \uac1c\ud3b8",text:"[\uac1c\ubcc4 \uc219\uc81c \ubd84\uc11d] \uc219\uc81c\ubcc4\ub85c \ud559\uc0dd \uc2e4\ub825\uc744 \ubd84\uc11d\ud574 \ub4dc\ub824\uc694.",date:"24-05-20",category:"CLASS"},{id:4,title:"\ub2f4\ub2f9 \ud074\ub798\uc2a4 \ubc0f \ud559\uc0dd\ub9cc \ubcf4\uae30",text:"\uc774\uc81c \uc6d0\ud558\uba74 \ub2f4\ub2f9 \ud074\ub798\uc2a4 \ubc0f \ud559\uc0dd\ub9cc \ubcfc \uc218 \uc788\uc5b4\uc694.",date:"25-05-16",category:"CLASS"},{id:5,title:"OX \ucc44\uc810 \ucd9c\uc2dc",text:"OX\ub97c \uc120\ud0dd\ud574\uc11c \ud559\uc0dd \uc815\uc624\ub2f5\uc744 \uae30\ub85d\ud560 \uc218 \uc788\uc5b4\uc694.",date:"25-05-16",category:"CLASS"},{id:6,title:"\uae30\ucd9c \ucd94\uac00 \ubc0f \ud559\uc2b5\uc9c0 \uac1c\uc120",text:"[\uae30\ucd9c] \uc218\ub2a5, \ubaa8\uc758\uace0\uc0ac \uae30\ucd9c\uc744 \uc2dc\ud5d8\uc9c0 \ub2e8\uc704\ub85c \ubc30\ubd80\ud560 \uc218 \uc788\uc5b4\uc694.",date:"25-04-28",category:"CLASS"},{id:7,title:"\ucd9c\ub825\ubb3c \ucc44\uc810 \ucd9c\uc2dc",text:"\uc120\uc0dd\ub2d8\uc6a9 \ub300\uc2dc\ubcf4\ub4dc\uac00 \ub354\uc6b1 \uc9c1\uad00\uc801\uc774\uace0 \ud6a8\uc728\uc801\uc73c\ub85c \uac1c\uc120\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",date:"25-03-21",category:"CLASS"},{id:8,title:"[\ud559\uc0dd\uc6a9 \uc6f9] \uac1c\ub150\uc9d1 \uc554\uae30\ubaa8\ub4dc \ucd94\uac00",text:"\ud559\uc0dd\uc6a9 \uc6f9\uc5d0\uc11c \uac1c\ub150\uc9d1 \uc554\uae30 \ubaa8\ub4dc\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc5b4\uc694.",date:"25-04-18",category:"WEB"},{id:9,title:"\uc790\ub3d9 \ud074\ub9ac\ub2c9 / \ubb34\ud55c \ud074\ub9ac\ub2c9 \ucd9c\uc2dc",text:"[\uc790\ub3d9 \ud074\ub9ac\ub2c9] \ud074\ub9ac\ub2c9\uc774 \uc790\ub3d9\uc73c\ub85c \ubc30\ubd80\ub418\uac8c \uc124\uc815\ud560 \uc218 \uc788\uc5b4\uc694.",date:"25-04-15",category:"CLASS"}];const Xs=Yt.h1`
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
`;function Gs(){const[t,n]=(0,e.useState)(null),i=Vs;return(0,Ri.jsx)(Ls,{children:(0,Ri.jsx)(Ms,{children:i.map((e,i)=>{const r=i;return(0,Ri.jsxs)($s,{children:[(0,Ri.jsxs)(Ws,{open:t===r,onClick:()=>n(t===r?null:r),children:[e.question,(0,Ri.jsx)(Hs,{children:t===r?"\xd7":"+"})]}),t===r&&(0,Ri.jsx)(Us,{children:e.answer})]},e.question)})})})}const Qs=()=>{const t=function(){const[t,n]=(0,e.useState)(!1);return(0,e.useEffect)(()=>{const e=()=>n(window.innerWidth<=768);return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),t}(),[n,i]=(0,e.useState)(null),r=t?6:Js.length,a=Js.slice(0,r);return t?(0,Ri.jsx)(Ls,{as:"section",children:(0,Ri.jsx)(Ms,{as:"ul",children:a.map((e,t)=>{const r=t;return(0,Ri.jsxs)($s,{as:"li",children:[(0,Ri.jsxs)(Ws,{open:n===r,onClick:()=>i(n===r?null:r),style:{textAlign:"left"},children:[(0,Ri.jsx)(Ys,{children:e.category}),(0,Ri.jsx)("span",{style:{fontWeight:600,textAlign:"left",flex:1,fontSize:"14px"},children:e.title}),(0,Ri.jsx)("span",{style:{color:"#9C7EEF",fontSize:14,fontWeight:300,marginRight:8},children:e.date}),(0,Ri.jsx)(Hs,{children:n===r?"\xd7":"+"})]}),n===r&&(0,Ri.jsxs)(Us,{style:{textAlign:"left"},children:[(0,Ri.jsx)("div",{style:{marginBottom:8,fontSize:15,color:"#444",textAlign:"left"},children:e.text}),(0,Ri.jsx)("div",{style:{color:"#C6B5F6",fontSize:13,textAlign:"left"},children:e.date})]})]},e.id)})})}):(0,Ri.jsx)(Ls,{as:"section",children:(0,Ri.jsx)(Ms,{as:"ul",children:Js.map((e,t)=>(0,Ri.jsxs)($s,{as:"li",children:[(0,Ri.jsxs)(Ws,{open:n===t,onClick:()=>i(n===t?null:t),style:{textAlign:"left"},children:[(0,Ri.jsx)(Ys,{children:e.category}),(0,Ri.jsx)("span",{style:{fontWeight:600,textAlign:"left",flex:1},children:e.title}),(0,Ri.jsx)("span",{style:{color:"#9C7EEF",fontSize:16,fontWeight:300,marginRight:8},children:e.date}),(0,Ri.jsx)(Hs,{children:n===t?"\xd7":"+"})]}),n===t&&(0,Ri.jsxs)(Us,{style:{textAlign:"left"},children:[(0,Ri.jsx)("div",{style:{marginBottom:8,fontSize:15,color:"#444",textAlign:"left"},children:e.text}),(0,Ri.jsx)("div",{style:{color:"#C6B5F6",fontSize:13,textAlign:"left"},children:e.date})]})]},e.id))})})},Ks=Yt.div`
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
`,Zs=Yt.div`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`,qs=Yt.div`
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
`,ed=Yt.div`
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
`,td=Yt(vi)`
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
`;function nd(){const t=Wn(),n=t.pathname.includes("/notice/faq")?1:0;(0,e.useEffect)(()=>{window.scrollTo(0,0)},[t.pathname]);const i=t.pathname.includes("/notice/faq")?"\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38\uc744\n\ud55c\ub208\uc5d0 \ud655\uc778\ud558\uc138\uc694!":"\uc218\ud559\ub300\uc655\uc758 \uc5c5\ub370\uc774\ud2b8 \ub41c \uae30\ub2a5\uc744\n\ud655\uc778\ud558\uc138\uc694!";return(0,Ri.jsx)(Ks,{children:(0,Ri.jsxs)(Zs,{children:[(0,Ri.jsx)(Xs,{children:i}),(0,Ri.jsxs)(qs,{children:[(0,Ri.jsx)(ed,{index:n}),(0,Ri.jsx)(td,{to:"/notice",className:e=>{let{isActive:t}=e;return t?"active":""},children:"\uacf5\uc9c0\uc0ac\ud56d"}),(0,Ri.jsx)(td,{to:"/notice/faq",className:e=>{let{isActive:t}=e;return t?"active":""},children:"\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38"})]}),(0,Ri.jsxs)(li,{children:[(0,Ri.jsx)(ai,{path:"faq",element:(0,Ri.jsx)(Gs,{})}),(0,Ri.jsx)(ai,{path:"",element:(0,Ri.jsx)(Qs,{})})]})]})})}const id=Yt.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`,rd=Yt.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;function ad(t){let{setChannelUser:n,bootAnonymousUser:i}=t;const[r,a]=(0,e.useState)(!1),[o,l]=(0,e.useState)(!1),s=Wn(),d="/pricing"===s.pathname;return(0,e.useEffect)(()=>{const e=window;try{if(!e.__hasTrackedInitialPageView)return void(e.__hasTrackedInitialPageView=!0);const t=window.fbq;"function"===typeof t&&t("track","PageView")}catch{}},[s.pathname]),(0,Ri.jsxs)(id,{children:[(0,Ri.jsx)(rr,{hasWhiteBackground:d}),(0,Ri.jsx)(rd,{children:(0,Ri.jsxs)(li,{children:[(0,Ri.jsx)(ai,{path:"/",element:(0,Ri.jsx)(vl,{isModalOpen:r,setIsModalOpen:a})}),(0,Ri.jsx)(ai,{path:"/pricing",element:(0,Ri.jsx)(Ds,{})}),(0,Ri.jsx)(ai,{path:"/notice/*",element:(0,Ri.jsx)(nd,{})})]})}),(0,Ri.jsx)(br,{}),(0,Ri.jsx)(na,{isModalOpen:r||o,onDrawerStateChange:e=>{l(e)}})]})}const od=function(){const[t,n]=(0,e.useState)({memberId:"",name:"",mobileNumber:"",landlineNumber:"",customField1:"",customField2:""});return(0,e.useEffect)(()=>{(async()=>{try{await void(Ei()||function(){var e=window;if(!e.ChannelIO){var t=function(){var e;null===(e=t.c)||void 0===e||e.call(t,arguments)};t.q=[],t.c=function(e){var n;null===(n=t.q)||void 0===n||n.push(e)},e.ChannelIO=t,"complete"===document.readyState?n():(e.addEventListener("DOMContentLoaded",n),e.addEventListener("load",n))}function n(){if(!e.ChannelIOInitialized){e.ChannelIOInitialized=!0;var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var n=document.getElementsByTagName("script")[0];n.parentNode&&n.parentNode.insertBefore(t,n)}}}()),t.memberId&&t.name?Ci({pluginKey:"d436ea9d-ae03-4aca-868d-35d43f45e4ca",memberId:t.memberId,profile:{name:t.name,mobileNumber:t.mobileNumber,landlineNumber:t.landlineNumber,customField1:t.customField1,customField2:t.customField2}}):Ci({pluginKey:"d436ea9d-ae03-4aca-868d-35d43f45e4ca"})}catch(e){console.error("Channel.io \ucd08\uae30\ud654 \uc2e4\ud328:",e)}})()},[t.memberId,t.name,t.mobileNumber,t.landlineNumber,t.customField1,t.customField2]),(0,Ri.jsx)(gi,{children:(0,Ri.jsx)(ad,{setChannelUser:e=>{n(e)},bootAnonymousUser:()=>{try{Ci({pluginKey:"d436ea9d-ae03-4aca-868d-35d43f45e4ca"})}catch(e){console.error("\uc775\uba85 \uc720\uc800 \ubd80\ud2b8 \uc2e4\ud328:",e)}}})})},ld=(function(t){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];var o=Ut.apply(void 0,a([t],n,!1)),l="sc-global-".concat(Pe(JSON.stringify(o))),s=new Jt(o,l),d=function(t){var n=Ct(),i=e.useContext(Dt),r=e.useRef(n.styleSheet.allocateGSInstance(l)).current;return n.styleSheet.server&&c(r,t,n.styleSheet,i,n.stylis),e.useLayoutEffect(function(){if(!n.styleSheet.server)return c(r,t,n.styleSheet,i,n.stylis),function(){return s.removeStyles(r,n.styleSheet)}},[r,t,n.styleSheet,i,n.stylis]),null};function c(e,t,n,i,a){if(s.isStatic)s.renderStyles(e,fe,n,a);else{var o=r(r({},t),{theme:ge(t,i,d.defaultProps)});s.renderStyles(e,o,n,a)}}return e.memo(d)})`
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
`;i.createRoot(document.getElementById("root")).render((0,Ri.jsxs)(e.StrictMode,{children:[(0,Ri.jsx)(ld,{}),(0,Ri.jsx)(od,{})]}))})()})();
//# sourceMappingURL=main.8fabe90e.js.map