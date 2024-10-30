import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import ProductDetails from '@/views/ProductDetails.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import ContactUs from '@/views/ContactUs.vue'
import ProductDisplay from '@/views/ProductDisplay.vue'
import CheckOut from '@/views/CheckOut.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductView,
    },
    {
      path: '/products/:id',
      name: 'product-details',
      component: ProductDetails,
      props: true,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUs,
    },
    {
      path: '/categories/:type',
      name: 'products',
      component: ProductDisplay,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckOut,
    }
  ],
})

export default router
