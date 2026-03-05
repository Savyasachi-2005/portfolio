import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import doodleImg from '../assets/hero/doodle.png'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(800px_circle_at_50%_50%,#6C63FF_0%,transparent_60%)]" />
      </div>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="py-16"
        >
          <motion.p className="text-sm text-[#6C63FF] font-medium mb-1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            Hello, World! I'm
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#1F2937] leading-tight tracking-tight"
            style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
          >
            Abhishek Hiremath
          </motion.h1>
          <motion.p
            className="mt-2 text-sm text-[#6B7280]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6 }}
          >
            Also known as{' '}
            <span className="text-[#6C63FF] font-medium">Savya</span>{' '}·{' '}
            <span className="text-[#00A8A8] font-medium">Noctabyte</span>{' '}·{' '}
            <span className="text-[#6C63FF] font-medium">Savyasachi</span>
          </motion.p>
          <motion.p
            className="mt-2 text-lg md:text-xl text-[#6B7280]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Backend Developer · AI/ML Engineer · Student
          </motion.p>
          <motion.p
            className="mt-5 text-[#1F2937]/80 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi! I'm a 3rd-year Computer Science (AI &amp; ML) student at Siddaganga Institute of
            Technology. My journey into coding started with curiosity about how things work behind
            the scenes — it evolved into a passion for backend systems, artificial intelligence, and
            building things that matter.
          </motion.p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-md text-white bg-[#6C63FF] hover:bg-[#5a53f5] transition-transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-md text-[#1F2937] border border-[#E5E7EB] bg-white hover:shadow-sm transition-transform hover:-translate-y-0.5"
            >
              Contact Me
            </a>
            <div className="flex items-center gap-3 ml-1">
              <a
                href="https://github.com/Savyasachi-2005"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full border border-[#E5E7EB] bg-white text-[#1F2937] hover:text-[#6C63FF] hover:shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-hiremath-3020692a3"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full border border-[#E5E7EB] bg-white text-[#1F2937] hover:text-[#6C63FF] hover:shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:abhishekhiremath0424@gmail.com"
                aria-label="Email"
                className="p-2 rounded-full border border-[#E5E7EB] bg-white text-[#1F2937] hover:text-[#6C63FF] hover:shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-[520px] mx-auto flex items-center justify-center"
        >
          <img
            src={doodleImg}
            alt="Hero illustration"
            className="w-full h-auto max-h-[480px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  )
}
