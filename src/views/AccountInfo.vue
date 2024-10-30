<template>
    <div class="flex gap-4 p-6">
        <!-- Orders Table (Left Section) -->
        <div class="w-2/3 bg-white rounded-lg shadow-md p-4">
            <h2 class="text-lg font-semibold mb-4">Orders</h2>
            <table class="min-w-full border border-gray-200 rounded-md overflow-hidden">
                <thead class="bg-gray-100 text-gray-600">
                    <tr>
                        <th class="px-4 py-2 text-left border-b">Order ID</th>
                        <th class="px-4 py-2 text-left border-b">Order Items</th>
                        <th class="px-4 py-2 text-left border-b">Order Total</th>
                        <th class="px-4 py-2 text-left border-b">Order Status</th>
                        <th class="px-4 py-2 text-left border-b">Order At</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Example order rows, replace with actual data -->
                    <tr v-for="order in orders" :key="order.id" class="text-gray-700 hover:bg-gray-50">
                        <td class="px-4 py-2 border-b">{{ order.id }}</td>
                        <td class="px-4 py-2 border-b">{{ order.items }}</td>
                        <td class="px-4 py-2 border-b">{{ order.total }}</td>
                        <td class="px-4 py-2 border-b">{{ order.status }}</td>
                        <td class="px-4 py-2 border-b">{{ order.date }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Account Information (Right Section) -->
        <div class="w-1/3 bg-white rounded-lg shadow-md p-4">
            <h2 class="text-lg font-semibold mb-4">Account Information</h2>
            <div class="space-y-4 text-gray-700">
                <div>
                    <span class="font-semibold">Name:</span> {{ account.name }}
                </div>
                <div>
                    <span class="font-semibold">Email:</span> {{ account.email }}
                </div>
                <div>
                    <span class="font-semibold">Phone Number:</span> {{ account.phone }}
                </div>
                <div>
                    <span class="font-semibold">Location:</span> {{ account.location }}
                </div>
                <button @click="logout"
                    class="mt-6 w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600">
                    Logout
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            orders: [
                { id: "12345", items: "Item 1, Item 2", total: "$100", status: "Completed", date: "2023-10-10" },
                { id: "67890", items: "Item 3", total: "$50", status: "Pending", date: "2023-10-15" },
                // Additional orders here...
            ],
            account: {
                name: "John Doe",
                email: "john.doe@example.com",
                phone: "123-456-7890",
                location: "New York, USA",
            },
        };
    },
    methods: {
        logout() {
            // Logic for logging out the user
            console.log("Logging out...");
        },
    },
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>