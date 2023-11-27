import{m as ze,g as N,M as G,J,Y as _e,I as Ke,H as je,q as we,v as ae,f as Ve,aG as We,ai as Ue,E as v,a3 as Ye,a4 as F,K as qe,W as Ge,Z as Je,$ as Xe,o as p,c as S,a8 as m,F as oe,a0 as h,u as t,U,a as P,h as I,w as H,a7 as Y,V as ne,d as Ze,ak as Qe,N as et,t as q,a1 as tt,x as Se}from"./app.0bb1a7b5.js";import{d as at,u as ot,y as se,x as Ce,U as le,j as nt,k as st,e as lt,f as rt,h as Ie,V as it,a2 as ut,a3 as ct,a4 as dt,l as ke,B as A,$ as pt,_ as ft,w as vt}from"./document.a03dcdd3.js";import{m as mt}from"./typescript.72bf8adc.js";import{u as yt}from"./index.f06913cf.js";const ht=()=>ze&&/firefox/i.test(window.navigator.userAgent),gt=o=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o);function bt(o){const f=N();function u(){if(o.value==null)return;const{selectionStart:r,selectionEnd:i,value:c}=o.value;if(r==null||i==null)return;const g=c.slice(0,Math.max(0,r)),d=c.slice(Math.max(0,i));f.value={selectionStart:r,selectionEnd:i,value:c,beforeTxt:g,afterTxt:d}}function a(){if(o.value==null||f.value==null)return;const{value:r}=o.value,{beforeTxt:i,afterTxt:c,selectionStart:g}=f.value;if(i==null||c==null||g==null)return;let d=r.length;if(r.endsWith(c))d=r.length-c.length;else if(r.startsWith(i))d=i.length;else{const b=i[g-1],w=r.indexOf(b,g-1);w!==-1&&(d=w+1)}o.value.setSelectionRange(d,d)}return[u,a]}function xt(o,{afterFocus:f,beforeBlur:u,afterBlur:a}={}){const r=je(),{emit:i}=r,c=G(),g=N(!1),d=s=>{g.value||(g.value=!0,i("focus",s),f==null||f())},b=s=>{var T;(Ke(u)?u(s):!1)||s.relatedTarget&&((T=c.value)==null?void 0:T.contains(s.relatedTarget))||(g.value=!1,i("blur",s),a==null||a())},w=()=>{var s;(s=o.value)==null||s.focus()};return J(c,s=>{s&&s.setAttribute("tabindex","-1")}),_e(c,"click",w),{wrapperRef:c,isFocused:g,handleFocus:d,handleBlur:b}}let x;const wt=`
  height:0 !important;
  visibility:hidden !important;
  ${ht()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,St=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function Ct(o){const f=window.getComputedStyle(o),u=f.getPropertyValue("box-sizing"),a=Number.parseFloat(f.getPropertyValue("padding-bottom"))+Number.parseFloat(f.getPropertyValue("padding-top")),r=Number.parseFloat(f.getPropertyValue("border-bottom-width"))+Number.parseFloat(f.getPropertyValue("border-top-width"));return{contextStyle:St.map(c=>`${c}:${f.getPropertyValue(c)}`).join(";"),paddingSize:a,borderSize:r,boxSizing:u}}function Ee(o,f=1,u){var a;x||(x=document.createElement("textarea"),document.body.appendChild(x));const{paddingSize:r,borderSize:i,boxSizing:c,contextStyle:g}=Ct(o);x.setAttribute("style",`${g};${wt}`),x.value=o.value||o.placeholder||"";let d=x.scrollHeight;const b={};c==="border-box"?d=d+i:c==="content-box"&&(d=d-r),x.value="";const w=x.scrollHeight-r;if(we(f)){let s=w*f;c==="border-box"&&(s=s+r+i),d=Math.max(s,d),b.minHeight=`${s}px`}if(we(u)){let s=w*u;c==="border-box"&&(s=s+r+i),d=Math.min(s,d)}return b.height=`${d}px`,(a=x.parentNode)==null||a.removeChild(x),x=void 0,b}const It=at({id:{type:String,default:void 0},size:ot,disabled:Boolean,modelValue:{type:se([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:se([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ce},prefixIcon:{type:Ce},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:se([Object,Array,String]),default:()=>mt({})},autofocus:{type:Boolean,default:!1}}),kt={[le]:o=>ae(o),input:o=>ae(o),change:o=>ae(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},Et=["role"],zt=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],Vt=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],Ft=Ve({name:"ElInput",inheritAttrs:!1}),Pt=Ve({...Ft,props:It,emits:kt,setup(o,{expose:f,emit:u}){const a=o,r=We(),i=Ue(),c=v(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=r["aria-haspopup"],e["aria-owns"]=r["aria-owns"],e["aria-expanded"]=r["aria-expanded"]),e}),g=v(()=>[a.type==="textarea"?ie.b():l.b(),l.m(re.value),l.is("disabled",E.value),l.is("exceed",Te.value),{[l.b("group")]:i.prepend||i.append,[l.bm("group","append")]:i.append,[l.bm("group","prepend")]:i.prepend,[l.m("prefix")]:i.prefix||a.prefixIcon,[l.m("suffix")]:i.suffix||a.suffixIcon||a.clearable||a.showPassword,[l.bm("suffix","password-clear")]:j.value&&Q.value},r.class]),d=v(()=>[l.e("wrapper"),l.is("focus",Z.value)]),b=yt({excludeKeys:v(()=>Object.keys(c.value))}),{form:w,formItem:s}=nt(),{inputId:T}=st(a,{formItemContext:s}),re=lt(),E=rt(),l=Ie("input"),ie=Ie("textarea"),O=G(),C=G(),X=N(!1),B=N(!1),D=N(!1),ue=N(),L=G(a.inputStyle),z=v(()=>O.value||C.value),{wrapperRef:Fe,isFocused:Z,handleFocus:_,handleBlur:K}=xt(z,{afterBlur(){var e;a.validateEvent&&((e=s==null?void 0:s.validate)==null||e.call(s,"blur").catch(n=>ke()))}}),ce=v(()=>{var e;return(e=w==null?void 0:w.statusIcon)!=null?e:!1}),$=v(()=>(s==null?void 0:s.validateState)||""),de=v(()=>$.value&&it[$.value]),Pe=v(()=>D.value?ut:ct),Ne=v(()=>[r.style,a.inputStyle]),pe=v(()=>[a.inputStyle,L.value,{resize:a.resize}]),k=v(()=>dt(a.modelValue)?"":String(a.modelValue)),j=v(()=>a.clearable&&!E.value&&!a.readonly&&!!k.value&&(Z.value||X.value)),Q=v(()=>a.showPassword&&!E.value&&!a.readonly&&!!k.value&&(!!k.value||Z.value)),V=v(()=>a.showWordLimit&&!!b.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!E.value&&!a.readonly&&!a.showPassword),ee=v(()=>k.value.length),Te=v(()=>!!V.value&&ee.value>Number(b.value.maxlength)),Be=v(()=>!!i.suffix||!!a.suffixIcon||j.value||a.showPassword||V.value||!!$.value&&ce.value),[$e,Me]=bt(O);Ye(C,e=>{if(Re(),!V.value||a.resize!=="both")return;const n=e[0],{width:y}=n.contentRect;ue.value={right:`calc(100% - ${y+15+6}px)`}});const M=()=>{const{type:e,autosize:n}=a;if(!(!ze||e!=="textarea"||!C.value))if(n){const y=Se(n)?n.minRows:void 0,W=Se(n)?n.maxRows:void 0,xe=Ee(C.value,y,W);L.value={overflowY:"hidden",...xe},F(()=>{C.value.offsetHeight,L.value=xe})}else L.value={minHeight:Ee(C.value).minHeight}},Re=(e=>{let n=!1;return()=>{var y;if(n||!a.autosize)return;((y=C.value)==null?void 0:y.offsetParent)===null||(e(),n=!0)}})(M),R=()=>{const e=z.value,n=a.formatter?a.formatter(k.value):k.value;!e||e.value===n||(e.value=n)},te=async e=>{$e();let{value:n}=e.target;if(a.formatter&&(n=a.parser?a.parser(n):n),!B.value){if(n===k.value){R();return}u(le,n),u("input",n),await F(),R(),Me()}},fe=e=>{u("change",e.target.value)},ve=e=>{u("compositionstart",e),B.value=!0},me=e=>{var n;u("compositionupdate",e);const y=(n=e.target)==null?void 0:n.value,W=y[y.length-1]||"";B.value=!gt(W)},ye=e=>{u("compositionend",e),B.value&&(B.value=!1,te(e))},He=()=>{D.value=!D.value,he()},he=async()=>{var e;await F(),(e=z.value)==null||e.focus()},Ae=()=>{var e;return(e=z.value)==null?void 0:e.blur()},Oe=e=>{X.value=!1,u("mouseleave",e)},De=e=>{X.value=!0,u("mouseenter",e)},ge=e=>{u("keydown",e)},Le=()=>{var e;(e=z.value)==null||e.select()},be=()=>{u(le,""),u("change",""),u("clear"),u("input","")};return J(()=>a.modelValue,()=>{var e;F(()=>M()),a.validateEvent&&((e=s==null?void 0:s.validate)==null||e.call(s,"change").catch(n=>ke()))}),J(k,()=>R()),J(()=>a.type,async()=>{await F(),R(),M()}),qe(()=>{!a.formatter&&a.parser,R(),F(M)}),f({input:O,textarea:C,ref:z,textareaStyle:pe,autosize:Ge(a,"autosize"),focus:he,blur:Ae,select:Le,clear:be,resizeTextarea:M}),(e,n)=>Je((p(),S("div",ne(t(c),{class:t(g),style:t(Ne),role:e.containerRole,onMouseenter:De,onMouseleave:Oe}),[m(" input "),e.type!=="textarea"?(p(),S(oe,{key:0},[m(" prepend slot "),e.$slots.prepend?(p(),S("div",{key:0,class:h(t(l).be("group","prepend"))},[U(e.$slots,"prepend")],2)):m("v-if",!0),P("div",{ref_key:"wrapperRef",ref:Fe,class:h(t(d))},[m(" prefix slot "),e.$slots.prefix||e.prefixIcon?(p(),S("span",{key:0,class:h(t(l).e("prefix"))},[P("span",{class:h(t(l).e("prefix-inner"))},[U(e.$slots,"prefix"),e.prefixIcon?(p(),I(t(A),{key:0,class:h(t(l).e("icon"))},{default:H(()=>[(p(),I(Y(e.prefixIcon)))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0),P("input",ne({id:t(T),ref_key:"input",ref:O,class:t(l).e("inner")},t(b),{type:e.showPassword?D.value?"text":"password":e.type,disabled:t(E),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:a.form,autofocus:a.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:ye,onInput:te,onFocus:n[0]||(n[0]=(...y)=>t(_)&&t(_)(...y)),onBlur:n[1]||(n[1]=(...y)=>t(K)&&t(K)(...y)),onChange:fe,onKeydown:ge}),null,16,zt),m(" suffix slot "),t(Be)?(p(),S("span",{key:1,class:h(t(l).e("suffix"))},[P("span",{class:h(t(l).e("suffix-inner"))},[!t(j)||!t(Q)||!t(V)?(p(),S(oe,{key:0},[U(e.$slots,"suffix"),e.suffixIcon?(p(),I(t(A),{key:0,class:h(t(l).e("icon"))},{default:H(()=>[(p(),I(Y(e.suffixIcon)))]),_:1},8,["class"])):m("v-if",!0)],64)):m("v-if",!0),t(j)?(p(),I(t(A),{key:1,class:h([t(l).e("icon"),t(l).e("clear")]),onMousedown:Qe(t(et),["prevent"]),onClick:be},{default:H(()=>[Ze(t(pt))]),_:1},8,["class","onMousedown"])):m("v-if",!0),t(Q)?(p(),I(t(A),{key:2,class:h([t(l).e("icon"),t(l).e("password")]),onClick:He},{default:H(()=>[(p(),I(Y(t(Pe))))]),_:1},8,["class"])):m("v-if",!0),t(V)?(p(),S("span",{key:3,class:h(t(l).e("count"))},[P("span",{class:h(t(l).e("count-inner"))},q(t(ee))+" / "+q(t(b).maxlength),3)],2)):m("v-if",!0),t($)&&t(de)&&t(ce)?(p(),I(t(A),{key:4,class:h([t(l).e("icon"),t(l).e("validateIcon"),t(l).is("loading",t($)==="validating")])},{default:H(()=>[(p(),I(Y(t(de))))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0)],2),m(" append slot "),e.$slots.append?(p(),S("div",{key:1,class:h(t(l).be("group","append"))},[U(e.$slots,"append")],2)):m("v-if",!0)],64)):(p(),S(oe,{key:1},[m(" textarea "),P("textarea",ne({id:t(T),ref_key:"textarea",ref:C,class:t(ie).e("inner")},t(b),{tabindex:e.tabindex,disabled:t(E),readonly:e.readonly,autocomplete:e.autocomplete,style:t(pe),"aria-label":e.label,placeholder:e.placeholder,form:a.form,autofocus:a.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:ye,onInput:te,onFocus:n[2]||(n[2]=(...y)=>t(_)&&t(_)(...y)),onBlur:n[3]||(n[3]=(...y)=>t(K)&&t(K)(...y)),onChange:fe,onKeydown:ge}),null,16,Vt),t(V)?(p(),S("span",{key:0,style:tt(ue.value),class:h(t(l).e("count"))},q(t(ee))+" / "+q(t(b).maxlength),7)):m("v-if",!0)],64))],16,Et)),[[Xe,e.type!=="hidden"]])}});var Nt=ft(Pt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const Ht=vt(Nt);export{Ht as E,gt as i};
