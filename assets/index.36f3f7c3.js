import{aB as Nl,D as We,E as p,x as Se,ah as Ne,J as N,u as S,H as gl,f as Ie,a5 as Re,al as yl,O as Rl,a4 as k,Z as we,$ as Cl,o as g,c as D,U as ue,a as z,t as J,a0 as O,ak as Z,g as K,K as Ol,a3 as kl,a1 as ne,M as Il,I as oe,aC as Oe,m as Hl,T as Ql,q as jl,aD as hl,v as Kl,ao as Ul,R as zl,aE as Gl,r as Y,ap as Xl,d as se,w as L,h as q,F as Fe,an as bl,a8 as Q,a2 as Tl,aw as F,aF as Yl,ay as Zl,a7 as Ll}from"./app.0bb1a7b5.js";import{M as Jl,N as xl,O as _l,Q as W,h as de,i as Al,_ as He,o as Sl,j as en,V as ln,e as nn,L as El,l as on,R as Ml,T as Vl,U as x,C as Bl,X as tn,Y as an,B as rn,Z as sn,x as $l,$ as un,a0 as dn,a1 as cn,w as pn,m as ql}from"./document.a03dcdd3.js";import{i as fn,E as vn}from"./index.16883dec.js";import{E as mn,t as hn}from"./index.73d47134.js";import{u as bn}from"./index.0907e685.js";import{s as gn}from"./scroll.2d62f60a.js";import{i as yn}from"./validator.b700418f.js";var Dl=1/0,Cn=17976931348623157e292;function On(e){if(!e)return e===0?e:0;if(e=Jl(e),e===Dl||e===-Dl){var l=e<0?-1:1;return l*Cn}return e===e?e:0}function Sn(e){var l=On(e),a=l%1;return l===l?a?l-a:l:0}function wn(e,l,a,v){for(var f=e.length,u=a+(v?1:-1);v?u--:++u<f;)if(l(e[u],u,e))return u;return-1}var In=Math.max,Tn=Math.min;function Ln(e,l,a){var v=e==null?0:e.length;if(!v)return-1;var f=v-1;return a!==void 0&&(f=Sn(a),f=a<0?In(v+f,0):Tn(f,v-1)),wn(e,xl(l),f,!0)}const En=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),lo=e=>Nl(e),Mn=e=>_l[e||"default"],Fl=Symbol("ElSelectGroup"),Qe=Symbol("ElSelect");function Vn(e,l){const a=We(Qe),v=We(Fl,{disabled:!1}),f=p(()=>Se(e.value)),u=p(()=>a.props.multiple?b(a.props.modelValue,e.value):I(e.value,a.props.modelValue)),s=p(()=>{if(a.props.multiple){const c=a.props.modelValue||[];return!u.value&&c.length>=a.props.multipleLimit&&a.props.multipleLimit>0}else return!1}),m=p(()=>e.label||(f.value?"":e.value)),d=p(()=>e.value||e.label||""),w=p(()=>e.disabled||l.groupDisabled||s.value),h=gl(),b=(c=[],y)=>{if(f.value){const t=a.props.valueKey;return c&&c.some(C=>Ne(W(C,t))===W(y,t))}else return c&&c.includes(y)},I=(c,y)=>{if(f.value){const{valueKey:t}=a.props;return W(c,t)===W(y,t)}else return c===y},E=()=>{!e.disabled&&!v.disabled&&(a.hoverIndex=a.optionsArray.indexOf(h.proxy))};N(()=>m.value,()=>{!e.created&&!a.props.remote&&a.setSelected()}),N(()=>e.value,(c,y)=>{const{remote:t,valueKey:C}=a.props;if(Object.is(c,y)||(a.onOptionDestroy(y,h.proxy),a.onOptionCreate(h.proxy)),!e.created&&!t){if(C&&Se(c)&&Se(y)&&c[C]===y[C])return;a.setSelected()}}),N(()=>v.disabled,()=>{l.groupDisabled=v.disabled},{immediate:!0});const{queryChange:T}=Ne(a);return N(T,c=>{const{query:y}=S(c),t=new RegExp(En(y),"i");l.visible=t.test(m.value)||e.created,l.visible||a.filteredOptionsCount--},{immediate:!0}),{select:a,currentLabel:m,currentValue:d,itemSelected:u,isDisabled:w,hoverItem:E}}const $n=Ie({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:Boolean},setup(e){const l=de("select"),a=Al(),v=p(()=>[l.be("dropdown","item"),l.is("disabled",S(m)),{selected:S(s),hover:S(b)}]),f=Re({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:u,itemSelected:s,isDisabled:m,select:d,hoverItem:w}=Vn(e,f),{visible:h,hover:b}=yl(f),I=gl().proxy;d.onOptionCreate(I),Rl(()=>{const T=I.value,{selected:c}=d,t=(d.props.multiple?c:[c]).some(C=>C.value===I.value);k(()=>{d.cachedOptions.get(T)===I&&!t&&d.cachedOptions.delete(T)}),d.onOptionDestroy(T,I)});function E(){e.disabled!==!0&&f.groupDisabled!==!0&&d.handleOptionSelect(I)}return{ns:l,id:a,containerKls:v,currentLabel:u,itemSelected:s,isDisabled:m,select:d,hoverItem:w,visible:h,hover:b,selectOptionClick:E,states:f}}}),Dn=["id","aria-disabled","aria-selected"];function Pn(e,l,a,v,f,u){return we((g(),D("li",{id:e.id,class:O(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMouseenter:l[0]||(l[0]=(...s)=>e.hoverItem&&e.hoverItem(...s)),onClick:l[1]||(l[1]=Z((...s)=>e.selectOptionClick&&e.selectOptionClick(...s),["stop"]))},[ue(e.$slots,"default",{},()=>[z("span",null,J(e.currentLabel),1)])],42,Dn)),[[Cl,e.visible]])}var wl=He($n,[["render",Pn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const kn=Ie({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=We(Qe),l=de("select"),a=p(()=>e.props.popperClass),v=p(()=>e.props.multiple),f=p(()=>e.props.fitInputWidth),u=K("");function s(){var m;u.value=`${(m=e.selectWrapper)==null?void 0:m.offsetWidth}px`}return Ol(()=>{s(),kl(e.selectWrapper,s)}),{ns:l,minWidth:u,popperClass:a,isMultiple:v,isFitInputWidth:f}}});function Kn(e,l,a,v,f,u){return g(),D("div",{class:O([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:ne({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[ue(e.$slots,"default")],6)}var zn=He(kn,[["render",Kn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);function An(e){const{t:l}=Sl();return Re({options:new Map,cachedOptions:new Map,disabledOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,prefixWidth:11,mouseEnter:!1,focused:!1})}const Bn=(e,l,a)=>{const{t:v}=Sl(),f=de("select");bn({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},p(()=>e.suffixTransition===!1));const u=K(null),s=K(null),m=K(null),d=K(null),w=K(null),h=K(null),b=K(null),I=K(null),E=K(),T=Il({query:""}),c=Il(""),y=K([]);let t=0;const{form:C,formItem:j}=en(),je=p(()=>!e.filterable||e.multiple||!l.visible),U=p(()=>e.disabled||(C==null?void 0:C.disabled)),Te=p(()=>{const n=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!=="";return e.clearable&&!U.value&&l.inputHovering&&n}),Le=p(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),Ue=p(()=>f.is("reverse",Le.value&&l.visible&&e.suffixTransition)),ce=p(()=>(C==null?void 0:C.statusIcon)&&(j==null?void 0:j.validateState)&&ln[j==null?void 0:j.validateState]),Ee=p(()=>e.remote?300:0),pe=p(()=>e.loading?e.loadingText||v("el.select.loading"):e.remote&&l.query===""&&l.options.size===0?!1:e.filterable&&l.query&&l.options.size>0&&l.filteredOptionsCount===0?e.noMatchText||v("el.select.noMatch"):l.options.size===0?e.noDataText||v("el.select.noData"):null),M=p(()=>{const n=Array.from(l.options.values()),o=[];return y.value.forEach(i=>{const r=n.findIndex(V=>V.currentLabel===i);r>-1&&o.push(n[r])}),o.length>=n.length?o:n}),Ge=p(()=>Array.from(l.cachedOptions.values())),Xe=p(()=>{const n=M.value.filter(o=>!o.created).some(o=>o.currentLabel===l.query);return e.filterable&&e.allowCreate&&l.query!==""&&!n}),_=nn(),Ye=p(()=>["small"].includes(_.value)?"small":"default"),Ze=p({get(){return l.visible&&pe.value!==!1},set(n){l.visible=n}});N([()=>U.value,()=>_.value,()=>C==null?void 0:C.size],()=>{k(()=>{R()})}),N(()=>e.placeholder,n=>{l.cachedPlaceHolder=l.currentPlaceholder=n,e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(l.currentPlaceholder="")}),N(()=>e.modelValue,(n,o)=>{e.multiple&&(R(),n&&n.length>0||s.value&&l.query!==""?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",X(l.query))),fe(),e.filterable&&!e.multiple&&(l.inputLength=20),!El(n,o)&&e.validateEvent&&(j==null||j.validate("change").catch(i=>on()))},{flush:"post",deep:!0}),N(()=>l.visible,n=>{var o,i,r,V,$;n?((i=(o=d.value)==null?void 0:o.updatePopper)==null||i.call(o),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,(V=(r=m.value)==null?void 0:r.focus)==null||V.call(r),e.multiple?($=s.value)==null||$.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),X(l.query),!e.multiple&&!e.remote&&(T.value.query="",Oe(T),Oe(c)))):(e.filterable&&(oe(e.filterMethod)&&e.filterMethod(""),oe(e.remoteMethod)&&e.remoteMethod("")),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,Je(),k(()=>{s.value&&s.value.value===""&&l.selected.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),a.emit("visible-change",n)}),N(()=>l.options.entries(),()=>{var n,o,i;if(!Hl)return;(o=(n=d.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&R();const r=((i=b.value)==null?void 0:i.querySelectorAll("input"))||[];(!e.filterable&&!e.defaultFirstOption&&!Ql(e.modelValue)||!Array.from(r).includes(document.activeElement))&&fe(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&Ve()},{flush:"post"}),N(()=>l.hoverIndex,n=>{jl(n)&&n>-1?E.value=M.value[n]||{}:E.value={},M.value.forEach(o=>{o.hover=E.value===o})});const R=()=>{k(()=>{var n,o;if(!u.value)return;const i=u.value.$el.querySelector("input");t=t||(i.clientHeight>0?i.clientHeight+2:0);const r=h.value,V=getComputedStyle(i).getPropertyValue(f.cssVarName("input-height")),$=Number.parseFloat(V)||Mn(_.value||(C==null?void 0:C.size)),A=_.value||$===t||t<=0?$:t;!(i.offsetParent===null)&&(i.style.height=`${(l.selected.length===0?A:Math.max(r?r.clientHeight+(r.clientHeight>A?6:0):0,A))-2}px`),l.visible&&pe.value!==!1&&((o=(n=d.value)==null?void 0:n.updatePopper)==null||o.call(n))})},X=async n=>{if(!(l.previousQuery===n||l.isOnComposition)){if(l.previousQuery===null&&(oe(e.filterMethod)||oe(e.remoteMethod))){l.previousQuery=n;return}l.previousQuery=n,k(()=>{var o,i;l.visible&&((i=(o=d.value)==null?void 0:o.updatePopper)==null||i.call(o))}),l.hoverIndex=-1,e.multiple&&e.filterable&&k(()=>{if(!U.value){const o=s.value.value.length*15+20;l.inputLength=e.collapseTags?Math.min(50,o):o,Me()}R()}),e.remote&&oe(e.remoteMethod)?(l.hoverIndex=-1,e.remoteMethod(n)):oe(e.filterMethod)?(e.filterMethod(n),Oe(c)):(l.filteredOptionsCount=l.optionsCount,T.value.query=n,Oe(T),Oe(c)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&(await k(),Ve())}},Me=()=>{l.currentPlaceholder!==""&&(l.currentPlaceholder=s.value.value?"":l.cachedPlaceHolder)},Ve=()=>{const n=M.value.filter(r=>r.visible&&!r.disabled&&!r.states.groupDisabled),o=n.find(r=>r.created),i=n[0];l.hoverIndex=ve(M.value,o||i)},fe=()=>{var n;if(e.multiple)l.selectedLabel="";else{const i=$e(e.modelValue);(n=i.props)!=null&&n.created?(l.createdLabel=i.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=i.currentLabel,l.selected=i,e.filterable&&(l.query=l.selectedLabel);return}const o=[];Array.isArray(e.modelValue)&&e.modelValue.forEach(i=>{o.push($e(i))}),l.selected=o,k(()=>{R()})},$e=n=>{let o;const i=hl(n).toLowerCase()==="object",r=hl(n).toLowerCase()==="null",V=hl(n).toLowerCase()==="undefined";for(let H=l.cachedOptions.size-1;H>=0;H--){const B=Ge.value[H];if(i?W(B.value,e.valueKey)===W(n,e.valueKey):B.value===n){o={value:n,currentLabel:B.currentLabel,isDisabled:B.isDisabled};break}}if(o)return o;const $=i?n.label:!r&&!V?n:"",A={value:n,currentLabel:$};return e.multiple&&(A.hitState=!1),A},Je=()=>{setTimeout(()=>{const n=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map(o=>M.value.findIndex(i=>W(i,n)===W(o,n)))):l.hoverIndex=-1:l.hoverIndex=M.value.findIndex(o=>re(o)===re(l.selected))},300)},xe=()=>{var n,o;_e(),(o=(n=d.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&R()},_e=()=>{var n;l.inputWidth=(n=u.value)==null?void 0:n.$el.offsetWidth},el=()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,X(l.query))},ll=Ml(()=>{el()},Ee.value),nl=Ml(n=>{X(n.target.value)},Ee.value),ee=n=>{El(e.modelValue,n)||a.emit(Bl,n)},De=n=>Ln(n,o=>!l.disabledOptions.has(o)),ol=n=>{if(n.code!==Vl.delete){if(n.target.value.length<=0&&!he()){const o=e.modelValue.slice(),i=De(o);if(i<0)return;o.splice(i,1),a.emit(x,o),ee(o)}n.target.value.length===1&&e.modelValue.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}},te=(n,o)=>{const i=l.selected.indexOf(o);if(i>-1&&!U.value){const r=e.modelValue.slice();r.splice(i,1),a.emit(x,r),ee(r),a.emit("remove-tag",o.value)}n.stopPropagation(),ae()},Pe=n=>{n.stopPropagation();const o=e.multiple?[]:"";if(!Kl(o))for(const i of l.selected)i.isDisabled&&o.push(i.value);a.emit(x,o),ee(o),l.hoverIndex=-1,l.visible=!1,a.emit("clear"),ae()},ke=n=>{var o;if(e.multiple){const i=(e.modelValue||[]).slice(),r=ve(i,n.value);r>-1?i.splice(r,1):(e.multipleLimit<=0||i.length<e.multipleLimit)&&i.push(n.value),a.emit(x,i),ee(i),n.created&&(l.query="",X(""),l.inputLength=20),e.filterable&&((o=s.value)==null||o.focus())}else a.emit(x,n.value),ee(n.value),l.visible=!1;tl(),!l.visible&&k(()=>{ie(n)})},ve=(n=[],o)=>{if(!Se(o))return n.indexOf(o);const i=e.valueKey;let r=-1;return n.some((V,$)=>Ne(W(V,i))===W(o,i)?(r=$,!0):!1),r},tl=()=>{const n=s.value||u.value;n&&(n==null||n.focus())},ie=n=>{var o,i,r,V,$;const A=Array.isArray(n)?n[0]:n;let H=null;if(A!=null&&A.value){const B=M.value.filter(qe=>qe.value===A.value);B.length>0&&(H=B[0].$el)}if(d.value&&H){const B=(V=(r=(i=(o=d.value)==null?void 0:o.popperRef)==null?void 0:i.contentRef)==null?void 0:r.querySelector)==null?void 0:V.call(r,`.${f.be("dropdown","wrap")}`);B&&gn(B,H)}($=I.value)==null||$.handleScroll()},me=n=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(n.value,n),l.cachedOptions.set(n.value,n),n.disabled&&l.disabledOptions.set(n.value,n)},il=(n,o)=>{l.options.get(n)===o&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(n))},al=n=>{n.code!==Vl.backspace&&he(!1),l.inputLength=s.value.value.length*15+20,R()},he=n=>{if(!Array.isArray(l.selected))return;const o=De(l.selected.map(r=>r.value)),i=l.selected[o];if(!!i)return n===!0||n===!1?(i.hitState=n,n):(i.hitState=!i.hitState,i.hitState)},rl=n=>{const o=n.target.value;if(n.type==="compositionend")l.isOnComposition=!1,k(()=>X(o));else{const i=o[o.length-1]||"";l.isOnComposition=!fn(i)}},sl=()=>{k(()=>ie(l.selected))},ul=n=>{l.focused||((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),l.focused=!0,a.emit("focus",n))},ae=()=>{var n,o;l.visible?(n=s.value||u.value)==null||n.focus():(o=u.value)==null||o.focus()},dl=()=>{var n,o,i;l.visible=!1,(n=u.value)==null||n.blur(),(i=(o=m.value)==null?void 0:o.blur)==null||i.call(o)},G=n=>{var o,i,r;((o=d.value)==null?void 0:o.isFocusInsideContent(n))||((i=w.value)==null?void 0:i.isFocusInsideContent(n))||((r=b.value)==null?void 0:r.contains(n.relatedTarget))||(l.visible&&ge(),l.focused=!1,a.emit("blur",n))},be=n=>{Pe(n)},ge=()=>{l.visible=!1},ye=n=>{l.visible&&(n.preventDefault(),n.stopPropagation(),l.visible=!1)},Ke=n=>{n&&!l.mouseEnter||U.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:(!d.value||!d.value.isFocusInsideContent())&&(l.visible=!l.visible),ae())},cl=()=>{l.visible?M.value[l.hoverIndex]&&ke(M.value[l.hoverIndex]):Ke()},re=n=>Se(n.value)?W(n.value,e.valueKey):n.value,ze=p(()=>M.value.filter(n=>n.visible).every(n=>n.disabled)),pl=p(()=>e.multiple?l.selected.slice(0,e.maxCollapseTags):[]),Ce=p(()=>e.multiple?l.selected.slice(e.maxCollapseTags):[]),Ae=n=>{if(!l.visible){l.visible=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0)&&!l.isOnComposition&&!ze.value){n==="next"?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):n==="prev"&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const o=M.value[l.hoverIndex];(o.disabled===!0||o.states.groupDisabled===!0||!o.visible)&&Ae(n),k(()=>ie(E.value))}},fl=()=>{l.mouseEnter=!0},Be=()=>{l.mouseEnter=!1},vl=(n,o)=>{var i,r;te(n,o),(r=(i=w.value)==null?void 0:i.updatePopper)==null||r.call(i)},ml=p(()=>({maxWidth:`${S(l.inputWidth)-32-(ce.value?22:0)}px`,width:"100%"}));return{optionList:y,optionsArray:M,hoverOption:E,selectSize:_,handleResize:xe,debouncedOnInputChange:ll,debouncedQueryChange:nl,deletePrevTag:ol,deleteTag:te,deleteSelected:Pe,handleOptionSelect:ke,scrollToOption:ie,readonly:je,resetInputHeight:R,showClose:Te,iconComponent:Le,iconReverse:Ue,showNewOption:Xe,collapseTagSize:Ye,setSelected:fe,managePlaceholder:Me,selectDisabled:U,emptyText:pe,toggleLastOptionHitState:he,resetInputState:al,handleComposition:rl,onOptionCreate:me,onOptionDestroy:il,handleMenuEnter:sl,handleFocus:ul,focus:ae,blur:dl,handleBlur:G,handleClearClick:be,handleClose:ge,handleKeydownEscape:ye,toggleMenu:Ke,selectOption:cl,getValueKey:re,navigateOptions:Ae,handleDeleteTooltipTag:vl,dropMenuVisible:Ze,queryChange:T,groupQueryChange:c,showTagList:pl,collapseTagList:Ce,selectTagsStyle:ml,reference:u,input:s,iOSInput:m,tooltipRef:d,tagTooltipRef:w,tags:h,selectWrapper:b,scrollbar:I,handleMouseEnter:fl,handleMouseLeave:Be}};var qn=Ie({name:"ElOptions",emits:["update-options"],setup(e,{slots:l,emit:a}){let v=[];function f(u,s){if(u.length!==s.length)return!1;for(const[m]of u.entries())if(u[m]!=s[m])return!1;return!0}return()=>{var u,s;const m=(u=l.default)==null?void 0:u.call(l),d=[];function w(h){!Array.isArray(h)||h.forEach(b=>{var I,E,T,c;const y=(I=(b==null?void 0:b.type)||{})==null?void 0:I.name;y==="ElOptionGroup"?w(!Kl(b.children)&&!Array.isArray(b.children)&&oe((E=b.children)==null?void 0:E.default)?(T=b.children)==null?void 0:T.default():b.children):y==="ElOption"?d.push((c=b.props)==null?void 0:c.label):Array.isArray(b.children)&&w(b.children)})}return m.length&&w((s=m[0])==null?void 0:s.children),f(d,v)||(v=d,a("update-options",d)),m}}});const Pl="ElSelect",Fn=Ie({name:Pl,componentName:Pl,components:{ElInput:vn,ElSelectMenu:zn,ElOption:wl,ElOptions:qn,ElTag:mn,ElScrollbar:tn,ElTooltip:an,ElIcon:rn},directives:{ClickOutside:Ul},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:yn},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:Object,default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:sn.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:$l,default:un},fitInputWidth:Boolean,suffixIcon:{type:$l,default:dn},tagType:{...hn.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,suffixTransition:{type:Boolean,default:!0},placement:{type:String,values:cn,default:"bottom-start"},ariaLabel:{type:String,default:void 0}},emits:[x,Bl,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const a=de("select"),v=de("input"),{t:f}=Sl(),u=Al(),s=An(e),{optionList:m,optionsArray:d,hoverOption:w,selectSize:h,readonly:b,handleResize:I,collapseTagSize:E,debouncedOnInputChange:T,debouncedQueryChange:c,deletePrevTag:y,deleteTag:t,deleteSelected:C,handleOptionSelect:j,scrollToOption:je,setSelected:U,resetInputHeight:Te,managePlaceholder:Le,showClose:Ue,selectDisabled:ce,iconComponent:Ee,iconReverse:pe,showNewOption:M,emptyText:Ge,toggleLastOptionHitState:Xe,resetInputState:_,handleComposition:Ye,onOptionCreate:Ze,onOptionDestroy:R,handleMenuEnter:X,handleFocus:Me,focus:Ve,blur:fe,handleBlur:$e,handleClearClick:Je,handleClose:xe,handleKeydownEscape:_e,toggleMenu:el,selectOption:ll,getValueKey:nl,navigateOptions:ee,handleDeleteTooltipTag:De,dropMenuVisible:ol,reference:te,input:Pe,iOSInput:ke,tooltipRef:ve,tagTooltipRef:tl,tags:ie,selectWrapper:me,scrollbar:il,queryChange:al,groupQueryChange:he,handleMouseEnter:rl,handleMouseLeave:sl,showTagList:ul,collapseTagList:ae,selectTagsStyle:dl}=Bn(e,s,l),{inputWidth:G,selected:be,inputLength:ge,filteredOptionsCount:ye,visible:Ke,selectedLabel:cl,hoverIndex:re,query:ze,inputHovering:pl,currentPlaceholder:Ce,menuVisibleOnFocus:Ae,isOnComposition:fl,options:Be,cachedOptions:vl,optionsCount:ml,prefixWidth:n}=yl(s),o=p(()=>{const P=[a.b()],le=S(h);return le&&P.push(a.m(le)),e.disabled&&P.push(a.m("disabled")),P}),i=p(()=>[a.e("tags"),a.is("disabled",S(ce))]),r=p(()=>[a.b("tags-wrapper"),{"has-prefix":S(n)&&S(be).length}]),V=p(()=>[a.e("input"),a.is(S(h)),a.is("disabled",S(ce))]),$=p(()=>[a.e("input"),a.is(S(h)),a.em("input","iOS")]),A=p(()=>[a.is("empty",!e.allowCreate&&Boolean(S(ze))&&S(ye)===0)]),H=p(()=>({maxWidth:`${S(G)>123?S(G)-123:S(G)-75}px`})),B=p(()=>({marginLeft:`${S(n)}px`,flexGrow:1,width:`${S(ge)/(S(G)-32)}%`,maxWidth:`${S(G)-42}px`}));zl(Qe,Re({props:e,options:Be,optionsArray:d,cachedOptions:vl,optionsCount:ml,filteredOptionsCount:ye,hoverIndex:re,handleOptionSelect:j,onOptionCreate:Ze,onOptionDestroy:R,selectWrapper:me,selected:be,setSelected:U,queryChange:al,groupQueryChange:he})),Ol(()=>{s.cachedPlaceHolder=Ce.value=e.placeholder||(()=>f("el.select.placeholder")),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(Ce.value=""),kl(me,I),e.remote&&e.multiple&&Te(),k(()=>{const P=te.value&&te.value.$el;if(!!P&&(G.value=P.getBoundingClientRect().width,l.slots.prefix)){const le=P.querySelector(`.${v.e("prefix")}`);n.value=Math.max(le.getBoundingClientRect().width+11,30)}}),U()}),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(x,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(x,"");const qe=p(()=>{var P,le;return(le=(P=ve.value)==null?void 0:P.popperRef)==null?void 0:le.contentRef});return{isIOS:Gl,onOptionsRendered:P=>{m.value=P},prefixWidth:n,selectSize:h,readonly:b,handleResize:I,collapseTagSize:E,debouncedOnInputChange:T,debouncedQueryChange:c,deletePrevTag:y,deleteTag:t,handleDeleteTooltipTag:De,deleteSelected:C,handleOptionSelect:j,scrollToOption:je,inputWidth:G,selected:be,inputLength:ge,filteredOptionsCount:ye,visible:Ke,selectedLabel:cl,hoverIndex:re,query:ze,inputHovering:pl,currentPlaceholder:Ce,menuVisibleOnFocus:Ae,isOnComposition:fl,options:Be,resetInputHeight:Te,managePlaceholder:Le,showClose:Ue,selectDisabled:ce,iconComponent:Ee,iconReverse:pe,showNewOption:M,emptyText:Ge,toggleLastOptionHitState:Xe,resetInputState:_,handleComposition:Ye,handleMenuEnter:X,handleFocus:Me,focus:Ve,blur:fe,handleBlur:$e,handleClearClick:Je,handleClose:xe,handleKeydownEscape:_e,toggleMenu:el,selectOption:ll,getValueKey:nl,navigateOptions:ee,dropMenuVisible:ol,reference:te,input:Pe,iOSInput:ke,tooltipRef:ve,popperPaneRef:qe,tags:ie,selectWrapper:me,scrollbar:il,wrapperKls:o,tagsKls:i,tagWrapperKls:r,inputKls:V,iOSInputKls:$,scrollbarKls:A,selectTagsStyle:dl,nsSelect:a,tagTextStyle:H,inputStyle:B,handleMouseEnter:rl,handleMouseLeave:sl,showTagList:ul,collapseTagList:ae,tagTooltipRef:tl,contentId:u,hoverOption:w}}}),Wn=["disabled","autocomplete","aria-activedescendant","aria-controls","aria-expanded","aria-label"],Nn=["disabled"],Rn={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};function Hn(e,l,a,v,f,u){const s=Y("el-tag"),m=Y("el-tooltip"),d=Y("el-icon"),w=Y("el-input"),h=Y("el-option"),b=Y("el-options"),I=Y("el-scrollbar"),E=Y("el-select-menu"),T=Xl("click-outside");return we((g(),D("div",{ref:"selectWrapper",class:O(e.wrapperKls),onMouseenter:l[22]||(l[22]=(...c)=>e.handleMouseEnter&&e.handleMouseEnter(...c)),onMouseleave:l[23]||(l[23]=(...c)=>e.handleMouseLeave&&e.handleMouseLeave(...c)),onClick:l[24]||(l[24]=Z((...c)=>e.toggleMenu&&e.toggleMenu(...c),["stop"]))},[se(m,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:L(()=>{var c,y;return[z("div",{class:"select-trigger",onMouseenter:l[20]||(l[20]=t=>e.inputHovering=!0),onMouseleave:l[21]||(l[21]=t=>e.inputHovering=!1)},[e.multiple?(g(),D("div",{key:0,ref:"tags",tabindex:"-1",class:O(e.tagsKls),style:ne(e.selectTagsStyle),onClick:l[15]||(l[15]=(...t)=>e.focus&&e.focus(...t))},[e.collapseTags&&e.selected.length?(g(),q(Tl,{key:0,onAfterLeave:e.resetInputHeight},{default:L(()=>[z("span",{class:O(e.tagWrapperKls)},[(g(!0),D(Fe,null,bl(e.showTagList,t=>(g(),q(s,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:C=>e.deleteTag(C,t)},{default:L(()=>[z("span",{class:O(e.nsSelect.e("tags-text")),style:ne(e.tagTextStyle)},J(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128)),e.selected.length>e.maxCollapseTags?(g(),q(s,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:L(()=>[e.collapseTagsTooltip?(g(),q(m,{key:0,ref:"tagTooltipRef",disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:L(()=>[z("span",{class:O(e.nsSelect.e("tags-text"))},"+ "+J(e.selected.length-e.maxCollapseTags),3)]),content:L(()=>[z("div",{class:O(e.nsSelect.e("collapse-tags"))},[(g(!0),D(Fe,null,bl(e.collapseTagList,t=>(g(),D("div",{key:e.getValueKey(t),class:O(e.nsSelect.e("collapse-tag"))},[se(s,{class:"in-tooltip",closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:C=>e.handleDeleteTooltipTag(C,t)},{default:L(()=>[z("span",{class:O(e.nsSelect.e("tags-text")),style:ne({maxWidth:e.inputWidth-75+"px"})},J(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"])],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):(g(),D("span",{key:1,class:O(e.nsSelect.e("tags-text"))},"+ "+J(e.selected.length-e.maxCollapseTags),3))]),_:1},8,["size","type"])):Q("v-if",!0)],2)]),_:1},8,["onAfterLeave"])):Q("v-if",!0),e.collapseTags?Q("v-if",!0):(g(),q(Tl,{key:1,onAfterLeave:e.resetInputHeight},{default:L(()=>[z("span",{class:O(e.tagWrapperKls),style:ne(e.prefixWidth&&e.selected.length?{marginLeft:`${e.prefixWidth}px`}:"")},[(g(!0),D(Fe,null,bl(e.selected,t=>(g(),q(s,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:C=>e.deleteTag(C,t)},{default:L(()=>[z("span",{class:O(e.nsSelect.e("tags-text")),style:ne({maxWidth:e.inputWidth-75+"px"})},J(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128))],6)]),_:1},8,["onAfterLeave"])),e.filterable&&!e.selectDisabled?we((g(),D("input",{key:2,ref:"input","onUpdate:modelValue":l[0]||(l[0]=t=>e.query=t),type:"text",class:O(e.inputKls),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:ne(e.inputStyle),role:"combobox","aria-activedescendant":((c=e.hoverOption)==null?void 0:c.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onFocus:l[1]||(l[1]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onBlur:l[2]||(l[2]=(...t)=>e.handleBlur&&e.handleBlur(...t)),onKeyup:l[3]||(l[3]=(...t)=>e.managePlaceholder&&e.managePlaceholder(...t)),onKeydown:[l[4]||(l[4]=(...t)=>e.resetInputState&&e.resetInputState(...t)),l[5]||(l[5]=F(Z(t=>e.navigateOptions("next"),["prevent"]),["down"])),l[6]||(l[6]=F(Z(t=>e.navigateOptions("prev"),["prevent"]),["up"])),l[7]||(l[7]=F((...t)=>e.handleKeydownEscape&&e.handleKeydownEscape(...t),["esc"])),l[8]||(l[8]=F(Z((...t)=>e.selectOption&&e.selectOption(...t),["stop","prevent"]),["enter"])),l[9]||(l[9]=F((...t)=>e.deletePrevTag&&e.deletePrevTag(...t),["delete"])),l[10]||(l[10]=F(t=>e.visible=!1,["tab"]))],onCompositionstart:l[11]||(l[11]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionupdate:l[12]||(l[12]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionend:l[13]||(l[13]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onInput:l[14]||(l[14]=(...t)=>e.debouncedQueryChange&&e.debouncedQueryChange(...t))},null,46,Wn)),[[Yl,e.query]]):Q("v-if",!0)],6)):Q("v-if",!0),e.isIOS&&!e.multiple&&e.filterable&&e.readonly?(g(),D("input",{key:1,ref:"iOSInput",class:O(e.iOSInputKls),disabled:e.selectDisabled,type:"text"},null,10,Nn)):Q("v-if",!0),se(w,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[16]||(l[16]=t=>e.selectedLabel=t),type:"text",placeholder:typeof e.currentPlaceholder=="function"?e.currentPlaceholder():e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:O([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,role:"combobox","aria-activedescendant":((y=e.hoverOption)==null?void 0:y.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropMenuVisible,label:e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[17]||(l[17]=F(Z(t=>e.navigateOptions("next"),["stop","prevent"]),["down"])),l[18]||(l[18]=F(Z(t=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),F(Z(e.selectOption,["stop","prevent"]),["enter"]),F(e.handleKeydownEscape,["esc"]),l[19]||(l[19]=F(t=>e.visible=!1,["tab"]))]},Zl({suffix:L(()=>[e.iconComponent&&!e.showClose?(g(),q(d,{key:0,class:O([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:L(()=>[(g(),q(Ll(e.iconComponent)))]),_:1},8,["class"])):Q("v-if",!0),e.showClose&&e.clearIcon?(g(),q(d,{key:1,class:O([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:L(()=>[(g(),q(Ll(e.clearIcon)))]),_:1},8,["class","onClick"])):Q("v-if",!0)]),_:2},[e.$slots.prefix?{name:"prefix",fn:L(()=>[z("div",Rn,[ue(e.$slots,"prefix")])])}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","aria-activedescendant","aria-controls","aria-expanded","label","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])],32)]}),content:L(()=>[se(E,null,{default:L(()=>[we(se(I,{id:e.contentId,ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:O(e.scrollbarKls),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical"},{default:L(()=>[e.showNewOption?(g(),q(h,{key:0,value:e.query,created:!0},null,8,["value"])):Q("v-if",!0),se(b,{onUpdateOptions:e.onOptionsRendered},{default:L(()=>[ue(e.$slots,"default")]),_:3},8,["onUpdateOptions"])]),_:3},8,["id","wrap-class","view-class","class","aria-label"]),[[Cl,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&e.options.size===0)?(g(),D(Fe,{key:0},[e.$slots.empty?ue(e.$slots,"empty",{key:0}):(g(),D("p",{key:1,class:O(e.nsSelect.be("dropdown","empty"))},J(e.emptyText),3))],64)):Q("v-if",!0)]),_:3})]),_:3},8,["visible","placement","teleported","popper-class","popper-options","effect","transition","persistent","onShow"])],34)),[[T,e.handleClose,e.popperPaneRef]])}var Qn=He(Fn,[["render",Hn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);const jn=Ie({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const l=de("select"),a=K(!0),v=gl(),f=K([]);zl(Fl,Re({...yl(e)}));const u=We(Qe);Ol(()=>{f.value=s(v.subTree)});const s=d=>{const w=[];return Array.isArray(d.children)&&d.children.forEach(h=>{var b;h.type&&h.type.name==="ElOption"&&h.component&&h.component.proxy?w.push(h.component.proxy):(b=h.children)!=null&&b.length&&w.push(...s(h))}),w},{groupQueryChange:m}=Ne(u);return N(m,()=>{a.value=f.value.some(d=>d.visible===!0)},{flush:"post"}),{visible:a,ns:l}}});function Un(e,l,a,v,f,u){return we((g(),D("ul",{class:O(e.ns.be("group","wrap"))},[z("li",{class:O(e.ns.be("group","title"))},J(e.label),3),z("li",null,[z("ul",{class:O(e.ns.b("group"))},[ue(e.$slots,"default")],2)])],2)),[[Cl,e.visible]])}var Wl=He(jn,[["render",Un],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const no=pn(Qn,{Option:wl,OptionGroup:Wl}),oo=ql(wl);ql(Wl);export{no as E,oo as a,lo as c};
