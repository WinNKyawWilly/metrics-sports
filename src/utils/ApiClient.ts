import { toast } from 'vue3-toastify'
import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

instance.interceptors.response.use(
  response => response,
  error => {
    const authStore = useAuthStore()
    if (error?.status === 401) {
      toast('Unauthorized', { type: 'error' })
      authStore.logout()
      return Promise.reject(error)
    }
    if (error?.status === 422) {
      toast(error.response.data?.message || 'Validation Failed', {
        type: 'error',
      })
      return Promise.reject(error)
    }

    if (error?.status) {
      return Promise.reject(error)
    }

    toast('Network error occurred', { type: 'error' })
  },
)

export default instance
