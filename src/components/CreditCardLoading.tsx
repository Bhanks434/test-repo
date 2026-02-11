'use client'

import { useState } from 'react'
import { useAccount } from 'wagmi'
import { Wallet } from 'lucide-react'

export default function CreditCardLoading() {
  const { isConnected, address } = useAccount()
  const [amount, setAmount] = useState('100')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [selectedCard, setSelectedCard] = useState('card1')

  const cards = [
    { id: 'card1', name: 'Basic Card', last4: '4242', balance: '450.50' },
    { id: 'card2', name: 'Premium Card', last4: '5555', balance: '2200.00' },
    { id: 'card3', name: 'Elite Card', last4: '3782', balance: '12500.75' },
  ]

  const handleLoadCard = async () => {
    if (!isConnected) {
      alert('Please connect your wallet first')
      return
    }

    if (amount === '' || parseFloat(amount) <= 0) {
      alert('Please enter a valid amount')
      return
    }

    setLoading(true)
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSuccess(true)
      setAmount('100')
      setTimeout(() => setSuccess(false), 3000)
    } catch (error) {
      console.error('Load failed:', error)
      alert('Load failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Load Your Card</h1>
      <p className="text-gray-400 mb-12">Add Tempo testnet tokens to your credit card</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Card Selection */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold mb-6">Your Cards</h2>
          <div className="space-y-4">
            {cards.map(card => (
              <div
                key={card.id}
                onClick={() => setSelectedCard(card.id)}
                className={`border-2 rounded-xl p-4 cursor-pointer transition ${
                  selectedCard === card.id
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="font-semibold mb-2">{card.name}</div>
                <div className="text-sm text-gray-400 mb-2">•••• {card.last4}</div>
                <div className="text-sm text-gray-500">Balance: ${card.balance}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Loading Interface */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Add Funds</h2>

            {/* Selected Card Display */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 mb-8">
              <div className="text-gray-300 text-sm mb-4">Selected Card</div>
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="text-xl font-bold mb-2">
                    {cards.find(c => c.id === selectedCard)?.name}
                  </div>
                  <div className="text-blue-200">•••• {cards.find(c => c.id === selectedCard)?.last4}</div>
                </div>
                <Wallet className="w-8 h-8 text-blue-200" />
              </div>
              <div className="flex justify-between">
                <span className="text-blue-200">Current Balance</span>
                <span className="text-2xl font-bold">${cards.find(c => c.id === selectedCard)?.balance}</span>
              </div>
            </div>

            {/* Amount Input */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Amount to Load (TEMPO tokens)</label>
              <div className="flex gap-2 mb-4">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Enter amount"
                  min="1"
                  step="10"
                />
                <span className="flex items-center px-4 text-gray-400">TEMPO</span>
              </div>

              {/* Quick Amount Buttons */}
              <div className="flex gap-2 flex-wrap">
                {['50', '100', '250', '500', '1000'].map(val => (
                  <button
                    key={val}
                    onClick={() => setAmount(val)}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition"
                  >
                    +{val}
                  </button>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="bg-gray-700 rounded-lg p-4 mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Amount to load:</span>
                <span className="font-semibold">{amount} TEMPO</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Network fee:</span>
                <span className="font-semibold">0.1 TEMPO</span>
              </div>
              <div className="border-t border-gray-600 pt-2 mt-2 flex justify-between">
                <span className="text-gray-300 font-medium">Total:</span>
                <span className="text-xl font-bold text-blue-400">
                  {(parseFloat(amount) + 0.1).toFixed(2)} TEMPO
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleLoadCard}
                disabled={!isConnected || loading}
                className={`flex-1 py-3 rounded-lg font-bold text-lg transition ${
                  isConnected && !loading
                    ? 'bg-blue-500 hover:bg-blue-600 text-white cursor-pointer'
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                {loading ? 'Processing...' : 'Load Card'}
              </button>
            </div>

            {success && (
              <div className="mt-4 p-4 bg-green-900/30 border border-green-500 rounded-lg text-green-400">
                ✓ Card loaded successfully! Your new balance is ${(parseFloat(cards.find(c => c.id === selectedCard)?.balance || '0') + parseFloat(amount)).toFixed(2)}
              </div>
            )}

            {!isConnected && (
              <div className="mt-4 p-4 bg-yellow-900/30 border border-yellow-500 rounded-lg text-yellow-400">
                ⚠ Please connect your wallet to load your card
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
