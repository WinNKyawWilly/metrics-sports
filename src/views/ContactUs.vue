<template>
  <NavBar />
  <div class="min-h-screen flex items-center justify-center p-4 bg-gray-100">
    <div class="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
      <!-- Alert for success/error messages -->
      <div v-if="alert.show"
        :class="`p-4 ${alert.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`">
        {{ alert.message }}
      </div>

      <div class="flex flex-col md:flex-row">
        <!-- Left side with background image and map - unchanged -->
        <div class="relative w-full md:w-1/2">
          <!-- Previous left side content remains the same -->
          <div class="relative p-8 text-white"
            style="background-image: url('/src/assets/images/contact-us-bg.png'); background-size: cover; background-position: center;">
            <div class="absolute inset-0 bg-black bg-opacity-60"></div>

            <div class="relative z-10">
              <h2 class="text-3xl font-bold mb-8">Get in touch</h2>

              <div class="space-y-6">
                <div>
                  <h3 class="text-xl font-semibold mb-2">Visit Us</h3>
                  <p class="text-gray-200">
                    239/3 Huay Kaew Road, Suthep,<br>
                    ChiangMai, 50200, Thailand
                  </p>
                </div>

                <div>
                  <h3 class="text-xl font-semibold mb-2">Email Us</h3>
                  <a href="mailto:apex.sportwear@gmail.com" class="text-gray-200 hover:text-white">
                    apex.sportwear@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="h-[300px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.454063921284!2d98.95462797580905!3d18.80512578150631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a6de4a60137%3A0x46c0d9f357ecd4d1!2sHuay%20Kaew%20Rd%2C%20Tambon%20Su%20Thep%2C%20Amphoe%20Mueang%20Chiang%20Mai%2C%20Chang%20Wat%20Chiang%20Mai%2050200!5e0!3m2!1sen!2sth!4v1698675433495!5m2!1sen!2sth"
              class="w-full h-full border-0" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <!-- Right side contact form -->
        <div class="w-full md:w-1/2 p-8">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input type="text" v-model="form.first_name" :disabled="isSubmitting"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                  required>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input type="text" v-model="form.last_name" :disabled="isSubmitting"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                  required>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input type="email" v-model="form.email" :disabled="isSubmitting"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                required>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input type="tel" v-model="form.phone" :disabled="isSubmitting"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                required>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea v-model="form.message" :disabled="isSubmitting" rows="4"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                required></textarea>
            </div>

            <button type="submit" :disabled="isSubmitting"
              class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center">
              <span v-if="isSubmitting" class="mr-2">
                <!-- Simple loading spinner -->
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
              </span>
              {{ isSubmitting ? 'Sending...' : 'Send' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <FooterSection />
</template>

<script lang="ts">
import NavBar from '@/layouts/NavBar.vue'
import FooterSection from '@/components/FooterSection.vue'

export default {
  name: 'ContactUs',
  components: {
    NavBar,
    FooterSection
  },
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: ''
      },
      isSubmitting: false,
      alert: {
        show: false,
        type: 'success',
        message: ''
      }
    }
  },
  methods: {
    async submitForm() {
      try {
        this.isSubmitting = true
        this.alert.show = false

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(this.form.email)) {
          throw new Error('Please enter a valid email address')
        }

        // Validate phone format (basic validation)
        const phoneRegex = /^\+?[\d\s-]{8,}$/
        if (!phoneRegex.test(this.form.phone)) {
          throw new Error('Please enter a valid phone number')
        }

        // Make API call
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.form)
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message || 'Failed to submit form')
        }

        // Show success message
        this.showAlert('success', 'Thank you for your message. We will get back to you soon!')

        // Reset form
        this.resetForm()

      } catch (error) {
        // Show error message
        this.showAlert('error', error.message || 'An error occurred. Please try again.')
        console.error('Form submission error:', error)

      } finally {
        this.isSubmitting = false
      }
    },

    showAlert(type, message) {
      this.alert = {
        show: true,
        type,
        message
      }

      // Hide alert after 5 seconds
      setTimeout(() => {
        this.alert.show = false
      }, 5000)
    },

    resetForm() {
      this.form = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  }
}
</script>
