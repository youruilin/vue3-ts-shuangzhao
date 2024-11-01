import request from '../utils/request'
// 获取验证码
export function getCode(data: { accounts: string }) {
  return request({
    url: '/login/code',
    method: 'post',
    data
  })
}
// 登录接口
interface LoginData {
  accounts: string
  code: string
}

export function login(data: LoginData) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

// 协议文件接口
export function getPolicy(data: { id: 17 }) {
  return request({
    url: 'policy_protocol/list',
    method: 'get',
    params: data
  })
}
