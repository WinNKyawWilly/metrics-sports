<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { Product } from '@/types/Product'
import { useRouter } from 'vue-router'

defineProps<{
  product: Product
}>()

const router = useRouter()
const navigateToProduct = product => {
  router.push(`/products/${product.slug}`)
}
const mediaBaseUrl = import.meta.env.VITE_MEDIA_BASE_URL;
</script>
<template>
  <!-- Container with max-width constraint -->
  <div
    class="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden m-2"
  >
    <!-- Product Image -->
    <div class="cursor-pointer" @click="navigateToProduct(product)">
      <div class="relative h-72 bg-gray-200">
        <img
          :src="`${mediaBaseUrl}/${product.images[0] || 'src/assets/images/no-image.svg'}`"
          :alt="product.name"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Product Info -->
      <div class="p-4">
        <h3 class="text-lg font-semibold text-gray-900">{{ product.name }}</h3>
        <p class="text-sm text-gray-600 mt-1">{{ product.category }}</p>
        <div v-if="product.discountPrice" class="flex items-center mt-4">
          <span class="text-lg font-bold text-gray-900 mr-2 line-through"
            >${{ product.price }}</span
          >
          <span class="text-lg font-bold text-red-900"
            >${{ product.discountPrice }}</span
          >
        </div>
        <div v-else class="flex justify-between items-center mt-4">
          <span class="text-lg font-bold text-gray-900"
            >${{ product.price }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
