import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/HomePage.vue'
import SignIn from '../pages/LogInPage.vue'
import CreateAccount from '../pages/CreateAccountPage.vue'
import Sheets from '../pages/SheetsPage.vue'
import SheetDetail from '../pages/SheetDetailPage.vue'
import AddSheet from '../pages/AddSheetPage.vue'

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
      path:'/sheet-detail/:id',
      name: 'SheetDetail',
      component: SheetDetail
    },
    {
      path: '/add-sheets',
      name: 'AddSheet',
      component: AddSheet
    }
  ]
})

export default router
