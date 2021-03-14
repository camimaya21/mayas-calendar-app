import React from 'react'
import { IHeaderProps } from './header.types'
import { BackIcon, BurgerIcon, CloseIcon } from 'components/Icons'
import { SHeader } from './header.styles'

export const Header: React.FC<IHeaderProps> = ({
  pageTitle,
  close,
  burger,
  back,
  margin,
  onClickIcon,
  children
}: IHeaderProps) => {
  return (
    <SHeader margin={margin}>
      <button className="icons" onClick={onClickIcon}>
        {burger && <BurgerIcon />}
        {back && <BackIcon />}
        {close && <CloseIcon />}
      </button>
      <h1>{pageTitle}</h1>
      {children}
    </SHeader>
  )
}
