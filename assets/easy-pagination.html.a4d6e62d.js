import{d as R,A as ee,B as P,aw as q,G as M,_ as ne,ar as se,Z as S,ax as H,aB as ae,E as te,W as oe,D as ue}from"./document.e6cb366c.js";import{E as L}from"./index.7c411af2.js";import{f as C,g as G,B as k,I as ie,U as le,o as c,h as y,w as h,V as W,W as U,a as b,u,X as g,a3 as pe,a4 as z,t as F,Y as Z,P as re,c as B,F as ce,af as de,d as f,Z as me,aK as fe,s as ve,z as A,q as ge,aI as O,b as j,_ as w,e as K}from"./app.a3d32ab8.js";import{u as ke}from"./use-global-config.ba6948b7.js";import"./index.10b47ecb.js";const X=["success","info","warning","error"],he=R({customClass:{type:String,default:""},dangerouslyUseHTMLString:{type:Boolean,default:!1},duration:{type:Number,default:4500},icon:{type:ee},id:{type:String,default:""},message:{type:P([String,Object]),default:""},offset:{type:Number,default:0},onClick:{type:P(Function),default:()=>{}},onClose:{type:P(Function),required:!0},position:{type:String,values:["top-right","top-left","bottom-right","bottom-left"],default:"top-right"},showClose:{type:Boolean,default:!0},title:{type:String,default:""},type:{type:String,values:[...X,""],default:""},zIndex:Number}),ye={destroy:()=>!0},Ee=["id"],be=["textContent"],Ce={key:0},_e=["innerHTML"],xe=C({name:"ElNotification"}),Fe=C({...xe,props:he,emits:ye,setup(e,{expose:n}){const s=e,{ns:t,zIndex:l}=ke("notification"),{nextZIndex:i,currentZIndex:o}=l,{Close:d}=se,r=G(!1);let p;const m=k(()=>{const a=s.type;return a&&q[s.type]?t.m(a):""}),v=k(()=>s.type&&q[s.type]||s.icon),D=k(()=>s.position.endsWith("right")?"right":"left"),Y=k(()=>s.position.startsWith("top")?"top":"bottom"),J=k(()=>{var a;return{[Y.value]:`${s.offset}px`,zIndex:(a=s.zIndex)!=null?a:o.value}});function N(){s.duration>0&&({stop:p}=fe(()=>{r.value&&_()},s.duration))}function I(){p==null||p()}function _(){r.value=!1}function Q({code:a}){a===S.delete||a===S.backspace?I():a===S.esc?r.value&&_():N()}return ie(()=>{N(),i(),r.value=!0}),le(document,"keydown",Q),n({visible:r,close:_}),(a,x)=>(c(),y(me,{name:u(t).b("fade"),onBeforeLeave:a.onClose,onAfterLeave:x[1]||(x[1]=V=>a.$emit("destroy")),persisted:""},{default:h(()=>[W(b("div",{id:a.id,class:g([u(t).b(),a.customClass,u(D)]),style:Z(u(J)),role:"alert",onMouseenter:I,onMouseleave:N,onClick:x[0]||(x[0]=(...V)=>a.onClick&&a.onClick(...V))},[u(v)?(c(),y(u(M),{key:0,class:g([u(t).e("icon"),u(m)])},{default:h(()=>[(c(),y(pe(u(v))))]),_:1},8,["class"])):z("v-if",!0),b("div",{class:g(u(t).e("group"))},[b("h2",{class:g(u(t).e("title")),textContent:F(a.title)},null,10,be),W(b("div",{class:g(u(t).e("content")),style:Z(a.title?void 0:{margin:0})},[re(a.$slots,"default",{},()=>[a.dangerouslyUseHTMLString?(c(),B(ce,{key:1},[z(" Caution here, message could've been compromised, never use user's input as message "),b("p",{innerHTML:a.message},null,8,_e)],2112)):(c(),B("p",Ce,F(a.message),1))])],6),[[U,a.message]]),a.showClose?(c(),y(u(M),{key:0,class:g(u(t).e("closeBtn")),onClick:de(_,["stop"])},{default:h(()=>[f(u(d))]),_:1},8,["class","onClick"])):z("v-if",!0)],2)],46,Ee),[[U,r.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Be=ne(Fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/notification/src/notification.vue"]]);const T={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[]},$=16;let Te=1;const E=function(e={},n=null){if(!ve)return{close:()=>{}};(typeof e=="string"||A(e))&&(e={message:e});const s=e.position||"top-right";let t=e.offset||0;T[s].forEach(({vm:m})=>{var v;t+=(((v=m.el)==null?void 0:v.offsetHeight)||0)+$}),t+=$;const l=`notification_${Te++}`,i=e.onClose,o={...e,offset:t,id:l,onClose:()=>{we(l,s,i)}};let d=document.body;H(e.appendTo)?d=e.appendTo:ge(e.appendTo)&&(d=document.querySelector(e.appendTo)),H(d)||(d=document.body);const r=document.createElement("div"),p=f(Be,o,A(o.message)?{default:()=>o.message}:null);return p.appContext=n!=null?n:E._context,p.props.onDestroy=()=>{O(null,r)},O(p,r),T[s].push({vm:p}),d.appendChild(r.firstElementChild),{close:()=>{p.component.exposed.visible.value=!1}}};X.forEach(e=>{E[e]=(n={})=>((typeof n=="string"||A(n))&&(n={message:n}),E({...n,type:e}))});function we(e,n,s){const t=T[n],l=t.findIndex(({vm:p})=>{var m;return((m=p.component)==null?void 0:m.props.id)===e});if(l===-1)return;const{vm:i}=t[l];if(!i)return;s==null||s(i);const o=i.el.offsetHeight,d=n.split("-")[0];t.splice(l,1);const r=t.length;if(!(r<1))for(let p=l;p<r;p++){const{el:m,component:v}=t[p].vm,D=Number.parseInt(m.style[d],10)-o-$;v.props.offset=D}}function De(){for(const e of Object.values(T))e.forEach(({vm:n})=>{n.component.exposed.visible.value=!1})}E.closeAll=De;E._context=null;const Ne=ae(E,"$notify"),Pe=C({__name:"index",props:{size:{type:String,default:"small"},prevText:{type:String,default:"\u4E0A\u4E00\u9875"},nextText:{type:String,default:"\u4E0B\u4E00\u9875"},currentPage:{type:Number,default:1},haveNext:{type:Boolean,default:!1}},emits:["currentChange","update:currentPage","prevClick","nextClick"],setup(e,{emit:n}){const s=e,t=k(()=>s.currentPage>1),l=i=>{let o=s.currentPage+i;o=o>0?o:1,n("update:currentPage",o),n("currentChange",o),i<0&&n("prevClick",o),i>0&&n("nextClick",o)};return(i,o)=>(c(),B("div",{class:g(i.$style.main)},[f(u(L),{size:e.size,disabled:!u(t),onClick:o[0]||(o[0]=()=>l(-1))},{default:h(()=>[j(F(e.prevText),1)]),_:1},8,["size","disabled"]),f(u(L),{size:e.size,disabled:!e.haveNext,onClick:o[1]||(o[1]=()=>l(1))},{default:h(()=>[j(F(e.nextText),1)]),_:1},8,["size","disabled"])],2))}}),Se="_main_1y8do_1",ze={main:Se},Ae={$style:ze},$e=w(Pe,[["__cssModules",Ae],["__file","index.vue"]]),Ie=C({__name:"example",setup(e){const n=G(1),s=k(()=>n.value<3),t=l=>{Ne({message:`\u89E6\u53D1@current-change\uFF0C\u5F53\u524D\u7B2C${l}\u9875`})};return(l,i)=>(c(),y(oe,null,{default:h(()=>[f(u(te),{label:"\u5C55\u793A\u533A"},{default:h(()=>[f($e,{"current-page":n.value,"onUpdate:current-page":i[0]||(i[0]=o=>n.value=o),"have-next":u(s),onCurrentChange:t},null,8,["current-page","have-next"])]),_:1})]),_:1}))}}),Ve=w(Ie,[["__file","example.vue"]]),qe=C({__name:"usage",setup(e){const n={params:[{param:"*current-page",description:"\u5F53\u524D\u9875\u6570\uFF0C\u7528\u4E8E\u5224\u65AD\u662F\u5426\u6709\u4E0A\u4E00\u9875\u548C\u53D1\u9001\u4E0B\u4E00\u9875\u7684\u9875\u6570",type:"number",defaultValue:"1"},{param:"*have-next",description:"\u662F\u5426\u6709\u4E0B\u4E00\u9875\uFF0C\u4E00\u822C\u5224\u65AD\u8FD4\u56DE\u7684\u6570\u636E\u662F\u5426\u5C0F\u4E8E\u5206\u9875\u7684pagesize",type:"boolen",defaultValue:"false"},{param:"prev-text",description:"\u4E0A\u4E00\u9875\u6587\u672C",type:"string",defaultValue:"\u4E0A\u4E00\u9875"},{param:"next-text",description:"\u4E0B\u4E00\u9875\u6587\u672C",type:"string",defaultValue:"\u4E0B\u4E00\u9875"},{param:"size",description:"\u6309\u94AE\u7EC4\u4EF6\u5927\u5C0F",type:"small | large",defaultValue:"small"}],events:[{name:"current-change",description:"\u9875\u9762\u5207\u6362\u65F6\u89E6\u53D1\uFF0C\u901A\u5E38\u7528\u6765\u89E6\u53D1\u52A0\u8F7D\u65B0\u6570\u636E",param:"\u66F4\u65B0\u540E\u7684 current-page \u503C"},{name:"prev-click",description:"\u70B9\u51FB\u4E0A\u4E00\u9875\u65F6\u89E6\u53D1",param:"\u66F4\u65B0\u540E\u7684 current-page \u503C"},{name:"next-click",description:"\u70B9\u51FB\u4E0B\u4E00\u9875\u65F6\u89E6\u53D1",param:"\u66F4\u65B0\u540E\u7684 current-page \u503C"}]};return(s,t)=>(c(),y(ue,{data:n}))}}),Me=w(qe,[["__file","usage.vue"]]),He=K('<h2 id="\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a> \u529F\u80FD</h2><p>\u53EA\u505A\u4E0A\u4E0B\u9875\uFF0C\u65E0\u9700\u6570\u91CF<code>total</code>, <code>page</code>, <code>pagesize</code>\u3002\u6700\u540E\u4E00\u9875\u53EF\u80FD\u4E3A\u7A7A\uFF08\u53EF\u4EE5\u7528\u989D\u5916\u903B\u8F91\u89C4\u907F\uFF09\uFF0C\u9002\u5408\u5927\u6570\u636E\u91CF\u5206\u9875\uFF0C\u56E0\u4E3A\u7528\u6237\u4E0D\u4F1A\u7FFB\u5230\u6700\u540E\u4E00\u9875\uFF0C\u6837\u5F0F\u98CE\u683C\u548C<code>el-pagination</code>\u4FDD\u6301\u4E00\u81F4</p><h2 id="\u529F\u80FD\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD\u793A\u4F8B" aria-hidden="true">#</a> \u529F\u80FD\u793A\u4F8B</h2>',3),Le=K(`<h2 id="\u6700\u5C0F\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6700\u5C0F\u793A\u4F8B" aria-hidden="true">#</a> \u6700\u5C0F\u793A\u4F8B</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HEasyPagination</span> <span class="token attr-name"><span class="token namespace">v-model:</span>current-page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:have-next</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>haveNext<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Wrapper <span class="token keyword">from</span> <span class="token string">&#39;@/components/simple-wrapper.vue&#39;</span>
<span class="token keyword">import</span> HEasyPagination <span class="token keyword">from</span> <span class="token string">&#39;../index.vue&#39;</span>

<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> haveNext <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>value <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>`,3),We={__name:"easy-pagination.html",setup(e){return(n,s)=>(c(),B("div",null,[He,f(Ve),Le,f(Me)]))}},Ke=w(We,[["__file","easy-pagination.html.vue"]]);export{Ke as default};
