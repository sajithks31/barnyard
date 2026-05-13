"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NotFoundClient() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 pt-48 md:pt-64 pb-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-[1200px] aspect-video opacity-80">
          <Image 
            src="/glow-404.png" 
            alt="Background Glow" 
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* 404 Numbers */}
        <div className="relative flex items-center justify-center select-none font-bold">
          <span className="text-[25vw] md:text-[250px] lg:text-[300px] tracking-[-0.05em] leading-none text-white">4</span>
          
          <div className="relative flex items-center justify-center w-[0.7em] md:w-[160px] lg:w-[200px]">
            <span className="text-[25vw] md:text-[250px] lg:text-[300px] tracking-[-0.05em] leading-none text-white">0</span>
            
            {/* Astronaut Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[180%] h-[180%] pointer-events-none"
            >
              <motion.div
                animate={{ 
                  y: [0, -15, 0], 
                  rotate: [-2, 2, -2],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="w-full h-full relative"
              >
                <Image 
                  src="/astronaut-404.png" 
                  alt="Astronaut" 
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
          
          <span className="text-[25vw] md:text-[250px] lg:text-[300px] tracking-[-0.05em] leading-none text-white">4</span>
        </div>

        {/* Text and Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col items-center gap-8 mt-4 md:mt-8"
        >
          <h1 className="text-xl md:text-3xl lg:text-4xl font-normal tracking-[0.15em] uppercase text-center text-white/90">
            PAGE <span className="italic font-light opacity-60">NOT</span> FOUND
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
