'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Star, ShoppingCart, Heart, ArrowLeft, Check } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useWishlist } from '@/lib/wishlist-context'
import HeaderSection from '@/components/header-section'
import FooterSection from '@/components/footer-section'

const productDetails = [
  {
    id: '1',
    name: 'LG 65" 4K Smart TV',
    price: '₦450,000',
    rating: 5,
    reviews: 124,
    category: 'Entertainment',
    image: '/tv-product.png',
    description: 'Experience stunning 4K picture quality with LG\'s advanced LED technology. Perfect for movie nights and gaming.',
    specs: [
      { label: 'Screen Size', value: '65 inches' },
      { label: 'Resolution', value: '4K Ultra HD (3840 x 2160)' },
      { label: 'Smart OS', value: 'WebOS with Voice Control' },
      { label: 'Refresh Rate', value: '60Hz' },
      { label: 'Warranty', value: '2 Years' },
    ],
    features: ['4K Resolution', 'WebOS Smart Platform', 'Voice Control', 'HDMI 2.1', 'HDR Support'],
    inStock: true,
  },
  {
    id: '2',
    name: 'Samsung 500L Refrigerator',
    price: '₦380,000',
    rating: 5,
    reviews: 98,
    category: 'Kitchen',
    image: '/fridge-product.png',
    description: 'Keep your food fresh longer with Samsung\'s No-Frost technology and energy-efficient cooling system.',
    specs: [
      { label: 'Capacity', value: '500 Liters' },
      { label: 'Type', value: 'Double Door' },
      { label: 'Technology', value: 'No-Frost' },
      { label: 'Energy Rating', value: 'A+' },
      { label: 'Warranty', value: '1 Year' },
    ],
    features: ['No-Frost Technology', 'Energy Save Mode', 'Digital Display', 'Inverter Compressor'],
    inStock: true,
  },
  {
    id: '3',
    name: 'Midea 2HP Air Conditioner',
    price: '₦220,000',
    rating: 4.8,
    reviews: 156,
    category: 'Climate',
    image: '/ac-product.png',
    description: 'Stay cool and comfortable with Midea\'s whisper-quiet 2HP air conditioner. Perfect for medium-sized rooms.',
    specs: [
      { label: 'Capacity', value: '2 Horsepower' },
      { label: 'Cooling Range', value: '18-24°C' },
      { label: 'Noise Level', value: 'Ultra-quiet' },
      { label: 'Energy Consumption', value: 'Low' },
      { label: 'Warranty', value: '5 Years' },
    ],
    features: ['Quiet Operation', 'Eco Mode', '5-Year Warranty', 'Auto Mode', 'Inverter Technology'],
    inStock: true,
  },
]

export default function ProductsPage() {
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const [selectedProduct, setSelectedProduct] = useState(productDetails[0])
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    addToCart({
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      image: selectedProduct.image,
      quantity,
    })
  }

  return (
    <>
      <HeaderSection />
      <main className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Product Gallery */}
            <div className="space-y-4">
              <div className="bg-secondary rounded-xl p-8 h-96 flex items-center justify-center">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {productDetails.slice(0, 3).map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className={`h-24 rounded-lg border-2 transition ${
                      selectedProduct.id === product.id
                        ? 'border-accent bg-secondary'
                        : 'border-border hover:border-accent/50'
                    }`}
                  >
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-foreground/60 mb-2">{selectedProduct.category}</p>
                <h1 className="font-serif text-4xl font-bold text-foreground mb-4">{selectedProduct.name}</h1>
                <p className="text-foreground/70 mb-6">{selectedProduct.description}</p>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(selectedProduct.rating)
                            ? 'fill-accent text-accent'
                            : 'text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-foreground/60">({selectedProduct.reviews} reviews)</span>
                </div>
              </div>

              {/* Price */}
              <div className="border-t border-b border-border py-6">
                <p className="text-5xl font-bold text-accent mb-4">{selectedProduct.price}</p>
                <p className={`text-sm font-semibold ${selectedProduct.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {selectedProduct.inStock ? '✓ In Stock' : 'Out of Stock'}
                </p>
              </div>

              {/* Quantity & Actions */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="font-semibold text-foreground">Quantity:</label>
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-secondary transition"
                    >
                      −
                    </button>
                    <span className="px-6 py-2 font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-secondary transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 rounded-lg transition"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      if (isInWishlist(selectedProduct.id)) {
                        removeFromWishlist(selectedProduct.id)
                      } else {
                        addToWishlist({
                          id: selectedProduct.id,
                          name: selectedProduct.name,
                          price: selectedProduct.price,
                          image: selectedProduct.image,
                        })
                      }
                    }}
                    className={`flex items-center justify-center gap-2 font-bold py-3 rounded-lg transition border-2 ${
                      isInWishlist(selectedProduct.id)
                        ? 'border-accent bg-accent/10 text-accent'
                        : 'border-border hover:border-accent'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isInWishlist(selectedProduct.id) ? 'fill-current' : ''}`} />
                    Wishlist
                  </button>
                </div>

                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/2348117844502?text=Hi%20Bedazzled%20Mart!%20I%27m%20interested%20in%20${encodeURIComponent(selectedProduct.name)}`,
                      '_blank'
                    )
                  }
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 rounded-lg transition"
                >
                  Chat on WhatsApp
                </button>
              </div>

              {/* Trust Badges */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground">100% Genuine Product</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground">Manufacturer Warranty Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground">Free Expert Consultation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="border-t border-border pt-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Specifications</h2>
            <div className="bg-white rounded-xl border border-border overflow-hidden">
              {selectedProduct.specs.map((spec, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 ${index !== selectedProduct.specs.length - 1 ? 'border-b border-border' : ''}`}
                >
                  <span className="font-semibold text-foreground">{spec.label}</span>
                  <span className="text-foreground/70">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-12 pt-12 border-t border-border">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {selectedProduct.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <Check className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  )
}
