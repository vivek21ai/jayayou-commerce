
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Shield, Zap, Award, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const HumanJetWings = () => {
  const [showModel, setShowModel] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-jatayu-dark text-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with 3D Effect */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-jatayu-dark z-10"></div>
          <div 
            className="h-[80vh] bg-cover bg-center relative overflow-hidden"
            style={{ backgroundImage: 'url(/jet-wings-hero.jpg)' }}
          >
            <div className="absolute inset-0 bg-black/60 z-0"></div>
            
            {/* 3D Elements */}
            <div className="absolute inset-0 z-1 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-jatayu-accent/30 rounded-full transform rotate-45 animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/3 w-96 h-96 border border-jatayu-secondary/20 rounded-full"></div>
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border-2 border-white/10 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
            </div>
            
            <div className="container mx-auto px-6 py-24 h-full flex items-center relative z-20">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="max-w-3xl"
              >
                <span className="inline-block px-4 py-1 bg-jatayu-accent/20 border border-jatayu-accent/30 rounded-full text-sm text-jatayu-accent mb-6">
                  Revolutionary Personal Flight
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gradient">
                  Human Jet Wings Technology
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                  Experience freedom like never before with JATAYU's cutting-edge personal jetpack technology.
                  Safe, efficient, and exhilarating flight is now a reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-jatayu-accent hover:bg-jatayu-accent/90 text-white py-6 px-8 text-lg flex items-center gap-2"
                    onClick={() => setShowModel(!showModel)}
                  >
                    View 3D Model
                    <Rocket size={18} />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 py-6 px-8 text-lg"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Showcase Section with 3D Model */}
        <section className="py-24 relative">
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-0 w-full h-64 bg-gradient-to-b from-jatayu-secondary/10 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* 3D Model/Image Showcase */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-jatayu-accent/20 via-jatayu-secondary/20 to-jatayu-primary/20 rounded-lg blur-xl opacity-30"></div>
                <div className="relative glass-card p-6 hover-lift">
                  <img 
                    src="/jet-wing-blueprint.jpg" 
                    alt="JATAYU Jet Wing" 
                    className="w-full h-auto rounded opacity-90"
                  />
                  
                  {/* Interactive Elements */}
                  <div className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full bg-jatayu-accent/80 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center animate-pulse">
                    <span className="text-xs font-bold">01</span>
                  </div>
                  
                  <div className="absolute top-1/2 right-1/3 w-8 h-8 rounded-full bg-jatayu-secondary/80 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center animate-pulse" style={{animationDelay: '0.5s'}}>
                    <span className="text-xs font-bold">02</span>
                  </div>
                  
                  <div className="absolute bottom-1/3 right-1/4 w-8 h-8 rounded-full bg-white/80 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center animate-pulse" style={{animationDelay: '1s'}}>
                    <span className="text-xs font-bold text-jatayu-dark">03</span>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 bg-jatayu-primary/80 text-white px-3 py-1 rounded text-sm backdrop-blur-sm z-10 border border-white/10">
                  Proprietary Technology
                </div>
              </motion.div>
              
              {/* Technology Description */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <span className="text-jatayu-accent font-semibold">ADVANCED TECHNOLOGY</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">Next-Gen Personal Flight</h2>
                <p className="text-gray-400 mb-8">
                  JATAYU's Human Jet Wings represent the pinnacle of personal flight technology, 
                  combining aerospace-grade propulsion systems with intuitive controls to create 
                  an unparalleled flying experience that's both safe and exhilarating.
                </p>
                
                <motion.div variants={staggerContainer} className="space-y-6">
                  <motion.div variants={fadeIn} className="flex items-start">
                    <div className="bg-jatayu-accent/10 p-3 rounded-full mr-4">
                      <Rocket className="h-6 w-6 text-jatayu-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Micro Thrusters</h3>
                      <p className="text-gray-400 mt-1">
                        Advanced micro jet engines provide unprecedented thrust-to-weight ratio, 
                        enabling vertical takeoff and precise aerial maneuverability.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={fadeIn} className="flex items-start">
                    <div className="bg-jatayu-secondary/10 p-3 rounded-full mr-4">
                      <Shield className="h-6 w-6 text-jatayu-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Safety Systems</h3>
                      <p className="text-gray-400 mt-1">
                        Multiple redundant safety mechanisms include automated stabilization, 
                        emergency landing protocols, and adaptive flight controls.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={fadeIn} className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-full mr-4">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Power Management</h3>
                      <p className="text-gray-400 mt-1">
                        Proprietary fuel cells deliver up to 30 minutes of continuous flight with 
                        real-time energy optimization and rapid refueling capability.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={fadeIn} className="flex items-start">
                    <div className="bg-jatayu-accent/10 p-3 rounded-full mr-4">
                      <Sparkles className="h-6 w-6 text-jatayu-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Neural Interface</h3>
                      <p className="text-gray-400 mt-1">
                        Optional neural control system reads micromovements and intent, 
                        allowing for intuitive flight control that feels like an extension of your body.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Specifications Section */}
        <section className="py-24 bg-gradient-to-b from-jatayu-dark to-black">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                Technical Specifications
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                JATAYU Jet Wings push the boundaries of what's possible in personal flight
                with industry-leading specifications and performance metrics.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Spec Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card p-8 hover-lift"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-white">Performance</h3>
                  <Award className="text-jatayu-accent h-6 w-6" />
                </div>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Max Speed</span>
                    <span className="text-white font-medium">250 km/h</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Max Altitude</span>
                    <span className="text-white font-medium">3,000 meters</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Flight Time</span>
                    <span className="text-white font-medium">30 minutes</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Range</span>
                    <span className="text-white font-medium">80 kilometers</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Acceleration</span>
                    <span className="text-white font-medium">0-100 km/h in 4.2s</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* Spec Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-8 hover-lift"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-white">Physical</h3>
                  <Shield className="text-jatayu-secondary h-6 w-6" />
                </div>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Weight</span>
                    <span className="text-white font-medium">24.5 kg</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Wingspan</span>
                    <span className="text-white font-medium">2.4 meters</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Max User Weight</span>
                    <span className="text-white font-medium">120 kg</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Materials</span>
                    <span className="text-white font-medium">Carbon Fiber Composite</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Folded Dimensions</span>
                    <span className="text-white font-medium">80 × 60 × 40 cm</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* Spec Card 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="glass-card p-8 hover-lift md:col-span-2 lg:col-span-1"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-white">Technology</h3>
                  <Zap className="text-white h-6 w-6" />
                </div>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Engine Type</span>
                    <span className="text-white font-medium">Micro Turbojet × 4</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Fuel Type</span>
                    <span className="text-white font-medium">Synthetic Kerosene</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Control System</span>
                    <span className="text-white font-medium">AI-assisted Neural</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Safety Systems</span>
                    <span className="text-white font-medium">Triple Redundant</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Noise Level</span>
                    <span className="text-white font-medium">85 dB at 10m</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            
            <div className="mt-16 text-center">
              <Button className="bg-jatayu-accent hover:bg-jatayu-accent/90 text-white py-6 px-10 text-lg inline-flex items-center gap-2">
                Download Full Specifications
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,#1C77C3_0%,transparent_50%)] opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,#FF6B35_0%,transparent_50%)] opacity-20"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-1 bg-jatayu-accent/20 border border-jatayu-accent/30 rounded-full text-sm text-jatayu-accent mb-6">
                Limited Production Run
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Experience Flight Like Never Before
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Join the exclusive group of pioneers who will be the first to experience 
                true personal flight with JATAYU's revolutionary Human Jet Wings.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button className="bg-jatayu-accent hover:bg-jatayu-accent/90 text-white py-6 px-8 text-lg inline-flex items-center gap-2">
                  Reserve Your Wings
                  <Rocket className="h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 py-6 px-8 text-lg">
                  Schedule Test Flight
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HumanJetWings;
