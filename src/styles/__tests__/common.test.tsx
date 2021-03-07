import React from 'react'
import { render } from '@testing-library/react'
import { SFlexCenterCenter, SFlexCenterRow, SBasicContainer, STextCentered, SSection } from '../common'

describe('Common Styled Components', () => {
  it('<SFlexCenterCenter> renders propertly', () => {
    const { container } = render(<SFlexCenterCenter />)
    expect(container).toBeInTheDocument()
  })
  it('<SFlexCenterRow> renders propertly', () => {
    const { container } = render(<SFlexCenterRow />)
    expect(container).toBeInTheDocument()
  })
  it('<SFlexCenterRow> accept custom properties', () => {
    const { container } = render(<SFlexCenterRow customFontSize="2rem" />)
    expect(container).toBeInTheDocument()
  })
  it('<SBasicContainer> renders propertly', () => {
    const { container } = render(<SBasicContainer />)
    expect(container).toBeInTheDocument()
  })
  it('<SSection> renders propertly', () => {
    const { container } = render(<SSection />)
    expect(container).toBeInTheDocument()
  })
  it('<STextCentered> renders propertly', () => {
    const { container } = render(<STextCentered />)
    expect(container).toBeInTheDocument()
  })
})
