
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
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
        description: "Thank you for subscribing to our newsletter!",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-jatayu-light">
      <div className="container mx-auto px-6">
        <div className="bg-jatayu-primary rounded-xl p-8 md:p-12 shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Updated with JATAYU
            </h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter to receive updates on new products, aerospace innovations, 
              and exclusive insights from our engineering team.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded bg-white/10 text-white border-white/20 placeholder:text-gray-400 focus-visible:ring-jatayu-accent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                className="bg-jatayu-accent hover:bg-jatayu-accent/90 text-white font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
