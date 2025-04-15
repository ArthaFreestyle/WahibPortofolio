"use client"

import { motion } from "framer-motion"
import { Code } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { useState, useEffect } from "react"

export default function Skills() {
  const [skillValues, setSkillValues] = useState({
    contentCreation: 0,
    videoEditing: 0,
    digitalMarketing: 0,
    communication: 0,
    teamwork: 0,
    marketResearch: 0,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setSkillValues({
        contentCreation: 90,
        videoEditing: 85,
        digitalMarketing: 95,
        communication: 90,
        teamwork: 85,
        marketResearch: 80,
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="skill" className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Code className="text-rose-600" size={24} />
            <h2 className="text-lg md:text-4xl text-black dark:text-white">Skills & Toolkits</h2>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm mb-8">
            My professional skills and the tools I use to create impactful marketing strategies.
          </p>

          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="mb-6 bg-neutral-100 dark:bg-neutral-900">
              <TabsTrigger
                value="skills"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-neutral-800"
              >
                Skills
              </TabsTrigger>
              <TabsTrigger
                value="tools"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-neutral-800"
              >
                Tools & Platforms
              </TabsTrigger>
            </TabsList>

            <TabsContent value="skills" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Content Creation
                      </span>
                      <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                        {skillValues.contentCreation}%
                      </span>
                    </div>
                    <Progress
                      value={skillValues.contentCreation}
                      className="h-2 bg-neutral-200 dark:bg-neutral-800"
                      indicatorClassName="bg-rose-500"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Video Editing</span>
                      <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                        {skillValues.videoEditing}%
                      </span>
                    </div>
                    <Progress
                      value={skillValues.videoEditing}
                      className="h-2 bg-neutral-200 dark:bg-neutral-800"
                      indicatorClassName="bg-rose-500"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Digital Marketing
                      </span>
                      <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                        {skillValues.digitalMarketing}%
                      </span>
                    </div>
                    <Progress
                      value={skillValues.digitalMarketing}
                      className="h-2 bg-neutral-200 dark:bg-neutral-800"
                      indicatorClassName="bg-rose-500"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Communication & Public Speaking
                      </span>
                      <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                        {skillValues.communication}%
                      </span>
                    </div>
                    <Progress
                      value={skillValues.communication}
                      className="h-2 bg-neutral-200 dark:bg-neutral-800"
                      indicatorClassName="bg-rose-500"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Teamwork & Leadership
                      </span>
                      <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                        {skillValues.teamwork}%
                      </span>
                    </div>
                    <Progress
                      value={skillValues.teamwork}
                      className="h-2 bg-neutral-200 dark:bg-neutral-800"
                      indicatorClassName="bg-rose-500"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Market Research & Negotiation
                      </span>
                      <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                        {skillValues.marketResearch}%
                      </span>
                    </div>
                    <Progress
                      value={skillValues.marketResearch}
                      className="h-2 bg-neutral-200 dark:bg-neutral-800"
                      indicatorClassName="bg-rose-500"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tools">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  {
                    name: "Adobe Photoshop",
                    logo: (
                      <svg
                        xmlns="ps.svg"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 fill-current text-blue-600"
                      >
                        <path d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.4 11.8c-.5.51-1.13.87-1.82 1.05-.74.19-1.5.28-2.27.27-.26 0-.52 0-.78-.01-.22 0-.44-.02-.66-.04V18.3c0 .09-.05.17-.13.21-.07.04-.16.04-.24 0-.24-.1-.5-.15-.75-.16-.23-.02-.46.03-.67.14-.07.04-.15.04-.22 0-.08-.04-.13-.12-.13-.21v-11c0-.13.08-.23.2-.26.35-.06 1.56-.27 2.73-.27.71-.02 1.41.08 2.09.31.54.18 1.01.51 1.36.96.32.42.48.93.48 1.46.01.73-.24 1.43-.69 1.96zm7.35 4.64c-.14.25-.37.44-.64.54-.22.1-.47.15-.72.14-.24.01-.47-.04-.69-.14-.28-.13-.44-.4-.44-.7v-.28c0-.07.03-.14.07-.19.05-.05.11-.08.18-.08h.26c.06 0 .12.02.17.05.05.03.1.06.14.1.07.05.14.08.21.11.07.02.15.03.23.03.13 0 .26-.03.38-.09.1-.04.18-.12.23-.22.05-.13.08-.26.07-.4.01-.14-.03-.28-.1-.4-.1-.15-.22-.28-.36-.38-.16-.13-.32-.25-.49-.35-.2-.12-.38-.26-.56-.41-.17-.16-.3-.35-.39-.56-.1-.24-.15-.5-.15-.76-.01-.36.1-.72.32-1.01.2-.26.47-.46.78-.58.3-.12.63-.18.95-.18.24 0 .48.03.71.1.19.05.36.15.5.29.11.13.17.29.17.46v.28c0 .07-.03.14-.07.19-.05.05-.11.08-.18.08h-.22c-.06 0-.11-.01-.17-.03-.05-.02-.1-.05-.14-.08-.07-.04-.14-.07-.21-.1-.08-.02-.17-.03-.25-.03-.11 0-.22.03-.32.08-.08.04-.15.1-.2.18-.05.1-.07.22-.06.33-.01.13.03.25.1.36.1.14.22.26.36.36.16.12.32.23.49.34.19.12.38.25.55.4.17.16.31.34.41.55.11.25.16.51.15.78.01.38-.1.75-.31 1.05zm-.5-8.18c-.17.14-.38.22-.6.22-.22.01-.43-.07-.6-.2-.17-.15-.27-.37-.27-.6.01-.23.1-.44.27-.6.17-.14.38-.22.6-.22.22 0 .43.08.6.22.17.16.26.37.27.6 0 .23-.1.45-.27.6z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Canva",
                    logo: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 fill-current text-blue-400"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM6.95 14.43a2.683 2.683 0 0 1-2.678-2.677 2.683 2.683 0 0 1 2.678-2.677 2.683 2.683 0 0 1 2.677 2.677 2.683 2.683 0 0 1-2.677 2.677zm5.332 0a2.683 2.683 0 0 1-2.677-2.677 2.683 2.683 0 0 1 2.677-2.677 2.683 2.683 0 0 1 2.677 2.677 2.683 2.683 0 0 1-2.677 2.677zm5.338 0a2.683 2.683 0 0 1-2.677-2.677 2.683 2.683 0 0 1 2.677-2.677 2.683 2.683 0 0 1 2.677 2.677 2.683 2.683 0 0 1-2.677 2.677z" />
                      </svg>
                    ),
                  },
                  {
                    name: "CapCut",
                    logo: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 fill-current text-green-500"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Shopee",
                    logo: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 fill-current text-orange-500"
                      >
                        <path d="M12 1.5C6.204 1.5 1.5 6.204 1.5 12S6.204 22.5 12 22.5 22.5 17.796 22.5 12 17.796 1.5 12 1.5zM9.9 17.25L4.65 12l1.48-1.48 3.77 3.758 7.97-7.969L19.35 7.8 9.9 17.25z" />
                      </svg>
                    ),
                  },
                  {
                    name: "TikTok",
                    logo: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Instagram",
                    logo: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 fill-current text-pink-600"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Microsoft Office",
                    logo: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 fill-current text-red-500"
                      >
                        <path d="M23 1.5q.41 0 .7.3.3.29.3.7v19q0 .41-.3.7-.29.3-.7.3H7q-.41 0-.7-.3-.3-.29-.3-.7V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h5V2.5q0-.41.3-.7.29-.3.7-.3zM6 13.28l-1.42.92-1.43-.92V10.7L1 9.49l3.01-1.23 1.93 1.23v2.8zm7-9.28H8v3h5v-3zm0 4.5H8v3h5v-3zm0 4.5H8v3h5v-3zm0 4.5H8v3h5v-3zM21.5 18h-5v3h5v-3zm0-4.5h-5v3h5v-3zm0-4.5h-5v3h5v-3zm0-4.5h-5v3h5v-3z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Google Analytics",
                    logo: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 fill-current text-yellow-500"
                      >
                        <path d="M22.84 2.998C22.84 1.341 21.49 0 19.822 0c-1.667 0-3.018 1.341-3.018 2.998 0 1.656 1.351 2.998 3.018 2.998.366 0 .716-.066 1.039-.187l2.572 2.572c.25.25.654.25.904 0 .25-.25.25-.654 0-.904l-2.572-2.572c.121-.323.187-.673.187-1.039 0-.049-.005-.097-.007-.146h-1.116c.004.048.007.097.007.146 0 1.042-.845 1.886-1.886 1.886-1.042 0-1.886-.845-1.886-1.886 0-1.042.845-1.886 1.886-1.886.049 0 .097.003.146.007V.893c-.048-.002-.097-.007-.146-.007-1.667 0-3.018 1.341-3.018 2.998 0 .366.066.716.187 1.039l-2.572 2.572c-.25.25-.25.654 0 .904.125.125.288.187.452.187.163 0 .327-.062.452-.187l2.572-2.572c.323.121.673.187 1.039.187 1.667 0 3.018-1.341 3.018-2.998zM7.146 18.994c0 1.042-.845 1.886-1.886 1.886-1.042 0-1.886-.845-1.886-1.886 0-1.042.845-1.886 1.886-1.886.049 0 .097.003.146.007v-1.116c-.048-.002-.097-.007-.146-.007-1.667 0-3.018 1.341-3.018 2.998 0 1.657 1.351 2.998 3.018 2.998 1.667 0 3.018-1.341 3.018-2.998 0-.366-.066-.716-.187-1.039l2.572-2.572c.25-.25.25-.654 0-.904-.25-.25-.654-.25-.904 0l-2.572 2.572c-.323-.121-.673-.187-1.039-.187-.049 0-.097.005-.146.007v1.116c.048-.004.097-.007.146-.007 1.042 0 1.886.845 1.886 1.886zm10.675-6.001c-.366 0-.716.066-1.039.187l-2.572-2.572c-.25-.25-.654-.25-.904 0-.25.25-.25.654 0 .904l2.572 2.572c-.121.323-.187.673-.187 1.039 0 1.657 1.351 2.998 3.018 2.998 1.667 0 3.018-1.341 3.018-2.998 0-1.657-1.351-2.998-3.018-2.998-.049 0-.097.005-.146.007v1.116c.048-.004.097-.007.146-.007 1.042 0 1.886.845 1.886 1.886 0 1.042-.845 1.886-1.886 1.886-1.042 0-1.886-.845-1.886-1.886 0-1.042.845-1.886 1.886-1.886.049 0 .097.003.146.007v-1.116c-.049-.004-.097-.007-.146-.007z" />
                      </svg>
                    ),
                  },
                ].map((tool, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-neutral-900 p-4 rounded-lg border border-gray-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
                  >
                    <div className="flex-shrink-0">{tool.logo}</div>
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
