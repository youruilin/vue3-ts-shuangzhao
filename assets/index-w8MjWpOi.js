import{d as H,e as Y,a as K,b as s,m as oe,p as ee,t as E,f as q,g as ae,I as ne,H as he,n as le,w as ie,i as De,h as Z,j as te,k as W,r as R,l as z,u as Ue,q as st,s as Oe,v as ue,x as G,y as Ye,z as rt,A as N,B as ct,C as de,F as ut,D as Ae,E as dt,G as Ce,J as Ne,K as He,L as je,M as Pe,N as mt,O as pe,P as we,Q as vt,R as Xe,S as ft,T as Be,U as gt,V as ht,W as Ze,X as We,Y as wt,Z as Ke,$ as yt,a0 as Ve,a1 as bt,c as Ct,a2 as U,a3 as ve,a4 as xt,o as kt,a5 as St,_ as Pt}from"./index-DeqO-Z_0.js";/* empty css              */import{S as It,a as Dt}from"./index-CCQnsf9F.js";/* empty css              */import{F as Ot}from"./index-BS0epvuA.js";import{N as Tt}from"./index-Dr0eun1k.js";import{t as pt}from"./task-CfdXJA-c.js";import{p as Bt,P as qe,a as Vt,L as ye,u as Ge,b as se,m as Mt,c as Et}from"./mount-component-ChZTCXHt.js";const[Rt,A]=K("action-sheet"),_t=Y({},Vt,{title:String,round:E,actions:ae(),closeIcon:q("cross"),closeable:E,cancelText:String,description:String,closeOnPopstate:E,closeOnClickAction:Boolean,safeAreaInsetBottom:E}),$t=[...Bt,"round","closeOnPopstate","safeAreaInsetBottom"];var Ft=H({name:Rt,props:_t,emits:["select","cancel","update:show"],setup(e,{slots:o,emit:t}){const n=a=>t("update:show",a),r=()=>{n(!1),t("cancel")},u=()=>{if(e.title)return s("div",{class:A("header")},[e.title,e.closeable&&s(ne,{name:e.closeIcon,class:[A("close"),he],onClick:r},null)])},w=()=>{if(o.cancel||e.cancelText)return[s("div",{class:A("gap")},null),s("button",{type:"button",class:A("cancel"),onClick:r},[o.cancel?o.cancel():e.cancelText])]},C=a=>{if(a.icon)return s(ne,{class:A("item-icon"),name:a.icon},null)},h=(a,k)=>a.loading?s(ye,{class:A("loading-icon")},null):o.action?o.action({action:a,index:k}):[s("span",{class:A("name")},[a.name]),a.subname&&s("div",{class:A("subname")},[a.subname])],I=(a,k)=>{const{color:D,loading:T,callback:B,disabled:l,className:y}=a,S=()=>{l||T||(B&&B(a),e.closeOnClickAction&&n(!1),le(()=>t("select",a,k)))};return s("button",{type:"button",style:{color:D},class:[A("item",{loading:T,disabled:l}),y],onClick:S},[C(a),h(a,k)])},d=()=>{if(e.description||o.description){const a=o.description?o.description():e.description;return s("div",{class:A("description")},[a])}};return()=>s(qe,oe({class:A(),position:"bottom","onUpdate:show":n},ee(e,$t)),{default:()=>{var a;return[u(),d(),s("div",{class:A("content")},[e.actions.map(I),(a=o.default)==null?void 0:a.call(o)]),w()]}})}});const zt=ie(Ft),[Lt,Q,Me]=K("picker"),Je=e=>e.find(o=>!o.disabled)||e[0];function Ut(e,o){const t=e[0];if(t){if(Array.isArray(t))return"multiple";if(o.children in t)return"cascade"}return"default"}function fe(e,o){o=Z(o,0,e.length);for(let t=o;t<e.length;t++)if(!e[t].disabled)return t;for(let t=o-1;t>=0;t--)if(!e[t].disabled)return t;return 0}const Ee=(e,o,t)=>o!==void 0&&!!e.find(n=>n[t.value]===o);function Ie(e,o,t){const n=e.findIndex(u=>u[t.value]===o),r=fe(e,n);return e[r]}function Yt(e,o,t){const n=[];let r={[o.children]:e},u=0;for(;r&&r[o.children];){const w=r[o.children],C=t.value[u];if(r=De(C)?Ie(w,C,o):void 0,!r&&w.length){const h=Je(w)[o.value];r=Ie(w,h,o)}u++,n.push(w)}return n}function At(e){const{transform:o}=window.getComputedStyle(e),t=o.slice(7,o.length-1).split(", ")[5];return Number(t)}function Nt(e){return Y({text:"text",value:"value",children:"children"},e)}const Re=200,_e=300,Ht=15,[Qe,xe]=K("picker-column"),et=Symbol(Qe);var jt=H({name:Qe,props:{value:W,fields:te(Object),options:ae(),readonly:Boolean,allowHtml:Boolean,optionHeight:te(Number),swipeDuration:te(W),visibleOptionNum:te(W)},emits:["change","clickOption","scrollInto"],setup(e,{emit:o,slots:t}){let n,r,u,w,C;const h=R(),I=R(),d=R(0),a=R(0),k=Ge(),D=()=>e.options.length,T=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,B=x=>{let i=fe(e.options,x);const f=-i*e.optionHeight,b=()=>{i>D()-1&&(i=fe(e.options,x));const L=e.options[i][e.fields.value];L!==e.value&&o("change",L)};n&&f!==d.value?C=b:b(),d.value=f},l=()=>e.readonly||!e.options.length,y=x=>{n||l()||(C=null,a.value=Re,B(x),o("clickOption",e.options[x]))},S=x=>Z(Math.round(-x/e.optionHeight),0,D()-1),c=z(()=>S(d.value)),V=(x,i)=>{const f=Math.abs(x/i);x=d.value+f/.003*(x<0?-1:1);const b=S(x);a.value=+e.swipeDuration,B(b)},m=()=>{n=!1,a.value=0,C&&(C(),C=null)},M=x=>{if(!l()){if(k.start(x),n){const i=At(I.value);d.value=Math.min(0,i-T())}a.value=0,r=d.value,u=Date.now(),w=r,C=null}},$=x=>{if(l())return;k.move(x),k.isVertical()&&(n=!0,ue(x,!0));const i=Z(r+k.deltaY.value,-(D()*e.optionHeight),e.optionHeight),f=S(i);f!==c.value&&o("scrollInto",e.options[f]),d.value=i;const b=Date.now();b-u>_e&&(u=b,w=i)},v=()=>{if(l())return;const x=d.value-w,i=Date.now()-u;if(i<_e&&Math.abs(x)>Ht){V(x,i);return}const b=S(d.value);a.value=Re,B(b),setTimeout(()=>{n=!1},0)},P=()=>{const x={height:`${e.optionHeight}px`};return e.options.map((i,f)=>{const b=i[e.fields.text],{disabled:L}=i,j=i[e.fields.value],g={role:"button",style:x,tabindex:L?-1:0,class:[xe("item",{disabled:L,selected:j===e.value}),i.className],onClick:()=>y(f)},O={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:b};return s("li",g,[t.option?t.option(i,f):s("div",O,null)])})};return Ue(et),se({stopMomentum:m}),st(()=>{const x=n?Math.floor(-d.value/e.optionHeight):e.options.findIndex(b=>b[e.fields.value]===e.value),i=fe(e.options,x),f=-i*e.optionHeight;n&&i<x&&m(),d.value=f}),Oe("touchmove",$,{target:h}),()=>s("div",{ref:h,class:xe(),onTouchstartPassive:M,onTouchend:v,onTouchcancel:v},[s("ul",{ref:I,style:{transform:`translate3d(0, ${d.value+T()}px, 0)`,transitionDuration:`${a.value}ms`,transitionProperty:a.value?"all":"none"},class:xe("wrapper"),onTransitionend:m},[P()])])}});const[Xt]=K("picker-toolbar"),be={title:String,cancelButtonText:String,confirmButtonText:String},Zt=["cancel","confirm","title","toolbar"],Wt=Object.keys(be);var Kt=H({name:Xt,props:be,emits:["confirm","cancel"],setup(e,{emit:o,slots:t}){const n=()=>{if(t.title)return t.title();if(e.title)return s("div",{class:[Q("title"),"van-ellipsis"]},[e.title])},r=()=>o("cancel"),u=()=>o("confirm"),w=()=>{var h;const I=(h=e.cancelButtonText)!=null?h:Me("cancel");if(!(!t.cancel&&!I))return s("button",{type:"button",class:[Q("cancel"),he],onClick:r},[t.cancel?t.cancel():I])},C=()=>{var h;const I=(h=e.confirmButtonText)!=null?h:Me("confirm");if(!(!t.confirm&&!I))return s("button",{type:"button",class:[Q("confirm"),he],onClick:u},[t.confirm?t.confirm():I])};return()=>s("div",{class:Q("toolbar")},[t.toolbar?t.toolbar():[w(),n(),C()]])}});const[qt,Jn]=K("picker-group"),Gt=Symbol(qt);Y({tabs:ae(),activeTab:G(0),nextStepText:String,showToolbar:E},be);const Te=Y({loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:G(44),showToolbar:E,swipeDuration:G(1e3),visibleOptionNum:G(6)},be),Jt=Y({},Te,{columns:ae(),modelValue:ae(),toolbarPosition:q("top"),columnsFieldNames:Object});var Qt=H({name:Lt,props:Jt,emits:["confirm","cancel","change","scrollInto","clickOption","update:modelValue"],setup(e,{emit:o,slots:t}){const n=R(),r=R(e.modelValue.slice(0)),{parent:u}=Ue(Gt),{children:w,linkChildren:C}=Ye(et);C();const h=z(()=>Nt(e.columnsFieldNames)),I=z(()=>rt(e.optionHeight)),d=z(()=>Ut(e.columns,h.value)),a=z(()=>{const{columns:i}=e;switch(d.value){case"multiple":return i;case"cascade":return Yt(i,h.value,r);default:return[i]}}),k=z(()=>a.value.some(i=>i.length)),D=z(()=>a.value.map((i,f)=>Ie(i,r.value[f],h.value))),T=z(()=>a.value.map((i,f)=>i.findIndex(b=>b[h.value.value]===r.value[f]))),B=(i,f)=>{if(r.value[i]!==f){const b=r.value.slice(0);b[i]=f,r.value=b}},l=()=>({selectedValues:r.value.slice(0),selectedOptions:D.value,selectedIndexes:T.value}),y=(i,f)=>{B(f,i),d.value==="cascade"&&r.value.forEach((b,L)=>{const j=a.value[L];Ee(j,b,h.value)||B(L,j.length?j[0][h.value.value]:void 0)}),le(()=>{o("change",Y({columnIndex:f},l()))})},S=(i,f)=>{const b={columnIndex:f,currentOption:i};o("clickOption",Y(l(),b)),o("scrollInto",b)},c=()=>{w.forEach(f=>f.stopMomentum());const i=l();return le(()=>{o("confirm",i)}),i},V=()=>o("cancel",l()),m=()=>a.value.map((i,f)=>s(jt,{value:r.value[f],fields:h.value,options:i,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:I.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:b=>y(b,f),onClickOption:b=>S(b,f),onScrollInto:b=>{o("scrollInto",{currentOption:b,columnIndex:f})}},{option:t.option})),M=i=>{if(k.value){const f={height:`${I.value}px`},b={backgroundSize:`100% ${(i-I.value)/2}px`};return[s("div",{class:Q("mask"),style:b},null),s("div",{class:[ct,Q("frame")],style:f},null)]}},$=()=>{const i=I.value*+e.visibleOptionNum,f={height:`${i}px`};return!e.loading&&!k.value&&t.empty?t.empty():s("div",{ref:n,class:Q("columns"),style:f},[m(),M(i)])},v=()=>{if(e.showToolbar&&!u)return s(Kt,oe(ee(e,Wt),{onConfirm:c,onCancel:V}),ee(t,Zt))};N(a,i=>{i.forEach((f,b)=>{f.length&&!Ee(f,r.value[b],h.value)&&B(b,Je(f)[h.value.value])})},{immediate:!0});let P;return N(()=>e.modelValue,i=>{!de(i,r.value)&&!de(i,P)&&(r.value=i.slice(0),P=i.slice(0))},{deep:!0}),N(r,i=>{de(i,e.modelValue)||(P=i.slice(0),o("update:modelValue",P))},{immediate:!0}),Oe("touchmove",ue,{target:n}),se({confirm:c,getSelectedOptions:()=>D.value}),()=>{var i,f;return s("div",{class:Q()},[e.toolbarPosition==="top"?v():null,e.loading?s(ye,{class:Q("loading")},null):null,(i=t["columns-top"])==null?void 0:i.call(t),$(),(f=t["columns-bottom"])==null?void 0:f.call(t),e.toolbarPosition==="bottom"?v():null])}}});const tt=ie(Qt),[en,tn]=K("form"),nn={colon:Boolean,disabled:Boolean,readonly:Boolean,required:[Boolean,String],showError:Boolean,labelWidth:W,labelAlign:String,inputAlign:String,scrollToError:Boolean,scrollToErrorPosition:String,validateFirst:Boolean,submitOnEnter:E,showErrorMessage:E,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}};var on=H({name:en,props:nn,emits:["submit","failed"],setup(e,{emit:o,slots:t}){const{children:n,linkChildren:r}=Ye(ut),u=l=>l?n.filter(y=>l.includes(y.name)):n,w=l=>new Promise((y,S)=>{const c=[];u(l).reduce((m,M)=>m.then(()=>{if(!c.length)return M.validate().then($=>{$&&c.push($)})}),Promise.resolve()).then(()=>{c.length?S(c):y()})}),C=l=>new Promise((y,S)=>{const c=u(l);Promise.all(c.map(V=>V.validate())).then(V=>{V=V.filter(Boolean),V.length?S(V):y()})}),h=l=>{const y=n.find(S=>S.name===l);return y?new Promise((S,c)=>{y.validate().then(V=>{V?c(V):S()})}):Promise.reject()},I=l=>typeof l=="string"?h(l):e.validateFirst?w(l):C(l),d=l=>{typeof l=="string"&&(l=[l]),u(l).forEach(S=>{S.resetValidation()})},a=()=>n.reduce((l,y)=>(l[y.name]=y.getValidationStatus(),l),{}),k=(l,y)=>{n.some(S=>S.name===l?(S.$el.scrollIntoView(y),!0):!1)},D=()=>n.reduce((l,y)=>(y.name!==void 0&&(l[y.name]=y.formValue.value),l),{}),T=()=>{const l=D();I().then(()=>o("submit",l)).catch(y=>{o("failed",{values:l,errors:y});const{scrollToError:S,scrollToErrorPosition:c}=e;S&&y[0].name&&k(y[0].name,c?{block:c}:void 0)})},B=l=>{ue(l),T()};return r({props:e}),se({submit:T,validate:I,getValues:D,scrollToField:k,resetValidation:d,getValidationStatus:a}),()=>{var l;return s("form",{class:tn(),onSubmit:B},[(l=t.default)==null?void 0:l.call(t)])}}});const an=ie(on),ln=Y({},Te,{modelValue:ae(),filter:Function,formatter:{type:Function,default:(e,o)=>o}}),sn=Object.keys(Te);function rn(e,o){if(e<0)return[];const t=Array(e);let n=-1;for(;++n<e;)t[n]=o(n);return t}const cn=(e,o)=>32-new Date(e,o-1,32).getDate(),ke=(e,o,t,n,r,u)=>{const w=rn(o-e+1,C=>{const h=Ae(e+C);return n(t,{text:h,value:h})});return r?r(t,w,u):w},un=(e,o)=>e.map((t,n)=>{const r=o[n];if(r.length){const u=+r[0].value,w=+r[r.length-1].value;return Ae(Z(+t,u,w))}return t}),[dn,re]=K("image"),mn={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:W,height:W,radius:W,lazyLoad:Boolean,iconSize:W,showError:E,errorIcon:q("photo-fail"),iconPrefix:String,showLoading:E,loadingIcon:q("photo"),crossorigin:String,referrerpolicy:String};var vn=H({name:dn,props:mn,emits:["load","error"],setup(e,{emit:o,slots:t}){const n=R(!1),r=R(!0),u=R(),{$Lazyload:w}=dt().proxy,C=z(()=>{const l={width:Ce(e.width),height:Ce(e.height)};return De(e.radius)&&(l.overflow="hidden",l.borderRadius=Ce(e.radius)),l});N(()=>e.src,()=>{n.value=!1,r.value=!0});const h=l=>{r.value&&(r.value=!1,o("load",l))},I=()=>{const l=new Event("load");Object.defineProperty(l,"target",{value:u.value,enumerable:!0}),h(l)},d=l=>{n.value=!0,r.value=!1,o("error",l)},a=(l,y,S)=>S?S():s(ne,{name:l,size:e.iconSize,class:y,classPrefix:e.iconPrefix},null),k=()=>{if(r.value&&e.showLoading)return s("div",{class:re("loading")},[a(e.loadingIcon,re("loading-icon"),t.loading)]);if(n.value&&e.showError)return s("div",{class:re("error")},[a(e.errorIcon,re("error-icon"),t.error)])},D=()=>{if(n.value||!e.src)return;const l={alt:e.alt,class:re("img"),style:{objectFit:e.fit,objectPosition:e.position},crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy};return e.lazyLoad?Pe(s("img",oe({ref:u},l),null),[[mt("lazy"),e.src]]):s("img",oe({ref:u,src:e.src,onLoad:h,onError:d},l),null)},T=({el:l})=>{const y=()=>{l===u.value&&r.value&&I()};u.value?y():le(y)},B=({el:l})=>{l===u.value&&!n.value&&d()};return w&&Ne&&(w.$on("loaded",T),w.$on("error",B),He(()=>{w.$off("loaded",T),w.$off("error",B)})),je(()=>{le(()=>{var l;(l=u.value)!=null&&l.complete&&!e.lazyLoad&&I()})}),()=>{var l;return s("div",{class:re({round:e.round,block:e.block}),style:C.value},[D(),k(),(l=t.default)==null?void 0:l.call(t)])}}});const nt=ie(vn),$e=new Date().getFullYear(),[fn]=K("date-picker"),gn=Y({},ln,{columnsType:{type:Array,default:()=>["year","month","day"]},minDate:{type:Date,default:()=>new Date($e-10,0,1),validator:pe},maxDate:{type:Date,default:()=>new Date($e+10,11,31),validator:pe}});var hn=H({name:fn,props:gn,emits:["confirm","cancel","change","update:modelValue"],setup(e,{emit:o,slots:t}){const n=R(e.modelValue),r=R(!1),u=R(),w=z(()=>r.value?e.modelValue:n.value),C=m=>m===e.minDate.getFullYear(),h=m=>m===e.maxDate.getFullYear(),I=m=>m===e.minDate.getMonth()+1,d=m=>m===e.maxDate.getMonth()+1,a=m=>{const{minDate:M,columnsType:$}=e,v=$.indexOf(m),P=w.value[v];if(P)return+P;switch(m){case"year":return M.getFullYear();case"month":return M.getMonth()+1;case"day":return M.getDate()}},k=()=>{const m=e.minDate.getFullYear(),M=e.maxDate.getFullYear();return ke(m,M,"year",e.formatter,e.filter,w.value)},D=()=>{const m=a("year"),M=C(m)?e.minDate.getMonth()+1:1,$=h(m)?e.maxDate.getMonth()+1:12;return ke(M,$,"month",e.formatter,e.filter,w.value)},T=()=>{const m=a("year"),M=a("month"),$=C(m)&&I(M)?e.minDate.getDate():1,v=h(m)&&d(M)?e.maxDate.getDate():cn(m,M);return ke($,v,"day",e.formatter,e.filter,w.value)},B=()=>{var m;return(m=u.value)==null?void 0:m.confirm()},l=()=>n.value,y=z(()=>e.columnsType.map(m=>{switch(m){case"year":return k();case"month":return D();case"day":return T();default:return[]}}));N(n,m=>{de(m,e.modelValue)||o("update:modelValue",m)}),N(()=>e.modelValue,(m,M)=>{r.value=de(M,n.value),m=un(m,y.value),de(m,n.value)||(n.value=m),r.value=!1},{immediate:!0});const S=(...m)=>o("change",...m),c=(...m)=>o("cancel",...m),V=(...m)=>o("confirm",...m);return se({confirm:B,getSelectedDate:l}),()=>s(tt,oe({ref:u,modelValue:n.value,"onUpdate:modelValue":m=>n.value=m,columns:y.value,onChange:S,onCancel:c,onConfirm:V},ee(e,sn)),t)}});const wn=ie(hn),Fe=e=>Math.sqrt((e[0].clientX-e[1].clientX)**2+(e[0].clientY-e[1].clientY)**2),yn=e=>({x:(e[0].clientX+e[1].clientX)/2,y:(e[0].clientY+e[1].clientY)/2}),Se=K("image-preview")[1],ze=2.6,bn={src:String,show:Boolean,active:Number,minZoom:te(W),maxZoom:te(W),rootWidth:te(Number),rootHeight:te(Number),disableZoom:Boolean,doubleScale:Boolean,closeOnClickImage:Boolean,closeOnClickOverlay:Boolean,vertical:Boolean};var Cn=H({props:bn,emits:["scale","close","longPress"],setup(e,{emit:o,slots:t}){const n=we({scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,initializing:!1,imageRatio:0}),r=Ge(),u=R(),w=R(),C=R(!1),h=R(!1);let I=0;const d=z(()=>{const{scale:g,moveX:O,moveY:p,moving:F,zooming:X,initializing:J}=n,me={transitionDuration:X||F||J?"0s":".3s"};return(g!==1||h.value)&&(me.transform=`matrix(${g}, 0, 0, ${g}, ${O}, ${p})`),me}),a=z(()=>{if(n.imageRatio){const{rootWidth:g,rootHeight:O}=e,p=C.value?O/n.imageRatio:g;return Math.max(0,(n.scale*p-g)/2)}return 0}),k=z(()=>{if(n.imageRatio){const{rootWidth:g,rootHeight:O}=e,p=C.value?O:g*n.imageRatio;return Math.max(0,(n.scale*p-O)/2)}return 0}),D=(g,O)=>{var p;if(g=Z(g,+e.minZoom,+e.maxZoom+1),g!==n.scale){const F=g/n.scale;if(n.scale=g,O){const X=Xe((p=u.value)==null?void 0:p.$el),J={x:X.width*.5,y:X.height*.5},me=n.moveX-(O.x-X.left-J.x)*(F-1),it=n.moveY-(O.y-X.top-J.y)*(F-1);n.moveX=Z(me,-a.value,a.value),n.moveY=Z(it,-k.value,k.value)}else n.moveX=0,n.moveY=h.value?I:0;o("scale",{scale:g,index:e.active})}},T=()=>{D(1)},B=()=>{const g=n.scale>1?1:2;D(g,g===2||h.value?{x:r.startX.value,y:r.startY.value}:void 0)};let l,y,S,c,V,m,M,$,v=!1;const P=g=>{const{touches:O}=g;if(l=O.length,l===2&&e.disableZoom)return;const{offsetX:p}=r;r.start(g),y=n.moveX,S=n.moveY,$=Date.now(),v=!1,n.moving=l===1&&(n.scale!==1||h.value),n.zooming=l===2&&!p.value,n.zooming&&(c=n.scale,V=Fe(O))},x=g=>{const{touches:O}=g;if(r.move(g),n.moving){const{deltaX:p,deltaY:F}=r,X=p.value+y,J=F.value+S;if((e.vertical?r.isVertical()&&Math.abs(J)>k.value:r.isHorizontal()&&Math.abs(X)>a.value)&&!v){n.moving=!1;return}v=!0,ue(g,!0),n.moveX=Z(X,-a.value,a.value),n.moveY=Z(J,-k.value,k.value)}if(n.zooming&&(ue(g,!0),O.length===2)){const p=Fe(O),F=c*p/V;m=yn(O),D(F,m)}},i=g=>{var O;const p=(O=w.value)==null?void 0:O.$el;if(!p)return;const F=p.firstElementChild,X=g.target===p,J=F==null?void 0:F.contains(g.target);!e.closeOnClickImage&&J||!e.closeOnClickOverlay&&X||o("close")},f=g=>{if(l>1)return;const O=Date.now()-$,p=250;r.isTap.value&&(O<p?e.doubleScale?M?(clearTimeout(M),M=null,B()):M=setTimeout(()=>{i(g),M=null},p):i(g):O>ft&&o("longPress"))},b=g=>{let O=!1;if((n.moving||n.zooming)&&(O=!0,n.moving&&y===n.moveX&&S===n.moveY&&(O=!1),!g.touches.length)){n.zooming&&(n.moveX=Z(n.moveX,-a.value,a.value),n.moveY=Z(n.moveY,-k.value,k.value),n.zooming=!1),n.moving=!1,y=0,S=0,c=1,n.scale<1&&T();const p=+e.maxZoom;n.scale>p&&D(p,m)}ue(g,O),f(g),r.reset()},L=()=>{const{rootWidth:g,rootHeight:O}=e,p=O/g,{imageRatio:F}=n;C.value=n.imageRatio>p&&F<ze,h.value=n.imageRatio>p&&F>=ze,h.value&&(I=(F*g-O)/2,n.moveY=I,n.initializing=!0,vt(()=>{n.initializing=!1})),T()},j=g=>{const{naturalWidth:O,naturalHeight:p}=g.target;n.imageRatio=p/O,L()};return N(()=>e.active,T),N(()=>e.show,g=>{g||T()}),N(()=>[e.rootWidth,e.rootHeight],L),Oe("touchmove",x,{target:z(()=>{var g;return(g=w.value)==null?void 0:g.$el})}),se({resetScale:T}),()=>{const g={loading:()=>s(ye,{type:"spinner"},null)};return s(It,{ref:w,class:Se("swipe-item"),onTouchstartPassive:P,onTouchend:b,onTouchcancel:b},{default:()=>[t.image?s("div",{class:Se("image-wrap")},[t.image({src:e.src,onLoad:j,style:d.value})]):s(nt,{ref:u,src:e.src,fit:"contain",class:Se("image",{vertical:C.value}),style:d.value,onLoad:j},g)]})}}});const[xn,ce]=K("image-preview"),kn=["show","teleport","transition","overlayStyle","closeOnPopstate"],Sn={show:Boolean,loop:E,images:ae(),minZoom:G(1/3),maxZoom:G(3),overlay:E,vertical:Boolean,closeable:Boolean,showIndex:E,className:Be,closeIcon:q("clear"),transition:String,beforeClose:Function,doubleScale:E,overlayClass:Be,overlayStyle:Object,swipeDuration:G(300),startPosition:G(0),showIndicators:Boolean,closeOnPopstate:E,closeOnClickImage:E,closeOnClickOverlay:E,closeIconPosition:q("top-right"),teleport:[String,Object]};var ot=H({name:xn,props:Sn,emits:["scale","close","closed","change","longPress","update:show"],setup(e,{emit:o,slots:t}){const n=R(),r=R(),u=we({active:0,rootWidth:0,rootHeight:0,disableZoom:!1}),w=()=>{if(n.value){const c=Xe(n.value.$el);u.rootWidth=c.width,u.rootHeight=c.height,n.value.resize()}},C=c=>o("scale",c),h=c=>o("update:show",c),I=()=>{Ze(e.beforeClose,{args:[u.active],done:()=>h(!1)})},d=c=>{c!==u.active&&(u.active=c,o("change",c))},a=()=>{if(e.showIndex)return s("div",{class:ce("index")},[t.index?t.index({index:u.active}):`${u.active+1} / ${e.images.length}`])},k=()=>{if(t.cover)return s("div",{class:ce("cover")},[t.cover()])},D=()=>{u.disableZoom=!0},T=()=>{u.disableZoom=!1},B=()=>s(Dt,{ref:n,lazyRender:!0,loop:e.loop,class:ce("swipe"),vertical:e.vertical,duration:e.swipeDuration,initialSwipe:e.startPosition,showIndicators:e.showIndicators,indicatorColor:"white",onChange:d,onDragEnd:T,onDragStart:D},{default:()=>[e.images.map((c,V)=>s(Cn,{ref:m=>{V===u.active&&(r.value=m)},src:c,show:e.show,active:u.active,maxZoom:e.maxZoom,minZoom:e.minZoom,rootWidth:u.rootWidth,rootHeight:u.rootHeight,disableZoom:u.disableZoom,doubleScale:e.doubleScale,closeOnClickImage:e.closeOnClickImage,closeOnClickOverlay:e.closeOnClickOverlay,vertical:e.vertical,onScale:C,onClose:I,onLongPress:()=>o("longPress",{index:V})},{image:t.image}))]}),l=()=>{if(e.closeable)return s(ne,{role:"button",name:e.closeIcon,class:[ce("close-icon",e.closeIconPosition),he],onClick:I},null)},y=()=>o("closed"),S=(c,V)=>{var m;return(m=n.value)==null?void 0:m.swipeTo(c,V)};return se({resetScale:()=>{var c;(c=r.value)==null||c.resetScale()},swipeTo:S}),je(w),N([gt,ht],w),N(()=>e.startPosition,c=>d(+c)),N(()=>e.show,c=>{const{images:V,startPosition:m}=e;c?(d(+m),le(()=>{w(),S(+m,{immediate:!0})})):o("close",{index:u.active,url:V[u.active]})}),()=>s(qe,oe({class:[ce(),e.className],overlayClass:[ce("overlay"),e.overlayClass],onClosed:y,"onUpdate:show":h},ee(e,kn)),{default:()=>[l(),B(),a(),k()]})}});let ge;const Pn={loop:!0,images:[],maxZoom:3,minZoom:1/3,onScale:void 0,onClose:void 0,onChange:void 0,vertical:!1,teleport:"body",className:"",showIndex:!0,closeable:!1,closeIcon:"clear",transition:void 0,beforeClose:void 0,doubleScale:!0,overlayStyle:void 0,overlayClass:void 0,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeOnClickOverlay:!0,closeIconPosition:"top-right"};function In(){({instance:ge}=Mt({setup(){const{state:e,toggle:o}=Et(),t=()=>{e.images=[]};return()=>s(ot,oe(e,{onClosed:t,"onUpdate:show":o}),null)}}))}const Dn=(e,o=0)=>{if(Ne)return ge||In(),e=Array.isArray(e)?{images:e,startPosition:o}:e,ge.open(Y({},Pn,e)),ge};ie(ot);const[On,_,Tn]=K("uploader");function Le(e,o){return new Promise(t=>{if(o==="file"){t();return}const n=new FileReader;n.onload=r=>{t(r.target.result)},o==="dataUrl"?n.readAsDataURL(e):o==="text"&&n.readAsText(e)})}function at(e,o){return We(e).some(t=>t.file?wt(o)?o(t.file):t.file.size>+o:!1)}function pn(e,o){const t=[],n=[];return e.forEach(r=>{at(r,o)?n.push(r):t.push(r)}),{valid:t,invalid:n}}const Bn=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|avif)/i,Vn=e=>Bn.test(e);function lt(e){return e.isImage?!0:e.file&&e.file.type?e.file.type.indexOf("image")===0:e.url?Vn(e.url):typeof e.content=="string"?e.content.indexOf("data:image")===0:!1}var Mn=H({props:{name:W,item:te(Object),index:Number,imageFit:String,lazyLoad:Boolean,deletable:Boolean,reupload:Boolean,previewSize:[Number,String,Array],beforeDelete:Function},emits:["delete","preview","reupload"],setup(e,{emit:o,slots:t}){const n=()=>{const{status:d,message:a}=e.item;if(d==="uploading"||d==="failed"){const k=d==="failed"?s(ne,{name:"close",class:_("mask-icon")},null):s(ye,{class:_("loading")},null),D=De(a)&&a!=="";return s("div",{class:_("mask")},[k,D&&s("div",{class:_("mask-message")},[a])])}},r=d=>{const{name:a,item:k,index:D,beforeDelete:T}=e;d.stopPropagation(),Ze(T,{args:[k,{name:a,index:D}],done:()=>o("delete")})},u=()=>o("preview"),w=()=>o("reupload"),C=()=>{if(e.deletable&&e.item.status!=="uploading"){const d=t["preview-delete"];return s("div",{role:"button",class:_("preview-delete",{shadow:!d}),tabindex:0,"aria-label":Tn("delete"),onClick:r},[d?d():s(ne,{name:"cross",class:_("preview-delete-icon")},null)])}},h=()=>{if(t["preview-cover"]){const{index:d,item:a}=e;return s("div",{class:_("preview-cover")},[t["preview-cover"](Y({index:d},a))])}},I=()=>{const{item:d,lazyLoad:a,imageFit:k,previewSize:D,reupload:T}=e;return lt(d)?s(nt,{fit:k,src:d.objectUrl||d.content||d.url,class:_("preview-image"),width:Array.isArray(D)?D[0]:D,height:Array.isArray(D)?D[1]:D,lazyLoad:a,onClick:T?w:u},{default:h}):s("div",{class:_("file"),style:Ke(e.previewSize)},[s(ne,{class:_("file-icon"),name:"description"},null),s("div",{class:[_("file-name"),"van-ellipsis"]},[d.file?d.file.name:d.url]),h()])};return()=>s("div",{class:_("preview")},[I(),n(),C()])}});const En={name:G(""),accept:q("image/*"),capture:String,multiple:Boolean,disabled:Boolean,readonly:Boolean,lazyLoad:Boolean,maxCount:G(1/0),imageFit:q("cover"),resultType:q("dataUrl"),uploadIcon:q("photograph"),uploadText:String,deletable:E,reupload:Boolean,afterRead:Function,showUpload:E,modelValue:ae(),beforeRead:Function,beforeDelete:Function,previewSize:[Number,String,Array],previewImage:E,previewOptions:Object,previewFullImage:E,maxSize:{type:[Number,String,Function],default:1/0}};var Rn=H({name:On,props:En,emits:["delete","oversize","clickUpload","closePreview","clickPreview","clickReupload","update:modelValue"],setup(e,{emit:o,slots:t}){const n=R(),r=[],u=R(-1),w=R(!1),C=(v=e.modelValue.length)=>({name:e.name,index:v}),h=()=>{n.value&&(n.value.value="")},I=v=>{if(h(),at(v,e.maxSize))if(Array.isArray(v)){const P=pn(v,e.maxSize);if(v=P.valid,o("oversize",P.invalid,C()),!v.length)return}else{o("oversize",v,C());return}if(v=we(v),u.value>-1){const P=[...e.modelValue];P.splice(u.value,1,v),o("update:modelValue",P),u.value=-1}else o("update:modelValue",[...e.modelValue,...We(v)]);e.afterRead&&e.afterRead(v,C())},d=v=>{const{maxCount:P,modelValue:x,resultType:i}=e;if(Array.isArray(v)){const f=+P-x.length;v.length>f&&(v=v.slice(0,f)),Promise.all(v.map(b=>Le(b,i))).then(b=>{const L=v.map((j,g)=>{const O={file:j,status:"",message:"",objectUrl:URL.createObjectURL(j)};return b[g]&&(O.content=b[g]),O});I(L)})}else Le(v,i).then(f=>{const b={file:v,status:"",message:"",objectUrl:URL.createObjectURL(v)};f&&(b.content=f),I(b)})},a=v=>{const{files:P}=v.target;if(e.disabled||!P||!P.length)return;const x=P.length===1?P[0]:[].slice.call(P);if(e.beforeRead){const i=e.beforeRead(x,C());if(!i){h();return}if(bt(i)){i.then(f=>{d(f||x)}).catch(h);return}}d(x)};let k;const D=()=>o("closePreview"),T=v=>{if(e.previewFullImage){const P=e.modelValue.filter(lt),x=P.map(i=>(i.objectUrl&&!i.url&&i.status!=="failed"&&(i.url=i.objectUrl,r.push(i.url)),i.url)).filter(Boolean);k=Dn(Y({images:x,startPosition:P.indexOf(v),onClose:D},e.previewOptions))}},B=()=>{k&&k.close()},l=(v,P)=>{const x=e.modelValue.slice(0);x.splice(P,1),o("update:modelValue",x),o("delete",v,C(P))},y=v=>{w.value=!0,u.value=v,le(()=>$())},S=()=>{w.value||(u.value=-1),w.value=!1},c=(v,P)=>{const x=["imageFit","deletable","reupload","previewSize","beforeDelete"],i=Y(ee(e,x),ee(v,x,!0));return s(Mn,oe({item:v,index:P,onClick:()=>o(e.reupload?"clickReupload":"clickPreview",v,C(P)),onDelete:()=>l(v,P),onPreview:()=>T(v),onReupload:()=>y(P)},ee(e,["name","lazyLoad"]),i),ee(t,["preview-cover","preview-delete"]))},V=()=>{if(e.previewImage)return e.modelValue.map(c)},m=v=>o("clickUpload",v),M=()=>{const v=e.modelValue.length<+e.maxCount,P=e.readonly?null:s("input",{ref:n,type:"file",class:_("input"),accept:e.accept,capture:e.capture,multiple:e.multiple&&u.value===-1,disabled:e.disabled,onChange:a,onClick:S},null);return t.default?Pe(s("div",{class:_("input-wrapper"),onClick:m},[t.default(),P]),[[Ve,v]]):Pe(s("div",{class:_("upload",{readonly:e.readonly}),style:Ke(e.previewSize),onClick:m},[s(ne,{name:e.uploadIcon,class:_("upload-icon")},null),e.uploadText&&s("span",{class:_("upload-text")},[e.uploadText]),P]),[[Ve,e.showUpload&&v]])},$=()=>{n.value&&!e.disabled&&n.value.click()};return He(()=>{r.forEach(v=>URL.revokeObjectURL(v))}),se({chooseFile:$,reuploadFile:y,closeImagePreview:B}),yt(()=>e.modelValue),()=>s("div",{class:_()},[s("div",{class:_("wrapper",{disabled:e.disabled})},[V(),M()])])}});const _n=ie(Rn),$n={class:"user-page"},Fn={class:"user-pic"},zn={class:"user-item"},Ln={class:"user-item"},Un={class:"user-item"},Yn={class:"user-item"},An={class:"user-item"},Nn=H({__name:"index",setup(e){const o=pt();o.areaList.length||(console.log("测试进程"),o.getCityList(),console.log(o.areaList,"if"));const t=we({userName:"",showSex:!1,sex:"",Birth:"",birthDay:"",showBirth:!1,workDay:"",showWorkDay:!1,minDate:new Date(1980,1,1),maxDate:new Date(2024,1,1),showCity:!1,city:"",area:""}),n=d=>{t.birthDay=d.getFullYear()+"-"+(d.getMonth()+1),t.showBirth=!1},r=d=>{t.birthDay=d.getFullYear()+"-"+(d.getMonth()+1),t.showWorkDay=!1},u=[{name:"男"},{name:"女"}],w=async()=>{},C=()=>{},h=()=>{},I=d=>{t.city=d[0].text,t.area=d[1].text,t.showCity=!1};return(d,a)=>{const k=Tt,D=_n,T=Ot,B=zt,l=wn,y=tt,S=an;return kt(),Ct(xt,null,[s(k,{title:"个人信息","left-arrow":"",onClickLeft:h}),U("div",$n,[s(S,{onSubmit:C},{default:ve(()=>[U("div",Fn,[s(D,{accept:".jpg,.png","after-read":w,"max-count":1})]),U("div",zn,[a[14]||(a[14]=U("h5",null,"姓名",-1)),s(T,{modelValue:t.userName,"onUpdate:modelValue":a[0]||(a[0]=c=>t.userName=c),label:"",placeholder:"请输入您的姓名"},null,8,["modelValue"])]),U("div",Ln,[a[15]||(a[15]=U("h5",null,"性别",-1)),s(T,{modelValue:t.sex,"onUpdate:modelValue":a[1]||(a[1]=c=>t.sex=c),readonly:"","is-link":"",label:"",placeholder:"请选择您的性别",onClick:a[2]||(a[2]=c=>t.showSex=!0)},null,8,["modelValue"]),s(B,{show:t.showSex,"onUpdate:show":a[3]||(a[3]=c=>t.showSex=c),actions:u,"cancel-text":"取消","close-on-click-action":""},null,8,["show"])]),U("div",Un,[a[16]||(a[16]=U("h5",null,"出生日期",-1)),s(T,{modelValue:t.birthDay,"onUpdate:modelValue":a[4]||(a[4]=c=>t.birthDay=c),readonly:"","is-link":"",label:"",placeholder:"请选择您的出生年月日",onClick:a[5]||(a[5]=c=>t.showBirth=!0)},null,8,["modelValue"]),s(B,{show:t.showBirth,"onUpdate:show":a[6]||(a[6]=c=>t.showBirth=c)},{default:ve(()=>[s(l,{title:"选择日期","min-date":t.minDate,"max-date":t.maxDate,onConfirm:n},null,8,["min-date","max-date"])]),_:1},8,["show"])]),U("div",Yn,[a[17]||(a[17]=U("h5",null,"参加工作的时间",-1)),s(T,{modelValue:t.workDay,"onUpdate:modelValue":a[7]||(a[7]=c=>t.workDay=c),label:"",readonly:"","is-link":"",placeholder:"请选择您的工作时间",onClick:a[8]||(a[8]=c=>t.showWorkDay=!0)},null,8,["modelValue"]),s(B,{show:t.showWorkDay,"onUpdate:show":a[9]||(a[9]=c=>t.showWorkDay=c),title:"标题"},{default:ve(()=>[s(l,{title:"选择日期","min-date":t.minDate,"max-date":t.maxDate,onConfirm:r},null,8,["min-date","max-date"])]),_:1},8,["show"])]),U("div",An,[a[18]||(a[18]=U("h5",null,"所在城市",-1)),s(T,{modelValue:t.city,"onUpdate:modelValue":a[10]||(a[10]=c=>t.city=c),label:"",placeholder:"请选择您的城市",readonly:"","is-link":"",onClick:a[11]||(a[11]=c=>t.showCity=!0)},null,8,["modelValue"]),s(B,{show:t.showCity,"onUpdate:show":a[13]||(a[13]=c=>t.showCity=c)},{default:ve(()=>[s(y,{columns:St(o).areaList,onConfirm:I,onCancel:a[12]||(a[12]=c=>t.showCity=!1)},null,8,["columns"])]),_:1},8,["show"])]),a[19]||(a[19]=U("button",{class:"wy-confirm-btn"},"提交修改",-1))]),_:1})])],64)}}}),Qn=Pt(Nn,[["__scopeId","data-v-ac181868"]]);export{Qn as default};
