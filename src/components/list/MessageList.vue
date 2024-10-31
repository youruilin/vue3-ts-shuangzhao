<script setup lang="ts">
import { useRouter } from 'vue-router'

const { messageList } = defineProps({
  messageList: {
    type: Array,
    default: () => []
  }
})

const router = useRouter()
const gotoDetail = item => {
  router.push('/message/MessageTalk/' + item.id)
}
</script>

<template>
  <dl v-for="(item, index) in messageList" :key="index" @click="gotoDetail(item)">
    <dd>
      <img src="@/assets/img/icon/icon-message.png" />
      <span></span>
    </dd>
    <dt>
      <h3>北京朝阳私塾株式会社<span>5分前</span></h3>
      <p>这里是测试文字</p>
    </dt>
  </dl>
</template>

<style lang="scss" scoped>
dl {
  font-size: 0.64rem;
  color: #666666;
  padding: 0.9rem 0;
  margin: 0 0.67rem;
  border-bottom: 1px solid #eeeeee;
  align-items: center;
  display: flex;
  dd {
    position: relative;
    margin-right: 0.56rem;
    img {
      width: 2.61rem;
      height: 2.61rem;
    }
    span {
      position: absolute;
      top: 0;
      right: 0;
      width: 0.32rem;
      height: 0.32rem;
      background: #ff0000;
      border-radius: 50%;
    }
  }
  dt {
    flex: 1;
    h3 {
      font-size: 0.8rem;
      line-height: 0.8rem;
      font-weight: 500;
      color: #333333;
      margin-bottom: 0.43rem;
      span {
        float: right;
        color: #999999;
        font-size: 0.7rem;
        font-weight: 100;
      }
    }
    p {
      font-size: 0.69rem;
      line-height: 0.69rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-flex;
      // 限制文本行数为1
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
