import apiClient from '@/utils/ApiClient'
import type { Product } from '@/types/Product'

export interface HomePageProduct {
  newProducts: Product[]
  featuredProducts: Product[]
}

export interface ProductResponseDto {
  product: Product
  relatedProducts: Product[]
}

export const productService = {
  async getHomePageProducts() {
    const { data }: { data: HomePageProduct } = await apiClient.get('/homepage')
    return data
  },

  async getProduct(productId: number): Promise<ProductResponseDto> {
    const { data } = await apiClient.get(`/products/${productId}`)
    return data
  },

  async getProducts(page: number, search?: string): Promise<Product[]> {
    const { data } = await apiClient.get('/products', {
      params: {
        page,
        q: search,
      },
    })

    return data
  },

  async getCategoriesByType(
    typeSlug: string,
  ): Promise<{ name: string; slug: string }[]> {
    const { data } = await apiClient.get(`/products/types/${typeSlug}`)
    return data
  },

  async getProductsByCategory(
    categorySlug: string,
    page: number,
  ): Promise<Product[]> {
    const { data } = await apiClient.get(`/products/category/${categorySlug}`, {
      params: {
        page,
      },
    })

    return data
  },
}
