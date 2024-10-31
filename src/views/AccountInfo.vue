<template>
  <div class="container mx-auto">
    <div class="flex gap-4 p-6">
      <!-- Orders Table (Left Section) -->
      <div class="w-2/3 bg-white rounded-lg shadow-md p-4">
        <h2 class="text-lg font-semibold mb-4">Orders</h2>
        <table
          class="min-w-full border border-gray-200 rounded-md overflow-hidden"
        >
          <thead class="bg-gray-100 text-gray-600">
            <tr>
              <th class="px-4 py-2 text-left border-b">Order ID</th>
              <th class="px-4 py-2 text-left border-b">Order Items</th>
              <th class="px-4 py-2 text-left border-b">Order Total</th>
              <th class="px-4 py-2 text-left border-b">Order Status</th>
              <th class="px-4 py-2 text-left border-b">Order At</th>
            </tr>
          </thead>
          <tbody>
            <!-- Example order rows, replace with actual data -->
            <tr
              v-for="order in orders"
              :key="order.id"
              class="text-gray-700 hover:bg-gray-50"
            >
              <td class="px-4 py-2 border-b">{{ order.id }}</td>
              <td class="px-4 py-2 border-b">{{ order.total_items }}</td>
              <td class="px-4 py-2 border-b">{{ order.total_price }}</td>
              <td class="px-4 py-2 border-b">Success</td>
              <td class="px-4 py-2 border-b">
                {{ new Date(order.created_at).toLocaleString() }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Account Information (Right Section) -->
      <div class="w-1/3 bg-white rounded-lg shadow-md p-4" v-if="customer">
        <h2 class="text-lg font-semibold mb-4">Account Information</h2>
        <div class="space-y-4 text-gray-700">
          <div>
            <span class="font-semibold">Name:</span> {{ customer.name }}
          </div>
          <div>
            <span class="font-semibold">Email:</span> {{ customer.email }}
          </div>
          <div>
            <span class="font-semibold">Phone Number:</span>
            {{ customer.phone }}
          </div>
          <div>
            <span class="font-semibold">Location:</span> {{ customer.address }}
          </div>
          <button
            @click="logout"
            class="mt-6 w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth'
import router from '@/router'
import { toast } from 'vue3-toastify'
import { onMounted, ref } from 'vue'
import { AccountService, type OrderItemDto } from '@/services/AccountService'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const { customer } = storeToRefs(authStore)
const orders = ref<OrderItemDto[]>([])

async function logout() {
  // Clear user data and redirect to login page
  authStore.logout()
  await router.push({ name: 'login' })

  // Show a toast message
  setTimeout(() => {
    toast('You have been logged out', {
      type: 'success',
    })
  }, 500)
}

onMounted(() => {
  fetchData()
})

async function fetchData() {
  orders.value = await AccountService.getOrders()
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
