import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '@/components/ui/project-card';
import type { Project } from '../types';
import { XIcon, GithubIcon, ExternalLinkIcon, SparklesIcon, CodeIcon, RocketIcon } from 'lucide-react';
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
      className="section pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 px-3 sm:px-4 md:px-6 lg:px-8 w-full min-h-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-theme-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-theme-accent-alt/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-theme-accent/3 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header section with enhanced styling */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-theme-accent/10 border border-theme-accent/20 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <RocketIcon className="w-4 h-4 text-theme-accent" />
            <span className="text-xs sm:text-sm font-medium text-theme-accent">Crafted with passion</span>
          </motion.div>
          
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-orbitron text-theme-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-accent via-theme-accent-alt to-theme-accent">Projects</span>
          </motion.h1>
          
          <motion.div
            className="flex items-center justify-center gap-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-theme-accent" />
            <CodeIcon className="w-5 h-5 text-theme-accent" />
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-theme-accent" />
          </motion.div>
          
          <motion.p
            className="max-w-2xl mx-auto text-theme-text-alt text-sm sm:text-base md:text-lg px-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A collection of projects that showcase my journey in building 
            <span className="text-theme-accent font-medium"> innovative solutions</span> with modern technologies.
          </motion.p>

          {/* Stats row */}
          <motion.div
            className="flex items-center justify-center gap-6 sm:gap-10 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            
          </motion.div>
        </div>

        {/* Projects grid with masonry-like layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setSelected}
            />
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-theme-card-bg/50 to-theme-card-bg border border-theme-accent/10">
            <div className="flex items-center gap-2">
              <SparklesIcon className="w-5 h-5 text-theme-accent" />
              <span className="text-theme-text font-medium">Interested in collaborating?</span>
            </div>
            <a
              href="https://github.com/Savyasachi-2005"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-theme-accent hover:bg-theme-accent-alt text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-theme-accent/25"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
          >
            <motion.div 
              className="absolute inset-0 bg-black/80 backdrop-blur-md" 
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-gradient-to-b from-theme-card-bg to-theme-bg rounded-3xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl border border-theme-accent/20"
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                aria-label="Close"
                className="absolute top-4 right-4 z-20 bg-theme-bg/80 hover:bg-theme-accent text-theme-text hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-theme-accent/20"
              >
                <XIcon className="w-5 h-5" />
              </button>
              
              {/* Modal image section */}
              <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden bg-gradient-to-b from-theme-bg to-theme-card-bg">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,theme(colors.theme.accent/0.15),transparent_60%)]" />
                <div className="h-full flex items-center justify-center p-6">
                  <motion.img 
                    src={selected.imageUrl} 
                    alt={selected.title} 
                    className="max-h-full max-w-full object-contain drop-shadow-2xl"
                    layoutId={`project-image-${selected.id}`}
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-theme-card-bg to-transparent" />
              </div>
              
              {/* Modal content */}
              <div className="p-6 sm:p-8 space-y-5 overflow-y-auto">
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-bold font-orbitron text-theme-text">{selected.title}</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-theme-accent to-theme-accent-alt rounded-full" />
                </div>
                
                <p className="text-theme-text-alt leading-relaxed text-sm sm:text-base">{selected.description}</p>
                
                {/* Tech stack in modal */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-theme-text">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.techStack.map((t) => (
                      <span 
                        key={t} 
                        className="px-3 py-1.5 text-xs sm:text-sm bg-theme-accent/10 text-theme-accent rounded-lg border border-theme-accent/20 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <a
                    href={selected.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-theme-bg border border-theme-accent/30 hover:border-theme-accent hover:bg-theme-accent/10 text-theme-text text-sm font-medium transition-all duration-300"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Source</span>
                  </a>
                  {selected.liveUrl && (
                    <a
                      href={selected.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-theme-accent hover:bg-theme-accent-alt text-white text-sm font-medium transition-all duration-300 shadow-lg shadow-theme-accent/25"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;
