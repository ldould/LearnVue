import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

//Vue.use安装插件 Router.install
Vue.use(Router)

//路由懒加载
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const Profile = () => import('../components/Profile.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')

const routes = [
  {
    path: '',
    //redirect重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    //嵌套路由
    children: [
      // ! children里的path不用写/ 
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      },
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
    //路由独享的守卫
    // beforeEnter: (to, from, next) => {
    //   console.log('beforeEnter')
    //   next()
    // }
  },
  {
    path: '/user/:userId',
    name: 'User',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
  }
]

const router = new Router({
  //配置路由和组件之间的应用关系
  routes,
  //改成history模式，默认为哈希模式，url会带#符号
  mode: 'history',
  //统一将选中状态的类名改为active
  linkActiveClass: 'active'
})

//全局导航守卫
//前置守卫（guard）
router.beforeEach((to, from, next) => {
  //从from跳转到to
  //改变网页title的值
  document.title = to.matched[0].meta.title
  // console.log(to)
  //next()必须调用
  next()
  // console.log('++++')
})

//后置钩子（hook）
router.afterEach((to, from) => {
  // console.log('----')
})

export default router;






















