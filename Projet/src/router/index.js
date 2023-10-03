import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/HomePage.vue'
import SignIn from '../pages/LogInPage.vue'
import CreateAccount from '../pages/CreateAccountPage.vue'
import ProfilePage from "@/pages/ProfilePage.vue";
import SheetsPage from "@/pages/SheetsPage.vue";
import SheetItem from "@/components/SheetItem.vue";
import store from "@/store";


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
      component: SheetsPage
    },
    {
      path:'/sheets/:id',
      name: 'Sheet',
      component: SheetItem
    },
    {
      path:'/profile/:username',
      name: 'Profile',
      component: ProfilePage
    }

  ]
})

export default router
