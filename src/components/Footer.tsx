import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cyber-darker py-8 mt-16 w-full">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Logo and tagline */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <span className="font-orbitron text-xl font-bold text-cyber-blue">
                Abhisek<span className="text-cyber-neon">.dev</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400">
              Your friendly neighborhood developer
            </p>
          </div>
          
          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-cyber-blue transition-colors">About</Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-gray-400 hover:text-cyber-blue transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/skills" className="text-sm text-gray-400 hover:text-cyber-blue transition-colors">Skills</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-cyber-blue transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Social links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Savyasachi-2005" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-cyber-blue transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/abhishek-hiremath-3020692a3" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-cyber-blue transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:abhishekhiremath0424@gmail.com" 
                className="text-gray-400 hover:text-cyber-blue transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>© {currentYear} Abhisek Hiremath. All rights reserved.</p>
          <p className="mt-1">
            <span className="font-orbitron">Noctabyte</span> | <span className="font-orbitron">Savya</span> | <span className="font-orbitron">Savyasachi</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
