/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { render, within } from '@testing-library/react'

import { ModalPortal } from '.'

jest.mock('react-i18next', () => {
  return {
    useTranslation: () => ({
      t: (key: string) => key.toUpperCase(),
      ready: true
    })
  }
})

test('modal shows the children', () => {
  render(
    <ModalPortal>
      <h2>This is a modal test.</h2>
    </ModalPortal>
  )
  // @ts-ignore
  const { getByText } = within(document.getElementById('modal-root'))
  expect(getByText('This is a modal test.')).toBeInTheDocument()
})
