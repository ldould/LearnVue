import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   //专门针对get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })

//2.axios发送并发请求
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   //专门针对get请求的参数拼接
//   params: {
//     type: 'sell',
//     page: 2
//   }
// })]).then(results => {
//   console.log(results)
//   console.log(results[0])
//   console.log(results[1])
// })


//3.使用全局的axios和对应的配置在进行网络请求
// axios.defaults.baseURL = 'http://152.136.185.210:7878/api/m5'
// axios.defaults.timeout = 5000

// axios.all([axios({
//   url: '/home/multidata'
// }), axios({
//   url: '/home/data',
//   //专门针对get请求的参数拼接
//   params: {
//     type: 'sell',
//     page: 2
//   }
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1)
//   console.log(res2)
// }))

//4.创建对应的axios的实例
// const instance1 = axios.create({
//   baseURL: 'http://152.136.185.210:7878/api/m5',
//   timeout: 5000
// })
// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res)
// })
// instance1({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 2
//   }
// }).then(res => {
//   console.log(res)
// })

// const instance2 = axios.create({
//   baseURL: 'http://152.136.185.210:7878',
//   timeout: 3000,
//   // headers:{}
// })

//5.封装request模块
import { request } from './network/request'

// request({
//   url: '/home/multidata',
// }, res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })

// request({
//   baseConfig: {
//     url: '/home/multidata'
//   },
//   success: function (res) {
//     console.log(res)
//   },
//   failure: function (err) {
//     console.log(err)
//   }
// })


request({
  url: '/home/multidata',
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})