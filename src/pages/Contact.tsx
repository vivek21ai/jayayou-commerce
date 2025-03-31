
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  Send, 
  MessageSquare, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data: any) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast({
        title: "Message Sent",
        description: "We've received your message and will contact you soon.",
      });
      
      reset();
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  // Animations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-jatayu-dark text-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-jatayu-primary/20 to-jatayu-dark"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(28,119,195,0.15),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,107,53,0.15),transparent_70%)]"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-jatayu-accent">
                Get In Touch
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Have questions about our propulsion technologies? Our team is ready to assist you.
                Fill out the form below, and we'll get back to you promptly.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-16 relative">
          <div className="absolute inset-0 z-0 opacity-50">
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-jatayu-secondary/5 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Information */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="lg:col-span-2"
              >
                <div className="bg-black/30 backdrop-blur-sm border border-white/10 p-8 rounded-lg h-full">
                  <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
                  
                  <motion.div variants={fadeIn} className="space-y-8">
                    <div className="flex items-start">
                      <div className="bg-jatayu-accent/10 p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-jatayu-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Headquarters</h3>
                        <p className="text-gray-400 mt-1">
                          1234 Innovation Drive<br />
                          Silicon Valley, CA 94043
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-jatayu-secondary/10 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-jatayu-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Phone</h3>
                        <p className="text-gray-400 mt-1">
                          +1 (555) 123-4567<br />
                          Monday-Friday, 9AM-6PM PST
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-white/10 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Email</h3>
                        <p className="text-gray-400 mt-1">
                          info@jatayu.com<br />
                          support@jatayu.com
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-jatayu-accent/10 p-3 rounded-full mr-4">
                        <Globe className="h-6 w-6 text-jatayu-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Global Offices</h3>
                        <p className="text-gray-400 mt-1">
                          Tokyo • Berlin • Singapore<br />
                          São Paulo • Dubai
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <div className="mt-12 pt-8 border-t border-white/10">
                    <h3 className="font-semibold text-white mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-300">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a href="#" className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-300">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </a>
                      <a href="#" className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-300">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a href="#" className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-300">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="lg:col-span-3"
              >
                <div className="bg-black/30 backdrop-blur-sm border border-white/10 p-8 rounded-lg h-full relative overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-jatayu-accent/20 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-jatayu-secondary/20 rounded-full blur-3xl"></div>
                  
                  <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                    <MessageSquare className="mr-2 h-6 w-6 text-jatayu-accent" />
                    Send Us a Message
                  </h2>
                  
                  {isSuccess ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-gray-400 max-w-md">
                        Thank you for reaching out. Our team will review your message and get back to you shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
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
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Your email address"
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
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                        <Input
                          id="subject"
                          placeholder="What is your message about?"
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                          {...register("subject", { required: "Subject is required" })}
                        />
                        {errors.subject && (
                          <p className="text-red-500 text-xs mt-1">{errors.subject.message as string}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
                        <Textarea
                          id="message"
                          placeholder="Please describe how we can help you"
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 min-h-[150px]"
                          {...register("message", { required: "Message is required" })}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-xs mt-1">{errors.message.message as string}</p>
                        )}
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="privacy"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-jatayu-accent focus:ring-jatayu-accent/30"
                            {...register("privacy", { required: "You must agree to our privacy policy" })}
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="privacy" className="text-gray-300">
                            I agree to the <a href="#" className="text-jatayu-accent hover:underline">privacy policy</a> and consent to being contacted regarding my inquiry.
                          </label>
                          {errors.privacy && (
                            <p className="text-red-500 text-xs mt-1">{errors.privacy.message as string}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button 
                          type="submit" 
                          className="bg-jatayu-accent hover:bg-jatayu-accent/90 text-white px-8 py-6 text-lg w-full sm:w-auto flex items-center justify-center gap-2"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send size={18} />
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="overflow-hidden rounded-lg border border-white/10">
              <div className="relative h-[400px] w-full">
                <div className="absolute inset-0 bg-jatayu-dark/50 z-10 flex items-center justify-center">
                  <div className="text-center p-8 bg-black/60 backdrop-blur-sm rounded-lg border border-white/10 max-w-md">
                    <h3 className="text-xl font-bold text-white mb-2">Visit Our Headquarters</h3>
                    <p className="text-gray-400 mb-4">
                      Experience our cutting-edge technology in person. 
                      Schedule a visit to our Silicon Valley headquarters.
                    </p>
                    <Button className="bg-jatayu-secondary hover:bg-jatayu-secondary/90">
                      Schedule a Visit
                    </Button>
                  </div>
                </div>
                <img 
                  src="/satellite-map.jpg" 
                  alt="JATAYU Headquarters Location" 
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-t from-jatayu-dark to-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
              <p className="text-gray-400 mt-2">Find quick answers to common questions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-2 text-lg">How quickly can I expect a response?</h3>
                <p className="text-gray-400">
                  Our team typically responds to all inquiries within 24-48 business hours. 
                  For urgent matters, please call our customer service line.
                </p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-2 text-lg">Do you offer technical support?</h3>
                <p className="text-gray-400">
                  Yes, we provide comprehensive technical support for all our products. 
                  You can reach our support team via email or phone.
                </p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-2 text-lg">Can I request a product demonstration?</h3>
                <p className="text-gray-400">
                  Absolutely! We offer both virtual and in-person demonstrations of our 
                  propulsion systems. Please specify your preferences in your inquiry.
                </p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-2 text-lg">How can I become a distributor?</h3>
                <p className="text-gray-400">
                  Please contact our business development team directly at partners@jatayu.com 
                  with your company details and distribution capabilities.
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

export default Contact;
