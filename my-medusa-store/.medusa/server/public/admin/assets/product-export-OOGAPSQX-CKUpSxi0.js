import{b as o,j as s,H as c,P as x,B as i,T as u,t as a}from"./index-zDamnV0F.js";import{u as m,a as h}from"./chunk-U6CSGYH6-DCGyQdbn.js";import{D as j}from"./chunk-TMAS4ILY-C0sGQH75.js";import{b as t,u as f}from"./chunk-JGQGO74V-B-2E83zi.js";import"./chunk-C76H5USB-rZ7X6QdH.js";import"./lodash-DaFjiiik.js";import"./chunk-DV5RB7II-m4lf7kgo.js";import"./format-DlORWqDc.js";import"./_isIndex-Ch4ZpAoO.js";import"./x-mark-mini-BbN1gcjE.js";import"./index-CEYwgcB4.js";import"./date-picker-TunfBovm.js";import"./clsx-B-dksMZM.js";import"./popover-Df7z-Okb.js";import"./triangle-left-mini-BrMs1Q7v.js";import"./index-CLIDehx4.js";import"./prompt-DE1bPeyn.js";var v=()=>{const{t:r}=o(),e=h();return s.jsxs("div",{children:[s.jsx(c,{level:"h2",children:r("products.export.filters.title")}),s.jsx(u,{size:"small",className:"text-ui-fg-subtle",children:r("products.export.filters.description")}),s.jsx("div",{className:"mt-4",children:s.jsx(j,{filters:e,readonly:!0})})]})},A=()=>{const{t:r}=o();return s.jsxs(t,{children:[s.jsxs(t.Header,{children:[s.jsx(t.Title,{asChild:!0,children:s.jsx(c,{children:r("products.export.header")})}),s.jsx(t.Description,{className:"sr-only",children:r("products.export.description")})]}),s.jsx(y,{})]})},y=()=>{const{t:r}=o(),{searchParams:e}=m({}),{mutateAsync:n}=x(e),{handleSuccess:l}=f(),d=async()=>{await n({},{onSuccess:()=>{a.info(r("products.export.success.title"),{description:r("products.export.success.description")}),l()},onError:p=>{a.error(p.message)}})};return s.jsxs(s.Fragment,{children:[s.jsx(t.Body,{children:s.jsx(v,{})}),s.jsx(t.Footer,{children:s.jsxs("div",{className:"flex items-center gap-x-2",children:[s.jsx(t.Close,{asChild:!0,children:s.jsx(i,{size:"small",variant:"secondary",children:r("actions.cancel")})}),s.jsx(i,{onClick:d,size:"small",children:r("actions.export")})]})})]})};export{A as Component};
