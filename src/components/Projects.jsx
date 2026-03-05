import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaTimes } from 'react-icons/fa'
import SparshaImg from '../assets/project_images/Sparsha.png'
import SortifyImg from '../assets/project_images/Sortify.png'
import AIStudyImg from '../assets/project_images/AI_study.png'
import StudentImg from '../assets/project_images/student.png'
import ArthosImg from '../assets/project_images/proj/Arthos - UPI Spend Analyzer.png'
import CurioMindImg from '../assets/project_images/proj/CurioMindAI.png'
import DocuMindImg from '../assets/project_images/proj/DocuMind - Intelligent Document Chat.png'
import NichePulseImg from '../assets/project_images/proj/NichePulse.png'
import FinancialForensicsImg from '../assets/project_images/proj/Financial Forensics Engine.png'

const projects = [
  {
    title: 'Arthos - UPI Spend Analyzer',
    desc: 'A full-stack financial analytics application that parses raw UPI SMS transaction messages and converts them into structured spending insights. It automatically categorizes expenses, visualizes spending patterns with charts, and provides a clear transaction history to help users understand where their money goes.',
    tech: ['FastAPI', 'SQLModel', 'SQLite', 'React', 'TypeScript', 'Tailwind CSS', 'React Query', 'Axios'],
    link: 'https://github.com/Savyasachi-2005/Arthos',
    image: ArthosImg,
  },
  {
    title: 'CurioMindAI',
    desc: 'An AI-powered learning platform that explains complex topics in simple, age-appropriate language for children aged 5–18. It supports multiple languages, generates follow-up questions, and allows users to save explanations as notes and export them as PDF or DOCX for study.',
    tech: ['FastAPI', 'Python', 'Google Gemini AI', 'React', 'Vite', 'Tailwind CSS'],
    link: 'https://github.com/Savyasachi-2005/CurioMindAI',
    image: CurioMindImg,
  },
  {
    title: 'DocuMind - Intelligent Document Chat',
    desc: 'A Retrieval-Augmented Generation (RAG) system that allows users to chat with their documents and receive context-aware answers. It processes uploaded files, stores embeddings in a vector database, retrieves relevant context, and generates precise responses using AI.',
    tech: ['FastAPI', 'Python', 'React', 'Vite', 'Tailwind CSS', 'Google Gemini AI', 'Pinecone', 'MongoDB'],
    link: 'https://github.com/Savyasachi-2005/Modular_RAG',
    image: DocuMindImg,
  },
  {
    title: 'NichePulse',
    desc: 'An AI-powered analytics platform that helps YouTube creators grow their channels through data-driven insights. It analyzes channel performance, detects trending topics, evaluates growth health metrics, and provides strategic recommendations using AI.',
    tech: ['React', 'Tailwind CSS', 'Recharts', 'Framer Motion', 'FastAPI', 'Google Gemini AI', 'YouTube Data API'],
    link: 'https://github.com/Savyasachi-2005/TeamZ_Hallucinate',
    image: NichePulseImg,
  },
  {
    title: 'Financial Forensics Engine',
    desc: 'A graph-based financial fraud detection system built for RIFT 2026 that analyzes raw transaction data to identify suspicious patterns such as money laundering rings, mule networks, and smurfing behavior. It visualizes financial relationships as network graphs and assigns suspicion scores based on detected fraud patterns.',
    tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'Cytoscape.js', 'Recharts', 'Tailwind CSS'],
    link: 'https://github.com/Savyasachi-2005/v0-financial-forensics-engine',
    image: FinancialForensicsImg,
  },
  {
    title: 'Project Sparsha',
    desc:
      'An AI-powered emergency reporting and adoption platform for stray animals. Features real-time alerts, volunteer coordination, adoption gallery, and Compassion Coins rewards system.',
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Machine Learning'],
    link: 'https://github.com/Savyasachi-2005/Project-Sparsha',
    image: SparshaImg,
  },
  {
    title: 'Sortify — AI Productivity Assistant',
    desc:
      'Turns messy to-do lists into structured SMART goals, prioritizes tasks as High/Medium/Low, and keeps you focused on what actually matters. Built with FastAPI and AI integration.',
    tech: ['React', 'Tailwind CSS', 'FastAPI', 'Z.AI'],
    link: 'https://github.com/Savyasachi-2005/Sortify',
    image: SortifyImg,
  },
  {
    title: 'AI Study Planner',
    desc:
      'An AI-driven study planner that helps students organize their study schedules, set goals, and track progress with personalized recommendations.',
    tech: ['Streamlit', 'Python', 'OpenRouter'],
    link: 'https://github.com/Savyasachi-2005/AI-study-planner',
    image: AIStudyImg,
  },
  {
    title: 'Student Study Organizer',
    desc:
      'Centralizes and organizes study materials like videos, articles, courses, and notes with progress tracking, secure authentication, and responsive UI for self-paced learners.',
    tech: ['Python', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'Bootstrap 5'],
    link: 'https://github.com/Savyasachi-2005/Student-Study-Organiser',
    image: StudentImg,
  },
]

const INITIAL_PROJECTS_COUNT = 4

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [visibleCount, setVisibleCount] = useState(INITIAL_PROJECTS_COUNT)

  const visibleProjects = projects.slice(0, visibleCount)
  const hasMore = visibleCount < projects.length

  return (
    <section id="projects" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-[#1F2937] mb-8"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {visibleProjects.map((p, idx) => (
            <motion.div
              key={p.title}
              onClick={() => setSelectedProject(p)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="block rounded-xl bg-white border border-[#E5E7EB] p-6 hover:shadow-md hover:-translate-y-1 transition group cursor-pointer"
            >
              <div className="h-64 rounded-lg overflow-hidden border border-[#E5E7EB] bg-[#FAF7F2]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-4 text-[#1F2937] font-medium text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-[#6B7280] line-clamp-3">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.slice(0, 4).map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-[#E5E7EB] bg-[#FAF7F2] text-[#1F2937]">
                    {t}
                  </span>
                ))}
                {p.tech.length > 4 && (
                  <span className="text-xs px-2.5 py-1 rounded-full border border-[#E5E7EB] bg-[#FAF7F2] text-[#1F2937]">
                    +{p.tech.length - 4}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setVisibleCount(projects.length)}
              className="px-8 py-3 bg-[#1F2937] text-white rounded-lg hover:bg-[#374151] transition font-medium flex items-center gap-2 group"
            >
              Load More Projects
              <svg
                className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </motion.div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto"
              >
                {/* Close button */}
                <div className="sticky top-0 bg-white border-b border-[#E5E7EB] px-6 py-4 flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-[#1F2937]">{selectedProject.title}</h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-[#FAF7F2] rounded-lg transition"
                  >
                    <FaTimes className="text-[#6B7280]" size={20} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Project Image */}
                  <div className="rounded-xl overflow-hidden border border-[#E5E7EB] bg-[#FAF7F2]">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-auto object-contain max-h-96"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-sm font-semibold text-[#1F2937] mb-2 uppercase tracking-wide">Description</h3>
                    <p className="text-[#6B7280] leading-relaxed">{selectedProject.desc}</p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-sm font-semibold text-[#1F2937] mb-3 uppercase tracking-wide">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 rounded-lg border border-[#E5E7EB] bg-[#FAF7F2] text-[#1F2937] text-sm font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Link */}
                  {selectedProject.link && (
                    <div className="pt-4 border-t border-[#E5E7EB]">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#1F2937] text-white rounded-lg hover:bg-[#374151] transition font-medium"
                      >
                        <FaGithub size={20} />
                        View on GitHub
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
