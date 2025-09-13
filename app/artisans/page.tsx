import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Award, Clock, Heart } from "lucide-react"

// Sample artisan data
const artisans = [
  {
    id: 1,
    name: "Rashida Begum",
    region: "Tangail",
    specialty: "Silk Weaving",
    experience: "30 years",
    photo: "/bengali-artisan-woman-portrait.jpg",
    story: "Master of traditional Tangail silk weaving, learned from her grandmother at age 12.",
    techniques: ["Handloom Weaving", "Natural Dyeing", "Pattern Design"],
    products: 12,
    featured: true,
  },
  {
    id: 2,
    name: "Abdul Rahman",
    region: "Sonargaon",
    specialty: "Jamdani Weaving",
    experience: "25 years",
    photo: "/bengali-artisan-man-weaving.jpg",
    story: "Jamdani specialist preserving the ancient art of supplementary weft weaving.",
    techniques: ["Jamdani Technique", "Cotton Weaving", "Geometric Patterns"],
    products: 8,
    featured: true,
  },
  {
    id: 3,
    name: "Fatema Khatun",
    region: "Kushtia",
    specialty: "Natural Dyeing",
    experience: "20 years",
    photo: "/bengali-artisan-woman-dyeing.jpg",
    story: "Expert in traditional natural dye techniques using local plants and minerals.",
    techniques: ["Natural Dyeing", "Color Mixing", "Fabric Treatment"],
    products: 15,
    featured: false,
  },
  {
    id: 4,
    name: "Nasir Ahmed",
    region: "Rajshahi",
    specialty: "Linen Weaving",
    experience: "18 years",
    photo: "/bengali-artisan-man-linen.jpg",
    story: "Sustainable linen weaver focusing on eco-friendly production methods.",
    techniques: ["Linen Processing", "Sustainable Weaving", "Texture Creation"],
    products: 6,
    featured: false,
  },
  {
    id: 5,
    name: "Salma Khatun",
    region: "Dhaka",
    specialty: "Embroidery",
    experience: "22 years",
    photo: "/bengali-artisan-woman-embroidery.jpg",
    story: "Traditional embroidery artist specializing in intricate Bengali motifs.",
    techniques: ["Hand Embroidery", "Motif Design", "Thread Work"],
    products: 10,
    featured: true,
  },
  {
    id: 6,
    name: "Karim Uddin",
    region: "Comilla",
    specialty: "Cotton Weaving",
    experience: "28 years",
    photo: "/bengali-artisan-man-cotton.jpg",
    story: "Master cotton weaver creating durable and comfortable everyday wear.",
    techniques: ["Cotton Weaving", "Durability Testing", "Comfort Design"],
    products: 14,
    featured: false,
  },
]

export default function ArtisansPage() {
  const featuredArtisans = artisans.filter((artisan) => artisan.featured)
  const allArtisans = artisans

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/10 bengali-pattern">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <Badge className="bg-accent text-accent-foreground px-4 py-2 text-sm font-medium">Meet Our Artisans</Badge>
            <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              The Hands Behind
              <br />
              <span className="text-accent">Every Thread</span>
            </h1>
            <p className="body-sans text-lg md:text-xl text-muted-foreground leading-relaxed">
              Meet the skilled artisans who bring our vision to life. Each piece tells their story of tradition,
              craftsmanship, and cultural heritage passed down through generations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Artisans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl md:text-4xl font-bold text-primary mb-4">Featured Artisans</h2>
            <p className="body-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Our master craftspeople who lead the way in preserving traditional Bengali textile arts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArtisans.map((artisan) => (
              <Card key={artisan.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={artisan.photo || "/placeholder.svg"}
                      alt={artisan.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    <Heart className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="heading-serif text-xl font-semibold text-primary mb-1">{artisan.name}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="body-sans text-sm">{artisan.region}</span>
                    </div>
                    <p className="body-sans text-sm text-muted-foreground">{artisan.story}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="body-sans text-sm font-medium">{artisan.specialty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="body-sans text-sm">{artisan.experience} experience</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {artisan.techniques.slice(0, 2).map((technique) => (
                      <Badge key={technique} variant="secondary" className="text-xs">
                        {technique}
                      </Badge>
                    ))}
                    {artisan.techniques.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{artisan.techniques.length - 2} more
                      </Badge>
                    )}
                  </div>

                  <Button asChild className="w-full">
                    <Link href={`/artisans/${artisan.id}`}>View Profile</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Artisans Grid */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl md:text-4xl font-bold text-primary mb-4">All Our Artisans</h2>
            <p className="body-sans text-lg text-muted-foreground">
              Discover the diverse talents and specialties of our entire artisan community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allArtisans.map((artisan) => (
              <Card key={artisan.id} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={artisan.photo || "/placeholder.svg"}
                        alt={artisan.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="heading-serif font-semibold text-primary truncate">{artisan.name}</h3>
                      <p className="body-sans text-sm text-muted-foreground">{artisan.specialty}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3 text-muted-foreground" />
                        <span className="body-sans text-xs text-muted-foreground">{artisan.region}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="body-sans text-xs text-muted-foreground">{artisan.products} products</span>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/artisans/${artisan.id}`}>View</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground bengali-pattern">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="heading-serif text-3xl md:text-4xl font-bold">Support Our Artisans</h2>
            <p className="body-sans text-lg opacity-90">
              Every purchase directly supports these skilled craftspeople and helps preserve traditional Bengali textile
              arts for future generations.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link href="/collections">Shop Artisan Collections</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
