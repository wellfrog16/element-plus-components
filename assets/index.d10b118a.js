import{f as x,z as m,p as S,o as f,c as k,R as I,d as _,w,V as U,W as q,u as n,a as E,X as g,t as A,Z,G,l as K,aO as oe,g as B,E as ae,U as re,$ as le,h as b,a4 as N,a3 as ie,F as ue,as as ce,Y as de,aN as pe,n as j,x as W,K as M,aP as H,a8 as me}from"./app.996e40ef.js";import{e as O,u as X,_ as Y,w as fe,p as y,f as ge,ap as ye,o as ve,aq as R,s as V,ar as Ce,M as be,c as he,as as Te}from"./document.8ebdd996.js";import{m as Ne}from"./typescript.72bf8adc.js";const we=O({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),ze=["textContent"],Be={name:"ElBadge"},Se=x({...Be,props:we,setup(s,{expose:t}){const e=s,o=X("badge"),a=m(()=>e.isDot?"":S(e.value)&&S(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return t({content:a}),(l,u)=>(f(),k("div",{class:g(n(o).b())},[I(l.$slots,"default"),_(Z,{name:`${n(o).namespace.value}-zoom-in-center`,persisted:""},{default:w(()=>[U(E("sup",{class:g([n(o).e("content"),n(o).em("content",l.type),n(o).is("fixed",!!l.$slots.default),n(o).is("dot",l.isDot)]),textContent:A(n(a))},null,10,ze),[[q,!l.hidden&&(n(a)||l.isDot)]])]),_:1},8,["name"])],2))}});var ke=Y(Se,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const Ee=fe(ke),$={},Me=O({a11y:{type:Boolean,default:!0},locale:{type:y(Object)},size:ge,button:{type:y(Object)},experimentalFeatures:{type:y(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:y(Object)},zIndex:Number,namespace:{type:String,default:"el"}});x({name:"ElConfigProvider",props:Me,setup(s,{slots:t}){G(()=>s.message,o=>{Object.assign($,o!=null?o:{})},{immediate:!0,deep:!0});const e=ye(s);return()=>I(t,"default",{config:e==null?void 0:e.value})}});const J=["success","info","warning","error"],i=Ne({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:K?document.body:void 0}),$e=O({customClass:{type:String,default:i.customClass},center:{type:Boolean,default:i.center},dangerouslyUseHTMLString:{type:Boolean,default:i.dangerouslyUseHTMLString},duration:{type:Number,default:i.duration},icon:{type:ve,default:i.icon},id:{type:String,default:i.id},message:{type:y([String,Object,Function]),default:i.message},onClose:{type:y(Function),required:!1},showClose:{type:Boolean,default:i.showClose},type:{type:String,values:J,default:i.type},offset:{type:Number,default:i.offset},zIndex:{type:Number,default:i.zIndex},grouping:{type:Boolean,default:i.grouping},repeatNum:{type:Number,default:i.repeatNum}}),xe={destroy:()=>!0},c=oe([]),Ie=s=>{const t=c.findIndex(a=>a.id===s),e=c[t];let o;return t>0&&(o=c[t-1]),{current:e,prev:o}},_e=s=>{const{prev:t}=Ie(s);return t?t.vm.exposed.bottom.value:0},Oe=["id"],Le=["innerHTML"],De={name:"ElMessage"},Pe=x({...De,props:$e,emits:xe,setup(s,{expose:t}){const e=s,{Close:o}=Ce,a=X("message"),l=B(),u=B(!1),d=B(0);let p;const h=m(()=>e.type?e.type==="error"?"danger":e.type:"info"),L=m(()=>{const r=e.type;return{[a.bm("icon",r)]:r&&R[r]}}),C=m(()=>e.icon||R[e.type]||""),ee=m(()=>_e(e.id)),D=m(()=>e.offset+ee.value),se=m(()=>d.value+D.value),te=m(()=>({top:`${D.value}px`,zIndex:e.zIndex}));function z(){e.duration!==0&&({stop:p}=pe(()=>{T()},e.duration))}function P(){p==null||p()}function T(){u.value=!1}function ne({code:r}){r===be.esc&&T()}return ae(()=>{z(),u.value=!0}),G(()=>e.repeatNum,()=>{P(),z()}),re(document,"keydown",ne),le(l,()=>{d.value=l.value.getBoundingClientRect().height}),t({visible:u,bottom:se,close:T}),(r,F)=>(f(),b(Z,{name:n(a).b("fade"),onBeforeLeave:r.onClose,onAfterLeave:F[0]||(F[0]=Ue=>r.$emit("destroy")),persisted:""},{default:w(()=>[U(E("div",{id:r.id,ref_key:"messageRef",ref:l,class:g([n(a).b(),{[n(a).m(r.type)]:r.type&&!r.icon},n(a).is("center",r.center),n(a).is("closable",r.showClose),r.customClass]),style:de(n(te)),role:"alert",onMouseenter:P,onMouseleave:z},[r.repeatNum>1?(f(),b(n(Ee),{key:0,value:r.repeatNum,type:n(h),class:g(n(a).e("badge"))},null,8,["value","type","class"])):N("v-if",!0),n(C)?(f(),b(n(V),{key:1,class:g([n(a).e("icon"),n(L)])},{default:w(()=>[(f(),b(ie(n(C))))]),_:1},8,["class"])):N("v-if",!0),I(r.$slots,"default",{},()=>[r.dangerouslyUseHTMLString?(f(),k(ue,{key:1},[N(" Caution here, message could've been compromised, never use user's input as message "),E("p",{class:g(n(a).e("content")),innerHTML:r.message},null,10,Le)],2112)):(f(),k("p",{key:0,class:g(n(a).e("content"))},A(r.message),3))]),r.showClose?(f(),b(n(V),{key:2,class:g(n(a).e("closeBtn")),onClick:ce(T,["stop"])},{default:w(()=>[_(n(o))]),_:1},8,["class","onClick"])):N("v-if",!0)],46,Oe),[[q,u.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Fe=Y(Pe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let je=1;const Q=s=>{const t=!s||j(s)||W(s)||M(s)?{message:s}:s,e={...i,...t};if(!e.appendTo)e.appendTo=document.body;else if(j(e.appendTo)){let o=document.querySelector(e.appendTo);me(o)||(o=document.body),e.appendTo=o}return e},He=s=>{const t=c.indexOf(s);if(t===-1)return;c.splice(t,1);const{handler:e}=s;e.close()},Re=({appendTo:s,...t},e)=>{const{nextZIndex:o}=he(),a=`message_${je++}`,l=t.onClose,u=document.createElement("div"),d={...t,zIndex:o()+t.zIndex,id:a,onClose:()=>{l==null||l(),He(C)},onDestroy:()=>{H(null,u)}},p=_(Fe,d,M(d.message)||W(d.message)?{default:M(d.message)?d.message:()=>d.message}:null);p.appContext=e||v._context,H(p,u),s.appendChild(u.firstElementChild);const h=p.component,C={id:a,vnode:p,vm:h,handler:{close:()=>{h.exposed.visible.value=!1}},props:p.component.props};return C},v=(s={},t)=>{if(!K)return{close:()=>{}};if(S($.max)&&c.length>=$.max)return{close:()=>{}};const e=Q(s);if(e.grouping&&c.length){const a=c.find(({vnode:l})=>{var u;return((u=l.props)==null?void 0:u.message)===e.message});if(a)return a.props.repeatNum+=1,a.props.type=e.type,a.handler}const o=Re(e,t);return c.push(o),o.handler};J.forEach(s=>{v[s]=(t={},e)=>{const o=Q(t);return v({...o,type:s},e)}});function Ve(s){for(const t of c)(!s||s===t.props.type)&&t.handler.close()}v.closeAll=Ve;v._context=null;const Ge=Te(v,"$message");export{Ge as E};
