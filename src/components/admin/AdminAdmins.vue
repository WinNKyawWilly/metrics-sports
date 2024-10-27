<template>
    <div class="p-6">
        <!-- Header Section -->
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-semibold text-gray-800">Users Management</h2>
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                @click="handleCreate">
                Create User
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
                            Username</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Picture</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Created At</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr v-for="user in users" :key="user.id">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ user.id }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ user.username }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ user.name }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ user.email }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <img :src="user.picture" :alt="user.name" class="h-10 w-10 rounded-full">
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ formatDate(user.createdAt) }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm">
                            <div class="flex space-x-2">
                                <button @click="handleEdit(user)" class="text-blue-600 hover:text-blue-900">
                                    Edit
                                </button>
                                <button @click="handleDelete(user.id)" class="text-red-600 hover:text-red-900">
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
    name: 'UsersTable',
    data() {
        return {
            users: [
                {
                    id: 1,
                    username: 'johndoe',
                    name: 'John Doe',
                    email: 'john@example.com',
                    picture: 'https://via.placeholder.com/40',
                    createdAt: '2024-01-01T00:00:00Z'
                },
                // Add more sample data as needed
            ]
        }
    },
    methods: {
        formatDate(dateString) {
            return new Date(dateString).toLocaleDateString()
        },
        handleCreate() {
            // Implement create functionality
            console.log('Create user')
        },
        handleEdit(user) {
            // Implement edit functionality
            console.log('Edit user:', user)
        },
        handleDelete(userId) {
            // Implement delete functionality
            console.log('Delete user:', userId)
        }
    }
}
</script>