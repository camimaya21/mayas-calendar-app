import { ICreateEvent, IUpdateEvent } from 'api/eventsApi.types'

export interface IEventFormProps {
  onCreateEvent?: (eventFormData: ICreateEvent) => void
  onUpdateEvent?: (eventFormData: IUpdateEvent) => void
  initialValues: ICreateEvent | IUpdateEvent
  eventId?: string
  submitBtnText: string
}
