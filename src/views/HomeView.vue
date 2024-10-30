<script setup lang="ts">
import ImageCarousel from '../components/ImageCarousel.vue'
import NavBar from '@/layouts/NavBar.vue'
import NewReleases from '@/components/NewReleases.vue'
import PromoAds from '@/components/Promoads.vue'
import FeaturedProduct from '@/components/FeaturedProduct.vue'
import FooterSection from '@/components/FooterSection.vue'
import { onMounted, ref } from 'vue'
import { HomePageProduct, productService } from '@/services/ProductService'

const homePageProducts = ref<HomePageProduct>()

onMounted(async () => {
  homePageProducts.value = await productService.getHomePageProducts()
  console.log(homePageProducts.value)
})

function handleShopClick() {
  console.log('Shop Now clicked')
}
</script>

<template>
  <main>
    <ImageCarousel />
    <NewReleases v-if="homePageProducts?.newProducts" :products="homePageProducts?.newProducts" />
    <PromoAds image-position="left" image="/src/assets/images/sportwear3.png" image-alt="Summer Collection 2024"
      tag="New Collection" title="Summer Essentials" subtitle="Discover our latest collection"
      description="Get ready for summer with our new collection of lightweight and breathable pieces perfect for warm weather."
      button-text="Shop Collection" theme="light" @button-click="handleShopClick" />

    <FeaturedProduct v-if="homePageProducts?.featuredProducts" :products="homePageProducts?.featuredProducts" />

    <PromoAds image-position="right" image="/src/assets/images/sportwear5.png" image-alt="Limited Edition Sneakers"
      tag="Limited Edition" title="Exclusive Drop" subtitle="Available for a limited time only"
      description="Don't miss out on our exclusive limited edition sneakers. Once they're gone, they're gone forever."
      button-text="Shop Now" theme="dark" @button-click="handleShopClick" />

  </main>
</template>
