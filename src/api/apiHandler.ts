import { AxiosPromise, AxiosRequestConfig } from 'axios'
import axios from 'utils/axios'

export const request = (path: string, config: AxiosRequestConfig): AxiosPromise => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000'
  const axiosRequest = axios({ url: `${baseUrl}/api/${path}`, ...config })
  return axiosRequest
}

export const eventbriteApiRequest = (path: string, config: AxiosRequestConfig): AxiosPromise => {
  const url = `https://www.eventbriteapi.com/v3/${path}/?token=${process.env.REACT_APP_API_EVENTBRITE_KEY}`
  return axios({ url, ...config })
}
