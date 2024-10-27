<template>
    <nav class="bg-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center h-16">
                <!-- Logo -->
                <div class="flex-shrink-0 mr-4">
                    <span class="text-2xl font-bold">Apex Sports</span>
                </div>

                <!-- Desktop Navigation with horizontal scroll -->
                <div class="hidden lg:flex flex-1 overflow-x-auto scrollbar-hide">
                    <div class="flex space-x-4">
                        <a v-for="(item, index) in navItems" :key="index" :href="item.href"
                            class="text-gray-600 hover:text-gray-900 px-2 py-2 whitespace-nowrap text-sm font-medium">
                            {{ item.name }}
                        </a>
                    </div>
                </div>

                <!-- Right side icons -->
                <div class="hidden lg:flex items-center space-x-4 ml-4">
                    <div class="relative">
                        <input v-model="searchQuery" type="text" placeholder="Search"
                            class="bg-gray-100 rounded-full py-1 px-3 pl-8 focus:outline-none focus:ring-2 focus:ring-blue-500 w-32" />
                        <svg class="absolute left-2 top-2 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <button class="text-gray-600 hover:text-gray-900">
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </button>
                    <button class="text-gray-600 hover:text-gray-900">
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </button>
                </div>

                <!-- Mobile menu button -->
                <div class="lg:hidden flex items-center">
                    <button @click="toggleMenu" class="text-gray-600 hover:text-gray-900 focus:outline-none">
                        <svg v-if="!isMenuOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg v-else class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile menu -->
        <div v-if="isMenuOpen" class="lg:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <a v-for="(item, index) in navItems" :key="index" :href="item.href"
                    class="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                    {{ item.name }}
                </a>
                <div class="px-3 py-2">
                    <input v-model="searchQuery" type="text" placeholder="Search"
                        class="w-full bg-gray-100 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div class="flex justify-start space-x-4 px-3 py-2">
                    <button class="text-gray-600 hover:text-gray-900">
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </button>
                    <button class="text-gray-600 hover:text-gray-900">
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
export default {
    name: 'NavigationBar',
    data() {
        return {
            isMenuOpen: false,
            searchQuery: '',
            navItems: [
                { name: 'Shop', href: '#' },
                { name: 'Brands', href: '#' },
                { name: 'Accessories', href: '#' },
                { name: 'Sportswear', href: '#' },
                { name: 'Shop', href: '#' },
                { name: 'Brands', href: '#' },
                { name: 'Accessories', href: '#' },
                { name: 'Sportswear', href: '#' },
                { name: 'Shop', href: '#' },
                { name: 'Brands', href: '#' },
                { name: 'Accessories', href: '#' },
                { name: 'Sportswear', href: '#' },
                { name: 'Contact us', href: '#' }
            ]
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        }
    }
}
</script>

<style>
/* Hide scrollbar but keep functionality */
.scrollbar-hide {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari and Opera */
}
</style>