"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star, Eye, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/lib/cart-context"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  artisan: string
  region: string
  category: string
  material: string
  isNew: boolean
  isSustainable: boolean
  rating: number
  reviews: number
}

interface ProductCardProps {
  product: Product
  viewMode?: "grid" | "list"
}

export function ProductCard({ product, viewMode = "grid" }: ProductCardProps) {
  const { state, addToCart, toggleFavorite } = useCart()
  const [isLoading, setIsLoading] = useState(false)
  const isWishlisted = state.favorites.includes(product.id.toString())

  const handleWishlistToggle = async () => {
    setIsLoading(true)
    toggleFavorite(product.id.toString())
    await new Promise((resolve) => setTimeout(resolve, 300))
    setIsLoading(false)
  }

  const handleAddToCart = async () => {
    setIsLoading(true)
    addToCart({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
      artisan: product.artisan,
    })
    await new Promise((resolve) => setTimeout(resolve, 500))
    setIsLoading(false)
  }

  if (viewMode === "list") {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="flex flex-col md:flex-row">
          <div className="relative md:w-80 h-64 md:h-auto overflow-hidden">
            <Link href={`/products/${product.id}`}>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isNew && <Badge className="bg-accent text-accent-foreground">New</Badge>}
              {product.isSustainable && (
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Sustainable
                </Badge>
              )}
            </div>
          </div>

          <CardContent className="flex-1 p-6">
            <div className="flex flex-col h-full justify-between">
              <div className="space-y-3">
                <div>
                  <Link href={`/products/${product.id}`}>
                    <h3 className="heading-serif text-xl font-semibold text-primary hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin className="w-3 h-3 text-muted-foreground" />
                    <p className="body-sans text-sm text-muted-foreground">
                      Crafted by {product.artisan} • {product.region}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-4 h-4",
                          i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground",
                        )}
                      />
                    ))}
                  </div>
                  <span className="body-sans text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="heading-serif text-2xl font-bold text-accent">${product.price}</span>
                  {product.originalPrice && (
                    <span className="body-sans text-lg text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <Button onClick={handleAddToCart} disabled={isLoading} className="flex-1">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleWishlistToggle}
                  disabled={isLoading}
                  className={cn("w-12 h-12 p-0", isWishlisted && "bg-accent/10 border-accent text-accent")}
                >
                  <Heart className={cn("w-4 h-4", isWishlisted && "fill-current")} />
                </Button>
                <Button variant="outline" size="sm" className="w-12 h-12 p-0 bg-transparent" asChild>
                  <Link href={`/products/${product.id}`}>
                    <Eye className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    )
  }

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden">
        <Link href={`/products/${product.id}`}>
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && <Badge className="bg-accent text-accent-foreground">New</Badge>}
          {product.isSustainable && (
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Sustainable
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="sm"
            variant="secondary"
            onClick={handleWishlistToggle}
            disabled={isLoading}
            className={cn(
              "w-10 h-10 p-0 bg-white/90 hover:bg-white",
              isWishlisted && "bg-accent/90 text-accent-foreground hover:bg-accent",
            )}
          >
            <Heart className={cn("w-4 h-4", isWishlisted && "fill-current")} />
          </Button>
          <Button size="sm" variant="secondary" className="w-10 h-10 p-0 bg-white/90 hover:bg-white" asChild>
            <Link href={`/products/${product.id}`}>
              <Eye className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            onClick={handleAddToCart}
            disabled={isLoading}
            className="w-full bg-primary/90 hover:bg-primary text-primary-foreground"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="space-y-3">
          <div>
            <Link href={`/products/${product.id}`}>
              <h3 className="heading-serif text-lg font-semibold text-primary hover:text-accent transition-colors">
                {product.name}
              </h3>
            </Link>
            <div className="flex items-center gap-2 mt-1">
              <MapPin className="w-3 h-3 text-muted-foreground" />
              <p className="body-sans text-sm text-muted-foreground">
                Crafted by {product.artisan} • {product.region}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-4 h-4",
                    i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground",
                  )}
                />
              ))}
            </div>
            <span className="body-sans text-sm text-muted-foreground">
              {product.rating} ({product.reviews})
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="heading-serif text-xl font-bold text-accent">${product.price}</span>
              {product.originalPrice && (
                <span className="body-sans text-sm text-muted-foreground line-through">${product.originalPrice}</span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
