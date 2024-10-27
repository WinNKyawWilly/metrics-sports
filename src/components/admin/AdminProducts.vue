<template>
    <div class="p-6">
        <!-- Header Section -->
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-semibold text-gray-800">Product Inventory</h2>
            <router-link to="/admin/products/create"
                class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <span class="mr-2">+</span>
                Add Product
            </router-link>
        </div>

        <!-- Table Section -->
        <div class="overflow-x-auto rounded-lg shadow">
            <table class="w-full bg-white">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Categories</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.
                            of Sales</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr v-for="product in products" :key="product.id" class="hover:bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            #{{ product.id }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm font-medium text-gray-900">{{ product.name }}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">${{ formatPrice(product.price) }}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex flex-wrap gap-1">
                                <span v-for="category in product.categories" :key="category"
                                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    {{ category }}
                                </span>
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">
                                {{ product.sales.toLocaleString() }}
                                <span :class="[
                                    'ml-1 text-xs',
                                    product.salesTrend > 0 ? 'text-green-600' : 'text-red-600'
                                ]">
                                    {{ product.salesTrend > 0 ? '↑' : '↓' }}
                                    {{ Math.abs(product.salesTrend) }}%
                                </span>
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <img :src="product.image" :alt="product.name"
                                class="h-12 w-12 rounded-lg object-cover border border-gray-200">
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div class="flex space-x-3">
                                <button @click="handleEdit(product)" class="text-blue-600 hover:text-blue-900">
                                    Edit
                                </button>
                                <button @click="handleDelete(product.id)" class="text-red-600 hover:text-red-900">
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ProductTable',
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Wireless Headphones',
                    price: 199.99,
                    categories: ['Electronics', 'Audio'],
                    sales: 1234,
                    salesTrend: 5.2,
                    image: 'https://via.placeholder.com/48'
                },
                {
                    id: 2,
                    name: 'Smart Watch Pro',
                    price: 299.99,
                    categories: ['Electronics', 'Wearables'],
                    sales: 856,
                    salesTrend: -2.1,
                    image: 'https://via.placeholder.com/48'
                },
                {
                    id: 3,
                    name: 'Laptop Stand',
                    price: 49.99,
                    categories: ['Accessories', 'Office'],
                    sales: 2541,
                    salesTrend: 8.7,
                    image: 'https://via.placeholder.com/48'
                }
                // Add more sample data as needed
            ]
        }
    },
    methods: {
        formatPrice(price) {
            return price.toFixed(2)
        },
        handleCreate() {
        },
        handleEdit(product) {
            // Implement edit functionality
            console.log('Edit product:', product)
        },
        handleDelete(productId) {
            // Implement delete functionality
            console.log('Delete product:', productId)
        }
    }
}
</script>