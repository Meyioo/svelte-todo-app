import{E as z,ap as B,aq as I,ar as M,V as P,w as S,as as $,v as j,ac as p,at as x,au as q,Y as O,a2 as G}from"./utils.DoN7Ij0P.js";import{h as K}from"./disclose-version.D33dU71q.js";const U=requestAnimationFrame,V=()=>performance.now(),d={tick:t=>U(t),now:()=>V(),tasks:new Set};function g(t){d.tasks.forEach(a=>{a.c(t)||(d.tasks.delete(a),a.f())}),d.tasks.size!==0&&d.tick(g)}function W(t){let a;return d.tasks.size===0&&d.tick(g),{promise:new Promise(r=>{d.tasks.add(a={c:t,f:r})}),abort(){d.tasks.delete(a)}}}function y(t,a){t.dispatchEvent(new CustomEvent(a))}function Y(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const a=t.split("-");return a.length===1?a[0]:a[0]+a.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function R(t){const a={},r=t.split(";");for(const i of r){const[n,u]=i.split(":");if(!n||u===void 0)break;const f=Y(n.trim());a[f]=u.trim()}return a}const D=t=>t;function X(t,a,r,i){var n=(t&x)!==0,u="both",f,E=a.inert,c,v;function s(){var e=G,l=S;q(null),O(null);try{return f??(f=r()(a,(i==null?void 0:i())??{},{direction:u}))}finally{q(e),O(l)}}var m={is_global:n,in(){a.inert=E,y(a,"introstart"),c=b(a,s(),v,1,()=>{y(a,"introend"),c==null||c.abort(),c=f=void 0})},out(e){a.inert=!0,y(a,"outrostart"),v=b(a,s(),c,0,()=>{y(a,"outroend"),e==null||e()})},stop:()=>{c==null||c.abort(),v==null||v.abort()}},_=S;if((_.transitions??(_.transitions=[])).push(m),K){var h=n;if(!h){for(var o=_.parent;o&&o.f&z;)for(;(o=o.parent)&&!(o.f&B););h=!o||(o.f&I)!==0}h&&M(()=>{P(()=>m.in())})}}function b(t,a,r,i,n){var u=i===1;if($(a)){var f,E=!1;return j(()=>{if(!E){var l=a({direction:u?"in":"out"});f=b(t,l,r,i,n)}}),{abort:()=>{E=!0,f==null||f.abort()},deactivate:()=>f.deactivate(),reset:()=>f.reset(),t:()=>f.t()}}if(r==null||r.deactivate(),!(a!=null&&a.duration))return n(),{abort:p,deactivate:p,reset:p,t:()=>i};const{delay:c=0,css:v,tick:s,easing:m=D}=a;var _=[];if(u&&r===void 0&&(s&&s(0,1),v)){var h=R(v(0,1));_.push(h,h)}var o=()=>1-i,e=t.animate(_,{duration:c});return e.onfinish=()=>{var l=(r==null?void 0:r.t())??1-i;r==null||r.abort();var F=i-l,k=a.duration*Math.abs(F),C=[];if(k>0){if(v)for(var A=Math.ceil(k/16.666666666666668),T=0;T<=A;T+=1){var N=l+F*m(T/A),L=v(N,1-N);C.push(R(L))}o=()=>{var w=e.currentTime;return l+F*m(w/k)},s&&W(()=>{if(e.playState!=="running")return!1;var w=o();return s(w,1-w),!0})}e=t.animate(C,{duration:k,fill:"forwards"}),e.onfinish=()=>{o=()=>i,s==null||s(i,1-i),n()}},{abort:()=>{e&&(e.cancel(),e.effect=null,e.onfinish=p)},deactivate:()=>{n=p},reset:()=>{i===0&&(s==null||s(1,0))},t:()=>o()}}const H=t=>t;function Z(t,{delay:a=0,duration:r=400,easing:i=H}={}){const n=+getComputedStyle(t).opacity;return{delay:a,duration:r,easing:i,css:u=>`opacity: ${u*n}`}}export{Z as f,X as t};
