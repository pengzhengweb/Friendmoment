import axios from 'axios';
import router from 'react-router-dom';


//请求拦截
axios.interceptors.request.use(
    config => {
        if(localStorage.wxpyqToken){
            config.headers.Authorization = localStorage.wxpyqToken;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

//响应拦截
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        //错误提醒
        const {status} = error.response;
        if(400 === status){
            alert("token过期，请重新登陆！");
            //清除token
            localStorage.removeIte("wxpyqToken");
            router.push('/login');
        }else{
            alert(error.response.data);
        }
        return Promise.reject(error);
    }
);

export default axios;

