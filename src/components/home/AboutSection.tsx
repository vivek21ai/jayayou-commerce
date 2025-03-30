
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-jatayu-primary mb-6">About JATAYU</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              JATAYU is a pioneering aerospace company specializing in cutting-edge jet engine technology 
              and revolutionary human flight solutions. Founded by a team of aviation experts and engineers, 
              we're dedicated to transforming the future of flight.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our mission is to make advanced propulsion technology more accessible while pushing the 
              boundaries of human flight capabilities. From military-grade engines to innovative personal 
              flight systems, JATAYU is at the forefront of aviation innovation.
            </p>
            <Button asChild variant="outline" className="border-jatayu-primary text-jatayu-primary hover:bg-jatayu-primary/5">
              <Link to="/about">Read More</Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-jatayu-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-jatayu-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-jatayu-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="relative">
              <img 
                src="/about-image.jpg" 
                alt="JATAYU Engineering Team" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
