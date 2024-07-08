import {defineStore} from "pinia/dist/pinia";

export const userStore = defineStore('userStore', () => {
    const isLogin = false
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
    function login(token,user,permissions,roles,dsUser){
        this.isLogin = true
        this.token = token
        this.user = user
        this.permissions = permissions
        this.roles = roles
        this.dsUser = dsUser
        localStorage.setItem('token',token)
        localStorage.setItem('user',JSON.stringify(user))
        localStorage.setItem('permissions',JSON.stringify(permissions))
        localStorage.setItem('roles',JSON.stringify(roles))
        localStorage.setItem('dsUser',JSON.stringify(dsUser))
        console.log("登录成功")
    }
    function logout(){
        this.isLogin = false
        this.token = ''
        this.user = {}
        this.permissions = []
        this.roles = []
        this.dsUser = {}
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('permissions')
        localStorage.removeItem('roles')
        localStorage.removeItem('dsUser')
    }
    function reloadByLocalStorage(){
        const token = localStorage.getItem('token')
        if(token){
            const user = JSON.parse(localStorage.getItem('user'))
            const permissions = JSON.parse(localStorage.getItem('permissions'))
            const roles = JSON.parse(localStorage.getItem('roles'))
            const dsUser = JSON.parse(localStorage.getItem('dsUser'))
            this.login(token,user,permissions,roles,dsUser)
        }
    }

    return {token,permissions, roles, dsUser, user, login, logout,isLogin,reloadByLocalStorage}
})