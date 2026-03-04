import { motion } from 'framer-motion'
import { FaPython, FaJava, FaDocker, FaGitAlt } from 'react-icons/fa'
import { FaC } from 'react-icons/fa6'
import { SiCplusplus, SiR, SiFastapi, SiFlask, SiPostgresql, SiRedis, SiReact, SiTailwindcss } from 'react-icons/si'

const groups = [
  {
    title: 'Languages',
    items: [
      { name: 'Python', icon: FaPython },
      { name: 'Java', icon: FaJava },
      { name: 'C', icon: FaC },
      { name: 'C++', icon: SiCplusplus },
      { name: 'R', icon: SiR },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Flask', icon: SiFlask },
      { name: 'PostgreSQL', icon: SiPostgresql },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'Docker', icon: FaDocker },
      { name: 'Redis', icon: SiRedis },
    ],
  },
]

export default function Technologies() {
  return (
    <section id="tech" className="py-20 bg-[#FAF7F2]">
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
                {group.items.map(({ name, icon: Icon }) => (
                  <motion.div
                    key={name}
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-3 p-3 rounded-lg border border-[#E5E7EB] bg-[#FAF7F2]"
                  >
                    <div className="p-2 rounded-md bg-white border border-[#E5E7EB] text-[#6C63FF]">
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
