
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const products = [
  {
    id: 1,
    name: "TurboX-4000 Jet Engine",
    description: "Advanced turbojet engine with 4000N of thrust, perfect for small aircraft and UAVs.",
    price: 24999.99,
    image: "/product-1.jpg",
    category: "turbojet"
  },
  {
    id: 2,
    name: "MiniJet-1200 Prototype",
    description: "Compact jet engine delivering 1200N of thrust, ideal for experimental aircraft and testing.",
    price: 12499.99,
    image: "/product-2.jpg",
    category: "mini-jet"
  },
  {
    id: 3,
    name: "MilitaryJet-6500 Engine",
    description: "Military-grade turbojet with 6500N of thrust and advanced heat signature reduction.",
    price: 49999.99,
    image: "/product-3.jpg",
    category: "military"
  },
  {
    id: 4,
    name: "AeroJet-3000 Engine",
    description: "Versatile jet engine with 3000N of thrust, featuring advanced fuel efficiency technology.",
    price: 19999.99,
    image: "/product-4.jpg",
    category: "turbojet"
  },
  {
    id: 5,
    name: "ProtoJet-800 Engine",
    description: "Entry-level prototype jet engine with 800N of thrust for educational and experimental use.",
    price: 7999.99,
    image: "/product-5.jpg",
    category: "mini-jet"
  }
];

const FeaturedProducts = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
      
      setScrollPosition(scrollTo);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-jatayu-primary">Featured Products</h2>
          <Link 
            to="/products" 
            className="text-jatayu-secondary hover:text-jatayu-primary transition-colors flex items-center"
          >
            View All Products
            <ChevronRight className="ml-1 h-5 w-5" />
          </Link>
        </div>

        <div className="relative">
          <div 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-10 md:flex hidden"
            onClick={() => scroll('left')}
          >
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white shadow-md hover:bg-gray-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide snap-x"
          >
            {products.map((product) => (
              <Card 
                key={product.id}
                className="min-w-[300px] max-w-[300px] snap-start shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 bg-jatayu-accent text-white text-xs uppercase tracking-wider rounded">
                      {product.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="p-4 pb-0">
                  <CardTitle className="text-lg font-semibold text-jatayu-primary">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
                  <p className="text-jatayu-secondary font-bold">${product.price.toLocaleString()}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex gap-2">
                  <Button 
                    asChild
                    className="w-full bg-jatayu-primary hover:bg-jatayu-primary/90"
                  >
                    <Link to={`/products/${product.id}`}>
                      View Details
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-10 md:flex hidden"
            onClick={() => scroll('right')}
          >
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white shadow-md hover:bg-gray-100"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
