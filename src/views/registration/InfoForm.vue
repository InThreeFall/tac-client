<template>
  <div>
    <el-form :model="formData">
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
              <el-radio-group v-model="formData.q2" style="flex-direction: column;margin-top: 10px;margin-bottom: 10px">
                <el-radio :label="1">35岁以下(含)的教师不少于1人</el-radio>
                <el-radio :label="2" style="margin-left: -176px">思政课</el-radio>
              </el-radio-group>
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
            :onFileChanges="handleInformationChange"
            :limit="1"
            accept=".pdf"
            :size="1024*1024*100"
        ></UploadFileView>
      </el-form-item>

      <!-- 信息公示文件上传 -->
      <el-form-item label="信息公示" required>
        <UploadFileView
            :onFileChanges="handleEnrollmentChange"
            :limit="1"
            accept=".pdf"
            :size="1024*1024*100"
        ></UploadFileView>
      </el-form-item>

      <el-form-item label="联系方式" required>
        <el-input v-model="formData.contactInfo" placeholder="团队负责人联系电话"></el-input>
      </el-form-item>

      <el-button type="primary" style="margin-left: 50px" @click="submitForm">提交</el-button>
    </el-form>
  </div>

</template>

<script setup>
import {ref} from 'vue';
import UploadFileView from "@/components/base/UploadFileView.vue";

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

function submitForm(){
  console.log(formData.value);
}
function handleInformationChange(fileList){
  formData.value.informationFile = fileList[0];
}
function handleEnrollmentChange(fileList){
  formData.value.enrollmentFile = fileList[0];
}
</script>