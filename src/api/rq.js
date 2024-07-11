import axios from 'axios';

const http = axios.create({
    baseURL: 'http://reg.vip.cpolar.cn', // 设置基础 URL
});

http.interceptors.response.use(
    function (response) {
        const { code, message } = response.data;
        if (code === 200) {
            return response.data;
        }else if(code === 500){
            return response.data;
        }
        return Promise.reject(message);
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default http;