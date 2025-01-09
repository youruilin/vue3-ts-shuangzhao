import request from '../utils/request'

// 获取用户信息接口
export function userInfo<T>(): Promise<T> {
  return request({
    url: '/clicent/user_info',
    method: 'get',
    params: {}
  })
}
