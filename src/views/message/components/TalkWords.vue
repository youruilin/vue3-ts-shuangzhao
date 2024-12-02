<script setup lang="ts">
import { inject, reactive } from 'vue'
import { chatMessageWordsList } from '@/api/message'
import TalkWordsAdd from './TalkWordsAdd.vue'

// 定义类型
interface PopupContext {
  wordsChange: (value: string) => void
}

const { wordsChange } = inject<PopupContext>('popup')! // 非空断言

const state = reactive({
  loading: false,
  list: [] as ChatMessageWordsListResponseItem[],
  talkWordsSwitch: false
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
</script>

<template>
  <div class="talk-word">
    <dl>
      <dt v-for="(item, index) in state.list" :key="index" @click="wordsChange(item.text)">
        {{ item.text }}
      </dt>
    </dl>
    <div class="talk-word-btn">
      <p @click="state.talkWordsSwitch = true">
        <img
          src="@/assets/img/icon/icon-add.png"
          alt=""
          @click="state.talkWordsSwitch = true"
        />添加
      </p>
      <i></i>
      <p><img src="@/assets/img/icon/icon-file.png" alt="" />管理</p>
    </div>
  </div>
  <!-- 添加常用于弹框 -->
  <van-popup
    v-model:show="state.talkWordsSwitch"
    duration="0"
    position="top"
    :style="{ width: '100%', height: '100%' }"
  >
    <TalkWordsAdd></TalkWordsAdd>
  </van-popup>
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
