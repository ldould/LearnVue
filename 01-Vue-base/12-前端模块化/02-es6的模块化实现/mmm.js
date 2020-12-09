//1.导入{}中定义的变量
import { flag, sum } from "./aaa.js"
if (flag) {
    console.log("哈哈哈哈")
    console.log(sum(60, 30))

}

//2.直接导入export定义的变量
import { num1, height } from "./aaa.js"
console.log(num1, height)

//3.导入 export的function
import { mul, Person } from "./aaa.js"
console.log(mul(30, 30))

const p = new Person();

p.run()

import ad from './aaa.js'
console.log(ad)
