import{_ as B,r,f as z,o as l,c as i,a as e,w as O,v as U,b as f,u,h as F,F as C,i as y,j as T,t as b,k as $,l as w,e as A,p as L,d as P,m as W,n as D,q as E,s as K,x as R}from"./index.4c9b7b2e.js";const a=_=>(L("data-v-1a5f8309"),_=_(),P(),_),j=a(()=>e("h1",null,"Organization Management",-1)),q=a(()=>e("br",null,null,-1)),G=a(()=>e("br",null,null,-1)),H={key:0,class:"popup"},J={class:"popup-content"},Q=a(()=>e("h2",null,"Create Organization",-1)),X=a(()=>e("br",null,null,-1)),Y=a(()=>e("br",null,null,-1)),Z={key:1},ee=a(()=>e("label",{for:"organization-select"},"Select Organization:",-1)),ne=["value"],te=a(()=>e("br",null,null,-1)),ae=a(()=>e("br",null,null,-1)),oe=a(()=>e("br",null,null,-1)),se={key:0,class:"popup"},le={class:"popup-content"},ie=a(()=>e("h2",null,"Add User",-1)),re=a(()=>e("label",{for:"user-name"},"User Name:",-1)),ue={key:0,class:"error"},de=["onClick"],ce={__name:"OrganizationView",setup(_){const v=r(""),m=r(!1),d=r(""),g=r(!1),c=r("");let o=z.current;async function V(s){let n=await W(s,D.id);return n!=null?(o=n,await w(),!0):!1}let k=r([]);function x(s){E(o,s).then(()=>{p()})}function p(){o!==void 0&&$(o).then(s=>{k.value=s})}function N(s){K(s).then(n=>{n.statusCode===404?d.value="User not found":R(o,n.payload).then(()=>{p(),h()})})}function S(){N(v.value)?(h(),p()):d.value="User not found"}function h(){m.value=!1,v.value="",d.value=""}function I(){c.value?(V(c.value),g.value=!1,c.value=""):alert("Please enter an organization name.")}return p(),(s,n)=>(l(),i("main",null,[j,q,e("button",{onClick:n[0]||(n[0]=t=>g.value=!0)},"Create Organization"),G,g.value?(l(),i("div",H,[e("div",J,[Q,O(e("input",{"onUpdate:modelValue":n[1]||(n[1]=t=>c.value=t),placeholder:"Enter organization name"},null,512),[[U,c.value]]),X,e("button",{onClick:I},"OK"),e("button",{onClick:n[2]||(n[2]=t=>g.value=!1)},"Cancel")])])):f("",!0),Y,u(z).organizations.length!=0?(l(),i("div",Z,[ee,O(e("select",{id:"organization-select","onUpdate:modelValue":n[3]||(n[3]=t=>T(o)?o.value=t:o=t),onChange:n[4]||(n[4]=t=>u(w)(u(o)+0).then(M=>p()))},[(l(!0),i(C,null,y(u(z).organizations,t=>(l(),i("option",{key:t.id,value:t.id},b(t.name),9,ne))),128))],544),[[F,u(o)]]),te,ae,oe,e("button",{onClick:n[5]||(n[5]=t=>m.value=!0)},"Add User to Organization"),m.value?(l(),i("div",se,[e("div",le,[ie,re,O(e("input",{id:"user-name","onUpdate:modelValue":n[6]||(n[6]=t=>v.value=t),type:"text"},null,512),[[U,v.value]]),e("button",{onClick:S},"OK"),e("button",{onClick:h},"Cancel"),d.value?(l(),i("p",ue,b(d.value),1)):f("",!0)])])):f("",!0),e("ul",null,[(l(!0),i(C,null,y(u(k),t=>(l(),i("li",{key:t.id},[A(b(t.name)+" ",1),e("button",{onClick:M=>x(t.id)},"Remove",8,de)]))),128))])])):f("",!0)]))}};var _e=B(ce,[["__scopeId","data-v-1a5f8309"]]);export{_e as default};
