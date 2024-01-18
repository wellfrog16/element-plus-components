import{s as ke,g as N,J as X,H as q,U as _e,G as je,E as Ke,q as ae,f as Pe,aA as We,ad as Ue,B as v,$ as Ye,a0 as V,I as Ge,R as Xe,V as qe,W as Je,o as p,c as S,a4 as m,F as oe,X as y,u as t,P as U,a as F,h as I,w as A,a3 as Y,Q as ne,d as Qe,af as Ze,N as et,t as G,Y as tt,p as we}from"./app.a3d32ab8.js";import{i as Se,d as at,u as ot,B as se,A as Ce,U as le,l as nt,m as st,f as lt,h as rt,j as Ie,V as it,a6 as ut,a7 as ct,a8 as dt,n as Ee,G as H,a3 as pt,_ as ft,w as vt}from"./document.e6cb366c.js";import{m as mt,u as ht}from"./index.df5f81fa.js";const yt=()=>ke&&/firefox/i.test(window.navigator.userAgent),gt=o=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o);function bt(o){const f=N();function u(){if(o.value==null)return;const{selectionStart:r,selectionEnd:i,value:c}=o.value;if(r==null||i==null)return;const g=c.slice(0,Math.max(0,r)),d=c.slice(Math.max(0,i));f.value={selectionStart:r,selectionEnd:i,value:c,beforeTxt:g,afterTxt:d}}function a(){if(o.value==null||f.value==null)return;const{value:r}=o.value,{beforeTxt:i,afterTxt:c,selectionStart:g}=f.value;if(i==null||c==null||g==null)return;let d=r.length;if(r.endsWith(c))d=r.length-c.length;else if(r.startsWith(i))d=i.length;else{const b=i[g-1],w=r.indexOf(b,g-1);w!==-1&&(d=w+1)}o.value.setSelectionRange(d,d)}return[u,a]}function xt(o,{afterFocus:f,beforeBlur:u,afterBlur:a}={}){const r=Ke(),{emit:i}=r,c=X(),g=N(!1),d=s=>{g.value||(g.value=!0,i("focus",s),f==null||f())},b=s=>{var B;(je(u)?u(s):!1)||s.relatedTarget&&((B=c.value)==null?void 0:B.contains(s.relatedTarget))||(g.value=!1,i("blur",s),a==null||a())},w=()=>{var s;(s=o.value)==null||s.focus()};return q(c,s=>{s&&s.setAttribute("tabindex","-1")}),_e(c,"click",w),{wrapperRef:c,isFocused:g,handleFocus:d,handleBlur:b}}let x;const wt=`
  height:0 !important;
  visibility:hidden !important;
  ${yt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,St=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function Ct(o){const f=window.getComputedStyle(o),u=f.getPropertyValue("box-sizing"),a=Number.parseFloat(f.getPropertyValue("padding-bottom"))+Number.parseFloat(f.getPropertyValue("padding-top")),r=Number.parseFloat(f.getPropertyValue("border-bottom-width"))+Number.parseFloat(f.getPropertyValue("border-top-width"));return{contextStyle:St.map(c=>`${c}:${f.getPropertyValue(c)}`).join(";"),paddingSize:a,borderSize:r,boxSizing:u}}function ze(o,f=1,u){var a;x||(x=document.createElement("textarea"),document.body.appendChild(x));const{paddingSize:r,borderSize:i,boxSizing:c,contextStyle:g}=Ct(o);x.setAttribute("style",`${g};${wt}`),x.value=o.value||o.placeholder||"";let d=x.scrollHeight;const b={};c==="border-box"?d=d+i:c==="content-box"&&(d=d-r),x.value="";const w=x.scrollHeight-r;if(Se(f)){let s=w*f;c==="border-box"&&(s=s+r+i),d=Math.max(s,d),b.minHeight=`${s}px`}if(Se(u)){let s=w*u;c==="border-box"&&(s=s+r+i),d=Math.min(s,d)}return b.height=`${d}px`,(a=x.parentNode)==null||a.removeChild(x),x=void 0,b}const It=at({id:{type:String,default:void 0},size:ot,disabled:Boolean,modelValue:{type:se([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:se([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ce},prefixIcon:{type:Ce},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:se([Object,Array,String]),default:()=>mt({})},autofocus:{type:Boolean,default:!1}}),Et={[le]:o=>ae(o),input:o=>ae(o),change:o=>ae(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},zt=["role"],kt=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],Pt=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],Vt=Pe({name:"ElInput",inheritAttrs:!1}),Ft=Pe({...Vt,props:It,emits:Et,setup(o,{expose:f,emit:u}){const a=o,r=We(),i=Ue(),c=v(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=r["aria-haspopup"],e["aria-owns"]=r["aria-owns"],e["aria-expanded"]=r["aria-expanded"]),e}),g=v(()=>[a.type==="textarea"?ie.b():l.b(),l.m(re.value),l.is("disabled",z.value),l.is("exceed",Be.value),{[l.b("group")]:i.prepend||i.append,[l.bm("group","append")]:i.append,[l.bm("group","prepend")]:i.prepend,[l.m("prefix")]:i.prefix||a.prefixIcon,[l.m("suffix")]:i.suffix||a.suffixIcon||a.clearable||a.showPassword,[l.bm("suffix","password-clear")]:K.value&&Z.value},r.class]),d=v(()=>[l.e("wrapper"),l.is("focus",Q.value)]),b=ht({excludeKeys:v(()=>Object.keys(c.value))}),{form:w,formItem:s}=nt(),{inputId:B}=st(a,{formItemContext:s}),re=lt(),z=rt(),l=Ie("input"),ie=Ie("textarea"),O=X(),C=X(),J=N(!1),T=N(!1),D=N(!1),ue=N(),L=X(a.inputStyle),k=v(()=>O.value||C.value),{wrapperRef:Ve,isFocused:Q,handleFocus:_,handleBlur:j}=xt(k,{afterBlur(){var e;a.validateEvent&&((e=s==null?void 0:s.validate)==null||e.call(s,"blur").catch(n=>Ee()))}}),ce=v(()=>{var e;return(e=w==null?void 0:w.statusIcon)!=null?e:!1}),R=v(()=>(s==null?void 0:s.validateState)||""),de=v(()=>R.value&&it[R.value]),Fe=v(()=>D.value?ut:ct),Ne=v(()=>[r.style,a.inputStyle]),pe=v(()=>[a.inputStyle,L.value,{resize:a.resize}]),E=v(()=>dt(a.modelValue)?"":String(a.modelValue)),K=v(()=>a.clearable&&!z.value&&!a.readonly&&!!E.value&&(Q.value||J.value)),Z=v(()=>a.showPassword&&!z.value&&!a.readonly&&!!E.value&&(!!E.value||Q.value)),P=v(()=>a.showWordLimit&&!!b.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!z.value&&!a.readonly&&!a.showPassword),ee=v(()=>E.value.length),Be=v(()=>!!P.value&&ee.value>Number(b.value.maxlength)),Te=v(()=>!!i.suffix||!!a.suffixIcon||K.value||a.showPassword||P.value||!!R.value&&ce.value),[Re,$e]=bt(O);Ye(C,e=>{if(Me(),!P.value||a.resize!=="both")return;const n=e[0],{width:h}=n.contentRect;ue.value={right:`calc(100% - ${h+15+6}px)`}});const $=()=>{const{type:e,autosize:n}=a;if(!(!ke||e!=="textarea"||!C.value))if(n){const h=we(n)?n.minRows:void 0,W=we(n)?n.maxRows:void 0,xe=ze(C.value,h,W);L.value={overflowY:"hidden",...xe},V(()=>{C.value.offsetHeight,L.value=xe})}else L.value={minHeight:ze(C.value).minHeight}},Me=(e=>{let n=!1;return()=>{var h;if(n||!a.autosize)return;((h=C.value)==null?void 0:h.offsetParent)===null||(e(),n=!0)}})($),M=()=>{const e=k.value,n=a.formatter?a.formatter(E.value):E.value;!e||e.value===n||(e.value=n)},te=async e=>{Re();let{value:n}=e.target;if(a.formatter&&(n=a.parser?a.parser(n):n),!T.value){if(n===E.value){M();return}u(le,n),u("input",n),await V(),M(),$e()}},fe=e=>{u("change",e.target.value)},ve=e=>{u("compositionstart",e),T.value=!0},me=e=>{var n;u("compositionupdate",e);const h=(n=e.target)==null?void 0:n.value,W=h[h.length-1]||"";T.value=!gt(W)},he=e=>{u("compositionend",e),T.value&&(T.value=!1,te(e))},Ae=()=>{D.value=!D.value,ye()},ye=async()=>{var e;await V(),(e=k.value)==null||e.focus()},He=()=>{var e;return(e=k.value)==null?void 0:e.blur()},Oe=e=>{J.value=!1,u("mouseleave",e)},De=e=>{J.value=!0,u("mouseenter",e)},ge=e=>{u("keydown",e)},Le=()=>{var e;(e=k.value)==null||e.select()},be=()=>{u(le,""),u("change",""),u("clear"),u("input","")};return q(()=>a.modelValue,()=>{var e;V(()=>$()),a.validateEvent&&((e=s==null?void 0:s.validate)==null||e.call(s,"change").catch(n=>Ee()))}),q(E,()=>M()),q(()=>a.type,async()=>{await V(),M(),$()}),Ge(()=>{!a.formatter&&a.parser,M(),V($)}),f({input:O,textarea:C,ref:k,textareaStyle:pe,autosize:Xe(a,"autosize"),focus:ye,blur:He,select:Le,clear:be,resizeTextarea:$}),(e,n)=>qe((p(),S("div",ne(t(c),{class:t(g),style:t(Ne),role:e.containerRole,onMouseenter:De,onMouseleave:Oe}),[m(" input "),e.type!=="textarea"?(p(),S(oe,{key:0},[m(" prepend slot "),e.$slots.prepend?(p(),S("div",{key:0,class:y(t(l).be("group","prepend"))},[U(e.$slots,"prepend")],2)):m("v-if",!0),F("div",{ref_key:"wrapperRef",ref:Ve,class:y(t(d))},[m(" prefix slot "),e.$slots.prefix||e.prefixIcon?(p(),S("span",{key:0,class:y(t(l).e("prefix"))},[F("span",{class:y(t(l).e("prefix-inner"))},[U(e.$slots,"prefix"),e.prefixIcon?(p(),I(t(H),{key:0,class:y(t(l).e("icon"))},{default:A(()=>[(p(),I(Y(e.prefixIcon)))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0),F("input",ne({id:t(B),ref_key:"input",ref:O,class:t(l).e("inner")},t(b),{type:e.showPassword?D.value?"text":"password":e.type,disabled:t(z),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:a.form,autofocus:a.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:n[0]||(n[0]=(...h)=>t(_)&&t(_)(...h)),onBlur:n[1]||(n[1]=(...h)=>t(j)&&t(j)(...h)),onChange:fe,onKeydown:ge}),null,16,kt),m(" suffix slot "),t(Te)?(p(),S("span",{key:1,class:y(t(l).e("suffix"))},[F("span",{class:y(t(l).e("suffix-inner"))},[!t(K)||!t(Z)||!t(P)?(p(),S(oe,{key:0},[U(e.$slots,"suffix"),e.suffixIcon?(p(),I(t(H),{key:0,class:y(t(l).e("icon"))},{default:A(()=>[(p(),I(Y(e.suffixIcon)))]),_:1},8,["class"])):m("v-if",!0)],64)):m("v-if",!0),t(K)?(p(),I(t(H),{key:1,class:y([t(l).e("icon"),t(l).e("clear")]),onMousedown:Ze(t(et),["prevent"]),onClick:be},{default:A(()=>[Qe(t(pt))]),_:1},8,["class","onMousedown"])):m("v-if",!0),t(Z)?(p(),I(t(H),{key:2,class:y([t(l).e("icon"),t(l).e("password")]),onClick:Ae},{default:A(()=>[(p(),I(Y(t(Fe))))]),_:1},8,["class"])):m("v-if",!0),t(P)?(p(),S("span",{key:3,class:y(t(l).e("count"))},[F("span",{class:y(t(l).e("count-inner"))},G(t(ee))+" / "+G(t(b).maxlength),3)],2)):m("v-if",!0),t(R)&&t(de)&&t(ce)?(p(),I(t(H),{key:4,class:y([t(l).e("icon"),t(l).e("validateIcon"),t(l).is("loading",t(R)==="validating")])},{default:A(()=>[(p(),I(Y(t(de))))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0)],2),m(" append slot "),e.$slots.append?(p(),S("div",{key:1,class:y(t(l).be("group","append"))},[U(e.$slots,"append")],2)):m("v-if",!0)],64)):(p(),S(oe,{key:1},[m(" textarea "),F("textarea",ne({id:t(B),ref_key:"textarea",ref:C,class:t(ie).e("inner")},t(b),{tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(pe),"aria-label":e.label,placeholder:e.placeholder,form:a.form,autofocus:a.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:n[2]||(n[2]=(...h)=>t(_)&&t(_)(...h)),onBlur:n[3]||(n[3]=(...h)=>t(j)&&t(j)(...h)),onChange:fe,onKeydown:ge}),null,16,Pt),t(P)?(p(),S("span",{key:0,style:tt(ue.value),class:y(t(l).e("count"))},G(t(ee))+" / "+G(t(b).maxlength),7)):m("v-if",!0)],64))],16,zt)),[[Je,e.type!=="hidden"]])}});var Nt=ft(Ft,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const Mt=vt(Nt);export{Mt as E,gt as i};
