// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'

  // 传入组件对象
  // render: function (createElement) {
  //   return createElement(App)
  // }
})

// runtime-compiler
// template -> ast -> render -> vdom -> UI

// runtime-only (性能更高，代码量更少)
//  render -> vdom -> UI
