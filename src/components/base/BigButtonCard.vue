<template>
  <div class="card" :style="'width:'+width+'px;height:'+height+'px;'">
    <img :src="src">
    <div class="label">{{ label }}</div>
  </div>
</template>

<script setup>
import {onMounted} from "vue";

const props = defineProps({
  src: {
    type: String,
    default: '',
    required: true
  },
  label: {
    type: String,
    default: '',
    required: true
  },
  width: {
    type: Number,
    default: 200
  },
  height: {
    type: Number,
    default: 90
  }
})
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