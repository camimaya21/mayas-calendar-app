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
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex: 0 1;
  flex-direction: column;
  align-self: center;
`

export const SSection = styled('article')`
  width: 100%;
  padding: 0rem 0.5rem;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  :first-of-type {
    margin-top: 0;
  }
  :last-of-type {
    margin-bottom: 1rem;
  }
  button {
    margin-top: 1rem;
  }
`

export const STextCentered = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
`
