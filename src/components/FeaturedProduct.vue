<template>
    <section class="py-16">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12 text-amber-900">Featured Products</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <!-- Featured Product Card -->
                <div v-for="product in featuredProducts" :key="product.id" class="bg-amber-50 rounded-lg overflow-hidden border border-amber-200 
                      transition duration-300 ease-in-out hover:shadow-xl">
                    <div class="aspect-w-16 aspect-h-9">
                        <img :src="product.image" :alt="product.name" class="w-full h-64 object-cover" />
                    </div>

                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2 text-amber-900">{{ product.name }}</h3>
                        <p class="text-amber-800 mb-4">{{ product.description }}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold text-amber-900">${{ product.price }}</span>
                            <span class="text-sm text-amber-700">{{ product.category }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Full Width Shop Now Section -->
            <div class="flex justify-center mt-16">
                <button @click="goToShop" class="group px-12 py-4 border-2 border-amber-800 text-amber-800 font-semibold 
                         rounded-lg transition duration-300 ease-in-out
                         hover:bg-black hover:border-black hover:text-white
                         flex items-center justify-center space-x-3">
                    <span class="text-lg">Shop Collection</span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
export default {
    name: 'FeaturedProducts',
    data() {
        return {
            featuredProducts: [
                {
                    id: 1,
                    name: 'Premium Headphones',
                    description: 'High-quality wireless headphones with noise cancellation',
                    price: 299.99,
                    category: 'Electronics',
                    image: '/api/placeholder/400/320'
                },
                {
                    id: 2,
                    name: 'Smart Watch',
                    description: 'Feature-rich smartwatch with health tracking',
                    price: 199.99,
                    category: 'Wearables',
                    image: '/api/placeholder/400/320'
                },
                {
                    id: 3,
                    name: 'Laptop Backpack',
                    description: 'Durable and spacious laptop backpack with USB charging port',
                    price: 79.99,
                    category: 'Accessories',
                    image: '/api/placeholder/400/320'
                }
            ]
        }
    },
    methods: {
        goToShop() {
            // Add your navigation logic here
            console.log('Navigating to shop page')
        }
    }
}
</script>