import type { DirectiveBinding, ObjectDirective } from 'vue'

// 自定义类型，扩展 HTMLElement
interface DebouncedHTMLElement extends HTMLElement {
  timer?: NodeJS.Timeout | null
  handler?: (...args: unknown[]) => void
}

// 定义自定义指令
export const directives = (app: {
  directive: (name: string, options: ObjectDirective) => void
}) => {
  app.directive('debounce', {
    mounted(el: DebouncedHTMLElement, binding: DirectiveBinding) {
      if (typeof binding.value !== 'function') {
        console.error('v-debounce expects a function as its value')
        return
      }

      el.timer = null

      // 定义防抖处理函数
      el.handler = function (...args: unknown[]) {
        if (el.timer) {
          clearTimeout(el.timer)
        }
        el.timer = setTimeout(() => {
          binding.value.apply(this, args)
        }, 600)
      }

      // 添加事件监听
      el.addEventListener('click', el.handler)
    },
    beforeUnmount(el: DebouncedHTMLElement) {
      if (el.timer) {
        clearTimeout(el.timer)
        el.timer = null
      }

      if (el.handler) {
        el.removeEventListener('click', el.handler)
      }
    }
  })
}
