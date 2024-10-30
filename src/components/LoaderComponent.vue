<template>
  <div class="spinner-container">
    <div class="spinner" :style="{ width: size, height: size }"></div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  size?: string
}>()
</script>

<style scoped>
.spinner-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: -1;
}

.spinner {
  border: 4px solid #333;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
