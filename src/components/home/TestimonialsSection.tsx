
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Col. James Rodriguez",
    role: "U.S. Air Force (Ret.)",
    content: "JATAYU's military-grade jet engines have consistently outperformed competitors in our rigorous testing. The reliability and thrust-to-weight ratio is simply unmatched in the industry.",
    rating: 5,
    image: "/testimonial-1.jpg"
  },
  {
    id: 2,
    name: "Dr. Sarah Chen",
    role: "Aerospace Engineer",
    content: "As an aerospace engineer, I've worked with many propulsion systems, but JATAYU's innovative designs stand out. Their miniaturized turbojet technology is revolutionizing what's possible for small aircraft.",
    rating: 5,
    image: "/testimonial-2.jpg"
  },
  {
    id: 3,
    name: "Michael Thompson",
    role: "Aviation Enthusiast & Customer",
    content: "The MiniJet-1200 exceeded all my expectations for my experimental aircraft project. The customer support team was incredibly helpful throughout the integration process.",
    rating: 4,
    image: "/testimonial-3.jpg"
  }
];

const clientLogos = [
  { id: 1, name: "AeroDynamics Inc.", logo: "/client-1.png" },
  { id: 2, name: "TechFlight Systems", logo: "/client-2.png" },
  { id: 3, name: "Global Defense Tech", logo: "/client-3.png" },
  { id: 4, name: "Aviation Partners", logo: "/client-4.png" },
  { id: 5, name: "FutureFlight Innovations", logo: "/client-5.png" }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-blue text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic mb-4 text-gray-200">{testimonial.content}</p>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < testimonial.rating ? "text-jatayu-accent fill-jatayu-accent" : "text-gray-400"}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-xl font-semibold text-center mb-8">Trusted By</h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {clientLogos.map((client) => (
              <div key={client.id} className="flex items-center justify-center">
                {/* Replace with actual client logos */}
                <div className="w-40 h-20 bg-white/20 rounded-md flex items-center justify-center">
                  <span className="text-white font-medium">{client.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
