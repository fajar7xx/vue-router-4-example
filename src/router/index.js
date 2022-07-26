import { createRouter, createWebHistory } from "vue-router";
// import Home from '@/views/Home.vue'
// import About from '@/views/About.vue'

const Home = () => import("@/views/Home.vue");
const About = () => import("@/views/About.vue");

const Brazil = () => import("@/views/pages/Brazil.vue");
const Hawaii = () => import("@/views/pages/Hawaii.vue");
const Indonesia = () => import("@/views/pages/Indonesia.vue");
const Panama = () => import("@/views/pages/Panama.vue");

const DestinationView = () => import("@/views/DestinationShow.vue")

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/brazil",
    name: "Brazil",
    component: Brazil,
  },
  {
    path: "/hawaii",
    name: "Hawaii",
    component: Hawaii,
  },
  {
    path: "/indonesia",
    name: "Indonesia",
    component: Indonesia,
  },
  {
    path: "/panama",
    name: "Panama",
    component: Panama,
  },
  {
    path: "/destination/:id",
    name: "DestinationShow",
    component: DestinationView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'vue-school-active-link'
});

export default router;
