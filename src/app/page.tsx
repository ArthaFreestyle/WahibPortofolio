"use client";

import React from "react";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { HeroHighlight, Highlight } from "@/app/components/ui/hero-highlight";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Band } from "@/app/lib/band";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X, Download, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import About from "./about/about";
import { Experience } from "./experience/experience";
import Skills from "./skills/skills";
import Education from "./education/education";
import Projects from "./projects/projects";
import Personal from "./personal/personal";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    "home",
    "about",
    "skill",
    "experience",
    "education",
    "contact",
  ];
  const sectionRefs = useRef(sections.map(() => React.createRef()));

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Check if we're on mobile for better performance
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animate skill bars on view

  // Intersection observer for sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll("section[id]").forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleDownloadCV = () => {
    toast("CV Downloaded", {
      description: "Your CV has been downloaded successfully!",
    });
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const subject = (document.getElementById("subject") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLTextAreaElement).value;
  
    const whatsappNumber = "62895706016809"; // ganti dengan nomor WA tujuan
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
    )}`;
  
    window.open(url, "_blank");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-neutral-800"
            >
              <span className="text-green-600">W</span>ahib
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
              {[
                "Home",
                "About",
                "Skill",
                "Experience",
                "Education",
                "Contact",
              ].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(sections[index])}
                  className={`text-neutral-600 hover:text-green-600 transition-colors relative ${
                    activeSection === sections[index]
                      ? "text-green-600 font-medium"
                      : ""
                  }`}
                >
                  {item}
                  {activeSection === sections[index] && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-600"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 py-4 space-y-4"
              >
                {[
                  "Home",
                  "About",
                  "Skill",
                  "Experience",
                  "Education",
                  "Contact",
                ].map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sections[index])}
                    className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
                      activeSection === sections[index]
                        ? "bg-green-50 text-green-600 font-medium"
                        : "text-neutral-600 hover:bg-gray-50"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32">
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
                <motion.div style={{ opacity, scale }} className="origin-left">
                  <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-neutral-800 leading-tight md:leading-snug">
                    Hi, I'm{" "}
                    <span className="text-green-600">SILAHUDDIN MAWAHIB</span>
                    <br className="hidden sm:block" />
                    <Highlight className="text-black dark:text-white">
                      Marketing & Creative Strategist
                    </Highlight>
                  </h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-4 text-neutral-600 text-lg max-w-md"
                  >
                    Saya berpengalaman dalam pemasaran dan sangat tertarik
                    menciptakan interaksi unik dengan audiens melalui pendekatan
                    kreatif dan komunikatif.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="mt-8 flex flex-col sm:flex-row gap-4"
                  >
                    <div className="flex flex-col sm:flex-row gap-4 w-full">
  <a
    href="https://wa.me/62895706016809"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto"
  >
    <Button
      size="lg"
      className="w-full sm:w-auto group bg-green-600 hover:bg-green-700"
    >
      Contact Me
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>
  </a>

  <Button
    size="lg"
    variant="outline"
    onClick={handleDownloadCV}
    className="w-full sm:w-auto border-green-200 hover:bg-green-50"
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
                    className="mt-8 flex items-center gap-4"
                  ></motion.div>
                </motion.div>
              </motion.div>

              {/* Right side - 3D Band (Optimized) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-full md:w-1/2 lg:w-3/5 h-[400px] sm:h-[500px] md:h-[540px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-transparent z-10 pointer-events-none rounded-xl" />
                <Canvas
                  camera={{
                    position: [0, 0, isMobile ? 15 : 13],
                    fov: isMobile ? 30 : 25,
                  }}
                  dpr={[1, 2]} // Optimize performance by limiting pixel ratio
                  performance={{ min: 0.5 }} // Allow performance scaling for mobile
                >
                  <ambientLight intensity={8} />
                  <directionalLight position={[6, 6, 6]} intensity={2} />
                  <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
                    <Band />
                  </Physics>
                </Canvas>
              </motion.div>
            </div>
          </div>
        </HeroHighlight>
      </section>

      {/* About Section */}
      <About />
      <Personal/>
      {/* Skills Section */}
      <Skills />

      <Experience />

      {/* Experience Section */}

      {/* Education Section */}
      <Education />

      {/* Projects/Portfolio Section */}
      <Projects />

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Mail className="text-green-600" size={24} />
            <h2 className="text-3xl font-bold text-neutral-800">Contact</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-neutral-800">
                    Get In Touch
                  </h3>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-neutral-700"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-neutral-700"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-neutral-700"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-neutral-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Your message"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-neutral-800">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-neutral-800">Email</p>
                        <p className="text-neutral-600">
                          shudmawahib@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-neutral-800">Phone</p>
                        <p className="text-neutral-600">0895706016809</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-medium text-neutral-800 mb-3">
                        Follow Me
                      </h4>
                      <div className="flex gap-3">
                        {["instagram", "tiktok", "linkedin", "twitter"].map(
                          (social, i) => (
                            <a
                              key={i}
                              href="#"
                              className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 hover:bg-green-200 transition-colors"
                            >
                              <span className="sr-only">{social}</span>
                              {/* Use appropriate icons based on the social media platform */}
                              {social === "instagram" && (
                                <span className="text-lg">📷</span>
                              )}
                              {social === "tiktok" && (
                                <span className="text-lg">📱</span>
                              )}
                              {social === "linkedin" && (
                                <span className="text-lg">💼</span>
                              )}
                              {social === "twitter" && (
                                <span className="text-lg">🐦</span>
                              )}
                            </a>
                          )
                        )}
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
                      <p className="text-neutral-700 text-sm">
                        <span className="font-medium">
                          Available for freelance work!
                        </span>{" "}
                        I'm currently accepting new projects and collaborations.
                        Let's work together to create something amazing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-800 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">
                <span className="text-green-500">W</span>ahib
              </h3>
              <p className="text-neutral-400 mt-2">
                Marketing & Creative Strategist
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <p className="text-neutral-400 text-sm">
                © {new Date().getFullYear()} Silahuddin Mawahib. All rights
                reserved.
              </p>
              <div className="flex gap-4 mt-3">
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollYProgress.get() > 0.2 ? 1 : 0 }}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg hover:bg-green-700 transition-colors z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </motion.button>
    </div>
  );
}
