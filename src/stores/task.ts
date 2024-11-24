import { defineStore } from 'pinia'

// 定义 City 类型
interface City {
  name: string | undefined
}

// 向 state 存数据时, 同样需要对类型进行定义
// 这是 banner 数据类型声明
interface getBanner {
  url: string | undefined
  picture: string | undefined
}

// 这是职位列表的 state 数据类型声明
interface getPosition {
  name
  children
}

// 筛选列表的数据类型声明
interface getScreen {
  serviceMode
  taskCycle
}

// 热搜列表数据类型声明
interface hotSearch {
  title
}

export const taskStore = defineStore({
  id: 'task',
  state: () => {
    return {
      cityValue: localStorage.getItem('city') || '北京',
      cityList: [] as City[], // 使用 City 数组类型
      bannerList: [] as getBanner[],
      positionValue: '', // 从 localStorage 获取初始值
      positionList: [] as getPosition[],
      screenList: {} as getScreen,
      hotSearchList: [] as hotSearch[]
    }
  },
  actions: {
    setCityValue(value: string) {
      this.cityValue = value
      localStorage.setItem('city', value) // 将新的 cityValue 存入 localStorage
    },
    setCityList(data) {
      this.cityList = data
    },
    setBannerList(data) {
      this.bannerList = data
    },
    setPositionList(data) {
      this.positionList = data
    },
    setPositionValue(p: string) {
      this.positionValue = p
      localStorage.setItem('positionValue', p)
    },
    setScreenList(data: getScreen) {
      this.screenList = data
    },
    setHotSearchList(data) {
      this.hotSearchList = data
    }
  }
})
