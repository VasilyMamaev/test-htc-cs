import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '../components/films.vue'
import Chanels from '../components/chanels.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Films',
    component: Films
  },
  {
    path: '/Chanels',
    name: 'Chanels',
    component: Chanels
  }
]

const router = new VueRouter({
  routes
})

export default router
