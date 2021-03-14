/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-extra-semi */
import React from 'react'
import { cleanup, render, screen, act } from '@testing-library/react'
import { findEvents } from 'api/eventsApi'
import { QueryWrapper } from 'utils/testQueryWrapper'
import App from 'App'
import { MOCK_ALL_EVENTS_RESPONSE } from '__mocks__/eventsData'

jest.mock('react-i18next', () => {
  return {
    useTranslation: () => ({
      t: (key: string) => key.toUpperCase(),
      ready: true
    })
  }
})

jest.mock('api/eventsApi', () => ({
  findEvents: jest.fn()
}))

describe('<App />', () => {
  afterEach(() => {
    jest.resetModules()
    cleanup()
  })

  beforeEach(() => {
    ;((findEvents as unknown) as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: MOCK_ALL_EVENTS_RESPONSE })
    )
  })

  it('renders propertly', async () => {
    await act(
      async (): Promise<any> =>
        render(
          <QueryWrapper>
            <App />
          </QueryWrapper>
        )
    )
    const title = screen.getByText(/appTitle/i)
    expect(title).toBeInTheDocument()
  })
})
