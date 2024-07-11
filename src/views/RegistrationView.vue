<template>
  <PaperView>
    <ArrowDoubleMenu
        :showIndex="showIndex"
        :onselect="onselect"
        leftLabel="填写作品信息"
        rightLabel="上传参赛作品">
    </ArrowDoubleMenu>
    <div v-if="showIndex==='left'" style="display: flex;justify-content: center;">
      <InfoForm style="margin-top: 30px" :onSubmit="()=>{showIndex='right'}"></InfoForm>
    </div>
    <div v-if="showIndex==='right'" style="display: flex;justify-content: center;">
      <UploadForm style="margin-top: 30px" :onLastStep="()=>{showIndex='left'}"></UploadForm>
    </div>
  </PaperView>
</template>

<script setup>


import PaperView from '@/components/base/PaperView.vue'
import ArrowDoubleMenu from '@/components/base/ArrowDoubleMenu.vue'
import InfoForm from "@/views/registration/InfoForm.vue";
import UploadForm from "@/views/registration/UploadForm.vue";
import {ref} from "vue";

const showIndex = ref('left')


function onselect(index) {
  showIndex.value = index
}
</script>

<style scoped>
</style>