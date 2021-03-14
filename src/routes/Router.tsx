import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CalendarPage from 'pages/CalendarPage'
import EventDetailPage from 'pages/EventDetailsPage'

export const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={CalendarPage} />
      <Route path="/event/:eventId" exact component={EventDetailPage} />
    </Switch>
  )
}
