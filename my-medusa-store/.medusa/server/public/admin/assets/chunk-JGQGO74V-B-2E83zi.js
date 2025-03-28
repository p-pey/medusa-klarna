import{r as t,cc as se,cd as oe,m as f,cf as ne,cj as S,I as ce,X as de,bs as le,ch as ie,cl as ue,cG as pe,ci as me,br as i,j as c,u as F,c as fe,b as ve,cH as ge,w as ye}from"./index-zDamnV0F.js";import{P as g}from"./prompt-DE1bPeyn.js";const N=e=>t.createElement(ue,{...e});N.displayName="FocusModal";const b=t.forwardRef((e,a)=>t.createElement(se,{ref:a,...e}));b.displayName="FocusModal.Trigger";const j=S;j.displayName="FocusModal.Close";const C=e=>t.createElement(pe,{...e});C.displayName="FocusModal.Portal";const D=t.forwardRef(({className:e,...a},s)=>t.createElement(oe,{ref:s,className:f("bg-ui-bg-overlay fixed inset-0","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...a}));D.displayName="FocusModal.Overlay";const w=t.forwardRef(({className:e,overlayProps:a,portalProps:s,...r},o)=>t.createElement(C,{...s},t.createElement(D,{...a}),t.createElement(ne,{ref:o,className:f("bg-ui-bg-base shadow-elevation-modal fixed inset-2 flex flex-col overflow-hidden rounded-lg border outline-none","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-0 data-[state=closed]:slide-in-from-bottom-2  duration-200",e),...r})));w.displayName="FocusModal.Content";const T=t.forwardRef(({children:e,className:a,...s},r)=>t.createElement("div",{ref:r,className:f("border-ui-border-base flex items-center justify-between gap-x-4 border-b px-4 py-2",a),...s},t.createElement("div",{className:"flex items-center gap-x-2"},t.createElement(S,{asChild:!0},t.createElement(ce,{size:"small",type:"button",variant:"transparent"},t.createElement(de,null))),t.createElement(le,null,"esc")),e));T.displayName="FocusModal.Header";const E=t.forwardRef(({children:e,className:a,...s},r)=>t.createElement("div",{ref:r,className:f("border-ui-border-base flex items-center justify-end gap-x-2 border-t p-4",a),...s},e));E.displayName="FocusModal.Footer";const O=t.forwardRef(({className:e,...a},s)=>t.createElement(ie,{ref:s,...a}));O.displayName="FocusModal.Title";const R=me;R.displayName="FocusModal.Description";const k=t.forwardRef(({className:e,...a},s)=>t.createElement("div",{ref:s,className:f("flex-1",e),...a}));k.displayName="FocusModal.Body";const u=Object.assign(N,{Trigger:b,Title:O,Description:R,Content:w,Header:T,Body:k,Close:j,Footer:E});var B=e=>{const a=fe();return t.useMemo(()=>{var o;const r=(o=a.state)==null?void 0:o.restore_params;return r?`${e}?${r.toString()}`:e},[a.state,e])},H=({form:e,blockSearchParams:a=!1,children:s,onClose:r})=>{const{t:o}=ve(),{formState:{isDirty:p}}=e,n=ge(({currentLocation:d,nextLocation:v})=>{const{isSubmitSuccessful:y}=v.state||{};if(y)return r==null||r(!0),!1;const M=d.pathname!==v.pathname,re=d.search!==v.search;if(a){const h=p&&(M||re);return h||r==null||r(y),h}const x=p&&M;return x||r==null||r(y),x}),m=()=>{var d;(d=n==null?void 0:n.reset)==null||d.call(n)},l=()=>{var d;(d=n==null?void 0:n.proceed)==null||d.call(n),r==null||r(!1)};return c.jsxs(ye,{...e,children:[s,c.jsx(g,{open:n.state==="blocked",variant:"confirmation",children:c.jsxs(g.Content,{children:[c.jsxs(g.Header,{children:[c.jsx(g.Title,{children:o("general.unsavedChangesTitle")}),c.jsx(g.Description,{children:o("general.unsavedChangesDescription")})]}),c.jsxs(g.Footer,{children:[c.jsx(g.Cancel,{onClick:m,type:"button",children:o("actions.cancel")}),c.jsx(g.Action,{onClick:l,type:"button",children:o("actions.continue")})]})]})})]})},P=t.createContext(null),I=({prev:e,children:a})=>{const s=F(),[r,o]=t.useState(!0),p=t.useCallback(m=>{s(m||e,{replace:!0,state:{isSubmitSuccessful:!0}})},[s,e]),n=t.useMemo(()=>({handleSuccess:p,setCloseOnEscape:o,__internal:{closeOnEscape:r}}),[p,o,r]);return c.jsx(P.Provider,{value:n,children:a})},$=t.createContext(null),_=({children:e,onOpenChange:a})=>{const[s,r]=t.useState({}),o=l=>s[l]||!1,p=(l,d)=>{r(v=>({...v,[l]:d})),a(d)},n=l=>{r(d=>({...d,[l]:!1}))},m=l=>{r(d=>{const v={...d};return delete v[l],v})};return c.jsx($.Provider,{value:{getIsOpen:o,setIsOpen:p,register:n,unregister:m},children:e})},A=()=>{const e=t.useContext($);if(!e)throw new Error("useStackedModal must be used within a StackedModalProvider");return e},Fe=({prev:e="..",children:a})=>{const s=F(),[r,o]=t.useState(!1),[p,n]=t.useState(!1),m=B(e);t.useEffect(()=>(o(!0),()=>{o(!1),n(!1)}),[]);const l=d=>{if(!d){document.body.style.pointerEvents="auto",s(m,{replace:!0});return}o(d)};return c.jsx(i,{open:r,onOpenChange:l,children:c.jsx(I,{prev:m,children:c.jsx(_,{onOpenChange:n,children:c.jsx(i.Content,{"aria-describedby":void 0,className:f({"!bg-ui-bg-disabled !inset-y-5 !right-5":p}),children:a})})})})},Me=i.Header,xe=i.Title,he=i.Description,Se=i.Body,Ne=i.Footer,be=i.Close,je=H,Ae=Object.assign(Fe,{Header:Me,Title:xe,Body:Se,Description:he,Footer:Ne,Close:be,Form:je}),Ce=()=>{const e=t.useContext(P);if(!e)throw new Error("useRouteModal must be used within a RouteModalProvider");return e},De=({prev:e="..",children:a})=>{const s=F(),[r,o]=t.useState(!1),[p,n]=t.useState(!1),m=B(e);t.useEffect(()=>(o(!0),()=>{o(!1),n(!1)}),[]);const l=d=>{if(!d){document.body.style.pointerEvents="auto",s(m,{replace:!0});return}o(d)};return c.jsx(u,{open:r,onOpenChange:l,children:c.jsx(I,{prev:m,children:c.jsx(_,{onOpenChange:n,children:c.jsx(we,{stackedModalOpen:p,children:a})})})})},we=({stackedModalOpen:e,children:a})=>{const{__internal:s}=Ce(),r=!s.closeOnEscape;return c.jsx(u.Content,{onEscapeKeyDown:r?o=>{o.preventDefault()}:void 0,className:f({"!bg-ui-bg-disabled !inset-x-5 !inset-y-3":e}),children:a})},Te=u.Header,Ee=u.Title,Oe=u.Description,Re=u.Footer,ke=u.Body,Be=u.Close,He=H,Ke=Object.assign(De,{Header:Te,Title:Ee,Body:ke,Description:Oe,Footer:Re,Close:Be,Form:He}),Pe=({id:e,children:a})=>{const{register:s,unregister:r,getIsOpen:o,setIsOpen:p}=A();return t.useEffect(()=>(s(e),()=>r(e)),[]),c.jsx(i,{open:o(e),onOpenChange:n=>p(e,n),children:a})},K=i.Close;K.displayName="StackedDrawer.Close";var X=i.Header;X.displayName="StackedDrawer.Header";var z=i.Body;z.displayName="StackedDrawer.Body";var G=i.Trigger;G.displayName="StackedDrawer.Trigger";var q=i.Footer;q.displayName="StackedDrawer.Footer";var J=i.Title;J.displayName="StackedDrawer.Title";var Q=i.Description;Q.displayName="StackedDrawer.Description";var U=t.forwardRef(({className:e,...a},s)=>c.jsx(i.Content,{ref:s,className:f(e),overlayProps:{className:"bg-transparent"},...a}));U.displayName="StackedDrawer.Content";var Xe=Object.assign(Pe,{Close:K,Header:X,Body:z,Content:U,Trigger:G,Footer:q,Description:Q,Title:J}),Ie=({id:e,onOpenChangeCallback:a,children:s})=>{const{register:r,unregister:o,getIsOpen:p,setIsOpen:n}=A();t.useEffect(()=>(r(e),()=>o(e)),[]);const m=l=>{n(e,l),a==null||a(l)};return c.jsx(u,{open:p(e),onOpenChange:m,children:s})},V=u.Close;V.displayName="StackedFocusModal.Close";var W=u.Header;W.displayName="StackedFocusModal.Header";var Y=u.Body;Y.displayName="StackedFocusModal.Body";var Z=u.Trigger;Z.displayName="StackedFocusModal.Trigger";var L=u.Footer;L.displayName="StackedFocusModal.Footer";var ee=u.Title;ee.displayName="StackedFocusModal.Title";var te=u.Description;te.displayName="StackedFocusModal.Description";var ae=t.forwardRef(({className:e,...a},s)=>c.jsx(u.Content,{ref:s,className:f("!top-6",e),overlayProps:{className:"bg-transparent"},...a}));ae.displayName="StackedFocusModal.Content";var ze=Object.assign(Ie,{Close:V,Header:W,Body:Y,Content:ae,Trigger:Z,Footer:L,Description:te,Title:ee});export{Ke as R,ze as S,A as a,Ae as b,Xe as c,Ce as u};
