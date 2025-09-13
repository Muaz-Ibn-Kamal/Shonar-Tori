"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Truck, MapPin, Mail, Lock, AlertCircle } from "lucide-react"

// Sample cart data
const cartItems = [
  {
    id: 1,
    name: "Handwoven Silk Saree",
    price: 299,
    quantity: 1,
    image: "/elegant-silk-saree-with-traditional-bengali-patter.jpg",
  },
  {
    id: 2,
    name: "Artisan Cotton Kurta",
    price: 89,
    quantity: 2,
    image: "/handwoven-cotton-kurta-with-natural-dyes.jpg",
  },
]

export default function CheckoutPage() {
  const [shippingCountry, setShippingCountry] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  })

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const isBangladesh = shippingCountry === "BD"

  // Different shipping rates based on country
  const shipping = isBangladesh ? 5 : subtotal > 200 ? 0 : 25 // 300 TK ≈ $5 for BD, $25 international
  const tax = isBangladesh ? 0 : subtotal * 0.08 // No tax for Bangladesh
  const total = subtotal + shipping + tax

  // Payment options based on location
  const bangladeshPayments = [
    { id: "cod", name: "Cash on Delivery", description: "Pay when you receive your order" },
    { id: "bkash", name: "bKash", description: "Mobile payment" },
    { id: "nagad", name: "Nagad", description: "Mobile payment" },
    { id: "rocket", name: "Rocket", description: "Mobile payment" },
    { id: "sslcommerz", name: "Credit/Debit Card", description: "Visa, Mastercard via SSLCommerz" },
  ]

  const internationalPayments = [
    { id: "stripe", name: "Credit/Debit Card", description: "Visa, Mastercard, American Express" },
    { id: "paypal", name: "PayPal", description: "Pay with your PayPal account" },
  ]

  const paymentOptions = isBangladesh ? bangladeshPayments : internationalPayments

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect to success page
    window.location.href = "/checkout/success"
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="heading-serif text-3xl md:text-4xl font-bold text-primary mb-2">Checkout</h1>
          <p className="body-sans text-muted-foreground">Complete your order securely</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="heading-serif text-xl flex items-center gap-2">
                    <Mail className="w-5 h-5 text-accent" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="heading-serif text-xl flex items-center gap-2">
                    <Truck className="w-5 h-5 text-accent" />
                    Shipping Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="Street address"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Select value={shippingCountry} onValueChange={setShippingCountry} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="BD">🇧🇩 Bangladesh</SelectItem>
                          <SelectItem value="US">🇺🇸 United States</SelectItem>
                          <SelectItem value="CA">🇨🇦 Canada</SelectItem>
                          <SelectItem value="GB">🇬🇧 United Kingdom</SelectItem>
                          <SelectItem value="AU">🇦🇺 Australia</SelectItem>
                          <SelectItem value="DE">🇩🇪 Germany</SelectItem>
                          <SelectItem value="FR">🇫🇷 France</SelectItem>
                          <SelectItem value="IN">🇮🇳 India</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input
                        id="postalCode"
                        value={formData.postalCode}
                        onChange={(e) => handleInputChange("postalCode", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder={isBangladesh ? "+880 1234 567890" : "+1 (555) 123-4567"}
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Method */}
              {shippingCountry && (
                <Card>
                  <CardHeader>
                    <CardTitle className="heading-serif text-xl flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-accent" />
                      Shipping Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isBangladesh ? (
                      <div className="space-y-3">
                        <div className="p-4 border border-border rounded-lg bg-secondary/30">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="body-sans font-medium">Standard Delivery</p>
                              <p className="body-sans text-sm text-muted-foreground">
                                Inside Dhaka: 5 days • Outside Dhaka: 10 days
                              </p>
                            </div>
                            <Badge className="bg-accent text-accent-foreground">৳300</Badge>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="p-4 border border-border rounded-lg bg-secondary/30">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="body-sans font-medium">International Shipping</p>
                              <p className="body-sans text-sm text-muted-foreground">
                                5-7 working days dispatch + destination delivery time
                              </p>
                            </div>
                            <Badge className="bg-accent text-accent-foreground">
                              {shipping === 0 ? "Free" : `$${shipping}`}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Payment Method */}
              {shippingCountry && (
                <Card>
                  <CardHeader>
                    <CardTitle className="heading-serif text-xl flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-accent" />
                      Payment Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {!isBangladesh && (
                      <div className="mb-4 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-accent mt-0.5" />
                          <div>
                            <p className="body-sans font-medium text-accent-foreground">International Payment</p>
                            <p className="body-sans text-sm text-accent-foreground/80">
                              50% payment required upfront, remaining 50% on delivery
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="space-y-3">
                        {paymentOptions.map((option) => (
                          <div
                            key={option.id}
                            className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-secondary/30 transition-colors"
                          >
                            <RadioGroupItem value={option.id} id={option.id} />
                            <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                              <div>
                                <p className="body-sans font-medium">{option.name}</p>
                                <p className="body-sans text-sm text-muted-foreground">{option.description}</p>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>

                    {/* Payment Form */}
                    {paymentMethod && !paymentMethod.includes("cod") && (
                      <div className="mt-6 p-4 border border-border rounded-lg bg-secondary/30">
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="expiry">Expiry Date</Label>
                              <Input id="expiry" placeholder="MM/YY" />
                            </div>
                            <div>
                              <Label htmlFor="cvv">CVV</Label>
                              <Input id="cvv" placeholder="123" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="heading-serif text-xl">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Cart Items */}
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="body-sans font-medium text-sm">{item.name}</p>
                          <p className="body-sans text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <p className="body-sans font-medium text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Pricing Breakdown */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="body-sans text-muted-foreground">Subtotal</span>
                      <span className="body-sans font-medium">${subtotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="body-sans text-muted-foreground">Shipping</span>
                      <span className="body-sans font-medium">
                        {shipping === 0 ? (
                          <span className="text-green-600">Free</span>
                        ) : isBangladesh ? (
                          `৳${shipping * 60}`
                        ) : (
                          `$${shipping.toFixed(2)}`
                        )}
                      </span>
                    </div>

                    {!isBangladesh && (
                      <div className="flex justify-between">
                        <span className="body-sans text-muted-foreground">Tax</span>
                        <span className="body-sans font-medium">${tax.toFixed(2)}</span>
                      </div>
                    )}

                    <Separator />

                    <div className="flex justify-between">
                      <span className="heading-serif text-lg font-semibold">
                        {!isBangladesh && paymentMethod !== "cod" ? "Amount Due (50%)" : "Total"}
                      </span>
                      <span className="heading-serif text-lg font-bold text-accent">
                        {!isBangladesh && paymentMethod !== "cod"
                          ? `$${(total * 0.5).toFixed(2)}`
                          : `$${total.toFixed(2)}`}
                      </span>
                    </div>

                    {!isBangladesh && paymentMethod !== "cod" && (
                      <p className="body-sans text-xs text-muted-foreground">
                        Remaining $${(total * 0.5).toFixed(2)} due on delivery
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading || !shippingCountry || !paymentMethod}
                    className="w-full"
                    size="lg"
                  >
                    <Lock className="w-4 h-4 mr-2" />
                    {isLoading ? "Processing..." : "Complete Order"}
                  </Button>

                  <div className="text-center">
                    <p className="body-sans text-xs text-muted-foreground">
                      Your payment information is secure and encrypted
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  )
}
