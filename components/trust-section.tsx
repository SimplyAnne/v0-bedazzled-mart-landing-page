'use client'

import { Button } from './ui/button'

export default function TrustSection() {
  const testimonials = [
    {
      name: 'Chioma O.',
      location: 'Lagos',
      text: 'I finally got exactly what I ordered! No surprises, no disappointments. Bedazzled Mart is trustworthy.',
      rating: 5,
    },
    {
      name: 'David E.',
      location: 'Lagos',
      text: 'The expert consultation helped me choose the perfect TV. Quality product at a fair price.',
      rating: 5,
    },
    {
      name: 'Amara N.',
      location: 'Lagos',
      text: 'Fast delivery, original warranty, and amazing after-sales support. Highly recommended!',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Trusted by Thousands of Nigerians
          </h2>
          <p className="text-lg text-foreground/60">
            Real customers, real reviews, real satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-accent text-accent" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground/70 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-primary/5 rounded-xl p-8 text-center space-y-2 border border-primary/20">
            <p className="text-4xl font-bold text-primary">450+</p>
            <p className="text-foreground/60">Happy Customers</p>
          </div>
          <div className="bg-accent/5 rounded-xl p-8 text-center space-y-2 border border-accent/20">
            <p className="text-4xl font-bold text-accent">280+</p>
            <p className="text-foreground/60">Products Delivered</p>
          </div>
          <div className="bg-primary/5 rounded-xl p-8 text-center space-y-2 border border-primary/20">
            <p className="text-4xl font-bold text-primary">4.9★</p>
            <p className="text-foreground/60">Average Rating</p>
          </div>
          <div className="bg-accent/5 rounded-xl p-8 text-center space-y-2 border border-accent/20">
            <p className="text-4xl font-bold text-accent">100%</p>
            <p className="text-foreground/60">Genuine Products</p>
          </div>
        </div>
      </div>
    </section>
  )
}
