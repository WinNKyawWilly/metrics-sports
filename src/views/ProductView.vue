<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'

const products = [
  {
    id: 1,
    name: 'Nike Air Max 2024',
    category: 'Running Shoes',
    price: '199.99',
    image: '/api/placeholder/400/400',
  },
  {
    id: 2,
    name: 'Adidas Ultra Boost',
    category: 'Running Shoes',
    price: '179.99',
    image: '/api/placeholder/400/400',
  },
  {
    id: 3,
    name: 'Puma RS-X',
    category: 'Lifestyle Shoes',
    price: '129.99',
    image: '/api/placeholder/400/400',
  },
  {
    id: 4,
    name: 'New Balance 990',
    category: 'Running Shoes',
    price: '184.99',
    image: '/api/placeholder/400/400',
  },
  {
    id: 5,
    name: 'Nike Zoom Fly',
    category: 'Running Shoes',
    price: '159.99',
    discountPrice: '139.99',
    image: '/api/placeholder/400/400',
  },
  {
    id: 6,
    name: 'Adidas NMD',
    category: 'Lifestyle Shoes',
    price: '149.99',
    image: '/api/placeholder/400/400',
  },
]
</script>

<template>
  <main>
    <h1 class="text-left text-4xl font-semibold m-8">All Products</h1>
    <hr />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </main>
</template>
<style scoped></style>
