import Vue from "vue";
import Vuex from "vuex";
import { INCREMENT } from './mutations-type'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 100,
    students: [
      { id: 110, name: 'hh', age: 14 },
      { id: 112, name: 'kk', age: 21 },
      { id: 113, name: 'oo', age: 18 },
      { id: 114, name: 'gg', age: 30 },
    ],
    info: {
      id: 116,
      name: 'lisa',
      age: 19
    }
  },
  mutations: {
    [INCREMENT](state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    //mutations获取参数
    // incrementCount(state, count) {
    //   state.counter += count
    // },
    incrementCount(state, playload) {
      console.log(playload)//打印出一个对象
      state.counter += playload.count
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      state.info.name = 'xiaoming'
      //mutations里的方法必须是同步方法，主要原因是当我们使用devtools时，devtools可以帮我们捕捉mutation的快照，
      //但是如果是异步操作，那么devtools将不能很好的跟踪这个操作什么时候会被完成
      // setTimeout(() => {
      //   state.info.name = 'xiaoming'
      // }, 1000)
      // state.info.address = '广东'
      // state.info['address'] = '广州'
      // // delete state.info.age
      // Vue.set(state.info, 'sex', '男')
      // Vue.delete(state.info, 'age')
    }
  },
  actions: {
    // aUpdateInfo(context, playload) {

    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(playload.message)
    //     playload.success()
    //   }, 1000)
    // }

    aUpdateInfo(context, playload) {

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(playload)
          resolve('111')
        }, 1000)
      })
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      // return function (age) {
      //   return state.students.filter(s => s.age > age)
      // }
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {}
});

export default store;
