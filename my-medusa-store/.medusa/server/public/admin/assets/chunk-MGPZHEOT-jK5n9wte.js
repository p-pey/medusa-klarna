import{r as t,m as $,V as Le,bu as L,I as Ce,x as ut,T as he,X as dt,ai as xe,z as ve,bp as ft,B as Ee,cF as mt,b as ie,a0 as gt,u as bt,j as v,H as pt,A as ye,L as ht}from"./index-zDamnV0F.js";import{C as Me}from"./checkbox-CrI4_yXq.js";import{f as De,u as xt,g as Et,c as Ae}from"./index-BXV1pIxX.js";import{u as Ct}from"./chunk-C76H5USB-rZ7X6QdH.js";import{u as wt,s as pe,a as St}from"./chunk-DV5RB7II-m4lf7kgo.js";import{C as Z}from"./command-bar-Bj7ps8oW.js";import{T as V,D as vt}from"./table-BF5_YQhc.js";import{A as yt,a as Dt}from"./arrow-up-mini-BPAhzZV5.js";import{D as ke}from"./date-picker-TunfBovm.js";import{P as re}from"./popover-Df7z-Okb.js";var kt=Object.defineProperty,se=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable,Te=(n,e,a)=>e in n?kt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a,Tt=(n,e)=>{for(var a in e)Ie.call(e,a)&&Te(n,a,e[a]);if(se)for(var a of se(e))$e.call(e,a)&&Te(n,a,e[a]);return n},Nt=(n,e)=>{var a={};for(var l in n)Ie.call(n,l)&&e.indexOf(l)<0&&(a[l]=n[l]);if(n!=null&&se)for(var l of se(n))e.indexOf(l)<0&&$e.call(n,l)&&(a[l]=n[l]);return a};const je=t.forwardRef((n,e)=>{var a=n,{color:l="currentColor"}=a,r=Nt(a,["color"]);return t.createElement("svg",Tt({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:e},r),t.createElement("path",{stroke:l,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"m8.833 12.611-2.666 1.333V7.5L1.944 1.944h11.112L8.833 7.5z"}))});je.displayName="Funnel";function O({className:n,...e}){return t.createElement("div",{className:$("bg-ui-bg-component animate-pulse rounded-md",n),...e})}const Re=t.createContext(null),z=()=>{const n=t.useContext(Re);if(!n)throw new Error("useDataTableContext must be used within a DataTableContextProvider");return n},Oe=n=>{const{instance:e}=z(),a=e.getCommands(),l=e.getRowSelection(),r=Object.keys(l||[]).length,o=a&&a.length>0&&r>0;function i(p){return typeof n.selectedLabel=="function"?n.selectedLabel(p):n.selectedLabel}return!a||a.length===0?null:t.createElement(Z,{open:o},t.createElement(Z.Bar,null,n.selectedLabel&&t.createElement(t.Fragment,null,t.createElement(Z.Value,null,i(r)),t.createElement(Z.Seperator,null)),a.map((p,s)=>t.createElement(t.Fragment,{key:s},t.createElement(Z.Command,{key:p.label,action:()=>p.action(l),label:p.label,shortcut:p.shortcut}),s<a.length-1&&t.createElement(Z.Seperator,null)))))};Oe.displayName="DataTable.CommandBar";const ze=n=>{const{instance:e}=z(),a=Object.keys(e.getFiltering()),l=e.getFilters().filter(o=>!a.includes(o.id));if(!a.length&&!l.length)throw new Error("DataTable.FilterMenu was rendered but there are no filters to apply. Make sure to pass filters to 'useDataTable'");const r=n.tooltip?Le:t.Fragment;return e.showSkeleton?t.createElement(_t,null):t.createElement(L,null,t.createElement(r,{content:n.tooltip,hidden:l.length===0},t.createElement(L.Trigger,{asChild:!0,disabled:l.length===0},t.createElement(Ce,{size:"small"},t.createElement(je,null)))),t.createElement(L.Content,{side:"bottom"},l.map(o=>t.createElement(L.Item,{key:o.id,onClick:()=>{e.addFilter({id:o.id,value:void 0})}},o.label))))};ze.displayName="DataTable.FilterMenu";const _t=()=>t.createElement(O,{className:"size-7"}),He=n=>{const{instance:e}=z();if(!e.enablePagination)throw new Error("DataTable.Pagination was rendered but pagination is not enabled. Make sure to pass pagination to 'useDataTable'");return e.showSkeleton?t.createElement(Ft,null):t.createElement(V.Pagination,{translations:n.translations,className:"flex-shrink-0",canNextPage:e.getCanNextPage(),canPreviousPage:e.getCanPreviousPage(),pageCount:e.getPageCount(),count:e.rowCount,nextPage:e.nextPage,previousPage:e.previousPage,pageIndex:e.pageIndex,pageSize:e.pageSize})};He.displayName="DataTable.Pagination";const Ft=()=>t.createElement("div",null,t.createElement("div",{className:"flex items-center justify-between p-4"},t.createElement(O,{className:"h-7 w-[138px]"}),t.createElement("div",{className:"flex items-center gap-x-2"},t.createElement(O,{className:"h-7 w-24"}),t.createElement(O,{className:"h-7 w-11"}),t.createElement(O,{className:"h-7 w-11"})))),Be=n=>{const{className:e,...a}=n,{instance:l}=z();if(!l.enableSearch)throw new Error("DataTable.Search was rendered but search is not enabled. Make sure to pass search to 'useDataTable'");return l.showSkeleton?t.createElement(Pt,null):t.createElement(ut,{size:"small",type:"search",value:l.getSearch(),onChange:r=>l.onSearchChange(r.target.value),className:$({"pr-[calc(15px+2px+8px)]":l.isLoading},e),...a})};Be.displayName="DataTable.Search";const Pt=()=>t.createElement(O,{className:"h-7 w-[128px]"}),Ve=n=>{const{instance:e}=z(),a=e.getAllColumns().filter(s=>s.getCanSort()),l=e.getSorting(),r=t.useMemo(()=>a.find(s=>s.id===(l==null?void 0:l.id)),[a,l]),o=t.useCallback(s=>{e.setSorting(c=>{var u;return{id:s,desc:(u=c==null?void 0:c.desc)!==null&&u!==void 0?u:!1}})},[e]),i=t.useCallback(s=>{e.setSorting(c=>{var u;return{id:(u=c==null?void 0:c.id)!==null&&u!==void 0?u:"",desc:s==="true"}})},[e]);if(!e.enableSorting)throw new Error("DataTable.SortingMenu was rendered but sorting is not enabled. Make sure to pass sorting to 'useDataTable'");if(!a.length)throw new Error("DataTable.SortingMenu was rendered but there are no sortable columns. Make sure to set `enableSorting` to true on at least one column.");if(e.showSkeleton)return t.createElement(Mt,null);const p=n.tooltip?Le:t.Fragment;return t.createElement(L,null,t.createElement(p,{content:n.tooltip},t.createElement(L.Trigger,{asChild:!0},t.createElement(Ce,{size:"small"},t.createElement(vt,null)))),t.createElement(L.Content,{side:"bottom"},t.createElement(L.RadioGroup,{value:l==null?void 0:l.id,onValueChange:o},a.map(s=>t.createElement(L.RadioItem,{onSelect:c=>c.preventDefault(),value:s.id,key:s.id},Lt(s)))),l&&t.createElement(t.Fragment,null,t.createElement(L.Separator,null),t.createElement(L.RadioGroup,{value:l!=null&&l.desc?"true":"false",onValueChange:i},t.createElement(L.RadioItem,{onSelect:s=>s.preventDefault(),value:"false",className:"flex items-center gap-2"},t.createElement(yt,{className:"text-ui-fg-subtle"}),Ne("asc",r)),t.createElement(L.RadioItem,{onSelect:s=>s.preventDefault(),value:"true",className:"flex items-center gap-2"},t.createElement(Dt,{className:"text-ui-fg-subtle"}),Ne("desc",r))))))};Ve.displayName="DataTable.SortingMenu";function Lt(n){var e,a,l;const r=n.columnDef.meta;let o;return typeof n.columnDef.header=="string"&&(o=n.columnDef.header),(l=(a=(e=r==null?void 0:r.___sortMetaData)===null||e===void 0?void 0:e.sortLabel)!==null&&a!==void 0?a:o)!==null&&l!==void 0?l:n.id}function Ne(n,e){var a,l,r,o;if(!e)return null;const i=e.columnDef.meta;switch(n){case"asc":return(l=(a=i==null?void 0:i.___sortMetaData)===null||a===void 0?void 0:a.sortAscLabel)!==null&&l!==void 0?l:"A-Z";case"desc":return(o=(r=i==null?void 0:i.___sortMetaData)===null||r===void 0?void 0:r.sortDescLabel)!==null&&o!==void 0?o:"Z-A"}}const Mt=()=>t.createElement(O,{className:"size-7"});var U;(function(n){n.EMPTY="EMPTY",n.FILTERED_EMPTY="FILTERED_EMPTY",n.POPULATED="POPULATED"})(U||(U={}));const Ue=n=>{const e=n.direction==="asc",a=n.direction==="desc",l=e||a;return t.createElement("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:$("opacity-0 transition-opacity group-hover:opacity-100",{"opacity-100":l})},t.createElement("path",{d:"M5.82651 5.75C5.66344 5.74994 5.50339 5.71269 5.36308 5.64216C5.22277 5.57162 5.10736 5.47039 5.02891 5.34904C4.95045 5.22769 4.91184 5.09067 4.9171 4.95232C4.92236 4.81397 4.97131 4.67936 5.05882 4.56255L7.64833 1.10788C7.73055 0.998207 7.84403 0.907911 7.97827 0.845354C8.11252 0.782797 8.26318 0.75 8.41632 0.75C8.56946 0.75 8.72013 0.782797 8.85437 0.845354C8.98862 0.907911 9.1021 0.998207 9.18432 1.10788L11.7744 4.56255C11.862 4.67939 11.9109 4.81405 11.9162 4.95245C11.9214 5.09085 11.8827 5.2279 11.8042 5.34926C11.7257 5.47063 11.6102 5.57185 11.4698 5.64235C11.3294 5.71285 11.1693 5.75003 11.0061 5.75H5.82651Z",className:$("fill-ui-fg-muted",{"fill-ui-fg-subtle":e})}),t.createElement("path",{d:"M11.0067 9.25C11.1698 9.25006 11.3299 9.28731 11.4702 9.35784C11.6105 9.42838 11.7259 9.52961 11.8043 9.65096C11.8828 9.77231 11.9214 9.90933 11.9162 10.0477C11.9109 10.186 11.8619 10.3206 11.7744 10.4374L9.18492 13.8921C9.10271 14.0018 8.98922 14.0921 8.85498 14.1546C8.72074 14.2172 8.57007 14.25 8.41693 14.25C8.26379 14.25 8.11312 14.2172 7.97888 14.1546C7.84464 14.0921 7.73115 14.0018 7.64894 13.8921L5.05882 10.4374C4.97128 10.3206 4.92233 10.1859 4.9171 10.0476C4.91186 9.90915 4.95053 9.7721 5.02905 9.65074C5.10758 9.52937 5.22308 9.42815 5.36347 9.35765C5.50387 9.28715 5.664 9.24997 5.82712 9.25H11.0067Z",className:$("fill-ui-fg-muted",{"fill-ui-fg-subtle":a})}))};Ue.displayName="DataTable.SortingIcon";const Ke=n=>{const e=t.useRef(null),a=t.useRef(!1),[l,r]=t.useState(!1),o=t.useRef(null),{instance:i}=z(),p=i.pageIndex,s=i.getAllColumns(),c=s.find(h=>h.id==="select"),u=s.find(h=>h.id==="action");t.useEffect(()=>{const h=b=>{const w=jt();if(b.key.toLowerCase()==="x"&&e&&!a.current&&!w){a.current=!0;const S=i.getRowModel().rows.find(P=>P.id===e.current);S&&S.getCanSelect()&&S.toggleSelected()}},g=b=>{b.key.toLowerCase()==="x"&&(a.current=!1)};return document.addEventListener("keydown",h),document.addEventListener("keyup",g),()=>{document.removeEventListener("keydown",h),document.removeEventListener("keyup",g)}},[e,i]);const E=h=>{h.currentTarget.scrollLeft>0?r(!0):r(!1)};return t.useEffect(()=>{var h;(h=o.current)===null||h===void 0||h.scroll({top:0,left:0})},[p]),i.showSkeleton?t.createElement($t,{pageSize:i.pageSize}):t.createElement("div",{className:"flex w-full flex-1 flex-col overflow-hidden"},i.emptyState===U.POPULATED&&t.createElement("div",{ref:o,onScroll:E,className:"min-h-0 w-full flex-1 overflow-auto overscroll-none border-y"},t.createElement(V,{className:"relative isolate w-full"},t.createElement(V.Header,{className:"shadow-ui-border-base sticky inset-x-0 top-0 z-[1] w-full border-b-0 border-t-0 shadow-[0_1px_1px_0]",style:{transform:"translate3d(0,0,0)"}},i.getHeaderGroups().map(h=>t.createElement(V.Row,{key:h.id,className:$("border-b-0",{"[&_th:last-of-type]:w-[1%] [&_th:last-of-type]:whitespace-nowrap":u,"[&_th:first-of-type]:w-[1%] [&_th:first-of-type]:whitespace-nowrap":c})},h.headers.map((g,b)=>{const w=g.column.getCanSort(),S=g.column.getIsSorted(),P=g.column.getToggleSortingHandler(),y=g.id==="action",I=g.id==="select",D=y||I,x=w?"button":"div",N=c?b===1:b===0;return t.createElement(V.HeaderCell,{key:g.id,className:$("whitespace-nowrap",{"w-[calc(20px+24px+24px)] min-w-[calc(20px+24px+24px)] max-w-[calc(20px+24px+24px)]":I,"w-[calc(28px+24px+4px)] min-w-[calc(28px+24px+4px)] max-w-[calc(28px+24px+4px)]":y,"after:absolute after:inset-y-0 after:right-0 after:h-full after:w-px after:bg-transparent after:content-['']":N,"after:bg-ui-border-base":l&&N,"bg-ui-bg-subtle sticky":N||I,"left-0":I||N&&!c,"left-[calc(20px+24px+24px)]":N&&c}),style:D?void 0:{width:g.column.columnDef.size,maxWidth:g.column.columnDef.maxSize,minWidth:g.column.columnDef.minSize}},t.createElement(x,{type:w?"button":void 0,onClick:w?P:void 0,className:$("group flex w-fit cursor-default items-center gap-2",{"cursor-pointer":w})},De(g.column.columnDef.header,g.getContext()),w&&t.createElement(Ue,{direction:S})))})))),t.createElement(V.Body,{className:"border-b-0 border-t-0"},i.getRowModel().rows.map(h=>t.createElement(V.Row,{key:h.id,onMouseEnter:()=>e.current=h.id,onMouseLeave:()=>e.current=null,onClick:g=>{var b;return(b=i.onRowClick)===null||b===void 0?void 0:b.call(i,g,h)},className:$("group/row last-of-type:border-b-0",{"cursor-pointer":!!i.onRowClick})},h.getVisibleCells().map((g,b)=>{const w=g.column.id==="select",S=g.column.id==="action",P=w||S,y=c?b===1:b===0;return t.createElement(V.Cell,{key:g.id,className:$("items-stretch truncate whitespace-nowrap",{"w-[calc(20px+24px+24px)] min-w-[calc(20px+24px+24px)] max-w-[calc(20px+24px+24px)]":w,"w-[calc(28px+24px+4px)] min-w-[calc(28px+24px+4px)] max-w-[calc(28px+24px+4px)]":S,"bg-ui-bg-base group-hover/row:bg-ui-bg-base-hover transition-fg sticky h-full":y||w,"after:absolute after:inset-y-0 after:right-0 after:h-full after:w-px after:bg-transparent after:content-['']":y,"after:bg-ui-border-base":l&&y,"left-0":w||y&&!c,"left-[calc(20px+24px+24px)]":y&&c}),style:P?void 0:{width:g.column.columnDef.size,maxWidth:g.column.columnDef.maxSize,minWidth:g.column.columnDef.minSize}},De(g.column.columnDef.cell,g.getContext()))})))))),t.createElement(It,{state:i.emptyState,props:n.emptyState}))};Ke.displayName="DataTable.Table";const At=({heading:n,description:e})=>t.createElement("div",{className:"flex size-full flex-col items-center justify-center gap-2"},t.createElement(he,{size:"base",weight:"plus"},n),t.createElement(he,null,e)),It=({state:n,props:e})=>{var a;if(n===U.POPULATED)return null;const l=n===U.EMPTY?e==null?void 0:e.empty:e==null?void 0:e.filtered;return t.createElement("div",{className:"flex min-h-[250px] w-full flex-1 flex-col items-center justify-center border-y px-6 py-4"},(a=l==null?void 0:l.custom)!==null&&a!==void 0?a:t.createElement(At,{heading:l==null?void 0:l.heading,description:l==null?void 0:l.description}))},$t=({pageSize:n=10})=>t.createElement("div",{className:"flex w-full flex-1 flex-col overflow-hidden"},t.createElement("div",{className:"min-h-0 w-full flex-1 overscroll-none border-y"},t.createElement("div",{className:"flex flex-col divide-y"},t.createElement(O,{className:"h-12 w-full"}),Array.from({length:n},(e,a)=>a).map(e=>t.createElement(O,{key:e,className:"h-12 w-full rounded-none"})))));function jt(){const n=document?document.activeElement:null;return n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement||(n==null?void 0:n.getAttribute("contenteditable"))==="true"}function _e(n){if(typeof n!="object"||n===null)return!1;const e=["$gte","$lte","$gt","$lt"],a=e.some(r=>r in n),l=Object.entries(n).every(([r,o])=>e.includes(r)&&(typeof o=="string"||o===void 0));return a&&l}const Rt=n=>n.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}),Ot="Custom",We="Starting",Ye="Ending",Je=({id:n,filter:e})=>{const{instance:a}=z(),[l,r]=t.useState(e===void 0),[o,i]=t.useState(!1),p=t.useCallback(S=>{!S&&(!e||Array.isArray(e)&&e.length===0)&&a.removeFilter(n),r(S)},[a,n,e]),s=t.useCallback(()=>{a.removeFilter(n)},[a,n]),c=a.getFilterMeta(n),{type:u,options:E,label:h,...g}=c??{},{displayValue:b,isCustomRange:w}=t.useMemo(()=>{var S,P,y,I,D;let x=null,N=!1;if(typeof e=="string"&&(x=(P=(S=E==null?void 0:E.find(d=>d.value===e))===null||S===void 0?void 0:S.label)!==null&&P!==void 0?P:null),Array.isArray(e)&&(x=(y=e.map(d=>{var k;return(k=E==null?void 0:E.find(j=>j.value===d))===null||k===void 0?void 0:k.label}).join(", "))!==null&&y!==void 0?y:null),_e(e)&&(x=(D=(I=E==null?void 0:E.find(d=>_e(d.value)?!o&&(e.$gte===d.value.$gte||!e.$gte&&!d.value.$gte)&&(e.$lte===d.value.$lte||!e.$lte&&!d.value.$lte)&&(e.$gt===d.value.$gt||!e.$gt&&!d.value.$gt)&&(e.$lt===d.value.$lt||!e.$lt&&!d.value.$lt):!1))===null||I===void 0?void 0:I.label)!==null&&D!==void 0?D:null,!x&&Vt(c))){const d=c.formatDateValue?c.formatDateValue:Rt;e.$gte&&!e.$lte&&(N=!0,x=`${c.rangeOptionStartLabel||We} ${d(new Date(e.$gte))}`),e.$lte&&!e.$gte&&(N=!0,x=`${c.rangeOptionEndLabel||Ye} ${d(new Date(e.$lte))}`),e.$gte&&e.$lte&&(N=!0,x=`${d(new Date(e.$gte))} - ${d(new Date(e.$lte))}`)}return{displayValue:x,isCustomRange:N}},[e,E]);return t.useEffect(()=>{w&&!o&&i(!0)},[w,o]),c?t.createElement(re,{open:l,onOpenChange:p,modal:!0},t.createElement(re.Anchor,{asChild:!0},t.createElement("div",{className:$("bg-ui-bg-component flex flex-shrink-0 items-center overflow-hidden rounded-md","[&>*]:txt-compact-small-plus [&>*]:flex [&>*]:items-center [&>*]:justify-center",{"shadow-borders-base divide-x":b,"border border-dashed":!b})},b&&t.createElement("div",{className:"text-ui-fg-muted whitespace-nowrap px-2 py-1"},h||n),t.createElement(re.Trigger,{className:$("text-ui-fg-subtle hover:bg-ui-bg-base-hover active:bg-ui-bg-base-pressed transition-fg whitespace-nowrap px-2 py-1 outline-none",{"text-ui-fg-muted":!b})},b||h||n),b&&t.createElement("button",{type:"button",className:"text-ui-fg-muted hover:bg-ui-bg-base-hover active:bg-ui-bg-base-pressed transition-fg size-7 outline-none",onClick:s},t.createElement(dt,null)))),t.createElement(re.Content,{align:"start",className:"bg-ui-bg-component p-0 outline-none"},(()=>{switch(u){case"select":return t.createElement(Ht,{id:n,filter:e,options:E});case"radio":return t.createElement(Bt,{id:n,filter:e,options:E});case"date":return t.createElement(zt,{id:n,filter:e,options:E,isCustom:o,setIsCustom:i,...g});default:return null}})())):null};Je.displayName="DataTable.Filter";const zt=({id:n,filter:e,options:a,format:l="date",rangeOptionLabel:r=Ot,rangeOptionStartLabel:o=We,rangeOptionEndLabel:i=Ye,disableRangeOption:p=!1,isCustom:s,setIsCustom:c})=>{const u=e,{instance:E}=z(),h=t.useMemo(()=>{if(!(!u||s))return JSON.stringify(u)},[u,s]),g=t.useCallback(d=>{c(!1);const k=JSON.parse(d);E.updateFilter({id:n,value:k})},[E,n]),b=t.useCallback(()=>{c(!0),E.updateFilter({id:n,value:void 0})},[E,n]),w=t.useCallback((d,k)=>{const j={...u};j[d]=k?k.toISOString():void 0,E.updateFilter({id:n,value:j})},[E,n]),{focusedIndex:S,setFocusedIndex:P}=we(a,d=>{d===a.length&&!p?b():g(JSON.stringify(a[d].value))},p?0:1),y=l==="date-time"?"minute":"day",I=u!=null&&u.$lte?y==="minute"?new Date(u.$lte):new Date(new Date(u.$lte).setHours(23,59,59,999)):void 0,D=u!=null&&u.$gte?y==="minute"?new Date(u.$gte):new Date(new Date(u.$gte).setHours(0,0,0,0)):void 0,x=s?a.length:0,N=t.useCallback(()=>{S===-1&&P(x)},[S,x]);return t.createElement(t.Fragment,null,t.createElement("div",{className:"flex flex-col p-1 outline-none",tabIndex:0,role:"list",onFocus:N,autoFocus:!0},a.map((d,k)=>{const j=JSON.stringify(d.value),K=h===j;return t.createElement(oe,{key:k,index:k,option:d,isSelected:K,isFocused:S===k,onClick:()=>g(j),onMouseEvent:P,icon:xe})}),!p&&t.createElement(oe,{index:a.length,option:{label:r,value:"__custom"},icon:xe,isSelected:s,isFocused:S===a.length,onClick:b,onMouseEvent:P})),!p&&s&&t.createElement(t.Fragment,null,t.createElement("div",{className:"flex flex-col py-[3px]"},t.createElement("div",{className:"bg-ui-border-menu-top h-px w-full"}),t.createElement("div",{className:"bg-ui-border-menu-bot h-px w-full"})),t.createElement("div",{className:"flex flex-col gap-2 px-2 pb-3 pt-1"},t.createElement("div",{className:"flex flex-col gap-1"},t.createElement(ve,{id:"custom-start-date-label",size:"xsmall",weight:"plus"},o),t.createElement(ke,{"aria-labelledby":"custom-start-date-label",granularity:y,maxValue:I,value:u!=null&&u.$gte?new Date(u.$gte):null,onChange:d=>w("$gte",d)})),t.createElement("div",{className:"flex flex-col gap-1"},t.createElement(ve,{id:"custom-end-date-label",size:"xsmall",weight:"plus"},i),t.createElement(ke,{"aria-labelledby":"custom-end-date-label",granularity:y,minValue:D,value:u!=null&&u.$lte?new Date(u.$lte):null,onChange:d=>w("$lte",d)})))))},Ht=({id:n,filter:e=[],options:a})=>{const{instance:l}=z(),r=t.useCallback(s=>{if(e!=null&&e.includes(s)){const c=e==null?void 0:e.filter(u=>u!==s);l.updateFilter({id:n,value:c})}else l.updateFilter({id:n,value:[...e??[],s]})},[l,n,e]),{focusedIndex:o,setFocusedIndex:i}=we(a,s=>r(a[s].value)),p=t.useCallback(()=>{o===-1&&i(0)},[o]);return t.createElement("div",{className:"flex flex-col p-1 outline-none",role:"list",tabIndex:0,onFocus:p,autoFocus:!0},a.map((s,c)=>{const u=!!(e!=null&&e.includes(s.value));return t.createElement(oe,{key:c,index:c,option:s,isSelected:u,isFocused:o===c,onClick:()=>r(s.value),onMouseEvent:i,icon:ft})}))},Bt=({id:n,filter:e,options:a})=>{const{instance:l}=z(),r=t.useCallback(s=>{l.updateFilter({id:n,value:s})},[l,n]),{focusedIndex:o,setFocusedIndex:i}=we(a,s=>r(a[s].value)),p=t.useCallback(()=>{o===-1&&i(0)},[o]);return t.createElement("div",{className:"flex flex-col p-1 outline-none",role:"list",tabIndex:0,onFocus:p,autoFocus:!0},a.map((s,c)=>{const u=e===s.value;return t.createElement(oe,{key:c,index:c,option:s,isSelected:u,isFocused:o===c,onClick:()=>r(s.value),onMouseEvent:i,icon:xe})}))};function Vt(n){return n?n.type==="date":!1}const oe=t.memo(({index:n,option:e,isSelected:a,isFocused:l,onClick:r,onMouseEvent:o,icon:i})=>t.createElement("button",{type:"button",role:"listitem",className:$("bg-ui-bg-component txt-compact-small transition-fg flex items-center gap-2 rounded px-2 py-1 outline-none",{"bg-ui-bg-component-hover":l}),onClick:r,onMouseEnter:()=>o(n),onMouseLeave:()=>o(-1),tabIndex:-1},t.createElement("div",{className:"flex size-[15px] items-center justify-center"},a&&t.createElement(i,null)),t.createElement("span",null,e.label)));function we(n,e,a=0){const[l,r]=t.useState(-1),o=t.useCallback(i=>{const p=n.length+a;if(document.activeElement.contentEditable!=="true")switch(i.key){case"ArrowDown":i.preventDefault(),r(s=>s<p-1?s+1:s);break;case"ArrowUp":i.preventDefault(),r(s=>s>0?s-1:s);break;case" ":case"Enter":i.preventDefault(),l>=0&&e(l);break}},[n.length,a,l,e]);return t.useEffect(()=>(window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}),[o]),{focusedIndex:l,setFocusedIndex:r}}const qe=({clearAllFiltersLabel:n="Clear all"})=>{const{instance:e}=z(),a=e.getFiltering(),l=t.useCallback(()=>{e.clearFilters()},[e]),r=Object.keys(a).length;return r===0?null:e.showSkeleton?t.createElement(Ut,{filterCount:r}):t.createElement("div",{className:"bg-ui-bg-subtle flex w-full flex-nowrap items-center gap-2 overflow-x-auto border-t px-6 py-2 md:flex-wrap"},Object.entries(a).map(([o,i])=>t.createElement(Je,{key:o,id:o,filter:i})),r>0?t.createElement(Ee,{variant:"transparent",size:"small",className:"text-ui-fg-muted hover:text-ui-fg-subtle flex-shrink-0 whitespace-nowrap",type:"button",onClick:l},n):null)};qe.displayName="DataTable.FilterBar";const Ut=({filterCount:n})=>t.createElement("div",{className:"bg-ui-bg-subtle flex w-full flex-nowrap items-center gap-2 overflow-x-auto border-t px-6 py-2 md:flex-wrap"},Array.from({length:n}).map((e,a)=>t.createElement(O,{key:a,className:"h-7 w-[180px]"})),n>0?t.createElement(O,{className:"h-7 w-[66px]"}):null),Kt=n=>{var e;return t.createElement("div",{className:"flex flex-col divide-y"},t.createElement("div",{className:$("flex items-center px-6 py-4",n.className)},n.children),t.createElement(qe,{clearAllFiltersLabel:(e=n.translations)===null||e===void 0?void 0:e.clearAll}))},Wt=({instance:n,children:e})=>t.createElement(Re.Provider,{value:{instance:n}},e),Ze=({instance:n,children:e,className:a})=>t.createElement(Wt,{instance:n},t.createElement("div",{className:$("relative flex min-h-0 flex-1 flex-col",a)},e));Ze.displayName="DataTable";const H=Object.assign(Ze,{Table:Ke,Toolbar:Kt,Search:Be,SortingMenu:Ve,FilterMenu:ze,Pagination:He,CommandBar:Oe}),Yt=({rowCount:n=0,filters:e,commands:a,rowSelection:l,sorting:r,filtering:o,pagination:i,search:p,onRowClick:s,autoResetPageIndex:c=!0,isLoading:u=!1,...E})=>{var h,g,b,w,S,P;const{state:y,onSortingChange:I}=r??{},{state:D,onFilteringChange:x}=o??{},{state:N,onPaginationChange:d}=i??{},{state:k,onRowSelectionChange:j,enableRowSelection:K}=l??{},_=t.useCallback(()=>c?()=>N&&(d==null?void 0:d({...N,pageIndex:0})):void 0,[c,N,d]),X=t.useCallback(()=>I?f=>{var m;(m=_())===null||m===void 0||m(),Jt(I,y)(f)}:void 0,[I,y,_]),ee=t.useCallback(()=>j?f=>{var m;(m=_())===null||m===void 0||m(),qt(j,k)(f)}:void 0,[j,k,_]),Se=t.useCallback(()=>x?f=>{var m;(m=_())===null||m===void 0||m(),Zt(x,D)(f)}:void 0,[x,D,_]),J=t.useCallback(()=>d?Gt(d,N):void 0,[d,N]),T=xt({...E,getCoreRowModel:Et(),state:{rowSelection:k??{},sorting:y?[y]:void 0,columnFilters:Object.entries(D??{}).map(([f,m])=>({id:f,value:m})),pagination:N},enableRowSelection:K,rowCount:n,onColumnFiltersChange:Se(),onRowSelectionChange:ee(),onSortingChange:X(),onPaginationChange:J(),manualSorting:!0,manualPagination:!0,manualFiltering:!0}),ce=t.useCallback(()=>{var f,m;return(m=(f=T.getState().sorting)===null||f===void 0?void 0:f[0])!==null&&m!==void 0?m:null},[T]),ue=t.useCallback(f=>{var m,A,be;const it=(A=(m=T.getState().sorting)===null||m===void 0?void 0:m[0])!==null&&A!==void 0?A:null,ct=typeof f=="function"?f(it):f;(be=_())===null||be===void 0||be(),T.setSorting([ct])},[T,_]),W=t.useCallback(()=>e??[],[e]),de=t.useCallback(f=>{const m=W().find(A=>A.id===f);return m?m.options:null},[W]),fe=t.useCallback(f=>W().find(m=>m.id===f)||null,[W]),Y=t.useCallback(()=>{var f;const m=(f=T.getState().columnFilters)!==null&&f!==void 0?f:[];return Object.fromEntries(m.map(A=>[A.id,A.value]))},[T]),G=t.useCallback(f=>{var m;f.value&&((m=_())===null||m===void 0||m()),x==null||x({...Y(),[f.id]:f.value})},[x,Y,_]),me=t.useCallback(f=>{var m;const A=Y();delete A[f],(m=_())===null||m===void 0||m(),x==null||x(A)},[x,Y,_]),ge=t.useCallback(()=>{var f;(f=_())===null||f===void 0||f(),x==null||x({})},[x,_]),te=t.useCallback(f=>{G(f)},[G]),{state:R,onSearchChange:q,debounce:Q=300}=p??{},[C,F]=t.useState(R??""),M=t.useRef();t.useEffect(()=>{F(R??"")},[R]);const ne=t.useCallback(()=>C,[C]),ae=t.useMemo(()=>{if(q)return f=>{var m;if(M.current&&clearTimeout(M.current),Q<=0){(m=_())===null||m===void 0||m(),q(f);return}M.current=setTimeout(()=>{var A;(A=_())===null||A===void 0||A(),q(f)},Q)}},[q,Q,_]);t.useEffect(()=>()=>{M.current&&clearTimeout(M.current)},[]);const Xe=t.useCallback(f=>{F(f),ae==null||ae(f)},[ae]),et=t.useCallback(()=>a??[],[a]),tt=t.useCallback(()=>T.getState().rowSelection,[T]),le=T.getRowModel().rows,nt=t.useMemo(()=>{const f=le.length>0,m=!!R,A=Object.keys(D??{}).length>0;return f?U.POPULATED:m||A?U.FILTERED_EMPTY:U.EMPTY},[le,R,D]),at=t.useMemo(()=>u===!0&&le.length===0,[u,le]),lt=!!i,rt=!!o,st=!!r,ot=!!p;return{getHeaderGroups:T.getHeaderGroups,getRowModel:T.getRowModel,getAllColumns:T.getAllColumns,enablePagination:lt,getCanNextPage:T.getCanNextPage,getCanPreviousPage:T.getCanPreviousPage,nextPage:T.nextPage,previousPage:T.previousPage,getPageCount:T.getPageCount,pageIndex:(b=(g=(h=T.getState())===null||h===void 0?void 0:h.pagination)===null||g===void 0?void 0:g.pageIndex)!==null&&b!==void 0?b:0,pageSize:(P=(S=(w=T.getState())===null||w===void 0?void 0:w.pagination)===null||S===void 0?void 0:S.pageSize)!==null&&P!==void 0?P:10,rowCount:n,enableSearch:ot,getSearch:ne,onSearchChange:Xe,enableSorting:st,getSorting:ce,setSorting:ue,enableFiltering:rt,getFilters:W,getFilterOptions:de,getFilterMeta:fe,getFiltering:Y,addFilter:G,removeFilter:me,clearFilters:ge,updateFilter:te,getCommands:et,getRowSelection:tt,onRowClick:s,emptyState:nt,isLoading:u,showSkeleton:at}};function Jt(n,e){return a=>{const r=(typeof a=="function"?a(e?[e]:[]):a)[0];n(r)}}function qt(n,e){return a=>{const l=typeof a=="function"?a(e??{}):a;n(l)}}function Zt(n,e){return a=>{const l=typeof a=="function"?a(Object.entries(e??{}).map(([o,i])=>({id:o,value:i}))):a,r=Object.fromEntries(l.map(o=>[o.id,o]));n(r)}}function Gt(n,e){return a=>{const l=typeof a=="function"?a(e??{pageIndex:0,pageSize:10}):a;n(l)}}const Ge=({ctx:n})=>{const e=n.column.columnDef.meta,a=e==null?void 0:e.___actions;if(!a)return null;const l=typeof a=="function"?a(n):a;return Array.isArray(l)?t.createElement(L,null,t.createElement(L.Trigger,{asChild:!0,className:"ml-1"},t.createElement(Ce,{size:"small",variant:"transparent"},t.createElement(mt,null))),t.createElement(L.Content,{side:"bottom"},l.map((r,o)=>{const i=Array.isArray(r),p=o===l.length-1;return i?t.createElement(t.Fragment,{key:o},r.map(s=>t.createElement(L.Item,{key:s.label,onClick:c=>{c.stopPropagation(),s.onClick(n)},className:"[&>svg]:text-ui-fg-subtle flex items-center gap-2"},s.icon,s.label)),!p&&t.createElement(L.Separator,null)):t.createElement(L.Item,{key:r.label,onClick:s=>{s.stopPropagation(),r.onClick(n)},className:"[&>svg]:text-ui-fg-subtle flex items-center gap-2"},r.icon,r.label)}))):null};Ge.displayName="DataTable.ActionCell";const Qe=n=>{const e=n.ctx.row.getIsSelected(),a=n.ctx.row.getToggleSelectedHandler();return t.createElement(Me,{onClick:l=>l.stopPropagation(),checked:e,onCheckedChange:a})};Qe.displayName="DataTable.SelectCell";const Qt=n=>{const e=n.ctx.table.getIsSomePageRowsSelected()?"indeterminate":n.ctx.table.getIsAllPageRowsSelected(),a=l=>{n.ctx.table.toggleAllPageRowsSelected(!!l)};return t.createElement(Me,{onClick:l=>l.stopPropagation(),checked:e,onCheckedChange:a})},En=()=>{const{accessor:n,display:e}=Ae();return{accessor:(a,l)=>{const{sortLabel:r,sortAscLabel:o,sortDescLabel:i,meta:p,enableSorting:s,...c}=l,u={___sortMetaData:{sortLabel:r,sortAscLabel:o,sortDescLabel:i},...p||{}};return n(a,{...c,enableSorting:s??!1,meta:u})},display:e,action:({actions:a,...l})=>e({id:"action",cell:r=>t.createElement(Ge,{ctx:r}),meta:{___actions:a,...l.meta||{}},...l}),select:a=>e({id:"select",header:a!=null&&a.header?a.header:l=>t.createElement(Qt,{ctx:l}),cell:a!=null&&a.cell?a.cell:l=>t.createElement(Qe,{ctx:l})})}},Xt=Ae();Xt.accessor("name",{meta:{}});const en=()=>({accessor:(n,e)=>({id:n,...e}),custom:n=>n});var Cn=({data:n=[],columns:e,filters:a,commands:l,action:r,actionMenu:o,getRowId:i,rowCount:p=0,enablePagination:s=!0,enableSearch:c=!0,autoFocusSearch:u=!1,rowHref:E,heading:h,subHeading:g,prefix:b,pageSize:w=10,emptyState:S,rowSelection:P,isLoading:y=!1,layout:I="auto"})=>{const{t:D}=ie(),x=a&&a.length>0,N=l&&l.length>0,d=e.some(C=>C.enableSorting),k=t.useMemo(()=>(a==null?void 0:a.map(C=>C.id))??[],[a]),j=k.map(C=>B(C,b)),{offset:K,order:_,q:X,...ee}=Ct([...k,...d?["order"]:[],...c?["q"]:[],...s?["offset"]:[]],b),[Se,J]=gt(),T=t.useMemo(()=>X??"",[X]),ce=C=>{J(F=>(C?F.set(B("q",b),C):F.delete(B("q",b)),F))},ue=t.useMemo(()=>K?ln(K,w):{pageIndex:0,pageSize:w},[K,w]),W=C=>{J(F=>(C.pageIndex===0?F.delete(B("offset",b)):F.set(B("offset",b),an(C).toString()),F))},de=t.useMemo(()=>rn(k,ee),[k,ee]),fe=C=>{J(F=>(Array.from(F.keys()).forEach(M=>{j.includes(M)&&!(M in C)&&F.delete(M)}),Object.entries(C).forEach(([M,ne])=>{j.includes(B(M,b))&&ne&&F.set(B(M,b),JSON.stringify(ne))}),F))},Y=t.useMemo(()=>_?nn(_):null,[_]),G=C=>{J(F=>{if(C){const M=tn(C);F.set(B("order",b),M)}else F.delete(B("order",b));return F})},{pagination:me,toolbar:ge}=sn(),te=bt(),R=t.useCallback((C,F)=>{if(!E)return;const M=E(F);if(C.metaKey||C.ctrlKey||C.button===1){window.open(M,"_blank","noreferrer");return}if(C.shiftKey){window.open(M,void 0,"noreferrer");return}te(M)},[te,E]),q=Yt({data:n,columns:e,filters:a,commands:l,rowCount:p,getRowId:i,onRowClick:E?R:void 0,pagination:s?{state:ue,onPaginationChange:W}:void 0,filtering:x?{state:de,onFilteringChange:fe}:void 0,sorting:d?{state:Y,onSortingChange:G}:void 0,search:c?{state:T,onSearchChange:ce}:void 0,rowSelection:P,isLoading:y}),Q=h||g;return v.jsxs(H,{instance:q,className:$({"h-full [&_tr]:last-of-type:!border-b":I==="fill"}),children:[v.jsxs(H.Toolbar,{className:"flex flex-col items-start justify-between gap-2 md:flex-row md:items-center",translations:ge,children:[v.jsxs("div",{className:"flex w-full items-center justify-between gap-2",children:[Q&&v.jsxs("div",{children:[h&&v.jsx(pt,{children:h}),g&&v.jsx(he,{size:"small",className:"text-ui-fg-subtle",children:g})]}),v.jsxs("div",{className:"flex items-center justify-end gap-x-2 md:hidden",children:[x&&v.jsx(H.FilterMenu,{tooltip:D("filters.filterLabel")}),v.jsx(H.SortingMenu,{tooltip:D("filters.sortLabel")}),o&&v.jsx(ye,{variant:"primary",...o}),r&&v.jsx(Fe,{...r})]})]}),v.jsxs("div",{className:"flex w-full items-center gap-2 md:justify-end",children:[c&&v.jsx("div",{className:"w-full md:w-auto",children:v.jsx(H.Search,{placeholder:D("filters.searchLabel"),autoFocus:u})}),v.jsxs("div",{className:"hidden items-center gap-x-2 md:flex",children:[x&&v.jsx(H.FilterMenu,{tooltip:D("filters.filterLabel")}),v.jsx(H.SortingMenu,{tooltip:D("filters.sortLabel")}),o&&v.jsx(ye,{variant:"primary",...o}),r&&v.jsx(Fe,{...r})]})]})]}),v.jsx(H.Table,{emptyState:S}),s&&v.jsx(H.Pagination,{translations:me}),N&&v.jsx(H.CommandBar,{selectedLabel:C=>`${C} selected`})]})};function tn(n){return n.desc?`-${n.id}`:n.id}function nn(n){return n.startsWith("-")?{id:n.slice(1),desc:!0}:{id:n,desc:!1}}function an(n){return n.pageIndex*n.pageSize}function ln(n,e){const a=parseInt(n);return{pageIndex:Math.floor(a/e),pageSize:e}}function rn(n,e){if(!e)return{};const a={};for(const l of n){const r=e[l];r&&(a[l]=JSON.parse(r))}return a}function B(n,e){return e?`${e}_${n}`:n}var sn=()=>{const{t:n}=ie(),e={of:n("general.of"),results:n("general.results"),pages:n("general.pages"),prev:n("general.prev"),next:n("general.next")},a={clearAll:n("actions.clearAll")};return{pagination:e,toolbar:a}},Fe=({label:n,disabled:e,...a})=>{const l={size:"small",disabled:e??!1,type:"button",variant:"secondary"};return"to"in a?v.jsx(Ee,{...l,asChild:!0,children:v.jsx(ht,{to:a.to,children:n})}):v.jsx(Ee,{...l,onClick:a.onClick,children:n})},Pe=en(),on=()=>{const{t:n}=ie(),e=t.useMemo(()=>{const a=new Date;return a.setHours(0,0,0,0),a},[]);return t.useMemo(()=>[{label:n("filters.date.today"),value:{$gte:e.toISOString()}},{label:n("filters.date.lastSevenDays"),value:{$gte:pe(e,7).toISOString()}},{label:n("filters.date.lastThirtyDays"),value:{$gte:pe(e,30).toISOString()}},{label:n("filters.date.lastNinetyDays"),value:{$gte:pe(e,90).toISOString()}},{label:n("filters.date.lastTwelveMonths"),value:{$gte:St(e,12).toISOString()}}],[e,n])},wn=n=>{const{t:e}=ie(),{getFullDate:a}=wt(),l=on(),r=t.useMemo(()=>({rangeOptionStartLabel:e("filters.date.starting"),rangeOptionEndLabel:e("filters.date.ending"),rangeOptionLabel:e("filters.date.custom"),options:l}),[n,e,l]);return t.useMemo(()=>[Pe.accessor("created_at",{type:"date",label:e("fields.createdAt"),format:"date",formatDateValue:o=>a({date:o}),options:l,...r}),Pe.accessor("updated_at",{type:"date",label:e("fields.updatedAt"),format:"date",formatDateValue:o=>a({date:o}),options:l,...r})],[e,l,a,r])};export{Cn as D,en as a,En as c,wn as u};
