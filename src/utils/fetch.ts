const fetchWithBaseUrl = url => {
  // 获取环境变量中的 VITE_PUBLIC_URL
  const baseUrl = import.meta.env.VITE_PUBLIC_URL || '/' // 默认值为根路径（开发环境）

  // 拼接完整的请求路径
  const fullUrl = `${baseUrl}${url}`

  // 调用原生的 fetch 方法
  return fetch(fullUrl)
}

export default fetchWithBaseUrl
