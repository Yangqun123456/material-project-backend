import{cb as v,bH as p,bt as R,bI as Q,bu as tt,bJ as et,bs as $,bC as h,cc as rt,bq as W,bA as nt,cd as _,ce as y,c8 as at,cf as g}from"./index-0TomTaJD.js";var ot=v(p,"WeakMap");const m=ot;var x=Object.create,st=function(){function t(){}return function(r){if(!R(r))return{};if(x)return x(r);t.prototype=r;var e=new t;return t.prototype=void 0,e}}();const it=st;function Le(t,r){var e=-1,n=t.length;for(r||(r=Array(n));++e<n;)r[e]=t[e];return r}function De(t,r,e,n){var s=!e;e||(e={});for(var u=-1,c=r.length;++u<c;){var o=r[u],l=n?n(e[o],t[o],o,e,t):void 0;l===void 0&&(l=t[o]),s?Q(e,o,l):tt(e,o,l)}return e}var ut=9007199254740991;function k(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=ut}function q(t){return t!=null&&k(t.length)&&!et(t)}var ct=Object.prototype;function O(t){var r=t&&t.constructor,e=typeof r=="function"&&r.prototype||ct;return t===e}function ft(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}var pt="[object Arguments]";function P(t){return $(t)&&h(t)==pt}var N=Object.prototype,lt=N.hasOwnProperty,gt=N.propertyIsEnumerable,bt=P(function(){return arguments}())?P:function(t){return $(t)&&lt.call(t,"callee")&&!gt.call(t,"callee")};const dt=bt;function yt(){return!1}var H=typeof exports=="object"&&exports&&!exports.nodeType&&exports,S=H&&typeof module=="object"&&module&&!module.nodeType&&module,vt=S&&S.exports===H,I=vt?p.Buffer:void 0,ht=I?I.isBuffer:void 0,Tt=ht||yt;const mt=Tt;var jt="[object Arguments]",At="[object Array]",wt="[object Boolean]",$t="[object Date]",_t="[object Error]",Ot="[object Function]",xt="[object Map]",Pt="[object Number]",St="[object Object]",It="[object RegExp]",Ct="[object Set]",Et="[object String]",Mt="[object WeakMap]",Bt="[object ArrayBuffer]",Ut="[object DataView]",zt="[object Float32Array]",Kt="[object Float64Array]",Lt="[object Int8Array]",Dt="[object Int16Array]",Ft="[object Int32Array]",Gt="[object Uint8Array]",Vt="[object Uint8ClampedArray]",Rt="[object Uint16Array]",Wt="[object Uint32Array]",a={};a[zt]=a[Kt]=a[Lt]=a[Dt]=a[Ft]=a[Gt]=a[Vt]=a[Rt]=a[Wt]=!0;a[jt]=a[At]=a[Bt]=a[wt]=a[Ut]=a[$t]=a[_t]=a[Ot]=a[xt]=a[Pt]=a[St]=a[It]=a[Ct]=a[Et]=a[Mt]=!1;function kt(t){return $(t)&&k(t.length)&&!!a[h(t)]}function qt(t){return function(r){return t(r)}}var J=typeof exports=="object"&&exports&&!exports.nodeType&&exports,b=J&&typeof module=="object"&&module&&!module.nodeType&&module,Nt=b&&b.exports===J,T=Nt&&rt.process,Ht=function(){try{var t=b&&b.require&&b.require("util").types;return t||T&&T.binding&&T.binding("util")}catch{}}();const C=Ht;var E=C&&C.isTypedArray,Jt=E?qt(E):kt;const Xt=Jt;var Yt=Object.prototype,Zt=Yt.hasOwnProperty;function X(t,r){var e=W(t),n=!e&&dt(t),s=!e&&!n&&mt(t),u=!e&&!n&&!s&&Xt(t),c=e||n||s||u,o=c?ft(t.length,String):[],l=o.length;for(var i in t)(r||Zt.call(t,i))&&!(c&&(i=="length"||s&&(i=="offset"||i=="parent")||u&&(i=="buffer"||i=="byteLength"||i=="byteOffset")||nt(i,l)))&&o.push(i);return o}function Y(t,r){return function(e){return t(r(e))}}var Qt=Y(Object.keys,Object);const te=Qt;var ee=Object.prototype,re=ee.hasOwnProperty;function ne(t){if(!O(t))return te(t);var r=[];for(var e in Object(t))re.call(t,e)&&e!="constructor"&&r.push(e);return r}function ae(t){return q(t)?X(t):ne(t)}function oe(t){var r=[];if(t!=null)for(var e in Object(t))r.push(e);return r}var se=Object.prototype,ie=se.hasOwnProperty;function ue(t){if(!R(t))return oe(t);var r=O(t),e=[];for(var n in t)n=="constructor"&&(r||!ie.call(t,n))||e.push(n);return e}function Fe(t){return q(t)?X(t,!0):ue(t)}function ce(t,r){for(var e=-1,n=r.length,s=t.length;++e<n;)t[s+e]=r[e];return t}var fe=Y(Object.getPrototypeOf,Object);const pe=fe;function le(){this.__data__=new _,this.size=0}function ge(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e}function be(t){return this.__data__.get(t)}function de(t){return this.__data__.has(t)}var ye=200;function ve(t,r){var e=this.__data__;if(e instanceof _){var n=e.__data__;if(!y||n.length<ye-1)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new at(n)}return e.set(t,r),this.size=e.size,this}function d(t){var r=this.__data__=new _(t);this.size=r.size}d.prototype.clear=le;d.prototype.delete=ge;d.prototype.get=be;d.prototype.has=de;d.prototype.set=ve;var Z=typeof exports=="object"&&exports&&!exports.nodeType&&exports,M=Z&&typeof module=="object"&&module&&!module.nodeType&&module,he=M&&M.exports===Z,B=he?p.Buffer:void 0,U=B?B.allocUnsafe:void 0;function Ge(t,r){if(r)return t.slice();var e=t.length,n=U?U(e):new t.constructor(e);return t.copy(n),n}function Te(t,r){for(var e=-1,n=t==null?0:t.length,s=0,u=[];++e<n;){var c=t[e];r(c,e,t)&&(u[s++]=c)}return u}function me(){return[]}var je=Object.prototype,Ae=je.propertyIsEnumerable,z=Object.getOwnPropertySymbols,we=z?function(t){return t==null?[]:(t=Object(t),Te(z(t),function(r){return Ae.call(t,r)}))}:me;const $e=we;function _e(t,r,e){var n=r(t);return W(t)?n:ce(n,e(t))}function Ve(t){return _e(t,ae,$e)}var Oe=v(p,"DataView");const j=Oe;var xe=v(p,"Promise");const A=xe;var Pe=v(p,"Set");const w=Pe;var K="[object Map]",Se="[object Object]",L="[object Promise]",D="[object Set]",F="[object WeakMap]",G="[object DataView]",Ie=g(j),Ce=g(y),Ee=g(A),Me=g(w),Be=g(m),f=h;(j&&f(new j(new ArrayBuffer(1)))!=G||y&&f(new y)!=K||A&&f(A.resolve())!=L||w&&f(new w)!=D||m&&f(new m)!=F)&&(f=function(t){var r=h(t),e=r==Se?t.constructor:void 0,n=e?g(e):"";if(n)switch(n){case Ie:return G;case Ce:return K;case Ee:return L;case Me:return D;case Be:return F}return r});const Re=f;var Ue=p.Uint8Array;const V=Ue;function ze(t){var r=new t.constructor(t.byteLength);return new V(r).set(new V(t)),r}function We(t,r){var e=r?ze(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}function ke(t){return typeof t.constructor=="function"&&!O(t)?it(pe(t)):{}}export{w as S,V as U,Fe as a,ce as b,De as c,pe as d,_e as e,ze as f,$e as g,We as h,Re as i,qt as j,ae as k,Le as l,mt as m,C as n,Ge as o,ke as p,d as q,Ve as r,me as s,q as t,Xt as u,dt as v,k as w};
