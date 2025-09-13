import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Package, Truck, Mail, ArrowRight } from "lucide-react"

export default function CheckoutSuccessPage() {
  // This would come from the order data
  const orderNumber = "ST-2024-001"
  const estimatedDelivery = "March 15-20, 2024"
  const trackingNumber = "TRK123456789"

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          {/* Success Message */}
          <div className="space-y-4">
            <h1 className="heading-serif text-3xl md:text-4xl font-bold text-primary">Order Confirmed!</h1>
            <p className="body-sans text-lg text-muted-foreground">
              Thank you for your purchase. Your order has been received and is being processed.
            </p>
          </div>

          {/* Order Details */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="heading-serif text-lg font-semibold text-primary mb-2">Order Number</h3>
                  <p className="body-sans font-mono text-accent">{orderNumber}</p>
                </div>
                <div>
                  <h3 className="heading-serif text-lg font-semibold text-primary mb-2">Estimated Delivery</h3>
                  <p className="body-sans text-muted-foreground">{estimatedDelivery}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="heading-serif text-lg font-semibold text-primary">What happens next?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-accent" />
                    </div>
                    <p className="body-sans text-muted-foreground">
                      You'll receive an order confirmation email shortly
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Package className="w-4 h-4 text-accent" />
                    </div>
                    <p className="body-sans text-muted-foreground">
                      Our artisans will carefully prepare your handwoven treasures
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Truck className="w-4 h-4 text-accent" />
                    </div>
                    <p className="body-sans text-muted-foreground">
                      We'll send you tracking information once your order ships
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/collections">
                Continue Shopping
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/account/orders">View Order Details</Link>
            </Button>
          </div>

          {/* Support */}
          <div className="pt-8 border-t">
            <p className="body-sans text-muted-foreground mb-4">Questions about your order?</p>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
