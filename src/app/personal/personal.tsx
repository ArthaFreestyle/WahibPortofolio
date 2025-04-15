"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export default function Personal() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Cinematic Visuals <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Personal Project
              </span>
            </h1>
          </>
        }
      >
        <a
          href="https://drive.google.com/drive/folders/12qxuagUDiLE-qRs7PCIZ9wjZaDRXFx8m"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/content2.png"
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </a>
      </ContainerScroll>
    </div>
  );
}
