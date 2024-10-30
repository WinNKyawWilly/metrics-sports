<template>
    <NavBar />
    <div class="container mx-auto px-4 py-8 my-5">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Left Side - Image Gallery -->
        <div class="flex gap-4 w-full max-w-4xl">
            <!-- Thumbnail Images - Left Side -->
            <div class="flex flex-col gap-4 w-24">
                <div
                    v-for="(image, index) in product.images"
                    :key="index"
                    class="aspect-square cursor-pointer rounded-lg overflow-hidden border-2"
                    :class="selectedImage === image ? 'border-black' : 'border-transparent'"
                    @click="selectedImage = image"
                >
                    <img
                    :src="image"
                    :alt="`${product.name} view ${index + 1}`"
                    class="w-full h-full object-cover"
                    />
                </div>
            </div>

            <!-- Main Image -->
            <div class="flex-1 aspect-square rounded-lg overflow-hidden bg-gray-100">
            <img
                :src="selectedImage"
                :alt="product.name"
                class="w-full h-full object-cover"
            />
            </div>
        </div>
  
        <!-- Right Side - Product Information -->
        <div class="space-y-6">
          <!-- Product Name -->
          <h1 class="text-3xl font-bold text-gray-900">{{ product.name }}</h1>
  
          <!-- Reviews -->
          <div class="flex items-center space-x-4">
            <div class="flex items-center">
              <template v-for="i in 5" :key="i">
                <svg
                  :class="i <= Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'"
                  class="h-5 w-5 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </template>
              <span class="ml-2 text-sm text-gray-600">
                {{ product.rating }} ({{ product.reviewCount }} reviews)
              </span>
            </div>
          </div>
  
          <!-- Price -->
          <div class="space-y-2">
            <div class="flex items-center space-x-4">
              <span class="text-3xl font-bold text-gray-900">${{ product.discountPrice || product.price }}</span>
              <span v-if="product.discountPrice" class="text-xl text-gray-500 line-through">${{ product.price }}</span>
              <span 
                v-if="product.discountPrice" 
                class="px-2 py-1 bg-red-100 text-red-700 text-sm font-medium rounded"
              >
                {{ calculateDiscount(product.price, product.discountPrice) }}% OFF
              </span>
            </div>
          </div>
  
          <!-- Description -->
          <p class="text-gray-600">{{ product.description }}</p>
  
          <!-- Shipping Info -->
          <div class="border-t border-b border-gray-200 py-6">
            <div class="grid grid-cols-3 gap-4">
              <div class="text-center">
                <i class="fas fa-truck me-2"></i>
                <p class="text-sm font-medium">Free Shipping Worldwide</p>
              </div>
              <div class="text-center">
                <i class="fas fa-undo me-2"></i>
                <p class="text-sm font-medium">30 days Return</p>
              </div>
              <div class="text-center">
                <i class="fa-regular fa-credit-card me-2"></i>
                <p class="text-sm font-medium">100% Secure Payment</p>
              </div>
            </div>
          </div>
  
          <!-- Add to Cart Button -->
          <button 
            class="w-full bg-black text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            @click="handleAddToCart"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import NavBar from '@/layouts/NavBar.vue';
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { Product } from '@/types';
  
  // Example product data - replace with your API call
  const product = ref<Product>({
    id: '1',
    name: 'Premium Product',
    images: [
      '/product-1.jpg',
      '/product-2.jpg',
      '/product-3.jpg',
      '/product-4.jpg',
    ],
    price: 199.99,
    discountPrice: 159.99,
    rating: 4.5,
    reviewCount: 128,
    description: 'This premium product features high-quality materials and exceptional craftsmanship. Perfect for those who appreciate fine details and superior performance.',
  });
  
  const selectedImage = ref(product.value.images[0]);
  
  const calculateDiscount = (originalPrice: number, discountPrice: number): number => {
    return Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
  };
  
  const handleAddToCart = () => {
    // Implement your add to cart logic here
    console.log('Adding to cart:', product.value.id);
  };
  
  // In a real application, you would fetch the product data based on the route parameter
  const route = useRoute();
  const productId = route.params.id as string;
  
  // Example of how to fetch product data
  // const fetchProductData = async () => {
  //   try {
  //     const response = await fetch(`/api/products/${productId}`);
  //     const data = await response.json();
  //     product.value = data;
  //     selectedImage.value = data.images[0];
  //   } catch (error) {
  //     console.error('Error fetching product:', error);
  //   }
  // };
  
  // onMounted(() => {
  //   fetchProductData();
  // });
  </script>
