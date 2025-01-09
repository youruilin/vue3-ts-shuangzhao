import { defineStore } from 'pinia'
import { systemList, chatMessageList } from '@/api/message'

interface messageList {
  id: number
  type?: number
  content: string
  create_time: string
  bid?: number
  title: string
  is_informtype?: number
  is_show: boolean
  specific_time: string
  send_id?: string
  receive_id?: string
  join_user_ids?: string
  things_id?: number
  things_type?: number
  sender?: string
  senderPhoto?: string
  is_read?: number
  receive_id_name?: string
  receive_is_read?: string
}

export const messageStore = defineStore({
  id: 'message',
  state: () => {
    return {
      systemMessageList: [
        {
          id: 258,
          type: 0,
          content: '系统1.1升级完成，快来体验了',
          create_time: '07月16日 14:41',
          bid: 135,
          title: '审核通知',
          is_informtype: 2,
          is_show: false,
          specific_time: '2022-11-21 23:30'
        }
      ] as messageList[], // 使用类型断言初始化
      systemNewMessage: [
        {
          id: 258,
          type: 0,
          content: '系统1.1升级完成，快来体验了',
          create_time: '07月16日 14:41',
          bid: 135,
          title: '审核通知',
          is_informtype: 2,
          is_show: false,
          specific_time: '2022-11-21 23:30'
        }
      ] as messageList[],
      messageList: [
        {
          id: 196,

          send_id: '25',

          receive_id: '17',

          content: '444444fdf',

          create_time: '11月21日 02:09',

          join_user_ids: '25,17',

          things_id: 36,

          things_type: 0,

          sender: '秦升成',

          senderPhoto:
            'http://api.share.zcwytd.com/upload/images/6635d99062f811ed90aab73514f19278/108-108.png',

          title: '小程序开发',

          is_read: 1,

          receive_id_name: '蒋红娇',

          receive_is_read:
            'http://api.share.zcwytd.com/upload/images/headImg/qI3xzZz5J3tdLjZFpcORUDn5.png',

          is_show: 0
        },
        {
          id: 198,
          send_id: '25',
          receive_id: '25',
          content: '工要',
          create_time: '11月21日 02:09',
          join_user_ids: '25,25',
          things_id: 35,
          things_type: 0,
          sender: '秦升成',
          senderPhoto:
            'http://api.share.zcwytd.com/upload/images/6635d99062f811ed90aab73514f19278/108-108.png',
          title: '后端java驻场1个月',
          is_read: 1,
          receive_id_name: '秦升成',
          receive_is_read:
            'http://api.share.zcwytd.com/upload/images/6635d99062f811ed90aab73514f19278/108-108.png',
          is_show: 0
        },
        {
          id: 193,
          send_id: '25',
          receive_id: '9',
          content: '2323',
          create_time: '11月21日 01:42',
          join_user_ids: '25,9',
          things_id: 33,
          things_type: 0,
          sender: '秦升成',
          senderPhoto:
            'http://api.share.zcwytd.com/upload/images/6635d99062f811ed90aab73514f19278/108-108.png',
          title: '官网网站开发',
          is_read: 1,
          receive_id_name: '陈晶',
          receive_is_read:
            'http://api.share.zcwytd.com/upload/images/headImg/BehIQv2JXCwwjf0suog5qkrp.png',
          is_show: 0
        }
      ]
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
