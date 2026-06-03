'use client'

import { Star } from 'lucide-react'
import { Button } from './ui/button'

export default function FeaturedProductsSection() {
  const products = [
    {
      name: 'LG 65" 4K Smart TV',
      price: '₦450,000',
      rating: 5,
      reviews: 124,
      features: ['4K Resolution', 'WebOS', 'Voice Control'],
      image: '/tv-product.png',
    },
    {
      name: 'Samsung 500L Refrigerator',
      price: '₦380,000',
      rating: 5,
      reviews: 98,
      features: ['No-Frost', 'Energy Save', 'Digital Display'],
      image: '/fridge-product.png',
    },
    {
      name: 'Midea 2HP Air Conditioner',
      price: '₦220,000',
      rating: 4.8,
      reviews: 156,
      features: ['Quiet Operation', 'Eco Mode', '5yr Warranty'],
      image: '/ac-product.png',
    },
    {
      name: 'Indomie 8kg Washing Machine',
      price: '₦180,000',
      rating: 4.9,
      reviews: 203,
      features: ['Auto Dispenser', 'Inverter', 'Quiet'],
      image: '/washer-product.png',
    },
    {
      name: 'Scanfrost Gas Cooker',
      price: '₦85,000',
      rating: 4.7,
      reviews: 87,
      features: ['4 Burner', 'Auto Ignition', 'Oven'],
      image: '/kitchen-product.png',
    },
    {
      name: 'Luminous Inverter 5KVA',
      price: '₦650,000',
      rating: 5,
      reviews: 142,
      features: ['High Efficiency', 'Silent', 'Smart Features'],
      image: '/inverter-product.png',
    },
  ]

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Best Sellers</h2>
          <p className="text-lg text-foreground/60">Our most trusted and highly-rated products</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-border group"
            >
              {/* Product Image */}
              <div className="h-48 bg-secondary overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <h3 className="font-semibold text-lg text-foreground line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-foreground/60">({product.reviews} reviews)</span>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {product.features.map((feature, i) => (
                    <div key={i} className="text-sm text-foreground/70 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="pt-4 border-t border-border space-y-3">
                  <div className="text-2xl font-bold text-accent">{product.price}</div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
