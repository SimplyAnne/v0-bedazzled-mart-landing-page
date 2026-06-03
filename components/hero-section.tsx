'use client'

import { CheckCircle, Truck, ShieldCheck, Zap } from 'lucide-react'
import { Button } from './ui/button'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background via-background to-secondary/5 pt-20 pb-12">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">BM</span>
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">Bedazzled Mart</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#categories" className="text-foreground/70 hover:text-foreground transition">Categories</a>
            <a href="#why" className="text-foreground/70 hover:text-foreground transition">Why Us</a>
            <a href="#products" className="text-foreground/70 hover:text-foreground transition">Products</a>
            <a href="#faq" className="text-foreground/70 hover:text-foreground transition">FAQ</a>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="https://wa.me/2347000000000" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
                Buy Genuine Electronics Without the Fear
              </h1>
              <p className="text-lg text-foreground/70 text-pretty leading-relaxed">
                Get trusted appliances, verified power solutions, warranty support, and stress-free delivery across Nigeria.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-base py-6 px-8">
                Shop Now
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 text-base py-6 px-8">
                Get Expert Recommendation
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-foreground">Genuine Products</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-foreground">Warranty Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-foreground">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-foreground">Expert Guidance</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/hero-lifestyle.png"
              alt="Nigerian family enjoying premium appliances in modern home"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a href="https://wa.me/2347000000000" target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.51.857-2.813 2.007-3.8 3.438C2.867 9.884 2.1 11.564 2.1 13.34c0 1.148.213 2.27.624 3.331L2 22l3.51-.902c.987.537 2.09.848 3.231.848 1.177 0 2.304-.211 3.39-.625 1.505-.857 2.811-2.007 3.798-3.438.989-1.431 1.756-3.111 2.189-4.885.433-1.773.65-3.453.65-5.132 0-1.148-.213-2.27-.624-3.331l.902-3.51z" />
            </svg>
          </Button>
        </a>
      </div>
    </section>
  )
}
