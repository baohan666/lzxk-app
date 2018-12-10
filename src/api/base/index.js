/**
 * Created by zhiyi on 2018/8/21.
 * 配置异步请求基本参数
 */
import axios from 'axios'
import qs from 'qs'
const instance=axios.create();

instance.baseUrl="http://20723p4z75.51mypc.cn/"
instance.defaults.timeout = 5000
instance.defaults.headers['Content-Type']='application/x-www-form-urlencoded'
axios.interceptors.request.use=instance.interceptors.request.use
instance.interceptors.request.use(config=>{
    //在请求拦截器中配置公共参数 sessionId
    const sessionId = "9999";
    // 判断请求的类型
    // 如果是post请求就把默认参数拼到data里面
    // 如果是get请求就拼到params里面
    if(config.method === 'post'){
        let data = qs.parse(config.data);
        config.data = qs.stringify({
            sessionId: sessionId,
            ...data
        });
    }else if(config.method === 'get') {
         config.params = {
            sessionId: sessionId,
            ...config.params
        }
   }
    return config
},err=>{
    return Promise.reject(err)
})

instance.interceptors.response.use(response=>{
    // 如果登录信息 已过期，重定向到登录页面
    if (response.data.code == 401){
        //可以清空登录信息
        router.replace({
            path: '/signin',
            query: {redirect: router.currentRoute.fullPath}
        })
    }
    return response
},err=>{
    return Promise.reject(err)
})

export default instance
