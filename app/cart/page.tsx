"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Plus, Minus, Trash2, ShoppingBag, ArrowRight, Truck, Shield } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export default function CartPage() {
  const { state, updateQuantity, removeFromCart } = useCart()
  const { items, total } = state

  const subtotal = total
  const shipping = subtotal > 200 ? 0 : 15 // Free shipping over $200
  const tax = subtotal * 0.08 // 8% tax
  const finalTotal = subtotal + shipping + tax

  const handleCheckout = async () => {
    // Redirect to checkout
    window.location.href = "/checkout"
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <Navigation />

        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h1 className="heading-serif text-3xl font-bold text-primary mb-4">Your Cart is Empty</h1>
            <p className="body-sans text-muted-foreground mb-8">
              Discover our beautiful handwoven treasures and add them to your cart.
            </p>
            <Button asChild size="lg">
              <Link href="/collections">
                Explore Collections
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="heading-serif text-3xl md:text-4xl font-bold text-primary mb-2">Shopping Cart</h1>
          <p className="body-sans text-muted-foreground">
            {items.length} {items.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={`${item.id}-${item.size}-${item.color}`} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="w-full sm:w-32 h-40 sm:h-32 overflow-hidden rounded-lg bg-muted flex-shrink-0">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-3">
                      <div>
                        <Link href={`/products/${item.id}`}>
                          <h3 className="heading-serif text-lg font-semibold text-primary hover:text-accent transition-colors">
                            {item.name}
                          </h3>
                        </Link>
                        <p className="body-sans text-sm text-muted-foreground">Crafted by {item.artisan}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.size && <Badge variant="outline">{item.size}</Badge>}
                        {item.color && <Badge variant="outline">{item.color}</Badge>}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-border rounded-lg">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="h-8 w-8 p-0"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="body-sans font-medium px-3 py-1 min-w-[2rem] text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>

                          {/* Remove Button */}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="heading-serif text-lg font-bold text-accent">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          {item.quantity > 1 && (
                            <p className="body-sans text-sm text-muted-foreground">${item.price} each</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Continue Shopping */}
            <div className="pt-4">
              <Button variant="outline" asChild>
                <Link href="/collections">Continue Shopping</Link>
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="heading-serif text-xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="body-sans text-muted-foreground">Subtotal</span>
                  <span className="body-sans font-medium">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="body-sans text-muted-foreground">Shipping</span>
                  <span className="body-sans font-medium">
                    {shipping === 0 ? <span className="text-green-600">Free</span> : `$${shipping.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="body-sans text-muted-foreground">Tax</span>
                  <span className="body-sans font-medium">${tax.toFixed(2)}</span>
                </div>

                <Separator />

                <div className="flex justify-between">
                  <span className="heading-serif text-lg font-semibold">Total</span>
                  <span className="heading-serif text-lg font-bold text-accent">${finalTotal.toFixed(2)}</span>
                </div>

                <Button onClick={handleCheckout} className="w-full" size="lg">
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-accent" />
                    <div>
                      <p className="body-sans font-medium text-sm">Free Shipping</p>
                      <p className="body-sans text-xs text-muted-foreground">On orders over $200</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-accent" />
                    <div>
                      <p className="body-sans font-medium text-sm">Secure Checkout</p>
                      <p className="body-sans text-xs text-muted-foreground">SSL encrypted payment</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Info */}
            {subtotal < 200 && (
              <Card className="border-accent/20 bg-accent/5">
                <CardContent className="p-6">
                  <p className="body-sans text-sm text-accent-foreground">
                    Add <span className="font-semibold">${(200 - subtotal).toFixed(2)}</span> more to get free shipping!
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
