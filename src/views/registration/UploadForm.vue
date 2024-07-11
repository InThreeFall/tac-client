<template>
  <div style="display: flex;flex-direction: column;width: 90%;align-items: center">
    <el-button
        style="position: relative;left: 280px;margin-bottom: 10px"
        v-if="rStore.isFormComplete===true" text type="primary"
        @click="rStore.isFormComplete = false">
      编辑
    </el-button>
    <el-form
        label-position="right" label-width="150px" :disabled="rStore.isFormComplete">
      <table>
        <tbody>
        <tr>
          <td rowspan="5">
            <el-form-item label="课堂实录" required/>
          </td>
          <td style="padding-top: 5px;padding-bottom: 5px">
            <el-text size="small" type="info">请上传MP4格式的视频,最多可上传12个视频,且单个视频文件大小不超过500M。</el-text>
          </td>
        </tr>
        <tr>
          <td class="group-td">
            <div style="margin-left: 20px">团队1</div>
            <div class="item-content">
              <UploadFileView class="upload-view"
                              ref="g1_1"
                              :onFileChanges="g1_1_fileChanges"
                              :limit="1"
                              accept=".mp4"
                              :size="1024*1024*500"
              >
                <template #default>
                  <div class="upload-icon" :style="'background-color:' + (rStore.isFormComplete ? '#f0f0f0' : 'white')">
                    <el-icon>
                      <Plus/>
                    </el-icon>
                  </div>
                </template>
              </UploadFileView>
              <UploadFileView class="upload-view"

                              ref="g1_2"
                              :onFileChanges="g1_2_fileChanges"
                              :limit="1"
                              accept=".mp4"
                              :size="1024*1024*500"
              >
                <template #default>
                  <div class="upload-icon" :style="'background-color:' + (rStore.isFormComplete ? '#f0f0f0' : 'white')">
                    <el-icon>
                      <Plus/>
                    </el-icon>
                  </div>
                </template>
              </UploadFileView>
              <UploadFileView class="upload-view"

                              ref="g1_3"
                              :onFileChanges="g1_3_fileChanges"
                              :limit="1"
                              accept=".mp4"
                              :size="1024*1024*500"
              >
                <template #default>
                  <div class="upload-icon" :style="'background-color:' + (rStore.isFormComplete ? '#f0f0f0' : 'white')">
                    <el-icon>
                      <Plus/>
                    </el-icon>
                  </div>
                </template>
              </UploadFileView>
            </div>
          </td>
        </tr>
        <tr>
          <td class="group-td">
            <div style="margin-left: 20px">团队2</div>
            <div class="item-content">
              <UploadFileView class="upload-view"

                              ref="g2_1"
                              :onFileChanges="g2_1_fileChanges"
                              :limit="1"
                              accept=".mp4"
                              :size="1024*1024*500"
              >
                <template #default>
                  <div class="upload-icon" :style="'background-color:' + (rStore.isFormComplete ? '#f0f0f0' : 'white')">
                    <el-icon>
                      <Plus/>
                    </el-icon>
                  </div>
                </template>
              </UploadFileView>
              <UploadFileView class="upload-view"

                              ref="g2_2"
                              :onFileChanges="g2_2_fileChanges"
                              :limit="1"
                              accept=".mp4"
                              :size="1024*1024*500"
              >
                <template #default>
                  <div class="upload-icon" :style="'background-color:' + (rStore.isFormComplete ? '#f0f0f0' : 'white')">
                    <el-icon>
                      <Plus/>
                    </el-icon>
                  </div>
                </template>
              </UploadFileView>
              <UploadFileView class="upload-view"

                              ref="g2_3"
                              :onFileChanges="g2_3_fileChanges"
                              :limit="1"
                              accept=".mp4"
                              :size="1024*1024*500"
              >
                <template #default>
                  <div class="upload-icon" :style="'background-color:' + (rStore.isFormComplete ? '#f0f0f0' : 'white')">
                    <el-icon>
                      <Plus/>
                    </el-icon>
                  </div>
                </template>
              </UploadFileView>
            </div>
          </td>
        </tr>
        <tr>
          <td class="group-td">
            <div style="margin-left: 20px">团队3</div>
            <div class="item-content">
              <UploadFileView class="upload-view"

                              ref="g3_1"
                              :onFileChanges="g3_1_fileChanges"
                              :limit="1"
                              accept=".mp4"
                              :size="1024*1024*500"
              >
                <template #default>
                  <div class="upload-icon" :style="'background-color:' + (rStore.isFormComplete ? '#f0f0f0' : 'white')">
                    <el-icon>
                      <Plus/>
                    </el-icon>
                  </div>
                </template>
              </UploadFileView>
              <UploadFileView class="upload-view"

                              ref="g3_2"
                              :onFileChanges="g3_2_fileChanges"
                              :limit="1"
                              accept=".mp4"
                              :size="1024*1024*500"
              >
                <template #default>
                  <div class="upload-icon" :style="'background-color:' + (rStore.isFormComplete ? '#f0f0f0' : 'white')">
                    <el-icon>
                      <Plus/>
                    </el-icon>
                  </div>
                </template>
              </UploadFileView>
              <UploadFileView class="upload-view"

                              ref="g3_3"
                              :onFileChanges="g3_3_fileChanges"
                              :limit="1"
                              accept=".mp4"
                              :size="1024*1024*500"
              >
                <template #default>
                  <div class="upload-icon" :style="'background-color:' + (rStore.isFormComplete ? '#f0f0f0' : 'white')">
                    <el-icon>
                      <Plus/>
                    </el-icon>
                  </div>
                </template>
              </UploadFileView>
            </div>
          </td>
        </tr>
        <tr>
          <td class="group-td">
            <div style="margin-left: 20px">团队4</div>
            <div class="item-content">
              <UploadFileView class="upload-view"

                              ref="g4_1"
                              :onFileChanges="g4_1_fileChanges"
                              :limit="1"
                              accept=".mp4"
                              :size="1024*1024*500"
              >
                <template #default>
                  <div class="upload-icon" :style="'background-color:' + (rStore.isFormComplete ? '#f0f0f0' : 'white')">
                    <el-icon>
                      <Plus/>
                    </el-icon>
                  </div>
                </template>
              </UploadFileView>
              <UploadFileView class="upload-view"

                              ref="g4_2"
                              :onFileChanges="g4_2_fileChanges"
                              :limit="1"
                              accept=".mp4"
                              :size="1024*1024*500"
              >
                <template #default>
                  <div class="upload-icon" :style="'background-color:' + (rStore.isFormComplete ? '#f0f0f0' : 'white')">
                    <el-icon>
                      <Plus/>
                    </el-icon>
                  </div>
                </template>
              </UploadFileView>
              <UploadFileView class="upload-view"
                              ref="g4_3"
                              :onFileChanges="g4_3_fileChanges"
                              :limit="1"
                              accept=".mp4"
                              :size="1024*1024*500"
              >
                <template #default>
                  <div class="upload-icon" :style="'background-color:' + (rStore.isFormComplete ? '#f0f0f0' : 'white')">
                    <el-icon>
                      <Plus/>
                    </el-icon>
                  </div>
                </template>
              </UploadFileView>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <el-form-item label="教案" required/>
          </td>
          <td>
            <UploadFileView
                :style="'background-color:' + (rStore.isFormComplete ? '#f0f0f0' : 'white')"
                ref="teachingPlan"
                :onFileChanges="teachingPlan_fileChanges"
                :limit="1"
                accept=".pdf"
                :size="1024*1024*100"
            >
              <template #default>
                <el-image src="/上传icon.png" style="width: 20px;height: 20px"></el-image>
                <el-text size="small" type="info" style="margin-left: 5px">请上传100MB以内的文件</el-text>
              </template>
            </UploadFileView>
          </td>
        </tr>
        <tr>
          <td>
            <el-form-item label="教学实施报告" required/>
          </td>
          <td>
            <UploadFileView
                :style="'background-color:' + (rStore.isFormComplete ? '#f0f0f0' : 'white')"
                ref="teachingReport"
                :onFileChanges="teachingReport_fileChanges"
                :limit="1"
                accept=".pdf"
                :size="1024*1024*100"
            >
              <template #default>
                <el-image src="/上传icon.png" style="width: 20px;height: 20px"></el-image>
                <el-text size="small" type="info" style="margin-left: 5px">请上传100MB以内的文件</el-text>
              </template>
            </UploadFileView>
          </td>
        </tr>
        <tr>
          <td>
            <el-form-item label="专业人才培养方案" required/>
          </td>
          <td>
            <UploadFileView
                :style="'background-color:' + (rStore.isFormComplete ? '#f0f0f0' : 'white')"
                ref="talentTrainingPlan"
                :onFileChanges="talentTrainingPlan_fileChanges"
                :limit="1"
                accept=".pdf"
                :size="1024*1024*100"
            >
              <template #default>
                <el-image src="/上传icon.png" style="width: 20px;height: 20px"></el-image>
                <el-text size="small" type="info" style="margin-left: 5px">请上传100MB以内的文件</el-text>
              </template>
            </UploadFileView>
          </td>
        </tr>
        <tr>
          <td>
            <el-form-item label="课程标准" required/>
          </td>
          <td>
            <UploadFileView
                :style="'background-color:' + (rStore.isFormComplete ? '#f0f0f0' : 'white')"
                ref="courseStandard"
                :onFileChanges="courseStandard_fileChanges"
                :limit="1"
                accept=".pdf"
                :size="1024*1024*100"
            >
              <template #default>
                <el-image src="/上传icon.png" style="width: 20px;height: 20px"></el-image>
                <el-text size="small" type="info" style="margin-left: 5px">请上传100MB以内的文件</el-text>
              </template>
            </UploadFileView>
          </td>
        </tr>
        <tr>
          <td>
            <el-form-item label="教材选用说明" required/>
          </td>
          <td>
            <UploadFileView
                :style="'background-color:' + (rStore.isFormComplete ? '#f0f0f0' : 'white')"
                ref="teachingMaterial"
                :onFileChanges="teachingMaterial_fileChanges"
                :limit="1"
                accept=".pdf"
                :size="1024*1024*100"
            >
              <template #default>
                <el-image src="/上传icon.png" style="width: 20px;height: 20px"></el-image>
                <el-text size="small" type="info" style="margin-left: 5px">请上传100MB以内的文件</el-text>
              </template>
            </UploadFileView>
          </td>
        </tr>

        </tbody>
      </table>
    </el-form>

    <div style="align-self: center;margin-top: 20px">
      <el-button type="primary" style="width: 150px" @click="_onLastStep">上一步</el-button>
      <el-button type="primary" style="width: 150px" @click="onSave">保存</el-button>
      <el-button type="primary" style="width: 150px" @click="onUpload">提交</el-button>
    </div>
  </div>

