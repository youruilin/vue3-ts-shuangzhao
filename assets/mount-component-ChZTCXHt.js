import{e as w,E as Y,d as T,k as O,f as p,a as A,l as M,Z as se,b as i,G as ce,w as _,t as S,T as j,r as u,aP as D,aQ as re,aj as X,K as ie,A as E,aR as ue,v as F,s as H,aS as U,aT as G,aL as de,i as V,M as Z,a0 as W,L as ve,ah as fe,a4 as ye,m as R,W as me,n as he,H as Ie,I as Ce,af as Se,aU as Oe,aV as be,P as xe}from"./index-DeqO-Z_0.js";function Q(e){const t=Y();t&&w(t.proxy,e)}let Pe=2e3;const we=()=>++Pe,[ge,P]=A("loading"),ke=Array(12).fill(null).map((e,t)=>i("i",{class:P("line",String(t+1))},null)),pe=i("svg",{class:P("circular"),viewBox:"25 25 50 50"},[i("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),ze={size:O,type:p("circular"),color:String,vertical:Boolean,textSize:O,textColor:String};var Te=T({name:ge,props:ze,setup(e,{slots:t}){const n=M(()=>w({color:e.color},se(e.size))),s=()=>{const a=e.type==="spinner"?ke:pe;return i("span",{class:P("spinner",e.type),style:n.value},[t.icon?t.icon():a])},o=()=>{var a;if(t.default)return i("span",{class:P("text"),style:{fontSize:ce(e.textSize),color:(a=e.textColor)!=null?a:e.color}},[t.default()])};return()=>{const{type:a,vertical:l}=e;return i("div",{class:P([a,{vertical:l}]),"aria-live":"polite","aria-busy":!0},[s(),o()])}}});const je=_(Te),q={show:Boolean,zIndex:O,overlay:S,duration:O,teleport:[String,Object],lockScroll:S,lazyRender:S,beforeClose:Function,overlayStyle:Object,overlayClass:j,transitionAppear:Boolean,closeOnClickOverlay:S},Xe=Object.keys(q);function Ae(e,t){return e>t?"horizontal":t>e?"vertical":""}function _e(){const e=u(0),t=u(0),n=u(0),s=u(0),o=u(0),a=u(0),l=u(""),r=u(!0),b=()=>l.value==="vertical",C=()=>l.value==="horizontal",d=()=>{n.value=0,s.value=0,o.value=0,a.value=0,l.value="",r.value=!0};return{move:v=>{const f=v.touches[0];n.value=(f.clientX<0?0:f.clientX)-e.value,s.value=f.clientY-t.value,o.value=Math.abs(n.value),a.value=Math.abs(s.value);const I=10;(!l.value||o.value<I&&a.value<I)&&(l.value=Ae(o.value,a.value)),r.value&&(o.value>D||a.value>D)&&(r.value=!1)},start:v=>{d(),e.value=v.touches[0].clientX,t.value=v.touches[0].clientY},reset:d,startX:e,startY:t,deltaX:n,deltaY:s,offsetX:o,offsetY:a,direction:l,isVertical:b,isHorizontal:C,isTap:r}}let x=0;const N="van-overflow-hidden";function Ee(e,t){const n=_e(),s="01",o="10",a=d=>{n.move(d);const h=n.deltaY.value>0?o:s,g=ue(d.target,e.value),{scrollHeight:v,offsetHeight:f,scrollTop:I}=g;let y="11";I===0?y=f>=v?"00":"01":I+f>=v&&(y="10"),y!=="11"&&n.isVertical()&&!(parseInt(y,2)&parseInt(h,2))&&F(d,!0)},l=()=>{document.addEventListener("touchstart",n.start),document.addEventListener("touchmove",a,{passive:!1}),x||document.body.classList.add(N),x++},r=()=>{x&&(document.removeEventListener("touchstart",n.start),document.removeEventListener("touchmove",a),x--,x||document.body.classList.remove(N))},b=()=>t()&&l(),C=()=>t()&&r();re(b),X(C),ie(C),E(t,d=>{d?l():r()})}function J(e){const t=u(!1);return E(e,n=>{n&&(t.value=n)},{immediate:!0}),n=>()=>t.value?n():null}const $=()=>{var e;const{scopeId:t}=((e=Y())==null?void 0:e.vnode)||{};return t?{[t]:""}:null},[Le,Be]=A("overlay"),De={show:Boolean,zIndex:O,duration:O,className:j,lockScroll:S,lazyRender:S,customStyle:Object,teleport:[String,Object]};var Re=T({name:Le,props:De,setup(e,{slots:t}){const n=u(),s=J(()=>e.show||!e.lazyRender),o=l=>{e.lockScroll&&F(l,!0)},a=s(()=>{var l;const r=w(de(e.zIndex),e.customStyle);return V(e.duration)&&(r.animationDuration=`${e.duration}s`),Z(i("div",{ref:n,style:r,class:[Be(),e.className]},[(l=t.default)==null?void 0:l.call(t)]),[[W,e.show]])});return H("touchmove",o,{target:n}),()=>{const l=i(U,{name:"van-fade",appear:!0},{default:a});return e.teleport?i(G,{to:e.teleport},{default:()=>[l]}):l}}});const Ne=_(Re),$e=w({},q,{round:Boolean,position:p("center"),closeIcon:p("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:p("top-right"),destroyOnClose:Boolean,safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[Ke,K]=A("popup");var Ye=T({name:Ke,inheritAttrs:!1,props:$e,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:n,slots:s}){let o,a;const l=u(),r=u(),b=J(()=>e.show||!e.lazyRender),C=M(()=>{const c={zIndex:l.value};if(V(e.duration)){const m=e.position==="center"?"animationDuration":"transitionDuration";c[m]=`${e.duration}s`}return c}),d=()=>{o||(o=!0,l.value=e.zIndex!==void 0?+e.zIndex:we(),t("open"))},h=()=>{o&&me(e.beforeClose,{done(){o=!1,t("close"),t("update:show",!1)}})},g=c=>{t("clickOverlay",c),e.closeOnClickOverlay&&h()},v=()=>{if(e.overlay)return i(Ne,R({show:e.show,class:e.overlayClass,zIndex:l.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0},$(),{onClick:g}),{default:s["overlay-content"]})},f=c=>{t("clickCloseIcon",c),h()},I=()=>{if(e.closeable)return i(Ce,{role:"button",tabindex:0,name:e.closeIcon,class:[K("close-icon",e.closeIconPosition),Ie],classPrefix:e.iconPrefix,onClick:f},null)};let y;const ee=()=>{y&&clearTimeout(y),y=setTimeout(()=>{t("opened")})},te=()=>t("closed"),ne=c=>t("keydown",c),oe=b(()=>{var c;const{destroyOnClose:m,round:z,position:k,safeAreaInsetTop:ae,safeAreaInsetBottom:le,show:B}=e;if(!(!B&&m))return Z(i("div",R({ref:r,style:C.value,role:"dialog",tabindex:0,class:[K({round:z,[k]:k}),{"van-safe-area-top":ae,"van-safe-area-bottom":le}],onKeydown:ne},n,$()),[(c=s.default)==null?void 0:c.call(s),I()]),[[W,B]])}),L=()=>{const{position:c,transition:m,transitionAppear:z}=e,k=c==="center"?"van-fade":`van-popup-slide-${c}`;return i(U,{name:m||k,appear:z,onAfterEnter:ee,onAfterLeave:te},{default:oe})};return E(()=>e.show,c=>{c&&!o&&(d(),n.tabindex===0&&he(()=>{var m;(m=r.value)==null||m.focus()})),!c&&o&&(o=!1,t("close"))}),Q({popupRef:r}),Ee(r,()=>e.show&&e.lockScroll),H("popstate",()=>{e.closeOnPopstate&&(h(),a=!1)}),ve(()=>{e.show&&d()}),fe(()=>{a&&(t("update:show",!0),a=!1)}),X(()=>{e.show&&e.teleport&&(h(),a=!0)}),Se(Oe,()=>e.show),()=>e.teleport?i(G,{to:e.teleport},{default:()=>[v(),L()]}):i(ye,null,[v(),L()])}});const Fe=_(Ye);function He(){const e=xe({show:!1}),t=o=>{e.show=o},n=o=>{w(e,o,{transitionAppear:!0}),t(!0)},s=()=>t(!1);return Q({open:n,close:s,toggle:t}),{open:n,close:s,state:e,toggle:t}}function Ue(e){const t=be(e),n=document.createElement("div");return document.body.appendChild(n),{instance:t.mount(n),unmount(){t.unmount(),document.body.removeChild(n)}}}export{je as L,Fe as P,q as a,Q as b,He as c,$ as d,Ue as m,Xe as p,_e as u};
