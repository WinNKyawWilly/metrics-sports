<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { productService } from '@/services/ProductService'
import type { Product } from '@/types/Product'
import { ref, watch } from 'vue'
import LoaderComponent from '@/components/LoaderComponent.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'

const page = ref<number>(1)
const paginatedProducts = ref<Product[]>([])
const loading = ref<boolean>(true)
const totalPages = ref<number>(0)

const fetchProducts = async () => {
  loading.value = true
  const { products, pagination } = await productService.getProducts(page.value)
  paginatedProducts.value = products
  totalPages.value = Math.ceil(pagination.total / 10) // Assuming 10 products per page
  loading.value = false
}

watch(page, () => {
  fetchProducts()
}, { immediate: true })
</script>

<template>
  <main class="container mx-auto">
    <h1 class="text-left text-4xl font-semibold m-8">All Products</h1>
    <hr />
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8"
      v-if="!loading"
    >
      <ProductCard
        v-for="product in paginatedProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <LoaderComponent size="60px" v-show="loading"></LoaderComponent>
    <div class="flex justify-center mt-8 mb-10">
      <PaginationComponent
        :currentPage="page"
        :totalPages="totalPages"
        @pageChange="page = $event"
      />
    </div>
  </main>
</template>
<style scoped></style>
