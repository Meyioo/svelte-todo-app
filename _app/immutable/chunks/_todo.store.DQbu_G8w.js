import{aj as B,H as b,h as M,ak as O,I as p}from"./utils.Bwy3OVUC.js";import{l as E,m as S}from"./_toast.store.jq5rPOzs.js";import{b as H}from"./props.DV-qlw3c.js";import{w as A}from"./index.DbE5qgVJ.js";function w(e,t,a,r=a){e.addEventListener(t,a);const n=e.__on_r;n?e.__on_r=()=>{n(),r()}:e.__on_r=r,E()}function G(e,t,a=t){var r=B();w(e,"input",()=>{var n=k(e)?y(e.value):e.value;a(n),r&&n!==(n=t())&&(e.value=n??"")}),b(()=>{var n=t();if(M&&e.defaultValue!==e.value){a(e.value);return}k(e)&&n===y(e.value)||e.type==="date"&&!n&&!e.value||n!==e.value&&(e.value=n??"")})}const f=new Set;function J(e,t,a,r,n=r){var d=a.getAttribute("type")==="checkbox",l=e;let v=!1;if(t!==null)for(var u of t)l=l[u]??(l[u]=[]);l.push(a),w(a,"change",()=>{var i=a.__value;d&&(i=_(l,i,a.checked)),n(i)},()=>n(d?[]:null)),b(()=>{var i=r();if(M&&a.defaultChecked!==a.checked){v=!0;return}d?(i=i||[],a.checked=i.includes(a.__value)):a.checked=H(a.__value,i)}),O(()=>{var i=l.indexOf(a);i!==-1&&l.splice(i,1)}),f.has(l)||(f.add(l),p(()=>{l.sort((i,o)=>i.compareDocumentPosition(o)===4?-1:1),f.delete(l)})),p(()=>{if(v){var i;if(d)i=_(l,i,a.checked);else{var o=l.find(T=>T.checked);i=o==null?void 0:o.__value}n(i)}})}function K(e,t,a=t){w(e,"change",()=>{var r=e.checked;a(r)}),t()==null&&a(!1),b(()=>{var r=t();e.checked=!!r})}function _(e,t,a){for(var r=new Set,n=0;n<e.length;n+=1)e[n].checked&&r.add(e[n].__value);return a||r.delete(t),Array.from(r)}function k(e){var t=e.type;return t==="number"||t==="range"}function y(e){return e===""?null:+e}var s=(e=>(e.Low="low",e.Medium="medium",e.High="high",e))(s||{});const x={low:{level:"low",label:"Gering",color:"bg-green-500",activeColor:"bg-green-700"},medium:{level:"medium",label:"Mittel",color:"bg-amber-500",activeColor:"bg-amber-700"},high:{level:"high",label:"Hoch",color:"bg-red-500",activeColor:"bg-red-700"}},P=[{id:1,title:"Einkaufen gehen",description:"Milch, Eier, Brot und Gemüse kaufen",completed:!1,selected:!1,dueDate:new Date("2023-12-01"),createDate:new Date("2023-11-30"),priority:s.Medium},{id:2,title:"Bachelorarbeit schreiben",description:"Kapitel über Svelte-Framework fertigstellen",completed:!1,selected:!1,dueDate:new Date("2023-12-02"),createDate:new Date("2023-11-30"),priority:s.High},{id:3,title:"Fitnessstudio besuchen",description:"1 Stunde Ausdauer und Krafttraining",completed:!1,selected:!1,dueDate:new Date("2023-12-03"),createDate:new Date("2023-11-29"),priority:s.Low},{id:4,title:"Einkaufen gehen",description:"Lebensmittel und Haushaltswaren besorgen",completed:!1,selected:!1,dueDate:new Date("2023-12-04"),createDate:new Date("2023-11-28"),priority:s.Medium},{id:5,title:"Arzttermin wahrnehmen",description:"Jährliche Gesundheitsuntersuchung",completed:!1,selected:!1,dueDate:new Date("2023-12-05"),createDate:new Date("2023-10-28"),priority:s.Medium},{id:6,title:"E-Mails bearbeiten",description:"Alle wichtigen E-Mails durchgehen und beantworten",completed:!1,selected:!1,dueDate:new Date("2023-12-06"),createDate:new Date("2023-10-28"),priority:s.High},{id:7,title:"Projektbericht schreiben",description:"Fortschrittsbericht für das aktuelle Projekt erstellen",completed:!1,selected:!1,dueDate:new Date("2023-12-07"),createDate:new Date("2023-10-28"),priority:s.High},{id:8,title:"Wohnung putzen",description:"Staubsaugen und Oberflächen abwischen",completed:!1,selected:!1,dueDate:new Date("2023-12-08"),createDate:new Date("2023-10-28"),priority:s.Medium},{id:9,title:"Freunde treffen",description:"Treffen zum Abendessen vereinbaren",completed:!1,selected:!1,dueDate:new Date("2023-12-09"),createDate:new Date("2023-10-28"),priority:s.Medium},{id:10,title:"Rechnung bezahlen",description:"Telefon- und Internetrechnung begleichen",completed:!1,selected:!1,dueDate:new Date("2023-12-10"),createDate:new Date("2023-10-28"),priority:s.Medium},{id:11,title:"Buch lesen",description:"Kapitel 4 des aktuellen Buches durchlesen",completed:!1,selected:!1,dueDate:new Date("2023-12-11"),createDate:new Date("2023-10-28"),priority:s.Medium},{id:12,title:"Joggen gehen",description:"30 Minuten joggen im Park",completed:!1,selected:!1,dueDate:new Date("2023-12-12"),createDate:new Date("2023-10-28"),priority:s.Medium},{id:13,title:"Familie anrufen",description:"Kurzes Gespräch mit den Eltern führen",completed:!1,selected:!1,dueDate:new Date("2023-12-13"),createDate:new Date("2023-10-28"),priority:s.Medium}];function j(e,t){const a=localStorage.getItem(e),r=a?JSON.parse(a):t,n=A(r);return n.subscribe(d=>localStorage.setItem(e,JSON.stringify(d))),n}const c=j("todos",P),L=A("");function N(e){c.update(t=>{const a=t.length>0?Math.max(...t.map(r=>r.id),0)+1:1;return e.id=a,t.push(e),t}),S({message:"Aufgabe erfolgreich angelegt!",duration:3e3,color:"bg-green-500"})}function V(e){c.update(t=>{const a=t.find(r=>e===r);return a&&(a.selected=!a.selected),t})}function q(){c.update(e=>(e.forEach(t=>{t.selected&&(t.completed=!0,t.selected=!1)}),e)),S({message:"Aufgaben wurden abgeschlossen!",color:"bg-green-500",duration:3e3})}let h=!0;function R(){const e={low:1,medium:2,high:3};c.update(t=>(t.sort((a,r)=>{const n=e[a.priority]-e[r.priority];return h?n:-n}),h=!h,t))}let m=!0;function W(){c.update(e=>(e.sort((t,a)=>{const r=new Date(t.dueDate).getTime(),n=new Date(a.dueDate).getTime();return m?r-n:n-r}),m=!m,e))}let D=!0;function Q(){c.update(e=>(e.sort((t,a)=>{const r=new Date(t.createDate).getTime(),n=new Date(a.createDate).getTime();return D?r-n:n-r}),D=!D,e))}let g=!0;function U(){c.update(e=>(e.sort((t,a)=>{let r;return t.selected===a.selected?r=0:r=t.selected?-1:1,g?r:-r}),g=!g,e))}export{x as P,L as S,c as T,s as a,N as b,K as c,J as d,G as e,R as f,W as g,Q as h,U as i,q as j,V as s};
