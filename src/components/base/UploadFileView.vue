<template>
  <el-upload
      :auto-upload="false"
      :before-remove="beforeRemove"
      :limit="limit"
      :on-exceed="handleExceed"
      :file-list="files"
      :accept="accept"
      @change="handleFilesChange"
      @remove="onRemoveFile"
  >
    <el-button text><el-icon size="30"><Upload /></el-icon></el-button>
  </el-upload>
</template>

<script setup>
import {ElMessage, ElMessageBox} from "element-plus";
import {ref} from "vue";
const props = defineProps({
  onFileChanges: {
    type: Function,
    required: true
  },
  limit: {
    type: Number,
    default: 1
  },
  accept: {
    type: String,
    default: ".png,.jpg,.jpeg,.gif,.bmp,.doc,.docx,.pdf"
  },
  size: {
    type: Number,
    default: 10
  }
})
const files = ref([]);

const beforeRemove = (file, fileList) => {
  return ElMessageBox.confirm(`确定移除 ${file.name}？`);
};
const handleExceed = (files, fileList) => {
  ElMessage.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${fileList.length + files.length} 个文件`);
};
const handleFilesChange = (file, fileList) => {
  //检查文件大小
  if (file.size > props.size) {
    files.value = fileList.filter(item => item.uid !== file.uid);
    ElMessage.error(`文件大小不能超过${props.size / 1024 / 1024}MB`);
    return;
  }
  props.onFileChanges(fileList);
};
const onRemoveFile = (file, fileList) => {
  props.onFileChanges(fileList);
};
</script>

<style scoped>

</style>