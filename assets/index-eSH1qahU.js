import{d as T,aa as U,c as l,o as r,a4 as y,b as p,a2 as n,a5 as _,a9 as v,a7 as S,_ as x,ab as z,a3 as k,r as M,a8 as b,P as E,I as R,ac as V,ad as j,ae as A,a6 as F,af as K}from"./index-BToGPI97.js";/* empty css              *//* empty css              */import{P as D}from"./index-V_UP0E4Z.js";import{L as H,T as W}from"./TaskList-BP6R_6Dl.js";import{N as I}from"./index-CEK7nuhV.js";import{t as B}from"./task-DjE-y3hX.js";import{a as q,S as G}from"./index-CM7TAjI5.js";import{s as N}from"./request-DIOwhW-C.js";import{T as J}from"./index-DRrXQzbP.js";import{p as O,t as Q}from"./task-Cx2_21hk.js";/* empty css              */import{B as X}from"./index-Y6fp1j0J.js";import{P as Y}from"./mount-component-B6C6JtDM.js";const Z={class:"city-switch"},tt={class:"city-switch-text"},st={class:"city-switch-text"},et=["onClick"],ot=T({__name:"CitySwitch",setup(C){const a=U("popup");if(!a)throw new Error("popup is not provided");const{closeCitySwitch:t}=a,i=B(),o=()=>t();return i.cityList.length<=0&&i.getCityList(),(w,d)=>{const f=I;return r(),l(y,null,[p(f,{title:"シティスイッチ","left-arrow":"",onClickLeft:d[0]||(d[0]=c=>o())}),n("div",Z,[d[2]||(d[2]=n("h3",null,"選択した",-1)),n("div",tt,[n("span",{onClick:d[1]||(d[1]=c=>_(t)())},v(_(i).cityValue),1)]),d[3]||(d[3]=n("h3",null,"シティスイッチ",-1)),n("div",st,[(r(!0),l(y,null,S(_(i).cityList,(c,L)=>(r(),l("span",{key:L,onClick:m=>_(t)(c.name)},v(c.name),9,et))),128))])])],64)}}}),nt=x(ot,[["__scopeId","data-v-0c93d14e"]]);var it={};const at=(C,a)=>{const i=`${it.PUBLIC_URL||""}${C}`;return fetch(i,a).then(o=>{if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);return o.json()}).catch(o=>{throw console.error("Fetch error:",o),o})},rt=["href"],lt=["src"],ct=["src"],pt=T({__name:"TaskBanner",setup(C){const a=B(),t=async()=>{try{const i=await at("/data/banner.json");if(!i.ok)throw new Error("无法加载本地数据");const o=await i.json();o.list?(console.log(o),a.setBannerList(o.list)):N(o.msg||"数据格式不正确，缺少 list 字段")}catch(i){console.error("加载本地 bannerList 数据失败:",i),N("加载本地数据出错")}};return a.bannerList.length<=0&&t(),(i,o)=>{const w=G,d=q;return r(),z(d,{autoplay:3e3,"lazy-render":""},{default:k(()=>[(r(!0),l(y,null,S(_(a).bannerList,(f,c)=>(r(),z(w,{key:c},{default:k(()=>[f.url?(r(),l("a",{key:0,href:f.url,target:"_blank"},[n("img",{src:f.picture},null,8,lt)],8,rt)):(r(),l("img",{key:1,src:f.picture,alt:""},null,8,ct))]),_:2},1024))),128))]),_:1})}}}),dt=x(pt,[["__scopeId","data-v-a68cc5f9"]]),ut={class:"position-type"},_t={class:"position-type-left"},ft=["onClick"],mt={class:"position-type-right"},ht=["onClick"],kt=T({__name:"PositionType",setup(C){const a=U("popup");if(!a)throw new Error("popup is not provided");const{closePositionType:t}=a,i=B(),o=M(0),w=c=>{o.value=c},d=()=>t(),f=async()=>{const c=await O();c?i.setPositionList(c):new J("到这里出错了")};return i.positionList.length<=0&&f(),(c,L)=>{const m=I;return r(),l(y,null,[p(m,{title:"ポジションタイプ","left-arrow":"",onClickLeft:d}),n("div",ut,[n("div",_t,[(r(!0),l(y,null,S(_(i).positionList,(e,s)=>(r(),l("h5",{key:s,class:b(o.value==s?"active":""),onClick:$=>w(s)},v(e.name),11,ft))),128))]),n("div",mt,[(r(!0),l(y,null,S(_(i).positionList[o.value]&&_(i).positionList[o.value].children,(e,s)=>(r(),l("span",{key:s,onClick:$=>_(t)(e.name)},v(e.name),9,ht))),128))])])],64)}}}),yt=x(kt,[["__scopeId","data-v-cac77158"]]),vt={class:"task-screen"},wt={class:"screen-item"},gt=["onClick"],Ct={class:"screen-item"},Lt=["onClick"],St={class:"screen-footer"},$t=T({__name:"TaskScreen",setup(C){const a=U("popup");if(!a)throw new Error("popup is not provided");const{closeTaskScreen:t}=a,i=B(),o=E({mode:"",cycle:""}),w=()=>t(),d=m=>{o.mode=m},f=m=>{o.cycle=m},c=()=>{o.mode="",o.cycle=""},L=async()=>{const e=await(await fetch("/data/screenlist.json")).json();e.data&&(i.setScreenList(e.data),N(e.msg))};return i.screenList.serviceMode||L(),(m,e)=>{const s=R,$=I,P=X;return r(),l(y,null,[p($,{title:"フィルター","left-arrow":"",onClickLeft:w},{left:k(()=>[p(s,{name:"cross",size:"17"})]),_:1}),n("div",vt,[e[1]||(e[1]=n("h3",null,"サービス",-1)),n("div",wt,[(r(!0),l(y,null,S(_(i).screenList.serviceMode,(h,g)=>(r(),l("span",{key:g,class:b(o.mode==h?"active":""),onClick:u=>d(h)},v(h),11,gt))),128))]),e[2]||(e[2]=n("h3",null,"任务間",-1)),n("div",Ct,[(r(!0),l(y,null,S(_(i).screenList.taskCycle,(h,g)=>(r(),l("span",{key:g,class:b(o.cycle==h?"active":""),onClick:u=>f(h)},v(h),11,Lt))),128))])]),n("div",St,[n("button",{class:"screen-clear",onClick:c},"清除"),p(P,{type:"primary",block:"",onClick:e[0]||(e[0]=h=>_(t)(o))},{default:k(()=>e[3]||(e[3]=[V("确定")])),_:1})])],64)}}}),Tt=x($t,[["__scopeId","data-v-2fa7adfa"]]),xt={class:"task-page"},Bt={class:"task-top"},Pt={class:"task-title"},bt={key:0,class:"wy-no-data"},Vt=T({__name:"index",setup(C){const a=B(),t=E({citySwitch:!1,positionSwitch:!1,screenSwitch:!1,serviceMode:"",taskCycle:"",taskList:[],pageNum:0,pageSize:10,finished:!1,loading:!1}),i=async()=>{t.loading=!0,t.pageNum==1&&(t.taskList=[]);const e=await Q({position_name:a.positionValue,service_mode:t.serviceMode,task_cycle:t.taskCycle,pageNum:t.pageNum,pageSize:t.pageSize,city:a.cityValue});console.log(e.total),e.records.length?(t.taskList=t.taskList.concat(e.records),t.loading=!1,t.taskList.length>=e.total?t.finished=!0:t.finished=!1):(t.finished=!0,t.loading=!1)},o=()=>{console.log("onRefresh执行了"),t.pageNum=1,i()};K("popup",{closeCitySwitch:e=>{e&&(a.setCityValue(e),o()),t.citySwitch=!1},closePositionType:e=>{e&&(a.setPositionValue(e),o()),t.positionSwitch=!1},closeTaskScreen:e=>{e&&(t.serviceMode=e.mode,t.taskCycle=e.cycle,o()),t.screenSwitch=!1}});const c=()=>{t.pageNum=t.pageNum+1,i(),console.log("onLoad触底执行了一次")},L=A(),m=()=>{L.push("/task/TaskSearch")};return(e,s)=>{const $=j("router-link"),P=H,h=D,g=Y;return r(),l("div",xt,[n("div",Bt,[n("div",{class:"task-top-city",onClick:s[0]||(s[0]=u=>t.citySwitch=!0)},[s[8]||(s[8]=n("i",null,null,-1)),n("strong",null,v(_(a).cityValue),1),s[9]||(s[9]=n("span",null,null,-1))]),n("input",{type:"text",readonly:"",placeholder:"検索したい内容を入力してください",onClick:m}),p($,{to:"/message/SystemList",class:"task-icon-message"})]),p(dt),n("div",Pt,[s[12]||(s[12]=n("h3",null,"最新のタスク",-1)),n("div",{class:"task-position-pop",onClick:s[1]||(s[1]=u=>t.positionSwitch=!0)},[V(v(_(a).positionValue||"职位类型"),1),s[10]||(s[10]=n("span",null,null,-1))]),n("div",{class:"task-screen-pop",onClick:s[2]||(s[2]=u=>t.screenSwitch=!0)},s[11]||(s[11]=[V("筛选"),n("span",null,null,-1)]))]),p(h,{modelValue:t.loading,"onUpdate:modelValue":s[4]||(s[4]=u=>t.loading=u),"success-text":"刷新成功",onRefresh:o},{default:k(()=>[p(P,{loading:t.loading,"onUpdate:loading":s[3]||(s[3]=u=>t.loading=u),finished:t.finished,"finished-text":"没有更多了",onLoad:c},{default:k(()=>[p(W,{"task-list":t.taskList},null,8,["task-list"]),!t.loading&&t.taskList.length==0?(r(),l("div",bt,"暂无数据")):F("",!0)]),_:1},8,["loading","finished"])]),_:1},8,["modelValue"]),p(g,{show:t.citySwitch,"onUpdate:show":s[5]||(s[5]=u=>t.citySwitch=u),duration:"0",position:"top",style:{width:"100%",height:"100%"}},{default:k(()=>[p(nt)]),_:1},8,["show"]),p(g,{show:t.positionSwitch,"onUpdate:show":s[6]||(s[6]=u=>t.positionSwitch=u),duration:"0.3",position:"right",style:{width:"100%",height:"100%"}},{default:k(()=>[p(yt)]),_:1},8,["show"]),p(g,{show:t.screenSwitch,"onUpdate:show":s[7]||(s[7]=u=>t.screenSwitch=u),duration:"0.3",position:"right",style:{width:"100%",height:"100%"}},{default:k(()=>[p(Tt)]),_:1},8,["show"])])}}}),qt=x(Vt,[["__scopeId","data-v-ff3b7dff"]]);export{qt as default};
