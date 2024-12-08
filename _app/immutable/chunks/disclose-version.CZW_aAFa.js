import{ak as B,I as z,aq as S,a9 as A,an as G,i as x,ad as W,v as T,n as k,m as h,ar as q,as as J,h as g,g as c,q as O,e as $,at as R,au as K,av as Q,aw as I,o as L,ax as X,ay as Z,az as ee,aA as re,aB as te,aC as ne,k as ae,p as se,a as ie,b as oe,ag as ue,O as V,P as fe,B as le,C as ce}from"./utils.Bwy3OVUC.js";const H=new Set,C=new Set;function de(e,r,t,s){function a(n){if(s.capture||w.call(r,n),!n.cancelBubble){var i=W,d=T;S(null),A(null);try{return t.call(this,n)}finally{S(i),A(d)}}}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?z(()=>{r.addEventListener(e,a,s)}):r.addEventListener(e,a,s),a}function be(e,r,t,s,a){var n={capture:s,passive:a},i=de(e,r,t,n);(r===document.body||r===window||r===document)&&B(()=>{r.removeEventListener(e,i,n)})}function we(e){for(var r=0;r<e.length;r++)H.add(e[r]);for(var t of C)t(e)}function w(e){var P;var r=this,t=r.ownerDocument,s=e.type,a=((P=e.composedPath)==null?void 0:P.call(e))||[],n=a[0]||e.target,i=0,d=e.__root;if(d){var f=a.indexOf(d);if(f!==-1&&(r===document||r===window)){e.__root=r;return}var l=a.indexOf(r);if(l===-1)return;f<=l&&(i=f)}if(n=a[i]||e.target,n!==r){G(e,"currentTarget",{configurable:!0,get(){return n||t}});var b=W,_=T;S(null),A(null);try{for(var o,u=[];n!==null;){var p=n.assignedSlot||n.parentNode||n.host||null;try{var m=n["__"+s];if(m!==void 0&&!n.disabled)if(x(m)){var[Y,...j]=m;Y.apply(n,[e,...j])}else m.call(n,e)}catch(N){o?u.push(N):o=N}if(e.cancelBubble||p===r||p===null)break;n=p}if(o){for(let N of u)queueMicrotask(()=>{throw N});throw o}}finally{e.__root=r,delete e.currentTarget,S(b),A(_)}}}function F(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function v(e,r){var t=T;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function Ee(e,r){var t=(r&q)!==0,s=(r&J)!==0,a,n=!e.startsWith("<!>");return()=>{if(g)return v(c,null),c;a===void 0&&(a=F(n?e:"<!>"+e),t||(a=h(a)));var i=s?document.importNode(a,!0):a.cloneNode(!0);if(t){var d=h(i),f=i.lastChild;v(d,f)}else v(i,i);return i}}function Te(e,r,t="svg"){var s=!e.startsWith("<!>"),a=(r&q)!==0,n=`<${t}>${s?e:"<!>"+e}</${t}>`,i;return()=>{if(g)return v(c,null),c;if(!i){var d=F(n),f=h(d);if(a)for(i=document.createDocumentFragment();h(f);)i.appendChild(h(f));else i=h(f)}var l=i.cloneNode(!0);if(a){var b=h(l),_=l.lastChild;v(b,_)}else v(l,l);return l}}function Ne(e=""){if(!g){var r=k(e+"");return v(r,r),r}var t=c;return t.nodeType!==3&&(t.before(t=k()),O(t)),v(t,t),t}function Le(){if(g)return v(c,null),c;var e=document.createDocumentFragment(),r=document.createComment(""),t=k();return e.append(r,t),v(r,t),e}function Se(e,r){if(g){T.nodes_end=c,$();return}e!==null&&e.before(r)}function Ae(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const _e=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ke(e){return _e.includes(e)}const ve={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function Ie(e){return e=e.toLowerCase(),ve[e]??e}const pe=["touchstart","touchmove"];function he(e){return pe.includes(e)}let D=!0;function Oe(e){D=e}function Re(e,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function ge(e,r){return U(e,r)}function Ce(e,r){R(),r.intro=r.intro??!1;const t=r.target,s=g,a=c;try{for(var n=h(t);n&&(n.nodeType!==8||n.data!==K);)n=Q(n);if(!n)throw I;L(!0),O(n),$();const i=U(e,{...r,anchor:n});if(c===null||c.nodeType!==8||c.data!==X)throw Z(),I;return L(!1),i}catch(i){if(i===I)return r.recover===!1&&ee(),R(),re(t),L(!1),ge(e,r);throw i}finally{L(s),O(a)}}const y=new Map;function U(e,{target:r,anchor:t,props:s={},events:a,context:n,intro:i=!0}){R();var d=new Set,f=_=>{for(var o=0;o<_.length;o++){var u=_[o];if(!d.has(u)){d.add(u);var p=he(u);r.addEventListener(u,w,{passive:p});var m=y.get(u);m===void 0?(document.addEventListener(u,w,{passive:p}),y.set(u,1)):y.set(u,m+1)}}};f(te(H)),C.add(f);var l=void 0,b=ne(()=>{var _=t??r.appendChild(k());return ae(()=>{if(n){se({});var o=oe;o.c=n}a&&(s.$$events=a),g&&v(_,null),D=i,l=e(_,s)||{},D=!0,g&&(T.nodes_end=c),n&&ie()}),()=>{var p;for(var o of d){r.removeEventListener(o,w);var u=y.get(o);--u===0?(document.removeEventListener(o,w),y.delete(o)):y.set(o,u)}C.delete(f),M.delete(l),_!==t&&((p=_.parentNode)==null||p.removeChild(_))}});return M.set(l,b),l}let M=new WeakMap;function De(e){const r=M.get(e);r&&r()}let E=!1;function Me(e,r,t){const s=t[r]??(t[r]={store:null,source:ue(void 0),unsubscribe:V});if(s.store!==e)if(s.unsubscribe(),s.store=e??null,e==null)s.source.v=void 0,s.unsubscribe=V;else{var a=!0;s.unsubscribe=fe(e,n=>{a?s.source.v=n:ce(s.source,n)}),a=!1}return le(s.source)}function Pe(e,r){return e.set(r),r}function Ve(){const e={};return B(()=>{for(var r in e)e[r].unsubscribe()}),e}function Be(){E=!0}function We(e){var r=E;try{return E=!1,[e(),E]}finally{E=r}}const me="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(me);export{Se as a,Re as b,Me as c,v as d,Oe as e,Le as f,be as g,Ne as h,we as i,We as j,Ce as k,Ae as l,ge as m,Te as n,de as o,Ie as p,ke as q,D as r,Ve as s,Ee as t,De as u,Be as v,Pe as w};