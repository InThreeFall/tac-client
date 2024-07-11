<template>
  <el-dialog v-model="_showLoginDialog" class="custom-dialog" align-center>
    <template #header>
      <el-row>
        <el-col :span="24">
          <div style="font-size: 20px;font-weight: bold;">欢迎登录</div>
        </el-col>
      </el-row>
      <el-divider></el-divider>
    </template>
    <LoginForm/>
  </el-dialog>
  <el-dialog v-model="_showFixPswDialog" class="custom-dialog" align-center>
    <template #header>
      <el-row>
        <el-col :span="24">
          <div style="font-size: 20px;font-weight: bold;">修改密码</div>
        </el-col>
      </el-row>
      <el-divider></el-divider>
    </template>
    <FixPswForm/>
  </el-dialog>
  <el-dialog v-model="_showExpertDialog" class="custom-dialog" align-center>
    <CommitmentLetter/>
    <el-button @click="store.isFirstExpire=false">签署</el-button>
  </el-dialog>
</template>

<script setup>
import LoginForm from "@/components/base/LoginForm.vue";
import FixPswForm from "@/components/base/FixPswForm.vue";
import CommitmentLetter from "@/views/app/CommitmentLetter.vue";
import {ref, watch} from "vue";

import {userStore} from "@/store/user";
const store = userStore()
const _showLoginDialog = ref(false)
const _showFixPswDialog = ref(false)
const _showExpertDialog = ref(false)
const _isLogin = ref(false)
const props = defineProps({
  showDialogHandler: {
    type: Number,
    required: true,
  },
  isLogin: {
    type: Boolean,
    required: true,
  }
})
watch(() => props.showDialogHandler, (val) => {
  if (val===0){
    _showLoginDialog.value = false
    _showFixPswDialog.value = false
    _showExpertDialog.value = false
  }else if(val>=10000){
    _showFixPswDialog.value = true
    _showLoginDialog.value = false
    _showExpertDialog.value = false
  }else if(0<val<10000){
    _showLoginDialog.value = true
    _showFixPswDialog.value = false
    _showExpertDialog.value = false
  }else if(10001<=val<20000){
    _showExpertDialog.value = true
    _showLoginDialog.value = false
    _showFixPswDialog.value = false
  }

  if (_isLogin.value) {
    // 如果已经登录，不显示登录框
    _showLoginDialog.value = false
  }else{
    // 如果未登录，不显示修改密码框
    _showFixPswDialog.value = false
    _showExpertDialog.value = false
  }
})
watch(() => props.isLogin, (val) => {
  _isLogin.value = val
  if (val) {
    _showLoginDialog.value = false
  }else{
    _showFixPswDialog.value = false
    _showExpertDialog.value = false
  }
})

</script>

<style scoped>
/*圆角dialog*/
.custom-dialog {
  border-radius: 20px;
  width: 400px;
  padding: 40px 50px;
}
</style>