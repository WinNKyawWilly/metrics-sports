<script lang="ts" setup>
import type { Product } from '@/types/Product'
import { useRouter } from 'vue-router'
defineProps<{
  products?: Product[]
}>()
const router = useRouter()

const mediaBaseUrl = import.meta.env.VITE_MEDIA_BASE_URL

function goToProduct(product: Product) {
  router.push(`/products/${product.slug}`)
}
</script>

<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-amber-900">
        Featured Products
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <!-- Featured Product Card -->
        <div
          v-for="product in products"
          :key="product.id"
          @click="goToProduct(product)"
          class="bg-gray-50 rounded-lg cursor-pointer overflow-hidden border border-slate-300 transition duration-300 ease-in-out hover:shadow-xl"
        >
          <div class="aspect-w-16 aspect-h-9">
            <img
              :src="`${mediaBaseUrl}/${product.images[0] || 'src/assets/images/no-image.svg'}`"
              :alt="product.name"
              class="w-full h-64 object-cover"
            />
          </div>

          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 text-amber-900">
              {{ product.name }}
            </h3>
            <p class="text-amber-800 mb-4" v-html="product.description"></p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-amber-900"
                >${{ product.price }}</span
              >
              <span
                v-if="product.categories.length > 0"
                class="text-sm text-amber-700"
                >{{ product.categories[0] }}</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Full Width Shop Now Section -->
      <div class="flex justify-center mt-16">
        <RouterLink
          to="/products"
          class="group px-12 py-4 border-2 border-amber-800 text-amber-800 font-semibold rounded-lg transition duration-300 ease-in-out hover:bg-black hover:border-black hover:text-white flex items-center justify-center space-x-3"
        >
          <span class="text-lg">Shop Collection</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
