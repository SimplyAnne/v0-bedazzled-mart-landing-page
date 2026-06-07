'use client'

import { CheckCircle, Truck, ShieldCheck, Zap } from 'lucide-react'
import { Button } from './ui/button'

export default function HeroSection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/2348117844502?text=Hi%20Bedazzled%20Mart!%20I%27m%20interested%20in%20your%20products', '_blank')
  }

  const handleShopNow = () => {
    window.open('https://wa.me/2348117844502?text=Hi%20Bedazzled%20Mart!%20I%27d%20like%20to%20shop%20now', '_blank')
  }

  const handleRecommendation = () => {
    window.open('https://wa.me/2348117844502?text=Hi%20Bedazzled%20Mart!%20Can%20you%20give%20me%20a%20product%20recommendation?', '_blank')
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background via-background to-secondary/5 pt-32 pb-12">
      {/* Hero Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
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
              <button
                onClick={handleShopNow}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition text-base"
              >
                Shop Now
              </button>
              <button
                onClick={handleRecommendation}
                className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold py-3 px-8 rounded-lg transition text-base"
              >
                Get Expert Recommendation
              </button>
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
        <button
          onClick={handleWhatsAppClick}
          className="bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.2-4.82 5.591-4.82 9.501 0 3.6.505 5.922 1.738 7.415.627.748 1.41 1.41 2.185 1.88l-.992-3.617c-.832-1.422-1.316-3.147-1.316-5.678 0-6.211 5.009-11.267 11.18-11.267 2.975 0 5.766 1.139 7.87 3.202 2.104 2.063 3.263 4.817 3.263 7.735 0 6.211-5.009 11.267-11.18 11.267-1.569 0-3.083-.335-4.487-.995l-.752.372c-.72.356-1.516.572-2.34.572-2.265 0-4.108-1.764-4.108-3.943 0-.59.129-1.15.36-1.66l-.86-3.385" />
          </svg>
        </button>
      </div>
    </section>
  )
}
