<template>
    <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Create Product</h2>

        <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Product Name -->
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Product Name <span class="text-red-500">*</span>
                </label>
                <input v-model="formData.name" type="text" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <!-- Product Description -->
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Product Description
                </label>
                <textarea v-model="formData.description" rows="4"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>

            <!-- Categories -->
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Categories <span class="text-red-500">*</span>
                </label>
                <div class="flex flex-wrap gap-2 mb-2">
                    <span v-for="category in formData.categories" :key="category"
                        class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                        {{ category }}
                        <button type="button" @click="removeCategory(category)"
                            class="ml-2 text-blue-600 hover:text-blue-800">
                            ×
                        </button>
                    </span>
                </div>
                <div class="flex gap-2">
                    <input v-model="newCategory" type="text" placeholder="Add a category"
                        class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        @keyup.enter.prevent="addCategory" />
                    <button type="button" @click="addCategory"
                        class="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                        Add
                    </button>
                </div>
            </div>

            <!-- Price Section -->
            <div class="grid grid-cols-2 gap-4">
                <!-- Product Price -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                        Product Price <span class="text-red-500">*</span>
                    </label>
                    <div class="relative">
                        <input v-model="formData.price" type="number" required min="0" step="0.01"
                            class="w-full pl-16 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                        <div
                            class="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none bg-gray-50 border-r border-gray-300 rounded-l-md">
                            THB
                        </div>
                    </div>
                </div>

                <!-- Discount Price -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                        Discount Price
                    </label>
                    <div class="relative">
                        <input v-model="formData.discountPrice" type="number" min="0" step="0.01"
                            class="w-full pl-16 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                        <div
                            class="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none bg-gray-50 border-r border-gray-300 rounded-l-md">
                            THB
                        </div>
                    </div>
                </div>
            </div>

            <!-- Product Images -->
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Product Images <span class="text-red-500">*</span>
                </label>
                <div @drop.prevent="handleDrop" @dragover.prevent
                    class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                    <div class="space-y-2">
                        <div class="text-gray-600">
                            Drag & Drop your files or
                            <button type="button" @click="triggerFileInput"
                                class="text-blue-600 hover:text-blue-800 font-medium">
                                Browse
                            </button>
                        </div>
                        <input ref="fileInput" type="file" multiple accept="image/*" class="hidden"
                            @change="handleFileSelect" />
                    </div>
                </div>
                <!-- Preview Images -->
                <div v-if="formData.images.length" class="mt-4 grid grid-cols-4 gap-4">
                    <div v-for="(image, index) in formData.images" :key="index" class="relative group">
                        <img :src="image.preview" class="w-full h-24 object-cover rounded-lg" alt="Preview" />
                        <button type="button" @click="removeImage(index)"
                            class="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            ×
                        </button>
                    </div>
                </div>
            </div>

            <!-- Checkboxes -->
            <div class="space-y-3">
                <div class="flex items-center">
                    <input v-model="formData.isFeatured" type="checkbox" id="featured"
                        class="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                    <label for="featured" class="ml-2 text-sm text-gray-700">
                        Mark as featured product
                    </label>
                </div>
                <div class="flex items-center">
                    <input v-model="formData.isNew" type="checkbox" id="new"
                        class="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                    <label for="new" class="ml-2 text-sm text-gray-700">
                        Mark as new product
                    </label>
                </div>
            </div>

            <!-- Form Buttons -->
            <div class="flex justify-end space-x-4 pt-4">
                <button type="button" @click="handleBack"
                    class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                    Back
                </button>
                <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Create
                </button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ProductForm',
    data() {
        return {
            formData: {
                name: '',
                description: '',
                categories: [],
                price: '',
                discountPrice: '',
                images: [],
                isFeatured: false,
                isNew: false
            },
            newCategory: ''
        }
    },
    methods: {
        handleSubmit() {
            // Implement form submission
            console.log('Form Data:', this.formData)
        },
        handleBack() {
            // Implement back navigation
            this.$emit('back')
        },
        addCategory() {
            if (this.newCategory.trim()) {
                this.formData.categories.push(this.newCategory.trim())
                this.newCategory = ''
            }
        },
        removeCategory(category) {
            this.formData.categories = this.formData.categories.filter(c => c !== category)
        },
        triggerFileInput() {
            this.$refs.fileInput.click()
        },
        handleFileSelect(event) {
            this.addFiles(Array.from(event.target.files))
        },
        handleDrop(event) {
            this.addFiles(Array.from(event.dataTransfer.files))
        },
        addFiles(files) {
            files.forEach(file => {
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader()
                    reader.onload = (e) => {
                        this.formData.images.push({
                            file,
                            preview: e.target.result
                        })
                    }
                    reader.readAsDataURL(file)
                }
            })
        },
        removeImage(index) {
            this.formData.images.splice(index, 1)
        }
    }
}
</script>