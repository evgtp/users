import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Users from "@/views/UsersView.vue";
// import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Users
  },
  {
    path: '/create',
    name: 'createUser',
    component: () => import('../views/CreateUserView.vue')
  },
  {
    path: '/userInfo/:id',
    name: 'userinfo',
    component: () => import('../views/UserView.vue'),
    props: route => ({id: route.params.id}),
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
