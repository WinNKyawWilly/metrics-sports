<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { toast } from 'vue3-toastify'

const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const phone = ref('')
const shippingAddress = ref('')

const authStore = useAuthStore()

const handleSignUp = async () => {
  if (password.value !== confirmPassword.value) {
    return toast('Passwords do not match.', { type: 'error' })
  }
  await authStore.signup({
    name: name.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
    phone: phone.value,
    address: shippingAddress.value,
  })

  await router.push('/')
  setTimeout(
    () => toast('Account created successfully.', { type: 'success' }),
    500,
  )
}
</script>

<template>
  <div class="container mx-auto">
    <div class="min-h-screen flex">
      <!-- Left Side - Login Form -->
      <div class="w-full md:w-1/2 p-8 flex flex-col">
        <div
          class="max-w-md w-full mx-auto flex-grow flex flex-col justify-center"
        >
          <h1 class="text-3xl font-bold mb-2">Sign Up Account</h1>
          <p class="text-gray-600 mb-8">
            Create a brand-new account to shop our store
          </p>

          <form @submit.prevent="handleSignUp" class="space-y-6">
            <div class="relative flex items-center">
              <input
                id="name"
                type="text"
                v-model="name"
                required
                class="mt-1 block w-full px-3 py-2 border-b focus:border-b-yellow-500 focus:outline-none transition-colors transition-duration-300"
                placeholder="Full Name"
              />
              <i class="absolute right-3 fas fa-address-book"></i>
            </div>

            <div class="relative flex items-center">
              <input
                id="email"
                type="email"
                v-model="email"
                required
                class="mt-1 block w-full px-3 py-2 border-b focus:border-b-yellow-500 focus:outline-none transition-colors transition-duration-300"
                placeholder="Email"
              />
              <i class="absolute right-3 fas fa-envelope"></i>
            </div>

            <div class="relative flex items-center">
              <input
                id="password"
                type="password"
                v-model="password"
                required
                class="mt-1 block w-full px-3 py-2 border-b focus:border-b-yellow-500 focus:outline-none transition-colors transition-duration-300"
                placeholder="Password"
              />
              <i class="absolute right-3 fas fa-lock"></i>
            </div>

            <div class="relative flex items-center">
              <input
                id="confirm-password"
                type="password"
                v-model="confirmPassword"
                required
                class="mt-1 block w-full px-3 py-2 border-b focus:border-b-yellow-500 focus:outline-none transition-colors transition-duration-300"
                placeholder="Confirm Password"
              />
              <i class="absolute right-3 fas fa-lock"></i>
            </div>

            <div class="relative flex items-center">
              <input
                id="phone"
                type="number"
                v-model="phone"
                required
                class="mt-1 block w-full px-3 py-2 border-b focus:border-b-yellow-500 focus:outline-none transition-colors transition-duration-300"
                placeholder="Phone"
              />
              <i class="absolute right-3 fas fa-phone"></i>
            </div>

            <div class="relative flex items-center">
              <input
                id="shipping-address"
                type="text"
                v-model="shippingAddress"
                required
                class="mt-1 block w-full px-3 py-2 border-b focus:border-b-yellow-500 focus:outline-none transition-colors transition-duration-300"
                placeholder="Shipping Address"
              />
              <i class="absolute right-3 fas fa-address-book"></i>
            </div>

            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border-b border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-400 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Sign Up
            </button>
          </form>

          <div class="mt-6 text-center">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">OR</span>
              </div>
            </div>

            <RouterLink
              to="/login"
              class="mt-8 block text-yellow-600 rounded hover:text-yellow-500 border border-yellow-500 py-2 px-4"
            >
              Login
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Right Side - Login Image -->
      <div class="hidden md:flex md:w-1/2 items-center justify-center">
        <div class="w-3/4 max-w-md p-4">
          <img
            src="/src/assets/images/customer-signup.svg"
            alt="Login"
            class="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
