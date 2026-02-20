'use client'

import { ReactNode } from 'react'
import { WagmiConfig } from '@/config/wagmi'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayoutClient({
  children,
}: {
  children: ReactNode
}) {
  return (
    <WagmiConfig>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </WagmiConfig>
  )
}
