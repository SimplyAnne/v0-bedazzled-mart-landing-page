'use client'

import { useState, useRef, useEffect } from 'react'
import { Search, X } from 'lucide-react'

interface SearchResult {
  id: string
  name: string
  price: string
  category: string
}

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const allProducts: SearchResult[] = [
    { id: '1', name: 'LG 65" 4K Smart TV', price: '₦450,000', category: 'Entertainment' },
    { id: '2', name: 'Samsung 500L Refrigerator', price: '₦380,000', category: 'Kitchen' },
    { id: '3', name: 'Midea 2HP Air Conditioner', price: '₦220,000', category: 'Climate' },
    { id: '4', name: 'Indomie 8kg Washing Machine', price: '₦180,000', category: 'Laundry' },
    { id: '5', name: 'Scanfrost Gas Cooker', price: '₦85,000', category: 'Kitchen' },
    { id: '6', name: 'Luminous Inverter 5KVA', price: '₦650,000', category: 'Power Solutions' },
  ]

  useEffect(() => {
    if (query.trim()) {
      const filtered = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
    } else {
      setResults([])
    }
  }, [query])

  const handleSearch = (result: SearchResult) => {
    window.open(
      `https://wa.me/2348117844502?text=Hi%20Bedazzled%20Mart!%20I%27m%20interested%20in%20${encodeURIComponent(result.name)}`,
      '_blank'
    )
    setQuery('')
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => {
          setIsOpen(!isOpen)
          if (!isOpen) setTimeout(() => inputRef.current?.focus(), 0)
        }}
        className="p-2.5 hover:bg-secondary rounded-lg transition"
        aria-label="Search products"
      >
        <Search className="w-6 h-6 text-foreground" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-xl border border-border p-4 z-50">
          <div className="flex gap-2 mb-4">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              onClick={() => {
                setQuery('')
                setIsOpen(false)
              }}
              className="p-2 hover:bg-secondary rounded-lg transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {query.trim() && (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {results.length > 0 ? (
                results.map((result) => (
                  <button
                    key={result.id}
                    onClick={() => handleSearch(result)}
                    className="w-full text-left p-3 hover:bg-secondary rounded-lg transition flex items-start justify-between"
                  >
                    <div>
                      <p className="font-semibold text-foreground text-sm">{result.name}</p>
                      <p className="text-xs text-foreground/60">{result.category}</p>
                    </div>
                    <p className="font-bold text-accent text-sm whitespace-nowrap ml-2">{result.price}</p>
                  </button>
                ))
              ) : (
                <p className="text-center text-foreground/60 py-4">No products found</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
