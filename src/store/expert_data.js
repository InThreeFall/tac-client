import {defineStore} from "pinia/dist/pinia";
import {ref} from "vue";

export function DataItem() {
    this.itemId = 0;
    this.title = '';
    this.subTitle = '';
    this.classOne = 0;
    this.classTwo = 0;
    this.school = '';
    this.teacher = '';
    this.mobile = '';
    this.course = 0;
    this.status = 0;
    this.exhibitFlag = 0;
    this.createTime = '';
    this.createBy = '';
    this.updateTime = '';
    this.updateBy = '';
    this.vote = 0;
    this.view = 0;
    this.cover = '';
    this.userId = 0;
    this.isApprove = '';
}

export function createDataItemByDir(dir) {
    let dataItem = new DataItem();
    dataItem.itemId = dir.itemId;
    dataItem.title = dir.title;
    dataItem.subTitle = dir.subTitle;
    dataItem.classOne = dir.classOne;
    dataItem.classTwo = dir.classTwo;
    dataItem.school = dir.school;
    dataItem.teacher = dir.teacher;
    dataItem.mobile = dir.mobile;
    dataItem.course = dir.course;
    dataItem.status = dir.status;
    dataItem.exhibitFlag = dir.exhibitFlag;
    dataItem.createTime = dir.createTime;
    dataItem.createBy = dir.createBy;
    dataItem.updateTime = dir.updateTime;
    dataItem.updateBy = dir.updateBy;
    dataItem.vote = dir.vote;
    dataItem.view = dir.view;
    dataItem.cover = dir.cover;
    dataItem.userId = dir.userId;
    dataItem.isApprove = dir.isApprove;
    return dataItem;
}

export function DataDetail() {
    this.itemId = 0;
    this.title = '';
    this.subTitle = '';
    this.classOne = 0;
    this.classOneName = '';
    this.classTwo = 0;
    this.classTwoName = '';
    this.school = '';
    this.teacher = '';
    this.mobile = '';
    this.course = 0;
    this.status = 0;
    this.exhibitFlag = 0;
    this.createTime = '';
    this.createBy = '';
    this.updateTime = '';
    this.updateBy = '';
    this.vote = 0;
    this.view = 0;
    this.cover = '';
    this.userId = 0;
    this.dsItemSubList = [];
}

export function createDataDetailByDir(dir) {
    let dataDetail = new DataDetail();
    dataDetail.itemId = dir.itemId;
    dataDetail.title = dir.title;
    dataDetail.subTitle = dir.subTitle;
    dataDetail.classOne = dir.classOne;
    dataDetail.classOneName = dir.classOneName;
    dataDetail.classTwo = dir.classTwo;
    dataDetail.classTwoName = dir.classTwoName;
    dataDetail.school = dir.school;
    dataDetail.teacher = dir.teacher;
    dataDetail.mobile = dir.mobile;
    dataDetail.course = dir.course;
    dataDetail.status = dir.status;
    dataDetail.exhibitFlag = dir.exhibitFlag;
    dataDetail.createTime = dir.createTime;
    dataDetail.createBy = dir.createBy;
    dataDetail.updateTime = dir.updateTime;
    dataDetail.updateBy = dir.updateBy;
    dataDetail.vote = dir.vote;
    dataDetail.view = dir.view;
    dataDetail.cover = dir.cover;
    dataDetail.userId = dir.userId;
    dataDetail.dsItemSubList = dir.dsItemSubList;
    return dataDetail;
}


export const expertStore = defineStore('expertStore', () => {
    const nowList = ref([]);

    function setNowList(list) {
        nowList.value = list;
    }

    return {
        nowList,
        setNowList
    }
})