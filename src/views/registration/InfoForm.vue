<template>
  <div style="display: flex;flex-direction: column;width: 50%">
    <el-button
       style= "justify-content: right;margin-bottom: 10px"
        v-if="rStore.isHaveRegistrationForm===true" text type="primary"
        @click="rStore.isHaveRegistrationForm = false">
      编辑
    </el-button>
    <el-form :model="formData" :disabled="rStore.isHaveRegistrationForm">
      <el-form-item label="作品名称" required prop="workName">
        <el-input v-model="formData.workName" placeholder="请输入作品名称"></el-input>
      </el-form-item>

      <el-form-item label="参赛车组" required style="width: 500px;">
        <el-radio-group v-model="formData.competitionGroup">
          <el-radio :label="1">思政课程组</el-radio>
          <el-radio :label="2">公共基础课程组(不含思政)</el-radio>
          <el-radio :label="3">专业技能课程一组</el-radio>
          <el-radio :label="4">专业技能课程二组</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="参赛学校" required>
        <el-input v-model="formData.schoolName" placeholder="请输入参赛学校名称"></el-input>
      </el-form-item>

      <el-form-item label="参赛团队" required>
        <el-input v-model="formData.teamName" type="textarea" placeholder="请输入,多人用逗号隔开"></el-input>
      </el-form-item>

      <el-form-item label="参赛教学团队资格" required>
        <br>
        <div style="margin-left: -120px;">
          <el-checkbox-group v-model="formData.qualifications">
            <el-checkbox label="1">1、团队每个成员教龄3年以上，近3年实际承担参赛课程或相关课程教学任务；</el-checkbox>
            <br>
            <el-checkbox label="2" style="margin-bottom: 60px">
              <div style="margin-top: 85px">
                2、35岁以下（含）的教师不少于1人或思政课（二选一）；
              </div>
              <el-form-item label="">
                <el-radio-group v-model="formData.q2" style="flex-direction: column;margin-top: 10px;margin-bottom: 10px">
                  <el-radio label="1">35岁以下(含)的教师不少于1人</el-radio>
                  <el-radio label="2" style="margin-left: -176px">思政课</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-checkbox>
            <br>
            <el-checkbox label="3">
              <div style="margin-top: 3px">
                3、具备高级专业技术职务或取得高级职业技能等级证书的教师不少于1人；
              </div>
            </el-checkbox>
            <br>
            <el-checkbox label="4">
              <div style="margin-top: 15px">
                4、专业课程的教学团队中“双师型”教师占比在50%以上；企业兼职教师数量不超过1名；<br>（此项可选择答案，不是必选项）
              </div>
            </el-checkbox>
            <br>
            <el-checkbox label="5" style="margin-bottom: 60px">
              <p style="margin-top: 80px">
                5、近2年曾获得过全国职业院校技能大赛教学能力比赛一等奖的教学团队各成员不能报名参赛，<br>其所有成员所在学校不能以同一公共基础课程报参加公共基础
                课程组,或不能以同一专业报参加<br>专业（技能）课程组的
                比赛； 近2年曾获国赛二等奖及以上的获奖的教学团队需要调整参赛方<br>能报名
                参赛（至多保留2名原成员，并必须有新成员）。
                近2年获省赛奖励的作品，未作重大修<br>改不得参赛。获得2022年某市中等职业学校教学能力比赛一等奖的
                作品，不能参赛。
              </p>
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </el-form-item>

      <!-- 参赛报名表文件上传 -->
      <el-form-item label="参赛报名表" required>
        <UploadFileView
            ref="informationUploadDom"
            :onFileChanges="handleInformationChange"
            :limit="1"
            accept=".pdf"
            :size="1024*1024*100"
        ></UploadFileView>
      </el-form-item>

      <!-- 信息公示文件上传 -->
      <el-form-item label="信息公示" required>
        <UploadFileView
            ref="enrollmentUploadDom"
            :onFileChanges="handleEnrollmentChange"
            :limit="1"
            accept=".pdf"
            :size="1024*1024*100"
        ></UploadFileView>
      </el-form-item>

      <el-form-item label="联系方式" required>
        <el-input v-model="formData.contactInfo" placeholder="团队负责人联系电话"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" style="margin-top: 10px" @click="submitForm">下一步</el-button>
  </div>

</template>

<script setup>
import {onMounted, ref, watch} from 'vue';
import UploadFileView from "@/components/base/UploadFileView.vue";
import {registrationStore} from "@/store/registration_form";
const props = defineProps({
  onSubmit: {
    type: Function,
    required: true
  }
});
const rStore = registrationStore()
const informationUploadDom = ref(null);
const enrollmentUploadDom = ref(null);
const formData = ref({
  workName: '',
  competitionGroup: '',
  schoolName: '',
  teamName: '',
  qualifications: [],
  q2: '',
  contactInfo: '',
  enrollmentFile: null,
  informationFile: null
});

function verifyForm() {
  if (formData.value.workName === '') {
    throw "作品名称不能为空"
  }
  if (formData.value.competitionGroup === '') {
    throw '参赛组别不能为空';
  }
  if (formData.value.schoolName === '') {
    throw '学校名称不能为空';
  }
  if (formData.value.teamName === '') {
    throw '团队名称不能为空';
  }
  if (formData.value.qualifications.length === 0) {
    throw '请至少选择一项资格要求';
  }
  if (formData.value.q2 === '' && formData.value.qualifications.includes('2')) {
    throw '请填写资格要求2';
  }
  if (formData.value.contactInfo === '') {
    throw '联系方式不能为空';
  }
  if (formData.value.enrollmentFile === null) {
    throw '请上传参赛报名表';
  }
  if (formData.value.informationFile === null) {
    throw '请上传信息公示';
  }
}

function submitForm() {
  try {
    verifyForm();
    rStore.setRegistrationFormAndSave(formData.value);
    props.onSubmit();
  } catch (e) {
    ElMessage.error(e);
  }
}

function handleInformationChange(fileList) {
  formData.value.informationFile = fileList[0];
}

function handleEnrollmentChange(fileList) {
  formData.value.enrollmentFile = fileList[0];
}
watch(() => formData.value.qualifications, (newVal) => {
  formData.value.qualifications = newVal;
  if (formData.value.qualifications.includes('2')) {
    if (formData.value.q2 === ''){
      formData.value.q2 = '1';
    }
  }else{
    formData.value.q2 = '';
  }
}, {deep: true})
watch(() => formData.value.q2, (newVal) => {
  formData.value.q2 = newVal;
  if (formData.value.q2 !== ''){
    if(!formData.value.qualifications.includes('2')) {
      formData.value.qualifications.push('2');
    }
  }
})
onMounted(() => {
  rStore.loadRegistrationForm();
  if (rStore.registrationForm) {
    formData.value = rStore.registrationForm;
    if (formData.value.informationFile) {
      informationUploadDom.value.resetFiles([formData.value.informationFile]);
    }
    if (formData.value.enrollmentFile) {
      enrollmentUploadDom.value.resetFiles([formData.value.enrollmentFile]);
    }
    console.log(formData.value)
  }
})
</script>