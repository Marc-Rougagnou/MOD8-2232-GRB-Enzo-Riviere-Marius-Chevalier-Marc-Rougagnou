import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/Sign-in.vue'
import CreateAccount from '../views/Create-Account.vue'
import Sheets from '../views/Sheets.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/create-account',
      name: 'CreateAccount',
      component: CreateAccount
    },
    {
      path:'/sheets',
      name: 'Sheets',
      component: Sheets
    },
    {
      path:'/sheets/:id',
      name: 'Sheet',
      component: Sheets
    }
  ]
})

export default router
