<script setup lang="ts">
import { useRouter } from 'vue-router'

interface TaskItem {
  task_name
  is_emergency
  task_budget
  task_cycle
  task_ask
  company_name
  city
  service_mode
  task_id
}

const { taskList } = defineProps<{
  taskList: TaskItem[]
}>()
const router = useRouter()
const gotoDetail = item => {
  router.push('/task/TaskDetails/' + item)
}
</script>

<template>
  <div
    v-for="(item, index) in taskList"
    :key="index"
    class="task-item"
    @click="gotoDetail(item.task_id)"
  >
    <div class="task-item-top">
      <h3>{{ item.task_name }}</h3>
      <span v-if="item.is_emergency == 1">緊急</span>
    </div>
    <dl>
      <dt>
        <h5>タスクの予算</h5>
        <strong>￥{{ item.task_budget }}</strong>
      </dt>
      <dt>
        <h5>タスクサイクル</h5>
        <strong>￥{{ item.task_cycle }}</strong>
      </dt>
      <dt>
        <h5>サービス方法</h5>
        <strong>{{ item.service_mode }}</strong>
      </dt>
    </dl>
    <p>任务要求:{{ item.task_ask }}</p>
    <div class="task-item-buttom">
      <label>{{ item.company_name }}</label>
      <span><van-icon name="location-o" />{{ item.city }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.task-item {
  background: #ffffff;
  border-radius: 0.53rem;
  margin: 0 0 0.53rem;
  padding: 0.88rem 0.48rem 0.75rem;
  position: relative;
  font-size: 0.69rem;
  font-weight: 100;
  color: #666666;
  .task-item-top {
    display: flex;
    h3 {
      font-size: 0.91rem;
      line-height: 0.91rem;
      font-weight: 400;
      color: #333333;
      margin-bottom: 1.01rem;
    }
    span {
      position: absolute;
      right: 0;
      width: 2.29rem;
      height: 1.08rem;
      line-height: 1.08rem;
      background: linear-gradient(90deg, #fea829 0%, #fe8f27);
      border-radius: 0.53rem 0 0 0.53rem;
      text-align: center;
      font-size: 0.59rem;
      color: #ffffff;
    }
  }
  p {
    color: #333333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .task-item-buttom {
    display: flex;
    border-top: 1px solid #f5f5f5;
    margin-top: 0.72rem;
    padding-top: 0.72rem;
    line-height: 0.69rem;
    label {
      flex: 1;
    }
    span {
      text-align: right;
    }
    i {
      font-size: 0.8rem;
      font-weight: 600;
      margin-right: 0.1rem;
    }
  }
}
dl {
  display: flex;
  margin-bottom: 0.96rem;
  dt {
    margin-right: 1.44rem;
    h5 {
      font-size: 0.69rem;
      line-height: 0.69rem;
      margin-bottom: 0.53rem;
      color: #999999;
      font-weight: 100;
    }
    strong {
      font-size: 0.85rem;
      font-weight: 500;
      display: block;
      font-weight: 500;
      color: #333333;
    }
  }
}
</style>
