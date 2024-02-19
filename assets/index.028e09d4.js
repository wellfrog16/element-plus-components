import{G as q,f as Z,g as oe,a1 as ie,B as I,H as ce,I as de,a2 as me,o as v,c as K,V as H,u as t,X as L,ar as A,d as O,w as W,h as P,a4 as j,af as T,q as pe}from"./app.102c0a36.js";import{E as fe}from"./index.d406c765.js";import{d as be,u as ve,i as b,C as ee,I as C,a7 as y,U as h,q as Ne,j as Ve,l as Ie,T as F,f as he,h as ye,a0 as Ee,am as we,G as J,ad as ge,an as _e,_ as Se,J as Ae,n as X,w as Pe}from"./document.d036075a.js";const Te=100,Fe=600,Q={beforeMount(l,N){const i=N.value,{interval:r=Te,delay:E=Fe}=q(i)?{}:i;let c,m;const u=()=>q(i)?i():i.handler(),p=()=>{m&&(clearTimeout(m),m=void 0),c&&(clearInterval(c),c=void 0)};l.addEventListener("mousedown",w=>{w.button===0&&(p(),u(),document.addEventListener("mouseup",()=>p(),{once:!0}),m=setTimeout(()=>{c=setInterval(()=>{u()},r)},E))})}},Ce=be({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:ve,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:l=>l===null||b(l)||["min","max"].includes(l),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:l=>l>=0&&l===Number.parseInt(`${l}`,10)},validateEvent:{type:Boolean,default:!0}}),ke={[ee]:(l,N)=>N!==l,blur:l=>l instanceof FocusEvent,focus:l=>l instanceof FocusEvent,[C]:l=>b(l)||y(l),[h]:l=>b(l)||y(l)},xe=["aria-label","onKeydown"],Be=["aria-label","onKeydown"],De=Z({name:"ElInputNumber"}),Me=Z({...De,props:Ce,emits:ke,setup(l,{expose:N,emit:i}){const r=l,{t:E}=Ne(),c=Ve("input-number"),m=oe(),u=ie({currentValue:r.modelValue,userInput:null}),{formItem:p}=Ie(),w=I(()=>b(r.modelValue)&&r.modelValue<=r.min),R=I(()=>b(r.modelValue)&&r.modelValue>=r.max),ne=I(()=>{const e=G(r.step);return F(r.precision)?Math.max(G(r.modelValue),e):(e>r.precision,r.precision)}),k=I(()=>r.controls&&r.controlsPosition==="right"),U=he(),V=ye(),x=I(()=>{if(u.userInput!==null)return u.userInput;let e=u.currentValue;if(y(e))return"";if(b(e)){if(Number.isNaN(e))return"";F(r.precision)||(e=e.toFixed(r.precision))}return e}),B=(e,n)=>{if(F(n)&&(n=ne.value),n===0)return Math.round(e);let a=String(e);const s=a.indexOf(".");if(s===-1||!a.replace(".","").split("")[s+n])return e;const _=a.length;return a.charAt(_-1)==="5"&&(a=`${a.slice(0,Math.max(0,_-1))}6`),Number.parseFloat(Number(a).toFixed(n))},G=e=>{if(y(e))return 0;const n=e.toString(),a=n.indexOf(".");let s=0;return a!==-1&&(s=n.length-a-1),s},Y=(e,n=1)=>b(e)?B(e+r.step*n):u.currentValue,D=()=>{if(r.readonly||V.value||R.value)return;const e=Number(x.value)||0,n=Y(e);g(n),i(C,u.currentValue),z()},M=()=>{if(r.readonly||V.value||w.value)return;const e=Number(x.value)||0,n=Y(e,-1);g(n),i(C,u.currentValue),z()},$=(e,n)=>{const{max:a,min:s,step:o,precision:f,stepStrictly:_,valueOnClear:S}=r;a<s&&Ae("InputNumber","min should not be greater than max.");let d=Number(e);if(y(e)||Number.isNaN(d))return null;if(e===""){if(S===null)return null;d=pe(S)?{min:s,max:a}[S]:S}return _&&(d=B(Math.round(d/o)*o,f)),F(f)||(d=B(d,f)),(d>a||d<s)&&(d=d>a?a:s,n&&i(h,d)),d},g=(e,n=!0)=>{var a;const s=u.currentValue,o=$(e);if(!n){i(h,o);return}s!==o&&(u.userInput=null,i(h,o),i(ee,o,s),r.validateEvent&&((a=p==null?void 0:p.validate)==null||a.call(p,"change").catch(f=>X())),u.currentValue=o)},te=e=>{u.userInput=e;const n=e===""?null:Number(e);i(C,n),g(n,!1)},ae=e=>{const n=e!==""?Number(e):"";(b(n)&&!Number.isNaN(n)||e==="")&&g(n),z(),u.userInput=null},re=()=>{var e,n;(n=(e=m.value)==null?void 0:e.focus)==null||n.call(e)},le=()=>{var e,n;(n=(e=m.value)==null?void 0:e.blur)==null||n.call(e)},ue=e=>{i("focus",e)},se=e=>{var n;u.userInput=null,i("blur",e),r.validateEvent&&((n=p==null?void 0:p.validate)==null||n.call(p,"blur").catch(a=>X()))},z=()=>{u.currentValue!==r.modelValue&&(u.currentValue=r.modelValue)};return ce(()=>r.modelValue,(e,n)=>{const a=$(e,!0);u.userInput===null&&a!==n&&(u.currentValue=a)},{immediate:!0}),de(()=>{var e;const{min:n,max:a,modelValue:s}=r,o=(e=m.value)==null?void 0:e.input;if(o.setAttribute("role","spinbutton"),Number.isFinite(a)?o.setAttribute("aria-valuemax",String(a)):o.removeAttribute("aria-valuemax"),Number.isFinite(n)?o.setAttribute("aria-valuemin",String(n)):o.removeAttribute("aria-valuemin"),o.setAttribute("aria-valuenow",u.currentValue||u.currentValue===0?String(u.currentValue):""),o.setAttribute("aria-disabled",String(V.value)),!b(s)&&s!=null){let f=Number(s);Number.isNaN(f)&&(f=null),i(h,f)}}),me(()=>{var e,n;const a=(e=m.value)==null?void 0:e.input;a==null||a.setAttribute("aria-valuenow",`${(n=u.currentValue)!=null?n:""}`)}),N({focus:re,blur:le}),(e,n)=>(v(),K("div",{class:L([t(c).b(),t(c).m(t(U)),t(c).is("disabled",t(V)),t(c).is("without-controls",!e.controls),t(c).is("controls-right",t(k))]),onDragstart:n[1]||(n[1]=T(()=>{},["prevent"]))},[e.controls?H((v(),K("span",{key:0,role:"button","aria-label":t(E)("el.inputNumber.decrease"),class:L([t(c).e("decrease"),t(c).is("disabled",t(w))]),onKeydown:A(M,["enter"])},[O(t(J),null,{default:W(()=>[t(k)?(v(),P(t(Ee),{key:0})):(v(),P(t(we),{key:1}))]),_:1})],42,xe)),[[t(Q),M]]):j("v-if",!0),e.controls?H((v(),K("span",{key:1,role:"button","aria-label":t(E)("el.inputNumber.increase"),class:L([t(c).e("increase"),t(c).is("disabled",t(R))]),onKeydown:A(D,["enter"])},[O(t(J),null,{default:W(()=>[t(k)?(v(),P(t(ge),{key:0})):(v(),P(t(_e),{key:1}))]),_:1})],42,Be)),[[t(Q),D]]):j("v-if",!0),O(t(fe),{id:e.id,ref_key:"input",ref:m,type:"number",step:e.step,"model-value":t(x),placeholder:e.placeholder,readonly:e.readonly,disabled:t(V),size:t(U),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:n[0]||(n[0]=T(()=>{},["prevent"])),onKeydown:[A(T(D,["prevent"]),["up"]),A(T(M,["prevent"]),["down"])],onBlur:se,onFocus:ue,onInput:te,onChange:ae},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}});var ze=Se(Me,[["__file","input-number.vue"]]);const Re=Pe(ze);export{Re as E,Q as v};
