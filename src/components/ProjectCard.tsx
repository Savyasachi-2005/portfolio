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
      className="relative bg-cyber-darker rounded-lg overflow-hidden border border-gray-800 hover:border-cyber-blue/50 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyber-blue/70"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-darker/80 z-10"></div>
      
      {/* Project image (show full without cropping) */}
      <div className="h-48 bg-black flex items-center justify-center">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 relative z-20">
        <h3 className="text-xl font-bold text-white mb-2 font-orbitron">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech, i) => (
            <span 
              key={i} 
              className="px-2 py-1 bg-cyber-blue/10 text-cyber-blue rounded-md text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex items-center space-x-3">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noreferrer"
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
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
              className="p-2 rounded-full bg-cyber-blue hover:bg-cyber-blue/80 text-white transition-colors"
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
