import{am as f,an as l,C as o}from"./utils.D2gacb3q.js";import{b as s}from"./_todo.store.BwFdh1WA.js";function t(e,a,_,n=_){e.addEventListener(a,_);const r=e.__on_r;r?e.__on_r=()=>{r(),n()}:e.__on_r=n,s()}function b(e,a,_=a){var n=f();t(e,"input",()=>{var r=v(e)?u(e.value):e.value;_(r),n&&r!==(r=a())&&(e.value=r??"")}),l(()=>{var r=a();if(o&&e.defaultValue!==e.value){_(e.value);return}v(e)&&r===u(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function v(e){var a=e.type;return a==="number"||a==="range"}function u(e){return e===""?null:+e}export{b};
