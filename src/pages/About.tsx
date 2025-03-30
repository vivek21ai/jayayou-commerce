
import { Briefcase, Users, Award, Rocket } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-jatayu-primary text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About JATAYU</h1>
              <p className="text-xl text-gray-200 mb-8">
                Pioneering the future of aviation with cutting-edge jet engine technology and 
                revolutionary human flight solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-jatayu-primary mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At JATAYU, our mission is to revolutionize the aerospace industry by making 
                  advanced propulsion technology more accessible while pushing the boundaries 
                  of human flight capabilities. We're committed to developing innovative, reliable, 
                  and efficient jet engine solutions for a diverse range of applications.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Through continuous research and development, we aim to break technological barriers 
                  and democratize access to cutting-edge aviation technology, from military applications 
                  to individual flight systems.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-jatayu-primary mb-6">Our Vision</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We envision a future where human flight is not restricted to conventional aircraft but 
                  becomes a personal ability through our revolutionary human jet wing technology. We see 
                  a world where our advanced propulsion systems power everything from defense platforms to 
                  personal transportation.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  JATAYU strives to be at the forefront of this aviation revolution, setting new standards 
                  for efficiency, reliability, and innovation in jet engine technology while maintaining the 
                  highest safety standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-jatayu-primary mb-10 text-center">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Founded in 2010 by a team of aerospace engineers and aviation enthusiasts, JATAYU 
                  began with a simple prototype in a small workshop. Our founders, disillusioned by the 
                  inaccessibility of advanced aviation technology, set out to create jet engines that 
                  were more efficient, cost-effective, and adaptable.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The breakthrough came in 2015 with our patented turbojet design that reduced fuel 
                  consumption by 30% while maintaining optimal thrust. This innovation quickly caught 
                  the attention of military contractors and aviation enthusiasts alike.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  By 2018, we had expanded into military-grade propulsion systems and began research 
                  on what would become our most ambitious project: the human jet wing system. Today, 
                  JATAYU stands as a leader in innovative propulsion technology, with a diverse product 
                  range serving both specialized military applications and civilian aviation enthusiasts.
                </p>
              </div>
              <div className="relative">
                <div 
                  className="rounded-lg overflow-hidden shadow-xl"
                  style={{ height: '400px' }}
                >
                  <img 
                    src="/about-story.jpg" 
                    alt="JATAYU Workshop" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg">
                  <p className="text-jatayu-primary font-bold">Est. 2010</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-jatayu-primary mb-10 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm transition-transform hover:-translate-y-1 duration-300">
                <div className="bg-jatayu-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Rocket className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-jatayu-primary mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Continuously pushing the boundaries of what's possible in aerospace technology.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm transition-transform hover:-translate-y-1 duration-300">
                <div className="bg-jatayu-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-jatayu-primary mb-2">Excellence</h3>
                <p className="text-gray-600">
                  Committed to the highest standards of quality, safety, and performance in everything we create.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm transition-transform hover:-translate-y-1 duration-300">
                <div className="bg-jatayu-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-jatayu-primary mb-2">Integrity</h3>
                <p className="text-gray-600">
                  Operating with transparency, honesty, and ethical principles in all our business dealings.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm transition-transform hover:-translate-y-1 duration-300">
                <div className="bg-jatayu-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-jatayu-primary mb-2">Collaboration</h3>
                <p className="text-gray-600">
                  Fostering partnerships with customers, researchers, and industry experts to drive innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-jatayu-primary mb-10 text-center">Leadership Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-64 bg-gray-200">
                  <img 
                    src="/team-1.jpg" 
                    alt="Dr. Robert Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-jatayu-primary">Dr. Robert Chen</h3>
                  <p className="text-jatayu-secondary mb-4">Founder & CEO</p>
                  <p className="text-gray-600 text-sm">
                    Former aeronautical engineer at NASA with 20+ years of experience in propulsion systems.
                  </p>
                </div>
              </div>
              
              {/* Team Member 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-64 bg-gray-200">
                  <img 
                    src="/team-2.jpg" 
                    alt="Dr. Sarah Rodriguez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-jatayu-primary">Dr. Sarah Rodriguez</h3>
                  <p className="text-jatayu-secondary mb-4">CTO & Head of R&D</p>
                  <p className="text-gray-600 text-sm">
                    Leading expert in fluid dynamics and combustion technology with multiple patents.
                  </p>
                </div>
              </div>
              
              {/* Team Member 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-64 bg-gray-200">
                  <img 
                    src="/team-3.jpg" 
                    alt="Col. James Wilson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-jatayu-primary">Col. James Wilson (Ret.)</h3>
                  <p className="text-jatayu-secondary mb-4">Director of Military Division</p>
                  <p className="text-gray-600 text-sm">
                    Former Air Force officer with extensive experience in military aviation technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
