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
    <router-link :to="'/user/'+ userid">用户</router-link>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userid:'lisi'
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
   }
  }
}
</script>

<style>
.active{
  color: red;
}

</style>
