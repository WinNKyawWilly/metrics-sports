import apiClient from '@/utils/ApiClient'
import type { Product } from '@/types/Product'

export interface HomePageProduct {
  newProducts: Product[]
  featuredProducts: Product[]
}

export const productService = {
  async getHomePageProducts() {
    const { data }: { data: HomePageProduct } = await apiClient.get('/homepage')
    return data
  },
}
