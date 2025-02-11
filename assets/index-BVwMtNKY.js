import{d as w,x as f,k as y,a as A,r as D,am as L,P as $,A as p,s as N,b as c,n as B,as as I,v as M,w as R}from"./index-DeqO-Z_0.js";import{u as U,L as Y}from"./mount-component-ChZTCXHt.js";const[C,r,F]=A("pull-refresh"),x=50,G=["pulling","loosing","success"],X={disabled:Boolean,modelValue:Boolean,headHeight:f(x),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:y,successDuration:f(500),animationDuration:f(300)};var j=w({name:C,props:X,emits:["change","refresh","update:modelValue"],setup(s,{emit:d,slots:o}){let u;const g=D(),m=D(),H=L(g),e=$({status:"normal",distance:0,duration:0}),i=U(),P=()=>{if(s.headHeight!==x)return{height:`${s.headHeight}px`}},h=()=>e.status!=="loading"&&e.status!=="success"&&!s.disabled,k=t=>{const a=+(s.pullDistance||s.headHeight);return t>a&&(t<a*2?t=a+(t-a)/2:t=a*1.5+(t-a*2)/4),Math.round(t)},n=(t,a)=>{const l=+(s.pullDistance||s.headHeight);e.distance=t,a?e.status="loading":t===0?e.status="normal":t<l?e.status="pulling":e.status="loosing",d("change",{status:e.status,distance:t})},T=()=>{const{status:t}=e;return t==="normal"?"":s[`${t}Text`]||F(t)},E=()=>{const{status:t,distance:a}=e;if(o[t])return o[t]({distance:a});const l=[];return G.includes(t)&&l.push(c("div",{class:r("text")},[T()])),t==="loading"&&l.push(c(Y,{class:r("loading")},{default:T})),l},V=()=>{e.status="success",setTimeout(()=>{n(0)},+s.successDuration)},v=t=>{u=I(H.value)===0,u&&(e.duration=0,i.start(t))},b=t=>{h()&&v(t)},_=t=>{if(h()){u||v(t);const{deltaY:a}=i;i.move(t),u&&a.value>=0&&i.isVertical()&&(M(t),n(k(a.value)))}},S=()=>{u&&i.deltaY.value&&h()&&(e.duration=+s.animationDuration,e.status==="loosing"?(n(+s.headHeight,!0),d("update:modelValue",!0),B(()=>d("refresh"))):n(0))};return p(()=>s.modelValue,t=>{e.duration=+s.animationDuration,t?n(+s.headHeight,!0):o.success||s.successText?V():n(0,!1)}),N("touchmove",_,{target:m}),()=>{var t;const a={transitionDuration:`${e.duration}ms`,transform:e.distance?`translate3d(0,${e.distance}px, 0)`:""};return c("div",{ref:g,class:r()},[c("div",{ref:m,class:r("track"),style:a,onTouchstartPassive:b,onTouchend:S,onTouchcancel:S},[c("div",{class:r("head"),style:P()},[E()]),(t=o.default)==null?void 0:t.call(o)])])}}});const J=R(j);export{J as P};
