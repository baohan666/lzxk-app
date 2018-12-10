import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//使用路由懒加载
const HomePage = () => import('@/components/HomePage')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    }
  ]
})

