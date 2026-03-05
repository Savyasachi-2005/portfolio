import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'
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
        <footer className="py-10 text-center text-xs text-[#6B7280]">
          © {new Date().getFullYear()} Abhishek Hiremath (Savyasachi). Built with React, Tailwind, and Framer Motion.
          <div className="mt-2 flex items-center justify-center gap-4">
            <a href="https://github.com/Savyasachi-2005" target="_blank" rel="noreferrer" className="hover:text-[#6C63FF] transition">GitHub</a>
            <a href="https://www.linkedin.com/in/abhishek-hiremath-3020692a3" target="_blank" rel="noreferrer" className="hover:text-[#6C63FF] transition">LinkedIn</a>
            <a href="mailto:abhishekhiremath0424@gmail.com" className="hover:text-[#6C63FF] transition">Email</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
