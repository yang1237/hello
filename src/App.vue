<template>
  <div id="app">
   <keep-alive exclude="Detail">
    <router-view v-if="$route.meta.keepAlive"></router-view>
   </keep-alive>
   <main-tab-bar></main-tab-bar>
  </div>
  
</template>

<script>
import MainTabBar from 'content/maintabbar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar,
    
  }
}
</script>

<style>
@import './assets/css/base.css';
#app {
 position: relative;
}
</style>
