"use client"

import { motion } from "framer-motion"
import { User, ChevronRight } from "lucide-react"

function About() {
  return (
    <section id="about" className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <div className="flex items-center gap-2 mb-4">
          <User className="text-rose-600" size={24} />
          <h2 className="text-lg md:text-4xl text-black dark:text-white">About Me</h2>
        </div>
        
      </div>

      <div className="max-w-7xl mx-auto pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid md:grid-cols-2 gap-8 px-4 md:px-8 lg:px-10">
            <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-800">
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Who I Am</h3>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm md:text-base">
                Berpengalaman di bidang pemasaran, saya fokus pada strategi kreatif yang berdampak. Saya memiliki
                kemampuan komunikasi yang baik, cepat beradaptasi, dan senang bekerja dalam tim maupun langsung dengan
                pelanggan.
              </p>
              <p className="text-neutral-700 dark:text-neutral-300 mt-4 leading-relaxed text-sm md:text-base">
                Siap berkontribusi dalam pengembangan strategi marketing dengan pendekatan inovatif yang menghasilkan
                pertumbuhan bisnis yang nyata.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-800">
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">My Approach</h3>
              <ul className="space-y-3">
                {[
                  "Mengutamakan komunikasi yang jelas dan efektif",
                  "Menganalisis data untuk strategi yang tepat sasaran",
                  "Menciptakan konten yang menarik dan relevan",
                  "Membangun hubungan jangka panjang dengan audiens",
                  "Terus belajar dan beradaptasi dengan tren terbaru",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <ChevronRight className="text-rose-500 dark:text-rose-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
