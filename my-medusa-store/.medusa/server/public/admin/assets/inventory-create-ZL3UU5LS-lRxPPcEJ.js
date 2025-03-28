import{C as P}from"./chunk-MW4K5NNY-BAnCJ5qG.js";import{o as p}from"./chunk-ZQRKUG6J-C5sSSVUV.js";import{D as v,a as A}from"./chunk-GE4APTT2-DuHomJ9f.js";import{a6 as a,cZ as G,j as e,b as _,r as c,a8 as Q,a9 as V,d_ as $,t as y,s as U,q as W,cW as Z,m as J,H as N,w as l,x as o,D as X,B as I}from"./index-zDamnV0F.js";import{t as Y,b as ee,a as le}from"./chunk-3ISBJK7K-BPFEXhG7.js";import{S as se}from"./chunk-CBJWO6K6-D5fhXv0q.js";import{K as te}from"./chunk-6HTZNHPT-B5-27SmV.js";import{R as h,u as S}from"./chunk-JGQGO74V-B-2E83zi.js";import{P as u}from"./progress-tabs-_jV0Q9Ne.js";import{T as re}from"./textarea-DeLvahAQ.js";import"./triangles-mini-BXx7d2eG.js";import"./chunk-6GU6IDUA-CDc7wW5L.js";import"./chunk-MWVM4TYO-bKUcYSnf.js";import"./_isIndex-Ch4ZpAoO.js";import"./index.esm-DwUltEsw.js";import"./index-BXV1pIxX.js";import"./checkbox-CrI4_yXq.js";import"./prompt-DE1bPeyn.js";var ie=({form:n,locations:t})=>{const{setCloseOnEscape:x}=S(),i=ae();return e.jsx("div",{className:"size-full",children:e.jsx(v,{columns:i,data:t,state:n,onEditingChange:d=>x(!d)})})},F=A(),ae=()=>{const{t:n}=_();return c.useMemo(()=>[F.column({id:"location",header:()=>e.jsx("div",{className:"flex size-full items-center overflow-hidden",children:e.jsx("span",{className:"truncate",children:n("locations.domain")})}),cell:t=>e.jsx(v.ReadonlyCell,{context:t,children:t.row.original.name}),disableHiding:!0}),F.column({id:"in-stock",name:n("fields.inStock"),header:n("fields.inStock"),field:t=>`locations.${t.row.original.id}`,type:"number",cell:t=>e.jsx(v.NumberCell,{placeholder:"0",context:t}),disableHiding:!0})],[n])},ne=a.object({title:a.string().min(1),description:a.string().optional(),sku:a.string().optional(),hs_code:a.string().optional(),weight:p,length:p,height:p,width:p,origin_country:a.string().optional(),mid_code:a.string().optional(),material:a.string().optional(),requires_shipping:a.boolean().optional(),thumbnail:a.string().optional(),locations:a.record(a.string(),p).optional()});function oe({locations:n}){const{t}=_(),{handleSuccess:x}=S(),[i,d]=c.useState("details"),r=Q({defaultValues:{title:"",sku:"",hs_code:"",weight:"",length:"",height:"",width:"",origin_country:"",mid_code:"",material:"",description:"",requires_shipping:!0,thumbnail:"",locations:Object.fromEntries(n.map(s=>[s.id,""]))},resolver:V(ne)}),{trigger:j,formState:{isDirty:f}}=r,{mutateAsync:k,isPending:L}=$(),E=r.handleSubmit(async s=>{const{locations:C,weight:D,length:H,height:z,width:M,...R}=s,B=Y(R,!1),K=ee({weight:D,length:H,height:z,width:M},!1),{inventory_item:O}=await k({...B,...K},{onError:m=>{y.error(m.message)}});await U.admin.inventoryItem.batchUpdateLevels(O.id,{create:Object.entries(C??{}).filter(([m,b])=>!!b).map(([m,b])=>({location_id:m,stocked_quantity:le(b,!1)}))}).then(async()=>{await W.invalidateQueries({queryKey:Z.lists()})}).catch(m=>{y.error(m.message)}).finally(()=>{x(),y.success(t("inventory.create.successToast"))})}),[w,g]=c.useState({availability:"not-started",details:"not-started"}),T=c.useCallback(async s=>{await j()&&d(s)},[j]),q=c.useCallback(async()=>{if(await j())switch(i){case"details":{d("availability");break}}},[i,j]);return c.useEffect(()=>{g(f?s=>({...s,details:"in-progress"}):s=>({...s,details:"not-started"}))},[f]),c.useEffect(()=>{i==="details"&&f&&g(s=>({...s,details:"in-progress"})),i==="availability"&&g(s=>({...s,details:"completed",availability:"in-progress"}))},[i,f]),e.jsx(h.Form,{form:r,children:e.jsx(u,{value:i,className:"h-full",onValueChange:s=>T(s),children:e.jsxs(te,{className:"flex h-full flex-col overflow-hidden",onSubmit:E,children:[e.jsx(h.Header,{children:e.jsxs(u.List,{className:"border-ui-border-base -my-2 ml-2 min-w-0 flex-1 border-l",children:[e.jsx(u.Trigger,{value:"details",status:w.details,className:"w-full max-w-[200px]",children:e.jsx("span",{className:"w-full cursor-auto overflow-hidden text-ellipsis whitespace-nowrap",children:t("inventory.create.details")})}),e.jsx(u.Trigger,{value:"availability",className:"w-full max-w-[200px]",status:w.availability,children:e.jsx("span",{className:"w-full overflow-hidden text-ellipsis whitespace-nowrap",children:t("inventory.create.availability")})})]})}),e.jsxs(h.Body,{className:J("flex h-full w-full flex-col items-center divide-y overflow-hidden",{"mx-auto":i==="details"}),children:[e.jsx(u.Content,{value:"details",className:"h-full w-full overflow-auto px-3",children:e.jsxs("div",{className:"mx-auto flex w-full max-w-[720px] flex-col gap-y-8 px-px py-16",children:[e.jsxs("div",{className:"flex flex-col gap-y-8",children:[e.jsx(N,{children:t("inventory.create.title")}),e.jsxs("div",{className:"flex flex-col gap-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 lg:grid-cols-2",children:[e.jsx(l.Field,{control:r.control,name:"title",render:({field:s})=>e.jsxs(l.Item,{children:[e.jsx(l.Label,{children:t("fields.title")}),e.jsx(l.Control,{children:e.jsx(o,{...s,placeholder:t("fields.title")})}),e.jsx(l.ErrorMessage,{})]})}),e.jsx(l.Field,{control:r.control,name:"sku",render:({field:s})=>e.jsxs(l.Item,{children:[e.jsx(l.Label,{children:t("fields.sku")}),e.jsx(l.Control,{children:e.jsx(o,{...s,placeholder:"sku-123"})}),e.jsx(l.ErrorMessage,{})]})})]}),e.jsx(l.Field,{control:r.control,name:"description",render:({field:s})=>e.jsxs(l.Item,{children:[e.jsx(l.Label,{optional:!0,children:t("products.fields.description.label")}),e.jsx(l.Control,{children:e.jsx(re,{...s,placeholder:"The item description"})})]})})]}),e.jsx(se,{control:r.control,name:"requires_shipping",label:t("inventory.create.requiresShipping"),description:t("inventory.create.requiresShippingHint")})]}),e.jsx(X,{}),e.jsxs("div",{className:"flex flex-col gap-y-6",children:[e.jsx(N,{level:"h2",children:t("inventory.create.attributes")}),e.jsxs("div",{className:"grid grid-cols-1 gap-x-4 gap-y-4 lg:grid-cols-2 lg:gap-y-8",children:[e.jsx(l.Field,{control:r.control,name:"width",render:({field:s})=>e.jsxs(l.Item,{children:[e.jsx(l.Label,{optional:!0,children:t("products.fields.width.label")}),e.jsx(l.Control,{children:e.jsx(o,{...s,type:"number",min:0,placeholder:"100"})})]})}),e.jsx(l.Field,{control:r.control,name:"length",render:({field:s})=>e.jsxs(l.Item,{children:[e.jsx(l.Label,{optional:!0,children:t("products.fields.length.label")}),e.jsx(l.Control,{children:e.jsx(o,{...s,type:"number",min:0,placeholder:"100"})})]})}),e.jsx(l.Field,{control:r.control,name:"height",render:({field:s})=>e.jsxs(l.Item,{children:[e.jsx(l.Label,{optional:!0,children:t("products.fields.height.label")}),e.jsx(l.Control,{children:e.jsx(o,{...s,type:"number",min:0,placeholder:"100"})})]})}),e.jsx(l.Field,{control:r.control,name:"weight",render:({field:s})=>e.jsxs(l.Item,{children:[e.jsx(l.Label,{optional:!0,children:t("products.fields.weight.label")}),e.jsx(l.Control,{children:e.jsx(o,{...s,type:"number",min:0,placeholder:"100"})})]})}),e.jsx(l.Field,{control:r.control,name:"mid_code",render:({field:s})=>e.jsxs(l.Item,{children:[e.jsx(l.Label,{optional:!0,children:t("products.fields.mid_code.label")}),e.jsx(l.Control,{children:e.jsx(o,{...s})})]})}),e.jsx(l.Field,{control:r.control,name:"hs_code",render:({field:s})=>e.jsxs(l.Item,{children:[e.jsx(l.Label,{optional:!0,children:t("products.fields.hs_code.label")}),e.jsx(l.Control,{children:e.jsx(o,{...s})})]})}),e.jsx(l.Field,{control:r.control,name:"origin_country",render:({field:s})=>e.jsxs(l.Item,{children:[e.jsx(l.Label,{optional:!0,children:t("products.fields.countryOrigin.label")}),e.jsx(l.Control,{children:e.jsx(P,{...s})})]})}),e.jsx(l.Field,{control:r.control,name:"material",render:({field:s})=>e.jsxs(l.Item,{children:[e.jsx(l.Label,{optional:!0,children:t("products.fields.material.label")}),e.jsx(l.Control,{children:e.jsx(o,{...s})})]})})]})]})]})}),e.jsx(u.Content,{value:"availability",className:"size-full",children:e.jsx(ie,{form:r,locations:n})})]}),e.jsx(h.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(h.Close,{asChild:!0,children:e.jsx(I,{variant:"secondary",size:"small",children:t("actions.cancel")})}),e.jsx(I,{size:"small",className:"whitespace-nowrap",isLoading:L,onClick:i!=="availability"?q:void 0,type:i==="availability"?"submit":"button",children:t(i==="availability"?"actions.save":"general.next")},i==="availability"?"details":"pricing")]})})]})})})}function _e(){const{isPending:n,stock_locations:t,isError:x,error:i}=G({limit:9999,fields:"id,name"}),d=!n&&!!t;if(x)throw i;return e.jsx(h,{children:d&&e.jsx(oe,{locations:t})})}export{_e as Component};
