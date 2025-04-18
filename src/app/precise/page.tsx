"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";


export default function Page() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll(".parallax");

      elements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = Number.parseFloat(element.dataset.speed || "0.1");
        element.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#18230F] overflow-x-hidden">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 ms-5 mt-5">
        Precise Shoes
      </h1>
      <section className="py-20 px-6 md:px-12 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="parallax" data-speed="0.05">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
          </div>
          <div className="parallax" data-speed="0.08">
            <div className="absolute top-40 -right-20 w-80 h-80 bg-emerald-700/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Shopee Performance
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Tracking our e-commerce success with real-time analytics and
              performance metrics
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1 flex justify-center relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-emerald-700/20 rounded-3xl blur-xl"></div>
              <div className="mockup-phone border-primary relative z-10">
                <div className="mockup-phone-camera"></div>
                <div className="mockup-phone-display text-white grid place-content-center bg-gradient-to-b from-gray-900 to-black">
                  <img
                    src="/pageshoope.jpg"
                    alt="Precise Shopee Page"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>

            {/* KPI Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex-1 flex justify-center"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative">
                  <img
                    src="/kpishoope.jpg"
                    alt="KPI Shopee"
                    className="max-w-full h-auto rounded-lg shadow-2xl border border-white/10"
                  />
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <TrendingUp size={14} className="text-emerald-400" />
                    <span className="text-xs font-medium">
                      Performance Metrics
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TikTok Section */}
      <section className="py-20 px-6 md:px-12 relative bg-black/30">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="parallax" data-speed="0.07">
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>
          <div className="parallax" data-speed="0.04">
            <div className="absolute top-20 -left-20 w-64 h-64 bg-purple-700/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              TikTok Performance
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Engaging our audience through viral content and measuring our
              social media impact
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 md:gap-20">
            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1 flex justify-center relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
              <div className="mockup-phone border-secondary relative z-10">
                <div className="mockup-phone-camera"></div>
                <div className="mockup-phone-display text-white grid place-content-center bg-gradient-to-b from-gray-900 to-black">
                  <img
                    src="/pagetiktok.jpg"
                    alt="Precise TikTok Page"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>

            {/* KPI Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex-1 flex justify-center"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative">
                  <img
                    src="/tiktokkpi.jpg"
                    alt="TikTok KPI"
                    className="max-w-full h-auto rounded-lg shadow-2xl border border-white/10"
                  />
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <TrendingUp size={14} className="text-pink-400" />
                    <span className="text-xs font-medium">
                      Analytics Dashboard
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Content</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Showcasing our creative campaigns and brand collaborations
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 mb-20">
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@precise_shoes/video/7475652193199213831"
          data-video-id="7475652193199213831"
          style={{ maxWidth: 605, minWidth: 325 }}
        >
          <section>Loading TikTok video...</section>
        </blockquote>
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@precise_shoes/video/7467117877229882631"
          data-video-id="7467117877229882631"
          style={{ maxWidth: 605, minWidth: 325 }}
        >
          <section>Loading TikTok video...</section>
        </blockquote>
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@precise_shoes/video/7450532876887575813"
          data-video-id="7450532876887575813"
          style={{ maxWidth: 605, minWidth: 325 }}
        >
          <section>Loading TikTok video...</section>
        </blockquote>
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@precise_shoes/video/7420729665137986821"
          data-video-id="7420729665137986821"
          style={{ maxWidth: 605, minWidth: 325 }}
        >
          <section>Loading TikTok video...</section>
        </blockquote>
        </div>
        
      </section>
    </div>
  );
}
