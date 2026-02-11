'use client'

import Link from 'next/link'
import { ArrowRight, Zap, ShieldCheck, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Fast Payment on Tempo
        </h1>
        <p className="text-xl text-gray-400 mb-4 max-w-2xl mx-auto">
          Get a credit card, load it with testnet tokens, and start shopping on our marketplace instantly.
        </p>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          Buy cars, bags, and more using the Tempo blockchain powered by testnet tokens.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/cards"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 px-8 py-3 border border-blue-500 hover:bg-blue-500/10 rounded-lg font-semibold transition"
          >
            Browse Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Tempo Pay?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-700 rounded-xl p-8 hover:border-blue-500 transition">
            <Zap className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
            <p className="text-gray-400">
              Transactions on Tempo are processed in seconds. No waiting for settlement.
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-8 hover:border-blue-500 transition">
            <ShieldCheck className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Secure & Safe</h3>
            <p className="text-gray-400">
              Built on blockchain technology with testnet security and user protection.
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-8 hover:border-blue-500 transition">
            <TrendingUp className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Low Fees</h3>
            <p className="text-gray-400">
              Minimal network fees and competitive pricing on all credit card plans.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 bg-gray-800/50 rounded-2xl my-20">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
              1
            </div>
            <h3 className="font-bold mb-2">Connect Wallet</h3>
            <p className="text-gray-400 text-sm">
              Connect your Web3 wallet with testnet tokens
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
              2
            </div>
            <h3 className="font-bold mb-2">Purchase Card</h3>
            <p className="text-gray-400 text-sm">
              Choose a credit card plan and pay with testnet tokens
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
              3
            </div>
            <h3 className="font-bold mb-2">Load Funds</h3>
            <p className="text-gray-400 text-sm">
              Add testnet tokens to your card balance
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
              4
            </div>
            <h3 className="font-bold mb-2">Shop & Enjoy</h3>
            <p className="text-gray-400 text-sm">
              Browse our marketplace and buy amazing products
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Join thousands of users enjoying fast, secure payments on Tempo blockchain with testnet tokens.
        </p>
        <Link
          href="/cards"
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition"
        >
          Get Your Credit Card Now <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12">Available Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-700 rounded-xl p-8 bg-gray-800/30">
            <div className="text-5xl mb-4">🚗</div>
            <h3 className="text-2xl font-bold mb-2">Car Lot</h3>
            <p className="text-gray-400 mb-4">
              Browse our exclusive collection of electric and luxury vehicles. From Tesla to Porsche, find your dream car.
            </p>
            <Link href="/marketplace?filter=car" className="text-blue-400 hover:text-blue-300 font-semibold">
              Shop Cars →
            </Link>
          </div>

          <div className="border border-gray-700 rounded-xl p-8 bg-gray-800/30">
            <div className="text-5xl mb-4">👜</div>
            <h3 className="text-2xl font-bold mb-2">Bag Store</h3>
            <p className="text-gray-400 mb-4">
              Discover premium bags and accessories. Designer briefcases, backpacks, and more for every occasion.
            </p>
            <Link href="/marketplace?filter=bag" className="text-blue-400 hover:text-blue-300 font-semibold">
              Shop Bags →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
