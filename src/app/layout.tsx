'use client'

import './globals.css'
import { ReactNode } from 'react'
import { WagmiConfig } from '@/config/wagmi'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Tempo Payment App</title>
        <meta name="description" content="Purchase and load credit cards with Tempo testnet tokens" />
      </head>
      <body>
        <WagmiConfig>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </WagmiConfig>
      </body>
    </html>
  )
}
