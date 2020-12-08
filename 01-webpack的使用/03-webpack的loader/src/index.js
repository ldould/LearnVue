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
require('./css/special.less')
document.writeln("<h2>你好</h2>")