import { defineStore } from 'pinia'
import { userInfo } from '@/api/my'

interface userInfoResponse {
  user_name
  it_head: string
  sex
  birthday
  work_time
  city
  area
  account_price
}

export const myStore = defineStore({
  id: 'my',
  state: () => {
    return {
      userInfo: {} as userInfoResponse
    }
  },
  actions: {
    async getUserInfo() {
      const res = await userInfo<userInfoResponse>()
      if (res) {
        this.userInfo = res
      }
    }
  }
})
