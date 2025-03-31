
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-jatayu-dark text-white overflow-hidden">
      <Header />
      <main className="flex-grow relative">
        {/* Futuristic background elements */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,#1C77C3_0%,transparent_50%)] opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,#FF6B35_0%,transparent_50%)] opacity-10"></div>
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-jatayu-secondary rounded-full filter blur-[100px] opacity-5 animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-jatayu-accent rounded-full filter blur-[120px] opacity-5 animate-pulse-slow"></div>
        </div>

        <div className="container mx-auto px-6 py-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gradient mb-2"
          >
            Cutting-Edge Propulsion
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-300 mb-8 max-w-3xl"
          >
            Explore our range of revolutionary jet engines, from experimental prototypes to military-grade propulsion systems.
          </motion.p>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProductFilters 
                  onFilterChange={handleFilterChange}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  categories={categories}
                />
              </motion.div>
            </div>
            
            <div className="lg:col-span-3">
              {filteredProducts.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center glass-card p-12"
                >
                  <h2 className="text-2xl font-bold text-jatayu-accent mb-2">No products found</h2>
                  <p className="text-gray-300 mb-4 text-center">
                    Try adjusting your filters or search criteria.
                  </p>
                </motion.div>
              ) : (
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredProducts.map(product => (
                    <motion.div key={product.id} variants={itemVariants}>
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </motion.div>
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
