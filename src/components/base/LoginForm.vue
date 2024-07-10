<template>
  <el-form label-position="right" label-width="auto" class="login-form" :model="formData">
    <el-form-item label="用户名" required prop="username" :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]">
      <el-input v-model="formData.username" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码" required prop="password" :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
      <el-input v-model="formData.password" placeholder="请输入密码" type="password" :show-password="true"></el-input>
    </el-form-item>
    <el-form-item label="  ">
      <el-button type="primary" class="login-button" style="width: 100%" @click="onLogin" >登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import {login,getInfo} from "../../api/user_api.js";
import {userStore} from "../../store/user.js";
const store = userStore()
import { ref } from "vue";

const formData = ref({
  username: '',
  password: ''
})

const onLogin = async () => {
  if(formData.value.username === '') {
    ElMessage({
      message: '请输入用户名',
      type: 'error'
    });
    return;
  }
  if(formData.value.password === '') {
    ElMessage({
      message: '请输入密码',
      type: 'error'
    });
    return;
  }
  let res = await login(formData.value.username, formData.value.password)
  localStorage.setItem('token', res.token)
  const token = res.token
  res = await getInfo()
  res.user.password = ''
  const {user, permissions, roles, dsUser} = res
  store.login(token, user, permissions, roles, dsUser)
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