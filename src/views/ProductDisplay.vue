<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Page Title -->
    <h1 class="text-3xl font-bold text-gray-800 mb-8">{{ currentCategory }}</h1>

    <!-- Category Tabs -->
    <div class="mb-6 border-b border-gray-200">
      <nav class="flex space-x-4" aria-label="Product categories">
        <router-link v-for="category in categories" :key="category.id"
          :to="{ name: 'products', params: { type: category.slug } }" class="px-4 py-2 text-sm font-medium" :class="[
            currentCategory === category.slug
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
          ]">
          {{ category.name }}
        </router-link>
      </nav>
    </div>

    <!-- Products Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div v-for="product in filteredProducts" :key="product.id">
        <ProductCard :product="product" @addToCart="addToCart" />
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredProducts.length === 0" class="text-center py-12">
      <p class="text-gray-500 text-lg">No products found in this category.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Categories data
const categories = ref([
  { id: 1, name: 'Adidas', slug: 'adidas' },
  { id: 2, name: 'Nike', slug: 'nike' },
  { id: 3, name: 'Erke', slug: 'erke' },
  { id: 4, name: 'Allstars', slug: 'allstars' }
])

// Products data (in real app, this would come from an API)
const products = ref([
  {
    id: 1,
    name: 'Sports Shoes',
    description: 'High-quality sports shoes for running and training',
    price: 199.99,
    category: 'nike',
    image: '/src/assets/images/football-shoes copy.jpg'
  },
  // Add more products here
])

// Current category from route params
const currentCategory = computed(() => route.params.type)

// Filtered products based on current category
const filteredProducts = computed(() => {
  if (!currentCategory.value) return products.value
  return products.value.filter(product => product.category === currentCategory.value)
})

// Watch for invalid categories and redirect to first category
watch(currentCategory, (newCategory) => {
  const validCategory = categories.value.find(cat => cat.slug === newCategory)
  if (!validCategory && categories.value.length > 0) {
    router.replace({
      name: 'products',
      params: { type: categories.value[0].slug }
    })
  }
})

// Cart functionality
const addToCart = (product) => {
  // Implement cart logic here
  console.log('Adding to cart:', product)
}

// Load initial data
onMounted(async () => {
  // Here you would typically fetch products from an API
  // await fetchProducts()
})
</script>