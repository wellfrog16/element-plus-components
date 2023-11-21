import{E as r,W as R,D as W}from"./document.119ae42e.js";import{H as x}from"./index.80a6591d.js";import{H as $}from"./index.3448bbb5.js";import{H as S}from"./index.33c28ed7.js";import{E as P,a as T}from"./index.ec1b8a05.js";import{f as N,z as A,g as m,P as Y,o as p,h as g,av as I,w as l,u as n,Y as z,c as F,aj as J,F as q,a4 as U,X as w,b as V,t as k,T as K,J as L,_ as D,d as t,a as d,r as M,e as O}from"./app.8c8a4a35.js";import"./index.54b0ed6b.js";import"./useChoice.6338fda7.js";import"./directive.892e4149.js";import"./index.28de6ddf.js";import"./index.a0761fdb.js";import"./typescript.72bf8adc.js";import"./index.31f66c9b.js";import"./isEqual.af43be9c.js";import"./index.d6f07aca.js";import"./scroll.16fc5126.js";import"./validator.b33499a8.js";const B=[{code:"CNY",flag:"CHN",option:{prefix:"\xA5",decimalScale:2,integerScale:20}},{code:"USD",flag:"USA",option:{prefix:"$",decimalScale:2,integerScale:20}},{code:"JPY",flag:"JPN",option:{prefix:"\xA5",decimalScale:0,integerScale:20}},{code:"EUR",flag:"EU",option:{prefix:"\u20AC",decimalScale:2,integerScale:20}},{code:"TWD",flag:"CHN",option:{prefix:"NT$",decimalScale:0,integerScale:20}},{code:"KRW",flag:"KOR",option:{prefix:"\u20A9",decimalScale:0,integerScale:20}}],j={key:0},X={key:1},G=N({__name:"index",props:{modelValue:{type:String,required:!0},code:{type:[Array,String],required:!0},flag:{type:Boolean,default:!1},prefix:{type:Boolean,default:!0},prepend:{type:Boolean,default:!0},append:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(v,{emit:y}){const o=v,i=A({get:()=>o.modelValue,set:s=>y("update:modelValue",s)}),_=A(()=>({width:o.flag?"7.5em":"6em"})),b=m(""),c=m(),f=A(()=>B.find(s=>s.code===c.value)),C=A(()=>{var s,e;return{...(s=f.value)==null?void 0:s.option,prefix:o.prefix?(e=f.value)==null?void 0:e.option.prefix:"",elInputIndex:Array.isArray(o.code)?1:0}}),u=A(()=>Array.isArray(o.code)?B.filter(s=>o.code.includes(s.code)):B.find(s=>s.code===o.code)),h=s=>{y("change",[...s,c.value])},E=s=>{h([i.value,b.value])};return Y(()=>{var s;Array.isArray(u.value)&&u.value.length>0?c.value=u.value[0].code:Array.isArray(u.value)||(c.value=(s=u.value)==null?void 0:s.code)}),(s,e)=>(p(),g($,K({modelValue:n(i),"onUpdate:modelValue":e[1]||(e[1]=a=>L(i)?i.value=a:null),"format-value":b.value,"onUpdate:format-value":e[2]||(e[2]=a=>b.value=a),option:n(C)},s.$attrs,{onChange:h}),I({_:2},[v.prepend?{name:"prepend",fn:l(()=>[Array.isArray(n(u))?(p(),g(n(P),{key:0,modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=a=>c.value=a),style:z(n(_)),onChange:E},I({default:l(()=>[(p(!0),F(q,null,J(n(u),a=>(p(),g(n(T),{key:a.code,value:a.code},{default:l(()=>[v.flag?(p(),g(S,{key:0,code:a.flag,class:w(s.$style.flag)},null,8,["code","class"])):U("v-if",!0),V(k(a.code),1)]),_:2},1032,["value"]))),128))]),_:2},[v.flag?{name:"prefix",fn:l(()=>{var a;return[n(f)?(p(),g(S,{key:0,code:(a=n(f))==null?void 0:a.flag},null,8,["code"])):U("v-if",!0)]}),key:"0"}:void 0]),1032,["modelValue","style"])):(p(),F(q,{key:1},[v.flag?(p(),g(S,{key:0,code:n(u).flag,class:w(s.$style.flag)},null,8,["code","class"])):U("v-if",!0),V(k(n(u).code),1)],64))]),key:"0"}:void 0,v.append?{name:"append",fn:l(()=>[Array.isArray(n(u))?(p(),F("span",j,k(n(f).code),1)):(p(),F("span",X,k(n(u).code),1))]),key:"1"}:void 0]),1040,["modelValue","format-value","option"]))}}),Q="_flag_8zrzb_1",Z={flag:Q},aa={$style:Z},H=D(G,[["__cssModules",aa],["__file","index.vue"]]),ea=N({__name:"example",setup(v){const y=["CNY","USD","EUR","JPY","TWD","KRW"],o=m("123456"),i=m(""),_=m(""),b=m(),c=m(!0),f=m(!0),C=m(!0),u=m(!0),h=m(!1),E=s=>{b.value=s};return(s,e)=>(p(),g(R,null,{default:l(()=>[t(n(r),{label:"\u5C55\u793A\u533A"},{default:l(()=>[t(H,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=a=>o.value=a),code:"CNY",flag:c.value,prefix:f.value,"pad-decimal":C.value,prepend:u.value,append:h.value},null,8,["modelValue","flag","prefix","pad-decimal","prepend","append"])]),_:1}),t(n(r),{label:"\u7ED3\u679C\uFF1A\u503C"},{default:l(()=>[d("span",null,k(o.value),1)]),_:1}),t(n(r)),t(n(r),{label:"\u5C55\u793A\u533A"},{default:l(()=>[t(H,{modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=a=>i.value=a),"format-value":_.value,"onUpdate:format-value":e[2]||(e[2]=a=>_.value=a),code:y,flag:c.value,prefix:f.value,"pad-decimal":C.value,prepend:u.value,append:h.value,onChange:E},null,8,["modelValue","format-value","flag","prefix","pad-decimal","prepend","append"])]),_:1}),t(n(r),{label:"\u53C2\u6570\uFF1A\u65D7\u5B50"},{default:l(()=>[t(x,{modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=a=>c.value=a)},null,8,["modelValue"])]),_:1}),t(n(r),{label:"\u53C2\u6570\uFF1A\u524D\u7F00"},{default:l(()=>[t(x,{modelValue:f.value,"onUpdate:modelValue":e[4]||(e[4]=a=>f.value=a)},null,8,["modelValue"])]),_:1}),t(n(r),{label:"\u53C2\u6570\uFF1A\u8865\u96F6"},{default:l(()=>[t(x,{modelValue:C.value,"onUpdate:modelValue":e[5]||(e[5]=a=>C.value=a)},null,8,["modelValue"])]),_:1}),t(n(r),{label:"\u53C2\u6570\uFF1Aprepend"},{default:l(()=>[t(x,{modelValue:u.value,"onUpdate:modelValue":e[6]||(e[6]=a=>u.value=a)},null,8,["modelValue"])]),_:1}),t(n(r),{label:"\u53C2\u6570\uFF1Aappend"},{default:l(()=>[t(x,{modelValue:h.value,"onUpdate:modelValue":e[7]||(e[7]=a=>h.value=a)},null,8,["modelValue"])]),_:1}),t(n(r),{label:"\u7ED3\u679C\uFF1A\u503C"},{default:l(()=>[d("span",null,k(i.value),1)]),_:1}),t(n(r),{label:"\u7ED3\u679C\uFF1A\u683C\u5F0F\u5316"},{default:l(()=>[d("span",null,k(_.value),1)]),_:1}),t(n(r),{label:"@change"},{default:l(()=>[d("span",null,k(b.value),1)]),_:1})]),_:1}))}}),na=D(ea,[["__file","example.vue"]]),sa=N({__name:"usage",setup(v){const y={params:[{param:"*v-model",description:"\u7ED1\u5B9A\u503C",type:"string",defaultValue:"-"},{param:"v-model:format-value",description:"\u5E26\u6709\u524D\u7F00\u5343\u5206\u4F4D\u7684\u503C",type:"string",defaultValue:"-"},{param:"code",description:"\u65D7\u5B50\u7684 code",type:"ICurrencyCode | ICurrencyCode[]",defaultValue:"-"},{param:"flag",description:"\u662F\u5426\u73B0\u5B9E\u65D7\u5B50",type:"boolean",defaultValue:"false"},{param:"prefix",description:"\u662F\u5426\u663E\u793A\u524D\u7F00",type:"boolean",defaultValue:"true"},{param:"prepend",description:"\u662F\u5426\u663E\u793A\u524D\u7F6E\u5185\u5BB9",type:"boolean",defaultValue:"true"},{param:"append",description:"\u662F\u5426\u663E\u793A\u540E\u7F6E\u5185\u5BB9",type:"boolean",defaultValue:"false"},{param:"\u5176\u4ED6",description:"thousand-input \u7684 API",type:"./thousand-input.html#api",defaultValue:"-"}],types:[{param:"ICurrencyCode",description:"'CNY' | 'USD' | 'JPY' | 'EUR' | 'TWD' | 'KRW'"}]};return(o,i)=>(p(),g(W,{data:y}))}}),ta=D(sa,[["__file","usage.vue"]]),la=d("h2",{id:"\u529F\u80FD",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#\u529F\u80FD","aria-hidden":"true"},"#"),V(" \u529F\u80FD")],-1),ua=d("div",{class:"custom-container tip"},[d("p",{class:"custom-container-title"},"TIP"),d("p",null,"\u76EE\u524D\u6682\u65F6\u53EA\u5217\u51FA\u4E86 \u4EBA\u6C11\u5E01\u3001\u65B0\u53F0\u5E01\u3001\u7F8E\u5143\u3001\u65E5\u5143\u3001\u97E9\u5143\u3001\u6B27\u5143")],-1),oa=d("h2",{id:"\u529F\u80FD\u793A\u4F8B",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#\u529F\u80FD\u793A\u4F8B","aria-hidden":"true"},"#"),V(" \u529F\u80FD\u793A\u4F8B")],-1),pa=O(`<h2 id="\u6700\u5C0F\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6700\u5C0F\u793A\u4F8B" aria-hidden="true">#</a> \u6700\u5C0F\u793A\u4F8B</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HCurrency</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>result<span class="token punctuation">&quot;</span></span> <span class="token attr-name">code</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>EUR<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Wrapper <span class="token keyword">from</span> <span class="token string">&#39;@/components/simple-wrapper.vue&#39;</span>
<span class="token keyword">import</span> HCurrency <span class="token keyword">from</span> <span class="token string">&#39;../index.vue&#39;</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>`,3),ra={__name:"currency.html",setup(v){return(y,o)=>{const i=M("RouterLink");return p(),F("div",null,[la,d("p",null,[V("\u8D27\u5E01\u7EC4\u4EF6\uFF0C"),t(i,{to:"/form/thousand-input.html"},{default:l(()=>[V("thousand-input")]),_:1}),V(" \u7684\u589E\u5F3A\u7248")]),ua,oa,t(na),pa,t(ta)])}}},Da=D(ra,[["__file","currency.html.vue"]]);export{Da as default};
