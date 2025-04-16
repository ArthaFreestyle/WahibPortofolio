"use client"

import Image from "next/image"
import { useEffect, useId, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Briefcase } from "lucide-react"

// Hook to detect clicks outside an element
function useOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref, callback])
}

export default function Projects() {
  const [active, setActive] = useState(null)
  const ref = useRef(null)
  const id = useId()

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null)
      }
    }

    if (active) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [active])

  useOutsideClick(ref, () => setActive(null))

  const projects = [
    {
      title: "Shopee Live Campaign",
      description: "Kumpulan link video konten TikTok dan personal project",
      image: "/vid1.png?height=200&width=400",
      tags: ["TikTok", "Instagram", "YouTube"],
      ctaText: "Lihat Detail",
      ctaLink: "#",
      content: () => (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-2 text-black dark:text-white">LINK KONTEN AKUN @precise_shoes</h4>
            <div className="grid grid-cols-1 gap-2">
              <a
                href="https://vt.tiktok.com/ZSrXH3sXC/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrXH3sXC/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrX9Mk9U/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrX9Mk9U/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrX9he8G/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrX9he8G/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrXH3Dxq/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrXH3Dxq/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrXHwHWV/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrXHwHWV/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrX9kRhh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrX9kRhh/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrXHKAhW/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrXHKAhW/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrXHo3gs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrXHo3gs/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrX9Ywyj/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrX9Ywyj/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrXHcV7X/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrXHcV7X/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrX9LyPg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrX9LyPg/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrXHwrpJ/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrXHwrpJ/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrX92hkL/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrX92hkL/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrX91WXF/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrX91WXF/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrXHK8L5/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrXHK8L5/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrX9JSLb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrX9JSLb/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrX9hDMB/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrX9hDMB/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrX9FtPo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrX9FtPo/
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2 text-black dark:text-white">LINK KONTEN AKUN @sepatu.precise</h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">full dikelola oleh wahib</p>
            <div className="grid grid-cols-1 gap-2">
              <a
                href="https://vt.tiktok.com/ZSrX9a3y8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrX9a3y8/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrX99e2D/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrX99e2D/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrX9CwMY/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrX9CwMY/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrX9fmMA/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrX9fmMA/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrX99jVJ/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrX99jVJ/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrX9aAt6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrX9aAt6/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrX9yj4r/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrX9yj4r/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrX9Up2N/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrX9Up2N/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrX9s9TE/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrX9s9TE/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrX9fL3S/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrX9fL3S/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrX9XuJx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrX9XuJx/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrX9DCuj/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrX9DCuj/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrX9QqNL/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrX9QqNL/
              </a>
              <a
                href="https://vt.tiktok.com/ZSrXC41LH/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline truncate"
              >
                https://vt.tiktok.com/ZSrXC41LH/
              </a>
            </div>
          </div>

          
        </div>
      ),
    },
    {
      title: "Toko Offline Rebrand",
      description: "Rebranding toko offline yang meningkatkan rating Google Maps dari 4.5 ke 4.9",
      image: "/content.png?height=200&width=400",
      tags: ["Branding", "Retail", "Customer Experience"],
      ctaText: "Lihat Detail",
      ctaLink: "#",
      content: () => (
        <div>
          <p>
            Proyek rebranding ini melibatkan transformasi menyeluruh dari identitas visual hingga pengalaman pelanggan
            di toko offline. Hasil yang dicapai meliputi:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>Peningkatan rating Google Maps dari 4.5 ke 4.9</li>
            <li>Kenaikan traffic pengunjung sebesar 45%</li>
            <li>Peningkatan rata-rata nilai transaksi sebesar 30%</li>
            <li>Penguatan identitas merek yang konsisten di semua touchpoint</li>
          </ul>
          <p className="mt-2">
            Rebranding ini membuktikan bahwa pengalaman pelanggan yang baik di toko fisik tetap menjadi faktor penting
            dalam era digital.
          </p>
        </div>
      ),
    },
    {
      title: "Digital Marketing Strategy",
      description: "Strategi pemasaran digital yang meningkatkan engagement sebesar 200%",
      image: "/feed3.jpg?height=200&width=400",
      tags: ["Digital Marketing", "Strategy", "Social Media"],
      ctaText: "Lihat Detail",
      ctaLink: "#",
      content: () => (
        <div>
          <p>
            Strategi pemasaran digital komprehensif ini dirancang untuk meningkatkan kehadaran merek dan engagement di
            berbagai platform digital. Hasilnya mencakup:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>Peningkatan engagement sebesar 200% di semua platform</li>
            <li>Pertumbuhan follower organik sebesar 150%</li>
            <li>Peningkatan traffic website sebesar 180%</li>
            <li>Konversi yang lebih tinggi dari leads digital</li>
          </ul>
          <p className="mt-2">
            Strategi ini menggabungkan konten berkualitas, analisis data, dan optimasi berkelanjutan untuk mencapai
            hasil yang signifikan dalam waktu singkat.
          </p>
        </div>
      ),
    },
  ]

  const CloseIcon = () => {
    return (
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.05 } }}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 text-black dark:text-white"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </motion.svg>
    )
  }

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
          {/* Expandable Card Implementation */}
          <AnimatePresence>
            {active && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 h-full w-full z-10"
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {active ? (
              <div className="fixed inset-0 grid place-items-center z-[100] px-4">
                <motion.button
                  key={`button-close-${id}`}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.05 } }}
                  className="flex absolute top-4 right-4 lg:top-8 lg:right-8 items-center justify-center bg-white dark:bg-neutral-800 rounded-full h-8 w-8 z-[101]"
                  onClick={() => setActive(null)}
                >
                  <CloseIcon />
                </motion.button>

                <motion.div
                  layoutId={`card-${active.title}-${id}`}
                  ref={ref}
                  className="w-full max-w-[500px] max-h-[90vh] flex flex-col bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 shadow-sm overflow-hidden"
                >
                  <motion.div layoutId={`image-${active.title}-${id}`} className="relative h-64">
                    <Image
                      src={active.image || "/placeholder.svg"}
                      alt={active.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </motion.div>

                  <div className="overflow-y-auto max-h-[calc(90vh-16rem)]">
                    <div className="flex justify-between items-start p-6">
                      <div>
                        <motion.h3
                          layoutId={`title-${active.title}-${id}`}
                          className="font-bold text-xl text-black dark:text-white"
                        >
                          {active.title}
                        </motion.h3>
                        <motion.p
                          layoutId={`description-${active.title}-${id}`}
                          className="text-neutral-700 dark:text-neutral-300"
                        >
                          {active.description}
                        </motion.p>
                      </div>

                      <motion.a
                        layoutId={`button-${active.title}-${id}`}
                        href={active.ctaLink}
                        className="px-4 py-2 text-sm rounded-full font-bold bg-green-500 text-white"
                      >
                        {active.ctaText}
                      </motion.a>
                    </div>

                    <div className="pt-2 relative px-6">
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base flex flex-col items-start gap-4"
                      >
                        {active.content()}
                      </motion.div>

                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-wrap gap-2 mt-4 pb-6"
                      >
                        {active.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="px-3 py-1 bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>

          <div className="px-4 md:px-8 lg:px-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  layoutId={`card-${project.title}-${id}`}
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActive(project)}
                  className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 shadow-sm overflow-hidden flex flex-col h-full cursor-pointer hover:shadow-md transition-shadow"
                >
                  <motion.div layoutId={`image-${project.title}-${id}`} className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      whileHover={{ opacity: 0.8 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <div className="p-6 flex-grow flex flex-col">
                    <motion.h3
                      layoutId={`title-${project.title}-${id}`}
                      className="text-xl font-semibold text-black dark:text-white mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${project.title}-${id}`}
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
                    <motion.button
                      layoutId={`button-${project.title}-${id}`}
                      className="mt-4 px-4 py-2 text-sm rounded-full font-bold bg-gray-100 dark:bg-neutral-800 hover:bg-green-500 hover:text-white text-black dark:text-white self-start"
                    >
                      {project.ctaText}
                    </motion.button>
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
