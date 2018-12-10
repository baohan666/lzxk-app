/**
 * Created by zhiyi on 2018/8/22.
 */
import * as Types from './mutations-type'
export const add = function({commit}){
    commit(Types.INCREMENT,5)
}
