export interface IEvent {
  id: string
  title: string
  description: string
  startDate: Date
  endDate: Date
}

export interface ICreateEvent {
  title: string
  description: string
  startDate: Date
  endDate: Date
}

export interface IUpdateEvent {
  id: string
  title: string
  description: string
  startDate: Date
  endDate: Date
}

export interface IDeleteEvent {
  id: string
  result: string
}
