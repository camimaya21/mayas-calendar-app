/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useMutation } from 'react-query'
import { createEvent, updateEvent, deleteEvent } from 'api/eventsApi'

import { ICreateEvent, IUpdateEvent } from 'api/types'

export const useCreateEvent = () =>
  useMutation((data: ICreateEvent) => {
    return createEvent(data)
  })

export const useUpdateEvent = () => {
  return useMutation((data: IUpdateEvent) => {
    return updateEvent(data.id, data)
  })
}

export const useDeleteEvent = () =>
  useMutation((id: string) => {
    return deleteEvent(id)
  })
