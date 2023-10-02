import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/Sign-in.vue'
import CreateAccount from '../views/Create-Account.vue'
import Sheets from '../views/Sheets.vue'
import HomePage from "../pages/HomePage.vue";
import SheetPage from "../pages/SheetsPage.vue";
import SheetsPage from "../pages/SheetsPage.vue";
import CreateAccountPage from "@/pages/CreateAccountPage.vue";
import LogInPage from "@/pages/LogInPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: LogInPage
    },
    {
      path: '/create-account',
      name: 'CreateAccount',
      component: CreateAccountPage
    },
    {
      path:'/sheets',
      name: 'Sheets',
      component: SheetsPage
    },
    {
      path:'/sheets/:id',
      name: 'Sheet',
      component: Sheets
    }
  ]
})

export default router
