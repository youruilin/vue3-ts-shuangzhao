import request from '../utils/request'

// 获取用户信息接口
export function userInfo<T>(): Promise<T> {
  return request({
    url: '/clicent/user_info',
    method: 'get',
    params: {}
  })
}

// 图片上传接口
export function uploadImg<T>(data): Promise<T> {
  return request({
    url: '/upload/image',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

// 个人信息提交接口
export function userModify<T>(data): Promise<T> {
  return request({
    url: '/user/modify',
    method: 'put',
    data
  })
}

// apis/collect.ts

export interface CollectListResponse {
  errCode: number
  msg: string
  data
}

// 获取我的收藏列表接口
export function collectList<T = CollectListResponse>(): Promise<T> {
  return request({
    url: '/task/getTaskCollection',
    method: 'get',
    params: {}
  })
}

// 提现记录接口
export function transferList() {
  return request({
    url: '/my/transfer/userList',
    method: 'get',
    params: {}
  })
}

// 收入记录接口
export function incomeList() {
  return request({
    url: '/admin/task/purchaseRecord',
    method: 'get',
    params: {}
  })
}

// 准提现接口
export function withdraw<T>(data): Promise<T> {
  return request({
    url: '/my/apply/transfer',
    method: 'post',
    data
  })
}
