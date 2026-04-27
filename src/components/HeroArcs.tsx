"use client";

import { motion } from "framer-motion";

export default function HeroArcs() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <svg
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-20"
      >
        {[1, 2, 3, 4].map((i) => (
          <motion.circle
            key={i}
            cx="500"
            cy="500"
            r={100 + i * 120}
            stroke="url(#arcGradient)"
            strokeWidth="1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        ))}
        <defs>
          <linearGradient
            id="arcGradient"
            x1="0"
            y1="0"
            x2="1000"
            y2="1000"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ADD8E6" stopOpacity="0.5" />
            <stop offset="0.5" stopColor="#ADD8E6" stopOpacity="0.1" />
            <stop offset="1" stopColor="#ADD8E6" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Subtle Glows */}
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-[150px]" />
    </div>
  );
}
