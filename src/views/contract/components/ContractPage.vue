<script setup lang="ts">
import { reactive } from 'vue'
import { contractList } from '@/api/contract'
import ContractList from '@/components/list/ContractList.vue'
import { contractStore } from '@/stores/conract'

const store = contractStore()
const tabs = [
  {
    type: 2,
    text: '待签约'
  },
  {
    type: 3,
    text: '履约中'
  },
  {
    type: 4,
    text: '已完成'
  },
  {
    type: 5,
    text: '已失效'
  }
]

// 该部分数据类型，因为具体是在子组件进行渲染，因此父组件没有充分的必要对这些数据进行类型声明

const state = reactive({
  type: store.type || tabs[0].type,
  list: [
    {
      contract_id: 80,

      contract_name: '一步招聘App项目开发',

      contract_type: '技术服务',

      phone: '',

      task_salary: 100000,

      start_cycle_time: '2022-10-25',

      end_cycle_time: '2022-12-05',

      settle_salary: 0,

      signing_time: null,

      is_contract_type: 2,

      user_id: 25,

      check_out: '按任务结算',

      task_ask: '1个半月周期开发android和ios端一步招聘app',

      create_time: '2022-10-22T03:38:43.000Z',

      create_user_id: 53,

      user_name: '秦升成',

      accounts: '13321178501',

      sex: 1,

      duties: null,

      work_time: '2010-5',

      birthday: '1990-05',

      it_head:
        'http://api.share.zcwytd.com/upload/images/6635d99062f811ed90aab73514f19278/108-108.png',

      highest_education: '大专',

      inside_type: '优秀',

      company_name: '北京驻场无忧科技有限公司',

      logo: 'http://api.share.zcwytd.com/upload/images/6635d99062f811ed90aab73514f19278/108-108.png',

      contract_I_state: -1,

      contract_I_stage: null,

      contract_II_state: -1,

      contract_II_stage: null,

      contract_III_stage: null,

      contract_III_state: -1,

      contract_IIII_state: -1,

      contract_IIII_stage: null,

      update_I_time: null,

      update_II_time: null,

      update_III_time: null,

      update_IIII_time: null,

      work_year: '12年',

      age: '32岁',

      is_contract_type_text: '待确认'
    }
  ],
  loading: false,
  activeIndex: 0
})

const setTabList = type => {
  if (type === state.type) return
  state.type = type
  store.setType(type)
  // console.log(`点击了第${store.type}个标签`)

  getContractList()
}

const getContractList = async () => {
  state.loading = true
  const res = await contractList({
    is_contract_type: state.type,
    // 这里提前增加一个请求参数，仅为了获取必要的数据
    curr_identity: 3
  })
  if (res.records) {
    state.list = res.records
  } else {
    state.list = res.records
  }
  state.loading = false
  state.activeIndex++
}
getContractList()
</script>

<template>
  <div class="contract-tab">
    <span
      v-for="(item, index) in tabs"
      :key="index"
      :class="state.type === item.type ? 'active' : ''"
      @click="setTabList(item.type)"
      >{{ item.text }}<i></i
    ></span>
  </div>
  <van-pull-refresh v-model="state.loading" @refresh="getContractList">
    <ContractList :contract-list="state.list"></ContractList>
    <van-loading v-if="state.activeIndex === 0 && state.loading">加载中...</van-loading>
    <div v-if="!state.loading && state.list.length == 0" class="wy-no-data">暂无数据</div>
  </van-pull-refresh>
</template>

<style lang="scss" scoped>
.van-pull-refresh {
  height: calc(100vh - 46px - 5rem);
  overflow: auto;
}

.contract-tab {
  display: flex;
  span {
    font-size: 0.75rem;
    line-height: 0.75rem;
    font-weight: 400;
    color: #666666;
    flex: 1;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    padding: 0.59rem 0;
    text-align: center;
    position: relative;
    &.active {
      color: #ff9415;
      i {
        width: 1.63rem;
        height: 0.05rem;
        background-color: #ff9415;
        position: absolute;
        bottom: 0px;
        left: 50%;
        margin-left: -0.815rem;
      }
    }
  }
}
</style>
