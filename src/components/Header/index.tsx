import React from 'react'
import { IHeaderProps } from './header.types'
import { BurgerIcon, CloseIcon } from 'components/Icons'
import { SHeader } from './header.styles'

export const Header: React.FC<IHeaderProps> = ({ pageTitle, close, burger, margin, onClickIcon }: IHeaderProps) => {
  return (
    <SHeader margin={margin}>
      {burger && (
        <button onClick={onClickIcon}>
          <BurgerIcon />
        </button>
      )}
      <h1>{pageTitle}</h1>
      {close && (
        <button onClick={onClickIcon}>
          <CloseIcon />
        </button>
      )}
    </SHeader>
  )
}
