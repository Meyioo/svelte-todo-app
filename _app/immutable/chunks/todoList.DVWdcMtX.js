import{d as T,a as m,t as f}from"./disclose-version.oqRP3C1Q.js";import{p as w,c as a,r,t as k,s as _,a as L,d as C}from"./utils.D2gacb3q.js";import{i as h}from"./if.BbjJQ6Z5.js";import{e as D,i as j}from"./each.CbU1SPtY.js";import{p as z}from"./props.Cjk42cYo.js";import{s as A,a as F}from"./store.78GPTt41.js";import{s as y}from"./render.C9EJZr-N.js";import{r as I,s as K,a as S,T as q,S as B}from"./_todo.store.BwFdh1WA.js";import{d as E}from"./index.B6iX91I7.js";var G=(g,t)=>t(),H=f('<div class="me-4 ms-2 flex items-center"><input type="checkbox" class="size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900" id="checkbox"></div>'),J=f('<div class="text-sm text-gray-500"> </div>'),M=f('<div class="flex w-full justify-between border-b-2 p-2 text-left"><div class="flex"><!> <div><strong class="font-medium text-gray-900"> </strong> <p class="mt-1 text-pretty text-sm text-gray-700"> </p></div></div> <!></div>');function N(g,t){w(t,!0);function x(){S(t.todo)}var d=M(),l=a(d),p=a(l);h(p,()=>!t.todo.completed,c=>{var s=H(),v=a(s);I(v),v.__click=[G,x],r(s),k(()=>K(v,t.todo.selected)),m(c,s)});var i=_(p,2),n=a(i),b=a(n,!0);r(n);var e=_(n,2),o=a(e,!0);r(e),r(i),r(l);var u=_(l,2);h(u,()=>t.todo.deadline,c=>{var s=J(),v=a(s);k(()=>y(v,`Fälligkeit: ${new Date(t.todo.deadline).toLocaleDateString()??""}`)),r(s),m(c,s)}),r(d),k(()=>{y(b,t.todo.title),y(o,t.todo.description)}),m(g,d),L()}T(["click"]);var O=f('<p class="mt-3 text-center text-gray-500">Keine Aufgaben gefunden</p>'),P=f("<main><!> <!></main>");function tt(g,t){w(t,!0);const x=A(),d=()=>F(p,"$todos",x),l=z(t,"completed",3,!1),p=E([q,B],([e,o])=>{const u=l()?e.completed:e.open;return o.length>0?u.filter(c=>c.title.toLowerCase().includes(o.toLowerCase())||c.description.toLowerCase().includes(o.toLowerCase())):u});var i=P(),n=a(i);D(n,1,d,j,(e,o)=>{N(e,{get todo(){return C(o)}})});var b=_(n,2);h(b,()=>d().length===0,e=>{var o=O();m(e,o)}),r(i),m(g,i),L()}export{tt as T};