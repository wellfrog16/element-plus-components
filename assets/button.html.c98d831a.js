import{E as u,W as y,D as F}from"./document.119ae42e.js";import{H as A}from"./index.54b0ed6b.js";import{u as C}from"./useExample.554dfd77.js";import{H as t}from"./index.50cecd2a.js";import{f as _,g as h,o as c,h as b,w as n,d as a,a as i,b as e,X as f,u as p,t as z,_ as r,c as x,e as B}from"./app.8c8a4a35.js";import"./useChoice.6338fda7.js";import"./directive.892e4149.js";import"./index.28de6ddf.js";import"./index.8e8fcb18.js";import"./index.a4168fd9.js";import"./index.79ea03a9.js";import"./index.073cce04.js";import"./isBoolean.344d92a7.js";import"./index.d8710a2c.js";import"./index.acda1572.js";import"./index.a0761fdb.js";import"./typescript.72bf8adc.js";import"./index.31f66c9b.js";import"./index.0ebb197b.js";import"./scroll.16fc5126.js";import"./aria.ff564609.js";import"./validator.b33499a8.js";const D=_({__name:"example",setup(d){C();const s=h(""),o=[{label:"\u9ED8\u8BA4",value:""},{label:"\u5C0F",value:"small"},{label:"\u5927",value:"large"}],l=h(0),m=()=>{l.value+=1};return(k,g)=>(c(),b(y,null,{default:n(({direction:v})=>[a(p(u),{label:"\u5C55\u793A\u533A"},{default:n(()=>[i("div",{class:f(k.$style[v])},[a(t,{icon:{name:"Search"},type:"primary",size:s.value},{default:n(()=>[e("Eleme \u56FE\u6807")]),_:1},8,["size"]),a(t,{icon:{type:"awesome",name:"fas fa-dog"},type:"primary",size:s.value},{default:n(()=>[e("Awesome \u56FE\u6807")]),_:1},8,["size"]),a(t,{icon:{type:"svg",name:"test"},type:"primary",size:s.value},{default:n(()=>[e("SVG \u56FE\u6807")]),_:1},8,["size"])],2),i("div",{class:f(k.$style[v])},[a(t,{icon:{name:"Search",position:"right"},type:"primary",size:s.value},{default:n(()=>[e("Eleme \u56FE\u6807")]),_:1},8,["size"]),a(t,{icon:{type:"awesome",name:"fas fa-dog",position:"right"},type:"primary",size:s.value},{default:n(()=>[e("Awesome \u56FE\u6807")]),_:1},8,["size"]),a(t,{icon:{type:"svg",name:"test",position:"right"},type:"primary",size:s.value},{default:n(()=>[e("SVG \u56FE\u6807")]),_:1},8,["size"])],2)]),_:2},1024),a(p(u),{label:"\u53C2\u6570\uFF1A\u5927\u5C0F"},{default:n(()=>[a(A,{modelValue:s.value,"onUpdate:modelValue":g[0]||(g[0]=E=>s.value=E),options:o},null,8,["modelValue"])]),_:1}),a(p(u),{label:"\u5C55\u793A\u533A\uFF1A\u8282\u6D41"},{default:n(()=>[a(t,{type:"primary",size:s.value,onClick:m},{default:n(()=>[e("\u5FEB\u901F\u70B9\u51FB")]),_:1},8,["size"])]),_:1}),a(p(u),{label:"\u5C55\u793A\u533A\uFF1A\u63D0\u793A"},{default:n(()=>[a(t,{type:"warning",size:s.value,onClick:m},{default:n(()=>[e("\u70B9\u51FB\u4F1A\u6709\u4E8C\u6B21\u786E\u8BA4")]),_:1},8,["size"])]),_:1}),a(p(u),{label:"\u7ED3\u679C"},{default:n(()=>[i("div",null,"\u8282\u6D41\u95F4\u9694 800 \u6BEB\u79D2\uFF0C\u6267\u884C\u6B21\u6570\uFF1A"+z(l.value),1)]),_:1})]),_:1}))}}),w="_vertical_t5rs9_1",V="_horizontal_t5rs9_10",q={vertical:w,horizontal:V},H={$style:q},I=r(D,[["__cssModules",H],["__file","example.vue"]]),S=_({__name:"usage",setup(d){const s={params:[{param:"time",description:"\u70B9\u51FB\u65F6\u7684\u8282\u6D41\u95F4\u9694\uFF0C\u5355\u4F4D\u6BEB\u79D2",type:"number",defaultValue:"800"},{param:"confirm",description:"\u624B\u52A8\u8BBE\u7F6E\u662F\u5426\u663E\u793A\u4E8C\u6B21\u786E\u8BA4\u6846",type:"boolean",defaultValue:"-"},{param:"confirmInfo",description:"\u4E8C\u6B21\u786E\u8BA4\u6846\u6587\u6848",type:"IConfirmInfo",defaultValue:"\u4E0B\u4E00\u884C"},{param:"-",rowType:"defaultValue",description:"{ title: '\u63D0\u793A', confirmButtonText: '\u786E\u5B9A', cancelButtonText: '\u53D6\u6D88', msg: '\u786E\u8BA4\u8981\u5220\u9664\u8FD9\u6761\u6570\u636E\u5417' }"},{param:"*icon",description:"icon \u7684\u8BBE\u7F6E\u4FE1\u606F",type:"IIconOption",defaultValue:"-"},{param:"\u5176\u4ED6",description:"el-button \u7684\u5C5E\u6027\u3001\u4E8B\u4EF6",type:"https://element-plus.gitee.io/zh-CN/component/button.html#button-%E5%B1%9E%E6%80%A7",defaultValue:"-"}],types:[{param:"IIconOption",description:"{ type: el | svg | awesome, name: string, position: left | right }"},{param:"IConfirmInfo",description:"{ title?: string, confirmButtonText?: string, cancelButtonText?: string, msg?: string }"}]};return(o,l)=>(c(),b(F,{data:s}))}}),T=r(S,[["__file","usage.vue"]]),N=B('<h2 id="\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a> \u529F\u80FD</h2><p>\u5168\u91CF\u5F15\u5165<code>icon</code>\u540E\uFF0C\u5F3A\u5316<code>el-button</code>\uFF0C\u690D\u5165<code>icon</code>\u3002</p><ul><li>\u652F\u6301\u53D8\u91CF</li><li>\u652F\u6301<code>el-icon</code>\u3001<code>svg-icon</code>\u3001<code>awesome-icon</code></li></ul><h2 id="\u529F\u80FD\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD\u793A\u4F8B" aria-hidden="true">#</a> \u529F\u80FD\u793A\u4F8B</h2>',4),W=B(`<h2 id="\u6700\u5C0F\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6700\u5C0F\u793A\u4F8B" aria-hidden="true">#</a> \u6700\u5C0F\u793A\u4F8B</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ name: &#39;Search&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Eleme \u56FE\u6807<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ type: &#39;awesome&#39;, name: &#39;fas fa-dog&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Awesome \u56FE\u6807<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ type: &#39;svg&#39;, name: &#39;test&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>SVG \u56FE\u6807<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Wrapper <span class="token keyword">from</span> <span class="token string">&#39;@/components/simple-wrapper.vue&#39;</span>
<span class="token keyword">import</span> HButton <span class="token keyword">from</span> <span class="token string">&#39;../index.vue&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>`,3),$={__name:"button.html",setup(d){return(s,o)=>(c(),x("div",null,[N,a(I),W,a(T)]))}},la=r($,[["__file","button.html.vue"]]);export{la as default};
