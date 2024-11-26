// src/router.js
import DashboardHome from '@/views/DashboardHome.vue'
import ImpactOverview from '@/views/home/components/ImpactOverview.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: DashboardHome
  },
  {
    path: '/impact',
    name: 'ImpactOverview',
    component: ImpactOverview
  }
]
