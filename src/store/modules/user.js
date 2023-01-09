import { login,getInfo } from '@/api/login/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { Message } from 'element-ui'
import router from '@/router'
import { StaticRouterMap } from '@/router/index'


const state = {
  token:  getToken(), // 认证凭证'
  userName: '',
  roles: [],
  init: false, // 是否完成初始化 // 默认未完成
  RouterList: [] // 动态路由
}
const mutations = {
  SET_TOKEN(state, val) {
    state.token = val
  },
  DEL_TOKEN(state) {
    state.token = ''
    state.userName = ''
    state.roles = ''
  },
  SET_ROLES(state, payload) {
    state.roles = payload
  },
  SET_NAME(state, payload) {
    state.userName = payload
  },
  set_router: (state, RouterList) => {
    state.RouterList = RouterList
  },
  set_init: (state, status) => {
    state.init = status
  }
}
const actions = {
  // user login
  _login({ commit }, formdatas) {
    return new Promise((resolve, reject) => {
      login(formdatas)
          .then(res => {
            if (res.code === "200") {
              if (res.data.success) {
                Message.success("登录成功")
                commit('SET_TOKEN', res.data.userInfo.accessToken)
                commit('SET_NAME', res.data.userInfo.userName)
                setToken(res.data.userInfo.accessToken)
              } else {
                Message.error(res.data.msg)
              }
              resolve(res)
            }
          })
          .catch(error => {
            reject(error)
          })
    })
  },
  _getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo().then(res => {
            if (res.code === "200") {
              commit('SET_NAME', res.data.userName)
            } else {
              Message.error(res.msg)
            }
            resolve(res.data)
          })
          .catch(error => {
            reject(error)
          })
    })
  },
  // 动态设置路由 此为设置设置途径
  setRouterList({ commit }, routerList) {
    commit('set_router', StaticRouterMap.concat(routerList)) // 进行路由拼接并存储
  },
  // 存储按钮操作权限
  setroles({ commit }, roleList) {
    commit('SET_ROLES', roleList)
  },
  loginOut({ commit, dispatch}) {
    commit('DEL_TOKEN')
    commit('set_init', false)
    removeToken();
    dispatch('tagsView/delAllViews', null, { root: true })
    router.push({
      path: '/login',
      query: {
        redirect: '/'
      }
    })
  },
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
