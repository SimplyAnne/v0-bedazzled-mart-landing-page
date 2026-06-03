'use client'

import { Button } from './ui/button'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function FooterSection() {
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
          <Button className="bg-accent-foreground hover:bg-accent-foreground/90 text-accent px-8 py-3 text-lg">
            <a href="https://wa.me/2347000000000" target="_blank" rel="noopener noreferrer">
              Shop With Confidence
            </a>
          </Button>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-background/20">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">BM</span>
              </div>
              <span className="font-serif text-lg font-semibold">Bedazzled Mart</span>
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
                <a href="#" className="hover:text-background transition">
                  Smart TVs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Refrigerators
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Air Conditioners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Washing Machines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
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

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <a
                href="https://wa.me/2347000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/70 hover:text-background transition"
              >
                <Phone className="w-4 h-4" />
                WhatsApp Chat
              </a>
              <a
                href="mailto:hello@bedazzledmart.com"
                className="flex items-center gap-2 text-background/70 hover:text-background transition"
              >
                <Mail className="w-4 h-4" />
                hello@bedazzledmart.com
              </a>
              <div className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>

            {/* Social */}
            <div className="pt-4 flex gap-3">
              <a
                href="https://instagram.com/bedazzledmart"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-background/20 hover:bg-background/30 rounded-lg flex items-center justify-center transition"
              >
                <span className="text-xs">📷</span>
              </a>
              <a
                href="https://facebook.com/bedazzledmart"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-background/20 hover:bg-background/30 rounded-lg flex items-center justify-center transition"
              >
                <span className="text-xs">📘</span>
              </a>
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
