import React from 'react'
import { SModalContainer, SOverlay } from './modalWrapper.styles'
import { IModalWrapper } from './modalWrapper.types'

export const ModalWrapper: React.FC<IModalWrapper> = ({ children }: IModalWrapper) => {
  return (
    <div>
      <SOverlay></SOverlay>
      <SModalContainer>{children}</SModalContainer>
    </div>
  )
}
