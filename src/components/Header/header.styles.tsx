import styled from '@emotion/styled'
import { ISHeader } from './header.types'

export const SHeader = styled('header')<ISHeader>`
  height: 64px;
  width: 100%;
  min-width: 375px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  margin: ${(props) => (props.margin ? props.margin : '0')};
  & h1 {
    font-size: 1.1rem;
    font-weight: 500;
    text-align: center;
    width: 100%;
    margin-left: 1rem;
    z-index: 3;
    margin: 0 auto;
    position: absolute;
  }
  & svg {
    height: 16px;
    width: 16px;
    margin-left: 1rem;
  }
  & a {
    width: 43px;
    height: 21px;
    font-size: 0.8rem;
    margin-right: 1rem;
    text-align: right;
    color: #000000;
    text-decoration: none;
    z-index: 3;
  }
  & button {
    border: none;
    background: #fff;
    z-index: 4;
  }
`
