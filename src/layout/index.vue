<template>
  <div class="wrapper" :class="{ closeBar: opened }">
    <div class="sidebar-container">
      <l-header></l-header>
      <side-bar></side-bar>
    </div>
    <div class="wrapper_con">
      <div class="fixed-header">
        <r-header></r-header>
        <tags-view></tags-view>
      </div>

      <page-main>
      </page-main>
    </div>

  </div>

</template>

<script>
import LHeader from './components/header/indexLeft'
import RHeader from './components/header/indexRight'
import SideBar from './components/sideBar'
import PageMain from './components/PageMain'
// import AppMain from './components/AppMain'
import TagsView from './components/tagsView/index.vue'
import { mapGetters } from 'vuex'
export default {
  name: "layout",
  computed: {
    ...mapGetters(['opened'])
  },
  components: {
    LHeader,
    RHeader,
    SideBar,
    PageMain,
    TagsView
  }
}
</script>

<style scoped>

</style>
