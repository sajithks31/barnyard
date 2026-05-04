"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center relative overflow-hidden selection:bg-white selection:text-black z-50">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full opacity-50" />
        <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 blur-[150px] rounded-full opacity-50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center max-w-full px-6 pt-20 md:pt-0">
        {/* 404 Numbers */}
        <div className="relative flex items-center justify-center select-none font-bold min-h-[30vh] md:min-h-[400px] lg:min-h-[500px]">
          <span className="text-[35vw] md:text-[380px] lg:text-[480px] tracking-[-0.08em] leading-none">4</span>
          
          <div className="relative flex items-center justify-center w-[0.7em] md:w-[250px] lg:w-[320px] h-full">
            <span className="text-[35vw] md:text-[380px] lg:text-[480px] tracking-[-0.08em] leading-none">0</span>
            {/* Astronaut Image - Floating effect */}
            <motion.div 
              initial={{ y: 40, opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ 
                y: [0, -40, 0], 
                rotate: [-5, 5, -5],
                opacity: 1, 
                scale: 1 
              }}
              transition={{ 
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 1.5 },
                scale: { duration: 1.5 }
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[180%] h-[180%] pointer-events-none"
            >
              <Image 
                src="/astronaut.png" 
                alt="Astronaut" 
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 80vw, 600px"
              />
            </motion.div>
          </div>
          
          <span className="text-[35vw] md:text-[380px] lg:text-[480px] tracking-[-0.08em] leading-none">4</span>
        </div>

        {/* Text and Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center gap-10 mt-10 md:mt-20 lg:mt-24"
        >
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-normal tracking-[0.1em] uppercase text-center">
            PAGE <span className="italic font-light">NOT</span> FOUND
          </h1>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all duration-500 flex items-center gap-4 group backdrop-blur-md"
            >
              <span className="text-xs font-bold tracking-[0.2em] uppercase">CONTACT US</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
