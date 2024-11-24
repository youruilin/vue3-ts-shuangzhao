<script setup lang="ts">
import { useRouter } from 'vue-router'
import ProgressBar from '../ProgressBar.vue'

// interface contractState {
//   contract_name
//   is_contract_type_text
//   company_name
//   contract_type
//   start_cycle_time
//   end_cycle_time
//   signing_time
//   contract_id
// }

// const { contractList } = defineProps<{
//   contractList: contractState[]
// }>()

// 进一步实际测试发现，使用 defineProps 接受父组件的数据时
// 采取直接解构的方式进行隐式声明也是可以的
const { contractList } = defineProps<{
  contractList
}>()
// 这样，就可以在子组件使用了，无论数据在第几层
// 而无需对要使用的数据进行具体的 interface 声明

const router = useRouter()
const gotoDetail = id => {
  router.push('/contract/ContractDetails/' + id)
}
</script>

<template>
  <dl v-for="(item, index) in contractList" :key="index" @click="gotoDetail(item.contract_id)">
    <dd>
      <h3>{{ item.contract_name }}</h3>
      <span>{{ item.is_contract_type_text }}</span>
      <van-icon name="arrow" />
    </dd>
    <dt>
      <label>公司名称</label>
      <span>{{ item.company_name }}</span>
    </dt>
    <dt>
      <label>合约类型</label>
      <span>{{ item.contract_type }}</span>
    </dt>
    <dt>
      <label>合约周期</label>
      <span>{{ item.start_cycle_time }}-{{ item.end_cycle_time }}</span>
    </dt>
    <dt>
      <label>签约时间</label>
      <span>{{ item.signing_time }}</span>
    </dt>
    <dt>
      <ProgressBar :item="item"></ProgressBar>
    </dt>
  </dl>
</template>

<style lang="scss" scoped>
dl {
  background-color: #ffffff;
  font-size: 0.64rem;
  color: #666666;
  padding: 1rem 0.7rem;
  border-bottom: 1px solid #eeeeee;
  dd {
    display: flex;
    margin-bottom: 0.9rem;
    align-items: center;
    h3 {
      font-size: 0.8rem;
      font-weight: 700;
      color: #333333;
      flex: 1;
    }
    span {
      text-align: right;
      font-size: 0.75rem;
      color: #ff9415;
    }
    i {
      font-size: 0.75rem;
    }
  }
  dt {
    display: flex;
    margin-bottom: 0.72rem;
    :last-child {
      margin-bottom: 0;
    }
    label {
      flex: 1;
    }
    span {
      text-align: right;
    }
  }
}
</style>
