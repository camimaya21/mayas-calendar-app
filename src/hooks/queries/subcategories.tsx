import { useInfiniteQuery, UseInfiniteQueryOptions, UseInfiniteQueryResult } from 'react-query'
import { AxiosError } from 'axios'
import { findSubcategories } from '../../api/eventbriteApi'
import { ISubcategories } from 'api/types/eventbriteApi.types'

const _fetchSubcategories = async (pageParam?: string) => {
  const { data } = await findSubcategories(pageParam)
  return data
}

export function useInfinitySubcategories<TData = ISubcategories>(
  options?: UseInfiniteQueryOptions<ISubcategories, AxiosError, TData>
): UseInfiniteQueryResult<TData, AxiosError> {
  return useInfiniteQuery('subcategories', ({ pageParam }) => _fetchSubcategories(pageParam), {
    ...options,
    getNextPageParam: (lastPage) => lastPage.pagination.continuation,
    staleTime: 60 * 1000 * 3 // 3 minutes
  })
}
