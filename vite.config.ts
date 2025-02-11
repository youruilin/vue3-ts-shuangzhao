import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
// import eslint from 'vite-plugin-eslint'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/HexoSouceCode/' : '/', // 设置根路径
  plugins: [
    vue(),
    vueJsx(),
    // eslint(),
    Pages({
      // 指定路由文件的目录
      dirs: 'src/views',
      // 可以自定义路由生成规则
      extensions: ['vue'], // 仅识别 .vue 文件
      exclude: ['**/components/**'] // 排除特定目录
    }),
    Components({
      resolvers: [VantResolver()]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern", "legacy"
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    open: true,
    proxy: {
      '/api': 'http://127.0.0.1:3007'
    },
    cors: true // 在开发阶段不需要手动设置服务器端的 CORS 头信息即可进行跨域请求，节省时间。
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
