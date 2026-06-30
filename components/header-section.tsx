'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Menu, X, Phone } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import SearchBar from './search-bar'

export default function HeaderSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const { itemCount } = useCart()

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/2348117844502?text=Hi%20Bedazzled%20Mart!%20I%27m%20interested%20in%20your%20products', '_blank')
  }

  const navLinks = [
    { href: '#categories', label: 'Categories' },
    { href: '#products', label: 'Products' },
    { href: '#why', label: 'Why Us' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3 border-b border-border/50">
          <div className="flex items-center gap-2 text-sm text-foreground/70">
            <Phone className="w-4 h-4 text-primary" />
            <a href="tel:+2348117844502" className="hover:text-primary font-medium transition">
              +234 811 784 4502
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm">
            <span className="text-foreground/70">Welcome to Bedazzled Mart</span>
            <span className="text-primary font-semibold">Genuine Electronics & Appliances</span>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 hover:opacity-80 transition">
            <img src="/bedazzled-logo.png" alt="Bedazzled Mart" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  activeLink === link.href
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side - Search, Cart & WhatsApp */}
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <SearchBar />

            {/* Cart Icon */}
            <button className="relative p-2.5 hover:bg-secondary rounded-lg transition group">
              <ShoppingCart className="w-6 h-6 text-foreground group-hover:text-primary transition" />
              {itemCount > 0 && (
                <span className="absolute top-1 right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            {/* WhatsApp Button - Desktop */}
            <button
              onClick={handleWhatsAppClick}
              className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2.5 rounded-lg font-semibold transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.2-4.82 5.591-4.82 9.501 0 3.6.505 5.922 1.738 7.415.627.748 1.41 1.41 2.185 1.88l-.992-3.617c-.832-1.422-1.316-3.147-1.316-5.678 0-6.211 5.009-11.267 11.18-11.267 2.975 0 5.766 1.139 7.87 3.202 2.104 2.063 3.263 4.817 3.263 7.735 0 6.211-5.009 11.267-11.18 11.267-1.569 0-3.083-.335-4.487-.995l-.752.372c-.72.356-1.516.572-2.34.572-2.265 0-4.108-1.764-4.108-3.943 0-.59.129-1.15.36-1.66l-.86-3.385" />
              </svg>
              WhatsApp
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 hover:bg-secondary rounded-lg transition"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gradient-to-b from-white to-secondary border-t border-border">
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href)
                  setMobileMenuOpen(false)
                }}
                className={`block px-4 py-3 rounded-lg font-medium transition ${
                  activeLink === link.href
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                handleWhatsAppClick()
                setMobileMenuOpen(false)
              }}
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-3 rounded-lg font-semibold transition mt-4"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.2-4.82 5.591-4.82 9.501 0 3.6.505 5.922 1.738 7.415.627.748 1.41 1.41 2.185 1.88l-.992-3.617c-.832-1.422-1.316-3.147-1.316-5.678 0-6.211 5.009-11.267 11.18-11.267 2.975 0 5.766 1.139 7.87 3.202 2.104 2.063 3.263 4.817 3.263 7.735 0 6.211-5.009 11.267-11.18 11.267-1.569 0-3.083-.335-4.487-.995l-.752.372c-.72.356-1.516.572-2.34.572-2.265 0-4.108-1.764-4.108-3.943 0-.59.129-1.15.36-1.66l-.86-3.385" />
              </svg>
              Chat on WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
