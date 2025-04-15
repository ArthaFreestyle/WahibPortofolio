"use client"

import { Briefcase } from "lucide-react"
import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "Shopee Live Campaign",
      description: "Kampanye live streaming yang menghasilkan omzet Rp450 juta dalam satu bulan",
      image: "/vid1.png?height=200&width=400",
      tags: ["Live Streaming", "E-commerce", "Sales"],
    },
    {
      title: "Toko Offline Rebrand",
      description: "Rebranding toko offline yang meningkatkan rating Google Maps dari 4.5 ke 4.9",
      image: "/content.png?height=200&width=400",
      tags: ["Branding", "Retail", "Customer Experience"],
    },
    {
      title: "Digital Marketing Strategy",
      description: "Strategi pemasaran digital yang meningkatkan engagement sebesar 200%",
      image: "/feed3.jpg?height=200&width=400",
      tags: ["Digital Marketing", "Strategy", "Social Media"],
    },
  ]

  return (
    <section id="projects" className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="text-green-600" size={24} />
            <h2 className="text-lg md:text-4xl text-black dark:text-white">Projects & Campaigns</h2>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-800 overflow-hidden flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <motion.h3
                      className="text-xl font-semibold text-black dark:text-white mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className="text-neutral-700 dark:text-neutral-300 text-sm flex-grow"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {project.description}
                    </motion.p>
                    <motion.div
                      className="flex flex-wrap gap-2 mt-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {project.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="px-2 py-1 bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
