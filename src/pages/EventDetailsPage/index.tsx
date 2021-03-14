import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory, useParams } from 'react-router'

import { useDeleteEvent, useUpdateEvent } from 'hooks/mutations/events'
import { useEvent } from 'hooks/queries/events'
import { pages } from 'routes/urls'
import { IUpdateEvent } from 'api/eventsApi.types'

import { Button } from 'components/Button'
import { EventForm } from 'components/EventForm'
import { Header } from 'components/Header'
import { LoadingDots } from 'components/Loading'
import { SDetailsContainer, SLabel } from './eventDetailsPage.styles'
import { SBasicContainer, SBtnContainer, SBtnsContainer, SSection } from 'styles/common'
import { formatDateToHuman } from 'utils/datesFormat'

const EventDetailPage: React.FC = () => {
  const { t } = useTranslation()
  const { eventId } = useParams<{ eventId: string }>()
  const history = useHistory()
  const event = useEvent(eventId)
  const deleteEvent = useDeleteEvent()
  const updateEvent = useUpdateEvent()
  const [showUpdateForm, setShowUpdateForm] = useState(false)

  const goBackToHome = () => history.push(pages.home)

  const onDeleteEvent = () => {
    deleteEvent.mutate(eventId, {
      onSuccess: () => {
        window.alert('Event deleted')
        goBackToHome()
      }
    })
  }

  const onUpdateEvent = (dataUpdated: IUpdateEvent) => {
    updateEvent.mutate(dataUpdated, {
      onSuccess: () => {
        event.refetch()
        setShowUpdateForm(false)
      }
    })
  }

  if (event.isLoading) {
    return (
      <SBasicContainer>
        <LoadingDots />
      </SBasicContainer>
    )
  }

  return (
    <>
      <SBasicContainer>
        <Header back onClickIcon={goBackToHome} pageTitle={t('eventDetails.header')} />
        <SSection>
          {event.isSuccess && (
            <SDetailsContainer>
              {!showUpdateForm ? (
                <>
                  <SLabel>{t('eventDetails.title')}</SLabel>
                  <h2>{event.data?.title}</h2>
                  <SLabel>{t('eventDetails.description')}</SLabel>
                  <p>{event.data?.description}</p>
                  <SLabel>{t('eventDetails.startDate')}</SLabel>
                  <p>{formatDateToHuman(event.data?.startDate)}</p>
                  <SLabel>{t('eventDetails.endDate')}</SLabel>
                  <p>{formatDateToHuman(event.data?.endDate)}</p>
                  <SBtnsContainer>
                    <Button text={t('eventDetails.deleteBtn')} onClickFn={onDeleteEvent} />
                    <Button text={t('eventDetails.updateBtn')} primary onClickFn={() => setShowUpdateForm(true)} />
                  </SBtnsContainer>
                </>
              ) : (
                <>
                  <EventForm
                    initialValues={event.data}
                    submitBtnText={t('eventDetails.updateBtn')}
                    onUpdateEvent={onUpdateEvent}
                    eventId={eventId}
                  />
                  <SBtnContainer customPadding={'0'}>
                    <Button
                      width="100%"
                      text={t('eventDetails.cancelBtn')}
                      onClickFn={() => setShowUpdateForm(false)}
                    />
                  </SBtnContainer>
                </>
              )}
            </SDetailsContainer>
          )}
        </SSection>
      </SBasicContainer>
    </>
  )
}

export default EventDetailPage
