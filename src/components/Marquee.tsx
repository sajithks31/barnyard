"use client";

import { motion } from "framer-motion";
import React from "react";

interface MarqueeProps {
  images: string[];
  speed?: number;
  reverse?: boolean;
}

export default function Marquee({ images, speed = 40, reverse = false }: MarqueeProps) {
  // Triple the images to ensure seamless loop on all screen sizes
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className="relative flex overflow-hidden py-10 select-none">
      <motion.div
        className="flex flex-nowrap shrink-0 gap-6 px-3"
        animate={{
          x: reverse ? ["-33.33%", "0%"] : ["0%", "-33.33%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedImages.map((src, idx) => (
          <div
            key={idx}
            className="relative w-[300px] md:w-[450px] aspect-[4/5] rounded-[30px] overflow-hidden bg-neutral-900 border border-white/5"
          >
            <img
              src={src}
              alt={`Gallery Image ${idx}`}
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
