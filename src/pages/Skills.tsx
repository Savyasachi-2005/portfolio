import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SkillBadge from '../components/SkillBadge';
import type { Skill } from '../types';
import { SiPython, SiCplusplus, SiR, SiOpenjdk, SiFastapi, SiFlask, 
         SiPostgresql, SiGit, SiDocker, SiRedis } from 'react-icons/si';
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
    icon: SiOpenjdk,
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
      className="mb-16 w-full text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h3 
        className="text-2xl font-bold mb-8 font-orbitron flex items-center justify-center"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.span 
          className="w-8 h-1 bg-cyber-blue mr-3"
          initial={{ width: 0 }}
          whileInView={{ width: 32 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        ></motion.span>
        <span className="glow-text">{title}</span>
      </motion.h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-5 md:gap-6 justify-items-center max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <SkillBadge key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );

  // Animation variants for staggered children
  // (Removed unused containerVariants to satisfy no-unused-locals build rule.)
  
  return (
    <section className="section w-full min-h-screen bg-cyber-dark text-pro-text px-4 md:px-8 pt-28 pb-24 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at center, #38bdf810 1px, transparent 1px)', backgroundSize: '34px 34px' }} />
        {/* Single subtle orb */}
        <motion.div className="absolute -left-24 top-52 w-72 h-72 rounded-full bg-cyber-blue/10 blur-3xl" initial={{ opacity: 0 }} animate={{ opacity: 0.5, y: [-10, 10, -10] }} transition={{ duration: 18, repeat: Infinity }} />
      </div>
      
    <div className="text-center mb-16 w-full relative z-10">
        <motion.h1
      className="text-3xl md:text-5xl font-semibold mb-4 font-orbitron glow-text tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-cyber-blue">Skills</span>
        </motion.h1>
        <motion.div
          className="w-24 h-1 bg-cyber-blue mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <motion.p
          className="mt-8 mx-auto text-muted max-w-2xl text-base md:text-lg leading-relaxed"
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
