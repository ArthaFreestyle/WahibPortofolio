"use client";

import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const data = [
    {
      title: "Kepala Bisnis Unit – Petsnplants.id",
      content: (
        <div>
          <p className="text-neutral-600 dark:text-neutral-300 text-xs italic mb-4">
            Oktober 2023 - Februari 2024
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base text-neutral-800 dark:text-neutral-200 space-y-2 mb-6">
            <li>Meningkatkan omzet mingguan dari Rp500.000 menjadi Rp2.000.000 dalam dua bulan.</li>
            <li>Menjaga kestabilan penjualan meski sumber pendapatan utama dipindahkan ke unit lain.</li>
            <li>Meningkatkan rating toko di Google Maps dari 4.5 menjadi 4.9.</li>
            <li>Mengoptimalkan pelayanan dan menerapkan strategi promosi yang efektif.</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/feed1.jpg" alt="offline 1" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg" />
            <Image src="/feed2.jpg" alt="offline 2" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg" />
            <Image src="/feed3.jpg" alt="offline 3" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg" />
            <Image src="/feed4.jpg" alt="offline 4" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg" />
          </div>
        </div>
      ),
    },
    {
      title: "Host Live & Content Support – PRECISE SHOES",
      content: (
        <div>
          <p className="text-neutral-600 dark:text-neutral-300 text-xs italic mb-4">
            Maret 2023 - Sekarang
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base text-neutral-800 dark:text-neutral-200 space-y-2 mb-6">
            <li>Mengembangkan branding karakter yang relevan dan menarik.</li>
            <li>Meningkatkan efektivitas komunikasi dan respons cepat terhadap audiens.</li>
            <li>Membangun personal segmentasi untuk menjaga loyalitas penonton.</li>
            <li>Meraih rata-rata omzet bulanan Rp219 juta.</li>
            <li>Mencetak rekor omzet tertinggi Rp450 juta dalam satu bulan di Shopee.</li>
            <li>Menerapkan strategi pendekatan audiens melalui konten, live, dan customer service.</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/vid1.png" alt="live 1" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg" />
            <Image src="/vid2.png" alt="live 2" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg" />
            <Image src="/vid3.png" alt="live 3" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg" />
            <Image src="/vid4.png" alt="live 4" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
