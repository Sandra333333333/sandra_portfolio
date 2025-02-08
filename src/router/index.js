import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pattern',
    name: 'pattern',
    component: () => import('../views/Pattern.vue')
  },
  {
    path: '/uiux',
    name: 'uiux',
    component: () => import('../views/Uiux.vue')
  },
  {
    path: '/uiuxnew',
    name: 'uiuxnew',
    component: () => import('../views/UiuxNew.vue')
  },
  {
    path: '/fixing',
    name: 'fixing',
    component: () => import('../views/FixingPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
