<script>
import TheNavigation from "@/components/TheNavigation.vue";
export default {
  components: {
    TheNavigation,
  },
};
</script>

<template>
  <div>
    <TheNavigation />
    <div class="container">
      <!-- change key path cause using transition from router view to transition > component -->
      <router-view v-slot="{Component}">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>
    </div>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped lang="css">
/* .slide-enter-active,
.slide-leave-active{
  transition: opacity  1s, transform 1s;
}
.slide-enter-from,
.slide-leave-to{
  opacity: 0;
  transform: translateX(-30%);
} */

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to{
  opacity: 0;
}
</style>
