import React from 'react'
import { useTranslation } from 'react-i18next'
import { Header } from 'components/Header'
import Footer from 'components/Footer'
import { SBasicContainer } from 'styles/common'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import { useEvents } from 'hooks/queries/events'
import { IEvent } from 'api/eventsApi.types'
import { SCalendarWrapper, SCalendarContainer } from './styles'

export const CalendarView: React.FC = () => {
  const { t } = useTranslation()
  const { data, isSuccess } = useEvents()

  const eventParse = (events: IEvent[] | undefined) => {
    if (!events) {
      return []
    }
    return events.map((e) => ({
      title: e.title,
      start: e.startDate,
      end: e.endDate
    }))
  }

  const onAddEvent = () => {
    console.log('add event')
  }

  const onDateClick = (arg: DateClickArg) => {
    console.log(arg.dateStr)
  }

  return (
    <SBasicContainer>
      <Header pageTitle={t('appTitle')} />
      <SCalendarWrapper>
        <SCalendarContainer>
          {isSuccess && (
            <>
              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                  left: 'prev,next',
                  center: 'title',
                  right: 'customAddBtn'
                }}
                footerToolbar={{
                  left: 'today',
                  right: 'dayGridMonth,listMonth'
                }}
                customButtons={{
                  customAddBtn: {
                    text: '+',
                    click: onAddEvent
                  }
                }}
                contentHeight={650}
                events={eventParse(data)}
                dateClick={onDateClick}
                editable={true}
                selectable={true}
              />
            </>
          )}
        </SCalendarContainer>
      </SCalendarWrapper>
      <Footer />
    </SBasicContainer>
  )
}
