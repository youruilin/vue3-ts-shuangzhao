<script setup lang="ts">
import { useRouter } from 'vue-router'
const { talentList } = defineProps({
  talentList: {
    type: Array,
    default: () => []
  }
})
const router = useRouter()
const gotoDetail = item => {
  router.push('/talent/TalentDetails/' + item.id)
}
</script>

<template>
  <div
    v-for="(item, index) in talentList"
    :key="index"
    class="talent-item"
    @click="gotoDetail(item)"
  >
    <div class="talent-item-top">
      <div class="talent-item-pic">
        <img src="@/assets/img/icon/icon-message.png" alt="" />
      </div>
      <div class="talent-item-cont">
        <h3>
          元宝<span class="orange">驻场</span><span class="green">远程</span
          ><span class="blue">全职</span>
        </h3>
        <p>フランドエンド | 10年 | 大学卒業 | 33 歳</p>
        <dl>
          <dt>vue</dt>
          <dt>node.js</dt>
          <dt>小程序</dt>
        </dl>
      </div>
    </div>
    <div class="talent-item-bottom">
      <label>已完成多个大型项目</label>
      <span><van-icon name="location-o" />北京</span>
    </div>
  </div>
</template>

<style lang="scss" coped>
.talent-item {
  margin: 0 0.64rem 0.53rem;
  padding: 0.77rem 0.64rem 0;
  background: #ffffff;
  border-radius: 0.53rem;
  font-size: 0.69rem;
  .talent-item-top {
    display: flex;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #f5f5f5;
  }
  .talent-item-pic {
    width: 4rem;
    height: 4rem;
    border-radius: 0.27rem;
    overflow: hidden;
    margin-right: 0.85rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .talent-item-cont {
    h3 {
      font-size: 0.91rem;
      font-weight: 400;
      color: #333333;
      display: flex;
      align-items: center;
      margin-bottom: 0.64rem;
      span {
        width: 1.97rem;
        height: 0.85rem;
        line-height: 0.85rem;
        border-radius: 0.53rem;
        font-size: 0.59rem;
        font-weight: 300;
        color: #ffffff;
        margin-left: 0.2rem;
        text-align: center;
        padding: 0.1rem 0;
      }
      .orange {
        background: linear-gradient(90deg, #fea829, #fe8f27);
      }
      .green {
        background: linear-gradient(90deg, #55edb9, #52dea4);
      }
      .blue {
        background: linear-gradient(90deg, #42c3e8, #249af6);
      }
    }
    p {
      font-size: 0.69rem;
      line-height: 0.69rem;
      font-weight: 100;
      color: #666666;
      margin-bottom: 0.56rem;
    }
  }
}
dl {
  display: flex;
  flex-flow: wrap;
  dt {
    padding: 0.3rem 0.5rem;
    font-size: 0.59rem;
    line-height: 0.59rem;
    font-weight: 300;
    color: #666666;
    margin-right: 0.27rem;
    background: #f6f7f8;
    border-radius: 0.16rem;
    margin-bottom: 0.3rem;
  }
}

.talent-item-bottom {
  display: flex;
  padding: 0.72rem 0 0.72rem;
  label {
    flex: 1;
  }
  span {
    text-align: right;
  }
  i {
    font-size: 0.8rem;
    font-weight: 600;
    margin-right: 0.1rem;
  }
}
</style>
