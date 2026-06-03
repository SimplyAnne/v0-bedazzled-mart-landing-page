'use client'

import { CheckCircle } from 'lucide-react'

export default function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: 'Tell Us What You Need',
      description: 'Contact us via WhatsApp or chat to describe your requirements and budget.',
    },
    {
      number: '2',
      title: 'Get Expert Recommendation',
      description: 'Our specialists recommend the best genuine products for your specific needs.',
    },
    {
      number: '3',
      title: 'Place Your Order',
      description: 'Easy ordering process with multiple payment options including pay on delivery.',
    },
    {
      number: '4',
      title: 'Enjoy Worry-Free Delivery',
      description: 'Track your order in real-time and receive your product with complete peace of mind.',
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-foreground/60">
            Simple, transparent process from consultation to delivery
          </p>
        </div>

        {/* Desktop Steps */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index !== steps.length - 1 && (
                  <div className="absolute top-10 left-[60%] right-[-50%] h-0.5 bg-gradient-to-r from-accent to-primary/30"></div>
                )}

                <div className="relative z-10 space-y-4">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {step.number}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-foreground">{step.title}</h3>
                    <p className="text-foreground/60 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Steps */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="relative flex flex-col items-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0">
                  {step.number}
                </div>
                {index !== steps.length - 1 && (
                  <div className="w-0.5 h-12 bg-gradient-to-b from-accent to-transparent mt-2"></div>
                )}
              </div>
              <div className="pt-2 space-y-2">
                <h3 className="font-semibold text-lg text-foreground">{step.title}</h3>
                <p className="text-foreground/60">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
