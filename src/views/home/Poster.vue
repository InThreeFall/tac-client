<template>
  <div style="width: 100%;">
    <div class="poster-bg">
      <div class="title">
        2023某市职业学校教学能力<br>大赛<br>
        <el-button round size="large">
          <template #default>
            <div style="color: #007cff;font-weight:900;font-size:16px" @click="goRegistrationView()">我要报名</div>
            <el-image src="/public/矢量智能对象 拷贝@2x.png" style="margin-left: 5px;width: 15px;"></el-image>
          </template>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {routerStore} from "@/store/router_store";
const routerStoreInstance = routerStore()
function goRegistrationView() {
  console.log('goRegistrationView')
  routerStoreInstance.switchIndex('/Registration')
}
</script>

<style scoped>
.poster-bg {
  position: relative;
  width: 100%;
  height: 500px;
  background: url('/public/组 2.png') no-repeat center center;
}

.title {
  position: relative;
  font-size: 50px;
  font-weight: 500;
  color: #f3f3f3;
  top: 110px;
  left: 100px;
  width: 800px
}
</style>