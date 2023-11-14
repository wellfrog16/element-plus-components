import{d as q,aq as z,B as A,a6 as R,h as H,o as I,A as T,_ as L,w as N,$ as U,E as P,W as M,D as W}from"./document.cdfca6ca.js";import{H as C}from"./index.745fb270.js";import{f as w,E as g,g as y,r as h,o as r,h as D,d as l,w as t,Z as O,$ as j,a as i,a0 as d,c,U as m,t as _,a8 as u,V as B,ak as G,a2 as J,ad as Z,J as K,b as v,u as f,G as Q,_ as E,aM as X,e as Y}from"./app.b12c36a8.js";import{b as x,c as ss,E as as,u as es}from"./use-dialog.50e1795c.js";import{u as $}from"./index.c1a5335a.js";import"./index.ddaf4aa5.js";import"./index.46f11578.js";import"./index.61cc32b0.js";import"./index.5fe74de9.js";import"./index.7973fc68.js";import"./use-global-config.d5b29c73.js";import"./scroll.a766c1a0.js";const ns=q({...x,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0},headerAriaLevel:{type:String,default:"2"}}),ts=ss,ls=w({name:"ElDrawer",components:{ElOverlay:as,ElFocusTrap:z,ElIcon:A,Close:R},inheritAttrs:!1,props:ns,emits:ts,setup(s,{slots:a}){$({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},g(()=>!!a.title)),$({scope:"el-drawer",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/drawer.html#attributes",type:"Attribute"},g(()=>!!s.customClass));const o=y(),p=y(),n=H("drawer"),{t:e}=I(),k=g(()=>s.direction==="rtl"||s.direction==="ltr"),b=g(()=>T(s.size));return{...es(s,o),drawerRef:o,focusStartRef:p,isHorizontal:k,drawerSize:b,ns:n,t:e}}}),os=["aria-label","aria-labelledby","aria-describedby"],rs=["id","aria-level"],is=["aria-label"],ps=["id"];function us(s,a,o,p,n,e){const k=h("close"),b=h("el-icon"),V=h("el-focus-trap"),F=h("el-overlay");return r(),D(Z,{to:"body",disabled:!s.appendToBody},[l(J,{name:s.ns.b("fade"),onAfterEnter:s.afterEnter,onAfterLeave:s.afterLeave,onBeforeLeave:s.beforeLeave,persisted:""},{default:t(()=>[O(l(F,{mask:s.modal,"overlay-class":s.modalClass,"z-index":s.zIndex,onClick:s.onModalClick},{default:t(()=>[l(V,{loop:"",trapped:s.visible,"focus-trap-el":s.drawerRef,"focus-start-el":s.focusStartRef,onReleaseRequested:s.onCloseRequested},{default:t(()=>[i("div",B({ref:"drawerRef","aria-modal":"true","aria-label":s.title||void 0,"aria-labelledby":s.title?void 0:s.titleId,"aria-describedby":s.bodyId},s.$attrs,{class:[s.ns.b(),s.direction,s.visible&&"open",s.customClass],style:s.isHorizontal?"width: "+s.drawerSize:"height: "+s.drawerSize,role:"dialog",onClick:a[1]||(a[1]=G(()=>{},["stop"]))}),[i("span",{ref:"focusStartRef",class:d(s.ns.e("sr-focus")),tabindex:"-1"},null,2),s.withHeader?(r(),c("header",{key:0,class:d(s.ns.e("header"))},[s.$slots.title?m(s.$slots,"title",{key:1},()=>[u(" DEPRECATED SLOT ")]):m(s.$slots,"header",{key:0,close:s.handleClose,titleId:s.titleId,titleClass:s.ns.e("title")},()=>[s.$slots.title?u("v-if",!0):(r(),c("span",{key:0,id:s.titleId,role:"heading","aria-level":s.headerAriaLevel,class:d(s.ns.e("title"))},_(s.title),11,rs))]),s.showClose?(r(),c("button",{key:2,"aria-label":s.t("el.drawer.close"),class:d(s.ns.e("close-btn")),type:"button",onClick:a[0]||(a[0]=(...S)=>s.handleClose&&s.handleClose(...S))},[l(b,{class:d(s.ns.e("close"))},{default:t(()=>[l(k)]),_:1},8,["class"])],10,is)):u("v-if",!0)],2)):u("v-if",!0),s.rendered?(r(),c("div",{key:1,id:s.bodyId,class:d(s.ns.e("body"))},[m(s.$slots,"default")],10,ps)):u("v-if",!0),s.$slots.footer?(r(),c("div",{key:2,class:d(s.ns.e("footer"))},[m(s.$slots,"footer")],2)):u("v-if",!0)],16,os)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])]),_:3},8,["mask","overlay-class","z-index","onClick"]),[[j,s.visible]])]),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"])}var ds=L(ls,[["render",us],["__file","/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]);const cs=N(ds),ms={class:"drawer-body"},ks={key:0,class:"drawer-footer"},vs=w({__name:"index",props:{modelValue:{type:Boolean,required:!0,default:!1},title:{type:String,default:"\u5BF9\u8BDD\u6846"},lazy:{type:Boolean,default:!0},destoryDelay:{type:Number,default:300}},emits:["update:modelValue"],setup(s,{emit:a}){const o=s,p=g({get:()=>o.modelValue,set:e=>a("update:modelValue",e)}),n=y(!1);return K(p,e=>{e?n.value=!0:setTimeout(()=>{n.value=!1},o.destoryDelay)}),(e,k)=>n.value||!s.lazy?(r(),D(f(cs),B({key:0,modelValue:f(p),"onUpdate:modelValue":k[0]||(k[0]=b=>Q(p)?p.value=b:null)},e.$attrs,{class:e.$style.main}),{header:t(()=>[i("div",null,[m(e.$slots,"header",{},()=>[v(_(s.title),1)])])]),default:t(()=>[i("div",ms,[l(f(U),{class:"drawer-scrollbar"},{default:t(()=>[m(e.$slots,"default")]),_:3})]),e.$slots.footer?(r(),c("div",ks,[m(e.$slots,"footer")])):u("v-if",!0)]),_:3},16,["modelValue","class"])):u("v-if",!0)}}),fs="_main_1nil6_1",bs={main:fs},gs={$style:bs},hs=E(vs,[["__cssModules",gs],["__file","index.vue"]]),ys=w({__name:"example",setup(s){const a=y(!1),o=X(a);return(p,n)=>(r(),D(M,null,{default:t(()=>[l(f(P),{label:"\u5C55\u793A\u533A"},{default:t(()=>[l(hs,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=e=>a.value=e),title:"\u6D4B\u8BD5"},{footer:t(()=>[l(C,{onClick:n[0]||(n[0]=()=>f(o)())},{default:t(()=>[v("\u5173\u95ED")]),_:1})]),default:t(()=>[v(" \u5564\u9152\u3001\u996E\u6599\u3001\u77FF\u6CC9\u6C34\uFF0C\u82B1\u751F\u3001\u74DC\u5B50\u3001\u5927\u9E21\u817F ")]),_:1},8,["modelValue"]),l(C,{onClick:n[2]||(n[2]=()=>f(o)())},{default:t(()=>[v("\u6253\u5F00")]),_:1})]),_:1})]),_:1}))}}),ws=E(ys,[["__file","example.vue"]]),Ds=w({__name:"usage",setup(s){const a={params:[{param:"lazy",description:"\u662F\u5426\u4F7F\u7528\u61D2\u6E32\u67D3",type:"boolean",defaultValue:"true"},{param:"destoryDelay",description:"\u61D2\u6E32\u67D3\u65F6\u9500\u6BC1\u5EF6\u8FDF",type:"number",defaultValue:"500"},{param:"\u5176\u4ED6",description:"el-drawer \u7684\u5C5E\u6027\u3001\u4E8B\u4EF6\u3001\u63D2\u69FD",type:"https://element-plus.org/zh-CN/component/drawer.html#%E5%B1%9E%E6%80%A7",defaultValue:"-"}]};return(o,p)=>(r(),D(W,{data:a}))}}),Es=E(Ds,[["__file","usage.vue"]]),Cs=i("h2",{id:"\u529F\u80FD",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#\u529F\u80FD","aria-hidden":"true"},"#"),v(" \u529F\u80FD")],-1),$s=i("p",null,"el-drawer \u7684\u4FEE\u6539\u7248",-1),_s=i("p",null,"\u61D2\u6E32\u67D3\u6A21\u5F0F\uFF08\u672A\u5F00\u542F\u65F6\u4E0D\u6E32\u67D3\uFF0C\u6253\u5F00\u65F6\u6E32\u67D3\uFF0C\u5173\u95ED\u65F6\u9500\u6BC1\uFF09\uFF0C\u5E38\u7528\u4E8E\u5FAA\u73AF\u6570\u636E\u7684\u9ED8\u8BA4\u9690\u85CF",-1),Bs=i("h2",{id:"\u529F\u80FD\u793A\u4F8B",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#\u529F\u80FD\u793A\u4F8B","aria-hidden":"true"},"#"),v(" \u529F\u80FD\u793A\u4F8B")],-1),Vs=Y(`<h2 id="\u6700\u5C0F\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6700\u5C0F\u793A\u4F8B" aria-hidden="true">#</a> \u6700\u5C0F\u793A\u4F8B</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HDrawer</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6D4B\u8BD5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            \u5185\u5BB9
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HDrawer</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>() =&gt; toggleVisible()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6253\u5F00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useToggle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>
<span class="token keyword">import</span> Wrapper <span class="token keyword">from</span> <span class="token string">&#39;@/components/simple-wrapper.vue&#39;</span>
<span class="token keyword">import</span> HDrawer <span class="token keyword">from</span> <span class="token string">&#39;../index.vue&#39;</span>

<span class="token keyword">const</span> visible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> toggleVisible <span class="token operator">=</span> <span class="token function">useToggle</span><span class="token punctuation">(</span>visible<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>`,3),Fs={__name:"drawer.html",setup(s){return(a,o)=>(r(),c("div",null,[Cs,$s,_s,Bs,l(ws),Vs,l(Es)]))}},Ms=E(Fs,[["__file","drawer.html.vue"]]);export{Ms as default};
