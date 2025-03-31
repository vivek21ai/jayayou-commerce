
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthTabs from '@/components/auth/AuthTabs';

const Auth = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-jatayu-dark text-white">
      <Header />
      <main className="flex-grow relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(28,119,195,0.15),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,107,53,0.15),transparent_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto"
          >
            <h1 className="text-3xl font-bold text-center mb-8 text-gradient">
              Welcome to JATAYU
            </h1>
            <div className="glass-card p-8 hover-lift">
              <AuthTabs />
            </div>
            
            <div className="mt-12 relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-jatayu-accent to-jatayu-secondary opacity-30 blur-xl"></div>
              <div className="relative glass-card p-6 text-center">
                <p className="text-gray-300 mb-3">Experience the future of propulsion technology</p>
                <div className="inline-block relative">
                  <div className="absolute inset-0 bg-jatayu-accent blur-md opacity-20"></div>
                  <button 
                    onClick={() => navigate('/')}
                    className="relative bg-gradient-to-r from-jatayu-accent/80 to-jatayu-accent px-6 py-2 rounded-md font-medium"
                  >
                    Explore Technologies
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
