
// 用户登录
export const userLogin = ({ commit }, userId, redirect = true) => {
  console.log(userId)
  if (userId) {
    !cookie.get('user_id') && cookie.set('user_id', userId)
    commit(types.USER_LOGIN, userId)
    redirect && router.push('/dashboard/peers')
  } else {
    commit(types.USER_LOGOUT)
    router.push('/')
  }
}
// 注册装填存储传递
export const registerInit = ({commit}, registerState) => {
  commit(types.REGISTER_INIT, registerState)
  console.log('action', registerState)
}

// 储存用户名
export const saveState = ({commit}, userInfo) => {
  commit(types.SAVE_STATE, userInfo)
}

// 用户登出
export const userLogout = ({ commit }) => {
  logout({ commit })
  router.push('/')
}

// 用户登出 不跳转
export const logout = ({ commit }) => {
  commit(types.USER_LOGOUT)
  cookie.remove('user_id')
}

// 记录登录状态
export const toggleShowLogin = ({ commit }) => {
  commit(types.TOGGLE_SHOW_LOGIN)
}
// 拦截请求 开始状态
export const beginRequest = ({commit}) => {
  commit(types.LOADING_REQUEST, true)
  setTimeout(function () {
    commit(types.LOADING_REQUEST, false)
  }, 7000)
}

// 拦截请求 结束状态
export const endRequest = ({commit}) => {
  commit(types.LOADING_REQUEST, false)
}