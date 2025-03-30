
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthTabs from '@/components/auth/AuthTabs';

const Auth = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-center text-jatayu-primary mb-8">
              Welcome to JATAYU
            </h1>
            <AuthTabs />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
