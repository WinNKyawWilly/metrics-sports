import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { createPinia } from 'pinia'
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css';


const app = createApp(App)

const pinia = createPinia()
app.use(router)
app.use(pinia)
app.use(Vue3Toastify, {
  autoClose: 3000,
})

app.mount('#app')
