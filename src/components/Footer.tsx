'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-800 bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">Tempo Pay</h3>
            <p className="text-gray-400">
              Fast and secure payments on Tempo blockchain using testnet tokens.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/cards" className="hover:text-blue-400 transition">Credit Cards</a></li>
              <li><a href="/marketplace" className="hover:text-blue-400 transition">Marketplace</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition">Privacy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Tempo Pay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
