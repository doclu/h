<template>
  <div id="app">
    <caculate/>
    <router-view></router-view>
  </div>
</template>

<script>

import Caculate from './components/Caculate'

export default {
  name: 'App',
  components:{
    Caculate,
  }
}
</script>

<style scoped>
#app {
 
}
</style>
