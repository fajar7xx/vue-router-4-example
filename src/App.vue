<script setup>
</script>

<template>
  <div>
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
      <router-link :to="{ name: 'Brazil' }">Brazil</router-link>
      <router-link :to="{ name: 'Hawaii' }">Hawaii</router-link>
      <router-link :to="{ name: 'Indonesia' }">Indonesia</router-link>
      <router-link :to="{ name: 'Panama' }">Panama</router-link>
    </div>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
</style>
