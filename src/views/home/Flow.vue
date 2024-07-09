<template>
  <div>
    <IconDoubleTitle title="赛事流程" iconSrc="/public/title_icon.png"></IconDoubleTitle>
    <div style="display: flex; align-items: center; justify-content: center; width: 100%; margin-top: 60px;">
      <BigButtonCard src="/public/登录报名icon.png" label="登录报名" :width="180" :height="85"></BigButtonCard>
      <div style="width: 20px"></div>
      <img src="/public/右箭头灰.png">
      <div style="width: 20px"></div>
      <BigButtonCard src="/public/提交作品icon.png" label="提交作品" :width="180" :height="85"></BigButtonCard>
      <div style="width: 20px"></div>
      <img src="/public/右箭头灰.png">
      <div style="width: 20px"></div>
      <BigButtonCard src="/public/作品评审icon.png" label="作品评审" :width="180" :height="85"></BigButtonCard>
      <div style="width: 20px"></div>
      <img src="/public/右箭头灰.png">
      <div style="width: 20px"></div>
      <BigButtonCard src="/public/获奖公示icon.png" label="获奖公示" :width="180" :height="85"></BigButtonCard>
    </div>
  </div>
</template>

<script setup>
import IconDoubleTitle from '@/components/base/IconDoubleTitle.vue'
import BigButtonCard from '@/components/base/BigButtonCard.vue'
</script>

<style scoped>
</style>