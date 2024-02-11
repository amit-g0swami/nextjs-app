'use client'

import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthContextProvider } from '../contexts/AuthContext'

interface TanStackQueryProviderProps {
  children: ReactNode
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false
    }
  }
})

export const TanStackQueryProvider = (props: TanStackQueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>{props.children}</AuthContextProvider>
    </QueryClientProvider>
  )
}
