const getters = {
  token: state => state.user.token,
  userName: state => state.user.userName,
  roles: state => state.user.roles,
  routes: state => state.user.RouterList,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  opened: state => {
    if (state.app.opened === 'false') {
      return false
    } else if (state.app.opened === 'true') {
      return true
    }
  },
}
export default getters
