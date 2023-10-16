import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@pages/HomePage.vue'
import AboutPage from '@pages/AboutPage.vue'
import ContactPage from '@pages/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    }
  ]
})

export default router
