
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="hero-section relative h-[85vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-jatayu-dark/80"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
            Experience the Future of Flight
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            JATAYU brings cutting-edge jet engine technology and revolutionary human flight solutions to transform aviation forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-jatayu-accent hover:bg-jatayu-accent/90 text-white py-6 px-8 text-lg">
              <Link to="/products">
                Explore Products
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 py-6 px-8 text-lg">
              <Link to="/about" className="inline-flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default HeroSection;
