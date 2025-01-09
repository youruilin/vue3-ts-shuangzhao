<script setup lang="ts">
import { ref } from 'vue'

const list =
  '曹睿,曹紫暄,董诚诚,范雅迪,高梦,何宪祖,何晓通,侯苏函,侯文凯,孔钦正,孔书瑶,李珂,李庆群,李如康,李茹,李子俊,刘奥乾,刘文一,刘宇鑫,路涵,罗继贤,吕晓天,马昌豪,马楚俨,苗静宸,苗庆奥,牛子璇,任广顺,邵文鑫,邵文扬,盛少杰,司文鱼,田平,田森,田晓萌,王奥嘉,王国庆,王荟,王洁,王胜钊,王一川,王籽晴,魏梓轩,奚雨欣,席兴硕,许安迪,许涵铭,杨婉晴,杨鑫炜,张涵月,张笑瑜,张宇铭,张子安,赵畅,赵凯,赵敏滔,钟瑶菡,朱超然,朱维展,朱治国'

list.split(',').map(name => `${name}`)
// 学生名单
const students = ref<string[]>(list.split(',').map(name => `${name}`))

// 当前高亮索引
const activeIndex = ref<number | null>(null)

// 已点名学生数组
const selected = ref<string[]>([])

/**
 * 随机点名函数
 */
const pickRandomStudent = () => {
  // 排除已经选中的学生
  const remainingStudents = students.value.filter(student => !selected.value.includes(student))

  if (remainingStudents.length > 0) {
    const randomIndex = Math.floor(Math.random() * remainingStudents.length)
    const selectedStudent = remainingStudents[randomIndex]

    // 如果当前已选中，则从当前标签开始逐步切换
    const startIndex = activeIndex.value !== null ? activeIndex.value : 0

    // 计算最短路径的横向和纵向步数
    const startRow = Math.floor(startIndex / 6) // 当前所在行
    const startCol = startIndex % 6 // 当前所在列
    const targetIndex = students.value.indexOf(selectedStudent) // 目标索引
    const targetRow = Math.floor(targetIndex / 6) // 目标所在行
    const targetCol = targetIndex % 6 // 目标所在列

    const horizontalSteps = Math.abs(startCol - targetCol) // 水平步数
    const verticalSteps = Math.abs(startRow - targetRow) // 垂直步数

    // 总步数 = 横向步数 + 纵向步数
    const totalSteps = horizontalSteps + verticalSteps
    let currentStep = 0
    const interval = 100 // 每次切换的时间间隔，100ms

    // 清空索引并触发动画
    activeIndex.value = null
    setTimeout(() => {
      const moveAnimation = setInterval(() => {
        // 计算下一个索引
        let nextIndex = startIndex + currentStep

        // 计算当前步数方向
        if (currentStep < horizontalSteps) {
          nextIndex = (startIndex + currentStep) % students.value.length // 水平移动
        } else if (currentStep < totalSteps) {
          nextIndex = startIndex + (currentStep - horizontalSteps) * 6 // 纵向移动
        }

        activeIndex.value = nextIndex
        currentStep++

        // 到达目标索引时停止动画
        if (currentStep >= totalSteps) {
          clearInterval(moveAnimation)
          activeIndex.value = targetIndex // 确保最后停在目标索引

          // 将选中的学生添加到已点名学生列表中
          if (!selected.value.includes(selectedStudent)) {
            selected.value.push(selectedStudent)
          }
        }
      }, interval)
    }, 300) // 延迟300ms后开始动画（和CSS动画时间保持一致）
  } else {
    alert('所有学生已被抽中！')
  }
}
</script>

<template>
  <div id="choujiang">
    <h1>随机抽奖</h1>
    <ul class="student-list">
      <li
        v-for="(student, index) in students"
        :key="index"
        :class="{ active: activeIndex === index }"
      >
        {{ student }}
      </li>
    </ul>

    <!-- 随机点名按钮 -->
    <button @click="pickRandomStudent">随机抽奖</button>

    <!-- 显示已点名学生 -->
    <div v-if="selected.length" class="selected-list">
      <h3>中将名单</h3>
      <ul>
        <li v-for="(student, index) in selected" :key="index">
          {{ student }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
#choujiang {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  padding: 60px 60px;
}

.student-list {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 每行 6 个 */
  gap: 10px;
  padding: 0;
  list-style-type: none;
}

li {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
  background-color: #f9f9f9;
  transition:
    transform 0.3s,
    background-color 0.3s;
}

li.active {
  background-color: #42b983;
  color: white;
  font-weight: bold;
  transform: scale(1.1);
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #42b983;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 24px;
}

button:hover {
  background-color: #369b72;
}

/* 显示已点名学生的列表 */
.selected-list {
  position: fixed;
  bottom: 70px;
  right: 60px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.selected-list h3 {
  margin: 0;
  font-size: 18px;
}

.selected-list ul {
  list-style-type: none;
  padding: 0;
}

.selected-list li {
  margin: 5px;
  padding: 5px 10px;
  font-size: 18px;
}
</style>
