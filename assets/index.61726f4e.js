import{l as N,p as ue,f as de,a_ as ce,g as k,aU as ke,az as be,z as b,G as se,a0 as fe,E as ve,o as _,h as le,d,w as E,a as m,X as f,u as e,as as _e,a4 as I,c as S,F as oe,a3 as Ie,aj as Le,V as Ee,W as Ce,Y as re,R as K,Z as ze,ab as Oe,U as M,aD as xe,T as Se,t as Te,a8 as Ne,n as $e,c6 as Ae}from"./app.8c8a4a35.js";import{aN as Re,H as Be,e as me,p as ie,ao as Me,aO as Ve,G as pe,u as ge,c as De,s as x,a5 as Fe,ad as Ye,ae as Xe,aP as He,az as Pe,aQ as We,aR as je,_ as we,J as B,aF as Ze,w as ye}from"./document.119ae42e.js";import{m as he}from"./typescript.72bf8adc.js";import{u as Ge}from"./index.31f66c9b.js";import{a as Ue}from"./scroll.16fc5126.js";var qe="Expected a function";function ne(u,v,l){var s=!0,p=!0;if(typeof u!="function")throw new TypeError(qe);return Re(l)&&(s="leading"in l?!!l.leading:s,p="trailing"in l?!!l.trailing:p),Be(u,v,{leading:s,maxWait:v,trailing:p})}const Je=(u,v)=>{if(!N||!u||!v)return!1;const l=u.getBoundingClientRect();let s;return v instanceof Element?s=v.getBoundingClientRect():s={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},l.top<s.bottom&&l.bottom>s.top&&l.right>s.left&&l.left<s.right},Ke=()=>N&&/firefox/i.test(window.navigator.userAgent),Qe=me({urlList:{type:ie(Array),default:()=>he([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0}}),et={close:()=>!0,switch:u=>ue(u)},tt=["src"],at={name:"ElImageViewer"},nt=de({...at,props:Qe,emits:et,setup(u,{expose:v,emit:l}){const s=u,p={CONTAIN:{name:"contain",icon:ce(Me)},ORIGINAL:{name:"original",icon:ce(Ve)}},C=Ke()?"DOMMouseScroll":"mousewheel",{t:Q}=pe(),r=ge("image-viewer"),{nextZIndex:V}=De(),g=k(),L=k([]),$=ke(),w=k(!0),c=k(s.initialIndex),A=be(p.CONTAIN),i=k({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),D=b(()=>{const{urlList:t}=s;return t.length<=1}),H=b(()=>c.value===0),P=b(()=>c.value===s.urlList.length-1),F=b(()=>s.urlList[c.value]),ee=b(()=>{const{scale:t,deg:n,offsetX:o,offsetY:y,enableTransition:z}=i.value;let h=o/t,O=y/t;switch(n%360){case 90:case-270:[h,O]=[O,-h];break;case 180:case-180:[h,O]=[-h,-O];break;case 270:case-90:[h,O]=[-O,h];break}const R={transform:`scale(${t}) rotate(${n}deg) translate(${h}px, ${O}px)`,transition:z?"transform .3s":""};return A.value.name===p.CONTAIN.name&&(R.maxWidth=R.maxHeight="100%"),R}),W=b(()=>ue(s.zIndex)?s.zIndex:V());function T(){ae(),l("close")}function te(){const t=ne(o=>{switch(o.code){case B.esc:s.closeOnPressEscape&&T();break;case B.space:U();break;case B.left:q();break;case B.up:a("zoomIn");break;case B.right:J();break;case B.down:a("zoomOut");break}}),n=ne(o=>{(o.wheelDelta?o.wheelDelta:-o.detail)>0?a("zoomIn",{zoomRate:1.2,enableTransition:!1}):a("zoomOut",{zoomRate:1.2,enableTransition:!1})});$.run(()=>{M(document,"keydown",t),M(document,C,n)})}function ae(){$.stop()}function j(){w.value=!1}function Z(t){w.value=!1,t.target.alt=Q("el.image.error")}function G(t){if(w.value||t.button!==0||!g.value)return;i.value.enableTransition=!1;const{offsetX:n,offsetY:o}=i.value,y=t.pageX,z=t.pageY,h=ne(R=>{i.value={...i.value,offsetX:n+R.pageX-y,offsetY:o+R.pageY-z}}),O=M(document,"mousemove",h);M(document,"mouseup",()=>{O()}),t.preventDefault()}function Y(){i.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function U(){if(w.value)return;const t=Ze(p),n=Object.values(p),o=A.value.name,z=(n.findIndex(h=>h.name===o)+1)%t.length;A.value=p[t[z]],Y()}function X(t){const n=s.urlList.length;c.value=(t+n)%n}function q(){H.value&&!s.infinite||X(c.value-1)}function J(){P.value&&!s.infinite||X(c.value+1)}function a(t,n={}){if(w.value)return;const{zoomRate:o,rotateDeg:y,enableTransition:z}={zoomRate:1.4,rotateDeg:90,enableTransition:!0,...n};switch(t){case"zoomOut":i.value.scale>.2&&(i.value.scale=Number.parseFloat((i.value.scale/o).toFixed(3)));break;case"zoomIn":i.value.scale<7&&(i.value.scale=Number.parseFloat((i.value.scale*o).toFixed(3)));break;case"clockwise":i.value.deg+=y;break;case"anticlockwise":i.value.deg-=y;break}i.value.enableTransition=z}return se(F,()=>{fe(()=>{const t=L.value[0];t!=null&&t.complete||(w.value=!0)})}),se(c,t=>{Y(),l("switch",t)}),ve(()=>{var t,n;te(),(n=(t=g.value)==null?void 0:t.focus)==null||n.call(t)}),v({setActiveItem:X}),(t,n)=>(_(),le(Oe,{to:"body",disabled:!t.teleported},[d(ze,{name:"viewer-fade",appear:""},{default:E(()=>[m("div",{ref_key:"wrapper",ref:g,tabindex:-1,class:f(e(r).e("wrapper")),style:re({zIndex:e(W)})},[m("div",{class:f(e(r).e("mask")),onClick:n[0]||(n[0]=_e(o=>t.hideOnClickModal&&T(),["self"]))},null,2),I(" CLOSE "),m("span",{class:f([e(r).e("btn"),e(r).e("close")]),onClick:T},[d(e(x),null,{default:E(()=>[d(e(Fe))]),_:1})],2),I(" ARROW "),e(D)?I("v-if",!0):(_(),S(oe,{key:0},[m("span",{class:f([e(r).e("btn"),e(r).e("prev"),e(r).is("disabled",!t.infinite&&e(H))]),onClick:q},[d(e(x),null,{default:E(()=>[d(e(Ye))]),_:1})],2),m("span",{class:f([e(r).e("btn"),e(r).e("next"),e(r).is("disabled",!t.infinite&&e(P))]),onClick:J},[d(e(x),null,{default:E(()=>[d(e(Xe))]),_:1})],2)],64)),I(" ACTIONS "),m("div",{class:f([e(r).e("btn"),e(r).e("actions")])},[m("div",{class:f(e(r).e("actions__inner"))},[d(e(x),{onClick:n[1]||(n[1]=o=>a("zoomOut"))},{default:E(()=>[d(e(He))]),_:1}),d(e(x),{onClick:n[2]||(n[2]=o=>a("zoomIn"))},{default:E(()=>[d(e(Pe))]),_:1}),m("i",{class:f(e(r).e("actions__divider"))},null,2),d(e(x),{onClick:U},{default:E(()=>[(_(),le(Ie(e(A).icon)))]),_:1}),m("i",{class:f(e(r).e("actions__divider"))},null,2),d(e(x),{onClick:n[3]||(n[3]=o=>a("anticlockwise"))},{default:E(()=>[d(e(We))]),_:1}),d(e(x),{onClick:n[4]||(n[4]=o=>a("clockwise"))},{default:E(()=>[d(e(je))]),_:1})],2)],2),I(" CANVAS "),m("div",{class:f(e(r).e("canvas"))},[(_(!0),S(oe,null,Le(t.urlList,(o,y)=>Ee((_(),S("img",{ref_for:!0,ref:z=>L.value[y]=z,key:o,src:o,style:re(e(ee)),class:f(e(r).e("img")),onLoad:j,onError:Z,onMousedown:G},null,46,tt)),[[Ce,y===c.value]])),128))],2),K(t.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var st=we(nt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const lt=ye(st),ot=me({hideOnClickModal:{type:Boolean,default:!1},src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:{type:Boolean,default:!1},scrollContainer:{type:ie([String,Object])},previewSrcList:{type:ie(Array),default:()=>he([])},previewTeleported:{type:Boolean,default:!1},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0}}),rt={load:u=>u instanceof Event,error:u=>u instanceof Event,switch:u=>ue(u),close:()=>!0,show:()=>!0},it=["src","loading"],ut={key:0},ct={name:"ElImage",inheritAttrs:!1},dt=de({...ct,props:ot,emits:rt,setup(u,{emit:v}){const l=u;let s="";const{t:p}=pe(),C=ge("image"),Q=xe(),r=Ge(),V=k(),g=k(!1),L=k(!0),$=k(!1),w=k(),c=k(),A=N&&"loading"in HTMLImageElement.prototype;let i,D;const H=b(()=>Q.style),P=b(()=>{const{fit:a}=l;return N&&a?{objectFit:a}:{}}),F=b(()=>{const{previewSrcList:a}=l;return Array.isArray(a)&&a.length>0}),ee=b(()=>{const{previewSrcList:a,initialIndex:t}=l;let n=t;return t>a.length-1&&(n=0),n}),W=b(()=>l.loading==="eager"?!1:!A&&l.loading==="lazy"||l.lazy),T=()=>{!N||(L.value=!0,g.value=!1,V.value=l.src)};function te(a){L.value=!1,g.value=!1,v("load",a)}function ae(a){L.value=!1,g.value=!0,v("error",a)}function j(){Je(w.value,c.value)&&(T(),Y())}const Z=Ae(j,200);async function G(){var a;if(!N)return;await fe();const{scrollContainer:t}=l;Ne(t)?c.value=t:$e(t)&&t!==""?c.value=(a=document.querySelector(t))!=null?a:void 0:w.value&&(c.value=Ue(w.value)),c.value&&(i=M(c,"scroll",Z),setTimeout(()=>j(),100))}function Y(){!N||!c.value||!Z||(i==null||i(),c.value=void 0)}function U(a){if(!!a.ctrlKey){if(a.deltaY<0)return a.preventDefault(),!1;if(a.deltaY>0)return a.preventDefault(),!1}}function X(){!F.value||(D=M("wheel",U,{passive:!1}),s=document.body.style.overflow,document.body.style.overflow="hidden",$.value=!0,v("show"))}function q(){D==null||D(),document.body.style.overflow=s,$.value=!1,v("close")}function J(a){v("switch",a)}return se(()=>l.src,()=>{W.value?(L.value=!0,g.value=!1,Y(),G()):T()}),ve(()=>{W.value?G():T()}),(a,t)=>(_(),S("div",{ref_key:"container",ref:w,class:f([e(C).b(),a.$attrs.class]),style:re(e(H))},[V.value!==void 0&&!g.value?(_(),S("img",Se({key:0},e(r),{src:V.value,loading:a.loading,style:e(P),class:[e(C).e("inner"),e(F)&&e(C).e("preview"),L.value&&e(C).is("loading")],onClick:X,onLoad:te,onError:ae}),null,16,it)):I("v-if",!0),L.value||g.value?(_(),S("div",{key:1,class:f(e(C).e("wrapper"))},[L.value?K(a.$slots,"placeholder",{key:0},()=>[m("div",{class:f(e(C).e("placeholder"))},null,2)]):g.value?K(a.$slots,"error",{key:1},()=>[m("div",{class:f(e(C).e("error"))},Te(e(p)("el.image.error")),3)]):I("v-if",!0)],2)):I("v-if",!0),e(F)?(_(),S(oe,{key:2},[$.value?(_(),le(e(lt),{key:0,"z-index":a.zIndex,"initial-index":e(ee),infinite:a.infinite,"url-list":a.previewSrcList,"hide-on-click-modal":a.hideOnClickModal,teleported:a.previewTeleported,"close-on-press-escape":a.closeOnPressEscape,onClose:q,onSwitch:J},{default:E(()=>[a.$slots.viewer?(_(),S("div",ut,[K(a.$slots,"viewer")])):I("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):I("v-if",!0)],64)):I("v-if",!0)],6))}});var ft=we(dt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const yt=ye(ft);export{yt as E};
