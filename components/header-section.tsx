'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/lib/cart-context'

export default function HeaderSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { itemCount } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <img src="/bedazzled-logo.png" alt="Bedazzled Mart" className="h-16 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#categories" className="text-foreground hover:text-primary font-medium transition">
            Categories
          </Link>
          <Link href="#products" className="text-foreground hover:text-primary font-medium transition">
            Products
          </Link>
          <Link href="#about" className="text-foreground hover:text-primary font-medium transition">
            About
          </Link>
          <Link href="#faq" className="text-foreground hover:text-primary font-medium transition">
            FAQ
          </Link>
        </nav>

        {/* Cart Icon */}
        <button className="relative p-2 hover:bg-secondary rounded-lg transition">
          <ShoppingCart className="w-6 h-6 text-foreground" />
          {itemCount > 0 && (
            <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border p-6 space-y-4">
          <Link href="#categories" className="block text-foreground hover:text-primary font-medium transition">
            Categories
          </Link>
          <Link href="#products" className="block text-foreground hover:text-primary font-medium transition">
            Products
          </Link>
          <Link href="#about" className="block text-foreground hover:text-primary font-medium transition">
            About
          </Link>
          <Link href="#faq" className="block text-foreground hover:text-primary font-medium transition">
            FAQ
          </Link>
        </div>
      )}
    </header>
  )
}
