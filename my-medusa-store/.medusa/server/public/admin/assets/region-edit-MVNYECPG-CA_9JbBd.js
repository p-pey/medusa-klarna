import{f as S}from"./chunk-IR5DHEKS-aVJcUHa1.js";import{C as F}from"./chunk-3LLQ6F7F-YqZBDIlq.js";import{c as T}from"./chunk-MWVM4TYO-bKUcYSnf.js";import{b as I}from"./chunk-3UEMCYR5-BBY9RH8K.js";import{a2 as N,a4 as v,ad as H,a5 as y,b as R,R as M,e8 as k,g as z,l as U,j as e,H as B,a8 as V,ea as K,t as b,w as s,x as A,ab as C,T as E,B as P}from"./index-zDamnV0F.js";import{K as D}from"./chunk-6HTZNHPT-B5-27SmV.js";import{b as l,u as q}from"./chunk-JGQGO74V-B-2E83zi.js";import{S as u}from"./select-D4jL9SJS.js";import"./x-mark-mini-BbN1gcjE.js";import"./triangles-mini-BXx7d2eG.js";import"./plus-mini-z8s01bXA.js";import"./prompt-DE1bPeyn.js";import"./check-ByEBFFrn.js";N({name:v().min(1),currency_code:v(),payment_providers:H(v()),automatic_taxes:y(),is_tax_inclusive:y()});var G=({region:o,currencies:j,paymentProviders:d,pricePreferences:m})=>{var h;const{t:i}=R(),{handleSuccess:p}=q(),t=m==null?void 0:m.find(r=>r.attribute==="region_id"&&r.value===o.id),a=V({defaultValues:{name:o.name,currency_code:o.currency_code.toUpperCase(),payment_providers:((h=o.payment_providers)==null?void 0:h.map(r=>r.id))||[],automatic_taxes:o.automatic_taxes,is_tax_inclusive:(t==null?void 0:t.is_tax_inclusive)||!1}}),{mutateAsync:g,isPending:f}=K(o.id),_=a.handleSubmit(async r=>{await g({name:r.name,automatic_taxes:r.automatic_taxes,currency_code:r.currency_code.toLowerCase(),payment_providers:r.payment_providers,is_tax_inclusive:r.is_tax_inclusive},{onSuccess:()=>{b.success(i("regions.toast.edit")),p()},onError:n=>{b.error(n.message)}})});return e.jsx(l.Form,{form:a,children:e.jsxs(D,{onSubmit:_,className:"flex flex-1 flex-col",children:[e.jsx(l.Body,{children:e.jsxs("div",{className:"flex flex-col gap-y-8",children:[e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(s.Field,{control:a.control,name:"name",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:i("fields.name")}),e.jsx(s.Control,{children:e.jsx(A,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:a.control,name:"currency_code",render:({field:{onChange:r,ref:n,...c}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:i("fields.currency")}),e.jsx(s.Control,{children:e.jsxs(u,{onValueChange:r,...c,children:[e.jsx(u.Trigger,{ref:n,children:e.jsx(u.Value,{})}),e.jsx(u.Content,{children:j.map(x=>e.jsx(u.Item,{value:x.code,children:x.code.toUpperCase()},x.code))})]})}),e.jsx(s.ErrorMessage,{})]})})]}),e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(s.Field,{control:a.control,name:"automatic_taxes",render:({field:{value:r,onChange:n,...c}})=>e.jsx(s.Item,{children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsx(s.Label,{children:i("fields.automaticTaxes")}),e.jsx(s.Control,{children:e.jsx(C,{...c,checked:r,onCheckedChange:n})})]}),e.jsx(s.Hint,{children:i("regions.automaticTaxesHint")}),e.jsx(s.ErrorMessage,{})]})})}),e.jsx(s.Field,{control:a.control,name:"is_tax_inclusive",render:({field:{value:r,onChange:n,...c}})=>e.jsx(s.Item,{children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsx(s.Label,{children:i("fields.taxInclusivePricing")}),e.jsx(s.Control,{children:e.jsx(C,{...c,checked:r,onCheckedChange:n})})]}),e.jsx(s.Hint,{children:i("regions.taxInclusiveHint")}),e.jsx(s.ErrorMessage,{})]})})})]}),e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsxs("div",{children:[e.jsx(E,{size:"small",leading:"compact",weight:"plus",children:"Providers"}),e.jsx(E,{size:"small",className:"text-ui-fg-subtle",children:i("regions.providersHint")})]}),e.jsx(s.Field,{control:a.control,name:"payment_providers",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:i("fields.paymentProviders")}),e.jsx(s.Control,{children:e.jsx(F,{options:d.map(n=>({label:S(n.id),value:n.id})),...r})}),e.jsx(s.ErrorMessage,{})]})})]})]})}),e.jsx(l.Footer,{children:e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(l.Close,{asChild:!0,children:e.jsx(P,{size:"small",variant:"secondary",children:i("actions.cancel")})}),e.jsx(P,{size:"small",type:"submit",isLoading:f,children:i("actions.save")})]})})]})})},ae=()=>{const{t:o}=R(),{id:j}=M(),{region:d,isPending:m,isError:i,error:p}=k(j,{fields:"*payment_providers,*countries,+automatic_taxes"}),{store:t,isPending:a,isError:g,error:f}=z(),{price_preferences:_=[],isPending:h,isError:r,error:n}=U({attribute:"region_id",value:j},{enabled:!!d}),c=m||a||h,x=((t==null?void 0:t.supported_currencies)??[]).map(L=>T[L.currency_code.toUpperCase()]),{payment_providers:w=[]}=I({limit:999,is_enabled:!0});if(i)throw p;if(g)throw f;if(r)throw n;return e.jsxs(l,{children:[e.jsx(l.Header,{children:e.jsx(B,{children:o("regions.editRegion")})}),!c&&d&&e.jsx(G,{region:d,currencies:x,paymentProviders:w,pricePreferences:_})]})};export{ae as Component};
