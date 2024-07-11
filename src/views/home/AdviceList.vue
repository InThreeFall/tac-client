<!--首页-通知公告-->
<!--creator by yysq 2024.7.9-->
<template>
  <div style="background: rgba(224,224,224,0.29);padding-bottom: 50px">
    <div style="height: 40px"></div>
    <IconDoubleTitle title="通知公告" iconSrc="/title_icon.png"></IconDoubleTitle>
    <ULGrid :data="ul"></ULGrid>
  </div>
</template>

<script setup>
import {ref} from "vue";
import ULGrid from '@/components/base/ULGrid.vue'
import IconDoubleTitle from '@/components/base/IconDoubleTitle.vue'
import data_list from '/public/advice_url_list.json'

const ul = ref(data_list.data)
</script>

<style scoped>

</style>