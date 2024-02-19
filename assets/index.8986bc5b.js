import{E as Pe}from"./index.028e09d4.js";import{d as ve,B as le,u as ye,a1 as Ee,U as te,I as fe,C as Be,i as me,l as Te,X as Ve,Y as Me,J as ze,n as we,j as ge,a3 as Ie,_ as xe,q as Xe,m as Ye,f as Fe,w as Ae}from"./document.d036075a.js";import{m as Ke,g as Z,I as Re,U as $e,a0 as se,B as f,J as Ue,A as We,H as re,f as ae,a1 as Ce,ag as ce,o as L,c as K,d as Ne,w as he,a as Q,t as Oe,u as t,X as R,Y as G,q as Se,ah as pe,O as je,h as ie,a4 as ne,F as oe,ai as ue}from"./app.102c0a36.js";const Le=Symbol("sliderContextKey"),He=ve({modelValue:{type:le([Number,Array]),default:0},id:{type:String,default:void 0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},showInput:Boolean,showInputControls:{type:Boolean,default:!0},size:ye,inputSize:ye,showStops:Boolean,showTooltip:{type:Boolean,default:!0},formatTooltip:{type:le(Function),default:void 0},disabled:Boolean,range:Boolean,vertical:Boolean,height:String,debounce:{type:Number,default:300},label:{type:String,default:void 0},rangeStartLabel:{type:String,default:void 0},rangeEndLabel:{type:String,default:void 0},formatValueText:{type:le(Function),default:void 0},tooltipClass:{type:String,default:void 0},placement:{type:String,values:Ee,default:"top"},marks:{type:le(Object)},validateEvent:{type:Boolean,default:!0}}),de=e=>me(e)||Ke(e)&&e.every(me),qe={[te]:de,[fe]:de,[Be]:de},Je=(e,l,u)=>{const a=Z();return Re(async()=>{e.range?(Array.isArray(e.modelValue)?(l.firstValue=Math.max(e.min,e.modelValue[0]),l.secondValue=Math.min(e.max,e.modelValue[1])):(l.firstValue=e.min,l.secondValue=e.max),l.oldValue=[l.firstValue,l.secondValue]):(typeof e.modelValue!="number"||Number.isNaN(e.modelValue)?l.firstValue=e.min:l.firstValue=Math.min(e.max,Math.max(e.min,e.modelValue)),l.oldValue=l.firstValue),$e(window,"resize",u),await se(),u()}),{sliderWrapper:a}},_e=e=>f(()=>e.marks?Object.keys(e.marks).map(Number.parseFloat).sort((u,a)=>u-a).filter(u=>u<=e.max&&u>=e.min).map(u=>({point:u,position:(u-e.min)*100/(e.max-e.min),mark:e.marks[u]})):[]),Ge=(e,l,u)=>{const{form:a,formItem:s}=Te(),c=Ue(),i=Z(),V=Z(),w={firstButton:i,secondButton:V},d=f(()=>e.disabled||(a==null?void 0:a.disabled)||!1),v=f(()=>Math.min(l.firstValue,l.secondValue)),o=f(()=>Math.max(l.firstValue,l.secondValue)),x=f(()=>e.range?`${100*(o.value-v.value)/(e.max-e.min)}%`:`${100*(l.firstValue-e.min)/(e.max-e.min)}%`),C=f(()=>e.range?`${100*(v.value-e.min)/(e.max-e.min)}%`:"0%"),P=f(()=>e.vertical?{height:e.height}:{}),T=f(()=>e.vertical?{height:x.value,bottom:C.value}:{width:x.value,left:C.value}),M=()=>{c.value&&(l.sliderSize=c.value[`client${e.vertical?"Height":"Width"}`])},I=m=>{const h=e.min+m*(e.max-e.min)/100;if(!e.range)return i;let E;return Math.abs(v.value-h)<Math.abs(o.value-h)?E=l.firstValue<l.secondValue?"firstButton":"secondButton":E=l.firstValue>l.secondValue?"firstButton":"secondButton",w[E]},S=m=>{const h=I(m);return h.value.setPosition(m),h},X=m=>{l.firstValue=m,g(e.range?[v.value,o.value]:m)},k=m=>{l.secondValue=m,e.range&&g([v.value,o.value])},g=m=>{u(te,m),u(fe,m)},y=async()=>{await se(),u(Be,e.range?[v.value,o.value]:e.modelValue)},j=m=>{var h,E,q,J,_,p;if(d.value||l.dragging)return;M();let A=0;if(e.vertical){const N=(q=(E=(h=m.touches)==null?void 0:h.item(0))==null?void 0:E.clientY)!=null?q:m.clientY;A=(c.value.getBoundingClientRect().bottom-N)/l.sliderSize*100}else{const N=(p=(_=(J=m.touches)==null?void 0:J.item(0))==null?void 0:_.clientX)!=null?p:m.clientX,z=c.value.getBoundingClientRect().left;A=(N-z)/l.sliderSize*100}if(!(A<0||A>100))return S(A)};return{elFormItem:s,slider:c,firstButton:i,secondButton:V,sliderDisabled:d,minValue:v,maxValue:o,runwayStyle:P,barStyle:T,resetSize:M,setPosition:S,emitChange:y,onSliderWrapperPrevent:m=>{var h,E;(((h=w.firstButton.value)==null?void 0:h.dragging)||((E=w.secondButton.value)==null?void 0:E.dragging))&&m.preventDefault()},onSliderClick:m=>{j(m)&&y()},onSliderDown:async m=>{const h=j(m);h&&(await se(),h.value.onButtonDown(m))},setFirstValue:X,setSecondValue:k}},{left:Qe,down:Ze,right:De,up:el,home:ll,end:tl,pageUp:al,pageDown:nl}=Me,ol=(e,l,u)=>{const a=Z(),s=Z(!1),c=f(()=>l.value instanceof Function),i=f(()=>c.value&&l.value(e.modelValue)||e.modelValue),V=Ve(()=>{u.value&&(s.value=!0)},50),w=Ve(()=>{u.value&&(s.value=!1)},50);return{tooltip:a,tooltipVisible:s,formatValue:i,displayTooltip:V,hideTooltip:w}},rl=(e,l,u)=>{const{disabled:a,min:s,max:c,step:i,showTooltip:V,precision:w,sliderSize:d,formatTooltip:v,emitChange:o,resetSize:x,updateDragging:C}=We(Le),{tooltip:P,tooltipVisible:T,formatValue:M,displayTooltip:I,hideTooltip:S}=ol(e,v,V),X=Z(),k=f(()=>`${(e.modelValue-s.value)/(c.value-s.value)*100}%`),g=f(()=>e.vertical?{bottom:k.value}:{left:k.value}),y=()=>{l.hovering=!0,I()},j=()=>{l.hovering=!1,l.dragging||S()},H=n=>{a.value||(n.preventDefault(),A(n),window.addEventListener("mousemove",N),window.addEventListener("touchmove",N),window.addEventListener("mouseup",z),window.addEventListener("touchend",z),window.addEventListener("contextmenu",z),X.value.focus())},$=n=>{a.value||(l.newPosition=Number.parseFloat(k.value)+n/(c.value-s.value)*100,U(l.newPosition),o())},O=()=>{$(-i.value)},m=()=>{$(i.value)},h=()=>{$(-i.value*4)},E=()=>{$(i.value*4)},q=()=>{a.value||(U(0),o())},J=()=>{a.value||(U(100),o())},_=n=>{let b=!0;[Qe,Ze].includes(n.key)?O():[De,el].includes(n.key)?m():n.key===ll?q():n.key===tl?J():n.key===nl?h():n.key===al?E():b=!1,b&&n.preventDefault()},p=n=>{let b,Y;return n.type.startsWith("touch")?(Y=n.touches[0].clientY,b=n.touches[0].clientX):(Y=n.clientY,b=n.clientX),{clientX:b,clientY:Y}},A=n=>{l.dragging=!0,l.isClick=!0;const{clientX:b,clientY:Y}=p(n);e.vertical?l.startY=Y:l.startX=b,l.startPosition=Number.parseFloat(k.value),l.newPosition=l.startPosition},N=n=>{if(l.dragging){l.isClick=!1,I(),x();let b;const{clientX:Y,clientY:W}=p(n);e.vertical?(l.currentY=W,b=(l.startY-l.currentY)/d.value*100):(l.currentX=Y,b=(l.currentX-l.startX)/d.value*100),l.newPosition=l.startPosition+b,U(l.newPosition)}},z=()=>{l.dragging&&(setTimeout(()=>{l.dragging=!1,l.hovering||S(),l.isClick||U(l.newPosition),o()},0),window.removeEventListener("mousemove",N),window.removeEventListener("touchmove",N),window.removeEventListener("mouseup",z),window.removeEventListener("touchend",z),window.removeEventListener("contextmenu",z))},U=async n=>{if(n===null||Number.isNaN(+n))return;n<0?n=0:n>100&&(n=100);const b=100/((c.value-s.value)/i.value);let W=Math.round(n/b)*b*(c.value-s.value)*.01+s.value;W=Number.parseFloat(W.toFixed(w.value)),W!==e.modelValue&&u(te,W),!l.dragging&&e.modelValue!==l.oldValue&&(l.oldValue=e.modelValue),await se(),l.dragging&&I(),P.value.updatePopper()};return re(()=>l.dragging,n=>{C(n)}),{disabled:a,button:X,tooltip:P,tooltipVisible:T,showTooltip:V,wrapperStyle:g,formatValue:M,handleMouseEnter:y,handleMouseLeave:j,onButtonDown:H,onKeyDown:_,setPosition:U}},sl=(e,l,u,a)=>({stops:f(()=>{if(!e.showStops||e.min>e.max)return[];if(e.step===0)return[];const i=(e.max-e.min)/e.step,V=100*e.step/(e.max-e.min),w=Array.from({length:i-1}).map((d,v)=>(v+1)*V);return e.range?w.filter(d=>d<100*(u.value-e.min)/(e.max-e.min)||d>100*(a.value-e.min)/(e.max-e.min)):w.filter(d=>d>100*(l.firstValue-e.min)/(e.max-e.min))}),getStopStyle:i=>e.vertical?{bottom:`${i}%`}:{left:`${i}%`}}),il=(e,l,u,a,s,c)=>{const i=d=>{s(te,d),s(fe,d)},V=()=>e.range?![u.value,a.value].every((d,v)=>d===l.oldValue[v]):e.modelValue!==l.oldValue,w=()=>{var d,v;e.min>e.max&&ze("Slider","min should not be greater than max.");const o=e.modelValue;e.range&&Array.isArray(o)?o[1]<e.min?i([e.min,e.min]):o[0]>e.max?i([e.max,e.max]):o[0]<e.min?i([e.min,o[1]]):o[1]>e.max?i([o[0],e.max]):(l.firstValue=o[0],l.secondValue=o[1],V()&&(e.validateEvent&&((d=c==null?void 0:c.validate)==null||d.call(c,"change").catch(x=>we())),l.oldValue=o.slice())):!e.range&&typeof o=="number"&&!Number.isNaN(o)&&(o<e.min?i(e.min):o>e.max?i(e.max):(l.firstValue=o,V()&&(e.validateEvent&&((v=c==null?void 0:c.validate)==null||v.call(c,"change").catch(x=>we())),l.oldValue=o)))};w(),re(()=>l.dragging,d=>{d||w()}),re(()=>e.modelValue,(d,v)=>{l.dragging||Array.isArray(d)&&Array.isArray(v)&&d.every((o,x)=>o===v[x])&&l.firstValue===d[0]&&l.secondValue===d[1]||w()},{deep:!0}),re(()=>[e.min,e.max],()=>{w()})},ul=ve({modelValue:{type:Number,default:0},vertical:Boolean,tooltipClass:String,placement:{type:String,values:Ee,default:"top"}}),dl={[te]:e=>me(e)},ml=["tabindex"],cl=ae({name:"ElSliderButton"}),vl=ae({...cl,props:ul,emits:dl,setup(e,{expose:l,emit:u}){const a=e,s=ge("slider"),c=Ce({hovering:!1,dragging:!1,isClick:!1,startX:0,currentX:0,startY:0,currentY:0,startPosition:0,newPosition:0,oldValue:a.modelValue}),{disabled:i,button:V,tooltip:w,showTooltip:d,tooltipVisible:v,wrapperStyle:o,formatValue:x,handleMouseEnter:C,handleMouseLeave:P,onButtonDown:T,onKeyDown:M,setPosition:I}=rl(a,c,u),{hovering:S,dragging:X}=ce(c);return l({onButtonDown:T,onKeyDown:M,setPosition:I,hovering:S,dragging:X}),(k,g)=>(L(),K("div",{ref_key:"button",ref:V,class:R([t(s).e("button-wrapper"),{hover:t(S),dragging:t(X)}]),style:G(t(o)),tabindex:t(i)?-1:0,onMouseenter:g[0]||(g[0]=(...y)=>t(C)&&t(C)(...y)),onMouseleave:g[1]||(g[1]=(...y)=>t(P)&&t(P)(...y)),onMousedown:g[2]||(g[2]=(...y)=>t(T)&&t(T)(...y)),onTouchstart:g[3]||(g[3]=(...y)=>t(T)&&t(T)(...y)),onFocus:g[4]||(g[4]=(...y)=>t(C)&&t(C)(...y)),onBlur:g[5]||(g[5]=(...y)=>t(P)&&t(P)(...y)),onKeydown:g[6]||(g[6]=(...y)=>t(M)&&t(M)(...y))},[Ne(t(Ie),{ref_key:"tooltip",ref:w,visible:t(v),placement:k.placement,"fallback-placements":["top","bottom","right","left"],"stop-popper-mouse-event":!1,"popper-class":k.tooltipClass,disabled:!t(d),persistent:""},{content:he(()=>[Q("span",null,Oe(t(x)),1)]),default:he(()=>[Q("div",{class:R([t(s).e("button"),{hover:t(S),dragging:t(X)}])},null,2)]),_:1},8,["visible","placement","popper-class","disabled"])],46,ml))}});var ke=xe(vl,[["__file","button.vue"]]);const fl=ve({mark:{type:le([String,Object]),default:void 0}});var gl=ae({name:"ElSliderMarker",props:fl,setup(e){const l=ge("slider"),u=f(()=>Se(e.mark)?e.mark:e.mark.label),a=f(()=>Se(e.mark)?void 0:e.mark.style);return()=>pe("div",{class:l.e("marks-text"),style:a.value},u.value)}});const bl=["id","role","aria-label","aria-labelledby"],yl={key:1},Vl=ae({name:"ElSlider"}),wl=ae({...Vl,props:He,emits:qe,setup(e,{expose:l,emit:u}){const a=e,s=ge("slider"),{t:c}=Xe(),i=Ce({firstValue:0,secondValue:0,oldValue:0,dragging:!1,sliderSize:1}),{elFormItem:V,slider:w,firstButton:d,secondButton:v,sliderDisabled:o,minValue:x,maxValue:C,runwayStyle:P,barStyle:T,resetSize:M,emitChange:I,onSliderWrapperPrevent:S,onSliderClick:X,onSliderDown:k,setFirstValue:g,setSecondValue:y}=Ge(a,i,u),{stops:j,getStopStyle:H}=sl(a,i,x,C),{inputId:$,isLabeledByFormItem:O}=Ye(a,{formItemContext:V}),m=Fe(),h=f(()=>a.inputSize||m.value),E=f(()=>a.label||c("el.slider.defaultLabel",{min:a.min,max:a.max})),q=f(()=>a.range?a.rangeStartLabel||c("el.slider.defaultRangeStartLabel"):E.value),J=f(()=>a.formatValueText?a.formatValueText(n.value):`${n.value}`),_=f(()=>a.rangeEndLabel||c("el.slider.defaultRangeEndLabel")),p=f(()=>a.formatValueText?a.formatValueText(b.value):`${b.value}`),A=f(()=>[s.b(),s.m(m.value),s.is("vertical",a.vertical),{[s.m("with-input")]:a.showInput}]),N=_e(a);il(a,i,x,C,u,V);const z=f(()=>{const r=[a.min,a.max,a.step].map(F=>{const D=`${F}`.split(".")[1];return D?D.length:0});return Math.max.apply(null,r)}),{sliderWrapper:U}=Je(a,i,M),{firstValue:n,secondValue:b,sliderSize:Y}=ce(i),W=r=>{i.dragging=r};return je(Le,{...ce(a),sliderSize:Y,disabled:o,precision:z,emitChange:I,resetSize:M,updateDragging:W}),l({onSliderClick:X}),(r,F)=>{var D,be;return L(),K("div",{id:r.range?t($):void 0,ref_key:"sliderWrapper",ref:U,class:R(t(A)),role:r.range?"group":void 0,"aria-label":r.range&&!t(O)?t(E):void 0,"aria-labelledby":r.range&&t(O)?(D=t(V))==null?void 0:D.labelId:void 0,onTouchstart:F[2]||(F[2]=(...B)=>t(S)&&t(S)(...B)),onTouchmove:F[3]||(F[3]=(...B)=>t(S)&&t(S)(...B))},[Q("div",{ref_key:"slider",ref:w,class:R([t(s).e("runway"),{"show-input":r.showInput&&!r.range},t(s).is("disabled",t(o))]),style:G(t(P)),onMousedown:F[0]||(F[0]=(...B)=>t(k)&&t(k)(...B)),onTouchstart:F[1]||(F[1]=(...B)=>t(k)&&t(k)(...B))},[Q("div",{class:R(t(s).e("bar")),style:G(t(T))},null,6),Ne(ke,{id:r.range?void 0:t($),ref_key:"firstButton",ref:d,"model-value":t(n),vertical:r.vertical,"tooltip-class":r.tooltipClass,placement:r.placement,role:"slider","aria-label":r.range||!t(O)?t(q):void 0,"aria-labelledby":!r.range&&t(O)?(be=t(V))==null?void 0:be.labelId:void 0,"aria-valuemin":r.min,"aria-valuemax":r.range?t(b):r.max,"aria-valuenow":t(n),"aria-valuetext":t(J),"aria-orientation":r.vertical?"vertical":"horizontal","aria-disabled":t(o),"onUpdate:modelValue":t(g)},null,8,["id","model-value","vertical","tooltip-class","placement","aria-label","aria-labelledby","aria-valuemin","aria-valuemax","aria-valuenow","aria-valuetext","aria-orientation","aria-disabled","onUpdate:modelValue"]),r.range?(L(),ie(ke,{key:0,ref_key:"secondButton",ref:v,"model-value":t(b),vertical:r.vertical,"tooltip-class":r.tooltipClass,placement:r.placement,role:"slider","aria-label":t(_),"aria-valuemin":t(n),"aria-valuemax":r.max,"aria-valuenow":t(b),"aria-valuetext":t(p),"aria-orientation":r.vertical?"vertical":"horizontal","aria-disabled":t(o),"onUpdate:modelValue":t(y)},null,8,["model-value","vertical","tooltip-class","placement","aria-label","aria-valuemin","aria-valuemax","aria-valuenow","aria-valuetext","aria-orientation","aria-disabled","onUpdate:modelValue"])):ne("v-if",!0),r.showStops?(L(),K("div",yl,[(L(!0),K(oe,null,ue(t(j),(B,ee)=>(L(),K("div",{key:ee,class:R(t(s).e("stop")),style:G(t(H)(B))},null,6))),128))])):ne("v-if",!0),t(N).length>0?(L(),K(oe,{key:2},[Q("div",null,[(L(!0),K(oe,null,ue(t(N),(B,ee)=>(L(),K("div",{key:ee,style:G(t(H)(B.position)),class:R([t(s).e("stop"),t(s).e("marks-stop")])},null,6))),128))]),Q("div",{class:R(t(s).e("marks"))},[(L(!0),K(oe,null,ue(t(N),(B,ee)=>(L(),ie(t(gl),{key:ee,mark:B.mark,style:G(t(H)(B.position))},null,8,["mark","style"]))),128))],2)],64)):ne("v-if",!0)],38),r.showInput&&!r.range?(L(),ie(t(Pe),{key:0,ref:"input","model-value":t(n),class:R(t(s).e("input")),step:r.step,disabled:t(o),controls:r.showInputControls,min:r.min,max:r.max,debounce:r.debounce,size:t(h),"onUpdate:modelValue":t(g),onChange:t(I)},null,8,["model-value","class","step","disabled","controls","min","max","debounce","size","onUpdate:modelValue","onChange"])):ne("v-if",!0)],42,bl)}}});var hl=xe(wl,[["__file","slider.vue"]]);const Bl=Ae(hl);export{Bl as E};
