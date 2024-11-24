import { defineStore } from 'pinia'
import { systemList, chatMessageList } from '@/api/message'

interface messageList {
  title
  create_time
  content
  id
  specific_time
}

export const messageStore = defineStore({
  id: 'message',
  state: () => {
    return {
      systemMessageList: [] as messageList[], // 使用类型断言初始化
      systemNewMessage: [] as messageList[],
      messageList: []
    }
  },
  actions: {
    async getSystemMessageList() {
      const res = await systemList<messageList[]>({
        type: 0,
        is_informtype: 2
      })
      if (res) {
        this.systemMessageList = res.data
        if (this.systemMessageList[0]) this.systemNewMessage = [this.systemMessageList[0]]
      }
    },
    async getChatMessageList() {
      const res = await chatMessageList<{ data }>()
      if (res) {
        this.messageList = res.data
      }
    }
  }
})
