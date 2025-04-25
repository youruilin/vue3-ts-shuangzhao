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
