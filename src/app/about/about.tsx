"use client"

import { motion } from "framer-motion"
import { User, ChevronRight, GraduationCap, BookOpen, Award, Activity } from "lucide-react"


function About() {
  
  return (
    <>
      <section
        id="about"
        className="w-full bg-gradient-to-b from-white to-gray-50 dark:from-neutral-950 dark:to-neutral-900 font-sans overflow-hidden py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Me Header */}
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
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
                >
                  <User className="text-green-600 dark:text-green-400" size={32} />
                </motion.div>
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-black dark:text-white tracking-tight mb-4"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full"
            />
          </motion.div>

          {/* Content Cards */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Who I Am */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50, scale: 0.95 },
                visible: { opacity: 1, x: 0, scale: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="group"
            >
              <div className="h-full bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-700 hover:shadow-green-100 dark:hover:shadow-green-900/20 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="mr-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                    <BookOpen className="text-green-600 dark:text-green-400" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-black dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    Who I Am
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    Berpengalaman di bidang pemasaran, saya fokus pada strategi kreatif yang berdampak. Saya memiliki
                    kemampuan komunikasi yang baik, cepat beradaptasi, dan senang bekerja dalam tim maupun langsung
                    dengan pelanggan.
                  </p>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    Siap berkontribusi dalam pengembangan strategi marketing dengan pendekatan inovatif yang
                    menghasilkan pertumbuhan bisnis yang nyata.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* My Approach */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50, scale: 0.95 },
                visible: { opacity: 1, x: 0, scale: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group"
            >
              <div className="h-full bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-700 hover:shadow-green-100 dark:hover:shadow-green-900/20 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="mr-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                    <motion.div
                      animate={{
                        rotate: [0, 5, 0, -5, 0],
                        scale: [1, 1.05, 1, 1.05, 1],
                      }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
                    >
                      <ChevronRight className="text-green-600 dark:text-green-400" size={24} />
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold text-black dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    My Approach
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Mengutamakan komunikasi yang jelas dan efektif",
                    "Menganalisis data untuk strategi yang tepat sasaran",
                    "Menciptakan konten yang menarik dan relevan",
                    "Membangun hubungan jangka panjang dengan audiens",
                    "Terus belajar dan beradaptasi dengan tren terbaru",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 group/item"
                    >
                      <div className="bg-green-50 dark:bg-green-900/20 p-1.5 rounded-lg mt-0.5 group-hover/item:bg-green-100 dark:group-hover/item:bg-green-800/30 transition-colors">
                        <ChevronRight className="text-green-500 dark:text-green-400 flex-shrink-0" size={16} />
                      </div>
                      <span className="text-neutral-700 dark:text-neutral-300 group-hover/item:text-green-700 dark:group-hover/item:text-green-300 transition-colors">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="education" className="w-full bg-white dark:bg-neutral-950 font-sans overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Education Header */}
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
                <motion.div
                  animate={{
                    y: [0, -5, 0, -5, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
                >
                  <GraduationCap className="text-green-600 dark:text-green-400" size={32} />
                </motion.div>
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-black dark:text-white tracking-tight mb-4"
            >
              Education
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full"
            />
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-700 overflow-hidden"
          >
            {/* Header */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-600/20 dark:from-green-900/30 dark:to-green-700/30"></div>
              <div className="relative p-8 sm:p-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="mr-4 p-3 bg-white/90 dark:bg-neutral-900/90 rounded-xl shadow-md">
                      <GraduationCap className="text-green-600 dark:text-green-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black dark:text-white">SMKN 2 Bojonegoro</h3>
                      <p className="text-green-600 dark:text-green-400 font-medium">Kimia Industri</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-full text-sm font-medium shadow-sm">
                      2020 – 2023
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-10">
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-800 dark:to-neutral-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-700"
                >
                  <h4 className="font-semibold text-lg text-black dark:text-white mb-4 flex items-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-full mr-3">
                      <Activity className="text-green-600 dark:text-green-400" size={16} />
                    </span>
                    Kegiatan
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Aktif dalam pengembangan kewirausahaan industri dibidang kimia",
                      "Mengembangkan keterampilan komunikasi dan tim melalui organisasi",
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 group"
                      >
                        <div className="bg-white dark:bg-neutral-700 p-1.5 rounded-lg mt-0.5 shadow-sm group-hover:bg-green-100 dark:group-hover:bg-green-900/30 transition-colors">
                          <ChevronRight className="text-green-500 dark:text-green-400 flex-shrink-0" size={16} />
                        </div>
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-800 dark:to-neutral-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-700"
                >
                  <h4 className="font-semibold text-lg text-black dark:text-white mb-4 flex items-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-full mr-3">
                      <Award className="text-green-600 dark:text-green-400" size={16} />
                    </span>
                    Pencapaian
                  </h4>
                  <ul className="space-y-4">
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="bg-white dark:bg-neutral-700 p-1.5 rounded-lg mt-0.5 shadow-sm group-hover:bg-green-100 dark:group-hover:bg-green-900/30 transition-colors">
                        <ChevronRight className="text-green-500 dark:text-green-400 flex-shrink-0" size={16} />
                      </div>
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">
                        Menjadi <strong>ketua organisasi pramuka pertama di Bojonegoro</strong> yang berhasil mengganti{" "}
                        <strong>MC/pembawa acara dengan sandur kesenian asal Bojonegoro</strong>. Serta membuat{" "}
                        <strong>
                          prosesi penyalaan api unggun pertama di Bojonegoro dengan iringan karawitan secara live
                        </strong>
                        , dalam acara perkemahan yang dihadiri 700+ peserta.
                      </span>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="bg-white dark:bg-neutral-700 p-1.5 rounded-lg mt-0.5 shadow-sm group-hover:bg-green-100 dark:group-hover:bg-green-900/30 transition-colors">
                        <ChevronRight className="text-green-500 dark:text-green-400 flex-shrink-0" size={16} />
                      </div>
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">
                        Berfokus dalam <strong>industri & digital di bidang kimia</strong>, manjadikan saya seorang{" "}
                        <strong>team leader unit produksi jurusan</strong> yang berhasil mencapai{" "}
                        <strong>profit hingga 2,5 juta dalam 5 hari event</strong> dan menjadi{" "}
                        <strong>stand terlaris di EXPO & EXPOSE SMK PUSAT KEUNGGULAN</strong> serta{" "}
                        <strong>menyabet video best practices</strong> dalam tugas aktualisasi pada diklat dan leaching
                        SMK keteknik kimiaan se JATIM.
                      </span>
                    </motion.li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section
  id="skill"
  className="w-full bg-gradient-to-br from-white to-gray-50 dark:from-neutral-950 dark:to-neutral-900 font-sans overflow-hidden py-12 md:py-24"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header Section */}
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white tracking-tight mb-4">
        Skills & Toolkits
      </h2>
      <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full mb-6 mx-auto"></div>
      <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg max-w-2xl mx-auto">
        My professional expertise and the tools I use to create impactful marketing strategies that drive results.
      </p>
    </div>

    <div className="mb-16 px-4">
  <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-black dark:text-white">
    Professional Skills
  </h3>

  <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 p-6 md:p-8 rounded-xl shadow-md border border-gray-200 dark:border-neutral-700">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
      {[
        "Content Creation",
        "Video Editing",
        "Digital Marketing",
        "Public Speaking",
        "Teamwork & Leadership",
        "Market Research",
        "Problem Solving",
        "Creative Thinking"
      ].map((skill, index) => (
        <div key={index} className="flex items-start w-full">
          <span className="w-2 h-2 bg-blue-600 rounded-full mt-1 mr-3 flex-shrink-0"></span>
          <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
            {skill}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>




    {/* Tools & Platforms Section */}
    <div>
      <h3 className="text-xl md:text-2xl font-bold text-center mb-8 text-black dark:text-white">
        Tools & Platforms
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {[
          {
            name: "Adobe Photoshop",
            logo: (
              <svg viewBox="0 0 600 800" xmlns="http://www.w3.org/2000/svg" fill="none" className="w-6 h-6">
                <g>
                  <radialGradient
                    id="a"
                    cx="-183.69"
                    cy="328.972"
                    r=".76"
                    gradientTransform="matrix(545.6736 0 0 528.3113 100439.305 -173525.125)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#34364e" stopOpacity=".98" />
                    <stop offset="1" stopColor="#0c0824" />
                  </radialGradient>
                  <path d="M24.803 155.549h545.674v530.792H24.803V155.549z" fill="url(#a)" />
                  <path
                    d="M24.803 155.549h545.674v530.792H24.803V155.549zM0 711.145h595.28V130.746H0v580.399zm401.318-342.287c-19.595 0-26.291 9.921-26.291 18.106 0 8.929 4.464 15.13 30.756 28.772 38.941 18.851 51.095 36.957 51.095 63.497 0 39.685-30.26 61.016-71.186 61.016-21.579 0-40.182-4.465-50.847-10.665-1.736-.744-1.984-1.984-1.984-3.969v-36.461c0-2.48 1.24-3.225 2.977-1.984 15.626 10.17 33.484 14.634 49.854 14.634 19.595 0 27.78-8.185 27.78-19.347 0-8.929-5.705-16.866-30.757-29.764-35.221-16.866-49.854-33.98-49.854-62.504 0-31.997 25.052-58.536 68.457-58.536 21.331 0 36.213 3.225 44.398 6.945 1.984 1.24 2.48 3.224 2.48 4.96v33.98c0 1.984-1.24 3.225-3.721 2.48-10.913-6.943-27.035-11.16-43.157-11.16zm-213.309 29.516c5.705.496 10.17.496 20.091.496 29.021 0 56.304-10.169 56.304-49.606 0-31.5-19.595-47.375-52.583-47.375-9.921 0-19.347.496-23.812.744v95.741zM143.86 266.668c0-1.736 3.473-2.977 5.456-2.977 15.875-.744 39.438-1.24 63.993-1.24 68.705 0 95.492 37.701 95.492 85.82 0 63-45.638 90.036-101.693 90.036-9.425 0-12.649-.496-19.347-.496v95.245c0 1.984-.744 2.976-2.976 2.976h-37.949c-1.984 0-2.977-.744-2.977-2.976V266.668z"
                    fill="#31c5f0"
                  />
                </g>
              </svg>
            ),
          },
          {
            name: "Canva",
            logo: (
              <svg
                fill="#00ccff"
                width="188px"
                height="188px"
                viewBox="0 0 32.00 32.00"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#00ccff"
                strokeWidth="0.00032"
                className="h-6 w-6"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.512"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M16 0c-8.839 0-16 7.161-16 16s7.161 16 16 16c8.839 0 16-7.161 16-16s-7.161-16-16-16zM9.281 10.24c1.005 0 1.787 0.733 1.875 1.599 0.095 0.781-0.229 1.464-1.093 1.875-0.459 0.229-0.641 0.229-0.735 0.093-0.047-0.093 0-0.181 0.093-0.276 0.824-0.681 0.824-1.233 0.729-2.009-0.047-0.505-0.411-0.824-0.776-0.824-1.604 0-3.885 3.563-3.568 6.172 0.141 1.005 0.735 2.193 2.011 2.193 0.412 0 0.871-0.136 1.281-0.317 0.667-0.355 1.068-0.625 1.464-1.068-0.099-1.183 0.937-2.729 2.468-2.729 0.688 0 1.235 0.276 1.281 0.781 0.089 0.683-0.505 0.776-0.687 0.776-0.183 0-0.505-0.047-0.505-0.229-0.041-0.183 0.411-0.093 0.369-0.505-0.047-0.276-0.323-0.364-0.593-0.364-0.964 0-1.511 1.328-1.375 2.145 0.047 0.369 0.228 0.735 0.599 0.735 0.271 0 0.683-0.412 0.817-1.005 0.093-0.412 0.459-0.688 0.781-0.688 0.136 0 0.224 0.047 0.271 0.229v0.183c-0.041 0.183-0.183 0.735-0.135 0.869 0 0.095 0.047 0.229 0.228 0.229 0.12 0 0.579-0.24 1.037-0.615 0.151-0.787 0.333-1.729 0.333-1.807 0.047-0.323 0.183-0.641 0.823-0.641 0.14 0 0.229 0.047 0.276 0.229v0.183l-0.183 0.823c0.595-0.776 1.464-1.323 2.011-1.323 0.229 0 0.412 0.135 0.412 0.364 0 0.136 0 0.365-0.095 0.595-0.181 0.5-0.411 1.281-0.547 1.963 0 0.183 0.047 0.365 0.276 0.365s0.912-0.271 1.459-1.005l0.011-0.005c0-0.089-0.011-0.177-0.011-0.265 0-0.552 0.047-1.005 0.141-1.328 0.093-0.365 0.547-0.683 0.823-0.683 0.135 0 0.276 0.088 0.276 0.224 0 0.047 0 0.14-0.047 0.183-0.183 0.599-0.324 1.145-0.324 1.692 0 0.323 0.048 0.776 0.141 1.052 0 0.047 0.041 0.093 0.088 0.093 0.095 0 0.735-0.593 1.188-1.375-0.412-0.271-0.641-0.729-0.641-1.276 0-0.963 0.6-1.464 1.147-1.464 0.459 0 0.823 0.319 0.823 0.959 0 0.412-0.136 0.871-0.364 1.281h0.135c0.292 0.011 0.579-0.109 0.776-0.317 0.047-0.073 0.109-0.125 0.183-0.156 0.448-0.568 1.104-0.989 1.88-0.989 0.64 0 1.229 0.276 1.276 0.776 0.093 0.687-0.505 0.823-0.688 0.823-0.181 0-0.504-0.047-0.504-0.229s0.411-0.093 0.369-0.5c-0.047-0.276-0.323-0.369-0.599-0.369-0.912 0-1.505 1.187-1.371 2.151 0.047 0.364 0.229 0.776 0.595 0.776 0.276 0 0.687-0.412 0.869-1.005 0.088-0.364 0.459-0.688 0.776-0.688 0.14 0 0.229 0.047 0.276 0.229 0 0.095 0 0.276-0.183 0.871-0.229 0.411-0.229 0.64-0.181 0.823 0.041 0.364 0.224 0.64 0.411 0.776 0.041 0.047 0.089 0.135 0.089 0.135 0 0.095-0.048 0.188-0.183 0.188-0.047 0-0.089 0-0.136-0.047-0.687-0.276-0.963-0.735-1.052-1.193-0.276 0.323-0.593 0.505-0.963 0.505-0.595 0-1.183-0.547-1.276-1.235-0.027-0.291 0.004-0.588 0.099-0.864-0.271 0.172-0.563 0.271-0.833 0.271h-0.224c-0.599 0.869-1.24 1.464-1.693 1.735-0.156 0.083-0.328 0.131-0.505 0.14-0.088 0-0.228-0.047-0.271-0.14-0.129-0.203-0.208-0.521-0.26-0.885-0.641 0.697-1.527 1.072-1.937 1.072-0.459 0-0.729-0.276-0.776-0.733v-0.5c0.135-1.005 0.505-1.604 0.505-1.787-0.005-0.047-0.043-0.089-0.095-0.093-0.317 0-1.369 1.099-1.552 1.833l-0.14 0.593c-0.089 0.411-0.5 0.687-0.776 0.687-0.136 0-0.229-0.047-0.271-0.228v-0.183l0.057-0.312c-0.579 0.411-1.157 0.676-1.433 0.676-0.411 0-0.64-0.229-0.681-0.552-0.276 0.371-0.595 0.552-1.005 0.552-0.475 0-0.932-0.323-1.151-0.791-0.329 0.369-0.699 0.739-1.136 1.020-0.64 0.412-1.369 0.729-2.24 0.729-0.776 0-1.463-0.412-1.828-0.776-0.552-0.505-0.869-1.281-0.916-2.011-0.271-2.239 1.099-5.12 3.197-6.401 0.505-0.276 1.011-0.457 1.511-0.457zM22.307 14.631c-0.135 0-0.228 0.229-0.228 0.452 0 0.371 0.181 0.781 0.411 1.011 0.095-0.249 0.136-0.515 0.141-0.781 0-0.452-0.183-0.681-0.324-0.681z"></path>
                </g>
              </svg>
            ),
          },
          {
            name: "CapCut",
            logo: (
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" className="w-6 h-6 ">
                <g transform="scale(0.12)">
                  <path
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="12"
                    d="M170 42 L22 124v14c0 6.627 5.373 12 12 12h78c6.627 0 12-5.373 12-12v-9.5"
                  />
                  <path
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="12"
                    d="M170 150 L22 68V54c0-6.627 5.373-12 12-12h78c6.627 0 12 5.373 12 12v9.5"
                  />
                </g>
              </svg>
            ),
          },
          {
            name: "Shopee",
            logo: (
              <svg
                viewBox="-19.2 -19.2 230.40 230.40"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#ffffff"
                className="w-6 h-6"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0">
                  <rect
                    x="-19.2"
                    y="-19.2"
                    width="230.40"
                    height="230.40"
                    rx="115.2"
                    fill="#ff6600"
                    strokeWidth="0"
                  ></rect>
                </g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#ffffff"
                    d="m29.004 157.064 5.987-.399-5.987.399ZM22 52v-6a6 6 0 0 0-5.987 6.4L22 52Zm140.996 105.064-5.987-.399 5.987.399ZM170 52l5.987.4A6 6 0 0 0 170 46v6ZM34.991 156.665 27.987 51.601l-11.974.798 7.005 105.064 11.973-.798Zm133.991.798 7.005-105.064-11.974-.798-7.004 105.064 11.973.798Zm-11.973-.798a10 10 0 0 1-9.978 9.335v12c11.582 0 21.181-8.98 21.951-20.537l-11.973-.798Zm-133.991.798C23.788 169.02 33.387 178 44.968 178v-12a10 10 0 0 1-9.977-9.335l-11.973.798ZM74 48c0-12.15 9.85-22 22-22V14c-18.778 0-34 15.222-34 34h12Zm22-22c12.15 0 22 9.85 22 22h12c0-18.778-15.222-34-34-34v12ZM22 58h148V46H22v12Zm22.969 120H147.03v-12H44.969v12Z"
                  ></path>
                  <path
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeWidth="12"
                    d="M114 84H88c-7.732 0-14 6.268-14 14v0c0 7.732 6.268 14 14 14h4m-2 0h14c7.732 0 14 6.268 14 14v0c0 7.732-6.268 14-14 14H78"
                  ></path>
                </g>
              </svg>
            ),
          },
          {
            name: "TikTok",
            logo: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-current"
              >
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
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path fill="#F35325" d="M1 1h6.5v6.5H1V1z"></path>
                  <path fill="#81BC06" d="M8.5 1H15v6.5H8.5V1z"></path>
                  <path fill="#05A6F0" d="M1 8.5h6.5V15H1V8.5z"></path>
                  <path
                    fill="#FFBA08"
                    d="M8.5 8.5H15V15H8.5V8.5z"
                  ></path>
                </g>
              </svg>
            ),
          },
          {
            name: "Google Analytics",
            logo: (
              <svg
                viewBox="-14 0 284 284"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                fill="#000000"
                className="h-6 w-6"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path
                      d="M256.003159,247.933017 C256.055907,258.030289 251.77298,267.664804 244.241349,274.390297 C236.709718,281.11579 226.653817,284.285366 216.626905,283.094249 C198.58347,280.424364 185.360959,264.722632 185.800619,246.488035 L185.800619,36.8452103 C185.364944,18.5907614 198.619678,2.88144681 216.687112,0.238996295 C226.704325,-0.933476157 236.743571,2.24455542 244.261279,8.9678962 C251.778988,15.691237 256.053811,25.3147619 256.003159,35.4002282 L256.003159,247.933017 Z"
                      fill="#F9AB00"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M35.1010243,213.193238 C54.4867848,213.193238 70.2020487,228.908502 70.2020487,248.294263 C70.2020487,267.680023 54.4867848,283.395287 35.1010243,283.395287 C15.7152639,283.395287 0,267.680023 0,248.294263 C0,228.908502 15.7152639,213.193238 35.1010243,213.193238 Z M127.459466,106.806429 C107.981896,107.874068 92.8698765,124.212107 93.3217628,143.713681 L93.3217628,237.998765 C93.3217628,263.58699 104.580582,279.120548 121.077461,282.431965 C131.434034,284.530959 142.185473,281.860819 150.356699,275.160414 C158.527925,268.460009 163.252393,258.439904 163.222912,247.872809 L163.222912,142.088076 C163.240039,132.641687 159.462041,123.584285 152.737293,116.950107 C146.012546,110.315928 136.904752,106.661084 127.459466,106.806429 L127.459466,106.806429 Z"
                      fill="#E37400"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>
              </svg>
            ),
          },
        ].map((tool, i) => (
          <div
            key={i}
            className="bg-white dark:bg-neutral-800 p-3 sm:p-4 rounded-lg border border-gray-100 dark:border-neutral-700 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 sm:gap-3"
          >
            <div className="flex-shrink-0">{tool.logo}</div>
            <span className="text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm font-medium truncate">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default About
