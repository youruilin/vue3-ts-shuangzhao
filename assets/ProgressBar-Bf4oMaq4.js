import{a as o}from"./request-Bjeq0cW8.js";import{d as c,c as n,a2 as e,a8 as s,o as i,_ as l}from"./index-DeqO-Z_0.js";function I(a){return o({url:"/task/myContractAllList",method:"get",params:a})}function d(a){return o({url:"/task/contractAllList",method:"get",params:a})}function g(a){return o({url:"/contract/isContract",method:"put",data:a})}const u={class:"contract-progress"},m=c({__name:"ProgressBar",props:{item:{}},setup(a){const r=t=>t===1?"green":t===2?"orange":t===3?"red":"";return(t,_)=>(i(),n("div",u,[e("i",{class:s(r(t.item.contract_I_state))},null,2),e("i",{class:s(r(t.item.contract_II_state))},null,2),e("i",{class:s(r(t.item.contract_III_state))},null,2),e("i",{class:s(r(t.item.contract_III_state))},null,2)]))}}),h=l(m,[["__scopeId","data-v-a25176e4"]]);export{h as P,d as a,g as b,I as c};
