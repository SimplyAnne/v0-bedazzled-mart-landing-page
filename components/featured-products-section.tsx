'use client'

import { Star, ShoppingCart } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { Button } from './ui/button'

export default function FeaturedProductsSection() {
  const { addToCart } = useCart()

  const handleViewDetails = (productName: string) => {
    window.open(`https://wa.me/2348117844502?text=Hi%20Bedazzled%20Mart!%20I%27m%20interested%20in%20${encodeURIComponent(productName)}`, '_blank')
  }

  const handleViewAll = () => {
    window.open('https://wa.me/2348117844502?text=Hi%20Bedazzled%20Mart!%20Can%20you%20show%20me%20all%20your%20products?', '_blank')
  }

  const products = [
    {
      id: '1',
      name: 'LG 65" 4K Smart TV',
      price: '₦450,000',
      priceNum: 450000,
      rating: 5,
      reviews: 124,
      features: ['4K Resolution', 'WebOS', 'Voice Control'],
      image: '/tv-product.png',
    },
    {
      id: '2',
      name: 'Samsung 500L Refrigerator',
      price: '₦380,000',
      priceNum: 380000,
      rating: 5,
      reviews: 98,
      features: ['No-Frost', 'Energy Save', 'Digital Display'],
      image: '/fridge-product.png',
    },
    {
      id: '3',
      name: 'Midea 2HP Air Conditioner',
      price: '₦220,000',
      priceNum: 220000,
      rating: 4.8,
      reviews: 156,
      features: ['Quiet Operation', 'Eco Mode', '5yr Warranty'],
      image: '/ac-product.png',
    },
    {
      id: '4',
      name: 'Indomie 8kg Washing Machine',
      price: '₦180,000',
      priceNum: 180000,
      rating: 4.9,
      reviews: 203,
      features: ['Auto Dispenser', 'Inverter', 'Quiet'],
      image: '/washer-product.png',
    },
    {
      id: '5',
      name: 'Scanfrost Gas Cooker',
      price: '₦85,000',
      priceNum: 85000,
      rating: 4.7,
      reviews: 87,
      features: ['4 Burner', 'Auto Ignition', 'Oven'],
      image: '/kitchen-product.png',
    },
    {
      id: '6',
      name: 'Luminous Inverter 5KVA',
      price: '₦650,000',
      priceNum: 650000,
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
          {products.map((product) => (
            <div
              key={product.id}
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

                {/* Price and CTAs */}
                <div className="pt-4 border-t border-border space-y-3">
                  <div className="text-2xl font-bold text-accent">{product.price}</div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => addToCart({ 
                        id: product.id, 
                        name: product.name, 
                        price: product.price, 
                        image: product.image, 
                        quantity: 1 
                      })}
                      className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 rounded-lg transition"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add
                    </button>
                    <button
                      onClick={() => handleViewDetails(product.name)}
                      className="bg-secondary hover:bg-secondary/80 text-foreground font-semibold py-2.5 rounded-lg transition"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={handleViewAll}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-semibold rounded-lg transition"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}
