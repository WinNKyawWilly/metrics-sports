<script setup lang="ts">
import { defineProps, reactive, computed } from 'vue'

interface Product {
    id: string
    name: string
    description: string
    price: number
    imageWidth: number
    imageHeight: number
}

const props = defineProps<{
    products: Product[]
}>()

const quantities = reactive(
    props.products?.reduce((acc, product) => {
        return { ...acc, [product.id]: 1 }
    }, {} as Record<string, number>) || {}
)

const handleQuantityChange = (productId: string, value: number) => {
    quantities[productId] = Math.max(1, quantities[productId] + value)
}

const total = computed(() => {
    return props.products?.reduce((acc, product) => {
        return acc + product.price * quantities[product.id]
    }, 0) || 0
})
</script>

<template>
    <div class="bg-white shadow-md rounded p-6">
        <h2 class="text-2xl font-bold mb-4">Checkout</h2>
        <table class="w-full">
            <thead>
                <tr>
                    <th class="p-2 border text-left">Product</th>
                    <th class="p-2 border text-right">Price</th>
                    <th class="p-2 border text-center">Quantity</th>
                    <th class="p-2 border text-right">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in props.products" :key="product.id">
                    <td class="p-2 border">
                        <div class="flex items-center space-x-4">
                            <img :src="`/api/placeholder/${product.imageWidth}/${product.imageHeight}`"
                                :alt="product.name" class="w-16 h-16 object-cover rounded" />
                            <div>
                                <h4 class="font-medium">{{ product.name }}</h4>
                                <p class="text-gray-500">{{ product.description }}</p>
                            </div>
                        </div>
                    </td>
                    <td class="p-2 border text-right">
                        ${{ product.price.toFixed(2) }}
                    </td>
                    <td class="p-2 border text-center">
                        <div class="flex items-center justify-center space-x-2">
                            <button
                                class="bg-gray-200 hover:bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center"
                                @click="handleQuantityChange(product.id, -1)">
                                -
                            </button>
                            <span>{{ quantities[product.id] }}</span>
                            <button
                                class="bg-gray-200 hover:bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center"
                                @click="handleQuantityChange(product.id, 1)">
                                +
                            </button>
                        </div>
                    </td>
                    <td class="p-2 border text-right">
                        ${{ (product.price * quantities[product.id]).toFixed(2) }}
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3" class="p-2 border font-medium text-right">
                        Total:
                    </td>
                    <td class="p-2 border text-right font-medium">
                        ${{ total.toFixed(2) }}
                    </td>
                </tr>
            </tfoot>
        </table>
        <div class="mt-4 text-right">
            <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Checkout
            </button>
        </div>
    </div>
</template>