/**
 * Created by zhiyi on 2018/8/22.
 */
import * as Types from './mutations-type'
const mutations = {
      [Types.INCREMENT](state,count){
          state.count += count;
      }
};
export default mutations;