</template>

<script setup>
import UploadFileView from '@/components/base/UploadFileView.vue'
import {onMounted, ref} from 'vue'
import {ElMessage} from "element-plus";
import {registrationStore} from "@/store/registration_form";
import {userStore} from "@/store/user";

const g1_1 = ref(null)
const g1_2 = ref(null)
const g1_3 = ref(null)
const g2_1 = ref(null)
const g2_2 = ref(null)
const g2_3 = ref(null)
const g3_1 = ref(null)
const g3_2 = ref(null)
const g3_3 = ref(null)
const g4_1 = ref(null)
const g4_2 = ref(null)
const g4_3 = ref(null)
const teachingPlan = ref(null)
const teachingReport = ref(null)
const talentTrainingPlan = ref(null)
const courseStandard = ref(null)
const teachingMaterial = ref(null)

const uStore = userStore()
const rStore = registrationStore()
const props = defineProps({
  onLastStep: Function,
})
const formData = ref({
  team1: [null, null, null],
  team2: [null, null, null],
  team3: [null, null, null],
  team4: [null, null, null],
  teachingPlan: null,
  teachingReport: null,
  talentTrainingPlan: null,
  courseStandard: null,
  teachingMaterial: null
})

function g1_1_fileChanges(files) {
  formData.value.team1[0] = files[0]
}

