export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  primary?: boolean
  width?: string
  height?: string
  disabled?: boolean
  modalSecondary?: boolean
  onClickFn?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export interface ISButton {
  width?: string
  height?: string
  primary?: boolean
  disabled?: boolean
  modalSecondary?: boolean
}
