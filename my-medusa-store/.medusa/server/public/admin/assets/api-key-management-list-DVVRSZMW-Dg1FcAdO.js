import{g as h,p as v,a as _,b as j}from"./chunk-G22WWLPG-C9g-VuwI.js";import{a as g}from"./chunk-WYX5PIA3-l93B5fke.js";import{a as A}from"./chunk-MSDRGCRR-CQSENKRj.js";import{S as T}from"./chunk-ADOCJB6L-CeSnNqV6.js";import{c as M,a as S,j as a,b as u,eX as K,H as w,T as C,L as P,B as N,r as D,Y as E,k as q,eY as z,eZ as L,A as O,t as m}from"./index-zDamnV0F.js";import{u as R,_ as H}from"./chunk-X3LH6P65-DEbiSc3H.js";import"./lodash-DaFjiiik.js";import"./chunk-TMAS4ILY-C0sGQH75.js";import{S as B,a as Y}from"./chunk-2RQLKDBF-qiSEwBBB.js";import{u as F}from"./chunk-C76H5USB-rZ7X6QdH.js";import{u as J}from"./use-prompt-DpNi1YEx.js";import{P as X}from"./pencil-square-CKZ3tGpw.js";import{X as I}from"./x-circle-C8HrdE_z.js";import{T as Q}from"./trash-DOxa9shU.js";import{C as Z}from"./container-DeMh6UN8.js";import{c as G}from"./index-BXV1pIxX.js";import"./chunk-P3UUX2T6-C2ZE5233.js";import"./chunk-DV5RB7II-m4lf7kgo.js";import"./format-DlORWqDc.js";import"./chunk-YEDAFXMB-DkvskggX.js";import"./chunk-AOFGTNG6-BnF5Giak.js";import"./table-BF5_YQhc.js";import"./chunk-WX2SMNCD-CWkDa80T.js";import"./plus-mini-z8s01bXA.js";import"./command-bar-Bj7ps8oW.js";import"./index-CEYwgcB4.js";import"./_isIndex-Ch4ZpAoO.js";import"./x-mark-mini-BbN1gcjE.js";import"./date-picker-TunfBovm.js";import"./clsx-B-dksMZM.js";import"./popover-Df7z-Okb.js";import"./triangle-left-mini-BrMs1Q7v.js";import"./index-CLIDehx4.js";import"./Trans-DtMFVRq-.js";import"./check-ByEBFFrn.js";import"./prompt-DE1bPeyn.js";var U=({apiKey:t})=>{const{mutateAsync:e}=z(t.id),{mutateAsync:r}=L(t.id),{t:s}=u(),i=J(),l=async()=>{await i({title:s("general.areYouSure"),description:s("apiKeyManagement.delete.warning",{title:t.title}),confirmText:s("actions.delete"),cancelText:s("actions.cancel")})&&await r(void 0,{onSuccess:()=>{m.success(s("apiKeyManagement.delete.successToast",{title:t.title}))},onError:c=>{m.error(c.message)}})},o=async()=>{await i({title:s("general.areYouSure"),description:s("apiKeyManagement.revoke.warning",{title:t.title}),confirmText:s("apiKeyManagement.actions.revoke"),cancelText:s("actions.cancel")})&&await e(void 0,{onSuccess:()=>{m.success(s("apiKeyManagement.revoke.successToast",{title:t.title}))},onError:c=>{m.error(c.message)}})},d=()=>{navigator.clipboard.writeText(t.token),m.success(s("apiKeyManagement.actions.copySuccessToast"))};return a.jsx(O,{groups:[{actions:[{icon:a.jsx(X,{}),label:s("actions.edit"),to:`${t.id}/edit`},...t.type!=="secret"?[{label:s("apiKeyManagement.actions.copy"),onClick:d,icon:a.jsx(Y,{})}]:[]]},{actions:[{icon:a.jsx(I,{}),label:s("apiKeyManagement.actions.revoke"),onClick:o,disabled:!!t.revoked_at},{icon:a.jsx(Q,{}),label:s("actions.delete"),onClick:l,disabled:!t.revoked_at}]}]})},n=G(),W=()=>{const{t}=u();return D.useMemo(()=>[n.accessor("title",{header:t("fields.title"),cell:({getValue:e})=>a.jsx("div",{className:"flex size-full items-center",children:a.jsx("span",{className:"truncate",children:e()})})}),n.accessor("redacted",{header:"Token",cell:({getValue:e})=>{const r=e();return a.jsx(E,{size:"2xsmall",children:v(r)})}}),n.accessor("type",{header:t("fields.type"),cell:({getValue:e})=>{const{label:r}=_(e(),t);return a.jsx(A,{text:r})}}),n.accessor("revoked_at",{header:t("fields.status"),cell:({getValue:e})=>{const{color:r,label:s}=j(e(),t);return a.jsx(T,{color:r,children:s})}}),n.accessor("last_used_at",{header:t("apiKeyManagement.table.lastUsedAtHeader"),cell:({getValue:e})=>{const r=e();return a.jsx(g,{date:r})}}),n.accessor("created_at",{header:t("fields.created"),cell:({getValue:e})=>{const r=e();return a.jsx(g,{date:r})}}),n.display({id:"actions",cell:({row:e})=>a.jsx(U,{apiKey:e.original})})],[t])},$=()=>{const{t}=u();let e=[];const r=[{label:t("fields.createdAt"),key:"created_at",type:"date"},{label:t("fields.updatedAt"),key:"updated_at",type:"date"},{label:t("fields.revokedAt"),key:"revoked_at",type:"date"}];return e=[...e,...r],e},V=({prefix:t,pageSize:e=20})=>{const r=F(["offset","q","created_at","updated_at","revoked_at","order"],t),{offset:s,created_at:i,updated_at:l,revoked_at:o,q:d,order:p}=r;return{searchParams:{limit:e,offset:s?Number(s):0,created_at:i?JSON.parse(i):void 0,updated_at:l?JSON.parse(l):void 0,revoked_at:o?JSON.parse(o):void 0,order:p,q:d},raw:r}},f=20,ee=({keyType:t})=>{const{t:e}=u(),{searchParams:r,raw:s}=V({pageSize:f}),i={...r,type:t,fields:"id,title,redacted,token,type,created_at,updated_at,revoked_at,last_used_at,created_by,revoked_by"},{api_keys:l,count:o,isLoading:d,isError:p,error:c}=K(i,{placeholderData:q}),k=$(),b=W(),{table:x}=R({data:l||[],columns:b,count:o,enablePagination:!0,getRowId:y=>y.id,pageSize:f});if(p)throw c;return a.jsxs(Z,{className:"divide-y p-0",children:[a.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[a.jsxs("div",{children:[a.jsx(w,{level:"h2",children:e(t==="publishable"?"apiKeyManagement.domain.publishable":"apiKeyManagement.domain.secret")}),a.jsx(C,{className:"text-ui-fg-subtle",size:"small",children:e(t==="publishable"?"apiKeyManagement.subtitle.publishable":"apiKeyManagement.subtitle.secret")})]}),a.jsx(P,{to:"create",children:a.jsx(N,{variant:"secondary",size:"small",children:e("actions.create")})})]}),a.jsx(H,{table:x,filters:k,columns:b,count:o,pageSize:f,orderBy:[{key:"title",label:e("fields.title")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")},{key:"revoked_at",label:e("fields.revokedAt")}],navigateTo:y=>y.id,pagination:!0,search:!0,queryObject:s,isLoading:d})]})},Le=()=>{const{pathname:t}=M(),{getWidgets:e}=S(),r=h(t);return a.jsx(B,{hasOutlet:!0,widgets:{before:e("api_key.list.before"),after:e("api_key.list.after")},children:a.jsx(ee,{keyType:r})})};export{Le as Component};
