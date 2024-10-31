import apiClient from '@/utils/ApiClient'

export interface SignUpPayload {
  name: string
  email: string
  password: string
  phone: string
  address: string
}

export const CustomerAuthService = {
  async login(email: string, password: string) {
    try {
      const { data } = await apiClient.post('/auth/login', {
        email,
        password,
      })

      return data
    } catch (e) {
      console.error(e)
    }
  },

  async signup(payload: SignUpPayload) {
    try {
      const { data } = await apiClient.post('/auth/signup', {
        full_name: payload.name,
        email: payload.email,
        password: payload.password,
        phone: payload.phone.toString(),
        address: payload.address,
        confirm_password: payload.password,
      })

      return data
    } catch (e) {
      console.error(e)
    }
  },
}
