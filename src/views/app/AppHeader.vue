<template>
  <AllDialog :isLogin="store.isLogin" ref="allDialogRef"/>
  <div id="other">
    <el-menu onselectstart='return false'
             default-active="/Home"
             mode="horizontal"
             :router="false"
             :ellipsis="false"
             @select="handleSelect">
      <el-menu-item style="pointer-events:none">
        <img style="width: 300px" src="/home_icon.png" alt="职业院校技能大赛评审平台"/>
      </el-menu-item>

      <div style="margin-right: 10px;"/>

      <el-menu-item id="Home" index="/Home">首页</el-menu-item>
      <el-menu-item id="Guide" index="/Guide">比赛指南</el-menu-item>
      <el-menu-item id="Registration" index="/Registration" v-if="store.dsUser.userType===1||store.isLogin===false">
        我要报名
      </el-menu-item>
      <el-menu-item id="Expert" index="/Expert" v-if="store.dsUser.userType===2||store.isLogin===false">
        进入专家评审
      </el-menu-item>

      <div style="flex-grow: 1;"/>

      <div>
        <el-menu-item index="/" v-if="store.isLogin!==true">
          <div style="display: flex;align-items: center;">
            <el-button style="margin-right: 20px;" size="large" type="primary"
                       @click="openLoginDialog()">登录
            </el-button>
          </div>
        </el-menu-item>

        <el-sub-menu v-else index="/">
          <template #title>

            <el-avatar :size="40" :src="store.user.avatar"/>
            <el-text style="margin-left: 10px;">{{ store.dsUser.nickName }}</el-text>
          </template>
          <el-menu-item @click="logout()">退出登录</el-menu-item>
          <el-menu-item @click="openUpdatePswDialog()">修改密码
          </el-menu-item>
        </el-sub-menu>

      </div>
    </el-menu>
  </div>
</template>

<script setup>
import {onMounted, ref, watch} from "vue";
import router from "@/router/index";
import AllDialog from "@/views/app/AllDialog.vue";
import {userStore} from "@/store/user";
import {registrationStore} from "@/store/registration_form";
import {routerStore} from "@/store/router_store";
const allDialogRef = ref(null)
const rStore = registrationStore()
const routerStoreInstance = routerStore()
const store = userStore()


function handleSelect(index) {

  const needLogin = index === '/Registration' || index === '/Expert';
  routerStoreInstance.switchIndex(index)
  if (needLogin && !store.isLogin) {
    switchWithRouter("/Home")
    openLoginDialog();
  } else {
    routerStoreInstance.switchIndex(index)
    router.push(index);
  }
}

function openLoginDialog() {
  allDialogRef.value.setLoginDialogVisible(true)
}

function openUpdatePswDialog() {
  allDialogRef.value.setFixPswDialogVisible(true)
}

function logout() {
  rStore.clearRegistrationForm()
  store.clearLoginInfo()
  allDialogRef.value.clearAllDialog();
  switchWithRouter("/Home")
}

watch(() => store.isLogin, (newVal) => {
  allDialogRef.value.clearAllDialog();
  switchWithRouter("/Home")
})
function switchWithRouter(newVal) {
  if (newVal === '/Home') {
    document.getElementById('Home').click()
  } else if (newVal === '/Registration') {
    document.getElementById('Registration').click()
  } else if (newVal === '/Expert') {
    document.getElementById('Expert').click()
  } else if (newVal === '/Guide') {
    document.getElementById('Guide').click()
  }
}
watch(() => routerStoreInstance.nowIndex, (newVal) => {
  switchWithRouter(newVal)
})

onMounted(() => {
  store.reloadByLocalStorage()
  if (store.isLogin && store.dsUser.userType === 2 && store.dsUser.readFlag === 0) {
    allDialogRef.value.setExpertDialogVisible(true)
  }
})
</script>

<style scoped>

.el-menu-item {
  font-weight: bold;
  transition: none;
}

.el-menu-item:hover {
  background-color: transparent;
}

.el-menu-item.is-active {
  border-bottom: none;
  background-color: #D2E6FF62;
  top: 0;
}

.el-menu-item.is-active::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #409EFF;
  top: 0;
  transition: none;
}
</style>