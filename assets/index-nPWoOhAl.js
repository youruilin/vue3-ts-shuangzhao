import{d as $,aa as I,c,o as a,a4 as y,b as p,a2 as o,a5 as _,a9 as v,a7 as L,_ as T,ab as E,a3 as h,r as U,a8 as N,P as M,I as R,ac as P,ad as j,ae as A,a6 as K,af as D}from"./index-DeqO-Z_0.js";/* empty css              *//* empty css              */import{P as F}from"./index-BVwMtNKY.js";import{L as q,T as G}from"./TaskList-DpyHhLfY.js";import{N as z}from"./index-Dr0eun1k.js";import{t as x}from"./task-CfdXJA-c.js";import{a as H,S as J}from"./index-CCQnsf9F.js";import{s as b}from"./request-Bjeq0cW8.js";import{T as O}from"./index-BwAs-BzY.js";import{p as Q,t as W}from"./task-CeUSE9dX.js";/* empty css              */import{B as X}from"./index-DldPga87.js";import{P as Y}from"./mount-component-ChZTCXHt.js";const Z={class:"city-switch"},tt={class:"city-switch-text"},st={class:"city-switch-text"},et=["onClick"],ot=$({__name:"CitySwitch",setup(B){const l=I("popup");if(!l)throw new Error("popup is not provided");const{closeCitySwitch:t}=l,i=x(),n=()=>t();return i.cityList.length<=0&&i.getCityList(),(w,d)=>{const f=z;return a(),c(y,null,[p(f,{title:"シティスイッチ","left-arrow":"",onClickLeft:d[0]||(d[0]=r=>n())}),o("div",Z,[d[2]||(d[2]=o("h3",null,"選択した",-1)),o("div",tt,[o("span",{onClick:d[1]||(d[1]=r=>_(t)())},v(_(i).cityValue),1)]),d[3]||(d[3]=o("h3",null,"シティスイッチ",-1)),o("div",st,[(a(!0),c(y,null,L(_(i).cityList,(r,C)=>(a(),c("span",{key:C,onClick:m=>_(t)(r.name)},v(r.name),9,et))),128))])])],64)}}}),nt=T(ot,[["__scopeId","data-v-0c93d14e"]]),it=["href"],at=["src"],lt=["src"],ct=$({__name:"TaskBanner",setup(B){const l=x(),t=async()=>{try{const i=await fetch("/data/banner.json");if(!i.ok)throw new Error("无法加载本地数据");const n=await i.json();n.list?(console.log(n),l.setBannerList(n.list)):b(n.msg||"数据格式不正确，缺少 list 字段")}catch(i){console.error("加载本地 bannerList 数据失败:",i),b("加载本地数据出错")}};return l.bannerList.length<=0&&t(),(i,n)=>{const w=J,d=H;return a(),E(d,{autoplay:3e3,"lazy-render":""},{default:h(()=>[(a(!0),c(y,null,L(_(l).bannerList,(f,r)=>(a(),E(w,{key:r},{default:h(()=>[f.url?(a(),c("a",{key:0,href:f.url,target:"_blank"},[o("img",{src:f.picture},null,8,at)],8,it)):(a(),c("img",{key:1,src:f.picture,alt:""},null,8,lt))]),_:2},1024))),128))]),_:1})}}}),rt=T(ct,[["__scopeId","data-v-090ee7a7"]]),pt={class:"position-type"},dt={class:"position-type-left"},ut=["onClick"],_t={class:"position-type-right"},ft=["onClick"],mt=$({__name:"PositionType",setup(B){const l=I("popup");if(!l)throw new Error("popup is not provided");const{closePositionType:t}=l,i=x(),n=U(0),w=r=>{n.value=r},d=()=>t(),f=async()=>{const r=await Q();r?i.setPositionList(r):new O("到这里出错了")};return i.positionList.length<=0&&f(),(r,C)=>{const m=z;return a(),c(y,null,[p(m,{title:"ポジションタイプ","left-arrow":"",onClickLeft:d}),o("div",pt,[o("div",dt,[(a(!0),c(y,null,L(_(i).positionList,(e,s)=>(a(),c("h5",{key:s,class:N(n.value==s?"active":""),onClick:S=>w(s)},v(e.name),11,ut))),128))]),o("div",_t,[(a(!0),c(y,null,L(_(i).positionList[n.value]&&_(i).positionList[n.value].children,(e,s)=>(a(),c("span",{key:s,onClick:S=>_(t)(e.name)},v(e.name),9,ft))),128))])])],64)}}}),kt=T(mt,[["__scopeId","data-v-cac77158"]]),ht={class:"task-screen"},yt={class:"screen-item"},vt=["onClick"],wt={class:"screen-item"},gt=["onClick"],Ct={class:"screen-footer"},Lt=$({__name:"TaskScreen",setup(B){const l=I("popup");if(!l)throw new Error("popup is not provided");const{closeTaskScreen:t}=l,i=x(),n=M({mode:"",cycle:""}),w=()=>t(),d=m=>{n.mode=m},f=m=>{n.cycle=m},r=()=>{n.mode="",n.cycle=""},C=async()=>{const e=await(await fetch("/data/screenlist.json")).json();e.data&&(i.setScreenList(e.data),b(e.msg))};return i.screenList.serviceMode||C(),(m,e)=>{const s=R,S=z,V=X;return a(),c(y,null,[p(S,{title:"フィルター","left-arrow":"",onClickLeft:w},{left:h(()=>[p(s,{name:"cross",size:"17"})]),_:1}),o("div",ht,[e[1]||(e[1]=o("h3",null,"サービス",-1)),o("div",yt,[(a(!0),c(y,null,L(_(i).screenList.serviceMode,(k,g)=>(a(),c("span",{key:g,class:N(n.mode==k?"active":""),onClick:u=>d(k)},v(k),11,vt))),128))]),e[2]||(e[2]=o("h3",null,"任务間",-1)),o("div",wt,[(a(!0),c(y,null,L(_(i).screenList.taskCycle,(k,g)=>(a(),c("span",{key:g,class:N(n.cycle==k?"active":""),onClick:u=>f(k)},v(k),11,gt))),128))])]),o("div",Ct,[o("button",{class:"screen-clear",onClick:r},"清除"),p(V,{type:"primary",block:"",onClick:e[0]||(e[0]=k=>_(t)(n))},{default:h(()=>e[3]||(e[3]=[P("确定")])),_:1})])],64)}}}),St=T(Lt,[["__scopeId","data-v-2fa7adfa"]]),$t={class:"task-page"},Tt={class:"task-top"},xt={class:"task-title"},Bt={key:0,class:"wy-no-data"},Vt=$({__name:"index",setup(B){const l=x(),t=M({citySwitch:!1,positionSwitch:!1,screenSwitch:!1,serviceMode:"",taskCycle:"",taskList:[],pageNum:0,pageSize:10,finished:!1,loading:!1}),i=async()=>{t.loading=!0,t.pageNum==1&&(t.taskList=[]);const e=await W({position_name:l.positionValue,service_mode:t.serviceMode,task_cycle:t.taskCycle,pageNum:t.pageNum,pageSize:t.pageSize,city:l.cityValue});console.log(e.total),e.records.length?(t.taskList=t.taskList.concat(e.records),t.loading=!1,t.taskList.length>=e.total?t.finished=!0:t.finished=!1):(t.finished=!0,t.loading=!1)},n=()=>{console.log("onRefresh执行了"),t.pageNum=1,i()};D("popup",{closeCitySwitch:e=>{e&&(l.setCityValue(e),n()),t.citySwitch=!1},closePositionType:e=>{e&&(l.setPositionValue(e),n()),t.positionSwitch=!1},closeTaskScreen:e=>{e&&(t.serviceMode=e.mode,t.taskCycle=e.cycle,n()),t.screenSwitch=!1}});const r=()=>{t.pageNum=t.pageNum+1,i(),console.log("onLoad触底执行了一次")},C=A(),m=()=>{C.push("/task/TaskSearch")};return(e,s)=>{const S=j("router-link"),V=q,k=F,g=Y;return a(),c("div",$t,[o("div",Tt,[o("div",{class:"task-top-city",onClick:s[0]||(s[0]=u=>t.citySwitch=!0)},[s[8]||(s[8]=o("i",null,null,-1)),o("strong",null,v(_(l).cityValue),1),s[9]||(s[9]=o("span",null,null,-1))]),o("input",{type:"text",readonly:"",placeholder:"検索したい内容を入力してください",onClick:m}),p(S,{to:"/message/SystemList",class:"task-icon-message"})]),p(rt),o("div",xt,[s[12]||(s[12]=o("h3",null,"最新のタスク",-1)),o("div",{class:"task-position-pop",onClick:s[1]||(s[1]=u=>t.positionSwitch=!0)},[P(v(_(l).positionValue||"职位类型"),1),s[10]||(s[10]=o("span",null,null,-1))]),o("div",{class:"task-screen-pop",onClick:s[2]||(s[2]=u=>t.screenSwitch=!0)},s[11]||(s[11]=[P("筛选"),o("span",null,null,-1)]))]),p(k,{modelValue:t.loading,"onUpdate:modelValue":s[4]||(s[4]=u=>t.loading=u),"success-text":"刷新成功",onRefresh:n},{default:h(()=>[p(V,{loading:t.loading,"onUpdate:loading":s[3]||(s[3]=u=>t.loading=u),finished:t.finished,"finished-text":"没有更多了",onLoad:r},{default:h(()=>[p(G,{"task-list":t.taskList},null,8,["task-list"]),!t.loading&&t.taskList.length==0?(a(),c("div",Bt,"暂无数据")):K("",!0)]),_:1},8,["loading","finished"])]),_:1},8,["modelValue"]),p(g,{show:t.citySwitch,"onUpdate:show":s[5]||(s[5]=u=>t.citySwitch=u),duration:"0",position:"top",style:{width:"100%",height:"100%"}},{default:h(()=>[p(nt)]),_:1},8,["show"]),p(g,{show:t.positionSwitch,"onUpdate:show":s[6]||(s[6]=u=>t.positionSwitch=u),duration:"0.3",position:"right",style:{width:"100%",height:"100%"}},{default:h(()=>[p(kt)]),_:1},8,["show"]),p(g,{show:t.screenSwitch,"onUpdate:show":s[7]||(s[7]=u=>t.screenSwitch=u),duration:"0.3",position:"right",style:{width:"100%",height:"100%"}},{default:h(()=>[p(St)]),_:1},8,["show"])])}}}),qt=T(Vt,[["__scopeId","data-v-ff3b7dff"]]);export{qt as default};
