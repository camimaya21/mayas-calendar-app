import styled from '@emotion/styled'
import { IStyledInput } from './formInput.types'

export const StyledLabel = styled('label')`
  display: block;
  width: 90%;
  letter-spacing: normal;
  color: var(--title-color);
  font-size: 0.93rem;
  font-weight: 500;
  text-align: left;
  margin: 0.5rem auto;
`

export const SSpanError = styled('span')`
  color: var(--error-color);
  width: 90%;
  margin: 0.25rem auto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
`

export const StyledFormField = styled('input')<IStyledInput>`
  position: relative;
  margin: 0 auto;
  width: 100%;
  border: ${(props) => (props.error ? '1px' : '0')};
  border-color: ${(props) => (props.error ? 'var(--error-color)' : 'transparent')};
  border-radius: 0.5rem;
  background: var(--ilde-bg-color);
  height: 48px;
  padding: 1rem 0 1rem 1rem;
  outline: none;
  color: ${(props) => (props.error ? 'var(--error-color)' : 'var(--text-color)')};
  font-size: 0.93rem;
  font-weight: 500;
  &::placeholder {
    color: var(--placeholder-color);
    font-size: 0.93rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
  }
  &:focus {
    border: ${(props) => (props.error ? '1px solid var(--error-color)' : '1px solid var(--input-border-color)')};
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ${(props) => (props.type === 'number' ? '-moz-appearance: textfield;' : '')}
`
