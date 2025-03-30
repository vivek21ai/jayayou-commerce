
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="max-w-md w-full mx-auto">
      <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm onSwitchToSignup={() => setActiveTab("signup")} />
        </TabsContent>
        <TabsContent value="signup">
          <SignupForm onSwitchToLogin={() => setActiveTab("login")} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthTabs;
