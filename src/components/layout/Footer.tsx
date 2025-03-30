
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-jatayu-primary text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">JATAYU</h3>
            <p className="text-gray-300 max-w-xs">
              Pioneering the future of flight with advanced jet engine technology and innovative human flight solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-jatayu-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-jatayu-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-jatayu-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-jatayu-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-jatayu-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-jatayu-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-jatayu-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-jatayu-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/military" className="text-gray-300 hover:text-jatayu-accent transition-colors">
                  Military Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/turbojet" className="text-gray-300 hover:text-jatayu-accent transition-colors">
                  Turbojet Engines
                </Link>
              </li>
              <li>
                <Link to="/products/mini-jet" className="text-gray-300 hover:text-jatayu-accent transition-colors">
                  Mini Jet Engines
                </Link>
              </li>
              <li>
                <Link to="/products/military" className="text-gray-300 hover:text-jatayu-accent transition-colors">
                  Military Grade Jets
                </Link>
              </li>
              <li>
                <Link to="/human-jet-wings" className="text-gray-300 hover:text-jatayu-accent transition-colors">
                  Human Jet Wings
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="text-gray-300 hover:text-jatayu-accent transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-jatayu-accent" />
                <span className="text-gray-300">
                  123 Aviation Way, Tech Hub, Aerospace District, 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-jatayu-accent" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-jatayu-accent" />
                <a href="mailto:info@jatayu.com" className="text-gray-300 hover:text-jatayu-accent transition-colors">
                  info@jatayu.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} JATAYU, Inc. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-jatayu-accent text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-jatayu-accent text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/shipping" className="text-gray-400 hover:text-jatayu-accent text-sm transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
