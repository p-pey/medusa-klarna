import{co as y,s,aI as d,q as a,aW as u,cU as c}from"./index-zDamnV0F.js";var m="returns",l=c(m),q=(i,r,t)=>{const{data:e,...n}=y({queryFn:async()=>s.admin.return.retrieve(i,r),queryKey:l.detail(i,r),...t});return{...e,...n}},K=(i,r)=>{const{data:t,...e}=y({queryFn:async()=>s.admin.return.list(i),queryKey:l.list(i),...r});return{...t,...e}},Q=(i,r)=>d({mutationFn:t=>s.admin.return.initiateRequest(t),onSuccess:(t,e,n)=>{a.invalidateQueries({queryKey:u.details()}),a.invalidateQueries({queryKey:u.preview(i)}),a.invalidateQueries({queryKey:u.preview(i)})},...r}),p=(i,r,t)=>d({mutationFn:()=>s.admin.return.cancel(i),onSuccess:(e,n,v)=>{a.invalidateQueries({queryKey:u.details()}),a.invalidateQueries({queryKey:u.preview(r),refetchType:"all"}),a.invalidateQueries({queryKey:l.details()}),a.invalidateQueries({queryKey:l.lists()})},...t}),R=(i,r,t)=>d({mutationFn:e=>s.admin.return.confirmRequest(i,e),onSuccess:(e,n,v)=>{a.invalidateQueries({queryKey:u.details()}),a.invalidateQueries({queryKey:u.preview(r)}),a.invalidateQueries({queryKey:l.details()}),a.invalidateQueries({queryKey:l.lists()})},...t}),S=(i,r,t)=>d({mutationFn:()=>s.admin.return.cancelRequest(i),onSuccess:(e,n,v)=>{a.invalidateQueries({queryKey:u.details()}),a.invalidateQueries({queryKey:u.preview(r),refetchType:"all"}),a.invalidateQueries({queryKey:l.details()}),a.invalidateQueries({queryKey:l.lists()})},...t}),F=(i,r,t)=>d({mutationFn:e=>s.admin.return.addReturnItem(i,e),onSuccess:(e,n,v)=>{a.invalidateQueries({queryKey:u.details()}),a.invalidateQueries({queryKey:u.preview(r)})},...t}),w=(i,r,t)=>d({mutationFn:({actionId:e,...n})=>s.admin.return.updateReturnItem(i,e,n),onSuccess:(e,n,v)=>{a.invalidateQueries({queryKey:u.details()}),a.invalidateQueries({queryKey:u.preview(r)})},...t}),b=(i,r,t)=>d({mutationFn:e=>s.admin.return.removeReturnItem(i,e),onSuccess:(e,n,v)=>{a.invalidateQueries({queryKey:u.details()}),a.invalidateQueries({queryKey:u.preview(r)}),a.invalidateQueries({queryKey:l.details()})},...t}),x=(i,r,t)=>d({mutationFn:e=>s.admin.return.updateRequest(i,e),onSuccess:(e,n,v)=>{a.invalidateQueries({queryKey:u.details()}),a.invalidateQueries({queryKey:u.preview(r)})},...t}),I=(i,r,t)=>d({mutationFn:e=>s.admin.return.addReturnShipping(i,e),onSuccess:(e,n,v)=>{a.invalidateQueries({queryKey:u.details()}),a.invalidateQueries({queryKey:u.preview(r)})},...t}),h=(i,r,t)=>d({mutationFn:({actionId:e,...n})=>s.admin.return.updateReturnShipping(i,e,n),onSuccess:(e,n,v)=>{a.invalidateQueries({queryKey:u.details()}),a.invalidateQueries({queryKey:u.preview(r)})},...t}),f=(i,r,t)=>d({mutationFn:e=>s.admin.return.deleteReturnShipping(i,e),onSuccess:(e,n,v)=>{a.invalidateQueries({queryKey:u.details()}),a.invalidateQueries({queryKey:u.preview(r)}),a.invalidateQueries({queryKey:l.details()})},...t}),U=(i,r,t)=>d({mutationFn:e=>s.admin.return.initiateReceive(i,e),onSuccess:(e,n,v)=>{a.invalidateQueries({queryKey:u.details()}),a.invalidateQueries({queryKey:u.preview(r)})},...t}),g=(i,r,t)=>d({mutationFn:e=>s.admin.return.receiveItems(i,e),onSuccess:(e,n,v)=>{a.invalidateQueries({queryKey:u.details()}),a.invalidateQueries({queryKey:u.preview(r)})},...t}),C=(i,r,t)=>d({mutationFn:({actionId:e,...n})=>s.admin.return.updateReceiveItem(i,e,n),onSuccess:(e,n,v)=>{a.invalidateQueries({queryKey:u.details()}),a.invalidateQueries({queryKey:u.preview(r)})},...t}),D=(i,r,t)=>d({mutationFn:e=>s.admin.return.removeReceiveItem(i,e),onSuccess:(e,n,v)=>{a.invalidateQueries({queryKey:u.details()}),a.invalidateQueries({queryKey:u.preview(r)})},...t}),A=(i,r,t)=>d({mutationFn:e=>s.admin.return.dismissItems(i,e),onSuccess:(e,n,v)=>{a.invalidateQueries({queryKey:u.details()}),a.invalidateQueries({queryKey:u.preview(r)})},...t}),T=(i,r,t)=>d({mutationFn:({actionId:e,...n})=>s.admin.return.updateDismissItem(i,e,n),onSuccess:(e,n,v)=>{a.invalidateQueries({queryKey:u.details()}),a.invalidateQueries({queryKey:u.preview(r)})},...t}),E=(i,r,t)=>d({mutationFn:e=>s.admin.return.removeDismissItem(i,e),onSuccess:(e,n,v)=>{a.invalidateQueries({queryKey:u.details()}),a.invalidateQueries({queryKey:u.preview(r)})},...t}),k=(i,r,t)=>d({mutationFn:e=>s.admin.return.confirmReceive(i,e),onSuccess:(e,n,v)=>{a.invalidateQueries({queryKey:u.details()}),a.invalidateQueries({queryKey:u.preview(r)}),a.invalidateQueries({queryKey:l.details()}),a.invalidateQueries({queryKey:l.lists()})},...t}),Y=(i,r,t)=>d({mutationFn:()=>s.admin.return.cancelReceive(i),onSuccess:(e,n,v)=>{a.invalidateQueries({queryKey:u.details()}),a.invalidateQueries({queryKey:u.preview(r),refetchType:"all"}),a.invalidateQueries({queryKey:l.details()}),a.invalidateQueries({queryKey:l.lists()})},...t});export{K as a,p as b,q as c,U as d,g as e,k as f,Y as g,C as h,D as i,A as j,T as k,E as l,Q as m,R as n,x as o,I as p,h as q,l as r,f as s,F as t,S as u,b as v,w};
