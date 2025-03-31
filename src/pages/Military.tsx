
import { useState } from 'react';
import { ArrowRight, Shield, Zap, Lock, FileCheck, Activity, Helicopter, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Military = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Inquiry Submitted",
      description: "Your inquiry has been received. Our team will contact you shortly.",
    });
    reset();
  };

  return (
    <div className="flex flex-col min-h-screen bg-jatayu-dark text-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-jatayu-dark z-10"></div>
          <div 
            className="h-[70vh] bg-cover bg-center" 
            style={{ backgroundImage: 'url(/military-jet-hero.jpg)' }}
          >
            <div className="absolute inset-0 bg-black/60 z-0"></div>
            <div className="container mx-auto px-6 py-24 h-full flex items-center relative z-20">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-jatayu-accent">
                  Advanced Military <br />Propulsion Systems
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                  Cutting-edge jet engines and propulsion solutions designed specifically for defense applications.
                  Trusted by military agencies worldwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-jatayu-accent hover:bg-jatayu-accent/90 text-white py-6 px-8 text-lg flex items-center gap-2"
                    onClick={() => setIsVerifying(true)}
                  >
                    Verify Military Status 
                    <Lock size={18} />
                  </Button>
                  <Button 
                    variant="outline" 
                    asChild
                    className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 py-6 px-8 text-lg"
                  >
                    <a href="#solutions">
                      Explore Solutions
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Notice */}
        <section className="py-8 bg-jatayu-primary/60 border-y border-white/10">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-3 text-center">
              <Lock className="text-jatayu-accent" size={24} />
              <p className="text-gray-300">
                <span className="font-semibold text-white">RESTRICTED ACCESS:</span> Some information on this page is classified and requires military credentials to access.
              </p>
            </div>
          </div>
        </section>

        {/* Key Solutions Section */}
        <section id="solutions" className="py-20 bg-gradient-to-b from-jatayu-dark to-jatayu-primary/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Military-Grade Propulsion Solutions
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                JATAYU provides advanced jet engine systems for various defense applications, 
                from tactical aircraft to unmanned aerial vehicles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solution 1 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-jatayu-accent/20 to-jatayu-secondary/20 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 p-8 rounded-lg h-full flex flex-col transition-transform hover:-translate-y-1 duration-300">
                  <div className="bg-jatayu-accent/10 text-jatayu-accent p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                    <Helicopter size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">TJ-9000 Combat Engines</h3>
                  <p className="text-gray-400 mb-4">
                    High-thrust turbojet engines developed for fighter jets and tactical aircraft. 
                    Featuring advanced stealth technology and unmatched power-to-weight ratio.
                  </p>
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <Link to="#" className="inline-flex items-center text-jatayu-accent hover:text-jatayu-accent/80 transition-colors">
                      View Specifications 
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Solution 2 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-jatayu-secondary/20 to-jatayu-primary/20 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 p-8 rounded-lg h-full flex flex-col transition-transform hover:-translate-y-1 duration-300">
                  <div className="bg-jatayu-secondary/10 text-jatayu-secondary p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                    <Activity size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Stealth UAV Propulsion</h3>
                  <p className="text-gray-400 mb-4">
                    Specialized micro-turbine engines for unmanned aerial vehicles with minimal 
                    infrared and acoustic signatures. Ideal for reconnaissance missions.
                  </p>
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <Link to="#" className="inline-flex items-center text-jatayu-secondary hover:text-jatayu-secondary/80 transition-colors">
                      View Specifications 
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Solution 3 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-jatayu-primary/20 to-jatayu-accent/20 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 p-8 rounded-lg h-full flex flex-col transition-transform hover:-translate-y-1 duration-300">
                  <div className="bg-white/10 text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                    <Shield size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Naval Defense Systems</h3>
                  <p className="text-gray-400 mb-4">
                    Marine-grade propulsion systems designed for naval vessels and coastal defense. 
                    Highly resistant to corrosion and extreme environmental conditions.
                  </p>
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <Link to="#" className="inline-flex items-center text-white hover:text-gray-300 transition-colors">
                      View Specifications 
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Specs Section */}
        <section className="py-20 bg-gradient-to-b from-jatayu-primary/20 to-jatayu-dark">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-jatayu-accent font-semibold">ADVANCED TECHNOLOGIES</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">Military-Grade Performance</h2>
                <p className="text-gray-400 mb-8">
                  Our military engines incorporate next-generation technologies that provide superior 
                  performance, reliability, and stealth capabilities for mission-critical operations.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-jatayu-accent/10 p-2 rounded-full mr-4 mt-1">
                      <Zap className="h-5 w-5 text-jatayu-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Stealth Technology</h3>
                      <p className="text-gray-400">
                        Advanced acoustic dampening and infrared signature reduction for minimal detection footprint.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-jatayu-secondary/10 p-2 rounded-full mr-4 mt-1">
                      <Shield className="h-5 w-5 text-jatayu-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Self-Diagnostic Systems</h3>
                      <p className="text-gray-400">
                        On-board AI-powered diagnostics for real-time maintenance prediction and optimal performance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 rounded-full mr-4 mt-1">
                      <FileCheck className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Military Certification</h3>
                      <p className="text-gray-400">
                        All systems certified to meet or exceed NATO standards for military equipment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-jatayu-accent/20 via-jatayu-secondary/20 to-jatayu-primary/20 rounded-lg blur-xl opacity-30"></div>
                <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
                  <img 
                    src="/military-engine.jpg" 
                    alt="JATAYU Military Engine" 
                    className="w-full h-auto rounded opacity-90"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-jatayu-dark/70 rounded">
                    <Button 
                      variant="outline" 
                      className="border-white/20 bg-black/50 hover:bg-black/70"
                    >
                      View in 3D
                    </Button>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-jatayu-primary/80 text-white px-3 py-1 rounded text-sm backdrop-blur-sm z-10 border border-white/10">
                  Classified Technology
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-jatayu-dark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Defense Collaborations
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                JATAYU has partnered with defense agencies worldwide to develop 
                custom propulsion solutions for specialized military applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Case Study 1 */}
              <div className="relative overflow-hidden group rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-jatayu-primary to-transparent opacity-80 z-10"></div>
                <img 
                  src="/military-case-study-1.jpg" 
                  alt="Military Case Study" 
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-jatayu-accent bg-jatayu-dark/50 backdrop-blur-sm px-3 py-1 rounded-full">Tactical Aircraft</span>
                    <span className="text-xs text-gray-300">CLASSIFIED</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Project Thunderbird</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    Custom high-altitude engines developed for next-generation tactical aircraft, 
                    providing 40% more thrust with 25% less fuel consumption.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-white/20 bg-black/30 hover:bg-black/50"
                  >
                    Request Clearance to View
                  </Button>
                </div>
              </div>
              
              {/* Case Study 2 */}
              <div className="relative overflow-hidden group rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-jatayu-primary to-transparent opacity-80 z-10"></div>
                <img 
                  src="/military-case-study-2.jpg" 
                  alt="Military Case Study" 
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-jatayu-accent bg-jatayu-dark/50 backdrop-blur-sm px-3 py-1 rounded-full">Naval Systems</span>
                    <span className="text-xs text-gray-300">CLASSIFIED</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Maritime Defense Initiative</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    Specialized propulsion systems for naval vessels designed to operate in extreme 
                    conditions with minimal maintenance requirements.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-white/20 bg-black/30 hover:bg-black/50"
                  >
                    Request Clearance to View
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gradient-to-t from-jatayu-dark to-jatayu-primary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Government & Defense Inquiries
                </h2>
                <p className="text-gray-400">
                  For military procurement inquiries or custom development projects, please fill out the form below.
                  Our defense specialists will contact you within 24 hours.
                </p>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message as string}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-1">Organization</label>
                    <Input
                      id="organization"
                      placeholder="Military branch or agency"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                      {...register("organization", { required: "Organization is required" })}
                    />
                    {errors.organization && (
                      <p className="text-red-500 text-xs mt-1">{errors.organization.message as string}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Official Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your official email"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                    <Input
                      id="phone"
                      placeholder="Your contact number"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                      {...register("phone", { required: "Phone number is required" })}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone.message as string}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="inquiry" className="block text-sm font-medium text-gray-300 mb-1">Inquiry Details</label>
                  <Textarea
                    id="inquiry"
                    placeholder="Please describe your requirements or questions"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 min-h-[120px]"
                    {...register("inquiry", { required: "Inquiry details are required" })}
                  />
                  {errors.inquiry && (
                    <p className="text-red-500 text-xs mt-1">{errors.inquiry.message as string}</p>
                  )}
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="confidentiality"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-jatayu-accent focus:ring-jatayu-accent/30"
                      {...register("confidentiality", { required: "You must agree to confidentiality terms" })}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="confidentiality" className="text-gray-300">
                      I understand that this communication is subject to security protocols and confidentiality agreements.
                    </label>
                    {errors.confidentiality && (
                      <p className="text-red-500 text-xs mt-1">{errors.confidentiality.message as string}</p>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-center pt-4">
                  <Button 
                    type="submit" 
                    className="bg-jatayu-accent hover:bg-jatayu-accent/90 text-white px-8 py-6 text-lg flex items-center gap-2"
                  >
                    Submit Secure Inquiry
                    <Send size={18} />
                  </Button>
                </div>
              </form>
              
              <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-center">
                <p className="text-gray-300 text-sm">
                  For immediate assistance or highly classified inquiries, please contact our secure defense line:
                </p>
                <p className="text-white font-medium mt-2">+1 (888) 555-0123 • defense@jatayu-secure.gov</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Military;
