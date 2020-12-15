<template>
  <div id="app">
    <!-- <router-link to="/home">首页</router-link> -->
    <!-- tag属性修改标签，添加replace禁止网页返回 ， active-class修改选中状态类名 -->
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" active-class="active">关于</router-link> -->
    <!-- <router-link to="/home" tag="button" replace >首页</router-link>
    <router-link to="/about" >关于</router-link> -->

    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- <router-link :to="'/user/'+ userId">用户</router-link> -->
    <!-- <router-link to="/profile">档案</router-link> -->
    <!-- <router-link :to="{path:'/profile',query:{name:'hh',age:18,height:1.8}}">档案</router-link> -->


     <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    <keep-alive exclude="Profile,User">
    <router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId:'lisi'
    }
  },
  methods:{
    homeClick(){
      //通过代码的方式修改路由 vue=router
      //push => pushState
      //this.$router.push('/home')

      //点击两次报错，添加.catch(err => {})
      this.$router.replace('/home').catch(err => {})
   },
   aboutClick(){
     
    //  this.$router.push('/about')
      this.$router.replace('/about').catch(err => {})
   },
   userClick(){
     this.$router.push('/user/' + this.userId).catch(err => {})
   },
   profileClick(){
     this.$router.push({
       path:'/profile',
       query:{
         name:'yaoming',
         age:40,
         height:2.0
       }
     })
   }
  }
}
</script>

<style>
.active{
  color: red;
}

</style>
