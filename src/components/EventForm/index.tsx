import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ICreateEvent, IUpdateEvent } from 'api/eventsApi.types'
import { formatDatesToServer, formatDateToInput } from 'utils/datesFormat'
import { IEventFormProps } from './eventForm.types'

import { Form } from 'components/Form'
import { Input } from 'components/FormInput'
import { Button } from 'components/Button'
import { SBtnContainer } from 'styles/common'

export const EventForm: React.FC<IEventFormProps> = ({
  initialValues,
  onCreateEvent,
  onUpdateEvent,
  submitBtnText,
  eventId
}: IEventFormProps) => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState<ICreateEvent>({
    ...initialValues,
    startDate: formatDateToInput(initialValues.startDate),
    endDate: formatDateToInput(initialValues.endDate)
  })

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = { ...formData, [e.target.name]: e.target.value }
    setFormData(data)
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formDataParsed: ICreateEvent | IUpdateEvent = {
      ...formData,
      startDate: formatDatesToServer(formData.startDate),
      endDate: formatDatesToServer(formData.endDate)
    }
    if (onCreateEvent) {
      return onCreateEvent(formDataParsed)
    }
    if (onUpdateEvent) {
      return onUpdateEvent({ ...formDataParsed, id: eventId || '' })
    }
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <Input
        name="title"
        type="text"
        required
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
        required
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
        type="datetime-local"
        required
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
        type="datetime-local"
        required
        value={formData.endDate}
        onChange={handleOnChange}
        moreProps={{
          label: t('eventForm.endDate.label'),
          customMargin: '2.5rem 0 0 0',
          showInputErrors: false
        }}
      />
      <SBtnContainer customPadding={'1rem 0 0 0'}>
        <Button text={submitBtnText} primary width="100%" />
      </SBtnContainer>
    </Form>
  )
}
