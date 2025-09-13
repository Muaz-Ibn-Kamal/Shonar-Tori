"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Search, Menu, X, User } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { state } = useCart()
  const cartCount = state.itemCount
  const wishlistCount = state.favorites.length

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">ST</span>
            </div>
            <div className="flex flex-col">
              <span className="heading-serif text-lg font-bold text-primary">Shonar Tori</span>
              <span className="text-xs text-muted-foreground -mt-1">Golden Bird</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/collections" className="body-sans text-foreground hover:text-primary transition-colors">
              Collections
            </Link>
            <Link href="/artisans" className="body-sans text-foreground hover:text-primary transition-colors">
              Artisans
            </Link>
            <Link href="/story" className="body-sans text-foreground hover:text-primary transition-colors">
              Our Story
            </Link>
            <Link href="/sustainability" className="body-sans text-foreground hover:text-primary transition-colors">
              Sustainability
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search for handwoven treasures..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <Button variant="ghost" size="sm" className="relative">
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center bg-accent text-accent-foreground text-xs">
                  {wishlistCount}
                </Badge>
              )}
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative" asChild>
              <Link href="/cart">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center bg-accent text-accent-foreground text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* User Account */}
            <Button variant="ghost" size="sm">
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search for handwoven treasures..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-3">
              <Link
                href="/collections"
                className="body-sans text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Collections
              </Link>
              <Link
                href="/artisans"
                className="body-sans text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Artisans
              </Link>
              <Link
                href="/story"
                className="body-sans text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </Link>
              <Link
                href="/sustainability"
                className="body-sans text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sustainability
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
