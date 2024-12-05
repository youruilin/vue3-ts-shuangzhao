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

// 对话消息聊天接口
export function chatMessageContent<T>(data): Promise<T> {
  return request({
    url: '/it_chat/message/list',
    method: 'get',
    params: data
  })
}

// 消息常用语列表
export function chatMessageWordsList<T>(): Promise<T> {
  return request({
    url: '/it_chat/message/works/list',
    method: 'get'
  })
}

// 常用语添加
export function chatMessageWordsAdd<T>(data): Promise<T> {
  return request({
    url: 'it_chat/message/works/add',
    method: 'post',
    data
  })
}
// 常用语编辑
export function chatMessageWordsEdit<T>(data): Promise<T> {
  return request({
    url: 'it_chat/message/works/edit',
    method: 'post',
    data
  })
}
// 常用语删除
export function chatMessageWordsDelete<T>(data): Promise<T> {
  return request({
    url: 'it_chat/message/works/delete',
    method: 'post',
    data
  })
}
