import React from 'react'
import { LoadingBounce, LoadingSpinner } from '.'
import { render } from '@testing-library/react'

describe('testing loadings', () => {
  it('loading bounce renders without crashing', () => {
    const { queryByTestId } = render(<LoadingBounce />)
    expect(queryByTestId('loading-bounce')).toBeInTheDocument()
  })

  it('loading spinner renders without crashing', () => {
    const { queryByTestId } = render(<LoadingSpinner />)
    expect(queryByTestId('loading-spinner')).toBeInTheDocument()
  })
})
