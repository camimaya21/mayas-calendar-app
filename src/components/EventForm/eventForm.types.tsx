import { ICreateEvent } from 'api/eventsApi.types'

export interface IEventFormProps {
  onSubmitFn: (eventFormData: ICreateEvent) => void
  initialValues: ICreateEvent
}
