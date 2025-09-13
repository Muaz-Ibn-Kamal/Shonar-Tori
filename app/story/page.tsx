import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Users, Leaf, Award, Globe, Handshake } from "lucide-react"
import Link from "next/link"

export default function StoryPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10 bengali-pattern">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge className="bg-accent text-accent-foreground px-4 py-2 text-sm font-medium">Our Story</Badge>
            <h1 className="heading-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
              Where Style Meets
              <br />
              <span className="text-accent">Purpose</span>
            </h1>
            <p className="body-sans text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Shonar Tori was born from a simple belief: that fashion should honor both the artisans who create it and
              the planet we call home. Our journey began with a daughter's dream to preserve her heritage while building
              a sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* Our Beginning */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="heading-serif text-3xl md:text-4xl font-bold text-primary">Our Beginning</h2>
              <div className="space-y-4 body-sans text-muted-foreground leading-relaxed">
                <p>
                  In 2020, amidst global uncertainty, founder Nusrat Jahan returned to her grandmother's village in
                  Tangail, Bangladesh. There, she witnessed the fading art of traditional handloom weaving and the
                  struggles of skilled artisans who had been creating beautiful textiles for generations.
                </p>
                <p>
                  Moved by their stories and inspired by their incredible craftsmanship, Nusrat envisioned Shonar Tori
                  (Golden Bird) - a bridge between ancient traditions and modern sustainability. The name itself
                  reflects our mission: like the golden bird of Bengali folklore, we carry precious stories across
                  borders.
                </p>
                <p>
                  As "A Daughter Concern of Earth's Ants," we acknowledge our small but significant role in the vast
                  ecosystem of global fashion, committed to making every thread count toward a better world.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/founder-with-artisans-in-village.jpg"
                alt="Founder with artisans in Bengali village"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl md:text-4xl font-bold text-primary mb-4">Our Mission & Values</h2>
            <p className="body-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Every decision we make is guided by our core values of sustainability, cultural preservation, and social
              responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="heading-serif text-xl font-semibold text-primary">Cultural Heritage</h3>
                <p className="body-sans text-muted-foreground">
                  Preserving and celebrating the rich textile traditions of Bangladesh while sharing them with the
                  world.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Leaf className="w-8 h-8 text-accent" />
                </div>
                <h3 className="heading-serif text-xl font-semibold text-primary">Sustainability</h3>
                <p className="body-sans text-muted-foreground">
                  Zero-waste production, natural materials, and eco-friendly practices that respect our planet.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Handshake className="w-8 h-8 text-accent" />
                </div>
                <h3 className="heading-serif text-xl font-semibold text-primary">Fair Trade</h3>
                <p className="body-sans text-muted-foreground">
                  Ensuring fair wages, safe working conditions, and long-term partnerships with our artisan community.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="heading-serif text-xl font-semibold text-primary">Quality Craftsmanship</h3>
                <p className="body-sans text-muted-foreground">
                  Every piece is meticulously handcrafted using techniques passed down through generations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="heading-serif text-xl font-semibold text-primary">Community Impact</h3>
                <p className="body-sans text-muted-foreground">
                  Supporting local communities and empowering artisans to thrive in the modern economy.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="w-8 h-8 text-accent" />
                </div>
                <h3 className="heading-serif text-xl font-semibold text-primary">Global Connection</h3>
                <p className="body-sans text-muted-foreground">
                  Bridging cultures and connecting conscious consumers with authentic artisan stories.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl md:text-4xl font-bold text-primary mb-4">Our Impact</h2>
            <p className="body-sans text-lg text-muted-foreground">
              Together, we're creating positive change one thread at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="heading-serif text-4xl font-bold text-accent mb-2">50+</div>
              <p className="body-sans text-muted-foreground">Artisan Partners</p>
            </div>
            <div className="text-center">
              <div className="heading-serif text-4xl font-bold text-accent mb-2">100%</div>
              <p className="body-sans text-muted-foreground">Fair Trade Certified</p>
            </div>
            <div className="text-center">
              <div className="heading-serif text-4xl font-bold text-accent mb-2">Zero</div>
              <p className="body-sans text-muted-foreground">Waste Production</p>
            </div>
            <div className="text-center">
              <div className="heading-serif text-4xl font-bold text-accent mb-2">25+</div>
              <p className="body-sans text-muted-foreground">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Future */}
      <section className="py-16 bg-primary text-primary-foreground bengali-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="heading-serif text-3xl md:text-4xl font-bold">The Future We're Weaving</h2>
            <div className="space-y-6 body-sans text-lg opacity-90 leading-relaxed">
              <p>
                Our vision extends beyond beautiful clothing. We're building a movement that proves fashion can be a
                force for good - preserving cultural heritage, protecting our environment, and empowering communities.
              </p>
              <p>
                Every purchase you make supports not just an artisan, but an entire ecosystem of sustainable practices,
                cultural preservation, and social responsibility. Together, we're weaving a future where tradition and
                innovation dance in perfect harmony.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link href="/collections">Shop Our Collections</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/artisans">Meet Our Artisans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
