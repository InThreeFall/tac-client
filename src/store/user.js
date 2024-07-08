import {defineStore} from "pinia/dist/pinia";

export const userStore = defineStore('userStore', () => {
    const token = ''
    const permissions = []
    const roles = []
    const dsUser = {
        "userId": 0,
        "userType": 0,
        "readFlag": 0,
        "nickName": "",
        "schoolName": "",
    }
    const user = {
      "createBy": "",
      "createTime": "",
      "updateBy": null,
      "updateTime": null,
      "remark": null,
      "userId": 0,
      "deptId": null,
      "userName": "",
      "nickName": "",
      "email": "",
      "phonenumber": "",
      "sex": "0",
      "avatar": "",
      // "password": "",
      "status": "0",
      "delFlag": "0",
      "loginIp": "",
      "loginDate": "",
      "dept": null,
      "roles": [],
      "roleIds": null,
      "postIds": null,
      "roleId": null,
      "openid": null,
      "admin": false
    };

    return {token,permissions, roles, dsUser, user}
})