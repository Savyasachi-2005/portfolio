import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaBookOpen, FaMicrophone, FaPuzzlePiece, FaTools, FaRocket } from 'react-icons/fa';

// Import your images
import img1 from '../assets/images/IMG-20250807-WA0010.jpg';
import img2 from '../assets/images/IMG-20250807-WA0011.jpg';
import img3 from '../assets/images/IMG-20250807-WA0012.jpg';
import img4 from '../assets/images/IMG-20250807-WA0013.jpg';
// removed: img5 (no longer used in timeline section)

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Image gallery state
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Image gallery with your actual images
  const galleryImages = [
    {
      src: img1,
  alt: "Abhishek Hiremath - Profile Photo 1",
      fallback: "https://via.placeholder.com/400x400?text=Profile+1"
    },
    {
      src: img2, 
  alt: "Abhishek Hiremath - Profile Photo 2",
      fallback: "https://via.placeholder.com/400x400?text=Profile+2"
    },
    {
      src: img3,
  alt: "Abhishek Hiremath - Profile Photo 3",
      fallback: "https://via.placeholder.com/400x400?text=Profile+3"
    },
    {
      src: img4,
  alt: "Abhishek Hiremath - Profile Photo 4",
      fallback: "https://via.placeholder.com/400x400?text=Profile+4"
    }
  ];

  // Journey roadmap milestones (chronological, no years)
  const milestones = [
    {
      title: 'Joined College',
      event: 'Started CSE–AIML program',
      description:
        'Coming from a taluk to a big campus—explored clubs and met seniors; an exciting start.',
      icon: FaGraduationCap,
    },
    {
      title: 'Finding My Flow',
      event: 'Breakthrough Moment',
      description:
        'Overcame early struggles, discovered Python and Git, and started building real momentum.',
      icon: FaBookOpen,
    },
    {
      title: 'Club & Event Highlights',
      event: 'TEDx, SigmaCSE, GBH',
      description:
        'Hosted TEDx talks, led club activities, and learned teamwork at a city hackathon.',
      icon: FaMicrophone,
      tags: ['TEDx Siddaganga', 'SigmaCSE', 'Great Bengaluru Hackathon'],
    },
    {
      title: 'Key Projects',
      event: 'Hands‑on builds',
      description:
        'AI and web apps focused on learning, productivity, and impact.',
      icon: FaPuzzlePiece,
      tags: [
        'CurioMindAI',
        'Student Study Organizer',
        'AI Study Planner',
        'RAG (FastAPI)',
        'Project Sparsha',
      ],
    },
    {
      title: 'Skills & Tools',
      event: 'Tech stack',
      description:
        'Backend-focused with AI integration, plus strong collaboration and time management.',
      icon: FaTools,
      tags: [
        'Python',
        'Flask',
        'FastAPI',
        'Java',
        'C/C++',
        'PostgreSQL',
        'AI/ML',
        'Prompt Eng.',
        'VSCode',
        'Git',
        'GitHub',
        'Vercel',
        'Render',
      ],
    },
    {
      title: 'Current Status & Goals',
      event: 'Now → Next',
      description:
        'Deepening DSA and ML; steadily expanding AI/ML expertise.',
      icon: FaRocket,
    },
  ];

  // Auto-rotate images every 5 seconds (increased for smoother experience)
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <motion.div
      className="section pt-20 sm:pt-24 pb-12 sm:pb-16 px-3 sm:px-4 md:px-6 lg:px-8 w-full overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
  <div className="container mx-auto max-w-7xl overflow-x-hidden">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4 font-orbitron tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About <span className="text-accent">Me</span>
          </motion.h1>
          <motion.div
            className="w-16 sm:w-20 h-1 bg-accent mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center overflow-x-hidden">
          {/* Enhanced Photo Gallery */}
          <motion.div
      className="relative mx-auto lg:mx-0 card-base p-3 sm:p-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: 'easeOut' } }}
          >
            {/* Main Image Display */}
            <div className="relative w-full max-w-[14rem] h-[14rem] sm:max-w-[18rem] sm:h-[18rem] md:max-w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem] xl:w-[28rem] xl:h-[28rem] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-accent shadow-2xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-full object-cover about-image-quality"
                  loading="eager"
                  decoding="sync"
                  initial={{ 
                    opacity: 0, 
                    scale: 1.05
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 1.05
                  }}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeInOut",
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.6 }
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = galleryImages[selectedImage].fallback;
                  }}
                />
              </AnimatePresence>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t" style={{ backgroundImage: 'linear-gradient(to top, color-mix(in srgb, var(--bg-body) 20%, transparent), transparent)' }}></div>
              
              {/* Navigation dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {galleryImages.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                      selectedImage === index 
                        ? 'bg-accent border-accent shadow-accent-glow' 
                        : 'bg-transparent border-[var(--text-secondary)]/50 hover:border-[var(--text-primary)]'
                    }`}
                    onClick={() => setSelectedImage(index)}
                    whileHover={{ 
                      scale: 1.2
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Removed extra floating frame animations for cleaner look */}
            
            {/* Thumbnail preview */}
            <div className="flex justify-center mt-5 space-x-2 sm:space-x-3">
              {galleryImages.map((image, index) => (
                <motion.button
                  key={index}
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-500 ${
                    selectedImage === index 
                      ? 'border-cyber-blue scale-110 shadow-lg shadow-cyber-blue/30' 
                      : 'border-gray-600 hover:border-gray-400'
                  }`}
                  onClick={() => setSelectedImage(index)}
                  whileHover={{ 
                    scale: selectedImage === index ? 1.1 : 1.05,
                    borderColor: "#38bdf8",
                    boxShadow: "0 4px 20px rgba(56, 189, 248, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover about-image-quality"
                    whileHover={{ 
                      scale: 1.1,
                      filter: "brightness(1.1) contrast(1.1)"
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = image.fallback;
                    }}
                  />
                  {/* Active indicator */}
                  {selectedImage === index && (
                    <motion.div
                      className="absolute inset-0 ring-2 ring-accent ring-opacity-50"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* About content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold font-orbitron text-theme-text">Abhishek Hiremath</h2>
            <p className="text-lg text-theme-text-alt font-light">
              <span className="text-theme-accent font-normal">Student & Developer</span>
            </p>
            
            <div className="space-y-4 text-theme-text-alt">
              <p>
                Hi there! I'm a passionate developer and a 3rd year Computer Science Engineering student specializing in 
                AI and Machine Learning at Siddaganga Institute of Technology.
              </p>
              
              <p>
                My journey into coding began with a curiosity about how things work behind the scenes. This curiosity 
                evolved into a passion for backend development and artificial intelligence.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or 
                solving interesting algorithmic problems.
              </p>
            </div>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3 font-orbitron text-theme-text">Education</h3>
              <div className="bg-theme-card-bg p-4 rounded-lg shadow-lg hover:bg-theme-card-hover transition-colors duration-300">
                <p className="font-medium text-theme-text">Siddaganga Institute of Technology</p>
                <p className="text-theme-accent">B.E. in Computer Science (AI & ML)</p>
                <p className="text-sm text-theme-text-alt">2023 - 2027</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Additional Photos Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold font-orbitron mb-4 text-theme-text">
              My <span className="text-theme-accent">Journey</span>
            </h3>
            <div className="w-16 h-1 bg-theme-accent mx-auto"></div>
          </div>
          {/* Timeline / Roadmap */}
          <div className="relative max-w-5xl mx-auto px-2 sm:px-4 overflow-hidden md:overflow-visible">
            {/* Center line on desktop */}
            <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block">
              <div className="h-full w-px bg-gradient-to-b from-transparent via-theme-accent/40 to-transparent" />
            </div>
            {/* Mobile left rail */}
            <div className="pointer-events-none absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-theme-accent/30 to-transparent md:hidden" />

            <motion.ul
              className="space-y-12 md:space-y-16 overflow-x-hidden"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12 } },
              }}
            >
              {milestones.map((m, idx) => {
                const isLeft = idx % 2 === 0; // alternate on desktop
                const Icon = (m as any).icon as React.ComponentType<{ className?: string }>;
                return (
                  <motion.li
                    key={idx}
                    className="relative md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 md:items-center overflow-x-hidden"
                    variants={{
                      hidden: { opacity: 0, y: 24, x: isLeft ? -40 : 40 },
                      show: {
                        opacity: 1,
                        y: 0,
                        x: 0,
                        transition: { duration: 0.55, ease: 'easeOut' },
                      },
                    }}
                  >
                    {/* Desktop connector from center dot to card (dotted) */}
                    {isLeft ? (
                      <span
                        className="hidden md:block pointer-events-none absolute top-1/2 right-1/2 -translate-y-1/2 h-px w-[calc(50%-2rem)] border-t border-dashed border-theme-accent/30"
                        aria-hidden
                      />
                    ) : (
                      <span
                        className="hidden md:block pointer-events-none absolute top-1/2 left-1/2 -translate-y-1/2 h-px w-[calc(50%-2rem)] border-t border-dashed border-theme-accent/30"
                        aria-hidden
                      />
                    )}
                    {/* Mobile dot aligned to left rail */}
                    <div className="md:hidden absolute left-3 top-10">
                      <span className="relative inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[var(--bg-body)] ring-2 ring-theme-accent">
                        <span className="absolute h-2 w-2 rounded-full bg-theme-accent/60 animate-ping" />
                        <span className="relative h-2 w-2 rounded-full bg-theme-accent" />
                      </span>
                    </div>
                    {/* Mobile connector from rail dot to card */}
                    <span
                      className="md:hidden pointer-events-none absolute left-5 top-10 h-px w-7 border-t border-dashed border-theme-accent/30"
                      aria-hidden
                    />
                    {/* Card (mobile full width, desktop alternates) */}
                    <div className={`${isLeft ? 'md:col-start-1' : 'md:col-start-3'} md:row-start-1`}>
                      <motion.div
                        className="group relative z-10 card-base bg-theme-card-bg/80 backdrop-blur-sm border border-white/5 hover:border-theme-accent/30 rounded-xl p-5 pl-10 sm:p-6 md:pl-6 transition-all duration-300 shadow-lg hover:shadow-theme-accent/20"
                        whileHover={{ y: -4, scale: 1.01 }}
                        whileTap={{ scale: 0.995 }}
                        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="shrink-0 relative">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-theme-accent/10 text-theme-accent ring-1 ring-theme-accent/30">
                              {Icon ? <Icon className="h-5 w-5" /> : <span className="text-xl">•</span>}
                            </div>
                          </div>
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className="text-lg font-semibold text-theme-text truncate">{m.title}</h4>
                              {m.event && (
                                <span className="text-[11px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-theme-accent/10 text-theme-accent border border-theme-accent/20">
                                  {m.event}
                                </span>
                              )}
                            </div>
                            <p className="mt-1 text-sm text-theme-text-alt">
                              {m.description}
                            </p>
                            {Array.isArray((m as any).tags) && (m as any).tags.length > 0 && (
                              <div className="mt-3 flex flex-wrap gap-2">
                                {(m as any).tags.map((t: string) => (
                                  <span
                                    key={t}
                                    className="text-xs px-2 py-1 rounded-md bg-[var(--bg-elevated,#0b0f1a)]/60 border border-white/5 text-[var(--text-secondary)] hover:text-theme-text transition-colors break-words"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                        {/* Hover lift */}
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-theme-accent/0 transition-all duration-300 group-hover:ring-2 group-hover:ring-theme-accent/30" />
                      </motion.div>
                    </div>

                    {/* Center dot (desktop only) */}
                    <div className="hidden md:flex md:col-start-2 md:row-start-1 items-center justify-center">
                      <motion.span
                        className="relative z-10 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--bg-body)] ring-2 ring-theme-accent"
                        initial={{ scale: 0.6, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                        aria-hidden
                      >
                        <span className="absolute h-2.5 w-2.5 rounded-full bg-theme-accent/60 animate-ping" />
                        <span className="relative h-2.5 w-2.5 rounded-full bg-theme-accent" />
                      </motion.span>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
      <div className="section-divider" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
