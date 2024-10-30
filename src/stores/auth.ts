import { defineStore } from 'pinia'
import type { Customer } from '@/types/Customer'
import { CustomerAuthService } from '@/services/CustomerAuthService'
import { useStorage } from '@vueuse/core'

interface AuthState {
  token: string | null
  customer: Customer | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState =>
    useStorage('auth', {
      token: null,
      customer: null,
    }).value,
  getters: {
    isLoggedIn: state => !!state.token,
    getCustomer: state => state.customer,
  },
  actions: {
    async login(email: string, password: string) {
      const data = await CustomerAuthService.login(email, password)
      this.token = data.token
      this.customer = data.customer
      localStorage.setItem('token', this.token)
      return this.customer
    },
    logout() {
      this.token = null
      this.customer = null
      localStorage.removeItem('token')
    },
  },
})
