<template>
    <section class="max-w-7xl mx-auto p-4">
        <div class="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg"
            :class="{ 'md:flex-row-reverse': imagePosition === 'right' }">
            <!-- Image Section -->
            <div class="md:w-1/2 h-[500px]">
                <img :src="image" :alt="imageAlt" class="w-full h-full object-cover" />
            </div>

            <!-- Content Section -->
            <div class="md:w-1/2 flex flex-col justify-center p-8 md:p-12" :class="contentAlignment">
                <!-- Tag -->
                <span v-if="tag" class="inline-block px-4 py-1 mb-4 text-sm font-semibold rounded-full"
                    :class="tagClasses">
                    {{ tag }}
                </span>

                <!-- Title -->
                <h2 class="text-4xl font-bold mb-4" :class="titleClasses">
                    {{ title }}
                </h2>

                <!-- Subtitle -->
                <p v-if="subtitle" class="text-lg mb-4" :class="subtitleClasses">
                    {{ subtitle }}
                </p>

                <!-- Description -->
                <p class="text-base mb-8" :class="descriptionClasses">
                    {{ description }}
                </p>

                <!-- CTA Button -->
                <div>
                    <button @click="$emit('button-click')"
                        class="px-8 py-3 text-base font-semibold rounded-md transition-all duration-200"
                        :class="buttonClasses">
                        {{ buttonText }}
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
export default {
    name: 'PromoSection',
    props: {
        // Layout
        imagePosition: {
            type: String,
            default: 'left',
            validator: value => ['left', 'right'].includes(value)
        },
        // Content
        image: {
            type: String,
            required: true
        },
        imageAlt: {
            type: String,
            default: 'Promotional image'
        },
        tag: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            required: true
        },
        buttonText: {
            type: String,
            default: 'Shop Now'
        },
        // Theme
        theme: {
            type: String,
            default: 'light',
            validator: value => ['light', 'dark'].includes(value)
        }
    },
    computed: {
        // Dynamic classes based on theme
        contentAlignment() {
            return {
                'items-start text-left': true,
                'bg-white': this.theme === 'light',
                'bg-gray-900': this.theme === 'dark'
            }
        },
        tagClasses() {
            return {
                'bg-black text-white': this.theme === 'light',
                'bg-white text-gray-900': this.theme === 'dark'
            }
        },
        titleClasses() {
            return {
                'text-gray-900': this.theme === 'light',
                'text-white': this.theme === 'dark'
            }
        },
        subtitleClasses() {
            return {
                'text-gray-700': this.theme === 'light',
                'text-gray-300': this.theme === 'dark'
            }
        },
        descriptionClasses() {
            return {
                'text-gray-600': this.theme === 'light',
                'text-gray-400': this.theme === 'dark'
            }
        },
        buttonClasses() {
            return {
                'bg-black text-white hover:bg-gray-800': this.theme === 'light',
                'bg-white text-gray-900 hover:bg-gray-100': this.theme === 'dark'
            }
        }
    }
}
</script>