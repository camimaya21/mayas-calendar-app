import React, { useState } from 'react'
import FullCalendar, { EventClickArg } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'

import { useEvents } from 'hooks/queries/events'
import { IEvent } from 'api/eventsApi.types'

import { ModalCreateEvent } from 'components/ModalCreateEvent'
import { LoadingDots } from 'components/Loading'
import Footer from 'components/Footer'
import { SBasicContainer } from 'styles/common'
import { SCalendarWrapper, SCalendarContainer } from './styles'

export const CalendarView: React.FC = () => {
  const events = useEvents()
  const [openNewEventModal, setOpenNewEventModal] = useState(false)

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
    setOpenNewEventModal(true)
  }

  const onSuccessAddEvent = () => {
    events.refetch()
    setOpenNewEventModal(false)
  }

  const onDateClick = (arg: DateClickArg) => {
    // TODO
    console.log(arg.dateStr)
  }

  const onEventClick = (arg: EventClickArg) => {
    const eventId = arg.event._def.publicId
    console.log('open Event details page', eventId)
  }

  if (events.isLoading) {
    return (
      <SBasicContainer>
        <LoadingDots />
      </SBasicContainer>
    )
  }

  return (
    <>
      {openNewEventModal && <ModalCreateEvent onSuccessSubmit={onSuccessAddEvent} />}
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
    </>
  )
}
