import styled from '@emotion/styled'
import { ISButton } from './button.types'

export const SButton = styled('button')<ISButton>`
  width: ${(props) => (props.width ? props.width : '226px')};
  height: ${(props) => (props.height ? props.height : '48px')};
  font-weight: bold;
  font-size: 1rem;
  color: ${(props) =>
    props.primary
      ? 'var(--btn-text-color)'
      : props.modalSecondary
      ? 'var(--second-modal-text-color)'
      : 'var(--main-color)'};
  padding: 0.625rem;
  background-color: ${(props) => (props.primary ? 'var(--main-color)' : 'var(--btn-text-color)')};
  border: 1px solid var(--main-color);
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0.75rem 0;
  &:hover,
  &:focus {
    background-color: ${(props) => (props.primary ? 'var(--primary-color-400)' : 'var(--main-color)')};
    color: var(--btn-text-color);
    outline-color: var(--primary-color-500);
  }
  &:disabled {
    background-color: var(--btn-bg-disabled);
    outline-color: var(--btn-bg-disabled);
    border-color: transparent;
    cursor: not-allowed;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:disabled > div {
    margin-left: 1rem;
  }
  & svg {
    margin-left: 0.5rem;
  }
`
