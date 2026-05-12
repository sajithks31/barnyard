"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface HomeIntroProps {
  data?: {
    introHeadline?: string;
    introParagraph?: string;
  };
}

export default function HomeIntro({ data }: HomeIntroProps) {
  const headline = data?.introHeadline || "POWERING BRANDS WITH\nCREATIVE THINKING &\nSEAMLESS EXECUTION";
  const paragraph = data?.introParagraph || "Barnyard Productions is a creative-led production studio crafting cinematic video, photography, and visual content for modern brands. From first idea to final frame, we combine creative thinking with seamless execution—bringing stories to life in ways that feel authentic, impactful, and impossible to ignore.";

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }
    },
  };

  return (
    <section className="py-24 md:py-32 lg:py-40 border-t border-white/10 bg-black relative z-10 text-center" id="about-us">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center"
      >
        <div className="max-w-4xl flex flex-col items-center">
          <motion.span variants={item} className="rounded-full border border-white/50 px-8 py-2 md:py-2.5 text-[10px] sm:text-[11px] font-normal tracking-[0.15em] uppercase inline-block opacity-90 mb-10 md:mb-12">
            ABOUT US
          </motion.span>
          
          <motion.h2 variants={item} className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-normal tracking-tighter leading-[0.95] mb-10 md:mb-14 uppercase whitespace-pre-wrap">
            {headline}
          </motion.h2>
          
          <motion.p variants={item} className="text-sm md:text-[15px] lg:text-[17px] text-white/90 mb-12 max-w-[850px] font-light leading-[1.6]">
            {paragraph}
          </motion.p>
          
          <motion.div variants={item}>
            <button className="text-[11px] md:text-[12px] font-medium tracking-[0.15em] uppercase hover:opacity-50 transition-opacity flex items-center gap-[2px]">
              READ MORE
              <ArrowUpRight className="w-4 h-4 md:w-[18px] md:h-[18px] stroke-[1.5]" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
