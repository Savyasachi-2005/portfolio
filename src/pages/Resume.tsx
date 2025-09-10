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
            className="text-3xl md:text-4xl font-bold mb-4 font-orbitron"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-cyber-blue">Resume</span>
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-cyber-blue mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>
        <div className="grid gap-10 xl:grid-cols-12 xl:items-start">
          {/* MAIN COLUMN */}
          <div className="xl:col-span-8 max-w-3xl mx-auto w-full">
          <motion.div
            className="bg-cyber-darker p-8 rounded-lg border border-gray-800 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold font-orbitron mb-1">Abhishek Hiremath</h2>
                <p className="text-cyber-blue">Software Developer</p>
              </div>
              <div className="flex mt-4 sm:mt-0 space-x-3">
                <a
                  href={resumeDownloadUrl}
                  download="Abhishek_Hiremath_Resume.pdf"
                  className="flex items-center px-4 py-2 rounded-md bg-cyber-blue text-white hover:bg-cyber-blue/80 transition-all duration-300"
                >
                  <FaDownload className="mr-2" /> Download PDF
                </a>
                <a
                  href={resumeDownloadUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center px-4 py-2 rounded-md border border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 transition-all duration-300"
                >
                  <FaEye className="mr-2" /> Preview
                </a>
              </div>
            </div>
            
            {/* Embedded PDF preview (falls back gracefully if browser can't display) */}
            <div className="bg-cyber-dark rounded-lg border border-gray-700 overflow-hidden" style={{ minHeight: '70vh' }}>
              <object data={resumeDownloadUrl} type="application/pdf" className="w-full h-full min-h-[70vh]">
                <iframe
                  src={resumeDownloadUrl}
                  title="Resume PDF"
                  className="w-full h-full min-h-[70vh]"
                />
                <div className="p-6 text-center text-gray-400">
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
              <h3 className="text-xl font-bold mb-4 font-orbitron flex items-center">
                <span className="w-6 h-1 bg-cyber-blue mr-3"></span>
                Education
              </h3>
              <div className="bg-cyber-darker p-6 rounded-lg border border-gray-800">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold">B.E. Computer Science (AI & ML)</h4>
                  <p className="text-cyber-blue">Siddaganga Institute of Technology</p>
                  <p className="text-sm text-gray-400">2023 - 2027</p>
                  <p className="mt-2">
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
            <div className="bg-cyber-darker border border-gray-800 rounded-lg p-6">
              <h3 className="font-orbitron font-semibold text-lg mb-3">Profile Snapshot</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Passionate software developer focused on building performant backend services and
                intelligent systems with clean architecture and measurable impact.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-cyber-blue" /> Tumkur, India</li>
                <li className="flex items-center gap-2"><FaEnvelope className="text-cyber-blue" /> abhishekhiremath0424@gmail.com</li>
              </ul>
            </div>
            {/* Key Skills */}
            <div className="bg-cyber-darker border border-gray-800 rounded-lg p-6">
              <h3 className="font-orbitron font-semibold text-lg mb-3">Core Strengths</h3>
              <div className="flex flex-wrap gap-2">
                {['FastAPI','PostgreSQL','Python','Java DSA','System Design','ML','Docker','Redis'].map(tag => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-cyber-dark border border-gray-700 text-xs text-gray-300">{tag}</span>
                ))}
              </div>
            </div>
            {/* Links */}
            <div className="bg-cyber-darker border border-gray-800 rounded-lg p-6">
              <h3 className="font-orbitron font-semibold text-lg mb-3">Links</h3>
              <div className="space-y-3 text-sm">
                <a href="https://github.com/Savyasachi-2005" target="_blank" rel="noreferrer" className="flex items-center gap-2 group">
                  <span className="w-8 h-8 rounded-md flex items-center justify-center bg-cyber-dark border border-gray-700 group-hover:border-cyber-blue transition-colors"><FaGithub /></span>
                  <span className="text-gray-300 group-hover:text-cyber-blue transition-colors">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/abhishek-hiremath-3020692a3" target="_blank" rel="noreferrer" className="flex items-center gap-2 group">
                  <span className="w-8 h-8 rounded-md flex items-center justify-center bg-cyber-dark border border-gray-700 group-hover:border-cyber-blue transition-colors"><FaLinkedin /></span>
                  <span className="text-gray-300 group-hover:text-cyber-blue transition-colors">LinkedIn</span>
                </a>
                <a href={resumeDownloadUrl} download className="flex items-center gap-2 group">
                  <span className="w-8 h-8 rounded-md flex items-center justify-center bg-cyber-dark border border-gray-700 group-hover:border-cyber-blue transition-colors"><FaDownload /></span>
                  <span className="text-gray-300 group-hover:text-cyber-blue transition-colors">Download Resume</span>
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
