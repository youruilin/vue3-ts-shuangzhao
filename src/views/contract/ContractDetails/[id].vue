<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { contractDetail } from '@/api/contract'
import { Toast } from 'vant'
import ProgresBar from '@/components/ProgressBar.vue'

const router = useRouter()

const gotoProgress = () => {
  router.push('/contract/ContractProgress/' + state.item.contract_id)
}

// 通过 vite-plugin-pages 插件，路由参数（如 id）会自动作为 props 传递给组件
// 在组件中你只需要使用 defineProps 来定义 id，然后通过 props.id 来访问该值。
// const taskId = router.currentRoute.value.params.id

const { id: contractId } = defineProps<{
  id: string
}>()

// const { id: taskId }：这部分代码是 JavaScript 的解构赋值语法。它将 props 中的 id 属性重命名为 taskId，这样你在组件内部就可以使用 taskId 来引用该值。

interface itemType {
  company_name
  logo
  create_user_name
  is_contract_type_text
  contract_name
  contract_type
  task_salary
  start_cycle_time
  end_cycle_time
  signing_time
  check_out
  task_ask
  settle_salary
  is_contract_type
  user_id
  contract_id
}

const state = reactive({
  item: {} as itemType,
  status: 0
})

const leftBack = () => history.back()

const getContractDetail = async () => {
  const res = await contractDetail({
    id: contractId
  })
  if (res) {
    console.log(res, '这里是获取合约详情的函数')
    state.item = res.records[0]
    state.status = res.records[0].status
  } else {
    new Toast('到这里出错了')
  }
}
getContractDetail()
</script>

<template>
  <van-nav-bar title="合约详情" left-arrow @click-left="leftBack" />
  <dl v-if="state.item">
    <dd>
      <img :src="state.item.logo" alt="" />
      <div>
        <h5>{{ state.item.company_name }}</h5>
        <p>{{ state.item.create_user_name }}</p>
      </div>
    </dd>
    <dt>
      <label>合约状态</label>
      <span>{{ state.item.is_contract_type_text }}</span>
    </dt>
    <dt>
      <label>合约名称</label>
      <span>{{ state.item.contract_name }}</span>
    </dt>
    <dt>
      <label>合约类型</label>
      <span>{{ state.item.contract_type }}</span>
    </dt>
    <dt>
      <label>合约薪资</label>
      <span>{{ state.item.task_salary }}</span>
    </dt>
    <dt>
      <label>合约周期</label>
      <span>{{ state.item.start_cycle_time }}-{{ state.item.end_cycle_time }}</span>
    </dt>
    <dt>
      <label>签约时间</label>
      <span>{{ state.item.signing_time || '-' }}</span>
    </dt>
    <dt>
      <label>结算方式</label>
      <span>{{ state.item.check_out }}</span>
    </dt>
    <dt>
      <label>合约备注</label>
      <span>{{ state.item.task_ask }}</span>
    </dt>
    <dt>
      <label>合约结算</label>
      <span>{{ state.item.settle_salary }}</span>
    </dt>
    <dt>
      <label>合约进度</label>
      <span></span>
    </dt>
    <dt>
      <ProgresBar :item="state.item"></ProgresBar>
    </dt>
  </dl>
  <div v-if="state.item" class="contract-btn">
    <button v-if="state.item.is_contract_type === 1" class="confirm-btn">发送合约</button>
    <button v-if="state.item.is_contract_type === 2" class="refuse-btn">拒绝签约</button>
    <button v-if="state.item.is_contract_type === 2" class="confirm-btn">确认签约</button>
    <button
      v-if="state.item.is_contract_type != 1 && state.item.is_contract_type != 2"
      class="confirm-btn"
      @click="gotoProgress"
    >
      合约进度
    </button>
  </div>
  <van-loading v-if="!state.item">加载中...</van-loading>
</template>
<style lang="scss" scoped>
dl {
  font-size: 0.69rem;
  color: #666666;

  dd {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    padding: 0.85rem 0.93rem;
    margin-bottom: 1rem;

    img {
      width: 2.67rem;
      height: 2.67rem;
      border-radius: 50%;
      margin-right: 0.75rem;
    }

    h5 {
      font-size: 0.96rem;
      line-height: 0.96rem;
      font-weight: 300;
      color: #333333;
      margin-bottom: 0.48rem;
    }

    p {
      color: #333333;
      line-height: 0.69rem;
    }
  }

  dt {
    display: flex;
    margin-bottom: 1rem;
    padding: 0 0.72rem 0 0.56rem;

    label {
      flex: 1;
    }

    span {
      text-align: right;
      color: #000000;
    }
  }
}

.contract-btn {
  position: fixed;
  bottom: 0.64rem;
  left: 0rem;
  width: 100%;
  display: flex;

  button {
    height: 2.35rem;
    line-height: 2.23rem;
    border: 1px solid #ff9415;
    border-radius: 0.27rem;
    flex: 1;
    font-size: 0.8rem;
    text-align: center;
    margin-right: 0.64rem;

    &:first-child {
      margin-left: 0.64rem;
    }

    &.refuse-btn {
      color: #ff9415;
      background: #ffffff;
    }

    &.confirm-btn {
      color: #ffffff;
      background: #ff9415;
    }
  }
}

.small-item-text {
  h3 {
    font-size: 0.96rem;
    line-height: 0.96rem;
    font-weight: 300;
    color: #333333;
    margin-bottom: 0.48rem;

    i {
      width: 1.97rem;
      height: 0.85rem;
      line-height: 0.85rem;
      display: inline-block;
      background: linear-gradient(90deg, #fea829, #fe8f27);
      border-radius: 1.5rem 1rem 1rem 1rem;
      font-size: 0.59rem;
      font-weight: normal;
      color: #ffffff;
      font-style: normal;
      text-align: center;
      margin-left: 0.64rem;
    }
  }

  p {
    font-size: 0.69rem;
    line-height: 0.69rem;
    font-weight: 100;
    color: #333333;
  }
}
</style>
