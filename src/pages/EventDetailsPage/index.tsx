import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory, useParams } from 'react-router'
import { useQueryClient } from 'react-query'

import { useDeleteEvent, useUpdateEvent } from 'hooks/mutations/events'
import { useEvent } from 'hooks/queries/events'
import { pages } from 'routes/urls'
import { IUpdateEvent } from 'api/eventsApi.types'

import { Button } from 'components/Button'
import { EventForm } from 'components/EventForm'
import { EventDetails } from 'components/EventDetails'
import { Header } from 'components/Header'
import { LoadingDots } from 'components/Loading'
import { SDetailsContainer } from './eventDetailsPage.styles'
import { SBasicContainer, SBtnContainer, SBtnsContainer, SSection } from 'styles/common'

const EventDetailPage: React.FC = () => {
  const { t } = useTranslation()
  const { eventId } = useParams<{ eventId: string }>()
  const history = useHistory()
  const queryClient = useQueryClient()
  const event = useEvent(eventId)
  const deleteEvent = useDeleteEvent()
  const updateEvent = useUpdateEvent()
  const [showUpdateForm, setShowUpdateForm] = useState(false)

  const goBackToHome = () => history.push(pages.home)
  const openUpdateForm = () => setShowUpdateForm(true)
  const closeUpdateForm = () => setShowUpdateForm(false)

  const onDeleteEvent = () => {
    deleteEvent.mutate(eventId, {
      onSuccess: () => {
        queryClient.invalidateQueries('events')
        goBackToHome()
      }
    })
  }

  const onUpdateEvent = (dataUpdated: IUpdateEvent) => {
    updateEvent.mutate(dataUpdated, {
      onSuccess: () => {
        queryClient.invalidateQueries(['event', eventId])
        closeUpdateForm()
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
                  <EventDetails eventData={event.data} />
                  <SBtnsContainer>
                    <Button text={t('eventDetails.deleteBtn')} onClickFn={onDeleteEvent} />
                    <Button text={t('eventDetails.updateBtn')} primary onClickFn={openUpdateForm} />
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
                    <Button width="100%" text={t('eventDetails.cancelBtn')} onClickFn={closeUpdateForm} />
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
