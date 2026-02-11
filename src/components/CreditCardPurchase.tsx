'use client'

import { useState } from 'react'
import { useAccount } from 'wagmi'
import { CreditCard } from 'lucide-react'

export default function CreditCardPurchase() {
  const { isConnected, address } = useAccount()
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium' | 'elite'>('basic')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const plans = {
    basic: {
      name: 'Basic Card',
      price: '100',
      limit: '$1,000',
      features: ['Virtual Card', 'Online payments', 'Basic support'],
    },
    premium: {
      name: 'Premium Card',
      price: '250',
      limit: '$5,000',
      features: ['Virtual Card', 'Offline payments', 'Priority support', 'Cashback'],
    },
    elite: {
      name: 'Elite Card',
      price: '500',
      limit: '$25,000',
      features: ['Physical + Virtual', 'VIP concierge', 'Premium support', '2% Cashback'],
    },
  }

  const handlePurchase = async () => {
    if (!isConnected) {
      alert('Please connect your wallet first')
      return
    }

    setLoading(true)
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    } catch (error) {
      console.error('Purchase failed:', error)
      alert('Purchase failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Credit Cards</h1>
      <p className="text-gray-400 mb-12">Choose a credit card plan and pay with Tempo testnet tokens</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {Object.entries(plans).map(([key, plan]) => (
          <div
            key={key}
            onClick={() => setSelectedPlan(key as typeof selectedPlan)}
            className={`border-2 rounded-xl p-8 cursor-pointer transition ${
              selectedPlan === key
                ? 'border-blue-500 bg-blue-500/10'
                : 'border-gray-700 hover:border-gray-600'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold">{plan.name}</h3>
            </div>
            <div className="mb-6">
              <div className="text-4xl font-bold text-blue-400">{plan.price}</div>
              <div className="text-sm text-gray-400">TEMPO tokens</div>
            </div>
            <div className="mb-6">
              <div className="text-gray-400 text-sm">Spending Limit</div>
              <div className="text-2xl font-bold">{plan.limit}</div>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                  <span className="text-green-400">✓</span> {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded-lg font-semibold transition ${
                selectedPlan === key
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {selectedPlan === key ? 'Selected' : 'Select Plan'}
            </button>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Complete Your Purchase</h2>
        
        <div className="space-y-4 mb-8">
          <div>
            <label className="block text-sm font-medium mb-2">Selected Plan</label>
            <div className="bg-gray-700 rounded-lg p-3">
              {plans[selectedPlan].name} - {plans[selectedPlan].price} TEMPO tokens
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Your Wallet</label>
            <div className="bg-gray-700 rounded-lg p-3">
              {isConnected ? address : 'Not connected'}
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handlePurchase}
            disabled={!isConnected || loading}
            className={`flex-1 py-3 rounded-lg font-bold text-lg transition ${
              isConnected && !loading
                ? 'bg-blue-500 hover:bg-blue-600 text-white cursor-pointer'
                : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            }`}
          >
            {loading ? 'Processing...' : 'Purchase Now'}
          </button>
        </div>

        {success && (
          <div className="mt-4 p-4 bg-green-900/30 border border-green-500 rounded-lg text-green-400">
            ✓ Credit card purchased successfully! You can now load it with tokens.
          </div>
        )}

        {!isConnected && (
          <div className="mt-4 p-4 bg-yellow-900/30 border border-yellow-500 rounded-lg text-yellow-400">
            ⚠ Please connect your wallet to purchase a credit card
          </div>
        )}
      </div>
    </div>
  )
}
