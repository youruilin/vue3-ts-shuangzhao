const fetchWithBaseUrl = url => {
  // 获取环境变量中的 VITE_PUBLIC_URL
  // 默认值为空，代表根路径（开发环境）
  // 小坑：必须为空字符串，不可以为 '/'，否则 / 会抵消前项目的 localhpst 路径
  // const baseUrl = import.meta.env.MODE === 'production' ? '/vue3-ts-shuangzhao' : ''
  const baseUrl = import.meta.env.VITE_PUBLIC_URL

  // 拼接完整的请求路径
  const fullUrl = `${baseUrl}${url}`

  // 调用原生的 fetch 方法
  return fetch(fullUrl)
}

export default fetchWithBaseUrl
