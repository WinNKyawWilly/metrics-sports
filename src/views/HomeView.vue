<script setup lang="ts">
import ImageCarousel from '../components/storefront/ImageCarousel.vue'
import NavBar from '@/components/storefront/NavBar.vue'
import NewReleases from '@/components/storefront/NewReleases.vue'
import PromoAds from '@/components/storefront/Promoads.vue'
import FeaturedProduct from '@/components/storefront/FeaturedProduct.vue'
import FooterSection from '@/components/storefront/FooterSection.vue'
</script>

<template>
  <main>
    <NavBar />
    <ImageCarousel />
    <NewReleases />
    <PromoAds image-position="left" image="/path/to/summer-collection.jpg" image-alt="Summer Collection 2024"
      tag="New Collection" title="Summer Essentials" subtitle="Discover our latest collection"
      description="Get ready for summer with our new collection of lightweight and breathable pieces perfect for warm weather."
      button-text="Shop Collection" theme="light" @button-click="handleShopClick" />

    <FeaturedProduct />

    <PromoAds image-position="right" image="/path/to/limited-edition.jpg" image-alt="Limited Edition Sneakers"
      tag="Limited Edition" title="Exclusive Drop" subtitle="Available for a limited time only"
      description="Don't miss out on our exclusive limited edition sneakers. Once they're gone, they're gone forever."
      button-text="Shop Now" theme="dark" @button-click="handleShopClick" />

    <FooterSection />
  </main>
</template>
