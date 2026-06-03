'use client'

import { Check } from 'lucide-react'

export default function WhyBedazzledSection() {
  const reasons = [
    {
      title: 'What You Order = What You Get',
      description: 'Guaranteed genuine products with transparent descriptions and authentic verification',
      icon: '✓',
    },
    {
      title: 'Genuine Products Only',
      description: 'We verify every product for authenticity. No fakes, no refurbished items',
      icon: '🛡️',
    },
    {
      title: 'Expert Guidance',
      description: 'Free consultations to help you choose the perfect appliance for your needs',
      icon: '👨‍💼',
    },
    {
      title: 'Warranty Support',
      description: 'Full manufacturer warranty on every purchase with comprehensive coverage',
      icon: '📋',
    },
    {
      title: 'Reliable Delivery',
      description: 'Fast, stress-free delivery across Lagos and Nigeria with tracking updates',
      icon: '🚚',
    },
    {
      title: 'After-Sales Support',
      description: 'Dedicated customer support team ready to assist you anytime',
      icon: '💬',
    },
  ]

  return (
    <section id="why" className="py-20 bg-secondary/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Why Bedazzled Mart?</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            We solve the problems that have plagued electronics shopping in Nigeria
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{reason.icon}</div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-foreground">{reason.title}</h3>
                  <p className="text-foreground/60">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-16 bg-accent/10 border border-accent/20 rounded-xl p-8 text-center space-y-4">
          <p className="text-2xl font-serif font-bold text-foreground">
            "We help Nigerians confidently get genuine appliances without fear of scams or disappointment"
          </p>
          <p className="text-foreground/60">Our brand promise is simple: Transparency, Trust, and Quality</p>
        </div>
      </div>
    </section>
  )
}
