<template>
  <PaperView>
    <div style="margin-bottom: 20px">
      <div style="font-size: 30px;font-weight: bold;color: black">我叫MT</div>
      <div>
        <el-text>所属分类:
          <el-text style="color: black">{{ dataDetail.classOneName }}</el-text>
        </el-text>
        <el-text style="margin-left: 20px">提交时间:
          <el-text style="color: black">{{ dataDetail.createTime }}</el-text>
        </el-text>
      </div>
    </div>
    <el-row :gutter="0" type="flex">
      <el-col :span="8">
        <div class="title-cell" style="height:100%;align-content: start">
          课堂实录
        </div>
      </el-col>
      <el-col :span="16">
        <div class="video-grid" style="height:100%">
          <div v-for="(ds, index) in dataDetail.dsItemSubList" :key="index">
            <div v-if="ds.fileType===1 && ds.url!=='1'" style="margin: 10px">
              <video controls :src="'http://reg.vip.cpolar.cn' + ds.url"></video>
              <div class="customFileSlot">{{ ds.subTitle }}</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="0" type="flex">
      <el-col :span="8">
        <div class="title-cell" style="height:100%;">
          教案
        </div>
      </el-col>
      <el-col :span="16">
        <div class="video-grid" style="height:100%">
          <DocumentDownLink class="dl-link" :title="jiaoan.subTitle" :url="'http://reg.vip.cpolar.cn'+jiaoan.url"/>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="0" type="flex">
      <el-col :span="8">
        <div class="title-cell" style="height:100%">
          教学实施报告
        </div>
      </el-col>
      <el-col :span="16">
        <div class="video-grid" style="height:100%">
          <DocumentDownLink class="dl-link" :title="baogao.subTitle" :url="'http://reg.vip.cpolar.cn'+baogao.url"/>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="0" type="flex">
      <el-col :span="8">
        <div class="title-cell" style="height:100%">
          专业人才培养方案
        </div>
      </el-col>
      <el-col :span="16">
        <div class="video-grid" style="height:100%">
          <DocumentDownLink class="dl-link" :title="fangan.subTitle" :url="'http://reg.vip.cpolar.cn'+fangan.url"/>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="0" type="flex">
      <el-col :span="8">
        <div class="title-cell" style="height:100%">
          课程标准
        </div>
      </el-col>
      <el-col :span="16">
        <div class="video-grid" style="height:100%">
          <DocumentDownLink class="dl-link" :title="biaozhun.subTitle" :url="'http://reg.vip.cpolar.cn'+biaozhun.url"/>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="0" type="flex">
      <el-col :span="8">
        <div class="title-cell" style="height:100%">
          教学选用说明
        </div>
      </el-col>
      <el-col :span="16">
        <div class="video-grid" style="height:100%">
          <DocumentDownLink class="dl-link" :title="shuoming.subTitle" :url="'http://reg.vip.cpolar.cn'+shuoming.url"/>
        </div>
      </el-col>
    </el-row>
  </PaperView>
  <PaperView>
    <div>
      <ScoreViewIn ref="scoreIn"></ScoreViewIn>
    </div>
    <div style="text-align: center;width: 100%">
      <el-button type="primary" @click="goBack">上一个</el-button>
      <el-button type="primary" @click="goSave">保存</el-button>
      <el-button type="primary" @click="goNext">下一个</el-button>
    </div>
  </PaperView>
</template>

<script setup>
import PaperView from "@/components/base/PaperView.vue";
import ScoreViewIn from "@/views/expert/ScoreViewIn.vue";
import DocumentDownLink from "@/components/base/DocumentDownLink.vue";
import router from "@/router/index";
import {queryDetail} from "@/api/expert_api";
import {ElMessageBox, ElMessage} from 'element-plus';
import {expertStore} from "@/store/expert_data";

const eStore = expertStore();
import {createDataDetailByDir, DataDetail} from "@/store/expert_data";
import {onMounted, ref} from "vue";
import {approveItem} from "@/api/expert_api";



function AskSave(f) {
  //是否保存
  ElMessageBox.confirm('是否保存当前分数', '提示', {
    confirmButtonText: '保存',
    cancelButtonText: '不保存',
    type: 'warning'
  }).then(() => {
    save();
    f();
    ElMessage.success('保存成功');
  }).catch(() => {
    f();
    ElMessage.success('已取消保存');
  });
}

function goReload(itemId){
  setTimeout(() => {
    router.push({name: 'Score', query: {itemId: itemId}});
  }, 500);
  router.push({name: 'home1'});
}

function goNext() {
  AskSave(() => {
    let idx = eStore.nowList.findIndex((item) => Number(item.itemId) === Number(itemId.value));
    if (idx < eStore.nowList.length - 1) {
      goReload(eStore.nowList[idx + 1].itemId);
    } else {
      ElMessage.info('已经是最后一个了');
    }
  });
}

function goBack() {
  AskSave(() => {
    let idx = eStore.nowList.findIndex((item) => Number(item.itemId) === Number(itemId.value));
    if (idx > 0) {
      goReload(eStore.nowList[idx - 1].itemId);
    } else {
      ElMessage.info('已经是第一个了');
    }
  });
}

async function goSave() {
  AskSave();
}

async function save(){
  let res = await approveItem(itemId.value,
      form.comments,
      form.score.baogao,
      form.score.jiaoan,
      form.score.shipin,
      form.score.fangan,
      form.score.biaozhun,
      form.score.shuoming);
  if (res.code === 200) {
    ElMessage.success('保存成功');
  } else {
    ElMessage.error('保存失败'+res.msg);
  }
}



const scoreIn = ref(null);

const itemId = ref(0);
const dataDetail = ref(new DataDetail());

const jiaoan = ref({});
const baogao = ref({});
const fangan = ref({});
const biaozhun = ref({});
const shuoming = ref({});

async function getDetail() {
  let res = await queryDetail(itemId.value);
  console.log(res.data)
  dataDetail.value = createDataDetailByDir(res.data);
  jiaoan.value = dataDetail.value.dsItemSubList.filter(item => item.keyWord === 'jiaoan')[0];
  baogao.value = dataDetail.value.dsItemSubList.filter(item => item.keyWord === 'baogao')[0];
  fangan.value = dataDetail.value.dsItemSubList.filter(item => item.keyWord === 'fangan')[0];
  biaozhun.value = dataDetail.value.dsItemSubList.filter(item => item.keyWord === 'biaozhun')[0];
  shuoming.value = dataDetail.value.dsItemSubList.filter(item => item.keyWord === 'shuoming')[0];

}
onMounted(() => {
  console.log(router.currentRoute.value.query.itemId)
  itemId.value = router.currentRoute.value.query.itemId;
  getDetail();
});
</script>

<style scoped>

.title-cell {
  text-align: right;
  font-size: 16px;
  font-weight: normal;
  padding-right: 10px;
  flex: 1;
  border: 1px solid #9D9D9D61;
  align-content: center;
}

.video-grid {
  display: flex;
  flex-wrap: wrap;

  border: 1px solid #9D9D9D61;
  box-shadow: 0 0 1px #9D9D9D61;
  flex: 1;
}

.customFileSlot {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 300px;
}

.dl-link {
  margin-left: 20px;
}
</style>