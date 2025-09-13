"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { ProductFilters } from "@/components/product-filters"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid, List, SlidersHorizontal } from "lucide-react"

// Sample product data - this would come from a database in a real app
const products = [
  {
    id: 1,
    name: "Handwoven Silk Saree",
    price: 299,
    originalPrice: 349,
    image: "/elegant-silk-saree-with-traditional-bengali-patter.jpg",
    artisan: "Rashida Begum",
    region: "Tangail",
    category: "sarees",
    material: "silk",
    isNew: true,
    isSustainable: true,
    rating: 4.8,
    reviews: 24,
  },
  {
    id: 2,
    name: "Artisan Cotton Kurta",
    price: 89,
    image: "/handwoven-cotton-kurta-with-natural-dyes.jpg",
    artisan: "Abdul Rahman",
    region: "Sonargaon",
    category: "kurtas",
    material: "cotton",
    isNew: false,
    isSustainable: true,
    rating: 4.9,
    reviews: 18,
  },
  {
    id: 3,
    name: "Traditional Jamdani Dupatta",
    price: 149,
    image: "/intricate-jamdani-dupatta-with-golden-threads.jpg",
    artisan: "Fatema Khatun",
    region: "Kushtia",
    category: "dupattas",
    material: "cotton",
    isNew: false,
    isSustainable: true,
    rating: 4.7,
    reviews: 31,
  },
  {
    id: 4,
    name: "Sustainable Linen Shawl",
    price: 129,
    image: "/sustainable-linen-shawl-with-natural-texture.jpg",
    artisan: "Nasir Ahmed",
    region: "Rajshahi",
    category: "shawls",
    material: "linen",
    isNew: true,
    isSustainable: true,
    rating: 4.6,
    reviews: 12,
  },
  {
    id: 5,
    name: "Embroidered Silk Blouse",
    price: 159,
    image: "/embroidered-silk-blouse-with-traditional-bengali-m.jpg",
    artisan: "Salma Khatun",
    region: "Dhaka",
    category: "blouses",
    material: "silk",
    isNew: false,
    isSustainable: true,
    rating: 4.8,
    reviews: 27,
  },
  {
    id: 6,
    name: "Handloom Cotton Saree",
    price: 199,
    image: "/handloom-cotton-saree-with-geometric-patterns.jpg",
    artisan: "Rashida Begum",
    region: "Tangail",
    category: "sarees",
    material: "cotton",
    isNew: false,
    isSustainable: true,
    rating: 4.9,
    reviews: 35,
  },
]

export default function CollectionsPage() {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [showFilters, setShowFilters] = useState(false)

  const handleFilterChange = (filters: any) => {
    let filtered = products

    // Filter by category
    if (filters.categories.length > 0) {
      filtered = filtered.filter((product) => filters.categories.includes(product.category))
    }

    // Filter by material
    if (filters.materials.length > 0) {
      filtered = filtered.filter((product) => filters.materials.includes(product.material))
    }

    // Filter by price range
    if (filters.priceRange.min > 0 || filters.priceRange.max < 1000) {
      filtered = filtered.filter(
        (product) => product.price >= filters.priceRange.min && product.price <= filters.priceRange.max,
      )
    }

    // Filter by artisan region
    if (filters.regions.length > 0) {
      filtered = filtered.filter((product) => filters.regions.includes(product.region))
    }

    setFilteredProducts(filtered)
  }

  const handleSort = (value: string) => {
    setSortBy(value)
    const sorted = [...filteredProducts]

    switch (value) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        sorted.sort((a, b) => b.price - a.price)
        break
      case "newest":
        sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating)
        break
      default:
        // Keep original order for 'featured'
        break
    }

    setFilteredProducts(sorted)
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Page Header */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="heading-serif text-4xl md:text-5xl font-bold text-primary">Our Collections</h1>
            <p className="body-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover handwoven treasures crafted by skilled artisans across Bangladesh. Each piece tells a story of
              tradition, sustainability, and timeless beauty.
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              <Badge variant="secondary">50+ Artisans</Badge>
              <Badge variant="secondary">Sustainable Materials</Badge>
              <Badge variant="secondary">Fair Trade</Badge>
              <Badge variant="secondary">Zero Waste</Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? "block" : "hidden lg:block"}`}>
            <ProductFilters onFilterChange={handleFilterChange} />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <p className="body-sans text-muted-foreground">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>

              <div className="flex items-center gap-4">
                {/* Sort Dropdown */}
                <Select value={sortBy} onValueChange={handleSort}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode Toggle */}
                <div className="flex border border-border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} viewMode={viewMode} />
              ))}
            </div>

            {/* Load More Button */}
            {filteredProducts.length > 0 && (
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Load More Products
                </Button>
              </div>
            )}

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <SlidersHorizontal className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="heading-serif text-2xl font-semibold text-primary mb-4">No products found</h3>
                <p className="body-sans text-muted-foreground mb-6">Try adjusting your filters to see more results.</p>
                <Button onClick={() => window.location.reload()}>Clear All Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
