"use client"

import { motion } from "framer-motion"
import { User, ChevronRight } from "lucide-react"

function About() {
  return (
    <section
      id="about"
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10 overflow-hidden"
    >
      {/* Title */}
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 40 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <User className="text-rose-600" size={28} />
          </motion.div>
          <h2 className="text-lg md:text-4xl font-bold text-black dark:text-white tracking-tight">
            About Me
          </h2>
        </motion.div>
      </div>

      {/* Content Cards */}
      <div className="max-w-7xl mx-auto pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-10 px-4 md:px-8 lg:px-10"
        >
          {/* Who I Am */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -80, scale: 0.9 },
              visible: { opacity: 1, x: 0, scale: 1 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-800"
          >
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Who I Am</h3>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
              Berpengalaman di bidang pemasaran, saya fokus pada strategi kreatif yang berdampak. Saya memiliki
              kemampuan komunikasi yang baik, cepat beradaptasi, dan senang bekerja dalam tim maupun langsung
              dengan pelanggan.
            </p>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
              Siap berkontribusi dalam pengembangan strategi marketing dengan pendekatan inovatif yang menghasilkan
              pertumbuhan bisnis yang nyata.
            </p>
          </motion.div>

          {/* My Approach */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 80, scale: 0.9 },
              visible: { opacity: 1, x: 0, scale: 1 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-800"
          >
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">My Approach</h3>
            <ul className="space-y-4">
              {[
                "Mengutamakan komunikasi yang jelas dan efektif",
                "Menganalisis data untuk strategi yang tepat sasaran",
                "Menciptakan konten yang menarik dan relevan",
                "Membangun hubungan jangka panjang dengan audiens",
                "Terus belajar dan beradaptasi dengan tren terbaru",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2"
                >
                  <ChevronRight
                    className="text-rose-500 dark:text-rose-400 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
