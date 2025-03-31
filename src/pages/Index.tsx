
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import AboutSection from '@/components/home/AboutSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import NewsletterSection from '@/components/home/NewsletterSection';

const Index = () => {
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
        
        <div className="relative z-10">
          <HeroSection />
          <FeaturedProducts />
          <AboutSection />
          <TestimonialsSection />
          <NewsletterSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
