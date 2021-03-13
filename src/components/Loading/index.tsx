import React from 'react'
import { SLoadingBounce, CircleBorder, CircleCore, PulseContainer, PulseBubble } from './loading.styles'

export const LoadingBounce: React.FC = () => {
  return <SLoadingBounce data-testid="loading-bounce" />
}

export const LoadingSpinner: React.FC = () => {
  return (
    <CircleBorder data-testid="loading-spinner">
      <CircleCore />
    </CircleBorder>
  )
}

export const LoadingDots: React.FC = () => {
  return (
    <PulseContainer>
      <PulseBubble />
      <PulseBubble />
      <PulseBubble />
    </PulseContainer>
  )
}
