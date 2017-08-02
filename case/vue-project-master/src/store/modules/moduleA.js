/*
定义模块下的state mutations actions
 */

const state = {
  countA: 1
}

const mutations = {
  increment () {
    console.log('moudleA')
  }
}

const actions = {
  increment (content) {
    content.commit('increment')
  }
}

/*
暴露模块对象
 */
export default {
  state: state,
  mutations: mutations,
  actions: actions
}
