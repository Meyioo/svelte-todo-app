import{n as Re,j as Te,ao as me,h as A,q as K,e as ye,i as xe,ap as we,a0 as Ge,a1 as ie,o as Z,g as U,x as _e,k as ke,w as Pe,aq as D,B as te,v as le,ar as oe,as as ce,at as se,au as Le,ag as $e,W as de,av as Oe,aw as je,ax as We,y as Be,m as Ve,ay as qe,az as He,aA as Ue,aB as Fe,aC as Ye,$ as ue,aD as Xe}from"./utils.qViFQbfI.js";import{l as Je,o as fe,i as Ke,p as Ze,q as De}from"./disclose-version.C0O5Ciy9.js";let X=null;function $r(e){X=e}function Or(e,r){return r}function Qe(e,r,t,o){for(var a=[],s=r.length,i=0;i<s;i++)Oe(r[i].e,a,!0);var n=s>0&&a.length===0&&t!==null;if(n){var v=t.parentNode;je(v),v.append(t),o.clear(),T(e,r[0].prev,r[s-1].next)}We(a,()=>{for(var y=0;y<s;y++){var x=r[y];n||(o.delete(x.k),T(e,x.prev,x.next)),Be(x.e,!n)}})}function jr(e,r,t,o,a,s=null){var i=e,n={flags:r,items:new Map,first:null},v=(r&me)!==0;if(v){var y=e;i=A?K(Ve(y)):y.appendChild(Re())}A&&ye();var x=null,u=!1;Te(()=>{var w=t(),g=xe(w)?w:w==null?[]:we(w),h=g.length;if(u&&h===0)return;u=h===0;let m=!1;if(A){var f=i.data===Ge;f!==(h===0)&&(i=ie(),K(i),Z(!1),m=!0)}if(A){for(var l=null,c,d=0;d<h;d++){if(U.nodeType===8&&U.data===qe){i=U,m=!0,Z(!1);break}var b=g[d],C=o(b,d);c=Ce(U,n,l,null,b,C,d,a,r),n.items.set(C,c),l=c}h>0&&K(ie())}A||er(g,n,i,a,r,o),s!==null&&(h===0?x?_e(x):x=ke(()=>s(i)):x!==null&&Pe(x,()=>{x=null})),m&&Z(!0),t()}),A&&(i=U)}function er(e,r,t,o,a,s){var B,L,V,$;var i=(a&He)!==0,n=(a&(oe|se))!==0,v=e.length,y=r.items,x=r.first,u=x,w,g=null,h,m=[],f=[],l,c,d,b;if(i)for(b=0;b<v;b+=1)l=e[b],c=s(l,b),d=y.get(c),d!==void 0&&((B=d.a)==null||B.measure(),(h??(h=new Set)).add(d));for(b=0;b<v;b+=1){if(l=e[b],c=s(l,b),d=y.get(c),d===void 0){var C=u?u.e.nodes_start:t;g=Ce(C,r,g,g===null?r.first:g.next,l,c,b,o,a),y.set(c,g),m=[],f=[],u=g.next;continue}if(n&&rr(d,l,b,a),d.e.f&D&&(_e(d.e),i&&((L=d.a)==null||L.unfix(),(h??(h=new Set)).delete(d))),d!==u){if(w!==void 0&&w.has(d)){if(m.length<f.length){var S=f[0],z;g=S.prev;var W=m[0],G=m[m.length-1];for(z=0;z<m.length;z+=1)pe(m[z],S,t);for(z=0;z<f.length;z+=1)w.delete(f[z]);T(r,W.prev,G.next),T(r,g,W),T(r,G,S),u=S,g=G,b-=1,m=[],f=[]}else w.delete(d),pe(d,u,t),T(r,d.prev,d.next),T(r,d,g===null?r.first:g.next),T(r,g,d),g=d;continue}for(m=[],f=[];u!==null&&u.k!==c;)u.e.f&D||(w??(w=new Set)).add(u),f.push(u),u=u.next;if(u===null)continue;d=u}m.push(d),g=d,u=d.next}if(u!==null||w!==void 0){for(var E=w===void 0?[]:we(w);u!==null;)u.e.f&D||E.push(u),u=u.next;var P=E.length;if(P>0){var _=a&me&&v===0?t:null;if(i){for(b=0;b<P;b+=1)(V=E[b].a)==null||V.measure();for(b=0;b<P;b+=1)($=E[b].a)==null||$.fix()}Qe(r,E,_,y)}}i&&te(()=>{var q;if(h!==void 0)for(d of h)(q=d.a)==null||q.apply()}),le.first=r.first&&r.first.e,le.last=g&&g.e}function rr(e,r,t,o){o&oe&&ce(e.v,r),o&se?ce(e.i,t):e.i=t}function Ce(e,r,t,o,a,s,i,n,v){var y=X;try{var x=(v&oe)!==0,u=(v&Le)===0,w=x?u?$e(a):de(a):a,g=v&se?de(i):i,h={i:g,v:w,k:s,a:null,e:null,prev:t,next:o};return X=h,h.e=ke(()=>n(e,w,g),A),h.e.prev=t&&t.e,h.e.next=o&&o.e,t===null?r.first=h:(t.next=h,t.e.next=h.e),o!==null&&(o.prev=h,o.e.prev=h.e),h}finally{X=y}}function pe(e,r,t){for(var o=e.next?e.next.e.nodes_start:t,a=r?r.e.nodes_start:t,s=e.e.nodes_start;s!==o;){var i=Ue(s);a.before(s),s=i}}function T(e,r,t){r===null?e.first=t:(r.next=t,r.e.next=t&&t.e),t!==null&&(t.prev=r,t.e.prev=r&&r.e)}function Wr(e,r,t,o,a){var n;A&&ye();var s=(n=r.$$slots)==null?void 0:n[t],i=!1;s===!0&&(s=r[t==="default"?"children":t],i=!0),s===void 0?a!==null&&a(e):s(e,i?()=>o:o)}function Br(e){const r={};e.children&&(r.default=!0);for(const t in e.$$slots)r[t]=!0;return r}function tr(e,r){if(r){const t=document.body;e.autofocus=!0,te(()=>{document.activeElement===t&&e.focus()})}}let be=!1;function or(){be||(be=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const t of e.target.elements)(r=t.__on_r)==null||r.call(t)})},{capture:!0}))}function Vr(e){if(A){var r=!1,t=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var o=e.value;ee(e,"value",null),e.value=o}if(e.hasAttribute("checked")){var a=e.checked;ee(e,"checked",null),e.checked=a}}};e.__on_r=t,Fe(t),or()}}function qr(e,r){var t=e.__attributes??(e.__attributes={});t.value===(t.value=r)||e.value===r&&(r!==0||e.nodeName!=="PROGRESS")||(e.value=r)}function ee(e,r,t,o){var a=e.__attributes??(e.__attributes={});A&&(a[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName==="LINK")||a[r]!==(a[r]=t)&&(r==="style"&&"__styles"in e&&(e.__styles={}),r==="loading"&&(e[Ye]=t),t==null?e.removeAttribute(r):typeof t!="string"&&Ae(e).includes(r)?e[r]=t:e.setAttribute(r,t))}function Hr(e,r,t,o,a=!1,s=!1,i=!1){var n=r||{},v=e.tagName==="OPTION";for(var y in r)y in t||(t[y]=null);var x=Ae(e),u=e.__attributes??(e.__attributes={}),w=[];for(const l in t){let c=t[l];if(v&&l==="value"&&c==null){e.value=e.__value="",n[l]=c;continue}var g=n[l];if(c!==g){n[l]=c;var h=l[0]+l[1];if(h!=="$$"){if(h==="on"){const d={},b="$$"+l;let C=l.slice(2);var m=De(C);if(Je(C)&&(C=C.slice(0,-7),d.capture=!0),!m&&g){if(c!=null)continue;e.removeEventListener(C,n[b],d),n[b]=null}if(c!=null)if(m)e[`__${C}`]=c,Ke([C]);else{let S=function(z){n[l].call(this,z)};r?n[b]=fe(C,e,S,d):w.push([l,c,()=>n[b]=fe(C,e,S,d)])}}else if(l==="style"&&c!=null)e.style.cssText=c+"";else if(l==="autofocus")tr(e,!!c);else if(l==="__value"||l==="value"&&c!=null)e.value=e[l]=e.__value=c;else{var f=l;a||(f=Ze(f)),c==null&&!s?(u[l]=null,e.removeAttribute(l)):x.includes(f)&&(s||typeof c!="string")?e[f]=c:typeof c!="function"&&(A&&(f==="src"||f==="href"||f==="srcset")||ee(e,f,c))}l==="style"&&"__styles"in e&&(e.__styles={})}}}return r||te(()=>{if(e.isConnected)for(const[l,c,d]of w)n[l]===c&&d()}),n}var ge=new Map;function Ae(e){var r=ge.get(e.nodeName);if(r)return r;ge.set(e.nodeName,r=[]);for(var t,o=ue(e),a=Element.prototype;a!==o;){t=Xe(o);for(var s in t)t[s].set&&r.push(s);o=ue(o)}return r}function Ur(e,r){var t=e.__className,o=ze(r);A&&e.getAttribute("class")===o?e.__className=o:(t!==o||A&&e.getAttribute("class")!==o)&&(o===""?e.removeAttribute("class"):e.setAttribute("class",o),e.__className=o)}function Fr(e,r){var t=e.__className,o=ze(r);A&&e.className===o?e.__className=o:(t!==o||A&&e.className!==o)&&(r==null?e.removeAttribute("class"):e.className=o,e.__className=o)}function ze(e){return e??""}function Yr(e,r){var s;var t=(s=e.$$events)==null?void 0:s[r.type],o=xe(t)?t.slice():t==null?[]:[t];for(var a of o)a.call(this,r)}const ne="-",sr=e=>{const r=ar(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:i=>{const n=i.split(ne);return n[0]===""&&n.length!==1&&n.shift(),Se(n,r)||nr(i)},getConflictingClassGroupIds:(i,n)=>{const v=t[i]||[];return n&&o[i]?[...v,...o[i]]:v}}},Se=(e,r)=>{var i;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),a=o?Se(e.slice(1),o):void 0;if(a)return a;if(r.validators.length===0)return;const s=e.join(ne);return(i=r.validators.find(({validator:n})=>n(s)))==null?void 0:i.classGroupId},he=/^\[(.+)\]$/,nr=e=>{if(he.test(e)){const r=he.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},ar=e=>{const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return lr(Object.entries(e.classGroups),t).forEach(([s,i])=>{re(i,o,s,r)}),o},re=(e,r,t,o)=>{e.forEach(a=>{if(typeof a=="string"){const s=a===""?r:ve(r,a);s.classGroupId=t;return}if(typeof a=="function"){if(ir(a)){re(a(o),r,t,o);return}r.validators.push({validator:a,classGroupId:t});return}Object.entries(a).forEach(([s,i])=>{re(i,ve(r,s),t,o)})})},ve=(e,r)=>{let t=e;return r.split(ne).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t},ir=e=>e.isThemeGetter,lr=(e,r)=>r?e.map(([t,o])=>{const a=o.map(s=>typeof s=="string"?r+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([i,n])=>[r+i,n])):s);return[t,a]}):e,cr=e=>{if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;const a=(s,i)=>{t.set(s,i),r++,r>e&&(r=0,o=t,t=new Map)};return{get(s){let i=t.get(s);if(i!==void 0)return i;if((i=o.get(s))!==void 0)return a(s,i),i},set(s,i){t.has(s)?t.set(s,i):a(s,i)}}},Ee="!",dr=e=>{const{separator:r,experimentalParseClassName:t}=e,o=r.length===1,a=r[0],s=r.length,i=n=>{const v=[];let y=0,x=0,u;for(let f=0;f<n.length;f++){let l=n[f];if(y===0){if(l===a&&(o||n.slice(f,f+s)===r)){v.push(n.slice(x,f)),x=f+s;continue}if(l==="/"){u=f;continue}}l==="["?y++:l==="]"&&y--}const w=v.length===0?n:n.substring(x),g=w.startsWith(Ee),h=g?w.substring(1):w,m=u&&u>x?u-x:void 0;return{modifiers:v,hasImportantModifier:g,baseClassName:h,maybePostfixModifierPosition:m}};return t?n=>t({className:n,parseClassName:i}):i},ur=e=>{if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r},fr=e=>({cache:cr(e.cacheSize),parseClassName:dr(e),...sr(e)}),pr=/\s+/,br=(e,r)=>{const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:a}=r,s=[],i=e.trim().split(pr);let n="";for(let v=i.length-1;v>=0;v-=1){const y=i[v],{modifiers:x,hasImportantModifier:u,baseClassName:w,maybePostfixModifierPosition:g}=t(y);let h=!!g,m=o(h?w.substring(0,g):w);if(!m){if(!h){n=y+(n.length>0?" "+n:n);continue}if(m=o(w),!m){n=y+(n.length>0?" "+n:n);continue}h=!1}const f=ur(x).join(":"),l=u?f+Ee:f,c=l+m;if(s.includes(c))continue;s.push(c);const d=a(m,h);for(let b=0;b<d.length;++b){const C=d[b];s.push(l+C)}n=y+(n.length>0?" "+n:n)}return n};function gr(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=Ne(r))&&(o&&(o+=" "),o+=t);return o}const Ne=e=>{if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=Ne(e[o]))&&(t&&(t+=" "),t+=r);return t};function hr(e,...r){let t,o,a,s=i;function i(v){const y=r.reduce((x,u)=>u(x),e());return t=fr(y),o=t.cache.get,a=t.cache.set,s=n,n(v)}function n(v){const y=o(v);if(y)return y;const x=br(v,t);return a(v,x),x}return function(){return s(gr.apply(null,arguments))}}const k=e=>{const r=t=>t[e]||[];return r.isThemeGetter=!0,r},Me=/^\[(?:([a-z-]+):)?(.+)\]$/i,vr=/^\d+\/\d+$/,mr=new Set(["px","full","screen"]),yr=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,xr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,wr=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,_r=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,kr=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,M=e=>O(e)||mr.has(e)||vr.test(e),I=e=>j(e,"length",Ir),O=e=>!!e&&!Number.isNaN(Number(e)),Q=e=>j(e,"number",O),F=e=>!!e&&Number.isInteger(Number(e)),Cr=e=>e.endsWith("%")&&O(e.slice(0,-1)),p=e=>Me.test(e),R=e=>yr.test(e),Ar=new Set(["length","size","percentage"]),zr=e=>j(e,Ar,Ie),Sr=e=>j(e,"position",Ie),Er=new Set(["image","url"]),Nr=e=>j(e,Er,Tr),Mr=e=>j(e,"",Rr),Y=()=>!0,j=(e,r,t)=>{const o=Me.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1},Ir=e=>xr.test(e)&&!wr.test(e),Ie=()=>!1,Rr=e=>_r.test(e),Tr=e=>kr.test(e),Gr=()=>{const e=k("colors"),r=k("spacing"),t=k("blur"),o=k("brightness"),a=k("borderColor"),s=k("borderRadius"),i=k("borderSpacing"),n=k("borderWidth"),v=k("contrast"),y=k("grayscale"),x=k("hueRotate"),u=k("invert"),w=k("gap"),g=k("gradientColorStops"),h=k("gradientColorStopPositions"),m=k("inset"),f=k("margin"),l=k("opacity"),c=k("padding"),d=k("saturate"),b=k("scale"),C=k("sepia"),S=k("skew"),z=k("space"),W=k("translate"),G=()=>["auto","contain","none"],E=()=>["auto","hidden","clip","visible","scroll"],P=()=>["auto",p,r],_=()=>[p,r],B=()=>["",M,I],L=()=>["auto",O,p],V=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],$=()=>["solid","dashed","dotted","double","none"],q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],J=()=>["start","end","center","between","around","evenly","stretch"],H=()=>["","0",p],ae=()=>["auto","avoid","all","avoid-page","page","left","right","column"],N=()=>[O,p];return{cacheSize:500,separator:":",theme:{colors:[Y],spacing:[M,I],blur:["none","",R,p],brightness:N(),borderColor:[e],borderRadius:["none","","full",R,p],borderSpacing:_(),borderWidth:B(),contrast:N(),grayscale:H(),hueRotate:N(),invert:H(),gap:_(),gradientColorStops:[e],gradientColorStopPositions:[Cr,I],inset:P(),margin:P(),opacity:N(),padding:_(),saturate:N(),scale:N(),sepia:H(),skew:N(),space:_(),translate:_()},classGroups:{aspect:[{aspect:["auto","square","video",p]}],container:["container"],columns:[{columns:[R]}],"break-after":[{"break-after":ae()}],"break-before":[{"break-before":ae()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...V(),p]}],overflow:[{overflow:E()}],"overflow-x":[{"overflow-x":E()}],"overflow-y":[{"overflow-y":E()}],overscroll:[{overscroll:G()}],"overscroll-x":[{"overscroll-x":G()}],"overscroll-y":[{"overscroll-y":G()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",F,p]}],basis:[{basis:P()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",p]}],grow:[{grow:H()}],shrink:[{shrink:H()}],order:[{order:["first","last","none",F,p]}],"grid-cols":[{"grid-cols":[Y]}],"col-start-end":[{col:["auto",{span:["full",F,p]},p]}],"col-start":[{"col-start":L()}],"col-end":[{"col-end":L()}],"grid-rows":[{"grid-rows":[Y]}],"row-start-end":[{row:["auto",{span:[F,p]},p]}],"row-start":[{"row-start":L()}],"row-end":[{"row-end":L()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",p]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",p]}],gap:[{gap:[w]}],"gap-x":[{"gap-x":[w]}],"gap-y":[{"gap-y":[w]}],"justify-content":[{justify:["normal",...J()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...J(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...J(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[c]}],px:[{px:[c]}],py:[{py:[c]}],ps:[{ps:[c]}],pe:[{pe:[c]}],pt:[{pt:[c]}],pr:[{pr:[c]}],pb:[{pb:[c]}],pl:[{pl:[c]}],m:[{m:[f]}],mx:[{mx:[f]}],my:[{my:[f]}],ms:[{ms:[f]}],me:[{me:[f]}],mt:[{mt:[f]}],mr:[{mr:[f]}],mb:[{mb:[f]}],ml:[{ml:[f]}],"space-x":[{"space-x":[z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",p,r]}],"min-w":[{"min-w":[p,r,"min","max","fit"]}],"max-w":[{"max-w":[p,r,"none","full","min","max","fit","prose",{screen:[R]},R]}],h:[{h:[p,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[p,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[p,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[p,r,"auto","min","max","fit"]}],"font-size":[{text:["base",R,I]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Q]}],"font-family":[{font:[Y]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",p]}],"line-clamp":[{"line-clamp":["none",O,Q]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",M,p]}],"list-image":[{"list-image":["none",p]}],"list-style-type":[{list:["none","disc","decimal",p]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[l]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[l]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...$(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",M,I]}],"underline-offset":[{"underline-offset":["auto",M,p]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:_()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",p]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",p]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[l]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...V(),Sr]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",zr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Nr]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[h]}],"gradient-via-pos":[{via:[h]}],"gradient-to-pos":[{to:[h]}],"gradient-from":[{from:[g]}],"gradient-via":[{via:[g]}],"gradient-to":[{to:[g]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[n]}],"border-w-x":[{"border-x":[n]}],"border-w-y":[{"border-y":[n]}],"border-w-s":[{"border-s":[n]}],"border-w-e":[{"border-e":[n]}],"border-w-t":[{"border-t":[n]}],"border-w-r":[{"border-r":[n]}],"border-w-b":[{"border-b":[n]}],"border-w-l":[{"border-l":[n]}],"border-opacity":[{"border-opacity":[l]}],"border-style":[{border:[...$(),"hidden"]}],"divide-x":[{"divide-x":[n]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[n]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[l]}],"divide-style":[{divide:$()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-s":[{"border-s":[a]}],"border-color-e":[{"border-e":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...$()]}],"outline-offset":[{"outline-offset":[M,p]}],"outline-w":[{outline:[M,I]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:B()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[l]}],"ring-offset-w":[{"ring-offset":[M,I]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",R,Mr]}],"shadow-color":[{shadow:[Y]}],opacity:[{opacity:[l]}],"mix-blend":[{"mix-blend":[...q(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":q()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[v]}],"drop-shadow":[{"drop-shadow":["","none",R,p]}],grayscale:[{grayscale:[y]}],"hue-rotate":[{"hue-rotate":[x]}],invert:[{invert:[u]}],saturate:[{saturate:[d]}],sepia:[{sepia:[C]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[v]}],"backdrop-grayscale":[{"backdrop-grayscale":[y]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[x]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[l]}],"backdrop-saturate":[{"backdrop-saturate":[d]}],"backdrop-sepia":[{"backdrop-sepia":[C]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",p]}],duration:[{duration:N()}],ease:[{ease:["linear","in","out","in-out",p]}],delay:[{delay:N()}],animate:[{animate:["none","spin","ping","pulse","bounce",p]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[b]}],"scale-x":[{"scale-x":[b]}],"scale-y":[{"scale-y":[b]}],rotate:[{rotate:[F,p]}],"translate-x":[{"translate-x":[W]}],"translate-y":[{"translate-y":[W]}],"skew-x":[{"skew-x":[S]}],"skew-y":[{"skew-y":[S]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",p]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",p]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":_()}],"scroll-mx":[{"scroll-mx":_()}],"scroll-my":[{"scroll-my":_()}],"scroll-ms":[{"scroll-ms":_()}],"scroll-me":[{"scroll-me":_()}],"scroll-mt":[{"scroll-mt":_()}],"scroll-mr":[{"scroll-mr":_()}],"scroll-mb":[{"scroll-mb":_()}],"scroll-ml":[{"scroll-ml":_()}],"scroll-p":[{"scroll-p":_()}],"scroll-px":[{"scroll-px":_()}],"scroll-py":[{"scroll-py":_()}],"scroll-ps":[{"scroll-ps":_()}],"scroll-pe":[{"scroll-pe":_()}],"scroll-pt":[{"scroll-pt":_()}],"scroll-pr":[{"scroll-pr":_()}],"scroll-pb":[{"scroll-pb":_()}],"scroll-pl":[{"scroll-pl":_()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",p]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[M,I,Q]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Xr=hr(Gr);export{Wr as a,Hr as b,X as c,qr as d,jr as e,Fr as f,ee as g,Br as h,Or as i,Yr as j,Ur as k,or as l,gr as m,Vr as r,$r as s,Xr as t};
