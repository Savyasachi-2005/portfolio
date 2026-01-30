"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, GithubIcon, ExternalLinkIcon, SparklesIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect?: (project: Project) => void;
}

export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-theme-accent via-theme-accent-alt to-theme-accent rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 group-hover:duration-200" />
      
      <div
        className={cn(
          "relative h-full overflow-hidden rounded-2xl",
          "bg-gradient-to-b from-theme-card-bg/80 to-theme-card-bg",
          "border border-theme-accent/10 group-hover:border-theme-accent/30",
          "backdrop-blur-xl shadow-2xl",
          "transition-all duration-500",
          "cursor-pointer"
        )}
        onClick={() => onSelect?.(project)}
        role={onSelect ? "button" : undefined}
        tabIndex={onSelect ? 0 : undefined}
        onKeyDown={(e) => {
          if (!onSelect) return;
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect(project);
          }
        }}
      >
        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-theme-accent/50 via-transparent to-theme-accent-alt/50 animate-pulse" />
        </div>
        
        {/* Image section with overlay */}
        <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,theme(colors.theme.accent/0.1),transparent_70%)]" />
          
          {/* Project image */}
          <div className="relative h-full flex items-center justify-center p-4">
            <motion.img
              src={project.imageUrl}
              alt={project.title}
              className="max-h-full max-w-full object-contain drop-shadow-2xl"
              loading="lazy"
              whileHover={{ scale: 1.08, rotate: 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-theme-card-bg via-theme-card-bg/50 to-transparent" />
          
          {/* Featured badge */}
          {index === 0 && (
            <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-theme-accent/20 border border-theme-accent/40 backdrop-blur-sm">
              <SparklesIcon className="w-3 h-3 text-theme-accent" />
              <span className="text-[10px] font-medium text-theme-accent">Featured</span>
            </div>
          )}
        </div>
        
        {/* Content section */}
        <div className="relative p-4 sm:p-5 space-y-3 sm:space-y-4">
          {/* Title with animated underline */}
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-theme-text font-orbitron tracking-wide group-hover:text-theme-accent transition-colors duration-300">
              {project.title}
            </h3>
            <div className="h-0.5 w-0 group-hover:w-12 bg-gradient-to-r from-theme-accent to-theme-accent-alt transition-all duration-500 rounded-full" />
          </div>
          
          {/* Description */}
          <p className="text-theme-text-alt text-xs sm:text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-3 transition-all duration-300">
            {project.description}
          </p>
          
          {/* Tech stack with staggered animation */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.techStack.slice(0, 4).map((tech, i) => (
              <motion.span
                key={i}
                className={cn(
                  "px-2 py-0.5 sm:py-1 rounded-lg text-[9px] sm:text-[10px] font-medium",
                  "bg-theme-accent/10 text-theme-accent border border-theme-accent/20",
                  "group-hover:bg-theme-accent/20 group-hover:border-theme-accent/40",
                  "transition-all duration-300"
                )}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                viewport={{ once: true }}
              >
                {tech}
              </motion.span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-0.5 sm:py-1 rounded-lg text-[9px] sm:text-[10px] font-medium text-theme-text-alt">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>
          
          {/* Action buttons */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={cn(
                  "flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl",
                  "bg-theme-bg/50 border border-theme-accent/20",
                  "hover:bg-theme-accent hover:border-theme-accent",
                  "text-theme-text-alt hover:text-white",
                  "transition-all duration-300"
                )}
                aria-label="View on GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={cn(
                    "flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl",
                    "bg-theme-accent/20 border border-theme-accent/40",
                    "hover:bg-theme-accent hover:border-theme-accent",
                    "text-theme-accent hover:text-white",
                    "transition-all duration-300"
                  )}
                  aria-label="View Live Demo"
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>
              )}
            </div>
            
            {/* View details arrow */}
            <motion.div
              className="flex items-center gap-1 text-xs sm:text-sm text-theme-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              <span className="hidden sm:inline">View Details</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.div>
          </div>
        </div>
        
        {/* Shine effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
