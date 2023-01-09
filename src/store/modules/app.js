/*
set sidebar open or close,and some app setting
设置侧边栏打开或关闭，以及一些应用程序设置
 */
const state = {
  opened: sessionStorage.getItem('open')
}
const mutations = {
  SET_OPENED(state, payload) {
    state.opened = String(payload)
    sessionStorage.setItem('open', payload)
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
