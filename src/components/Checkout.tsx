'use client'

import { useState } from 'react'
import { useAccount, useWriteContract } from 'wagmi'
import { AlertCircle, CheckCircle, Loader } from 'lucide-react'

interface CheckoutData {
  cardNumber: string
  cardName: string
  expiryMonth: string
  expiryYear: string
  cvv: string
  tempoAddress: string
  shippingAddress: string
}

export default function Checkout({ 
  items, 
  total, 
  onSuccess 
}: { 
  items: any[]
  total: number
  onSuccess: () => void
}) {
  const { isConnected, address } = useAccount()
  const { writeContract, isPending } = useWriteContract()
  
  const [step, setStep] = useState<'details' | 'address' | 'confirm' | 'success'>('details')
  const [formData, setFormData] = useState<CheckoutData>({
    cardNumber: '',
    cardName: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    tempoAddress: '',
    shippingAddress: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const validateCardDetails = () => {
    if (!formData.cardNumber || formData.cardNumber.length < 16) {
      setError('Invalid card number')
      return false
    }
    if (!formData.cardName) {
      setError('Please enter cardholder name')
      return false
    }
    if (!formData.expiryMonth || !formData.expiryYear) {
      setError('Please enter expiry date')
      return false
    }
    if (!formData.cvv || formData.cvv.length < 3) {
      setError('Invalid CVV')
      return false
    }
    return true
  }

  const validateAddresses = () => {
    if (!formData.tempoAddress) {
      setError('Please enter your Tempo domain name')
      return false
    }
    if (!formData.shippingAddress) {
      setError('Please enter your shipping address')
      return false
    }
    return true
  }

  const handleCardDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateCardDetails()) {
      setStep('address')
    }
  }

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateAddresses()) {
      setStep('confirm')
    }
  }

  const handleApprovePayment = async () => {
    if (!isConnected) {
      setError('Please connect your wallet first')
      return
    }

    setLoading(true)
    try {
      // Simulate payment processing with wallet
      // In production, this would call a smart contract
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Success - simulate token deduction
      setStep('success')
      setTimeout(() => {
        onSuccess()
      }, 2000)
    } catch (err) {
      setError('Payment failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Progress Steps */}
      <div className="flex justify-between mb-8">
        <div className={`flex-1 text-center ${step === 'details' || ['address', 'confirm', 'success'].includes(step) ? 'text-blue-400' : 'text-gray-500'}`}>
          <div className="text-sm font-medium mb-2">Step 1</div>
          <div className="text-xs">Card Details</div>
        </div>
        <div className="flex-1 h-0.5 bg-gray-700 my-2 mx-2"></div>
        <div className={`flex-1 text-center ${step === 'address' || ['confirm', 'success'].includes(step) ? 'text-blue-400' : 'text-gray-500'}`}>
          <div className="text-sm font-medium mb-2">Step 2</div>
          <div className="text-xs">Address Info</div>
        </div>
        <div className="flex-1 h-0.5 bg-gray-700 my-2 mx-2"></div>
        <div className={`flex-1 text-center ${step === 'confirm' || step === 'success' ? 'text-blue-400' : 'text-gray-500'}`}>
          <div className="text-sm font-medium mb-2">Step 3</div>
          <div className="text-xs">Confirm & Pay</div>
        </div>
      </div>

      {/* Step 1: Card Details */}
      {step === 'details' && (
        <form onSubmit={handleCardDetailsSubmit} className="bg-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Enter Card Details</h2>
          
          {error && (
            <div className="mb-4 p-4 bg-red-900/30 border border-red-500 rounded-lg text-red-400 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                maxLength="16"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Cardholder Name</label>
              <input
                type="text"
                name="cardName"
                value={formData.cardName}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Month</label>
                <select
                  name="expiryMonth"
                  value={formData.expiryMonth}
                  onChange={handleInputChange as any}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="">MM</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                      {String(i + 1).padStart(2, '0')}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Year</label>
                <select
                  name="expiryYear"
                  value={formData.expiryYear}
                  onChange={handleInputChange as any}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="">YY</option>
                  {Array.from({ length: 10 }, (_, i) => {
                    const year = new Date().getFullYear() + i
                    return (
                      <option key={year} value={String(year).slice(-2)}>
                        {String(year).slice(-2)}
                      </option>
                    )
                  })}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  maxLength="4"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition"
          >
            Continue to Address
          </button>
        </form>
      )}

      {/* Step 2: Address Information */}
      {step === 'address' && (
        <form onSubmit={handleAddressSubmit} className="bg-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Delivery Information</h2>

          {error && (
            <div className="mb-4 p-4 bg-red-900/30 border border-red-500 rounded-lg text-red-400 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Tempo Domain Name</label>
              <input
                type="text"
                name="tempoAddress"
                value={formData.tempoAddress}
                onChange={handleInputChange}
                placeholder="your.tempo"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              />
              <p className="text-xs text-gray-400 mt-1">Enter your Tempo domain name for delivery</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Shipping Address</label>
              <textarea
                name="shippingAddress"
                value={formData.shippingAddress}
                onChange={handleInputChange}
                placeholder="123 Main Street, City, State 12345, Country"
                rows={4}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              type="button"
              onClick={() => setStep('details')}
              className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg transition"
            >
              Back
            </button>
            <button
              type="submit"
              className="flex-1 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition"
            >
              Review Order
            </button>
          </div>
        </form>
      )}

      {/* Step 3: Confirm & Approve Payment */}
      {step === 'confirm' && (
        <div className="bg-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Confirm Your Order</h2>

          {error && (
            <div className="mb-4 p-4 bg-red-900/30 border border-red-500 rounded-lg text-red-400 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              {error}
            </div>
          )}

          {/* Order Summary */}
          <div className="bg-gray-700 rounded-lg p-6 mb-6">
            <h3 className="font-bold mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4">
              {items.map((item, idx) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span>{item.name}</span>
                  <span className="text-blue-400">${item.price.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-600 pt-4 flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span className="text-blue-400">${total.toLocaleString()}</span>
            </div>
          </div>

          {/* Delivery Details */}
          <div className="bg-gray-700 rounded-lg p-6 mb-6">
            <h3 className="font-bold mb-4">Delivery Details</h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-gray-400">Cardholder:</span>
                <span className="ml-2">{formData.cardName}</span>
              </div>
              <div>
                <span className="text-gray-400">Tempo Domain:</span>
                <span className="ml-2">{formData.tempoAddress}</span>
              </div>
              <div>
                <span className="text-gray-400">Address:</span>
                <span className="ml-2">{formData.shippingAddress}</span>
              </div>
            </div>
          </div>

          {/* Wallet Connection Status */}
          <div className={`rounded-lg p-4 mb-6 ${isConnected ? 'bg-green-900/30 border border-green-500' : 'bg-yellow-900/30 border border-yellow-500'}`}>
            <div className="flex items-center gap-2">
              {isConnected ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <div>
                    <div className="font-medium text-green-400">Wallet Connected</div>
                    <div className="text-xs text-green-300">{address?.slice(0, 6)}...{address?.slice(-4)}</div>
                  </div>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-yellow-400" />
                  <div>
                    <div className="font-medium text-yellow-400">Please connect your wallet</div>
                    <div className="text-xs text-yellow-300">You'll use your wallet to approve the payment</div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Payment Notice */}
          <div className="bg-blue-900/30 border border-blue-500 rounded-lg p-4 mb-6">
            <h4 className="font-medium text-blue-400 mb-2">💳 Payment Method</h4>
            <p className="text-sm text-blue-300">
              You will pay <strong>{(total / 100).toFixed(2)} TEMPO tokens</strong> from your connected wallet.
              Click the "Approve Payment" button to complete the transaction.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setStep('address')}
              className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg transition"
            >
              Back
            </button>
            <button
              onClick={handleApprovePayment}
              disabled={!isConnected || loading}
              className={`flex-1 py-3 rounded-lg font-bold transition flex items-center justify-center gap-2 ${
                isConnected && !loading
                  ? 'bg-blue-500 hover:bg-blue-600 text-white cursor-pointer'
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed'
              }`}
            >
              {loading && <Loader className="w-5 h-5 animate-spin" />}
              {loading ? 'Processing...' : 'Approve Payment'}
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Success */}
      {step === 'success' && (
        <div className="bg-gray-800 rounded-xl p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2 text-green-400">Order Confirmed!</h2>
          <p className="text-gray-400 mb-4">Your payment has been approved and processed.</p>
          
          <div className="bg-green-900/30 border border-green-500 rounded-lg p-6 mb-6">
            <h3 className="font-bold mb-3 text-green-400">Order Details</h3>
            <div className="space-y-2 text-sm text-left mb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Items:</span>
                <span>{items.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total Paid:</span>
                <span className="text-green-400 font-bold">{(total / 100).toFixed(2)} TEMPO</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <span className="text-green-400 font-bold">✓ Completed</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/30 border border-blue-500 rounded-lg p-4">
            <p className="text-sm text-blue-300">
              📦 Your order will be shipped to <strong>{formData.tempoAddress}</strong> at the provided address. 
              You will receive a tracking confirmation soon.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
