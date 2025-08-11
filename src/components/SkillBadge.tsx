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
      className="card-base p-3 sm:p-4 flex flex-col items-center justify-center text-center w-full"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
      whileHover={{ y: -4, scale: 1.025, transition: { duration: 0.25 } }}
    >
  <div className="icon-float w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 flex items-center justify-center text-cyber-blue mx-auto">
        <Icon size={34} className="sm:hidden" />
        <Icon size={38} className="hidden sm:block" />
      </div>
      <h3 className="text-pro-offwhite font-medium text-center w-full text-xs sm:text-sm tracking-wide">{skill.name}</h3>
    </motion.div>
  );
};

export default SkillBadge;
