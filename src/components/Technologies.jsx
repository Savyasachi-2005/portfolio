import { motion } from 'framer-motion'
import { FaPython, FaJava, FaDocker, FaGitAlt } from 'react-icons/fa'
import { SiC, SiCplusplus, SiR, SiFastapi, SiFlask, SiPostgresql, SiRedis, SiReact, SiTailwindcss } from 'react-icons/si'

const groups = [
  {
    title: 'Languages',
    items: [
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
      { name: 'C', icon: SiC, color: '#A8B9CC' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'R', icon: SiR, color: '#276DC3' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'Flask', icon: SiFlask, color: '#000000' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'Docker', icon: FaDocker, color: '#2496ED' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    ],
  },
]

export default function Technologies() {
  return (
    <section id="tech" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-[#1F2937] mb-8"
        >
          Tech Stack
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.05 }}
              className="p-5 rounded-xl bg-white border border-[#E5E7EB] shadow-sm hover:shadow-md hover:-translate-y-1 transition relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-br from-[#6C63FF]/10 to-[#00A8A8]/10" />
              <h3 className="text-[#1F2937] font-medium mb-4">{group.title}</h3>
              <div className="space-y-3">
                {group.items.map(({ name, icon: Icon, color }) => (
                  <motion.div
                    key={name}
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-3 p-3 rounded-lg border border-[#E5E7EB] bg-[#FAF7F2]"
                  >
                    <div className="p-2 rounded-md bg-white border border-[#E5E7EB]" style={{ color }}>
                      <Icon size={18} />
                    </div>
                    <span className="text-sm text-[#1F2937]">{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
