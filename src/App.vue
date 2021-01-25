<template>
  <router-view></router-view>
</template>

<script>
import {router} from './router/routers'
export default {
  name: 'App',
  mounted(){
    // window.addEventListener('keydown', function(e) {
    //   if(e.key==="r"){
    //     window.location="/role/all"
    //   }
    // });
  }
}
</script>

<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';
</style>
