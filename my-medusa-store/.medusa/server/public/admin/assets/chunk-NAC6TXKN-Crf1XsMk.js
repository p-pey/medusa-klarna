import{aI as v,s as r,co as o,q as s,cU as c}from"./index-zDamnV0F.js";var d="invites",n=c(d),y=(e,t)=>{const{data:a,...i}=o({queryFn:()=>r.admin.invite.list(e),queryKey:n.list(e),...t});return{...a,...i}},m=e=>v({mutationFn:t=>r.admin.invite.create(t),onSuccess:(t,a,i)=>{s.invalidateQueries({queryKey:n.lists()})},...e}),q=(e,t)=>v({mutationFn:()=>r.admin.invite.resend(e),onSuccess:(a,i,u)=>{s.invalidateQueries({queryKey:n.lists()}),s.invalidateQueries({queryKey:n.detail(e)})},...t}),K=(e,t)=>v({mutationFn:()=>r.admin.invite.delete(e),onSuccess:(a,i,u)=>{s.invalidateQueries({queryKey:n.lists()}),s.invalidateQueries({queryKey:n.detail(e)})},...t}),I=(e,t)=>v({mutationFn:a=>{const{auth_token:i,...u}=a;return r.admin.invite.accept({invite_token:e,...u},{},{Authorization:`Bearer ${i}`})},onSuccess:(a,i,u)=>{},...t});export{m as a,K as b,q as c,I as d,y as u};
