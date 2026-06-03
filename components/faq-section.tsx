'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Are your products genuinely original?',
      answer:
        'Yes, absolutely. Every product is verified for authenticity before it reaches you. We work directly with authorized distributors and manufacturers. We have zero tolerance for counterfeit items and guarantee authentic products with full manufacturer warranty.',
    },
    {
      question: 'Do you offer warranty on all products?',
      answer:
        'Yes. Every product we sell comes with full manufacturer warranty. We handle all warranty claims on your behalf. Most products come with 1-3 year comprehensive warranty coverage.',
    },
    {
      question: 'Do you deliver nationwide or just Lagos?',
      answer:
        'We primarily deliver within Lagos for fast, next-day service. We also deliver to other Nigerian cities with scheduled delivery. Contact us for delivery options to your specific location.',
    },
    {
      question: 'Can I pay on delivery?',
      answer:
        'Yes, we offer multiple payment options including Pay on Delivery for Lagos deliveries. We also accept bank transfers, card payments, and installment plans through our partners.',
    },
    {
      question: 'How do I choose the right appliance?',
      answer:
        'Our expert consultants are available on WhatsApp to help you choose based on your needs, budget, and space. We provide personalized recommendations with no pressure. Free consultations available 24/7.',
    },
    {
      question: 'What if there\'s an issue with my product?',
      answer:
        'We offer hassle-free returns within 7 days if the product arrives damaged or defective. For warranty issues, we handle all claims with the manufacturer. Customer satisfaction is our priority.',
    },
  ]

  return (
    <section id="faq" className="py-20 bg-secondary/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/60">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-border transition-all hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-secondary/50 transition"
              >
                <h3 className="font-semibold text-foreground text-lg pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-secondary/5 animate-in fade-in slide-in-from-top-2">
                  <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-accent/10 border border-accent/20 rounded-xl p-8 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-foreground">Still have questions?</h3>
          <p className="text-foreground/60">
            Chat with our expert team on WhatsApp for personalized assistance
          </p>
          <a
            href="https://wa.me/2347000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
