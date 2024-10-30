import apiClient from '@/utils/ApiClient'

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
}
