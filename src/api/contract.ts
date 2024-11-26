import request from '../utils/request'
// 合约列表接口

interface contractResponse {
  records
  msg
}

export function contractList(data): Promise<contractResponse> {
  return request({
    url: '/task/myContractAllList',
    method: 'get',
    params: data
  })
}

interface contractDetailResponse {
  records
}

// 合约详情接口
export function contractDetail(data): Promise<contractDetailResponse> {
  return request({
    url: '/task/contractAllList',
    method: 'get',
    params: data
  })
}

// 合约签约/拒绝接口
export function contractOpreation<T>(data): Promise<T> {
  return request({
    url: '/contract/isContract',
    method: 'put',
    data
  })
}
