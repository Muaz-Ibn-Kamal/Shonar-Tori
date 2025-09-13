import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Package,
  Users,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Download,
} from "lucide-react"
import Link from "next/link"

// Sample data - would come from database
const dashboardStats = {
  totalProducts: 156,
  totalOrders: 1247,
  totalRevenue: 89650,
  totalArtisans: 24,
  monthlyGrowth: 12.5,
  pendingOrders: 23,
  lowStockItems: 8,
  newCustomers: 45,
}

const recentOrders = [
  {
    id: "ORD-001",
    customer: "Sarah Johnson",
    items: 2,
    total: 598,
    status: "processing",
    date: "2024-01-15",
  },
  {
    id: "ORD-002",
    customer: "Priya Sharma",
    items: 1,
    total: 299,
    status: "shipped",
    date: "2024-01-14",
  },
  {
    id: "ORD-003",
    customer: "Ahmed Hassan",
    items: 3,
    total: 897,
    status: "delivered",
    date: "2024-01-13",
  },
]

const topProducts = [
  {
    id: 1,
    name: "Handwoven Silk Saree",
    sales: 45,
    revenue: 13455,
    stock: 12,
  },
  {
    id: 2,
    name: "Jamdani Dupatta",
    sales: 38,
    revenue: 11400,
    stock: 8,
  },
  {
    id: 3,
    name: "Cotton Kurta Set",
    sales: 52,
    revenue: 10400,
    stock: 15,
  },
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-secondary/20">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="heading-serif text-3xl font-bold text-primary">Admin Dashboard</h1>
            <p className="body-sans text-muted-foreground">Manage your Shonar Tori platform</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="body-sans text-sm text-muted-foreground">Total Products</p>
                  <p className="heading-serif text-2xl font-bold text-primary">{dashboardStats.totalProducts}</p>
                </div>
                <Package className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="body-sans text-sm text-muted-foreground">Total Orders</p>
                  <p className="heading-serif text-2xl font-bold text-primary">{dashboardStats.totalOrders}</p>
                </div>
                <ShoppingCart className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="body-sans text-sm text-muted-foreground">Total Revenue</p>
                  <p className="heading-serif text-2xl font-bold text-primary">
                    ${dashboardStats.totalRevenue.toLocaleString()}
                  </p>
                </div>
                <DollarSign className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="body-sans text-sm text-muted-foreground">Active Artisans</p>
                  <p className="heading-serif text-2xl font-bold text-primary">{dashboardStats.totalArtisans}</p>
                </div>
                <Users className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="artisans">Artisans</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Orders */}
              <Card>
                <CardHeader>
                  <CardTitle className="heading-serif">Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                        <div>
                          <p className="body-sans font-medium">{order.id}</p>
                          <p className="body-sans text-sm text-muted-foreground">{order.customer}</p>
                        </div>
                        <div className="text-right">
                          <p className="body-sans font-medium">${order.total}</p>
                          <Badge
                            variant={
                              order.status === "delivered"
                                ? "default"
                                : order.status === "shipped"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-transparent" asChild>
                    <Link href="/admin/orders">View All Orders</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Top Products */}
              <Card>
                <CardHeader>
                  <CardTitle className="heading-serif">Top Selling Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topProducts.map((product) => (
                      <div
                        key={product.id}
                        className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg"
                      >
                        <div>
                          <p className="body-sans font-medium">{product.name}</p>
                          <p className="body-sans text-sm text-muted-foreground">{product.sales} sales</p>
                        </div>
                        <div className="text-right">
                          <p className="body-sans font-medium">${product.revenue.toLocaleString()}</p>
                          <p className="body-sans text-sm text-muted-foreground">Stock: {product.stock}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-transparent" asChild>
                    <Link href="/admin/products">Manage Products</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="heading-serif">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                    <Plus className="w-6 h-6" />
                    Add Product
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                    <Users className="w-6 h-6" />
                    Add Artisan
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                    <ShoppingCart className="w-6 h-6" />
                    Process Orders
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                    <TrendingUp className="w-6 h-6" />
                    View Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="heading-serif">Product Management</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Product
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>

                  {/* Product List */}
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-secondary/30 p-4 grid grid-cols-6 gap-4 font-medium text-sm">
                      <span>Product</span>
                      <span>Category</span>
                      <span>Price</span>
                      <span>Stock</span>
                      <span>Status</span>
                      <span>Actions</span>
                    </div>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="p-4 grid grid-cols-6 gap-4 items-center border-t">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-muted rounded-lg"></div>
                          <div>
                            <p className="body-sans font-medium">Handwoven Silk Saree</p>
                            <p className="body-sans text-sm text-muted-foreground">SKU: HSS-001</p>
                          </div>
                        </div>
                        <span className="body-sans text-sm">Sarees</span>
                        <span className="body-sans font-medium">$299</span>
                        <span className="body-sans">12</span>
                        <Badge variant="default">Active</Badge>
                        <div className="flex gap-2">
                          <Button size="sm" variant="ghost">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="heading-serif">Order Management</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Order List */}
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-secondary/30 p-4 grid grid-cols-7 gap-4 font-medium text-sm">
                      <span>Order ID</span>
                      <span>Customer</span>
                      <span>Items</span>
                      <span>Total</span>
                      <span>Status</span>
                      <span>Date</span>
                      <span>Actions</span>
                    </div>
                    {recentOrders.map((order) => (
                      <div key={order.id} className="p-4 grid grid-cols-7 gap-4 items-center border-t">
                        <span className="body-sans font-medium">{order.id}</span>
                        <span className="body-sans">{order.customer}</span>
                        <span className="body-sans">{order.items}</span>
                        <span className="body-sans font-medium">${order.total}</span>
                        <Badge
                          variant={
                            order.status === "delivered"
                              ? "default"
                              : order.status === "shipped"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {order.status}
                        </Badge>
                        <span className="body-sans text-sm text-muted-foreground">{order.date}</span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="ghost">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Artisans Tab */}
          <TabsContent value="artisans" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="heading-serif">Artisan Management</CardTitle>
                  <Button size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Artisan
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-muted rounded-full"></div>
                          <div>
                            <p className="body-sans font-medium">Rashida Begum</p>
                            <p className="body-sans text-sm text-muted-foreground">Silk Weaving</p>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Region</span>
                            <span>Tangail</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Products</span>
                            <span>12</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Status</span>
                            <Badge variant="default">Active</Badge>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="heading-serif">Sales Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-secondary/30 rounded-lg flex items-center justify-center">
                    <p className="body-sans text-muted-foreground">Sales Chart Placeholder</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="heading-serif">Customer Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-secondary/30 rounded-lg flex items-center justify-center">
                    <p className="body-sans text-muted-foreground">Customer Chart Placeholder</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="heading-serif">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="heading-serif text-3xl font-bold text-primary">{dashboardStats.monthlyGrowth}%</p>
                    <p className="body-sans text-muted-foreground">Monthly Growth</p>
                  </div>
                  <div className="text-center">
                    <p className="heading-serif text-3xl font-bold text-primary">{dashboardStats.newCustomers}</p>
                    <p className="body-sans text-muted-foreground">New Customers</p>
                  </div>
                  <div className="text-center">
                    <p className="heading-serif text-3xl font-bold text-primary">{dashboardStats.lowStockItems}</p>
                    <p className="body-sans text-muted-foreground">Low Stock Alerts</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}
