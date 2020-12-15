import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//往vue的原型上添加test方法，这样全局都会有test这个方法
// Vue.prototype.test = function () {
//   console.log('test')
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //渲染app模板，替换index.html的id为app的div
  render: h => h(App)
})
// console.log(router, 'router')