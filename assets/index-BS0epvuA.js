import{E as Ve,T as N,t as Ee,k as V,f as P,d as ne,e as ae,a as le,au as Le,b as c,aw as Me,i as S,I as T,w as ie,aD as Pe,aE as Te,aF as Ae,Y as Be,a1 as Re,x as _e,P as De,r as j,u as ze,l as C,G as Q,A as Ne,L as $e,n as z,s as Fe,aG as Oe,h as qe,v as H,F as We,X as Z,ac as je,m as p,aH as He,af as Ke,aI as Ye}from"./index-DeqO-Z_0.js";import{b as Ge}from"./mount-component-ChZTCXHt.js";let Ue=0;function Je(){const e=Ve(),{name:n="unknown"}=(e==null?void 0:e.type)||{};return`${n}-${++Ue}`}const[Xe,w]=le("cell"),re={tag:P("div"),icon:String,size:String,title:V,value:V,label:V,center:Boolean,isLink:Boolean,border:Ee,iconPrefix:String,valueClass:N,labelClass:N,titleClass:N,titleStyle:null,arrowDirection:String,required:{type:[Boolean,String],default:null},clickable:{type:Boolean,default:null}},Qe=ae({},re,Me);var Ze=ne({name:Xe,props:Qe,setup(e,{slots:n}){const r=Le(),f=()=>{if(n.label||S(e.label))return c("div",{class:[w("label"),e.labelClass]},[n.label?n.label():e.label])},i=()=>{var o;if(n.title||S(e.title)){const m=(o=n.title)==null?void 0:o.call(n);return Array.isArray(m)&&m.length===0?void 0:c("div",{class:[w("title"),e.titleClass],style:e.titleStyle},[m||c("span",null,[e.title]),f()])}},d=()=>{const o=n.value||n.default;if(o||S(e.value))return c("div",{class:[w("value"),e.valueClass]},[o?o():c("span",null,[e.value])])},A=()=>{if(n.icon)return n.icon();if(e.icon)return c(T,{name:e.icon,class:w("left-icon"),classPrefix:e.iconPrefix},null)},E=()=>{if(n["right-icon"])return n["right-icon"]();if(e.isLink){const o=e.arrowDirection&&e.arrowDirection!=="right"?`arrow-${e.arrowDirection}`:"arrow";return c(T,{name:o,class:w("right-icon")},null)}};return()=>{var o;const{tag:m,size:u,center:$,border:B,isLink:F,required:O}=e,I=(o=e.clickable)!=null?o:F,L={center:$,required:!!O,clickable:I,borderless:!B};return u&&(L[u]=!!u),c(m,{class:w(L),role:I?"button":void 0,tabindex:I?0:void 0,onClick:r},{default:()=>{var M;return[A(),i(),d(),E(),(M=n.extra)==null?void 0:M.call(n)]}})}}});const pe=ie(Ze);function oe(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function et(e,n){if(oe(e)){if(n.required)return!1;if(n.validateEmpty===!1)return!0}return!(n.pattern&&!n.pattern.test(String(e)))}function tt(e,n){return new Promise(r=>{const f=n.validator(e,n);if(Re(f)){f.then(r);return}r(f)})}function ee(e,n){const{message:r}=n;return Be(r)?r(e,n):r||""}function nt({target:e}){e.composing=!0}function te({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function at(e,n){const r=Pe();e.style.height="auto";let f=e.scrollHeight;if(Te(n)){const{maxHeight:i,minHeight:d}=n;i!==void 0&&(f=Math.min(f,i)),d!==void 0&&(f=Math.max(f,d))}f&&(e.style.height=`${f}px`,Ae(r))}function lt(e,n){return e==="number"&&(e="text",n??(n="decimal")),e==="digit"&&(e="tel",n??(n="numeric")),{type:e,inputmode:n}}function y(e){return[...e].length}function K(e,n){return[...e].slice(0,n).join("")}const[it,h]=le("field"),rt={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:V,max:Number,min:Number,formatter:Function,clearIcon:P("clear"),modelValue:_e(""),inputAlign:String,placeholder:String,autocomplete:String,autocapitalize:String,autocorrect:String,errorMessage:String,enterkeyhint:String,clearTrigger:P("focus"),formatTrigger:P("onChange"),spellcheck:{type:Boolean,default:null},error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null},inputmode:String},ot=ae({},re,rt,{rows:V,type:P("text"),rules:Array,autosize:[Boolean,Object],labelWidth:V,labelClass:N,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var ct=ne({name:it,props:ot,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:n,slots:r}){const f=Je(),i=De({status:"unvalidated",focused:!1,validateMessage:""}),d=j(),A=j(),E=j(),{parent:o}=ze(We),m=()=>{var t;return String((t=e.modelValue)!=null?t:"")},u=t=>{if(S(e[t]))return e[t];if(o&&S(o.props[t]))return o.props[t]},$=C(()=>{const t=u("readonly");if(e.clearable&&!t){const a=m()!=="",l=e.clearTrigger==="always"||e.clearTrigger==="focus"&&i.focused;return a&&l}return!1}),B=C(()=>E.value&&r.input?E.value():e.modelValue),F=C(()=>{var t;const a=u("required");return a==="auto"?(t=e.rules)==null?void 0:t.some(l=>l.required):a}),O=t=>t.reduce((a,l)=>a.then(()=>{if(i.status==="failed")return;let{value:s}=B;if(l.formatter&&(s=l.formatter(s,l)),!et(s,l)){i.status="failed",i.validateMessage=ee(s,l);return}if(l.validator)return oe(s)&&l.validateEmpty===!1?void 0:tt(s,l).then(g=>{g&&typeof g=="string"?(i.status="failed",i.validateMessage=g):g===!1&&(i.status="failed",i.validateMessage=ee(s,l))})}),Promise.resolve()),I=()=>{i.status="unvalidated",i.validateMessage=""},L=()=>n("endValidate",{status:i.status,message:i.validateMessage}),M=(t=e.rules)=>new Promise(a=>{I(),t?(n("startValidate"),O(t).then(()=>{i.status==="failed"?(a({name:e.name,message:i.validateMessage}),L()):(i.status="passed",a(),L())})):a()}),q=t=>{if(o&&e.rules){const{validateTrigger:a}=o.props,l=Z(a).includes(t),s=e.rules.filter(g=>g.trigger?Z(g.trigger).includes(t):l);s.length&&M(s)}},ce=t=>{var a;const{maxlength:l}=e;if(S(l)&&y(t)>+l){const s=m();if(s&&y(s)===+l)return s;const g=(a=d.value)==null?void 0:a.selectionEnd;if(i.focused&&g){const k=[...t],x=k.length-+l;return k.splice(g-x,x),k.join("")}return K(t,+l)}return t},R=(t,a="onChange")=>{var l,s;const g=t;t=ce(t);const k=y(g)-y(t);if(e.type==="number"||e.type==="digit"){const v=e.type==="number";if(t=Oe(t,v,v),a==="onBlur"&&t!==""&&(e.min!==void 0||e.max!==void 0)){const b=qe(+t,(l=e.min)!=null?l:-1/0,(s=e.max)!=null?s:1/0);+t!==b&&(t=b.toString())}}let x=0;if(e.formatter&&a===e.formatTrigger){const{formatter:v,maxlength:b}=e;if(t=v(t),S(b)&&y(t)>+b&&(t=K(t,+b)),d.value&&i.focused){const{selectionEnd:D}=d.value,X=K(g,D);x=y(v(X))-y(X)}}if(d.value&&d.value.value!==t)if(i.focused){let{selectionStart:v,selectionEnd:b}=d.value;if(d.value.value=t,S(v)&&S(b)){const D=y(t);k?(v-=k,b-=k):x&&(v+=x,b+=x),d.value.setSelectionRange(Math.min(v,D),Math.min(b,D))}}else d.value.value=t;t!==e.modelValue&&n("update:modelValue",t)},se=t=>{t.target.composing||R(t.target.value)},W=()=>{var t;return(t=d.value)==null?void 0:t.blur()},Y=()=>{var t;return(t=d.value)==null?void 0:t.focus()},_=()=>{const t=d.value;e.type==="textarea"&&e.autosize&&t&&at(t,e.autosize)},ue=t=>{i.focused=!0,n("focus",t),z(_),u("readonly")&&W()},de=t=>{i.focused=!1,R(m(),"onBlur"),n("blur",t),!u("readonly")&&(q("onBlur"),z(_),He())},G=t=>n("clickInput",t),fe=t=>n("clickLeftIcon",t),ge=t=>n("clickRightIcon",t),me=t=>{H(t),n("update:modelValue",""),n("clear",t)},U=C(()=>{if(typeof e.error=="boolean")return e.error;if(o&&o.props.showError&&i.status==="failed")return!0}),he=C(()=>{const t=u("labelWidth"),a=u("labelAlign");if(t&&a!=="top")return{width:Q(t)}}),be=t=>{t.keyCode===13&&(!(o&&o.props.submitOnEnter)&&e.type!=="textarea"&&H(t),e.type==="search"&&W()),n("keypress",t)},J=()=>e.id||`${f}-input`,ve=()=>i.status,ye=()=>{const t=h("control",[u("inputAlign"),{error:U.value,custom:!!r.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(r.input)return c("div",{class:t,onClick:G},[r.input()]);const a={id:J(),ref:d,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,disabled:u("disabled"),readonly:u("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,enterkeyhint:e.enterkeyhint,spellcheck:e.spellcheck,"aria-labelledby":e.label?`${f}-label`:void 0,"data-allow-mismatch":"attribute",onBlur:de,onFocus:ue,onInput:se,onClick:G,onChange:te,onKeypress:be,onCompositionend:te,onCompositionstart:nt};return e.type==="textarea"?c("textarea",p(a,{inputmode:e.inputmode}),null):c("input",p(lt(e.type,e.inputmode),a),null)},Se=()=>{const t=r["left-icon"];if(e.leftIcon||t)return c("div",{class:h("left-icon"),onClick:fe},[t?t():c(T,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},Ie=()=>{const t=r["right-icon"];if(e.rightIcon||t)return c("div",{class:h("right-icon"),onClick:ge},[t?t():c(T,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},ke=()=>{if(e.showWordLimit&&e.maxlength){const t=y(m());return c("div",{class:h("word-limit")},[c("span",{class:h("word-num")},[t]),je("/"),e.maxlength])}},xe=()=>{if(o&&o.props.showErrorMessage===!1)return;const t=e.errorMessage||i.validateMessage;if(t){const a=r["error-message"],l=u("errorMessageAlign");return c("div",{class:h("error-message",l)},[a?a({message:t}):t])}},Ce=()=>{const t=u("labelWidth"),a=u("labelAlign"),l=u("colon")?":":"";if(r.label)return[r.label(),l];if(e.label)return c("label",{id:`${f}-label`,for:r.input?void 0:J(),"data-allow-mismatch":"attribute",onClick:s=>{H(s),Y()},style:a==="top"&&t?{width:Q(t)}:void 0},[e.label+l])},we=()=>[c("div",{class:h("body")},[ye(),$.value&&c(T,{ref:A,name:e.clearIcon,class:h("clear")},null),Ie(),r.button&&c("div",{class:h("button")},[r.button()])]),ke(),xe()];return Ge({blur:W,focus:Y,validate:M,formValue:B,resetValidation:I,getValidationStatus:ve}),Ke(Ye,{customValue:E,resetValidation:I,validateWithTrigger:q}),Ne(()=>e.modelValue,()=>{R(m()),I(),q("onChange"),z(_)}),$e(()=>{R(m(),e.formatTrigger),z(_)}),Fe("touchstart",me,{target:C(()=>{var t;return(t=A.value)==null?void 0:t.$el})}),()=>{const t=u("disabled"),a=u("labelAlign"),l=Se(),s=()=>{const g=Ce();return a==="top"?[l,g].filter(Boolean):g||[]};return c(pe,{size:e.size,class:h({error:U.value,disabled:t,[`label-${a}`]:a}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:he.value,valueClass:h("value"),titleClass:[h("label",[a,{required:F.value}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:l&&a!=="top"?()=>l:null,title:s,value:we,extra:r.extra})}}});const dt=ie(ct);export{dt as F,rt as f,Je as u};
