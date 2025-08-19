import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
  <section className="relative min-h-[calc(100vh-120px)] sm:min-h-[calc(100vh-140px)] w-full flex items-center py-10 md:py-16 overflow-hidden px-4 sm:px-6 md:px-12">

  <div className="w-full relative z-10">
        <div className="text-center md:text-left w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-cyber-blue font-orbitron text-lg md:text-xl mb-3">Hello, World! I'm</span>
          </motion.div>
          
          <motion.h1 
            className="gradient-text font-orbitron font-bold mb-5 tracking-tight leading-[1.08] text-4xl sm:text-5xl md:text-7xl text-center md:text-left w-full"
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
            <span className="text-gray-400 text-sm sm:text-base md:text-xl font-medium block text-center md:text-left w-full">
              Also known as 
              <span className="inline-flex flex-wrap justify-center md:justify-start gap-x-2 gap-y-1 ml-1">
                <span className="text-cyber-blue font-orbitron">Savya</span>
                <span className="text-cyber-neon font-orbitron">Noctabyte</span>
                <span className="text-cyber-purple font-orbitron">Savyasachi</span>
              </span>
            </span>
          </motion.div>
          
          <motion.p 
            className="text-sm sm:text-base md:text-xl text-gray-300 w-full md:max-w-3xl mx-auto md:mx-0 mb-9 md:mb-10 px-0 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Your friendly neighborhood developer
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row items-stretch md:items-center justify-center md:justify-start gap-3 md:gap-5 w-full text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              to="/resume"
              className="btn-shimmer px-5 py-3 rounded-md bg-cyber-blue hover:bg-cyber-blue/80 text-white font-medium transition-all duration-300 w-full md:w-auto text-center text-sm sm:text-base shadow-[0_0_0_1px_rgba(56,189,248,0.4)] md:min-w-[170px]"
            >
              View Resume
            </Link>
            <Link 
              to="/contact"
              className="btn-shimmer px-5 py-3 rounded-md bg-transparent border border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 font-medium transition-all duration-300 w-full md:w-auto text-center text-sm sm:text-base md:min-w-[170px]"
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
