import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import People from '../views/People.vue';
import Starships from '../views/Starships.vue';
import Planets from '../views/Planets.vue';
import modal from '../views/modal.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/people',
    name: 'People',
    component: People
  },
  {
    path: '/starships',
    name: 'Starships',
    component: Starships
  },
  {
    path: '/planets',
    name: 'Planets',
    component: Planets
  },
  {
    path: '/modal',
    name: 'Modal',
    component: modal
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
