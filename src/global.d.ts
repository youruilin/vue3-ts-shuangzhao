// src/global.d.ts
import 'vue'

declare module 'vue' {
  interface ComponentCustomProperties {
    definePageMeta: (meta: Record<string, unknown>) => void // 或根据需求定义其他属性
  }
}
