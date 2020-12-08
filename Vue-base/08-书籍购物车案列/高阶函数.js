
//编程范式：命令式编程/声明式编程
//编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
//高阶函数：filter/map/reduce
//filter中的回调函数有一个要求：必须返回一个boolean值
//true：当返回true时，函数内部会自动讲这次回调的n加入到新的数组中
//false：当返回false时，函数内部会过滤掉这次的n

//输出比100小的数
// const nums = [10, 30, 222, 333, 50, 555, 60]

// let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n)
// console.log(total)

//高阶函数
// let total = nums.filter(function (n) {
//     return n < 100
// }).map(function (n) {
//     return n * 2
// }).reduce(function (preValue, n) {
//     return preValue + n
// }, 0)
// console.log(total)

// //filter函数的使用
// let newNums = nums.filter(function (n) {
//     return n < 100;  //10 < 100 为true n加入到新的数组中
// })
// // console.log(newNums) //[ 10, 30, 50, 60 ]

// //2、map函数的使用

// //将 所有小于100的数字进行转化：全部*2
// //[ 20, 60, 100, 120 ]
// let new2Nums = newNums.map(function (n) {  //10
//     return n * 2;
// })
// // console.log(new2Nums)

// //3、reduce函数的使用
// //将new2Nums数字相加，得到最终的结果
// //reduce作用对数组中所有的内容进行汇总

// let new3Nums = new2Nums.reduce(function (preValue, n) {
//     return preValue + n

// }, 0)

// console.log(new3Nums)