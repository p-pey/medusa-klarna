import{S as d}from"./chunk-LFLGEXIG-CWErO_vC.js";import{S as u}from"./chunk-2RQLKDBF-qiSEwBBB.js";import{eu as l,j as t,q as m,R as f,d as g,a as h,dv as x,ev as y,s as P,b as v,u as S,es as j,H as w,A as _,t as p}from"./index-zDamnV0F.js";import{u as b}from"./use-prompt-DpNi1YEx.js";import{T as D}from"./trash-DOxa9shU.js";import{C}from"./container-DeMh6UN8.js";import"./Trans-DtMFVRq-.js";import"./x-mark-mini-BbN1gcjE.js";import"./check-ByEBFFrn.js";import"./prompt-DE1bPeyn.js";var J=e=>{const{shipping_profile_id:i}=e.params||{},{shipping_profile:s}=l(i,void 0,{initialData:e.data,enabled:!!i});return s?t.jsx("span",{children:s.name}):null},T=e=>({queryKey:y.detail(e),queryFn:async()=>P.admin.shippingProfile.retrieve(e)}),K=async({params:e})=>{const i=e.shipping_profile_id,s=T(i);return m.ensureQueryData(s)},q=({profile:e})=>{const{t:i}=v(),s=b(),a=S(),{mutateAsync:n}=j(e.id),r=async()=>{await s({title:i("shippingProfile.delete.title"),description:i("shippingProfile.delete.description",{name:e.name}),verificationText:e.name,verificationInstruction:i("general.typeToConfirm"),confirmText:i("actions.delete"),cancelText:i("actions.cancel")})&&await n(void 0,{onSuccess:()=>{p.success(i("shippingProfile.delete.successToast",{name:e.name})),a("/settings/locations/shipping-profiles",{replace:!0})},onError:c=>{p.error(c.message)}})};return t.jsxs(C,{className:"divide-y p-0",children:[t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsx(w,{children:e.name}),t.jsx(_,{groups:[{actions:[{icon:t.jsx(D,{}),label:i("actions.delete"),onClick:r}]}]})]}),t.jsx(d,{title:i("fields.type"),value:e.type})]})},O=()=>{const{shipping_profile_id:e}=f(),i=g(),{shipping_profile:s,isLoading:a,isError:n,error:r}=l(e,void 0,{initialData:i}),{getWidgets:o}=h();if(a||!s)return t.jsx(x,{sections:1,showJSON:!0,showMetadata:!0});if(n)throw r;return t.jsx(u,{widgets:{before:o("shipping_profile.details.before"),after:o("shipping_profile.details.after")},showMetadata:!0,showJSON:!0,data:s,children:t.jsx(q,{profile:s})})};export{J as Breadcrumb,O as Component,K as loader};
