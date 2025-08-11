import { useEffect } from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      
      {/* Optional additional content */}
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
