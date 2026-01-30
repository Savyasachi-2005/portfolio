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
      className="bg-theme-card-bg p-2 sm:p-3 md:p-4 flex flex-col items-center justify-center text-center w-full rounded-lg shadow-lg hover:bg-theme-card-hover transition-colors duration-300"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
      whileHover={{ y: -4, scale: 1.025, transition: { duration: 0.25 } }}
    >
  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-3 md:mb-4 flex items-center justify-center text-theme-accent mx-auto">
        <Icon size={24} className="sm:hidden" />
        <Icon size={30} className="hidden sm:block md:hidden" />
        <Icon size={36} className="hidden md:block" />
      </div>
      <h3 className="text-theme-text font-medium text-center w-full text-[10px] sm:text-xs md:text-sm tracking-wide">{skill.name}</h3>
    </motion.div>
  );
};

export default SkillBadge;
