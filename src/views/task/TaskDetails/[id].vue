<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import TaskDetail from '../components/TaskDetail.vue'
import { taskDetail, taskCollection } from '@/api/task'
import { showToast, Toast } from 'vant'

const router = useRouter()

// 通过 vite-plugin-pages 插件，路由参数（如 id）会自动作为 props 传递给组件
// 在组件中你只需要使用 defineProps 来定义 id，然后通过 props.id 来访问该值。
// const taskId = router.currentRoute.value.params.id

const { id: taskId } = defineProps<{
  id: string
}>()

// const { id: taskId }：这部分代码是 JavaScript 的解构赋值语法。它将 props 中的 id 属性重命名为 taskId，这样你在组件内部就可以使用 taskId 来引用该值。

interface DetailItem {
  task_name
  head_img
  company_id
  company_name
  user_name
  city
  position_name
  task_budget
  task_cycle
  service_mode
  task_ask
  task_id
  user_id
}

const state = reactive({
  item: {} as DetailItem,
  status: 0
})

const leftBack = () => history.back()

const getTaskDetail = async () => {
  const res = await taskDetail({
    task_id: taskId
  })
  if (res) {
    console.log(res, '这里是获取任务详情的函数')
    state.item = res.records[0]
    state.status = res.records[0].status
  } else {
    new Toast('到这里出错了')
  }
}
getTaskDetail()

const setTaskCollection = async () => {
  const res = await taskCollection({
    task_id: taskId
  })
  if (res.data) {
    state.status = res.data.status
  }
  showToast(res.msg)
}

const gotoMessage = () => {
  router.push('/message/talk/' + state.item.task_id + '/' + state.item.user_id)
}
</script>

<template>
  <van-nav-bar title="ミッション詳細" left-arrow @click-left="leftBack" />
  <TaskDetail v-if="state.item" :item="state.item"></TaskDetail>
  <div class="task-detail-footer">
    <van-action-bar-icon
      :class="state.status == 1 ? 'active' : ''"
      icon="star-o"
      text="收藏"
      @click="setTaskCollection"
    />
    <van-button type="primary" block @click="gotoMessage">立即沟通</van-button>
  </div>
</template>
<style lang="scss" scoped>
.task-detail-footer {
  display: flex;
  position: fixed;
  left: 0;
  width: 100%;
  align-items: center;
  background: #ffffff;
  bottom: 0;
  padding: 0.64rem 0;
  button {
    margin-right: 0.64rem;
  }
}

.task-detail-footer .active :deep(.van-icon-star-o:before) {
  color: #fe8f27;
}
</style>
