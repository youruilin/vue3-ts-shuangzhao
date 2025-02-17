// src/utils/fetchWithBaseUrl.js
const fetchWithBaseUrl = url => {
  // 获取环境变量中的 PUBLIC_URL
  const baseUrl = import.meta.env.PUBLIC_URL || '/' // import.meta.env 也可以获取环境变量

  // 拼接完整的请求路径
  const fullUrl = `${baseUrl}${url}`

  // 调用原生的 fetch 方法
  return fetch(fullUrl)
}

export default fetchWithBaseUrl
