/* eslint-disable react/prop-types */
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

export const QueryWrapper: React.FC = ({ children }) => {
  const queryClient = new QueryClient()
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
