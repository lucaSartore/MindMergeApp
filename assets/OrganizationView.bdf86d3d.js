import{_ as M,r,f as h,o as l,c as i,a as e,w as O,v as U,b as f,u,h as B,F as C,i as y,j as F,t as b,k as T,l as w,e as $,p as A,d as L,m as P,n as W,q as D,s as E,x as K}from"./index.f0ea3712.js";const a=_=>(A("data-v-f8a77b80"),_=_(),L(),_),R=a(()=>e("h1",null,"Organization Management",-1)),j=a(()=>e("br",null,null,-1)),q=a(()=>e("br",null,null,-1)),G={key:0,class:"popup"},H={class:"popup-content"},J=a(()=>e("h2",null,"Create Organization",-1)),Q=a(()=>e("br",null,null,-1)),X=a(()=>e("br",null,null,-1)),Y={key:1},Z=a(()=>e("label",{for:"organization-select"},"Select Organization:",-1)),ee=["value"],ne=a(()=>e("br",null,null,-1)),te=a(()=>e("br",null,null,-1)),ae=a(()=>e("br",null,null,-1)),oe={key:0,class:"popup"},se={class:"popup-content"},le=a(()=>e("h2",null,"Add User",-1)),ie=a(()=>e("label",{for:"user-name"},"User Name:",-1)),re={key:0,class:"error"},ue=["onClick"],de={__name:"OrganizationView",setup(_){const v=r(""),m=r(!1),d=r(""),g=r(!1),c=r("");let o=h.current;async function V(s){let n=await P(s,W.id);return n!=null?(o=n,await w(),!0):!1}let k=r([]);function x(s){D(o,s).then(()=>{p()})}function p(){o!==void 0&&T(o).then(s=>{k.value=s})}function N(s){E(s).then(n=>{n.statusCode===404?d.value="User not found":K(o,n.payload).then(()=>{p(),z()})})}function S(){N(v.value)?(z(),p()):d.value="User not found"}function z(){m.value=!1,v.value="",d.value=""}function I(){c.value?(V(c.value),g.value=!1,c.value=""):alert("Please enter an organization name.")}return p(),(s,n)=>(l(),i("main",null,[R,j,e("button",{onClick:n[0]||(n[0]=t=>g.value=!0)},"Create Organization"),q,g.value?(l(),i("div",G,[e("div",H,[J,O(e("input",{"onUpdate:modelValue":n[1]||(n[1]=t=>c.value=t),placeholder:"Enter organization name"},null,512),[[U,c.value]]),Q,e("button",{onClick:I},"OK"),e("button",{onClick:n[2]||(n[2]=t=>g.value=!1)},"Cancel")])])):f("",!0),X,u(h).organizations.length!=0?(l(),i("div",Y,[Z,O(e("select",{id:"organization-select","onUpdate:modelValue":n[3]||(n[3]=t=>F(o)?o.value=t:o=t),onChange:n[4]||(n[4]=t=>{u(w)(u(o)-1),p()})},[(l(!0),i(C,null,y(u(h).organizations,t=>(l(),i("option",{key:t.id,value:t.id},b(t.name),9,ee))),128))],544),[[B,u(o)]]),ne,te,ae,e("button",{onClick:n[5]||(n[5]=t=>m.value=!0)},"Add User to Organization"),m.value?(l(),i("div",oe,[e("div",se,[le,ie,O(e("input",{id:"user-name","onUpdate:modelValue":n[6]||(n[6]=t=>v.value=t),type:"text"},null,512),[[U,v.value]]),e("button",{onClick:S},"OK"),e("button",{onClick:z},"Cancel"),d.value?(l(),i("p",re,b(d.value),1)):f("",!0)])])):f("",!0),e("ul",null,[(l(!0),i(C,null,y(u(k),t=>(l(),i("li",{key:t.id},[$(b(t.name)+" ",1),e("button",{onClick:ce=>x(t.id)},"Remove",8,ue)]))),128))])])):f("",!0)]))}};var _e=M(de,[["__scopeId","data-v-f8a77b80"]]);export{_e as default};
