import React from 'react'
import { render, fireEvent, cleanup, screen } from '@testing-library/react'
import { Input } from '.'

describe('<Input/>', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders without crashing', () => {
    const fakeFn = jest.fn()

    render(
      <Input
        placeholder="Add name"
        name="name"
        type="text"
        onChange={fakeFn}
        moreProps={{
          showInputErrors: true
        }}
      />
    )

    expect(screen.queryByPlaceholderText('Add name')).toBeInTheDocument()
    expect(screen.queryByTestId('input-name')).toBeInTheDocument()
  })

  it('should add a label', () => {
    const fakeFn = jest.fn()

    render(
      <Input
        placeholder="Please add your name"
        name="name"
        type="text"
        onChange={fakeFn}
        moreProps={{ label: 'Name', showInputErrors: false }}
      />
    )

    expect(screen.queryByTestId('label-name')).toBeInTheDocument()
  })

  it('should change the input value', () => {
    const fakeFn = jest.fn()

    render(
      <Input
        placeholder="How old are you?"
        name="age"
        type="number"
        onChange={fakeFn}
        moreProps={{ label: 'Age', showInputErrors: false }}
      />
    )

    const inputAge = screen.getByTestId('input-age')
    expect(inputAge).toBeInTheDocument()
    fireEvent.change(inputAge, { target: { value: 18 } })

    expect(inputAge.value).toBe('18')
  })

  it('show input error messages when value is required', () => {
    const fakeFn = jest.fn()

    render(
      <Input
        placeholder="How old are you?"
        name="age"
        type="number"
        onChange={fakeFn}
        moreProps={{
          label: 'Age',
          showInputErrors: true,
          error: 'I need this to continue'
        }}
      />
    )

    expect(screen.getByText(/I need this to continue/i)).toBeInTheDocument()
  })

  it('show input error messages when value is minLength', () => {
    const fakeFn = jest.fn()

    render(
      <Input
        placeholder="Please add your name"
        name="name"
        type="text"
        onChange={fakeFn}
        moreProps={{
          label: 'Name',
          error: 'This is to short',
          showInputErrors: true
        }}
      />
    )

    expect(screen.getByText(/This is to short/i)).toBeInTheDocument()
  })

  it('show input error messages when value is maxLength', () => {
    const fakeFn = jest.fn()

    render(
      <Input
        placeholder="Please add your name"
        name="name"
        type="text"
        onChange={fakeFn}
        moreProps={{
          label: 'Name',
          showInputErrors: true,
          error: 'This is to long'
        }}
      />
    )

    expect(screen.getByText(/This is to long/i)).toBeInTheDocument()
  })

  it('show input error messages when value is min', () => {
    const fakeFn = jest.fn()

    render(
      <Input
        placeholder="How old are you?"
        name="age"
        type="number"
        onChange={fakeFn}
        moreProps={{
          label: 'Age',
          showInputErrors: true,
          error: 'Please add a number bigger than this'
        }}
      />
    )

    expect(screen.getByText(/Please add a number bigger than this/i)).toBeInTheDocument()
  })

  it('show input error messages when value is max', () => {
    const fakeFn = jest.fn()

    render(
      <Input
        placeholder="How old are you?"
        name="age"
        type="number"
        onChange={fakeFn}
        moreProps={{
          label: 'Age',
          showInputErrors: true,
          error: 'Please add a number smaller than this'
        }}
      />
    )

    expect(screen.getByText(/Please add a number smaller than this/i)).toBeInTheDocument()
  })
})
