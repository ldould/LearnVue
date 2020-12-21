<template>
  <div id="app">
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>

    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>-------App内容：getters相关信息--------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(14)}}</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>
    <!-- <h2>{{more20}}</h2> -->


      <h2>-------helloVuex内容：getters相关信息--------</h2>
    <hellow-vuex />
  </div>
</template>

<script>
import HellowVuex from "./components/HellowVuex.vue";
import { INCREMENT } from './store/mutations-type.js'
export default {
  components: { HellowVuex },
  name: "App",
  methods: {
    addition() {
      this.$store.commit(INCREMENT);
    },
    subtraction() {
      this.$store.commit("decrement");
    },
    //mutations传参
    addCount(count){
      //payload：负载
      //1、普通的提交风格
    //  this.$store.commit("incrementCount",count);

      //2、特殊的提交风格
      this.$store.commit({
        type:'incrementCount',
        count
      })
    },
    addStudent() {
      const stu = {id:115,name:'alan',age:35}
      this.$store.commit("addStudent",stu);
    },
    updateInfo(){
      //  this.$store.dispatch("aUpdateInfo",{
      //    message:'我是playload',
      //    success:() => {
      //      console.log('里面已经完成了')
      //    }
      //  });

      this.$store.dispatch("aUpdateInfo",'我是携带的信息')
      .then(res => {
        console.log('里面已经完成了');
        console.log(res)
      })
    }

  },
  // computed:{
  //   more20(){
  //     return this.$store.state.students.filter(s => s.age>=20)
  //   }
  // }
};
</script>

<style></style>
