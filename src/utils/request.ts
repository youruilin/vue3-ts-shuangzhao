import axios from 'axios'
import { showToast } from 'vant'
const baseURL = import.meta.env.VITE_API_URL || '/api'
const service = axios.create({
  baseURL,
  timeout: 10000
})
// 发起请求之前的拦截器
service.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem('token')
    if (token) {
      // 直接在 headers 对象上添加属性
      config.headers['x-access-token'] = token
    }
    return config
  },
  error => Promise.reject(error)
)
// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status !== 200) {
      return Promise.reject(new Error(res.success || 'Error'))
    } else {
      if (res.code == 200) {
        return res.result || res.data
      } else {
        showToast(res.message)
      }
    }
  },
  error => {
    return Promise.reject(error)
  }
)

// 导出后在 api 文件中引入
export default service
