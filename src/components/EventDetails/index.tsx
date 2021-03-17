import React from 'react'
import { useTranslation } from 'react-i18next'
import { formatDateToHuman } from 'utils/datesFormat'
import { SLabel } from './eventDetails.styles'
import { IEventDetailsProps } from './eventDetails.types'

export const EventDetails: React.FC<IEventDetailsProps> = ({ eventData }: IEventDetailsProps) => {
  const { t } = useTranslation()
  return (
    <>
      <SLabel>{t('eventDetails.title')}</SLabel>
      <h2>{eventData.title}</h2>
      <SLabel>{t('eventDetails.description')}</SLabel>
      <p>{eventData.description}</p>
      <SLabel>{t('eventDetails.startDate')}</SLabel>
      <p>{formatDateToHuman(eventData.startDate)}</p>
      <SLabel>{t('eventDetails.endDate')}</SLabel>
      <p>{formatDateToHuman(eventData.endDate)}</p>
    </>
  )
}
