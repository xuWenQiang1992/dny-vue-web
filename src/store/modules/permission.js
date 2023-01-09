// 前端通过递归遍历asyncRoutes判断权限list中是否包含有对应的name路由，最终会返回包含该用户角色所有权限路由页面的addRoutes的数组对象
import { asyncRoutes, currencyRoutes } from '@/router'

const state = {
  routes: [],
  addRoutes: []
}
const mutations = {
  SET_ROUTES(state, payload) {
    state.routes = [...currencyRoutes, ...payload]
    state.addRoutes = payload
  }
}
// 遍历asyncRoutes动态路由
function forSearchArr(route, roles) {
  let arrNew = []
  for (let item of route) {
    let itemNew = { ...item } //解决浅拷贝共享同一内存地址//includes 可以判断一个数组中是否包含某一个元素，并返回true 或者false
    if (roles.includes(itemNew.name)) {
      if (itemNew.children) {
        itemNew.children = forSearchArr(itemNew.children, roles)
      }
      arrNew.push(itemNew)
    }
  }
  return arrNew
}
const actions = {
  getAsyncRoutes({ commit, rootGetters }, roles) {
    return new Promise(resolve => {
      let routes = []
      if (rootGetters.userName === 'admin') {
        routes = asyncRoutes || ''
      } else {
        routes = forSearchArr(asyncRoutes, roles)
      }
      commit('SET_ROUTES', routes)
      resolve(routes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
