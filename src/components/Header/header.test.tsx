import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Header } from '.'

describe('<Header>', () => {
  let fnOnClick: any //eslint-disable-line

  beforeEach(() => {
    fnOnClick = jest.fn()
  })

  it('renders without crashing', () => {
    const { getByText } = render(<Header pageTitle="Bolty" onClickIcon={fnOnClick} />)
    expect(getByText('Bolty')).toBeInTheDocument()
  })

  it('renders with burger icon', () => {
    const { queryByTitle } = render(<Header pageTitle="Test" onClickIcon={fnOnClick} burger />)
    expect(queryByTitle('BurgerIcon')).toBeInTheDocument()
  })

  it('function passed by props will be called when user clicks on burger icon', () => {
    const { getByText } = render(<Header pageTitle="Test" onClickIcon={fnOnClick} burger />)
    fireEvent.click(getByText('BurgerIcon'))
    expect(fnOnClick).toHaveBeenCalled()
  })

  it('renders with close icon', () => {
    const { queryByTitle } = render(<Header pageTitle="Test" onClickIcon={fnOnClick} close />)
    expect(queryByTitle('CloseIcon')).toBeInTheDocument()
  })

  it('function passed by props will be called when user clicks on close icon', () => {
    const { getByText } = render(<Header pageTitle="Test" onClickIcon={fnOnClick} close />)
    fireEvent.click(getByText('CloseIcon'))
    expect(fnOnClick).toHaveBeenCalled()
  })
})
