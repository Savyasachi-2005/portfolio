import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { Footer } from '@/components/ui/footer-section';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import { Home as HomeIcon, User, Wrench, FolderKanban, Mail, FileText } from 'lucide-react';

const navItems = [
  { name: 'Home', url: '/', icon: HomeIcon },
  { name: 'About', url: '/about', icon: User },
  { name: 'Skills', url: '/skills', icon: Wrench },
  { name: 'Projects', url: '/projects', icon: FolderKanban },
  { name: 'Contact', url: '/contact', icon: Mail },
  { name: 'Resume', url: '/resume', icon: FileText },
];

function AppShell() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <div className={`flex flex-col min-h-screen w-full ${!isHome ? 'with-dots' : ''} relative`}>
      {!isHome && <div className="animated-orb" aria-hidden="true" />}
      <NavBar items={navItems} />
      <main className="flex-grow w-full overflow-x-hidden pt-4 sm:pt-20 pb-20 sm:pb-0">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App
