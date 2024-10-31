import apiClient from '@/utils/ApiClient'

export interface OrderItemDto {
  id: string
  total_items: number
  total_price: number
  created_at: string
}

export const AccountService = {
  async getOrders(): OrderItemDto[] {
    const { data } = await apiClient.get('/account/orders')
    return data
  },
}
