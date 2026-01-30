import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
  <section className="relative w-full flex items-center py-16 sm:py-20 md:py-24 overflow-hidden px-4 sm:px-6 md:px-12">
    <div className="w-full relative z-10">
        <div className="text-center md:text-left w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-theme-accent font-orbitron text-base sm:text-lg md:text-xl mb-2 sm:mb-3">Hello, World! I'm</span>
          </motion.div>
          
          <motion.h1 
            className="gradient-text font-orbitron font-bold mb-4 sm:mb-5 tracking-tight leading-[1.08] text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center md:text-left w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Abhishek Hiremath
          </motion.h1>
          
          <motion.div
            className="mb-5 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-theme-text-alt text-xs sm:text-sm md:text-base lg:text-xl font-medium block text-center md:text-left w-full">
              Also known as 
              <span className="inline-flex flex-wrap justify-center md:justify-start gap-x-1.5 sm:gap-x-2 gap-y-1 ml-1">
                <span className="text-theme-accent font-orbitron text-xs sm:text-sm md:text-base lg:text-xl">Savya</span>
                <span className="text-theme-accent-alt font-orbitron text-xs sm:text-sm md:text-base lg:text-xl">Noctabyte</span>
                <span className="text-theme-accent font-orbitron opacity-80 text-xs sm:text-sm md:text-base lg:text-xl">Savyasachi</span>
              </span>
            </span>
          </motion.div>
          
          <motion.p 
            className="text-xs sm:text-sm md:text-base lg:text-xl text-gray-300 w-full md:max-w-3xl mx-auto md:mx-0 mb-6 sm:mb-8 md:mb-10 px-0 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Your friendly neighborhood developer
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3 sm:gap-4 md:gap-5 w-full text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              to="/resume"
              className="btn-shimmer px-4 sm:px-5 py-2.5 sm:py-3 rounded-md bg-accent hover:brightness-110 text-white font-medium transition-all duration-300 w-full sm:w-auto text-center text-xs sm:text-sm md:text-base shadow-accent-glow sm:min-w-[150px] md:min-w-[170px]"
            >
              View Resume
            </Link>
            <Link 
              to="/contact"
              className="btn-shimmer px-4 sm:px-5 py-2.5 sm:py-3 rounded-md bg-transparent border border-accent text-accent hover:bg-accent-soft font-medium transition-all duration-300 w-full sm:w-auto text-center text-xs sm:text-sm md:text-base sm:min-w-[150px] md:min-w-[170px]"
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
