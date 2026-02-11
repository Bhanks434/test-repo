'use client'

import { useState } from 'react'
import { useAccount } from 'wagmi'
import { ShoppingCart, Car, Briefcase } from 'lucide-react'

interface Product {
  id: string
  name: string
  category: 'car' | 'bag'
  price: number
  image: string
  description: string
  specs?: string[]
}

const products: Product[] = [
  // Cars
  {
    id: 'car1',
    name: 'Tesla Model 3',
    category: 'car',
    price: 45000,
    image: '🚗',
    description: 'Electric sedan with advanced autopilot',
    specs: ['0-60: 5.1s', '358 mile range', 'Supercharger ready'],
  },
  {
    id: 'car2',
    name: 'BMW i4',
    category: 'car',
    price: 60000,
    image: '🏎️',
    description: 'Luxury electric performance car',
    specs: ['0-60: 5.0s', '301 mile range', 'Premium audio'],
  },
  {
    id: 'car3',
    name: 'Ford Mustang Mach-E',
    category: 'car',
    price: 42000,
    image: '🚙',
    description: 'Electric muscle car with style',
    specs: ['0-60: 3.5s', '312 mile range', 'All-wheel drive'],
  },
  {
    id: 'car4',
    name: 'Porsche Taycan',
    category: 'car',
    price: 79000,
    image: '🏁',
    description: 'High-performance electric sports car',
    specs: ['0-60: 2.8s', '287 mile range', 'Track-ready'],
  },
  
  // Bags
  {
    id: 'bag1',
    name: 'Premium Leather Briefcase',
    category: 'bag',
    price: 450,
    image: '💼',
    description: 'Professional Italian leather briefcase',
    specs: ['Genuine leather', 'Laptop compartment', 'Lifetime warranty'],
  },
  {
    id: 'bag2',
    name: 'Designer Backpack',
    category: 'bag',
    price: 350,
    image: '🎒',
    description: 'Stylish backpack with multiple compartments',
    specs: ['Waterproof fabric', 'USB charging port', '30L capacity'],
  },
  {
    id: 'bag3',
    name: 'Luxury Crossbody Bag',
    category: 'bag',
    price: 520,
    image: '👜',
    description: 'Crossbody bag made with premium materials',
    specs: ['Adjustable strap', 'RFID protection', 'Italian crafted'],
  },
  {
    id: 'bag4',
    name: 'Weekend Duffel Bag',
    category: 'bag',
    price: 280,
    image: '🧳',
    description: 'Spacious travel bag for weekend getaways',
    specs: ['50L capacity', 'Expandable design', 'TSA-friendly'],
  },
]

export default function Marketplace() {
  const { isConnected } = useAccount()
  const [cart, setCart] = useState<string[]>([])
  const [filter, setFilter] = useState<'all' | 'car' | 'bag'>('all')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter)

  const cartItems = products.filter(p => cart.includes(p.id))
  const totalPrice = cartItems.reduce((sum, p) => sum + p.price, 0)

  const handleAddToCart = (productId: string) => {
    setCart(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const handleCheckout = async () => {
    if (!isConnected) {
      alert('Please connect your wallet first')
      return
    }

    if (cart.length === 0) {
      alert('Your cart is empty')
      return
    }

    setLoading(true)
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSuccess(true)
      setCart([])
      setTimeout(() => setSuccess(false), 3000)
    } catch (error) {
      console.error('Checkout failed:', error)
      alert('Checkout failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Marketplace</h1>
      <p className="text-gray-400 mb-8">Browse and purchase cars and bags with your Tempo credit card</p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-xl p-6 sticky top-20">
            <h2 className="text-xl font-bold mb-6">Categories</h2>
            
            <div className="space-y-3 mb-8">
              {['all', 'car', 'bag'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat as typeof filter)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition flex items-center gap-2 ${
                    filter === cat
                      ? 'bg-blue-500 text-white'
                      : 'hover:bg-gray-700 text-gray-300'
                  }`}
                >
                  {cat === 'car' && <Car className="w-4 h-4" />}
                  {cat === 'bag' && <Briefcase className="w-4 h-4" />}
                  {cat === 'all' && <ShoppingCart className="w-4 h-4" />}
                  <span className="capitalize">{cat === 'all' ? 'All Products' : cat + 's'}</span>
                </button>
              ))}
            </div>

            <div className="border-t border-gray-700 pt-6">
              <h3 className="font-bold mb-4">Shopping Cart</h3>
              {cartItems.length === 0 ? (
                <p className="text-gray-400 text-sm">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
                    {cartItems.map(item => (
                      <div key={item.id} className="text-sm">
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300">{item.name}</span>
                          <button
                            onClick={() => handleAddToCart(item.id)}
                            className="text-red-400 hover:text-red-300"
                          >
                            ✕
                          </button>
                        </div>
                        <div className="text-gray-500">${item.price.toLocaleString()}</div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between font-bold mb-4">
                      <span>Total:</span>
                      <span className="text-blue-400">${totalPrice.toLocaleString()}</span>
                    </div>
                    <button
                      onClick={handleCheckout}
                      disabled={!isConnected || loading}
                      className={`w-full py-2 rounded-lg font-semibold transition ${
                        isConnected && !loading
                          ? 'bg-blue-500 hover:bg-blue-600 text-white'
                          : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {loading ? 'Processing...' : 'Checkout'}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {success && (
            <div className="mb-6 p-4 bg-green-900/30 border border-green-500 rounded-lg text-green-400">
              ✓ Order placed successfully! Your items will be shipped soon.
            </div>
          )}

          {!isConnected && (
            <div className="mb-6 p-4 bg-yellow-900/30 border border-yellow-500 rounded-lg text-yellow-400">
              ⚠ Please connect your wallet to make purchases
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className={`border-2 rounded-xl p-6 transition ${
                  cart.includes(product.id)
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="text-6xl mb-4">{product.image}</div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{product.description}</p>

                {product.specs && (
                  <div className="mb-4 space-y-1">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="text-sm text-gray-400">
                        • {spec}
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-2xl font-bold text-blue-400">
                      ${product.price.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">
                      Paid in {Math.ceil(product.price / 100)} TEMPO tokens
                    </div>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className={`px-4 py-2 rounded-lg font-semibold transition ${
                      cart.includes(product.id)
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {cart.includes(product.id) ? '✓ Added' : 'Add'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
