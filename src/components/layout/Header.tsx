
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-jatayu-primary">JATAYU</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-jatayu-primary hover:text-jatayu-secondary transition-colors font-medium">
            Home
          </Link>
          <Link to="/about" className="text-jatayu-primary hover:text-jatayu-secondary transition-colors font-medium">
            About Us
          </Link>
          <Link to="/products" className="text-jatayu-primary hover:text-jatayu-secondary transition-colors font-medium">
            Products
          </Link>
          <Link to="/military" className="text-jatayu-primary hover:text-jatayu-secondary transition-colors font-medium">
            Military Solutions
          </Link>
          <Link to="/human-jet-wings" className="text-jatayu-primary hover:text-jatayu-secondary transition-colors font-medium">
            Human Jet Wings
          </Link>
          <Link to="/contact" className="text-jatayu-primary hover:text-jatayu-secondary transition-colors font-medium">
            Contact Us
          </Link>
        </nav>

        {/* Right Side - Search, User, Cart */}
        <div className="flex items-center space-x-4">
          <button className="hidden sm:flex text-jatayu-primary hover:text-jatayu-secondary transition-colors">
            <Search size={20} />
          </button>
          <Link to="/auth" className="text-jatayu-primary hover:text-jatayu-secondary transition-colors">
            <User size={20} />
          </Link>
          <Link to="/cart" className="text-jatayu-primary hover:text-jatayu-secondary transition-colors relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-jatayu-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-jatayu-primary" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-jatayu-primary hover:text-jatayu-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-jatayu-primary hover:text-jatayu-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/products" 
              className="text-jatayu-primary hover:text-jatayu-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/military" 
              className="text-jatayu-primary hover:text-jatayu-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Military Solutions
            </Link>
            <Link 
              to="/human-jet-wings" 
              className="text-jatayu-primary hover:text-jatayu-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Human Jet Wings
            </Link>
            <Link 
              to="/contact" 
              className="text-jatayu-primary hover:text-jatayu-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div className="pt-2 pb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-jatayu-secondary"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
