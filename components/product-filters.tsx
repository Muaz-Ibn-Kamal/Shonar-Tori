"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

interface FilterState {
  categories: string[]
  materials: string[]
  regions: string[]
  priceRange: { min: number; max: number }
}

interface ProductFiltersProps {
  onFilterChange: (filters: FilterState) => void
}

export function ProductFilters({ onFilterChange }: ProductFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    materials: [],
    regions: [],
    priceRange: { min: 0, max: 1000 },
  })

  const categories = [
    { id: "sarees", label: "Sarees", count: 12 },
    { id: "kurtas", label: "Kurtas", count: 8 },
    { id: "dupattas", label: "Dupattas", count: 6 },
    { id: "shawls", label: "Shawls", count: 4 },
    { id: "blouses", label: "Blouses", count: 5 },
  ]

  const materials = [
    { id: "silk", label: "Silk", count: 15 },
    { id: "cotton", label: "Cotton", count: 18 },
    { id: "linen", label: "Linen", count: 7 },
    { id: "wool", label: "Wool", count: 3 },
  ]

  const regions = [
    { id: "Tangail", label: "Tangail", count: 8 },
    { id: "Sonargaon", label: "Sonargaon", count: 6 },
    { id: "Kushtia", label: "Kushtia", count: 5 },
    { id: "Dhaka", label: "Dhaka", count: 7 },
    { id: "Rajshahi", label: "Rajshahi", count: 4 },
  ]

  const updateFilters = (newFilters: Partial<FilterState>) => {
    const updated = { ...filters, ...newFilters }
    setFilters(updated)
    onFilterChange(updated)
  }

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.categories, categoryId]
      : filters.categories.filter((id) => id !== categoryId)
    updateFilters({ categories: newCategories })
  }

  const handleMaterialChange = (materialId: string, checked: boolean) => {
    const newMaterials = checked
      ? [...filters.materials, materialId]
      : filters.materials.filter((id) => id !== materialId)
    updateFilters({ materials: newMaterials })
  }

  const handleRegionChange = (regionId: string, checked: boolean) => {
    const newRegions = checked ? [...filters.regions, regionId] : filters.regions.filter((id) => id !== regionId)
    updateFilters({ regions: newRegions })
  }

  const handlePriceChange = (value: number[]) => {
    updateFilters({ priceRange: { min: value[0], max: value[1] } })
  }

  const clearAllFilters = () => {
    const clearedFilters = {
      categories: [],
      materials: [],
      regions: [],
      priceRange: { min: 0, max: 1000 },
    }
    setFilters(clearedFilters)
    onFilterChange(clearedFilters)
  }

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.materials.length > 0 ||
    filters.regions.length > 0 ||
    filters.priceRange.min > 0 ||
    filters.priceRange.max < 1000

  return (
    <div className="space-y-6">
      {/* Active Filters */}
      {hasActiveFilters && (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Active Filters</CardTitle>
              <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                Clear All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {filters.categories.map((category) => (
                <Badge key={category} variant="secondary" className="flex items-center gap-1">
                  {categories.find((c) => c.id === category)?.label}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => handleCategoryChange(category, false)} />
                </Badge>
              ))}
              {filters.materials.map((material) => (
                <Badge key={material} variant="secondary" className="flex items-center gap-1">
                  {materials.find((m) => m.id === material)?.label}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => handleMaterialChange(material, false)} />
                </Badge>
              ))}
              {filters.regions.map((region) => (
                <Badge key={region} variant="secondary" className="flex items-center gap-1">
                  {region}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => handleRegionChange(region, false)} />
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="heading-serif text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                <Checkbox
                  id={category.id}
                  checked={filters.categories.includes(category.id)}
                  onCheckedChange={(checked: boolean | "indeterminate") => handleCategoryChange(category.id, checked as boolean)}
                />
                <label htmlFor={category.id} className="body-sans text-sm cursor-pointer">
                  {category.label}
                </label>
                </div>
              <span className="body-sans text-xs text-muted-foreground">({category.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Materials */}
      <Card>
        <CardHeader>
          <CardTitle className="heading-serif text-lg">Materials</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {materials.map((material) => (
            <div key={material.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                <Checkbox
                  id={material.id}
                  checked={filters.materials.includes(material.id)}
                  onCheckedChange={(checked: boolean | "indeterminate") => handleMaterialChange(material.id, checked as boolean)}
                />
                <label htmlFor={material.id} className="body-sans text-sm cursor-pointer">
                  {material.label}
                </label>
                </div>
              <span className="body-sans text-xs text-muted-foreground">({material.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="heading-serif text-lg">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={[filters.priceRange.min, filters.priceRange.max]}
            onValueChange={handlePriceChange}
            max={1000}
            min={0}
            step={10}
            className="w-full"
          />
          <div className="flex items-center justify-between">
            <span className="body-sans text-sm text-muted-foreground">${filters.priceRange.min}</span>
            <span className="body-sans text-sm text-muted-foreground">${filters.priceRange.max}</span>
          </div>
        </CardContent>
      </Card>

      {/* Artisan Regions */}
      <Card>
        <CardHeader>
          <CardTitle className="heading-serif text-lg">Artisan Regions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {regions.map((region) => (
            <div key={region.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                <Checkbox
                  id={region.id}
                  checked={filters.regions.includes(region.id)}
                  onCheckedChange={(checked: boolean | "indeterminate") => handleRegionChange(region.id, checked as boolean)}
                />
                <label htmlFor={region.id} className="body-sans text-sm cursor-pointer">
                  {region.label}
                </label>
                </div>
              <span className="body-sans text-xs text-muted-foreground">({region.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
