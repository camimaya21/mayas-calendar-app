export type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  moreProps: AditionalProps
}

export type AditionalProps = {
  label?: React.ReactNode
  value?: string | number
  error?: string
  showInputErrors?: boolean
  customWidth?: string
  customMargin?: string
}

export interface IStyledInput {
  error?: boolean
  customMinWidth?: string
  customWidth?: string
}
