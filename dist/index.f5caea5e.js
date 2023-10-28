var t,e,r,n,o,i,a,c,u,l,s,f,p,h,v,y,d=globalThis,g={},m={},b=function(t){return t&&t.Math===Math&&t};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
m=b("object"==typeof globalThis&&globalThis)||b("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
b("object"==typeof self&&self)||b("object"==typeof d&&d)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||m||Function("return this")();var w={},S={};// Detect IE8's incomplete defineProperty implementation
w=!(S=function(t){try{return!!t()}catch(t){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var O={},j={};j=!S(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var t=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof t||t.hasOwnProperty("prototype")});var E=Function.prototype.call;O=j?E.bind(E):function(){return E.apply(E,arguments)};var L={}.propertyIsEnumerable,x=Object.getOwnPropertyDescriptor;n=x&&!L.call({1:2},1)?function(t){var e=x(this,t);return!!e&&e.enumerable}:L;var P={};P=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var T={},_={},k={},I=Function.prototype,F=I.call,M=j&&I.bind.bind(F,F),C={},D=(k=j?M:function(t){return function(){return F.apply(t,arguments)}})({}.toString),N=k("".slice);C=function(t){return N(D(t),8,-1)};var G=Object,A=k("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
_=S(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!G("z").propertyIsEnumerable(0)})?function(t){return"String"===C(t)?A(t,""):G(t)}:G;var B={},H={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
H=function(t){return null==t};var q=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
B=function(t){if(H(t))throw new q("Can't call method on "+t);return t},T=function(t){return _(B(t))};var z={},R={},W={},Y={},K={},V="object"==typeof document&&document.all,J=(K={all:V,IS_HTMLDDA:void 0===V&&void 0!==V}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
Y=K.IS_HTMLDDA?function(t){return"function"==typeof t||t===J}:function(t){return"function"==typeof t};var Q=K.all;W=K.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:Y(t)||t===Q}:function(t){return"object"==typeof t?null!==t:Y(t)};var U={},X={};X=function(t,e){var r;return arguments.length<2?(r=m[t],Y(r)?r:void 0):m[t]&&m[t][e]};var Z={};Z=k({}.isPrototypeOf);var tt={},te={},tr={},tn={};tn="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var to=m.process,ti=m.Deno,ta=to&&to.versions||ti&&ti.version,tc=ta&&ta.v8;tc&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(i=(o=tc.split("."))[0]>0&&o[0]<4?1:+(o[0]+o[1])),!i&&tn&&(!(o=tn.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=tn.match(/Chrome\/(\d+)/))&&(i=+o[1]),tr=i;var tu=m.String;tt=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(te=!!Object.getOwnPropertySymbols&&!S(function(){var t=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!tu(t)||!(Object(t) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&tr&&tr<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var tl=Object;U=tt?function(t){return"symbol"==typeof t}:function(t){var e=X("Symbol");return Y(e)&&Z(e.prototype,tl(t))};var ts={},tf={},tp={},th=String;tp=function(t){try{return th(t)}catch(t){return"Object"}};var tv=TypeError;// `Assert: IsCallable(argument) is true`
tf=function(t){if(Y(t))return t;throw new tv(tp(t)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
ts=function(t,e){var r=t[e];return H(r)?void 0:tf(r)};var ty={},td=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
ty=function(t,e){var r,n;if("string"===e&&Y(r=t.toString)&&!W(n=O(r,t))||Y(r=t.valueOf)&&!W(n=O(r,t))||"string"!==e&&Y(r=t.toString)&&!W(n=O(r,t)))return n;throw new td("Can't convert object to primitive value")};var tg={},tm={};tm=!1;var tb={},tw={},tS=Object.defineProperty;tw=function(t,e){try{tS(m,t,{value:e,configurable:!0,writable:!0})}catch(r){m[t]=e}return e};var tO="__core-js_shared__";tb=m[tO]||tw(tO,{}),(tg=function(t,e){return tb[t]||(tb[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.33.1",mode:tm?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.1/LICENSE",source:"https://github.com/zloirock/core-js"});var tj={},tE={},tL=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
tE=function(t){return tL(B(t))};var tx=k({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
tj=Object.hasOwn||function(t,e){return tx(tE(t),e)};var tP={},tT=0,t_=Math.random(),tk=k(1..toString);tP=function(t){return"Symbol("+(void 0===t?"":t)+")_"+tk(++tT+t_,36)};var tI=m.Symbol,tF=tg("wks"),tM=tt?tI.for||tI:tI&&tI.withoutSetter||tP,tC=TypeError,tD=(tj(tF,t="toPrimitive")||(tF[t]=te&&tj(tI,t)?tI[t]:tM("Symbol."+t)),tF[t]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
R=function(t,e){if(!W(t)||U(t))return t;var r,n=ts(t,tD);if(n){if(void 0===e&&(e="default"),r=O(n,t,e),!W(r)||U(r))return r;throw new tC("Can't convert object to primitive value")}return void 0===e&&(e="number"),ty(t,e)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
z=function(t){var e=R(t,"string");return U(e)?e:e+""};var tN={},tG={},tA=m.document,tB=W(tA)&&W(tA.createElement);tG=function(t){return tB?tA.createElement(t):{}},// Thanks to IE8 for its funny defineProperty
tN=!w&&!S(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(tG("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var tH=Object.getOwnPropertyDescriptor;r=w?tH:function(t,e){if(t=T(t),e=z(e),tN)try{return tH(t,e)}catch(t){}if(tj(t,e))return P(!O(n,t,e),t[e])};var tq={},t$={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
t$=w&&S(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var tz={},tR=String,tW=TypeError;// `Assert: Type(argument) is Object`
tz=function(t){if(W(t))return t;throw new tW(tR(t)+" is not an object")};var tY=TypeError,tK=Object.defineProperty,tV=Object.getOwnPropertyDescriptor,tJ="enumerable",tQ="configurable",tU="writable";a=w?t$?function(t,e,r){if(tz(t),e=z(e),tz(r),"function"==typeof t&&"prototype"===e&&"value"in r&&tU in r&&!r[tU]){var n=tV(t,e);n&&n[tU]&&(t[e]=r.value,r={configurable:tQ in r?r[tQ]:n[tQ],enumerable:tJ in r?r[tJ]:n[tJ],writable:!1})}return tK(t,e,r)}:tK:function(t,e,r){if(tz(t),e=z(e),tz(r),tN)try{return tK(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new tY("Accessors not supported");return"value"in r&&(t[e]=r.value),t},tq=w?function(t,e,r){return a(t,e,P(1,r))}:function(t,e,r){return t[e]=r,t};var tX={},tZ={},t0=Function.prototype,t1=w&&Object.getOwnPropertyDescriptor,t2=tj(t0,"name")&&(!w||w&&t1(t0,"name").configurable),t3={},t7=k(Function.toString);Y(tb.inspectSource)||(tb.inspectSource=function(t){return t7(t)}),t3=tb.inspectSource;var t4={},t6={},t8=m.WeakMap;t6=Y(t8)&&/native code/.test(String(t8));var t9={},t5=tg("keys");t9=function(t){return t5[t]||(t5[t]=tP(t))};var et={};et={};var ee="Object already initialized",er=m.TypeError,en=m.WeakMap;if(t6||tb.state){var eo=tb.state||(tb.state=new en);/* eslint-disable no-self-assign -- prototype methods protection */eo.get=eo.get,eo.has=eo.has,eo.set=eo.set,/* eslint-enable no-self-assign -- prototype methods protection */c=function(t,e){if(eo.has(t))throw new er(ee);return e.facade=t,eo.set(t,e),e},u=function(t){return eo.get(t)||{}},l=function(t){return eo.has(t)}}else{var ei=t9("state");et[ei]=!0,c=function(t,e){if(tj(t,ei))throw new er(ee);return e.facade=t,tq(t,ei,e),e},u=function(t){return tj(t,ei)?t[ei]:{}},l=function(t){return tj(t,ei)}}var ea=(t4={set:c,get:u,has:l,enforce:function(t){return l(t)?u(t):c(t,{})},getterFor:function(t){return function(e){var r;if(!W(e)||(r=u(e)).type!==t)throw new er("Incompatible receiver, "+t+" required");return r}}}).enforce,ec=t4.get,eu=String,el=Object.defineProperty,es=k("".slice),ef=k("".replace),ep=k([].join),eh=w&&!S(function(){return 8!==el(function(){},"length",{value:8}).length}),ev=String(String).split("String"),ey=tZ=function(t,e,r){"Symbol("===es(eu(e),0,7)&&(e="["+ef(eu(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!tj(t,"name")||t2&&t.name!==e)&&(w?el(t,"name",{value:e,configurable:!0}):t.name=e),eh&&r&&tj(r,"arity")&&t.length!==r.arity&&el(t,"length",{value:r.arity});try{r&&tj(r,"constructor")&&r.constructor?w&&el(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=ea(t);return tj(n,"source")||(n.source=ep(ev,"string"==typeof e?e:"")),t};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=ey(function(){return Y(this)&&ec(this).source||t3(this)},"toString"),tX=function(t,e,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:e;if(Y(r)&&tZ(r,i,n),n.global)o?t[e]=r:tw(e,r);else{try{n.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=r:a(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var ed={},eg={},em={},eb={},ew={},eS={},eO=Math.ceil,ej=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
eS=Math.trunc||function(t){var e=+t;return(e>0?ej:eO)(e)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
ew=function(t){var e=+t;// eslint-disable-next-line no-self-compare -- NaN check
return e!=e||0===e?0:eS(e)};var eE=Math.max,eL=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
eb=function(t,e){var r=ew(t);return r<0?eE(r+e,0):eL(r,e)};var ex={},eP={},eT=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
eP=function(t){return t>0?eT(ew(t),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
ex=function(t){return eP(t.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var e_=function(t){return function(e,r,n){var o,i=T(e),a=ex(i),c=eb(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(t&&r!=r){for(;a>c;)// eslint-disable-next-line no-self-compare -- NaN check
if((o=i[c++])!=o)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},ek={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:e_(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:e_(!1)}.indexOf,eI=k([].push);em=function(t,e){var r,n=T(t),o=0,i=[];for(r in n)!tj(et,r)&&tj(n,r)&&eI(i,r);// Don't enum bug & hidden keys
for(;e.length>o;)tj(n,r=e[o++])&&(~ek(i,r)||eI(i,r));return i};var eF=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");s=Object.getOwnPropertyNames||function(t){return em(t,eF)},f=Object.getOwnPropertySymbols;var eM=k([].concat);// all object keys, includes non-enumerable and symbols
eg=X("Reflect","ownKeys")||function(t){var e=s(tz(t));return f?eM(e,f(t)):e},ed=function(t,e,n){for(var o=eg(e),i=0;i<o.length;i++){var c=o[i];tj(t,c)||n&&tj(n,c)||a(t,c,r(e,c))}};var eC={},eD=/#|\.prototype\./,eN=function(t,e){var r=eA[eG(t)];return r===eH||r!==eB&&(Y(e)?S(e):!!e)},eG=eN.normalize=function(t){return String(t).replace(eD,".").toLowerCase()},eA=eN.data={},eB=eN.NATIVE="N",eH=eN.POLYFILL="P";eC=eN,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/g=function(t,e){var n,o,i,a,c,u=t.target,l=t.global,s=t.stat;if(n=l?m:s?m[u]||tw(u,{}):(m[u]||{}).prototype)for(o in e){// contained in target
if(a=e[o],i=t.dontCallGetSet?(c=r(n,o))&&c.value:n[o],!eC(l?o:u+(s?".":"#")+o,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;ed(a,i)}(t.sham||i&&i.sham)&&tq(a,"sham",!0),tX(n,o,a,t)}};var eq={},e$={},ez=Function.prototype,eR=ez.apply,eW=ez.call;// eslint-disable-next-line es/no-reflect -- safe
e$="object"==typeof Reflect&&Reflect.apply||(j?eW.bind(eR):function(){return eW.apply(eR,arguments)});var eY={},eK={},eV=(eK=function(t){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===C(t))return k(t)})(eK.bind);// optional / simple context binding
eY=function(t,e){return tf(t),void 0===e?t:j?eV(t,e):function(){return t.apply(e,arguments)}};var eJ={};eJ=X("document","documentElement");var eQ={};eQ=k([].slice);var eU={},eX=TypeError;eU=function(t,e){if(t<e)throw new eX("Not enough arguments");return t};var eZ={};// eslint-disable-next-line redos/no-vulnerable -- safe
eZ=/(?:ipad|iphone|ipod).*applewebkit/i.test(tn);var e0={};e0="process"===C(m.process);var e1=m.setImmediate,e2=m.clearImmediate,e3=m.process,e7=m.Dispatch,e4=m.Function,e6=m.MessageChannel,e8=m.String,e9=0,e5={},rt="onreadystatechange";S(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
p=m.location});var re=function(t){if(tj(e5,t)){var e=e5[t];delete e5[t],e()}},rr=function(t){return function(){re(t)}},rn=function(t){re(t.data)},ro=function(t){// old engines have not location.origin
m.postMessage(e8(t),p.protocol+"//"+p.host)};e1&&e2||(e1=function(t){eU(arguments.length,1);var e=Y(t)?t:e4(t),r=eQ(arguments,1);return e5[++e9]=function(){e$(e,void 0,r)},h(e9),e9},e2=function(t){delete e5[t]},e0?h=function(t){e3.nextTick(rr(t))}:e7&&e7.now?h=function(t){e7.now(rr(t))}:e6&&!eZ?(y=(v=new e6).port2,v.port1.onmessage=rn,h=eY(y.postMessage,y)):m.addEventListener&&Y(m.postMessage)&&!m.importScripts&&p&&"file:"!==p.protocol&&!S(ro)?(h=ro,m.addEventListener("message",rn,!1)):h=rt in tG("script")?function(t){eJ.appendChild(tG("script"))[rt]=function(){eJ.removeChild(this),re(t)}}:function(t){setTimeout(rr(t),0)});var ri=(eq={set:e1,clear:e2}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
g({global:!0,bind:!0,enumerable:!0,forced:m.clearImmediate!==ri},{clearImmediate:ri});var ra=eq.set,rc={},ru={};/* global Bun -- Deno case */ru="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rl=m.Function,rs=/MSIE .\./.test(tn)||ru&&((e=m.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rc=function(t,e){var r=e?2:1;return rs?function(n,o/* , ...arguments */){var i=eU(arguments.length,1)>r,a=Y(n)?n:rl(n),c=i?eQ(arguments,r):[],u=i?function(){e$(a,this,c)}:a;return e?t(u,o):t(u)}:t};// https://github.com/oven-sh/bun/issues/1633
var rf=m.setImmediate?rc(ra,!1):ra;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
g({global:!0,bind:!0,enumerable:!0,forced:m.setImmediate!==rf},{setImmediate:rf});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rp=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,r,n,i){var a,c,u=Object.create((r&&r.prototype instanceof d?r:d).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
o(u,"_invoke",{value:(a=new P(i||[]),c=p,function(r,o){if(c===h)throw Error("Generator is already running");if(c===v){if("throw"===r)throw o;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:e,done:!0}}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var u=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function t(r,n){var o=n.method,i=r.iterator[o];if(i===e)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===o&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=e,t(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),y);var a=f(i,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,y;var c=a.arg;return c?c.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=c.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,y):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,y)}(i,a);if(u){if(u===y)continue;return u}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===p)throw c=v,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=h;var l=f(t,n,a);if("normal"===l.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
c=a.done?v:"suspendedYield",l.arg===y)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(c=v,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=l.arg)}})}),u)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var p="suspendedStart",h="executing",v="completed",y={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function d(){}function g(){}function m(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};l(b,a,function(){return this});var w=Object.getPrototypeOf,S=w&&w(w(T([])));S&&S!==r&&n.call(S,a)&&// of the polyfill.
(b=S);var O=m.prototype=d.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function j(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
o(this,"_invoke",{value:function(o,i){function a(){return new e(function(r,a){!function r(o,i,a,c){var u=f(t[o],t,i);if("throw"===u.type)c(u.arg);else{var l=u.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then(function(t){r("next",t,a,c)},function(t){r("throw",t,a,c)}):e.resolve(s).then(function(t){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
l.value=t,a(l)},function(t){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",t,a,c)})}}(o,i,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function T(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw TypeError(typeof t+" is not iterable")}return g.prototype=m,o(O,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:g,configurable:!0}),g.displayName=l(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
t.awrap=function(t){return{__await:t}},j(E.prototype),l(E.prototype,c,function(){return this}),t.AsyncIterator=E,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(t){return t.done?t.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
j(O),l(O,u,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
l(O,a,function(){return this}),l(O,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
t.done=!0,t)}},t.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(x),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(l){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&// location outside the try/catch block.
(i=null);var a=i?i.completion:{};return(a.type=t,a.arg=e,i)?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=e),y}},t}({});try{regeneratorRuntime=rp}catch(t){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=rp:Function("r","regeneratorRuntime = r")(rp)}// Accordion Start
let rh=document.getElementsByClassName("accordion"),rv=null;for(let t=0;t<rh.length;t++)rh[t].addEventListener("click",function(){if(rv&&rv!==this){// Close the currently active accordion
rv.classList.remove("active");let t=rv.nextElementSibling;t.style.maxHeight=null,t.style.borderTop="none",t.style.borderBottom="none"}this.classList.toggle("active");let t=this.nextElementSibling;t.style.maxHeight?(t.style.maxHeight=null,t.style.borderTop="none",t.style.borderBottom="none"):(t.style.maxHeight=t.scrollHeight+"px",t.style.borderTop="2px solid #168DF7",t.style.borderBottom="2px solid #168DF7"),// Update the currently active accordion
rv=this});// Accordion End
// owl carousel start
$(".patient-stories-owl").owlCarousel({loop:!0,margin:10,nav:!1,responsive:{0:{items:1},600:{items:2},1e3:{items:2}}}),$(".doctors-owl").owlCarousel({loop:!0,margin:10,nav:!1,responsive:{0:{items:1},600:{items:3},1e3:{items:3}}}),$(".hospitals-owl").owlCarousel({loop:!0,margin:10,nav:!1,responsive:{0:{items:1},600:{items:3},1e3:{items:3}}}),// owl carousel end
// hamburger animation start
$(document).ready(function(){$("#nav-icon2").click(function(){$(this).toggleClass("open")})});const ry=document.querySelector("#nav-icon2"),rd=document.querySelector(".small-nav");ry.addEventListener("click",function(){rd.classList.toggle("active-secondary")}),// hamburger animation end
// loader start
// Initially, hide the content and show the loader
document.querySelector(".content").style.display="none",document.querySelector(".loader-container").style.display="flex",// After 3 seconds, hide the loader and show the content
setTimeout(function(){document.querySelector(".loader-container").style.display="none",document.querySelector(".content").style.display="block"},2500);// 3000 milliseconds (3 seconds)
// loader end
//# sourceMappingURL=index.f5caea5e.js.map

//# sourceMappingURL=index.f5caea5e.js.map
