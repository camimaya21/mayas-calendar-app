import React from 'react'
import FullCalendar, { EventClickArg } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'

import { useEvents } from 'hooks/queries/events'
import { IEvent } from 'api/eventsApi.types'

import Footer from 'components/Footer'
import { LoadingDots } from 'components/Loading'
import { SBasicContainer } from 'styles/common'
import { SCalendarWrapper, SCalendarContainer } from './styles'

export const CalendarView: React.FC = () => {
  const events = useEvents()

  const eventParse = (events: IEvent[] | undefined) => {
    if (!events) {
      return []
    }
    return events.map((e) => ({
      id: e.id,
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

  const onEventClick = (arg: EventClickArg) => {
    const eventId = arg.event._def.publicId
    console.log('open Event details page', eventId)
  }

  if (events.isLoading) {
    return <LoadingDots />
  }

  return (
    <SBasicContainer>
      <SCalendarWrapper>
        <SCalendarContainer>
          {events.isSuccess && (
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
                contentHeight={600}
                events={eventParse(events.data)}
                dateClick={onDateClick}
                eventClick={onEventClick}
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
