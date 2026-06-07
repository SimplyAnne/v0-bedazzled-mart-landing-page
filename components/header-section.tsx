'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HeaderSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/2348117844502?text=Hi%20Bedazzled%20Mart!%20I%27m%20interested%20in%20your%20products', '_blank')
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/bedazzled-logo.png" alt="Bedazzled Mart" className="h-10 w-auto" />
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

        {/* CTA Button */}
        <button
          onClick={handleWhatsAppClick}
          className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.2-4.82 5.591-4.82 9.501 0 3.6.505 5.922 1.738 7.415.627.748 1.41 1.41 2.185 1.88l-.992-3.617c-.832-1.422-1.316-3.147-1.316-5.678 0-6.211 5.009-11.267 11.18-11.267 2.975 0 5.766 1.139 7.87 3.202 2.104 2.063 3.263 4.817 3.263 7.735 0 6.211-5.009 11.267-11.18 11.267-1.569 0-3.083-.335-4.487-.995l-.752.372c-.72.356-1.516.572-2.34.572-2.265 0-4.108-1.764-4.108-3.943 0-.59.129-1.15.36-1.66l-.86-3.385" />
          </svg>
          Chat on WhatsApp
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
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition flex items-center gap-2 justify-center"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.2-4.82 5.591-4.82 9.501 0 3.6.505 5.922 1.738 7.415.627.748 1.41 1.41 2.185 1.88l-.992-3.617c-.832-1.422-1.316-3.147-1.316-5.678 0-6.211 5.009-11.267 11.18-11.267 2.975 0 5.766 1.139 7.87 3.202 2.104 2.063 3.263 4.817 3.263 7.735 0 6.211-5.009 11.267-11.18 11.267-1.569 0-3.083-.335-4.487-.995l-.752.372c-.72.356-1.516.572-2.34.572-2.265 0-4.108-1.764-4.108-3.943 0-.59.129-1.15.36-1.66l-.86-3.385" />
            </svg>
            Chat on WhatsApp
          </button>
        </div>
      )}
    </header>
  )
}
