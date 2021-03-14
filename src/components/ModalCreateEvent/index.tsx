import React, { useState } from 'react'
import { addHours, format, formatISO } from 'date-fns'

import { Form } from 'components/Form'
import { Header } from 'components/Header'
import { ModalWrapper } from 'components/ModalWrapper'
import { Input } from 'components/FormInput'
import { ICreateEvent } from 'api/eventsApi.types'
import { SFormContainer, SModalContent } from './modalCreateEvent.styles'
import { Button } from 'components/Button'

export const ModalCreateEvent: React.FC = () => {
  const [formData, setFormData] = useState<ICreateEvent>({
    title: '',
    description: '',
    startDate: format(new Date(), 'Pp'),
    endDate: format(addHours(new Date(), 1), 'Pp')
  })

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = { ...formData, [e.target.name]: e.target.value }
    setFormData(data)
  }

  const formatDates = (date: string) => {
    return formatISO(new Date(date))
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formDataParsed = {
      ...formData,
      startDate: formatDates(formData.startDate),
      endDate: formatDates(formData.endDate)
    }
    console.log(formDataParsed)
  }

  return (
    <ModalWrapper>
      <SModalContent>
        <Header pageTitle={'Add Event'} />
        <SFormContainer>
          <Form onSubmit={handleOnSubmit}>
            <Input
              name="title"
              type="text"
              value={formData.title}
              onChange={handleOnChange}
              moreProps={{
                label: 'Title',
                customMargin: '2.5rem 0 0 0',
                showInputErrors: false
              }}
              placeholder="Write here your event's title"
            />
            <Input
              name="description"
              type="text"
              value={formData.description}
              onChange={handleOnChange}
              moreProps={{
                label: 'Description',
                customMargin: '2.5rem 0 0 0',
                showInputErrors: false
              }}
              placeholder="Tell us more about your event"
            />
            <Input
              name="startDate"
              type="text"
              value={formData.startDate}
              onChange={handleOnChange}
              moreProps={{
                label: 'Starts at',
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
                label: 'Ends at',
                customMargin: '2.5rem 0 0 0',
                showInputErrors: false
              }}
            />
            <Button text="Add event" primary width="100%" />
          </Form>
        </SFormContainer>
      </SModalContent>
    </ModalWrapper>
  )
}
