import{I as ve}from"./chunk-QJ6SBVJ2-Cm_NeqIL.js";import{R as He,O as Fe,C as Le}from"./chunk-P3DRE4IY-RCujNTu_.js";import{M as ye}from"./chunk-NNBHHXXN-G1K8FGRz.js";import{c as ze,d as Be,e as Ve,u as Ue,f as Ge,g as $e,h as Xe,i as Qe,j as Je,k as Ze,l as Ke,m as We,n as Ye,o as et,p as tt,q as nt}from"./chunk-XV6525OF-CFeUxBgV.js";import{g as Ie}from"./chunk-PXZ7QYKX-DZ_CHK12.js";import{c as st,o as it}from"./chunk-VLT6UQCY-BiRTPNjA.js";import{D as at}from"./chunk-7I5DQGWY-CwOWioty.js";import{a as Z}from"./chunk-PDWBYQOW-BedvhUOI.js";import{a6 as q,R as ot,u as rt,b as V,aS as lt,aV as dt,r as v,j as e,a8 as ct,a9 as ut,t as D,H as ce,I as ee,w as _,ab as mt,B as K,cZ as pt,y as Ne,T as G,d1 as ht,aB as Se,x as de,A as Ee,X as me,s as Ce,d2 as ft}from"./index-zDamnV0F.js";import{P as Pe,a as Me}from"./chunk-IQBAUTU5-DZmgSo8-.js";import{u as ke,_ as Ae}from"./chunk-X3LH6P65-DEbiSc3H.js";import"./lodash-DaFjiiik.js";import{C as te}from"./chunk-3LLQ6F7F-YqZBDIlq.js";import{c as pe}from"./chunk-MWVM4TYO-bKUcYSnf.js";import"./chunk-TMAS4ILY-C0sGQH75.js";import{u as we}from"./chunk-C76H5USB-rZ7X6QdH.js";import{u as De}from"./chunk-BF3VCHXD-xzZ1g-nD.js";import{K as xt}from"./chunk-6HTZNHPT-B5-27SmV.js";import{R as X,u as gt,a as Re,S as U}from"./chunk-JGQGO74V-B-2E83zi.js";import{u as _t}from"./use-prompt-DpNi1YEx.js";import{P as he}from"./pencil-square-CKZ3tGpw.js";import{D as bt}from"./document-text-DfZxQ_Lt.js";import{X as Te}from"./x-circle-C8HrdE_z.js";import{C as fe}from"./currency-input-Dh0c8Bne.js";import{A as qe}from"./alert-CdqmCQWu.js";import{C as ne}from"./checkbox-CrI4_yXq.js";import{c as Oe}from"./index-BXV1pIxX.js";import"./Trans-DtMFVRq-.js";import"./chunk-P3UUX2T6-C2ZE5233.js";import"./chunk-YEDAFXMB-DkvskggX.js";import"./chunk-AOFGTNG6-BnF5Giak.js";import"./table-BF5_YQhc.js";import"./chunk-WX2SMNCD-CWkDa80T.js";import"./plus-mini-z8s01bXA.js";import"./command-bar-Bj7ps8oW.js";import"./index-CEYwgcB4.js";import"./x-mark-mini-BbN1gcjE.js";import"./triangles-mini-BXx7d2eG.js";import"./chunk-DV5RB7II-m4lf7kgo.js";import"./format-DlORWqDc.js";import"./_isIndex-Ch4ZpAoO.js";import"./date-picker-TunfBovm.js";import"./clsx-B-dksMZM.js";import"./popover-Df7z-Okb.js";import"./triangle-left-mini-BrMs1Q7v.js";import"./index-CLIDehx4.js";import"./prompt-DE1bPeyn.js";import"./index.esm-DwUltEsw.js";var jt=q.object({inbound_items:q.array(q.object({item_id:q.string(),quantity:q.number(),reason_id:q.string().nullish(),note:q.string().nullish()})),outbound_items:q.array(q.object({item_id:q.string(),quantity:q.number()})),location_id:q.string().optional(),inbound_option_id:q.string().nullish(),outbound_option_id:q.string().nullish(),send_notification:q.boolean().optional()}),J=Oe(),vt=s=>{const{t:l}=V();return v.useMemo(()=>[J.display({id:"select",header:({table:o})=>e.jsx(ne,{checked:o.getIsSomePageRowsSelected()?"indeterminate":o.getIsAllPageRowsSelected(),onCheckedChange:r=>o.toggleAllPageRowsSelected(!!r)}),cell:({row:o})=>{const r=o.getCanSelect();return e.jsx(ne,{disabled:!r,checked:o.getIsSelected(),onCheckedChange:a=>o.toggleSelected(!!a),onClick:a=>{a.stopPropagation()}})}}),J.display({id:"product",header:()=>e.jsx(Pe,{}),cell:({row:o})=>e.jsx(Me,{product:{thumbnail:o.original.thumbnail,title:o.original.product_title}})}),J.accessor("variant.sku",{header:l("fields.sku"),cell:({getValue:o})=>o()||"-"}),J.accessor("variant.title",{header:l("fields.variant")}),J.accessor("quantity",{header:()=>e.jsx("div",{className:"flex size-full items-center overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:l("fields.quantity")})}),cell:({getValue:o,row:r})=>Ie(r.original)}),J.accessor("refundable_total",{header:()=>e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:l("fields.price")})}),cell:({getValue:o})=>{const r=o()||0,a=Z(r,s);return e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:a})})}})],[l,s])},yt=()=>{const{t:s}=V();return[{key:"created_at",label:s("fields.createdAt"),type:"date"},{key:"updated_at",label:s("fields.updatedAt"),type:"date"}]},It=({pageSize:s=50,prefix:l})=>{const o=we(["q","offset","order","created_at","updated_at"],l),{offset:r,created_at:a,updated_at:p,...x}=o;return{searchParams:{...x,limit:s,offset:r?Number(r):0,created_at:a?JSON.parse(a):void 0,updated_at:p?JSON.parse(p):void 0},raw:o}},se=50,xe="rit",Nt=({onSelectionChange:s,selectedItems:l,items:o,currencyCode:r})=>{const{t:a}=V(),[p,x]=v.useState(l.reduce((b,j)=>(b[j]=!0,b),{})),N=b=>{const j=typeof b=="function"?b(p):b;x(j),s(Object.keys(j))},{searchParams:y,raw:S}=It({pageSize:se,prefix:xe}),P=v.useMemo(()=>{const{order:b,offset:j,limit:O,q:E,created_at:H,updated_at:$}=y;let T=o;if(E&&(T=T.filter(F=>{var C;return F.product_title.toLowerCase().includes(E.toLowerCase())||F.variant_title.toLowerCase().includes(E.toLowerCase())||((C=F.variant_sku)==null?void 0:C.toLowerCase().includes(E.toLowerCase()))})),b){const F=b[0]==="-"?"desc":"asc",C=b.replace("-","");T=St(T,C,F)}return H&&(T=ge(T,H,"created_at")),$&&(T=ge(T,$,"updated_at")),T.slice(j,j+O)},[o,r,y]),A=vt(r),R=yt(),{table:w}=ke({data:P,columns:A,count:P.length,enablePagination:!0,getRowId:b=>b.id,pageSize:se,enableRowSelection:b=>Ie(b.original)>0,rowSelection:{state:p,updater:N}});return e.jsx("div",{className:"flex size-full flex-col overflow-hidden",children:e.jsx(Ae,{table:w,columns:A,pageSize:se,count:P.length,filters:R,pagination:!0,layout:"fill",search:!0,orderBy:[{key:"product_title",label:a("fields.product")},{key:"variant_title",label:a("fields.variant")},{key:"sku",label:a("fields.sku")}],prefix:xe,queryObject:S})})},St=(s,l,o)=>s.sort((r,a)=>{let p,x;return l==="product_title"?(p=r.product_title,x=a.product_title):l==="variant_title"?(p=r.variant_title,x=a.variant_title):l==="sku"&&(p=r.variant_sku,x=a.variant_sku),p<x?o==="asc"?-1:1:p>x?o==="asc"?1:-1:0}),ge=(s,l,o)=>{const{gt:r,gte:a,lt:p,lte:x}=l;return s.filter(N=>{const y=new Date(N[o]);let S=!0;return r&&(S=S&&y>new Date(r)),a&&(S=S&&y>=new Date(a)),p&&(S=S&&y<new Date(p)),x&&(S=S&&y<=new Date(x)),S})};function Et({item:s,previewItem:l,currencyCode:o,form:r,onRemove:a,onUpdate:p,index:x}){const{t:N}=V(),{return_reasons:y=[]}=ht({fields:"+label"}),S=r.watch(`inbound_items.${x}`),P=typeof S.reason_id=="string",A=typeof S.note=="string";return e.jsxs("div",{className:"bg-ui-bg-subtle shadow-elevation-card-rest my-2 rounded-xl ",children:[e.jsxs("div",{className:"flex flex-col items-center gap-x-2 gap-y-2 p-3 text-sm md:flex-row",children:[e.jsxs("div",{className:"flex flex-1 items-center gap-x-3",children:[e.jsx(Se,{src:s.thumbnail}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{children:[e.jsxs(G,{className:"txt-small",as:"span",weight:"plus",children:[s.title," "]}),s.variant_sku&&e.jsxs("span",{children:["(",s.variant_sku,")"]})]}),e.jsx(G,{as:"div",className:"text-ui-fg-subtle txt-small",children:s.product_title})]})]}),e.jsxs("div",{className:"flex flex-1 justify-between",children:[e.jsxs("div",{className:"flex flex-grow items-center gap-2",children:[e.jsx(_.Field,{control:r.control,name:`inbound_items.${x}.quantity`,render:({field:R})=>e.jsxs(_.Item,{children:[e.jsx(_.Control,{children:e.jsx(de,{...R,className:"bg-ui-bg-base txt-small w-[67px] rounded-lg",min:1,max:s.quantity,type:"number",onBlur:w=>{const b=w.target.value,j=b===""?null:Number(b);R.onChange(j),j&&p({quantity:j})}})}),e.jsx(_.ErrorMessage,{})]})}),e.jsx(G,{className:"txt-small text-ui-fg-subtle",children:N("fields.qty")})]}),e.jsx("div",{className:"text-ui-fg-subtle txt-small mr-2 flex flex-shrink-0",children:e.jsx(ye,{currencyCode:o,amount:l.return_requested_total})}),e.jsx(Ee,{groups:[{actions:[!P&&{label:N("actions.addReason"),onClick:()=>r.setValue(`inbound_items.${x}.reason_id`,""),icon:e.jsx(Le,{})},!A&&{label:N("actions.addNote"),onClick:()=>r.setValue(`inbound_items.${x}.note`,""),icon:e.jsx(bt,{})},{label:N("actions.remove"),onClick:a,icon:e.jsx(Te,{})}].filter(Boolean)}]})]})]}),e.jsxs(e.Fragment,{children:[P&&e.jsxs("div",{className:"grid grid-cols-1 gap-2 p-3 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(_.Label,{children:N("orders.returns.reason")}),e.jsx(_.Hint,{className:"!mt-1",children:N("orders.returns.reasonHint")})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"flex-grow",children:e.jsx(_.Field,{control:r.control,name:`inbound_items.${x}.reason_id`,render:({field:{ref:R,value:w,onChange:b,...j}})=>e.jsxs(_.Item,{children:[e.jsx(_.Control,{children:e.jsx(te,{className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover",value:w,onChange:O=>{p({reason_id:O}),b(O)},...j,options:y.map(O=>({label:O.label,value:O.id}))})}),e.jsx(_.ErrorMessage,{})]})})}),e.jsx(ee,{type:"button",className:"flex-shrink",variant:"transparent",onClick:()=>{r.setValue(`inbound_items.${x}.reason_id`,null),p({reason_id:null})},children:e.jsx(me,{className:"text-ui-fg-muted"})})]})]}),A&&e.jsxs("div",{className:"grid grid-cols-1 gap-2 p-3 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(_.Label,{children:N("orders.returns.note")}),e.jsx(_.Hint,{className:"!mt-1",children:N("orders.returns.noteHint")})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"flex-grow",children:e.jsx(_.Field,{control:r.control,name:`inbound_items.${x}.note`,render:({field:{ref:R,...w}})=>e.jsxs(_.Item,{children:[e.jsx(_.Control,{children:e.jsx(de,{...w,onBlur:()=>{w.onChange(w.value),p({internal_note:w.value})},className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover"})}),e.jsx(_.ErrorMessage,{})]})})}),e.jsx(ee,{type:"button",className:"flex-shrink",variant:"transparent",onClick:()=>{r.setValue(`inbound_items.${x}.note`,null),p({internal_note:null})},children:e.jsx(me,{className:"text-ui-fg-muted"})})]})]})]})]})}var ie=[],_e=[],Ct=({order:s,preview:l,exchange:o,form:r,orderReturn:a})=>{var k;const{t:p}=V(),{setIsOpen:x}=Re(),[N,y]=v.useState({}),{mutateAsync:S}=it((k=l==null?void 0:l.order_change)==null?void 0:k.return_id,s.id),{mutateAsync:P}=Xe(o.id,s.id),{mutateAsync:A}=Qe(o.id,s.id),{mutateAsync:R}=Je(o.id,s.id),{mutateAsync:w}=Ze(o.id,s.id),{mutateAsync:b}=Ke(o.id,s.id),j=v.useMemo(()=>{var d;return(d=l==null?void 0:l.items)==null?void 0:d.filter(t=>{var i;return!!((i=t.actions)!=null&&i.find(n=>n.exchange_id===o.id))})},[l.items]),O=j.filter(d=>{var t;return!!((t=d.actions)!=null&&t.find(i=>i.action==="RETURN_ITEM"))}),E=v.useMemo(()=>{var d;return new Map((d=s==null?void 0:s.items)==null?void 0:d.map(t=>[t.id,t]))},[s.items]),H=r.watch("location_id"),{stock_locations:$=[]}=pt({limit:999}),{shipping_options:T=[]}=De({limit:999,fields:"*prices,+service_zone.fulfillment_set.location.id",stock_location_id:H},{enabled:!!H}),F=T.filter(d=>!!d.rules.find(t=>t.attribute==="is_return"&&t.value==="true")),{fields:C,append:Q,remove:L,update:z}=Ne({name:"inbound_items",control:r.control}),B=v.useMemo(()=>new Map(j.map(d=>[d.id,d])),[j,C]);v.useEffect(()=>{const d={};O.forEach(t=>{var n,c;const i=C.findIndex(h=>h.item_id===t.id);if(d[t.id]=!0,i>-1){if(C[i].quantity!==t.detail.return_requested_quantity){const h=(n=t.actions)==null?void 0:n.find(M=>M.action==="RETURN_ITEM");z(i,{...C[i],quantity:t.detail.return_requested_quantity,note:h==null?void 0:h.internal_note,reason_id:(c=h==null?void 0:h.details)==null?void 0:c.reason_id})}}else Q({item_id:t.id,quantity:t.detail.return_requested_quantity},{shouldFocus:!1})}),C.forEach((t,i)=>{t.item_id in d||L(i)})},[j]),v.useEffect(()=>{const d=l.shipping_methods.find(t=>{var i;return(i=t.actions)==null?void 0:i.find(n=>n.action==="SHIPPING_ADD"&&!!n.return_id)});d?r.setValue("inbound_option_id",d.shipping_option_id):r.setValue("inbound_option_id",null)},[l.shipping_methods]),v.useEffect(()=>{r.setValue("location_id",a==null?void 0:a.location_id)},[a]);const f=!C.length,m=async()=>{var d,t,i;ie.length&&await R({items:ie.map(n=>({id:n,quantity:1}))},{onError:n=>{D.error(n.message)}});for(const n of _e){const c=(i=(t=(d=j.find(h=>h.id===n))==null?void 0:d.actions)==null?void 0:t.find(h=>h.action==="RETURN_ITEM"))==null?void 0:i.id;c&&await b(c,{onError:h=>{D.error(h.message)}})}x("inbound-items",!1)},u=async d=>{await S({location_id:d})},g=async d=>{const i=l.shipping_methods.filter(n=>{var c;return(c=n.actions)==null?void 0:c.find(h=>h.action==="SHIPPING_ADD"&&!!h.return_id)}).filter(Boolean).map(n=>{var h;const c=(h=n.actions)==null?void 0:h.find(M=>M.action==="SHIPPING_ADD"&&!!M.return_id);if(c)return A(c.id)});await Promise.all(i),await P({shipping_option_id:d},{onError:n=>{D.error(n.message)}})},I=v.useMemo(()=>H?!C.map(t=>{var n,c;const i=E.get(t.item_id);return!(i!=null&&i.variant_id)||!(i!=null&&i.variant)||!((n=i.variant)!=null&&n.manage_inventory)?!0:(c=N[i.variant_id])==null?void 0:c.find(h=>h.location_id===H)}).every(Boolean):!1,[C,N,H]);return v.useEffect(()=>{(async()=>{const t={};if(!C.length)return t;const i=C.map(c=>c==null?void 0:c.variant_id).filter(Boolean);return(await Ce.admin.productVariant.list({id:i,fields:"*inventory.location_levels"})).variants.forEach(c=>{var h,M;t[c.id]=((M=(h=c.inventory)==null?void 0:h[0])==null?void 0:M.location_levels)||[]}),t})().then(t=>{y(t)})},[C]),e.jsxs("div",{children:[e.jsxs("div",{className:"mt-8 flex items-center justify-between",children:[e.jsx(ce,{level:"h2",children:p("orders.returns.inbound")}),e.jsxs(U,{id:"inbound-items",children:[e.jsx(U.Trigger,{asChild:!0,children:e.jsx("a",{className:"focus-visible:shadow-borders-focus transition-fg txt-compact-small-plus cursor-pointer text-blue-500 outline-none hover:text-blue-400",children:p("actions.addItems")})}),e.jsxs(U.Content,{children:[e.jsx(U.Header,{}),e.jsx(Nt,{items:s.items,selectedItems:C.map(d=>d.item_id),currencyCode:s.currency_code,onSelectionChange:d=>{const t=C.map(i=>i.item_id);ie=d.filter(i=>!t.includes(i)),_e=t.filter(i=>!d.includes(i))}}),e.jsx(U.Footer,{children:e.jsx("div",{className:"flex w-full items-center justify-end gap-x-4",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(X.Close,{asChild:!0,children:e.jsx(K,{type:"button",variant:"secondary",size:"small",children:p("actions.cancel")})}),e.jsx(K,{type:"submit",variant:"primary",size:"small",role:"button",onClick:async()=>await m(),children:p("actions.save")},"submit-button")]})})})]})]})]}),f&&e.jsx(ve,{}),C.map((d,t)=>B.get(d.item_id)&&E.get(d.item_id)&&e.jsx(Et,{item:E.get(d.item_id),previewItem:B.get(d.item_id),currencyCode:s.currency_code,form:r,onRemove:()=>{var n,c,h;const i=(h=(c=(n=j.find(M=>M.id===d.item_id))==null?void 0:n.actions)==null?void 0:c.find(M=>M.action==="RETURN_ITEM"))==null?void 0:h.id;i&&b(i,{onError:M=>{D.error(M.message)}})},onUpdate:i=>{var c,h;const n=(h=(c=j.find(M=>M.id===d.item_id))==null?void 0:c.actions)==null?void 0:h.find(M=>M.action==="RETURN_ITEM");n&&w({...i,actionId:n.id},{onError:M=>{var W,ue;(W=n.details)!=null&&W.quantity&&i.quantity&&r.setValue(`inbound_items.${t}.quantity`,(ue=n.details)==null?void 0:ue.quantity),D.error(M.message)}})},index:t},d.id)),!f&&e.jsxs("div",{className:"mt-8 flex flex-col gap-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(_.Label,{children:p("orders.returns.location")}),e.jsx(_.Hint,{className:"!mt-1",children:p("orders.returns.locationHint")})]}),e.jsx(_.Field,{control:r.control,name:"location_id",render:({field:{value:d,onChange:t,...i}})=>e.jsx(_.Item,{children:e.jsx(_.Control,{children:e.jsx(te,{...i,value:d??void 0,onChange:n=>{t(n),u(n)},options:($??[]).map(n=>({label:n.name,value:n.id}))})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsxs(_.Label,{children:[p("orders.returns.inboundShipping"),e.jsxs(G,{size:"small",leading:"compact",className:"text-ui-fg-muted ml-1 inline",children:["(",p("fields.optional"),")"]})]}),e.jsx(_.Hint,{className:"!mt-1",children:p("orders.returns.inboundShippingHint")})]}),e.jsx(_.Field,{control:r.control,name:"inbound_option_id",render:({field:{value:d,onChange:t,...i}})=>e.jsx(_.Item,{children:e.jsx(_.Control,{children:e.jsx(te,{value:d??void 0,onChange:n=>{t(n),n&&g(n)},...i,options:F.map(n=>({label:n.name,value:n.id})),disabled:!H,noResultsPlaceholder:e.jsx(He,{})})})})})]})]}),I&&e.jsxs(qe,{variant:"warning",dismissible:!0,className:"mt-4 p-5",children:[e.jsx("div",{className:"text-ui-fg-subtle txt-small pb-2 font-medium leading-[20px]",children:p("orders.returns.noInventoryLevel")}),e.jsx(G,{className:"text-ui-fg-subtle txt-small leading-normal",children:p("orders.returns.noInventoryLevelDesc")})]})]})},Y=Oe(),Pt=s=>{const{t:l}=V();return v.useMemo(()=>[Y.display({id:"select",header:({table:o})=>e.jsx(ne,{checked:o.getIsSomePageRowsSelected()?"indeterminate":o.getIsAllPageRowsSelected(),onCheckedChange:r=>o.toggleAllPageRowsSelected(!!r)}),cell:({row:o})=>{const r=o.getCanSelect();return e.jsx(ne,{disabled:!r,checked:o.getIsSelected(),onCheckedChange:a=>o.toggleSelected(!!a),onClick:a=>{a.stopPropagation()}})}}),Y.display({id:"product",header:()=>e.jsx(Pe,{}),cell:({row:o})=>e.jsx(Me,{product:o.original.product})}),Y.accessor("sku",{header:l("fields.sku"),cell:({getValue:o})=>o()||"-"}),Y.accessor("title",{header:l("fields.title")})],[l,s])},Mt=()=>{const{t:s}=V();return[{key:"created_at",label:s("fields.createdAt"),type:"date"},{key:"updated_at",label:s("fields.updatedAt"),type:"date"}]},kt=({pageSize:s=50,prefix:l})=>{const o=we(["q","offset","order","created_at","updated_at"],l),{offset:r,created_at:a,updated_at:p,...x}=o;return{searchParams:{...x,limit:s,offset:r?Number(r):0,created_at:a?JSON.parse(a):void 0,updated_at:p?JSON.parse(p):void 0},raw:o}},ae=50,be="rit",At=({onSelectionChange:s,selectedItems:l,currencyCode:o})=>{const{t:r}=V(),[a,p]=v.useState(l.reduce((b,j)=>(b[j]=!0,b),{})),x=b=>{const j=typeof b=="function"?b(a):b;p(j),s(Object.keys(j))},{searchParams:N,raw:y}=kt({pageSize:ae,prefix:be}),{variants:S=[],count:P}=ft({...N,fields:"*inventory_items.inventory.location_levels,+inventory_quantity"}),A=Pt(o),R=Mt(),{table:w}=ke({data:S,columns:A,count:P,enablePagination:!0,getRowId:b=>b.id,pageSize:ae,enableRowSelection:b=>!0,rowSelection:{state:a,updater:x}});return e.jsx("div",{className:"flex size-full flex-col overflow-hidden",children:e.jsx(Ae,{table:w,columns:A,pageSize:ae,count:P,filters:R,pagination:!0,layout:"fill",search:!0,orderBy:[{key:"product_id",label:r("fields.product")},{key:"title",label:r("fields.title")},{key:"sku",label:r("fields.sku")}],prefix:be,queryObject:y})})};function wt({previewItem:s,currencyCode:l,form:o,onRemove:r,onUpdate:a,index:p}){const{t:x}=V();return e.jsx("div",{className:"bg-ui-bg-subtle shadow-elevation-card-rest my-2 rounded-xl ",children:e.jsxs("div",{className:"flex flex-col items-center gap-x-2 gap-y-2 p-3 text-sm md:flex-row",children:[e.jsxs("div",{className:"flex flex-1 items-center gap-x-3",children:[e.jsx(Se,{src:s.thumbnail}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{children:[e.jsxs(G,{className:"txt-small",as:"span",weight:"plus",children:[s.title," "]}),s.variant_sku&&e.jsxs("span",{children:["(",s.variant_sku,")"]})]}),e.jsx(G,{as:"div",className:"text-ui-fg-subtle txt-small",children:s.product_title})]})]}),e.jsxs("div",{className:"flex flex-1 justify-between",children:[e.jsxs("div",{className:"flex flex-grow items-center gap-2",children:[e.jsx(_.Field,{control:o.control,name:`outbound_items.${p}.quantity`,render:({field:N})=>e.jsxs(_.Item,{children:[e.jsx(_.Control,{children:e.jsx(de,{...N,className:"bg-ui-bg-base txt-small w-[67px] rounded-lg",min:1,type:"number",onBlur:y=>{const S=y.target.value,P=S===""?null:Number(S);N.onChange(P),P&&a({quantity:P})}})}),e.jsx(_.ErrorMessage,{})]})}),e.jsx(G,{className:"txt-small text-ui-fg-subtle",children:x("fields.qty")})]}),e.jsx("div",{className:"text-ui-fg-subtle txt-small mr-2 flex flex-shrink-0",children:e.jsx(ye,{currencyCode:l,amount:s.total})}),e.jsx(Ee,{groups:[{actions:[{label:x("actions.remove"),onClick:r,icon:e.jsx(Te,{})}].filter(Boolean)}]})]})]})})}var oe=[],je=[],Dt=({order:s,preview:l,exchange:o,form:r})=>{const{t:a}=V(),{setIsOpen:p}=Re(),[x,N]=v.useState({}),{shipping_options:y=[]}=De({limit:999,fields:"*prices,+service_zone.fulfillment_set.location.id"}),S=y.filter(f=>!!f.rules.find(m=>m.attribute==="is_return"&&m.value==="false")),{mutateAsync:P}=We(o.id,s.id),{mutateAsync:A}=Ye(o.id,s.id),{mutateAsync:R}=et(o.id,s.id),{mutateAsync:w}=tt(o.id,s.id),{mutateAsync:b}=nt(o.id,s.id),j=v.useMemo(()=>{var f;return(f=l==null?void 0:l.items)==null?void 0:f.filter(m=>{var u;return!!((u=m.actions)!=null&&u.find(g=>g.exchange_id===o.id&&g.action==="ITEM_ADD"))})},[l.items]),O=v.useMemo(()=>{var f;return new Map((f=s==null?void 0:s.items)==null?void 0:f.map(m=>[m.variant_id,m]))},[s.items]),{fields:E,append:H,remove:$,update:T}=Ne({name:"outbound_items",control:r.control}),F=v.useMemo(()=>new Map(j.map(f=>[f.variant_id,f])),[j,E]);v.useEffect(()=>{const f={};j.forEach(m=>{const u=E.findIndex(g=>g.item_id===m.id);f[m.id]=!0,u>-1?E[u].quantity!==m.detail.quantity&&T(u,{...E[u],quantity:m.detail.quantity}):H({item_id:m.id,quantity:m.detail.quantity,variant_id:m.variant_id},{shouldFocus:!1})}),E.forEach((m,u)=>{m.item_id in f||$(u)})},[j]);const C=r.watch("location_id"),Q=!E.length,L=async()=>{var f,m;oe.length&&await R({items:oe.map(u=>({variant_id:u,quantity:1}))},{onError:u=>{D.error(u.message)}});for(const u of je){const g=(m=(f=j.find(I=>I.variant_id===u))==null?void 0:f.actions)==null?void 0:m.find(I=>I.action==="ITEM_ADD");g!=null&&g.id&&await b(g==null?void 0:g.id,{onError:I=>{D.error(I.message)}})}p("outbound-items",!1)};v.useEffect(()=>{const f=l.shipping_methods.find(m=>{var u;return!!((u=m.actions)!=null&&u.find(g=>g.action==="SHIPPING_ADD"&&!g.return_id))});f?r.setValue("outbound_option_id",f.shipping_option_id):r.setValue("outbound_option_id",null)},[l.shipping_methods]);const z=async f=>{const u=l.shipping_methods.filter(g=>{var I;return!!((I=g.actions)!=null&&I.find(k=>k.action==="SHIPPING_ADD"&&!k.return_id))}).filter(Boolean).map(g=>{var k;const I=(k=g.actions)==null?void 0:k.find(d=>d.action==="SHIPPING_ADD"&&!d.return_id);if(I)return A(I.id)});await Promise.all(u),await P({shipping_option_id:f},{onError:g=>{D.error(g.message)}})},B=v.useMemo(()=>C?!E.map(m=>{var g,I;const u=O.get(m.variant_id);return!(u!=null&&u.variant_id)||!(u!=null&&u.variant)||!((g=u.variant)!=null&&g.manage_inventory)?!0:(I=x[u.variant_id])==null?void 0:I.find(k=>k.location_id===C)}).every(Boolean):!1,[E,x,C]);return v.useEffect(()=>{(async()=>{const m={};if(!E.length)return m;const u=E.map(I=>I==null?void 0:I.variant_id).filter(Boolean);return(await Ce.admin.productVariant.list({id:u,fields:"*inventory.location_levels"})).variants.forEach(I=>{var k,d;m[I.id]=((d=(k=I.inventory)==null?void 0:k[0])==null?void 0:d.location_levels)||[]}),m})().then(m=>{N(m)})},[E]),e.jsxs("div",{children:[e.jsxs("div",{className:"mt-8 flex items-center justify-between",children:[e.jsx(ce,{level:"h2",children:a("orders.returns.outbound")}),e.jsxs(U,{id:"outbound-items",children:[e.jsx(U.Trigger,{asChild:!0,children:e.jsx("a",{className:"focus-visible:shadow-borders-focus transition-fg txt-compact-small-plus cursor-pointer text-blue-500 outline-none hover:text-blue-400",children:a("actions.addItems")})}),e.jsxs(U.Content,{children:[e.jsx(U.Header,{}),e.jsx(At,{selectedItems:E.map(f=>f.variant_id),currencyCode:s.currency_code,onSelectionChange:f=>{const m=E.map(u=>u.variant_id);oe=f.filter(u=>!m.includes(u)),je=m.filter(u=>!f.includes(u))}}),e.jsx(U.Footer,{children:e.jsx("div",{className:"flex w-full items-center justify-end gap-x-4",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(X.Close,{asChild:!0,children:e.jsx(K,{type:"button",variant:"secondary",size:"small",children:a("actions.cancel")})}),e.jsx(K,{type:"submit",variant:"primary",size:"small",role:"button",onClick:async()=>await L(),children:a("actions.save")},"submit-button")]})})})]})]})]}),Q&&e.jsx(ve,{}),E.map((f,m)=>F.get(f.variant_id)&&e.jsx(wt,{previewItem:F.get(f.variant_id),currencyCode:s.currency_code,form:r,onRemove:()=>{var g,I,k;const u=(k=(I=(g=j.find(d=>d.id===f.item_id))==null?void 0:g.actions)==null?void 0:I.find(d=>d.action==="ITEM_ADD"))==null?void 0:k.id;u&&b(u,{onError:d=>{D.error(d.message)}})},onUpdate:u=>{var I,k,d;const g=(d=(k=(I=j.find(t=>t.id===f.item_id))==null?void 0:I.actions)==null?void 0:k.find(t=>t.action==="ITEM_ADD"))==null?void 0:d.id;g&&w({...u,actionId:g},{onError:t=>{D.error(t.message)}})},index:m},f.id)),!Q&&e.jsx("div",{className:"mt-8 flex flex-col gap-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(_.Label,{children:a("orders.exchanges.outboundShipping")}),e.jsx(_.Hint,{className:"!mt-1",children:a("orders.exchanges.outboundShippingHint")})]}),e.jsx(_.Field,{control:r.control,name:"outbound_option_id",render:({field:{value:f,onChange:m,...u}})=>e.jsx(_.Item,{children:e.jsx(_.Control,{children:e.jsx(te,{noResultsPlaceholder:e.jsx(Fe,{}),value:f??void 0,onChange:g=>{m(g),g&&z(g)},...u,options:S.map(g=>({label:g.name,value:g.id})),disabled:!S.length})})})})]})}),B&&e.jsxs(qe,{variant:"warning",dismissible:!0,className:"mt-4 p-5",children:[e.jsx("div",{className:"text-ui-fg-subtle txt-small pb-2 font-medium leading-[20px]",children:a("orders.returns.noInventoryLevel")}),e.jsx(G,{className:"text-ui-fg-subtle txt-small leading-normal",children:a("orders.returns.noInventoryLevelDesc")})]})]})},re=!1,Rt=({order:s,preview:l,exchange:o,orderReturn:r})=>{const{t:a}=V(),{handleSuccess:p}=gt(),[x,N]=v.useState(!1),[y,S]=v.useState(!1),[P,A]=v.useState(0),[R,w]=v.useState(0),{mutateAsync:b,isPending:j}=Ve(o.id,s.id),{mutateAsync:O,isPending:E}=Ue(o.id,s.id),{mutateAsync:H,isPending:$}=Ge(o.id,s.id),{mutateAsync:T,isPending:F}=$e(o.id,s.id),C=j||E||F||$,Q=v.useMemo(()=>{var t;return(t=l==null?void 0:l.items)==null?void 0:t.filter(i=>{var n;return!!((n=i.actions)!=null&&n.find(c=>c.exchange_id===o.id))})},[l.items]),L=Q.filter(t=>{var i;return!!((i=t.actions)!=null&&i.find(n=>n.action==="RETURN_ITEM"))}),z=Q.filter(t=>{var i;return!!((i=t.actions)!=null&&i.find(n=>n.action==="ITEM_ADD"))}),B=ct({defaultValues:()=>{const t=l.shipping_methods.find(n=>{var c;return!!((c=n.actions)!=null&&c.find(h=>h.action==="SHIPPING_ADD"&&!!h.return_id))}),i=l.shipping_methods.find(n=>{var c;return!!((c=n.actions)!=null&&c.find(h=>h.action==="SHIPPING_ADD"&&!h.return_id))});return Promise.resolve({inbound_items:L.map(n=>{var h,M;const c=(h=n.actions)==null?void 0:h.find(W=>W.action==="RETURN_ITEM");return{item_id:n.id,variant_id:n.variant_id,quantity:n.detail.return_requested_quantity,note:c==null?void 0:c.internal_note,reason_id:(M=c==null?void 0:c.details)==null?void 0:M.reason_id}}),outbound_items:z.map(n=>({item_id:n.id,variant_id:n.variant_id,quantity:n.detail.quantity})),inbound_option_id:t?t.shipping_option_id:"",outbound_option_id:i?i.shipping_option_id:"",location_id:r==null?void 0:r.location_id,send_notification:!1})},resolver:ut(jt)}),f=l.shipping_methods.find(t=>{var i;return!!((i=t.actions)!=null&&i.find(n=>n.action==="SHIPPING_ADD"&&!!n.return_id))}),m=l.shipping_methods.find(t=>{var i;return!!((i=t.actions)!=null&&i.find(n=>n.action==="SHIPPING_ADD"&&!n.return_id))});v.useEffect(()=>{f&&A(f.total)},[f]),v.useEffect(()=>{m&&w(m.total)},[m]);const u=B.watch("inbound_option_id"),g=B.watch("outbound_option_id"),I=_t(),k=B.handleSubmit(async t=>{try{if(!await I({title:a("general.areYouSure"),description:a("orders.exchanges.confirmText"),confirmText:a("actions.continue"),cancelText:a("actions.cancel"),variant:"confirmation"}))return;await b({no_notification:!t.send_notification}),p()}catch(i){D.error(a("general.error"),{description:i.message})}});v.useEffect(()=>{var t;x&&((t=document.getElementById("js-inbound-shipping-input"))==null||t.focus())},[x]),v.useEffect(()=>{var t;y&&((t=document.getElementById("js-outbound-shipping-input"))==null||t.focus())},[y]),v.useEffect(()=>()=>{re&&(O(void 0,{onSuccess:()=>{D.success(a("orders.exchanges.actions.cancelExchange.successToast"))},onError:t=>{D.error(t.message)}}),re=!1)},[]);const d=v.useMemo(()=>{const t=l.shipping_methods.find(i=>{var n;return!!((n=i.actions)!=null&&n.find(c=>c.action==="SHIPPING_ADD"&&!!c.return_id))});return(t==null?void 0:t.total)||0},[l.shipping_methods]);return e.jsx(X.Form,{form:B,children:e.jsxs(xt,{onSubmit:k,className:"flex h-full flex-col",children:[e.jsx(X.Header,{}),e.jsx(X.Body,{className:"flex size-full justify-center overflow-y-auto",children:e.jsxs("div",{className:"mt-16 w-[720px] max-w-[100%] px-4 md:p-0",children:[e.jsx(ce,{level:"h1",children:a("orders.exchanges.create")}),e.jsx(Ct,{form:B,preview:l,order:s,exchange:o,orderReturn:r}),e.jsx(Dt,{form:B,preview:l,order:s,exchange:o}),e.jsxs("div",{className:"mt-8 border-y border-dotted py-4",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:a("orders.returns.inboundTotal")}),e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:Z(L.reduce((t,i)=>{var c;const n=(c=i.actions)==null?void 0:c.find(h=>h.action==="RETURN_ITEM");return t=t+((n==null?void 0:n.amount)||0),t},0)*-1,s.currency_code)})]}),e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:a("orders.exchanges.outboundTotal")}),e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:Z(z.reduce((t,i)=>{var c;const n=(c=i.actions)==null?void 0:c.find(h=>h.action==="ITEM_ADD");return t=t+((n==null?void 0:n.amount)||0),t},0),s.currency_code)})]}),e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:a("orders.returns.inboundShipping")}),e.jsxs("span",{className:"txt-small text-ui-fg-subtle flex items-center",children:[!x&&e.jsx(ee,{onClick:()=>N(!0),variant:"transparent",className:"text-ui-fg-muted",disabled:!(L!=null&&L.length)||!u,children:e.jsx(he,{})}),x?e.jsx(fe,{id:"js-inbound-shipping-input",onBlur:()=>{let t;l.shipping_methods.forEach(n=>{if(n.actions)for(const c of n.actions)c.action==="SHIPPING_ADD"&&c.return_id&&(t=c.id)});const i=P===""?null:parseFloat(P);t&&H({actionId:t,custom_amount:i},{onError:n=>{D.error(n.message)}}),N(!1)},symbol:pe[s.currency_code.toUpperCase()].symbol_native,code:s.currency_code,onValueChange:A,value:P,disabled:!(L!=null&&L.length)}):Z(d,s.currency_code)]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:a("orders.exchanges.outboundShipping")}),e.jsxs("span",{className:"txt-small text-ui-fg-subtle flex items-center",children:[!y&&e.jsx(ee,{onClick:()=>S(!0),variant:"transparent",className:"text-ui-fg-muted",disabled:!(z!=null&&z.length)||!g,children:e.jsx(he,{})}),y?e.jsx(fe,{id:"js-outbound-shipping-input",onBlur:()=>{let t;l.shipping_methods.forEach(n=>{if(n.actions)for(const c of n.actions)c.action==="SHIPPING_ADD"&&!c.return_id&&(t=c.id)});const i=R===""?null:parseFloat(R);t&&T({actionId:t,custom_amount:i},{onError:n=>{D.error(n.message)}}),S(!1)},symbol:pe[s.currency_code.toUpperCase()].symbol_native,code:s.currency_code,onValueChange:w,value:R,disabled:!(z!=null&&z.length)}):Z((m==null?void 0:m.amount)??0,s.currency_code)]})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-between border-t border-dotted pt-4",children:[e.jsx("span",{className:"txt-small font-medium",children:a("orders.exchanges.refundAmount")}),e.jsx("span",{className:"txt-small font-medium",children:Z(l.summary.pending_difference,s.currency_code)})]})]}),e.jsx("div",{className:"bg-ui-bg-field mt-8 rounded-lg border py-2 pl-2 pr-4",children:e.jsx(_.Field,{control:B.control,name:"send_notification",render:({field:{onChange:t,value:i,...n}})=>e.jsxs(_.Item,{children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(_.Control,{className:"mr-4 self-start",children:e.jsx(mt,{className:"mt-[2px]",checked:!!i,onCheckedChange:t,...n})}),e.jsxs("div",{className:"block",children:[e.jsx(_.Label,{children:a("orders.returns.sendNotification")}),e.jsx(_.Hint,{className:"!mt-1",children:a("orders.returns.sendNotificationHint")})]})]}),e.jsx(_.ErrorMessage,{})]})})}),e.jsx("div",{className:"p-8"})]})}),e.jsx(X.Footer,{children:e.jsx("div",{className:"flex w-full items-center justify-end gap-x-4",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(X.Close,{asChild:!0,children:e.jsx(K,{type:"button",onClick:()=>re=!0,variant:"secondary",size:"small",children:a("orders.exchanges.cancel.title")})}),e.jsx(K,{type:"submit",variant:"primary",size:"small",isLoading:C,children:a("orders.exchanges.confirm")},"submit-button")]})})})]})})},le=!1,kn=()=>{const{id:s}=ot(),l=rt(),{t:o}=V(),{order:r}=lt(s,{fields:at}),{order:a}=dt(s),[p,x]=v.useState(),{mutateAsync:N}=ze(r.id),{exchange:y}=Be(p,void 0,{enabled:!!p}),{return:S}=st(y==null?void 0:y.return_id,void 0,{enabled:!!(y!=null&&y.return_id)});return v.useEffect(()=>{async function P(){if(!(le||!a)){if(a.order_change){a.order_change.change_type==="exchange"?x(a.order_change.exchange_id):(l(`/orders/${a.id}`,{replace:!0}),D.error(o("orders.exchanges.activeChangeError")));return}le=!0;try{const{exchange:A}=await N({order_id:a.id});x(A.id)}catch(A){D.error(A.message),l(`/orders/${a.id}`,{replace:!0})}finally{le=!1}}}P()},[a]),e.jsx(X,{children:y&&a&&r&&e.jsx(Rt,{order:r,exchange:y,preview:a,orderReturn:S})})};export{kn as Component};
