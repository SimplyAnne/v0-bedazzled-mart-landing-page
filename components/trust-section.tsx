'use client'

import { useState, useEffect } from 'react'
import { Button } from './ui/button'

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [end, duration])

  return <span>{count}</span>
}

export default function TrustSection() {
  const testimonials = [
    {
      name: 'Chioma O.',
      location: 'Lagos',
      text: 'I finally got exactly what I ordered! No surprises, no disappointments. Bedazzled Mart is trustworthy.',
      rating: 5,
      badge: 'Verified Buyer',
    },
    {
      name: 'David E.',
      location: 'Lagos',
      text: 'The expert consultation helped me choose the perfect TV. Quality product at a fair price.',
      rating: 5,
      badge: 'Expert Recommendation',
    },
    {
      name: 'Amara N.',
      location: 'Lagos',
      text: 'Fast delivery, original warranty, and amazing after-sales support. Highly recommended!',
      rating: 5,
      badge: 'Premium Member',
    },
  ]

  const metrics = [
    { value: 450, label: 'Happy Customers', icon: '👥', color: 'primary' },
    { value: 280, label: 'Products Delivered', icon: '📦', color: 'accent' },
    { value: 4.9, label: 'Average Rating', icon: '⭐', suffix: '★', color: 'primary' },
    { value: 100, label: 'Genuine Products', icon: '✓', suffix: '%', color: 'accent' },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Trusted by Thousands of Nigerians
          </h2>
          <p className="text-lg text-foreground/60">
            Real customers, real reviews, real satisfaction
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-accent transition-all duration-300 group"
            >
              {/* Badge */}
              <div className="mb-4 inline-block">
                <span className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                  {testimonial.badge}
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-accent text-accent transform transition-transform group-hover:scale-110"
                    style={{ transitionDelay: `${i * 50}ms` }}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/70 mb-4 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metrics with Animations */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`bg-${metric.color}/5 rounded-xl p-8 text-center space-y-2 border border-${metric.color}/20 hover:shadow-lg hover:scale-105 transition-all duration-300`}
            >
              <div className="text-4xl mb-2">{metric.icon}</div>
              <p className={`text-5xl font-bold text-${metric.color}`}>
                <AnimatedCounter
                  end={metric.value}
                  duration={2000}
                />
                {metric.suffix}
              </p>
              <p className="text-foreground/60">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center space-y-6">
          <h3 className="font-serif text-2xl font-bold text-foreground">Why Customers Trust Us</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="text-4xl">🛡️</div>
              <h4 className="font-semibold text-foreground">100% Authentic</h4>
              <p className="text-sm text-foreground/60">All products verified and guaranteed genuine with manufacturer warranty</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl">⚡</div>
              <h4 className="font-semibold text-foreground">Fast Delivery</h4>
              <p className="text-sm text-foreground/60">Next-day delivery in Lagos, nationwide coverage with tracking</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl">💬</div>
              <h4 className="font-semibold text-foreground">Expert Support</h4>
              <p className="text-sm text-foreground/60">24/7 WhatsApp support from product experts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
