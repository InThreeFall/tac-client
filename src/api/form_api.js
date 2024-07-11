import http from './rq';

export class Form{
    constructor(title,subTitle,classOne,school,teacher,mobile,userId,dsItemSubList,baomingbiao,xinxigongshi){
        this.title = title;
        this.subTitle = subTitle;
        this.classOne = classOne;
        this.school = school;
        this.teacher = teacher;
        this.mobile = mobile;
        this.userId = userId;
        this.dsItemSubList = dsItemSubList;
        this.baomingbiao = baomingbiao;
        this.xinxigongshi = xinxigongshi;
    }
}

export class DsItemSub{
    constructor(keyWord,url,fileType,subTitle){
        this.keyWord = keyWord;
        this.url = url;
        this.fileType = fileType;
        this.subTitle = subTitle;
    }


}
function creatCheck(choose){
    let url = 1;
    if (choose === 1 || choose ==="1"){
        url = 1;
    }else if(choose === 2 || choose ==="2"){
        url = 2;
    }else{
        throw new Error("choose must be 1 or 2");
    }
    return new DsItemSub("check"+url,url,url,"");
}
export function turnRForm2Form(rf,uId,dsItemSubList){
    let title = rf.workName;
    let subTitle = '';
    let classOne = rf.competitionGroup;
    let school = rf.schoolName;
    let teacher = '';
    let mobile = rf.contactInfo;
    let userId = uId;
    let baomingbiao = '';
    let xinxigongshi = '';
    for(let i=0;i<dsItemSubList.length;i++){
        if(dsItemSubList[i].keyWord === "baomingbiao"){
            baomingbiao = dsItemSubList[i].url;
        }else if(dsItemSubList[i].keyWord === "xinxigongshi"){
            xinxigongshi = dsItemSubList[i].url;
        }
    }
    return new Form(title,subTitle,classOne,school,teacher,mobile,userId,dsItemSubList,baomingbiao,xinxigongshi);
}
export function loadDsItemSubList(uploadRes,rf){
    let dsItemSubList = [];
    for(let resItem of uploadRes){
        let keyWord = "";
        let subTitle = "";
        let fileType = -1;
        let isRight = false;
        if(resItem.group==="team1"){
            keyWord = "video"+(Number(resItem.index)+1);
            subTitle = "da.mp4";
            fileType = 1;
            isRight = true;
        }else if(resItem.group==="team2"){
            keyWord = "video"+(Number(resItem.index)+4);
            subTitle = "da.mp4";
            fileType = 1;
            isRight = true;
        }else if(resItem.group==="team3"){
            keyWord = "video"+(Number(resItem.index)+7);
            subTitle = "da.mp4";
            fileType = 1;
            isRight = true;
        }else if(resItem.group==="team4"){
            keyWord = "video"+(Number(resItem.index)+10);
            subTitle = "da.mp4";
            fileType = 1;
            isRight = true;
        }else if(resItem.group==="teachingPlan"){
            keyWord = "jiaoan";
            subTitle = "教案文档.pdf";
            fileType = 2;
            isRight = true;
        }else if(resItem.group==="teachingReport"){
            keyWord = "baogao";
            subTitle = "报告文档.pdf";
            fileType = 2;
            isRight = true;
        }else if(resItem.group==="talentTrainingPlan") {
            keyWord = "fangan";
            subTitle = "接口文档.pdf";
            fileType = 2;
            isRight = true;
        }else if(resItem.group==="courseStandard") {
            keyWord = "biaozhun";
            subTitle = "标准文档.pdf";
            fileType = 2;
            isRight = true;
        }else if (resItem.group==="teachingMaterial") {
            keyWord = "shuoming";
            subTitle = "说明文档.pdf";
            fileType = 2;
            isRight = true;
        }else if (resItem.group==="enrollmentFile") {
            keyWord = "baomingbiao";
            subTitle = "报名表文档.pdf";
            fileType = 2;
            isRight = true;
        }else if (resItem.group==="informationFile") {
            keyWord = "xinxigongshi";
            subTitle = "信息公示文档.pdf";
            fileType = 2;
            isRight = true;
        }
        if(isRight){
            resItem.res.url = "/"+resItem.res.url.substring(resItem.res.url.indexOf("profile"));
            dsItemSubList.push(new DsItemSub(keyWord,resItem.res.url,fileType,subTitle));
        }
    }

    let ds = creatCheck(rf.q2);
    console.log(ds);
    dsItemSubList.push(ds);
    return dsItemSubList;
}
export function uploadFile(file) {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    const formData = new FormData();
    formData.append('file', file);
    return http.post('/common/upload', formData, config);
}

export function submitRegistrationForm(form,dsItemSubList) {
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token'),
            'Content-Type': 'application/json',
            'charset': 'utf-8'
        }
    }
    const data = {
        "title": form.title,
        "subTitle": form.subTitle,
        "classOne": form.classOne,
        "school": form.school,
        "teacher": form.teacher,
        "mobile": form.mobile,
        "userId": form.userId,
        "dsItemSubList":dsItemSubList,
        "baomingbiao":form.baomingbiao,
        "xinxigongshi":form.xinxigongshi,
    }
    return http.post('/biz/dsitems/insert', data, config);
}