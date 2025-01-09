import { defineStore } from 'pinia'
// import { cityList } from '../api/task'

// 定义 City 类型
// interface City {
//   name: string | undefined
//   children?: City[]
// }

interface City {
  name: string
  children
  key
}

interface Area {
  text: string
  children
  value
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

const list = [
  {
    id: 14,
    key: 14,
    name: '技术',
    pid: 0,
    children: [
      {
        id: 22,
        key: 22,
        name: '前端开发',
        pid: 14
      },
      {
        id: 25,
        key: 25,
        name: '安卓开发',
        pid: 14
      },
      {
        id: 26,
        key: 26,
        name: 'ios开发',
        pid: 14
      },
      {
        id: 27,
        key: 27,
        name: '测试',
        pid: 14
      },
      {
        id: 28,
        key: 28,
        name: '运维/技术支持',
        pid: 14
      },
      {
        id: 29,
        key: 29,
        name: 'php开发',
        pid: 14
      },
      {
        id: 48,
        key: 48,
        name: 'java开发',
        pid: 14
      }
    ]
  },
  {
    id: 16,
    key: 16,
    name: '市场',
    pid: 0,
    children: [
      {
        id: 30,
        key: 30,
        name: '市场调研',
        pid: 16
      },
      {
        id: 31,
        key: 31,
        name: '网络营销',
        pid: 16
      },
      {
        id: 32,
        key: 32,
        name: '活动策划',
        pid: 16
      },
      {
        id: 33,
        key: 33,
        name: '商务渠道',
        pid: 16
      }
    ]
  },
  {
    id: 17,
    key: 17,
    name: '运营',
    pid: 0,
    children: [
      {
        id: 34,
        key: 34,
        name: '内容运营',
        pid: 17
      },
      {
        id: 35,
        key: 35,
        name: '活动运营',
        pid: 17
      },
      {
        id: 36,
        key: 36,
        name: '新媒体运营',
        pid: 17
      },
      {
        id: 37,
        key: 37,
        name: '视频剪辑',
        pid: 17
      }
    ]
  },
  {
    id: 18,
    key: 18,
    name: '产品设计',
    pid: 0,
    children: [
      {
        id: 38,
        key: 38,
        name: 'UI设计师',
        pid: 18
      },
      {
        id: 39,
        key: 39,
        name: '视觉设计师',
        pid: 18
      },
      {
        id: 40,
        key: 40,
        name: '产品经理',
        pid: 18
      },
      {
        id: 41,
        key: 41,
        name: '项目经理',
        pid: 18
      }
    ]
  },
  {
    id: 19,
    key: 19,
    name: '人力资源',
    pid: 0,
    children: [
      {
        id: 42,
        key: 42,
        name: '人力资源主管',
        pid: 19
      },
      {
        id: 43,
        key: 43,
        name: '招聘',
        pid: 19
      },
      {
        id: 44,
        key: 44,
        name: 'HRBP',
        pid: 19
      },
      {
        id: 45,
        key: 45,
        name: '人事/HR',
        pid: 19
      }
    ]
  }
]

const bannerlist = [
  {
    id: 15,
    picture:
      'http://test.api.share.eduwys.com:10011/upload/images/headImg/JMV7A3UbA1vQjXjSyRLVmbKW.png',
    name: 'it求职端2',
    isdelete: 0,
    sort: 50,
    type: 2,
    url: '',
    create_time: '2022-06-28T13:03:53.000Z',
    update_time: '2022-07-05T08:48:55.000Z'
  },
  {
    id: 16,
    picture:
      'http://test.api.share.eduwys.com:10011/upload/images/headImg/DUo5BxkoFyxbCi5ycrd2pOH8.png',
    name: 'it求职端1',
    isdelete: 0,
    sort: 50,
    type: 2,
    url: 'https://mobile.zcwytd.com/#/pages/login/choice/index',
    create_time: '2022-06-28T13:05:33.000Z',
    update_time: '2022-07-01T06:34:11.000Z'
  }
]

export const taskStore = defineStore({
  id: 'task',
  state: () => {
    return {
      cityValue: localStorage.getItem('city') || '北京',
      cityList: [] as City[], // 使用 City 数组类型
      bannerList: bannerlist as getBanner[],
      positionValue: '', // 从 localStorage 获取初始值
      positionList: list as getPosition[],
      screenList: {} as getScreen,
      hotSearchList: [] as hotSearch[],
      areaList: [] as Area[]
    }
  },
  actions: {
    setCityValue(value: string) {
      this.cityValue = value
      localStorage.setItem('city', value) // 将新的 cityValue 存入 localStorage
    },
    async getCityList() {
      try {
        const response = await fetch('/data/cityList.json')
        const res = (await response.json()) as City[]

        if (res) {
          this.cityList = res
          const city: Area[] = []

          for (let i = 0; i < res.length; i++) {
            city.push({
              text: res[i].name,
              value: res[i].key,
              children: []
            })

            if (res[i].children && res[i].children?.length) {
              for (let j = 0; j < res[i].children.length; j++) {
                city[i].children.push({
                  text: res[i].children[j].name,
                  value: res[i].children[j].key
                })
              }
            }
          }

          this.areaList = city
          console.log(city, 'city')
        }
      } catch (error) {
        console.error('加载城市数据失败', error)
      }
    },
    // async getCityList() {
    //   const res: City[] = await cityList()
    //   if (res) {
    //     this.cityList = res
    //     const city: Area[] = []
    //     for (let i = 0; i < res.length; i++) {
    //       city.push({
    //         text: res[i].name,
    //         value: res[i].key,
    //         children: []
    //       })
    //       if (res[i].children && res[i].children?.length) {
    //         for (let j = 0; j < res[i].children.length; j++) {
    //           city[i].children.push({
    //             text: res[i].children[j].name,
    //             value: res[i].children[j].key
    //           })
    //         }
    //       }
    //     }
    //     this.areaList = city
    //     console.log(city, 'city')
    //   }
    // },

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
