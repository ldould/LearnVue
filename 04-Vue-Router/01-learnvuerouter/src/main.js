import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //渲染app模板，替换index.html的id为app的div
  render: h => h(App)
})
