<script setup lang="ts">
import { reactive } from 'vue'
// import { useRouter } from 'vue-router'
import { contractDetail } from '@/api/contract'
import { Toast } from 'vant'
import ProgressBar from '@/components/ProgressBar.vue'

// const router = useRouter()

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
  contract_I_state
  contract_II_state
  contract_III_state
  contract_IIII_state
  contract_I_stage
  contract_II_stage
  contract_III_stage
  contract_IIII_stage
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
    // console.log(res, '这里是获取合约详情的函数')
    state.item = res.records[0]
    state.status = res.records[0].status
  } else {
    new Toast('到这里出错了')
  }
}
getContractDetail()
</script>

<template>
  <van-nav-bar title="合约进度" left-arrow @click-left="leftBack" />
  <div v-if="state.item"></div>
  <h3>{{ state.item.contract_name }}</h3>
  <div class="progress-bar">
    <ProgressBar :item="state.item"></ProgressBar>
    <div class="progress-bar-text">
      <span>第一阶段</span>
      <span>第二阶段</span>
      <span>第三阶段</span>
      <span>第四阶段</span>
    </div>
  </div>
  <dl>
    <dt>
      <h4>第一阶段开发进度评估<span v-if="state.item.contract_I_state == -1">暂无评估</span></h4>
      <p v-if="state.item.contract_I_stage">{{ state.item.contract_I_stage }}</p>
    </dt>
    <dt>
      <h4>第二阶段开发进度评估<span v-if="state.item.contract_II_state == -1">暂无评估</span></h4>
      <p v-if="state.item.contract_II_stage">{{ state.item.contract_II_stage }}</p>
    </dt>
    <dt>
      <h4>第三阶段开发进度评估<span v-if="state.item.contract_III_state == -1">暂无评估</span></h4>
      <p v-if="state.item.contract_III_stage">{{ state.item.contract_III_stage }}</p>
    </dt>
    <dt>
      <h4>第四阶段开发进度评估<span v-if="state.item.contract_IIII_state == -1">暂无评估</span></h4>
      <p v-if="state.item.contract_IIII_stage">{{ state.item.contract_IIII_stage }}</p>
    </dt>
  </dl>
  <van-loading v-if="!state.item">加载中...</van-loading>
</template>
<style lang="scss" scoped>
h3 {
  font-size: 0.8rem;
  line-height: 0.8rem;
  font-weight: 500;
  color: #333333;
  padding: 1.2rem 0.69rem 1rem;
}

.progress-bar {
  margin: 0 0.64rem 1.17rem;

  &-text {
    display: flex;

    span {
      flex: 1;
      text-align: right;
      font-size: 14px;
      margin: 0 1px;
      padding-top: 0.45rem;
    }
  }
}

dl {
  margin: 0 0.64rem;

  dt {
    border: 1px solid #ededed;
    border-radius: 0.27rem;
    margin-bottom: 0.59rem;
    padding: 0.75rem 0.69rem;

    h4 {
      display: flex;
      font-size: 0.75rem;
      line-height: 0.75rem;
      font-weight: 300;
      color: #666666;

      span {
        flex: 1;
        text-align: right;
        font-size: 0.64rem;
        font-weight: 500;
        color: #acacac;

        &.active {
          color: #ff9415;
        }
      }
    }

    p {
      font-size: 0.64rem;
      font-weight: 400;
      color: #333333;
      line-height: 0.8rem;
      margin-top: 0.77rem;
    }
  }
}
</style>
