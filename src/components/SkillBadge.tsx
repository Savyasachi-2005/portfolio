import { motion } from 'framer-motion';
import type { Skill } from '../types';

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

const SkillBadge = ({ skill, index }: SkillBadgeProps) => {
  const Icon = skill.icon;
  
  return (
    <motion.div
      className="bg-cyber-darker rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-cyber-blue/20 transition-all duration-300 border border-gray-800 hover:border-cyber-blue/50 text-center w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ 
        y: -5, 
        scale: 1.03, 
        transition: { duration: 0.2 } 
      }}
    >
      <motion.div 
        className="w-12 h-12 mb-4 flex items-center justify-center text-cyber-blue mx-auto"
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.9, 1, 0.9],
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
        whileHover={{ 
          rotate: [0, -10, 10, -10, 0],
          scale: 1.2,
          transition: { duration: 0.5 }
        }}
      >
        <Icon size={40} />
      </motion.div>
      <h3 className="text-white font-medium text-center w-full">{skill.name}</h3>
    </motion.div>
  );
};

export default SkillBadge;
