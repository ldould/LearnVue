//1.使用common.js的模块化规范
const {add,mul} =  require('./mathUtils.js')
console.log(add(10,20))
console.log(mul(10,20))

//2.使用es6的模块化规范
import {name,age,height} from './info.js'
console.log(name)
console.log(age)
console.log(height)