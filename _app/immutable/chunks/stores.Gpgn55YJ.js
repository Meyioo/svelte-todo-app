import{ag as g,ah as f,ai as d,V as _,aj as m,ae as u,T as l,ak as v,a0 as h}from"./utils.DoN7Ij0P.js";import{s as k}from"./entry.CSOaD2SR.js";function S(s=!1){const e=d,t=e.l.u;if(!t)return;let o=()=>v(e.s);if(s){let r=0,a={};const b=h(()=>{let c=!1;const i=e.s;for(const n in i)i[n]!==a[n]&&(a[n]=i[n],c=!0);return c&&r++,r});o=()=>l(b)}t.b.length&&g(()=>{p(e,o),u(t.b)}),f(()=>{const r=_(()=>t.m.map(m));return()=>{for(const a of r)typeof a=="function"&&a()}}),t.a.length&&f(()=>{p(e,o),u(t.a)})}function p(s,e){if(s.l.s)for(const t of s.l.s)l(t);e()}const x=()=>{const s=k;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},T={subscribe(s){return x().page.subscribe(s)}};export{S as i,T as p};