import request from '@/utils/request'

// 城市列表接口
export function cityList() {
  return request({
    url: '/sys/city/list',
    method: 'get'
  })
}

// banner 列表接口
// 返回数据的类型声明
interface bannerResponse {
  list: {
    id: number
    picture: string
  }[]
  msg?: string
}
// 请求函数定义(类型声明)
export function bannerList(data: { type: number }): Promise<bannerResponse> {
  return request({
    url: '/home/banner/list',
    method: 'get',
    params: data
  })
}

// 职位类型接口
// 返回数据的类型声明
interface positionResponse {
  list: {
    id: number
  }[]
}
// 请求函数定义(类型声明)
export function positionList(): Promise<positionResponse> {
  return request({
    url: '/position/positionTypeApi',
    method: 'get'
  })
}

// 筛选列表接口
// 定义返回的数据类型
interface taskResponse {
  msg: string
  data
  serviceMode
}

export function screenList(): Promise<taskResponse> {
  return request({
    url: 'task/getTaskAll',
    method: 'get'
  })
}

// 任务列表接口
// 定义返回的数据类型
interface screenResponse {
  msg: string
  records
  total
}

export function taskAllList(data): Promise<screenResponse> {
  return request({
    url: 'task/taskAllList',
    method: 'get',
    params: data
  })
}

// 任务详情接口
// 定义返回的数据类型
interface detailResponse {
  msg: string
  records
  status
}

export function taskDetail(data): Promise<detailResponse> {
  return request({
    url: 'task/getTaskDetails',
    method: 'get',
    params: data
  })
}

// 任务收藏
interface taskCollectionResponse {
  data
  msg
}

export function taskCollection(data): Promise<taskCollectionResponse> {
  return request({
    url: '/course/TaskCollection',
    method: 'post',
    data
  })
}

// 热搜请求
interface hotSearchResponse {
  data
  msg
}
export function hotSearch(data): Promise<hotSearchResponse> {
  return request({
    url: '/position/public/getHotSeach',
    method: 'get',
    data
  })
}
