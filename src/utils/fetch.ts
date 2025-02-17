// src/utils/fetchWithBaseUrl.js
const fetchWithBaseUrl = url => {
  // 获取环境变量中的 VITE_PUBLIC_URL，默认值为 '/'
  const baseUrl = import.meta.env.VITE_PUBLIC_URL || '/'
  console.log('baseUrl', baseUrl)

  // 确保 baseUrl 以 / 结尾
  const fullUrl = `${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}${url}`
  console.log('fullUrl', fullUrl)

  // 调用原生的 fetch 方法
  return fetch(fullUrl)
}

export default fetchWithBaseUrl
