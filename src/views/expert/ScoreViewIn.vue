<template>
  <div>
    <div class="review-container">
      <h2 class="review-title">评审</h2>
      <div class="review-table-wrapper">
        <table class="review-table">
          <thead class="review-table-head">
          <tr>
            <th class="review-table-cell">一级指标</th>
            <th class="review-table-cell">二级指标</th>
            <th class="review-table-cell">评审标准</th>
            <th class="review-table-cell">各项得分</th>
            <th class="review-table-cell">总得分</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="review-table-cell" rowspan="6" style="text-align: center">2023年某某职业院校技能<br>大赛教学能力比赛评分指标(100分)</td>
            <td class="review-table-cell" rowspan="1" style="text-align: center">教学实施报告 <br>(20分)</td>
            <td class="review-table-cell">
              1.教学理念先进，教学设计科学合理（4分）<br />
              2.教学实施任务具体，实施过程设计合理，教学手段创新（4分）<br />
              3.教学资源设计规范，资源类型多样（4分）<br />
              4.教学评价方法规范，改进措施针对性强，扎实有效（4分）<br />
              5.教学反思深刻，育人效果显著，符合实际（4分）
            </td>
            <td class="review-table-cell rinput"><el-input v-model="form.score.baogao" type="text" class="review-input" /></td>
            <td class="review-table-cell" rowspan="6" style="text-align: center">{{form.total}}</td>
          </tr>
          <tr>
            <td class="review-table-cell" rowspan="1" style="text-align: center">教案<br> (20分)</td>
            <td class="review-table-cell">
              1.教案要素完整，版式规范，详略得当（4分）<br />
              2.课程内容系统设计，有机联系，有利学生的职业综合素养（4分）<br />
              3.教学方法灵活多样，教学手段创新（4分）<br />
              4.教学过程设计合理，教学活动组织得当（4分）<br />
              5.教学评价科学合理，育人效果显著（4分）
            </td>
            <td class="review-table-cell rinput"><el-input v-model="form.score.jiaoan" type="text" class="review-input" /></td>
          </tr>
          <tr>
            <td class="review-table-cell" rowspan="1" style="text-align: center">视频资源<br> (40分)</td>
            <td class="review-table-cell">
              1.课程内容丰富，镜头清晰（12分）<br />
              2.呈现形式多样，使用效果良好，体现教学方法（7分）<br />
              3.教学设计合理，反映师生实际教学状态（7分）<br />
              4.教学资源丰富，教学方法多样且应用恰当，体现教学效果（7分）<br />
              5.资源使用效果良好，展现团队优势（7分）
            </td>
            <td class="review-table-cell rinput"><el-input v-model="form.score.shipin" type="text" class="review-input" /></td>
          </tr>
          <tr>
            <td class="review-table-cell" rowspan="1" style="text-align: center">专业人才培养方案<br> (8分)</td>
            <td class="review-table-cell">
              1.符合国家文件要求，科学规范制定（3分）<br />
              2.课程体系完整，课程结构合理，文本规范严谨（3分）<br />
              3.体现职业特色，明确实施方案（2分）
            </td>
            <td class="review-table-cell rinput"><el-input v-model="form.score.fangan" type="text" class="review-input" /></td>
          </tr>
          <tr>
            <td class="review-table-cell" rowspan="1" style="text-align: center">课程标准 (或适应标准)<br> (8分)</td>
            <td class="review-table-cell">
              1.紧密联系教育部高职教育教学标准（3分）<br />
              2.内容完整，详略得当（3分）<br />
              3.具有时代特色，体现学科（专业）技术领域发展（2分）
            </td>
            <td class="review-table-cell rinput"><el-input v-model="form.score.biaozhun" type="text" class="review-input" /></td>
          </tr>
          <tr>
            <td class="review-table-cell" rowspan="1" style="text-align: center">教材选用说明<br> (4分)</td>
            <td class="review-table-cell">
              1.符合国家关于教材使用相关规定要求（2分）<br />
              2.明确教材使用计划与机制执行情况（2分）
            </td>
            <td class="review-table-cell rinput"><el-input v-model="form.score.shuoming" type="text" class="review-input" /></td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="review-comments">
        <h3 class="review-comments-title">评审意见</h3>
        <el-input v-model="form.comments" type="textarea" class="review-textarea" placeholder="请输入"></el-input>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, watch} from 'vue'
const form = ref({
  itemId: '',
  score: {
    "baogao": 0,
    "jiaoan": 0,
    "shipin": 0,
    "fangan": 0,
    "biaozhun": 0,
    "shuoming": 0,
  },
  total: 0,
  comments: '',
})
watch(form, (val) => {
  form.value.total = Object.values(val.score).reduce((acc, cur) => Number(acc) + Number(cur), 0)
}, {deep: true})

function getData() {
  return form.value
}
defineExpose({
  getData
})

</script>

<style scoped>
.review-container {
  padding: 1rem;
}
.review-title {
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 1rem;
}
.review-table-wrapper {
  overflow-x: auto;
}
.review-table {
  min-width: 100%;
  border: 1px solid #cccccc;
}
.review-table-head {
  background-color: #cccccc;
  color: #666666;
}
.review-table-cell {
  border: 1px solid #cccccc;
  padding: 0.5rem;
}
.review-input {
  text-align: center;
  width: 80%;
}
.rinput{
  width: 60px;
  text-align: center;
}
.review-comments {
  margin-top: 1rem;
}
.review-comments-title {
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}
.review-textarea {
  width: 100%;
}
table {
  border-collapse: collapse;
}
table, th, td {
  border: none;
}
</style>