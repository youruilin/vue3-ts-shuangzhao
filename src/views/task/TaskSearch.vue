<script setup lang="ts">
import { reactive } from 'vue'
import TaskList from '@/components/list/TaskList.vue'

const localSearchHistory = localStorage.getItem('searchHis')

const state = reactive({
  value: '',
  loading: false,
  finished: false,
  taskList: [],
  pageNum: 1,
  pageSize: 10,
  searchHistory: localSearchHistory ? JSON.parse(localSearchHistory) : []
})
const leftBack = () => history.back()

const onSearch = value => {
  if (!value) return
  if (!state.searchHistory.includes(value)) {
    state.searchHistory.push(value)
    // 将搜索历史保存到 localStorage，使用 JSON.stringify() 将数组转为字符串
    localStorage.setItem('searchHis', JSON.stringify(state.searchHistory))
  }
  console.log('是否执行了搜索逻辑')
}

const gotoSearch = item => {
  state.value = item
  onSearch(item)
}

const clearHistory = () => {
  state.searchHistory = []
  localStorage.removeItem('searchHis')
}

const onCancel = () => {}
const onLoad = () => {}
const onRefresh = () => {}
</script>

<template>
  <van-nav-bar title="搜索" left-arrow @click-left="leftBack" />
  <div class="search-cont">
    <van-search
      v-model="state.value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
    <div class="search-item">
      <h3>搜索历史<van-icon name="delete-o" @click="clearHistory" /></h3>
      <dl>
        <dt v-for="(item, index) in state.searchHistory" :key="index" @click="gotoSearch(item)">
          {{ item }}
        </dt>
      </dl>
      <h3>热门搜索<van-icon name="hot-o" /></h3>
      <dl>
        <dt></dt>
      </dl>
    </div>
    <div class="search-list">
      <van-pull-refresh v-model="state.loading" success-text="刷新成功" @refresh="onRefresh">
        <van-list
          v-model:loading="state.loading"
          :finished="state.finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <TaskList :task-list="state.taskList"></TaskList>
          <div v-if="!state.loading && state.taskList.length == 0" class="wy-no-data">暂无数据</div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.van-search__content) {
  background: #f2f2f2;
  border-radius: 0.85rem;
}

:deep(.van-search--show-action) {
  padding-left: 0px;
  background: none;
}

:deep(.van-search__action) {
  font-size: 0.85rem;
  font-weight: 400;
  color: #666666;
  padding-right: 0px;
}

.search-cont {
  padding: 0 0.64rem;
  h3 {
    font-size: 0.8rem;
    line-height: 0.8rem;
    font-weight: 500;
    color: #000000;
    margin: 0.85rem 0 0.85rem;
    display: flex;
  }
  i {
    flex: 1;
    text-align: right;
    font-size: 0.9rem;
  }
  dl dt {
    background: #f5f5f5;
    border-radius: 0.16rem;
    padding: 0.45rem;
    font-size: 0.64rem;
    line-height: 0.64rem;
    font-weight: 400;
    color: #333333;
    margin-right: 0.51rem;
    margin-bottom: 0.53rem;
    display: inline-block;
  }
}
</style>
