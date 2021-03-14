import React from 'react'

import { EventForm } from 'components/EventForm'
import { Header } from 'components/Header'
import { ModalWrapper } from 'components/ModalWrapper'
import { SFormContainer, SModalContent } from './modalCreateEvent.styles'
import { addHours, format } from 'date-fns'
import { ICreateEvent } from 'api/eventsApi.types'
import { useCreateEvent } from 'hooks/mutations/events'
import { IModalCreateEventProps } from './modalCreateEvent.types'
import { useTranslation } from 'react-i18next'

export const ModalCreateEvent: React.FC<IModalCreateEventProps> = ({
  onSuccessSubmit,
  onCloseModal
}: IModalCreateEventProps) => {
  const { t } = useTranslation()
  const createEvent = useCreateEvent()

  const initialValues = {
    title: '',
    description: '',
    startDate: format(new Date(), 'Pp'),
    endDate: format(addHours(new Date(), 1), 'Pp')
  }

  const handleOnCreateEvent = (formData: ICreateEvent) => {
    createEvent.mutate(formData, {
      onSuccess: () => {
        onSuccessSubmit()
      }
    })
  }

  return (
    <ModalWrapper>
      <SModalContent>
        <Header pageTitle={t('modalCreateEvent.header')} close onClickIcon={onCloseModal} />
        <SFormContainer>
          <EventForm initialValues={initialValues} onSubmitFn={handleOnCreateEvent} />
        </SFormContainer>
      </SModalContent>
    </ModalWrapper>
  )
}