function g1_2_fileChanges(files) {
  formData.value.team1[1] = files[0]
}

function g1_3_fileChanges(files) {
  formData.value.team1[2] = files[0]
}

function g2_1_fileChanges(files) {
  formData.value.team2[0] = files[0]
}

function g2_2_fileChanges(files) {
  formData.value.team2[1] = files[0]
}

function g2_3_fileChanges(files) {
  formData.value.team2[2] = files[0]
}

function g3_1_fileChanges(files) {
  formData.value.team3[0] = files[0]
}

function g3_2_fileChanges(files) {
  formData.value.team3[1] = files[0]
}

function g3_3_fileChanges(files) {
  formData.value.team3[2] = files[0]
}

function g4_1_fileChanges(files) {
  formData.value.team4[0] = files[0]
}

function g4_2_fileChanges(files) {
  formData.value.team4[1] = files[0]
}

function g4_3_fileChanges(files) {
  formData.value.team4[2] = files[0]
}

function teachingPlan_fileChanges(files) {
  formData.value.teachingPlan = files[0]
}

function teachingReport_fileChanges(files) {
  formData.value.teachingReport = files[0]
}

function talentTrainingPlan_fileChanges(files) {
  formData.value.talentTrainingPlan = files[0]
}

function courseStandard_fileChanges(files) {
  formData.value.courseStandard = files[0]
}

