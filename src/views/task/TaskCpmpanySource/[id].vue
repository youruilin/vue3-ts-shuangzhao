<script setup lang="ts">
import { reactive } from 'vue'
import CompanySource from '@/components/CompanySource.vue'
import CompanyTask from '@/components/CompanyTask.vue'
import { showToast } from 'vant'
import { taskAllList } from '@/api/task'

// 通过 vite-plugin-pages 插件，路由参数（如 id）会自动作为 props 传递给组件
// 在组件中你只需要使用 defineProps 来定义 id，然后通过 props.id 来访问该值。
// const taskId = router.currentRoute.value.params.id

const { id: company_id } = defineProps<{
  id: string
}>()

// const { id: taskId }：这部分代码是 JavaScript 的解构赋值语法。它将 props 中的 id 属性重命名为 taskId，这样你在组件内部就可以使用 taskId 来引用该值。

interface companyItem {
  logo
  company_name
  city
  area
}

const state = reactive({
  item: {} as companyItem,
  status: 0,
  taskList: []
})

const leftBack = () => history.back()

const getTaskAllList = async () => {
  const res = await taskAllList({
    company_id: company_id
  })
  if (res) {
    state.taskList = res.records
    state.item = res.records[0]
  } else {
    showToast('到这里出错了')
  }
}
getTaskAllList()
</script>

<template>
  <van-nav-bar title="タスクソース" left-arrow @click-left="leftBack" />
  <CompanySource :item="state.item"></CompanySource>
  <CompanyTask :task-list="state.taskList"></CompanyTask>
</template>
<style lang="scss" scoped></style>
