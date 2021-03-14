import React from 'react'

import { StyledForm } from './form.styles'
import { TFormProps } from './form.types'

export const Form: React.FC<TFormProps> = ({ onSubmit, children }: TFormProps) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
}
