import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import AdminAdmins from '@/components/admin/AdminAdmins.vue'
import AdminCustomers from '@/components/admin/AdminCustomers.vue'
import AdminProducts from '@/components/admin/AdminProducts.vue'
import ProductForm from '@/components/admin/ProductForm.vue'
import AdminCategory from '@/components/admin/AdminCategory.vue'
import AdminSales from '@/components/admin/AdminSales.vue'
import AdminEnquiry from '@/components/admin/AdminEnquiry.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminLayout,
      children: [
        {
          path: 'admins',
          component: AdminAdmins,
        },
        {
          path: 'customers',
          component: AdminCustomers,
        },
        {
          path: 'products',
          component: AdminProducts,
        },
        {
          path: 'products/create',
          component: ProductForm,
        },
        {
          path: 'category',
          component: AdminCategory,
        },
        {
          path: 'sales',
          component: AdminSales,
        },
        {
          path: 'inquiries',
          component: AdminEnquiry,
        },
      ],
    },
  ],
})

export default router
