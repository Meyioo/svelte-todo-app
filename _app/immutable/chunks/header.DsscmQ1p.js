import{a as v,t as g,n as H,s as I,m as M,f as W,c as A,b as B}from"./disclose-version.SNTJzil8.js";import{p as C,f as q,s as z,c as o,r as i,a as D,t as k}from"./utils.D_n7-rAd.js";import{l as p,p as f,s as E,i as P}from"./props.DcworxPy.js";import{a as F,b as G,d as a,e as J}from"./bundle-mjs.HaSa4vNw.js";import{i as K}from"./lifecycle.B2IxNDRT.js";import{W as L,I as N}from"./Input.DoInav9x.js";import{S}from"./_todo.store.BgBy3DOy.js";var O=H('<svg slot="left" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>'),Q=g('<div class="flex absolute inset-y-0 end-0 items-center text-gray-500 dark:text-gray-400"><!></div>'),R=g("<!> <!>",1);function T(n,t){const c=F(t),s=p(t,["children","$$slots","$$events","$$legacy"]),l=p(s,["size","placeholder","value"]);C(t,!1);let r=f(t,"size",8,"lg"),h=f(t,"placeholder",8,"Search"),d=f(t,"value",28,()=>{});const _={sm:"w-3.5 h-3.5",md:"w-5 h-5",lg:"w-6 h-6"};K(),L(n,{class:"relative w-full",show:c.default,children:(x,b)=>{var w=R(),y=q(w);N(y,E({get value(){return d()},set value(e){d(e)},type:"search",get placeholder(){return h()},get size(){return r()}},()=>l,{get class(){return s.class},$$events:{blur(e){a.call(this,t,e)},change(e){a.call(this,t,e)},input(e){a.call(this,t,e)},click(e){a.call(this,t,e)},focus(e){a.call(this,t,e)},keydown(e){a.call(this,t,e)},keypress(e){a.call(this,t,e)},keyup(e){a.call(this,t,e)},mouseenter(e){a.call(this,t,e)},mouseleave(e){a.call(this,t,e)},mouseover(e){a.call(this,t,e)},paste(e){a.call(this,t,e)}},$$slots:{left:(e,u)=>{var m=O();k(()=>J(m,_[r()])),v(e,m)}},$$legacy:!0}));var j=z(y,2);P(j,()=>c.default,e=>{var u=Q(),m=o(u);G(m,t,"default",{},null),i(u),v(e,u)}),v(x,w)},$$slots:{default:!0}}),D()}var U=g('<form class="mx-3 mb-3 flex gap-2"><!></form>');function V(n){const t=I(),c=()=>A(S,"$SearchStore",t);var s=U(),l=o(s);T(l,{size:"md",placeholder:"Suche nach...",class:"bg-white",get value(){return M(),c()},set value(r){W(S,r)},$$legacy:!0}),i(s),v(n,s)}var X=g('<header class="sticky top-0 w-full border-b border-gray-200 bg-gray-50"><div class="mx-auto max-w-screen-xl px-3 py-6 sm:px-6 lg:px-8"><div class="flex justify-between gap-4 md:flex-row md:items-center md:justify-between"><div><h1 class="text-2xl font-bold text-gray-900 sm:text-3xl"> </h1></div></div></div> <!></header>');function le(n,t){const c=f(t,"showSearch",3,!1);var s=X(),l=o(s),r=o(l),h=o(r),d=o(h),_=o(d,!0);i(d),i(h),i(r),i(l);var x=z(l,2);P(x,c,b=>{V(b)}),i(s),k(()=>B(_,t.title)),v(n,s)}export{le as H};