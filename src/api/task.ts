import request from '@/utils/request'

// 城市列表接口
export function cityList() {
  return request({
    url: '/sys/city/list',
    method: 'get'
  })
}
