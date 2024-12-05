<script setup lang="ts">
import { reactive, provide, inject } from 'vue'
import { chatMessageWordsList, chatMessageWordsDelete } from '@/api/message'
import TalkWordsAdd from './TalkWordsAdd.vue'
import { showToast } from 'vant'

interface fatherProps {
  closeWordsManage: () => void
}
const { closeWordsManage } = inject<fatherProps>('popup')!

const state = reactive({
  list: [] as ChatMessageWordsListResponseItem[],
  title: '',
  editId: '',
  text: '',
  talkWordsSwitch: false
})

interface ChatMessageWordsListResponseItem {
  text
  id
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

interface chatMessageWordsDeleteResponse {
  msg
}

const WordsDelete = async id => {
  const res = await chatMessageWordsDelete<chatMessageWordsDeleteResponse>({
    id: id
  })
  if (res) {
    getChatMessageWordsList()
  }
  showToast(res.msg)
}

const editChange = (id, text) => {
  state.editId = id
  state.text = text
  state.title = '编辑常用语'
  state.talkWordsSwitch = true
}
const addChange = () => {
  state.editId = ''
  state.text = ''
  state.title = '添加常用语'
  state.talkWordsSwitch = true
}

// 这里有点绕弯弯
// 之所以 provide 声明 closeWordsAdd 方法
// 是因为子组件 TalkWordsAdd 中的  @click-left 需要使用该方法
const closeWordsAdd = () => {
  state.talkWordsSwitch = false
  getChatMessageWordsList()
}
provide('popup', { closeWordsAdd })
</script>

<template>
  <van-nav-bar title="管理常用语" left-arrow @click-left="closeWordsManage" />
  <div class="manage-list">
    <van-swipe-cell v-for="(item, index) in state.list.slice().reverse()" :key="index">
      <div class="item">
        <p>{{ item.text }}</p>
        <div>
          <img src="@/assets/img/icon/icon-edit.png" alt="" />
          <span @click="editChange(item.id, item.text)">编辑</span>
        </div>
      </div>
      <template #right>
        <img
          src="@/assets/img/icon/icon-delete.png"
          class="delete"
          alt=""
          @click="WordsDelete(item.id)"
        />
      </template>
    </van-swipe-cell>
  </div>
  <button class="add" @click="addChange()">添加常用语</button>
  <!-- 添加常用语弹框 -->
  <van-popup
    v-model:show="state.talkWordsSwitch"
    duration="0.2"
    position="right"
    :style="{ width: '100%', height: '100%' }"
  >
    <TalkWordsAdd :id="state.editId" :title="state.title" :text="state.text"></TalkWordsAdd>
  </van-popup>
</template>

<style lang="scss" scoped>
.manage-list {
  height: calc(100vh - 50px); /* 确保内容区域适配剩余视口空间 */
  overflow-y: auto; /* 开启垂直滚动 */
}
.item {
  margin: 0 0.72rem;
  border-bottom: 1px solid #eeeeee;
  p {
    font-size: 0.75rem;
    font-weight: 300;
    color: #030303;
    line-height: 1.12rem;
    padding: 1rem 0.2rem 0.4rem;
    text-align: left;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 0.77rem;
    span {
      font-size: 0.75rem;
      line-height: 0.75rem;
      font-weight: 300;
      color: #030303;
      text-align: right;
    }
    img {
      width: 0.91rem;
      height: 0.91rem;
    }
  }
}

.delete {
  width: 1.87rem;
  height: 1.87rem;
  // margin-right: 0.64rem;
  margin: 1.4rem 0.32rem;
}

.add {
  height: 2.35rem;
  background: linear-gradient(90deg, #ffa400, #ff8900);
  border-radius: 0.27rem;
  line-height: 2.35em;
  position: fixed;
  border: none;
  bottom: 0.64rem;
  margin: 0 0.64rem;
  font-size: 0.8rem;
  font-weight: 400;
  color: #ffffff;
  width: calc(100vw - 1.28rem);
  left: 0;
}
</style>
