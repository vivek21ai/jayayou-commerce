
import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/components/ui/use-toast';

// Dummy products data (same as in Products.tsx)
const allProducts = [
  {
    id: 1,
    name: "TurboX-4000 Jet Engine",
    description: "Advanced turbojet engine with 4000N of thrust, perfect for small aircraft and UAVs.",
    price: 24999.99,
    image: "/product-1.jpg",
    category: "turbojet",
    inStock: true,
    specs: {
      thrust: "4000N",
      weight: "45kg",
      fuelType: "Jet A1",
      rpm: "125,000",
      dimensions: "68cm x 32cm x 32cm"
    },
    features: [
      "Advanced ceramic turbine blades",
      "Digital engine control unit",
      "Integrated temperature monitoring",
      "Low noise emission profile",
      "High altitude operation capability"
    ],
    reviews: [
      { id: 1, name: "David Wilson", rating: 5, comment: "Excellent engine, powerful and reliable. Installation was straightforward with the included documentation." },
      { id: 2, name: "Sarah Johnson", rating: 4, comment: "Great performance for its size. Fuel consumption is better than expected." }
    ]
  },
  {
    id: 2,
    name: "MiniJet-1200 Prototype",
    description: "Compact jet engine delivering 1200N of thrust, ideal for experimental aircraft and testing.",
    price: 12499.99,
    image: "/product-2.jpg",
    category: "mini-jet",
    inStock: true,
    specs: {
      thrust: "1200N",
      weight: "18kg",
      fuelType: "Jet A1 / Kerosene",
      rpm: "145,000",
      dimensions: "42cm x 22cm x 22cm"
    },
    features: [
      "Compact design for tight installations",
      "Simplified start sequence",
      "Educational test stand compatibility",
      "Low thermal signature",
      "Detailed performance monitoring outputs"
    ],
    reviews: [
      { id: 1, name: "Michael Brown", rating: 5, comment: "Perfect for my experimental drone project. The size-to-thrust ratio is incredible." },
      { id: 2, name: "Emily Chen", rating: 4, comment: "Using this for my aerospace engineering class. Great learning tool with excellent documentation." }
    ]
  },
  {
    id: 3,
    name: "MilitaryJet-6500 Engine",
    description: "Military-grade turbojet with 6500N of thrust and advanced heat signature reduction.",
    price: 49999.99,
    image: "/product-3.jpg",
    category: "military",
    restricted: true,
    inStock: true,
    specs: {
      thrust: "6500N",
      weight: "72kg",
      fuelType: "JP-8 / Jet A1",
      rpm: "118,000",
      dimensions: "95cm x 45cm x 45cm"
    },
    features: [
      "Tactical heat signature reduction technology",
      "Hardened electronics for battlefield conditions",
      "Encrypted communication protocols",
      "Extended service intervals",
      "Multi-fuel capability"
    ],
    reviews: [
      { id: 1, name: "Lt. Col. Richards", rating: 5, comment: "Deployed in our latest UAV program with excellent results. Reliability is outstanding." },
      { id: 2, name: "Capt. Martinez", rating: 5, comment: "The heat signature reduction really works as advertised. Game-changer for our operations." }
    ]
  },
  {
    id: 4,
    name: "AeroJet-3000 Engine",
    description: "Versatile jet engine with 3000N of thrust, featuring advanced fuel efficiency technology.",
    price: 19999.99,
    image: "/product-4.jpg",
    category: "turbojet",
    inStock: false,
    specs: {
      thrust: "3000N",
      weight: "38kg",
      fuelType: "Jet A1",
      rpm: "130,000",
      dimensions: "64cm x 30cm x 30cm"
    },
    features: [
      "Eco-friendly combustion chamber design",
      "20% higher fuel efficiency than comparable models",
      "Integrated diagnostic system",
      "Reduced maintenance requirements",
      "Optimized for high-altitude performance"
    ],
    reviews: [
      { id: 1, name: "Robert Taylor", rating: 4, comment: "The fuel efficiency claims are accurate. Impressive range improvement in our aircraft." },
      { id: 2, name: "Jennifer Adams", rating: 3, comment: "Good engine overall, but installation was more complex than expected." }
    ]
  },
  {
    id: 5,
    name: "ProtoJet-800 Engine",
    description: "Entry-level prototype jet engine with 800N of thrust for educational and experimental use.",
    price: 7999.99,
    image: "/product-5.jpg",
    category: "mini-jet",
    inStock: true,
    specs: {
      thrust: "800N",
      weight: "12kg",
      fuelType: "Kerosene / Jet A1",
      rpm: "150,000",
      dimensions: "35cm x 18cm x 18cm"
    },
    features: [
      "Perfect for educational institutions",
      "Transparent housing options for visualization",
      "Comprehensive safety features",
      "Detailed educational materials included",
      "Modular design for component studies"
    ],
    reviews: [
      { id: 1, name: "Prof. Anderson", rating: 5, comment: "We use these in our aerospace engineering lab. Students love the hands-on experience." },
      { id: 2, name: "Dr. Patel", rating: 5, comment: "Excellent educational tool. The transparent housing option is perfect for demonstrations." }
    ]
  }
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  
  // Find product by ID
  const product = allProducts.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-jatayu-primary mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/products">Back to Products</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.restricted) {
      toast({
        title: "Restricted Product",
        description: "Military ID verification required for purchase",
        variant: "destructive",
      });
      return;
    }

    if (!product.inStock) {
      toast({
        title: "Out of Stock",
        description: "This product is currently unavailable",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Added to Cart",
      description: `${quantity} × ${product.name} has been added to your cart`,
    });
  };

  const handleBuyNow = () => {
    if (product.restricted) {
      toast({
        title: "Restricted Product",
        description: "Military ID verification required for purchase",
        variant: "destructive",
      });
      return;
    }

    if (!product.inStock) {
      toast({
        title: "Out of Stock",
        description: "This product is currently unavailable",
        variant: "destructive",
      });
      return;
    }

    // Add to cart and redirect to checkout
    toast({
      title: "Proceeding to Checkout",
      description: `${quantity} × ${product.name} has been added to your cart`,
    });
    navigate('/cart');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-6 py-8">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              className="flex items-center text-jatayu-secondary"
              asChild
            >
              <Link to="/products">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Link>
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              {/* Product Image */}
              <div className="relative">
                <div 
                  className="w-full h-96 bg-cover bg-center rounded-lg" 
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                {(product.restricted || !product.inStock) && (
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {product.restricted && (
                      <Badge variant="destructive" className="text-sm font-medium">
                        Restricted - Military ID Required
                      </Badge>
                    )}
                    {!product.inStock && (
                      <Badge variant="outline" className="bg-gray-800 text-white text-sm font-medium">
                        Out of Stock
                      </Badge>
                    )}
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <Badge className="bg-jatayu-secondary mb-2">
                    {product.category.replace('-', ' ')}
                  </Badge>
                  <h1 className="text-3xl font-bold text-jatayu-primary">{product.name}</h1>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                </div>

                <div className="border-t border-b py-4">
                  <span className="text-3xl font-bold text-jatayu-primary">${product.price.toLocaleString()}</span>
                  <span className="text-gray-600 ml-2 text-sm">(Tax & Shipping calculated at checkout)</span>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center">
                  <label className="mr-4 text-gray-700">Quantity:</label>
                  <div className="flex items-center border rounded-md">
                    <button 
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-x">{quantity}</span>
                    <button 
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Buy Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button 
                    className="flex-1 bg-jatayu-accent hover:bg-jatayu-accent/90 text-white py-6"
                    onClick={handleBuyNow}
                    disabled={!product.inStock || product.restricted}
                  >
                    Buy Now
                  </Button>
                  <Button 
                    className="flex-1 bg-jatayu-primary hover:bg-jatayu-primary/90 text-white py-6 flex items-center justify-center gap-2"
                    onClick={handleAddToCart}
                    disabled={!product.inStock || product.restricted}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </Button>
                </div>

                {/* Restricted Notice */}
                {product.restricted && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mt-4">
                    <p className="font-medium">Military/Government ID Required</p>
                    <p className="text-sm mt-1">
                      This product requires verified military or government credentials for purchase. 
                      Please <Link to="/auth" className="underline">login</Link> with your official credentials or 
                      contact our military sales department.
                    </p>
                  </div>
                )}

                {/* Out of Stock Notice */}
                {!product.inStock && (
                  <div className="bg-gray-50 border border-gray-200 text-gray-700 px-4 py-3 rounded-md mt-4">
                    <p className="font-medium">Currently Out of Stock</p>
                    <p className="text-sm mt-1">
                      This product is temporarily unavailable. Please check back later or 
                      <Button variant="link" className="p-0 h-auto text-jatayu-secondary underline ml-1">
                        get notified
                      </Button> when it's back in stock.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Tabs for Additional Info */}
            <div className="border-t">
              <Tabs defaultValue="specifications" className="p-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="specifications">Specifications</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="specifications" className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="features" className="pt-6">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start py-2">
                        <div className="h-6 w-6 rounded-full bg-jatayu-primary/10 text-jatayu-primary flex items-center justify-center mr-3 mt-0.5">
                          ✓
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="reviews" className="pt-6">
                  <div className="space-y-6">
                    {product.reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-100 pb-6">
                        <div className="flex items-center mb-2">
                          <h4 className="font-medium text-gray-900 mr-2">{review.name}</h4>
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star 
                                key={i} 
                                size={16} 
                                className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
