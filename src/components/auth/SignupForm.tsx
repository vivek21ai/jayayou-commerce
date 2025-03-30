
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/components/ui/use-toast';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

interface SignupFormProps {
  onSwitchToLogin: () => void;
}

const SignupForm = ({ onSwitchToLogin }: SignupFormProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'individual',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUserTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, userType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    try {
      // Mock successful registration
      setTimeout(() => {
        toast({
          title: "Success",
          description: "Your account has been created successfully",
        });
        
        navigate('/');
      }, 1500);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignup = (provider: string) => {
    setIsLoading(true);
    
    // Simulate social signup
    setTimeout(() => {
      toast({
        title: "Success",
        description: `You have successfully signed up with ${provider}`,
      });
      
      navigate('/');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create an Account</CardTitle>
        <CardDescription>Sign up to access exclusive products and features</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label>User Type</Label>
            <RadioGroup 
              value={formData.userType} 
              onValueChange={handleUserTypeChange}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="individual" id="individual" />
                <Label htmlFor="individual">Individual</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="vendor" id="vendor" />
                <Label htmlFor="vendor">Vendor</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="military" id="military" />
                <Label htmlFor="military">Military</Label>
              </div>
            </RadioGroup>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-jatayu-primary hover:bg-jatayu-primary/90"
            disabled={isLoading}
          >
            {isLoading ? "Creating account..." : "Sign Up"}
          </Button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or sign up with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => handleSocialSignup('Google')}
            disabled={isLoading}
            className="flex items-center justify-center"
          >
            <FaGoogle className="mr-2" />
            Google
          </Button>
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => handleSocialSignup('Facebook')}
            disabled={isLoading}
            className="flex items-center justify-center"
          >
            <FaFacebook className="mr-2" />
            Facebook
          </Button>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Button 
            variant="link" 
            onClick={onSwitchToLogin} 
            className="p-0 text-jatayu-secondary hover:text-jatayu-primary"
          >
            Login
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignupForm;
