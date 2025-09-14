import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
// Import the actual resume PDF asset (Vite will resolve this to a URL)
import resumePdf from '../assets/resume_1.pdf';

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Resolved URL for the bundled resume PDF
  const resumeDownloadUrl = resumePdf;

  return (
    <motion.div
      className="pt-24 pb-16 px-4 sm:px-6 md:px-8 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-4 font-orbitron text-theme-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-theme-accent">Resume</span>
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-theme-accent mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>
        <div className="grid gap-10 xl:grid-cols-12 xl:items-start">
          {/* MAIN COLUMN */}
          <div className="xl:col-span-8 max-w-3xl mx-auto w-full">
          <motion.div
            className="bg-theme-card-bg p-8 rounded-lg border border-theme-accent/30 mb-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold font-orbitron mb-1 text-theme-text">Abhishek Hiremath</h2>
                <p className="text-theme-accent">Software Developer</p>
              </div>
              <div className="flex mt-4 sm:mt-0 space-x-3">
                <a
                  href={resumeDownloadUrl}
                  download="Abhishek_Hiremath_Resume.pdf"
                  className="flex items-center px-4 py-2 rounded-md bg-theme-button-bg text-white hover:bg-theme-button-hover transition-all duration-300"
                >
                  <FaDownload className="mr-2" /> Download PDF
                </a>
                <a
                  href={resumeDownloadUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center px-4 py-2 rounded-md border border-theme-accent text-theme-accent hover:bg-theme-accent/10 transition-all duration-300"
                >
                  <FaEye className="mr-2" /> Preview
                </a>
              </div>
            </div>
            
            {/* Embedded PDF preview (falls back gracefully if browser can't display) */}
            <div className="bg-theme-bg rounded-lg border border-theme-accent/30 overflow-hidden" style={{ minHeight: '70vh' }}>
              <object data={resumeDownloadUrl} type="application/pdf" className="w-full h-full min-h-[70vh]">
                <iframe
                  src={resumeDownloadUrl}
                  title="Resume PDF"
                  className="w-full h-full min-h-[70vh]"
                />
                <div className="p-6 text-center text-theme-text-alt">
                  PDF preview not supported in this browser. Please use the Download or Preview buttons above.
                </div>
              </object>
            </div>
          </motion.div>

          {/* Resume Sections */}
          <div className="space-y-10">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4 font-orbitron flex items-center text-theme-text">
                <span className="w-6 h-1 bg-theme-accent mr-3"></span>
                Education
              </h3>
              <div className="bg-theme-card-bg p-6 rounded-lg border border-theme-accent/30 shadow-lg">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-theme-text">B.E. Computer Science (AI & ML)</h4>
                  <p className="text-theme-accent">Siddaganga Institute of Technology</p>
                  <p className="text-sm text-theme-text-alt">2023 - 2027</p>
                  <p className="mt-2 text-theme-text">
                    Courses: Data Structures & Algorithms, Machine Learning, Artificial Intelligence, 
                    Database Management Systems, Computer Networks
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Skills & Projects removed as requested */}
          </div>
          </div>
          {/* SIDEBAR (visible on xl and up) */}
          <motion.aside
            className="hidden xl:block xl:col-span-4 space-y-8 sticky top-28"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {/* Summary Card */}
            <div className="bg-theme-card-bg border border-theme-accent/30 rounded-lg p-6 shadow-lg">
              <h3 className="font-orbitron font-semibold text-lg mb-3 text-theme-text">Profile Snapshot</h3>
              <p className="text-theme-text text-sm leading-relaxed">
                Passionate software developer focused on building performant backend services and
                intelligent systems with clean architecture and measurable impact.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-theme-text-alt">
                <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-theme-accent" /> Tumkur, India</li>
                <li className="flex items-center gap-2"><FaEnvelope className="text-theme-accent" /> abhishekhiremath0424@gmail.com</li>
              </ul>
            </div>
            {/* Key Skills */}
            <div className="bg-theme-card-bg border border-theme-accent/30 rounded-lg p-6 shadow-lg">
              <h3 className="font-orbitron font-semibold text-lg mb-3 text-theme-text">Core Strengths</h3>
              <div className="flex flex-wrap gap-2">
                {['FastAPI','PostgreSQL','Python','Java DSA','System Design','ML','Docker','Redis'].map(tag => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-theme-bg border border-theme-accent/30 text-xs text-theme-text">{tag}</span>
                ))}
              </div>
            </div>
            {/* Links */}
            <div className="bg-theme-card-bg border border-theme-accent/30 rounded-lg p-6 shadow-lg">
              <h3 className="font-orbitron font-semibold text-lg mb-3 text-theme-text">Links</h3>
              <div className="space-y-3 text-sm">
                <a href="https://github.com/Savyasachi-2005" target="_blank" rel="noreferrer" className="flex items-center gap-2 group">
                  <span className="w-8 h-8 rounded-md flex items-center justify-center bg-theme-bg border border-theme-accent/30 group-hover:border-theme-accent transition-colors"><FaGithub /></span>
                  <span className="text-theme-text group-hover:text-theme-accent transition-colors">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/abhishek-hiremath-3020692a3" target="_blank" rel="noreferrer" className="flex items-center gap-2 group">
                  <span className="w-8 h-8 rounded-md flex items-center justify-center bg-theme-bg border border-theme-accent/30 group-hover:border-theme-accent transition-colors"><FaLinkedin /></span>
                  <span className="text-theme-text group-hover:text-theme-accent transition-colors">LinkedIn</span>
                </a>
                <a href={resumeDownloadUrl} download className="flex items-center gap-2 group">
                  <span className="w-8 h-8 rounded-md flex items-center justify-center bg-theme-bg border border-theme-accent/30 group-hover:border-theme-accent transition-colors"><FaDownload /></span>
                  <span className="text-theme-text group-hover:text-theme-accent transition-colors">Download Resume</span>
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
