<template>
    <div class="p-4">
        <div class="mb-6">
            <h2 class="text-2xl font-bold text-gray-800">Inquiries</h2>
        </div>

        <div class="overflow-x-auto bg-white rounded-lg shadow">
            <table class="min-w-full table-auto">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ID
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Phone
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Message
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Sent At
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="inquiry in inquiries" :key="inquiry.id" class="hover:bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {{ inquiry.id }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {{ inquiry.name }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {{ inquiry.email }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {{ inquiry.phone }}
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                            {{ inquiry.message }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {{ formatDate(inquiry.sentAt) }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                            <button @click="viewInquiry(inquiry)" class="text-blue-600 hover:text-blue-900">
                                View
                            </button>
                            <button @click="confirmDelete(inquiry)" class="text-red-600 hover:text-red-900">
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- View Modal -->
        <div v-if="showViewModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div class="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
                <h3 class="text-lg font-bold mb-4">Inquiry Details</h3>
                <div class="space-y-4">
                    <p><span class="font-semibold">Name:</span> {{ selectedInquiry.name }}</p>
                    <p><span class="font-semibold">Email:</span> {{ selectedInquiry.email }}</p>
                    <p><span class="font-semibold">Phone:</span> {{ selectedInquiry.phone }}</p>
                    <p><span class="font-semibold">Message:</span></p>
                    <p class="whitespace-pre-wrap">{{ selectedInquiry.message }}</p>
                    <p><span class="font-semibold">Sent At:</span> {{ formatDate(selectedInquiry.sentAt) }}</p>
                </div>
                <div class="mt-6 flex justify-end">
                    <button @click="showViewModal = false"
                        class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                        Close
                    </button>
                </div>
            </div>
        </div>

        <!-- Delete Confirmation Modal -->
        <div v-if="showDeleteModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                <h3 class="text-lg font-bold mb-4">Confirm Delete</h3>
                <p>Are you sure you want to delete this inquiry?</p>
                <div class="mt-6 flex justify-end space-x-3">
                    <button @click="showDeleteModal = false"
                        class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                        Cancel
                    </button>
                    <button @click="deleteInquiry" class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'InquiriesTable',
    data() {
        return {
            inquiries: [
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'john@example.com',
                    phone: '+1 234-567-8900',
                    message: 'I would like to know more about your services.',
                    sentAt: '2024-10-27T09:30:00'
                },
                {
                    id: 2,
                    name: 'Jane Smith',
                    email: 'jane@example.com',
                    phone: '+1 234-567-8901',
                    message: 'Please contact me regarding your products.',
                    sentAt: '2024-10-27T10:45:00'
                },
                // Add more sample data as needed
            ],
            showViewModal: false,
            showDeleteModal: false,
            selectedInquiry: null
        }
    },
    methods: {
        formatDate(dateString) {
            return new Date(dateString).toLocaleString()
        },
        viewInquiry(inquiry) {
            this.selectedInquiry = inquiry
            this.showViewModal = true
        },
        confirmDelete(inquiry) {
            this.selectedInquiry = inquiry
            this.showDeleteModal = true
        },
        deleteInquiry() {
            // Add your delete logic here
            this.inquiries = this.inquiries.filter(i => i.id !== this.selectedInquiry.id)
            this.showDeleteModal = false
            this.selectedInquiry = null
        }
    }
}
</script>