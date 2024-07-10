<template>
  <PaperView>
    <div>
      <el-menu
          default-active="1"
          mode="horizontal">
        <el-menu-item index="1">填写作品信息</el-menu-item>
        <el-menu-item index="2">上传参赛作品</el-menu-item>
      </el-menu>
    </div>
  </PaperView>
</template>

<script setup>
import PaperView from '@/components/base/PaperView.vue'
</script>

<style scoped>
</style>