import{S as b}from"./chunk-2RQLKDBF-qiSEwBBB.js";import{D as T,u as j,c as v}from"./chunk-MGPZHEOT-jK5n9wte.js";import{a as h,j as r,b as x,dC as S,k as w,u as y,dO as A,r as m,t as f}from"./index-zDamnV0F.js";import{u as L}from"./chunk-C76H5USB-rZ7X6QdH.js";import{u as P}from"./chunk-DV5RB7II-m4lf7kgo.js";import{u as E}from"./use-prompt-DpNi1YEx.js";import{P as k}from"./pencil-square-CKZ3tGpw.js";import{T as F}from"./trash-DOxa9shU.js";import{C as I}from"./container-DeMh6UN8.js";import"./Trans-DtMFVRq-.js";import"./x-mark-mini-BbN1gcjE.js";import"./check-ByEBFFrn.js";import"./checkbox-CrI4_yXq.js";import"./index-BXV1pIxX.js";import"./command-bar-Bj7ps8oW.js";import"./index-CEYwgcB4.js";import"./table-BF5_YQhc.js";import"./arrow-up-mini-BPAhzZV5.js";import"./date-picker-TunfBovm.js";import"./clsx-B-dksMZM.js";import"./popover-Df7z-Okb.js";import"./triangle-left-mini-BrMs1Q7v.js";import"./format-DlORWqDc.js";import"./prompt-DE1bPeyn.js";var g=10,N=()=>{const{t:e}=x(),{getWidgets:o}=h(),{q:c,order:u,offset:a,created_at:i,updated_at:t}=L(["q","order","offset","created_at","updated_at"]),s=q(),p=H(),{customer_groups:l,count:C,isPending:D,isError:_,error:G}=S({q:c,order:u,offset:a?parseInt(a):void 0,limit:g,created_at:i?JSON.parse(i):void 0,updated_at:t?JSON.parse(t):void 0,fields:"id,name,created_at,updated_at,customers.id"},{placeholderData:w});if(_)throw G;return r.jsx(b,{widgets:{before:o("customer_group.list.before"),after:o("customer_group.list.after")},children:r.jsx(I,{className:"overflow-hidden p-0",children:r.jsx(T,{data:l,columns:s,filters:p,heading:e("customerGroups.domain"),rowCount:C,getRowId:d=>d.id,rowHref:d=>`/customer-groups/${d.id}`,action:{label:e("actions.create"),to:"/customer-groups/create"},emptyState:{empty:{heading:e("customerGroups.list.empty.heading"),description:e("customerGroups.list.empty.description")},filtered:{heading:e("customerGroups.list.filtered.heading"),description:e("customerGroups.list.filtered.description")}},pageSize:g,isLoading:D})})})},n=v(),q=()=>{const{t:e}=x(),{getFullDate:o}=P(),c=y(),u=E(),{mutateAsync:a}=A(),i=m.useCallback(async({id:t,name:s})=>{await u({title:e("customerGroups.delete.title"),description:e("customerGroups.delete.description",{name:s}),verificationText:s,verificationInstruction:e("general.typeToConfirm"),confirmText:e("actions.delete"),cancelText:e("actions.cancel")})&&await a({id:t},{onSuccess:()=>{f.success(e("customerGroups.delete.successToast",{name:s}))},onError:l=>{f.error(l.message)}})},[e,u,a]);return m.useMemo(()=>[n.accessor("name",{header:e("fields.name"),enableSorting:!0,sortAscLabel:e("filters.sorting.alphabeticallyAsc"),sortDescLabel:e("filters.sorting.alphabeticallyDesc")}),n.accessor("customers",{header:e("customers.domain"),cell:({row:t})=>{var s;return r.jsx("span",{children:((s=t.original.customers)==null?void 0:s.length)??0})}}),n.accessor("created_at",{header:e("fields.createdAt"),cell:({row:t})=>r.jsx("span",{children:o({date:t.original.created_at,includeTime:!0})}),enableSorting:!0,sortAscLabel:e("filters.sorting.dateAsc"),sortDescLabel:e("filters.sorting.dateDesc")}),n.accessor("updated_at",{header:e("fields.updatedAt"),cell:({row:t})=>r.jsx("span",{children:o({date:t.original.updated_at,includeTime:!0})}),enableSorting:!0,sortAscLabel:e("filters.sorting.dateAsc"),sortDescLabel:e("filters.sorting.dateDesc")}),n.action({actions:[[{icon:r.jsx(k,{}),label:e("actions.edit"),onClick:t=>{c(`/customer-groups/${t.row.original.id}/edit`)}}],[{icon:r.jsx(F,{}),label:e("actions.delete"),onClick:t=>{i({id:t.row.original.id,name:t.row.original.name??""})}}]]})],[e,c,o,i])},H=()=>{const e=j();return m.useMemo(()=>e,[e])},ue=()=>{const{getWidgets:e}=h();return r.jsx(b,{widgets:{after:e("customer_group.list.after"),before:e("customer_group.list.before")},children:r.jsx(N,{})})};export{ue as Component};
