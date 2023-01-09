<template>
  <div class="breadDiv" id="domBread">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
          v-for="(item, index) in breadList"
          :to="item.path"
          :key="index"
      >{{ item.meta.title }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadList: []
    }
  },
  watch: {
    $route: {
      handler(route) {
        let allList = route.matched.filter(item => {
          this.breadList = [];
          if (item.meta && item.meta.title) {
            // console.log("111",item.redirect);
            if (item.redirect) {
              item.path = ''
            }
            return true
          }
        })
        if(allList[0].meta.title == '首页') {
          this.breadList.push({ path: '', meta: { title: '首页' } })
        }else {
          allList.unshift({ path: '/', meta: { title: '首页' } })
          this.breadList = allList
        }

      },
      immediate: true
    }
  }
}
</script>
