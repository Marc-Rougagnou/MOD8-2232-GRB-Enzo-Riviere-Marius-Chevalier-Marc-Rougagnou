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
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/CreateAccount',
      name: 'CreateAccount',
      component: CreateAccount
    },
    {
      path:'/Sheets',
      name: 'Sheets',
      component: Sheets
    },
    {
      path:'/Sheets/:id',
      name: 'Sheet',
      component: Sheets
    }
  ]
})

export default router
