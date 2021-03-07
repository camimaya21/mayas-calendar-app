import styled from '@emotion/styled'
import { ICustomProps } from './types'

export const SFlexCenterCenter = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SFlexCenterRow = styled('div')<ICustomProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => (props.customFontSize ? props.customFontSize : '1rem')};
  & svg {
    margin-right: 0.5rem;
  }
`

export const SBasicContainer = styled(SFlexCenterCenter)`
  width: 100%;
  min-height: 100vh;
  max-width: 800px;
  display: flex;
  flex: 0 1;
  flex-direction: column;
  align-self: center;
`

export const STextCentered = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
`
