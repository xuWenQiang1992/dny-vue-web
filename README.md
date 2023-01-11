## vue后台管理后端获取路由+标签导航栏
[git地址](https://github.com/xuWenQiang1992/dny-vue-web.git)
#### 后端获取路由获取实现思路
代码运行思路(已经登录,刷新页面的情况下)
1. 在路由钩子里面判断是否首次进入系统(permission.js)
2. init为true说明已经获取过路由,就直接放行,init为false则向后台请求用户路由
3. 获取路由
4. 解析路由,存储权限
5. 使用router的api,addRouter拼接路由
6. 存储路由
7. init改为true,路由初始化完成
8. 放行路由
#### 标签导航栏实现思路
1. 新建 tags-view.js
2. 在Vuex里面引入 tags-view.js
3. 新建 tabsView 组件
4. 新建 ScrollPane 组件
5. 引入 tabsView 组件
6. 使用 keep-alive 组件，进行页签的缓存
