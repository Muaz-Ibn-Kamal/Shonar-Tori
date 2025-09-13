import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">ST</span>
              </div>
              <div className="flex flex-col">
                <span className="heading-serif text-lg font-bold">Shonar Tori</span>
                <span className="text-xs opacity-80">A Daughter Concern of Earth's Ants</span>
              </div>
            </div>
            <p className="body-sans text-sm opacity-90 leading-relaxed">
              Embracing global rich heritage, crafting timeless fashion honoring tradition while nurturing the planet.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="heading-serif text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/collections" className="body-sans text-sm opacity-90 hover:text-accent transition-colors">
                Collections
              </Link>
              <Link href="/artisans" className="body-sans text-sm opacity-90 hover:text-accent transition-colors">
                Meet the Artisans
              </Link>
              <Link href="/story" className="body-sans text-sm opacity-90 hover:text-accent transition-colors">
                Our Story
              </Link>
              <Link href="/sustainability" className="body-sans text-sm opacity-90 hover:text-accent transition-colors">
                Sustainability
              </Link>
              <Link href="/size-guide" className="body-sans text-sm opacity-90 hover:text-accent transition-colors">
                Size Guide
              </Link>
            </div>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h3 className="heading-serif text-lg font-semibold">Customer Care</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/shipping" className="body-sans text-sm opacity-90 hover:text-accent transition-colors">
                Shipping Policy
              </Link>
              <Link href="/returns" className="body-sans text-sm opacity-90 hover:text-accent transition-colors">
                Returns & Exchanges
              </Link>
              <Link href="/care-guide" className="body-sans text-sm opacity-90 hover:text-accent transition-colors">
                Care Instructions
              </Link>
              <Link href="/faq" className="body-sans text-sm opacity-90 hover:text-accent transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="body-sans text-sm opacity-90 hover:text-accent transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="heading-serif text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="body-sans text-sm opacity-90">hello@shonartori.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="body-sans text-sm opacity-90">+880 1234 567890</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span className="body-sans text-sm opacity-90 leading-relaxed">
                  Dhaka, Bangladesh
                  <br />
                  Serving globally with love
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="body-sans text-sm opacity-80 text-center md:text-left">
            © 2024 Shonar Tori. All rights reserved. Crafted with love in Bangladesh.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="body-sans text-sm opacity-80 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="body-sans text-sm opacity-80 hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
