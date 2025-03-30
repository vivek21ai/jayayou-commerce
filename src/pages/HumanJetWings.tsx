
import { ArrowRight, Shield, Zap, Rocket, BarChart } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

const HumanJetWings = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been added to the waitlist!",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-jatayu-dark text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-jatayu-dark/90 to-jatayu-dark/70 z-10"></div>
          <video 
            className="absolute inset-0 w-full h-full object-cover" 
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/jet-wings-video.mp4" type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-75" 
              style={{ backgroundImage: 'url(/jet-wings-hero.jpg)' }}
            ></div>
          </video>
          
          <div className="container mx-auto px-6 py-24 md:py-36 relative z-20">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-jatayu-accent text-white rounded-full text-sm font-medium mb-6">
                COMING SOON
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">The Future of Personal Flight</h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl">
                JATAYU's revolutionary human jet wing system will transform how humans experience flight.
                Be among the first to experience personal jet-powered flight.
              </p>
              <Button asChild size="lg" className="bg-jatayu-accent hover:bg-jatayu-accent/90 text-white py-6 px-8 text-lg">
                <a href="#waitlist">
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-jatayu-primary mb-4">Revolutionary Flight System</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our human jet wing technology combines the most advanced propulsion systems with intuitive control mechanisms,
                allowing users to experience true free flight like never before.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg transition-transform hover:-translate-y-1 duration-300">
                <div className="bg-jatayu-primary/10 text-jatayu-primary p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Rocket size={24} />
                </div>
                <h3 className="text-xl font-bold text-jatayu-primary mb-3">Powerful Propulsion</h3>
                <p className="text-gray-600">
                  Dual micro turbojets delivering 180 kg of thrust each, allowing speeds up to 300 km/h and vertical takeoff.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg transition-transform hover:-translate-y-1 duration-300">
                <div className="bg-jatayu-primary/10 text-jatayu-primary p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-bold text-jatayu-primary mb-3">Advanced Safety</h3>
                <p className="text-gray-600">
                  Triple redundancy fail-safe systems, emergency parachute, and flight envelope protection for maximum security.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg transition-transform hover:-translate-y-1 duration-300">
                <div className="bg-jatayu-primary/10 text-jatayu-primary p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-jatayu-primary mb-3">Intuitive Control</h3>
                <p className="text-gray-600">
                  AI-assisted flight controls and body-position sensors make flying as natural as swimming or skiing.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg transition-transform hover:-translate-y-1 duration-300">
                <div className="bg-jatayu-primary/10 text-jatayu-primary p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <BarChart size={24} />
                </div>
                <h3 className="text-xl font-bold text-jatayu-primary mb-3">Extended Range</h3>
                <p className="text-gray-600">
                  High-efficiency fuel delivery system provides up to 30 minutes of continuous flight time (10-15 km range).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-jatayu-secondary font-semibold">TECHNICAL DETAILS</span>
                <h2 className="text-3xl md:text-4xl font-bold text-jatayu-primary mt-2 mb-6">Engineering Excellence</h2>
                <p className="text-gray-600 mb-8">
                  The JATAYU Human Jet Wing system represents the pinnacle of aerospace engineering,
                  combining miniaturized turbojet technology with advanced materials and intelligent flight systems.
                </p>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="w-32 font-medium text-jatayu-primary">Weight</div>
                    <div className="flex-1 text-gray-600">33 kg (complete system with full fuel)</div>
                  </div>
                  <div className="flex">
                    <div className="w-32 font-medium text-jatayu-primary">Wingspan</div>
                    <div className="flex-1 text-gray-600">2.2 meters (carbon fiber construction)</div>
                  </div>
                  <div className="flex">
                    <div className="w-32 font-medium text-jatayu-primary">Engines</div>
                    <div className="flex-1 text-gray-600">2 × MicroJet-900X (custom-designed turbojets)</div>
                  </div>
                  <div className="flex">
                    <div className="w-32 font-medium text-jatayu-primary">Max Speed</div>
                    <div className="flex-1 text-gray-600">300 km/h (186 mph)</div>
                  </div>
                  <div className="flex">
                    <div className="w-32 font-medium text-jatayu-primary">Max Altitude</div>
                    <div className="flex-1 text-gray-600">3,500 meters (11,500 feet)</div>
                  </div>
                  <div className="flex">
                    <div className="w-32 font-medium text-jatayu-primary">Flight Time</div>
                    <div className="flex-1 text-gray-600">10-30 minutes (depending on flight profile)</div>
                  </div>
                  <div className="flex">
                    <div className="w-32 font-medium text-jatayu-primary">Training</div>
                    <div className="flex-1 text-gray-600">Mandatory 1-week training program included</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <img 
                    src="/jet-wing-blueprint.jpg" 
                    alt="Human Jet Wing Technical Blueprint" 
                    className="w-full h-auto rounded"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-jatayu-accent text-white px-4 py-2 rounded shadow">
                    Patent Pending
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-jatayu-primary mb-4">Development Timeline</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Follow our journey from concept to commercial release as we revolutionize personal flight.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-jatayu-primary/20"></div>
                
                {/* Timeline items */}
                <div className="space-y-12">
                  <div className="relative">
                    <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-jatayu-primary text-white rounded-full left-1/2 transform -translate-x-1/2">
                      1
                    </div>
                    <div className="ml-auto mr-12 md:mr-auto md:ml-12 md:pl-8 w-full md:w-1/2">
                      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h3 className="font-bold text-jatayu-primary">2020-2022: Initial R&D</h3>
                        <p className="text-gray-600 mt-2">
                          Concept development, wind tunnel testing, and prototype engine design.
                          First successful unmanned test flight in December 2021.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-jatayu-primary text-white rounded-full left-1/2 transform -translate-x-1/2">
                      2
                    </div>
                    <div className="mr-auto ml-12 md:ml-auto md:mr-12 md:pr-8 w-full md:w-1/2">
                      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h3 className="font-bold text-jatayu-primary">2022-2023: Prototype Development</h3>
                        <p className="text-gray-600 mt-2">
                          Full-scale prototype built and tested with remote control.
                          First human tethered test flight in November 2023.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-jatayu-primary text-white rounded-full left-1/2 transform -translate-x-1/2">
                      3
                    </div>
                    <div className="ml-auto mr-12 md:mr-auto md:ml-12 md:pl-8 w-full md:w-1/2">
                      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h3 className="font-bold text-jatayu-primary">2024: Free Flight Testing & Certification</h3>
                        <p className="text-gray-600 mt-2">
                          Comprehensive free flight test program with test pilots.
                          Safety certification process with aviation authorities.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-jatayu-accent text-white rounded-full left-1/2 transform -translate-x-1/2">
                      4
                    </div>
                    <div className="mr-auto ml-12 md:ml-auto md:mr-12 md:pr-8 w-full md:w-1/2">
                      <div className="bg-jatayu-accent/10 p-6 rounded-lg shadow-sm border border-jatayu-accent/30">
                        <h3 className="font-bold text-jatayu-primary">2025: Pre-Release & Training Program</h3>
                        <p className="text-gray-600 mt-2">
                          Limited release to select customers with intensive training program.
                          First commercial demonstration flight scheduled for June 2025.
                        </p>
                        <p className="text-jatayu-accent font-medium mt-2">
                          We are here — Join the waitlist now!
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-gray-400 text-white rounded-full left-1/2 transform -translate-x-1/2">
                      5
                    </div>
                    <div className="ml-auto mr-12 md:mr-auto md:ml-12 md:pl-8 w-full md:w-1/2">
                      <div className="bg-gray-100 p-6 rounded-lg">
                        <h3 className="font-bold text-gray-600">2026: Commercial Release</h3>
                        <p className="text-gray-500 mt-2">
                          Full commercial release with global distribution network.
                          Certification expected in major aviation markets.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="py-20 bg-gradient-blue text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Reserve Your Place in the Sky</h2>
              <p className="text-xl text-gray-200 mb-8">
                Join our exclusive waitlist to be among the first to experience the JATAYU Human Jet Wing system. 
                Early waitlist members will receive priority access and special pricing.
              </p>
              
              <form onSubmit={handleJoinWaitlist} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow px-4 py-2 rounded bg-white/10 text-white border-white/20 placeholder:text-gray-400 focus-visible:ring-jatayu-accent"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="bg-jatayu-accent hover:bg-jatayu-accent/90 text-white font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Joining..." : "Join Waitlist"}
                  </Button>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  By joining, you'll receive exclusive updates about our Human Jet Wings development.
                </p>
              </form>
              
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-jatayu-accent">2,500+</div>
                  <p className="text-gray-300">Waitlist Members</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-jatayu-accent">15+</div>
                  <p className="text-gray-300">Countries</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-jatayu-accent">$250k</div>
                  <p className="text-gray-300">Expected Price</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-jatayu-accent">2026</div>
                  <p className="text-gray-300">Delivery Begins</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-jatayu-primary mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Everything you need to know about our revolutionary Human Jet Wing system.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto grid gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-jatayu-primary mb-2">Is this technology safe?</h3>
                <p className="text-gray-600">
                  Safety is our absolute priority. The JATAYU Human Jet Wing system includes multiple redundant safety systems, 
                  including an emergency parachute, automated stabilization, and engine redundancy. All users must complete 
                  our mandatory training program before operation.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-jatayu-primary mb-2">Do I need a pilot's license?</h3>
                <p className="text-gray-600">
                  Regulations vary by country. In most jurisdictions, a specific ultralight or experimental aircraft certification 
                  will be required. Our team works with aviation authorities worldwide to establish appropriate certification requirements.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-jatayu-primary mb-2">What training is required?</h3>
                <p className="text-gray-600">
                  All users must complete our 5-day intensive training program. This includes simulator training, tethered flights, 
                  safety procedures, and emergency protocols. The training is included in the purchase price.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-jatayu-primary mb-2">What's the expected price?</h3>
                <p className="text-gray-600">
                  The JATAYU Human Jet Wing system is expected to retail at approximately $250,000 USD, which includes the complete 
                  system, training, and initial maintenance. Early waitlist members may qualify for preferential pricing.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-jatayu-primary mb-2">How do I join the waitlist?</h3>
                <p className="text-gray-600">
                  Simply sign up with your email in the waitlist section above. You'll be among the first to receive updates on 
                  development milestones, pre-order opportunities, and exclusive events.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HumanJetWings;
