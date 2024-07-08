<script setup>
import {RouterView} from 'vue-router'
</script>

<template>
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
              alt="Element logo"
          />
        </el-menu-item>
        <div style="margin-right: 10px;"/>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/Guide">比赛指南</el-menu-item>
        <el-menu-item index="/Registration">我要报名</el-menu-item>
        <el-menu-item index="/Expert">进入专家评审</el-menu-item>
        <div style="flex-grow: 1;"/>
        <div class="custom-menuitem">
          <el-menu-item class="menuitem-login">
            <div style="display: flex;align-items: center;">
              <el-button style="margin-right: 20px;" size="large" type="primary">登录</el-button>
            </div>
          </el-menu-item>
        </div>
      </el-menu>
    </div>
  </header>
  <RouterView/>
</template>

<style scoped>

/*加粗字体*/
.custom-menu el-menu-item {
  font-weight: bold;
}
.custom-menu .custom-menuitem el-menu-item:hover {
  background-color: transparent;
}
</style>
