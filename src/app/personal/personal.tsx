"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

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
        
        <iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/SPzd9vHAx3k"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

        
      </ContainerScroll>
    </div>
  );
}
