<template>
  <div class="flex justify-center space-x-2 mt-6">
    <button
      @click="onPageChange(currentPage - 1)"
      :disabled="currentPage === 1"
      class="px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-200 disabled:opacity-50"
    >
      Previous
    </button>
    <button
      v-for="page in pageNumbers"
      :key="page"
      @click="onPageChange(page)"
      :class="[
        'px-4 py-2 border rounded-md',
        page === currentPage
          ? 'bg-blue-500 text-white hover:bg-blue-600'
          : 'bg-white text-gray-700 hover:bg-gray-200',
      ]"
    >
      {{ page }}
    </button>
    <button
      @click="onPageChange(currentPage + 1)"
      :disabled="(currentPage === totalPages)"
      class="px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-200 disabled:opacity-50"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

interface Props {
  currentPage: number
  totalPages: number
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'pageChange', page: number): void
}>()

const pageNumbers = Array.from({ length: props.totalPages }, (_, i) => i + 1)

const onPageChange = (page: number) => {
  if (page >= 1 && page <= props.totalPages) {
    emit('pageChange', page)
  }
}
</script>
