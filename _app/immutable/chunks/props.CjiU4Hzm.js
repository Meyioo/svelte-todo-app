import{g as B,b as C,P as F,u as D,L as N,d as l,e as U,h as Y,i as x,B as y,R as M,j as A,k as $,l as j,m as z,n as T,o as G,q as H,D as V,v as g,w as Z}from"./utils.jsbM9ZTm.js";import{p as J}from"./proxy.BTFLqLYN.js";import{c as K}from"./store.BMwWDBMl.js";function L(a){for(var r=g,n=g;r!==null&&!(r.f&(y|M));)r=r.parent;try{return A(r),a()}finally{A(n)}}function k(a,r,n,d){var O;var R=(n&$)!==0,c=(n&F)!==0,S=(n&j)!==0,q=(n&z)!==0,I=!1,u;S?[u,I]=K(()=>a[r]):u=a[r];var s=(O=B(a,r))==null?void 0:O.set,t=d,o=!0,P=!1,b=()=>(P=!0,o&&(o=!1,q?t=D(d):t=d),t);u===void 0&&d!==void 0&&(s&&c&&C(),u=b(),s&&s(u));var i;if(c)i=()=>{var e=a[r];return e===void 0?b():(o=!0,P=!1,e)};else{var h=L(()=>(R?T:G)(()=>a[r]));h.f|=N,i=()=>{var e=l(h);return e!==void 0&&(t=void 0),e===void 0?t:e}}if(!(n&U))return i;if(s){var w=a.$$legacy;return function(e,f){return arguments.length>0?((!c||!f||w||I)&&s(f?i():e),e):i()}}var m=!1,p=!1,E=Z(u),_=L(()=>T(()=>{var e=i(),f=l(E),v=H;return m||e===void 0&&v.f&V?(m=!1,p=!0,f):(p=!1,E.v=e)}));return R||(_.equals=Y),function(e,f){if(arguments.length>0){const v=f?l(_):c&&S?J(e):e;return _.equals(v)||(m=!0,x(E,v),P&&t!==void 0&&(t=v),D(()=>l(_))),e}return l(_)}}export{k as p};
