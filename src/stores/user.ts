import { defineStore } from 'pinia'

// 在文件的顶部定义本地存储的数据类型
interface UserInfo {
  user_info: {
    role?: string // 可以根据实际情况添加更多属性
    // 其他用户信息字段
  }
  token: string // token 应为字符串
}

export const userStore = defineStore({
  id: 'user',
  state: () => {
    return {
      token: localStorage.getItem('token') || '',
      role: localStorage.getItem('role') || '1',
      userInfo: {}
    }
  },
  actions: {
    // 设置权限的方法
    setRole(type: string) {
      this.role = type
    },
    setUserInfo(data: UserInfo) {
      this.userInfo = data.user_info
      this.token = data.token
      this.role = data.user_info.role || '1'
      localStorage.setItem('token', this.token)
      localStorage.setItem('role', this.role)
    },
    logout() {
      this.token = ''
      this.userInfo = {}
      localStorage.removeItem('token')
      localStorage.removeItem('role')
    }
  }
})
