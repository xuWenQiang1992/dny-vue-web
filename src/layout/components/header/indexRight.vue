<template>
  <div class="header_r">
    <div class="headr_d1">
      <side-collapse class="sidecoll"></side-collapse>
      <bread-crumb class="bread"></bread-crumb>
    </div>
    <div class="headr_d2">
      <ul class="headrUl clearFixed">
        <li id="domPersonal">
          <user-dropdown></user-dropdown>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import SideCollapse from '@/components/SideCollapse'
import BreadCrumb from '@/components/BreadCrumb'
import UserDropdown from '@/components/UserDropdown'

export default {
  name: "index",
  components: {
    SideCollapse,
    BreadCrumb,
    UserDropdown
  }
}
</script>

<style scoped>

</style>
