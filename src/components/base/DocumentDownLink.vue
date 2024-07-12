<template>
  <div style="display: flex;flex-direction: row;align-items: center;font-size: 16px">
    <img style="margin: 5px" v-if="type==='pdf'" src="/pdf.png"/>
    <img style="margin: 5px" v-else-if="type==='docx'" src="/doc.png"/>
    <img style="margin: 5px" v-else-if="type==='ppt'" src="/ppt.png"/>
    <img style="margin: 5px" v-else-if="type==='xls'" src="/xls.png"/>
    <img style="margin: 5px" v-else-if="type==='rar'" src="/rar.png"/>
    <a :href="url" target="_blank" style="width: 700px;margin-left: 10px">
      {{ title }}
      <div style="display: flex;flex-direction: row;position: absolute;right: 0;top: 15px;">
        <img src="/download.png" style="width: 20px; height: 20px; cursor: pointer"/>
        <div style="width: 100px">下载</div>
      </div>
    </a>

  </div>
</template>

<script setup>
import {ref, watch} from "vue";

const props = defineProps({
  title: String,
  url: String
})
const type = ref("pdf")
watch(() => props.url, (newVal) => {
  if (newVal) {
    const arr = newVal.split(".")
    type.value = arr[arr.length - 1]
  }
}, {immediate: true})
</script>

<style scoped>
a {

  text-decoration: none;
  color: #505050;
}
</style>