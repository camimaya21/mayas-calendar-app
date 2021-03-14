import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query'
import { AxiosError } from 'axios'
import { findEvent, findEvents } from 'api/eventsApi'
import { IEvent } from 'api/eventsApi.types'

const _fetchEvents = async () => {
  const { data } = await findEvents()
  return data
}
export function useEvents<TData = IEvent[]>(
  options?: UseQueryOptions<IEvent[], AxiosError, TData>
): UseQueryResult<TData, AxiosError> {
  return useQuery('events', _fetchEvents, options)
}

const _fetchEvent = async (id: string) => {
  const { data } = await findEvent(id)
  return data
}
export function useEvent<TData = IEvent>(
  eventId: string,
  options?: UseQueryOptions<IEvent, AxiosError, TData>
): UseQueryResult<TData, AxiosError> {
  return useQuery(['event', eventId], () => _fetchEvent(eventId), options)
}
