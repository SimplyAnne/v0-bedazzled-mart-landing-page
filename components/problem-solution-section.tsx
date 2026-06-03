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
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="font-semibold text-lg text-foreground">The Problem</h3>
                  <p className="text-foreground/70">{item.problem}</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold text-accent mb-2">✓ Our Solution</h4>
                  <p className="text-foreground/70">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
