import{a5 as h,a6 as D,a7 as T,C as v,a8 as j,U as l,O as x,a9 as u,T as c,w as A,aa as E,ab as K,q as L}from"./utils.DoN7Ij0P.js";function g(s,P=null,M){if(typeof s!="object"||s===null||h in s)return s;const I=K(s);if(I!==D&&I!==T)return s;var i=new Map,b=L(s),o=v(0);b&&i.set("length",v(s.length));var y;return new Proxy(s,{defineProperty(f,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&j();var n=i.get(e);return n===void 0?(n=v(t.value),i.set(e,n)):l(n,g(t.value,y)),!0},deleteProperty(f,e){var t=i.get(e);if(t===void 0)e in f&&i.set(e,v(u));else{if(b&&typeof e=="string"){var n=i.get("length"),r=Number(e);Number.isInteger(r)&&r<n.v&&l(n,r)}l(t,u),R(o)}return!0},get(f,e,t){var d;if(e===h)return s;var n=i.get(e),r=e in f;if(n===void 0&&(!r||(d=x(f,e))!=null&&d.writable)&&(n=v(g(r?f[e]:u,y)),i.set(e,n)),n!==void 0){var a=c(n);return a===u?void 0:a}return Reflect.get(f,e,t)},getOwnPropertyDescriptor(f,e){var t=Reflect.getOwnPropertyDescriptor(f,e);if(t&&"value"in t){var n=i.get(e);n&&(t.value=c(n))}else if(t===void 0){var r=i.get(e),a=r==null?void 0:r.v;if(r!==void 0&&a!==u)return{enumerable:!0,configurable:!0,value:a,writable:!0}}return t},has(f,e){var a;if(e===h)return!0;var t=i.get(e),n=t!==void 0&&t.v!==u||Reflect.has(f,e);if(t!==void 0||A!==null&&(!n||(a=x(f,e))!=null&&a.writable)){t===void 0&&(t=v(n?g(f[e],y):u),i.set(e,t));var r=c(t);if(r===u)return!1}return n},set(f,e,t,n){var O;var r=i.get(e),a=e in f;if(b&&e==="length")for(var d=t;d<r.v;d+=1){var w=i.get(d+"");w!==void 0?l(w,u):d in f&&(w=v(u),i.set(d+"",w))}r===void 0?(!a||(O=x(f,e))!=null&&O.writable)&&(r=v(void 0),l(r,g(t,y)),i.set(e,r)):(a=r.v!==u,l(r,g(t,y)));var _=Reflect.getOwnPropertyDescriptor(f,e);if(_!=null&&_.set&&_.set.call(n,t),!a){if(b&&typeof e=="string"){var N=i.get("length"),m=Number(e);Number.isInteger(m)&&m>=N.v&&l(N,m+1)}R(o)}return!0},ownKeys(f){c(o);var e=Reflect.ownKeys(f).filter(r=>{var a=i.get(r);return a===void 0||a.v!==u});for(var[t,n]of i)n.v!==u&&!(t in f)&&e.push(t);return e},setPrototypeOf(){E()}})}function R(s,P=1){l(s,s.v+P)}export{g as p};
