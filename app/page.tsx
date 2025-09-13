import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star, Leaf, Users, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/10 bengali-pattern">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge className="bg-accent text-accent-foreground px-4 py-2 text-sm font-medium">
              Sustainable Fashion • Bengali Heritage
            </Badge>
            <h1 className="heading-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
              Timeless Fashion,
              <br />
              <span className="text-accent-foreground">Timeless Values</span>
            </h1>
            <p className="body-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Where style meets purpose. Discover handwoven treasures that celebrate Bengali heritage while honoring our
              planet and the artisans who craft each piece with love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
                Explore Collection
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-primary-foreground px-8 py-3 bg-transparent"
              >
                Meet the Artisans
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
      </section>

      {/* Brand Promise */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Where Style Meets Purpose
            </h2>
            <p className="body-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Every thread tells a story of tradition, sustainability, and the skilled hands that bring beauty to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Leaf className="w-8 h-8 text-accent" />
                </div>
                <h3 className="heading-serif text-xl font-semibold text-primary">Sustainable Craft</h3>
                <p className="body-sans text-muted-foreground">
                  Zero-waste production methods and eco-friendly materials that honor our planet.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="heading-serif text-xl font-semibold text-primary">Artisan Partnership</h3>
                <p className="body-sans text-muted-foreground">
                  Direct collaboration with 50+ skilled artisans, ensuring fair wages and cultural preservation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="heading-serif text-xl font-semibold text-primary">Heritage Quality</h3>
                <p className="body-sans text-muted-foreground">
                  Timeless designs rooted in Bengali tradition, crafted with techniques passed down through generations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl md:text-4xl font-bold text-primary mb-4">Handwoven Treasures</h2>
            <p className="body-sans text-lg text-muted-foreground">
              Discover our signature pieces, each telling a unique story of craftsmanship and culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Product Cards */}
            {[
              {
                name: "Handwoven Silk Saree",
                price: "$299",
                image: "/elegant-silk-saree-with-traditional-bengali-patter.jpg",
                artisan: "Rashida Begum",
                region: "Tangail",
              },
              {
                name: "Artisan Cotton Kurta",
                price: "$89",
                image: "/handwoven-cotton-kurta-with-natural-dyes.jpg",
                artisan: "Abdul Rahman",
                region: "Sonargaon",
              },
              {
                name: "Traditional Jamdani Dupatta",
                price: "$149",
                image: "/intricate-jamdani-dupatta-with-golden-threads.jpg",
                artisan: "Fatema Khatun",
                region: "Kushtia",
              },
            ].map((product, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 space-y-2">
                    <Button size="sm" variant="secondary" className="w-10 h-10 p-0 bg-white/90 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-10 h-10 p-0 bg-white/90 hover:bg-white">
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                  <Badge className="absolute bottom-4 left-4 bg-accent text-accent-foreground">Handwoven</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="heading-serif text-lg font-semibold text-primary">{product.name}</h3>
                    <p className="body-sans text-sm text-muted-foreground">
                      Crafted by {product.artisan} • {product.region}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="heading-serif text-xl font-bold text-accent">{product.price}</span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View All Collections
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-primary-foreground bengali-pattern">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="heading-serif text-3xl md:text-4xl font-bold">Join Our Golden Circle</h2>
            <p className="body-sans text-lg opacity-90">
              Be the first to discover new collections, artisan stories, and exclusive offers. Subscribe to our
              newsletter and become part of our sustainable fashion journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3">Subscribe</Button>
            </div>
            <p className="body-sans text-sm opacity-75">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
