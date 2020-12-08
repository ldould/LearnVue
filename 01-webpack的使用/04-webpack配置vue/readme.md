## 笔记

## main.js:1314 [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.

(found in <Root>)

##

## 出现这个错误是因为默认使用 runtime-only 的版本

## runtime-only 代码中不可以有任何的 template

## runtime-compiler 代码中可以有 template，因为有 complier 可以用于编译 template

## 解决方法：

## 在 webpack.config.js 做如下配置

resolve:{
//别名
alias:{
'vue$':'vue/dist/vue.esm.js'
}
}
