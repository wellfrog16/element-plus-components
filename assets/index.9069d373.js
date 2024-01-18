import{s as V,f as ee,aW as fe,g as I,aQ as ke,J as Ie,B as m,H as ie,a0 as ve,I as me,o as y,h as ue,d as c,w as L,a as w,X as d,u as t,af as _e,a4 as C,c as x,F as J,a3 as ze,ai as Le,V as Ce,W as Ee,Y as ce,P as U,Z as Se,a8 as xe,U as Y,aA as Ne,t as Oe,Q as Te,q as Re,aJ as $e}from"./app.a3d32ab8.js";import{aU as Ae,Y as Be,d as pe,B as de,i as Q,au as Ve,bc as Ye,q as ge,j as we,s as Me,G as O,a9 as Xe,aj as Pe,ak as De,bd as Fe,aG as He,be as We,bf as je,_ as ye,Z as B,y as Ze,w as be,ax as Ke}from"./document.e6cb366c.js";import{m as he,u as qe}from"./index.df5f81fa.js";import{a as Ge}from"./scroll.8f620859.js";var Ue="Expected a function";function re(r,f,l){var s=!0,b=!0;if(typeof r!="function")throw new TypeError(Ue);return Ae(l)&&(s="leading"in l?!!l.leading:s,b="trailing"in l?!!l.trailing:b),Be(r,f,{leading:s,maxWait:f,trailing:b})}const Je=(r,f)=>{if(!V||!r||!f)return!1;const l=r.getBoundingClientRect();let s;return f instanceof Element?s=f.getBoundingClientRect():s={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},l.top<s.bottom&&l.bottom>s.top&&l.right>s.left&&l.left<s.right},Qe=pe({urlList:{type:de(Array),default:()=>he([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7}}),ea={close:()=>!0,switch:r=>Q(r),rotate:r=>Q(r)},aa=["src"],ta=ee({name:"ElImageViewer"}),na=ee({...ta,props:Qe,emits:ea,setup(r,{expose:f,emit:l}){const s=r,b={CONTAIN:{name:"contain",icon:fe(Ve)},ORIGINAL:{name:"original",icon:fe(Ye)}},{t:E}=ge(),i=we("image-viewer"),{nextZIndex:ae}=Me(),T=I(),N=I([]),S=ke(),_=I(!0),p=I(s.initialIndex),g=Ie(b.CONTAIN),u=I({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),M=m(()=>{const{urlList:a}=s;return a.length<=1}),$=m(()=>p.value===0),F=m(()=>p.value===s.urlList.length-1),te=m(()=>s.urlList[p.value]),ne=m(()=>[i.e("btn"),i.e("prev"),i.is("disabled",!s.infinite&&$.value)]),X=m(()=>[i.e("btn"),i.e("next"),i.is("disabled",!s.infinite&&F.value)]),se=m(()=>{const{scale:a,deg:n,offsetX:o,offsetY:h,enableTransition:z}=u.value;let v=o/a,k=h/a;switch(n%360){case 90:case-270:[v,k]=[k,-v];break;case 180:case-180:[v,k]=[-v,-k];break;case 270:case-90:[v,k]=[-k,v];break}const A={transform:`scale(${a}) rotate(${n}deg) translate(${v}px, ${k}px)`,transition:z?"transform .3s":""};return g.value.name===b.CONTAIN.name&&(A.maxWidth=A.maxHeight="100%"),A}),H=m(()=>Q(s.zIndex)?s.zIndex:ae());function R(){oe(),l("close")}function le(){const a=re(o=>{switch(o.code){case B.esc:s.closeOnPressEscape&&R();break;case B.space:K();break;case B.left:q();break;case B.up:e("zoomIn");break;case B.right:G();break;case B.down:e("zoomOut");break}}),n=re(o=>{const h=o.deltaY||o.deltaX;e(h<0?"zoomIn":"zoomOut",{zoomRate:s.zoomRate,enableTransition:!1})});S.run(()=>{Y(document,"keydown",a),Y(document,"wheel",n)})}function oe(){S.stop()}function W(){_.value=!1}function j(a){_.value=!1,a.target.alt=E("el.image.error")}function Z(a){if(_.value||a.button!==0||!T.value)return;u.value.enableTransition=!1;const{offsetX:n,offsetY:o}=u.value,h=a.pageX,z=a.pageY,v=re(A=>{u.value={...u.value,offsetX:n+A.pageX-h,offsetY:o+A.pageY-z}}),k=Y(document,"mousemove",v);Y(document,"mouseup",()=>{k()}),a.preventDefault()}function P(){u.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function K(){if(_.value)return;const a=Ze(b),n=Object.values(b),o=g.value.name,z=(n.findIndex(v=>v.name===o)+1)%a.length;g.value=b[a[z]],P()}function D(a){const n=s.urlList.length;p.value=(a+n)%n}function q(){$.value&&!s.infinite||D(p.value-1)}function G(){F.value&&!s.infinite||D(p.value+1)}function e(a,n={}){if(_.value)return;const{minScale:o,maxScale:h}=s,{zoomRate:z,rotateDeg:v,enableTransition:k}={zoomRate:s.zoomRate,rotateDeg:90,enableTransition:!0,...n};switch(a){case"zoomOut":u.value.scale>o&&(u.value.scale=Number.parseFloat((u.value.scale/z).toFixed(3)));break;case"zoomIn":u.value.scale<h&&(u.value.scale=Number.parseFloat((u.value.scale*z).toFixed(3)));break;case"clockwise":u.value.deg+=v,l("rotate",u.value.deg);break;case"anticlockwise":u.value.deg-=v,l("rotate",u.value.deg);break}u.value.enableTransition=k}return ie(te,()=>{ve(()=>{const a=N.value[0];a!=null&&a.complete||(_.value=!0)})}),ie(p,a=>{P(),l("switch",a)}),me(()=>{var a,n;le(),(n=(a=T.value)==null?void 0:a.focus)==null||n.call(a)}),f({setActiveItem:D}),(a,n)=>(y(),ue(xe,{to:"body",disabled:!a.teleported},[c(Se,{name:"viewer-fade",appear:""},{default:L(()=>[w("div",{ref_key:"wrapper",ref:T,tabindex:-1,class:d(t(i).e("wrapper")),style:ce({zIndex:t(H)})},[w("div",{class:d(t(i).e("mask")),onClick:n[0]||(n[0]=_e(o=>a.hideOnClickModal&&R(),["self"]))},null,2),C(" CLOSE "),w("span",{class:d([t(i).e("btn"),t(i).e("close")]),onClick:R},[c(t(O),null,{default:L(()=>[c(t(Xe))]),_:1})],2),C(" ARROW "),t(M)?C("v-if",!0):(y(),x(J,{key:0},[w("span",{class:d(t(ne)),onClick:q},[c(t(O),null,{default:L(()=>[c(t(Pe))]),_:1})],2),w("span",{class:d(t(X)),onClick:G},[c(t(O),null,{default:L(()=>[c(t(De))]),_:1})],2)],64)),C(" ACTIONS "),w("div",{class:d([t(i).e("btn"),t(i).e("actions")])},[w("div",{class:d(t(i).e("actions__inner"))},[c(t(O),{onClick:n[1]||(n[1]=o=>e("zoomOut"))},{default:L(()=>[c(t(Fe))]),_:1}),c(t(O),{onClick:n[2]||(n[2]=o=>e("zoomIn"))},{default:L(()=>[c(t(He))]),_:1}),w("i",{class:d(t(i).e("actions__divider"))},null,2),c(t(O),{onClick:K},{default:L(()=>[(y(),ue(ze(t(g).icon)))]),_:1}),w("i",{class:d(t(i).e("actions__divider"))},null,2),c(t(O),{onClick:n[3]||(n[3]=o=>e("anticlockwise"))},{default:L(()=>[c(t(We))]),_:1}),c(t(O),{onClick:n[4]||(n[4]=o=>e("clockwise"))},{default:L(()=>[c(t(je))]),_:1})],2)],2),C(" CANVAS "),w("div",{class:d(t(i).e("canvas"))},[(y(!0),x(J,null,Le(a.urlList,(o,h)=>Ce((y(),x("img",{ref_for:!0,ref:z=>N.value[h]=z,key:o,src:o,style:ce(t(se)),class:d(t(i).e("img")),onLoad:W,onError:j,onMousedown:Z},null,46,aa)),[[Ee,h===p.value]])),128))],2),U(a.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var sa=ye(na,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const la=be(sa),oa=pe({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:de([String,Object])},previewSrcList:{type:de(Array),default:()=>he([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7}}),ra={load:r=>r instanceof Event,error:r=>r instanceof Event,switch:r=>Q(r),close:()=>!0,show:()=>!0},ia=["src","loading"],ua={key:0},ca=ee({name:"ElImage",inheritAttrs:!1}),da=ee({...ca,props:oa,emits:ra,setup(r,{emit:f}){const l=r;let s="";const{t:b}=ge(),E=we("image"),i=Ne(),ae=qe(),T=I(),N=I(!1),S=I(!0),_=I(!1),p=I(),g=I(),u=V&&"loading"in HTMLImageElement.prototype;let M,$;const F=m(()=>[E.e("inner"),X.value&&E.e("preview"),S.value&&E.is("loading")]),te=m(()=>i.style),ne=m(()=>{const{fit:e}=l;return V&&e?{objectFit:e}:{}}),X=m(()=>{const{previewSrcList:e}=l;return Array.isArray(e)&&e.length>0}),se=m(()=>{const{previewSrcList:e,initialIndex:a}=l;let n=a;return a>e.length-1&&(n=0),n}),H=m(()=>l.loading==="eager"?!1:!u&&l.loading==="lazy"||l.lazy),R=()=>{!V||(S.value=!0,N.value=!1,T.value=l.src)};function le(e){S.value=!1,N.value=!1,f("load",e)}function oe(e){S.value=!1,N.value=!0,f("error",e)}function W(){Je(p.value,g.value)&&(R(),P())}const j=$e(W,200,!0);async function Z(){var e;if(!V)return;await ve();const{scrollContainer:a}=l;Ke(a)?g.value=a:Re(a)&&a!==""?g.value=(e=document.querySelector(a))!=null?e:void 0:p.value&&(g.value=Ge(p.value)),g.value&&(M=Y(g,"scroll",j),setTimeout(()=>W(),100))}function P(){!V||!g.value||!j||(M==null||M(),g.value=void 0)}function K(e){if(!!e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}function D(){!X.value||($=Y("wheel",K,{passive:!1}),s=document.body.style.overflow,document.body.style.overflow="hidden",_.value=!0,f("show"))}function q(){$==null||$(),document.body.style.overflow=s,_.value=!1,f("close")}function G(e){f("switch",e)}return ie(()=>l.src,()=>{H.value?(S.value=!0,N.value=!1,P(),Z()):R()}),me(()=>{H.value?Z():R()}),(e,a)=>(y(),x("div",{ref_key:"container",ref:p,class:d([t(E).b(),e.$attrs.class]),style:ce(t(te))},[N.value?U(e.$slots,"error",{key:0},()=>[w("div",{class:d(t(E).e("error"))},Oe(t(b)("el.image.error")),3)]):(y(),x(J,{key:1},[T.value!==void 0?(y(),x("img",Te({key:0},t(ae),{src:T.value,loading:e.loading,style:t(ne),class:t(F),onClick:D,onLoad:le,onError:oe}),null,16,ia)):C("v-if",!0),S.value?(y(),x("div",{key:1,class:d(t(E).e("wrapper"))},[U(e.$slots,"placeholder",{},()=>[w("div",{class:d(t(E).e("placeholder"))},null,2)])],2)):C("v-if",!0)],64)),t(X)?(y(),x(J,{key:2},[_.value?(y(),ue(t(la),{key:0,"z-index":e.zIndex,"initial-index":t(se),infinite:e.infinite,"zoom-rate":e.zoomRate,"min-scale":e.minScale,"max-scale":e.maxScale,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:q,onSwitch:G},{default:L(()=>[e.$slots.viewer?(y(),x("div",ua,[U(e.$slots,"viewer")])):C("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):C("v-if",!0)],64)):C("v-if",!0)],6))}});var fa=ye(da,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const wa=be(fa);export{wa as E};
