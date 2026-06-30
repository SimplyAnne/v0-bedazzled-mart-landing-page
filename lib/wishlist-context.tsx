'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

interface WishlistItem {
  id: string
  name: string
  price: string
  image: string
}

interface WishlistContextType {
  wishlist: WishlistItem[]
  addToWishlist: (item: WishlistItem) => void
  removeFromWishlist: (id: string) => void
  isInWishlist: (id: string) => boolean
  wishlistCount: number
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('bedazzled-wishlist')
    if (saved) {
      try {
        setWishlist(JSON.parse(saved))
      } catch {
        setWishlist([])
      }
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('bedazzled-wishlist', JSON.stringify(wishlist))
    }
  }, [wishlist, mounted])

  const addToWishlist = (item: WishlistItem) => {
    setWishlist((prev) => {
      if (prev.some((p) => p.id === item.id)) return prev
      return [...prev, item]
    })
  }

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((p) => p.id !== id))
  }

  const isInWishlist = (id: string) => {
    return wishlist.some((p) => p.id === id)
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        wishlistCount: wishlist.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used within WishlistProvider')
  }
  return context
}
