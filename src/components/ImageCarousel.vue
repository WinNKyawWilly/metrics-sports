<template>
    <div class="relative w-full h-[600px] overflow-hidden">
        <!-- Slides Container -->
        <div class="relative w-full h-full">
            <!-- Individual Slides -->
            <TransitionGroup name="slide">
                <div v-for="(slide, index) in slides" :key="index" v-show="currentSlide === index"
                    class="absolute top-0 left-0 w-full h-full">
                    <!-- Image Container -->
                    <div class="relative w-full h-full">
                        <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover" />
                        <!-- Dark Overlay -->
                        <div class="absolute inset-0 bg-black/50"></div>

                        <!-- Caption -->
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="px-6 py-40">
                                <h5 class="text-[#FCB300] tracking-wide text-6xl md:text-7xl text-center uppercase font-bold font-koulen">
                                    {{ slide.caption }}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </TransitionGroup>
        </div>

        <!-- Indicators -->
        <div class="absolute bottom-4 left-0 right-0 z-10">
            <div class="flex justify-center gap-2">
                <button v-for="(_, index) in slides" :key="index" @click="setSlide(index)"
                    class="w-3 h-3 rounded-full transition-colors duration-300 focus:outline-none"
                    :class="currentSlide === index ? 'bg-white' : 'bg-white/50'"
                    :aria-label="`Go to slide ${index + 1}`"></button>
            </div>
        </div>

        <!-- Navigation Buttons -->
        <button @click="previousSlide"
            class="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous slide">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
        </button>

        <button @click="nextSlide"
            class="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next slide">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </button>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const slides = [
    {
        image: '/src/assets/images/image1.png',
        alt: 'Image 1',
        caption: 'Make it happen'
    },
    {
        image: '/src/assets/images/image2.jpg',
        alt: 'Image 2',
        caption: 'Your body Your mind'
    },
    {
        image: '/src/assets/images/image3.jpg',
        alt: 'Image 3',
        caption: 'Nothing is impossible'
    },
    {
        image: '/src/assets/images/image4.jpg',
        alt: 'Image 4',
        caption: 'Consistency'
    }
]

const currentSlide = ref(0)
const autoplayInterval = ref(null)

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
}

const previousSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const setSlide = (index) => {
    currentSlide.value = index
}

const startAutoplay = () => {
    stopAutoplay() // Clear any existing interval first
    autoplayInterval.value = setInterval(nextSlide, 5000)
}

const stopAutoplay = () => {
    if (autoplayInterval.value) {
        clearInterval(autoplayInterval.value)
        autoplayInterval.value = null
    }
}

onMounted(() => {
    startAutoplay()
})

onBeforeUnmount(() => {
    stopAutoplay()
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.5s ease;
}

.slide-enter-from {
    transform: translateX(100%);
    opacity: 0;
}

.slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
    transform: translateX(0);
    opacity: 1;
}
</style>
