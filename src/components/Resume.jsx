import { motion } from 'framer-motion'
import { FaDownload, FaEye } from 'react-icons/fa'
import resumePDF from '../assets/resume/resume_c.pdf'

export default function Resume() {
  return (
    <section id="resume" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-[#1F2937] mb-8"
        >
          Resume
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-[#E5E7EB] overflow-hidden bg-[#FAF7F2] shadow-lg">
              <div className="aspect-[8.5/11] max-h-[600px] w-full">
                <iframe
                  src={`${resumePDF}#view=FitH`}
                  className="w-full h-full"
                  title="Resume Preview"
                />
              </div>
            </div>
          </motion.div>

          {/* Info and Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Quick Summary */}
            <div className="rounded-xl border border-[#E5E7EB] bg-[#FAF7F2] p-6">
              <h3 className="text-lg font-semibold text-[#1F2937] mb-3">Quick Overview</h3>
              <ul className="space-y-2 text-sm text-[#6B7280]">
                <li className="flex items-start gap-2">
                  <span className="text-[#6C63FF] mt-0.5">•</span>
                  <span>CSE (AI & ML) Student at SIT, Tumkur</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6C63FF] mt-0.5">•</span>
                  <span>Backend Developer & AI/ML Enthusiast</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6C63FF] mt-0.5">•</span>
                  <span>Experience with FastAPI, React, PostgreSQL</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6C63FF] mt-0.5">•</span>
                  <span>Multiple hackathons & project showcase</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <motion.a
                href={resumePDF}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#6C63FF] text-white rounded-lg hover:bg-[#5a52d5] transition font-medium shadow-md"
              >
                <FaEye size={18} />
                View Full Resume
              </motion.a>
              
              <motion.a
                href={resumePDF}
                download="Abhishek_Hiremath_Resume.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1F2937] text-white rounded-lg hover:bg-[#374151] transition font-medium shadow-md"
              >
                <FaDownload size={18} />
                Download PDF
              </motion.a>
            </div>

            {/* Last Updated */}
            <div className="text-center text-xs text-[#6B7280] pt-4 border-t border-[#E5E7EB]">
              <p>Last updated: March 2026</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
