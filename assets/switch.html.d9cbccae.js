import{d as P,x as U,aW as I,Z as x,o as W,h as z,A as M,B as R,Y as O,_ as H,w as j,E,W as G,D as L}from"./document.a03dcdd3.js";import{E as w}from"./index.6e816161.js";import{b as T,E as S}from"./index.50ebb2bb.js";import{f as y,g as k,E as _,o as f,h,w as o,a as m,a0 as b,u as e,a1 as K,a7 as Y,a8 as q,b as g,t as B,d as t,U as Z,V as F,K as J,G as A,_ as V,c6 as Q,c as X,e as ee}from"./app.0bb1a7b5.js";import{E as ae}from"./index.a1542f6d.js";import{E as ne,a as D}from"./index.e634605d.js";import"./validator.b700418f.js";import"./index.0907e685.js";import"./use-global-config.a1b9649c.js";const se=P({title:String,confirmButtonText:String,cancelButtonText:String,confirmButtonType:{type:String,values:T,default:"primary"},cancelButtonType:{type:String,values:T,default:"text"},icon:{type:U,default:()=>I},iconColor:{type:String,default:"#f90"},hideIcon:{type:Boolean,default:!1},hideAfter:{type:Number,default:200},teleported:x.teleported,persistent:x.persistent,width:{type:[String,Number],default:150}}),te={confirm:s=>s instanceof MouseEvent,cancel:s=>s instanceof MouseEvent},le=y({name:"ElPopconfirm"}),oe=y({...le,props:se,emits:te,setup(s,{emit:p}){const c=s,{t:r}=W(),d=z("popconfirm"),v=k(),u=()=>{var a,C;(C=(a=v.value)==null?void 0:a.onClose)==null||C.call(a)},l=_(()=>({width:M(c.width)})),n=a=>{p("confirm",a),u()},i=a=>{p("cancel",a),u()},N=_(()=>c.confirmButtonText||r("el.popconfirm.confirmButtonText")),$=_(()=>c.cancelButtonText||r("el.popconfirm.cancelButtonText"));return(a,C)=>(f(),h(e(O),F({ref_key:"tooltipRef",ref:v,trigger:"click",effect:"light"},a.$attrs,{"popper-class":`${e(d).namespace.value}-popover`,"popper-style":e(l),teleported:a.teleported,"fallback-placements":["bottom","top","right","left"],"hide-after":a.hideAfter,persistent:a.persistent}),{content:o(()=>[m("div",{class:b(e(d).b())},[m("div",{class:b(e(d).e("main"))},[!a.hideIcon&&a.icon?(f(),h(e(R),{key:0,class:b(e(d).e("icon")),style:K({color:a.iconColor})},{default:o(()=>[(f(),h(Y(a.icon)))]),_:1},8,["class","style"])):q("v-if",!0),g(" "+B(a.title),1)],2),m("div",{class:b(e(d).e("action"))},[t(e(S),{size:"small",type:a.cancelButtonType==="text"?"":a.cancelButtonType,text:a.cancelButtonType==="text",onClick:i},{default:o(()=>[g(B(e($)),1)]),_:1},8,["type","text"]),t(e(S),{size:"small",type:a.confirmButtonType==="text"?"":a.confirmButtonType,text:a.confirmButtonType==="text",onClick:n},{default:o(()=>[g(B(e(N)),1)]),_:1},8,["type","text"])],2)],2)]),default:o(()=>[a.$slots.reference?Z(a.$slots,"reference",{key:0}):q("v-if",!0)]),_:3},16,["popper-class","popper-style","teleported","hide-after","persistent"]))}});var ue=H(oe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popconfirm/src/popconfirm.vue"]]);const ie=j(ue),pe=y({__name:"index",props:{modelValue:{type:String,default:""},confirmTitle:{type:String,default:"\u786E\u8BA4\u5207\u6362\u5417\uFF1F"},disabled:{type:Boolean,default:!1},className:{type:String,default:""},confirm:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(s,{emit:p}){const c=s,r=k(),d=()=>r.value?r.value.getElementsByClassName("h-switch")[0]:void 0,v=()=>{var l;return(l=d())==null?void 0:l.click()},u=_({get:()=>c.modelValue,set:l=>p("update:modelValue",l)});return J(()=>{var l;(l=d())==null||l.addEventListener("click",n=>{n.stopPropagation()})}),(l,n)=>s.disabled||!s.confirm?(f(),h(e(w),F({key:0,modelValue:e(u),"onUpdate:modelValue":n[0]||(n[0]=i=>A(u)?u.value=i:null),class:s.className},l.$attrs,{disabled:s.disabled}),null,16,["modelValue","class","disabled"])):(f(),h(e(ie),{key:1,title:s.confirmTitle,onConfirm:v},{reference:o(()=>[m("span",{ref_key:"mainEle",ref:r,class:b(l.$style.main)},[t(e(w),F({modelValue:e(u),"onUpdate:modelValue":n[1]||(n[1]=i=>A(u)?u.value=i:null),class:["h-switch",s.className]},l.$attrs),null,16,["modelValue","class"])],2)]),_:1},8,["title"]))}}),ce="_main_5oj5r_1",re={main:ce},de={$style:re},me=V(pe,[["__cssModules",de],["__file","index.vue"]]),ve=y({__name:"example",setup(s){const p=k("Open"),c=k(0),r=k(!1),d=async()=>(r.value=!0,await Q(c.value),r.value=!1,!0),v=k(!1),u=k(!1);return(l,n)=>(f(),h(G,null,{default:o(()=>[t(e(E),{label:"\u5C55\u793A\u533A"},{default:o(()=>[t(e(ae),null,{default:o(()=>[t(me,{modelValue:p.value,"onUpdate:modelValue":n[0]||(n[0]=i=>p.value=i),"before-change":d,"active-text":"\u5F00","inactive-text":"\u5173","active-value":"Open","inactive-value":"Close",loading:r.value,disabled:v.value,confirm:u.value},null,8,["modelValue","loading","disabled","confirm"]),m("span",null,"\u503C\uFF1A"+B(p.value),1)]),_:1})]),_:1}),t(e(E),{label:"\u6A21\u62DF\uFF1A\u5F02\u6B65\u5207\u6362"},{default:o(()=>[t(e(ne),{modelValue:c.value,"onUpdate:modelValue":n[1]||(n[1]=i=>c.value=i)},{default:o(()=>[t(e(D),{label:0},{default:o(()=>[g("\u7ACB\u5373\u6267\u884C")]),_:1}),t(e(D),{label:1e3},{default:o(()=>[g("\u5EF6\u8FDF\u4E00\u79D2")]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(e(E),{label:"\u53C2\u6570\uFF1A\u7981\u7528\u7EC4\u4EF6"},{default:o(()=>[t(e(w),{modelValue:v.value,"onUpdate:modelValue":n[2]||(n[2]=i=>v.value=i),"active-text":"\u542F\u7528","inactive-text":"\u7981\u7528","active-value":!1,"inactive-value":!0},null,8,["modelValue"])]),_:1}),t(e(E),{label:"\u53C2\u6570\uFF1A\u4E8C\u6B21\u786E\u8BA4"},{default:o(()=>[t(e(w),{modelValue:u.value,"onUpdate:modelValue":n[3]||(n[3]=i=>u.value=i),"active-text":"\u542F\u7528","inactive-text":"\u5173\u95ED","active-value":!0,"inactive-value":!1},null,8,["modelValue"])]),_:1})]),_:1}))}}),fe=V(ve,[["__file","example.vue"]]),ke=y({__name:"usage",setup(s){const p={params:[{param:"*v-model",description:"\u7ED1\u5B9A\u503C",type:"boolean | string | number",defaultValue:"-"},{param:"confirmTitle",description:"confirm \u7684\u6807\u9898",type:"string",defaultValue:"\u786E\u8BA4\u5207\u6362\u5417\uFF1F"},{param:"confirm",description:"\u662F\u5426\u5F00\u542F\u4E8C\u6B21\u786E\u8BA4",type:"boolean",defaultValue:"false"},{param:"className",description:"el-switch \u7684 className",type:"string",defaultValue:"-"},{param:"\u5176\u4ED6",description:"el-switch \u7684\u5C5E\u6027\u3001\u4E8B\u4EF6",type:"https://element-plus.gitee.io/zh-CN/component/switch.html#%E5%B1%9E%E6%80%A7"}],events:[{name:"change",description:"switch \u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",param:"value"}]};return(c,r)=>(f(),h(L,{data:p}))}}),he=V(ke,[["__file","usage.vue"]]),ge=m("h2",{id:"\u529F\u80FD",tabindex:"-1"},[m("a",{class:"header-anchor",href:"#\u529F\u80FD","aria-hidden":"true"},"#"),g(" \u529F\u80FD")],-1),be=m("p",null,"\u57FA\u4E8E el-switch \u548C el-popconfirm\uFF0C\u7528\u4E8E\u786E\u8BA4 Switch \u7EC4\u4EF6\u7684\u64CD\u4F5C",-1),ye=m("h2",{id:"\u529F\u80FD\u793A\u4F8B",tabindex:"-1"},[m("a",{class:"header-anchor",href:"#\u529F\u80FD\u793A\u4F8B","aria-hidden":"true"},"#"),g(" \u529F\u80FD\u793A\u4F8B")],-1),Ee=ee(`<h2 id="\u6700\u5C0F\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6700\u5C0F\u793A\u4F8B" aria-hidden="true">#</a> \u6700\u5C0F\u793A\u4F8B</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HSwitch</span>
            <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>result<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">active-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5F00<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">inactive-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5173<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">active-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Open<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">inactive-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Close<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Wrapper <span class="token keyword">from</span> <span class="token string">&#39;@/components/simple-wrapper.vue&#39;</span>
<span class="token keyword">import</span> HSwitch <span class="token keyword">from</span> <span class="token string">&#39;../index.vue&#39;</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Open&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>`,3),_e={__name:"switch.html",setup(s){return(p,c)=>(f(),X("div",null,[ge,be,ye,t(fe),Ee,t(he)]))}},Ae=V(_e,[["__file","switch.html.vue"]]);export{Ae as default};
