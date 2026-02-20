import './globals.css'
import { ReactNode } from 'react'
import RootLayoutClient from './RootLayoutClient.tsx'

export const metadata = {
  title: 'Tempo Payment App',
  description: 'Purchase and load credit cards with Tempo testnet tokens',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  )
}
