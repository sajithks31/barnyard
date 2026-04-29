"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";
import Marquee from "@/components/Marquee";
import NoiseOverlay from "@/components/NoiseOverlay";
import HeroArcs from "@/components/HeroArcs";

const marqueeImages = [
  "https://images.unsplash.com/photo-1542204113-e93847e21a4d?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1492691523567-69750d18a05e?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1524169358666-79f22534bc6e?auto=format&fit=crop&q=80&w=1000",
];

const missionItems = [
  {
    title: "VISION",
    description: "At Barnyard Productions, our vision is to become a leading force in multimedia storytelling by shaping the future of visual content across the region and beyond. We aim to set new standards in media production by blending artistic expression with cutting-edge technology, creating experiences that inspire and leave a lasting impact.",
    color: "bg-white",
    textColor: "text-black"
  },
  {
    title: "MISSION",
    description: "We empower bold ideas by transforming them into powerful visual stories that connect with audiences globally. We craft high-quality content across film, advertising, and digital platforms with cinematic precision and creative innovation. As a trusted creative partner, we guide brands and creators from concept to completion, delivering excellence in every frame.",
    color: "bg-white",
    textColor: "text-black"
  }
];

const philosophyItems = [
  {
    id: "01",
    title: "STORY FIRST, ALWAYS",
    content: "We believe that every project, regardless of its scale, must be rooted in a compelling narrative. Our process starts with finding the heart of the story, ensuring that every visual element serves a purpose and resonates with the audience on a deeper level."
  },
  {
    id: "02",
    title: "DETAILS MAKE THE DIFFERENCE",
    content: "Precision in planning and execution is what transforms good work into exceptional work. We obsess over the micro-details of cinematography, lighting, and sound to ensure a flawless final output."
  },
  {
    id: "03",
    title: "COLLABORATION FUELS CREATIVITY",
    content: "We view our clients as partners. Through open communication, strategic insight, and shared vision, we achieve results that exceed expectations. Our collaborative process ensures that every stakeholder is aligned."
  },
  {
    id: "04",
    title: "CREATE WITH IMPACT",
    content: "Our goal is not just to create content, but to leave a lasting impression. We build visual experiences that provoke thought, evoke emotion, and drive engagement."
  }
];

export default function AboutPage() {
  const [openPhilosophy, setOpenPhilosophy] = useState<string | null>("02");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="text-white selection:bg-white selection:text-black min-h-screen relative">
      <NoiseOverlay />
      
      {/* Universal Background for the whole page scroll (Fixed) */}
      {isMounted && (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Base Background (Consistent with global dark theme) */}
          <div className="absolute inset-0 bg-[#020205]" />
          
          {/* The main video background with coverage */}
          <div className="absolute inset-0 opacity-40">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/offering-end.mp4" type="video/mp4" />
            </video>
          </div>
          
          {/* Atmospheric Glows (Fixed while scrolling for depth) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,_rgba(227,30,36,0.1)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,_rgba(0,100,255,0.08)_0%,_transparent_60%)]" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}

      {/* Hero Title Section */}
      <section className="px-6 md:px-16 lg:px-24 pt-48 pb-32 mb-0 relative overflow-hidden min-h-[90vh] flex items-center justify-center z-10">
        {/* Background Overlays */}
        <div className="absolute inset-0 z-0">
          <HeroArcs />
        </div>
        
        <div className="max-w-[1440px] mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left gap-12 w-full"
          >
            <h1 className="text-6xl sm:text-7xl md:text-9xl lg:text-[10vw] font-bold tracking-tighter uppercase leading-[0.8] mb-12">
              ABOUT<br />BARNYARD<br />PRODUCTIONS
            </h1>

            {/* Full-width Image Slider */}
            <div className="w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
              <Marquee images={marqueeImages} speed={40} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections (Flowing over the fixed background) */}
      <div className="relative z-10 isolate">
        {/* Soft transition from Hero background (black-ish) to video background */}
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#020205] to-transparent pointer-events-none z-10" />
        
        {/* Video Background CTA / Banner */}
        <section className="px-6 md:px-12 lg:px-24 mb-24 pt-48 relative z-20">
          <div className="max-w-[1440px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col items-center justify-center text-center p-8 md:p-12 mb-12"
            >
              {/* Centered Content */}
              <div className="relative z-20 flex flex-col items-center gap-10">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase leading-[1.05] max-w-[12ch]">
                  OFFERING END-TO-END MEDIA SOLUTIONS TAILORED JUST FOR YOU
                </h2>
              </div>
            </motion.div>

            {/* Narrative Text Centered Below */}
            <div className="mt-24 max-w-4xl mx-auto text-center px-4">
              <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed opacity-60">
                Barnyard Productions is a UAE-based creative media company specializing in high-quality video production, advertising, and multimedia content. From concept to creation, we bring stories to life through bold visuals, cinematic storytelling, and strategic messaging. Whether it's commercials, branded content, corporate films, or digital media, our team blends creativity with technical expertise to deliver impactful results.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission Cards (White) */}
        <section className="px-6 md:px-12 lg:px-24 mb-32 md:mb-48">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {missionItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`${item.color} ${item.textColor} p-12 lg:pt-32 lg:pb-24 lg:px-20 rounded-[32px] flex flex-col items-center text-center min-h-[550px] shadow-2xl relative overflow-hidden border border-black/5`}
              >
                <div className="inline-flex items-center gap-2 px-8 py-2.5 rounded-full border border-black/10 text-[11px] font-bold tracking-[0.2em] uppercase mb-20 whitespace-nowrap">
                  {item.title}
                </div>
                
                <p className="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed opacity-80 max-w-[90%]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Creative Philosophy Section */}
        <section className="px-6 md:px-12 lg:px-24 pb-32">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Left Side: Title */}
              <div className="lg:col-span-5 flex flex-col gap-6 pt-10">
                <h2 className="text-6xl md:text-7xl lg:text-[5.5vw] font-bold tracking-tighter uppercase leading-[0.85] break-words">
                  OUR<br />CREATIVE<br />PHILOSOPHY
                </h2>
              </div>

              {/* Right Side: Accordion */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                {philosophyItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-white/95 backdrop-blur-sm rounded-[40px] overflow-hidden cursor-pointer shadow-sm group border border-black/5"
                    onClick={() => setOpenPhilosophy(openPhilosophy === item.id ? null : item.id)}
                  >
                    <div className="flex items-center justify-between p-8 md:p-10">
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-black">
                        {item.title}
                      </h3>
                      <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#E31E24] shadow-lg transition-transform duration-300 group-hover:scale-110">
                        {openPhilosophy === item.id ? (
                          <Minus className="w-6 h-6 text-white" strokeWidth={3} />
                        ) : (
                          <Plus className="w-6 h-6 text-white" strokeWidth={3} />
                        )}
                      </div>
                    </div>
                    
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: openPhilosophy === item.id ? "auto" : 0, 
                        opacity: openPhilosophy === item.id ? 1 : 0 
                      }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-10 md:px-10 md:pb-12 text-black/60 text-lg leading-relaxed max-w-xl">
                        {item.content}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
