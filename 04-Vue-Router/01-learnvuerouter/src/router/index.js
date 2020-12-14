import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import User from '../components/User.vue'

//Vue.use安装插件
Vue.use(Router)

const routes = [
  {
    path: '',
    //redirect重定向
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'HelloWorld',
    component: Home
  },
  {
    path: '/about',
    name: 'HelloWorld',
    component: About
  },
  {
    path: '/user/:userId',
    name: 'User',
    component: User
  }
]

export default new Router({
  //配置路由和组件之间的应用关系
  routes,
  //改成history模式，默认为哈希模式，url会带#符号
  mode: 'history',
  //统一将选中状态的类名改为active
  linkActiveClass: 'active'
})
