import { createRouter, createWebHistory } from "vue-router";
import sourceData from '@/data.json'
// import Home from '@/views/Home.vue'
// import About from '@/views/About.vue'

const Home = () => import("@/views/Home.vue");
const About = () => import("@/views/About.vue");

const Brazil = () => import("@/views/pages/Brazil.vue");
const Hawaii = () => import("@/views/pages/Hawaii.vue");
const Indonesia = () => import("@/views/pages/Indonesia.vue");
const Panama = () => import("@/views/pages/Panama.vue");

const DestinationView = () => import("@/views/DestinationShow.vue")
const ExperienceView = () => import("@/views/ExperienceShow.vue")
const NotFound = () => import("@/views/NotFound.vue")
const Protected = () => import("@/views/Protected.vue")
const Login = () => import('@/views/Login.vue')

const routes = [
  {
    path: "/protected",
    name: 'Protected',
    component: Protected,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
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
    component: DestinationView,
    // props: true
    // props for id integer
    props: route => ({
      ...route.params,
      id: parseInt(route.params.id)
    }),
    beforeEnter(to, from){
      // navigation guard Per-Route Guard
      // chek if data not found
      const exist = sourceData.destinations.find(
        destination => destination.id === parseInt(to.params.id)
      )
      if(!exist){
        return {
          name: 'NotFound',
          // allows keeping the url while rendering a different page
          params: {
            pathMatch: to.path.split('/').slice(1)
          },
          query: to.query,
          hash: to.hash
        }
      }
    },
    children: [
      {
        path: ":experienceSlug",
        name: "ExperienceShow",
        component: ExperienceView,
        props: route => ({
          ...route.params,
          id: parseInt(route.params.id),
    
        })
      }
    ]
  },
  // {
  //   path: "/destination/:id/:experienceSlug",
  //   name: "ExperienceShow",
  //   component: ExperienceView,
  //   props: route => ({
  //     ...route.params,
  //     id: parseInt(route.params.id),

  //   })
  // }
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'vue-school-active-link',
  scrollBehavior(to, from, savedPosition){
    // return savedPosition || {top: 0}
    // karena kita menggunakan transition fade dengan jeda 300ms
    return savedPosition || new Promise((resolve) => {
      setTimeout(() => resolve({
        top: 0,
        behavior: 'smooth', //supaya scrool nya smooth waktu pindah page
      }), 300)
    })
  }
});

// navigation guard for authentication and authorization
router.beforeEach((to, from) => {
  if(to.meta.requiresAuth && !window.user){
    // need to login if not already logged in
    return {name: 'Login'}
  }
})

export default router;
