import styled from '@emotion/styled'

export const SFormContainer = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

export const SModalContent = styled('div')`
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  letter-spacing: normal;
  height: 100%;
  width: 100%;
  & h4 {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.2;
    color: var(--title-color);
    margin: 1.3rem 0 1.5rem 0;
  }
  & p {
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.5;
    color: var(--text-color);
    margin-bottom: 1.5rem;
  }
  & ul {
    text-align: left;
    padding-left: 2.5rem;
    list-style: disc;
    color: var(--text-color);
    margin-bottom: 1.5rem;
  }
`
