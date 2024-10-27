<template>
    <div class="p-6">
        <!-- Header Section -->
        <div class="mb-6">
            <h2 class="text-2xl font-semibold text-gray-800">Customer Directory</h2>
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
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Address</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Picture</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Created At</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr v-for="customer in customers" :key="customer.id" class="hover:bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ customer.id }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ customer.name }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <a :href="'mailto:' + customer.email" class="text-blue-600 hover:text-blue-900">
                                {{ customer.email }}
                            </a>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <a :href="'tel:' + customer.phone" class="hover:text-blue-600">
                                {{ customer.phone }}
                            </a>
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                            {{ customer.address }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <img :src="customer.picture" :alt="customer.name"
                                class="h-10 w-10 rounded-full object-cover">
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {{ formatDate(customer.createdAt) }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div class="flex space-x-3">
                                <button @click="handleView(customer)" class="text-blue-600 hover:text-blue-900">
                                    View
                                </button>
                                <button @click="handleEdit(customer)" class="text-green-600 hover:text-green-900">
                                    Edit
                                </button>
                                <button @click="handleDelete(customer.id)" class="text-red-600 hover:text-red-900">
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
    name: 'CustomerTable',
    data() {
        return {
            customers: [
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    phone: '+1 (555) 123-4567',
                    address: '123 Main St, Suite 456, New York, NY 10001',
                    picture: 'https://via.placeholder.com/40',
                    createdAt: '2024-01-01T00:00:00Z'
                },
                {
                    id: 2,
                    name: 'Jane Smith',
                    email: 'jane.smith@example.com',
                    phone: '+1 (555) 987-6543',
                    address: '789 Broadway Ave, Apt 101, Los Angeles, CA 90012',
                    picture: 'https://via.placeholder.com/40',
                    createdAt: '2024-01-02T00:00:00Z'
                }
                // Add more sample data as needed
            ]
        }
    },
    methods: {
        formatDate(dateString) {
            return new Date(dateString).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        },
        handleView(customer) {
            // Implement view functionality
            console.log('View customer:', customer)
        },
        handleEdit(customer) {
            // Implement edit functionality
            console.log('Edit customer:', customer)
        },
        handleDelete(customerId) {
            // Implement delete functionality
            console.log('Delete customer:', customerId)
        }
    }
}
</script>