<template>
    <el-form label-position="right" label-width="auto" class="login-form">
      <el-form-item label="用户名" required>
        <el-input v-model="username" placeholder="请输入用户名" ></el-input>
      </el-form-item>
      <el-form-item label="密码" required>
        <el-input v-model="password" placeholder="请输入密码" type="password" :show-password="true"></el-input>
      </el-form-item>
      <el-form-item label="  ">
        <el-button type="primary" class="login-button" style="width: 100%" >登录</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      username: '',
      password: ''
    };
  }
}
</script>

<style scoped>
.login-form {
  width: 100%;
  margin: 0 auto;
}
</style>