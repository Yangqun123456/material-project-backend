import{_ as w}from"./PageContainer-_vgT6EjL.js";import{l as m,k as u,o as U,e as y,w as l,q as e,t as x,bR as I,y as R}from"./index-UqSCx6b_.js";import{a as S,E as q}from"./el-col-JRKTydOI.js";import{E as B,a as C}from"./el-form-item-QXEwg2Sk.js";import{E as F}from"./_plugin-vue_export-helper-nTWoGSoG.js";import{E as N}from"./el-input-fGeuu7OZ.js";import"./el-message-utGhAwQe.js";import"./error-tBjRQryL.js";const H={__name:"UserProfile",setup(z){const{user:{username:i,nickname:p,email:_,id:d}}=m(),a=u({username:i,nickname:p,email:_,id:d}),c={nickname:[{required:!0,message:"请输入用户昵称",trigger:"blur"},{pattern:/^\S{2,10}$/,message:"昵称必须是2-10位的非空字符串",trigger:"blur"}],email:[{required:!0,message:"请输入用户邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}]},s=u(),f=async()=>{await s.value.validate()&&(await I(a.value)).data.status===0&&(await m().getUser(),R.success("修改成功"))};return(g,t)=>{const n=N,r=B,v=F,b=C,E=S,V=q,k=w;return U(),y(k,{title:"基本资料"},{default:l(()=>[e(V,null,{default:l(()=>[e(E,{span:12},{default:l(()=>[e(b,{model:a.value,rules:c,ref_key:"formRef",ref:s,"label-width":"100px",size:"large"},{default:l(()=>[e(r,{label:"登录名称"},{default:l(()=>[e(n,{modelValue:a.value.username,"onUpdate:modelValue":t[0]||(t[0]=o=>a.value.username=o),disabled:""},null,8,["modelValue"])]),_:1}),e(r,{label:"用户昵称",prop:"nickname"},{default:l(()=>[e(n,{modelValue:a.value.nickname,"onUpdate:modelValue":t[1]||(t[1]=o=>a.value.nickname=o)},null,8,["modelValue"])]),_:1}),e(r,{label:"用户邮箱",prop:"email"},{default:l(()=>[e(n,{modelValue:a.value.email,"onUpdate:modelValue":t[2]||(t[2]=o=>a.value.email=o)},null,8,["modelValue"])]),_:1}),e(r,null,{default:l(()=>[e(v,{type:"primary",onClick:f},{default:l(()=>[x("提交修改")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})}}};export{H as default};