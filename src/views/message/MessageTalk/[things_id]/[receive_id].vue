<script setup lang="ts">
/* eslint vue/prop-name-casing: "off" */
import { onBeforeUnmount, nextTick, onMounted, reactive, provide, ref } from 'vue'
import { chatMessageContent } from '@/api/message'
import TalkWords from '@/views/message/components/TalkWords.vue'

const leftBack = () => history.back()

import { showToast } from 'vant'

// import { useRoute } from 'vue-router'
// const route = useRoute()
// const taskId = route.params.things_id
// const receiveId = route.params.receive_id

const { things_id: taskId, receive_id: receiveId } = defineProps<{
  things_id
  receive_id
}>()

// 在标签中，对数据进行循环遍历时，需要用到具体的数据，需要再这里声明
interface chatMessageContentResponseItem {
  create_time: string
  senderPhoto: string
  text: string
  task_name
  receive_id
  receivePhoto
}

// 返回的数据类型
// 在请求函数内部，存进 state 时所需要的声明
interface chatMessageContentResponse {
  data: chatMessageContentResponseItem[]
  msg
}

const state = reactive({
  list: [] as chatMessageContentResponseItem[],
  loading: false,
  value: '',
  task_name: '',
  creacteSetInterval: null as ReturnType<typeof setInterval> | null,
  worksVisible: false
})

const inputArea = ref<HTMLElement | null>(null)

const getChatMessageContent = async () => {
  state.loading = true
  // 在这里传入对泛型进行替换
  const res = await chatMessageContent<chatMessageContentResponse>({
    receive_id: receiveId,
    things_id: taskId,
    things_type: 0
  })

  if (res.data) {
    state.list = res.data
    state.task_name = (res.data[0] && res.data[0].task_name) || '任务'
  } else {
    showToast(res.msg)
  }
  state.loading = false
}
getChatMessageContent()

const stopSetInterval = () => {
  // 有就清除
  if (state.creacteSetInterval) {
    clearInterval(state.creacteSetInterval)
    state.creacteSetInterval = null
  }
}

const createInterval = () => {
  stopSetInterval()
  state.creacteSetInterval = setInterval(() => {
    getChatMessageContent()
  }, 5000)
}
createInterval()

const handleClickOutside = (event: MouseEvent) => {
  console.log('事件目标:', event.target)
  console.log('inputArea的类型:', inputArea.value?.constructor.name) // 确认 inputArea 的类型
  if (inputArea.value && inputArea.value instanceof HTMLElement) {
    const isOutside = !inputArea.value.contains(event.target as Node)
    console.log('是否在 inputArea 外部:', isOutside)
    if (isOutside) {
      console.log('点击了以外的区域')
      state.worksVisible = false
    }
  }
}

onMounted(() => {
  // 在组件挂载时添加全局点击事件监听
  nextTick(() => {
    document.addEventListener('click', handleClickOutside)
  })
})

onBeforeUnmount(() => {
  stopSetInterval()
  document.removeEventListener('click', handleClickOutside)
})

const worksClick = () => {
  console.log('点击了常用语')
  state.worksVisible = !state.worksVisible
}

const emojiClick = () => {
  console.log('emojiClick')
}

const wordsChange = (value: string) => {
  state.value = value
  // state.worksVisible = false
}

provide('popup', {
  wordsChange
})
</script>

<template>
  <van-nav-bar :title="state.task_name" left-arrow @click-left="leftBack" />
  <div class="talk-page">
    <dl>
      <dt
        v-for="(item, index) in state.list"
        :key="index"
        :class="item.receive_id == receiveId ? 'active' : ''"
      >
        <h5>{{ item.create_time }}</h5>
        <div>
          <img v-if="item.receive_id == receiveId" :src="item.senderPhoto" />
          <img v-else :src="item.receivePhoto" />
          <p>{{ item.text }}</p>
        </div>
      </dt>
    </dl>
  </div>
  <transition name="fade"></transition>
  <div ref="inputArea" :class="['talk-bottom', { 'talk-visible': state.worksVisible }]">
    <div class="talk-input">
      <span @click="worksClick">常用语</span>
      <input v-model="state.value" type="text" />
      <!-- 可以用 i 标签选择器找到它 -->
      <van-icon name="smile-o" @click="emojiClick" />
      <span>发送</span>
    </div>
    <TalkWords v-show="state.worksVisible" ref="inputArea"></TalkWords>
  </div>
</template>

<style lang="scss" scoped>
.talk-page {
  width: 100%;
  background: #f3f3f3;
  height: calc(100vh - 46px - 2.6rem);
  overflow: auto;
}

dl {
  padding: 0.96rem 0.64rem;

  dt {
    overflow: hidden;

    h5 {
      font-size: 0.64rem;
      line-height: 0.64rem;
      font-weight: 300;
      color: #999999;
      text-align: center;
      margin-bottom: 0.69rem;
    }

    div {
      display: flex;
    }

    img {
      width: 2.14rem;
      height: 2.14rem;
      border-radius: 50%;
      margin-right: 0.64rem;
    }

    p {
      width: 12.53rem;
      background: #ffffff;
      border: 1px solid #efefef;
      border-radius: 0.11rem;
      padding: 0.4rem 0.69rem;
      margin-bottom: 1.47rem;
    }

    &.active {
      div {
        display: block;
      }

      img {
        float: right;
        margin-right: 0;
        margin-left: 0.64rem;
      }

      p {
        float: right;
        font-size: 0.75rem;
        font-weight: 300;
        color: #ffffff;
        border: 1px solid #ff9415;
        background: #ff9415;
        border-radius: 0.13rem;
        position: relative;
      }
    }
  }
}

.talk-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background: #ffffff;
  text-align: center;
  z-index: 1;
  border-top: 1px solid #eeeeee;
}

.talk-input {
  display: flex;
  align-items: center;
  height: 2.6rem;

  span {
    width: 2.61rem;
    height: 1.33rem;
    line-height: 1.33rem;
    background: #ff9415;
    border-radius: 0.13rem;
    font-size: 0.64rem;
    font-weight: 100;
    text-align: center;
    color: #ffffff;
    margin-left: 0.59rem;

    &:last-child {
      margin: 0 0.59rem 0 0;
    }
  }

  input {
    flex: 1;
    height: 1.8rem;
    background: #fbfbfb;
    border: 1px solid #efefef;
    border-radius: 0.13rem;
    padding: 0 0.5rem;
    margin: 0 0.4rem 0 0.5rem;
  }

  i {
    font-size: 1.36rem;
    margin-right: 0.4rem;
  }
}

.talk-bottom {
  overflow: hidden; /* 隐藏内容超出部分 */
  max-height: 100px; /* 初始的最大高度（较小的高度） */
  transition: max-height 0.3s ease; /* 高度变化的平滑过渡 */
}

.talk-bottom.talk-visible {
  max-height: 350px; /* 当显示时，设置较大的最大高度 */
}
</style>
