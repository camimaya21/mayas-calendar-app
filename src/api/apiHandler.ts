import { AxiosPromise, AxiosRequestConfig } from 'axios'
import axios from 'utils/axios'

export const request = (path: string, config: AxiosRequestConfig): AxiosPromise => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000'
  const axiosRequest = axios({ url: `${baseUrl}/api/visits-service/v1/${path}`, ...config })
  return axiosRequest
}
