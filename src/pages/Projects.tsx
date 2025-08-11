import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import type { Project } from '../types';
// Local project images
import SparshaImg from '../assets/project_images/Sparsha.png';
import SortifyImg from '../assets/project_images/Sortify.png';
import AIStudyImg from '../assets/project_images/AI_study.png';
import StudentImg from '../assets/project_images/student.png';

// Sample project data - replace with actual projects later
const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Project Sparsha',
    description: 'An AI-powered emergency reporting and adoption platform for stray animals, featuring real-time alerts, volunteer coordination, adoption gallery, and Compassion Coins rewards system.',
    techStack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Machine Learning'],
    githubUrl: 'https://github.com/Savyasachi-2005/Project-Sparsha',
  imageUrl: SparshaImg
  },
  {
    id: 'project-2',
    title: 'Sortify — AI-Powered Productivity Assistant',
    description: 'Turns your messy to-do lists into structured SMART goals, prioritizes tasks as High/Medium/Low, and keeps you focused on what actually matters. Built with FastAPI and AI integration for smarter task management.',
    techStack: ['React', 'Tailwind CSS', 'FastAPI', 'Z.AI'],
    githubUrl: 'https://github.com/Savyasachi-2005/Sortify',
  imageUrl: SortifyImg
  },
  {
    id: 'project-3',
    title: 'AI - Study Planner',
    description: 'An AI-driven study planner that helps students organize their study schedules, set goals, and track progress.',
    techStack: ['Streamlit', 'Python','OpenRouter'],
    githubUrl: 'https://github.com/Savyasachi-2005/AI-study-planner',
  imageUrl: AIStudyImg
  },
  {
    id: 'project-4',
    title: 'Student Study Organizer',
    description: 'A web application that centralizes and organizes study materials like videos, articles, courses, and notes, with progress tracking, secure authentication, and responsive UI for self-paced learners.',
    techStack: ['Python', 'Flask', 'PostgreSQL', 'SQLite', 'SQLAlchemy', 'Bootstrap 5', 'HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/Savyasachi-2005/Student-Study-Organiser',
  imageUrl: StudentImg
  }
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selected, setSelected] = useState<Project | null>(null);
  const closeModal = () => setSelected(null);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <motion.div
      className="section pt-28 pb-20 px-4 sm:px-6 md:px-8 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-4 font-orbitron"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-cyber-blue">Projects</span>
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-cyber-blue mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Here are some of the projects I've worked on. Each project demonstrates my skills and expertise in different technologies.
          </motion.p>
        </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setSelected}
            />
          ))}
        </div>
  <div className="section-divider" />

  {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            aria-modal="true"
            role="dialog"
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeModal} />
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 32 }}
              className="relative w-full max-w-3xl card-base overflow-hidden"
            >
              <button
                onClick={closeModal}
                aria-label="Close"
                className="absolute top-3 right-3 z-10 bg-gray-800/70 hover:bg-gray-700 text-gray-200 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
              >
                ×
              </button>
              <div className="h-60 relative group bg-black flex items-center justify-center">
                <img src={selected.imageUrl} alt={selected.title} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 to-black/60" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {selected.techStack.map((t) => (
                    <span key={t} className="px-2 py-1 text-[10px] bg-cyber-blue/20 text-cyber-blue rounded-md backdrop-blur-sm border border-cyber-blue/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold font-orbitron text-pro-offwhite tracking-wide">{selected.title}</h2>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">{selected.description}</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={selected.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-pro-steel/70 hover:bg-pro-steel text-pro-offwhite text-sm transition-colors border border-transparent hover:border-cyber-blue/40"
                  >
                    <span>GitHub</span>
                  </a>
                  {selected.liveUrl && (
                    <a
                      href={selected.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-cyber-blue/90 hover:bg-cyber-blue text-white text-sm transition-colors shadow-sm hover:shadow-[0_0_0_1px_#38bdf8]"
                    >
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
