import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";
export const StaticRouterMap = [
    {
        path: "/login",
        component: () => import("@/views/login/index"),
        hidden: true
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404.vue'),
        hidden: true
    },
    {
        path: "/",
        component: Layout,
        redirect: "/dashboard",
        name: "Dashboard",
        meta: { title: "首页", icon: "example",affix: true },
        children: [
            {
                path: "dashboard",
                component: () => import("@/views/dashboard/index"),
                meta: { title: '首页', icon: 'el-icon-s-data',affix: true }
            }
        ]
    },
    {
        path: "/redirect",
        component: Layout,
        name: "redirect",
        hidden: true,
        children: [
            {
                path: "/redirect/:path*",
                component: () => import("@/views/redirect/index")
            }
        ]
    }
];

export const AsyncRouterMap = [];

const createRouter = () =>
    new Router({
        // mode: 'history', // require service support
        scrollBehavior: () => ({ y: 0 }),
        routes: StaticRouterMap
    });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher; // reset router
}

export default router;



// 实现动态路由，需要解决3个核心功能
//
// 1、router.addRoute 方法加路由
//
// 2、动态集成路由componentName：() => import(`@/pages/${view}`)
//
// 3、刷新后动态路由丢失问题
//
// 总体思路：
//
// 1、定义一个store对象，这个是vue里面的全局对象，刷新后值会丢失
//
// 2、登录后把数据库的菜单调用router.addRoute加到路由中，然后把菜单存本地localstore
//
// 3、router.beforeEach 里面判断是否登录，且store对象里面的值是否为空，然后直接重新去cookie再绑定一次路由，调用next({ ...to, replace: true });重来即可
