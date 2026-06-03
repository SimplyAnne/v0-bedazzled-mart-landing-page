'use client'

export default function ProblemSolutionSection() {
  const problems = [
    {
      problem: 'Fake or Substandard Products',
      solution: 'We verify every product for authenticity. Every item comes with guarantee documentation.',
      emoji: '🚫',
    },
    {
      problem: '"What I Ordered vs What I Got"',
      solution: 'Transparent descriptions, verified inventory, and exact product matching guarantee.',
      emoji: '📦',
    },
    {
      problem: 'Confusing Technical Specs',
      solution: 'Free expert consultations to help you understand features and choose what\'s right for you.',
      emoji: '❓',
    },
    {
      problem: 'Poor After-Sales Support',
      solution: 'Dedicated support team, warranty management, and lifetime customer service.',
      emoji: '🤝',
    },
  ]

  return (
    <section className="py-20 bg-secondary/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            The Problems We Solve
          </h2>
          <p className="text-lg text-foreground/60">
            We&apos;ve solved every major pain point in electronics shopping
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problem Side */}
          <div className="space-y-8">
            <div className="relative rounded-xl overflow-hidden shadow-lg h-80">
              <img
                src="/problem-fake.png"
                alt="Problem: Fake electronics and frustration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-3xl font-bold text-foreground">The Problem</h3>
              <p className="text-lg text-foreground/70">
                Buying electronics online in Lagos can be risky. You worry about authenticity, hidden defects, and poor support.
              </p>
              <ul className="space-y-3">
                {problems.slice(0, 2).map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-red-500 text-2xl">✕</span>
                    <div>
                      <p className="font-semibold text-foreground">{item.problem}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution Side */}
          <div className="space-y-8">
            <div className="relative rounded-xl overflow-hidden shadow-lg h-80">
              <img
                src="/solution-genuine.png"
                alt="Solution: Genuine products with confidence"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-3xl font-bold text-accent">The Solution</h3>
              <p className="text-lg text-foreground/70">
                Bedazzled Mart solves every problem with verified authenticity and dedicated support.
              </p>
              <ul className="space-y-3">
                {problems.slice(2, 4).map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-accent text-2xl">✓</span>
                    <div>
                      <p className="font-semibold text-foreground">{item.solution}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
