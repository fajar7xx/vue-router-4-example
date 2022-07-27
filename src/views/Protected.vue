<template>
  <div>
    <h1>Hello, {{username}}</h1>
    <button @click="logout">Logout</button> | 
    <router-link :to="{name: 'Invoices'}">
        <button>Invoices</button>
    </router-link>
  </div>
</template>

<script>
export default {
    data(){
        return{
            username: window.user
        }
    },
    methods: {
        logout(){
            window.user = null
            this.$router.push({
                name: 'Home'
            })
        }
    }
}
</script>

<style>

</style>