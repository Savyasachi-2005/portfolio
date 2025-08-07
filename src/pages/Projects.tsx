import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import type { Project } from '../types';

// Sample project data - replace with actual projects later
const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'AI-Powered Task Manager',
    description: 'A task management app with AI-powered priority suggestions and task categorization.',
    techStack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Machine Learning'],
    githubUrl: 'https://github.com/username/project1',
    liveUrl: 'https://project1-demo.com',
    imageUrl: 'https://via.placeholder.com/600x400?text=Project+1'
  },
  {
    id: 'project-2',
    title: 'Blockchain Voting System',
    description: 'A secure digital voting platform built on blockchain technology for transparent elections.',
    techStack: ['Solidity', 'Ethereum', 'Web3.js', 'React'],
    githubUrl: 'https://github.com/username/project2',
    imageUrl: 'https://via.placeholder.com/600x400?text=Project+2'
  },
  {
    id: 'project-3',
    title: 'Real-time Chat Application',
    description: 'End-to-end encrypted messaging platform with real-time updates and media sharing.',
    techStack: ['TypeScript', 'Socket.io', 'Express', 'Redis', 'MongoDB'],
    githubUrl: 'https://github.com/username/project3',
    liveUrl: 'https://project3-demo.com',
    imageUrl: 'https://via.placeholder.com/600x400?text=Project+3'
  },
  {
    id: 'project-4',
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for visualizing and analyzing large datasets with filtering capabilities.',
    techStack: ['Python', 'Flask', 'D3.js', 'Pandas', 'PostgreSQL'],
    githubUrl: 'https://github.com/username/project4',
    imageUrl: 'https://via.placeholder.com/600x400?text=Project+4'
  }
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="pt-24 pb-16 px-4 sm:px-6 md:px-8 w-full"
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
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
