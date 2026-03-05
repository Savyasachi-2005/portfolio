import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const socials = [
  {
    href: 'https://github.com/Savyasachi-2005',
    icon: FaGithub,
    label: 'GitHub',
    sub: '@Savyasachi-2005',
  },
  {
    href: 'https://www.linkedin.com/in/abhishek-hiremath-3020692a3',
    icon: FaLinkedin,
    label: 'LinkedIn',
    sub: 'abhishek-hiremath-3020692a3',
  },
  {
    href: 'mailto:abhishekhiremath0424@gmail.com',
    icon: FaEnvelope,
    label: 'Email',
    sub: 'abhishekhiremath0424@gmail.com',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-[#1F2937] mb-2"
          >
            Get In Touch
          </motion.h2>
          <p className="text-[#6B7280] text-sm mb-6">
            Feel free to reach out for collaborations, opportunities, or just to say hi!
          </p>
          <div className="space-y-3">
            {socials.map(({ href, icon: Icon, label, sub }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noreferrer'}
                className="flex items-center gap-3 p-4 rounded-lg border border-[#E5E7EB] bg-white hover:shadow-sm hover:-translate-y-0.5 transition"
              >
                <div className="p-2 rounded-md bg-[#FAF7F2] text-[#6C63FF] border border-[#E5E7EB]">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-[#1F2937] font-medium text-sm">{label}</p>
                  <p className="text-xs text-[#6B7280]">{sub}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault()
            const data = new FormData(e.currentTarget)
            const name = data.get('name')
            const message = data.get('message')
            const subject = data.get('subject')
            const mailto = `mailto:abhishekhiremath0424@gmail.com?subject=${encodeURIComponent(
              subject || 'Portfolio Contact from ' + name
            )}&body=${encodeURIComponent(message)}`
            window.location.href = mailto
          }}
          className="p-6 rounded-xl bg-white border border-[#E5E7EB] shadow-sm"
        >
          <div className="grid gap-4">
            <div>
              <label className="text-sm text-[#1F2937]">Name</label>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#FAF7F2] px-3 py-2 outline-none focus:ring-2 focus:ring-[#6C63FF]/30 focus:border-[#6C63FF] transition"
              />
            </div>
            <div>
              <label className="text-sm text-[#1F2937]">Subject</label>
              <input
                name="subject"
                className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#FAF7F2] px-3 py-2 outline-none focus:ring-2 focus:ring-[#6C63FF]/30 focus:border-[#6C63FF] transition"
              />
            </div>
            <div>
              <label className="text-sm text-[#1F2937]">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#FAF7F2] px-3 py-2 outline-none focus:ring-2 focus:ring-[#6C63FF]/30 focus:border-[#6C63FF] transition"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex justify-center px-5 py-2.5 rounded-md text-white bg-[#6C63FF] hover:bg-[#5a53f5] transition-transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
