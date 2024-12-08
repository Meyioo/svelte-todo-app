import{a as u,t as E,g as le,h as T,n as Pe,b as Q,i as Ke,f as Ue}from"../chunks/disclose-version.CZW_aAFa.js";import{p as Fe,D as q,z as me,A as Ge,t as A,a as Le,B as t,C as b,c as f,s as h,r as p,R as B,F as oe,T as z,f as Je,M as Qe}from"../chunks/utils.Bwy3OVUC.js";import{p as v,i as ie,a as Xe}from"../chunks/props.DV-qlw3c.js";import{r as et,e as _e,i as we,d as tt,f as rt,g as de,h as Me}from"../chunks/_toast.store.jq5rPOzs.js";import{P as at,a as nt,b as lt}from"../chunks/_todo.store.DQbu_G8w.js";import{B as H,I as Ce}from"../chunks/Input.DjScIArL.js";import{b as be}from"../chunks/this.CnwNmonG.js";import{i as ot}from"../chunks/lifecycle.CzJVBoEp.js";import{c as it,o as st}from"../chunks/index-client.Bnj6qPSa.js";import{f as dt}from"../chunks/index.BsCRBkET.js";import{L as se}from"../chunks/Label.DE732Lbu.js";var ut=E('<div class="relative"><input type="text" aria-haspopup="dialog"> <button type="button" class="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-400 focus:outline-none"><svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path></svg></button></div>'),ct=E('<h2 class="text-lg font-semibold mb-4 dark:text-white"> </h2>'),gt=Pe('<svg class="w-3 h-3 rtl:rotate-180 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"></path></svg>'),vt=Pe('<svg class="w-3 h-3 rtl:rotate-180 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg>'),ft=E('<div class="text-center text-sm font-medium text-gray-500 dark:text-gray-400" role="columnheader"> </div>'),ht=E('<div class="mt-4 flex justify-between"><!> <!> <!></div>'),pt=E('<div id="datepicker-dropdown" role="dialog" aria-label="Calendar"><div class="p-4" role="application"><!> <div class="flex items-center justify-between mb-4"><!> <h3 class="text-lg font-semibold dark:text-white" aria-live="polite"> </h3> <!></div> <div class="grid grid-cols-7 gap-1" role="grid"><!> <!></div> <!></div></div>'),mt=E("<div><!> <!></div>");function bt(V,a){Fe(a,!1);const i=q(),N=q(),I=q();let m=v(a,"value",12,null),C=v(a,"defaultDate",8,null),_=v(a,"range",8,!1),c=v(a,"rangeFrom",12,null),g=v(a,"rangeTo",12,null),$=v(a,"locale",8,"default"),W=v(a,"firstDayOfWeek",8,0),x=v(a,"dateFormat",24,()=>({year:"numeric",month:"long",day:"numeric"})),Y=v(a,"placeholder",8,"Select date"),Z=v(a,"disabled",8,!1),G=v(a,"required",8,!1),X=v(a,"inputClass",8,""),P=v(a,"color",8,"primary"),D=v(a,"inline",8,!1),ue=v(a,"autohide",8,!0),ce=v(a,"showActionButtons",8,!1),s=v(a,"title",8,"");const F=it();let n=q(D()),ee=q(),te=q(),L=q(m()||C()||new Date),l=null,ge=q();st(()=>{if(!D())return document.addEventListener("click",ye),()=>{document.removeEventListener("click",ye)}});function Se(e){switch(e){case"primary":return"focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400";case"blue":return"focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400";case"red":return"focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400";case"green":return"focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400";case"yellow":return"focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400";case"purple":return"focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400";default:return""}}function Ae(e){switch(e){case"primary":return"bg-primary-100 dark:bg-primary-900";case"blue":return"bg-blue-100 dark:bg-blue-900";case"red":return"bg-red-100 dark:bg-red-900";case"green":return"bg-green-100 dark:bg-green-900";case"yellow":return"bg-yellow-100 dark:bg-yellow-900";case"purple":return"bg-purple-100 dark:bg-purple-900";default:return""}}function Te(e){const r=e.getFullYear(),o=e.getMonth(),K=new Date(r,o,0),S=new Date(r,o+1,0),M=[];let j=K.getDay()-W();j<0&&(j+=7);for(let k=0;k<j;(k+=1)-1)M.unshift(new Date(r,o,-k));for(let k=1;k<=S.getDate();(k+=1)-1)M.push(new Date(r,o,k));const ae=7-M.length%7;if(ae<7)for(let k=1;k<=ae;(k+=1)-1)M.push(new Date(r,o+1,k));return M}function Be(){const e=[];for(let r=0;r<7;(r+=1)-1){const o=new Date(2021,5,r+W());e.push(o.toLocaleString($(),{weekday:"short"}))}return e}function ke(e){b(L,new Date(t(L).getFullYear(),t(L).getMonth()+e,1))}function re(e){_()?(!c()||c()&&g()?(c(e),g(null)):e<c()?(g(c()),c(e)):g(e),F("select",{from:c(),to:g()})):(m(e),F("select",m()),ue()&&!D()&&b(n,!1))}function Ie(){const e=new Date(t(ee).value);isNaN(e.getTime())||re(e)}function ye(e){t(n)&&t(te)&&!t(te).contains(e.target)&&b(n,!1)}function ve(e){return e?e.toLocaleDateString($(),x()):""}function fe(e,r){return!e||!r?!1:e.toDateString()===r.toDateString()}function qe(e){return!_()||!c()||!g()?!1:e>c()&&e<g()}function ze(e){const r=new Date;return e.toDateString()===r.toDateString()}function Ee(e){if(t(n)){switch(l||(l=m()||new Date),e.key){case"ArrowLeft":l=new Date(l.getFullYear(),l.getMonth(),l.getDate()-1);break;case"ArrowRight":l=new Date(l.getFullYear(),l.getMonth(),l.getDate()+1);break;case"ArrowUp":l=new Date(l.getFullYear(),l.getMonth(),l.getDate()-7);break;case"ArrowDown":l=new Date(l.getFullYear(),l.getMonth(),l.getDate()+7);break;case"Enter":re(l);break;case"Escape":b(n,!1),t(ee).focus();break;default:return}e.preventDefault(),l.getMonth()!==t(L).getMonth()&&b(L,new Date(l.getFullYear(),l.getMonth(),1)),setTimeout(()=>{const r=t(ge).querySelector(`button[aria-label="${l.toLocaleDateString($(),{weekday:"long",year:"numeric",month:"long",day:"numeric"})}"]`);r==null||r.focus()},0)}}function Ye(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),b(n,!t(n)))}function je(){re(new Date)}function Oe(){m(null),c(null),g(null),F("clear")}function Re(){F("apply",_()?{from:c(),to:g()}:m()),D()||b(n,!1)}me(()=>t(L),()=>{b(i,Te(t(L)))}),me(()=>{},()=>{b(N,Be())}),me(()=>(oe(_()),oe(c()),oe(g()),oe(m())),()=>{b(I,e=>_()?fe(e,c())||fe(e,g()):fe(e,m()))}),Ge(),ot();var J=mt();be(J,e=>b(te,e),()=>t(te));var xe=f(J);ie(xe,()=>!D(),e=>{var r=ut(),o=f(r);be(o,M=>b(ee,M),()=>t(ee)),et(o);const K=z(()=>`w-full px-4 py-2 text-sm border rounded-md focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600 ${Se(P())??""} ${X()??""}`);A(()=>rt(o,_()?`${ve(c())} - ${ve(g())}`:ve(m())));var S=h(o,2);p(r),A(()=>{de(o,t(K)),Me(o,"placeholder",Y()),o.disabled=Z(),o.required=G(),S.disabled=Z(),Me(S,"aria-label",t(n)?"Close date picker":"Open date picker")}),le("focus",o,()=>b(n,!0)),le("input",o,Ie),le("keydown",o,Ye),le("click",S,()=>b(n,!t(n))),u(e,r)});var He=h(xe,2);ie(He,()=>t(n)||D(),e=>{var r=pt();be(r,y=>b(ge,y),()=>t(ge));var o=f(r),K=f(o);ie(K,s,y=>{var d=ct(),w=f(d,!0);p(d),A(()=>Q(w,s())),u(y,d)});var S=h(K,2),M=f(S);H(M,{get color(){return P()},size:"sm","aria-label":"Previous month",$$events:{click:()=>ke(-1)},children:(y,d)=>{var w=gt();u(y,w)},$$slots:{default:!0}});var j=h(M,2),ae=f(j,!0);A(()=>Q(ae,t(L).toLocaleString($(),{month:"long",year:"numeric"}))),p(j);var k=h(j,2);H(k,{get color(){return P()},size:"sm","aria-label":"Next month",$$events:{click:()=>ke(1)},children:(y,d)=>{var w=vt();u(y,w)},$$slots:{default:!0}}),p(S);var he=h(S,2),De=f(he);_e(De,1,()=>t(N),we,(y,d)=>{var w=ft(),U=f(w,!0);p(w),A(()=>Q(U,t(d))),u(y,w)});var Ve=h(De,2);_e(Ve,1,()=>t(i),we,(y,d)=>{var w=z(()=>t(I)(t(d))?P():"alternative");const U=z(()=>(t(d).getMonth()!==t(L).getMonth()?"text-gray-300 dark:text-gray-600":"")??""),pe=z(()=>(ze(t(d))?"font-bold":"")??""),O=z(()=>(qe(t(d))?Ae(P()):"")??"");var ne=z(()=>`w-full h-8 ${t(U)} ${t(pe)} ${t(O)}`),R=z(()=>t(d).toLocaleDateString($(),{weekday:"long",year:"numeric",month:"long",day:"numeric"})),We=z(()=>t(I)(t(d)));H(y,{get color(){return t(w)},size:"sm",get class(){return t(ne)},get"aria-label"(){return t(R)},get"aria-selected"(){return t(We)},role:"gridcell",$$events:{click:()=>re(t(d)),keydown:Ee},children:(Ze,xt)=>{B();var $e=T();A(()=>Q($e,t(d).getDate())),u(Ze,$e)},$$slots:{default:!0}})}),p(he);var Ne=h(he,2);ie(Ne,ce,y=>{var d=ht(),w=f(d);H(w,{get color(){return P()},size:"sm",$$events:{click:je},children:(O,ne)=>{B();var R=T("Today");u(O,R)},$$slots:{default:!0}});var U=h(w,2);H(U,{color:"red",size:"sm",$$events:{click:Oe},children:(O,ne)=>{B();var R=T("Clear");u(O,R)},$$slots:{default:!0}});var pe=h(U,2);H(pe,{get color(){return P()},size:"sm",$$events:{click:Re},children:(O,ne)=>{B();var R=T("Apply");u(O,R)},$$slots:{default:!0}}),p(d),u(y,d)}),p(o),p(r),A(()=>de(r,`
        ${(D()?"":"absolute z-10 mt-1")??""}
        bg-white dark:bg-gray-800 rounded-md shadow-lg`)),tt(3,r,()=>dt,()=>({duration:100})),u(e,r)}),p(J),A(()=>de(J,`relative ${(D()?"inline-block":"")??""}`)),u(V,J),Le()}var _t=(V,a,i)=>a(i()),wt=E('<button type="button"><div class="mt-px"> </div></button>');function kt(V,a){let i=v(a,"priority",15);function N(C){i(C)}var I=Ue(),m=Je(I);_e(m,17,()=>Object.values(at),we,(C,_)=>{let c=()=>t(_).level,g=()=>t(_).label,$=()=>t(_).color,W=()=>t(_).activeColor;var x=wt();x.__click=[_t,N,c];var Y=f(x),Z=f(Y,!0);p(Y),p(x),A(()=>{de(x,`center relative me-3 inline-block select-none whitespace-nowrap rounded-lg px-3.5 py-2 font-sans text-xs font-bold
			uppercase leading-none text-white last-of-type:me-0 ${$()??""} ${(i()===c()?W():"")??""}`),Q(Z,g())}),u(C,x)}),u(V,I)}Ke(["click"]);var yt=E('<form class="grid gap-6 md:grid-cols-2"><div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div class="flex items-center justify-between"><!></div></form>');function It(V,a){Fe(a,!0);const i=Xe({id:null,title:"",description:"",completed:!1,selected:!1,createDate:new Date,dueDate:new Date,priority:nt.Low});function N(){return!i.title||!i.description||!i.dueDate}function I(){lt(i)}var m=yt(),C=f(m),_=f(C);se(_,{for:"title",class:"mb-2",children:(s,F)=>{B();var n=T("Titel");u(s,n)},$$slots:{default:!0}});var c=h(_,2);Ce(c,{id:"title",placeholder:"Titel eingeben",get value(){return i.title},set value(s){i.title=s},required:!0}),p(C);var g=h(C,2),$=f(g);se($,{for:"description",class:"mb-2",children:(s,F)=>{B();var n=T("Beschreibung");u(s,n)},$$slots:{default:!0}});var W=h($,2);Ce(W,{id:"description",placeholder:"Beschreibung eingeben",get value(){return i.description},set value(s){i.description=s},required:!0}),p(g);var x=h(g,2),Y=f(x);se(Y,{for:"dueDate",class:"mb-2",children:(s,F)=>{B();var n=T("Fälligkeitsdatum");u(s,n)},$$slots:{default:!0}});var Z=h(Y,2);bt(Z,{get value(){return i.dueDate},set value(s){i.dueDate=s},required:!0}),p(x);var G=h(x,2),X=f(G);se(X,{class:"mb-2",children:(s,F)=>{B();var n=T("Priorität");u(s,n)},$$slots:{default:!0}});var P=h(X,2);kt(P,{get priority(){return i.priority},set priority(s){i.priority=s}}),p(G);var D=h(G,2),ue=f(D),ce=Qe(N);H(ue,{type:"button",onclick:I,get disabled(){return t(ce)},children:(s,F)=>{B();var n=T("Aufgabe anlegen");u(s,n)},$$slots:{default:!0}}),p(D),p(m),u(V,m),Le()}export{It as component};