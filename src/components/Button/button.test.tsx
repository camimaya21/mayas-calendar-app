import React from 'react'
import { fireEvent, getByRole, render } from '@testing-library/react'
import { Button } from 'components/Button'

describe('Button component', () => {
  it('renders without break and renders text', () => {
    const { getByText } = render(<Button text="hi there" />)
    expect(getByText('hi there')).toBeInTheDocument()
  })

  it('if button is disabled shoul be really disabled', () => {
    const { getByText } = render(<Button text="btn disabled" disabled />)
    expect(getByText('btn disabled')).toBeDisabled()
  })

  it('when user clicks the button, it calls a function recibed by props', () => {
    const funOnClick = jest.fn()
    const { getByRole } = render(<Button text="calls function onClick" onClickFn={funOnClick} />)

    fireEvent.click(getByRole('button'))
    expect(funOnClick).toHaveBeenCalled()
  })
})
