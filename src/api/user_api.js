import http from './rq';

export function updatePassword(oldPassword, newPassword) {
    console.log("修改密码",oldPassword, newPassword);
    return {
        code: 200,
        message: '修改成功'

    };
}


export function login(username, password) {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return http.post('/login', {username, password}, config);
}

export function getInfo() {
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token'),
        }
    }
    return http.get('/getInfo', config);
}