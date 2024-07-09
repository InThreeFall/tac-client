<template>
  <AllDialog :showDialogHandler="showDialogHandler" :isLogin="store.isLogin"/>
  <div>
    <el-menu onselectstart='return false'
             :router="false"
             default-active="/"
             class="custom-menu"
             mode="horizontal"
             @select="handleSelect"
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
      <el-menu-item index="/Registration" v-if="store.dsUser.userType===1||store.isLogin===false">我要报名
      </el-menu-item>
      <el-menu-item index="/Expert" v-if="store.dsUser.userType===2||store.isLogin===false">进入专家评审
      </el-menu-item>
      <div style="flex-grow: 1;"/>
      <div class="custom-menuitem">
        <el-menu-item class="menuitem-login" v-if="store.isLogin!==true">
          <div style="display: flex;align-items: center;">
            <el-button style="margin-right: 20px;" size="large" type="primary"
                       @click="openLoginDialog()">登录
            </el-button>
          </div>
        </el-menu-item>
        <el-sub-menu class="menuitem-login" v-else>
          <template #title>
            <el-avatar :size="40" :src="store.user.avatar"/>
            <el-text style="margin-left: 10px;">{{ store.dsUser.nickName }}</el-text>
          </template>
          <el-menu-item @click="store.logout();showDialogHandler=0">退出登录</el-menu-item>
          <el-menu-item @click="openUpdatePswDialog()">修改密码
          </el-menu-item>
        </el-sub-menu>
      </div>
    </el-menu>
  </div>
</template>

<script setup>
import router from "@/router/index";
import {RouterView} from 'vue-router'
import AllDialog from "@/components/AllDialog.vue";
import {onMounted, ref} from "vue";
import {userStore} from "@/store/user";

const showDialogHandler = ref(0)
const store = userStore()

function handleSelect(index, indexPath, item, routeResult) {
  const needLogin = index === '/Registration' || index === '/Expert';
  if (needLogin && !store.isLogin) {
    router.push('/');
    openLoginDialog();
  } else {
    router.push(index);
  }
}
function openLoginDialog() {
  return showDialogHandler.value = Math.random() * 10
}
function openUpdatePswDialog() {
  return showDialogHandler.value = Math.random() * 10 + 10000
}

onMounted(() => {
  store.reloadByLocalStorage()
})
</script>

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