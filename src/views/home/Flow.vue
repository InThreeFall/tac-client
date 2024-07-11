<template>
  <div>
    <IconDoubleTitle title="赛事流程" iconSrc="/title_icon.png"></IconDoubleTitle>
    <div style="display: flex; align-items: center; justify-content: center; width: 100%; margin-top: 60px;">

      <div class="card" style="width: 180px; height: 85px;">
        <img src="/登录报名icon.png">
        <div class="label">登录报名</div>
      </div>
      <div style="width: 20px"></div>
      <img src="/右箭头灰.png">
      <div style="width: 20px"></div>
      <div class="card" style="width: 180px; height: 85px;">
        <img src="/提交作品icon.png">
        <div class="label">提交作品</div>
      </div>
      <div style="width: 20px"></div>
      <img src="/右箭头灰.png">
      <div style="width: 20px"></div>
      <div class="card" style="width: 180px; height: 85px;">
        <img src="/作品评审icon.png">
        <div class="label">作品评审</div>
      </div>
      <div style="width: 20px"></div>
      <img src="/右箭头灰.png">
      <div style="width: 20px"></div>
      <div class="card" style="width: 180px; height: 85px;">
        <img src="/获奖公示icon.png">
        <div class="label">获奖公示</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconDoubleTitle from '@/components/base/IconDoubleTitle.vue'
</script>

<style scoped>
.card {
  width: 200px;
  height: 90px;
  background: #007cff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card .label {
  color: #fff;
  margin-left: 20px;
  font-size: 18px;
  font-weight: 580;
  font-family: 'Microsoft Yahei', system-ui
}
</style>