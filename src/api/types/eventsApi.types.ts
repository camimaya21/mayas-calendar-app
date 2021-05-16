export interface IEvent {
  id: string
  title: string
  description: string
  startDate: string
  endDate: string
}

export interface ICreateEvent {
  title: string
  description: string
  startDate: string
  endDate: string
}

export interface IUpdateEvent {
  id: string
  title: string
  description: string
  startDate: string
  endDate: string
}

export interface IDeleteEvent {
  id: string
  result: string
}
