'use client'

import Link from 'next/link'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { injected } from 'wagmi/connectors'
import { useState } from 'react'

export default function Header() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()
  const [showMenu, setShowMenu] = useState(false)

  const handleConnect = async () => {
    connect({ connector: injected() })
  }

  const truncateAddress = (addr: string | undefined) => {
    if (!addr) return ''
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/95 backdrop-blur">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold text-blue-400">
            ⚡ Tempo Pay
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/" className="hover:text-blue-400 transition">
              Home
            </Link>
            <Link href="/cards" className="hover:text-blue-400 transition">
              Credit Cards
            </Link>
            <Link href="/marketplace" className="hover:text-blue-400 transition">
              Marketplace
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {isConnected ? (
            <>
              <span className="text-sm text-gray-400">
                {truncateAddress(address)}
              </span>
              <button
                onClick={() => disconnect()}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition"
              >
                Disconnect
              </button>
            </>
          ) : (
            <button
              onClick={handleConnect}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition"
            >
              Connect Wallet
            </button>
          )}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setShowMenu(!showMenu)}
        >
          ☰
        </button>
      </nav>

      {showMenu && (
        <div className="md:hidden border-t border-gray-800 p-4 space-y-2">
          <Link href="/" className="block hover:text-blue-400 transition py-2">
            Home
          </Link>
          <Link href="/cards" className="block hover:text-blue-400 transition py-2">
            Credit Cards
          </Link>
          <Link href="/marketplace" className="block hover:text-blue-400 transition py-2">
            Marketplace
          </Link>
        </div>
      )}
    </header>
  )
}
