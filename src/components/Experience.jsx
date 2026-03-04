import { motion } from 'framer-motion'

const items = [
  {
    title: 'RIFT 2026 Hackathon Participant',
    desc:
      'Worked on a Financial Forensics Engine that detects suspicious financial transaction patterns including money muling networks, fan-in/fan-out patterns, shell chains, and velocity anomalies.',
  },
  {
    title: 'Organizer – She Innovates 2026',
    desc:
      'Organized a 12-hour internal hackathon at Siddaganga Institute of Technology focused on empowering women in technology.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-[#1F2937] mb-10"
        >
          Experience
        </motion.h2>

        <div className="relative border-l border-[#E5E7EB] ml-3">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="pl-6 pb-10 relative"
            >
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#6C63FF] border-2 border-white shadow" />
              <h3 className="text-[#1F2937] font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
