import{_ as k}from"./PageContainer-dWsT3JHK.js";import{k as m,m as S,l as V,o as y,e as U,w as l,q as e,s as _,bm as x,x as R}from"./index-0TomTaJD.js";import{a as q,E as C}from"./el-col-ZXaoi5CT.js";import{E as F,a as N}from"./el-form-item-VWNGemcl.js";import{E as B}from"./el-button-Gzshe2nf.js";import{E as $}from"./el-input-rEbAz4Ct.js";import"./el-message-AtOy-s3d.js";import"./_plugin-vue_export-helper-JexHLYfG.js";import"./castArray-6Htw4tAl.js";import"./error-tBjRQryL.js";import"./_baseClone-XddR6Gnl.js";const L={__name:"UserPassword",setup(h){const o=m({old_pwd:"",new_pwd:"",re_pwd:""}),i={old_pwd:[{required:!0,message:"请输入密码",trigger:"blur"},{pattern:/^\S{6,12}$/,message:"密码长度必须是6-12位的非空字符串",trigger:"blur"}],new_pwd:[{required:!0,message:"请输入新密码",trigger:"blur"},{pattern:/^\S{6,12}$/,message:"密码长度必须是6-12位的非空字符串",trigger:"blur"},{validator:(p,r,t)=>{r===o.value.old_pwd?t(new Error("原密码和新密码不能一样!")):t()},trigger:"blur"}],re_pwd:[{required:!0,message:"请再次确认新密码",trigger:"blur"},{pattern:/^\S{6,12}$/,message:"密码长度必须是6-12位的非空字符串",trigger:"blur"},{validator:(p,r,t)=>{r!==o.value.new_pwd?t(new Error("新密码和确认再次输入的新密码不一样!")):t()},trigger:"blur"}]},n=m(),w=S(),u=V(),c=async()=>{await n.value.validate()&&(await x({id:u.user.id,...o.value}),R({type:"success",message:"更换密码成功"}),u.setToken(""),u.setUser({}),w.push("/login"))},f=()=>{n.value.resetFields()};return(p,r)=>{const t=$,s=F,d=B,g=N,v=q,b=C,E=k;return y(),U(E,{title:"重置密码"},{default:l(()=>[e(b,null,{default:l(()=>[e(v,{span:12},{default:l(()=>[e(g,{model:o.value,rules:i,ref_key:"formRef",ref:n,"label-width":"100px",size:"large"},{default:l(()=>[e(s,{label:"原密码",prop:"old_pwd"},{default:l(()=>[e(t,{modelValue:o.value.old_pwd,"onUpdate:modelValue":r[0]||(r[0]=a=>o.value.old_pwd=a),type:"password"},null,8,["modelValue"])]),_:1}),e(s,{label:"新密码",prop:"new_pwd"},{default:l(()=>[e(t,{modelValue:o.value.new_pwd,"onUpdate:modelValue":r[1]||(r[1]=a=>o.value.new_pwd=a),type:"password"},null,8,["modelValue"])]),_:1}),e(s,{label:"确认新密码",prop:"re_pwd"},{default:l(()=>[e(t,{modelValue:o.value.re_pwd,"onUpdate:modelValue":r[2]||(r[2]=a=>o.value.re_pwd=a),type:"password"},null,8,["modelValue"])]),_:1}),e(s,null,{default:l(()=>[e(d,{onClick:c,type:"primary"},{default:l(()=>[_("修改密码")]),_:1}),e(d,{onClick:f},{default:l(()=>[_("重置")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})}}};export{L as default};
