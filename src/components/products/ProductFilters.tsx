
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
import { Search } from 'lucide-react';

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
    <div className="glass-card p-4 rounded-lg border border-white/10 hover-lift">
      <div className="mb-6">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search products..."
            value={filters.searchTerm}
            onChange={handleSearchChange}
            className="pr-10 bg-black/20 border-white/20 text-white placeholder:text-gray-400"
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <Accordion type="multiple" defaultValue={["price", "category", "availability"]} className="space-y-4">
        <AccordionItem value="price" className="border-b border-white/10">
          <AccordionTrigger className="text-base font-medium text-jatayu-accent">Price Range</AccordionTrigger>
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
              <div className="flex justify-between text-sm text-gray-300">
                <span>${filters.priceRange[0].toLocaleString()}</span>
                <span>${filters.priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="category" className="border-b border-white/10">
          <AccordionTrigger className="text-base font-medium text-jatayu-accent">Categories</AccordionTrigger>
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
                    className="text-sm font-normal capitalize text-gray-300"
                  >
                    {category.replace('-', ' ')}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="availability" className="border-b border-white/10">
          <AccordionTrigger className="text-base font-medium text-jatayu-accent">Availability</AccordionTrigger>
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
                  className="text-sm font-normal text-gray-300"
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
                  className="text-sm font-normal text-gray-300"
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
          className="flex-1 bg-jatayu-accent hover:bg-jatayu-accent/90"
          onClick={handleApplyFilters}
        >
          Apply Filters
        </Button>
        <Button
          variant="outline"
          className="flex-1 border-white/20"
          onClick={handleResetFilters}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default ProductFilters;
