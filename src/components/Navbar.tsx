import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { NavLink } from '../types';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  
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
          ? 'backdrop-blur-md/80 border-b shadow-[0_2px_12px_-4px_rgba(0,0,0,0.35)]'
          : 'border-b border-transparent'
      }`}
      style={scrolled ? { background: 'rgba(0,0,0,0.10)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderColor: 'var(--border-subtle)' } : undefined}
    >
      <nav className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-3 md:py-4 relative">
        <div className="flex items-center justify-between w-full gap-6">
          <Link to="/" className="flex items-center group">
            <span className="gradient-text bg-clip-text font-orbitron text-lg md:text-xl font-semibold tracking-wide select-none">
              Abhishek<span className="text-theme-accent"></span>
            </span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-theme-text focus:outline-none"
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
                  className={`relative px-1 py-2 text-[13px] font-medium tracking-wide transition-colors after:absolute after:left-0 after:bottom-1 after:h-[2px] after:rounded-full after:bg-theme-accent/70 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                    active ? 'text-[var(--accent)] after:w-full' : 'text-[var(--text-secondary)] hover:text-[var(--accent)]'
                  }`}
                  style={{ color: active ? 'var(--accent)' : undefined }}
                >
                  {link.title}
                  {active && (
                    <motion.span
                      layoutId="navbar-indicator-glow"
                      className="absolute inset-x-0 -bottom-[6px] mx-auto h-[6px] w-6 rounded-full bg-transparent"
                      style={{ boxShadow: '0 0 12px 2px color-mix(in srgb, var(--accent) 55%, transparent)' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="relative text-sm px-3 py-2 rounded-md border border-transparent transition-colors focus:outline-none focus-visible:ring-2"
              style={{ borderColor: 'transparent', color: 'var(--accent)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'transparent'; }}
            >
              <span className="text-lg" role="img" aria-hidden="true">{theme === 'cyber' ? '⚡' : '☕'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-3 rounded-xl border backdrop-blur-xl shadow-[0_4px_28px_-8px_rgba(0,0,0,0.35)] overflow-hidden"
            style={{ background:'color-mix(in srgb, var(--bg-body) 85%, transparent)', borderColor:'var(--border-subtle)' }}
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
                      className={`block px-5 py-3 text-sm font-medium tracking-wide transition-colors ${active ? '' : ''}`}
                      style={active ? { color:'var(--accent)', background:'color-mix(in srgb, var(--accent) 12%, transparent)' } : { color:'var(--text-secondary)' }}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
              <li className="px-5 pt-2 pb-1">
                <button
                  onClick={() => { toggleTheme(); setIsOpen(false); }}
                  className="w-full flex items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium transition-colors"
                  style={{ color:'var(--accent)', border:'1px solid var(--accent)', background:'color-mix(in srgb, var(--accent) 14%, transparent)' }}
                >
                  <span className="text-base" role="img" aria-hidden="true">{theme === 'cyber' ? '☕' : '⚡'}</span>
                  {theme === 'cyber' ? 'Pro' : 'Cyber'} Mode
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
