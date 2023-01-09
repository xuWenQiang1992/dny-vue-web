import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import app from './modules/app'
import tagsView from './modules/tagsView'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        user,
        app,
        tagsView
    },
    getters
})

export default store

//创建 store 对象
// const store = new Vuex.Store({
//     // state 中存放的就是全局共享的数据
//     //数据，相当于data
//     state: {
//         name:"张三",
//         age:12,
//         count:999
//     },
//     getters: {
//
//     },
//     //里面定义方法，操作state方发
//     mutations: {
//
//     },
//     // 操作异步操作mutation
//     actions: {
//
//     },
//     modules: {
//
//     }
// })
// Vuex 中的主要核心概念如下：
// State （用于存储共享的数据）
//
// Mutation （用于变更 Store 中的数据）
//更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
// Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的事件类型 (type)和一个回调函数 (handler)。
// 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：
// Action （用于处理异步任务）
//
// Getter（用于对 Store 中的数据进行加工处理形成新的数据）
// State 提供唯一的公共数据源，所有共享的数据都要统一放到 Store 的 State 中进行存储。

//##解释
// 当遇见大型项目时，数据量大，store就会显得很臃肿
//
// 为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割

// this.$store.dispatch() 与 this.$store.commit()方法的区别总的来说他们只是存取方式的不同,两个方法都是传值给vuex的mutation改变state
//
// this.$store.dispatch() ：含有异步操作，例如向后台提交数据，写法：this.$store.dispatch(‘action方法名’,值)
// this.$store.commit()：同步操作，，写法：this.$store.commit(‘mutations方法名’,值)
//
// commit: 同步操作
//
// 存储 this.$store.commit('changeValue',name)
// 取值 this.$store.state.changeValue
// dispatch: 异步操作
//
// 存储 this.$store.dispatch('getlists',name)
// 取值 this.$store.getters.getlists

