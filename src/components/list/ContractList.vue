<script setup lang="ts">
import { useRouter } from 'vue-router'
const { contractList } = defineProps({
  contractList: {
    type: Array,
    default: () => []
  }
})

const router = useRouter()
const gotoDetail = item => {
  router.push('/contract/ContractDetails/' + item.id)
}
</script>

<template>
  <dl v-for="(item, index) in contractList" :key="index" @click="gotoDetail(item)">
    <dd>
      <h3>フロントエンド開発エンジニア</h3>
      <span>履约中</span>
      <van-icon name="arrow" />
    </dd>
    <dt>
      <label>公司名称</label>
      <span>北京朝阳私塾</span>
    </dt>
    <dt>
      <label>合约类型</label>
      <span>技术服务</span>
    </dt>
    <dt>
      <label>合约周期</label>
      <span>签约时间</span>
    </dt>
    <dt>
      <label>合约进度</label>
      <span></span>
    </dt>
    <dt class="contract-progress">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </dt>
  </dl>
</template>

<style lang="scss" scoped>
dl {
  background-color: #ffffff;
  font-size: 0.64rem;
  color: #666666;
  padding: 1rem 0.7rem;
  border-bottom: 1px solid #eeeeee;
  dd {
    display: flex;
    margin-bottom: 0.9rem;
    align-items: center;
    h3 {
      font-size: 0.8rem;
      font-weight: 700;
      color: #333333;
      flex: 1;
    }
    span {
      text-align: right;
      font-size: 0.75rem;
      color: #ff9415;
    }
    i {
      font-size: 0.75rem;
    }
  }
  dt {
    display: flex;
    margin-bottom: 0.72rem;
    :last-child {
      margin-bottom: 0;
    }
    label {
      flex: 1;
    }
    span {
      text-align: right;
    }
  }
}
.contract-progress {
  display: flex;
  height: 0.53rem;
  width: 100%;
  i {
    flex: 1;
    background: #f3f3f3;
    margin: 0 1px;
    .green {
      background: #50d400;
    }
    .orange {
      background: #fe9215;
    }
    .red {
      background: #fe4800;
    }
  }
}
</style>
