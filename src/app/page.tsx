"use client";

import { useState, useEffect } from "react";
import { FlipWords } from "./components/ui/flip-words";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "./../app/components/ui/hero-highlight";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Band } from ".././app/lib/band";
import { Button } from ".././components/ui/button";
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Home() {
  const words = ["unique", "cute", "beautiful", "funny", "quirky"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile for better performance
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-neutral-800"
          >
            Wahib
          </motion.div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-6">
            {["Home", "About", "Skill", "Experience"].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-4 space-y-4"
          >
            {["Home", "Features", "Pricing", "About","Experience"].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="block text-neutral-600 hover:text-neutral-900 transition-colors py-2"
              >
                {item}
              </a>
            ))}
    
          </motion.div>
        )}
      </nav>

      <HeroHighlight>
        <div className="container mx-auto px-6 pt-8 pb-16 md:pt-12 md:pb-24">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left side - Text content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full md:w-1/2 lg:w-2/5 md:pr-6 pb-8 md:pb-0"
            >
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-neutral-800 leading-tight md:leading-snug">
                Where Your{" "}
                <FlipWords words={words} className="text-rose-600" />{" "}
                <br className="hidden sm:block" />
                Story Becomes{" "}
                <Highlight className="text-black dark:text-white">
                  Compelling Content.
                </Highlight>
              </h1>
              
              <p className="mt-4 text-neutral-600 text-lg max-w-md">
                Transform your ideas into engaging narratives that captivate your audience and leave a lasting impression.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  Download CV
                </Button>
              </div>
              
              
            </motion.div>
            
            {/* Right side - 3D Band (Optimized) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full md:w-1/2 lg:w-3/5 h-[400px] sm:h-[500px] md:h-[540px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg"
            >
              <Canvas 
                camera={{ position: [0, 0, isMobile ? 15 : 13], fov: isMobile ? 30 : 25 }}
                dpr={[1, 2]} // Optimize performance by limiting pixel ratio
                performance={{ min: 0.5 }} // Allow performance scaling for mobile
              >
                <ambientLight intensity={Math.PI} />
                <Physics 
                  interpolate 
                  gravity={[0, -40, 0]} 
                  timeStep={1 / 60}
                >
                  <Band  />
                </Physics>
              </Canvas>
            </motion.div>
          </div>
        </div>
      </HeroHighlight>
      
      {/* Feature highlights section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "AI-Powered", description: "Generate compelling content with our advanced AI tools" },
            { title: "Customizable", description: "Tailor your stories to match your unique brand voice" },
            { title: "Engaging", description: "Create content that resonates with your target audience" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-rose-600 rounded-md" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
