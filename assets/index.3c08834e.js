import{G as Y,f as Q,g as se,a1 as oe,B as I,H as ie,I as ce,a2 as de,o as v,c as K,V as $,u as t,X as L,aq as A,d as O,w as H,h as P,a4 as W,af as F,q as me}from"./app.a3d32ab8.js";import{E as pe}from"./index.b7a0dde8.js";import{d as fe,u as be,i as p,C as Z,I as k,a8 as y,U as h,q as ve,j as Ne,l as Ve,X as T,f as Ie,h as he,a4 as ye,an as Ee,G as X,ae as we,ao as ge,_ as _e,J as Se,n as j,w as Ae}from"./document.e6cb366c.js";const Pe=100,Fe=600,J={beforeMount(l,N){const i=N.value,{interval:a=Pe,delay:E=Fe}=Y(i)?{}:i;let c,m;const u=()=>Y(i)?i():i.handler(),f=()=>{m&&(clearTimeout(m),m=void 0),c&&(clearInterval(c),c=void 0)};l.addEventListener("mousedown",w=>{w.button===0&&(f(),u(),document.addEventListener("mouseup",()=>f(),{once:!0}),m=setTimeout(()=>{c=setInterval(()=>{u()},a)},E))})}},Te=fe({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:be,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:l=>l===null||p(l)||["min","max"].includes(l),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:l=>l>=0&&l===Number.parseInt(`${l}`,10)},validateEvent:{type:Boolean,default:!0}}),ke={[Z]:(l,N)=>N!==l,blur:l=>l instanceof FocusEvent,focus:l=>l instanceof FocusEvent,[k]:l=>p(l)||y(l),[h]:l=>p(l)||y(l)},Ce=["aria-label","onKeydown"],xe=["aria-label","onKeydown"],Be=Q({name:"ElInputNumber"}),De=Q({...Be,props:Te,emits:ke,setup(l,{expose:N,emit:i}){const a=l,{t:E}=ve(),c=Ne("input-number"),m=se(),u=oe({currentValue:a.modelValue,userInput:null}),{formItem:f}=Ve(),w=I(()=>p(a.modelValue)&&a.modelValue<=a.min),R=I(()=>p(a.modelValue)&&a.modelValue>=a.max),ee=I(()=>{const e=G(a.step);return T(a.precision)?Math.max(G(a.modelValue),e):(e>a.precision,a.precision)}),C=I(()=>a.controls&&a.controlsPosition==="right"),U=Ie(),V=he(),x=I(()=>{if(u.userInput!==null)return u.userInput;let e=u.currentValue;if(y(e))return"";if(p(e)){if(Number.isNaN(e))return"";T(a.precision)||(e=e.toFixed(a.precision))}return e}),B=(e,n)=>{if(T(n)&&(n=ee.value),n===0)return Math.round(e);let r=String(e);const s=r.indexOf(".");if(s===-1||!r.replace(".","").split("")[s+n])return e;const _=r.length;return r.charAt(_-1)==="5"&&(r=`${r.slice(0,Math.max(0,_-1))}6`),Number.parseFloat(Number(r).toFixed(n))},G=e=>{if(y(e))return 0;const n=e.toString(),r=n.indexOf(".");let s=0;return r!==-1&&(s=n.length-r-1),s},q=(e,n=1)=>p(e)?B(e+a.step*n):u.currentValue,D=()=>{if(a.readonly||V.value||R.value)return;const e=Number(x.value)||0,n=q(e);g(n),i(k,u.currentValue)},M=()=>{if(a.readonly||V.value||w.value)return;const e=Number(x.value)||0,n=q(e,-1);g(n),i(k,u.currentValue)},z=(e,n)=>{const{max:r,min:s,step:o,precision:b,stepStrictly:_,valueOnClear:S}=a;r<s&&Se("InputNumber","min should not be greater than max.");let d=Number(e);if(y(e)||Number.isNaN(d))return null;if(e===""){if(S===null)return null;d=me(S)?{min:s,max:r}[S]:S}return _&&(d=B(Math.round(d/o)*o,b)),T(b)||(d=B(d,b)),(d>r||d<s)&&(d=d>r?r:s,n&&i(h,d)),d},g=(e,n=!0)=>{var r;const s=u.currentValue,o=z(e);if(!n){i(h,o);return}s!==o&&(u.userInput=null,i(h,o),i(Z,o,s),a.validateEvent&&((r=f==null?void 0:f.validate)==null||r.call(f,"change").catch(b=>j())),u.currentValue=o)},ne=e=>{u.userInput=e;const n=e===""?null:Number(e);i(k,n),g(n,!1)},te=e=>{const n=e!==""?Number(e):"";(p(n)&&!Number.isNaN(n)||e==="")&&g(n),u.userInput=null},re=()=>{var e,n;(n=(e=m.value)==null?void 0:e.focus)==null||n.call(e)},ae=()=>{var e,n;(n=(e=m.value)==null?void 0:e.blur)==null||n.call(e)},le=e=>{i("focus",e)},ue=e=>{var n;i("blur",e),a.validateEvent&&((n=f==null?void 0:f.validate)==null||n.call(f,"blur").catch(r=>j()))};return ie(()=>a.modelValue,e=>{const n=z(u.userInput),r=z(e,!0);!p(n)&&(!n||n!==r)&&(u.currentValue=r,u.userInput=null)},{immediate:!0}),ce(()=>{var e;const{min:n,max:r,modelValue:s}=a,o=(e=m.value)==null?void 0:e.input;if(o.setAttribute("role","spinbutton"),Number.isFinite(r)?o.setAttribute("aria-valuemax",String(r)):o.removeAttribute("aria-valuemax"),Number.isFinite(n)?o.setAttribute("aria-valuemin",String(n)):o.removeAttribute("aria-valuemin"),o.setAttribute("aria-valuenow",u.currentValue||u.currentValue===0?String(u.currentValue):""),o.setAttribute("aria-disabled",String(V.value)),!p(s)&&s!=null){let b=Number(s);Number.isNaN(b)&&(b=null),i(h,b)}}),de(()=>{var e,n;const r=(e=m.value)==null?void 0:e.input;r==null||r.setAttribute("aria-valuenow",`${(n=u.currentValue)!=null?n:""}`)}),N({focus:re,blur:ae}),(e,n)=>(v(),K("div",{class:L([t(c).b(),t(c).m(t(U)),t(c).is("disabled",t(V)),t(c).is("without-controls",!e.controls),t(c).is("controls-right",t(C))]),onDragstart:n[1]||(n[1]=F(()=>{},["prevent"]))},[e.controls?$((v(),K("span",{key:0,role:"button","aria-label":t(E)("el.inputNumber.decrease"),class:L([t(c).e("decrease"),t(c).is("disabled",t(w))]),onKeydown:A(M,["enter"])},[O(t(X),null,{default:H(()=>[t(C)?(v(),P(t(ye),{key:0})):(v(),P(t(Ee),{key:1}))]),_:1})],42,Ce)),[[t(J),M]]):W("v-if",!0),e.controls?$((v(),K("span",{key:1,role:"button","aria-label":t(E)("el.inputNumber.increase"),class:L([t(c).e("increase"),t(c).is("disabled",t(R))]),onKeydown:A(D,["enter"])},[O(t(X),null,{default:H(()=>[t(C)?(v(),P(t(we),{key:0})):(v(),P(t(ge),{key:1}))]),_:1})],42,xe)),[[t(J),D]]):W("v-if",!0),O(t(pe),{id:e.id,ref_key:"input",ref:m,type:"number",step:e.step,"model-value":t(x),placeholder:e.placeholder,readonly:e.readonly,disabled:t(V),size:t(U),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:n[0]||(n[0]=F(()=>{},["prevent"])),onKeydown:[A(F(D,["prevent"]),["up"]),A(F(M,["prevent"]),["down"])],onBlur:ue,onFocus:le,onInput:ne,onChange:te},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}});var Me=_e(De,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);const Oe=Ae(Me);export{Oe as E,J as v};
