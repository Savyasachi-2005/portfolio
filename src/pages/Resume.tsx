import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye } from 'react-icons/fa';

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // In a real application, you would have an actual resume PDF file
  const resumeDownloadUrl = '/resume.pdf';

  return (
    <motion.div
      className="pt-24 pb-16 px-4 sm:px-6 md:px-8 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
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

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="bg-cyber-darker p-8 rounded-lg border border-gray-800 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold font-orbitron mb-1">Abhisek Hiremath</h2>
                <p className="text-cyber-blue">Software Developer</p>
              </div>
              <div className="flex mt-4 sm:mt-0 space-x-3">
                <a
                  href={resumeDownloadUrl}
                  download="Abhisek_Hiremath_Resume.pdf"
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
            
            {/* Resume Placeholder - In a real application, you would embed the actual resume */}
            <div className="bg-cyber-dark rounded-lg p-6 border border-gray-700 text-center">
              <p className="text-gray-400">
                Resume preview not available. Please download the PDF to view the resume.
              </p>
              {/* This is where you would embed the PDF in a real application */}
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
                  <p className="text-sm text-gray-400">2022 - 2026 (Expected)</p>
                  <p className="mt-2">
                    Courses: Data Structures & Algorithms, Machine Learning, Artificial Intelligence, 
                    Database Management Systems, Computer Networks
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-4 font-orbitron flex items-center">
                <span className="w-6 h-1 bg-cyber-blue mr-3"></span>
                Skills
              </h3>
              <div className="bg-cyber-darker p-6 rounded-lg border border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Programming Languages</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      <li>Java (DSA)</li>
                      <li>Python</li>
                      <li>C, C++</li>
                      <li>R</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Backend Technologies</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      <li>FastAPI</li>
                      <li>Flask</li>
                      <li>PostgreSQL</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tools & Technologies</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      <li>Git</li>
                      <li>Docker</li>
                      <li>Redis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Other Skills</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      <li>Machine Learning</li>
                      <li>Data Structures</li>
                      <li>Algorithms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4 font-orbitron flex items-center">
                <span className="w-6 h-1 bg-cyber-blue mr-3"></span>
                Projects
              </h3>
              <div className="bg-cyber-darker p-6 rounded-lg border border-gray-800">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold">AI-Powered Task Manager</h4>
                    <p className="text-sm text-gray-400">Python, FastAPI, React, PostgreSQL</p>
                    <p className="mt-2">
                      A task management application with AI-powered priority suggestions and task categorization.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Blockchain Voting System</h4>
                    <p className="text-sm text-gray-400">Solidity, Ethereum, Web3.js, React</p>
                    <p className="mt-2">
                      A secure digital voting platform built on blockchain technology for transparent elections.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
