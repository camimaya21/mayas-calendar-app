import React from 'react'
import { render } from '@testing-library/react'
import { BackIcon } from '.'

test('<BackIcon/> renders without crashing', () => {
  const { queryByTitle } = render(<BackIcon />)
  expect(queryByTitle('BackIcon')).toBeInTheDocument()
})
