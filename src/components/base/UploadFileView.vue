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
      ref="upload"
  >
    <el-button text>
      <slot name="default">
        <el-icon size="30">
          <Upload />
        </el-icon>
      </slot>
    </el-button>
    <template #file="{ file }" >
      <div style="display: flex;flex-direction: row;margin-top: 25px;width: 110px">
        <div class="customFileSlot">{{file.name}}</div>
        <el-button style="position: relative;right: 10px;bottom: 5px"  @click="remove(file)" type="info"  text :icon="CircleClose">
        </el-button>
      </div>

    </template>
  </el-upload>
</template>

<script setup>
import {CircleClose} from "@element-plus/icons-vue";
import {ElMessage, ElMessageBox} from "element-plus";
import {onMounted, ref} from "vue";
const upload = ref(null);
function remove(file){
  upload.value.handleRemove(file);
}
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
    files.value = fileList;
    ElMessage.error(`文件大小不能超过${props.size / 1024 / 1024}MB`);
    return;
  }
  props.onFileChanges(fileList);
};
const onRemoveFile = (file, fileList) => {
  props.onFileChanges(fileList);
};
function resetFiles(fileList) {
  files.value = fileList
}
defineExpose({
  resetFiles
})
</script>

<style scoped>
.customFileSlot {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100px;
}
</style>