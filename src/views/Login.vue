<template>
  <div class="login">
    <form action="" class="login" method="POST" @submit.prevent="login">
        <h1>Login</h1>
        <label for="username">Username</label>
        <input 
            v-model="username"
            type="text" 
            name="username" 
            id="username" 
            class="input" 
            placeholder="Username">

        <label for="password">Password</label>
        <input
            v-model="password" 
            type="password" 
            name="password" 
            id="password" 
            class="input"
            placeholder="Password">

        <button class="btn" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            username: '',
            password: ''
        }
    },
    methods:{
        login(){
            // this is just fake auth
            window.user = this.username
            this.$router.push({name: 'Protected'})
        }
    }
}
</script>

<style>

</style>