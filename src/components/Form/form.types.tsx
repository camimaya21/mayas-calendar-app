import React from 'react'

export type TFormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  children: React.ReactNode
}
