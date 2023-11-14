import{E as m,W as N,D as $}from"./document.cdfca6ca.js";import{H as I}from"./index.e6d443f4.js";import{H as U}from"./index.db5c4cc3.js";import{f as x,ai as S,g as v,M as W,E as _,o as k,c as F,u as n,U as q,a8 as w,h as B,V as H,G as P,a0 as M,c0 as R,b$ as T,a4 as j,_ as E,w as p,d as s,b as V,t as G,a as b,e as K}from"./app.b12c36a8.js";import{E as O}from"./index.aa6c6915.js";import{E as J,a as C}from"./index.4abc46f8.js";import{E as L}from"./index.99b7c742.js";import"./useChoice.08ff5ed5.js";import"./directive.ef0eb58f.js";import"./use-global-config.d5b29c73.js";import"./index.747f5a0c.js";import"./index.551deb46.js";import"./typescript.72bf8adc.js";import"./index.870720e7.js";import"./index.bcaba903.js";import"./index.c1a5335a.js";import"./scroll.a766c1a0.js";import"./validator.e3c1bc52.js";const Q={key:0,class:"el-input-group__prepend"},X=x({__name:"index",props:{modelValue:{default:0},precision:{default:0},controlsPosition:null,size:null,inputNumberClass:null,inputWidth:{default:"80px"}},emits:["update:modelValue","change","blur"],setup(r,{emit:o}){const t=r;R(a=>({"7a758216":r.inputWidth}));const c=S(),i=T(),f=v(!0),d=W(),h=_(()=>{var l;const a={[i["input-number"]]:!0,"el-input":!0,"el-input-group--prepend":c.prepend,"input-with-select":(l=d.value)==null?void 0:l.querySelector(".el-input-group__prepend>.el-select")};return t.size&&(a[`el-input--${t.size}`]=!0),a}),A=_(()=>c.prepend&&t.controlsPosition===void 0?"right":t.controlsPosition),e=_({get:()=>t.modelValue,set:a=>{const l=a===null?e.value:a;o("update:modelValue",l)}}),u=a=>{const l=a.key;return l==="e"||l==="E"||t.precision===0&&l==="."?(a.preventDefault(),!1):!0},z=(a,l)=>{e.value=a===0?a:a||l||0,o("change",e.value,l||0)},D=a=>{var g;((g=d.value)==null?void 0:g.querySelector(".el-input__inner[type=number]")).value===""&&(f.value=!1,j(()=>f.value=!0)),o("blur",a)};return(a,l)=>(k(),F("div",{ref_key:"eleInputNumber",ref:d,class:M(n(h))},[n(c).prepend?(k(),F("div",Q,[q(a.$slots,"prepend")])):w("v-if",!0),f.value?(k(),B(n(O),H({key:1,modelValue:n(e),"onUpdate:modelValue":l[0]||(l[0]=g=>P(e)?e.value=g:null)},a.$attrs,{size:r.size,"step-strictly":"",class:[r.inputNumberClass,n(i)["el-input-number"]],precision:r.precision,"controls-position":n(A),onKeydown:u,onChange:z,onBlur:D}),null,16,["modelValue","size","class","precision","controls-position"])):w("v-if",!0)],2))}}),Y={"input-number":"_input-number_199yu_1","el-input-number":"_el-input-number_199yu_18"},Z={$style:Y},y=E(X,[["__cssModules",Z],["__file","index.vue"]]),ee=x({__name:"example",setup(r){const o=v(!0),t=v(1),c=v("c"),i=v("default"),f=["large","default","small"],d=v(150),h=_(()=>`${d.value}px`);return(A,e)=>(k(),B(N,null,{default:p(()=>[s(n(m),{label:"\u5C55\u793A\u533A"},{default:p(()=>[s(y,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=u=>t.value=u),size:i.value,controls:o.value,"input-width":n(h)},null,8,["modelValue","size","controls","input-width"])]),_:1}),s(n(m),{label:"\u5C55\u793A\u533A\uFF1A\u6587\u5B57\u7EC4\u5408"},{default:p(()=>[s(y,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=u=>t.value=u),size:i.value,controls:o.value,"input-width":n(h)},{prepend:p(()=>[V("\u4EFD\u6570")]),_:1},8,["modelValue","size","controls","input-width"])]),_:1}),s(n(m),{label:"\u5C55\u793A\u533A\uFF1ASelect \u7EC4\u5408"},{default:p(()=>[s(y,{modelValue:t.value,"onUpdate:modelValue":e[3]||(e[3]=u=>t.value=u),size:i.value,controls:o.value,"input-width":n(h)},{prepend:p(()=>[s(n(J),{modelValue:c.value,"onUpdate:modelValue":e[2]||(e[2]=u=>c.value=u),placeholder:"\u8BF7\u9009\u62E9",style:{width:"110px"},size:i.value},{default:p(()=>[s(n(C),{label:"\u897F\u74DC",value:"a"}),s(n(C),{label:"\u9999\u8549",value:"b"}),s(n(C),{label:"\u54C8\u5BC6\u74DC",value:"c"})]),_:1},8,["modelValue","size"])]),_:1},8,["modelValue","size","controls","input-width"])]),_:1}),s(n(m),{label:"\u53C2\u6570\uFF1A\u5927\u5C0F"},{default:p(()=>[s(I,{modelValue:i.value,"onUpdate:modelValue":e[4]||(e[4]=u=>i.value=u),options:f},null,8,["modelValue"])]),_:1}),s(n(m),{label:"\u53C2\u6570\uFF1A\u663E\u793A\u63A7\u5236\u5668"},{default:p(()=>[s(U,{modelValue:o.value,"onUpdate:modelValue":e[5]||(e[5]=u=>o.value=u)},null,8,["modelValue"])]),_:1}),s(n(m),{label:"\u5BBD\u5EA6"},{default:p(()=>[s(n(L),{modelValue:d.value,"onUpdate:modelValue":e[6]||(e[6]=u=>d.value=u),min:50,max:200},null,8,["modelValue"])]),_:1}),s(n(m),{label:"\u7ED3\u679C"},{default:p(()=>[V(G(t.value),1)]),_:1})]),_:1}))}}),ne=E(ee,[["__file","example.vue"]]),se=x({__name:"usage",setup(r){const o={params:[{param:"precision",description:"\u7CBE\u5EA6",type:"number",defaultValue:"0"},{param:"inputNumberClass",description:"\u9644\u52A0\u5230 el-input-number \u7684 class",type:"string",defaultValue:"-"},{param:"inputWidth",description:"el-input-number \u7684\u5BBD\u5EA6",type:"string",defaultValue:"80px"},{param:"\u5176\u4ED6",description:"el-input-number \u7684\u5C5E\u6027\u3001\u4E8B\u4EF6",type:"https://element-plus.org/zh-CN/component/input-number.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"}],slots:[{name:"prepend",description:"\u8F93\u5165\u6846\u524D\u7F6E\u5185\u5BB9\uFF0C\u652F\u6301\u6587\u6848\u548C select\u3002\u4F7F\u7528\u63D2\u69FD\u65F6\uFF0Ccontrols-position \u9ED8\u8BA4\u8BBE\u7F6E\u4E3A right"}]};return(t,c)=>(k(),B($,{data:o}))}}),ae=E(se,[["__file","usage.vue"]]),te=b("h2",{id:"\u529F\u80FD",tabindex:"-1"},[b("a",{class:"header-anchor",href:"#\u529F\u80FD","aria-hidden":"true"},"#"),V(" \u529F\u80FD")],-1),ue=b("p",null,"\u57FA\u4E8E input-number\uFF0C\u5C4F\u853D\u79D1\u5B66\u8BA1\u6570\u6CD5\u7684 e\uFF0C\u5904\u7406 +\u3001- \u7B26\u53F7\u7B49",-1),le=b("p",null,"\u589E\u52A0 perpend \u63D2\u69FD\uFF0C\u652F\u6301\u6587\u6848\u548C select\uFF0C\u7528\u4E8E\u589E\u5F3A\u5C55\u793A\u3002",-1),oe=b("h2",{id:"\u529F\u80FD\u793A\u4F8B",tabindex:"-1"},[b("a",{class:"header-anchor",href:"#\u529F\u80FD\u793A\u4F8B","aria-hidden":"true"},"#"),V(" \u529F\u80FD\u793A\u4F8B")],-1),pe=K(`<h2 id="\u6700\u5C0F\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6700\u5C0F\u793A\u4F8B" aria-hidden="true">#</a> \u6700\u5C0F\u793A\u4F8B</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HInputNumber</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>result<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Wrapper <span class="token keyword">from</span> <span class="token string">&#39;@/components/simple-wrapper.vue&#39;</span>
<span class="token keyword">import</span> HInputNumber <span class="token keyword">from</span> <span class="token string">&#39;../index.vue&#39;</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>`,3),ie={__name:"input-number.html",setup(r){return(o,t)=>(k(),F("div",null,[te,ue,le,oe,s(ne),pe,s(ae)]))}},Ae=E(ie,[["__file","input-number.html.vue"]]);export{Ae as default};
