import{r as e,m as s,I as d,bc as g,cK as x,aU as f,aY as p}from"./index-zDamnV0F.js";import{X as E}from"./x-mark-mini-BbN1gcjE.js";const b=e.forwardRef(({variant:t="info",dismissible:r=!1,className:a,children:o,...c},n)=>{const[i,l]=e.useState(!1),m={info:g,error:x,success:f,warning:p}[t],u=()=>{l(!0)};return i?null:e.createElement("div",{ref:n,className:s("bg-ui-bg-subtle text-pretty txt-compact-small grid items-start gap-x-2 rounded-lg border p-3",{"grid-cols-[20px_1fr]":!r,"grid-cols-[20px_1fr_20px]":r},a),...c},e.createElement(m,{className:s({"text-ui-tag-red-icon":t==="error","text-ui-tag-green-icon":t==="success","text-ui-tag-orange-icon":t==="warning","text-ui-tag-neutral-icon":t==="info"})}),e.createElement("div",null,o),r&&e.createElement(d,{size:"2xsmall",variant:"transparent",type:"button",onClick:u},e.createElement(E,{className:"text-ui-fg-muted"})))});export{b as A};
