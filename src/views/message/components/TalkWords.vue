<script setup lang="ts">
import { inject, reactive, provide } from 'vue'
import { chatMessageWordsList } from '@/api/message'
import TalkWordsAdd from './TalkWordsAdd.vue'
import TalkWordsManage from './TalkWordsManage.vue'

// 定义类型
interface PopupContext {
  wordsChange: (value: string) => void
}

const { wordsChange } = inject<PopupContext>('popup')! // 非空断言

const state = reactive({
  loading: false,
  list: [] as ChatMessageWordsListResponseItem[],
  talkWordsSwitch: false,
  talkWordsManage: false
})

interface ChatMessageWordsListResponseItem {
  text
}

interface ChatMessageWordsListResponse {
  data: ChatMessageWordsListResponseItem[]
}

const getChatMessageWordsList = async () => {
  const res = await chatMessageWordsList<ChatMessageWordsListResponse>()
  if (res.data) {
    state.list = res.data
  }
}
getChatMessageWordsList()

const closeWordsAdd = () => {
  state.talkWordsSwitch = false
  getChatMessageWordsList()
}
const closeWordsManage = () => {
  state.talkWordsManage = false
  getChatMessageWordsList()
}
provide('popup', {
  closeWordsAdd,
  closeWordsManage
})
</script>

<template>
  <div class="talk-word">
    <dl>
      <dt
        v-for="(item, index) in state.list.slice().reverse()"
        :key="index"
        @click="wordsChange(item.text)"
      >
        {{ item.text }}
      </dt>
    </dl>
    <div class="talk-word-btn">
      <p @click="state.talkWordsSwitch = true"><img src="@/assets/img/icon/icon-add.png" />添加</p>
      <i></i>
      <p @click="state.talkWordsManage = true"><img src="@/assets/img/icon/icon-file.png" />管理</p>
    </div>
    <!-- 添加常用语弹框 -->
    <van-popup
      v-model:show="state.talkWordsSwitch"
      duration="0.2"
      position="right"
      :style="{ width: '100%', height: '100%' }"
    >
      <TalkWordsAdd title="添加常用语"></TalkWordsAdd>
    </van-popup>
    <!-- 编辑常用语弹框 -->
    <van-popup
      v-model:show="state.talkWordsManage"
      duration="0.2"
      position="right"
      :style="{ width: '100%', height: '100%' }"
    >
      <TalkWordsManage></TalkWordsManage>
    </van-popup>
  </div>
</template>

<style lang="scss" scoped>
dl {
  height: 8.7rem;
  margin: 0 0.85rem;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  overflow: auto;
  dt {
    font-size: 0.75rem;
    font-weight: 300;
    color: #030303;
    line-height: 1.12rem;
    padding: 1rem 0.21rem;
    border-bottom: 1px solid #eeeeee;
    text-align: left;
    // 这里复查一下样式
    &dt:last-child {
      border-bottom: 0;
    }
  }
}
.talk-word {
  height: 12rem;
  .talk-word-btn {
    display: flex;
    margin-top: 1rem;
    p {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 300;
      color: #030303;
      img {
        width: 0.91rem;
        height: 0.91rem;
        margin-right: 0.29rem;
      }
    }
    .talk-word-btn i {
      width: 0.03rem;
      height: 0.85rem;
      background: #efefef;
      display: inline-block;
    }
  }
}
</style>
