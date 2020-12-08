//1.使用common.js的模块化规范
const {add,mul} =  require('./js/mathUtils.js')
console.log(add(10,20))
console.log(mul(10,20))

//2.使用es6的模块化规范
import {name,age,height} from './js/info.js'
console.log(name)
console.log(age)
console.log(height)

//3.依赖css文件
require('./css/normal.css')

//4.依赖less文件
require('./css/special.less')
document.writeln("<h2>你好</h2>")

//5.使用vue进行开发
import Vue from 'vue'
// import App from './vue/app.js'
import App from './vue/app.vue'

 new Vue({
    el:'#app',
    template:`<App/>`,
    components:{
        App
    }
    
})