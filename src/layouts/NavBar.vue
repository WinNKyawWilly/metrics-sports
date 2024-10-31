<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <RouterLink to="/" class="flex-shrink-0 mr-4">
          <img src="@/assets/images/Apex-logos_black.png" alt="Apex Sports Logo"
            class="h-8 md:h-10 w-auto object-contain" />
        </RouterLink>

        <div class="hidden lg:flex flex-1 overflow-x-auto">
          <div class="flex space-x-4">
            <RouterLink v-for="(item, index) in navItems" :key="index" :to="item.href"
              class="text-gray-600 hover:text-gray-900 px-2 py-2 whitespace-nowrap text-sm font-medium">
              {{ item.name }}
            </RouterLink>
          </div>
        </div>

        <!-- Right side icons -->
        <div class="hidden lg:flex items-center space-x-4 ml-4">
          <div class="relative">
            <input v-model="searchQuery" type="text" placeholder="Search"
              class="bg-slate-100 rounded-full py-1 px-3 pl-8 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64" />
            <MagnifyingGlassIcon class="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4"></MagnifyingGlassIcon>
          </div>
          <RouterLink to="/cart" class="text-gray-600 hover:text-gray-900">
            <ShoppingBagIcon class="size-6"></ShoppingBagIcon>
          </RouterLink>
          <RouterLink :to="isLoggedIn ? '/account' : '/login'" class="text-gray-600 hover:text-gray-900">
            <UserCircleIcon class="size-6"></UserCircleIcon>
          </RouterLink>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden flex items-center">
          <button @click="toggleMenu" class="text-gray-600 hover:text-gray-900 focus:outline-none">
            <svg v-if="!isMenuOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="lg:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a v-for="(item, index) in navItems" :key="index" :href="item.href"
          class="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
          {{ item.name }}
        </a>
        <div class="px-3 py-2">
          <input v-model="searchQuery" type="text" placeholder="Search"
            class="w-full bg-gray-100 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div class="flex justify-start space-x-4 px-3 py-2">
          <RouterLink to="/cart" class="text-gray-600 hover:text-gray-900">
            <ShoppingBagIcon class="size-6"></ShoppingBagIcon>
          </RouterLink>
          <RouterLink :to="isLoggedIn ? '/account' : '/login'" class="text-gray-600 hover:text-gray-900">
            <UserCircleIcon class="size-6"></UserCircleIcon>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from '@heroicons/vue/24/outline'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'

const isMenuOpen = ref(false)
const searchQuery = ref('')
const navItems = ref([
  { name: 'Shop', href: '/products' },
  { name: 'Brands', href: '/categories/brands' },
  { name: 'Accessories', href: '/categories/accessories' },
  { name: 'Sportswear', href: '/categories/sportswear' },
  { name: 'Contact us', href: '/contact-us' },
])

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

const authStore = useAuthStore();

const {isLoggedIn} = storeToRefs(authStore)
</script>

<style></style>
