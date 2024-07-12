import {defineStore} from "pinia/dist/pinia";
import {ref} from "vue";
function User(){
    this.createBy = ""
    this.createTime = ""
    this.updateBy = null
    this.updateTime = null
    this.remark = null
    this.userId = 0
    this.deptId = null
    this.userName = ""
    this.nickName = ""
    this.email = ""
    this.phonenumber = ""
    this.sex = "0"
    this.avatar = ""
    // this.password = ""
    this.status = "0"
    this.delFlag = "0"
    this.loginIp = ""
    this.loginDate = ""
    this.dept = null
    this.roles = []
    this.roleIds = null
    this.postIds = null
    this.roleId = null
    this.openid = null
    this.admin = false
}

function DsUser(){
    this.userId = 0
    this.userType = 0
    this.readFlag = 0
    this.nickName = ""
    this.schoolName = ""
}
export const userStore = defineStore('userStore', () => {
    const isLogin = ref(false)
    const token = ref('')
    const permissions = ref([])
    const roles = ref([])
    const dsUser = ref(new DsUser())
    const user = ref(new User());
    function saveLoginInfo(t,u,p,r,ds){ //token,user,permissions,roles,dsUser
        if (t === undefined || t === null || t === '') {
            isLogin.value = false
            return
        }
        isLogin.value = true
        token.value = t
        user.value = u
        permissions.value = p
        roles.value = r
        dsUser.value = ds
        localStorage.setItem('token',token.value)
        localStorage.setItem('user',JSON.stringify(user.value))
        localStorage.setItem('permissions',JSON.stringify(permissions.value))
        localStorage.setItem('roles',JSON.stringify(roles.value))
        localStorage.setItem('dsUser',JSON.stringify(dsUser.value))
    }
    function clearLoginInfo(){
        isLogin.value = false
        token.value = ''
        permissions.value = []
        roles.value = []
        dsUser.value = new DsUser()
        user.value = new User()
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('permissions')
        localStorage.removeItem('roles')
        localStorage.removeItem('dsUser')
    }
    function reloadByLocalStorage(){
        const token = localStorage.getItem('token')
        if(token){
            const u = JSON.parse(localStorage.getItem('user'))
            const p = JSON.parse(localStorage.getItem('permissions'))
            const r = JSON.parse(localStorage.getItem('roles'))
            const d = JSON.parse(localStorage.getItem('dsUser'))
            saveLoginInfo(token,u,p,r,d)
        }
    }

    function readCommitmentLetter(value){
        dsUser.value.readFlag = value
        localStorage.setItem('dsUser',JSON.stringify(dsUser.value))
    }

    return {
        isLogin,
        token,
        permissions,
        roles,
        dsUser,
        user,
        saveLoginInfo,
        clearLoginInfo,
        reloadByLocalStorage,
        readCommitmentLetter
    }
})