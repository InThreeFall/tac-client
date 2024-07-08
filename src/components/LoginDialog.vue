<template>
  <el-dialog v-model="_showLoginDialog" class="custom-dialog" align-center>
    <LoginForm/>
  </el-dialog>
</template>

<script setup>
import LoginForm from "@/components/base/LoginForm.vue";
import {ref, watch} from "vue";

const _showLoginDialog = ref(false)
const props = defineProps({
  showLoginCount: {
    type: Boolean,
    required: true,
  }
})
watch(() => props.showLoginCount, (val) => {
  _showLoginDialog.value = val
})

</script>

<style>
/*圆角dialog*/
.custom-dialog {
  border-radius: 10px;
  width: 400px;
  padding: 40px 50px;
}
</style>