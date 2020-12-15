<template>
    <div>
        <h2>用户界面</h2>
        <p>用户的相关信息</p>
        <h2>{{userId}}</h2>
        <h2>{{$route.params.userId}}</h2>
        <button @click="btnClick">按钮</button>
    </div>
</template>

<script>
export default {
    name:"User",
    // created(){
    //     document.title="用户"
    // },
    created(){
        console.log('user created')
    },
    destroyed(){
        console.log('user destroyed')                                                                                                                  
    },
    computed:{
       userId(){
           return this.$route.params.userId
       }
    },
    methods:{
        btnClick(){
            //所有的组件都继承自vue类的原型
          console.log(this.$router)  
          console.log(this.$route)  
          //在main.js里定义的一个全局的test方法
         // this.test()
        }
    }
}
</script>

<style>

</style>