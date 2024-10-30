<template>
    <section class="max-w-7xl mx-auto px-4 py-12">
      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl font-bold text-gray-900">New Releases</h2>
        <div class="flex space-x-4">
          <button 
            @click="scroll('left')"
            class="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            :class="{ 'opacity-50 cursor-not-allowed': isAtStart }" 
            :disabled="isAtStart"
          >
            <svg class="h-6 w-6 text-gray-600" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            @click="scroll('right')"
            class="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            :class="{ 'opacity-50 cursor-not-allowed': isAtEnd }" 
            :disabled="isAtEnd"
          >
            <svg class="h-6 w-6 text-gray-600" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
  
      <!-- Products Slider -->
      <div class="relative">
        <div ref="containerRef" class="flex space-x-6 overflow-x-hidden scroll-smooth">
          <div v-for="product in products" :key="product.id" class="flex-none w-72">
            <ProductCard :product="product" />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import ProductCard from '@/components/ProductCard.vue'
  import { Product } from '@/types/Product' 
  
  // State
  const containerRef = ref<HTMLElement | null>(null)
  const isAtStart = ref(true)
  const isAtEnd = ref(false)
  
  // Products data
  const products: Product[] = [
    {
      id: 1,
      name: 'Nike Air Max 2024',
      category: 'Running Shoes',
      price: '199.99',
      image: '/api/placeholder/400/400'
    },
    {
      id: 2,
      name: 'Adidas Ultra Boost',
      category: 'Running Shoes',
      price: '179.99',
      image: '/api/placeholder/400/400'
    },
    {
      id: 3,
      name: 'Puma RS-X',
      category: 'Lifestyle Shoes',
      price: '129.99',
      image: '/api/placeholder/400/400'
    },
    {
      id: 4,
      name: 'New Balance 990',
      category: 'Running Shoes',
      price: '184.99',
      image: '/api/placeholder/400/400'
    },
    {
      id: 5,
      name: 'Nike Zoom Fly',
      category: 'Running Shoes',
      price: '159.99',
      image: '/api/placeholder/400/400'
    },
    {
      id: 6,
      name: 'Adidas NMD',
      category: 'Lifestyle Shoes',
      price: '149.99',
      image: '/api/placeholder/400/400'
    }
  ]
  
  // Methods
  const checkScroll = () => {
    const container = containerRef.value
    if (!container) return
    
    isAtStart.value = container.scrollLeft <= 0
    isAtEnd.value = container.scrollLeft + container.offsetWidth >= container.scrollWidth
  }
  
  const scroll = (direction: 'left' | 'right') => {
    const container = containerRef.value
    if (!container) return
    
    const scrollAmount = container.offsetWidth - 100
    container.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount
  }
  
  // Lifecycle
  onMounted(() => {
    containerRef.value?.addEventListener('scroll', checkScroll)
    checkScroll()
  })
  
  onUnmounted(() => {
    containerRef.value?.removeEventListener('scroll', checkScroll)
  })
  </script>