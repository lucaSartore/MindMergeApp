import{_ as c}from"./sign_in.964619ba.js";import{_ as l,o as n,c as i,a as e,t as r,b as _,p as g,d,g as p}from"./index.f0ea3712.js";const s=o=>(g("data-v-3a6f872e"),o=o(),d(),o),h={class:"sign-in-view"},u=s(()=>e("img",{id:"logo",src:c},null,-1)),m=s(()=>e("h2",null,"Sign In",-1)),I=s(()=>e("img",{src:"https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA",alt:"Google icon",class:"google-icon"},null,-1)),f=s(()=>e("span",{class:"button-text"},"Sign In with Google",-1)),S=[I,f],w={key:0},v={__name:"SignInView",setup(o){async function a(){console.log("Redirecting to Google login page");const t=await p();window.location.href=t}return(t,b)=>(n(),i("div",h,[u,m,e("button",{class:"google-sign-in-button",onClick:a},S),t.errorMessage?(n(),i("p",w,r(t.errorMessage),1)):_("",!0)]))}};var y=l(v,[["__scopeId","data-v-3a6f872e"]]);export{y as default};
