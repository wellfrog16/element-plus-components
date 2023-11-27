import{f as j,E as S,I as ce,v as ee,o as g,c as E,a0 as v,u as e,a as N,a1 as A,U as L,t as H,a8 as k,h as D,w as _,a7 as Re,B as pe,N as P,g as fe,an as Fe,aw as me,d as O,ak as q,F as Le,bT as _e,D as Te,M as Q,c4 as te,c5 as Ue,J as se,O as De,R as Be,W as Oe,ay as ae,V as oe}from"./app.0bb1a7b5.js";import{d as K,y as b,h as z,av as Ne,aw as ve,$ as je,ax as ye,a5 as ge,B as I,_ as W,w as he,G as x,a4 as be,o as Ae,f as V,ay as Ie,az as Me,aA as qe,L as ze,aB as Ke,l as We}from"./document.a03dcdd3.js";import{m as Y}from"./typescript.72bf8adc.js";import{c as ne}from"./cloneDeep.791d82e0.js";const He=K({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:o=>o>=0&&o<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:b(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:b([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:b(Function),default:o=>`${o}%`}}),Ve=["aria-valuenow"],Xe={viewBox:"0 0 100 100"},Ge=["d","stroke","stroke-linecap","stroke-width"],Je=["d","stroke","opacity","stroke-linecap","stroke-width"],Qe={key:0},Ye=j({name:"ElProgress"}),Ze=j({...Ye,props:He,setup(o){const t=o,s={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},u=z("progress"),f=S(()=>({width:`${t.percentage}%`,animationDuration:`${t.duration}s`,backgroundColor:R(t.percentage)})),c=S(()=>(t.strokeWidth/t.width*100).toFixed(1)),y=S(()=>["circle","dashboard"].includes(t.type)?Number.parseInt(`${50-Number.parseFloat(c.value)/2}`,10):0),C=S(()=>{const r=y.value,F=t.type==="dashboard";return`
          M 50 50
          m 0 ${F?"":"-"}${r}
          a ${r} ${r} 0 1 1 0 ${F?"-":""}${r*2}
          a ${r} ${r} 0 1 1 0 ${F?"":"-"}${r*2}
          `}),h=S(()=>2*Math.PI*y.value),$=S(()=>t.type==="dashboard"?.75:1),w=S(()=>`${-1*h.value*(1-$.value)/2}px`),m=S(()=>({strokeDasharray:`${h.value*$.value}px, ${h.value}px`,strokeDashoffset:w.value})),l=S(()=>({strokeDasharray:`${h.value*$.value*(t.percentage/100)}px, ${h.value}px`,strokeDashoffset:w.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),a=S(()=>{let r;return t.color?r=R(t.percentage):r=s[t.status]||s.default,r}),d=S(()=>t.status==="warning"?Ne:t.type==="line"?t.status==="success"?ve:je:t.status==="success"?ye:ge),n=S(()=>t.type==="line"?12+t.strokeWidth*.4:t.width*.111111+2),p=S(()=>t.format(t.percentage));function i(r){const F=100/r.length;return r.map((T,U)=>ee(T)?{color:T,percentage:(U+1)*F}:T).sort((T,U)=>T.percentage-U.percentage)}const R=r=>{var F;const{color:B}=t;if(ce(B))return B(r);if(ee(B))return B;{const T=i(B);for(const U of T)if(U.percentage>r)return U.color;return(F=T[T.length-1])==null?void 0:F.color}};return(r,F)=>(g(),E("div",{class:v([e(u).b(),e(u).m(r.type),e(u).is(r.status),{[e(u).m("without-text")]:!r.showText,[e(u).m("text-inside")]:r.textInside}]),role:"progressbar","aria-valuenow":r.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[r.type==="line"?(g(),E("div",{key:0,class:v(e(u).b("bar"))},[N("div",{class:v(e(u).be("bar","outer")),style:A({height:`${r.strokeWidth}px`})},[N("div",{class:v([e(u).be("bar","inner"),{[e(u).bem("bar","inner","indeterminate")]:r.indeterminate},{[e(u).bem("bar","inner","striped")]:r.striped},{[e(u).bem("bar","inner","striped-flow")]:r.stripedFlow}]),style:A(e(f))},[(r.showText||r.$slots.default)&&r.textInside?(g(),E("div",{key:0,class:v(e(u).be("bar","innerText"))},[L(r.$slots,"default",{percentage:r.percentage},()=>[N("span",null,H(e(p)),1)])],2)):k("v-if",!0)],6)],6)],2)):(g(),E("div",{key:1,class:v(e(u).b("circle")),style:A({height:`${r.width}px`,width:`${r.width}px`})},[(g(),E("svg",Xe,[N("path",{class:v(e(u).be("circle","track")),d:e(C),stroke:`var(${e(u).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-linecap":r.strokeLinecap,"stroke-width":e(c),fill:"none",style:A(e(m))},null,14,Ge),N("path",{class:v(e(u).be("circle","path")),d:e(C),stroke:e(a),fill:"none",opacity:r.percentage?1:0,"stroke-linecap":r.strokeLinecap,"stroke-width":e(c),style:A(e(l))},null,14,Je)]))],6)),(r.showText||r.$slots.default)&&!r.textInside?(g(),E("div",{key:2,class:v(e(u).e("text")),style:A({fontSize:`${e(n)}px`})},[L(r.$slots,"default",{percentage:r.percentage},()=>[r.status?(g(),D(e(I),{key:1},{default:_(()=>[(g(),D(Re(e(d))))]),_:1})):(g(),E("span",Qe,H(e(p)),1))])],6)):k("v-if",!0)],10,Ve))}});var xe=W(Ze,[["__file","/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]]);const et=he(xe),ke=Symbol("uploadContextKey"),tt="ElUpload";class st extends Error{constructor(t,s,u,f){super(t),this.name="UploadAjaxError",this.status=s,this.method=u,this.url=f}}function re(o,t,s){let u;return s.response?u=`${s.response.error||s.response}`:s.responseText?u=`${s.responseText}`:u=`fail to ${t.method} ${o} ${s.status}`,new st(u,s.status,t.method,o)}function at(o){const t=o.responseText||o.response;if(!t)return t;try{return JSON.parse(t)}catch{return t}}const ot=o=>{typeof XMLHttpRequest>"u"&&x(tt,"XMLHttpRequest is undefined");const t=new XMLHttpRequest,s=o.action;t.upload&&t.upload.addEventListener("progress",c=>{const y=c;y.percent=c.total>0?c.loaded/c.total*100:0,o.onProgress(y)});const u=new FormData;if(o.data)for(const[c,y]of Object.entries(o.data))pe(y)&&y.length?u.append(c,...y):u.append(c,y);u.append(o.filename,o.file,o.file.name),t.addEventListener("error",()=>{o.onError(re(s,o,t))}),t.addEventListener("load",()=>{if(t.status<200||t.status>=300)return o.onError(re(s,o,t));o.onSuccess(at(t))}),t.open(o.method,s,!0),o.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);const f=o.headers||{};if(f instanceof Headers)f.forEach((c,y)=>t.setRequestHeader(y,c));else for(const[c,y]of Object.entries(f))be(y)||t.setRequestHeader(c,String(y));return t.send(u),t},$e=["text","picture","picture-card"];let nt=1;const Z=()=>Date.now()+nt++,we=K({action:{type:String,default:"#"},headers:{type:b(Object)},method:{type:String,default:"post"},data:{type:b([Object,Function,Promise]),default:()=>Y({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},fileList:{type:b(Array),default:()=>Y([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:$e,default:"text"},httpRequest:{type:b(Function),default:ot},disabled:Boolean,limit:Number}),rt=K({...we,beforeUpload:{type:b(Function),default:P},beforeRemove:{type:b(Function)},onRemove:{type:b(Function),default:P},onChange:{type:b(Function),default:P},onPreview:{type:b(Function),default:P},onSuccess:{type:b(Function),default:P},onProgress:{type:b(Function),default:P},onError:{type:b(Function),default:P},onExceed:{type:b(Function),default:P}}),lt=K({files:{type:b(Array),default:()=>Y([])},disabled:{type:Boolean,default:!1},handlePreview:{type:b(Function),default:P},listType:{type:String,values:$e,default:"text"}}),it={remove:o=>!!o},ut=["onKeydown"],dt=["src"],ct=["onClick"],pt=["title"],ft=["onClick"],mt=["onClick"],vt=j({name:"ElUploadList"}),yt=j({...vt,props:lt,emits:it,setup(o,{emit:t}){const s=o,{t:u}=Ae(),f=z("upload"),c=z("icon"),y=z("list"),C=V(),h=fe(!1),$=S(()=>[f.b("list"),f.bm("list",s.listType),f.is("disabled",s.disabled)]),w=m=>{t("remove",m)};return(m,l)=>(g(),D(_e,{tag:"ul",class:v(e($)),name:e(y).b()},{default:_(()=>[(g(!0),E(Le,null,Fe(m.files,a=>(g(),E("li",{key:a.uid||a.name,class:v([e(f).be("list","item"),e(f).is(a.status),{focusing:h.value}]),tabindex:"0",onKeydown:me(d=>!e(C)&&w(a),["delete"]),onFocus:l[0]||(l[0]=d=>h.value=!0),onBlur:l[1]||(l[1]=d=>h.value=!1),onClick:l[2]||(l[2]=d=>h.value=!1)},[L(m.$slots,"default",{file:a},()=>[m.listType==="picture"||a.status!=="uploading"&&m.listType==="picture-card"?(g(),E("img",{key:0,class:v(e(f).be("list","item-thumbnail")),src:a.url,alt:""},null,10,dt)):k("v-if",!0),a.status==="uploading"||m.listType!=="picture-card"?(g(),E("div",{key:1,class:v(e(f).be("list","item-info"))},[N("a",{class:v(e(f).be("list","item-name")),onClick:q(d=>m.handlePreview(a),["prevent"])},[O(e(I),{class:v(e(c).m("document"))},{default:_(()=>[O(e(Ie))]),_:1},8,["class"]),N("span",{class:v(e(f).be("list","item-file-name")),title:a.name},H(a.name),11,pt)],10,ct),a.status==="uploading"?(g(),D(e(et),{key:0,type:m.listType==="picture-card"?"circle":"line","stroke-width":m.listType==="picture-card"?6:2,percentage:Number(a.percentage),style:A(m.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):k("v-if",!0)],2)):k("v-if",!0),N("label",{class:v(e(f).be("list","item-status-label"))},[m.listType==="text"?(g(),D(e(I),{key:0,class:v([e(c).m("upload-success"),e(c).m("circle-check")])},{default:_(()=>[O(e(ve))]),_:1},8,["class"])):["picture-card","picture"].includes(m.listType)?(g(),D(e(I),{key:1,class:v([e(c).m("upload-success"),e(c).m("check")])},{default:_(()=>[O(e(ye))]),_:1},8,["class"])):k("v-if",!0)],2),e(C)?k("v-if",!0):(g(),D(e(I),{key:2,class:v(e(c).m("close")),onClick:d=>w(a)},{default:_(()=>[O(e(ge))]),_:2},1032,["class","onClick"])),k(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),k(" This is a bug which needs to be fixed "),k(" TODO: Fix the incorrect navigation interaction "),e(C)?k("v-if",!0):(g(),E("i",{key:3,class:v(e(c).m("close-tip"))},H(e(u)("el.upload.deleteTip")),3)),m.listType==="picture-card"?(g(),E("span",{key:4,class:v(e(f).be("list","item-actions"))},[N("span",{class:v(e(f).be("list","item-preview")),onClick:d=>m.handlePreview(a)},[O(e(I),{class:v(e(c).m("zoom-in"))},{default:_(()=>[O(e(Me))]),_:1},8,["class"])],10,ft),e(C)?k("v-if",!0):(g(),E("span",{key:0,class:v(e(f).be("list","item-delete")),onClick:d=>w(a)},[O(e(I),{class:v(e(c).m("delete"))},{default:_(()=>[O(e(qe))]),_:1},8,["class"])],10,mt))],2)):k("v-if",!0)])],42,ut))),128)),L(m.$slots,"append")]),_:3},8,["class","name"]))}});var le=W(yt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);const gt=K({disabled:{type:Boolean,default:!1}}),ht={file:o=>pe(o)},bt=["onDrop","onDragover"],Ee="ElUploadDrag",kt=j({name:Ee}),$t=j({...kt,props:gt,emits:ht,setup(o,{emit:t}){const s=Te(ke);s||x(Ee,"usage: <el-upload><el-upload-dragger /></el-upload>");const u=z("upload"),f=fe(!1),c=V(),y=h=>{if(c.value)return;f.value=!1,h.stopPropagation();const $=Array.from(h.dataTransfer.files),w=s.accept.value;if(!w){t("file",$);return}const m=$.filter(l=>{const{type:a,name:d}=l,n=d.includes(".")?`.${d.split(".").pop()}`:"",p=a.replace(/\/.*$/,"");return w.split(",").map(i=>i.trim()).filter(i=>i).some(i=>i.startsWith(".")?n===i:/\/\*$/.test(i)?p===i.replace(/\/\*$/,""):/^[^/]+\/[^/]+$/.test(i)?a===i:!1)});t("file",m)},C=()=>{c.value||(f.value=!0)};return(h,$)=>(g(),E("div",{class:v([e(u).b("dragger"),e(u).is("dragover",f.value)]),onDrop:q(y,["prevent"]),onDragover:q(C,["prevent"]),onDragleave:$[0]||($[0]=q(w=>f.value=!1,["prevent"]))},[L(h.$slots,"default")],42,bt))}});var wt=W($t,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const Et=K({...we,beforeUpload:{type:b(Function),default:P},onRemove:{type:b(Function),default:P},onStart:{type:b(Function),default:P},onSuccess:{type:b(Function),default:P},onProgress:{type:b(Function),default:P},onError:{type:b(Function),default:P},onExceed:{type:b(Function),default:P}}),Ct=["onKeydown"],St=["name","multiple","accept"],Pt=j({name:"ElUploadContent",inheritAttrs:!1}),Rt=j({...Pt,props:Et,setup(o,{expose:t}){const s=o,u=z("upload"),f=V(),c=Q({}),y=Q(),C=n=>{if(n.length===0)return;const{autoUpload:p,limit:i,fileList:R,multiple:r,onStart:F,onExceed:B}=s;if(i&&R.length+n.length>i){B(n,R);return}r||(n=n.slice(0,1));for(const T of n){const U=T;U.uid=Z(),F(U),p&&h(U)}},h=async n=>{if(y.value.value="",!s.beforeUpload)return w(n);let p,i={};try{const r=s.data,F=s.beforeUpload(n);i=te(s.data)?ne(s.data):s.data,p=await F,te(s.data)&&ze(r,i)&&(i=ne(s.data))}catch{p=!1}if(p===!1){s.onRemove(n);return}let R=n;p instanceof Blob&&(p instanceof File?R=p:R=new File([p],n.name,{type:n.type})),w(Object.assign(R,{uid:n.uid}),i)},$=async(n,p)=>ce(n)?n(p):n,w=async(n,p)=>{const{headers:i,data:R,method:r,withCredentials:F,name:B,action:T,onProgress:U,onSuccess:Ce,onError:Se,httpRequest:Pe}=s;try{p=await $(p!=null?p:R,n)}catch{s.onRemove(n);return}const{uid:X}=n,G={headers:i||{},withCredentials:F,file:n,data:p,method:r,filename:B,action:T,onProgress:M=>{U(M,n)},onSuccess:M=>{Ce(M,n),delete c.value[X]},onError:M=>{Se(M,n),delete c.value[X]}},J=Pe(G);c.value[X]=J,J instanceof Promise&&J.then(G.onSuccess,G.onError)},m=n=>{const p=n.target.files;!p||C(Array.from(p))},l=()=>{f.value||(y.value.value="",y.value.click())},a=()=>{l()};return t({abort:n=>{Ke(c.value).filter(n?([i])=>String(n.uid)===i:()=>!0).forEach(([i,R])=>{R instanceof XMLHttpRequest&&R.abort(),delete c.value[i]})},upload:h}),(n,p)=>(g(),E("div",{class:v([e(u).b(),e(u).m(n.listType),e(u).is("drag",n.drag)]),tabindex:"0",onClick:l,onKeydown:me(q(a,["self"]),["enter","space"])},[n.drag?(g(),D(wt,{key:0,disabled:e(f),onFile:C},{default:_(()=>[L(n.$slots,"default")]),_:3},8,["disabled"])):L(n.$slots,"default",{key:1}),N("input",{ref_key:"inputRef",ref:y,class:v(e(u).e("input")),name:n.name,multiple:n.multiple,accept:n.accept,type:"file",onChange:m,onClick:p[0]||(p[0]=q(()=>{},["stop"]))},null,42,St)],42,Ct))}});var ie=W(Rt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);const ue="ElUpload",de=o=>{var t;(t=o.url)!=null&&t.startsWith("blob:")&&URL.revokeObjectURL(o.url)},Ft=(o,t)=>{const s=Ue(o,"fileList",void 0,{passive:!0}),u=l=>s.value.find(a=>a.uid===l.uid);function f(l){var a;(a=t.value)==null||a.abort(l)}function c(l=["ready","uploading","success","fail"]){s.value=s.value.filter(a=>!l.includes(a.status))}const y=(l,a)=>{const d=u(a);!d||(console.error(l),d.status="fail",s.value.splice(s.value.indexOf(d),1),o.onError(l,d,s.value),o.onChange(d,s.value))},C=(l,a)=>{const d=u(a);!d||(o.onProgress(l,d,s.value),d.status="uploading",d.percentage=Math.round(l.percent))},h=(l,a)=>{const d=u(a);!d||(d.status="success",d.response=l,o.onSuccess(l,d,s.value),o.onChange(d,s.value))},$=l=>{be(l.uid)&&(l.uid=Z());const a={name:l.name,percentage:0,status:"ready",size:l.size,raw:l,uid:l.uid};if(o.listType==="picture-card"||o.listType==="picture")try{a.url=URL.createObjectURL(l)}catch(d){We(ue,d.message),o.onError(d,a,s.value)}s.value=[...s.value,a],o.onChange(a,s.value)},w=async l=>{const a=l instanceof File?u(l):l;a||x(ue,"file to be removed not found");const d=n=>{f(n);const p=s.value;p.splice(p.indexOf(n),1),o.onRemove(n,p),de(n)};o.beforeRemove?await o.beforeRemove(a,s.value)!==!1&&d(a):d(a)};function m(){s.value.filter(({status:l})=>l==="ready").forEach(({raw:l})=>{var a;return l&&((a=t.value)==null?void 0:a.upload(l))})}return se(()=>o.listType,l=>{l!=="picture-card"&&l!=="picture"||(s.value=s.value.map(a=>{const{raw:d,url:n}=a;if(!n&&d)try{a.url=URL.createObjectURL(d)}catch(p){o.onError(p,a,s.value)}return a}))}),se(s,l=>{for(const a of l)a.uid||(a.uid=Z()),a.status||(a.status="success")},{immediate:!0,deep:!0}),{uploadFiles:s,abort:f,clearFiles:c,handleError:y,handleProgress:C,handleStart:$,handleSuccess:h,handleRemove:w,submit:m,revokeFileObjectURL:de}},Lt=j({name:"ElUpload"}),_t=j({...Lt,props:rt,setup(o,{expose:t}){const s=o,u=V(),f=Q(),{abort:c,submit:y,clearFiles:C,uploadFiles:h,handleStart:$,handleError:w,handleRemove:m,handleSuccess:l,handleProgress:a,revokeFileObjectURL:d}=Ft(s,f),n=S(()=>s.listType==="picture-card"),p=S(()=>({...s,fileList:h.value,onStart:$,onProgress:a,onSuccess:l,onError:w,onRemove:m}));return De(()=>{h.value.forEach(d)}),Be(ke,{accept:Oe(s,"accept")}),t({abort:c,submit:y,clearFiles:C,handleStart:$,handleRemove:m}),(i,R)=>(g(),E("div",null,[e(n)&&i.showFileList?(g(),D(le,{key:0,disabled:e(u),"list-type":i.listType,files:e(h),"handle-preview":i.onPreview,onRemove:e(m)},ae({append:_(()=>[O(ie,oe({ref_key:"uploadRef",ref:f},e(p)),{default:_(()=>[i.$slots.trigger?L(i.$slots,"trigger",{key:0}):k("v-if",!0),!i.$slots.trigger&&i.$slots.default?L(i.$slots,"default",{key:1}):k("v-if",!0)]),_:3},16)]),_:2},[i.$slots.file?{name:"default",fn:_(({file:r})=>[L(i.$slots,"file",{file:r})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):k("v-if",!0),!e(n)||e(n)&&!i.showFileList?(g(),D(ie,oe({key:1,ref_key:"uploadRef",ref:f},e(p)),{default:_(()=>[i.$slots.trigger?L(i.$slots,"trigger",{key:0}):k("v-if",!0),!i.$slots.trigger&&i.$slots.default?L(i.$slots,"default",{key:1}):k("v-if",!0)]),_:3},16)):k("v-if",!0),i.$slots.trigger?L(i.$slots,"default",{key:2}):k("v-if",!0),L(i.$slots,"tip"),!e(n)&&i.showFileList?(g(),D(le,{key:3,disabled:e(u),"list-type":i.listType,files:e(h),"handle-preview":i.onPreview,onRemove:e(m)},ae({_:2},[i.$slots.file?{name:"default",fn:_(({file:r})=>[L(i.$slots,"file",{file:r})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):k("v-if",!0)]))}});var Tt=W(_t,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]);const Nt=he(Tt);export{Nt as E};
