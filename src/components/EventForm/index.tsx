import React, { useState } from 'react'
import { formatISO } from 'date-fns'

import { Form } from 'components/Form'
import { Input } from 'components/FormInput'
import { ICreateEvent } from 'api/eventsApi.types'

import { Button } from 'components/Button'
import { IEventFormProps } from './eventForm.types'
import { useTranslation } from 'react-i18next'

export const EventForm: React.FC<IEventFormProps> = ({ initialValues, onSubmitFn }: IEventFormProps) => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState<ICreateEvent>(initialValues)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = { ...formData, [e.target.name]: e.target.value }
    setFormData(data)
  }

  const formatDates = (date: string) => {
    return formatISO(new Date(date))
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formDataParsed: ICreateEvent = {
      ...formData,
      startDate: formatDates(formData.startDate),
      endDate: formatDates(formData.endDate)
    }
    console.log(formDataParsed)
    onSubmitFn(formDataParsed)
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <Input
        name="title"
        type="text"
        value={formData.title}
        onChange={handleOnChange}
        moreProps={{
          label: t('eventForm.title.label'),
          customMargin: '2.5rem 0 0 0',
          showInputErrors: false
        }}
        placeholder={t('eventForm.title.placeholder')}
      />
      <Input
        name="description"
        type="text"
        value={formData.description}
        onChange={handleOnChange}
        moreProps={{
          label: t('eventForm.description.label'),
          customMargin: '2.5rem 0 0 0',
          showInputErrors: false
        }}
        placeholder={t('eventForm.description.placeholder')}
      />
      <Input
        name="startDate"
        type="text"
        value={formData.startDate}
        onChange={handleOnChange}
        moreProps={{
          label: t('eventForm.startDate.label'),
          customMargin: '2.5rem 0 0 0',
          showInputErrors: false
        }}
      />
      <Input
        name="endDate"
        type="text"
        value={formData.endDate}
        onChange={handleOnChange}
        moreProps={{
          label: t('eventForm.endDate.label'),
          customMargin: '2.5rem 0 0 0',
          showInputErrors: false
        }}
      />
      <Button text={t('eventForm.submitBtn')} primary width="100%" />
    </Form>
  )
}
