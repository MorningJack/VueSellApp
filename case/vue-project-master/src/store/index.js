import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import moduleA from './modules/moduleA.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations,
  actions,
  modules: {
    a: moduleA
  }
})
