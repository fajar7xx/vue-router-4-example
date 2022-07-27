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

      <!-- sidebar -->
      <router-view 
        v-slot="{Component}"
        class="view left-sidebar" 
        name="LeftSidebar"
      >
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>

      <!-- main view -->
      <!-- change key path cause using transition from router view to transition > component -->
      <router-view v-slot="{Component}" class="main-view">
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
.left-sidebar{
  width: 20%;
}
.main-view{
  width: 100%;
}
</style>
