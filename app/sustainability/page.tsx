import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Leaf, Droplets, Recycle, Users, Award, Target, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 text-sm font-medium">Sustainability</Badge>
            <h1 className="heading-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
              Fashion That
              <br />
              <span className="text-green-600">Nurtures Earth</span>
            </h1>
            <p className="body-sans text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At Shonar Tori, sustainability isn't just a buzzword—it's woven into every thread of our existence. From
              zero-waste production to fair trade practices, we're committed to fashion that heals rather than harms.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Sustainability Pillars
            </h2>
            <p className="body-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Four core commitments guide every decision we make, ensuring our impact on people and planet is always
              positive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="heading-serif text-xl">Zero Waste Production</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="body-sans text-muted-foreground">
                  Every scrap of fabric finds purpose in our workshops. From main products to accessories, we ensure
                  nothing goes to waste.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Waste Reduction Goal</span>
                    <span className="font-semibold">100%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                  <p className="text-xs text-muted-foreground">Currently at 95% - aiming for 100% by 2025</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="heading-serif text-xl">Natural Materials Only</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="body-sans text-muted-foreground">
                  We use only natural fibers and dyes sourced responsibly from local suppliers, ensuring biodegradable
                  and non-toxic products.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Natural Materials</span>
                    <span className="font-semibold">100%</span>
                  </div>
                  <Progress value={100} className="h-2" />
                  <p className="text-xs text-muted-foreground">All products use natural fibers and dyes</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="heading-serif text-xl">Fair Trade Practices</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="body-sans text-muted-foreground">
                  Every artisan receives fair wages, safe working conditions, and long-term partnerships that support
                  their families and communities.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Fair Trade Certified</span>
                    <span className="font-semibold">100%</span>
                  </div>
                  <Progress value={100} className="h-2" />
                  <p className="text-xs text-muted-foreground">All artisan partnerships are fair trade certified</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Recycle className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="heading-serif text-xl">Circular Economy</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="body-sans text-muted-foreground">
                  We design for longevity and offer repair services, take-back programs, and upcycling initiatives to
                  extend product lifecycles.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Circular Initiatives</span>
                    <span className="font-semibold">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-xs text-muted-foreground">Expanding repair and take-back programs</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl md:text-4xl font-bold text-primary mb-4">Environmental Impact</h2>
            <p className="body-sans text-lg text-muted-foreground">
              Measuring our positive impact on the planet through concrete actions and transparent reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-8 h-8 text-green-600" />
                </div>
                <div className="heading-serif text-3xl font-bold text-green-600 mb-2">75%</div>
                <p className="body-sans font-medium mb-2">Water Usage Reduction</p>
                <p className="body-sans text-sm text-muted-foreground">
                  Compared to conventional textile production through natural dyeing processes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-blue-600" />
                </div>
                <div className="heading-serif text-3xl font-bold text-blue-600 mb-2">0</div>
                <p className="body-sans font-medium mb-2">Chemical Pollutants</p>
                <p className="body-sans text-sm text-muted-foreground">
                  Zero harmful chemicals released into waterways through natural processes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Recycle className="w-8 h-8 text-orange-600" />
                </div>
                <div className="heading-serif text-3xl font-bold text-orange-600 mb-2">95%</div>
                <p className="body-sans font-medium mb-2">Material Utilization</p>
                <p className="body-sans text-sm text-muted-foreground">
                  Of all raw materials are used in final products or accessories
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Certifications & Recognition
            </h2>
            <p className="body-sans text-lg text-muted-foreground">
              Third-party validation of our commitment to sustainable and ethical practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <CardContent className="space-y-3">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="body-sans font-semibold">Fair Trade Certified</h3>
                <p className="body-sans text-xs text-muted-foreground">Global Fair Trade Organization</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-3">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Leaf className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="body-sans font-semibold">GOTS Certified</h3>
                <p className="body-sans text-xs text-muted-foreground">Global Organic Textile Standard</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-3">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="body-sans font-semibold">B Corp Pending</h3>
                <p className="body-sans text-xs text-muted-foreground">Benefit Corporation Certification</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-3">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="body-sans font-semibold">Carbon Neutral</h3>
                <p className="body-sans text-xs text-muted-foreground">Climate Action Initiative</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 2025 Goals */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl md:text-4xl font-bold mb-4">2025 Sustainability Goals</h2>
            <p className="body-sans text-lg opacity-90">
              Our roadmap for creating even greater positive impact in the coming year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <h3 className="body-sans font-semibold">100% Zero Waste</h3>
                </div>
                <p className="body-sans text-sm opacity-90">
                  Achieve complete zero-waste production across all workshops and facilities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <h3 className="body-sans font-semibold">Carbon Negative</h3>
                </div>
                <p className="body-sans text-sm opacity-90">
                  Become carbon negative through renewable energy and reforestation projects.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <h3 className="body-sans font-semibold">100 Artisan Partners</h3>
                </div>
                <p className="body-sans text-sm opacity-90">
                  Double our artisan community while maintaining fair trade standards.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <h3 className="body-sans font-semibold">Circular Programs</h3>
                </div>
                <p className="body-sans text-sm opacity-90">
                  Launch comprehensive repair, take-back, and upcycling services.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <h3 className="body-sans font-semibold">B Corp Certification</h3>
                </div>
                <p className="body-sans text-sm opacity-90">
                  Complete B Corporation certification process and assessment.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <h3 className="body-sans font-semibold">Education Initiative</h3>
                </div>
                <p className="body-sans text-sm opacity-90">
                  Launch sustainability education programs for consumers and industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="heading-serif text-3xl md:text-4xl font-bold text-primary">Join Our Sustainable Journey</h2>
            <p className="body-sans text-lg text-muted-foreground">
              Every purchase you make supports sustainable practices, fair trade, and the preservation of traditional
              crafts. Together, we can fashion a better future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/collections">Shop Sustainably</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/story">Learn Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
