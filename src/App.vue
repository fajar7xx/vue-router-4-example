<script>
import TheNavigation from "@/components/TheNavigation.vue"
export default{
  components:{
    TheNavigation
  }
}
</script>

<template>
  <div>
    <TheNavigation/>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
</style>
