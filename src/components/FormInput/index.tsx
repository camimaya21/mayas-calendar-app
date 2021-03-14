/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import { isEmpty } from 'lodash'

import { InputProps } from './formInput.types'
import { SSpanError, StyledFormField, StyledLabel } from './formInput.styles'

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { name, moreProps } = props
  const { label, error, showInputErrors } = moreProps
  const hasError = !isEmpty(error)

  return (
    <>
      {label && (
        <StyledLabel data-testid={`label-${name}`} htmlFor={name}>
          {label}
        </StyledLabel>
      )}

      <StyledFormField data-testid={`input-${name}`} ref={ref} {...props} error={hasError} />
      {showInputErrors && hasError && <SSpanError>{error}</SSpanError>}
    </>
  )
})
