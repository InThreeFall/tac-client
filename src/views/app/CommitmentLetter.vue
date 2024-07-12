<template>
  <div class="promise-letter">
    <h1>承诺书</h1>
    <ol>
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
      </li>
    </ol>
    <div style="display: flex;justify-content: center;width: 100%;">
      <el-button @click="store.readCommitmentLetter(1)" type="primary">我已阅读并同意</el-button>
      <el-button @click="store.readCommitmentLetter(0)">不同意</el-button>
    </div>

  </div>
</template>

<script setup>
import {userStore} from "@/store/user";
const store = userStore()
import { ref } from 'vue'
const items = ref([
  '一、本人自愿加入专家评委库，并严格遵守其他各项规定和纪律，客观公正地为本次大赛开展评审工作。',
  '二、本人将严格保守大赛评选工作的保密义务，不使用或泄露，也不许可他人使用或披露在评审工作中获悉的企业和团队的基本信息、观点、想法、创意、知识产权、智力成果、技术方法、商业计划、财务信息等商业秘密。',
  '三、本人将严格按照大赛规则、规程，以严谨求学的态度，客观公正、实事求是、独立自主地参与选拔工作，提出评隐意见，并对评港意见的真实性、公正性负责。',
  '四、本人保证设立足够的时间精力，按时参加大赛选拔相关工作，并愿通过电子邮件、手机短信和电等方式提供给大会有关选拔工作的通知信息。',
  '五、本人与参赛企业或队在利害关系，可能影响评审工作的公正，本人将及时向大赛组委会声明共提申通，如发现其他评委也存在同情，本人也将及时向大赛组委会反映情况。',
  '六、未经大赛组委会授权，本人不以任何方式与参赛企业或个人联系。',
  '七、未经大赛组委会授权，本人不以大赛名义参与任何与大赛选拔无关的活动，也不以大赛名义对外发表任何评论。',
  '八、本人担任本次大赛的评委已经取得了应当取得的所有授权、许可、同意、批准，并不会违反对我适用的法律、法规或我已经签订的合同、协议或其他文件。',
  '九、本人承诺只在大赛组委会授权的范围内进行评审工作，不超过权限，并且不利用职务之便为自己、他人以及所在工作机构谋取利益。'
])

</script>

<style scoped>
.promise-letter {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: auto;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

ol {
  list-style-type: decimal;
  padding-left: 2rem;
  line-height: 1.5;
}
</style>