<template>
  <div>
    <ul>
        <li>
            <router-link :to="{name: 'Protected'}">Dashboard</router-link>
        </li>
        <li>
            <router-link :to="{name: 'Invoices'}">Invoices</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="css">
ul{
    background: white;
    padding: 10px;
    list-style: none;
    margin-right: 20px;
}
li{
    margin: 10px;
}
</style>