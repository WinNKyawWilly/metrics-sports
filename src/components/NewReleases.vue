<template>
    <section class="max-w-7xl mx-auto px-4 py-12">
        <!-- Header -->
        <div class="flex justify-between items-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900">New Releases</h2>
            <div class="flex space-x-4">
                <button @click="scroll('left')"
                    class="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                    :class="{ 'opacity-50 cursor-not-allowed': isAtStart }" :disabled="isAtStart">
                    <svg class="h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button @click="scroll('right')"
                    class="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                    :class="{ 'opacity-50 cursor-not-allowed': isAtEnd }" :disabled="isAtEnd">
                    <svg class="h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Product Cards Container -->
        <div class="relative">
            <div ref="cardContainer" class="flex space-x-6 overflow-x-hidden scroll-smooth">
                <div v-for="product in products" :key="product.id" class="flex-none w-72">
                    <!-- Product Card -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <!-- Product Image -->
                        <div class="relative h-72 bg-gray-200">
                            <img :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
                            <button
                                class="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100">
                                <svg class="h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>
                        </div>

                        <!-- Product Info -->
                        <div class="p-4">
                            <h3 class="text-lg font-semibold text-gray-900">{{ product.name }}</h3>
                            <p class="text-sm text-gray-600 mt-1">{{ product.category }}</p>
                            <div class="flex justify-between items-center mt-4">
                                <span class="text-lg font-bold text-gray-900">${{ product.price }}</span>
                                <button
                                    class="px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
export default {
    name: 'NewReleases',
    data() {
        return {
            isAtStart: true,
            isAtEnd: false,
            products: [
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
        }
    },
    mounted() {
        this.checkScroll();
        this.$refs.cardContainer.addEventListener('scroll', this.checkScroll);
    },
    beforeUnmount() {
        this.$refs.cardContainer.removeEventListener('scroll', this.checkScroll);
    },
    methods: {
        scroll(direction) {
            const container = this.$refs.cardContainer;
            const scrollAmount = container.offsetWidth - 100;

            if (direction === 'left') {
                container.scrollLeft -= scrollAmount;
            } else {
                container.scrollLeft += scrollAmount;
            }
        },
        checkScroll() {
            const container = this.$refs.cardContainer;
            this.isAtStart = container.scrollLeft <= 0;
            this.isAtEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth;
        }
    }
}
</script>