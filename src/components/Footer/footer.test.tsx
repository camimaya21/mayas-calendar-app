import React from 'react'
import { render } from '@testing-library/react'
import Footer from '.'

jest.mock('react-i18next', () => {
  return {
    useTranslation: () => ({
      t: (key: string) => key.toUpperCase(),
      ready: true
    })
  }
})

describe('<Footer>', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Footer />)

    expect(getByText(/FOOTER.TEXT/i))
    expect(getByText(/FOOTER.BY/i))
    expect(getByText(/@camimaya21/i))
  })
})
