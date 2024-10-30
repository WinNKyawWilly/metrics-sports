import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { Product } from '@/types/Product'

export interface CartItem {
  product: Product
  quantity: number
}

interface CartState {
  items: CartItem[]
}

export const useCartStore = defineStore('cart', {
  state: (): CartState[] =>
    useStorage('cart', {
      items: [],
    }).value,
  getters: {
    totalItems: state => state.items.length,
    getItems: state => state.items,
  },
  actions: {
    addItem(item: CartItem) {
      const index = this.items.findIndex(i => i.product.id === item.product.id)
      if (index === -1) {
        this.items.push(item)
      } else {
        this.items[index].quantity += item.quantity
      }
    },
    removeItem(index: number) {
      this.items.splice(index, 1)
    },
    changeQuantity(index: number, changeBy: number) {
      this.items[index].quantity += changeBy
      if (this.items[index].quantity <= 0) {
        this.removeItem(index)
      }
    },
  },
})
