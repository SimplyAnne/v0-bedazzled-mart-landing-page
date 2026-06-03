'use client'

export default function CategoriesSection() {
  const categories = [
    { name: 'Smart TVs', icon: '📺' },
    { name: 'Refrigerators', icon: '❄️' },
    { name: 'Air Conditioners', icon: '🌬️' },
    { name: 'Washing Machines', icon: '🧺' },
    { name: 'Kitchen Appliances', icon: '🍳' },
    { name: 'Inverters & Power', icon: '⚡' },
  ]

  return (
    <section id="categories" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Featured Categories</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Browse our extensive selection of genuine electronics and appliances
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-border hover:border-accent"
            >
              <div className="space-y-4">
                <div className="text-5xl">{category.icon}</div>
                <h3 className="font-semibold text-lg text-foreground group-hover:text-accent transition">
                  {category.name}
                </h3>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
