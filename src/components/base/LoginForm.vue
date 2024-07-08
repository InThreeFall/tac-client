<template>
    <el-form label-position="right" label-width="auto" class="login-form">
      <el-form-item label="用户名" required>
        <el-input v-model="username" placeholder="请输入用户名" minlength="1"></el-input>
      </el-form-item>
      <el-form-item label="密码" required>
        <el-input v-model="password" placeholder="请输入密码" type="password" :show-password="true" minlength="1"></el-input>
      </el-form-item>
      <el-form-item label="  ">
        <el-button type="primary" class="login-button" style="width: 100%" @click="onLoginButtonClick" >登录</el-button>
      </el-form-item>
    </el-form>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import {login,getInfo} from "../../api/user_api.js";
import {userStore} from "../../store/user.js";
const store = userStore()
import {ref} from "vue";
const username = ref('')
const password = ref('')
const onLoginButtonClick = async () => {
  let res = await login(username.value, password.value)
  localStorage.setItem('token', res.token)
  const token = res.token
  res = await getInfo()
  res.user.password = ''
  const {user,permissions,roles,dsUser} = res
  store.login(token,user,permissions,roles,dsUser)
  //弹窗：登录成功
  ElMessage({
    message: '登录成功',
    type: 'success'
  });
}

</script>

<style scoped>
.login-form {
  width: 100%;
  margin: 0 auto;
}
</style>