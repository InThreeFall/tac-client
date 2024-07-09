<template>
  <div class="box">
    <el-image :src="iconSrc" style="width: 23px;height: 14px"></el-image>
    <div class="title">
      {{ title }}
    </div>
    <el-image :src="iconSrc" style="width: 23px;height: 14px"></el-image>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '通知公告'
  },
  iconSrc: {
    type: String,
    default: '/public/title_icon.png'
  }
})
</script>

<style scoped>
.box {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-bottom: 80px
}

.title {
  text-align: center;
  font-weight: 900;
  font-size: 20px;
  font-family: 'Microsoft Yahei', system-ui;
  margin-left: 10px;
  margin-right: 10px;
}
</style>