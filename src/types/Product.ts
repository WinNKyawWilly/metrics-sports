interface Product {
  id: string
  name: string
  images: string[],
  categories: string[],
  price: number
  discountPrice?: number
  description?: string
}

export type { Product }
