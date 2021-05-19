import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/home.vue');
const Cart = () => import('../views/cart/cart.vue');
const Profile = () => import('../views/profile/profile.vue');
const Category = () => import('../views/category/categories.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/category',
    component: Category
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
