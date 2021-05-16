import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query'
import { AxiosError } from 'axios'
import { findEvent, findEvents } from 'api/eventsApi'
import { IEvent } from 'api/types/eventsApi.types'

const _fetchEvents = async () => {
  const { data } = await findEvents()
  return data
}
export function useEvents<TData = IEvent[]>(
  options?: UseQueryOptions<IEvent[], AxiosError, TData>
): UseQueryResult<TData, AxiosError> {
  const customOptions: UseQueryOptions<IEvent[], AxiosError, TData> = {
    ...options,
    notifyOnChangeProps: ['data', 'error'],
    staleTime: 60 * 1000 // 1 minute
  }
  return useQuery('events', _fetchEvents, customOptions)
}

const _fetchEvent = async (id: string) => {
  const { data } = await findEvent(id)
  return data
}
export function useEvent<TData = IEvent>(
  eventId: string,
  options?: UseQueryOptions<IEvent, AxiosError, TData>
): UseQueryResult<TData, AxiosError> {
  const customOptions: UseQueryOptions<IEvent, AxiosError, TData> = {
    ...options,
    notifyOnChangeProps: ['data', 'error'],
    staleTime: 60 * 1000 * 5 // 5 minute
  }
  return useQuery(['event', eventId], () => _fetchEvent(eventId), customOptions)
}
