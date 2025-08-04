import type { AxiosInstance } from 'axios'
import axios from 'axios'

const API_BASE_URL = '/api/'
const API_TIMEOUT = 10000

const request: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: { 'Content-Type': 'application/json' },
})

// 请求拦截器
request.interceptors.request.use((config) => {
  return config
})

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    if (import.meta.env.VITE_DEBUG_MODE) {
      // eslint-disable-next-line no-console
      console.log('[API Response]', response)
    }
    return response
  },
  (error) => {
    if (import.meta.env.VITE_DEBUG_MODE) {
      console.error('[API Error]', error)
    }
    return Promise.reject(error)
  },
)

export default request
