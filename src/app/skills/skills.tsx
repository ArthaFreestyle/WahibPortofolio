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
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 234" className="w-6 h-6">
                        <path
                          fill="#001E36"
                          d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z"
                        />
                        <path
                          fill="#31A8FF"
                          d="M54 164.1V61.2c0-.7.3-1.1 1-1.1 1.7 0 3.3 0 5.6-.1 2.4-.1 4.9-.1 7.6-.1 2.7 0 5.6 0 8.7.1 3.1.1 6 .3 8.5.6 2.5.3 4.8.8 6.8 1.5 2 .7 3.6 1.6 4.9 2.7 1.3 1.1 2.3 2.4 3 4 .7 1.6 1 3.4 1 5.4 0 3.6-.8 6.6-2.4 9-1.6 2.4-3.9 4.3-6.8 5.8-2.9 1.5-6.3 2.5-10.3 2.9-4 .4-8.2.7-12.6.7h-5.4v28.9c0 .8-.4 1.2-1.1 1.2h-7.5c-.7 0-1-.4-1-.8zm8.3-95.2v36.2h4c2.4 0 4.9-.1 7.4-.2 2.5-.1 4.8-.6 6.8-1.3 2-.7 3.7-1.8 4.9-3.3 1.2-1.5 1.9-3.6 1.9-6.2 0-2.2-.5-4-1.5-5.4-1-1.4-2.3-2.4-3.9-3.1-1.6-.7-3.5-1.1-5.6-1.3-2.1-.2-4.3-.3-6.5-.3h-7.5zM146.1 85.9c-3.1-1.6-6.4-2.4-9.9-2.4-2.1 0-4.1.3-5.9.8-1.8.5-3.3 1.3-4.5 2.2-1.2 1-2.1 2.1-2.8 3.5-.7 1.4-1 2.9-1 4.6 0 1.8.4 3.3 1.2 4.5.8 1.2 1.8 2.2 3.1 3 1.3.8 2.7 1.5 4.3 2.1 1.6.6 3.2 1.2 4.9 1.7 2.3.8 4.7 1.6 7.1 2.4 2.4.8 4.6 1.8 6.5 3.1 1.9 1.3 3.5 2.9 4.7 4.9 1.2 2 1.8 4.5 1.8 7.5 0 3.4-.7 6.3-2.1 8.7-1.4 2.4-3.2 4.4-5.4 5.9-2.2 1.5-4.8 2.6-7.6 3.3-2.9.7-5.8 1.1-8.9 1.1-4.3 0-8.3-.7-11.9-2.2-3.6-1.5-6.8-3.4-9.5-5.9.4-.7.9-1.3 1.5-1.9.6-.6 1.1-1.1 1.6-1.5.7.7 1.5 1.3 2.5 2 1 .7 2.1 1.4 3.2 2s2.4 1.1 3.7 1.5c1.3.4 2.7.6 4.1.6 2.3 0 4.4-.3 6.3-.9 1.9-.6 3.5-1.5 4.8-2.5 1.3-1.1 2.3-2.3 3-3.8.7-1.5 1-3 1-4.6 0-1.9-.4-3.5-1.2-4.8-.8-1.3-1.9-2.3-3.2-3.2-1.3-.9-2.8-1.6-4.5-2.2-1.7-.6-3.4-1.2-5.1-1.7-2.3-.7-4.6-1.5-6.8-2.3-2.3-.8-4.3-1.8-6.1-3.1-1.8-1.3-3.2-2.9-4.3-4.8-1.1-1.9-1.7-4.3-1.7-7.2 0-3.3.7-6 2-8.2 1.3-2.2 3.1-4 5.2-5.4 2.2-1.4 4.6-2.4 7.4-3 2.7-.6 5.5-.9 8.3-.9 3.6 0 6.8.5 9.5 1.4 2.7.9 5.2 2.3 7.7 4.3-.2.2-.5.4-.9.7-.4.3-.7.6-1.1.9-.4.3-.7.6-1.1.9-.4.3-.6.6-.8.8-1.3-1.1-2.9-2.1-5-3z"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Canva",
                    logo: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
                        <path
                          fill="#00C4CC"
                          d="M432 240c0 49.1-14.2 83.52-39.29 108.64-24.07 24.07-56.01 38.17-94.29 38.17-37.75 0-69.51-13.69-93.29-37.53-24.84-24.86-38.71-58.93-38.71-110.28 0-49.35 13.89-84.04 38.71-108.97C229.96 105.13 261.73 92 299.42 92c38.28 0 70.22 13.5 94.29 37.65C418.8 154.79 432 189.9 432 240zm-60.99 0c0-27.85-5.6-47.43-15.42-59.01-9.58-11.21-23.74-17.8-41.59-17.8-18.17 0-32.3 6.59-41.81 17.8-9.82 11.58-15.39 31.16-15.39 59.01 0 28.89 5.57 48.77 15.39 60.7 9.51 11.58 23.64 18.31 41.81 18.31 17.85 0 32.01-6.73 41.59-18.31 9.82-11.93 15.42-31.81 15.42-60.7zM160 240c0 10.5-3.75 19.25-11.25 26.75S132.5 278 122 278s-19.25-3.75-26.75-11.25S84 250.5 84 240s3.75-19.25 11.25-26.75S111.5 202 122 202s19.25 3.75 26.75 11.25S160 229.5 160 240z"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "CapCut",
                    logo: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
                        <rect width="512" height="512" rx="104" fill="#000" />
                        <path
                          d="M371.5 202.5L184.5 111c-15-7.5-32.5 3-32.5 19.5v183c0 16.5 17.5 27 32.5 19.5l187-91.5c15-7.5 15-31.5 0-39z"
                          fill="#00F2EA"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Shopee",
                    logo: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
                        <circle cx="256" cy="256" r="256" fill="#EE4D2D" />
                        <path
                          fill="#FFF"
                          d="M415.5 274.5c0 86.5-71.5 156.5-159.5 156.5S96.5 361 96.5 274.5c0-31.5 9.5-61 26-85.5 0 0 13.5-19 14-19.5 4-5 9.5-3 12 0 1 1 10 13.5 12 16 2.5 3 2.5 7.5-1 10.5-1 1-9.5 10.5-9.5 10.5-11.5 16-18 35.5-18 56.5 0 54 44.5 98 99.5 98s99.5-44 99.5-98c0-21-6.5-40.5-18-56.5 0 0-8.5-9.5-9.5-10.5-3.5-3-3.5-7.5-1-10.5 1.5-2.5 11-15 12-16 2.5-3 8-5 12 0 .5.5 14 19.5 14 19.5 16.5 24.5 26 54 26 85.5zM286 127.5c-4.5-11-11-21-19-29.5-1-1-1.5-2-2.5-3-10-10-22.5-17.5-36-21.5-5.5-1.5-11-2.5-17-3h-11c-6 .5-11.5 1.5-17 3-13.5 4-26 11.5-36 21.5-1 1-1.5 2-2.5 3-8 8.5-14.5 18.5-19 29.5-2 5-3.5 10-4.5 15.5h169c-1-5.5-2.5-10.5-4.5-15.5zm-30 41.5c0 .5-.5 1-1 1h-58c-.5 0-1-.5-1-1v-17c0-.5.5-1 1-1h58c.5 0 1 .5 1 1v17z"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "TikTok",
                    logo: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
                        <path d="M412.19 118.66a109.27 109.27 0 01-9.45-5.5 132.87 132.87 0 01-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14 23.9 350 16 350.13 16h-82.44v318.78c0 4.28 0 8.51-.18 12.69 0 .52-.05 1-.08 1.56 0 .23 0 .47-.05.71v.18a70 70 0 01-35.22 55.56 68.8 68.8 0 01-34.11 9c-38.41 0-69.54-31.32-69.54-70s31.13-70 69.54-70a68.9 68.9 0 0121.41 3.39l.1-83.94a153.14 153.14 0 00-118 34.52 161.79 161.79 0 00-35.3 43.53c-3.48 6-16.61 30.11-18.2 69.24-1 22.21 5.67 45.22 8.85 54.73v.2c2 5.6 9.75 24.71 22.38 40.82A167.53 167.53 0 00115 470.66v-.2l.2.2c39.91 27.12 84.16 25.34 84.16 25.34 7.66-.31 33.32 0 62.46-13.81 32.32-15.31 50.72-38.12 50.72-38.12a158.46 158.46 0 0027.64-45.93c7.46-19.61 9.95-43.13 9.95-52.53V176.49c1 .6 14.32 9.41 14.32 9.41s19.19 12.3 49.13 20.31c21.48 5.7 50.42 6.9 50.42 6.9v-81.84c-10.14 1.1-30.73-2.1-51.81-12.61z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Instagram",
                    logo: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6">
                        <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                          <stop offset="0%" stopColor="#FFD600" />
                          <stop offset="50%" stopColor="#FF0100" />
                          <stop offset="100%" stopColor="#D800B9" />
                        </linearGradient>
                        <path
                          fill="url(#a)"
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Microsoft Office",
                    logo: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
                        <path fill="#EB3C00" d="M272 240v176h128V240H272z" />
                        <path fill="#818181" d="M112 240v176h128V240H112z" />
                        <path fill="#00A4EF" d="M112 96v112h128V96H112z" />
                        <path fill="#FFB900" d="M272 96v112h128V96H272z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Google Analytics",
                    logo: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
                        <path fill="#F9AB00" d="M120 352l-96 96V160c0-26.5 21.5-48 48-48h96v192H120z" />
                        <path fill="#E37400" d="M336 64H224v192h160V112c0-26.5-21.5-48-48-48z" />
                        <path fill="#E37400" d="M464 160v192h-48V160h48z" />
                        <path fill="#F9AB00" d="M224 448h112c26.5 0 48-21.5 48-48V256H224v192z" />
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
