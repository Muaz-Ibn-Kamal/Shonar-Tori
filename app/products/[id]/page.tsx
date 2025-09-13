"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, ShoppingCart, Star, MapPin, Leaf, Award, Truck, Shield, Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

// This would come from a database based on the ID
const product = {
  id: 1,
  name: "Handwoven Silk Saree",
  price: 299,
  originalPrice: 349,
  images: [
    "/elegant-silk-saree-with-traditional-bengali-patter.jpg",
    "/silk-saree-detail-view.jpg",
    "/silk-saree-texture-close-up.jpg",
    "/silk-saree-worn-by-model.jpg",
  ],
  artisan: {
    name: "Rashida Begum",
    region: "Tangail",
    experience: "30 years",
    photo: "/bengali-artisan-woman-portrait.jpg",
  },
  category: "sarees",
  material: "Pure Silk",
  isNew: true,
  isSustainable: true,
  rating: 4.8,
  reviews: 24,
  description:
    "This exquisite handwoven silk saree represents the pinnacle of Bengali craftsmanship. Created by master weaver Rashida Begum in the traditional weaving hub of Tangail, each thread is carefully selected and woven using techniques passed down through generations.",
  story:
    "Rashida Begum learned the art of silk weaving from her grandmother at the age of 12. For over three decades, she has been creating these masterpieces, each taking approximately 15 days to complete. The intricate patterns you see are inspired by the natural beauty of rural Bangladesh - the flowing rivers, blooming lotus flowers, and golden rice fields.",
  features: [
    "100% Pure Mulberry Silk",
    "Traditional Tangail Weaving Technique",
    "Natural Dyes Only",
    "15 Days Handweaving Process",
    "Zero Chemical Treatment",
    "Fair Trade Certified",
  ],
  care: ["Dry clean only", "Store in cotton cloth", "Avoid direct sunlight", "Iron on low heat with cloth protection"],
  sizes: ["One Size (5.5 meters)"],
  colors: ["Deep Emerald", "Golden Yellow", "Pure White"],
  inStock: true,
  stockCount: 3,
}

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleAddToCart = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    // Show success notification
  }

  const handleWishlistToggle = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 300))
    setIsWishlisted(!isWishlisted)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <span>Home</span>
          <span>/</span>
          <span>Collections</span>
          <span>/</span>
          <span>Sarees</span>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.isNew && <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">New</Badge>}
              {product.isSustainable && (
                <Badge className="absolute top-4 right-4 bg-green-100 text-green-800">Sustainable</Badge>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "aspect-square overflow-hidden rounded-lg border-2 transition-colors",
                    selectedImage === index ? "border-accent" : "border-transparent",
                  )}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="heading-serif text-3xl md:text-4xl font-bold text-primary mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="body-sans text-muted-foreground">
                  Crafted by {product.artisan.name} • {product.artisan.region}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-5 h-5",
                        i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground",
                      )}
                    />
                  ))}
                </div>
                <span className="body-sans text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="heading-serif text-3xl font-bold text-accent">${product.price}</span>
                {product.originalPrice && (
                  <span className="body-sans text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <Badge variant="destructive">Save ${product.originalPrice - product.price}</Badge>
                )}
              </div>
            </div>

            {/* Product Options */}
            <div className="space-y-4">
              {/* Size Selection */}
              <div>
                <label className="body-sans font-medium text-foreground mb-2 block">Size</label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Color Selection */}
              <div>
                <label className="body-sans font-medium text-foreground mb-2 block">Color Accent</label>
                <Select value={selectedColor} onValueChange={setSelectedColor}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select color accent" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.colors.map((color) => (
                      <SelectItem key={color} value={color}>
                        {color}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Quantity */}
              <div>
                <label className="body-sans font-medium text-foreground mb-2 block">Quantity</label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="body-sans font-medium w-8 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                    disabled={quantity >= product.stockCount}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                  <span className="body-sans text-sm text-muted-foreground ml-2">{product.stockCount} in stock</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                onClick={handleAddToCart}
                disabled={isLoading || !selectedSize || !selectedColor}
                className="flex-1"
                size="lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleWishlistToggle}
                disabled={isLoading}
                className={cn("w-14", isWishlisted && "bg-accent/10 border-accent text-accent")}
              >
                <Heart className={cn("w-5 h-5", isWishlisted && "fill-current")} />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-accent" />
                <div>
                  <p className="body-sans font-medium text-sm">Free Shipping</p>
                  <p className="body-sans text-xs text-muted-foreground">Orders over $200</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-accent" />
                <div>
                  <p className="body-sans font-medium text-sm">Secure Payment</p>
                  <p className="body-sans text-xs text-muted-foreground">SSL Protected</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Leaf className="w-5 h-5 text-accent" />
                <div>
                  <p className="body-sans font-medium text-sm">Eco-Friendly</p>
                  <p className="body-sans text-xs text-muted-foreground">Sustainable Materials</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-accent" />
                <div>
                  <p className="body-sans font-medium text-sm">Fair Trade</p>
                  <p className="body-sans text-xs text-muted-foreground">Certified Artisan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="artisan">Artisan Story</TabsTrigger>
              <TabsTrigger value="features">Features & Care</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <p className="body-sans text-lg leading-relaxed text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="artisan" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-32 flex-shrink-0">
                      <img
                        src={product.artisan.photo || "/placeholder.svg"}
                        alt={product.artisan.name}
                        className="w-32 h-32 rounded-full object-cover mx-auto"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-serif text-2xl font-semibold text-primary mb-2">{product.artisan.name}</h3>
                      <p className="body-sans text-muted-foreground mb-4">
                        Master Weaver • {product.artisan.region} • {product.artisan.experience} experience
                      </p>
                      <p className="body-sans text-lg leading-relaxed text-muted-foreground">{product.story}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="features" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="heading-serif text-xl font-semibold text-primary mb-4">Product Features</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="body-sans text-muted-foreground flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="heading-serif text-xl font-semibold text-primary mb-4">Care Instructions</h3>
                    <ul className="space-y-2">
                      {product.care.map((instruction, index) => (
                        <li key={index} className="body-sans text-muted-foreground flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                          {instruction}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <div className="text-center py-12">
                    <Star className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="heading-serif text-xl font-semibold text-primary mb-2">
                      Customer Reviews Coming Soon
                    </h3>
                    <p className="body-sans text-muted-foreground">
                      We're working on bringing you authentic customer reviews for this product.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  )
}
