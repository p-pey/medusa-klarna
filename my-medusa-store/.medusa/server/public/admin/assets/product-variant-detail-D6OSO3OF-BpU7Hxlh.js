import{L as q}from"./chunk-6WKBBTKM-QVYgk98w.js";import{g as D}from"./chunk-PDWBYQOW-BedvhUOI.js";import{V as f}from"./chunk-EUTK2A3J-CZpwcbuN.js";import{P as p}from"./chunk-P3UUX2T6-C2ZE5233.js";import{u as P,_ as T}from"./chunk-X3LH6P65-DEbiSc3H.js";import{a7 as _,j as e,q as I,d as V,R as k,a as A,S as B,aC as E,s as z,b as u,u as M,aD as L,H as h,A as v,Y as R,_ as w,r as S,aE as K,B as H}from"./index-zDamnV0F.js";import"./lodash-DaFjiiik.js";import{N as O}from"./chunk-WX2SMNCD-CWkDa80T.js";import"./chunk-TMAS4ILY-C0sGQH75.js";import{S as N}from"./chunk-LFLGEXIG-CWErO_vC.js";import{T as y}from"./chunk-2RQLKDBF-qiSEwBBB.js";import{u as Q}from"./use-prompt-DpNi1YEx.js";import{C}from"./component-B-sSfPe9.js";import{P as $}from"./pencil-square-CKZ3tGpw.js";import{T as F}from"./trash-DOxa9shU.js";import{C as j}from"./container-DeMh6UN8.js";import{c as G}from"./index-BXV1pIxX.js";import"./chunk-MWVM4TYO-bKUcYSnf.js";import"./chunk-YEDAFXMB-DkvskggX.js";import"./chunk-AOFGTNG6-BnF5Giak.js";import"./table-BF5_YQhc.js";import"./command-bar-Bj7ps8oW.js";import"./index-CEYwgcB4.js";import"./plus-mini-z8s01bXA.js";import"./chunk-DV5RB7II-m4lf7kgo.js";import"./format-DlORWqDc.js";import"./_isIndex-Ch4ZpAoO.js";import"./x-mark-mini-BbN1gcjE.js";import"./date-picker-TunfBovm.js";import"./clsx-B-dksMZM.js";import"./popover-Df7z-Okb.js";import"./triangle-left-mini-BrMs1Q7v.js";import"./index-CLIDehx4.js";import"./Trans-DtMFVRq-.js";import"./check-ByEBFFrn.js";import"./prompt-DE1bPeyn.js";var ze=t=>{const{id:s,variant_id:a}=t.params||{},{variant:i}=_(s,a,{fields:f},{initialData:t.data,enabled:!!s&&!!a});return i?e.jsx("span",{children:i.title}):null},J=(t,s)=>({queryKey:E.detail(s,{fields:f}),queryFn:async()=>z.admin.product.retrieveVariant(t,s,{fields:f})}),Me=async({params:t})=>{const s=t.id,a=t.variant_id,i=J(s,a);return I.ensureQueryData(i)};function W({variant:t}){var c,d;const{t:s}=u(),a=Q(),i=M(),r=((c=t.inventory)==null?void 0:c.length)>1,{mutateAsync:o}=L(t.product_id,t.id),l=async()=>{await a({title:s("general.areYouSure"),description:s("products.variant.deleteWarning",{title:t.title}),confirmText:s("actions.delete"),cancelText:s("actions.cancel")})&&await o(void 0,{onSuccess:()=>{i("..",{replace:!0})}})};return e.jsxs(j,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(h,{children:t.title}),r&&e.jsx("span",{className:"text-ui-fg-muted font-normal",children:e.jsx(C,{})})]}),e.jsx("span",{className:"text-ui-fg-subtle txt-small mt-2",children:s("labels.productVariant")})]}),e.jsx("div",{className:"flex items-center gap-x-4",children:e.jsx(v,{groups:[{actions:[{label:s("actions.edit"),to:"edit",icon:e.jsx($,{})}]},{actions:[{label:s("actions.delete"),onClick:l,icon:e.jsx(F,{})}]}]})})]}),e.jsx(N,{title:s("fields.sku"),value:t.sku}),(d=t.options)==null?void 0:d.map(n=>{var x;return e.jsx(N,{title:(x=n.option)==null?void 0:x.title,value:e.jsx(R,{size:"2xsmall",children:n.value})},n.id)})]})}var Y=({item:t})=>{const{t:s}=u();return e.jsx(v,{groups:[{actions:[{icon:e.jsx(w,{}),label:s("products.variant.inventory.navigateToItem"),to:`/inventory/${t.id}`}]}]})},m=G(),U=()=>{const{t}=u();return S.useMemo(()=>[m.accessor("title",{header:t("fields.title"),cell:({getValue:s})=>{const a=s();return a?e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:a})}):e.jsx(p,{})}}),m.accessor("sku",{header:t("fields.sku"),cell:({getValue:s})=>{const a=s();return a?e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:a})}):e.jsx(p,{})}}),m.accessor("required_quantity",{header:t("fields.requiredQuantity"),cell:({getValue:s})=>{const a=s();return Number.isNaN(a)?e.jsx(p,{}):e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:a})})}}),m.display({id:"inventory_quantity",header:t("fields.inventory"),cell:({getValue:s,row:{original:a}})=>{var o;if(!((o=a.location_levels)!=null&&o.length))return e.jsx(p,{});let i=0,r=0;return a.location_levels.forEach(l=>{i+=l.available_quantity,r+=1}),e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:t("products.variant.tableItem",{availableCount:i,locationCount:r,count:r})})})}}),m.display({id:"actions",cell:({row:s})=>e.jsx(Y,{item:s.original})})],[t])},b=20;function Z({inventoryItems:t}){const{t:s}=u(),a=U(),{table:i}=P({data:t??[],columns:a,count:t.length,enablePagination:!0,getRowId:o=>o.id,pageSize:b}),r=t.length>1;return e.jsxs(j,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsx(h,{level:"h2",children:s("fields.inventoryItems")})}),e.jsx("div",{className:"flex items-center gap-x-4",children:e.jsx(v,{groups:[{actions:[{label:s(r?"products.variant.inventory.manageKit":"products.variant.inventory.manageItems"),to:"manage-items",icon:r?e.jsx(C,{}):e.jsx(w,{})}]}]})})]}),e.jsx(T,{table:i,columns:a,pageSize:b,count:t.length,navigateTo:o=>`/inventory/${o.id}`})]})}function X(){const{t}=u();return e.jsx(j,{className:"divide-y p-0",children:e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(h,{level:"h2",children:t("fields.inventoryItems")}),e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:t("products.variant.inventory.notManagedDesc")})]}),e.jsx("div",{className:"flex items-center gap-x-4",children:e.jsx(q,{to:"edit",children:t("products.variant.edit.header")})})]})})}function ee({variant:t}){var d;const{t:s}=u(),a=(d=t.prices)==null?void 0:d.filter(n=>!Object.keys(n.rules||{}).length).sort((n,x)=>{var g;return(g=n.currency_code)==null?void 0:g.localeCompare(x.currency_code)}),i=!!(a!=null&&a.length),[r,o]=S.useState(3),l=a==null?void 0:a.slice(0,r),c=()=>{o(r+3)};return e.jsxs(j,{className:"flex flex-col divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(h,{level:"h2",children:s("labels.prices")}),e.jsx(v,{groups:[{actions:[{label:s("actions.edit"),to:`/products/${t.product_id}/variants/${t.id}/prices`,icon:e.jsx(K,{})}]}]})]}),!i&&e.jsx(O,{className:"h-60"}),l==null?void 0:l.map(n=>e.jsxs("div",{className:"txt-small text-ui-fg-subtle flex justify-between px-6 py-4",children:[e.jsx("span",{className:"font-medium",children:n.currency_code.toUpperCase()}),e.jsx("span",{children:D(n.amount,n.currency_code)})]},n.id)),i&&e.jsxs("div",{className:"txt-small text-ui-fg-subtle flex items-center justify-between px-6 py-4",children:[e.jsx("span",{className:"font-medium",children:s("products.variant.pricesPagination",{total:a.length,current:Math.min(r,a.length)})}),e.jsx(H,{onClick:c,disabled:r>=a.length,className:"-mr-3 text-blue-500",variant:"transparent",children:s("actions.showMore")})]})]})}var Le=()=>{const t=V(),{id:s,variant_id:a}=k(),{variant:i,isLoading:r,isError:o,error:l}=_(s,a,{fields:f},{initialData:t}),{getWidgets:c}=A();if(r||!i)return e.jsx(B,{mainSections:2,sidebarSections:1,showJSON:!0,showMetadata:!0});if(o)throw l;return e.jsxs(y,{data:i,hasOutlet:!0,showJSON:!0,showMetadata:!0,widgets:{after:c("product_variant.details.after"),before:c("product_variant.details.before"),sideAfter:c("product_variant.details.side.after"),sideBefore:c("product_variant.details.side.before")},children:[e.jsxs(y.Main,{children:[e.jsx(W,{variant:i}),i.manage_inventory?e.jsx(Z,{inventoryItems:i.inventory_items.map(d=>({...d.inventory,required_quantity:d.required_quantity,variant:i}))}):e.jsx(X,{})]}),e.jsx(y.Sidebar,{children:e.jsx(ee,{variant:i})})]})};export{ze as Breadcrumb,Le as Component,Me as loader};
