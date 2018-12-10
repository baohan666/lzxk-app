/**
 * Created by zhiyi on 2018/8/21.
 * 首页接口
 */
import instance from '../base/index'
import qs from 'qs'
export default {
    //获取首页数据
    getHomeData(data){
        return instance.post(instance.baseUrl+"pay/creatememberMMB",qs.stringify(data))
    }

}

