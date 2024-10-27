<template>
    <div class="overflow-x-auto">
        <div class="mb-6">
            <h2 class="text-2xl font-semibold text-gray-800">Sales</h2>
        </div>

        <table class="min-w-full bg-white border border-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total Items
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total Price
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ordered At
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="order in orders" :key="order.id" class="hover:bg-gray-50">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {{ order.id }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {{ order.customer }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {{ order.totalItems }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${{ order.totalPrice.toFixed(2) }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {{ formatDate(order.orderedAt) }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button @click="viewOrder(order.id)" class="text-indigo-600 hover:text-indigo-900 mr-3">
                            View
                        </button>
                        <button @click="editOrder(order.id)" class="text-green-600 hover:text-green-900">
                            Edit
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
export default {
    name: 'OrderTable',
    data() {
        return {
            orders: [
                {
                    id: 1,
                    customer: 'John Doe',
                    totalItems: 3,
                    totalPrice: 150.00,
                    orderedAt: '2024-10-27T10:30:00'
                },
                {
                    id: 2,
                    customer: 'Jane Smith',
                    totalItems: 5,
                    totalPrice: 275.50,
                    orderedAt: '2024-10-27T11:45:00'
                },
                // Add more sample data as needed
            ]
        }
    },
    methods: {
        formatDate(dateString) {
            return new Date(dateString).toLocaleString()
        },
        viewOrder(id) {
            console.log('Viewing order:', id)
            // Add your view logic here
        },
        editOrder(id) {
            console.log('Editing order:', id)
            // Add your edit logic here
        }
    }
}
</script>