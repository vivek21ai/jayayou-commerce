
import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard, { Product } from '@/components/products/ProductCard';
import ProductFilters from '@/components/products/ProductFilters';

// Dummy products data
const allProducts: Product[] = [
  {
    id: 1,
    name: "TurboX-4000 Jet Engine",
    description: "Advanced turbojet engine with 4000N of thrust, perfect for small aircraft and UAVs.",
    price: 24999.99,
    image: "/product-1.jpg",
    category: "turbojet",
    inStock: true
  },
  {
    id: 2,
    name: "MiniJet-1200 Prototype",
    description: "Compact jet engine delivering 1200N of thrust, ideal for experimental aircraft and testing.",
    price: 12499.99,
    image: "/product-2.jpg",
    category: "mini-jet",
    inStock: true
  },
  {
    id: 3,
    name: "MilitaryJet-6500 Engine",
    description: "Military-grade turbojet with 6500N of thrust and advanced heat signature reduction.",
    price: 49999.99,
    image: "/product-3.jpg",
    category: "military",
    restricted: true,
    inStock: true
  },
  {
    id: 4,
    name: "AeroJet-3000 Engine",
    description: "Versatile jet engine with 3000N of thrust, featuring advanced fuel efficiency technology.",
    price: 19999.99,
    image: "/product-4.jpg",
    category: "turbojet",
    inStock: false
  },
  {
    id: 5,
    name: "ProtoJet-800 Engine",
    description: "Entry-level prototype jet engine with 800N of thrust for educational and experimental use.",
    price: 7999.99,
    image: "/product-5.jpg",
    category: "mini-jet",
    inStock: true
  },
  {
    id: 6,
    name: "StratoJet-5000 Engine",
    description: "High-altitude optimized jet engine with 5000N of thrust for stratospheric operations.",
    price: 32999.99,
    image: "/product-6.jpg",
    category: "turbojet",
    inStock: true
  },
  {
    id: 7,
    name: "TacticJet-4500 Military Engine",
    description: "Tactical military jet engine with 4500N of thrust and stealth technology integration.",
    price: 39999.99,
    image: "/product-7.jpg",
    category: "military",
    restricted: true,
    inStock: true
  },
  {
    id: 8,
    name: "MicroJet-600 Prototype",
    description: "Ultra-compact jet engine with 600N of thrust, perfect for drone and small UAV applications.",
    price: 5999.99,
    image: "/product-8.jpg",
    category: "mini-jet",
    inStock: true
  }
];

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [filters, setFilters] = useState({
    priceRange: [0, 50000],
    categories: {
      'turbojet': true,
      'mini-jet': true,
      'military': true,
    },
    availability: {
      inStock: true,
      restricted: true,
    },
    searchTerm: "",
  });

  const categories = ['turbojet', 'mini-jet', 'military'];
  const minPrice = 0;
  const maxPrice = 50000;

  useEffect(() => {
    const filtered = allProducts.filter(product => {
      // Price range filter
      const isPriceInRange = 
        product.price >= filters.priceRange[0] && 
        product.price <= filters.priceRange[1];

      // Category filter
      const isCategorySelected = filters.categories[product.category];

      // Availability filter
      const isAvailabilityMatch = 
        (filters.availability.inStock ? true : product.inStock !== false) &&
        (filters.availability.restricted ? true : !product.restricted);

      // Search term filter
      const isSearchMatch = 
        filters.searchTerm === "" || 
        product.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.searchTerm.toLowerCase());

      return isPriceInRange && isCategorySelected && isAvailabilityMatch && isSearchMatch;
    });

    setFilteredProducts(filtered);
  }, [filters]);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-jatayu-primary mb-2">Our Products</h1>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Explore our range of cutting-edge jet engines, from experimental prototypes to military-grade propulsion systems.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <ProductFilters 
                onFilterChange={handleFilterChange}
                minPrice={minPrice}
                maxPrice={maxPrice}
                categories={categories}
              />
            </div>
            
            <div className="lg:col-span-3">
              {filteredProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-sm p-12">
                  <h2 className="text-2xl font-bold text-jatayu-primary mb-2">No products found</h2>
                  <p className="text-gray-600 mb-4 text-center">
                    Try adjusting your filters or search criteria.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
