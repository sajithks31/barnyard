"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center relative overflow-hidden selection:bg-white selection:text-black z-50">
      {/* Subtle Brand Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <img src="/overlapping-circles.svg" alt="branding" className="w-[80vw] h-auto" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center max-w-[2400px] w-full px-6">
        {/* Colossal 404 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold tracking-tighter leading-none flex items-center justify-center"
        >
          <span className="text-[35vw] md:text-[400px] lg:text-[500px] 2xl:text-[700px]">4</span>
          <div className="flex items-center justify-center">
            <img 
              src="/overlapping-circles.svg" 
              alt="0" 
              className="w-[25vw] md:w-[300px] lg:w-[400px] 2xl:w-[550px] h-auto invert brightness-0" 
            />
          </div>
          <span className="text-[35vw] md:text-[400px] lg:text-[500px] 2xl:text-[700px]">4</span>
        </motion.div>

        {/* Text and Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col items-center gap-12 -mt-10 md:-mt-20"
        >
          <h1 className="text-3xl md:text-5xl lg:text-7xl 2xl:text-[100px] font-normal tracking-[0.1em] uppercase text-center">
            PAGE <span className="italic font-light opacity-50">NOT</span> FOUND
          </h1>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/">
              <button
                className="px-10 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all duration-500 flex items-center gap-4 group backdrop-blur-md"
              >
                <span className="text-[11px] md:text-[12px] font-bold tracking-[0.2em] uppercase">GO BACK HOME</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </Link>
            
            <Link href="/contact">
              <button
                className="px-10 py-4 rounded-full border border-white/20 hover:border-white transition-all duration-500 flex items-center gap-4 group"
              >
                <span className="text-[11px] md:text-[12px] font-bold tracking-[0.2em] uppercase">CONTACT US</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20 text-[10px] tracking-[0.3em] font-medium uppercase">
        Barnyard Productions • 2026
      </div>
    </div>
  );
}
