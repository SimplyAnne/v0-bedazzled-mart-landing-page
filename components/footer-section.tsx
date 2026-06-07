'use client'

import { Button } from './ui/button'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function FooterSection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/2348117844502?text=Hi%20Bedazzled%20Mart!%20I%27m%20interested%20in%20your%20products', '_blank')
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* CTA Banner */}
        <div className="mb-16 bg-accent rounded-xl p-12 text-center space-y-6">
          <h2 className="font-serif text-4xl font-bold text-accent-foreground">
            Buy Once. Buy Right.
          </h2>
          <p className="text-lg text-accent-foreground/90 max-w-2xl mx-auto">
            Join thousands of satisfied customers getting genuine electronics with confidence
          </p>
          <button 
            onClick={handleWhatsAppClick}
            className="bg-accent-foreground hover:bg-accent-foreground/90 text-accent px-8 py-3 text-lg font-semibold rounded-lg transition"
          >
            Shop With Confidence
          </button>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-background/20">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/bedazzled-logo.png" alt="Bedazzled Mart" className="h-8 w-auto" />
            </div>
            <p className="text-background/70 text-sm">
              Genuine electronics and appliances with trusted recommendations and warranty support.
            </p>
            <p className="text-sm font-semibold">"What You Order = What You Get"</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Categories</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#categories" className="hover:text-background transition">
                  Smart TVs
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-background transition">
                  Refrigerators
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-background transition">
                  Air Conditioners
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-background transition">
                  Washing Machines
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-background transition">
                  Power Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h4 className="font-semibold">Information</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Warranty Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Delivery Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect With Us</h4>
            <div className="space-y-3 text-sm">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 text-background/70 hover:text-background transition w-full"
              >
                <Phone className="w-4 h-4" />
                +234 811 784 4502
              </button>
              <a
                href="mailto:bedazzledmart@gmail.com"
                className="flex items-center gap-2 text-background/70 hover:text-background transition"
              >
                <Mail className="w-4 h-4" />
                bedazzledmart@gmail.com
              </a>
              <div className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h5 className="font-semibold text-xs mb-3 uppercase">Follow Us</h5>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/bedazzled_mart?igsh=MWRrd3phN2UxMHQ0bw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-background/20 hover:bg-background/30 rounded-lg flex items-center justify-center transition"
                  title="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/BedazzledMart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-background/20 hover:bg-background/30 rounded-lg flex items-center justify-center transition"
                  title="Twitter/X"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.8-5.989 6.8h-3.308l7.73-8.835L.424 2.25h6.837l4.87 6.441 5.383-6.441zM17.009 18.586l-5.541-7.265-6.007 7.265h5.541z"/>
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@bedazzled.mart?_r=1&_t=ZS-9714nKxb0Vz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-background/20 hover:bg-background/30 rounded-lg flex items-center justify-center transition"
                  title="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.498 3.094c-.478-.679-1.63-1.47-3.267-1.47-2.908 0-4.144 1.657-4.144 1.657V2.5h-2.955v15.027c0 .359-.029.718-.088 1.076-.059.357-.177.706-.267 1.025a2.228 2.228 0 01-1.87 1.317 1.88 1.88 0 01-1.946-1.879c0-1.046.753-1.904 1.88-1.904 1.052 0 1.844.857 1.905 1.904h2.955c-.045-2.704-2.667-4.779-5.86-4.779-3.273 0-5.848 2.591-5.848 5.93 0 3.002 2.575 5.877 5.848 5.877 1.158 0 2.24-.29 3.123-.762.884-.473 1.502-1.158 1.502-1.158v2.766s-.644.562-1.502.973c-.858.411-2.013.733-3.123.733-4.259 0-7.671-3.414-7.671-7.733 0-4.321 3.412-7.733 7.671-7.733 2.88 0 5.39 1.585 6.596 3.852z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-background/60">
          <p>
            © 2024 Bedazzled Mart. All rights reserved. | Genuine Electronics &
            Appliances for Lagos and Nigeria
          </p>
        </div>
      </div>
    </footer>
  )
}
