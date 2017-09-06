import * as types from '../mutation-types'

// user related states can be added here.
const state = {
  // userId: null,
  isLogin: false,
  showLogin: false,
  userInfo: {
    orgName: null,
    userMobile: null
  },
  dashBoardItem: null,
  businessKind: null,
  registerState: true,
  guideState: null,
  loading: false
}

const mutations = {
  [types.LOADING_REQUEST] (state, loading) {
    state.loading = loading
  },
  [types.USER_LOGIN] (state, userId) {
    state.isLogin = true
    // state.userId = userId
    state.showLogin = false
  },
  [types.USER_LOGOUT] (state) {
    state.isLogin = false
    // state.userId = null
  },
  [types.TOGGLE_SHOW_LOGIN] (state) {
    state.showLogin = !state.showLogin
  },
  [types.SAVE_STATE] (state, userInfo) {
    state.userInfo = userInfo
  },
  [types.DASHBOARD_STATE] (state, dashboardItem) {
    state.dashBoardItem = dashboardItem
  },
  [types.BUSINESS_KIND] (state, businessKind) {
    state.businessKind = businessKind
  },
  [types.REGISTER_INIT] (state, registerState) {
    state.registerState = registerState
  },
  [types.GUIDESTATE] (state, guideState) {
    state.guideState = guideState
  }
}

export default {
  state,
  mutations
}
