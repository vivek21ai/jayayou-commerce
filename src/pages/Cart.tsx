
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

// Mock cart items
const initialCartItems = [
  {
    id: 1,
    name: "TurboX-4000 Jet Engine",
    price: 24999.99,
    image: "/product-1.jpg",
    quantity: 1,
    category: "turbojet"
  },
  {
    id: 2,
    name: "MiniJet-1200 Prototype",
    price: 12499.99,
    image: "/product-2.jpg",
    quantity: 1,
    category: "mini-jet"
  }
];

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState('');
  const [isApplyingPromo, setIsApplyingPromo] = useState(false);
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    
    toast({
      title: "Item Removed",
      description: "The item has been removed from your cart",
    });
  };

  const handleApplyPromoCode = () => {
    if (!promoCode) {
      toast({
        title: "Error",
        description: "Please enter a promo code",
        variant: "destructive",
      });
      return;
    }
    
    setIsApplyingPromo(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock promo code logic
      if (promoCode.toUpperCase() === 'JATAYU10') {
        setDiscount(calculateSubtotal() * 0.1);
        toast({
          title: "Promo Code Applied",
          description: "You got 10% off your order!",
        });
      } else {
        toast({
          title: "Invalid Promo Code",
          description: "The promo code you entered is invalid",
          variant: "destructive",
        });
      }
      
      setIsApplyingPromo(false);
    }, 1000);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.07; // 7% tax
  };

  const calculateShipping = () => {
    const subtotal = calculateSubtotal();
    return subtotal > 0 ? (subtotal > 20000 ? 0 : 199.99) : 0;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax() + calculateShipping() - discount;
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-jatayu-primary mb-8">Shopping Cart</h1>
          
          {cartItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="flex flex-col items-center justify-center py-12">
                <div className="bg-gray-100 rounded-full p-6 mb-6">
                  <ShoppingBag className="h-12 w-12 text-jatayu-primary" />
                </div>
                <h2 className="text-2xl font-bold text-jatayu-primary mb-4">Your Cart is Empty</h2>
                <p className="text-gray-600 mb-8 max-w-md">
                  Looks like you haven't added any products to your cart yet. Explore our products to find what you need.
                </p>
                <Button asChild className="bg-jatayu-primary hover:bg-jatayu-primary/90">
                  <Link to="/products">Explore Products</Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6 border-b">
                    <h2 className="text-xl font-semibold text-jatayu-primary">Items ({cartItems.length})</h2>
                  </div>
                  
                  <div>
                    {cartItems.map((item) => (
                      <div key={item.id} className="border-b last:border-b-0 p-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div 
                            className="w-24 h-24 bg-cover bg-center rounded-md flex-shrink-0" 
                            style={{ backgroundImage: `url(${item.image})` }}
                          />
                          <div className="flex-grow">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="font-medium text-jatayu-primary">{item.name}</h3>
                                <p className="text-gray-500 text-sm">{item.category.replace('-', ' ')}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-bold text-jatayu-primary">${(item.price * item.quantity).toLocaleString()}</p>
                                <p className="text-gray-500 text-sm">${item.price.toLocaleString()} each</p>
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-center mt-4">
                              <div className="flex items-center border rounded-md">
                                <button 
                                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                >
                                  -
                                </button>
                                <span className="px-4 py-1 border-x">{item.quantity}</span>
                                <button 
                                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                >
                                  +
                                </button>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                onClick={() => handleRemoveItem(item.id)}
                              >
                                <Trash2 className="h-4 w-4 mr-1" />
                                Remove
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-jatayu-primary mb-6">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${calculateSubtotal().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">
                        {calculateShipping() === 0 ? 'Free' : `$${calculateShipping().toLocaleString()}`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax (7%)</span>
                      <span className="font-medium">${calculateTax().toLocaleString()}</span>
                    </div>
                    
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span className="font-medium">-${discount.toLocaleString()}</span>
                      </div>
                    )}
                    
                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between">
                        <span className="font-bold text-jatayu-primary">Total</span>
                        <span className="font-bold text-jatayu-primary">${calculateTotal().toLocaleString()}</span>
                      </div>
                    </div>
                    
                    {/* Promo Code */}
                    <div className="pt-4">
                      <div className="flex gap-2">
                        <Input
                          type="text"
                          placeholder="Promo Code"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          className="flex-grow"
                        />
                        <Button 
                          variant="outline" 
                          onClick={handleApplyPromoCode}
                          disabled={isApplyingPromo}
                        >
                          {isApplyingPromo ? "Applying..." : "Apply"}
                        </Button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Try: JATAYU10 for 10% off your order
                      </p>
                    </div>
                    
                    <Button 
                      className="w-full bg-jatayu-accent hover:bg-jatayu-accent/90 text-white py-6 mt-6"
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center mt-4">
                      By proceeding, you agree to our <Link to="/terms" className="underline">Terms of Service</Link> and <Link to="/privacy" className="underline">Privacy Policy</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
