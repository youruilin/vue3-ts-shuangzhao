import request from '@/utils/request'

// 消息列表接口
export function systemList<T>(data): Promise<{ data: T }> {
  return request({
    url: '/user/inform/list',
    method: 'get',
    params: data
  })
}

// 消息详情
export function systemDetails<T>(data): Promise<T> {
  return request({
    url: '/user/inform/lookover',
    method: 'get',
    params: data
  })
}

// 对话列表接口
export function chatMessageList<T>(): Promise<T> {
  return request({
    url: '/it_chat/my/message/list',
    method: 'get'
  })
}
