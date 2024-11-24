import { createApp } from 'vue'
import 'vant/lib/index.css' // 引入 vant 全局样式
import './assets/css/style.css' // 引入自定义的全局样式, 放在vant后面, 避免被 vant ui 样式覆盖
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// 组合式 setup api 中, 可直接按需引入, 而无需进行注册
// import { Button, NavBar, Tabbar, TabbarItem, Checkbox, Toast, Icon } from 'vant'

import '@/utils/rem' // 引入 rem 适配方案
import { directives } from '@/utils/common' // 引入防抖

const app = createApp(App)
directives(app) // 防抖注册

app.use(createPinia())
app.use(router)
app.mount('#app')
