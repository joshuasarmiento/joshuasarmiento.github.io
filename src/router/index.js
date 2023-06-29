import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/Projects.vue')
    },
    {
      path: '/projects/:id',
      name: 'projectsDetails',
      component: () => import('../views/components/Project/ProjectDetails.vue'),
      props: true
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/charts',
      name: 'charts',
      component: () => import('../views/Charts.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import('../views/404.vue'),
    }
  ]
})

export default router
