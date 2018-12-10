/**
 * Created by zhiyi on 2018/8/22.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'  //logger是一个日志插件
Vue.use(Vuex)
import mutations from './mutations'
import getState from './state'
import * as actions from './actions'
import * as getters from './getters'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
            state:getState()
            ,mutations
            ,getters
            ,actions
            ,strict:debug
            ,plugins:debug ? [createLogger()]:[]
})
