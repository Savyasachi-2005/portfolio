import { useEffect } from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Global page grid background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Base background */}
        <div className="absolute inset-0 bg-cyber-dark" />
        {/* Grid pattern (enhanced visibility) */}
  <div className="absolute inset-0 opacity-[0.28] md:opacity-[0.22] bg-[linear-gradient(to_right,#38bdf84d_1px,transparent_1px),linear-gradient(to_bottom,#38bdf84d_1px,transparent_1px)] bg-[size:38px_38px]" />
        {/* Radial depth vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_62%,#0f172a_100%)]" />
        {/* Top fade (hero focus) */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-cyber-dark via-cyber-dark/60 to-transparent" />
        {/* Bottom fade for smooth footer transition */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cyber-dark to-transparent" />
      </div>
      <Hero />
      
      {/* Additional content with full-width boxed background */}
  <section className="section w-full bg-cyber-darker/30">
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 font-orbitron"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What I <span className="text-cyber-blue">Do</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
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
            ].map((item, index) => (
              <motion.div
                key={index}
                className="card-base p-6 text-left"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-pro-offwhite tracking-wide">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="section-divider" />
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