function teachingMaterial_fileChanges(files) {
  formData.value.teachingMaterial = files[0]
}

function _onLastStep() {
  rStore.setUploadFileFormAndSave(formData.value)
  props.onLastStep()
}

import _ from "lodash";

function onSave() {
  if (!formData.value.team1[0] && !formData.value.team1[1] && !formData.value.team1[2]) {
    ElMessage.error('团队1的文件请至少上传一个')
    return
  }
  if (!formData.value.team2[0] && !formData.value.team2[1] && !formData.value.team2[2]) {
    ElMessage.error('团队2的文件请至少上传一个')
    return
  }
  if (!formData.value.team3[0] && !formData.value.team3[1] && !formData.value.team3[2]) {
    ElMessage.error('团队3的文件请至少上传一个')
    return
  }
  if (!formData.value.team4[0] && !formData.value.team4[1] && !formData.value.team4[2]) {
    ElMessage.error('团队4的文件请至少上传一个')
    return
  }
  if (!formData.value.teachingPlan || !formData.value.teachingReport || !formData.value.talentTrainingPlan || !formData.value.courseStandard || !formData.value.teachingMaterial) {
    ElMessage.error('请上传教学计划、教学报告、人才培养计划、课程标准、教材教辅')
    return
  }
  rStore.setUploadFileFormAndSave(formData.value)
  ElMessage.success('保存成功')
}

onMounted(() => {
  rStore.loadRegistrationForm();
  if (rStore.uploadFileForm) {
    formData.value = rStore.uploadFileForm
    let ref1List = [g1_1, g1_2, g1_3, g2_1, g2_2, g2_3, g3_1, g3_2, g3_3, g4_1, g4_2, g4_3]
    let ref2List = [teachingPlan, teachingReport, talentTrainingPlan, courseStandard, teachingMaterial]
    let key1List = ['team1', 'team1', 'team1', 'team2', 'team2', 'team2', 'team3', 'team3', 'team3', 'team4', 'team4', 'team4']
    let key2List = ['teachingPlan', 'teachingReport', 'talentTrainingPlan', 'courseStandard', 'teachingMaterial']
    key1List.forEach((key, index) => {
      if (rStore.uploadFileForm[key][index % 3]) {
        ref1List[index].value.resetFiles([rStore.uploadFileForm[key][index % 3]])
      }
    })
    key2List.forEach((key, index) => {
      if (rStore.uploadFileForm[key]) {
        ref2List[index].value.resetFiles([rStore.uploadFileForm[key]])
      }
    })
  }
})
import {Form, DsItemSub,turnRForm2Form, uploadFile,loadDsItemSubList, submitRegistrationForm} from "@/api/form_api";
import {ElLoading} from 'element-plus'

