import axios from 'axios';
import Qs from 'qs'; //post 的 序列化
// import {Message,Loading} from 'element-ui';

/*引用qs*/
/*Vue.prototype.$qs = qs
this.$qs.stringify*/

// 设置请求超时时间
axios.defaults.timeout = 5000;

// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截
axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么 验证token之类的

    // Loading.service(true);
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.error(error);
});

// 响应拦截
axios.interceptors.response.use(response => {
    // console.log(response.data);
    // console.log(response);

    // 对响应数据做点什么
    // console.log(response.data.status);
    if (response.data.status == 3) {
        console.log(response +'status == 3');
    }
    if (response.data.status == 0) {
        console.log(`${response.data}  status == 0`);
    }
    if(!response.data.info){
        console.log('暂无权限');
        // Message.error('无操作权限，请联系管理员！');
    }
    return response;
}, error => {
    // 对响应错误做点什么
    console.log(error);
    return Promise.reject(error);
});

let http = {
    post:'',
    get:'',
}

http.post = function (api,data){
    let params = Qs.stringify(data);
    return new Promise((resolve , rejcct )=>{
        axios.post(api, params).then(res=>{
            resolve(res);
        })
    })
}

http.get = function (api,data){
    let params = Qs.stringify(data);
    return new Promise((resolve , rejcct )=>{
        axios.get(api, params).then(res=>{
            resolve(res);
        })
    })
}

export default http

/*

// 封装get方法和post方法
/!**
 *出处： https://www.cnblogs.com/hs610/p/10842866.html
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 *!/
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
            // Loading.service(true).close();
            //  Message({message: '请求成功', type: 'success'});
        }).catch(err => {
            reject(err.data);
            console.log(url,err);
            // Loading.service(true).close();
            // Message({message: '加载失败', type: 'error'});
        })
    });
}

/!**用法
 *
 api.js
 export  const loginApi = params => get('/login', params);

 // 页面
 import {recRegister,loginApi} from "@/assets/js/api"

 loginApi({
    name:'xiaoming',
}).then((res) =>{
    console.log(res);
})

 *!/
/!**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 *!/
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, Qs.stringify(params))
            .then(res => {
                resolve(res.data);
                // Loading.service(true).close();
                //  Message({message: '请求成功', type: 'success'});
            })
            .catch(err => {
                reject(err.data);
                console.log(url,err);
                // Loading.service(true).close();
                // Message({message: '加载失败', type: 'error'});
            })
    });
}

*/
