const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.C8h3TJPt.js","../chunks/disclose-version.CHScBtU_.js","../chunks/utils.jsbM9ZTm.js","../chunks/app.CrqO3_ll.js","../assets/app.BsBJCVQn.css","../chunks/if.CP-TlKNc.js","../chunks/stores._mR8QnMr.js","../chunks/entry.Dk6-dcKH.js","../chunks/index.VI-DmKHG.js","../chunks/store.BMwWDBMl.js","../chunks/_todo.store.D2zUqjAL.js","../assets/0.BPOOzDfA.css","../nodes/1.Bll8fzem.js","../chunks/render.BEWpaYqu.js","../nodes/2.Cg0jSh-8.js","../chunks/header.BRagyAc-.js","../chunks/props.CjiU4Hzm.js","../chunks/proxy.BTFLqLYN.js","../chunks/attributes.DCHlZfGP.js","../chunks/input.7thzdhVH.js","../nodes/3.gPwePq1k.js","../nodes/4.B9O4yADf.js","../chunks/todoList.CwICj9Ex.js","../chunks/each.CrMKYpyz.js","../nodes/5.BUmRmZNv.js","../nodes/6.vx1LViw7.js"])))=>i.map(i=>d[i]);
var J=e=>{throw TypeError(e)};var M=(e,t,r)=>t.has(e)||J("Cannot "+r);var l=(e,t,r)=>(M(e,t,"read from private field"),r?r.call(e):t.get(e)),W=(e,t,r)=>t.has(e)?J("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),z=(e,t,r,i)=>(M(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r);import{C as Q,E as ot,x as it,F as ct,z as ut,K as lt,A as ft,aC as dt,an as mt,u as $,W as _t,a8 as ht,d as v,i as V,aD as vt,ay as gt,w as yt,aj as K,ai as tt,p as Et,ah as Pt,f as R,a as Rt,aE as N,aF as bt,s as wt,c as kt,t as xt,r as At,n as T}from"../chunks/utils.jsbM9ZTm.js";import{h as Tt,m as Lt,u as Ot,s as St}from"../chunks/render.BEWpaYqu.js";import{e as k,a as y,t as et,f as Ct}from"../chunks/disclose-version.CHScBtU_.js";import{i as D}from"../chunks/if.CP-TlKNc.js";import{p as Dt}from"../chunks/proxy.BTFLqLYN.js";import{p as I}from"../chunks/props.CjiU4Hzm.js";function It(e){throw new Error("lifecycle_outside_component")}function L(e,t,r){Q&&ot();var i=e,a,o;it(()=>{a!==(a=t())&&(o&&(ft(o),o=null),a&&(o=ut(()=>r(i,a))))},ct),Q&&(i=lt)}function X(e,t){return e===t||(e==null?void 0:e[ht])===t}function O(e={},t,r,i){return dt(()=>{var a,o;return mt(()=>{a=o,o=[],$(()=>{e!==r(...o)&&(t(e,...o),a&&X(r(...a),e)&&t(null,...a))})}),()=>{_t(()=>{o&&X(r(...o),e)&&t(null,...o)})}}),e}function Vt(e){return class extends jt{constructor(t){super({component:e,...t})}}}var E,d;class jt{constructor(t){W(this,E);W(this,d);var o;var r=new Map,i=(n,s)=>{var f=yt(s);return r.set(n,f),f};const a=new Proxy({...t.props||{},$$events:{}},{get(n,s){return v(r.get(s)??i(s,Reflect.get(n,s)))},has(n,s){return v(r.get(s)??i(s,Reflect.get(n,s))),Reflect.has(n,s)},set(n,s,f){return V(r.get(s)??i(s,f),f),Reflect.set(n,s,f)}});z(this,d,(t.hydrate?Tt:Lt)(t.component,{target:t.target,props:a,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((o=t==null?void 0:t.props)!=null&&o.$$host)||t.sync===!1)&&vt(),z(this,E,a.$$events);for(const n of Object.keys(l(this,d)))n==="$set"||n==="$destroy"||n==="$on"||gt(this,n,{get(){return l(this,d)[n]},set(s){l(this,d)[n]=s},enumerable:!0});l(this,d).$set=n=>{Object.assign(a,n)},l(this,d).$destroy=()=>{Ot(l(this,d))}}$set(t){l(this,d).$set(t)}$on(t,r){l(this,E)[t]=l(this,E)[t]||[];const i=(...a)=>r.call(this,...a);return l(this,E)[t].push(i),()=>{l(this,E)[t]=l(this,E)[t].filter(a=>a!==i)}}$destroy(){l(this,d).$destroy()}}E=new WeakMap,d=new WeakMap;function Bt(e){K===null&&It(),K.l!==null?Ft(K).m.push(e):tt(()=>{const t=$(e);if(typeof t=="function")return t})}function Ft(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const qt="modulepreload",pt=function(e,t){return new URL(e,t).href},Z={},b=function(t,r,i){let a=Promise.resolve();if(r&&r.length>0){const n=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),f=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=Promise.allSettled(r.map(m=>{if(m=pt(m,i),m in Z)return;Z[m]=!0;const P=m.endsWith(".css"),S=P?'[rel="stylesheet"]':"";if(!!i)for(let u=n.length-1;u>=0;u--){const g=n[u];if(g.href===m&&(!P||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${S}`))return;const c=document.createElement("link");if(c.rel=P?"stylesheet":qt,P||(c.as="script"),c.crossOrigin="",c.href=m,f&&c.setAttribute("nonce",f),document.head.appendChild(c),P)return new Promise((u,g)=>{c.addEventListener("load",u),c.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${m}`)))})}))}function o(n){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=n,window.dispatchEvent(s),!s.defaultPrevented)throw n}return a.then(n=>{for(const s of n||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},Zt={};var Ut=et('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Wt=et("<!> <!>",1);function zt(e,t){Et(t,!0);let r=I(t,"components",23,()=>[]),i=I(t,"data_0",3,null),a=I(t,"data_1",3,null),o=I(t,"data_2",3,null);Pt(()=>t.stores.page.set(t.page)),tt(()=>{t.stores,t.page,t.constructors,r(),t.form,i(),a(),o(),t.stores.page.notify()});let n=N(!1),s=N(!1),f=N(null);Bt(()=>{const c=t.stores.page.subscribe(()=>{v(n)&&(V(s,!0),bt().then(()=>{V(f,Dt(document.title||"untitled page"))}))});return V(n,!0),c});const m=T(()=>t.constructors[2]);var P=Wt(),S=R(P);D(S,()=>t.constructors[1],c=>{var u=k();const g=T(()=>t.constructors[0]);var x=R(u);L(x,()=>v(g),(w,j)=>{O(j(w,{get data(){return i()},get form(){return t.form},children:(_,Kt)=>{var G=k(),rt=R(G);D(rt,()=>t.constructors[2],B=>{var A=k();const F=T(()=>t.constructors[1]);var q=R(A);L(q,()=>v(F),(p,U)=>{O(U(p,{get data(){return a()},get form(){return t.form},children:(h,Nt)=>{var H=k(),st=R(H);L(st,()=>v(m),(nt,at)=>{O(at(nt,{get data(){return o()},get form(){return t.form}}),C=>r()[2]=C,()=>{var C;return(C=r())==null?void 0:C[2]})}),y(h,H)},$$slots:{default:!0}}),h=>r()[1]=h,()=>{var h;return(h=r())==null?void 0:h[1]})}),y(B,A)},B=>{var A=k();const F=T(()=>t.constructors[1]);var q=R(A);L(q,()=>v(F),(p,U)=>{O(U(p,{get data(){return a()},get form(){return t.form}}),h=>r()[1]=h,()=>{var h;return(h=r())==null?void 0:h[1]})}),y(B,A)}),y(_,G)},$$slots:{default:!0}}),_=>r()[0]=_,()=>{var _;return(_=r())==null?void 0:_[0]})}),y(c,u)},c=>{var u=k();const g=T(()=>t.constructors[0]);var x=R(u);L(x,()=>v(g),(w,j)=>{O(j(w,{get data(){return i()},get form(){return t.form}}),_=>r()[0]=_,()=>{var _;return(_=r())==null?void 0:_[0]})}),y(c,u)});var Y=wt(S,2);D(Y,()=>v(n),c=>{var u=Ut(),g=kt(u);D(g,()=>v(s),x=>{var w=Ct();xt(()=>St(w,v(f))),y(x,w)}),At(u),y(c,u)}),y(e,P),Rt()}const $t=Vt(zt),te=[()=>b(()=>import("../nodes/0.C8h3TJPt.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url),()=>b(()=>import("../nodes/1.Bll8fzem.js"),__vite__mapDeps([12,1,2,13,6,7,8,9]),import.meta.url),()=>b(()=>import("../nodes/2.Cg0jSh-8.js"),__vite__mapDeps([14,1,2,3,4,15,13,5,16,17,9,18,19,10,8]),import.meta.url),()=>b(()=>import("../nodes/3.gPwePq1k.js"),__vite__mapDeps([20,1,2,3,4,15,13,5,16,17,9,18,19,10,8]),import.meta.url),()=>b(()=>import("../nodes/4.B9O4yADf.js"),__vite__mapDeps([21,1,2,15,13,5,16,17,9,18,19,10,8,22,23]),import.meta.url),()=>b(()=>import("../nodes/5.BUmRmZNv.js"),__vite__mapDeps([24,1,2,22,5,23,16,17,9,13,18,10,8]),import.meta.url),()=>b(()=>import("../nodes/6.vx1LViw7.js"),__vite__mapDeps([25,1,2,13,23,18,19,17,10,8]),import.meta.url)],ee=[],re={"/":[4],"/abgeschlossen":[5,[2]],"/todo-anlegen":[6,[3]]},se={handleError:({error:e})=>{console.error(e)},reroute:()=>{}};export{re as dictionary,se as hooks,Zt as matchers,te as nodes,$t as root,ee as server_loads};
