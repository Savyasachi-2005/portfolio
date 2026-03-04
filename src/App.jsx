import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F2937]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
        <footer className="py-10 text-center text-xs text-[#6B7280] bg-white border-t border-[#E5E7EB]">
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
