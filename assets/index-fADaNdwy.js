import{d as $,aa as I,c,o as a,a4 as y,b as p,a2 as o,a5 as _,a9 as v,a7 as L,_ as T,ab as U,a3 as h,r as R,a8 as b,P as E,I as j,ac as N,ad as A,ae as K,a6 as D,af as F}from"./index-DKeyNbid.js";/* empty css              *//* empty css              */import{P as W}from"./index-wBEYzYg5.js";import{L as q,T as G}from"./TaskList-DqGciJ0T.js";import{N as z}from"./index-ByXWXuXe.js";import{t as x,f as M}from"./task-Dw7FFzIa.js";import{a as H,S as J}from"./index-DKxusrHk.js";import{s as P}from"./request-BJsRsgsw.js";import{T as O}from"./index-D09PsxRB.js";import{p as Q,t as X}from"./task-JzXaFQQa.js";/* empty css              */import{B as Y}from"./index-CpMRWnvG.js";import{P as Z}from"./mount-component-58lzfaM4.js";const tt={class:"city-switch"},st={class:"city-switch-text"},et={class:"city-switch-text"},ot=["onClick"],nt=$({__name:"CitySwitch",setup(B){const l=I("popup");if(!l)throw new Error("popup is not provided");const{closeCitySwitch:t}=l,i=x(),n=()=>t();return i.cityList.length<=0&&i.getCityList(),(w,d)=>{const f=z;return a(),c(y,null,[p(f,{title:"シティスイッチ","left-arrow":"",onClickLeft:d[0]||(d[0]=r=>n())}),o("div",tt,[d[2]||(d[2]=o("h3",null,"選択した",-1)),o("div",st,[o("span",{onClick:d[1]||(d[1]=r=>_(t)())},v(_(i).cityValue),1)]),d[3]||(d[3]=o("h3",null,"シティスイッチ",-1)),o("div",et,[(a(!0),c(y,null,L(_(i).cityList,(r,C)=>(a(),c("span",{key:C,onClick:m=>_(t)(r.name)},v(r.name),9,ot))),128))])])],64)}}}),it=T(nt,[["__scopeId","data-v-0c93d14e"]]),at=["href"],lt=["src"],ct=["src"],rt=$({__name:"TaskBanner",setup(B){const l=x(),t=async()=>{try{const i=await M("/data/banner.json");if(!i.ok)throw new Error("无法加载本地数据");const n=await i.json();n.list?(console.log(n),l.setBannerList(n.list)):P(n.msg||"数据格式不正确，缺少 list 字段")}catch(i){console.error("加载本地 bannerList 数据失败:",i),P("加载本地数据出错")}};return l.bannerList.length<=0&&t(),(i,n)=>{const w=J,d=H;return a(),U(d,{autoplay:3e3,"lazy-render":""},{default:h(()=>[(a(!0),c(y,null,L(_(l).bannerList,(f,r)=>(a(),U(w,{key:r},{default:h(()=>[f.url?(a(),c("a",{key:0,href:f.url,target:"_blank"},[o("img",{src:f.picture},null,8,lt)],8,at)):(a(),c("img",{key:1,src:f.picture,alt:""},null,8,ct))]),_:2},1024))),128))]),_:1})}}}),pt=T(rt,[["__scopeId","data-v-a68cc5f9"]]),dt={class:"position-type"},ut={class:"position-type-left"},_t=["onClick"],ft={class:"position-type-right"},mt=["onClick"],kt=$({__name:"PositionType",setup(B){const l=I("popup");if(!l)throw new Error("popup is not provided");const{closePositionType:t}=l,i=x(),n=R(0),w=r=>{n.value=r},d=()=>t(),f=async()=>{const r=await Q();r?i.setPositionList(r):new O("到这里出错了")};return i.positionList.length<=0&&f(),(r,C)=>{const m=z;return a(),c(y,null,[p(m,{title:"ポジションタイプ","left-arrow":"",onClickLeft:d}),o("div",dt,[o("div",ut,[(a(!0),c(y,null,L(_(i).positionList,(e,s)=>(a(),c("h5",{key:s,class:b(n.value==s?"active":""),onClick:S=>w(s)},v(e.name),11,_t))),128))]),o("div",ft,[(a(!0),c(y,null,L(_(i).positionList[n.value]&&_(i).positionList[n.value].children,(e,s)=>(a(),c("span",{key:s,onClick:S=>_(t)(e.name)},v(e.name),9,mt))),128))])])],64)}}}),ht=T(kt,[["__scopeId","data-v-cac77158"]]),yt={class:"task-screen"},vt={class:"screen-item"},wt=["onClick"],gt={class:"screen-item"},Ct=["onClick"],Lt={class:"screen-footer"},St=$({__name:"TaskScreen",setup(B){const l=I("popup");if(!l)throw new Error("popup is not provided");const{closeTaskScreen:t}=l,i=x(),n=E({mode:"",cycle:""}),w=()=>t(),d=m=>{n.mode=m},f=m=>{n.cycle=m},r=()=>{n.mode="",n.cycle=""},C=async()=>{const e=await(await M("/data/screenlist.json")).json();e.data&&(i.setScreenList(e.data),P(e.msg))};return i.screenList.serviceMode||C(),(m,e)=>{const s=j,S=z,V=Y;return a(),c(y,null,[p(S,{title:"フィルター","left-arrow":"",onClickLeft:w},{left:h(()=>[p(s,{name:"cross",size:"17"})]),_:1}),o("div",yt,[e[1]||(e[1]=o("h3",null,"サービス",-1)),o("div",vt,[(a(!0),c(y,null,L(_(i).screenList.serviceMode,(k,g)=>(a(),c("span",{key:g,class:b(n.mode==k?"active":""),onClick:u=>d(k)},v(k),11,wt))),128))]),e[2]||(e[2]=o("h3",null,"任务間",-1)),o("div",gt,[(a(!0),c(y,null,L(_(i).screenList.taskCycle,(k,g)=>(a(),c("span",{key:g,class:b(n.cycle==k?"active":""),onClick:u=>f(k)},v(k),11,Ct))),128))])]),o("div",Lt,[o("button",{class:"screen-clear",onClick:r},"清除"),p(V,{type:"primary",block:"",onClick:e[0]||(e[0]=k=>_(t)(n))},{default:h(()=>e[3]||(e[3]=[N("确定")])),_:1})])],64)}}}),$t=T(St,[["__scopeId","data-v-ae72b3ce"]]),Tt={class:"task-page"},xt={class:"task-top"},Bt={class:"task-title"},Vt={key:0,class:"wy-no-data"},bt=$({__name:"index",setup(B){const l=x(),t=E({citySwitch:!1,positionSwitch:!1,screenSwitch:!1,serviceMode:"",taskCycle:"",taskList:[],pageNum:0,pageSize:10,finished:!1,loading:!1}),i=async()=>{t.loading=!0,t.pageNum==1&&(t.taskList=[]);const e=await X({position_name:l.positionValue,service_mode:t.serviceMode,task_cycle:t.taskCycle,pageNum:t.pageNum,pageSize:t.pageSize,city:l.cityValue});console.log(e.total),e.records.length?(t.taskList=t.taskList.concat(e.records),t.loading=!1,t.taskList.length>=e.total?t.finished=!0:t.finished=!1):(t.finished=!0,t.loading=!1)},n=()=>{console.log("onRefresh执行了"),t.pageNum=1,i()};F("popup",{closeCitySwitch:e=>{e&&(l.setCityValue(e),n()),t.citySwitch=!1},closePositionType:e=>{e&&(l.setPositionValue(e),n()),t.positionSwitch=!1},closeTaskScreen:e=>{e&&(t.serviceMode=e.mode,t.taskCycle=e.cycle,n()),t.screenSwitch=!1}});const r=()=>{t.pageNum=t.pageNum+1,i(),console.log("onLoad触底执行了一次")},C=K(),m=()=>{C.push("/task/TaskSearch")};return(e,s)=>{const S=A("router-link"),V=q,k=W,g=Z;return a(),c("div",Tt,[o("div",xt,[o("div",{class:"task-top-city",onClick:s[0]||(s[0]=u=>t.citySwitch=!0)},[s[8]||(s[8]=o("i",null,null,-1)),o("strong",null,v(_(l).cityValue),1),s[9]||(s[9]=o("span",null,null,-1))]),o("input",{type:"text",readonly:"",placeholder:"検索したい内容を入力してください",onClick:m}),p(S,{to:"/message/SystemList",class:"task-icon-message"})]),p(pt),o("div",Bt,[s[12]||(s[12]=o("h3",null,"最新のタスク",-1)),o("div",{class:"task-position-pop",onClick:s[1]||(s[1]=u=>t.positionSwitch=!0)},[N(v(_(l).positionValue||"职位类型"),1),s[10]||(s[10]=o("span",null,null,-1))]),o("div",{class:"task-screen-pop",onClick:s[2]||(s[2]=u=>t.screenSwitch=!0)},s[11]||(s[11]=[N("筛选"),o("span",null,null,-1)]))]),p(k,{modelValue:t.loading,"onUpdate:modelValue":s[4]||(s[4]=u=>t.loading=u),"success-text":"刷新成功",onRefresh:n},{default:h(()=>[p(V,{loading:t.loading,"onUpdate:loading":s[3]||(s[3]=u=>t.loading=u),finished:t.finished,"finished-text":"没有更多了",onLoad:r},{default:h(()=>[p(G,{"task-list":t.taskList},null,8,["task-list"]),!t.loading&&t.taskList.length==0?(a(),c("div",Vt,"暂无数据")):D("",!0)]),_:1},8,["loading","finished"])]),_:1},8,["modelValue"]),p(g,{show:t.citySwitch,"onUpdate:show":s[5]||(s[5]=u=>t.citySwitch=u),duration:"0",position:"top",style:{width:"100%",height:"100%"}},{default:h(()=>[p(it)]),_:1},8,["show"]),p(g,{show:t.positionSwitch,"onUpdate:show":s[6]||(s[6]=u=>t.positionSwitch=u),duration:"0.3",position:"right",style:{width:"100%",height:"100%"}},{default:h(()=>[p(ht)]),_:1},8,["show"]),p(g,{show:t.screenSwitch,"onUpdate:show":s[7]||(s[7]=u=>t.screenSwitch=u),duration:"0.3",position:"right",style:{width:"100%",height:"100%"}},{default:h(()=>[p($t)]),_:1},8,["show"])])}}}),qt=T(bt,[["__scopeId","data-v-ff3b7dff"]]);export{qt as default};