async function onUpload() {
  onSave()
  ElMessage.success('保存成功')
  let uploadFileForm = rStore.uploadFileForm
  let registrationFrom = rStore.registrationForm;

  let load = ElLoading.service({
    lock: true,
    text: '上传团队1文件中',
    spinner: 'el-icon-loading'
  });
  let resList = [];
  for (let i = 0; i < uploadFileForm.team1.length; i++) {
    //获取文件
    if (!uploadFileForm.team1[i]) {
      continue;
    }

    let file = uploadFileForm.team1[i].raw;
    let res = await uploadFile(file);
    resList.push({
      group: 'team1',
      index: i,
      res: res
    })
  }
  load.close();
  //上传团队2
  load = ElLoading.service({
    lock: true,
    text: '上传团队2文件中',
    spinner: 'el-icon-loading'
  });
  for (let i = 0; i < uploadFileForm.team2.length; i++) {
    if (!uploadFileForm.team2[i]) {
      continue;
    }
    let file = uploadFileForm.team2[i].raw;
    let res = await uploadFile(file);
    resList.push({
      group: 'team2',
      index: i,
      res: res
    })
  }
  load.close();
  //上传团队3
  load = ElLoading.service({
    lock: true,
    text: '上传团队3文件中',
    spinner: 'el-icon-loading'
  });
  for (let i = 0; i < uploadFileForm.team3.length; i++) {
    if (!uploadFileForm.team3[i]) {
      continue;
    }
    let file = uploadFileForm.team3[i].raw;
    let res = await uploadFile(file);
    resList.push({
      group: 'team3',
      index: i,
      res: res
    })
  }
  load.close();
  //上传团队4
  load = ElLoading.service({
    lock: true,
    text: '上传团队4文件中',
    spinner: 'el-icon-loading'
  });
  for (let i = 0; i < uploadFileForm.team4.length; i++) {
    if (!uploadFileForm.team4[i]) {
      continue;
    }
    let file = uploadFileForm.team4[i].raw;
    console.log(file)
    let res = await uploadFile(file);
    console.log(res)
    resList.push({
      group: 'team4',
      index: i,
      res: res
    })
  }
  load.close();

  let teachingPlan = uploadFileForm.teachingPlan;
  if (teachingPlan) {
    load = ElLoading.service({
      lock: true,
      text: '上传教学计划文件中',
      spinner: 'el-icon-loading'
    });
    let res = await uploadFile(teachingPlan.raw);
    resList.push({
      group: 'teachingPlan',
      res: res
    })
    load.close();
  }


  let teachingReport = uploadFileForm.teachingReport;
  if (teachingReport) {
    //上传教学报告
    load = ElLoading.service({
      lock: true,
      text: '上传教学报告文件中',
      spinner: 'el-icon-loading'
    });
    let res = await uploadFile(teachingReport.raw);
    resList.push({
      group: 'teachingReport',
      res: res
    })
    load.close();
  }


  let talentTrainingPlan = uploadFileForm.talentTrainingPlan;
  if (talentTrainingPlan) {
    //上传人才培养计划
    load = ElLoading.service({
      lock: true,
      text: '上传人才培养计划文件中',
      spinner: 'el-icon-loading'
    });
    let res = await uploadFile(talentTrainingPlan.raw);
    resList.push({
      group: 'talentTrainingPlan',
      res: res
    })
    load.close();
  }


  let courseStandard = uploadFileForm.courseStandard;
  if (courseStandard) {
    //上传课程标准
    load = ElLoading.service({
      lock: true,
      text: '上传课程标准文件中',
      spinner: 'el-icon-loading'
    });
    let res = await uploadFile(courseStandard.raw);
    resList.push({
      group: 'courseStandard',
      res: res
    })
    load.close();
  }

  //上传教材选用说明

  let teachingMaterial = uploadFileForm.teachingMaterial;
  if (teachingMaterial) {
    load = ElLoading.service({
      lock: true,
      text: '上传教材选用说明中',
      spinner: 'el-icon-loading'
    });
    let res = await uploadFile(teachingMaterial.raw);
    resList.push({
      group: 'teachingMaterial',
      res: res
    })
    load.close();
  }


  let enrollmentFile = registrationFrom.enrollmentFile;
  if (enrollmentFile) {
    //上传表单 参赛报名表和信息公示
    load = ElLoading.service({
      lock: true,
      text: '上传参赛报名表中',
      spinner: 'el-icon-loading'
    });
    let res = await uploadFile(enrollmentFile.raw);
    resList.push({
      group: 'enrollmentFile',
      res: res
    })
    load.close();
  }

  //上传信息公示
  let informationFile = registrationFrom.informationFile;
  if (informationFile){
    load = ElLoading.service({
      lock: true,
      text: '上传信息公示中',
      spinner: 'el-icon-loading'
    });
    let res = await uploadFile(informationFile.raw);
    resList.push({
      group: 'informationFile',
      res: res
    })
    load.close();
  }
  //console.log(resList)
  let dsItemSubList = loadDsItemSubList(resList,registrationFrom);
  let userId = uStore.user.userId;
  let form = turnRForm2Form(registrationFrom, userId,dsItemSubList);
  let res = await submitRegistrationForm(form,dsItemSubList);
  console.log(res)

}

</script>

<style scoped>


.item-content {
  text-align: left;
  margin-left: 20px;
  margin-bottom: 10px;
  display: flex;
  width: 100px;
  height: 100px;
  margin-top: 10px
}

.el-form-item {
  font-weight: bold;
}

.group-td:before {
  content: '';
  display: block;
  position: relative;
  bottom: 5px;
  margin-left: 1px;
  width: 40px;
  height: 10px;
  background: #ffffff;
}

table tr td {
  border: 1px solid #B9B9B99E;
}

table {
  border-collapse: collapse;
}

.upload-icon {
  width: 80px;
  height: 80px;
  border: 1px dashed #B9B9B99E;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center
}

.upload-view {
  margin-top: 30px;
}
</style>