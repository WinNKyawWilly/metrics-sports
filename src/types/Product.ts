interface Product {
  id: string
  name: string
  images: string[]
  price: number
  discountPrice?: number
  rating: number
  reviewCount: number
  description: string
}

export type { Product }
