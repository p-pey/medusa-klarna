import{u as i}from"./chunk-C76H5USB-rZ7X6QdH.js";import{b as m,r as f,j as s}from"./index-zDamnV0F.js";import{T as l,a as c}from"./chunk-MSDRGCRR-CQSENKRj.js";import{c as x}from"./index-BXV1pIxX.js";var h=({prefix:t,pageSize:e=20})=>{const r=i(["offset","q","has_account","order","created_at","updated_at"],t),{offset:a,created_at:o,updated_at:u,q:n,order:p}=r;return{searchParams:{limit:e,offset:a?Number(a):0,order:p,created_at:o?JSON.parse(o):void 0,updated_at:u?JSON.parse(u):void 0,q:n},raw:r}},C=()=>{const{t}=m();let e=[];const r=[{label:t("fields.createdAt"),key:"created_at"},{label:t("fields.updatedAt"),key:"updated_at"}].map(a=>({key:a.key,label:a.label,type:"date"}));return e=[...e,...r],e},d=x(),k=()=>{const{t}=m();return f.useMemo(()=>[d.accessor("name",{header:()=>s.jsx(l,{text:t("fields.name")}),cell:({getValue:e})=>s.jsx(c,{text:e()||"-"})}),d.accessor("customers",{header:()=>s.jsx(l,{text:t("customers.domain")}),cell:({getValue:e})=>{var a;const r=((a=e())==null?void 0:a.length)??0;return s.jsx(c,{text:r})}})],[t])};export{C as a,k as b,h as u};
