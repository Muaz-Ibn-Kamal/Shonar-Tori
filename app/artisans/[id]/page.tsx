import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MapPin, Award, Clock, Leaf, Star, ArrowLeft } from "lucide-react"

// This would come from a database based on the ID
const artisan = {
  id: 1,
  name: "Rashida Begum",
  region: "Tangail",
  specialty: "Silk Weaving",
  experience: "30 years",
  photo: "/bengali-artisan-woman-portrait.jpg",
  coverImage: "/tangail-weaving-workshop.jpg",
  story: `Rashida Begum learned the intricate art of silk weaving from her grandmother, Fatema Khatun, when she was just 12 years old. Growing up in the traditional weaving district of Tangail, she was surrounded by the rhythmic sounds of handlooms and the vibrant colors of silk threads.

  For over three decades, Rashida has dedicated her life to preserving and perfecting the ancient techniques of Tangail silk weaving. Her workshop, located in the heart of Tangail, serves as both a production center and a training ground for the next generation of weavers.

  Each saree created by Rashida takes approximately 15-20 days to complete, with every thread carefully selected and woven using traditional techniques passed down through generations. Her work is characterized by intricate patterns inspired by the natural beauty of rural Bangladesh - flowing rivers, blooming lotus flowers, and golden rice fields.`,
  techniques: [
    "Traditional Handloom Weaving",
    "Natural Silk Processing",
    "Pattern Design & Creation",
    "Natural Dyeing Methods",
    "Quality Control & Finishing",
  ],
  achievements: [
    "Master Weaver Certification (2010)",
    "UNESCO Cultural Heritage Award (2018)",
    "Bangladesh Textile Excellence Award (2020)",
    "Featured in National Geographic (2021)",
  ],
  products: [
    {
      id: 1,
      name: "Handwoven Silk Saree",
      price: 299,
      image: "/elegant-silk-saree-with-traditional-bengali-patter.jpg",
    },
    {
      id: 6,
      name: "Handloom Cotton Saree",
      price: 199,
      image: "/handloom-cotton-saree-with-geometric-patterns.jpg",
    },
  ],
  workshop: {
    established: "1995",
    employees: 8,
    location: "Tangail District, Bangladesh",
    sustainabilityPractices: [
      "Zero waste production",
      "Natural dyes only",
      "Fair wages for all workers",
      "Eco-friendly packaging",
    ],
  },
  testimonials: [
    {
      customer: "Sarah Johnson",
      location: "New York, USA",
      text: "The saree I received from Rashida is absolutely stunning. You can feel the love and craftsmanship in every thread.",
      rating: 5,
    },
    {
      customer: "Priya Sharma",
      location: "Mumbai, India",
      text: "Exceptional quality and beautiful traditional patterns. This is true artistry.",
      rating: 5,
    },
  ],
}

export default function ArtisanProfilePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={artisan.coverImage || "/placeholder.svg"}
          alt={`${artisan.name}'s workshop`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 mb-4" asChild>
            <Link href="/artisans">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Artisans
            </Link>
          </Button>
          <h1 className="heading-serif text-4xl md:text-5xl font-bold mb-2">{artisan.name}</h1>
          <div className="flex items-center gap-4 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{artisan.region}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>{artisan.specialty}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Artisan Story */}
            <Card>
              <CardHeader>
                <CardTitle className="heading-serif text-2xl">Artisan Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {artisan.story.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="body-sans text-muted-foreground leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
              </CardContent>
            </Card>

            {/* Techniques & Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="heading-serif text-2xl">Techniques & Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {artisan.techniques.map((technique, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <span className="body-sans font-medium">{technique}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="heading-serif text-2xl">Achievements & Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {artisan.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="body-sans">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Customer Testimonials */}
            <Card>
              <CardHeader>
                <CardTitle className="heading-serif text-2xl">Customer Reviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {artisan.testimonials.map((testimonial, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="body-sans text-muted-foreground italic">"{testimonial.text}"</p>
                    <p className="body-sans text-sm font-medium">
                      — {testimonial.customer}, {testimonial.location}
                    </p>
                    {index < artisan.testimonials.length - 1 && <Separator />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Artisan Profile Card */}
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={artisan.photo || "/placeholder.svg"}
                    alt={artisan.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="heading-serif text-xl font-semibold text-primary mb-2">{artisan.name}</h3>
                <p className="body-sans text-muted-foreground mb-4">{artisan.specialty}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>{artisan.experience} experience</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>{artisan.region}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Workshop Info */}
            <Card>
              <CardHeader>
                <CardTitle className="heading-serif text-lg">Workshop Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="body-sans text-muted-foreground">Established</span>
                  <span className="body-sans font-medium">{artisan.workshop.established}</span>
                </div>
                <div className="flex justify-between">
                  <span className="body-sans text-muted-foreground">Team Size</span>
                  <span className="body-sans font-medium">{artisan.workshop.employees} people</span>
                </div>
                <div className="flex justify-between">
                  <span className="body-sans text-muted-foreground">Location</span>
                  <span className="body-sans font-medium text-right">{artisan.workshop.location}</span>
                </div>
              </CardContent>
            </Card>

            {/* Sustainability Practices */}
            <Card>
              <CardHeader>
                <CardTitle className="heading-serif text-lg flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-600" />
                  Sustainability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {artisan.workshop.sustainabilityPractices.map((practice, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0" />
                      <span className="body-sans text-sm">{practice}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Products by this Artisan */}
            <Card>
              <CardHeader>
                <CardTitle className="heading-serif text-lg">Featured Products</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {artisan.products.map((product) => (
                  <div key={product.id} className="flex gap-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="body-sans font-medium text-sm">{product.name}</h4>
                      <p className="body-sans text-accent font-semibold">${product.price}</p>
                    </div>
                  </div>
                ))}
                <Button className="w-full" asChild>
                  <Link href={`/collections?artisan=${artisan.id}`}>View All Products</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
