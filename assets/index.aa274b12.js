import{f as _,g,E as y,J as k,Z as x,u as i,az as C,o as D,h as E,ay as b,w as $,U as h,V as w,G as I,a8 as B,a4 as v,_ as T}from"./app.0bb1a7b5.js";import{E as U}from"./index.16883dec.js";import{L as H}from"./document.a03dcdd3.js";const L=_({__name:"index",props:{modelValue:{type:String,default:""},formatValue:{type:String,default:""},option:{type:Object,default:()=>({decimalScale:2,integerScale:12})},padDecimal:{type:Boolean,default:!0}},emits:["update:modelValue","update:formatValue","change"],setup(c,{emit:l}){const t=c,r=e=>{let a=e.replace(/[^\d\.]/g,"").replace(/^0(\d{1,}\.?)+?/,"$1").replace(/^\./,"").replace(/\.{1,}/g,".");const o=a.split(".");if(o.length>1){const[s,u]=o;a=`${s}.${u}`}return a},d=e=>{if(t.padDecimal&&t.option.decimalScale>0&&e!==t.option.prefix){const[a,o=""]=e.split(".");return`${a}.${o.padEnd(t.option.decimalScale,"0")}`}return e},m=()=>{const{modelValue:e}=t,a=t.option.prefix||"";if(e==="")return l("update:formatValue",a),a;const o=e.toString().charAt(e.length-1)==="."?".":"",s=a+(+r(t.modelValue)).toLocaleString("en-US")+o,u=d(s);return l("update:formatValue",u),s},f=g(),n=y({get:()=>m(),set:e=>{l("update:modelValue",r(e))}}),V=e=>{const a=r(e).replace(/\.$/,"");n.value=a,l("change",[a,d(e).replace(/\.$/,"")])},p=g(!0),S=y(()=>({...t.option,padDecimal:t.padDecimal}));return k(S,(e,a)=>{H(e,a)||(p.value=!1,v(()=>{p.value=!0,setTimeout(()=>{n.value=f.value.input.value,v(()=>{V(m())})},100)}))}),(e,a)=>p.value?x((D(),E(i(U),w({key:0,ref_key:"elInput",ref:f,modelValue:i(n),"onUpdate:modelValue":a[0]||(a[0]=o=>I(n)?n.value=o:null)},e.$attrs,{class:e.$style.main,onChange:V}),b({_:2},[e.$slots.prepend?{name:"prepend",fn:$(()=>[h(e.$slots,"prepend")]),key:"0"}:void 0,e.$slots.append?{name:"append",fn:$(()=>[h(e.$slots,"append")]),key:"1"}:void 0]),1040,["modelValue","class"])),[[i(C),c.option]]):B("v-if",!0)}}),M="_main_m3b07_1",j={main:M},q={$style:j},J=T(L,[["__cssModules",q],["__file","index.vue"]]);export{J as H};
