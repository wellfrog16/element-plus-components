import{d as D,j as $,_ as V,w as N,B as E,i as x,E as _,W,D as H}from"./document.e6cb366c.js";import{H as P}from"./index.fdabbdb1.js";import{f as m,B as c,O as K,o as d,h as k,w as p,P as j,X as S,u as a,Y as T,a3 as q,A as I,p as L,g as b,d as n,c as O,ai as U,F as J,c7 as X,b as A,t as Y,_ as C,a as F,e as G}from"./app.a3d32ab8.js";import{m as v}from"./index.df5f81fa.js";import{E as M}from"./index.3c2f942c.js";import{E as Q}from"./index.c92e3477.js";import{E as Z}from"./index.247672cf.js";import"./index.3c08834e.js";import"./index.b7a0dde8.js";import"./validator.76855ab4.js";import"./index.10b47ecb.js";const R=Symbol("rowContextKey"),z=["start","center","end","space-around","space-between","space-evenly"],tt=["top","middle","bottom"],st=D({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:z,default:"start"},align:{type:String,values:tt}}),at=m({name:"ElRow"}),et=m({...at,props:st,setup(r){const s=r,l=$("row"),e=c(()=>s.gutter);K(R,{gutter:e});const f=c(()=>{const t={};return s.gutter&&(t.marginRight=t.marginLeft=`-${s.gutter/2}px`),t}),g=c(()=>[l.b(),l.is(`justify-${s.justify}`,s.justify!=="start"),l.is(`align-${s.align}`,!!s.align)]);return(t,o)=>(d(),k(q(t.tag),{class:S(a(g)),style:T(a(f))},{default:p(()=>[j(t.$slots,"default")]),_:3},8,["class","style"]))}});var nt=V(et,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const w=N(nt),ut=D({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:E([Number,Object]),default:()=>v({})},sm:{type:E([Number,Object]),default:()=>v({})},md:{type:E([Number,Object]),default:()=>v({})},lg:{type:E([Number,Object]),default:()=>v({})},xl:{type:E([Number,Object]),default:()=>v({})}}),lt=m({name:"ElCol"}),pt=m({...lt,props:ut,setup(r){const s=r,{gutter:l}=I(R,{gutter:c(()=>0)}),e=$("col"),f=c(()=>{const t={};return l.value&&(t.paddingLeft=t.paddingRight=`${l.value/2}px`),t}),g=c(()=>{const t=[];return["span","offset","pull","push"].forEach(u=>{const h=s[u];x(h)&&(u==="span"?t.push(e.b(`${s[u]}`)):h>0&&t.push(e.b(`${u}-${s[u]}`)))}),["xs","sm","md","lg","xl"].forEach(u=>{x(s[u])?t.push(e.b(`${u}-${s[u]}`)):L(s[u])&&Object.entries(s[u]).forEach(([h,B])=>{t.push(h!=="span"?e.b(`${u}-${h}-${B}`):e.b(`${u}-${B}`))})}),l.value&&t.push(e.is("guttered")),[e.b(),t]});return(t,o)=>(d(),k(q(t.tag),{class:S(a(g)),style:T(a(f))},{default:p(()=>[j(t.$slots,"default")]),_:3},8,["class","style"]))}});var ot=V(pt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const y=N(ot),it=m({__name:"example",setup(r){const s=b(300),l=b(300),e=b(!0),f=[{id:0,title:"\u9F20\u6807\u79FB\u52A8\u4E0B\u65B9\u6587\u672C\u4E0A\u67E5\u770B\u6548\u679C"},{id:1,title:"\u5F53\u672A\u8D85\u8FC7\u6EA2\u51FA\u5BBD\u5EA6\u65F6\uFF0C\u663E\u793A\u5B8C\u6574\u6587\u6848\uFF0C\u9F20\u6807hover\u65E0tooltip"},{id:2,title:"\u5F53\u8D85\u8FC7\u6EA2\u51FA\u5BBD\u5EA6\u65F6\uFF0C\u663E\u793A\u6587\u6848\u548C\u7701\u7565\u53F7\uFF0C\u9F20\u6807hover\u663E\u793Atooltip"},{id:3,title:"\u4E09\u53E3\u4E00\u53EA\u732A"},{id:4,title:"\u4E0D\u88C5\u4E86\uFF0C\u6211\u662F\u4EBF\u4E07\u5BCC\u7FC1\u6211\u644A\u724C\u4E86"},{id:5,title:"\u738B\u603B\u597D"},{id:6,title:"\u5367\u9F99\u51E4\u96CF"},{id:7,title:"\u672C\u6765\u6253\u7B97\u4EE5\u666E\u901A\u4EBA\u7684\u8EAB\u4EFD\u8DDF\u4F60\u4EEC\u76F8\u5904\uFF0C\u53EF\u6362\u6765\u7684\u5374\u662F\u758F\u8FDC\u3002"}],g=X(t=>{l.value=t},500);return(t,o)=>(d(),k(W,null,{default:p(()=>[n(a(_),{label:"\u5C55\u793A\u533A"},{default:p(()=>[(d(),O(J,null,U(f,i=>n(a(w),{key:i.id},{default:p(()=>[n(a(y),{span:6},{default:p(()=>[n(P,{placement:"top-start","max-width":l.value,"show-tooltip":e.value},{default:p(()=>[A(Y(i.title),1)]),_:2},1032,["max-width","show-tooltip"])]),_:2},1024)]),_:2},1024)),64))]),_:1}),n(a(_),{label:"\u53C2\u6570\uFF1A\u6700\u5927\u5BBD\u5EA6"},{default:p(()=>[n(a(w),{gutter:20},{default:p(()=>[n(a(y),{span:24},{default:p(()=>[n(a(M),{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=i=>s.value=i),max:400,onChange:o[1]||(o[1]=i=>a(g)(i))},null,8,["modelValue"])]),_:1}),n(a(y),{span:24},{default:p(()=>[n(a(Q),{title:"\u5F53\u6700\u5927\u5BBD\u5EA6\u4E3A0\u65F6\uFF0C\u5219\u81EA\u52A8\u5224\u65AD\u662F\u5426\u663E\u793A\u7701\u7565\u53F7",type:"success",closable:!1})]),_:1})]),_:1})]),_:1}),n(a(_),{label:"\u53C2\u6570\uFF1A\u663E\u793ATooltip"},{default:p(()=>[n(a(Z),{modelValue:e.value,"onUpdate:modelValue":o[2]||(o[2]=i=>e.value=i)},null,8,["modelValue"])]),_:1})]),_:1}))}}),rt=C(it,[["__file","example.vue"]]),ct=m({__name:"usage",setup(r){const s={params:[{param:"*content",description:"\u6587\u672C",type:"string",defaultValue:"-"},{param:"effect",description:"\u9ED8\u8BA4\u63D0\u4F9B\u7684\u4E3B\u9898",type:"dark | light",defaultValue:"dark"},{param:"placement",description:"tooltip \u7684\u51FA\u73B0\u4F4D\u7F6E\uFF0C\u89C1 el-tooltip",type:"https://element-plus.gitee.io/zh-CN/component/tooltip.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",defaultValue:"top"},{param:"max-wdith",description:"\u81EA\u5B9A\u4E49\u6700\u5927\u5BBD\u5EA6\uFF0C\u4E0D\u8BBE\u5B9A\u6216\u8005 0 \u5219\u81EA\u52A8\u5224\u65AD",type:"string",defaultValue:"0"},{param:"show-tooltip",description:"\u5F53\u5C55\u793A\u7701\u7565\u53F7\u7684\u65F6\u5019\uFF0C\u662F\u5426\u663E\u793A Tooltip",type:"boolen",defaultValue:"true"},{param:"popper-options",description:"popper.js \u7684\u53C2\u6570",type:"https://popper.js.org/docs/v2/",defaultValue:"-"},{param:"popper-class",description:"\u4E3A Tooltip \u7684 popper \u6DFB\u52A0\u7C7B\u540D",type:"string",defaultValue:"-"},{param:"enterable",description:"\u9F20\u6807\u662F\u5426\u53EF\u8FDB\u5165\u5230 Tooltip \u4E2D",type:"boolen",defaultValue:"true"}],slots:[{name:"default",description:"\u6587\u672C\u5185\u5BB9\uFF0C\u7B49\u540C\u4E8E content \u53C2\u6570"}]};return(l,e)=>(d(),k(H,{data:s}))}}),dt=C(ct,[["__file","usage.vue"]]),mt=F("h2",{id:"\u529F\u80FD",tabindex:"-1"},[F("a",{class:"header-anchor",href:"#\u529F\u80FD","aria-hidden":"true"},"#"),A(" \u529F\u80FD")],-1),ft=F("p",null,"\u7528\u4E8E\u5355\u884C\u6587\u6848\u7684\u663E\u793A\u3002\u5F53\u5185\u5BB9\u8D85\u8FC7\u6307\u5B9A\u5BBD\u5EA6\u65F6\uFF0C\u663E\u793A\u7701\u7565\u53F7\uFF0C\u5E76\u53EF\u8BBE\u7F6E\u9F20\u6807hover\u63D0\u793A\u5B8C\u6574\u6587\u6848",-1),gt=F("h2",{id:"\u529F\u80FD\u793A\u4F8B",tabindex:"-1"},[F("a",{class:"header-anchor",href:"#\u529F\u80FD\u793A\u4F8B","aria-hidden":"true"},"#"),A(" \u529F\u80FD\u793A\u4F8B")],-1),ht=G(`<h2 id="\u6700\u5C0F\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6700\u5C0F\u793A\u4F8B" aria-hidden="true">#</a> \u6700\u5C0F\u793A\u4F8B</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HTextEllipsis</span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top-start<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:max-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>250<span class="token punctuation">&quot;</span></span> <span class="token attr-name">show-tooltip</span><span class="token punctuation">&gt;</span></span>
            \u5F53\u5185\u5BB9\u8D85\u8FC7\u6307\u5B9A\u5BBD\u5EA6\u65F6\uFF0C\u663E\u793A\u7701\u7565\u53F7\uFF0C\u5E76\u53EF\u8BBE\u7F6E\u9F20\u6807hover\u63D0\u793A\u5B8C\u6574\u6587\u6848
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HTextEllipsis</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Wrapper <span class="token keyword">from</span> <span class="token string">&#39;@/components/simple-wrapper.vue&#39;</span>
<span class="token keyword">import</span> HTextEllipsis <span class="token keyword">from</span> <span class="token string">&#39;../index.vue&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>`,3),Et={__name:"text-ellipsis.html",setup(r){return(s,l)=>(d(),O("div",null,[mt,ft,gt,n(rt),ht,n(dt)]))}},Dt=C(Et,[["__file","text-ellipsis.html.vue"]]);export{Dt as default};
