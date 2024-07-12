<template>
  <PaperView>
    <div class="header">
      <h2 style="position:relative;left: 20px;top: -10px">专家评审您好！</h2>
      <p style="position: relative;left: 20px;bottom: 20px">您评审的分类为：
        {{getGroup()}}</p>
    </div>
    <div style="margin-top: 20px">
      <el-form inline :model="filterData">
        <el-form-item label="作品名称">
          <el-input v-model="title" placeholder="请输入作品名称" @input="handleFilter"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="selectApprove" placeholder="请选择状态" style="width: 100px" @change="handleFilter">
            <el-option
                v-for="option in isApprove"
                :key="option.value"
                :label="option.label"
                :value="option.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <el-table :data="filteredItems"
                style="width: 100%;"
                :header-cell-style="{ backgroundColor: '#f0f1f7', color: '#333333', fontSize: '14px', textAlign: 'left', }">
        <el-table-column type="index" label="序号" width="80" align="left"></el-table-column>
        <el-table-column prop="title" label="作品名称" width="400" align="left"></el-table-column>
        <el-table-column prop="createTime" label="提交时间" align="left">
          <template #default="{row}">
            <span style="color: #8c8c8c">{{ row.createTime }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="isApprove" label="得分" align="left">
          <template #default="{row}">
            <span :style="{color: row.isApprove === '' ? '#ff4b4b' : '#5993ff'}">
              {{ row.isApprove === "" ? '未评审' : '已评审' }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="action" label="操作" align="left">
          <template #default="{row}">
            <router-link :to="{ name: 'Score', query: { itemId: row.itemId }}">
              <el-button type="primary" size="mini" text>
                {{ row.isApprove === "" ? '评审' : '查看'}}
              </el-button>
            </router-link>

          </template>
        </el-table-column>
      </el-table>
      <!--      分页-->
      <div style="display: flex;justify-content: right;flex-direction: row;margin-top: 30px;align-items: center;">
        <div style="font-size: 13px">共 {{ filteredItems.length }} 条</div>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pageSize"
            layout="prev, pager,next"
            :total="filteredItems.length"
        >
        </el-pagination>
        <div style="font-size: 13px">前往
          <el-input style="font-size: 13px;width: 40px;text-align: center;" v-model="currentPage" min="1"
                    @change="handleCurrentChange"></el-input>
          页
        </div>
      </div>
    </div>
  </PaperView>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue';
import {DataItem, createDataItemByDir} from '@/store/expert_data'
import PaperView from '@/components/base/PaperView.vue';
import {queryList} from '@/api/expert_api';
import {userStore} from "@/store/user";
import {expertStore} from "@/store/expert_data";
//分页
const eState = expertStore();
const uState = userStore();
const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(0);
const items = ref([]);
const title = ref('');
const selectApprove = ref('0');
const isApprove = ref([{value: '0', label: '未评审'}, {value: '1', label: '已评审'}]);
const filterData = ref({title, selectApprove});

// 筛选后的数据
const filteredItems = ref(items.value);

async function handleFilter() {
  await getData();
}

async function getData() {
  const res = await queryList(currentPage.value, pageSize.value
      , selectApprove.value, title.value);
  const dirs = res.data.rows
  items.value = dirs.map(dir => createDataItemByDir(dir));
  filteredItems.value = items.value;
  eState.setNowList(items.value);
}

const handleSizeChange = (val) => {
  pageSize.value = val;
};
const handleCurrentChange = (val) => {
  currentPage.value = val;
};
function getGroup(){
  let type = uState.dsUser.approveType
  if(type === 1){
    return '公共基础课程组'
  }else if(type === 2){
    return '专业技能课程一组'
  }else if (type === 3) {
    return '专业技能课程二组'
  }else if (type === 0){
    return '思政课组'
  }
}
onMounted(() => {
  getData();
});
</script>

<style scoped>
.header {
  width: 100%;
  height: 70px;
  background: url('/public/ExperiViewBG.png') no-repeat center center;
  color: #eaeaea;
  position: relative;
  bottom: 20px;
  padding: 10px;
}
</style>