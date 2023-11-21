import{E as u,W as y,D as B}from"./document.119ae42e.js";import{H as f}from"./index.54b0ed6b.js";import{E as A}from"./index.73c90c75.js";import{E as V}from"./index.f26f2e97.js";import{E as x}from"./index.d8710a2c.js";import{f as F,g as c,o as r,h,w as s,d as a,u as n,a as e,t as _,a4 as w,b as g,a0 as q,_ as E,c as I,e as N}from"./app.8c8a4a35.js";import"./useChoice.6338fda7.js";import"./directive.892e4149.js";import"./index.28de6ddf.js";import"./validator.b33499a8.js";import"./index.acda1572.js";const O=F({__name:"example",setup(b){const l=["\u5C0F\u9F99\u867E","\u6BDB\u8840\u65FA","\u5241\u6912\u9C7C\u5934","\u51B0\u6FC0\u51CC"],d=()=>new Promise(i=>{setTimeout(()=>{i(Array.from({length:5},t=>Math.ceil(Math.random()*1e4)))},1e3)}),p=c(""),m=c(1),k=c(!1),v=c(!0),C=()=>{v.value=!1,q(()=>{v.value=!0})},D=i=>{p.value=i?[]:""};return(i,t)=>(r(),h(y,null,{default:s(()=>[a(n(u),{label:"\u5C55\u793A\u533A"},{default:s(()=>[a(f,{modelValue:p.value,"onUpdate:modelValue":t[0]||(t[0]=o=>p.value=o),options:l,multiple:k.value},null,8,["modelValue","multiple"])]),_:1}),a(n(u),{label:"\u53C2\u6570\uFF1A\u5355/\u591A\u9009"},{default:s(()=>[a(n(A),{modelValue:k.value,"onUpdate:modelValue":t[1]||(t[1]=o=>k.value=o),"active-text":"\u591A\u9009","inactive-text":"\u5355\u9009","active-value":!0,"inactive-value":!1,onChange:D},null,8,["modelValue"])]),_:1}),a(n(u),{label:"\u7ED3\u679C"},{default:s(()=>[e("span",null,_(p.value),1)]),_:1}),a(n(u)),a(n(u),{label:"\u5C55\u793A\u533A\uFF1A\u6A21\u62DF\u5F02\u6B65"},{default:s(()=>[a(n(V),null,{default:s(()=>[v.value?(r(),h(f,{key:0,modelValue:m.value,"onUpdate:modelValue":t[2]||(t[2]=o=>m.value=o),options:d},null,8,["modelValue"])):w("v-if",!0),a(n(x),{onClick:C},{default:s(()=>[g("\u91CD\u65B0\u52A0\u8F7D")]),_:1})]),_:1})]),_:1}),a(n(u),{label:"\u7ED3\u679C"},{default:s(()=>[e("span",null,_(m.value),1)]),_:1})]),_:1}))}}),P=E(O,[["__file","example.vue"]]),S=F({__name:"usage",setup(b){const l={params:[{param:"*v-model",description:"\u7ED1\u5B9A\u503C",type:"Value | Value[]",defaultValue:"-"},{param:"*options",description:"\u9009\u9879\u6570\u636E\uFF0C\u53EF\u4EE5\u662F Promise \u6570\u636E",type:"IChoiceOption | (() => Promise<IChoiceOption>)",defaultValue:"[]"},{param:"multiple",description:"\u662F\u5426\u591A\u9009",type:"boolean",defaultValue:"false"},{param:"name",description:"\u4F7F\u7528 localStorage \u7F13\u5B58\u65F6\u7684 key\uFF0C\u7A7A\u4E0D\u7F13\u5B58",type:"string",defaultValue:""},{param:"loadingText",description:"\u52A0\u8F7D\u6587\u6848",type:"string",defaultValue:"\u52A0\u8F7D\u4E2D"},{param:"props",description:"\u914D\u7F6E\u9009\u9879\uFF0C\u7528\u4E8E\u6307\u5B9A\u6570\u636E\u7684 key",type:"IChoiceOptionProps",defaultValue:"-"},{param:"expires",description:"\u5BF9\u6570\u636E\u8FDB\u884C localStorage \u7F13\u5B58\uFF0C\u6307\u5B9A\u65E5\u671F\u5230\u671F\u6216\u8005 X \u79D2\u540E\u5931\u6548\u3002\u4E0D\u7F13\u5B58\u8BBE\u7F6E\u4E3A 0",type:"Date | number",defaultValue:"7200"},{param:"\u5176\u4ED6",description:"el-radio \u7684\u5C5E\u6027\u3001\u4E8B\u4EF6",type:"https://element-plus.gitee.io/zh-CN/component/radio.html#radio-group-%E5%B1%9E%E6%80%A7"},{param:"\u5176\u4ED6",description:"el-checkbox \u7684\u5C5E\u6027\u3001\u4E8B\u4EF6",type:"https://element-plus.gitee.io/zh-CN/component/checkbox.html#checkbox-%E5%B1%9E%E6%80%A7"}],types:[{param:"Value",description:"string | number | boolean"},{param:"IChoiceOption",description:"IOption[] | string[] | number[]"},{param:"IChoiceOptionProps",description:"{ key: string; value: string; label: string}"},{param:"IOption",description:"{ label: string; value: Value, key?: string }"}],events:[{name:"init",description:"options \u4E3A\u5F02\u6B65\u65F6\uFF0C\u52A0\u8F7D\u5B8C\u6210\u7684\u56DE\u8C03",param:"options"},{name:"change",description:"\u9009\u62E9\u53D8\u5316\u65F6\u7684\u89E6\u53D1",param:"value"}]};return(d,p)=>(r(),h(B,{data:l}))}}),W=E(S,[["__file","usage.vue"]]),H=e("h2",{id:"\u529F\u80FD",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u529F\u80FD","aria-hidden":"true"},"#"),g(" \u529F\u80FD")],-1),T=e("p",null,"\u57FA\u4E8E el-radio \u548C el-checkbox\uFF0C\u7528\u4E8E\u5355\u9009\u548C\u591A\u9009\u5171\u7528\u4E00\u4E2A\u7EC4\u4EF6\u65B9\u4FBF\u5207\u6362\u3002",-1),U=e("p",null,"\u5EFA\u8BAE\u7528\u4E8E 2 - 5 \u4E2A\u9009\u9879\u65F6\u7684\u573A\u666F\uFF0C 5 - 20 \u4E2A\u5EFA\u8BAE\u4F7F\u7528select",-1),z=e("h2",{id:"\u529F\u80FD\u793A\u4F8B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u529F\u80FD\u793A\u4F8B","aria-hidden":"true"},"#"),g(" \u529F\u80FD\u793A\u4F8B")],-1),M=N(`<h2 id="\u6700\u5C0F\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6700\u5C0F\u793A\u4F8B" aria-hidden="true">#</a> \u6700\u5C0F\u793A\u4F8B</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HChoice</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>result<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Wrapper <span class="token keyword">from</span> <span class="token string">&#39;@/components/simple-wrapper.vue&#39;</span>
<span class="token keyword">import</span> HChoice <span class="token keyword">from</span> <span class="token string">&#39;../index.vue&#39;</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;\u5C0F\u9F99\u867E&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6BDB\u8840\u65FA&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5241\u6912\u9C7C\u5934&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u51B0\u6FC0\u51CC&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;\u6BDB\u8840\u65FA&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>`,3),$={__name:"choice.html",setup(b){return(l,d)=>(r(),I("div",null,[H,T,U,z,a(P),M,a(W)]))}},na=E($,[["__file","choice.html.vue"]]);export{na as default};
