const cookieparser = process.server ? require('cookieparser') : undefined
//  服务端运行时vuex 是同一个实例 所以 state 设置成函数返回一个对象
export const state = () => {
  return {
    user: null
  }
}

export const mutations = {
  setUser(state, data) {
    state.user = data
  }
}

export const actions = {
  // 特殊的actions 方法 服务端渲染期间自动调用
  // 作用: 初始化容器数据 传递给客户端使用
  nuxtServerInit({ commit }, { req }) {
    let user = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {
        // No valid cookie found
      }
      commit('setUser', user)
    }
  }
}