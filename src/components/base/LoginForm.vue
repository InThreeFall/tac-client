<template>
  <el-form label-position="right" label-width="auto" class="login-form" :model="formData">
    <el-form-item label="用户名" required prop="username"
                  :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]">
      <el-input v-model="formData.username" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码" required prop="password" :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
      <el-input v-model="formData.password" placeholder="请输入密码" type="password" :show-password="true"></el-input>
    </el-form-item>
    <el-form-item label="  ">
      <el-button type="primary" class="login-button" style="width: 100%" @click="onLogin">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import {ElMessage} from 'element-plus'
import {ref} from "vue";
import {login, getInfo} from "../../api/user_api.js";
import {userStore} from "../../store/user.js";
const store = userStore()

const formData = ref({
  username: '',
  password: ''
})

function verifyForm() {
  if (formData.value.username === '') {
    ElMessage({
      message: '请输入用户名',
      type: 'error'
    });
    throw '请输入用户名'
  }
  if (formData.value.password === '') {
    ElMessage({
      message: '请输入密码',
      type: 'error'
    });
    throw '请输入密码'
  }
}

async function tokenGet() {
  let res = await login(formData.value.username, formData.value.password)
  if (res.code === 500) {
    throw '登录失败' + res.msg
  } else if (!res.token) {
    throw '登录失败'
  }
  return res.token
}

async function getUserInfo(token) {
  let res = await getInfo(token)
  if (res.code === 500) {
    throw '获取用户信息失败' + res.msg
  }
  const {user, permissions, roles, dsUser} = res
  if (!user) {
    throw '获取用户信息失败'
  }
  return {user, permissions, roles, dsUser}
}

async function onLogin() {
  try {
    verifyForm()
    let token = await tokenGet()
    let {user, permissions, roles, dsUser} = await getUserInfo(token)
    user.password = '' // 密码不返回
    store.saveLoginInfo(token, user, permissions, roles, dsUser)
    ElMessage({
      message: '登录成功',
      type: 'success'
    });
  } catch (error) {
    console.log(JSON.stringify(error))
    ElMessage({
      message: error,
      type: 'error'
    });
  }
}
</script>

<style scoped>
.login-form {
  width: 100%;
  margin: 0 auto;
}
</style>