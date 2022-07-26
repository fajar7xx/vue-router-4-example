<script setup>
    

</script>

<template>
    <div id="nav">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'About' }">About</router-link>
        <router-link :to="{ name: 'Brazil' }">Brazil</router-link>
        <router-link :to="{ name: 'Hawaii' }">Hawaii</router-link>
        <router-link :to="{ name: 'Indonesia' }">Indonesia</router-link>
        <router-link :to="{ name: 'Panama' }">Panama</router-link>
    </div>
</template>

<style scoped lang="css">
#nav .vue-school-active-link{
    color: red;
    border-bottom: 2px solid red;
}
</style>
