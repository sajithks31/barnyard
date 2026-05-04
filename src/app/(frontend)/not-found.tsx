"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center relative overflow-hidden selection:bg-white selection:text-black z-50">
      {/* Background Glow Image */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-[1400px] aspect-video opacity-60">
          <Image 
            src="/glow.png" 
            alt="Background Glow" 
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center max-w-full px-6 pt-28 md:pt-36">
        {/* 404 Numbers */}
        <div className="relative flex items-center justify-center select-none font-bold">
          <span className="text-[25vw] md:text-[280px] lg:text-[350px] tracking-[-0.08em] leading-none">4</span>
          
          <div className="relative flex items-center justify-center w-[0.7em] md:w-[180px] lg:w-[240px]">
            <span className="text-[25vw] md:text-[280px] lg:text-[350px] tracking-[-0.08em] leading-none">0</span>
            {/* Astronaut Image - Floating effect */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[180%] h-[180%] pointer-events-none"
            >
              <motion.div
                animate={{ 
                  y: [0, -20, 0], 
                  rotate: [-3, 3, -3],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="w-full h-full relative"
                style={{ willChange: "transform" }}
              >
                <Image 
                  src="/astronaut.png" 
                  alt="Astronaut" 
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 80vw, 500px"
                />
              </motion.div>
            </motion.div>
          </div>
          
          <span className="text-[25vw] md:text-[280px] lg:text-[350px] tracking-[-0.08em] leading-none">4</span>
        </div>

        {/* Text and Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col items-center gap-8 mt-6 md:mt-12"
        >
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-normal tracking-[0.1em] uppercase text-center">
            PAGE <span className="italic font-light">NOT</span> FOUND
          </h1>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all duration-500 flex items-center gap-3 group backdrop-blur-md"
            >
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">CONTACT US</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
