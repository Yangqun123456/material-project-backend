import{aB as x,bC as J,S as Te,ah as Oe,U as he,L as de,b7 as Re,u as Me,bD as Ne,a_ as Se,a9 as ce,p as ae,aI as De,a7 as $e,bE as Ve,a8 as He,bF as _,a1 as H,V as ze,b as Ye,I as fe,d as we,q as T,h as le,ab as Ue,_ as Ke,E as Xe,bG as Ge,bh as Pe,c as A,k as I,aa as qe,bH as me,b6 as We,Z as O,o as m,e as g,w as v,n as c,J as pe,a6 as q,r as W,g as R,al as V,v as E,aL as j,a as ee,t as ne,ad as oe,ac as te,T as je,K as Be,bI as ke,b4 as ve,ai as Ze,aK as Je,ay as Ee,bc as be}from"./index-UqSCx6b_.js";import{E as Qe,u as ye}from"./_plugin-vue_export-helper-nTWoGSoG.js";import{E as Fe}from"./el-input-fGeuu7OZ.js";import{h as xe,d as _e,f as en}from"./el-popper-AImZMm5V.js";import{t as nn}from"./error-tBjRQryL.js";const on='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',tn=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,ge=e=>Array.from(e.querySelectorAll(on)).filter(n=>sn(n)&&tn(n)),sn=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},Rn=function(e,n,...s){let o;n.includes("mouse")||n.includes("click")?o="MouseEvents":n.includes("key")?o="KeyboardEvent":o="HTMLEvents";const a=document.createEvent(o);return a.initEvent(n,...s),e.dispatchEvent(a),e};var Z=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(Z||{});const se=e=>{const n=x(e)?e:[e],s=[];return n.forEach(o=>{var a;x(o)?s.push(...se(o)):J(o)&&x(o.children)?s.push(...se(o.children)):(s.push(o),J(o)&&((a=o.component)!=null&&a.subTree)&&s.push(...se(o.component.subTree)))}),s},an=(e,n,s)=>{let o={offsetX:0,offsetY:0};const a=d=>{const f=d.clientX,t=d.clientY,{offsetX:p,offsetY:h}=o,i=e.value.getBoundingClientRect(),Y=i.left,U=i.top,b=i.width,K=i.height,M=document.documentElement.clientWidth,k=document.documentElement.clientHeight,X=-Y+p,Q=-U+h,F=M-Y-b+p,S=k-U-K+h,D=P=>{const w=Math.min(Math.max(p+P.clientX-f,X),F),$=Math.min(Math.max(h+P.clientY-t,Q),S);o={offsetX:w,offsetY:$},e.value&&(e.value.style.transform=`translate(${de(w)}, ${de($)})`)},G=()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",G)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",G)},l=()=>{n.value&&e.value&&n.value.addEventListener("mousedown",a)},r=()=>{n.value&&e.value&&n.value.removeEventListener("mousedown",a)};Te(()=>{Oe(()=>{s.value?l():r()})}),he(()=>{r()})},ln=(e,n={})=>{Re(e)||nn("[useLockscreen]","You need to pass a ref param to this function");const s=n.ns||Me("popup"),o=Ne(()=>s.bm("parent","hidden"));if(!Se||ce(document.body,o.value))return;let a=0,l=!1,r="0";const d=()=>{setTimeout(()=>{He(document==null?void 0:document.body,o.value),l&&document&&(document.body.style.width=r)},200)};ae(e,f=>{if(!f){d();return}l=!ce(document.body,o.value),l&&(r=document.body.style.width),a=xe(s.namespace.value);const t=document.documentElement.clientHeight<document.body.scrollHeight,p=De(document.body,"overflowY");a>0&&(t||p==="scroll")&&l&&(document.body.style.width=`calc(100% - ${a}px)`),$e(document.body,o.value)}),Ve(()=>d())},Le=e=>{if(!e)return{onClick:_,onMousedown:_,onMouseup:_};let n=!1,s=!1;return{onClick:r=>{n&&s&&e(r),n=s=!1},onMousedown:r=>{n=r.target===r.currentTarget},onMouseup:r=>{s=r.target===r.currentTarget}}},re="_trap-focus-children",B=[],Ce=e=>{if(B.length===0)return;const n=B[B.length-1][re];if(n.length>0&&e.code===ze.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const s=e.shiftKey,o=e.target===n[0],a=e.target===n[n.length-1];o&&s&&(e.preventDefault(),n[n.length-1].focus()),a&&!s&&(e.preventDefault(),n[0].focus())}},rn={beforeMount(e){e[re]=ge(e),B.push(e),B.length<=1&&document.addEventListener("keydown",Ce)},updated(e){H(()=>{e[re]=ge(e)})},unmounted(){B.shift(),B.length===0&&document.removeEventListener("keydown",Ce)}},un=Ye({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:fe([String,Array,Object])},zIndex:{type:fe([String,Number])}}),dn={click:e=>e instanceof MouseEvent},cn="overlay";var fn=we({name:"ElOverlay",props:un,emits:dn,setup(e,{slots:n,emit:s}){const o=Me(cn),a=f=>{s("click",f)},{onClick:l,onMousedown:r,onMouseup:d}=Le(e.customMaskEvent?void 0:a);return()=>e.mask?T("div",{class:[o.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:l,onMousedown:r,onMouseup:d},[le(n,"default")],Z.STYLE|Z.CLASS|Z.PROPS,["onClick","onMouseup","onMousedown"]):Ue("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[le(n,"default")])}});const mn=fn,pn=we({name:"ElMessageBox",directives:{TrapFocus:rn},components:{ElButton:Qe,ElFocusTrap:_e,ElInput:Fe,ElOverlay:mn,ElIcon:Xe,...Ge},inheritAttrs:!1,props:{buttonSize:{type:String,validator:en},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{locale:s,zIndex:o,ns:a,size:l}=Pe("message-box",A(()=>e.buttonSize)),{t:r}=s,{nextZIndex:d}=o,f=I(!1),t=qe({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:d()}),p=A(()=>{const u=t.type;return{[a.bm("icon",u)]:u&&me[u]}}),h=ye(),i=ye(),Y=A(()=>t.icon||me[t.type]||""),U=A(()=>!!t.message),b=I(),K=I(),M=I(),k=I(),X=I(),Q=A(()=>t.confirmButtonClass);ae(()=>t.inputValue,async u=>{await H(),e.boxType==="prompt"&&u!==null&&$()},{immediate:!0}),ae(()=>f.value,u=>{var y,L;u&&(e.boxType!=="prompt"&&(t.autofocus?M.value=(L=(y=X.value)==null?void 0:y.$el)!=null?L:b.value:M.value=b.value),t.zIndex=d()),e.boxType==="prompt"&&(u?H().then(()=>{var ue;k.value&&k.value.$el&&(t.autofocus?M.value=(ue=Ae())!=null?ue:b.value:M.value=b.value)}):(t.editorErrorMessage="",t.validateError=!1))});const F=A(()=>e.draggable);an(b,K,F),Te(async()=>{await H(),e.closeOnHashChange&&window.addEventListener("hashchange",S)}),he(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",S)});function S(){f.value&&(f.value=!1,H(()=>{t.action&&n("action",t.action)}))}const D=()=>{e.closeOnClickModal&&w(t.distinguishCancelAndClose?"close":"cancel")},G=Le(D),P=u=>{if(t.inputType!=="textarea")return u.preventDefault(),w("confirm")},w=u=>{var y;e.boxType==="prompt"&&u==="confirm"&&!$()||(t.action=u,t.beforeClose?(y=t.beforeClose)==null||y.call(t,u,t,S):S())},$=()=>{if(e.boxType==="prompt"){const u=t.inputPattern;if(u&&!u.test(t.inputValue||""))return t.editorErrorMessage=t.inputErrorMessage||r("el.messagebox.error"),t.validateError=!0,!1;const y=t.inputValidator;if(typeof y=="function"){const L=y(t.inputValue);if(L===!1)return t.editorErrorMessage=t.inputErrorMessage||r("el.messagebox.error"),t.validateError=!0,!1;if(typeof L=="string")return t.editorErrorMessage=L,t.validateError=!0,!1}}return t.editorErrorMessage="",t.validateError=!1,!0},Ae=()=>{const u=k.value.$refs;return u.input||u.textarea},ie=()=>{w("close")},Ie=()=>{e.closeOnPressEscape&&ie()};return e.lockScroll&&ln(f),{...We(t),ns:a,overlayEvent:G,visible:f,hasMessage:U,typeClass:p,contentId:h,inputId:i,btnSize:l,iconComponent:Y,confirmButtonClasses:Q,rootRef:b,focusStartRef:M,headerRef:K,inputRef:k,confirmRef:X,doClose:S,handleClose:ie,onCloseRequested:Ie,handleWrapperClick:D,handleInputEnter:P,handleAction:w,t:r}}}),vn=["aria-label","aria-describedby"],En=["aria-label"],bn=["id"];function yn(e,n,s,o,a,l){const r=O("el-icon"),d=O("close"),f=O("el-input"),t=O("el-button"),p=O("el-focus-trap"),h=O("el-overlay");return m(),g(je,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=i=>e.$emit("vanish")),persisted:""},{default:v(()=>[te(T(h,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:v(()=>[E("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:c(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...i)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...i)),onMousedown:n[9]||(n[9]=(...i)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...i)),onMouseup:n[10]||(n[10]=(...i)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...i))},[T(p,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:v(()=>[E("div",{ref:"rootRef",class:c([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:pe(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=q(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(m(),ee("div",{key:0,ref:"headerRef",class:c(e.ns.e("header"))},[E("div",{class:c(e.ns.e("title"))},[e.iconComponent&&e.center?(m(),g(r,{key:0,class:c([e.ns.e("status"),e.typeClass])},{default:v(()=>[(m(),g(W(e.iconComponent)))]),_:1},8,["class"])):R("v-if",!0),E("span",null,V(e.title),1)],2),e.showClose?(m(),ee("button",{key:0,type:"button",class:c(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=i=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=j(q(i=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[T(r,{class:c(e.ns.e("close"))},{default:v(()=>[T(d)]),_:1},8,["class"])],42,En)):R("v-if",!0)],2)):R("v-if",!0),E("div",{id:e.contentId,class:c(e.ns.e("content"))},[E("div",{class:c(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(m(),g(r,{key:0,class:c([e.ns.e("status"),e.typeClass])},{default:v(()=>[(m(),g(W(e.iconComponent)))]),_:1},8,["class"])):R("v-if",!0),e.hasMessage?(m(),ee("div",{key:1,class:c(e.ns.e("message"))},[le(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(m(),g(W(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(m(),g(W(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:v(()=>[ne(V(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):R("v-if",!0)],2),te(E("div",{class:c(e.ns.e("input"))},[T(f,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=i=>e.inputValue=i),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:c({invalid:e.validateError}),onKeydown:j(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),E("div",{class:c(e.ns.e("errormsg")),style:pe({visibility:e.editorErrorMessage?"visible":"hidden"})},V(e.editorErrorMessage),7)],2),[[oe,e.showInput]])],10,bn),E("div",{class:c(e.ns.e("btns"))},[e.showCancelButton?(m(),g(t,{key:0,loading:e.cancelButtonLoading,class:c([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=i=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=j(q(i=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:v(()=>[ne(V(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):R("v-if",!0),te(T(t,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:c([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=i=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=j(q(i=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:v(()=>[ne(V(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[oe,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,vn)]),_:3},8,["z-index","overlay-class","mask"]),[[oe,e.visible]])]),_:3})}var gn=Ke(pn,[["render",yn],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const z=new Map,Cn=e=>{let n=document.body;return e.appendTo&&(Be(e.appendTo)&&(n=document.querySelector(e.appendTo)),be(e.appendTo)&&(n=e.appendTo),be(n)||(n=document.body)),n},Tn=(e,n,s=null)=>{const o=T(gn,e,Ee(e.message)||J(e.message)?{default:Ee(e.message)?e.message:()=>e.message}:null);return o.appContext=s,ke(o,n),Cn(e).appendChild(n.firstElementChild),o.component},hn=()=>document.createElement("div"),Mn=(e,n)=>{const s=hn();e.onVanish=()=>{ke(null,s),z.delete(a)},e.onAction=l=>{const r=z.get(a);let d;e.showInput?d={value:a.inputValue,action:l}:d=l,e.callback?e.callback(d,o.proxy):l==="cancel"||l==="close"?e.distinguishCancelAndClose&&l!=="cancel"?r.reject("close"):r.reject("cancel"):r.resolve(d)};const o=Tn(e,s,n),a=o.proxy;for(const l in e)ve(e,l)&&!ve(a.$props,l)&&(a[l]=e[l]);return a.visible=!0,a};function N(e,n=null){if(!Se)return Promise.reject();let s;return Be(e)||J(e)?e={message:e}:s=e.callback,new Promise((o,a)=>{const l=Mn(e,n??N._context);z.set(l,{options:e,callback:s,resolve:o,reject:a})})}const Sn=["alert","confirm","prompt"],wn={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};Sn.forEach(e=>{N[e]=Bn(e)});function Bn(e){return(n,s,o,a)=>{let l="";return Ze(s)?(o=s,l=""):Je(s)?l="":l=s,N(Object.assign({title:l,message:n,type:"",...wn[e]},o,{boxType:e}),a)}}N.close=()=>{z.forEach((e,n)=>{n.doClose()}),z.clear()};N._context=null;const C=N;C.install=e=>{C._context=e._context,e.config.globalProperties.$msgbox=C,e.config.globalProperties.$messageBox=C,e.config.globalProperties.$alert=C.alert,e.config.globalProperties.$confirm=C.confirm,e.config.globalProperties.$prompt=C.prompt};const Nn=C;export{Nn as E,mn as a,Le as b,ln as c,se as f,Rn as t,an as u};
