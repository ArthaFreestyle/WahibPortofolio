"use client"

import { motion } from "framer-motion"
import { GraduationCap, ChevronRight } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="text-green-600" size={24} />
            <h2 className="text-lg md:text-4xl text-black dark:text-white">Education</h2>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="px-4 md:px-8 lg:px-10">
            <motion.div
              className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-800"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-black dark:text-white">SMKN 2 Bojonegoro</h3>
                  <p className="text-green-600 dark:text-green-500">Kimia Industri</p>
                </motion.div>
                <motion.div
                  className="mt-2 md:mt-0"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400 rounded-full text-sm">
                    2020 – 2023
                  </span>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  className="bg-gray-50 dark:bg-neutral-800 p-5 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-medium text-black dark:text-white mb-3">Kegiatan & Pencapaian</h4>
                  <ul className="space-y-3">
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2"
                    >
                      <ChevronRight className="text-green-500 dark:text-green-400 mt-1 flex-shrink-0" size={16} />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                        Aktif dalam kegiatan ekstrakurikuler
                      </span>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2"
                    >
                      <ChevronRight className="text-green-500 dark:text-green-400 mt-1 flex-shrink-0" size={16} />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                        Mengembangkan keterampilan komunikasi dan kerja tim
                      </span>
                    </motion.li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-gray-50 dark:bg-neutral-800 p-5 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-medium text-black dark:text-white mb-3">Keterampilan yang Dipelajari</h4>
                  <ul className="space-y-3">
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2"
                    >
                      <ChevronRight className="text-green-500 dark:text-green-400 mt-1 flex-shrink-0" size={16} />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                        Analisis dan pemecahan masalah
                      </span>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2"
                    >
                      <ChevronRight className="text-green-500 dark:text-green-400 mt-1 flex-shrink-0" size={16} />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                        Manajemen proyek dan kerja laboratorium
                      </span>
                    </motion.li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
