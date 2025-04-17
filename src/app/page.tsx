"use client"
import { motion } from "framer-motion"
import { Highlight } from "@/app/components/ui/hero-highlight"
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/rapier"
import { Band } from "@/app/lib/band"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import { toast } from "sonner"

export default function Home() {
  const handleDownloadCV = () => {
    toast("CV Downloaded", {
      description: "Your CV has been downloaded successfully!",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#18230F] dark overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="relative">
        <div className="container mx-auto px-6 pb-16 md:pb-24">
          <div className="flex flex-col items-center px-10 justify-center relative">
            {/* 3D Band - Positioned far right and in front */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-0  md:right-[-20%] w-[50%] md:w-[55%] h-[700px] md:h-800px] z-30"
            >
              <Canvas
                camera={{
                  position: [0, 0, 13],
                  fov: 25,
                }}
                dpr={[1, 2]}
                performance={{ min: 0.5 }}
                style={{ position: "absolute", width: "100%", height: "100%" }}
              >
                <ambientLight intensity={8} />
                <directionalLight position={[6, 6, 6]} intensity={2} />
                <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
                  <Band />
                </Physics>
              </Canvas>
            </motion.div>

            {/* Centered text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full pb-8 pt-25 z-10 relative text-center"
            >
              <motion.div>
                <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-snug">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
                    SILAHUDDIN MAWAHIB
                  </span>
                  <br className="hidden sm:block" />
                  <Highlight className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 text-transparent bg-clip-text">
                    Social Media Marketing
                  </Highlight>
                </h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="mt-4 text-emerald-100 text-lg mx-auto max-w-md"
                >
                  Saya berpengalaman dalam <span className="text-yellow-300 font-medium">pemasaran</span> dan sangat
                  tertarik menciptakan
                  <span className="text-teal-300 font-medium"> interaksi unik</span> dengan audiens melalui pendekatan{" "}
                  <span className="text-orange-300 font-medium">kreatif</span> dan{" "}
                  <span className="text-sky-300 font-medium">komunikatif</span>.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://wa.me/62895706016809" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border-0"
                      >
                        Contact Me
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </a>

                    <Button
                      size="lg"
                      variant="outline"
                      onClick={handleDownloadCV}
                      className="w-full sm:w-auto border-emerald-400 text-emerald-300 hover:bg-emerald-900/20 hover:text-emerald-200"
                    >
                      Download CV
                      <Download className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="mt-8 flex items-center justify-center gap-4"
                ></motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
