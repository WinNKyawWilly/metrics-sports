<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Page Title -->
    <h1 class="text-3xl font-bold text-gray-800 mb-8 capitalize">
      {{ currentCategoryType }}
    </h1>

    <!-- Category Tabs -->
    <div class="mb-6 border-b border-gray-200">
      <nav class="flex space-x-4" aria-label="Product categories">
        <a
          @click="currentCategory = category.slug"
          v-for="(category, index) in categories"
          :key="index"
          class="px-4 py-2 text-sm font-medium"
          :class="[
            currentCategory === category.slug
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700 hover:border-gray-300',
          ]"
        >
          {{ category.name }}
        </a>
      </nav>
    </div>

    <!-- Products Grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <div v-for="product in paginatedProducts" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>

    <LoaderComponent size="60px" v-if="loading"></LoaderComponent>
    <div class="flex justify-center mt-8" v-if="totalPages > 0">
      <PaginationComponent
        :currentPage="page"
        :totalPages="totalPages"
        @pageChange="page = $event"
      />
    </div>

    <!-- Empty State -->
    <div v-if="paginatedProducts.length === 0" class="text-center py-12">
      <p class="text-gray-500 text-lg">No products found in this category.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { productService } from '@/services/ProductService'
import type { Product } from '@/types/Product'
import LoaderComponent from '@/components/LoaderComponent.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'

const route = useRoute()
const router = useRouter()
const categories = ref<{ name: string; slug: string }[]>([])
const paginatedProducts = ref<Product[]>([])
const currentCategory = ref<string | undefined>(undefined)
const page = ref<number>(1)
const loading = ref<boolean>(true)
const totalPages = ref<number>(0)

async function fetchCategories() {
  // Fetch categories from an API
  categories.value = await productService.getCategoriesByType(route.params.type)
  if (categories.value.length > 0) {
    currentCategory.value = categories.value[0].slug
  }
}

async function fetchProducts() {
  console.log('Fetching products...')
  loading.value = true
  const { products, pagination } = await productService.getProductsByCategory(
    currentCategory.value,
  )
  paginatedProducts.value = products.map(product => ({
    ...product,
    images: product.product_images.map(image => image.image_path),
  }))

  totalPages.value = Math.ceil(pagination.total / 10) // Assuming 10 products per page
  loading.value = false
}

// Current category from route params
const currentCategoryType = computed(() => route.params.type)

onMounted(() => {
  fetchCategories()
})

watch(currentCategoryType, fetchCategories)

watch(currentCategory, fetchProducts)
</script>
