<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/layouts/NavBar.vue';
import FooterSection from '@/components/FooterSection.vue';
</script>

<template>
  <NavBar />
  <RouterView />
  <FooterSection />
</template>

<style></style>
