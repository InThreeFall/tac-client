<template>
    <div style="width: 100%">
      <el-menu
          style="width: 100%;"
          default-active="left"
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
const props = defineProps({
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
  right: -27px;
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
  left: -27px;
  height: 50px;
  background: #DEDEDED3;
  clip-path: polygon(100% 0%,100% 100%, 0% 100%, 10% 50%, 0% 0%);
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