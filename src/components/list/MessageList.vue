<script setup lang="ts">
import { useRouter } from 'vue-router'

const { messageList, type } = defineProps<{
  messageList
  type: string
}>()

const router = useRouter()
const gotoDetail = (things_id, receive_id) => {
  if (type === 'system') {
    router.push('/message/SystemList')
  }
  if (type === 'talk') {
    router.push('/message/MessageTalk/' + things_id + '/' + receive_id)
  }
}
</script>

<template>
  <dl
    v-for="(item, index) in messageList"
    :key="index"
    @click="gotoDetail(item.things_id, item.receive_id)"
  >
    <dd>
      <img v-if="item.receive_is_read" :src="item.receive_is_read" />
      <img v-else src="@/assets/img/icon/icon-message.png" />
      <span v-if="item.is_show"></span>
    </dd>
    <dt>
      <h3>
        {{ item.title }}<span>{{ item.create_time }}</span>
      </h3>
      <p>{{ item.content }}</p>
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
      border-radius: 50%;
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
