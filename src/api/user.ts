import request from '../utils/request'
// 获取验证码

// 定义返回数据的接口
interface CodeResponse {
  code: string // 确保这个结构与 API 返回的数据匹配
}

export function getCode(data): Promise<CodeResponse> {
  return request({
    url: '/login/code',
    method: 'post',
    data
  }) as Promise<CodeResponse> // 断言返回值类型
}

// 登录接口返回值的类型声明
// 这里可仅定义需要的数据类型, 而无需定义全部数据类型
interface UserInfo {
  role: string
  birthday: string | null
}

interface LoginResponse {
  errCode: number
  msg: string
  data: {
    user_info: UserInfo
    token: string // 登录令牌
    expireTime: number // 过期时间
  }
}

// 登录接口的
interface LoginData {
  accounts: string
  code: string
}

export function login(data: LoginData): Promise<LoginResponse> {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

interface PolicyResponse {
  content: string
}

// 协议文件接口
export function getPolicy(params: { id: number }): Promise<PolicyResponse> {
  return request({
    url: '/policy_protocol/list',
    method: 'get',
    params
  })
}
