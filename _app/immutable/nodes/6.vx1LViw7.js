import{d as z,a as b,t as v}from"../chunks/disclose-version.CHScBtU_.js";import{t as _,c as o,r,p as A,d as t,a as S,s as y,n as q}from"../chunks/utils.jsbM9ZTm.js";import{s as w}from"../chunks/render.BEWpaYqu.js";import{e as C,i as D}from"../chunks/each.CrMKYpyz.js";import{b as d,r as E}from"../chunks/attributes.DCHlZfGP.js";import{b as G}from"../chunks/input.7thzdhVH.js";import{p as H}from"../chunks/proxy.BTFLqLYN.js";import{a as I}from"../chunks/_todo.store.D2zUqjAL.js";import{w as J}from"../chunks/index.VI-DmKHG.js";var K=v('<button class="inline-block w-full rounded-lg bg-blue-700 px-5 py-3 text-sm font-medium text-white disabled:bg-blue-500"> </button>');function L(i,s){var e=K();e.__click=function(...p){var l;(l=s.onclick)==null||l.apply(this,p)};var c=o(e,!0);r(e),_(()=>{d(e,"type",s.type),e.disabled=s.disabled,w(c,s.label)}),b(i,e)}z(["click"]);const M=J("");function N(i){M.set(i)}var O=v('<div><label class="sr-only"> </label> <div class="relative"><input class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"></div></div>'),P=v('<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"><form class="mx-auto mt-4 max-w-md space-y-4"><!> <div class="flex items-center justify-between"><!></div></form></div>');function ee(i,s){A(s,!0);const e=H({title:"",description:"",completed:!1,selected:!1}),c=[{name:"title",placeholder:"Titel eingeben",type:"text"},{name:"description",placeholder:"Beschreibung hinzufügen",type:"text"},{name:"deadline",placeholder:"Fälligkeitsdatum",type:"date"}];function p(){N("Formular erfolgreich abgeschickt!"),I(e)}var l=P(),f=o(l),x=o(f);C(x,17,()=>c,D,(B,a)=>{var u=O(),m=o(u),F=o(m,!0);r(m);var h=y(m,2),n=o(h);E(n),r(h),r(u),_(()=>{d(m,"for",t(a).name),w(F,t(a).placeholder),d(n,"type",t(a).type),d(n,"name",t(a).name),d(n,"placeholder",t(a).placeholder)}),G(n,()=>e[t(a).name],j=>e[t(a).name]=j),b(B,u)});var g=y(x,2),k=o(g),T=q(()=>!e.title||!e.description);L(k,{label:"Aufgabe anlegen",type:"button",get disabled(){return t(T)},onclick:p}),r(g),r(f),r(l),b(i,l),S()}export{ee as component};