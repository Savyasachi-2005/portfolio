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
      description: 'Building robust and scalable server-side applications with FastAPI and Flask.'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Developing intelligent solutions using cutting-edge AI and ML techniques.'
    },
    {
      title: 'DSA in Java',
      description: 'Solving complex data structures and algorithms problems while maintaining a consistent problem-solving streak.'
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
        <section className="w-full flex-grow py-6 sm:py-8 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 font-orbitron text-center text-theme-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What I <span className="text-theme-accent">Do</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative p-4 sm:p-5 md:p-6 text-left border border-theme-accent/10 rounded-lg backdrop-blur-sm hover:border-theme-accent/30 hover:bg-theme-accent/5 transition-colors duration-300"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-theme-text tracking-wide">{service.title}</h3>
                <p className="text-theme-text-alt text-xs sm:text-sm leading-relaxed">{service.description}</p>
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
