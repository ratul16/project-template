import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FarmingView from '../views/FarmingView.vue'
import ForecastView from '../views/ForecastView.vue'
import MapView from '../views/MapView.vue'
import InformationView from '../views/InformationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/map',
      name: 'map',
      component: MapView,
    },
    {
      path: '/information',
      name: 'information',
      component: InformationView,
    },
    {
      path: '/design',
      name: 'design-system',
      component: () => import('../views/DesignSystemView.vue')
    },
  ],
})

export default router
