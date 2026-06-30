'use client'

import { Star, ShoppingCart, Heart } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useWishlist } from '@/lib/wishlist-context'
import { useState } from 'react'
import { Button } from './ui/button'

export default function FeaturedProductsSection() {
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

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
      category: 'entertainment',
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
      category: 'kitchen',
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
      category: 'climate',
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
      category: 'laundry',
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
      category: 'kitchen',
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
      category: 'power',
      features: ['High Efficiency', 'Silent', 'Smart Features'],
      image: '/inverter-product.png',
    },
  ]

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'entertainment', label: 'Entertainment' },
    { id: 'kitchen', label: 'Kitchen' },
    { id: 'laundry', label: 'Laundry' },
    { id: 'climate', label: 'Climate' },
    { id: 'power', label: 'Power Solutions' },
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Best Sellers</h2>
          <p className="text-lg text-foreground/60">Our most trusted and highly-rated products</p>
        </div>

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-accent text-accent-foreground shadow-lg'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-border group relative"
            >
              {/* Wishlist Button */}
              <button
                onClick={() => {
                  if (isInWishlist(product.id)) {
                    removeFromWishlist(product.id)
                  } else {
                    addToWishlist({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    })
                  }
                }}
                className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isInWishlist(product.id) ? 'fill-accent text-accent' : 'text-foreground/60 hover:text-accent'
                  }`}
                />
              </button>

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
