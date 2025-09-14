import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect?: (project: Project) => void;
}

const ProjectCard = ({ project, index, onSelect }: ProjectCardProps) => {
  return (
    <motion.div
      className="relative bg-theme-card-bg rounded-lg shadow-lg overflow-hidden group cursor-pointer hover:bg-theme-card-hover transition-colors duration-300 focus:outline-none focus:ring-2 ring-theme-accent"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      role={onSelect ? 'button' : undefined}
      tabIndex={onSelect ? 0 : undefined}
  onClick={() => onSelect?.(project)}
      onKeyDown={(e) => {
        if (!onSelect) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
            onSelect(project);
        }
      }}
      data-project-card
    >
      {/* Glass effect overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-theme-bg/85 z-10"></div>
      
    {/* Project image (responsive height) */}
    <div className="h-40 sm:h-48 bg-theme-bg flex items-center justify-center">
        <img
          src={project.imageUrl}
          alt={project.title}
      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105 px-2"
          loading="lazy"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 relative z-20">
  <h3 className="text-lg sm:text-xl font-semibold mb-2 font-orbitron text-theme-text tracking-wide">{project.title}</h3>
  <p className="text-theme-text-alt mb-4 text-[13px] sm:text-sm leading-relaxed">{project.description}</p>
        
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech, i) => (
            <span 
              key={i} 
              className="px-2 py-1 bg-theme-card-hover text-theme-accent rounded-md text-[10px] border border-theme-accent/40"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
    <div className="flex items-center space-x-3 pt-1">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noreferrer"
            className="p-2 rounded-md bg-theme-card-hover hover:bg-theme-button-bg text-theme-accent hover:text-white transition-colors border border-transparent hover:border-theme-accent"
            onClick={(e) => e.stopPropagation()}
            aria-label="GitHub Repository"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-md bg-theme-button-bg hover:bg-theme-button-hover text-white transition-colors shadow-sm"
              onClick={(e) => e.stopPropagation()}
              aria-label="Live Demo"
            >
              <FaExternalLinkAlt className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
