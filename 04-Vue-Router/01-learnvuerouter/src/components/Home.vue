<template>
    <div>
        <h2>我是首页</h2>
        <p>首页内容</p>
        <router-link to="/home/news">新闻</router-link>
        <router-link to="/home/message">消息</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'Home',
    data(){
        return {
            path:'/home/news'
        }
    },
    //生命周期函数
    //created组件被创建后回调的函数
    created(){
        console.log('created')
    },
    destroyed(){
        console.log('destroyed')                                                                                                                  
    },
    //activated，deactivated 这两个函数，只有该组件被保持了状态使用了keep-alive时，才是有效的
    activated(){
        // console.log('activated')
        this.$router.push(this.path)
    },
    // deactivated(){
    //     // console.log('deactivated')
    //     this.path = this.$route.path
    // },

    //导航离开该组件的对应路由时调用
    beforeRouteLeave(to,from,next){
        //获取到上一个状态的路由
        console.log(this.$route.path)
        this.path = this.$route.path
        next()
    }
    // //当组件被挂载到DOM上的时候回调
    // mounted(){

    // },
    // //界面发生更新后回调
    // undated(){

    // }
}
</script>

<style>

</style>