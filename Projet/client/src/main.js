import './assets/main.css'
import './store.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api/v1'
axios.defaults.withCredentials = true

const app = createApp(App)

app.use(router)

app.mount('#app')
