import React from 'react'
import { render, screen } from '@testing-library/react'
import App from 'App'

jest.mock('react-i18next', () => {
  return {
    useTranslation: () => ({
      t: (key: string) => key.toUpperCase(),
      ready: true
    })
  }
})

test('renders propertly', () => {
  render(<App />)
  const title = screen.getByText(/appTitle/i)
  expect(title).toBeInTheDocument()
})
