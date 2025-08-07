import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-20 overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cyber-dark">
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-10" style={{ 
            backgroundImage: `linear-gradient(to right, #38bdf8 1px, transparent 1px), 
                              linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
          
          {/* Glowing orbs */}
          <div className="absolute left-1/4 top-1/4 w-64 h-64 rounded-full bg-cyber-blue opacity-20 blur-3xl animate-pulse-slow"></div>
          <div className="absolute right-1/4 bottom-1/4 w-64 h-64 rounded-full bg-cyber-purple opacity-20 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="w-full relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-cyber-blue font-orbitron text-lg md:text-xl mb-3">Hello, World! I'm</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-orbitron text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Abhisek Hiremath
          </motion.h1>
          
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-gray-400 text-lg md:text-xl font-medium">
              Also known as <span className="text-cyber-blue font-orbitron">Savya</span>, <span className="text-cyber-neon font-orbitron">Noctabyte</span>, <span className="text-cyber-purple font-orbitron">Savyasachi</span>
            </span>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Your friendly neighborhood developer
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              to="/resume"
              className="px-6 py-3 rounded-md bg-cyber-blue hover:bg-cyber-blue/80 text-white font-medium transition-all duration-300 w-full sm:w-auto text-center animate-glow glow-border"
            >
              View Resume
            </Link>
            <Link 
              to="/contact"
              className="px-6 py-3 rounded-md bg-transparent border border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 font-medium transition-all duration-300 w-full sm:w-auto text-center"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
