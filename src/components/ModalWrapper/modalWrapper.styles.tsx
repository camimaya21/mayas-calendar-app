import styled from '@emotion/styled'

export const SOverlay = styled('div')`
  width: 100%;
  height: 100%;
  background-color: var(--modal-bg-color);
  opacity: 0.8;
  position: absolute;
  z-index: 998;
`

export const SModalContainer = styled('div')`
  width: 340px;
  min-height: 368px;
  height: max-content;
  display: flex;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  padding: 1rem;
  z-index: 999;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  & button {
    margin-top: 2rem;
  }
  & button:visited {
    background-color: var(--main-color);
  }
  & button:hover,
  button:focus {
    color: var(--main-color);
  }
`
