<template>
  <el-form label-position="right" label-width="auto" class="password-form" :model="passwordForm" ref="passwordFormRef">
    <el-form-item label="旧密码" required prop="oldPassword" :rules="[{ required: true, message: '请输入旧密码', trigger: 'blur' }]">
      <el-input v-model="passwordForm.oldPassword" placeholder="请输入旧密码" type="password" :show-password="true"></el-input>
    </el-form-item>
    <el-form-item label="新密码" required prop="newPassword" :rules="[{ required: true, message: '请输入新密码', trigger: 'blur' }]">
      <el-input v-model="passwordForm.newPassword" placeholder="请输入新密码" type="password" :show-password="true"></el-input>
    </el-form-item>
    <el-form-item label="确认新密码" required prop="confirmPassword" :rules="[{ required: true, message: '请确认新密码', trigger: 'blur' },{ validator: validateConfirmPassword, trigger: 'blur' }]">
      <el-input v-model="passwordForm.confirmPassword" placeholder="请确认新密码" type="password" :show-password="true"></el-input>
    </el-form-item>
    <el-form-item label="  ">
      <el-button type="primary" class="update-button" style="width: 100%" @click="onUpdatePassword">修改密码</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { updatePassword } from "../../api/user_api.js";
import { userStore } from "../../store/user.js";
const store = userStore();
import {reactive, ref} from "vue";

const passwordForm = reactive({
  oldPassword: '',
  newPassword: '',
  confirmPassword: ''
})
const passwordFormRef = ref(null)

const validateConfirmPassword = (rule, value, callback) => {
  if (value !== passwordForm.newPassword) {
    callback(new Error('两次输入的密码不一致'));
  } else {
    callback();
  }
}

const onUpdatePassword = async () => {
  await passwordFormRef.value.validate(async valid => {
    if (valid) {
      if (passwordForm.oldPassword === '' || passwordForm.newPassword === '' || passwordForm.confirmPassword === '') {
        ElMessage({
          message: '请填写完整的密码信息',
          type: 'error'
        });
        return;
      }
      if (passwordForm.newPassword !== passwordForm.confirmPassword) {
        ElMessage({
          message: '两次输入的密码不一致',
          type: 'error'
        });
        return;
      }
      let res = await updatePassword(passwordForm.oldPassword, passwordForm.newPassword)
      if (res.code=== 200) {
        ElMessage({
          message: '密码修改成功',
          type: 'success'
        });
        store.logout()
      } else {
        ElMessage({
          message: res.message || '密码修改失败',
          type: 'error'
        });
      }
    }else{
      ElMessage({
        message: '请填写完整的密码信息',
        type: 'error'
      });
    }

  });
}
</script>

<style scoped>
.password-form {
  width: 100%;
  margin: 0 auto;
}
</style>