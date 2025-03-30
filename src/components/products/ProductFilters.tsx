
import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface ProductFiltersProps {
  onFilterChange: (filters: any) => void;
  minPrice: number;
  maxPrice: number;
  categories: string[];
}

const ProductFilters = ({ onFilterChange, minPrice, maxPrice, categories }: ProductFiltersProps) => {
  const [filters, setFilters] = useState({
    priceRange: [minPrice, maxPrice],
    categories: categories.reduce((acc, category) => ({ ...acc, [category]: true }), {}),
    availability: {
      inStock: true,
      restricted: true,
    },
    searchTerm: "",
  });

  const handlePriceChange = (values: number[]) => {
    setFilters(prev => ({
      ...prev,
      priceRange: values,
    }));
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      categories: {
        ...prev.categories,
        [category]: checked,
      },
    }));
  };

  const handleAvailabilityChange = (key: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      availability: {
        ...prev.availability,
        [key]: checked,
      },
    }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({
      ...prev,
      searchTerm: e.target.value,
    }));
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
  };

  const handleResetFilters = () => {
    const resetFilters = {
      priceRange: [minPrice, maxPrice],
      categories: categories.reduce((acc, category) => ({ ...acc, [category]: true }), {}),
      availability: {
        inStock: true,
        restricted: true,
      },
      searchTerm: "",
    };
    
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="mb-6">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search products..."
            value={filters.searchTerm}
            onChange={handleSearchChange}
            className="pr-10"
          />
        </div>
      </div>

      <Accordion type="multiple" defaultValue={["price", "category", "availability"]} className="space-y-4">
        <AccordionItem value="price" className="border-b">
          <AccordionTrigger className="text-base font-medium">Price Range</AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="space-y-4">
              <Slider
                defaultValue={[minPrice, maxPrice]}
                min={minPrice}
                max={maxPrice}
                step={100}
                value={filters.priceRange}
                onValueChange={handlePriceChange}
                className="my-6"
              />
              <div className="flex justify-between text-sm">
                <span>${filters.priceRange[0].toLocaleString()}</span>
                <span>${filters.priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="category" className="border-b">
          <AccordionTrigger className="text-base font-medium">Categories</AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={filters.categories[category]}
                    onCheckedChange={(checked) => 
                      handleCategoryChange(category, checked as boolean)
                    }
                  />
                  <Label
                    htmlFor={`category-${category}`}
                    className="text-sm font-normal capitalize"
                  >
                    {category.replace('-', ' ')}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="availability" className="border-b">
          <AccordionTrigger className="text-base font-medium">Availability</AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="availability-inStock"
                  checked={filters.availability.inStock}
                  onCheckedChange={(checked) => 
                    handleAvailabilityChange('inStock', checked as boolean)
                  }
                />
                <Label
                  htmlFor="availability-inStock"
                  className="text-sm font-normal"
                >
                  In Stock
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="availability-restricted"
                  checked={filters.availability.restricted}
                  onCheckedChange={(checked) => 
                    handleAvailabilityChange('restricted', checked as boolean)
                  }
                />
                <Label
                  htmlFor="availability-restricted"
                  className="text-sm font-normal"
                >
                  Show Restricted Items
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex gap-2 mt-6">
        <Button
          className="flex-1 bg-jatayu-primary hover:bg-jatayu-primary/90"
          onClick={handleApplyFilters}
        >
          Apply Filters
        </Button>
        <Button
          variant="outline"
          className="flex-1"
          onClick={handleResetFilters}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default ProductFilters;
