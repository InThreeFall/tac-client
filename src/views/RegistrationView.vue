<template>
  <PaperView>
    <ArrowDoubleMenu
      :onselect="onselect"
      leftLabel="填写作品信息"
      rightLabel="上传参赛作品">
    </ArrowDoubleMenu>
    <div v-if="showIndex==='left'" style="display: flex;justify-content: center;">
      <InfoForm style="width: 400px;margin-top: 30px"></InfoForm>
    </div>
    <div v-if="showIndex==='right'">
      上传作品
    </div>
  </PaperView>
</template>

<script setup>
import PaperView from '@/components/base/PaperView.vue'
import ArrowDoubleMenu from '@/components/base/ArrowDoubleMenu.vue'
import InfoForm from "@/views/registration/InfoForm.vue";
import {ref} from "vue";
const showIndex = ref('left')
function onselect(index) {
  showIndex.value = index
}
</script>

<style scoped>
</style>