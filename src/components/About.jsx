import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaBrain, FaCogs, FaDatabase, FaProjectDiagram, FaJava, FaGit } from 'react-icons/fa'

// Import profile photos
import img1 from '../assets/images/IMG-20250807-WA0010.jpg'
import img2 from '../assets/images/IMG-20250807-WA0011.jpg'
import img3 from '../assets/images/IMG-20250807-WA0012.jpg'
import img4 from '../assets/images/IMG-20250807-WA0013.jpg'
import img5 from '../assets/images/IMG-20250807-WA0014.jpg'
import img7 from '../assets/images/My/IMG-20250318-WA0008.jpg'
import img8 from '../assets/images/My/IMG-20250318-WA0039.jpg'
import img9 from '../assets/images/My/IMG-20250701-WA0021.jpg'
import img10 from '../assets/images/My/IMG-20250712-WA0063.jpg'
import img11 from '../assets/images/My/IMG-20250816-WA0028.jpg'
import img12 from '../assets/images/My/IMG-20250818-WA0285.jpg'
import img13 from '../assets/images/My/IMG-20251003-WA0007.jpg'
import img14 from '../assets/images/My/IMG-20251109-WA0004.jpg'
import img15 from '../assets/images/My/IMG-20251109-WA0120.jpg'
import img16 from '../assets/images/My/IMG-20251119-WA0046.jpg'
import img18 from '../assets/images/My/file_00000000b950620aae5fced40fb7b4e2.png'

const galleryImages = [
  img1, img2, img3, img4, img5, img7, img8, img9,
  img10, img11, img12, img13, img14, img15, img16, img18
]

const focuses = [
  { title: 'Backend Development', icon: FaCogs, desc: 'FastAPI & Flask' },
  { title: 'AI / Machine Learning', icon: FaBrain, desc: 'Intelligent systems' },
  { title: 'System Design', icon: FaProjectDiagram, desc: 'Scalable architectures' },
  { title: 'DSA in Java', icon: FaJava, desc: 'Problem solving streak' },
]

const milestones = [
  {
    title: 'Joined College',
    event: 'Started CSE–AIML',
    desc: 'Coming from a taluk to a big campus—explored clubs and met seniors; an exciting start.',
  },
  {
    title: 'Finding My Flow',
    event: 'Breakthrough Moment',
    desc: 'Overcame early struggles, discovered Python and Git, and started building real momentum.',
  },
  {
    title: 'Club & Event Highlights',
    event: 'TEDx · SigmaCSE · GBH',
    desc: 'Hosted TEDx talks, led club activities, and learned teamwork at a city hackathon.',
    tags: ['TEDx Siddaganga', 'SigmaCSE', 'Great Bengaluru Hackathon'],
  },
  {
    title: 'Key Projects',
    event: 'Hands-on builds',
    desc: 'AI and web apps focused on learning, productivity, and impact.',
    tags: ['CurioMindAI', 'Student Study Organizer', 'AI Study Planner', 'RAG (FastAPI)', 'Project Sparsha', 'Sortify'],
  },
  {
    title: 'Skills & Tools',
    event: 'Tech stack',
    desc: 'Backend-focused with AI integration, plus strong collaboration and time management.',
    tags: ['Python', 'FastAPI', 'Flask', 'Java', 'C/C++', 'PostgreSQL', 'AI/ML', 'Git', 'Docker'],
  },
  {
    title: 'Current Status & Goals',
    event: 'Now → Next',
    desc: 'Deepening DSA and ML; steadily expanding AI/ML expertise toward impactful products.',
  },
]

export default function About() {
  const [currentImage, setCurrentImage] = useState(0)

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="py-20 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Intro grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1F2937]">About Me</h2>
            <p className="mt-5 text-[#1F2937]/80 leading-relaxed">
              Hi! I'm a passionate developer and <strong>3rd-year Computer Science (AI &amp; ML)
              student</strong> at Siddaganga Institute of Technology (2023–2027).
              <br /><br />
              My journey into coding began with curiosity about how things work behind the scenes.
              That curiosity evolved into a passion for backend development and artificial
              intelligence. I actively participate in hackathons and love transforming ideas into
              practical working systems.
              <br /><br />
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or grinding algorithmic problems.
            </p>

            <div className="mt-4 p-4 rounded-lg border border-[#E5E7EB] bg-[#FAF7F2]">
              <p className="text-sm font-medium text-[#1F2937]">Education</p>
              <p className="text-[#6C63FF] text-sm font-medium mt-0.5">B.E. Computer Science (AI &amp; ML)</p>
              <p className="text-xs text-[#6B7280]">Siddaganga Institute of Technology &nbsp;·&nbsp; 2023 – 2027</p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {focuses.map(({ title, icon: Icon, desc }, idx) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-start gap-3 p-3 rounded-lg border border-[#E5E7EB] bg-[#FAF7F2] hover:shadow-sm hover:-translate-y-0.5 transition"
                >
                  <div className="p-2 rounded-md bg-white border border-[#E5E7EB] text-[#6C63FF] mt-0.5">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-[#1F2937] text-sm font-medium">{title}</p>
                    <p className="text-[#6B7280] text-xs">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Main photo display with auto-rotate and smooth transitions */}
            <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E5E7EB] shadow-lg">
              <div className="relative aspect-[4/5] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={galleryImages[currentImage]}
                    alt="Portfolio photo"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ 
                      duration: 0.7,
                      ease: [0.43, 0.13, 0.23, 0.96]
                    }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Journey timeline */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold text-[#1F2937]">My <span className="text-[#6C63FF]">Journey</span></h3>
            <div className="w-14 h-0.5 bg-[#6C63FF] mx-auto mt-3" />
          </div>

          <div className="relative border-l border-[#E5E7EB] ml-3">
            {milestones.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="pl-6 pb-10 relative"
              >
                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#6C63FF] border-2 border-white shadow" />
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-[#1F2937] font-medium">{m.title}</h4>
                  {m.event && (
                    <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-[#6C63FF]/10 text-[#6C63FF] border border-[#6C63FF]/20">
                      {m.event}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-sm text-[#6B7280] leading-relaxed">{m.desc}</p>
                {m.tags && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {m.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-md border border-[#E5E7EB] bg-white text-[#1F2937]">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
