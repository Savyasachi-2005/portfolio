import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
  <section className="relative min-h-[calc(100vh-120px)] sm:min-h-[calc(100vh-140px)] w-full flex items-center justify-center py-10 md:py-16 overflow-hidden px-3 sm:px-6">

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
            className="gradient-text text-[2.3rem] leading-tight sm:text-5xl md:text-6xl lg:text-7xl font-bold font-orbitron mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Abhishek Hiremath
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
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-xl md:max-w-2xl mx-auto mb-8 px-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Your friendly neighborhood developer
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              to="/resume"
              className="btn-shimmer px-5 py-3 rounded-md bg-cyber-blue hover:bg-cyber-blue/80 text-white font-medium transition-all duration-300 w-full sm:w-auto text-center text-sm sm:text-base shadow-[0_0_0_1px_rgba(56,189,248,0.4)]"
            >
              View Resume
            </Link>
            <Link 
              to="/contact"
              className="btn-shimmer px-5 py-3 rounded-md bg-transparent border border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 font-medium transition-all duration-300 w-full sm:w-auto text-center text-sm sm:text-base"
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
