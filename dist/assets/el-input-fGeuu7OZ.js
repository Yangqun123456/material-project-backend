import{a_ as ke,aX as Ke,c as p,a5 as Fe,bK as je,k as N,bw as q,p as G,Y as We,ay as Ue,H as we,b as Xe,aD as Ye,I as ae,i as Se,ag as qe,K as oe,d as Pe,aE as Ge,O as Je,u as Ce,aj as Ze,a1 as P,S as Qe,X as et,ac as tt,ad as at,o as v,a as S,g as m,F as ne,n as h,f as t,h as U,v as V,e as E,w as $,r as X,E as H,M as se,aC as ot,q as nt,a6 as st,bF as lt,al as Y,J as rt,_ as it,ai as Ee,bz as ut,c5 as ct,c6 as dt,j as pt}from"./index-UqSCx6b_.js";import{c as ft,e as vt,a as mt,d as yt}from"./_plugin-vue_export-helper-nTWoGSoG.js";import{d as Ie,i as ht}from"./error-tBjRQryL.js";const gt=()=>ke&&/firefox/i.test(window.navigator.userAgent);function _t(){if(!arguments.length)return[];var o=arguments[0];return Ke(o)?o:[o]}const le="update:modelValue",Lt="change",bt=o=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o),xt=["class","style"],wt=/^on[A-Z]/,St=(o={})=>{const{excludeListeners:f=!1,excludeKeys:u}=o,a=p(()=>((u==null?void 0:u.value)||[]).concat(xt)),r=Fe();return r?p(()=>{var i;return je(Object.entries((i=r.proxy)==null?void 0:i.$attrs).filter(([c])=>!a.value.includes(c)&&!(f&&wt.test(c))))}):p(()=>({}))};function Ct(o){const f=N();function u(){if(o.value==null)return;const{selectionStart:r,selectionEnd:i,value:c}=o.value;if(r==null||i==null)return;const g=c.slice(0,Math.max(0,r)),d=c.slice(Math.max(0,i));f.value={selectionStart:r,selectionEnd:i,value:c,beforeTxt:g,afterTxt:d}}function a(){if(o.value==null||f.value==null)return;const{value:r}=o.value,{beforeTxt:i,afterTxt:c,selectionStart:g}=f.value;if(i==null||c==null||g==null)return;let d=r.length;if(r.endsWith(c))d=r.length-c.length;else if(r.startsWith(i))d=i.length;else{const b=i[g-1],w=r.indexOf(b,g-1);w!==-1&&(d=w+1)}o.value.setSelectionRange(d,d)}return[u,a]}function Et(o,{afterFocus:f,beforeBlur:u,afterBlur:a}={}){const r=Fe(),{emit:i}=r,c=q(),g=N(!1),d=s=>{g.value||(g.value=!0,i("focus",s),f==null||f())},b=s=>{var T;Ue(u)&&u(s)||s.relatedTarget&&((T=c.value)!=null&&T.contains(s.relatedTarget))||(g.value=!1,i("blur",s),a==null||a())},w=()=>{var s;(s=o.value)==null||s.focus()};return G(c,s=>{s&&s.setAttribute("tabindex","-1")}),We(c,"click",w),{wrapperRef:c,isFocused:g,handleFocus:d,handleBlur:b}}let x;const It=`
  height:0 !important;
  visibility:hidden !important;
  ${gt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,zt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function kt(o){const f=window.getComputedStyle(o),u=f.getPropertyValue("box-sizing"),a=Number.parseFloat(f.getPropertyValue("padding-bottom"))+Number.parseFloat(f.getPropertyValue("padding-top")),r=Number.parseFloat(f.getPropertyValue("border-bottom-width"))+Number.parseFloat(f.getPropertyValue("border-top-width"));return{contextStyle:zt.map(c=>`${c}:${f.getPropertyValue(c)}`).join(";"),paddingSize:a,borderSize:r,boxSizing:u}}function ze(o,f=1,u){var a;x||(x=document.createElement("textarea"),document.body.appendChild(x));const{paddingSize:r,borderSize:i,boxSizing:c,contextStyle:g}=kt(o);x.setAttribute("style",`${g};${It}`),x.value=o.value||o.placeholder||"";let d=x.scrollHeight;const b={};c==="border-box"?d=d+i:c==="content-box"&&(d=d-r),x.value="";const w=x.scrollHeight-r;if(we(f)){let s=w*f;c==="border-box"&&(s=s+r+i),d=Math.max(s,d),b.minHeight=`${s}px`}if(we(u)){let s=w*u;c==="border-box"&&(s=s+r+i),d=Math.min(s,d)}return b.height=`${d}px`,(a=x.parentNode)==null||a.removeChild(x),x=void 0,b}const Ft=Xe({id:{type:String,default:void 0},size:Ye,disabled:Boolean,modelValue:{type:ae([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ae([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Se},prefixIcon:{type:Se},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ae([Object,Array,String]),default:()=>qe({})},autofocus:{type:Boolean,default:!1}}),Pt={[le]:o=>oe(o),input:o=>oe(o),change:o=>oe(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},Vt=["role"],Nt=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],Tt=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],Rt=Pe({name:"ElInput",inheritAttrs:!1}),At=Pe({...Rt,props:Ft,emits:Pt,setup(o,{expose:f,emit:u}){const a=o,r=Ge(),i=Je(),c=p(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=r["aria-haspopup"],e["aria-owns"]=r["aria-owns"],e["aria-expanded"]=r["aria-expanded"]),e}),g=p(()=>[a.type==="textarea"?ie.b():l.b(),l.m(re.value),l.is("disabled",z.value),l.is("exceed",Re.value),{[l.b("group")]:i.prepend||i.append,[l.bm("group","append")]:i.append,[l.bm("group","prepend")]:i.prepend,[l.m("prefix")]:i.prefix||a.prefixIcon,[l.m("suffix")]:i.suffix||a.suffixIcon||a.clearable||a.showPassword,[l.bm("suffix","password-clear")]:j.value&&Q.value},r.class]),d=p(()=>[l.e("wrapper"),l.is("focus",Z.value)]),b=St({excludeKeys:p(()=>Object.keys(c.value))}),{form:w,formItem:s}=ft(),{inputId:T}=vt(a,{formItemContext:s}),re=mt(),z=yt(),l=Ce("input"),ie=Ce("textarea"),O=q(),C=q(),J=N(!1),R=N(!1),_=N(!1),ue=N(),L=q(a.inputStyle),k=p(()=>O.value||C.value),{wrapperRef:Ve,isFocused:Z,handleFocus:D,handleBlur:K}=Et(k,{afterBlur(){var e;a.validateEvent&&((e=s==null?void 0:s.validate)==null||e.call(s,"blur").catch(n=>Ie()))}}),ce=p(()=>{var e;return(e=w==null?void 0:w.statusIcon)!=null?e:!1}),A=p(()=>(s==null?void 0:s.validateState)||""),de=p(()=>A.value&&ut[A.value]),Ne=p(()=>_.value?ct:dt),Te=p(()=>[r.style,a.inputStyle]),pe=p(()=>[a.inputStyle,L.value,{resize:a.resize}]),I=p(()=>ht(a.modelValue)?"":String(a.modelValue)),j=p(()=>a.clearable&&!z.value&&!a.readonly&&!!I.value&&(Z.value||J.value)),Q=p(()=>a.showPassword&&!z.value&&!a.readonly&&!!I.value&&(!!I.value||Z.value)),F=p(()=>a.showWordLimit&&!!b.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!z.value&&!a.readonly&&!a.showPassword),ee=p(()=>I.value.length),Re=p(()=>!!F.value&&ee.value>Number(b.value.maxlength)),Ae=p(()=>!!i.suffix||!!a.suffixIcon||j.value||a.showPassword||F.value||!!A.value&&ce.value),[Be,Me]=Ct(O);Ze(C,e=>{if($e(),!F.value||a.resize!=="both")return;const n=e[0],{width:y}=n.contentRect;ue.value={right:`calc(100% - ${y+15+6}px)`}});const B=()=>{const{type:e,autosize:n}=a;if(!(!ke||e!=="textarea"||!C.value))if(n){const y=Ee(n)?n.minRows:void 0,W=Ee(n)?n.maxRows:void 0,xe=ze(C.value,y,W);L.value={overflowY:"hidden",...xe},P(()=>{C.value.offsetHeight,L.value=xe})}else L.value={minHeight:ze(C.value).minHeight}},$e=(e=>{let n=!1;return()=>{var y;if(n||!a.autosize)return;((y=C.value)==null?void 0:y.offsetParent)===null||(e(),n=!0)}})(B),M=()=>{const e=k.value,n=a.formatter?a.formatter(I.value):I.value;!e||e.value===n||(e.value=n)},te=async e=>{Be();let{value:n}=e.target;if(a.formatter&&(n=a.parser?a.parser(n):n),!R.value){if(n===I.value){M();return}u(le,n),u("input",n),await P(),M(),Me()}},fe=e=>{u("change",e.target.value)},ve=e=>{u("compositionstart",e),R.value=!0},me=e=>{var n;u("compositionupdate",e);const y=(n=e.target)==null?void 0:n.value,W=y[y.length-1]||"";R.value=!bt(W)},ye=e=>{u("compositionend",e),R.value&&(R.value=!1,te(e))},He=()=>{_.value=!_.value,he()},he=async()=>{var e;await P(),(e=k.value)==null||e.focus()},Oe=()=>{var e;return(e=k.value)==null?void 0:e.blur()},_e=e=>{J.value=!1,u("mouseleave",e)},Le=e=>{J.value=!0,u("mouseenter",e)},ge=e=>{u("keydown",e)},De=()=>{var e;(e=k.value)==null||e.select()},be=()=>{u(le,""),u("change",""),u("clear"),u("input","")};return G(()=>a.modelValue,()=>{var e;P(()=>B()),a.validateEvent&&((e=s==null?void 0:s.validate)==null||e.call(s,"change").catch(n=>Ie()))}),G(I,()=>M()),G(()=>a.type,async()=>{await P(),M(),B()}),Qe(()=>{!a.formatter&&a.parser,M(),P(B)}),f({input:O,textarea:C,ref:k,textareaStyle:pe,autosize:et(a,"autosize"),focus:he,blur:Oe,select:De,clear:be,resizeTextarea:B}),(e,n)=>tt((v(),S("div",se(t(c),{class:t(g),style:t(Te),role:e.containerRole,onMouseenter:Le,onMouseleave:_e}),[m(" input "),e.type!=="textarea"?(v(),S(ne,{key:0},[m(" prepend slot "),e.$slots.prepend?(v(),S("div",{key:0,class:h(t(l).be("group","prepend"))},[U(e.$slots,"prepend")],2)):m("v-if",!0),V("div",{ref_key:"wrapperRef",ref:Ve,class:h(t(d))},[m(" prefix slot "),e.$slots.prefix||e.prefixIcon?(v(),S("span",{key:0,class:h(t(l).e("prefix"))},[V("span",{class:h(t(l).e("prefix-inner"))},[U(e.$slots,"prefix"),e.prefixIcon?(v(),E(t(H),{key:0,class:h(t(l).e("icon"))},{default:$(()=>[(v(),E(X(e.prefixIcon)))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0),V("input",se({id:t(T),ref_key:"input",ref:O,class:t(l).e("inner")},t(b),{type:e.showPassword?_.value?"text":"password":e.type,disabled:t(z),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:a.form,autofocus:a.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:ye,onInput:te,onFocus:n[0]||(n[0]=(...y)=>t(D)&&t(D)(...y)),onBlur:n[1]||(n[1]=(...y)=>t(K)&&t(K)(...y)),onChange:fe,onKeydown:ge}),null,16,Nt),m(" suffix slot "),t(Ae)?(v(),S("span",{key:1,class:h(t(l).e("suffix"))},[V("span",{class:h(t(l).e("suffix-inner"))},[!t(j)||!t(Q)||!t(F)?(v(),S(ne,{key:0},[U(e.$slots,"suffix"),e.suffixIcon?(v(),E(t(H),{key:0,class:h(t(l).e("icon"))},{default:$(()=>[(v(),E(X(e.suffixIcon)))]),_:1},8,["class"])):m("v-if",!0)],64)):m("v-if",!0),t(j)?(v(),E(t(H),{key:1,class:h([t(l).e("icon"),t(l).e("clear")]),onMousedown:st(t(lt),["prevent"]),onClick:be},{default:$(()=>[nt(t(ot))]),_:1},8,["class","onMousedown"])):m("v-if",!0),t(Q)?(v(),E(t(H),{key:2,class:h([t(l).e("icon"),t(l).e("password")]),onClick:He},{default:$(()=>[(v(),E(X(t(Ne))))]),_:1},8,["class"])):m("v-if",!0),t(F)?(v(),S("span",{key:3,class:h(t(l).e("count"))},[V("span",{class:h(t(l).e("count-inner"))},Y(t(ee))+" / "+Y(t(b).maxlength),3)],2)):m("v-if",!0),t(A)&&t(de)&&t(ce)?(v(),E(t(H),{key:4,class:h([t(l).e("icon"),t(l).e("validateIcon"),t(l).is("loading",t(A)==="validating")])},{default:$(()=>[(v(),E(X(t(de))))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0)],2),m(" append slot "),e.$slots.append?(v(),S("div",{key:1,class:h(t(l).be("group","append"))},[U(e.$slots,"append")],2)):m("v-if",!0)],64)):(v(),S(ne,{key:1},[m(" textarea "),V("textarea",se({id:t(T),ref_key:"textarea",ref:C,class:t(ie).e("inner")},t(b),{tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(pe),"aria-label":e.label,placeholder:e.placeholder,form:a.form,autofocus:a.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:ye,onInput:te,onFocus:n[2]||(n[2]=(...y)=>t(D)&&t(D)(...y)),onBlur:n[3]||(n[3]=(...y)=>t(K)&&t(K)(...y)),onChange:fe,onKeydown:ge}),null,16,Tt),t(F)?(v(),S("span",{key:0,style:rt(ue.value),class:h(t(l).e("count"))},Y(t(ee))+" / "+Y(t(b).maxlength),7)):m("v-if",!0)],64))],16,Vt)),[[at,e.type!=="hidden"]])}});var Bt=it(At,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const Dt=pt(Bt);export{Lt as C,Dt as E,le as U,_t as c,bt as i};
