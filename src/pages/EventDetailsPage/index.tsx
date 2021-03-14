import { Button } from 'components/Button'
import { Header } from 'components/Header'
import { LoadingDots } from 'components/Loading'
import { format } from 'date-fns'
import { useDeleteEvent } from 'hooks/mutations/events'
import { useEvent } from 'hooks/queries/events'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory, useParams } from 'react-router'
import { pages } from 'routes/urls'
import { SBasicContainer, SBtnsContainer, SSection } from 'styles/common'
import { SDetailsContainer, SLabel } from './eventDetailsPage.styles'

const EventDetailPage: React.FC = () => {
  const { t } = useTranslation()
  const { eventId } = useParams<{ eventId: string }>()
  const history = useHistory()
  const event = useEvent(eventId)
  const deleteEvent = useDeleteEvent()

  const goBackToHome = () => {
    history.push(pages.home)
  }

  const onDeleteEvent = () => {
    deleteEvent.mutate(eventId, {
      onSuccess: () => {
        window.alert('Event deleted')
        goBackToHome()
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
    <SBasicContainer>
      <Header back onClickIcon={goBackToHome} pageTitle={t('eventDetails.header')}></Header>
      <SSection>
        <SDetailsContainer>
          {event.isSuccess && (
            <>
              <SLabel>{t('eventDetails.title')}</SLabel>
              <h2>{event.data?.title}</h2>
              <SLabel>{t('eventDetails.description')}</SLabel>
              <p>{event.data?.description}</p>
              <SLabel>{t('eventDetails.startDate')}</SLabel>
              <p>{format(new Date(event.data?.startDate), 'Pp')}</p>
              <SLabel>{t('eventDetails.endDate')}</SLabel>
              <p>{format(new Date(event.data?.endDate), 'Pp')}</p>
            </>
          )}
          <SBtnsContainer>
            <Button text={t('eventDetails.deleteBtn')} onClickFn={onDeleteEvent} />
            <Button text={t('eventDetails.updateBtn')} primary />
          </SBtnsContainer>
        </SDetailsContainer>
      </SSection>
    </SBasicContainer>
  )
}

export default EventDetailPage
