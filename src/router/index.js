import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/MyFiles.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pages/:id',
    name: 'Pages',
    component: () => import('../views/Pages.vue')
  },
  {
    path: '/upload',
    name: 'Upload',
    component: () => import('../views/Upload.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
