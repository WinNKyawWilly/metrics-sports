<script setup lang="ts">
import { computed, type Ref, ref } from 'vue'
import { type CartItem, useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import { type CartItemDto, CheckoutService } from '@/services/CheckoutService'
import { useAuthStore } from '@/stores/auth'
import { toast } from 'vue3-toastify'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()

const { getItems: cartItems }: { getItems: Ref<CartItem[]> } = storeToRefs(cartStore)

const total = computed(() =>
  cartItems.value.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
  ),
)
const mediaBaseUrl = ref<string>(import.meta.env.VITE_MEDIA_BASE_URL)

function handleQuantityChange(index: number, change: number) {
  cartStore.changeQuantity(index, change)
}

const authStore = useAuthStore()

const { isLoggedIn } = storeToRefs(authStore)

const router = useRouter()

async function checkout() {
  if (isLoggedIn.value) {
    const cartItemsDto: CartItemDto = cartItems.value.map(item => ({
      product_id: item.product.id,
      quantity: item.quantity,
    }))
    await CheckoutService.processCheckout(cartItemsDto)
    cartStore.clear()
    await router.push('/account')
    setTimeout(() => {
      toast('Checkout successful', {
        type: 'success',
      })
    }, 500)
  } else {
    await router.push('/login')

    setTimeout(() => {
      toast('Please login to checkout', {
        type: 'info',
      })
    }, 500)
  }
}
</script>

<template>
  <div class="bg-white shadow-md rounded p-6">
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold mb-4">Your Cart</h2>
      <div v-if="cartItems.length > 0">
        <table class="w-full">
          <thead>
            <tr>
              <th class="p-2 border text-left">Product</th>
              <th class="p-2 border text-right">Price</th>
              <th class="p-2 border text-center">Quantity</th>
              <th class="p-2 border text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(cartItem, index) in cartItems"
              :key="cartItem.product.id"
            >
              <td class="p-2 border">
                <div class="flex items-center space-x-4">
                  <img
                    :src="`${mediaBaseUrl}/${cartItem.product.images[0]}`"
                    :alt="cartItem.product.name"
                    class="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 class="font-medium">{{ cartItem.product.name }}</h4>
                    <p
                      class="text-gray-500"
                      v-html="cartItem.product.description"
                    ></p>
                  </div>
                </div>
              </td>
              <td class="p-2 border text-right">
                ${{ cartItem.product.price.toFixed(2) }}
              </td>
              <td class="p-2 border text-center">
                <div class="flex items-center justify-center space-x-2">
                  <button
                    class="bg-gray-200 hover:bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center"
                    @click="handleQuantityChange(index, -1)"
                  >
                    -
                  </button>
                  <span>{{ cartItem.quantity }}</span>
                  <button
                    class="bg-gray-200 hover:bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center"
                    @click="handleQuantityChange(index, 1)"
                  >
                    +
                  </button>
                </div>
              </td>
              <td class="p-2 border text-right">
                ${{ cartItem.product.price * cartItem.quantity.toFixed(2) }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="p-2 border font-medium text-right">
                Total:
              </td>
              <td class="p-2 border text-right font-medium">
                ${{ total.toFixed(2) }}
              </td>
            </tr>
          </tfoot>
        </table>
        <div class="mt-4 text-right">
          <button
            @click="checkout"
            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Checkout
          </button>
        </div>
      </div>

      <div v-else class="flex justify-center items-center flex-col mt-6">
        <img
          src="/src/assets/images/empty-cart.svg"
          alt="Empty Cart"
          class="w-1/4"
        />
        <p class="text-gray-800 text-[1.5rem] text-center mt-7 font-bold">
          It's empty here.
        </p>
        <RouterLink
          to="/"
          class="bg-gray-800 px-4 py-2 text-white rounded mt-3 text-sm"
          >Continue Shopping
        </RouterLink>
      </div>
    </div>
  </div>
</template>
