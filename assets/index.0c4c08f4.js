import{H as d}from"./index.6fe87066.js";import{f as m,E as f,o as i,h as c,V,u as x,G as _,_ as v}from"./app.0bb1a7b5.js";const y=m({__name:"index",props:{modelValue:{type:Boolean,required:!0,default:!1},text:{type:Array,default:()=>["\u662F","\u5426"]}},emits:["update:modelValue"],setup(l,{emit:s}){const a=l,[u,r]=a.text,n=[{label:u,value:!0},{label:r,value:!1}],e=f({get:()=>a.modelValue,set:t=>s("update:modelValue",t)});return(t,o)=>(i(),c(d,V({modelValue:x(e),"onUpdate:modelValue":o[0]||(o[0]=p=>_(e)?e.value=p:null),options:n},t.$attrs),null,16,["modelValue"]))}}),C=v(y,[["__file","index.vue"]]);export{C as H};
