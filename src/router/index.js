import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Catalog from '../views/Catalog.vue'
import Kit from '../views/Kit.vue'
import Login from '../views/Login.vue'
import Tutorial from '../views/Tutorial.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog,
  },
  {
    path: '/catalog/kit/:id',
    name: 'Kit',
    component: Kit
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/tutorial',
    name: 'Tutorial',
    component: Tutorial
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
  routes
})

export default router
