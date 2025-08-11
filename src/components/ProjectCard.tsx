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
      className="relative card-base overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyber-blue/40"
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-darker/80 z-10"></div>
      
    {/* Project image (responsive height) */}
    <div className="h-40 sm:h-48 bg-black flex items-center justify-center">
        <img
          src={project.imageUrl}
          alt={project.title}
      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105 px-2"
          loading="lazy"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 relative z-20">
  <h3 className="text-lg sm:text-xl font-semibold mb-2 font-orbitron text-pro-offwhite tracking-wide">{project.title}</h3>
  <p className="text-muted mb-4 text-[13px] sm:text-sm leading-relaxed">{project.description}</p>
        
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech, i) => (
            <span 
              key={i} 
              className="px-2 py-1 bg-pro-steel/60 text-cyber-blue rounded-md text-[10px] border border-pro-steel/80"
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
      className="p-2 rounded-md bg-pro-steel/60 hover:bg-pro-steel text-pro-offwhite transition-colors border border-transparent hover:border-cyber-blue/40"
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
              className="p-2 rounded-md bg-cyber-blue/90 hover:bg-cyber-blue text-white transition-colors shadow-sm hover:shadow-[0_0_0_1px_#38bdf8]"
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
