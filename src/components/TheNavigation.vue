<script>
import sourceData from "@/data.json";
export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>

<template>
  <div id="nav">
    <!-- <router-link id="logo" :to="{ name: 'Home' }">Fajar Travel App</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{ name: 'DestinationShow', params: { id: destination.id } }"
    >
      {{ destination.name }}
    </router-link>
    <router-link :to="{name: 'Protected'}">Dashboard</router-link> -->

    <!--
       menggunakan custom componen pengganti router link agar bisa memakai external link 
      seperti https/ http
    -->
    <app-link id="logo" :to="{ name: 'Home' }">Fajar Travel App</app-link>
    <app-link :to="{ name: 'About' }">About</app-link>
    <app-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{ name: 'DestinationShow', params: { id: destination.id } }"
    >
      {{ destination.name }}
    </app-link>
    <app-link to="https://www.fajarsiagian.com">Fajar Siagian</app-link>
    <app-link :to="{name: 'Protected'}">Dashboard</app-link>
  </div>
</template>

<style scoped lang="css">
#nav .vue-school-active-link {
  color: red;
  border-bottom: 2px solid red;
}
</style>
