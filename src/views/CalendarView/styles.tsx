import styled from '@emotion/styled'

export const SCalendarWrapper = styled('section')`
  max-width: 1200px;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-grow: 1;
`

export const SCalendarContainer = styled('div')`
  width: 100%;
  display: flex;
  & .fc {
    width: 100%;
  }
  & .fc-button:disabled {
    opacity: 0.35;
  }
`
