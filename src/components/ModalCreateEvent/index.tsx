import React from 'react'
import { useTranslation } from 'react-i18next'
import { formatTodayToInput, formatTodayAddHours } from 'utils/datesFormat'

import { ICreateEvent } from 'api/eventsApi.types'
import { useCreateEvent } from 'hooks/mutations/events'
import { IModalCreateEventProps } from './modalCreateEvent.types'

import { EventForm } from 'components/EventForm'
import { Header } from 'components/Header'
import { ModalPortal } from 'components/ModalPortal'
import { ModalWrapper } from 'components/ModalWrapper'
import { SFormContainer, SModalContent } from './modalCreateEvent.styles'

export const ModalCreateEvent: React.FC<IModalCreateEventProps> = ({
  onSuccessSubmit,
  onCloseModal
}: IModalCreateEventProps) => {
  const { t } = useTranslation()
  const createEvent = useCreateEvent()

  const initialValues = {
    title: '',
    description: '',
    startDate: formatTodayToInput(),
    endDate: formatTodayAddHours(1)
  }

  const handleOnCreateEvent = (formData: ICreateEvent) => {
    createEvent.mutate(formData, {
      onSuccess: () => {
        onSuccessSubmit()
      }
    })
  }

  return (
    <ModalPortal>
      <ModalWrapper>
        <SModalContent>
          <Header pageTitle={t('modalCreateEvent.header')} close onClickIcon={onCloseModal} />
          <SFormContainer>
            <EventForm
              initialValues={initialValues}
              submitBtnText={t('eventForm.submitBtn')}
              onCreateEvent={handleOnCreateEvent}
            />
          </SFormContainer>
        </SModalContent>
      </ModalWrapper>
    </ModalPortal>
  )
}
