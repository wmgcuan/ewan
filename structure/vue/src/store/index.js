import Vue from 'vue'
import Vuex from 'vuex'
import API from '../utils/api'

Vue.use(Vuex)
const store = new Vuex.Store({
  // 1.数据包
  state: {
    isLogin: false // 是否登录
  },
  // 2.混合数据输出
  //   state被注入的store实例数据包
  //   $store.getters.getTest
  getters: {
    // getTest (state) { return state.a + state.b }
  },
  // 3.同步&与state交互 
  //   state被注入的store实例数据包
  //   $store.commit('setLoginStatus', true) 
  mutations: {
    setLoginStatus (state, status) {
      state.isLogin = status // 将传参设置给state的city
    }
  },
  // 4.异步&与mutations交互,通常跟API接口打交道
  //   context被注入的store实例  参数解构为{ commit, state }
  //   $store.dispatch('login')
  actions: {
    login ({ commit }) {
      API.login(res => {
        sessionStorage.setItem("isLogin", true)
        commit('setLoginStatus', true)
      })
    }
  },
})

export default store
