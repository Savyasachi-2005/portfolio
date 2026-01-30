import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SkillBadge from '../components/SkillBadge';
import type { Skill } from '../types';
import { SiPython, SiCplusplus, SiR, SiFastapi, SiFlask, 
         SiPostgresql, SiGit, SiDocker, SiRedis } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { FaC } from 'react-icons/fa6';

// Skills data with proper React Icons
const skillsData: Skill[] = [
  // Backend
  {
    name: 'FastAPI',
    icon: SiFastapi,
    category: 'backend'
  },
  {
    name: 'Flask',
    icon: SiFlask,
    category: 'backend'
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    category: 'backend'
  },
  // Tools
  {
    name: 'Git',
    icon: SiGit,
    category: 'tools'
  },
  {
    name: 'Docker',
    icon: SiDocker,
    category: 'tools'
  },
  {
    name: 'Redis',
    icon: SiRedis,
    category: 'tools'
  },
  // Languages
  {
    name: 'Java',
    icon: FaJava,
    category: 'languages'
  },
  {
    name: 'Python',
    icon: SiPython,
    category: 'languages'
  },
  {
    name: 'C',
    icon: FaC,
    category: 'languages'
  },
  {
    name: 'C++',
    icon: SiCplusplus,
    category: 'languages'
  },
  {
    name: 'R',
    icon: SiR,
    category: 'languages'
  }
];

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const backendSkills = skillsData.filter(skill => skill.category === 'backend');
  const toolsSkills = skillsData.filter(skill => skill.category === 'tools');
  const languageSkills = skillsData.filter(skill => skill.category === 'languages');

  const categoryContainer = (title: string, skills: Skill[]) => (
    <motion.div
      className="mb-10 sm:mb-12 md:mb-16 w-full text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h3 
        className="text-lg sm:text-xl md:text-2xl font-bold mb-5 sm:mb-6 md:mb-8 font-orbitron flex items-center justify-center text-theme-text"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.span 
          className="w-6 sm:w-8 h-1 bg-theme-accent mr-2 sm:mr-3"
          initial={{ width: 0 }}
          whileInView={{ width: 32 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        ></motion.span>
        <span>{title}</span>
      </motion.h3>
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2 sm:gap-3 md:gap-4 lg:gap-5 justify-items-center max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <SkillBadge key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );

  // Animation variants for staggered children
  // (Removed unused containerVariants to satisfy no-unused-locals build rule.)
  
  return (
  <section className="section w-full min-h-screen bg-transparent text-theme-text px-3 sm:px-4 md:px-8 pt-20 sm:pt-24 pb-16 sm:pb-20 relative overflow-hidden">
      {/* Removed internal solid background so global dotted pattern is visible */}
      
  <div className="text-center mb-8 sm:mb-12 md:mb-16 w-full relative z-10">
        <motion.h1
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 font-orbitron text-theme-text tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-theme-accent">Skills</span>
        </motion.h1>
        <motion.div
          className="w-16 sm:w-20 md:w-24 h-1 bg-theme-accent mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <motion.p
          className="mt-4 sm:mt-6 md:mt-8 mx-auto max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-theme-text-alt px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I specialize in backend development and AI/ML, with a strong foundation in various programming languages and tools.
        </motion.p>
      </div>

  <div className="w-full relative z-10 max-w-7xl mx-auto">
        {categoryContainer("Backend Development", backendSkills)}
        {categoryContainer("Development Tools", toolsSkills)}
        {categoryContainer("Programming Languages", languageSkills)}
        <div className="section-divider" />
      </div>
    </section>
  );
};

export default Skills;
