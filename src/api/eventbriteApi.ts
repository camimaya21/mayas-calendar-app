import { AxiosPromise } from 'axios'
import { eventbriteApiRequest } from './apiHandler'
import { ISubcategories } from './types/eventbriteApi.types'

export const findSubcategories = (queryKey?: string): AxiosPromise<ISubcategories> => {
  return eventbriteApiRequest(`subcategories`, {
    method: 'get',
    params: {
      continuation: queryKey
    }
  })
}
