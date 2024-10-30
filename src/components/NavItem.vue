<template>
    <div class="relative inline-block text-left">
      <!-- Main Navigation Item -->
      <button
        @click="toggleDropdown"
        @blur="closeOnBlur"
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
        :class="{ 'text-gray-900': isOpen }"
      >
        {{ category }}
        <!-- Dropdown Arrow -->
        <svg
          class="w-5 h-5 ml-2 -mr-1 transition-transform duration-200"
          :class="{ 'rotate-180': isOpen }"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
  
      <!-- Dropdown Menu -->
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div
          v-if="isOpen"
          class="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="py-1">
            <a
              v-for="item in items"
              :key="item.id"
              :href="item.href"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              {{ item.name }}
            </a>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  // Props definition
  const props = defineProps({
    category: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true,
      // Each item should have: { id: number/string, name: string, href: string }
      default: () => []
    }
  })
  
  // Dropdown state
  const isOpen = ref(false)
  
  // Methods
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value
  }
  
  const closeOnBlur = (event) => {
    // Give time for click events on dropdown items to fire
    setTimeout(() => {
      isOpen.value = false
    }, 200)
  }
  </script>