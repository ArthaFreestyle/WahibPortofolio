"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { Briefcase } from "lucide-react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="w-full bg-gradient-to-b from-white to-gray-50 dark:from-neutral-950 dark:to-neutral-900 font-sans overflow-hidden py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mb-6"
          >
            <div className="absolute inset-0 bg-green-200 dark:bg-green-900/30 rounded-full blur-xl opacity-70"></div>
            <div className="relative bg-white dark:bg-neutral-800 rounded-full p-4 shadow-lg border border-green-100 dark:border-green-900/50">
              <Briefcase className="text-green-600 dark:text-green-400" size={32} />
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-black dark:text-white tracking-tight mb-4"
          >
            My Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full"
          />
        </motion.div>

        <div ref={ref} className="relative pb-20">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-800 flex items-center justify-center shadow-lg">
                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-600 dark:bg-green-400" />
              </div>

              <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-700 w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-green-100 dark:hover:shadow-green-900/20">
                <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-2">
                  {item.title}
                </h3>
                <div className="text-neutral-700 dark:text-neutral-300">
                  {item.content}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Timeline Line */}
          <div
            style={{ height: height + "px" }}
            className="absolute left-5 md:left-[22px] top-0 w-[2px] bg-gradient-to-b from-transparent via-green-300 dark:via-green-800 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-green-500 via-green-400 to-transparent rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
