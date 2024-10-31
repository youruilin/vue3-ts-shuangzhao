<script setup lang="ts">
import { useRouter } from 'vue-router'
const { taskList } = defineProps({
  taskList: {
    type: Array,
    default: () => []
  }
})
const router = useRouter()
const gotoDetail = item => {
  router.push('/task/TaskDetails/' + item.id)
}
</script>

<template>
  <div v-for="(item, index) in taskList" :key="index" class="task-item" @click="gotoDetail(item)">
    <div class="task-item-top">
      <h3>フロントエンド開発エンジニア</h3>
      <span>紧急</span>
    </div>
    <dl>
      <dt>
        <h5>任务预算</h5>
        <strong>￥1000</strong>
      </dt>
      <dt>
        <h5>任务周期</h5>
        <strong>￥1000</strong>
      </dt>
      <dt>
        <h5>服务方式</h5>
        <strong>驻场</strong>
      </dt>
    </dl>
    <p>
      任务要求：userstore
      可能指的是一个用于管理用户状态的对象或类，保存用户的详细信息、权限、偏好设置等。这可以是应用的任何位置（如上下文、服务等）实现的状态管理。
    </p>
    <div class="task-item-buttom">
      <label>北京朝阳私塾</label>
      <span><van-icon name="location-o" />北京</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.task-item {
  background: #ffffff;
  border-radius: 0.53rem;
  margin: 0 0.64rem 0.53rem;
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
      font-size: 0.64rem;
      font-weight: 500;
      color: #333333;
    }
  }
}
</style>
