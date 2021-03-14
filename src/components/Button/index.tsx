import React from 'react'
import { SButton } from './button.style'
import { IButtonProps } from './button.types'

export const Button: React.FC<IButtonProps> = ({
  text,
  primary,
  width,
  height,
  disabled,
  onClickFn,
  modalSecondary,
  children
}: IButtonProps) => {
  return (
    <SButton
      modalSecondary={!primary && modalSecondary}
      width={width}
      height={height}
      primary={primary}
      disabled={disabled}
      onClick={onClickFn}
    >
      {text} {children}
    </SButton>
  )
}
