import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import footerLogo from './assets/fevicon/fevi.png'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', toggleVisible)
    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#6C63FF] text-white shadow-lg hover:bg-[#5a53f5] transition-colors"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

function App() {
  return (
    <div className="min-h-screen animated-bg dot-pattern text-[#1F2937] relative">
      {/* Floating background orbs */}
      <div className="floating-orb orb-1" aria-hidden="true" />
      <div className="floating-orb orb-2" aria-hidden="true" />
      <div className="floating-orb orb-3" aria-hidden="true" />
      
      <Navbar />
      <ScrollToTop />
      <main className="relative z-10">
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
        <footer className="py-10">
          <div className="mx-auto flex flex-col items-center justify-center gap-4 px-4">
            <img
              src={footerLogo}
              alt="Abhishek Hiremath logo"
              className="h-10 w-10 object-contain opacity-90"
              loading="lazy"
            />

            <nav aria-label="Footer social links" className="flex items-center justify-center gap-5 text-[#6B7280]">
              <a
                href="https://github.com/Savyasachi-2005"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Abhishek Hiremath on GitHub"
                className="transition duration-300 hover:scale-110 hover:text-[#6C63FF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF] focus-visible:ring-offset-2"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-hiremath-3020692a3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Abhishek Hiremath on LinkedIn"
                className="transition duration-300 hover:scale-110 hover:text-[#6C63FF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF] focus-visible:ring-offset-2"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/abhishek_hiremath__"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Abhishek Hiremath on Instagram"
                className="transition duration-300 hover:scale-110 hover:text-[#6C63FF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF] focus-visible:ring-offset-2"
              >
                <FaInstagram size={18} />
              </a>
            </nav>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
