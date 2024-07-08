<script setup>
import {RouterView} from 'vue-router'
import LoginDialog from "@/components/LoginDialog.vue";
import {onMounted, ref} from "vue";
import {userStore} from "./store/user";
const showLoginCount = ref(0)
const store = userStore()
onMounted(() => {
  store.reloadByLocalStorage()
})
</script>

<template>
  <LoginDialog :showLoginCount="showLoginCount" :isLogin="store.isLogin"/>
  <header>
    <div>
      <el-menu onselectstart='return false'
               :router="true"
               default-active="/"
               class="custom-menu"
               mode="horizontal"
               :ellipsis="false">
        <el-menu-item style="pointer-events:none">
          <img
              style="width: 300px"
              src="public/组 4@2x(3).png"
              alt="职业院校技能大赛评审平台"
          />
        </el-menu-item>
        <div style="margin-right: 10px;"/>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/Guide">比赛指南</el-menu-item>
        <el-menu-item index="/Registration" v-if="store.dsUser.userType===1">我要报名</el-menu-item>
        <el-menu-item index="/Expert" v-else-if="store.dsUser.userType===2">进入专家评审</el-menu-item>
        <div style="flex-grow: 1;"/>
        <div class="custom-menuitem">
          <el-menu-item class="menuitem-login" v-if="store.isLogin!==true">
            <div style="display: flex;align-items: center;">
              <el-button style="margin-right: 20px;" size="large" type="primary" @click="showLoginCount++">登录
              </el-button>
            </div>
          </el-menu-item>
          <el-sub-menu class="menuitem-login" v-else>
            <template #title>
              <el-avatar :size="40" :src="store.user.avatar"/>
              <el-text style="margin-left: 10px;">{{ store.dsUser.nickName }}</el-text>
            </template>
            <el-menu-item @click="store.logout();showLoginCount=0">退出登录</el-menu-item>
            <el-menu-item>修改密码</el-menu-item>
          </el-sub-menu>
        </div>
      </el-menu>
    </div>
  </header>
  <RouterView/>
</template>

<style scoped>

.custom-menu .el-menu-item {
  font-weight: bold;
}

.custom-menu .custom-menuitem .el-menu-item:hover {
  background-color: transparent;
}

.custom-menu .el-menu-item.is-active {
  border-bottom: none;
  background-color: #D2E6FF62;
  top: 0;
}

.custom-menu .el-menu-item.is-active::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #409EFF;
  top: 0;
  transition: none;
}

.custom-menu .el-menu-item {
  transition: none;
}
</style>
