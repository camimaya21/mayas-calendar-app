import React from 'react'
import { render } from '@testing-library/react'
import { CloseIcon } from '.'

test('<CloseIcon/> renders without crashing', () => {
  const { queryByTitle } = render(<CloseIcon />)
  expect(queryByTitle('CloseIcon')).toBeInTheDocument()
})
