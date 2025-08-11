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
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md/80 bg-[#0f172aee] shadow-[0_2px_12px_-4px_rgba(0,0,0,0.55)] border-b border-cyber-blue/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-3 md:py-4 relative">
        <div className="flex items-center justify-between w-full gap-6">
          <Link to="/" className="flex items-center group">
            <span className="gradient-text bg-clip-text font-orbitron text-lg md:text-xl font-semibold tracking-wide select-none">
              Abhishek<span className="text-cyber-neon">.dev</span>
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
          <div className="hidden md:flex md:items-center md:space-x-7">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-1 py-2 text-[13px] font-medium tracking-wide transition-colors after:absolute after:left-0 after:bottom-1 after:h-[2px] after:rounded-full after:bg-cyber-blue/70 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                    active ? 'text-cyber-blue after:w-full' : 'text-gray-300 hover:text-cyber-blue'
                  }`}
                >
                  {link.title}
                  {active && (
                    <motion.span
                      layoutId="navbar-indicator-glow"
                      className="absolute inset-x-0 -bottom-[6px] mx-auto h-[6px] w-6 rounded-full bg-cyber-blue/0 shadow-[0_0_12px_2px_rgba(56,189,248,0.45)] pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-3 rounded-xl border border-cyber-blue/20 bg-[#0f172add] backdrop-blur-xl shadow-[0_4px_28px_-8px_rgba(0,0,0,0.65)] overflow-hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col py-3">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-5 py-3 text-sm font-medium tracking-wide transition-colors ${
                        active
                          ? 'text-cyber-blue bg-cyber-blue/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
