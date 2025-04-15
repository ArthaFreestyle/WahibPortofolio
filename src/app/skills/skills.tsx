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
                  { name: "Adobe Photoshop", icon: "🎨" },
                  { name: "Canva", icon: "🖌️" },
                  { name: "CapCut", icon: "🎬" },
                  { name: "Shopee", icon: "🛍️" },
                  { name: "TikTok", icon: "📱" },
                  { name: "Instagram", icon: "📷" },
                  { name: "Microsoft Office", icon: "📊" },
                  { name: "Google Analytics", icon: "📈" },
                ].map((tool, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-neutral-900 p-4 rounded-lg border border-gray-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
                  >
                    <span className="text-2xl">{tool.icon}</span>
                    <span className="text-neutral-700 dark:text-neutral-300">{tool.name}</span>
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
