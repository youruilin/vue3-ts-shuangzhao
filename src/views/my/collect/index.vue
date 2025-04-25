<script setup lang="ts">
import TaskList from '@/components/list/TaskList.vue'
import { collectList } from '@/api/my'
import { reactive } from 'vue'
import { showToast } from 'vant'
const state = reactive({
  loading: false,
  list: []
})

const getCollectList = async () => {
  state.loading = true
  const res = await collectList()
  // 这里的执行条件也很关键，实践中容易被忽略
  // 例如返回结果中的errCode，这个条件如果搞错了，就不会执行下面的赋值逻辑
  if (res.errCode === 200) {
    state.list = res.data
  } else {
    showToast(res.msg)
  }
  state.loading = false
}
getCollectList()
const leftBack = () => history.back()
</script>
<template>
  <div class="set-page">
    <van-nav-bar title="我的收藏" left-arrow @click-left="leftBack" />
    <div class="collect-page">
      <van-pull-refresh v-model="state.loading" success-text="刷新成功" @refresh="getCollectList">
        <div v-if="!state.loading && state.list.length == 0" class="wy-no-data">暂无数据</div>
        <TaskList :task-list="state.list"></TaskList>
      </van-pull-refresh>
    </div>
  </div>
</template>
<style scoped>
.collect-page {
  background: #f9f9f9;
  padding: 0.4rem 0.64rem 0;
  height: calc(100vh - 46px 0.4rem);
}
</style>
