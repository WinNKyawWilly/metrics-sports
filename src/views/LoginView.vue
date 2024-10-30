<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { toast } from 'vue3-toastify'

const router = useRouter()
const email = ref('')
const password = ref('')
const authStore = useAuthStore()
const loading = ref(false)

const handleLogin = async () => {
  loading.value = true
  try {
    await authStore.login(email.value, password.value)
    await router.push('/')
    setTimeout(
      () =>
        toast(`Welcome back, ${authStore.customer?.name}!`, {
          type: 'success',
        }),
      500,
    )
  } catch (error) {
    console.error('Error logging in:', error)
  }

  loading.value = false
}

const navigateToSignUp = () => {
  router.push('/signup')
}
</script>

<template>
  <div class="min-h-screen flex">
    <!-- Left Side - Login Form -->
    <div class="w-full md:w-1/2 p-8 flex flex-col">
      <div
        class="max-w-md w-full mx-auto flex-grow flex flex-col justify-center"
      >
        <h1 class="text-3xl font-bold mb-2">Login to Your Shopping Account</h1>
        <p class="text-gray-600 mb-8">
          Enter your email and password to proceed
        </p>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <div>
            <input
              id="email"
              type="email"
              v-model="email"
              required
              class="mt-1 block w-full px-3 py-3 border-b transition-colors transition-duration-300 focus:border-b-yellow-500 focus:outline-none"
              placeholder="Email"
            />
          </div>

          <div>
            <input
              id="password"
              type="password"
              v-model="password"
              required
              class="mt-1 block w-full px-3 py-3 border-b transition-colors transition-duration-300 focus:border-b-yellow-500 shadow-sm focus:outline-none"
              placeholder="Password"
              autocomplete="current_password"
            />
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full flex justify-center py-3 rounded px-4 border border-transparent text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none"
            :class="{ 'bg-yellow-300': loading }"
          >
            {{ loading ? 'Logging in...' : 'Login' }}
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

          <button
            @click="navigateToSignUp"
            class="mt-6 text-yellow-600 hover:text-yellow-500"
          >
            Sign Up (It's free!)
          </button>
        </div>
      </div>
    </div>

    <!-- Right Side - Login Image -->
    <div class="hidden md:block md:w-1/2">
      <div class="h-full flex items-center justify-center">
        <div class="w-full max-w-md p-4">
          <img
            src="/src/assets/images/login-graphic.svg"
            alt="Login"
            class="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
