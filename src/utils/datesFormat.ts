import { formatISO, format, addHours } from 'date-fns'

export const formatDatesToServer = (date: string): string => {
  return formatISO(new Date(date))
}

export const formatDateToInput = (date: string): string => {
  return format(new Date(date), "yyyy-MM-dd'T'HH:mm:ss")
}

export const formatTodayToInput = (): string => {
  return format(new Date(), "yyyy-MM-dd'T'HH:mm:ss")
}

export const formatTodayAddHours = (hour: number): string => {
  return format(addHours(new Date(), hour), "yyyy-MM-dd'T'HH:mm:ss")
}

export const formatDateToHuman = (date: string): string => {
  return format(new Date(date), 'Pp')
}
