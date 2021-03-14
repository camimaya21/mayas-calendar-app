import styled from '@emotion/styled'

interface SpinnerProps {
  bgColor?: string
}

export const SLoadingBounce = styled('div')`
  width: 40px;
  height: 40px;
  position: relative;
  margin: 20px auto;
  &::after,
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: var(--main-color);
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: loading-bounce 2s infinite ease-in-out;
  }
  &::after {
    animation-delay: -1s;
  }

  @keyframes loading-bounce {
    0%,
    100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }
`

export const CircleBorder = styled('div')`
  width: 24px;
  height: 24px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.3) 33%, rgba(255, 255, 255, 1) 100%);
  animation: spin 1.5s linear 0s infinite;

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(359deg);
    }
  }
`

export const CircleCore = styled('div')<SpinnerProps>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.bgColor ? props.bgColor : 'var(--btn-bg-disabled)')};
  border-radius: 50%;
`

export const PulseContainer = styled('div')`
  width: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  & div:nth-of-type(1) {
    animation: pulse 0.4s ease 0s infinite alternate;
  }
  & div:nth-of-type(2) {
    animation: pulse 0.4s ease 2s infinite alternate;
  }
  & div:nth-of-type(3) {
    animation: pulse 0.4s ease 4s infinite alternate;
  }

  @keyframes pulse {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0.25;
      transform: scale(0.75);
    }
  }
`

export const PulseBubble = styled('div')`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #3ff9dc;
`
