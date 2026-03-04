import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'tech', label: 'Tech Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    document.documentElement.classList.add('scroll-smooth')
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm border-b border-[#E5E7EB]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" onClick={(e) => handleClick(e, 'home')} className="font-semibold tracking-tight text-[#1F2937] text-lg">
          Abhishek Hiremath
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleClick(e, link.id)}
              className="text-sm text-[#1F2937]/80 hover:text-[#1F2937] relative group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#6C63FF] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
