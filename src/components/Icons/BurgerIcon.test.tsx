import React from 'react'
import { render } from '@testing-library/react'
import { BurgerIcon } from '.'

test('<BurgerIcon/> renders without crashing', () => {
  const { queryByTitle } = render(<BurgerIcon />)
  expect(queryByTitle('BurgerIcon')).toBeInTheDocument()
})
