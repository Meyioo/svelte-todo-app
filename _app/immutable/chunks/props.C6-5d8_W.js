import{O as q,P as C,Q as F,R as N,S as U,T as l,U as Y,V as T,W as $,X as x,Y as A,Z as y,_ as M,$ as V,a0 as D,a1 as Z,a2 as z,a3 as G,w as g,a4 as H,B as Q}from"./utils.DoN7Ij0P.js";import{p as W}from"./proxy.DIeTGG8E.js";import{d as X}from"./disclose-version.D33dU71q.js";function w(a){for(var r=g,t=g;r!==null&&!(r.f&($|x));)r=r.parent;try{return A(r),a()}finally{A(t)}}function k(a,r,t,d){var h;var m=(t&y)!==0,c=(t&M)!==0,R=(t&V)!==0,B=(t&H)!==0,I=!1,u;R?[u,I]=X(()=>a[r]):u=a[r];var s=(h=q(a,r))==null?void 0:h.set,n=d,o=!0,P=!1,O=()=>(P=!0,o&&(o=!1,B?n=T(d):n=d),n);u===void 0&&d!==void 0&&(s&&c&&C(),u=O(),s&&s(u));var i;if(c)i=()=>{var e=a[r];return e===void 0?O():(o=!0,P=!1,e)};else{var p=w(()=>(m?D:Z)(()=>a[r]));p.f|=F,i=()=>{var e=l(p);return e!==void 0&&(n=void 0),e===void 0?n:e}}if(!(t&N))return i;if(s){var L=a.$$legacy;return function(e,f){return arguments.length>0?((!c||!f||L||I)&&s(f?i():e),e):i()}}var E=!1,b=!1,S=Q(u),_=w(()=>D(()=>{var e=i(),f=l(S),v=z;return E||e===void 0&&v.f&G?(E=!1,b=!0,f):(b=!1,S.v=e)}));return m||(_.equals=U),function(e,f){if(arguments.length>0){const v=f?l(_):c&&R?W(e):e;return _.equals(v)||(E=!0,Y(S,v),P&&n!==void 0&&(n=v),T(()=>l(_))),e}return l(_)}}export{k as p};