'use client'

import { Button } from './ui/button'

export default function PowerSolutionsSection() {
  const solutions = [
    {
      title: 'Inverters',
      description: 'Never let power interruptions disrupt your comfort. Premium inverters with long battery life.',
      icon: '⚡',
    },
    {
      title: 'Solar Systems',
      description: 'Go green and save costs. Complete solar solutions for homes and businesses.',
      icon: '☀️',
    },
    {
      title: 'Battery Backup',
      description: 'High-capacity backup systems for uninterrupted power supply.',
      icon: '🔋',
    },
    {
      title: 'Power Stabilizers',
      description: 'Protect your electronics from power surges and voltage fluctuations.',
      icon: '🛡️',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Never Let Power Interrupt Comfort
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Complete power solutions for your home and business. Inverters, solar systems, and backup power.
          </p>
        </div>

        {/* Power Setup Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg h-80 md:h-96">
          <img
            src="/power-setup.png"
            alt="Complete home solar power system with inverter and batteries"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-border group hover:border-accent"
            >
              <div className="space-y-4">
                <div className="text-5xl">{solution.icon}</div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-accent transition">
                    {solution.title}
                  </h3>
                  <p className="text-foreground/60 text-sm">{solution.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl p-8 shadow-sm border border-border text-center space-y-6">
          <h3 className="font-serif text-2xl font-bold text-foreground">
            Need Expert Power Solution Advice?
          </h3>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Our power solution specialists can design the perfect system for your needs and budget.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-base">
            <a href="https://wa.me/2347000000000" target="_blank" rel="noopener noreferrer">
              Get Free Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
