import{q as V,f as G,B as d,g as E,H as T,I as x,o,c as v,a as B,u as a,X as u,ar as ee,h as r,w as p,a3 as y,a4 as c,t as N,d as ae,P as U,Y as _,af as te,a0 as ie,as as H,E as oe}from"./app.102c0a36.js";import{d as ne,A as S,B as le,U as A,e as k,i as P,C as D,I as z,l as se,f as re,j as ce,m as ue,h as de,F as ve,n as fe,G as h,H as pe,_ as he,J as me,w as ye}from"./document.d036075a.js";import{i as be}from"./validator.8b0da09f.js";import{u as ge}from"./index.03f8fb2b.js";const Ce=ne({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:be},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:S},activeActionIcon:{type:S},activeIcon:{type:S},inactiveIcon:{type:S},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:le(Function)},id:String,tabindex:{type:[String,Number]},value:{type:[Boolean,String,Number],default:!1},label:{type:String,default:void 0}}),Ie={[A]:s=>k(s)||V(s)||P(s),[D]:s=>k(s)||V(s)||P(s),[z]:s=>k(s)||V(s)||P(s)},Se=["onClick"],ke=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],we=["aria-hidden"],Ve=["aria-hidden"],Ee=["aria-hidden"],F="ElSwitch",Te=G({name:F}),Be=G({...Te,props:Ce,emits:Ie,setup(s,{expose:L,emit:f}){const t=s,$=oe(),{formItem:b}=se(),j=re(),i=ce("switch");(e=>{e.forEach(l=>{ge({from:l[0],replacement:l[1],scope:F,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},d(()=>{var I;return!!((I=$.vnode.props)!=null&&I[l[2]])}))})})([['"value"','"model-value" or "v-model"',"value"],['"active-color"',"CSS var `--el-switch-on-color`","activeColor"],['"inactive-color"',"CSS var `--el-switch-off-color`","inactiveColor"],['"border-color"',"CSS var `--el-switch-border-color`","borderColor"]]);const{inputId:q}=ue(t,{formItemContext:b}),g=de(d(()=>t.loading)),w=E(t.modelValue!==!1),m=E(),J=E(),R=d(()=>[i.b(),i.m(j.value),i.is("disabled",g.value),i.is("checked",n.value)]),W=d(()=>[i.e("label"),i.em("label","left"),i.is("active",!n.value)]),X=d(()=>[i.e("label"),i.em("label","right"),i.is("active",n.value)]),Y=d(()=>({width:ve(t.width)}));T(()=>t.modelValue,()=>{w.value=!0}),T(()=>t.value,()=>{w.value=!1});const K=d(()=>w.value?t.modelValue:t.value),n=d(()=>K.value===t.activeValue);[t.activeValue,t.inactiveValue].includes(K.value)||(f(A,t.inactiveValue),f(D,t.inactiveValue),f(z,t.inactiveValue)),T(n,e=>{var l;m.value.checked=e,t.validateEvent&&((l=b==null?void 0:b.validate)==null||l.call(b,"change").catch(I=>fe()))});const C=()=>{const e=n.value?t.inactiveValue:t.activeValue;f(A,e),f(D,e),f(z,e),ie(()=>{m.value.checked=n.value})},M=()=>{if(g.value)return;const{beforeChange:e}=t;if(!e){C();return}const l=e();[H(l),k(l)].includes(!0)||me(F,"beforeChange must return type `Promise<boolean>` or `boolean`"),H(l)?l.then(O=>{O&&C()}).catch(O=>{}):l&&C()},Q=d(()=>i.cssVarBlock({...t.activeColor?{"on-color":t.activeColor}:null,...t.inactiveColor?{"off-color":t.inactiveColor}:null,...t.borderColor?{"border-color":t.borderColor}:null})),Z=()=>{var e,l;(l=(e=m.value)==null?void 0:e.focus)==null||l.call(e)};return x(()=>{m.value.checked=n.value}),L({focus:Z,checked:n}),(e,l)=>(o(),v("div",{class:u(a(R)),style:_(a(Q)),onClick:te(M,["prevent"])},[B("input",{id:a(q),ref_key:"input",ref:m,class:u(a(i).e("input")),type:"checkbox",role:"switch","aria-checked":a(n),"aria-disabled":a(g),"aria-label":e.label,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(g),tabindex:e.tabindex,onChange:C,onKeydown:ee(M,["enter"])},null,42,ke),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(o(),v("span",{key:0,class:u(a(W))},[e.inactiveIcon?(o(),r(a(h),{key:0},{default:p(()=>[(o(),r(y(e.inactiveIcon)))]),_:1})):c("v-if",!0),!e.inactiveIcon&&e.inactiveText?(o(),v("span",{key:1,"aria-hidden":a(n)},N(e.inactiveText),9,we)):c("v-if",!0)],2)):c("v-if",!0),B("span",{ref_key:"core",ref:J,class:u(a(i).e("core")),style:_(a(Y))},[e.inlinePrompt?(o(),v("div",{key:0,class:u(a(i).e("inner"))},[e.activeIcon||e.inactiveIcon?(o(),r(a(h),{key:0,class:u(a(i).is("icon"))},{default:p(()=>[(o(),r(y(a(n)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(o(),v("span",{key:1,class:u(a(i).is("text")),"aria-hidden":!a(n)},N(a(n)?e.activeText:e.inactiveText),11,Ve)):c("v-if",!0)],2)):c("v-if",!0),B("div",{class:u(a(i).e("action"))},[e.loading?(o(),r(a(h),{key:0,class:u(a(i).is("loading"))},{default:p(()=>[ae(a(pe))]),_:1},8,["class"])):a(n)?U(e.$slots,"active-action",{key:1},()=>[e.activeActionIcon?(o(),r(a(h),{key:0},{default:p(()=>[(o(),r(y(e.activeActionIcon)))]),_:1})):c("v-if",!0)]):a(n)?c("v-if",!0):U(e.$slots,"inactive-action",{key:2},()=>[e.inactiveActionIcon?(o(),r(a(h),{key:0},{default:p(()=>[(o(),r(y(e.inactiveActionIcon)))]),_:1})):c("v-if",!0)])],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(o(),v("span",{key:1,class:u(a(X))},[e.activeIcon?(o(),r(a(h),{key:0},{default:p(()=>[(o(),r(y(e.activeIcon)))]),_:1})):c("v-if",!0),!e.activeIcon&&e.activeText?(o(),v("span",{key:1,"aria-hidden":!a(n)},N(e.activeText),9,Ee)):c("v-if",!0)],2)):c("v-if",!0)],14,Se))}});var Ne=he(Be,[["__file","switch.vue"]]);const Ke=ye(Ne);export{Ke as E};
