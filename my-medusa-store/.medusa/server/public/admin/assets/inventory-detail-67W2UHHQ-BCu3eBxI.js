import{I as B}from"./chunk-GEGIBWTP-BruV41FQ.js";import{T as m,a as h}from"./chunk-MSDRGCRR-CQSENKRj.js";import{P as c}from"./chunk-P3UUX2T6-C2ZE5233.js";import{u as C,_ as D}from"./chunk-X3LH6P65-DEbiSc3H.js";import{dX as z,j as e,R as $,d as H,a as J,S as F,q as V,b as l,H as g,A as I,B as E,L as q,aB as W,aj as G,cW as Y,s as Z,d$ as K,b2 as U,cZ as X,r as T,e0 as ee,V as te,dU as se,t as P}from"./index-zDamnV0F.js";import"./lodash-DaFjiiik.js";import"./chunk-TMAS4ILY-C0sGQH75.js";import{g as ie}from"./chunk-OIAPXGI2-Br3zYKM-.js";import{S as d}from"./chunk-LFLGEXIG-CWErO_vC.js";import{T as N}from"./chunk-2RQLKDBF-qiSEwBBB.js";import{u as R}from"./chunk-C76H5USB-rZ7X6QdH.js";import{u as ae}from"./chunk-DV5RB7II-m4lf7kgo.js";import{P as k}from"./pencil-square-CKZ3tGpw.js";import{u as A}from"./use-prompt-DpNi1YEx.js";import{T as O}from"./trash-DOxa9shU.js";import{C as b}from"./container-DeMh6UN8.js";import{c as M}from"./index-BXV1pIxX.js";import"./chunk-YEDAFXMB-DkvskggX.js";import"./chunk-AOFGTNG6-BnF5Giak.js";import"./table-BF5_YQhc.js";import"./chunk-WX2SMNCD-CWkDa80T.js";import"./plus-mini-z8s01bXA.js";import"./command-bar-Bj7ps8oW.js";import"./index-CEYwgcB4.js";import"./_isIndex-Ch4ZpAoO.js";import"./x-mark-mini-BbN1gcjE.js";import"./date-picker-TunfBovm.js";import"./clsx-B-dksMZM.js";import"./popover-Df7z-Okb.js";import"./triangle-left-mini-BrMs1Q7v.js";import"./index-CLIDehx4.js";import"./Trans-DtMFVRq-.js";import"./check-ByEBFFrn.js";import"./format-DlORWqDc.js";import"./prompt-DE1bPeyn.js";var L="*variants,*variants.product,*variants.options",et=i=>{const{id:t}=i.params||{},{inventory_item:s}=z(t,{fields:L},{initialData:i.data,enabled:!!t});return s?e.jsx("span",{children:s.title??s.sku??t}):null},re=({inventoryItem:i})=>{const{t}=l();return e.jsxs(b,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(g,{level:"h2",children:t("products.attributes")}),e.jsx(I,{groups:[{actions:[{label:t("actions.edit"),to:"attributes",icon:e.jsx(k,{})}]}]})]}),e.jsx(d,{title:t("fields.height"),value:i.height}),e.jsx(d,{title:t("fields.width"),value:i.width}),e.jsx(d,{title:t("fields.length"),value:i.length}),e.jsx(d,{title:t("fields.weight"),value:i.weight}),e.jsx(d,{title:t("fields.midCode"),value:i.mid_code}),e.jsx(d,{title:t("fields.hsCode"),value:i.hs_code}),e.jsx(d,{title:t("fields.countryOfOrigin"),value:ie(i.origin_country)})]})},ne=({level:i})=>{const{t}=l(),s=A(),{mutateAsync:a}=ee(i.inventory_item_id,i.location_id),r=async()=>{await s({title:t("general.areYouSure"),description:t("inventory.deleteWarning"),confirmText:t("actions.delete"),cancelText:t("actions.cancel")})&&await a()};return e.jsx(I,{groups:[{actions:[{icon:e.jsx(k,{}),label:t("actions.edit"),to:`locations/${i.location_id}`}]},{actions:[{icon:e.jsx(O,{}),label:t("actions.delete"),onClick:r,disabled:i.reserved_quantity>0||i.stocked_quantity>0}]}]})},f=M(),oe=()=>{const{t:i}=l();return T.useMemo(()=>[f.accessor("stock_locations.0.name",{header:i("fields.location"),cell:({getValue:t})=>{const s=t();return s?e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:s.toString()})}):e.jsx(c,{})}}),f.accessor("reserved_quantity",{header:i("inventory.reserved"),cell:({getValue:t})=>{const s=t();return Number.isNaN(s)?e.jsx(c,{}):e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:s})})}}),f.accessor("stocked_quantity",{header:i("fields.inStock"),cell:({getValue:t})=>{const s=t();return Number.isNaN(s)?e.jsx(c,{}):e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:s})})}}),f.accessor("available_quantity",{header:i("inventory.available"),cell:({getValue:t})=>{const s=t();return Number.isNaN(s)?e.jsx(c,{}):e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:s})})}}),f.display({id:"actions",cell:({row:t})=>e.jsx(ne,{level:t.original})})],[i])},ce=({pageSize:i=20,prefix:t})=>{const s=R(["id","location_id","stocked_quantity","reserved_quantity","incoming_quantity","available_quantity","*stock_locations"],t),{reserved_quantity:a,stocked_quantity:r,available_quantity:n,...o}=s;return{searchParams:{limit:i,reserved_quantity:a?JSON.parse(a):void 0,stocked_quantity:r?JSON.parse(r):void 0,available_quantity:n?JSON.parse(n):void 0,...o},raw:s}},w=20,le=({inventory_item_id:i})=>{const{searchParams:t,raw:s}=ce({pageSize:w}),{inventory_levels:a,count:r,isPending:n,isError:o,error:j}=K(i,{...t,fields:"*stock_locations"}),x=oe(),{table:_}=C({data:a??[],columns:x,count:r,enablePagination:!0,getRowId:y=>y.id,pageSize:w});if(o)throw j;return e.jsx(D,{table:_,columns:x,pageSize:w,count:r,isLoading:n,pagination:!0,queryObject:s})},de=({inventoryItem:i})=>{const{t}=l();return e.jsxs(b,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(g,{children:t("inventory.locationLevels")}),e.jsx(E,{size:"small",variant:"secondary",asChild:!0,children:e.jsx(q,{to:"locations",children:t("inventory.manageLocations")})})]}),e.jsx(le,{inventory_item_id:i.id})]})},ue=({date:i})=>{const{getFullDate:t}=ae();return i?e.jsx("div",{className:"flex h-full w-full items-center overflow-hidden",children:e.jsx(te,{className:"z-10",content:e.jsx("span",{className:"text-pretty",children:`${t({date:i,includeTime:!0})}`}),children:e.jsx("span",{className:"truncate",children:t({date:i,includeTime:!0})})})}):e.jsx(c,{})},me=({reservation:i})=>{const{t}=l(),s=A(),{mutateAsync:a}=se(i.id),r=async()=>{await s({title:t("general.areYouSure"),description:t("inventory.deleteWarning"),confirmText:t("actions.delete"),cancelText:t("actions.cancel")})&&await a(void 0,{onSuccess:()=>{P.success(t("inventory.reservation.deleteSuccessToast"))},onError:o=>{P.error(o.message)}})};return e.jsx(I,{groups:[{actions:[{icon:e.jsx(k,{}),label:t("actions.edit"),to:`/reservations/${i.id}/edit`}]},{actions:[{icon:e.jsx(O,{}),label:t("actions.delete"),onClick:r}]}]})},u=M(),xe=({sku:i})=>{const{t}=l();return T.useMemo(()=>[u.display({id:"sku",header:()=>e.jsx(m,{text:t("fields.sku")}),cell:()=>e.jsx(h,{text:i})}),u.accessor("line_item.order_id",{header:()=>e.jsx(m,{text:t("inventory.reservation.orderID")}),cell:({getValue:s})=>{const a=s();return a?e.jsx(h,{text:a}):e.jsx(c,{})}}),u.accessor("description",{header:()=>e.jsx(m,{text:t("fields.description")}),cell:({getValue:s})=>{const a=s();return a?e.jsx(h,{text:a}):e.jsx(c,{})}}),u.accessor("location.name",{header:()=>e.jsx(m,{text:t("inventory.reservation.location")}),cell:({getValue:s})=>{const a=s();return a?e.jsx(h,{text:a}):e.jsx(c,{})}}),u.accessor("created_at",{header:()=>e.jsx(m,{text:t("fields.createdAt")}),cell:({getValue:s})=>e.jsx(ue,{date:s()})}),u.accessor("quantity",{header:()=>e.jsx(m,{text:t("fields.quantity"),align:"right"}),cell:({getValue:s})=>e.jsx(h,{text:s(),align:"right"})}),u.display({id:"actions",cell:({row:s})=>e.jsx(me,{reservation:s.original})})],[t])},ve=({pageSize:i=20,prefix:t})=>{const s=R(["id","location_id","inventory_item_id","quantity","line_item_id","description","created_by"],t),{quantity:a,...r}=s;return{searchParams:{limit:i,quantity:a?JSON.parse(a):void 0,...r},raw:s}},S=20,pe=({inventoryItem:i})=>{const{searchParams:t,raw:s}=ve({pageSize:S}),{reservations:a,count:r,isPending:n,isError:o,error:j}=U({...t,inventory_item_id:[i.id]}),{stock_locations:x}=X({id:(a||[]).map(v=>v.location_id)}),_=T.useMemo(()=>{const v=new Map((x||[]).map(p=>[p.id,p]));return(a||[]).map(p=>({...p,location:v.get(p.location_id)}))},[a,x]),y=xe({sku:i.sku}),{table:Q}=C({data:_??[],columns:y,count:r,enablePagination:!0,getRowId:v=>v.id,pageSize:S});if(o)throw j;return e.jsx(D,{table:Q,columns:y,pageSize:S,count:r,isLoading:n,pagination:!0,queryObject:s})},he=({inventoryItem:i})=>{const{t}=l();return e.jsxs(b,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(g,{children:t("reservations.domain")}),e.jsx(E,{size:"small",variant:"secondary",asChild:!0,children:e.jsx(q,{to:`/reservations/create?item_id=${i.id}`,children:t("actions.create")})})]}),e.jsx(pe,{inventoryItem:i})]})},fe=({variants:i})=>{const{t}=l();return i!=null&&i.length?e.jsxs(b,{className:"p-0",children:[e.jsx("div",{className:"flex items-center justify-between px-6 py-4",children:e.jsx(g,{level:"h2",children:t("inventory.associatedVariants")})}),e.jsx("div",{className:"txt-small flex flex-col gap-2 px-2 pb-2",children:i.map(s=>{var n;const a=s.product?`/products/${s.product.id}/variants/${s.id}`:null,r=e.jsx("div",{className:"shadow-elevation-card-rest bg-ui-bg-component rounded-md px-4 py-2 transition-colors",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"shadow-elevation-card-rest rounded-md",children:e.jsx(W,{src:(n=s.product)==null?void 0:n.thumbnail})}),e.jsxs("div",{className:"flex flex-1 flex-col",children:[e.jsx("span",{className:"text-ui-fg-base font-medium",children:s.title}),e.jsx("span",{className:"text-ui-fg-subtle",children:s.options.map(o=>o.value).join(" ⋅ ")})]}),e.jsx("div",{className:"size-7 flex items-center justify-center",children:e.jsx(G,{className:"text-ui-fg-muted"})})]})});return a?e.jsx(q,{to:a,className:"outline-none focus-within:shadow-borders-interactive-with-focus rounded-md [&:hover>div]:bg-ui-bg-component-hover",children:r},s.id):e.jsx("div",{children:r},s.id)})})]}):null},tt=()=>{const{id:i}=$(),t=H(),{inventory_item:s,isPending:a,isError:r,error:n}=z(i,{fields:L},{initialData:t}),{getWidgets:o}=J();if(a||!s)return e.jsx(F,{showJSON:!0,mainSections:3,sidebarSections:2,showMetadata:!0});if(r)throw n;return e.jsxs(N,{widgets:{after:o("inventory_item.details.after"),before:o("inventory_item.details.before"),sideAfter:o("inventory_item.details.side.after"),sideBefore:o("inventory_item.details.side.before")},data:s,showJSON:!0,showMetadata:!0,children:[e.jsxs(N.Main,{children:[e.jsx(B,{inventoryItem:s}),e.jsx(de,{inventoryItem:s}),e.jsx(he,{inventoryItem:s})]}),e.jsxs(N.Sidebar,{children:[e.jsx(fe,{variants:s.variants}),e.jsx(re,{inventoryItem:s})]})]})},je=i=>({queryKey:Y.detail(i),queryFn:async()=>Z.admin.inventoryItem.retrieve(i,{fields:L})}),st=async({params:i})=>{const t=i.id,s=je(t);return V.ensureQueryData(s)};export{et as Breadcrumb,tt as Component,st as loader};
