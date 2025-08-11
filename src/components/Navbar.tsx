import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { NavLink } from '../types';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const navLinks: NavLink[] = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Skills', path: '/skills' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact', path: '/contact' },
    { title: 'Resume', path: '/resume' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-colors duration-300 border-b ${
        scrolled ? 'bg-cyber-darker/95 backdrop-blur-md border-pro-steel/60 shadow-md' : 'bg-transparent border-transparent'
      }`}
    >
      {/* Mirror/Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent backdrop-blur-md border-b border-white/10"></div>
      
      <nav className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-4 relative z-10">
        <div className="flex items-center justify-between w-full">
          <Link to="/" className="flex items-center">
            <span className="font-orbitron text-xl md:text-2xl font-semibold text-cyber-blue tracking-wide">
              Abhisek<span className="text-cyber-neon">.dev</span>
            </span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
      <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
        className={`relative px-1 py-2 text-sm font-medium tracking-wide transition-colors ${
                  location.pathname === link.path 
                    ? 'text-cyber-blue' 
                    : 'text-gray-300 hover:text-cyber-blue'
                }`}
              >
                {link.title}
                {location.pathname === link.path && (
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber-blue" 
                    layoutId="navbar-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            className="md:hidden bg-cyber-darker/95 backdrop-blur-md rounded-xl mt-4 shadow-lg border border-pro-steel/60"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col space-y-3 px-4 py-5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'bg-pro-steel/70 text-cyber-blue border border-cyber-blue/30'
                      : 'text-gray-300 hover:bg-pro-steel/60 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
