import { useEffect } from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import BackgroundFX from '../components/BackgroundFX';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: 'Backend Development',
      description: 'Building robust and scalable server-side applications with FastAPI and Flask.',
      icon: '🖥️'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Developing intelligent solutions using cutting-edge AI and ML techniques.',
      icon: '🧠'
    },
    {
      title: 'DSA in Java',
      description: 'Solving complex data structures and algorithms problems while maintaining a consistent problem-solving streak.',
      icon: '📊'
    }
  ];

  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundFX 
        variant="grid" 
        intensity="medium" 
        fadeTop={false}
        className="opacity-90"
      />
      <main className="flex flex-col min-h-screen">
        <Hero />
        
        {/* What I Do section */}
        <section className="w-full flex-grow py-8 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 font-orbitron text-center text-theme-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What I <span className="text-theme-accent">Do</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative p-6 text-left border border-theme-accent/10 rounded-lg backdrop-blur-sm hover:border-theme-accent/30 hover:bg-theme-accent/5 transition-colors duration-300"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-theme-text tracking-wide">{service.title}</h3>
                <p className="text-theme-text-alt text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </main>
    </motion.div>
  );
};

export default Home;
