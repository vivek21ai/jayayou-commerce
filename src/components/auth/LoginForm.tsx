
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

interface LoginFormProps {
  onSwitchToSignup: () => void;
}

const LoginForm = ({ onSwitchToSignup }: LoginFormProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    try {
      // Mock successful login
      setTimeout(() => {
        toast({
          title: "Success",
          description: "You have successfully logged in",
        });
        
        navigate('/');
      }, 1500);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to login. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    setIsLoading(true);
    
    // Simulate social login
    setTimeout(() => {
      toast({
        title: "Success",
        description: `You have successfully logged in with ${provider}`,
      });
      
      navigate('/');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login to Your Account</CardTitle>
        <CardDescription>Enter your credentials to access your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Button
                type="button"
                variant="link"
                className="px-0 text-xs text-jatayu-secondary hover:text-jatayu-primary"
              >
                Forgot Password?
              </Button>
            </div>
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
          <Button 
            type="submit" 
            className="w-full bg-jatayu-primary hover:bg-jatayu-primary/90"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => handleSocialLogin('Google')}
            disabled={isLoading}
            className="flex items-center justify-center"
          >
            <FaGoogle className="mr-2" />
            Google
          </Button>
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => handleSocialLogin('Facebook')}
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
          Don't have an account?{" "}
          <Button 
            variant="link" 
            onClick={onSwitchToSignup} 
            className="p-0 text-jatayu-secondary hover:text-jatayu-primary"
          >
            Sign up
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
