import { defineStore } from 'pinia'

// 定义 City 类型
interface City {
  name: string
}

export const taskStore = defineStore({
  id: 'task',
  state: () => {
    return {
      cityValue: localStorage.getItem('city') || '東京都',
      cityList: [] as City[] // 使用 City 数组类型
    }
  },
  actions: {
    setCityValue(value: string) {
      this.cityValue = value
    },
    setCityList(data) {
      this.cityList = data
    }
  }
})
