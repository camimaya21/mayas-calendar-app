import { AxiosPromise } from 'axios'
import { request } from './apiHandler'
import { IEvent, ICreateEvent, IUpdateEvent, IDeleteEvent } from './types/eventsApi.types'

export const findEvents = (): AxiosPromise<IEvent[]> => {
  return request(`events`, { method: 'get' })
}

export const findEvent = (id: string): AxiosPromise<IEvent> => {
  return request(`events/${id}`, { method: 'get' })
}

export const createEvent = (data: ICreateEvent): AxiosPromise<IEvent> => {
  return request(`events`, { method: 'post', data })
}

export const updateEvent = (id: string, data: IUpdateEvent): AxiosPromise<IEvent> => {
  return request(`events/${id}`, { method: 'put', data })
}

export const deleteEvent = (id: string): AxiosPromise<IDeleteEvent> => {
  return request(`events/${id}`, { method: 'delete' })
}
