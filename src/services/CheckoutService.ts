import apiClient from '@/utils/ApiClient'

export interface CartItemDto {
  product_id: number
  quantity: number
}

export const CheckoutService = {
  processCheckout: async (items: CartItemDto[])  => {
    return await apiClient.post('/checkout', { items })
  },
}
