import{bZ as U,br as A,bq as X,b_ as Y,bE as pe,bA as ge,bG as xe,b$ as Ce,aD as j,I as K,F as H,aS as G,P as E,c as p,aL as z,p as _,$ as ee,a3 as ne,k as D,aB as w,ah as ye,bM as q,d as L,M as le,u as T,o as C,e as ae,w as te,f as u,n as x,aZ as I,a4 as $,a as y,c0 as F,ab as N,t as Z,h as O,a5 as Se,ak as oe,s as se,g as P,r as ie,_ as M,H as Le,b as Be,G as we,O as Ee,b4 as Ie,j as $e,N as ue}from"./index-0TomTaJD.js";import{U as V}from"./el-input-rEbAz4Ct.js";import{d as Fe,c as R,a as W,g as re}from"./_plugin-vue_export-helper-JexHLYfG.js";import{d as de,i as Ne}from"./error-tBjRQryL.js";import{i as Ve}from"./isEqual-VZOgOHnl.js";import{v as be,b as Ge,w as ze}from"./el-message-AtOy-s3d.js";function De(e){return e}function Pe(e,n,a){switch(a.length){case 0:return e.call(n);case 1:return e.call(n,a[0]);case 2:return e.call(n,a[0],a[1]);case 3:return e.call(n,a[0],a[1],a[2])}return e.apply(n,a)}var Te=800,Oe=16,Me=Date.now;function Re(e){var n=0,a=0;return function(){var l=Me(),t=Oe-(l-a);if(a=l,t>0){if(++n>=Te)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function Ue(e){return function(){return e}}var Ae=U?function(e,n){return U(e,"toString",{configurable:!0,enumerable:!1,value:Ue(n),writable:!0})}:De;const Ke=Ae;var He=Re(Ke);const qe=He;var J=Math.max;function Ze(e,n,a){return n=J(n===void 0?e.length-1:n,0),function(){for(var l=arguments,t=-1,d=J(l.length-n,0),b=Array(d);++t<d;)b[t]=l[n+t];t=-1;for(var o=Array(n+1);++t<n;)o[t]=l[t];return o[n]=a(b),Pe(e,this,o)}}var Q=A?A.isConcatSpreadable:void 0;function We(e){return X(e)||be(e)||!!(Q&&e&&e[Q])}function ce(e,n,a,l,t){var d=-1,b=e.length;for(a||(a=We),t||(t=[]);++d<b;){var o=e[d];n>0&&a(o)?n>1?ce(o,n-1,a,l,t):Ge(t,o):l||(t[t.length]=o)}return t}function Je(e){var n=e==null?0:e.length;return n?ce(e,1):[]}function Qe(e){return qe(Ze(e,void 0,Je),e+"")}function Xe(e,n){return e!=null&&n in Object(e)}function Ye(e,n,a){n=Y(n,e);for(var l=-1,t=n.length,d=!1;++l<t;){var b=pe(n[l]);if(!(d=e!=null&&a(e,b)))break;e=e[b]}return d||++l!=t?d:(t=e==null?0:e.length,!!t&&ze(t)&&ge(b,t)&&(X(e)||be(e)))}function je(e,n){return e!=null&&Ye(e,n,Xe)}function _e(e,n,a){for(var l=-1,t=n.length,d={};++l<t;){var b=n[l],o=xe(e,b);a(o,b)&&Ce(d,Y(b,e),o)}return d}function en(e,n){return _e(e,n,function(a,l){return je(e,l)})}var nn=Qe(function(e,n){return e==null?{}:en(e,n)});const ln=nn,ve={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:j,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},me={[V]:e=>K(e)||H(e)||G(e),change:e=>K(e)||H(e)||G(e)},B=Symbol("checkboxGroupContextKey"),an=({model:e,isChecked:n})=>{const a=E(B,void 0),l=p(()=>{var d,b;const o=(d=a==null?void 0:a.max)==null?void 0:d.value,m=(b=a==null?void 0:a.min)==null?void 0:b.value;return!z(o)&&e.value.length>=o&&!n.value||!z(m)&&e.value.length<=m&&n.value});return{isDisabled:Fe(p(()=>(a==null?void 0:a.disabled.value)||l.value)),isLimitDisabled:l}},tn=(e,{model:n,isLimitExceeded:a,hasOwnLabel:l,isDisabled:t,isLabeledByFormItem:d})=>{const b=E(B,void 0),{formItem:o}=R(),{emit:m}=ne();function s(i){var v,h;return i===e.trueLabel||i===!0?(v=e.trueLabel)!=null?v:!0:(h=e.falseLabel)!=null?h:!1}function f(i,v){m("change",s(i),v)}function k(i){if(a.value)return;const v=i.target;m("change",s(v.checked),i)}async function S(i){a.value||!l.value&&!t.value&&d.value&&(i.composedPath().some(c=>c.tagName==="LABEL")||(n.value=s([!1,e.falseLabel].includes(n.value)),await ee(),f(n.value,i)))}const r=p(()=>(b==null?void 0:b.validateEvent)||e.validateEvent);return _(()=>e.modelValue,()=>{r.value&&(o==null||o.validate("change").catch(i=>de()))}),{handleChange:k,onClickRoot:S}},on=e=>{const n=D(!1),{emit:a}=ne(),l=E(B,void 0),t=p(()=>z(l)===!1),d=D(!1);return{model:p({get(){var o,m;return t.value?(o=l==null?void 0:l.modelValue)==null?void 0:o.value:(m=e.modelValue)!=null?m:n.value},set(o){var m,s;t.value&&w(o)?(d.value=((m=l==null?void 0:l.max)==null?void 0:m.value)!==void 0&&o.length>(l==null?void 0:l.max.value),d.value===!1&&((s=l==null?void 0:l.changeEvent)==null||s.call(l,o))):(a(V,o),n.value=o)}}),isGroup:t,isLimitExceeded:d}},sn=(e,n,{model:a})=>{const l=E(B,void 0),t=D(!1),d=p(()=>{const s=a.value;return G(s)?s:w(s)?ye(e.label)?s.map(q).some(f=>Ve(f,e.label)):s.map(q).includes(e.label):s!=null?s===e.trueLabel:!!s}),b=W(p(()=>{var s;return(s=l==null?void 0:l.size)==null?void 0:s.value}),{prop:!0}),o=W(p(()=>{var s;return(s=l==null?void 0:l.size)==null?void 0:s.value})),m=p(()=>!!n.default||!Ne(e.label));return{checkboxButtonSize:b,isChecked:d,isFocused:t,checkboxSize:o,hasOwnLabel:m}},un=(e,{model:n})=>{function a(){w(n.value)&&!n.value.includes(e.label)?n.value.push(e.label):n.value=e.trueLabel||!0}e.checked&&a()},fe=(e,n)=>{const{formItem:a}=R(),{model:l,isGroup:t,isLimitExceeded:d}=on(e),{isFocused:b,isChecked:o,checkboxButtonSize:m,checkboxSize:s,hasOwnLabel:f}=sn(e,n,{model:l}),{isDisabled:k}=an({model:l,isChecked:o}),{inputId:S,isLabeledByFormItem:r}=re(e,{formItemContext:a,disableIdGeneration:f,disableIdManagement:t}),{handleChange:i,onClickRoot:v}=tn(e,{model:l,isLimitExceeded:d,hasOwnLabel:f,isDisabled:k,isLabeledByFormItem:r});return un(e,{model:l}),{inputId:S,isLabeledByFormItem:r,isChecked:o,isDisabled:k,isFocused:b,checkboxButtonSize:m,checkboxSize:s,hasOwnLabel:f,model:l,handleChange:i,onClickRoot:v}},rn=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],dn=["id","indeterminate","disabled","value","name","tabindex"],bn=L({name:"ElCheckbox"}),cn=L({...bn,props:ve,emits:me,setup(e){const n=e,a=le(),{inputId:l,isLabeledByFormItem:t,isChecked:d,isDisabled:b,isFocused:o,checkboxSize:m,hasOwnLabel:s,model:f,handleChange:k,onClickRoot:S}=fe(n,a),r=T("checkbox"),i=p(()=>[r.b(),r.m(m.value),r.is("disabled",b.value),r.is("bordered",n.border),r.is("checked",d.value)]),v=p(()=>[r.e("input"),r.is("disabled",b.value),r.is("checked",d.value),r.is("indeterminate",n.indeterminate),r.is("focus",o.value)]);return(h,c)=>(C(),ae(ie(!u(s)&&u(t)?"span":"label"),{class:x(u(i)),"aria-controls":h.indeterminate?h.controls:null,onClick:u(S)},{default:te(()=>[Z("span",{class:x(u(v))},[h.trueLabel||h.falseLabel?N((C(),y("input",{key:0,id:u(l),"onUpdate:modelValue":c[0]||(c[0]=g=>I(f)?f.value=g:null),class:x(u(r).e("original")),type:"checkbox",indeterminate:h.indeterminate,name:h.name,tabindex:h.tabindex,disabled:u(b),"true-value":h.trueLabel,"false-value":h.falseLabel,onChange:c[1]||(c[1]=(...g)=>u(k)&&u(k)(...g)),onFocus:c[2]||(c[2]=g=>o.value=!0),onBlur:c[3]||(c[3]=g=>o.value=!1),onClick:c[4]||(c[4]=$(()=>{},["stop"]))},null,42,rn)),[[F,u(f)]]):N((C(),y("input",{key:1,id:u(l),"onUpdate:modelValue":c[5]||(c[5]=g=>I(f)?f.value=g:null),class:x(u(r).e("original")),type:"checkbox",indeterminate:h.indeterminate,disabled:u(b),value:h.label,name:h.name,tabindex:h.tabindex,onChange:c[6]||(c[6]=(...g)=>u(k)&&u(k)(...g)),onFocus:c[7]||(c[7]=g=>o.value=!0),onBlur:c[8]||(c[8]=g=>o.value=!1),onClick:c[9]||(c[9]=$(()=>{},["stop"]))},null,42,dn)),[[F,u(f)]]),Z("span",{class:x(u(r).e("inner"))},null,2)],2),u(s)?(C(),y("span",{key:0,class:x(u(r).e("label"))},[O(h.$slots,"default"),h.$slots.default?P("v-if",!0):(C(),y(Se,{key:0},[se(oe(h.label),1)],64))],2)):P("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var vn=M(cn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const mn=["name","tabindex","disabled","true-value","false-value"],fn=["name","tabindex","disabled","value"],hn=L({name:"ElCheckboxButton"}),kn=L({...hn,props:ve,emits:me,setup(e){const n=e,a=le(),{isFocused:l,isChecked:t,isDisabled:d,checkboxButtonSize:b,model:o,handleChange:m}=fe(n,a),s=E(B,void 0),f=T("checkbox"),k=p(()=>{var r,i,v,h;const c=(i=(r=s==null?void 0:s.fill)==null?void 0:r.value)!=null?i:"";return{backgroundColor:c,borderColor:c,color:(h=(v=s==null?void 0:s.textColor)==null?void 0:v.value)!=null?h:"",boxShadow:c?`-1px 0 0 0 ${c}`:void 0}}),S=p(()=>[f.b("button"),f.bm("button",b.value),f.is("disabled",d.value),f.is("checked",t.value),f.is("focus",l.value)]);return(r,i)=>(C(),y("label",{class:x(u(S))},[r.trueLabel||r.falseLabel?N((C(),y("input",{key:0,"onUpdate:modelValue":i[0]||(i[0]=v=>I(o)?o.value=v:null),class:x(u(f).be("button","original")),type:"checkbox",name:r.name,tabindex:r.tabindex,disabled:u(d),"true-value":r.trueLabel,"false-value":r.falseLabel,onChange:i[1]||(i[1]=(...v)=>u(m)&&u(m)(...v)),onFocus:i[2]||(i[2]=v=>l.value=!0),onBlur:i[3]||(i[3]=v=>l.value=!1),onClick:i[4]||(i[4]=$(()=>{},["stop"]))},null,42,mn)),[[F,u(o)]]):N((C(),y("input",{key:1,"onUpdate:modelValue":i[5]||(i[5]=v=>I(o)?o.value=v:null),class:x(u(f).be("button","original")),type:"checkbox",name:r.name,tabindex:r.tabindex,disabled:u(d),value:r.label,onChange:i[6]||(i[6]=(...v)=>u(m)&&u(m)(...v)),onFocus:i[7]||(i[7]=v=>l.value=!0),onBlur:i[8]||(i[8]=v=>l.value=!1),onClick:i[9]||(i[9]=$(()=>{},["stop"]))},null,42,fn)),[[F,u(o)]]),r.$slots.default||r.label?(C(),y("span",{key:2,class:x(u(f).be("button","inner")),style:Le(u(t)?u(k):void 0)},[O(r.$slots,"default",{},()=>[se(oe(r.label),1)])],6)):P("v-if",!0)],2))}});var he=M(kn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const pn=Be({modelValue:{type:we(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:j,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),gn={[V]:e=>w(e),change:e=>w(e)},xn=L({name:"ElCheckboxGroup"}),Cn=L({...xn,props:pn,emits:gn,setup(e,{emit:n}){const a=e,l=T("checkbox"),{formItem:t}=R(),{inputId:d,isLabeledByFormItem:b}=re(a,{formItemContext:t}),o=async s=>{n(V,s),await ee(),n("change",s)},m=p({get(){return a.modelValue},set(s){o(s)}});return Ee(B,{...ln(Ie(a),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:m,changeEvent:o}),_(()=>a.modelValue,()=>{a.validateEvent&&(t==null||t.validate("change").catch(s=>de()))}),(s,f)=>{var k;return C(),ae(ie(s.tag),{id:u(d),class:x(u(l).b("group")),role:"group","aria-label":u(b)?void 0:s.label||"checkbox-group","aria-labelledby":u(b)?(k=u(t))==null?void 0:k.labelId:void 0},{default:te(()=>[O(s.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var ke=M(Cn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const In=$e(vn,{CheckboxButton:he,CheckboxGroup:ke});ue(he);ue(ke);export{In as E,ce as b,Je as f,je as h,De as i,Ze as o,qe as s};
