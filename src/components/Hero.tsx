"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

interface HeroProps {
  data?: {
    heroTitleLines?: string[];
    heroButtons?: { label: string; url: string }[];
    heroVideoUrl?: string;
  };
}

export default function Hero({ data }: HeroProps) {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const titleLines = data?.heroTitleLines?.length ? data.heroTitleLines : ['CREATING', 'STORIES+', 'THAT MOVE'];
  const buttons = data?.heroButtons?.length ? data.heroButtons : [
    { label: 'OUR SERVICES', url: '#services' },
    { label: 'OUR WORK', url: '/projects' }
  ];
  const videoUrl = data?.heroVideoUrl || "/hero-banner.mp4";

  // Parallax effect: background moves slower (y will be 30% of scroll)
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const item: any = {
    hidden: { y: 100, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      }
    },
  };

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-end overflow-hidden bg-black">
      {/* Video Background with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <video 
          key={videoUrl}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </motion.div>

      {/* Text and Button Overlay */}
      <div className="relative z-10 w-full flex flex-col justify-end pb-12 md:pb-16 lg:pb-24 pointer-events-none">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 pointer-events-auto"
          >
            <motion.h1 
              className="text-5xl sm:text-7xl md:text-[8.5vw] lg:text-[7.5vw] font-normal tracking-tighter leading-[1] mb-12 uppercase flex flex-col gap-1 md:gap-2 text-white"
            >
              {titleLines.map((line, idx) => (
                <motion.span 
                  key={idx} 
                  variants={item} 
                  className={idx === 1 ? "italic opacity-90" : ""}
                >
                  {line}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.div 
              variants={item}
              className="flex flex-wrap gap-4 md:gap-6 items-center"
            >
              <div className="flex gap-4 w-full md:w-auto">
                {buttons.map((btn, idx) => (
                  <a href={btn.url} key={idx} className="flex-1 md:flex-none">
                    <button className="w-full rounded-full border border-white px-6 md:px-10 py-3 md:py-3.5 text-[10px] md:text-[12px] font-medium tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 shrink-0 whitespace-nowrap text-white bg-transparent">
                      {btn.label}
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform" />
                    </button>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
}

