import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Pages({
      // 指定路由文件的目录
      dirs: 'src/views',
      // 可以自定义路由生成规则
      extensions: ['vue'], // 仅识别 .vue 文件
      exclude: ['**/components/**'] // 排除特定目录
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
