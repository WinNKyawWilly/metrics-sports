<template>
    <div class="p-6">
        <!-- Header Section -->
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-semibold text-gray-800">Categories</h2>
            <button @click="openModal"
                class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <span class="mr-2">+</span>
                Add Category
            </button>
        </div>

        <!-- Table Section -->
        <div class="overflow-x-auto rounded-lg shadow">
            <table class="w-full bg-white">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Category</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slug
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Category Type</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr v-for="category in categories" :key="category.id" class="hover:bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            #{{ category.id }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm font-medium text-gray-900">{{ category.name }}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-500">{{ category.slug }}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span :class="[
                                'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                                category.type === 'Shop' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                            ]">
                                {{ category.type }}
                            </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div class="flex space-x-3">
                                <button @click="handleEdit(category)" class="text-blue-600 hover:text-blue-900">
                                    Edit
                                </button>
                                <button @click="handleDelete(category.id)" class="text-red-600 hover:text-red-900">
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Create Category Modal -->
        <div v-if="isModalOpen" class="fixed inset-0 z-50 overflow-y-auto">
            <!-- Backdrop -->
            <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" @click="closeModal"></div>

            <!-- Modal Content -->
            <div class="relative min-h-screen flex items-center justify-center p-4">
                <div class="relative bg-white rounded-lg w-full max-w-md">
                    <!-- Modal Header -->
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h3 class="text-xl font-semibold text-gray-900">Create Category</h3>
                    </div>

                    <!-- Modal Body -->
                    <div class="px-6 py-4">
                        <form @submit.prevent="handleSubmit">
                            <!-- Name Input -->
                            <div class="mb-4">
                                <label class="block text-sm font-medium text-gray-700 mb-1">
                                    Name
                                </label>
                                <input v-model="formData.name" type="text" required
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter category name" />
                            </div>

                            <!-- Category Type Select -->
                            <div class="mb-4">
                                <label class="block text-sm font-medium text-gray-700 mb-1">
                                    Category Type
                                </label>
                                <select v-model="formData.type" required
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                    <option value="" disabled>Select category type</option>
                                    <option v-for="type in categoryTypes" :key="type" :value="type">
                                        {{ type }}
                                    </option>
                                </select>
                            </div>

                            <!-- Modal Footer -->
                            <div class="flex justify-end space-x-3 mt-6">
                                <button type="button" @click="closeModal"
                                    class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                                    Close
                                </button>
                                <button type="submit"
                                    class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                    Create Category
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'CategoryTableWithModal',
    data() {
        return {
            isModalOpen: false,
            formData: {
                name: '',
                type: ''
            },
            categoryTypes: [
                'Shop',
                'Brands',
                'Accessories',
                'Sportswear'
            ],
            categories: [
                {
                    id: 1,
                    name: 'Summer Collection',
                    slug: 'summer-collection',
                    type: 'Shop'
                },
                {
                    id: 2,
                    name: 'Nike',
                    slug: 'nike',
                    type: 'Brands'
                },
                {
                    id: 3,
                    name: 'Bags',
                    slug: 'bags',
                    type: 'Accessories'
                }
                // Add more sample data as needed
            ]
        }
    },
    methods: {
        openModal() {
            this.isModalOpen = true
            this.formData = {
                name: '',
                type: ''
            }
        },
        closeModal() {
            this.isModalOpen = false
        },
        handleSubmit() {
            // Create slug from name
            const slug = this.formData.name
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^\w\-]+/g, '')

            // Create new category
            const newCategory = {
                id: this.categories.length + 1,
                name: this.formData.name,
                slug: slug,
                type: this.formData.type
            }

            // Add to categories
            this.categories.push(newCategory)

            // Close modal and reset form
            this.closeModal()
        },
        handleEdit(category) {
            // Implement edit functionality
            console.log('Edit category:', category)
        },
        handleDelete(categoryId) {
            if (confirm('Are you sure you want to delete this category?')) {
                this.categories = this.categories.filter(c => c.id !== categoryId)
            }
        }
    }
}
</script>