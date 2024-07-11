<template>
    <div style="width: 100%">
      <el-menu
          :active="_showIndex"
          style="width: 100%;"
          :default-active="showIndex"
          mode="horizontal"
          :ellipsis="false"
          @select="_onselect"
          active-text-color="#ffffff">
        <el-menu-item index="left" class="left-menu-item">
          {{props.leftLabel}}
        </el-menu-item>
        <el-menu-item index="right" class="right-menu-item">
          {{props.rightLabel}}
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script setup>
import {ref, watch} from "vue";

const props = defineProps({
  showIndex: {
    type: String,
    required: true
  },
  onselect:{
    type: Function,
    required: true
  },
  leftLabel: {
    type: String,
    required: true
  },
  rightLabel: {
    type: String,
    required: true
  }
});
const _showIndex = ref(props.showIndex)
watch(() => props.showIndex, (val) => {
  _showIndex.value = val
})
function _onselect(index) {
  props.onselect(index)
}

</script>

<style scoped>
.el-menu {
  margin: 0 auto;
  font-family: 'Microsoft Yahei', system-ui;
  font-weight: bold;
  border: none;
}

.left-menu-item {
  width: 50%;
  right: -34px;
  height: 51px;
  background: #DEDEDED3;
  clip-path: polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%);
}
.left-menu-item.is-active{
  background: #409EFF;
  height: 52px;
}
.left-menu-item.is-active:focus{
  height: 52px;
  background: #409EFF;
}

.right-menu-item {
  width: 50%;
  left: -34px;
  height: 50px;
  background: #DEDEDEFF;
  clip-path: polygon(100% 0%,100% 100%, 4% 100%, 13% 50%, 4% 0%);
}

.right-menu-item.is-active{
  height: 52px;
  background: #409EFF;
}
.right-menu-item.is-active:focus{
  height: 52px;
  background: #409EFF;
}
.el-menu-item{
  transition: none;
}
</style>