"use client"

import { motion } from "framer-motion"
import {
    GraduationCap,
    ChevronRight,
  } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Education() {
    return (
         <section id="education" className="bg-white py-20 px-6">
                <div className="container mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="flex items-center gap-2 mb-6">
                      <GraduationCap className="text-rose-600" size={24} />
                      <h2 className="text-3xl font-bold text-neutral-800">Education</h2>
                    </div>
        
                    <Card className="overflow-hidden">
                      <div className="h-2 bg-rose-500" />
                      <CardContent className="pt-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h3 className="text-xl font-semibold text-neutral-800">SMKN 2 Bojonegoro</h3>
                            <p className="text-rose-600">Kimia Industri</p>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <span className="inline-block px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">
                              2020 – 2023
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 grid md:grid-cols-2 gap-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-neutral-800 mb-2">Kegiatan & Pencapaian</h4>
                            <ul className="space-y-2">
                              <li className="text-neutral-700 text-sm flex items-start gap-2">
                                <ChevronRight className="text-rose-500 mt-1 flex-shrink-0" size={16} />
                                <span>Aktif dalam kegiatan ekstrakurikuler</span>
                              </li>
                              <li className="text-neutral-700 text-sm flex items-start gap-2">
                                <ChevronRight className="text-rose-500 mt-1 flex-shrink-0" size={16} />
                                <span>Mengembangkan keterampilan komunikasi dan kerja tim</span>
                              </li>
                            </ul>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-neutral-800 mb-2">Keterampilan yang Dipelajari</h4>
                            <ul className="space-y-2">
                              <li className="text-neutral-700 text-sm flex items-start gap-2">
                                <ChevronRight className="text-rose-500 mt-1 flex-shrink-0" size={16} />
                                <span>Analisis dan pemecahan masalah</span>
                              </li>
                              <li className="text-neutral-700 text-sm flex items-start gap-2">
                                <ChevronRight className="text-rose-500 mt-1 flex-shrink-0" size={16} />
                                <span>Manajemen proyek dan kerja laboratorium</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </section>
    )
}