# Tempo Payment App - Project Instructions

## Project Overview
A Next.js + TypeScript payment application built on the Tempo blockchain, allowing users to:
- Purchase credit cards with testnet tokens
- Load credit cards with testnet tokens
- Browse and purchase products from a marketplace (cars and bags)

## Technology Stack
- **Frontend Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Blockchain Integration**: Wagmi v3 + Viem v2
- **UI Icons**: Lucide React
- **Package Manager**: npm

## Project Structure
```
src/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Home page with features
│   ├── layout.tsx               # Root layout with Wagmi provider
│   ├── globals.css              # Global Tailwind styles
│   ├── cards/page.tsx           # Credit card purchase page
│   ├── load/page.tsx            # Card loading page
│   └── marketplace/page.tsx     # Marketplace page
├── components/
│   ├── Header.tsx               # Navigation with wallet connection
│   ├── Footer.tsx               # Footer component
│   ├── CreditCardPurchase.tsx   # Card purchase component
│   ├── CreditCardLoading.tsx    # Card loading component
│   └── Marketplace.tsx          # Marketplace with cars & bags
└── config/
    └── wagmi.tsx                # Wagmi configuration
```

## Key Features Implemented

### 1. Home Page (`/`)
- Hero section with call-to-action
- Feature cards highlighting benefits
- How-it-works step guide
- Product showcase (cars and bags)

### 2. Credit Cards (`/cards`)
- Three card tiers: Basic, Premium, Elite
- Plan selection with pricing
- Simulated purchase functionality
- Wallet requirement checking

### 3. Card Loading (`/load`)
- Multiple card selection
- Amount input with quick-add buttons
- Fee calculation and summary
- Card balance simulation

### 4. Marketplace (`/marketplace`)
- Filter by category (all, cars, bags)
- Shopping cart functionality
- Product details with specs
- Checkout simulation

## Development Commands

```bash
npm run dev        # Start development server on port 3000
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

## Wallet Integration Notes
- Uses Wagmi for wallet connection
- Supports injected providers (MetaMask, etc.)
- Testnet tokens required for purchases
- Address truncation: shows first 6 and last 4 characters

## Styling Notes
- Dark theme with blue accents (#0f1419 background)
- Responsive design: mobile-first approach
- Tailwind classes used throughout
- No external CSS libraries beyond Tailwind

## Payment Flow (Simulated)
1. User connects wallet via Wagmi
2. Selects product/card
3. Approves transaction (simulated 2s delay)
4. Success message displayed
5. Data persists in component state

## Future Integration Points
- Real Tempo blockchain transactions
- Smart contract integration
- Backend API for order management
- Database for user data
- Real payment settlement
- Card creation and tracking

## Testing Notes
- All payment flows are simulated
- No real transactions occur
- Testnet tokens used throughout
- Console logs for debugging

## Component Patterns Used
- Client components with 'use client'
- React hooks (useState, useAccount, useConnect)
- Conditional rendering for wallet states
- Tailwind responsive classes
- Icon components from lucide-react

## Common Issues & Solutions
1. **Wallet not connecting**: Clear cache, check extension
2. **Styles not applying**: Ensure Tailwind CSS is compiled
3. **Module not found**: Run `npm install`
4. **TypeScript errors**: All are non-blocking type hints
