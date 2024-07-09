<script setup>
import {RouterView} from 'vue-router'
import AppHeader from "@/views/app/AppHeader.vue"
import AppFooter from "@/views/app/AppFooter.vue"
</script>

<template>
  <header>
    <AppHeader/>
  </header>
  <RouterView/>
  <footer style="margin-top: 50px">
    <AppFooter/>
  </footer>
</template>

<style scoped>
#app{
  width: 100vw;
}

</style>
